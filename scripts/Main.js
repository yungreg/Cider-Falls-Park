/*
*todo: import getter functions from database
*todo: create variable for your query selector
*todo: use that variable to destignate innerHTML, and store that connection in a variable
todo: sketch out the body html including sections/aside
*/

import { getCurrentGuests, getServices, getParkAreas, getArea_Services,  } from "./Database.js";
import { currentGuestsList } from "./CurrentGuests.js";
import { servicesAvailable } from "./Services.js";

import { areaGuestsList } from "./ParkAreas.js";

const mainContainer = document.querySelector("#bodyContent")


/*
html needs:
-heade
-footer
body section of 6 cells, 2 column 2 row
- aside with currnet guests
!h2 and below for body
*/ 

/* 
*todo: create a fn() that will fill in the park areas, so they aren't hardcoded in
*todo: make make list items of all services, and then spread them out on the page. 
todo: make the services list clickable to show all the areas that support that service. (use teh join table in database)
*/

const appHTML = `
<section class="services-available">
    ${servicesAvailable()}
</section>

<h2>"Park Areas To Enjoy!"</h2>
<article class="areas">
    ${areaGuestsList()}
</article>

<aside class="aside">
    <h3>Current Guests!</h3>
    ${currentGuestsList()}
</aside> 
`

mainContainer.innerHTML = appHTML