class Api::V1::EdVisitsController < ApiController
  def index
  end

  def show
    ed_visit= EdVisit.find(params[:id])
    procedures= ed_visit.procedures
    ed_visit_data={
      ed_visit: ed_visit,
      procedures: procedures
    }
    render json: ed_visit_data
  end

end
