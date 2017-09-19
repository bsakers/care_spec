class CreatePatientDiagnoses < ActiveRecord::Migration[5.1]
  def change
    create_table :patient_diagnoses do |t|
      t.integer :patient_id, null: false
      t.integer :diagnosis_id, null: false

      t.timestamps
    end
  end
end
