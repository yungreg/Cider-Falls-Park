/*
*todo: import relevant getter fn() 
*todo: create a variable to store teh getter function and pass into teh function you make
*todo: make fn() that will interpolate the firstname/lastname as a list item for teh HTML & return that value (doesn't need a param)
*/

import { getCurrentGuests, getParkAreas } from "./Database.js";

const parkAreas = getParkAreas()
const currentGuests = getCurrentGuests()



export const currentGuestsList = () => {
    let guestListHTML = "<ul>"

    for (const guest of currentGuests) {
        guestListHTML += `<li id="guest--${guest.id}">${guest.firstName} ${guest.lastName}</li>`
    }

    guestListHTML += "</ul>"
    return guestListHTML
}

