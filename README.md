 Description:
 -----------------------------------
 Application is written in `Javascript`. `Jquery` library is used for frontend. Templates are written in `Jade`. `Nodejs + MongoDB` are used for backend. `Express` library is used for work with `Nodejs`. `Mongoose` library is used for work with `MongoDB`. Also to delete old links `node-cron` library is used.

 Run application:
-----------------------------------
 ***npm start***
    
 Specification API:
-----------------------------------
Method         | Description
----------------|----------------------
POST '/registration/create-user'     | POST request with parameters {email: String, password: String} for create new user in DB.
GET '/login/sign-in'      | GET request with parameters {email: String, password: String} to get user's token.
GET '/get-all-links-user'   | GET request with token in header; in response will be array with user links.
POST '/create-url'  | POST request with parameters {real: String, short: String} and token in header to create new original and short url pair in DB. If short link was not found it will be created. 
GET '/:url'     | GET request to find pair link by short link in DB, increase of pair link count and redirect to original url.
