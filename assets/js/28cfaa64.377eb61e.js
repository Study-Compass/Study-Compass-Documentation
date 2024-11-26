"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[306],{8147:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=o(4848),i=o(8453);const r={},t="Mobile Development Testing",l={id:"Development Guidelines/Mobile Development",title:"Mobile Development Testing",description:"Overview",source:"@site/docs/Development Guidelines/Mobile Development.md",sourceDirName:"Development Guidelines",slug:"/Development Guidelines/Mobile Development",permalink:"/docs/Development Guidelines/Mobile Development",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development Guidelines/Mobile Development.md",tags:[],version:"current",frontMatter:{},sidebar:"documentation1",previous:{title:"Bug Fixing Guidlines",permalink:"/docs/Development Guidelines/Bug Fixing Guidelines"},next:{title:"Updating Local Database",permalink:"/docs/Development Guidelines/Updating Local Database"}},d={},c=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Guide</strong>",id:"guide",level:2},{value:"<strong>Steps to View Your React Project on a Mobile Device</strong>",id:"steps-to-view-your-react-project-on-a-mobile-device",level:2},{value:"<strong>1. Ensure Your Development Server is Running</strong>",id:"1-ensure-your-development-server-is-running",level:3},{value:"<strong>2. Find Your Computer&#39;s Local IP Address</strong>",id:"2-find-your-computers-local-ip-address",level:3},{value:"<strong>3. Access the Development Server from Your Mobile Device</strong>",id:"3-access-the-development-server-from-your-mobile-device",level:3},{value:"<strong>4. Enable Mobile Debugging</strong>",id:"4-enable-mobile-debugging",level:3},{value:"<strong>Chrome on Android</strong>",id:"chrome-on-android",level:4},{value:"<strong>Safari on iOS</strong>",id:"safari-on-ios",level:4},{value:"<strong>5. Adjust Responsiveness</strong>",id:"5-adjust-responsiveness",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mobile-development-testing",children:"Mobile Development Testing"}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:(0,s.jsx)(n.strong,{children:"Overview"})}),"\n",(0,s.jsx)(n.p,{children:"This documentation provides a step-by-step guide on how to view and test Study Compass on a mobile device. By following these steps, you can ensure that your features are responsive and work well across different screen sizes. You can always test responsiveness in inspect element but it's always better practice to view the actual environment."}),"\n",(0,s.jsx)(n.h2,{id:"guide",children:(0,s.jsx)(n.strong,{children:"Guide"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Network Configuration"}),": Ensure your development server is accessible to your mobile device. This typically involves being on the same local network (e.g., Wi-Fi). Being on either eduroam or rpi_wpa2 should be sufficient"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"steps-to-view-your-react-project-on-a-mobile-device",children:(0,s.jsx)(n.strong,{children:"Steps to View Your React Project on a Mobile Device"})}),"\n",(0,s.jsx)(n.h3,{id:"1-ensure-your-development-server-is-running",children:(0,s.jsx)(n.strong,{children:"1. Ensure Your Development Server is Running"})}),"\n",(0,s.jsx)(n.p,{children:"Start your React development server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-find-your-computers-local-ip-address",children:(0,s.jsx)(n.strong,{children:"2. Find Your Computer's Local IP Address"})}),"\n",(0,s.jsx)(n.p,{children:"On macOS or Linux, open a terminal and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ifconfig\n"})}),"\n",(0,s.jsx)(n.p,{children:"On Windows, open Command Prompt and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ipconfig\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Look for the IP address associated with your local network connection (usually something like ",(0,s.jsx)(n.code,{children:"192.168.x.x"})," labeled with ",(0,s.jsx)(n.code,{children:"IPv4 Address"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"3-access-the-development-server-from-your-mobile-device",children:(0,s.jsx)(n.strong,{children:"3. Access the Development Server from Your Mobile Device"})}),"\n",(0,s.jsxs)(n.p,{children:["Open a web browser on your mobile device and enter your computer\u2019s IP address followed by the port number (default is ",(0,s.jsx)(n.code,{children:"3000"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// example ip address\nhttp://187.235.x.x:3000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-enable-mobile-debugging",children:(0,s.jsx)(n.strong,{children:"4. Enable Mobile Debugging"})}),"\n",(0,s.jsx)(n.h4,{id:"chrome-on-android",children:(0,s.jsx)(n.strong,{children:"Chrome on Android"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Connect your Android device to your computer via USB."}),"\n",(0,s.jsxs)(n.li,{children:["Open Chrome on your computer and go to ",(0,s.jsx)(n.code,{children:"chrome://inspect"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'Ensure "Discover USB devices" is checked.'}),"\n",(0,s.jsx)(n.li,{children:'You should see your device listed. Click on "Inspect" to open the Chrome Developer Tools for your mobile device.'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"safari-on-ios",children:(0,s.jsx)(n.strong,{children:"Safari on iOS"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Connect your iOS device to your Mac via USB."}),"\n",(0,s.jsxs)(n.li,{children:["Open Safari on your Mac and go to ",(0,s.jsx)(n.code,{children:"Develop"})," in the menu bar."]}),"\n",(0,s.jsx)(n.li,{children:"Select your connected device."}),"\n",(0,s.jsx)(n.li,{children:"Click on the page you want to inspect to open the Safari Web Inspector."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-adjust-responsiveness",children:(0,s.jsx)(n.strong,{children:"5. Adjust Responsiveness"})}),"\n",(0,s.jsx)(n.p,{children:"Use CSS media queries and responsive design principles to ensure your app looks good on all screen sizes. Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"/* Example media query */\n@media (max-width: 600px) {\n  .your-class {\n    font-size: 14px;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"By following these steps, you can effectively view and test your React project on a mobile device, ensuring a smooth and responsive user experience."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var s=o(6540);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);