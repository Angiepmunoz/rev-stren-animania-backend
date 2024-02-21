Express 


## Anatomy of a Web Application 
- client: computer designated to use or view website 
- server: is just a computer that can receive request and respond to those request 
- UI: user interface - what is on the page
- UX - user experience or how does it feel for a user to interact with a website 
- backend - made up of two parts:
    - API: how the request made to the server are routed
    - Database: where we store out information 
- frontend - typically what the user sees
    - Where we collect the data from the user and make appropriate request based off those needs



## URL 
```
 https://www.example.org:3000/hello/world/index.html?name=foo&limit=20#footer
 \___/ \_______________/ \__/ \___________________/ \_______________/ \____/
protocol  host/domain    port         path            query-string  hash/fragment
```


### HTTP Protocol: always start with a request and for every request there can only be one response 

These are four ways of interacting with data and we reference it as CRUD (create, read update, delete)
- POST
- GET 
- PUT/PATCH
- DELETE 


HTTP sends data as strings. It is made up of 2 parts (header and body)


[HTTP Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)


- Host/Domain - The server name that provides the resource

## Routes 
```javascript
app.get("/", (request, response)=>{
    response.send("Hello World")
});
```

- app - is an instance of express
- get - http method for our request
- middleware - a function that has access to the req and res object, the next function and can stop our request-response cycle.

### Restful Routes

|  #  |   Action   |      URL       | HTTP Verb |    CRUD    |                Description                 |
| :-: | :--------: | :------------: | :-------: | :--------: | :----------------------------------------: |
|  1  | **Create** |   /animes   |   POST    | **C**reate |           Create a new anime            |
|  2  |  _Index_   |   /animes   |    GET    |  **R**ead  |   Get a list (or index) of all animes   |
|  3  |  **Show**  | /animes/:id |    GET    |  **R**ead  | Get an individual view (show one anime) |
|  4  |   Update   | /animes/:id |    PUT    | **U**pdate |             Update a anime              |
|  5  |  Destroy   | /animes/:id |  DELETE   | **D**elete |             Delete a anime              |

