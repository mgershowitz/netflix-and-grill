class ShowsController < ApplicationController
  def index
    url = "https://api-public.guidebox.com/v1.43/US/NjWKCFmsWjhlmlbdnpl8y214EIzPdr/shows/all/50/25/all/all"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
