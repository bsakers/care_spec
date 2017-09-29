class Patient < ApplicationRecord
  has_many :admissions
  has_many :ed_visits
  has_many :patient_diagnoses
  has_many :diagnoses, through: :patient_diagnoses

  validates_presence_of :first_name, :middle_name, :last_name, :home_address, :race, :insurance
  validates :sex, inclusion: { in: ["Male", "Female"] }
  validates :age, numericality: true

  Patient.all.each do |patient|
    if patient.cost.nil?
      patient_cost=0
      patient.admissions.each do|admission|
        admission_cost= 0
        admission.procedures.each do |procedure|
          admission_cost += procedure.cost
        end
        patient_cost += admission_cost
      end
      patient.ed_visits.each do|ed_visit|
        visit_cost= 0
        ed_visit.procedures.each do |procedure|
          visit_cost += procedure.cost
        end
        patient_cost += visit_cost
      end
      patient.update_attributes({ cost: patient_cost })
    end
  end
end
