class CreateProcedures < ActiveRecord::Migration[5.1]
  def change
    create_table :procedures do |t|
      t.string :name, null: false
      t.integer :cost, null: false

      t.timestamps
    end
  end
end
