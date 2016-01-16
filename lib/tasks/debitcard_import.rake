
desc "Import debitcards"
task :debit => :environment do
	require 'rubygems'
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
	number = 1
	while number < 33
		string = "http://www.banki.ru/products/debitcards/search/?page=" + number.to_s
		page = agent.get(string) 
		agent.page.search("#search-result .font-bold").each do |item|
			hash[l] = { :typecard => item.text.strip,:id => l}
 	  		l = l + 1
 	   	end
 	   	agent.page.search(".color-gray-burn").each do |item|
				hash[c][:bank] =  item.text.strip
				c= c + 1
 	   	end
   
 	   	agent.page.search("#search-result img").each do |image|
 	   		flg = 3
			image_name = image.attributes['src'] 
			  if  image_name.to_s.scan(/.*\/(.*).png/)[0].nil? != true
				flg = 2
			  	bettername = image_name.to_s.scan(/.*\/(.*).png/)[0][0]
			  	 hash[k][:img] = "/img/debit/small/#{bettername}.png"
			  end
			   if  image_name.to_s.scan(/.*\/(.*).jpg/)[0].nil? != true
			   	flg = 1
			  	bettername = image_name.to_s.scan(/.*\/(.*).jpg/)[0][0]
			  	 hash[k][:img] = "/img/debit/small/#{bettername}.jpg"
			  end
			  	 if flg == 3
			  	 	puts "HUI--------------------------------------<"
			  	 end
		 
			k = k + 1
			# SAVE
		    if flg == 2
		     	 agent.get( image_name ).save "public/img/debit/small/#{bettername}.png" 
	    	elsif  flg == 1
	    		  agent.get( image_name ).save "public/img/debit/small/#{bettername}.jpg" 
	    	end
	    end
	    page = agent.get(string) 
		page.links_with(:href => %r{/products/debitcards/card/} ).each do |link|
			if link.text.strip != ''
				clicked = link.click
				agent.page.search(".js-product-design").each do |big|
				   	bigname =  big.attributes['src']
				   	unless bigname.nil?
			  	 	    cleanbig =  bigname.to_s.scan(/.*\/(.*).png|jpg/)[0][0]
			  		    hash[t][:bigimg] = "/img/debit/#{cleanbig}.png"
			  		   # SAVE
			   	 	    agent.get( bigname ).save "public/img/debit/#{cleanbig}.png" 
					end
				end
				description = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
				descriptiontxt = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(2) td").map(&:text).map(&:strip)[0].gsub(/\n/, 'br').gsub(/\s+/, ' ') 
				if description.include? "Технологические особенности"
					 # puts descriptiontxt
					hash[t][:techno] = descriptiontxt.gsub(/(br )+/, '<br>') 
				else 

					hash[t][:techno] =  ""   
				end


  				cardtype = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(1) td").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ")
		        hash[t][:cardtype] = cardtype

 
			yearpay = clicked.search(".js-tabs-view-item .tabs__content--frame div:nth-child(2)").map(&:text).map(&:strip)[0] 
			yearpay2 = clicked.search("tr:nth-child(4) td").map(&:text).map(&:strip)[0] 
			yearpay3 = clicked.search("tr:nth-child(5) td").map(&:text).map(&:strip)[0] 
			yearpay4 = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0] 


				 # 
				 puts t, hash[t][:bank]

				if yearpay.nil? != true and yearpay.include? "год обслуживания"  
			 	yearpay = yearpay.scan(/1-й год обслуживания: ([\d\s\d]+)/)[0][0].gsub(/\s+/, "")
 
					 hash[t][:yearpay] =  yearpay.strip
				elsif yearpay2.include? "год обслуживания"  
				yearpay2 = yearpay2.scan(/1-й год обслуживания: ([\d\s\d]+)/)[0][0].gsub(/\s+/, "")
 
					 hash[t][:yearpay] =  yearpay2.strip
#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				# elsif  yearpay3.nil? != true and yearpay3.include? "год обслуживания"  
				# yearpay3 = yearpay3.scan(/1-й год обслуживания: ([\d\s\d]+)/)[0][0].gsub(/\s+/, "")
 
				# 	 hash[t][:yearpay] =  yearpay3.strip
				elsif yearpay4.include? "год обслуживания"  
				yearpay4 = yearpay4.scan(/1-й год обслуживания: ([\d\s\d]+)/)[0][0].gsub(/\s+/, "")
 
					 hash[t][:yearpay] =  yearpay4.strip
				else

					
				 
					hash[t][:yearpay] =  "не взимается"   
				end


		cashdetail = clicked.search("tr:nth-child(3) th").map(&:text).map(&:strip)[0] 
			cashdetailtxt = clicked.search("tr:nth-child(3) td").map(&:text).map(&:strip)[0] 
					 
				if cashdetail.include? "Cash Back"
			 	  
					 hash[t][:cashdetail] =  cashdetailtxt.strip 
				else 
					hash[t][:cashdetail] =  ""   
				end





				cashback = clicked.search("th").map(&:text).map(&:strip) 
				 # puts cashback
				if cashback.include? "Cash Back"
			 	 
			 	 # puts interestbaltxt
					 hash[t][:cashback] =  true
				else 
					hash[t][:cashback] =  false  
				end



				interestbal0 = clicked.search("tr:nth-child(2) th").map(&:text).map(&:strip)[0] 
				interestbaltxt0 = clicked.search("tr:nth-child(2) td").map(&:text).map(&:strip)[0] 
				
				interestbal = clicked.search("tr:nth-child(3) th").map(&:text).map(&:strip)[0] 
				interestbaltxt = clicked.search("tr:nth-child(3) td").map(&:text).map(&:strip)[0] 
				
				interestbal1 = clicked.search("tr:nth-child(4) th").map(&:text).map(&:strip)[0] 
				interestbaltxt1 = clicked.search("tr:nth-child(4) td").map(&:text).map(&:strip)[0] 
				
				if interestbal1.nil? != true and interestbaltxt1.nil? != true and interestbal1.include? "процентов на остаток"
			 	  # 
			 	  # puts interestbaltxt1
			 	  if interestbaltxt1.nil? != true  and interestbaltxt1 != '' and interestbaltxt1.scan(/(.*)%/).nil?  != true and interestbaltxt1.scan(/(.*)%/)[0].nil? != true
			 	   interestbaltxt1 = interestbaltxt1.scan(/(.*)%/)[0][0].gsub(/[^0-9,.]+/, '').gsub(/[,]/, '.')

			 	   end
			 	 # puts interestbaltxt
					 hash[t][:interestbalance] =  interestbaltxt1.strip 
				elsif interestbal.nil? != true and  interestbal.include? "процентов на остаток"
			 	 
			 	 interestbaltxt = interestbaltxt.scan(/(.*)%/)[0][0].gsub(/[^0-9,.]+/, '').gsub(/[,]/, '.') 
			 	 	 hash[t][:interestbalance] =  interestbaltxt.strip 
			
			elsif interestbal0.nil? != true and  interestbal0.include? "процентов на остаток" 	 
			 	 interestbaltxt0 = interestbaltxt0.scan(/(.*)%/)[0][0].gsub(/[^0-9,.]+/, '').gsub(/[,]/, '.') 
			 	 	 hash[t][:interestbalance] =  interestbaltxt0.strip 
					
				else 
						puts "HUI",t
					hash[t][:interestbalance] =  ""   
				end
puts 	hash[t][:interestbalance]
				cardcategory = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(1) th").map(&:text).map(&:strip)[0] 
				cardcategorytxt = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(1) td").map(&:text).map(&:strip)[0] 
				if cardcategory.include? "Тип карты"
			 	 
			 	  # puts cardcategorytxt
					 hash[t][:cardcategory] =  cardcategorytxt.strip 
				else

					hash[t][:cardcategory] =  ""   
				end
		



				createpaydetail = clicked.search("tr:nth-child(4) th").map(&:text).map(&:strip)[0] 
				createpaydetailtxt = clicked.search("tr:nth-child(4) td").map(&:text).map(&:strip)[0] 

				createpaydetail2 = clicked.search("tr:nth-child(5) th").map(&:text).map(&:strip)[0] 
				createpaydetailtxt2 = clicked.search("tr:nth-child(5) td").map(&:text).map(&:strip)[0] 

createpaydetail3 = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0] 
				createpaydetailtxt3 = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0] 


createpaydetail4 = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0] 
				createpaydetailtxt4 = clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0] 


				createpaydetail5 = clicked.search("tr:nth-child(3) th").map(&:text).map(&:strip)[0] 
				createpaydetailtxt5 = clicked.search("tr:nth-child(3) td").map(&:text).map(&:strip)[0] 


				if createpaydetail.include? "Выпуск и обслуживание"
			 	 
			 	  # puts cardcategorytxt
					 hash[t][:createpaydetail] =  createpaydetailtxt.strip 
				elsif createpaydetail2.include? "Выпуск и обслуживание"
			 	 
			 	  # puts cardcategorytxt
					 hash[t][:createpaydetail] =  createpaydetailtxt2.strip 
					elsif createpaydetail3.nil? != true and createpaydetail3.include? "Выпуск и обслуживание"
			 	 
			 	  # puts cardcategorytxt
					 hash[t][:createpaydetail] =  createpaydetailtxt3.strip 
					elsif createpaydetail4.nil? != true and createpaydetail4.include? "Выпуск и обслуживание"
			 	 
			 	  # puts cardcategorytxt
					 hash[t][:createpaydetail] =  createpaydetailtxt4.strip 
					 	elsif createpaydetail5.include? "Выпуск и обслуживание"
			 	 
			 	  # puts cardcategorytxt
					 hash[t][:createpaydetail] =  createpaydetailtxt5.strip 
				else 
				
					hash[t][:createpaydetail] =  ""   
				end






				# currency = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0] 
				# currencytxt = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0] 
				
				# currency2 = clicked.search("tr:nth-child(4) th").map(&:text).map(&:strip)[0] 
				# currencytxt2 = clicked.search("tr:nth-child(4) td").map(&:text).map(&:strip)[0] 
				
				# currency3 = clicked.search("tr:nth-child(5) th").map(&:text).map(&:strip)[0] 
				# currencytxt3 = clicked.search("tr:nth-child(5) td").map(&:text).map(&:strip)[0]

				# currency4 = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0] 
				# currencytxt4 = clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0]


				# currency5 = clicked.search("tr:nth-child(3) th").map(&:text).map(&:strip)[0] 
				# currencytxt5 = clicked.search("tr:nth-child(3) td").map(&:text).map(&:strip)[0]

				

				# if currency.include? "Выпуск и обслуживание"
			 	 
			 # 	   if currencytxt.include? "руб"
			 	  
				# 	 hash[t][:currency] = "РУБ"
				# 	end
				# elsif currency2.include? "Выпуск и обслуживание"
				# 	 if currencytxt2.include? "руб"
			 	 
				# 	 hash[t][:currency] = "РУБ"
	 
				# 	end
				# elsif currency3.include? "Выпуск и обслуживание"
				# 	 if currencytxt3.include? "руб"
			 	 
				# 	 hash[t][:currency] = "РУБ"
	 
				# 	end
				# elsif currency4.include? "Выпуск и обслуживание"
				# 	 if currencytxt4.include? "руб"
			 	 
				# 	 hash[t][:currency] = "РУБ"
	 
				# 	end

				# 	elsif currency5.include? "Выпуск и обслуживание"
				# 	 if currencytxt5.include? "руб"
			 	 
				# 	 hash[t][:currency] = "РУБ"
	 
				# 	end
				# else

				#  hash[t][:currency] = ""
				# end


			 
				# nalvpvnbank1 = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0] 
				# nalvpvnbanktxt1 = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0] 
					
						nalvpvnbank12 = clicked.search("tr:nth-child(4) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt12 = clicked.search("tr:nth-child(4) td").map(&:text).map(&:strip)[0] 
				
					nalvpvnbank13 = clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt13 = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0] 
			 
			 	nalvpvnbank14 = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt14 = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0] 
				
				nalvpvnbank15 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt15 = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0] 
				
				nalvpvnbank16 = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt16 = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0] 
				




				nalvpvnbank1 = clicked.search("tr:nth-child(5) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt1 = clicked.search("tr:nth-child(5) td").map(&:text).map(&:strip)[0] 
				


				if nalvpvnbank1.include? "Снятие наличных в банкоматах банка"
			 	 hash[t][:nalvpvnbank1] =  nalvpvnbanktxt1.strip 
				elsif nalvpvnbank12.include? "Снятие наличных в банкоматах банка"
			 	 hash[t][:nalvpvnbank1] =  nalvpvnbanktxt12.strip 

elsif nalvpvnbank13.nil? != true and nalvpvnbank13.include? "Снятие наличных в банкоматах банка"
			 	 hash[t][:nalvpvnbank1] =  nalvpvnbanktxt13.strip 

elsif nalvpvnbank14.nil? != true and nalvpvnbank14.include? "Снятие наличных в банкоматах банка"
			 	 hash[t][:nalvpvnbank1] =  nalvpvnbanktxt14.strip 
elsif nalvpvnbank15.nil? != true and nalvpvnbank15.include? "Снятие наличных в банкоматах банка"
			 	 hash[t][:nalvpvnbank1] =  nalvpvnbanktxt15.strip 
elsif nalvpvnbank16.nil? != true and nalvpvnbank16.include? "Снятие наличных в банкоматах банка"
			 	 hash[t][:nalvpvnbank1] =  nalvpvnbanktxt16.strip 

				else 

					hash[t][:nalvpvnbank1] =  ""   
				end


				nalvpvnbank = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0] 
					

						nalvpvnbank2 = clicked.search("tr:nth-child(5) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt2 = clicked.search("tr:nth-child(5) td").map(&:text).map(&:strip)[0] 
				
					nalvpvnbank3 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt3 = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0] 
			 
			 	nalvpvnbank4 = clicked.search("tr:nth-child(11) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt4 = clicked.search("tr:nth-child(11) td").map(&:text).map(&:strip)[0] 
				
				nalvpvnbank5 = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt5 = clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0] 
				
				nalvpvnbank6 = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt6 = clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0] 
				
					nalvpvnbank7= clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0] 
				nalvpvnbanktxt7 = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0] 
				


				if nalvpvnbank.nil? != true and nalvpvnbank.include? "Снятие наличных в ПВН банка"
			 	 hash[t][:nalvpvnbank] =  nalvpvnbanktxt.strip 

				elsif nalvpvnbank2.include? "Снятие наличных в ПВН банка"
			 	 hash[t][:nalvpvnbank] =  nalvpvnbanktxt2.strip 

				elsif nalvpvnbank3.nil? != true and  nalvpvnbank3.nil? != true and nalvpvnbank3.include? "Снятие наличных в ПВН банка"
			 	 hash[t][:nalvpvnbank] =  nalvpvnbanktxt3.strip 
			
			elsif nalvpvnbank4.nil? != true and  nalvpvnbank4.nil? != true and nalvpvnbank4.include? "Снятие наличных в ПВН банка"
			 	 hash[t][:nalvpvnbank] =  nalvpvnbanktxt4.strip 
			

			elsif nalvpvnbank5.nil? != true and  nalvpvnbank5.include? "Снятие наличных в ПВН банка"
			 	 hash[t][:nalvpvnbank] =  nalvpvnbanktxt5.strip 
			
			elsif nalvpvnbank6.nil? != true and  nalvpvnbank6.include? "Снятие наличных в ПВН банка"
			 	 hash[t][:nalvpvnbank] =  nalvpvnbanktxt6.strip 
			
			elsif nalvpvnbank7.nil? != true and  nalvpvnbank7.nil? != true and nalvpvnbank7.include? "Снятие наличных в ПВН банка"
			 	 hash[t][:nalvpvnbank] =  nalvpvnbanktxt7.strip 
			
							else 

					hash[t][:nalvpvnbank] =  ""   
				end

				# nalvpvndrbank = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0] 
				# nalvpvndrbanktxt = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0] 
				

				# nalvpvndrbank = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0] 
				# nalvpvndrbanktxt = clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0] 
			


				nalvpvndrbank = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbanktxt = clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0] 

						nalvpvndrbank2 = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbanktxt2 = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0] 
				
					nalvpvndrbank3 = clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbanktxt3 = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0] 
			 
			 	nalvpvndrbank4 = clicked.search("tr:nth-child(12) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbanktxt4 = clicked.search("tr:nth-child(12) td").map(&:text).map(&:strip)[0] 
				
				nalvpvndrbank5 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbanktxt5 = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0] 
				
				nalvpvndrbank6 = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbanktxt6 = clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0] 
				
					nalvpvndrbank7 = clicked.search("tr:nth-child(11) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbanktxt7 = clicked.search("tr:nth-child(11) td").map(&:text).map(&:strip)[0] 
				



			
				if nalvpvndrbank.nil? != true and  nalvpvndrbank.include? "Снятие наличных в банкоматах других банков"
					 hash[t][:nalvpvndrbank] =  nalvpvndrbanktxt.strip 

				elsif  nalvpvndrbank2.nil? != true and   nalvpvndrbank2.include? "Снятие наличных в банкоматах других банков"
					 hash[t][:nalvpvndrbank] =  nalvpvndrbanktxt2.strip 
				elsif nalvpvndrbank3.nil? != true and  nalvpvndrbank3.nil? != true and nalvpvndrbank3.include? "Снятие наличных в банкоматах других банков"
					 hash[t][:nalvpvndrbank] =  nalvpvndrbanktxt3.strip 
				 elsif nalvpvndrbank4.nil? != true and   nalvpvndrbank4.nil? ==false and nalvpvndrbank4.include? "Снятие наличных в банкоматах других банков"
			    	 hash[t][:nalvpvndrbank] =  nalvpvndrbanktxt4.strip 
				 elsif nalvpvndrbank5.nil? != true and   nalvpvndrbank5.nil? != true and nalvpvndrbank5.include? "Снятие наличных в банкоматах других банков"
					 hash[t][:nalvpvndrbank] =  nalvpvndrbanktxt5.strip 
				elsif nalvpvndrbank6.nil? != true and   nalvpvndrbank6.include? "Снятие наличных в банкоматах других банков"
					 hash[t][:nalvpvndrbank] =  nalvpvndrbanktxt6.strip 
				elsif nalvpvndrbank7.nil? != true and   nalvpvndrbank7.nil? ==false and nalvpvndrbank7.include? "Снятие наличных в банкоматах других банков"
					 hash[t][:nalvpvndrbank] =  nalvpvndrbanktxt7.strip 					 
				else 
					hash[t][:nalvpvndrbank] =  ""   
				end
 
				
				nalvpvndrbankk2 = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbankktxt2 = clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0] 

				nalvpvndrbankk = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbankktxt = clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0] 
				
					nalvpvndrbankk3 = clicked.search("tr:nth-child(11) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbankktxt3 = clicked.search("tr:nth-child(11) td").map(&:text).map(&:strip)[0] 
			 
			 	nalvpvndrbankk4 = clicked.search("tr:nth-child(13) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbankktxt4 = clicked.search("tr:nth-child(13) td").map(&:text).map(&:strip)[0] 
				
				nalvpvndrbankk5 = clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbankktxt5 = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0] 
				
				nalvpvndrbankk6 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbankktxt6 = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0] 
				
					nalvpvndrbankk7 = clicked.search("tr:nth-child(12) th").map(&:text).map(&:strip)[0] 
				nalvpvndrbankktxt7 = clicked.search("tr:nth-child(12) td").map(&:text).map(&:strip)[0] 
				

			# nalvpvndrbank2 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0] 
			# 	nalvpvndrbanktxt2 = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0] 
			

				if nalvpvndrbankk2.nil? != true and   nalvpvndrbankk2.include? "Снятие наличных в ПВН других банков"
					 hash[t][:nalvpvndrbank2] =  nalvpvndrbankktxt2.strip 
				
				elsif nalvpvndrbankk.nil? != true and  nalvpvndrbankk.include? "Снятие наличных в ПВН других банков"
					 hash[t][:nalvpvndrbank2] =  nalvpvndrbankktxt.strip 
elsif nalvpvndrbankk3.nil? != true and nalvpvndrbankk3.include? "Снятие наличных в ПВН других банков"
					 hash[t][:nalvpvndrbank2] =  nalvpvndrbankktxt3.strip 

elsif nalvpvndrbankk4.nil? ==false  and nalvpvndrbankk4.include? "Снятие наличных в ПВН других банков"
					 hash[t][:nalvpvndrbank2] =  nalvpvndrbankktxt4.strip

					 elsif nalvpvndrbankk5.nil? != true and nalvpvndrbankk5.include? "Снятие наличных в ПВН других банков"
					 hash[t][:nalvpvndrbank2] =  nalvpvndrbankktxt5.strip 

					 elsif  nalvpvndrbankk6.nil? != true and  nalvpvndrbankk6.include? "Снятие наличных в ПВН других банков"
					 hash[t][:nalvpvndrbank2] =  nalvpvndrbankktxt6.strip 

					 elsif  nalvpvndrbankk7.nil? != true and nalvpvndrbankk7.nil? ==false  and nalvpvndrbankk7.include? "Снятие наличных в ПВН других банков"
					 hash[t][:nalvpvndrbank2] =  nalvpvndrbankktxt7.strip 
 
				else 
				
					hash[t][:nalvpvndrbank2] =  ""   
				end

	 			lim= clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0] 
				limtxt = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0] 
			
                lim1 = clicked.search("tr:nth-child(14) th").map(&:text).map(&:strip)[0] 
				limtxt1 = clicked.search("tr:nth-child(14) td").map(&:text).map(&:strip)[0] 
 
				lim2 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0] 
				limtxt2 = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0] 
			 
			 	lim3 = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0] 
				limtxt3 = clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0] 
				
				lim4 = clicked.search("tr:nth-child(13) th").map(&:text).map(&:strip)[0] 
				limtxt4 = clicked.search("tr:nth-child(13) td").map(&:text).map(&:strip)[0] 
				
				lim5 = clicked.search("tr:nth-child(12) th").map(&:text).map(&:strip)[0] 
				limtxt5 = clicked.search("tr:nth-child(12) td").map(&:text).map(&:strip)[0] 
				
				# nalvpvndrbankk6 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0] 
				# nalvpvndrbankktxt6 = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0] 
				
				# 	nalvpvndrbankk7 = clicked.search("tr:nth-child(12) th").map(&:text).map(&:strip)[0] 
				# nalvpvndrbankktxt7 = clicked.search("tr:nth-child(12) td").map(&:text).map(&:strip)[0] 
				

				if lim.nil? ==false and   lim.include? "Лимиты по операциям"
					 hash[t][:lim] =  limtxt.strip 

				elsif lim1.nil? ==false and   lim1.include? "Лимиты по операциям"
					 hash[t][:lim] =  limtxt1.strip 
				elsif lim2.nil? ==false and   lim2.include? "Лимиты по операциям"
					 hash[t][:lim] =  limtxt2.strip 
				elsif lim3.nil? ==false and   lim3.include? "Лимиты по операциям"
					 hash[t][:lim] =  limtxt3.strip 
				elsif lim4.nil? ==false and   lim4.include? "Лимиты по операциям"
					 hash[t][:lim] =  limtxt4.strip 
				elsif lim5.nil? ==false and   lim5.include? "Лимиты по операциям"
					 hash[t][:lim] =  limtxt5.strip 
				else  
				 
					hash[t][:lim] =  ""   
				end

				dopinfo = clicked.search("tr:nth-child(11) th").map(&:text).map(&:strip)[0] 
				dopinfotxt = clicked.search("tr:nth-child(11) td").map(&:text).map(&:strip)[0] 

				dopinfo1 = clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0] 
				dopinfotxt1 = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0] 

				dopinfo2 = clicked.search("tr:nth-child(21) th").map(&:text).map(&:strip)[0] 
				dopinfotxt2 = clicked.search("tr:nth-child(21) td").map(&:text).map(&:strip)[0] 

				dopinfo3 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0] 
				dopinfotxt3 = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0] 


				dopinfo4 = clicked.search("tr:nth-child(24) th").map(&:text).map(&:strip)[0] 
				dopinfotxt4 = clicked.search("tr:nth-child(24) td").map(&:text).map(&:strip)[0] 

				dopinfo5 = clicked.search("tr:nth-child(25) th").map(&:text).map(&:strip)[0] 
				dopinfotxt5 = clicked.search("tr:nth-child(25) td").map(&:text).map(&:strip)[0] 


				dopinfo6 = clicked.search("tr:nth-child(23) th").map(&:text).map(&:strip)[0] 
				dopinfotxt6 = clicked.search("tr:nth-child(23) td").map(&:text).map(&:strip)[0] 

				


				if dopinfo.nil? ==false  and dopinfo.include? "Дополнительная информация"
					 hash[t][:dopinfo] =  dopinfotxt.strip 
				elsif dopinfo1.nil? ==false  and dopinfo1.include? "Дополнительная информация"
					 hash[t][:dopinfo] =  dopinfotxt1.strip 
			    elsif dopinfo2.nil? ==false  and dopinfo2.include? "Дополнительная информация"
					 hash[t][:dopinfo] =  dopinfotxt2.strip 
			   elsif dopinfo3.nil? ==false  and dopinfo3.include? "Дополнительная информация"
					 hash[t][:dopinfo] =  dopinfotxt3.strip 
		      elsif dopinfo4.nil? ==false  and dopinfo4.include? "Дополнительная информация"
					 hash[t][:dopinfo] =  dopinfotxt4.strip 
			elsif dopinfo5.nil? ==false  and dopinfo5.include? "Дополнительная информация"
					 hash[t][:dopinfo] =  dopinfotxt5.strip 
			elsif dopinfo6.nil? ==false  and dopinfo6.include? "Дополнительная информация"
					 hash[t][:dopinfo] =  dopinfotxt6.strip 
			
				else 
				
					hash[t][:dopinfo] =  ""   
				end



				 

				# vozrast = clicked.search(".js-tab-section-title+ .standard-table--list tr:nth-child(1) th").map(&:text).map(&:strip)[0] 
				# vozrasttxt = clicked.search(".js-tab-section-title+ .standard-table--list tr:nth-child(1) td").map(&:text).map(&:strip)[0] 
			

			vozrast = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(1) th").map(&:text).map(&:strip)[0] 
				vozrasttxt = clicked.search(".tabs__content--frame.js-tabs-view-item .markup-inside--orange").map(&:text).map(&:strip)[0] 
			

				if vozrast.nil? != true and vozrast.include? "Возраст"
			 	  
					 hash[t][:vozrast] =  vozrasttxt.strip 
				else 

					hash[t][:vozrast] =  ""   
				end

				registration = clicked.search(".tabs__content--frame.js-tabs-view-item .js-tab-section-title+ .standard-table--list tr+ tr th").map(&:text).map(&:strip)[0] 
				registrationtxt = clicked.search(".tabs__content--frame.js-tabs-view-item .js-tab-section-title+ .standard-table--list tr+ tr td").map(&:text).map(&:strip)[0] 
				if  registration.nil? != true and registration.include? "Регистрация"
			 	  
					 hash[t][:registration] =  registrationtxt.strip 
				else 

					hash[t][:registration] =  ""   
				end

 
				t = t + 1
			end
		end


		# page = agent.get(string)
		# page.links_with(:href => %r{/products/debitcards/card/} ).each do |link|
		# 	if link.text.strip != ''
		# 		# puts link.text.strip
				
		# 		# if Debitcard.where(:typecard => hash[global][:typecard], 
		# 	 #  	:bank => hash[global][:bank]).blank?
		# 		deb = Debitcard.where(
		# 	  	:typecard => hash[global][:typecard], 
		# 	  	:bank => hash[global][:bank] ).first_or_initialize	
		# 	    unless deb.nil?

		# 			deb.update_attributes! (

		# 				{:typecard => hash[global][:typecard] ,
						 
		# 							:createpaydetail => hash[global][:createpaydetail] ,
		# 						:yearpay => hash[global][:yearpay] ,
		# 					  :bank => hash[global][:bank],

		# 						  :dopinfo => hash[global][:dopinfo],  
		# 						  :interestbalance => hash[global][:interestbalance],
		# 						  :bigimg => hash[global][:bigimg] ,
								
		# 						:img => hash[global][:img],
		# 						:registration => hash[global][:registration],
		# 						:vozrast => hash[global][:vozrast],
 	# 							:bankomatget => hash[global][:nalvpvnbank1],
		# 						  :pvnget => hash[global][:nalvpvnbank],
		# 						  :cashback => hash[global][:cashback] ,
		# 						      :techno => hash[global][:techno], 
		# 						      			:categorycard => hash[global][:cardtype] ,
		# 						 :otherpvnget=> hash[global][:nalvpvndrbank2],
		# 						  :cashdetail=> hash[global][:cashdetail],

		# 						  :lim => hash[global][:lim] ,
					 
		# 						  :currency=> "РУБ",
		# 						  # hash[global][:currency],
		# 						 :otherbankomatget => hash[global][:nalvpvndrbank]
		# 				})
		# 		else
		# 			Debitcard.create!(:typecard => hash[global][:typecard] ,
		# 				:categorycard => hash[global][:cardtype] ,
		# 			 :lim => hash[global][:lim] ,
					 
		# 					:createpaydetail => hash[global][:createpaydetail] ,
		# 			:cashback => hash[global][:cashback] ,
		# 					  :dopinfo => hash[global][:dopinfo],  
		# 					    :techno => hash[global][:techno], 
		# 					  :interestbalance => hash[global][:interestbalance],
		# 					   :bigimg => hash[global][:bigimg] ,
		# 					   	:yearpay => hash[global][:yearpay] ,
		# 					:img => hash[global][:img],
		# 					:registration =>hash[global][:registration],

		# 					  :vozrast => hash[global][:vozrast],
		# 						:bankomatget => hash[global][:nalvpvnbank1],
		# 					  :pvnget => hash[global][:nalvpvnbank],
		# 					  :bank => hash[global][:bank],


		# 						  :currency=> "РУБ",

		# 						 :otherpvnget=> hash[global][:nalvpvndrbank2],
	 # :cashdetail=> hash[global][:cashdetail],


		# 					  :otherbankomatget => hash[global][:nalvpvndrbank]

		# 					  )
		 
		# 		end
			 
	 
		# 		global = global + 1
		# 	end
			
		#end
		# sleep (1)
	number = number+1
	puts number
	end
	   # puts hash.to_s
end


