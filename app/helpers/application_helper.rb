module ApplicationHelper
	def canonical(url)	 
		content_for :canonical, tag(:link, :rel => :canonical, :href => url)  
	end

	def meta_tag(tag, text)
   	 content_for :"meta_#{tag}", text
  	end

    def yield_meta_tag(tag, default_text='')
      content_for?(:"meta_#{tag}") ? content_for(:"meta_#{tag}") : default_text
    end

end
