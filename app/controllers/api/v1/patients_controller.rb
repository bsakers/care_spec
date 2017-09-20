class Api::V1::PatientsController < ApiController
  def index
    patients= Patient.all


    # patients_all = patients.map do |patient|
    #   {
    #     id: patient.id,
    #     first_name: patient.first_name,
    #     middle_name: patient.middle_name,
    #     age: patient.age,
    #     sex: patient.sex,
    #     admissions: patient.admissions.count,
    #     ed_visits: patient.ed_visits.count,
    #   }
    # end

    patients_all = Patient.all

    patients_utilization= []
    6.times do |i|
      row= []
      6.times do |j|
        row << patients.select{|patient| patient.ed_visits.count == i && patient.admissions.count == j}
      end
      patients_utilization << row
    end

    # patient_data = {
    #   patients_all: patients_all,
    #   patients_utilization: patients_utilization
    # }
    #
    #
    # render json: patient_data

    render json: patients_utilization
  end


  def show
    patient= Patient.find(params[:id])
    admissions= patient.admissions
    ed_visits= patient.ed_visits
    patient_diagnoses= patient.diagnoses
    patient_data={
      patient: patient,
      patient_diagnoses: patient_diagnoses,
      admissions: admissions,
      ed_visits: ed_visits
    }
    render json: patient_data
  end

end
