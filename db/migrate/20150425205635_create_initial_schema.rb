class CreateInitialSchema < ActiveRecord::Migration

    def change
       
  create_table "creditcards", force: :cascade do |t|
    t.string   "banktype"
    t.string   "creditlimit"
    t.string   "currency"
    t.string   "bank"
    t.string   "categorycard"
    t.string   "freeperiod"
    t.string   "moneyusage"
    t.string   "bonus"
    t.string   "payapprove"
    t.string   "stavka"
    t.string   "minimalpay"
    t.boolean  "interestbalance"
    t.boolean  "cashback"
    t.boolean  "freemade"
    t.boolean  "freeservice"
    t.boolean  "freesms"
    t.text     "description"
    t.string   "awaylink"
    t.string   "approveflag"
    t.string   "image_preview"
    t.string   "image_full"
    t.string   "site"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "microcredits", force: :cascade do |t|
    t.string   "microcreditorg"
    t.string   "microtype"
    t.string   "minstavka"
    t.string   "maxsum"
    t.string   "maxsrok"
    t.string   "summzaim"
    t.string   "stavkam"
    t.string   "srokm"
    t.string   "pogawenie"
    t.string   "goal"
    t.string   "obespechenie"
    t.string   "zaemcategory"
    t.string   "vozrast"
    t.string   "registration"
    t.string   "documents"
    t.string   "srokvid"
    t.string   "oformlen"
    t.string   "formavid"
    t.string   "poryadpogaw"
    t.string   "dosrpogaw"
    t.string   "paymethod"
    t.string   "image"
    t.string   "site"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end
    end

   
end