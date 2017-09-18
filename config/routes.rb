Rails.application.routes.draw do
  root 'patients#index'

  resources :patients


  namespace :api do
    namespace :v1 do
      resources :patients
    end
  end
end
