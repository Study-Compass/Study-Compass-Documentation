"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[55],{5025:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(4848),i=s(8453);const r={sidebar_position:2},o="Login/Register Pages",l={id:"Frontend/Register Pages",title:"Login/Register Pages",description:"Overview",source:"@site/docs/Frontend/Register Pages.md",sourceDirName:"Frontend",slug:"/Frontend/Register Pages",permalink:"/docs/Frontend/Register Pages",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Frontend/Register Pages.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Room Page",permalink:"/docs/Frontend/Room Page"},next:{title:"SearchBar Component",permalink:"/docs/Frontend/SearchBar Component"}},a={},d=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"Key Features",id:"key-features",level:2},{value:"State Management",id:"state-management",level:2},{value:"Login Form",id:"login-form",level:3},{value:"Register Form",id:"register-form",level:3},{value:"Effects",id:"effects",level:2},{value:"Login Form",id:"login-form-1",level:3},{value:"Register Form",id:"register-form-1",level:3},{value:"Functions",id:"functions",level:2},{value:"Login Form",id:"login-form-2",level:3},{value:"Register Form",id:"register-form-2",level:3},{value:"<strong>Subcomponents and External Components</strong>",id:"subcomponents-and-external-components",level:2},{value:"<strong>Notes</strong>",id:"notes",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"loginregister-pages",children:"Login/Register Pages"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:(0,t.jsx)(n.strong,{children:"Overview"})}),"\n",(0,t.jsx)(n.p,{children:"This documentation covers the implementation details of the Login and Register pages in a React application. These pages are built to handle user authentication, including login, registration, and Google OAuth login."}),"\n",(0,t.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Login Form"}),": Allows users to log in using their email and password or Google OAuth."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Register Form"}),": Enables users to register by providing a username, email, and password, or by using Google OAuth."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authentication Handling"}),": Uses custom hooks for managing authentication state and Google OAuth login."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Navigation"}),": Redirects users based on authentication state."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"state-management",children:"State Management"}),"\n",(0,t.jsx)(n.h3,{id:"login-form",children:"Login Form"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"isAuthenticated"}),": Determines if the user is already authenticated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"valid"}),": Boolean state indicating if the form is valid for submission."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"formData"}),": Holds the user's email and password input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"errorText"}),": Stores error messages to display on the form."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"loadContent"}),": Controls whether the content should be loaded based on OAuth state."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"register-form",children:"Register Form"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"isAuthenticated"}),": Determines if the user is already authenticated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"valid"}),": Boolean state indicating if the form is valid for submission."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"formData"}),": Holds the user's username, email, and password input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"sent"}),": Prevents multiple OAuth requests."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"loadContent"}),": Controls whether the content should be loaded based on OAuth state."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"errorText"}),": Stores error messages to display on the form."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"effects",children:"Effects"}),"\n",(0,t.jsx)(n.h3,{id:"login-form-1",children:"Login Form"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useEffect"}),": Checks if the user is authenticated and redirects them if true."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useEffect"}),": Validates the form data whenever the email or password changes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useEffect"}),": Handles the Google OAuth flow by extracting the authorization code from the URL."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"register-form-1",children:"Register Form"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useEffect"}),": Handles the Google OAuth flow by extracting the authorization code from the URL."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useEffect"}),": Checks if the user is authenticated and redirects them if true."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useEffect"}),": Validates the form data whenever the username, email, or password changes."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"login-form-2",children:"Login Form"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"handleChange"}),": Updates the formData state when the user types in the input fields."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"handleSubmit"}),": Handles the form submission, attempts to log in the user, and navigates them on success."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"google"}),": Initializes the Google OAuth login process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"failed"}),": Sets an error message and navigates to the login page if Google OAuth fails."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"register"}),": Navigates to the registration page."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"register-form-2",children:"Register Form"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"handleChange"}),": Updates the formData state when the user types in the input fields."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"handleSubmit"}),": Handles the form submission, attempts to register the user, and logs them in on success."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"google"}),": Initializes the Google OAuth login process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"goToLogin"}),": Navigates to the login page."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"subcomponents-and-external-components",children:(0,t.jsx)(n.strong,{children:"Subcomponents and External Components"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useAuth"}),": Custom hook to handle authentication logic."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useGoogleLogin"}),": Hook from ",(0,t.jsx)(n.code,{children:"@react-oauth/google"})," for handling Google OAuth."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Header"}),": A reusable header component."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"generalIcons"}),": Object containing various icons used in the forms."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:(0,t.jsx)(n.strong,{children:"Notes"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The forms rely heavily on the ",(0,t.jsx)(n.code,{children:"useAuth"})," hook for managing authentication state and logic."]}),"\n",(0,t.jsxs)(n.li,{children:["Google OAuth flow uses the ",(0,t.jsx)(n.code,{children:"@react-oauth/google"})," package for integration."]}),"\n",(0,t.jsxs)(n.li,{children:["The form components are styled using CSS modules (",(0,t.jsx)(n.code,{children:"Forms.css"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"Error handling is basic and could be improved with more detailed user feedback."}),"\n",(0,t.jsxs)(n.li,{children:["Ensure all required packages are installed (",(0,t.jsx)(n.code,{children:"react-router-dom"}),", ",(0,t.jsx)(n.code,{children:"axios"}),", ",(0,t.jsx)(n.code,{children:"@react-oauth/google"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This documentation provides an overview and details for the Login and Register pages. For further development, consider enhancing the error handling and adding more user feedback mechanisms."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);