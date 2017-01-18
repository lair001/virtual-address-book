class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, default: "", null:false
      t.string :email, default: "", null: false
      t.string :password_digest, default: "", null: false
      t.string :security_code, default: "", null: false
      t.integer :role, default: 2, null: false

      t.timestamps
    end
  end
end
