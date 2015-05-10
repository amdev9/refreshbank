json.array!(@microcredits) do |microcredit|
  json.extract! microcredit, :id, :microtype, :minstavka, :maxsum, :maxsrok, :pogawenie, :goal, :obespechenie, :zaemcategory, :vozrast, :registration, :documents, :srokvid, :oformlen, :formavid, :poryadpogaw, :dosrpogaw, :paymethod, :site
  json.url microcredit_url(microcredit, format: :json)
end
