class Patient < ApplicationRecord
  has_many :admissions
  has_many :ed_visits
  has_many :patient_diagnoses
  has_many :diagnoses, through: :patient_diagnoses

  validates_presence_of :first_name, :middle_name, :last_name, :home_address, :race, :insurance
  validates :sex, inclusion: { in: ["Male", "Female"] }
  validates :age, numericality: true

  @testing=[1, 2, 3]
end
