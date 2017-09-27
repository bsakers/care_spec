require 'rails_helper'

RSpec.describe Diagnosis, type: :model do
  describe Diagnosis do
    it {should have_valid(:name).when("COPD")}
    it {should_not have_valid(:name).when(nil, "")}
  end
end
