class EdProcedure < ApplicationRecord
  belongs_to :ed_visit
  belongs_to :procedure

  validates_presence_of :ed_visit_id, :procedure_id
end
