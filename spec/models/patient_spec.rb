require 'rails_helper'

RSpec.describe Patient, type: :model do
  describe Patient do
    it {should have_valid(:first_name).when("Dude")}
    it {should_not have_valid(:first_name).when(nil, "")}

    it { should have_valid(:middle_name).when("whoknows")}
    it { should_not have_valid(:middle_name).when(nil, "")}

    it {should have_valid(:last_name).when("lebowsky")}
    it { should_not have_valid(:last_name).when(nil, "")}

    it {should have_valid(:age).when(1)}
    it {should_not have_valid(:age).when(nil, "", "hello")}

    it {should have_valid(:sex).when("Female", "Male")}
    it {should_not have_valid(:sex).when(nil, "", "hello")}
  end
end
