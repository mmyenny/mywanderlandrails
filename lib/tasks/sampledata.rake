namespace :sampledata do
  desc "TODO"
  task create: :environment do

    place = Place.create(location: "Chicago, IL")

    album = place.albums.create(title: "Family Vacation")

    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

    album = place.albums.create(title: "Summer")

    photo = album.photos.create(caption: "Hiking with friends")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

    photo = album.photos.create(caption: "Shenanigans")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")



    place = Place.create(location: "Tampa, FL")

    album = place.albums.create(title: "XMAS")
    
    photo = album.photos.create(caption: "Yearly camping lalapalooza - summer 2015")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

    album = place.albums.create(title: "Home")
    
    photo = album.photos.create(caption: "Our new home")
    photo.image.attach(io: File.open(Rails.root.join("public/mountains2.jpeg")), filename: "mountains2.jpeg")

  end

end
