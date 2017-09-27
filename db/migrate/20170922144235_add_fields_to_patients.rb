class AddFieldsToPatients < ActiveRecord::Migration[5.1]
  def change
    add_column :patients, :race, :string, null: false
    add_column :patients, :insurance, :string, null: false
    add_column :patients, :home_address, :string, null: false
  end
end
