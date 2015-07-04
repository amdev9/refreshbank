class CreateDebitcards < ActiveRecord::Migration
  def change
    create_table :debitcards do |t|
      t.string :currency
      t.string :typecard
      t.boolean :cashback
      t.string :interestbalance
      t.string :createpay
      t.string :createpaydetail
      t.string :bankomatget
      t.string :pvnget
      t.string :otherbankomatget
      t.string :otherpvnget
      t.string :dopinfo
      t.string :registration
      t.string :techno
      t.string :yearpay
      t.string :bigimg
      t.string :img
      t.string :lim
      t.string :categorycard
      t.string :vozrast
      t.string :bank
      t.string :site
    t.string   :cashdetail 

                 

      t.timestamps null: false
    end
  end
end
