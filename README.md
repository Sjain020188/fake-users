This was created during my time as a student at Code Chrysalis
Fake Users API

This is an awesome API which you can use to generate random data for 1000's of users.

In order to use this repository

- Fork the repository
- Clone it on your local machine
- install all dependencies yarn dev
- start the server yarn start
- Create Postgresql database on your computer
- Connect to that database
- Run migration yarn migrate
- Seed data in your DB knex seed:run
- go to localhost://3000 on your local machine

This API has following endpoints

1. http://localhost:3000/users (GET)
   List random data of thousands of users. It gives following details

- ID
- Name
- Country
- Phone number
- Mobile Number
- Email
- Skype ID
- Line ID
- Whatsapp number
- Viber number
- Native Languages
- Language 2
- Language 3
- Availaibility
- Credits
- Created At

You can use query parameters in this endpoint to get spefic user
Eg: http://localhost:3000/users?lang3=French&name=Dante
Will give you users with name Dante and language 3 as French

2.  http://localhost:3000/users/:lang (POST)
    Additional endpoint to get user with particular native language

3.  http://localhost:3000/users (POST)
    You can use this endpoint to add data to users table

4.  http://localhost:3000/languages (GET)
    It gives you data of all languages of world

APP consuming this API

Go to http://localhost:3000/
This is a small application consuming this API

1.  Enter native language in search box and it will give you all users of that native language
2.  Click on Signup. Fill the form. Data will be added to users table.
