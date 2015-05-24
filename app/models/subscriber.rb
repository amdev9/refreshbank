class Subscriber < ActiveRecord::Base
	validates :email, email_format: {message: "doesnt look like an email address"}
	 
end
