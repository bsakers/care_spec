class AddCoordinatesToPatients < ActiveRecord::Migration[5.1]
  def change
    add_column :patients, :address_lat, :float
    add_column :patients, :address_lng, :float
  end
end
