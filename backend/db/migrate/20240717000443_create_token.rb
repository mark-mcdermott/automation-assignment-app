class CreateToken < ActiveRecord::Migration[7.1]
  def change
    create_table :tokens do |t|
      t.string :token_str
      t.boolean :active
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
    add_index :tokens, :token_str
  end
end
