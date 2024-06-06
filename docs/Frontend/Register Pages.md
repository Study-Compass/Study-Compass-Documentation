---
sidebar_position: 2
---
# Login/Register Pages

## **Overview**

This documentation covers the implementation details of the Login and Register pages in a React application. These pages are built to handle user authentication, including login, registration, and Google OAuth login.

## Key Features

- **Login Form**: Allows users to log in using their email and password or Google OAuth.
- **Register Form**: Enables users to register by providing a username, email, and password, or by using Google OAuth.
- **Authentication Handling**: Uses custom hooks for managing authentication state and Google OAuth login.
- **Navigation**: Redirects users based on authentication state.

## State Management

### Login Form

- **isAuthenticated**: Determines if the user is already authenticated.
- **valid**: Boolean state indicating if the form is valid for submission.
- **formData**: Holds the user's email and password input.
- **errorText**: Stores error messages to display on the form.
- **loadContent**: Controls whether the content should be loaded based on OAuth state.

### Register Form

- **isAuthenticated**: Determines if the user is already authenticated.
- **valid**: Boolean state indicating if the form is valid for submission.
- **formData**: Holds the user's username, email, and password input.
- **sent**: Prevents multiple OAuth requests.
- **loadContent**: Controls whether the content should be loaded based on OAuth state.
- **errorText**: Stores error messages to display on the form.

## Effects

### Login Form

- **useEffect**: Checks if the user is authenticated and redirects them if true.
- **useEffect**: Validates the form data whenever the email or password changes.
- **useEffect**: Handles the Google OAuth flow by extracting the authorization code from the URL.

### Register Form

- **useEffect**: Handles the Google OAuth flow by extracting the authorization code from the URL.
- **useEffect**: Checks if the user is authenticated and redirects them if true.
- **useEffect**: Validates the form data whenever the username, email, or password changes.

## Functions

### Login Form

- **handleChange**: Updates the formData state when the user types in the input fields.
- **handleSubmit**: Handles the form submission, attempts to log in the user, and navigates them on success.
- **google**: Initializes the Google OAuth login process.
- **failed**: Sets an error message and navigates to the login page if Google OAuth fails.
- **register**: Navigates to the registration page.

### Register Form

- **handleChange**: Updates the formData state when the user types in the input fields.
- **handleSubmit**: Handles the form submission, attempts to register the user, and logs them in on success.
- **google**: Initializes the Google OAuth login process.
- **goToLogin**: Navigates to the login page.

## **Subcomponents and External Components**

- **useAuth**: Custom hook to handle authentication logic.
- **useGoogleLogin**: Hook from `@react-oauth/google` for handling Google OAuth.
- **Header**: A reusable header component.
- **generalIcons**: Object containing various icons used in the forms.

## **Notes**

- The forms rely heavily on the `useAuth` hook for managing authentication state and logic.
- Google OAuth flow uses the `@react-oauth/google` package for integration.
- The form components are styled using CSS modules (`Forms.css`).
- Error handling is basic and could be improved with more detailed user feedback.
- Ensure all required packages are installed (`react-router-dom`, `axios`, `@react-oauth/google`).

This documentation provides an overview and details for the Login and Register pages. For further development, consider enhancing the error handling and adding more user feedback mechanisms.