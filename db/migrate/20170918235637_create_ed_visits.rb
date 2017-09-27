class CreateEdVisits < ActiveRecord::Migration[5.1]
  def change
    create_table :ed_visits do |t|
      t.integer :patient_id, null: false
      t.string :hospital, null: false
      t.string :ed_visit_date, null: false

      t.timestamps
    end
  end
end
