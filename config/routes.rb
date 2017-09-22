Rails.application.routes.draw do
  root 'patients#index'

  resources :patients, :admissions


  namespace :api do
    namespace :v1 do
      resources :patients, :admissions
    end
  end
end
