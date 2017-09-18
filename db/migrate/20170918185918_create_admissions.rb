class CreateAdmissions < ActiveRecord::Migration[5.1]
  def change
    create_table :admissions do |t|
      t.integer :patient_id, null: false
      t.string :hospital, null: false
      t.integer :length_of_stay, null: false
      t.string :admission_date, null: false

      t.timestamps
    end
  end
end
