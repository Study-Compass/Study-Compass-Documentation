---
sidebar_position: 1
---
# Naming Conventions

:::info
When contributing to Study Compass, you might notice some instances where best practices, such as variable naming or CSS class conventions, weren't followed. This occurred because the project was initially developed without the intention of adding other contributors, and standard practices weren't fully established at the start. If you encounter such issues, please do not change them yourself; instead, notify James directly.
:::

## **Overview**

This document outlines the naming conventions to be followed in our codebase to ensure consistency, readability, and maintainability. Adhering to these conventions will help in maintaining a clean and understandable code structure.

## **General Guidelines**

- Use meaningful and descriptive names.
- Use camelCase for variables and functions.
- Use PascalCase for classes and components.
- Use UPPER_SNAKE_CASE for constants.
- Avoid abbreviations unless they are widely understood.
- Keep names concise but clear.

### **Variable Naming**

- **Descriptive and meaningful:** Use names that clearly indicate the purpose of the variable.
- **camelCase:** Start with a lowercase letter and capitalize each subsequent word.

```javascript
let userName;
let totalAmount;
let isAvailable;
```

### **Function Naming**

- **Descriptive and action-oriented:** Use verbs that describe what the function does.
- **camelCase:** Start with a lowercase letter and capitalize each subsequent word.

```javascript
function calculateTotal() { ... }
function fetchUserData() { ... }
function isValidEmail(email) { ... }
```

### **Component Naming**

- **PascalCase:** Start with an uppercase letter and capitalize each subsequent word.
- **Nouns:** Use names that represent the entity being created.
- **File Names:** Component file names should always be identical (in content and case) to the component name. Do not change the name of the component on import unless absolutely necessary.

```javascript
function UserProfile() { ... }
function PaymentProcessor() { ... }
function OrderSummary() extends Component { ... }
```

### **Constant Naming**

- **UPPER_SNAKE_CASE:** Use all uppercase letters with underscores separating words.
- **Descriptive and immutable:** Constants should represent values that do not change.

```javascript
const MAX_USER_LIMIT = 100;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_TIMEOUT = 5000;
```

### **CSS Class Naming**

- **Lowercase with hyphens:** Use lowercase letters and separate words with hyphens.

```css
/* Block */
.header { ... }

/* Element */
.header-title { ... }
.header-nav { ... }

/* Modifier */
.header--large { ... }
.header-nav--active { ... }
```

### **Notes**

- Consistency is key: Always follow these conventions to maintain a uniform codebase.
- Review and refactor: Periodically review the code to ensure adherence to these naming conventions and refactor where necessary.

By following these naming conventions, we can create a codebase that is easy to read, understand, and maintain. This will facilitate better collaboration and smoother development processes.
