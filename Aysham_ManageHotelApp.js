// hotel management app

// book room
// check bookings
// check room availability
// manage rooms
// manage staff 
// generate report

let rooms = [
    {id: 1,room: "A1", level: 1, price: 4, availability: true},
    {id: 2,room: "B1",level: 2, price: 3, availability: true},
    {id: 3,room: "C1", level: 3, price: 5, availability: false},
];
let bookings = [
    {
        room: "C1",
        guestName: "J Martin",
        checkInDate: "10-11-2024",
        checkOutDate: "12-11-2024"
    }
];
let staff = [
    {id:1, name: "Anya", position: "Secretary"},
    {id:2, name: "Jargun", position: "Security"},
    {id:3, name: "Curly", position: "Cook"},
    {id:4, name: "Swansea", position: "Cook"},
    {id:5, name: "Daisuke", position: "Cook"}
];

module.exports = {
    // Add/delete rooms
    manageRooms(action, room, level = 0, price = 0, availability = false) {
    if (action === "add") {
        const roomExists = rooms.findIndex(x => x.room === room);
        if (roomExists !== -1) {
            return `Room ${room} already exists.`;
        }

        rooms.push({
            id: rooms.length + 1,
            room: room,
            level: level,
            price: price,
            availability: availability
        });

        return `Room ${room} added`;
    } 

    else if (action === "remove") 
        {
        const roomIndex = rooms.findIndex(x => x.room === room);
        if (roomIndex === -1) {
            return `Room ${room} does not exist.`;
        }

        rooms.splice(roomIndex, 1);
        return `Room ${room} removed successfully.`;
    } 

    else 
    {
        return `Action ${action} was not recognized, use 'add' or 'remove'.`;
    }
},

    // allow user to book a room
    bookRoom(roomNumber, guestName, checkIn, checkOut) {
        const room = rooms.find(r => r.room === roomNumber && r.availability === true);
        
        if (room){
            room.availability = false;

            bookings.push({
                room: roomNumber,
                guestName: guestName,
                checkInDate: checkIn,
                checkOutDate: checkOut
            });

            return `Room ${roomNumber} has been successfully booked from ${checkIn} to ${checkOut}.`;
        }

        else
        {
            return `Room ${roomNumber} is not available.`;
        }
    },

    checkBookings(filterType = "all", filterValue = "") {
        let filteredBookings;

        if (filterType === "all") {
            // return all
            filteredBookings = bookings;
        } 

        else if (filterType === "room") {
            // filter by room number
            filteredBookings = bookings.filter(booking => booking.room === filterValue);
        } 

        else if (filterType === "guest") {
            // filter by guest name
            filteredBookings = bookings.filter(booking => booking.guestName.toLowerCase() === filterValue.toLowerCase());
        } 

        else 
        {
            return `Invalid filter type. Use "all", "room", or "guest".`;
        }

        if (filteredBookings.length > 0) {
            return filteredBookings.map(booking =>
                `Room ${booking.room} booked by ${booking.guestName} from ${booking.checkInDate} to ${booking.checkOutDate}`
            ).join("\n");
        } 
        
        else {
            return `No bookings found.`;
        }
    },   

    // allow user to check the availability of a room
    checkRoomAvailability(roomNumber) {
        const room = rooms.find(r => r.room === roomNumber);
    
    if (room) {
        return room.availability
            ? `Room ${roomNumber} is available.`
            : `Room ${roomNumber} is not available.`;
    } else {
        return `Room ${roomNumber} does not exist.`;
    }
    },

    // add/delete staff
    manageStaff(action, name, position = "Employee") {
    if (action === "add") 
        {
        const staffExists = staff.findIndex(x => x.name === name);
        if (staffExists !== -1) {
            return `Staff member ${name} already exists.`;
        }

        staff.push({
            id: staff.length+1,
            name: name,
            position: position
        });

        return `Staff member ${name} added successfully.`;
    } 
    
    else if (action === "remove") {
        const staffIndex = staff.findIndex(x => x.name === name);
        if (staffIndex === -1) {
            return `Staff member ${name} does not exist.`;
        }

        staff.splice(staffIndex, 1);
        return `Staff member ${name} removed successfully.`;
    } else {
        return `Action "${action}" was not recognized, use 'add' or 'remove'.`;
    }
},

    // generates a report for:
    // -number of rooms
    // -rooms booked
    // -rooms available
    // -num of staff to manage hotel
    generateReport() {
        const totalRooms = rooms.length;
        const roomsBooked = rooms.filter(room => room.availability === false).length;
        const roomsAvailable = totalRooms - roomsBooked;
        const totalStaff = staff.length;

        return `
        Room and Staff Report:
        ----------------------
        Total number of rooms: ${totalRooms}
        Rooms booked: ${roomsBooked}
        Rooms available: ${roomsAvailable}
        Total number of staff: ${totalStaff}
        `;

    },

}