
desc "Import microcredits list"
task :import_micro => :environment do
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
		while number < 4
		  string = "http://www.banki.ru/microloans/search/?page=" + number.to_s
		  page = agent.get(string) 
		  
		
# nazvanie microcredita
  agent.page.search("#search-result .font-bold").each do |item|
  
 	 hash[t] = { :microtype => item.text.strip,:id => k}

 	t = t+ 1
 end

 #   #min stavka v den
		agent.page.search("td:nth-child(2)").each do |item|
		  	  hash[l][:minstavka] = item.text.strip
		  	  l = l + 1
		end


# microcredit org
  agent.page.search(".display-block").each do |item|

  	   hash[n][:microcreditorg] = item.text.strip
  	  n = n + 1	 
end

 # макс сумма р
  agent.page.search("td:nth-child(3)").each do |item|
 
  	    hash[c][:maxsum] = item.text.strip
  	  c = c + 1
end

# макс срок
 agent.page.search("td:nth-child(4)").each do |item|

  	    hash[s][:maxsrok] = item.text.strip
  	  s = s + 1 
end

# Порядок погашения
 agent.page.search("td:nth-child(5)").each do |item|
	 hash[i][:pogawenie] = item.text.strip
  	  i = i + 1 
end

           page = agent.get(string) 
		    page.links_with(:href => %r{/microloans/products/} ).each do |link|
		  		if link.text.strip != ''
		 	
		  	  clicked = link.click

# 		# цель займа  	  

		  	goal =   clicked.search("#mfo-product-info :nth-child(1) .standard-table--list tr:nth-child(1) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
			goalv = clicked.search("#mfo-product-info :nth-child(1) .standard-table--list tr:nth-child(1) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
			 hash[k][:goal] = goalv
 			   # puts goalv
			   
		
		
# # сумма займа

		  	summ =   clicked.search("#mfo-product-info :nth-child(1) .standard-table--list tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
			summv = clicked.search("#mfo-product-info :nth-child(1) .standard-table--list tr:nth-child(2) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
			hash[k][:summzaim] = summv
 			  
			  # puts summv
			   
		
#  	  # ставка
	  	stvka =   clicked.search("#mfo-product-info :nth-child(1) .standard-table--list tr:nth-child(3) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
		  	stvkam =   clicked.search("#mfo-product-info :nth-child(1) .standard-table--list tr:nth-child(3) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
	hash[k][:stavkam] =	stvkam
# 			 
 # puts stvka


# # срок
srokk =   clicked.search("#mfo-product-info :nth-child(1) .standard-table--list tr:nth-child(4) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
srokkv =   clicked.search("#mfo-product-info :nth-child(1) .standard-table--list tr:nth-child(4) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
hash[k][:srokm] =	srokkv
# 			 
			  # puts srokk


# # обеспечение
obespechenie =   clicked.search("tr:nth-child(5) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
obespecheniev =   clicked.search("tr:nth-child(5) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
hash[k][:obespechenie] =	obespecheniev
 

# # категория заемщиков
kategoryzaem =   clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(1) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
kategoryzaemv =   clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(1) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
hash[k][:zaemcategory] = kategoryzaemv
 
# # возраст
vozrast =   clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
vozrastv =   clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(2) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
hash[k][:vozrast] = vozrastv
 
 
# # регистрация
registration =   clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(3) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
registrationv =   clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(3) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
hash[k][:registration] = registrationv
 

# # документы
documents =   clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(4) th").map(&:text).map(&:strip)[0]
unless documents.nil?
 documentsv = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(4) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
end
hash[k][:documents] = documentsv
 
# # срок выдачи
srkvid =   clicked.search(".standard-table--list:nth-child(3) tr:nth-child(1) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
srkvidv =   clicked.search(".standard-table--list:nth-child(3) tr:nth-child(1) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
hash[k][:srokvid] = srkvidv
  
# # оформление займа
oformlenzaima =   clicked.search(".standard-table--list:nth-child(3) tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
oformlenzaimav =   clicked.search(".standard-table--list:nth-child(3) tr:nth-child(2) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
hash[k][:oformlen] = oformlenzaimav
 
 # # форма выдачи
 frmavid =   clicked.search(".standard-table--list:nth-child(3) tr:nth-child(3) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
frmavidv=   clicked.search(".standard-table--list:nth-child(3) tr:nth-child(3) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 


 hash[k][:formavid] = frmavidv

# # порядок погащения
pogaweniepor =   clicked.search(":nth-child(6) tr:nth-child(1) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
pogawenieporv =   clicked.search(":nth-child(6) tr:nth-child(1) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 hash[k][:poryadpogaw] = pogawenieporv

# # досрочное погащение
dosrpogawenie =   clicked.search(":nth-child(6) tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
dosrpogaweniev =   clicked.search(":nth-child(6) tr:nth-child(2) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
hash[k][:dosrpogaw] = dosrpogaweniev

# # способ
sposob =   clicked.search(":nth-child(6) tr:nth-child(3) th").map(&:text).map(&:strip)[0]
unless sposob.nil?
  sposobv = clicked.search(":nth-child(6) tr:nth-child(3) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
end
hash[k][:paymethod] = sposobv
 

 	k= k + 1
 end
	   end
	    puts number



 page = agent.get(string) 
		    page.links_with(:href => %r{/microloans/products/} ).each do |link|
		  		if link.text.strip != ''
		 	
 
			 			 puts global
    Microcredit.create!(
    	:microtype => hash[global][:microtype],  
    	:microcreditorg => hash[global][:microcreditorg] ,
		:minstavka => hash[global][:minstavka],
		:maxsum => hash[global][:maxsum],
		:maxsrok => hash[global][:maxsrok],
		:summzaim => hash[global][:summzaim],
		:stavkam => hash[global][:stavkam],
		:srokm => hash[global][:srokm],
		:obespechenie => hash[global][:obespechenie],
		:zaemcategory =>	hash[global][:zaemcategory],
		:vozrast =>	hash[global][:vozrast],
		:documents =>	hash[global][:documents],
		:registration =>	hash[global][:registration],
		:oformlen =>	hash[global][:oformlen],
		:formavid =>	hash[global][:formavid],
		:srokvid =>	hash[global][:srokvid],
		:poryadpogaw =>	hash[global][:poryadpogaw],
		:pogawenie =>	hash[global][:pogawenie],
		:goal =>	hash[global][:goal],
		:dosrpogaw =>	hash[global][:dosrpogaw],
		:paymethod =>	hash[global][:paymethod]
   )
    
		global = global + 1
		
		end
		end
		 number = number+1
		 
		end

  
end
