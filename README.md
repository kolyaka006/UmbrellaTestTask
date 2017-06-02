 -----------------------------------
 Description:
 Application write on javascript. To frontend use 'Jquery' library. Templates write on 'jade'. To backend used 'Nodejs' + 'MongoDB'.
 To work with 'Nodejs' used 'Express' library. To work with 'MongoDB'  used 'Mongoose' library. Also used 'node-cron' library for delete old links.

-----------------------------------
 Run application:
    npm start
-----------------------------------
 Specification API:

POST '/registration/create-user' -- POST request with params {email: String, password: String} for create new user on DB.
GET '/login/sign-in' -- GET request with params {email: String, password: String} for get user's token.
GET '/get-all-links-user' -- GET request with token in header, in response array with user links.
POST '/create-url' -- POST request with params {real: String, short: String} and token in header for create new original and short url pair in DB.
    If short link not specified her will created.
GET '/:url' -- GET request for find short url pair in DB, increase count link and redirect on original url.
