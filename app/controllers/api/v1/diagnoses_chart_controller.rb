class Api::V1::DiagnosesChartController < ApiController
  def index
    patient_count = Patient.all.length
    patient_diagnoses_count= PatientDiagnosis.all.length
    diagnoses = Diagnosis.all
    diagnoses_data= []

    diagnoses.each do |diagnosis|
      diagnoses_data << {
        key: diagnosis.name,
        value: diagnosis.patients.length
      }
    end
    diagnoses_data.sort_by! { |k| k[:value] }.reverse!
    # top_ten_diagnoses = diagnoses_data[0..9]
    data={
      patient_count: patient_count,
      patient_diagnoses_count: patient_diagnoses_count,
      diagnoses_data: diagnoses_data
    }

    render json: data
  end

end
