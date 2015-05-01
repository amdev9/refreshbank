require 'rubygems'
#require 'nokogiri'
require 'open-uri'

 require 'mechanize'

 agent = Mechanize.new

##BANKI RU
   # page = agent.get("http://www.banki.ru/products/creditcards/search/") 

number = 1
while number < 14
  string = "http://www.banki.ru/products/creditcards/search/?page=" + number.to_s
  page = agent.get(string) 
  
############## ---------IMAGES---------- 

  agent.page.search("#search-result img").each do |image|
   image_name = image.attributes['src'] 
    bettername =  image_name.to_s.scan(/.*\/(.*).png/)[0][0]
     
     # image name should be added to array
    puts "images/#{bettername}.png" 
    # SAVE
   #agent.get( image_name ).save "images/#{bettername}.png" 
     end

   page = agent.get(string) 

#-------------------
# clicked = page.links_with(:href => %r{/products/creditcards/card/} ).first.click


   # page.links_with(:href => %r{/products/creditcards/card/} ).each do |link|
 		# if link.text.strip != ''
 	
 	 # clicked = link.click
	
  # #age =  clicked.search(".tabs__content--frame.js-tabs-view-item .js-tab-section-title+ .standard-table--list .markup-inside--orange").map(&:text).map(&:strip)[0].gsub(/\s+/, " ") 
	# #srok =  clicked.search("tr:nth-child(1) .text-list--orange li").map(&:text).map(&:strip)[0].gsub(/\s+/, " ")


# ##hzhaz-------------------1111111111111
# minimalpay =  clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(5) td").map(&:text).map(&:strip)[0].gsub(/\s+/, " ")
 
# puts  minimalpay.scan(/(.*)%/)[0][0].gsub(/\D/, '') 


#000000000000--------подтверждение дохода через / хзхз
#   approvedoks = clicked.search(".tabs__content--frame+ .js-tabs-view-item td > .text-list--orange").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ")

# puts approvedoks


#########000000000000000 Тип карты visa  и прочее
# cardtype = clicked.search("tr:nth-child(1) .text-list--orange").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ")

# puts cardtype

# 11111111111#######----------___CASHBACK___-------------------

# cashbackflag = clicked.search(".is-center+ .ui-columns__column").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ").include? "cash back"

#       puts cashbackflag

# #{minimalpay}  ~~  #{approvedoks} ~~
#  #     #    #{number} {link.href} -> #{link.text.strip} - #{age} ~~ #{srok}

#  	end



# 2222222222#######----------___INTEREST BALANSE___-------------------

  # allchar = clicked.search(".is-center+ .ui-columns__column").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ").include? "начисление процентов на остаток"
   
  #     puts allchar
     


   # end

 # end
#-----------------


#33333333#Название самой карты

  agent.page.search(".font-bold").each do |item|
  puts item.text.strip
  end


# #4444444#Ставка
# agent.page.search(".position-relative+ td").each do |item|
# 	puts item.text.strip
# end

#5555555#Кредитный лимит
# agent.page.search("td:nth-child(3)").each do |item|
#   puts item.text.strip
# end

#6666666#Льготный период
# agent.page.search("td:nth-child(4)").each do |item|
#   puts item.text.strip
# end

#77777777#Название банка :bank
# agent.page.search(".color-gray-burn").each do |item|
#   puts item.text.strip
# end


 





#-------------

 number = number+1

 
end
#---------------


 #  page.links_with(:href => %r{/products/creditcards/card/} ).each do |link|
 
 #   puts link.href
 # end


#agent.page.search(".tabs__content--frame.js-tabs-view-item .js-tab-section-title+ .standard-table--list .markup-inside--orange") 



##SRAVNI RU   --- HZ kak
 #   page = agent.get("http://www.sravni.ru/karty/") 


 # agent.page.search(".results__item__info")

 # # page.links_with(:href => %r{/bank/} ).each do |link|
 # #   puts link.href
 # # end







#   each do |asd|
# puts asd.text.strip
# end



	  # agent.page.link_with(:class => ".font-bold")


	  # search(".font-bold").links
 

# page.links.each do |link|

# 	puts link.text.strip
# end




# #url = 'http://en.wikipedia.org/wiki/HTML'
#  url = "http://www.banki.ru/products/creditcards/search/"
# doc = Nokogiri::HTML(open(url))
# puts doc.at_css("title").text
# # doc.css(".td").each do |item|

#  puts doc.css('.position-relative+ td , .font-bold').size

# doc.css('.font-bold').each do |el|
#    puts el.text.strip
#  end

#  doc.css('.position-relative+ td').each do |el|
#    puts el.text.strip
#  end
 

 
