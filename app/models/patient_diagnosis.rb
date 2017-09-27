class PatientDiagnosis < ApplicationRecord
  belongs_to :diagnosis
  belongs_to :patient

  validates_presence_of :patient_id, :diagnosis_id
end
