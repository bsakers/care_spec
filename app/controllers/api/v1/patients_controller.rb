class Api::V1::PatientsController < ApiController
  def index
    patients= Patient.all
    render json: patients
  end

  def show
    patient= Patient.find(params[:id])
    admissions = patient.admissions
    patientData={
      patient: patient,
      admissions: admissions
    }
    render json: patientData
  end

end
