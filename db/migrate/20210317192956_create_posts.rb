class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
