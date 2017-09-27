require 'rails_helper'

RSpec.describe EdProcedure, type: :model do
  describe EdProcedure do
    # it { should belong_to :diagnosis }
    # it { should belong_to :patient }

    it { should have_valid(:procedure).when(Procedure.new) }
    it { should_not have_valid(:procedure).when(nil) }

    it { should have_valid(:ed_visit).when(EdVisit.new) }
    it { should_not have_valid(:ed_visit).when(nil) }
  end
end
