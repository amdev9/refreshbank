# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150404123740) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

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
  
 create_table "subscribers", force: :cascade do |t|
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
