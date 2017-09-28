# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'httparty'

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
    race: ["American Indian", "Asian", "African American", "Hispanic/Latino", "Caucasian"].sample,
    insurance: ["Medicaid", "Medicare", "UnitedHealth", "Humana", "Aetna", "Kaiser"].sample,
    home_address: "#{rand(2..2800)}, Philadelphia, PA"
  }
  Patient.create(patient_params)
end


Patient.all.each do |patient|
  if patient.address_lat.nil? || patient.lng.nil?
    address=patient.home_address.gsub(/\s+/, "+")
    coordinates=HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{address}&key=AIzaSyCurjt-cN715NnmWczzEaR80om60qg7XjM")
    patient.update_attributes({ address_lat: coordinates['results'][0]['geometry']['location']['lat'], address_lng: coordinates['results'][0]['geometry']['location']['lng'] })
  end
end




# 39.94291 -39.944489 lat
# -75.165024-  -75.163307 long





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

["Upper GI endoscopy", "Cataract surgery", "Colonoscopy", "Lesion removal",
"Lumbar puncture", "Spinal fusion", "Knee replacement", "Hip replacement",
"Caesarean section", "Heart valve procedure", "Appendectomy", "hysterectomy",
"Coronary artery bypass graft", "MRI Scan", "CAT scan", "Arthroscopy", "Mammogram",
"Echocardiogram", "Sleep Study", "Flu Shot"].each do|procedure|
  Procedure.create(name: procedure, cost: rand(200..5000))
end

200.times do
  procedure_params = {
    procedure_id: Procedure.all.ids.sample,
    admission_id: Admission.all.ids.sample
  }
  AdmissionProcedure.create(procedure_params)
end

150.times do
  procedure_params = {
    procedure_id: Procedure.all.ids.sample,
    ed_visit_id: Admission.all.ids.sample
  }
  EdProcedure.create(procedure_params)
end
