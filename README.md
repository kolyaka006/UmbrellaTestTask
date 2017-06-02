 Description:
 -----------------------------------
 Application write on `Javascript`. To frontend use `Jquery` library. Templates write on `Jade`. To backend used `Nodejs + MongoDB`.
 To work with `Nodejs` used `Express` library. To work with `MongoDB`  used `Mongoose` library. Also used `node-cron` library for delete old links.

 Run application:
-----------------------------------
 ***npm start***
    
 Specification API:
-----------------------------------
Method         | Description
----------------|----------------------
POST '/registration/create-user'     | POST request with parameters {email: String, password: String} for create new user on DB.
GET '/login/sign-in'      | GET request with parameters {email: String, password: String} to get user's token.
GET '/get-all-links-user'   | GET request with token in header; in response will be array with user links.
POST '/create-url'  | POST request with parameters {real: String, short: String} and token in header to create new original and short url pair in DB. If short link was not found it will be created. 
GET '/:url'     | GET request to find pair link by short link in DB, increase of pair link count and redirect to original url.
