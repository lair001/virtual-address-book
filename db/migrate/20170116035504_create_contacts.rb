class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.string :last_name, default: "", null:false
      t.string :first_name, default: "", null:false
      t.string :occupation, default: "", null:false
      t.string :employer, default: "", null:false
      t.string :email, default: "", null:false
      t.string :phone, default: "", null:false
      t.string :address_line_1, default: "", null:false
      t.string :address_line_2, default: "", null:false
      t.string :city, default: "", null:false
      t.string :state, default: "", null:false
      t.string :zip_code, default: "", null:false

      t.timestamps
    end
  end
end
