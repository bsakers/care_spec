class EdVisit < ApplicationRecord
  belongs_to :patient

  validates_presence_of :patient_id, :hospital, :ed_visit_date
end
