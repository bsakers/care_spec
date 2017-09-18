Rails.application.routes.draw do
  root 'static_pages#index'

  resources :patients


  namespace :api do
    namespace :v1 do
      resources :patients
    end
  end
end
