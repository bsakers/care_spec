class CreateEdProcedures < ActiveRecord::Migration[5.1]
  def change
    create_table :ed_procedures do |t|
      t.integer :ed_visit_id, null: false
      t.integer :procedure_id, null: false

      t.timestamps
    end
  end
end
