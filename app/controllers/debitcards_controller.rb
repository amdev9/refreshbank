class DebitcardsController < ApplicationController
  before_action :set_debitcard, only: [:show, :edit, :update, :destroy]

  # GET /debitcards
  # GET /debitcards.json
  def index
    @debitcards = Debitcard.all
  end

  # GET /debitcards/1
  # GET /debitcards/1.json
  def show
    @subscriber = Subscriber.new
  end

  # GET /debitcards/new
  def new
    @debitcard = Debitcard.new
  end

  # GET /debitcards/1/edit
  def edit
  end

  # POST /debitcards
  # POST /debitcards.json
  def create
    @debitcard = Debitcard.new(debitcard_params)

    respond_to do |format|
      if @debitcard.save
        format.html { redirect_to @debitcard, notice: 'Debitcard was successfully created.' }
        # format.json { render :show, status: :created, location: @debitcard }
      else
        format.html { render :new }
        # format.json { render json: @debitcard.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /debitcards/1
  # PATCH/PUT /debitcards/1.json
  def update
    respond_to do |format|
      if @debitcard.update(debitcard_params)
        format.html { redirect_to @debitcard, notice: 'Debitcard was successfully updated.' }
        # format.json { render :show, status: :ok, location: @debitcard }
      else
        format.html { render :edit }
        # format.json { render json: @debitcard.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /debitcards/1
  # DELETE /debitcards/1.json
  def destroy
    @debitcard.destroy
    respond_to do |format|
      format.html { redirect_to debitcards_url, notice: 'Debitcard was successfully destroyed.' }
      # format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_debitcard
      @debitcard = Debitcard.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def debitcard_params
      params.require(:debitcard).permit(:currency,:bank, :typecard, :cashback, :interestbalance, :createpay, :bankomatget, :pvnget, :otherbankomatget, :otherpvnget, :dopinfo, :registration, :techno)
    end
end
