class Api::V1::MapController < ApiController
  def index
    patients= Patient.all
    data=[]
    patients.each do |patient|
      data << { lat: patient.address_lat, lng: patient.address_lng}
    end

    render json: data
  end
end
