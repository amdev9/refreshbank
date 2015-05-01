
desc "Import wish list"
task :import_list => :environment do

	# require 'rubygems'
	 
	# require 'open-uri'

	#  require 'mechanize'

	#  agent = Mechanize.new
	 
	#    number = 1
	  
	#    while number < 14
	#  string = "http://www.banki.ru/products/creditcards/search/?page=" + number.to_s
	#    page = agent.get(string)



	#    page.links_with(:href => %r{/products/creditcards/card/} ).each do |link|
	#  		if link.text.strip != ''
	 	

	#  	 #clicked = link.click
	# 	#age =  clicked.search(".tabs__content--frame.js-tabs-view-item .js-tab-section-title+ .standard-table--list .markup-inside--orange").map(&:text).map(&:strip)[0].gsub(/\s+/, " ") 
	# 	#srok =  clicked.search("tr:nth-child(1) .text-list--orange li").map(&:text).map(&:strip)[0].gsub(/\s+/, " ")
	#     # puts "#{link.text.strip}" 

	#      Creditcard.create!(:banktype => link.text.strip)
	#  	end
	#  end
	#  number = number+1
	# end


			require 'rubygems'
		#require 'nokogiri'
		require 'open-uri'

		 require 'mechanize'

		 agent = Mechanize.new

		hash = []
		k = 0
		i = 0
		s = 0 
		l = 0
		c = 0
		n = 0
		t = 0
		global = 0
		##BANKI RU
		   # page = agent.get("http://www.banki.ru/products/creditcards/search/") 

		number = 1
		while number < 2
		  string = "http://www.banki.ru/products/creditcards/search/?page=" + number.to_s
		  page = agent.get(string) 
		  
		############## ---------IMAGES---------- 

		  agent.page.search("#search-result img").each do |image|
		   image_name = image.attributes['src'] 
		    bettername =  image_name.to_s.scan(/.*\/(.*).png/)[0][0]
		     
		     # image name should be added to array

		      hash[k] = { :img => "/img/#{bettername}.png", :id => k}

		     k = k + 1

		   
		    # SAVE
		    agent.get( image_name ).save "public/img/#{bettername}.png" 
		     end

		   page = agent.get(string) 

		#-------------------
		# clicked = page.links_with(:href => %r{/products/creditcards/card/} ).first.click


		    page.links_with(:href => %r{/products/creditcards/card/} ).each do |link|
		  		if link.text.strip != ''
		 	
		  	  clicked = link.click
			  
		agent.page.search(".js-product-design").each do |big|
	   	bigname =  big.attributes['src']
	   	 cleanbig =  bigname.to_s.scan(/.*\/(.*).png/)[0][0]

	   	  hash[t][:bigimg] = "/img/big/#{cleanbig}.png" 

	   	  # puts "/img/big/#{cleanbig}.png" 

	   	 agent.get( bigname ).save "public/img/big/#{cleanbig}.png" 

	   end
	


# .js-tabs-view-item:nth-child(2) tr:nth-child(1) td
description = clicked.search(".js-tabs-view-item .tabs__content--frame td , .js-tabs-view-item .tabs__content--frame th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 
puts description

#need proverka
sms =  clicked.search(".js-tabs-view-item .tabs__content--frame td.markup-inside--orange").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ').include? "плата за СМС"
 
    hash[t][:chetosms] = sms 

	cheto =  clicked.search(".js-tabs-view-item .tabs__content--frame td div:nth-child(1)").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ').include? "не взимается"
 
    hash[t][:cheto] = cheto 



	moneyus =  clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(4) th").map(&:text).map(&:strip)[0]


 moneyus2 =  clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(3) th").map(&:text).map(&:strip)[0]
moneyus3 =  clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(2) th").map(&:text).map(&:strip)[0]


# or 

if moneyus3.include? "Использование собственных средств"
		mon =  clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(2) td").map(&:text).map(&:strip)[0]

	end

	if moneyus.include? "Использование собственных средств"
		mon =  clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(4) td").map(&:text).map(&:strip)[0]

	end

		if moneyus2.include? "Использование собственных средств"
		mon = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(3) td").map(&:text).map(&:strip)[0]

	end

    hash[t][:moneyusage] = mon


 minimal1 =  clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(5) td").map(&:text).map(&:strip)[0]

 unless minimal1.nil?
 	min1 = minimal1.include? "минимальный ежемесячный платеж:"
 	if minimal1.include? "обязательное ежемесячное погашение только начисленных"
 		m = "начисленные проценты"
 	end
 	if min1 == true
 		m = minimal1.scan(/(.*)%/)[0][0].gsub(/\D/, '')  + "%".to_s
 	end
 end


minimal3 =  clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(6) td").map(&:text).map(&:strip)[0] 
 unless minimal3.nil?
 	min3 = minimal3.include? "минимальный ежемесячный платеж:"
 	if minimal3.include? "обязательное ежемесячное погашение только начисленных"
 		m =  "начисленные проценты"
 	end
 	if min3 == true
 		m = minimal3.scan(/(.*)%/)[0][0].gsub(/\D/, '') + "%".to_s
 	end
 end



minimal4 =  clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(14) td").map(&:text).map(&:strip)[0] 
 unless minimal4.nil?
 	min4 = minimal4.include? "минимальный ежемесячный платеж:"
 	if minimal4.include? "обязательное ежемесячное погашение только начисленных"
 		m = "начисленные проценты"
 	end
 	if min4 == true
 		m = minimal4.scan(/(.*)%/)[0][0].gsub(/\D/, '')  + "%".to_s
 	end
 	
 end


 #обязательное ежемесячное погашение только начисленных процентов

  minimal =  clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(11) td").map(&:text).map(&:strip)[0] 
 unless minimal.nil?

 	min = minimal.include? "минимальный ежемесячный платеж:"
 	if minimal.include? "обязательное ежемесячное погашение только начисленных"
 		m = "начисленные проценты"
 	end
 	if min == true
 		m = minimal.scan(/(.*)%/)[0][0].gsub(/\D/, '')  + "%".to_s
 	end
 end

	#puts  "#{m} #{t} == #{number}" #.scan(/(.*)%/)[0][0].gsub(/\D/, '') 

    hash[t][:minimalpay] = m
 
		#000000000000--------подтверждение дохода через / хзхз
		   # approvedoks = clicked.search(".tabs__content--frame+ .js-tabs-view-item td > .text-list--orange").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ")
			  # puts approvedoks
		   # # hash[t][:approveflag] = "#{approvedoks}"

		#########000000000000000 Тип карты visa  и прочее
		   cardtype = clicked.search("tr:nth-child(1) .text-list--orange").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ")
		        hash[t][:cardtype] = "#{cardtype}"
		# # 11111111111#######----------___CASHBACK___-------------------
		 cashbackflag = clicked.search(".is-center+ .ui-columns__column").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ").include? "cash back"
		       hash[t][:cashback] = "#{cashbackflag}"
		# # 2222222222#######----------___INTEREST BALANSE___-------------------
		    allchar = clicked.search(".is-center+ .ui-columns__column").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ").include? "начисление процентов на остаток"
		      hash[t][:interestbalance] = "#{allchar}"
		 

		 puts t

			 t = t + 1
		end
		end


		 page = agent.get(string) 

		###33333333#Название самой карты

		agent.page.search(".font-bold").each do |item|
		 hash[i][:banktype] = "#{item.text.strip}"
		 i = i + 1
		 end

		# #4444444#Ставка
		agent.page.search(".position-relative+ td").each do |item|
			 hash[s][:stavka] = "#{item.text.strip}"
		   s = s+ 1
		end

		#5555555#Кредитный лимит
		agent.page.search("td:nth-child(3)").each do |item|
  	  
  
			if result = item.text.strip.match(/от (.*)&/)
	  	  		hash[l][:creditlimit] = 'от '.to_s + result.captures.join('') 
	   		else 
	   			hash[l][:creditlimit] = "#{item.text.strip}"
			end
   				l = l+ 1
			end

		#6666666#Льготный период
		agent.page.search("td:nth-child(4)").each do |item|
		  	 hash[c][:freeperiod] = "#{item.text.strip}"
		   c = c+ 1
		end

		#77777777#Название банка :bank
		agent.page.search(".color-gray-burn").each do |item|
		   hash[n][:bank] = "#{item.text.strip}"
		   n = n + 1

		end


		 





		#-------------


		page = agent.get(string)
		page.links_with(:href => %r{/products/creditcards/card/} ).each do |link|
			 		if link.text.strip != ''
			 			 
    Creditcard.create!(:freesms => hash[global][:sms] , # free sms table
    	:freemade => hash[global][:cheto] , 			# free vipusk table
    	:moneyusage => hash[global][:moneyusage] ,		# ispolz sobstv sredstv table
    	:categorycard => hash[global][:cardtype], 		# categoria carty	table
    	:minimalpay => hash[global][:minimalpay],
     :image_full => hash[global][:bigimg] ,
      :cashback => hash[global][:cashback] ,			# cashback table
      :stavka => hash[global][:stavka],
       :creditlimit => hash[global][:creditlimit],
        :freeperiod =>  hash[global][:freeperiod],		
        	 :bank => hash[global][:bank] ,				# bank name table
         :banktype => hash[global][:banktype],
    :interestbalance => hash[global][:interestbalance], # procentu na ostatok table
          :image_preview => hash[global][:img] )				#### add free usage
			 	global = global + 1
		end
		end



		 number = number+1
		 
		end

  
end
