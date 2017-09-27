class CreateAdmissionProcedures < ActiveRecord::Migration[5.1]
  def change
    create_table :admission_procedures do |t|
      t.integer :admission_id, null: false
      t.integer :procedure_id, null: false

      t.timestamps
    end
  end
end
