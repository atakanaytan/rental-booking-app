

const mongoose = require('mongoose');

const user1_Id = mongoose.Types.ObjectId(); 
const user2_Id = mongoose.Types.ObjectId();

const image1_Id = mongoose.Types.ObjectId(); 
const image2_Id = mongoose.Types.ObjectId(); 
const image3_Id = mongoose.Types.ObjectId(); 

exports.images = [
  {
    _id: image1_Id,
    cloudinaryId: 'image-1_lgsjwh',
    url: 'https://res.cloudinary.com/rentalnow/image/upload/v1603046331/image-1_lgsjwh.jpg'
  },
  {
    _id: image2_Id,
    cloudinaryId: 'image-2_ximvj4',
    url: 'https://res.cloudinary.com/rentalnow/image/upload/v1603046331/image-2_ximvj4.jpg'
  },
  {
    _id: image3_Id,
    cloudinaryId: 'image-3_m1mcmj',
    url: 'https://res.cloudinary.com/rentalnow/image/upload/v1603046331/image-3_m1mcmj.jpg'
  }

]

exports.users = [{
  _id: user1_Id,
  username: "Test User",
  email: "test@gmail.com",
  password: "testtest"
}, {
  _id: user2_Id,
  username: "Test User2",
  email: "test2@gmail.com",
  password: "testtest2"
}]


exports.rentals = [{
  title: "Nice view on ocean",
  city: "San Francisco",
  street: "Main street",
  category: "condo",
  image: image1_Id,
  numOfRooms: 4,
  shared: true,
  description: "Very nice apartment in center of the city.",
  dailyPrice: 43,
  owner: user1_Id
},
{
  title: "Modern apartment in center",
  city: "New York",
  street: "Time Square",
  category: "apartment",
  image: image2_Id,
  numOfRooms: 1,
  shared: false,
  description: "Very nice apartment in center of the city.",
  dailyPrice: 11,
  owner: user1_Id
},
{
  title: "Old house in nature",
  city: "Bratislava",
  street: "Letna 7",
  category: "house",
  image: image3_Id,
  numOfRooms: 5,
  shared: true,
  description: "Very nice apartment in center of the city.",
  dailyPrice: 23,
  owner: user2_Id
}]
