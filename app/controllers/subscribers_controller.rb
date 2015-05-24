class SubscribersController < ApplicationController
  
  def new
    @subscriber = Subscriber.new

 end

  def create
      @subscriber = Subscriber.new(subscriber_params)

    if Subscriber.exists? email: @subscriber.email
    p "exists"

    elsif @subscriber.valid?
      @subscriber.save 


      # Sends email to user when user is created.
      ExampleMailer.sample_email(@subscriber).deliver_now
      
      else
        p "notvalid"
         format.js { render :text => e.message, :status => 403 }
      end
    # redirect_to root_path
      
  end
  def subscriber_params
     params.require(:subscriber).permit(:email)
  end
end
