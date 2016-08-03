class BbqueueController < ApplicationController

  def index
    @bbqs = Bbqueue.all
    render :json => @bbqs
  end

  def show
    @bbq = Bbqueue.find(:id)
    render :json => @bbq
  end


  def new
    @bbq = Bbqueue.new
  end


  def edit
    @bbq = Bbqueue.find(params[:id])
    url = "/bbqueue/#{params[:id]}"
    render :json => {:data => @bbq, :url => url}
  end

  def create
    @bbq = Bbqueue.create({
                      :title => params[:title],
                      :image =>  params[:image],
                      :meat => params[:meat]
                    })
    render :json => @bbq
  end

  def update
    @bbq = Bbqueue.find(params[:id])
    @bbq.update({
                      :title => params[:title],
                      :meat =>  params[:meat]
                    })
    render :json => @bbq
  end

  # DELETE /students/1
  def destroy
    @bbq = Bbqueue.find(params[:id])
    if @bbq
      @bbq.destroy
      render :json => {:deleted => true}
    else
      render :json => {:deleted => false}
    end
  end

end
