const hotel= require("./Aysham_ManageHotelApp.js");

console.log(hotel.generateReport());

console.log("-------------------");

console.log(hotel.bookRoom("A1","aaa", "11-10-2024", "13-10-2024"));
console.log(hotel.bookRoom("A1", "aaa", "11-10-2024", "13-10-2024"));

console.log("-------------------");

console.log(hotel.checkBookings("all"));
console.log("--");
console.log(hotel.checkBookings("room", "C1"));
console.log("--");
console.log(hotel.checkBookings("guest", "aaa"));
console.log("--");
console.log(hotel.checkBookings("guest", "bbb"));

console.log("-------------------");

console.log(hotel.checkRoomAvailability("B1"));
console.log(hotel.checkRoomAvailability("A1")); //should be unavailable because of booking above
console.log(hotel.checkRoomAvailability("C1"));

console.log("-------------------");

console.log(hotel.manageRooms("add", "D1", 2, 6, true)); // adds a new room D1
console.log(hotel.manageRooms("add", "A1")); // attempt to add an existing room
console.log(hotel.manageRooms("remove", "B1")); // removes room B1
console.log(hotel.manageRooms("remove", "FF")); //attempts to remove a room that doesnt exist

console.log("-------------------");

console.log(hotel.manageStaff("add", "Grr", "cook")); 
console.log(hotel.manageStaff("add", "Swansea", "cook")); 
console.log(hotel.manageStaff("remove", "Curly")); 
console.log(hotel.manageStaff("remove", "jsdjkdjks"));

console.log("-------------------");



