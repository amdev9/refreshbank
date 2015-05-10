class Microcredit < ActiveRecord::Base
	 
	 def to_param
    "#{id}-#{microtype.gsub(/\s/, '-')}".to_slug.normalize(transliterations: :russian).to_s 
  end


end
