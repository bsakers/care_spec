class EdVisit < ApplicationRecord
  belongs_to :patient
  has_many :ed_procedures
  has_many :procedures, through: :ed_procedures

  validates_presence_of :patient_id, :hospital, :ed_visit_date
end
