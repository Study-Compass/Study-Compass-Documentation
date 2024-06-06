# Frontend

## **Main Components and Routing**

### **App Component**

The **`App`** component is the main entry point of the application. It wraps the application with various context providers and sets up the routing using **`react-router-dom`**.

### **Context Providers**

1. **GoogleOAuthProvider**: Wraps the application with Google OAuth context, enabling Google authentication.
2. **ErrorProvider**: Provides a context for managing and displaying error messages.
3. **NotificationProvider**: Provides a context for managing notifications.
4. **AuthProvider**: Provides authentication context for managing user authentication state.
5. **CacheProvider**: Provides a caching context for storing and retrieving data efficiently.

### Pages

[Frontend: Room Page](/docs/Frontend/Room%20Page.md)

- Where the magic happens: general functionality of study compass is homed here. Most data fetching and display functionality: visit specific documentation page to see more

[Frontend: Login/Register Page](https://www.notion.so/Frontend-Login-Register-Page-c238ff2f69bb436da2c476e9ef0319b2?pvs=21)

- Login and register page, pretty self explanatory: visit specific documentation page to see more

[Frontend: Error Page](https://www.notion.so/Frontend-Error-Page-cf34735a74704b51ac529fe0e9434d11?pvs=21)

- Error page, by default displays 404, if given an error code (through url) and error message (through local storage), it will be displayed (not fully supported yet): visit specific documentation page to see more

### **Routes**

The **`Routes`** component from **`react-router-dom`** is used to define the different routes in the application:

- **`/`**: Redirects to /room/none
- **`/room/:roomid`**: Displays a specific study room based on the **`roomid`** parameter.
- **`/register`**: Displays the user registration page.
- **`/login`**: Displays the user login page.
- `*`: Displays an error page for undefined routes.
- **`/error/:errorCode`**: Displays an error page with a specific error code.
- **`/onboard`**: Displays the onboarding page for new users.
Created by: James Liu
Created time: February 22, 2024 2:29 PM
Tags: Frontend