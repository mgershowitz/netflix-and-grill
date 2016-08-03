class ShowsController < ApplicationController
  def index
    show = params[:choice]
    title = show.gsub(/\s+/, "")
    url = "https://api-public.guidebox.com/v1.43/US/NjWKCFmsWjhlmlbdnpl8y214EIzPdr/search/title/" + title + "/fuzzy"
    response = HTTParty.get(url)
    # byebug
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
