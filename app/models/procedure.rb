class Procedure < ApplicationRecord
  has_many :admission_procedures
  has_many :ed_procedures
  has_many :admissions, through: :admission_procedures
  has_many :ed_visits, through: :ed_procedures

  validates_presence_of :name
  validates :cost, numericality: true
end
