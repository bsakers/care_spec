# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Patient.destroy_all
Admission.destroy_all
EdVisit.destroy_all

10.times do
  patient_params = {
    first_name: "#{Faker::Name.first_name}",
    middle_name: "#{Faker::Name.first_name}",
    last_name: "#{Faker::Name.last_name}",
    age: rand(99),
    sex: ["Male", "Female"].sample,
  }
  Patient.create(patient_params)
end

20.times do
  admission_params = {
    patient_id: Patient.all.ids.sample,
    hospital: ["Cooper", "Virtua", "Lordes"].sample,
    length_of_stay: rand(5)+1,
    admission_date: "#{Faker::Date.between(1.year.ago, Date.today)}",
  }
  Admission.create(admission_params)
end

30.times do
  visit_params = {
    patient_id: Patient.all.ids.sample,
    hospital: ["Cooper", "Virtua", "Lordes"].sample,
    ed_visit_date: "#{Faker::Date.between(1.year.ago, Date.today)}",
  }
  EdVisit.create(visit_params)
end
