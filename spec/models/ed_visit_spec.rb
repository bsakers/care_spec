require 'rails_helper'

RSpec.describe EdVisit, type: :model do
  describe EdVisit do
    it {should have_valid(:hospital).when("Lordes")}
    it {should_not have_valid(:hospital).when(nil, "")}

    it { should have_valid(:ed_visit_date).when("March 5, 2017")}
    it { should_not have_valid(:ed_visit_date).when(nil, "")}
  end
end
