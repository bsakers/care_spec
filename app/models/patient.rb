class Patient < ApplicationRecord
  validates_presence_of :first_name, :middle_name, :last_name
  validates :sex, inclusion: { in: ["Male", "Female"] }
  validates :age, numericality: true

end
