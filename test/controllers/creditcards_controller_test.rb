require 'test_helper'

class CreditcardsControllerTest < ActionController::TestCase
  setup do
    @creditcard = creditcards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:creditcards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create creditcard" do
    assert_difference('Creditcard.count') do
      post :create, creditcard: { bank: @creditcard.bank, banktype: @creditcard.banktype, bonus: @creditcard.bonus, cashback: @creditcard.cashback, categorycard: @creditcard.categorycard, creditlimit: @creditcard.creditlimit, currency: @creditcard.currency, freemade: @creditcard.freemade, freeperiod: @creditcard.freeperiod, freeservice: @creditcard.freeservice, freesms: @creditcard.freesms, interestbalance: @creditcard.interestbalance, minimalpay: @creditcard.minimalpay, moneyusage: @creditcard.moneyusage, payapprove: @creditcard.payapprove, stavka: @creditcard.stavka }
    end

    assert_redirected_to creditcard_path(assigns(:creditcard))
  end

  test "should show creditcard" do
    get :show, id: @creditcard
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @creditcard
    assert_response :success
  end

  test "should update creditcard" do
    patch :update, id: @creditcard, creditcard: { bank: @creditcard.bank, banktype: @creditcard.banktype, bonus: @creditcard.bonus, cashback: @creditcard.cashback, categorycard: @creditcard.categorycard, creditlimit: @creditcard.creditlimit, currency: @creditcard.currency, freemade: @creditcard.freemade, freeperiod: @creditcard.freeperiod, freeservice: @creditcard.freeservice, freesms: @creditcard.freesms, interestbalance: @creditcard.interestbalance, minimalpay: @creditcard.minimalpay, moneyusage: @creditcard.moneyusage, payapprove: @creditcard.payapprove, stavka: @creditcard.stavka }
    assert_redirected_to creditcard_path(assigns(:creditcard))
  end

  test "should destroy creditcard" do
    assert_difference('Creditcard.count', -1) do
      delete :destroy, id: @creditcard
    end

    assert_redirected_to creditcards_path
  end
end
