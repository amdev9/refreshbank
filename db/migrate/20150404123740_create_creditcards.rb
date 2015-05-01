class CreateCreditcards < ActiveRecord::Migration
  def change
    create_table :creditcards do |t|
      t.string :banktype
      t.string :creditlimit
      t.string :currency
      t.string :bank
      t.string :categorycard
      t.string :freeperiod
      t.string :moneyusage
      t.string :bonus
      t.string :payapprove
      t.string :stavka
      t.string :minimalpay
      t.boolean :interestbalance
      t.boolean :cashback
      t.boolean :freemade
      t.boolean :freeservice
      t.boolean :freesms
      t.text :description
      t.string :awaylink
      t.string :approveflag
      t.string :image_preview
      t.string :image_full

      t.timestamps null: false
    end
  end
end
