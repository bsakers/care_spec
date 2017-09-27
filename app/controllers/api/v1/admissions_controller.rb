class Api::V1::AdmissionsController < ApiController
  def index
  end

  def show
    admission= Admission.find(params[:id])
    procedures= admission.procedures
    admission_data={
      admission: admission,
      procedures: procedures
    }
    render json: admission_data
  end

end
