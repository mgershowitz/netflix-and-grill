class GrillsController < ApplicationController
def index
    food = params[:food]
    url = "http://api.yummly.com/v1/api/recipes?_app_id=c37dfa7e&_app_key=1e1d63556d43eda1326e848eb3e5b596&q=" + food + "&allowedCuisine[]=cuisine^cuisine-barbeque"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
