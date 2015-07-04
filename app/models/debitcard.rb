class Debitcard < ActiveRecord::Base
	 def to_param
    "#{id}-#{typecard.gsub(/\s/, '-')}".to_slug.normalize(transliterations: :russian).to_s 
end

end
