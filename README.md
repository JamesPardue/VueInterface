# Vue Interface

## To Run
- Download zip file (via the '<> Code' button)
- Unzip to a folder on your hard drive
- Navigate to the 'vue-interface' folder (this folder will contain env.d, vite.config, etc.)
- Open that folder in the terminal
- Enter 'npm install' into the terminal (if you do not already have npm installed go here: https://nodejs.org/en/download)
- Enter 'npm run dev' into the terminal
- Open a Web Browser and navigate to the address specified (ex: http://localhost:5173/)

## Notes and Assumptions
- The App has 3 pages: a List (displaying all the current tickets), a Form (allowing the user to enter additional tickets), and a Details Display (allowing the user to view tickets).
- In the Form the 'Cancel' button clears the screen as specified in the directions, the 'Back' button returns to the main screen. It would probably be best to make 'Cancel' return to the List but I wanted to follow the directions and demonstrate the ability to clear the form.
- The App will switch to a mobile view if the width is smaller than 750px.
- In order to better demonstrate the App, it is initialized to have two starting tickets.
- In addition to their other fields, tickets have an 'id' (an integer). This number is counted and updated as the tickets are updated to ensure each created ticket has a unique id.
- Clicking the 'Add Ticket' button in the form adds 'pretend files'. This is an array of strings with names that increment an integer on the back (ex: nameoffileattached1.ext, nameoffileattached2.ext). These also have an id to ensure no file has the same name. When a new file is added it will find the first missing file (lowest unused id) and add a file using the number.
- There were multiple way to break down the possible type definitions. Without knowing some of the broader constraints this app might exist in a mix of 'seeming best fit) was used. A prepopulated array (for the ticket types), union types (for the ticket category), and a discriminated union (for the display state).
