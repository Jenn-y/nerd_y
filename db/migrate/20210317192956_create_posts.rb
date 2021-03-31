class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.integer :status, default: 0
      t.text "main_image", default: "https://via.placeholder.com/900x350"
      t.text "thumb_image", default: "https://via.placeholder.com/250x150"

      t.timestamps
    end
  end
end
