class Post < ApplicationRecord
  enum status: { draft: 0, published: 1}

  validates :title, presence: true, uniqueness: true
  validates :description, presence: true
end