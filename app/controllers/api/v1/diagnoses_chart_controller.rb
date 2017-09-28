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

    data={
      patient_count: patient_count,
      patient_diagnoses_count: patient_diagnoses_count,
      diagnoses_data: diagnoses_data
    }

    # diagnoses= Diagnosis.all
    # patients_fifty_percent= Patient.all[0..49]
    # data_fifty_percent =[]
    # diagnoses.each do |diagnosis|
    #   count= 0
    #   patients_fifty_percent.each do |patient|
    #     if patient.diagnoses.include?(diagnosis)
    #       count +=1
    #     end
    #   end
    #   data_fifty_percent << {key: diagnosis.name, value: count}
    # end
    #
    # patients_fifty_percent= Patient.all[0..49]
    # data_fifty_percent =[]
    # diagnoses.each do |diagnosis|
    #   count= 0
    #   patients_fifty_percent.each do |patient|
    #     if patient.diagnoses.include?(diagnosis)
    #       count +=1
    #     end
    #   end
    #   data_fifty_percent << {key: diagnosis.name, value: count}
    # end

    render json: data
  end

end
