require 'rails_helper'

RSpec.describe Admission, type: :model do
  describe Admission do
    it {should have_valid(:hospital).when("Cooper")}
    it {should_not have_valid(:hospital).when(nil, "")}

    it { should have_valid(:length_of_stay).when(2)}
    it { should_not have_valid(:length_of_stay).when(nil, "", "hello")}

    it { should have_valid(:admission_date).when("August 4th, 2017")}
    it { should_not have_valid(:admission_date).when(nil, "")}
  end
end
