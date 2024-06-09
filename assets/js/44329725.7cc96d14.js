"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[431],{5348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(4848),r=t(8453);const s={sidebar_position:7},i="CacheProvider Component & CacheContext",c={id:"Frontend/CacheProvider Component & CacheContext",title:"CacheProvider Component & CacheContext",description:"Created by: James Liu",source:"@site/docs/Frontend/CacheProvider Component & CacheContext.md",sourceDirName:"Frontend",slug:"/Frontend/CacheProvider Component & CacheContext",permalink:"/Study-Compass-Documentation/docs/Frontend/CacheProvider Component & CacheContext",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Frontend/CacheProvider Component & CacheContext.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"documentation1",previous:{title:"AuthProvider Component & AuthContext",permalink:"/Study-Compass-Documentation/docs/Frontend/AuthProvider Component & AuthContext"},next:{title:"ErrorProvider Component & ErrorContext",permalink:"/Study-Compass-Documentation/docs/Frontend/ErrorProvider Component & ErrorContext"}},a={},d=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Functionality</strong>",id:"functionality",level:2},{value:"<strong>Key Hooks</strong>",id:"key-hooks",level:2},{value:"<strong>Functions</strong>",id:"functions",level:2},{value:"<strong>getRooms</strong>",id:"getrooms",level:3},{value:"<strong>getRoom</strong>",id:"getroom",level:3},{value:"<strong>getFreeRooms</strong>",id:"getfreerooms",level:3},{value:"<strong>getBatch</strong>",id:"getbatch",level:3},{value:"<strong>search</strong>",id:"search",level:3},{value:"<strong>debounce</strong>",id:"debounce",level:3},{value:"<strong>Context</strong>",id:"context",level:2},{value:"<strong>Usage</strong>",id:"usage",level:2},{value:"<strong>Error Handling</strong>",id:"error-handling",level:2},{value:"<strong>Dependencies</strong>",id:"dependencies",level:2},{value:"<strong>Props</strong>",id:"props",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"cacheprovider-component--cachecontext",children:"CacheProvider Component & CacheContext"}),"\n",(0,o.jsx)(n.p,{children:"Created by: James Liu\nCreated time: March 27, 2024 12:58 PM\nTags: Data Fetching, Frontend"}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:(0,o.jsx)(n.strong,{children:"Overview"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"CacheProvider"})})," component is designed to facilitate data fetching and caching in a React application. It provides a centralized cache mechanism to store and reuse data, minimizing unnecessary network requests. By leveraging this component, child components can perform data fetching operations for rooms, specific room details, free rooms based on certain criteria, batch data fetching, and search operations with reduced network overhead. The provided ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"CacheContext"})})," allows any component in the application to access these functionalities."]}),"\n",(0,o.jsx)(n.h2,{id:"functionality",children:(0,o.jsx)(n.strong,{children:"Functionality"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Caching Mechanism:"})," Stores responses from data fetching operations to reuse in subsequent requests, reducing the number of network calls."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Data Fetching:"})," Includes functions to fetch rooms, room details, free rooms, batch data, and perform search operations, utilizing both ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"fetch"})})," and ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"axios"})})," for network requests."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Debounce Utility:"})," Provides a debounce function to limit the frequency of function executions, useful for optimizing search functionality."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"key-hooks",children:(0,o.jsx)(n.strong,{children:"Key Hooks"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createContext"})})," and ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"useContext"})}),": Used to create and consume the cache context throughout the application."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"useState"})})," and ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"useEffect"})}),": These hooks could potentially be used within child components consuming the context for state management and side effects based on fetched data (not explicitly shown in this component)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"functions",children:(0,o.jsx)(n.strong,{children:"Functions"})}),"\n",(0,o.jsx)(n.h3,{id:"getrooms",children:(0,o.jsx)(n.strong,{children:"getRooms"})}),"\n",(0,o.jsx)(n.p,{children:"Fetches and caches a list of rooms. Uses cached data if available to avoid repeated requests."}),"\n",(0,o.jsx)(n.h3,{id:"getroom",children:(0,o.jsx)(n.strong,{children:"getRoom"})}),"\n",(0,o.jsx)(n.p,{children:"Fetches and caches details for a specific room by ID. Reuses cached data if the same room details are requested again."}),"\n",(0,o.jsx)(n.h3,{id:"getfreerooms",children:(0,o.jsx)(n.strong,{children:"getFreeRooms"})}),"\n",(0,o.jsx)(n.p,{children:"Takes a query parameter and fetches a list of rooms that are free according to the specified criteria. Caches and reuses the response for identical queries."}),"\n",(0,o.jsx)(n.h3,{id:"getbatch",children:(0,o.jsx)(n.strong,{children:"getBatch"})}),"\n",(0,o.jsx)(n.p,{children:"Fetches data for a batch of queries and caches the responses. Intended to efficiently load data for multiple items in a single request."}),"\n",(0,o.jsx)(n.h3,{id:"search",children:(0,o.jsx)(n.strong,{children:"search"})}),"\n",(0,o.jsx)(n.p,{children:"Performs a search operation based on a query, attributes, and sorting criteria. Supports authorization through a bearer token stored in local storage."}),"\n",(0,o.jsx)(n.h3,{id:"debounce",children:(0,o.jsx)(n.strong,{children:"debounce"})}),"\n",(0,o.jsx)(n.p,{children:"Utility function to debounce another function, limiting the rate at which it can be invoked. Useful for optimizing real-time search operations or any function that should not execute too frequently."}),"\n",(0,o.jsx)(n.h2,{id:"context",children:(0,o.jsx)(n.strong,{children:"Context"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CacheContext:"})," Makes the caching mechanism and data fetching functions available to any consuming component in the application."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:(0,o.jsx)(n.strong,{children:"Usage"})}),"\n",(0,o.jsxs)(n.p,{children:["Wrap the root component of your application with the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"CacheProvider"})})," to make the cache context available throughout your application:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"<CacheProvider>\n  <App />\n</CacheProvider>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Consume the context in child components to access the caching and data fetching functionalities:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const { getRoom, search } = useCache();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"error-handling",children:(0,o.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,o.jsxs)(n.p,{children:["Error handling is implemented in each data fetching function with ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"try-catch"})})," blocks, logging errors to the console. Functions return ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"undefined"})})," or an empty array on failure, so consumers should handle these cases accordingly."]}),"\n",(0,o.jsx)(n.h2,{id:"dependencies",children:(0,o.jsx)(n.strong,{children:"Dependencies"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"axios"}),": Used for making HTTP POST requests."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsxs)(n.strong,{children:["React Router's ",(0,o.jsx)(n.code,{children:"useNavigate"})]}),": While not used directly in the provided code, it's often used in conjunction with context providers for redirecting users (e.g., on unauthorized access)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"props",children:(0,o.jsx)(n.strong,{children:"Props"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"children"}),": The child components that ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"CacheProvider"})})," will wrap. This is a React pattern for context providers to render their children."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);