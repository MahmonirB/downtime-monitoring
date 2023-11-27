# Downtime-Monitoring

A nodejs project to monitor a website to catch downtime.

## How to run

1. Clone the project

2. Create a DB in mongo DB:
   - Includes a table with `Downlog` naming and two fields `timestamp` and `url`. (same as models/down-log.js)
   - Set database url into `db.js` file

3. Run project as below command:
    > EMAIL_USER_NAME=YOUR_EMAIL_ADDRESS EMAIL_HOST_NAME=localhost:27017  nodemon index.js

4. Then in postman you can try a POST http request with `localhost:3000/` url and body as `{ url: "YOUR_DESIRE_WEBSITE_TO_MONITOR" }`
