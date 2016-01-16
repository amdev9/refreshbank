Rails.application.routes.draw do
 # match 'debitcards/:id', constraints: { id: /(29[0-3]|2[0-8][0-9]|1[0-9]{2}|[1-9][0-9]?)/ }, :to => redirect('/debitcards')
 # match 'creditcards/:id', constraints: { id: /([3-9][0-9]{2}|2[5-9][0-9]|24[2-9])/ }, :to => redirect('/creditcards')
 # match 'microcredits/:id', constraints: { id: /([4-9][0-9]|3[6-9])/ }, :to => redirect('/microcredits')
   

  resources :microcredits  , :only => [:index, :show] 
   resources :creditcards , :only => [:index, :show]
    resources :debitcards , :only => [:index, :show]

    root :to => "microcredits#index"

   post 'microcredits/:id/subscribers/create' => 'subscribers#create' , as: :subscribers
  post 'creditcards/:id/subscribers/create' => 'subscribers#create' 
   post 'debitcards/:id/subscribers/create' => 'subscribers#create' 
 

    # get 'sitemap' => 'creditcards#sitemap'

    
   # ,  :path => '/'
  # :only => [:index, :show],
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
