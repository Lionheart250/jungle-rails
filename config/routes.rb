Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  get 'users/new'
  get 'users/create'
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  
  get '/logout', to: 'sessions#destroy'
  root to: 'products#index'

  resources :products, only: [:index, :show]
  resources :categories, only: [:show]

  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy]

  resource :cart, only: [:show] do
    post :add_item
    post :remove_item
  end

  resources :orders, only: [:create, :show]

  namespace :admin do
    root to: 'dashboard#show'
    resources :products, except: [:edit, :update, :show]
    resources :categories, only: [:index, :new, :create]
  end

  # Add the About Us route
  get '/about', to: 'about#index', as: 'about'
end
