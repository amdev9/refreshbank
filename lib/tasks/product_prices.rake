
desc "Import wish list"
task :import_list => :environment do
require 'rubygems'
require 'open-uri'
require 'mechanize'


# <!--  creditlimit="<%= (creditcard.creditlimit.gsub(/\D/, '')  if creditcard.creditlimit.include? 'до') || (999999999 if creditcard.creditlimit.include? 'от')  %>" -->

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
		while number < 20
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
	   	 	unless bigname.nil?
 
	   	  cleanbig =  bigname.to_s.scan(/.*\/(.*).png/)[0][0]
	 
	   	   hash[t][:bigimg] = "/img/big/#{cleanbig}.png" 

	   	  
	# SAVE
	   	  agent.get( bigname ).save "public/img/big/#{cleanbig}.png" 
			end
	   end




description = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
descriptiontxt = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(2) td").map(&:text).map(&:strip)[0].gsub(/\n/, 'br').gsub(/\s+/, ' ') 
if description.include? "Технологические особенности"
	   hash[t][:description] =  " <p><span style=\"line-height: 20.7999992370605px;\"><b>Технологические характеристики: </b> " + descriptiontxt.gsub(/(br )+/, '<br>') 
else 
	  hash[t][:description] =  ""   
end
cashbackfull = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(3) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
cashbackfullvalue = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(3) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
if cashbackfull.include? "Cash Back"
	  hash[t][:description] =  "<br><b>Cash Back: </b>" + cashbackfullvalue
end
obsl = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(4) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
obsl2 = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(5) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
obsl3 = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
obsl4 = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
obsl5 = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
if obsl.include? "Выпуск и обслуживание" then hash[t][:description] += "<br><b>Обслуживание: </b>" + clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(4) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
elsif obsl2.include? "Выпуск и обслуживание" then hash[t][:description] +=  "<br><b>Обслуживание: </b>" +clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(5) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
elsif obsl3.include? "Выпуск и обслуживание" then hash[t][:description] +=  "<br><b>Обслуживание: </b>" +clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
elsif obsl4.include? "Выпуск и обслуживание" then hash[t][:description] +=  "<br><b>Обслуживание: </b>" +clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
elsif obsl5.include? "Выпуск и обслуживание" then hash[t][:description] +=  "<br><b>Обслуживание: </b>" +clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
end
#--------------снятие наличных в банкоматах----------------	
nalvbanks = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(6) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
nal  = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
navs = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(5) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
navsv = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(5) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
nalvbanksv = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(6) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
nalv =clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 

if clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0].nil? != true 
navs10 = clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 

navs10v = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
navs11 = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(11) th").map(&:text).map(&:strip)[0]

end

if  nalvbanks.include? "Снятие наличных в банкоматах банка" then 
	hash[t][:description] += "<br><b>Комиссия в банкоматах банка: </b>" + nalvbanksv
elsif nal.include? "Снятие наличных в банкоматах банка" then 
 	hash[t][:description] += "<br><b>Комиссия в банкоматах банка: </b>" + nalv
elsif navs.include? "Снятие наличных в банкоматах банка" then hash[t][:description] += "<br><b>Комиссия в банкоматах банка: </b>" + navsv
elsif navs10.include? "Снятие наличных в банкоматах банка" then hash[t][:description] += "<br><b>Комиссия в банкоматах банка: </b>" + navs10v
elsif  navs11.nil? ==false and navs11.include? "Снятие наличных в банкоматах банка" then 
	hash[t][:description] += "<br><b>Комиссия в банкоматах банка: </b>" + clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(11) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 

end
#--------------снятие наличных в пвн------------
pvn0 = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
pvn0v = clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
pvn1  = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
pvn1v  = clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
pvn11  = clicked.search(".js-tabs-view-item .tabs__content--frame tr:nth-child(11) th").map(&:text).map(&:strip)[0] 

pvn12  = clicked.search("tr:nth-child(12) th").map(&:text).map(&:strip)[0]
pvn6  = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
pvn6v  = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
if  pvn0.include? "Снятие наличных в ПВН банка" then   
	hash[t][:description] += "<br><b>Комиссия наличных в ПВН банка: </b>" + pvn0v
elsif 
	pvn1.include? "Снятие наличных в ПВН банка" then hash[t][:description] += "<br><b>Комиссия в ПВН банка: </b>" + pvn1v
  
 elsif  pvn11.nil? ==false 	and pvn11.include? "Снятие наличных в ПВН банка"  then

	 hash[t][:description] += "<br><b>Комиссия наличных в ПВН банка: </b>" + clicked.search("tr:nth-child(12) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')


  elsif  pvn12.nil? ==false 	and pvn12.include? "Снятие наличных в ПВН банка"  then
  	pvn12 = pvn12.gsub(/\s+/, ' ')  
	 hash[t][:description] += "<br><b>Комиссия наличных в ПВН банка: </b>" + clicked.search("tr:nth-child(12) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
 elsif 
	pvn6.include? "Снятие наличных в ПВН банка" then hash[t][:description] += "<br><b>Комиссия в ПВН банка: </b>" + pvn6v
end
#----------------В банкоматах других банков
drb0 = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
drb0v = clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
drb1  = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
drb1v  = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 drb12  = clicked.search("tr:nth-child(12) th").map(&:text).map(&:strip)[0]  
 drb7  = clicked.search("tr:nth-child(7) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
drb7v  = clicked.search("tr:nth-child(7) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
if  drb0.include? "Снятие наличных в банкоматах других банков" then hash[t][:description] += "<br><b>Комиссия в банкоматах других банков: </b>"+ drb0v
elsif drb1.include? "Снятие наличных в банкоматах других банков" then hash[t][:description] += "<br><b>Комиссия в банкоматах других банков: </b>"+ drb1v
	elsif  drb12.nil? ==false 	and drb12.include? "Снятие наличных в банкоматах других банков"  then
  	drb12 = drb12.gsub(/\s+/, ' ')  
	 hash[t][:description] += "<br><b>Снятие наличных в банкоматах других банков: </b>" + clicked.search("tr:nth-child(12) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
elsif drb7.include? "Снятие наличных в банкоматах других банков" then hash[t][:description] += "<br><b>Комиссия в банкоматах других банков: </b>"+ drb7v
end
# # ----------------в пвн других банков
pvndr0 = clicked.search("tr:nth-child(9) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
pvndr0v = clicked.search("tr:nth-child(9) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
if clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0].nil? != true
pvndr1 = clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')

pvndr1v = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
pvndr12 = clicked.search("tr:nth-child(12) th").map(&:text).map(&:strip)[0] 
pvndr7  = clicked.search("tr:nth-child(13) th").map(&:text).map(&:strip)[0] 
pvndr14  = clicked.search("tr:nth-child(14) th").map(&:text).map(&:strip)[0] 
 pvndr8  = clicked.search("tr:nth-child(8) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
  pvndr8v  = clicked.search("tr:nth-child(8) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')

if  pvndr0.include? "Снятие наличных в ПВН других банков" then hash[t][:description] += "<br><b>Комиссия в ПВН других банков: </b>"+ pvndr0v
elsif pvndr1.include? "Снятие наличных в ПВН других банков" then hash[t][:description] += "<br><b>Комиссия в ПВН других банков: </b>"+ pvndr1v
elsif  pvndr12.nil? ==false and pvndr12.include? "Комиссия в ПВН других банков"  then
  	pvndr12 = pvndr12.gsub(/\s+/, ' ')  
	 hash[t][:description] += "<br><b>Снятие наличных в банкоматах других банков: </b>" + clicked.search("tr:nth-child(12) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
elsif  pvndr7.nil? ==false and pvndr7.include? "Комиссия в ПВН других банков"  then
  	pvndr7 = pvndr7.gsub(/\s+/, ' ')  
	 hash[t][:description] += "<br><b>Снятие наличных в банкоматах других банков: </b>" + clicked.search("tr:nth-child(13) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 elsif  pvndr14.nil? ==false and pvndr14.include? "Комиссия в ПВН других банков"  then
  	pvndr14 = pvndr14.gsub(/\s+/, ' ')  
	 hash[t][:description] += "<br><b>Комиссия в банкоматах других банков: </b>" + clicked.search("tr:nth-child(14) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 elsif pvndr8.include? "Снятие наличных в ПВН других банков" then hash[t][:description] += "<br><b>Комиссия в ПВН других банков: </b>"+ pvndr8v
end

end  

# ----------------лимиты по операциям
# +-
lim14 = clicked.search("tr:nth-child(14) th").map(&:text).map(&:strip)[0] 

if lim0 = clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0].nil? != true
lim0 = clicked.search("tr:nth-child(10) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
lim0v = clicked.search("tr:nth-child(10) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
lim1 = clicked.search("tr:nth-child(11) th").map(&:text).map(&:strip)[0] 
 
if  lim0.include? "Лимиты по операциям" then hash[t][:description] += "<br><b>Ограничения по операциям: </b>"+ lim0v
elsif  lim1.nil? ==false and lim1.include? "Лимиты по операциям"  then
  	lim1 = lim1.gsub(/\s+/, ' ')  

	hash[t][:description] += "<br><b>Ограничения по операциям: </b>"+ clicked.search("tr:nth-child(11) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
elsif  lim14.nil? ==false and lim14.include? "Лимиты по операциям"  then
  	lim14 = lim14.gsub(/\s+/, ' ')  
	 hash[t][:description] += "<br><b>Ограничения по операциям: </b>" + clicked.search("tr:nth-child(14) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
end
end
# УСЛОВИЯ КРЕДИТОВАНИЯ
kreditlimmm = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(1) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
kreditlimmmv = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(1) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 

hash[t][:description] += "<br><b>Кредитный лимит: </b>" + kreditlimmmv 
#-------льготный период 

lightper0 = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(3) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
lightper0v = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(3) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
lightper1 = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
lightper1v = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(2) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
lightper2 = clicked.search(".is-hidden+ tr:nth-child(4) th").map(&:text).map(&:strip)[0] 
if  lightper0.include? "Льготный период" then hash[t][:description] += "<br><b>Льготный период: </b>"+ lightper0v
elsif lightper1.include? "Льготный период" then hash[t][:description] += "<br><b>Льготный период: </b>"+ lightper1v
elsif  lightper2.nil? ==false and lightper2.include? "Льготный период"  then
  	lightper2 = lightper2.gsub(/\s+/, ' ')  
	 hash[t][:description] += "<br><b>Льготный период: </b>" +  clicked.search(".is-hidden+ tr:nth-child(4) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
end

#-HNA
# #-------------Проценты за кредит
proc0 = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(5) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
proc0v = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(5) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 

proc1 = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(4) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 proc1v = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(4) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 
 proc66 = clicked.search("tr:nth-child(6) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 proc6v = clicked.search("tr:nth-child(6) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 
 
if  proc0.include? "Проценты за кредит" then hash[t][:description] += "<br><b>Проценты за кредит: </b>"+ proc0v
 # puts "gut"
elsif proc1.include? "Проценты за кредит" then hash[t][:description] += "<br><b>Проценты за кредит: </b>"+ proc1v
 # puts "gut"
# elsif proc66.include? "Проценты за кредит" then hash[t][:description] += "<br><b>Проценты за кредит: </b>"+ proc6v
#  puts "gut"
end

#-HNA
#-------------Погашение кредита
 pogaw0 = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(5) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 pogaw0v = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(5) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 


if clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(6) th").map(&:text).map(&:strip)[0].nil? != true 
 pogaw1 = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(6) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 pogaw1v = clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(6) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 
 if  pogaw0.include? "Погашение кредита" then hash[t][:description] += "<br><b>Погашение: </b>"+ pogaw0v
 
elsif pogaw1.include? "Погашение кредита" then hash[t][:description] += "<br><b>Погашение: </b>"+ pogaw1v
 
end
end

  


# ТРЕБОВАНИЯ И ДОКУМЕНТЫ
# # Возраст
if clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(1) th").map(&:text).map(&:strip)[0].nil? != true and clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(1) td").map(&:text).map(&:strip)[0].nil? != true
vozrast = clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(1) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
vozrastv = clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(1) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 
 end 
  if vozrast.nil? != true and  vozrast.include? "Возраст" 
   hash[t][:description] += "<br><b>Возраст: </b>"+ vozrastv
end

# Подтверждение дохода

if clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(2) th").map(&:text).map(&:strip)[0].nil? != true
podtverg = clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
podtvergv = clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(2) td").map(&:text).map(&:strip)[0].gsub(/\n/, 'br').gsub(/\s+/, ' ') 
 end
  if  podtverg.nil? != true and podtverg.include? "Подтверждение дохода" 
   hash[t][:description] += "<br><b>Подтверждение дохода: </b><small>"+ podtvergv.gsub(/(br )+/, '<br>') 
end
# регистрация
if clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(3) th").map(&:text).map(&:strip)[0].nil? != true

registr = clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(3) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 registrv = clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(3) td").map(&:text).map(&:strip)[0].gsub(/\n/, 'br').gsub(/\s+/, ' ')
end
  if  registr.nil? != true and registr.include? "Регистрация" 
   hash[t][:description] += "</small><br><b>Регистрация: </b>" + registrv.gsub(/(br )+/, '<br>') 
   # puts registrv.gsub(/(br br )+/, '<br>').gsub(/<br>br/, '')
end
# # стаж работы fifififiif

if clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(4) th").map(&:text).map(&:strip)[0].nil? != true 

rabstag = clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(4) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
 rabstagv = clicked.search(".tabs__content--frame+ .js-tabs-view-item .js-tab-section-title+ .standard-table--list tr:nth-child(4) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ')
  end
  if rabstag.nil? != true and  rabstag.include? "Стаж работы" 
   hash[t][:description] += "<br><b>Стаж работы: </b>" + rabstagv + " &nbsp;   </span></p>"
end


# razm = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(1) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
# if razm.include? "Размер кредитного лимита"
# 	 hash[t][:description] += clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(1) td").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
# end


# srroks = clicked.search(".js-tabs-view-item:nth-child(2) tr:nth-child(2) th").map(&:text).map(&:strip)[0].gsub(/\s+/, ' ') 
#  # if srroks.include? "Срок кредита"
#  	puts srroks
# # end



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
 		m = minimal1.scan(/(.*)%/)[0][0].gsub(/[^0-9,.]+/, '') 
 	end
 end


minimal3 =  clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(6) td").map(&:text).map(&:strip)[0] 
 unless minimal3.nil?
 	min3 = minimal3.include? "минимальный ежемесячный платеж:"
 	if minimal3.include? "обязательное ежемесячное погашение только начисленных"
 		m =  "начисленные проценты"
 	end
 	if min3 == true
 		m = minimal3.scan(/(.*)%/)[0][0].gsub(/[^0-9,.]+/, '') 
 	end
 end



minimal4 =  clicked.search(".tabs__content--frame.js-tabs-view-item tr:nth-child(14) td").map(&:text).map(&:strip)[0] 
 unless minimal4.nil?
 	min4 = minimal4.include? "минимальный ежемесячный платеж:"
 	if minimal4.include? "обязательное ежемесячное погашение только начисленных"
 		m = "начисленные проценты"
 	end
 	if min4 == true
 		m = minimal4.scan(/(.*)%/)[0][0].gsub(/[^0-9,.]+/, '') 
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
 		m = minimal.scan(/(.*)%/)[0][0].gsub(/[^0-9,.]+/, '') 
 	end
 end

	#puts  "#{m} #{t} == #{number}" #.scan(/(.*)%/)[0][0].gsub(/\D/, '') 

    hash[t][:minimalpay] = m
     
 
		#000000000000--------подтверждение дохода через / хзхз
		   # approvedoks = clicked.search(".tabs__content--frame+ .js-tabs-view-item td > .text-list--orange").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ")
			  # puts approvedoks
		   # # hash[t][:approveflag] = "#{approvedoks}"

		#########000000000000000 Тип карты visa  и прочее
		if    cardtype = clicked.search("tr:nth-child(1) .text-list--orange").map(&:text).map(&:strip)[0].nil? != true
		   cardtype = clicked.search("tr:nth-child(1) .text-list--orange").map(&:text).map(&:strip)[0].gsub(/\n/, "/").gsub(/\s+/, " ")
		        hash[t][:cardtype] = "#{cardtype}"
		    end
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

		agent.page.search("#search-result .font-bold").each do |item|
		 hash[i][:banktype] = "#{item.text.strip}"
		 i = i + 1
		 end

		# #4444444#Ставка
		agent.page.search(".position-relative+ td").each do |item|
			  hash[s][:stavka] =  "#{item.text.strip}".gsub(/[^0-9,.]+/, '').gsub(/,/, '.')
		   s = s+ 1
		end

		#5555555#Кредитный лимит
		agent.page.search("td:nth-child(3)").each do |item|
  	  
  
			if  item.text.strip.match(/от (.*)&/)
				#
	  	  		hash[l][:creditlimit] =  'от '.to_s + item.text.strip.match(/от (.*)&/).captures.join('').strip.gsub(/\s+/, ',')  
	   		elsif item.text.strip.include? "индивидуально"

	   			 hash[l][:creditlimit] = "индивидуально"
	   		elsif item.text.strip.match(/до (.*)/)
# 
	   			hash[l][:creditlimit] = 'до '.to_s +  item.text.strip.match(/до (.*)/).captures.join('').gsub(/\s+/, ',')  
			end
   				l = l+ 1
			end

		#6666666#Льготный период
		agent.page.search("td:nth-child(4)").each do |item|

			 hash[c][:freeperiod] =   "#{item.text.strip}".gsub(/\D/, '') 
		  	  
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
			 			 
    Creditcard.create!(:freesms => hash[global][:sms] ,:freemade => hash[global][:cheto] , 
    	:moneyusage => hash[global][:moneyusage] ,:categorycard => hash[global][:cardtype], :minimalpay => hash[global][:minimalpay]  ,

     :image_full => hash[global][:bigimg] ,
      :cashback => hash[global][:cashback] ,
      :stavka => hash[global][:stavka],
       :creditlimit => hash[global][:creditlimit],
        :freeperiod =>  hash[global][:freeperiod],
         :bank => hash[global][:bank] ,
         :banktype => hash[global][:banktype],
          :interestbalance => hash[global][:interestbalance], 
          :image_preview => hash[global][:img],
          :description => hash[global][:description] )
    
			 	global = global + 1
		end
		end



		 number = number+1
		 
		 
		end

  
end
