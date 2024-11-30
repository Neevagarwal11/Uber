
# **User Registration API**

## **Endpoint**: `/users/register`

### **Description**
This endpoint allows users to register by providing their first name, last name, email, and password. The server validates the input, hashes the password, and creates a new user in the database. Upon successful registration, a JWT authentication token is returned.

---

### **Request Method**
`POST`

---

### **Request Headers**
- `Content-Type: application/json`

---

### **Request Body**
The request body must be in JSON format and include the following fields:

| Field                | Type    | Required | Description                                       |
|----------------------|---------|----------|---------------------------------------------------|
| `fullname.firstname` | String  | Yes      | The user's first name (at least 3 characters).    |
| `fullname.lastname`  | String  | Yes      | The user's last name.                            |
| `email`              | String  | Yes      | A valid email address.                           |
| `password`           | String  | Yes      | A password with a minimum length of 6 characters.|

#### **Example Request Body**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

---

### **Validation Rules**
- **`email`**: Must be a valid email format.  
  Example error message: `Invalid Email`.
  
- **`fullname.firstname`**: Must contain at least 3 characters.  
  Example error message: `First Name shall consist at least 3 characters.`

- **`password`**: Must be at least 6 characters long.  
  Example error message: `Password shall be minimum 6 characters long.`

---

### **Response**

#### **Success (201 Created)**
If the user is successfully registered, the server returns the following:

| Field  | Type    | Description                   |
|--------|---------|-------------------------------|
| `token`| String  | JWT token for authentication. |
| `user` | Object  | The newly created user object.|

#### **Example Success Response**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

---

#### **Failure (400 Bad Request)**
If the input validation fails, the server responds with an array of error messages.

#### **Example Error Response**
```json
{
  "errors": [
    {
      "msg": "First Name shall consist at least 3 characters.",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

### **Status Codes**
| Status Code | Description                                         |
|-------------|-----------------------------------------------------|
| `201`       | User created successfully.                         |
| `400`       | Bad request due to validation errors.              |
| `500`       | Internal server error. (Database or hashing issues)|

---

### **Implementation Details**
- **Validation Middleware**:
  - Validates the `email`, `fullname.firstname`, and `password` fields using `express-validator`. [See `userRoutes.js`](21).

- **User Creation**:
  - The `createUser` method in `userService` ensures all required fields are present, hashes the password, and saves the user to the database. [See `userService.js`](22).

- **Password Hashing**:
  - The password is hashed using `bcrypt` before being stored. [See `userController.js`](23).

- **JWT Token**:
  - A JWT token is generated using the `generateAuthToken` method defined in the user model.

---

### **Testing**
Use tools like Postman or curl to test the endpoint:
```bash
curl -X POST http://localhost:<PORT>/users/register \
     -H "Content-Type: application/json" \
     -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"johndoe@example.com","password":"securepassword"}'
```

---
