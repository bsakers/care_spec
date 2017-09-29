class Api::V1::DiagnosesChartController < ApiController
  def index


    patients= Patient.all
    patients_sorted = patients.sort_by { |k| k[:cost] }.reverse
    diagnoses= Diagnosis.all

    data_all=[]
    diagnoses.each do |diagnosis|
      data_all << {
        key: diagnosis.name,
        value: diagnosis.patients.length
      }
    end
    data_all.sort_by! { |k| k[:value] }.reverse!



    patients_fifty_percent= patients_sorted[0..49]
    data_fifty_percent =[]
    diagnoses.each do |diagnosis|
      count= 0
      patients_fifty_percent.each do |patient|
        if patient.diagnoses.include?(diagnosis)
          count +=1
        end
      end
      data_fifty_percent << {key: diagnosis.name, value: count}
    end
    data_fifty_percent.sort_by! { |k| k[:value] }.reverse!

    patients_ten_percent= patients_sorted[0..9]
    data_ten_percent =[]
    diagnoses.each do |diagnosis|
      count= 0
      patients_ten_percent.each do |patient|
        if patient.diagnoses.include?(diagnosis)
          count +=1
        end
      end
      data_ten_percent << {key: diagnosis.name, value: count}
    end
    data_ten_percent.sort_by! { |k| k[:value] }.reverse!

    patients_five_percent= patients_sorted[0..9]
    data_five_percent =[]
    diagnoses.each do |diagnosis|
      count= 0
      patients_five_percent.each do |patient|
        if patient.diagnoses.include?(diagnosis)
          count +=1
        end
      end
      data_five_percent << {key: diagnosis.name, value: count}
    end
    data_five_percent.sort_by! { |k| k[:value] }.reverse!

    data = {
      patient_count: patients.length,
      all: data_all,
      fifty_percent: data_fifty_percent,
      ten_percent: data_ten_percent,
      five_percent: data_five_percent
    }

    render json: data
  end

end
