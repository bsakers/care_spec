class Api::V1::PatientsController < ApiController
  def index
    patients= Patient.all
    render json: patients
  end

  def show
    patient= Patient.find(params[:id])
    admissions= patient.admissions
    ed_visits= patient.ed_visits
    patient_data={
      patient: patient,
      admissions: admissions,
      ed_visits: ed_visits
    }
    render json: patient_data
  end

end
