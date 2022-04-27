Thank you for your interest in working at Railz as a member of the Engineering Team!

In this challenge, we hope to gain a better understanding of how you approach technical problems and how you might implement solutions. In addition, it helps us to determine your comfort level with the technologies we use.

Once submitted, we will work on scheduling you for a technical review.

Any questions or clarifications can be sent to us via email, and we will respond as soon as possible.

### The Challenge
It is our aim to create a React application that allows users to search for an address and see it displayed on Google Maps using the Google Maps API. The react application should also utilize a backend API, which we must design. Our clients should be able to access information through the backend APIs without having to use the UI.

- The Front-end application should follow the Figma layout below.
  - **Figma link** - https://www.figma.com/file/O149rEPdaAm5FKuF7TaEST/Interview
  - **Google Maps JavaScript API Reference** - https://developers.google.com/maps/documentation/javascript/overview
  - **Search Page Requirements**
    - Restrict input lengths to a maximum of 100 characters 
    - Each input is required. 
    - The search button should only navigate to the result page if the inputs don’t pass validation.
  - **Result Page Requirements** 
    - The displayed address is as entered in the search page
    - The time zone and embedded map should correspond to the address entered in the search page based on the backend API results returned. 
    - The exit button in the top right takes you to the search page with the input cleared.
- The Backend API should follow the below:
  - **Google Web API Reference** - https://developers.google.com/maps/documentation/directions/web-service-best-practices
    - **Geocoding API** - https://developers.google.com/maps/documentation/geocoding/start
    - **Elevation API** - https://developers.google.com/maps/documentation/elevation/start
    - **Time Zone API** - https://developers.google.com/maps/documentation/timezone/get-started
  - **Requirement**
    - **Input:** Takes an address with the following fields: street, city, state, country
    - **Validation:** If any input params are not passed in, return a 400 status code with the appropriate error message
    - **Output:**  If validation passes, returns 200 status code with the following fields: longitude, latitude, elevation, time zone (IANA String ID)

**GOOGLE API KEY:** *AIzaSyDXUdyViVOAzBkr6hpsvL249_HH8hjpr_s*

### Solution
The challenge can be solved in different ways, which is why the solution requirements are ambiguous.

Give us a working solution in code, including your assumptions, along with an explanation of the decisions you made and why (Drawings are optional). You may use any third-party libraries or frameworks to save time.

Make sure you call Google services in the most efficient way possible e.g. simultaneously when possible if using JavaScript. It's essential to have clean code, consistent styles, and meticulous attention to detail.

Once you're done, please provide us with a link to your solution's code repository. Describe in your email any conditions you would like us to follow in order to run your application.


### Code Submit

Please organize, design, test and document your code as if it were
going into production - then push your changes to the master branch.

All the best,
The Railz Engineering Team
