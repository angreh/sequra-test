Hello,

So, I was caught by surprise I was expecting an project with a full structure then when I
saw no code what so ever. It was a good surprise, but I waste about 1 hour and half picking,
thinking and creating the code structure, including docker and etc .. so I start count time 
from there. I did leave de sample files.

The timers I really spent codding are these below:
 - 1h25: migrations and import data thing ( took to many time heheheh )
 - ~1h: for disbursements cron ( I stuck on docker things, for accessing the database and such, need fix yet =/ )
 - ~50m: doing the API and testing part

 Others things:
  - I do not calculate the fee per order ( the 1%,.95,.85 thing ), I know, it is bad, docker was not my friend at this
    time. I thought there would be time to get back to this ... 
  - I did not follow the directive "You don't need to finish. We value quality over feature-completeness..." at all, I tried
    do a little od everything =P

For start the project follow the steps below:
 - npm i
 - docker-compose up -d
 - npm run migrate:latest ( maybe wait a little before execute this command if output a error )
 - npm run import ( maybe need ctl+c 'cause a little bug )
 - access the route http://localhost:8080/sample/pay for simulate the monday cron
 - access the route http://localhost:8080/api/disbursements/3 for get a very wrong data about the merchant
 - npm test for a simple endpoint test

That's all
Thank you in advance for the opportunity to take the test
