Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'incr', to: 'hello_world#incr'
  get 'decr', to: 'hello_world#decr'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
