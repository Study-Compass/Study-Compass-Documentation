"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[6],{9812:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(4848),r=t(8453);const a={},s="Setting Up and Running Migration Scripts",o={id:"Database/Setup and Running Migration Scripts",title:"Setting Up and Running Migration Scripts",description:"This guide provides instructions on how to set up a Python virtual environment to run migration scripts located in the backend/migrations directory. It covers creating the virtual environment, installing dependencies from requirements.txt, and running an example migration script.",source:"@site/docs/Database/Setup and Running Migration Scripts.md",sourceDirName:"Database",slug:"/Database/Setup and Running Migration Scripts",permalink:"/Study-Compass-Documentation/docs/Database/Setup and Running Migration Scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Database/Setup and Running Migration Scripts.md",tags:[],version:"current",frontMatter:{},sidebar:"documentation1",previous:{title:"Database",permalink:"/Study-Compass-Documentation/docs/Database/"},next:{title:"Database Versioning",permalink:"/Study-Compass-Documentation/docs/Database/Database Versioning"}},c={},d=[{value:"<strong>Step 1: Navigate to the Migrations Directory</strong>",id:"step-1-navigate-to-the-migrations-directory",level:2},{value:"<strong>Step 2: Create a Python Virtual Environment</strong>",id:"step-2-create-a-python-virtual-environment",level:2},{value:"<strong>Step 3: Activate the Virtual Environment</strong>",id:"step-3-activate-the-virtual-environment",level:2},{value:"On Windows:",id:"on-windows",level:3},{value:"On macOS and Linux:",id:"on-macos-and-linux",level:3},{value:"<strong>Step 4: Install Dependencies</strong>",id:"step-4-install-dependencies",level:2},{value:"<strong>Step 5: Running Migration Scripts</strong>",id:"step-5-running-migration-scripts",level:2},{value:"<strong>Deactivating the Virtual Environment</strong>",id:"deactivating-the-virtual-environment",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"setting-up-and-running-migration-scripts",children:"Setting Up and Running Migration Scripts"}),"\n",(0,i.jsxs)(e.p,{children:["This guide provides instructions on how to set up a Python virtual environment to run migration scripts located in the ",(0,i.jsx)(e.code,{children:"backend/migrations"})," directory. It covers creating the virtual environment, installing dependencies from ",(0,i.jsx)(e.code,{children:"requirements.txt"}),", and running an example migration script."]}),"\n",(0,i.jsx)(e.h2,{id:"step-1-navigate-to-the-migrations-directory",children:(0,i.jsx)(e.strong,{children:"Step 1: Navigate to the Migrations Directory"})}),"\n",(0,i.jsxs)(e.p,{children:["First, open your terminal or command prompt and navigate to the ",(0,i.jsx)(e.code,{children:"backend/migrations"})," directory:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"cd backend/migrations\n"})}),"\n",(0,i.jsx)(e.h2,{id:"step-2-create-a-python-virtual-environment",children:(0,i.jsx)(e.strong,{children:"Step 2: Create a Python Virtual Environment"})}),"\n",(0,i.jsxs)(e.p,{children:["To avoid conflicts with other Python projects, it's recommended to create a virtual environment. Run the following command to create a virtual environment named ",(0,i.jsx)(e.code,{children:"venv"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"python -m venv venv\n"})}),"\n",(0,i.jsx)(e.h2,{id:"step-3-activate-the-virtual-environment",children:(0,i.jsx)(e.strong,{children:"Step 3: Activate the Virtual Environment"})}),"\n",(0,i.jsx)(e.p,{children:"After creating the virtual environment, activate it using the appropriate command for your operating system:"}),"\n",(0,i.jsx)(e.h3,{id:"on-windows",children:"On Windows:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:".\\venv\\Scripts\\activate\n"})}),"\n",(0,i.jsx)(e.h3,{id:"on-macos-and-linux",children:"On macOS and Linux:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"source venv/bin/activate\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Once activated, you should see the virtual environment's name (e.g., ",(0,i.jsx)(e.code,{children:"(venv)"}),") prefixed to your terminal prompt."]}),"\n",(0,i.jsx)(e.h2,{id:"step-4-install-dependencies",children:(0,i.jsx)(e.strong,{children:"Step 4: Install Dependencies"})}),"\n",(0,i.jsxs)(e.p,{children:["With the virtual environment activated, install the required dependencies listed in ",(0,i.jsx)(e.code,{children:"requirements.txt"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"pip install -r requirements.txt\n"})}),"\n",(0,i.jsxs)(e.p,{children:["This command will install all the necessary packages specified in the ",(0,i.jsx)(e.code,{children:"requirements.txt"})," file."]}),"\n",(0,i.jsx)(e.h2,{id:"step-5-running-migration-scripts",children:(0,i.jsx)(e.strong,{children:"Step 5: Running Migration Scripts"})}),"\n",(0,i.jsxs)(e.p,{children:["To run a migration script, use the Python executable from the virtual environment. For example, to run the ",(0,i.jsx)(e.code,{children:"version1.0.py"})," migration script, use the following command:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"python version1.0.py\n"})}),"\n",(0,i.jsxs)(e.p,{children:["This will execute the ",(0,i.jsx)(e.code,{children:"version1.0.py"})," script using the Python interpreter from the virtual environment."]}),"\n",(0,i.jsx)(e.h2,{id:"deactivating-the-virtual-environment",children:(0,i.jsx)(e.strong,{children:"Deactivating the Virtual Environment"})}),"\n",(0,i.jsx)(e.p,{children:"After you have finished running the migration scripts, you can deactivate the virtual environment by simply running:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"deactivate\n"})}),"\n",(0,i.jsx)(e.p,{children:"This will return your terminal to the global Python environment."})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);