require 'rails_helper'

RSpec.describe Procedure, type: :model do
  describe Procedure do

    it { should have_valid(:name).when("Heart Transplant") }
    it { should_not have_valid(:name).when(nil, "") }

    it { should have_valid(:cost).when(100) }
    it { should_not have_valid(:cost).when(nil, "", "one hundred") }
  end
end
