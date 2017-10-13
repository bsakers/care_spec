require 'rails_helper'

RSpec.describe AdmissionProcedure, type: :model do
  describe AdmissionProcedure do

    it { should have_valid(:procedure).when(Procedure.new) }
    it { should_not have_valid(:procedure).when(nil) }

    it { should have_valid(:admission).when(Admission.new) }
    it { should_not have_valid(:admission).when(nil) }
  end
end
