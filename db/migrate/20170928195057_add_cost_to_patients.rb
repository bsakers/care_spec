class AddCostToPatients < ActiveRecord::Migration[5.1]
  def change
    add_column :patients, :cost, :integer
  end
end
