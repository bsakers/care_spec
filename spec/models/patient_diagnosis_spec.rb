require 'rails_helper'

RSpec.describe PatientDiagnosis, type: :model do
  describe PatientDiagnosis do
    # it { should belong_to :diagnosis }
    # it { should belong_to :patient }

    it { should have_valid(:patient).when(Patient.new) }
    it { should_not have_valid(:patient).when(nil) }

    it { should have_valid(:diagnosis).when(Diagnosis.new) }
    it { should_not have_valid(:diagnosis).when(nil) }
  end
end
