class Api::V1::MapController < ApiController
  def index
    patients= Patient.all
    patients_sorted = patients.sort_by { |k| k[:cost] }.reverse
    data=[]
    patients_sorted.each do |patient|
      data << { lat: patient.address_lat, lng: patient.address_lng}
    end

    render json: data
  end
end
