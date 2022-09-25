/* 
!this... might not be needed: 
*todo: import relevant getter fn() 
*todo: create a variable to store teh getter function and pass into teh function you make

*todo: create a fn() that dynamically adds teh park areas to Main.js //! make this function iterate only the name thats needed
*todo: create click event listener for the title of each parkArea
*todo: to find the amount of guests in each parkarea, import teh guests map, and use teh length function. everyone will just be doing a tour together or something. lol
*/

import { getParkAreas, getCurrentGuests } from "./Database.js";

const guestsInArea = getCurrentGuests()
const parkAreas = getParkAreas()

// todo 
export const areaGuestsList = () => {
  let areaTitleHTML = ""

  for (const location of parkAreas) {
   areaTitleHTML += `<section id="area--${location.id}"><h3 id="specificArea-${location.id}">${location.areaName}</h3></section>`
    
  }
  return areaTitleHTML
}
  
document.addEventListener(
  "click", 
  (clickEvent) => {
    const itemClicked = clickEvent.target;
// ! question: how does .startsWith() get its value? what am i supposed to be passing in as a parameter to help it find what I need it to find
    if (itemClicked.id.startsWith("specificArea")) {
      const [, areaId] = itemClicked.id.split("-");
// console.log(areaId)
      for (const parkArea of parkAreas) {
        if (parkArea.id === parseInt(areaId)) {
          window.alert(`${parkArea.areaName} currently has ${guestsInArea.length} guests. How fun!`);
        }
      }
    }
  }
);


// export const Walkers = () => {
//     let walkerHTML = "<ul>"

//     for (const walker of walkers) {
//         walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
//     }

//     walkerHTML += "</ul>"
//     return walkerHTML
// }

