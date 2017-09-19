class Patient < ApplicationRecord
  has_many :admissions
  has_many :ed_visits

  validates_presence_of :first_name, :middle_name, :last_name
  validates :sex, inclusion: { in: ["Male", "Female"] }
  validates :age, numericality: true

end
