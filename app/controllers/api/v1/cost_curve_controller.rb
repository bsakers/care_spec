class Api::V1::CostCurveController < ApiController
  def index
    patients= Patient.all
    costs_array=[]
    total_cost=0
    patients.each do |patient|
      patient_cost=0
      patient.admissions.each do|admission|
        admission_cost= 0
        admission.procedures.each do |procedure|
          admission_cost += procedure.cost
        end
        patient_cost += admission_cost
      end
      patient.ed_visits.each do|ed_visit|
        visit_cost= 0
        ed_visit.procedures.each do |procedure|
          visit_cost += procedure.cost
        end
        patient_cost += visit_cost
      end
      total_cost+= patient_cost
      costs_array << patient_cost
    end


    costs_array.sort!.reverse!
    patients_array=[]
    cum_cost=0
    costs_array.each_with_index do |cost, index|
      cum_cost += cost
      relative_cost = cum_cost.to_f/total_cost.to_f * 100
      patients_array << {
        x: index +1,
        y: relative_cost
      }
    end


    render json: patients_array
  end


end
