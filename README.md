# Assignment 1

This node module app provides functions to help manage a hotel's operations, like managing rooms, booking, staff and is also able to generate a report.

## Set-Up

1. Clone or download this project
2. Install Node.js if you have not already installed it

Import this module into your main application and use the functions you need to perform your operations.

## Functions

For the following examples, the import would look like this:

```javascript
const hotel = require("./Aysham_ManageHotelApp");
```

### manageRooms(action, room, level, price, availability)

This function adds or removes a room in the hotel. To add a room, you need to provide the name, the level of the hotel it is on, the price for a night, and whether it is currently available (by which true for available, and false for not available).

Example:

```javascript
//Add a room
console.log(hotel.manageRooms("add", "D1", 2, 3, true));

//remove a room
console.log(hotel.manageRooms("remove", "D1");)
```

### bookRoom(roomNumber, guestName, checkIn, checkOut)

This function books an available room for specified dates, and gives an error code when the room is not available.

Example:

```javascript
console.log(hotel.bookRoom("A1", "Jane Doe", "15-11-2024", "17-11-2024"));
```

### checkBookings(filterType, filterValue)

This function lists bookings based on a filter ("all","room","guest").

Example:

```javascript
// View all bookings
console.log(hotel.checkBookings("all"));

// Filter bookings by room
console.log(hotel.checkBookings("room", "A1"));

// Filter bookings by guest name
console.log(hotel.checkBookings("guest", "Jane Doe"));
```

### checkRoomAvailability(roomNumber)

This function outputs the availability of a room.

Example:

```javascript
console.log(hotel.checkRoomAvailability("A1"));
```

### manageStaff(action, name, position)

This function allows the user to add or remove staff members. To add a staff member, you need to specify their name and position. To remove a staff member, you only need to specify their name.

Example:

```javascript
// Add a new staff member
console.log(hotel.manageStaff("add", "Jane Smith", "Housekeeping"));

// Remove a staff member
console.log(hotel.manageStaff("remove", "Jane Smith"));
```

### generateReport()

This function provides a summary of the following information:

- Total number of rooms in the hotel
- Rooms that have been booked
- Rooms that are available
- Total number of staff working in the hotel

Example:

```javascript
console.log(hotel.generateReport());
```

# References

Provide the references that you have used to support your assignment.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
