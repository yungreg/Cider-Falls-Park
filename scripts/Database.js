/* 
*solved @ 3:09pm 9.21.22 todo: -create database here (ask how to split out Bridge Table called area services) 
*solved todo: -create & export 4 map functions that will make copies of the database objects that can be edited. 
*todo: update database to reflect new ERD 
! think it thru - why are you exporting all 4 functions? what are they doing/where are they going?   
*/
 
const database = {
    currentGuests: [{
        id: 1,
        firstName: "Twilight",
        lastName: "Suzuka",
        areaId: 1,
    }, {
        id: 2,
        firstName: "Aisha",
        lastName: "Clan-Clan",
        areaId: 2,
    }, {
        id: 3,
        firstName: "Jim",
        lastName: "Hawking",
        areaId: 3,
    }, {
        id: 4,
        firstName: "Gene",
        lastName: "Starwind",
        areaId: 4,
    }, {
        id: 5,
        firstName: "Hot-Ice",
        lastName: "Hilda",
        areaId: 5,
    }, {
        id: 6,
        firstName: "Fred",
        lastName: "Lou",
        areaId: 6,
    }],
    
    services: [{
        id: 1,
        name: "Rafting"
    }, {
        id: 2,
        name: "Canoeing"
    }, {
        id: 3,
        name: "Fishing"
    }, {
        id: 4,
        name: "Hiking"
    }, {
        id: 5,
        name: "Picnicking"
    }, {
        id: 6,
        name: "Rock Climbing"
    }, {
        id: 7,
        name: "Lodging"
    }, {
        id: 8,
        name: "Parking"
    }, {
        id: 9,
        name: "Information"
    }, {
        id: 10,
        name: "Zip-Lines"
    }], 

    parkAreas: [{
        id: 1,
        areaName: "Chamfort River",
    }, {
        id: 2,  
        areaName: "Lost Wolf Hiking Trail",
    }, {
        id: 3,        
        areaName: "Lodge",
    }, {
        id: 4,        
      areaName: "Gander River",
    }, {
        id: 5,        
        areaName: "Campgrounds",
    }, {
        id: 6,        
        areaName: "Pine Bluff Trails ",
    }],

    area_services: [{
        id: 1,
        serviceId: 1,
        areaId: 1
    }, {
        id: 2,
        serviceId: 2,
        areaId: 1
    }, {
        id: 3,
        serviceId: 3,
        areaId: 1
    }, {
        id: 4,
        serviceId: 4,
        areaId: 2
    }, {
        id: 5,
        serviceId: 5,
        areaId: 2
    }, {
        id: 6,
        serviceId: 6,
        areaId: 2
    }, {
        id: 7,
        serviceId: 7,
        areaId: 3
    }, {
        id: 8,
        serviceId: 8,
        areaId: 3
    },{
        id: 9,
        serviceId: 9,
        areaId: 3
    },{
        id: 10,
        serviceId: 5,
        areaId: 3
    },{
        id: 11,
        serviceId: 3,
        areaId: 4
    },{
        id: 12,
        serviceId: 4,
        areaId: 4
    },{
        id: 13,
        serviceId: 9,
        areaId: 5
    },{
        id: 14,
        serviceId: 7,
        areaId: 5
    },{
        id: 15,
        serviceId: 8,
        areaId: 5
    },{
        id: 16,
        serviceId: 4,
        areaId: 6
    },{
        id: 17,
        serviceId: 5,
        areaId: 6
    },{
        id: 18,
        serviceId: 10,
        areaId: 6
    }]
}




export const getCurrentGuests = () => {
    return database.currentGuests.map(guests => ({...guests}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(areas => ({...areas}))
}

export const getArea_Services = () => {
    return database.area_services.map(join => ({...join}))
}