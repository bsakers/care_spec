class Api::V1::PatientsController < ApiController
  def index
    patients= Patient.all
    render json: patients
  end

end
