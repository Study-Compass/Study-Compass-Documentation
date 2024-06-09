"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[683],{7496:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=o(4848),t=o(8453);const s={},i="Frontend",d={id:"Frontend/Frontend",title:"Frontend",description:"Main Components and Routing",source:"@site/docs/Frontend/Frontend.md",sourceDirName:"Frontend",slug:"/Frontend/",permalink:"/Study-Compass-Documentation/docs/Frontend/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Frontend/Frontend.md",tags:[],version:"current",frontMatter:{},sidebar:"documentation1",previous:{title:"Bug Fixing Guidlines",permalink:"/Study-Compass-Documentation/docs/Development Guidelines/Bug Fixing Guidelines"},next:{title:"Room Page",permalink:"/Study-Compass-Documentation/docs/Frontend/Room Page"}},c={},a=[{value:"<strong>Main Components and Routing</strong>",id:"main-components-and-routing",level:2},{value:"<strong>App Component</strong>",id:"app-component",level:3},{value:"<strong>Context Providers</strong>",id:"context-providers",level:3},{value:"Pages",id:"pages",level:3},{value:"<strong>Routes</strong>",id:"routes",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsx)(n.h2,{id:"main-components-and-routing",children:(0,r.jsx)(n.strong,{children:"Main Components and Routing"})}),"\n",(0,r.jsx)(n.h3,{id:"app-component",children:(0,r.jsx)(n.strong,{children:"App Component"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"App"})})," component is the main entry point of the application. It wraps the application with various context providers and sets up the routing using ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"react-router-dom"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"context-providers",children:(0,r.jsx)(n.strong,{children:"Context Providers"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"GoogleOAuthProvider"}),": Wraps the application with Google OAuth context, enabling Google authentication."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ErrorProvider"}),": Provides a context for managing and displaying error messages."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NotificationProvider"}),": Provides a context for managing notifications."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"AuthProvider"}),": Provides authentication context for managing user authentication state."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CacheProvider"}),": Provides a caching context for storing and retrieving data efficiently."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"pages",children:"Pages"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/Study-Compass-Documentation/docs/Frontend/Room%20Page",children:"Frontend: Room Page"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Where the magic happens: general functionality of study compass is homed here. Most data fetching and display functionality: visit specific documentation page to see more"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.notion.so/Frontend-Login-Register-Page-c238ff2f69bb436da2c476e9ef0319b2?pvs=21",children:"Frontend: Login/Register Page"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Login and register page, pretty self explanatory: visit specific documentation page to see more"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.notion.so/Frontend-Error-Page-cf34735a74704b51ac529fe0e9434d11?pvs=21",children:"Frontend: Error Page"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Error page, by default displays 404, if given an error code (through url) and error message (through local storage), it will be displayed (not fully supported yet): visit specific documentation page to see more"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"routes",children:(0,r.jsx)(n.strong,{children:"Routes"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Routes"})})," component from ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"react-router-dom"})})," is used to define the different routes in the application:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/"})}),": Redirects to /room/none"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/room/:roomid"})}),": Displays a specific study room based on the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"roomid"})})," parameter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/register"})}),": Displays the user registration page."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/login"})}),": Displays the user login page."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"*"}),": Displays an error page for undefined routes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/error/:errorCode"})}),": Displays an error page with a specific error code."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/onboard"})}),": Displays the onboarding page for new users.\nCreated by: James Liu\nCreated time: February 22, 2024 2:29 PM\nTags: Frontend"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>d});var r=o(6540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);