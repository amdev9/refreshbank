class MicrocreditsController < ApplicationController
  before_action :set_microcredit, only: [:show, :edit, :update, :destroy]

  # GET /microcredits
  # GET /microcredits.json
  def index
    @microcredits = Microcredit.all
  end

  # GET /microcredits/1
  # GET /microcredits/1.json
  def show
  end

  # GET /microcredits/new
  def new
    @microcredit = Microcredit.new
  end

  # GET /microcredits/1/edit
  def edit
  end

  # POST /microcredits
  # POST /microcredits.json
  def create
    @microcredit = Microcredit.new(microcredit_params)

    respond_to do |format|
      if @microcredit.save
        format.html { redirect_to @microcredit, notice: 'Microcredit was successfully created.' }
        format.json { render :show, status: :created, location: @microcredit }
      else
        format.html { render :new }
        format.json { render json: @microcredit.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /microcredits/1
  # PATCH/PUT /microcredits/1.json
  def update
    respond_to do |format|
      if @microcredit.update(microcredit_params)
        format.html { redirect_to @microcredit, notice: 'Microcredit was successfully updated.' }
        format.json { render :show, status: :ok, location: @microcredit }
      else
        format.html { render :edit }
        format.json { render json: @microcredit.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /microcredits/1
  # DELETE /microcredits/1.json
  def destroy
    @microcredit.destroy
    respond_to do |format|
      format.html { redirect_to microcredits_url, notice: 'Microcredit was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_microcredit
      @microcredit = Microcredit.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def microcredit_params
      params.require(:microcredit).permit(:microcreditorg, :microtype, :minstavka, :maxsum, :maxsrok, :pogawenie, :goal, :obespechenie, :zaemcategory, :vozrast, :registration, :documents, :srokvid, :oformlen, :formavid, :poryadpogaw, :dosrpogaw, :paymethod, :image ,:site)
    end
end
