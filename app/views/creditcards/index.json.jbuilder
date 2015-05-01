json.array!(@creditcards) do |creditcard|
  json.extract! creditcard, :id, :banktype, :creditlimit, :currency, :bank, :categorycard, :freeperiod, :moneyusage, :bonus, :payapprove, :stavka, :minimalpay, :interestbalance, :cashback, :freemade, :freeservice, :freesms
  json.url creditcard_url(creditcard, format: :json)
end
