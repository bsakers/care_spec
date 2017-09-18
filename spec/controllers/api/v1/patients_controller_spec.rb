require 'spec_helper'
require 'rails_helper'

RSpec.describe Api::V1::PatientsController, type: :controller do
  let!(:first_patient) { Patient.create(first_name: "Rick", middle_name: "Unknown", last_name: "Riley", age: "52", sex: "Male") }
  let!(:second_patient) { Patient.create(first_name: "Doode", middle_name: "The", last_name: "Lebowsky", age: "41", sex: "Male") }

  describe "GET#index" do
    it "should return a list of all the patients" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2
      expect(returned_json).to be_kind_of(Array)

      expect(returned_json[0]["first_name"]).to eq "Rick"
      expect(returned_json[0]["age"]).to eq 52

      expect(returned_json[1]["first_name"]).to eq "Doode"
      expect(returned_json[1]["age"]).to eq 41
    end
  end

  # describe "GET#show" do
  #   it "should return a single cereal" do
  #
  #     get :show, id: first_cereal.id
  #     returned_json = JSON.parse(response.body)
  #
  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq("application/json")
  #
  #     expect(returned_json.length).to eq 5
  #     expect(returned_json).to be_kind_of(Hash)
  #
  #     expect(returned_json["name"]).to eq "Rick"
  #     expect(returned_json['description']).to eq "Rick and Morty is based on Doc and Morty"
  #   end
  # end
end
