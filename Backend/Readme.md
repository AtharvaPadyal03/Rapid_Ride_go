
# /user/register Endpoint Documentation

## Overview

The `/user/register` endpoint allows new users to sign up by providing their details. The endpoint validates the input data, creates a new user by hashing the password, and returns an authentication token along with the user information once the user is successfully created.

## Endpoint Details

- **Method:** POST  
- **URL:** `/user/register`

## Request Body

The endpoint expects a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"   // This field is optional
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

> **Note:**  
> - `fullname.firstname` must be at least 3 characters long.  
> - `email` must be a valid email address and at least 6 characters long.  
> - `password` must be at least 8 characters long.

## Responses

### Success

- **Status Code:** 200 OK  
- **Response Body:**

```json
{
  "messege": "User created successfully",
  "token": "<JWT_TOKEN>",
  "user": {
    // user object with properties (note: password will be excluded due to select:false)
  }
}
```

### Failure

#### Validation Errors

- **Status Code:** 400 Bad Request  
- **Response Body:**

```json
{
  "errors": [
    {
      "msg": "Error message indicating failed validation",
      "param": "fieldName",
      "location": "body"
    }
    // ... array of error objects for each validation issue
  ]
}
```

#### Missing Required Fields

If any required field is missing when invoking the service, an error will be thrown indicating that all required fields must be provided.

## Additional Information

- The endpoint leverages input validation provided by [`express-validator`](https://github.com/express-validator/express-validator).
- The user password is hashed using [`bcrypt`](https://www.npmjs.com/package/bcrypt) before saving.
- A JWT token is generated using [`jsonwebtoken`](https://github.com/auth0/node-jsonwebtoken) when the user is created.
```

