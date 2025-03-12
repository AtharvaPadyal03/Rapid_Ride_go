# Backend API Documentation

## /users/register Endpoint

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Required Data
- `username` (string): The desired username of the user.
- `email` (string): The email address of the user.
- `password` (string): The password for the user account.

### Status Codes
- `201 Created`: The user was successfully registered.
- `400 Bad Request`: The request was invalid or missing required data.
- `409 Conflict`: The username or email already exists.
- `500 Internal Server Error`: An error occurred on the server.

### Example Request
```json
{
    "username": "john_doe",
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

### Example Response
```json
{
    "message": "User registered successfully."
}
```