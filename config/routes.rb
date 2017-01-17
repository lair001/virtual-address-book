Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	root 'visitor#index'

	resources :sessions, only: [:create, :destroy]
	resources :users, only: [:create, :update, :show, :destroy]
	resources :contacts, only: [:create, :update, :destroy]
end
