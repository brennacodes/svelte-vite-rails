class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users, id: :uuid do |t|
      t.integer :role
      t.string :email
      t.string :password_digest
      t.uuid :user_token
      t.timestamp :last_login

      t.timestamps
    end
  end
end
