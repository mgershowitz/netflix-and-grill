Rails.application.routes.draw do

  root 'welcome#index'
  resources :bbq
  resources :shows
  get '/bbqueue' => 'bbqueue#index'
  get '/grills' => 'grills#index'
  get '/shows' => 'shows#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
