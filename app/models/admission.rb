class Admission < ApplicationRecord
  belongs_to :patient

  validates_presence_of :patient_id, :hospital, :admission_date
  validates :length_of_stay, numericality: true
end
