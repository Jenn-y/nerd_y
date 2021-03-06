Rails.application.routes.draw do
  devise_for :users
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :update, :destroy]
    end
  end
  root 'homepage#index'
  match "*path", to: "homepage#index", via: :all
end
