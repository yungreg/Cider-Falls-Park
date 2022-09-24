/*
*todo: import relevant getter fn() 
todo: create a variable to store teh getter function and pass into teh function you make
make an IF else that will determine if the 
todo: make fn() that will interpolate the correct available service as a list item for the correct park area as HTML & return that value (doesn't need a param)
*/
import { getParkAreas } from "./Database.js";
import { getServices } from "./Database.js";
import { getArea_Services } from "./Database.js";

const parkAreas = getParkAreas()
const services = getServices()
const areaServices = getArea_Services()

export const servicesAvailable = () => {  
        let servicesHTML = "<ul>"
    
        for (const service of services) { 
            // todo: finish line 21
            servicesHTML += `<li id="service-${service.id}">${service.name}</li>`
        }
    
        servicesHTML += "</ul>"
        return servicesHTML
}

/*
*todo: create click event for the services list, 
todo: show what service is in which area. i'll need to refactor the forof on line 40
!take notes from brewed awakenings on how to incorporate this join table 
*/

document.addEventListener(
  "click", 
  (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("service")) {
      const [, serviceId] = itemClicked.id.split("-");
      
      for (const areaService of areaServices) {
        if (parseInt(serviceId) === areaService.areaId) {
            window.alert(`${parkAreas.areaName} currently supports ${services.name}. How fun!`);
          // maybe another loop to puyll the services name from services
        }
      }
    }
  }
); 
