json.array!(@debitcards) do |debitcard|
  json.extract! debitcard, :id, :currency, :typecard, :cashback, :interestbalance, :createpay, :bankomatget, :pvnget, :otherbankomatget, :otherpvnget, :dopinfo, :registration, :techno
  json.url debitcard_url(debitcard, format: :json)
end
