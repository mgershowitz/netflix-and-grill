# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

shows = [
  {title:"friends", image:"http://static-api.guidebox.com/thumbnails_small/1737-3749269745-208x117.jpg", meat:"steak"},
  {title:"frasier",image:"http://static-api.guidebox.com/thumbnails_small/1760-3627545065-208x117.jpg", meat:"pork"}
]


Bbqueue.create(shows)


