Rails.application.routes.draw do
  resources :posts
  root 'homepage#index'
end
