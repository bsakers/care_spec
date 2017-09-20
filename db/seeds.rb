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
Diagnosis.destroy_all
PatientDiagnosis.destroy_all

100.times do
  patient_params = {
    first_name: "#{Faker::Name.first_name}",
    middle_name: "#{Faker::Name.first_name}",
    last_name: "#{Faker::Name.last_name}",
    age: rand(99),
    sex: ["Male", "Female"].sample,
  }
  Patient.create(patient_params)
end

100.times do
  admission_params = {
    patient_id: Patient.all.ids.sample,
    hospital: ["Cooper", "Virtua", "Lordes"].sample,
    length_of_stay: rand(5)+1,
    admission_date: "#{Faker::Date.between(1.year.ago, Date.today)}",
  }
  Admission.create(admission_params)
end

100.times do
  visit_params = {
    patient_id: Patient.all.ids.sample,
    hospital: ["Cooper", "Virtua", "Lordes"].sample,
    ed_visit_date: "#{Faker::Date.between(1.year.ago, Date.today)}",
  }
  EdVisit.create(visit_params)
end

["Hypertension", "Hyperlipidemia", "Diabetes", "Back pain", "Anxiety",
"Obesity", "Reflux esophagitis", "Hypothyroidism","Osteoarthritis",
"Fibromyalgia / myositis", "Malaise and fatigue",
"Acute laryngopharyngitis", "Acute maxillary sinusitis",
"Major depressive disorder", "Acute bronchitis", "Asthma",
"Depressive disorder", "Nail fungus", "Coronary atherosclerosis",
"Urinary tract infection"].each do |diagnosis|
  Diagnosis.create(name: "#{diagnosis}")
end

30.times do
  pd_params = {
    patient_id: Patient.all.ids.sample,
    diagnosis_id: Diagnosis.all.ids.sample
  }
  PatientDiagnosis.create(pd_params)
end
