class AdmissionProcedure < ApplicationRecord
  belongs_to :admission
  belongs_to :procedure

  validates_presence_of :admission_id, :procedure_id
end
