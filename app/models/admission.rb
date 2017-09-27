class Admission < ApplicationRecord
  belongs_to :patient
  has_many :admission_procedures
  has_many :procedures, through: :admission_procedures

  validates_presence_of :patient_id, :hospital, :admission_date
  validates :length_of_stay, numericality: true
end
