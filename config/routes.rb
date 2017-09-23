Rails.application.routes.draw do
  root 'patients#index'

  resources :patients, :admissions, :ed_visits


  namespace :api do
    namespace :v1 do
      resources :patients, :admissions, :ed_visits
    end
  end
end
