class Creditcard < ActiveRecord::Base
	 # extend FriendlyId
	# friendly_id :categorycard

	 def to_param
    "#{id}-#{banktype.gsub(/\s/, '-')}".to_slug.normalize(transliterations: :russian).to_s 
  end


end
