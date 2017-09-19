class Diagnosis < ApplicationRecord
  has_many :patient_diagnoses
  has_many :patients, through: :patient_diagnoses

  validates_presence_of :name
end
