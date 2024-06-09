"use strict";(self.webpackChunkdocumentation_site=self.webpackChunkdocumentation_site||[]).push([[144],{6932:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(4848),r=s(8453);const i={sidebar_position:2},o="SearchBar Component",a={id:"Frontend/SearchBar Component",title:"SearchBar Component",description:"Created by: James Liu",source:"@site/docs/Frontend/SearchBar Component.md",sourceDirName:"Frontend",slug:"/Frontend/SearchBar Component",permalink:"/Study-Compass-Documentation/docs/Frontend/SearchBar Component",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Frontend/SearchBar Component.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentation1",previous:{title:"Login/Register Pages",permalink:"/Study-Compass-Documentation/docs/Frontend/Register Pages"},next:{title:"Calendar & DayColumn Components",permalink:"/Study-Compass-Documentation/docs/Frontend/Calendar & DayColumn Components"}},c={},l=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Features</strong>",id:"features",level:2},{value:"<strong>Props</strong>",id:"props",level:2},{value:"<strong>State Management</strong>",id:"state-management",level:2},{value:"<strong>Key Functions</strong>",id:"key-functions",level:2},{value:"<strong><code>handleInputChange</code></strong>",id:"handleinputchange",level:3},{value:"<strong><code>next</code></strong>",id:"next",level:3},{value:"<strong><code>handleKeyDown</code></strong>",id:"handlekeydown",level:3},{value:"<strong><code>click</code></strong>",id:"click",level:3},{value:"<strong><code>handleX</code></strong>",id:"handlex",level:3},{value:"Key useEffect Hooks",id:"key-useeffect-hooks",level:2},{value:"<strong>Effect to Handle Abbreviations</strong>",id:"effect-to-handle-abbreviations",level:3},{value:"<strong>Effect to Filter Results Based on Search Input</strong>",id:"effect-to-filter-results-based-on-search-input",level:3},{value:"<strong>Usage</strong>",id:"usage",level:2},{value:"<strong>Notes</strong>",id:"notes",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"searchbar-component",children:"SearchBar Component"}),"\n",(0,t.jsx)(n.p,{children:"Created by: James Liu\nCreated time: March 27, 2024 1:21 PM\nTags: Frontend, UI"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:(0,t.jsx)(n.strong,{children:"Overview"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SearchBar"})})," component is a customizable search bar designed for Study Compass requiring a search functionality with autocomplete and support for abbreviations. It provides visual feedback on matching results as the user types, supports keyboard navigation, and allows users to select a result either by clicking on it or pressing the Enter key. Additionally, it incorporates an abbreviated versions feature for specific terms."]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:(0,t.jsx)(n.strong,{children:"Features"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Search Results:"})," Updates search results in real-time as the user types, filtering based on input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Abbreviation Support:"})," Can handle both full names and their corresponding abbreviations for defined terms."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Keyboard Navigation:"})," Allows users to navigate through the search results using the Arrow keys and to select a result with the Enter key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Actions:"})," Supports custom functions to be called on selecting a result or executing a search."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Responsive Design:"})," Adapts its appearance based on focus state and provides a clear button when input is not empty."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"props",children:(0,t.jsx)(n.strong,{children:"Props"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data"})}),": An array of strings representing all searchable items."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"onEnter"})}),": A function that is called when a user selects a result or presses the Enter key. It receives the selected item as its argument."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"onSearch"})}),": A function called when the Enter key is pressed without selecting a specific result. Useful for handling general search queries."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"room"})}),": A string that prepopulates the search bar with an initial value, representing the current room or search term."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"onX"})}),": A function called when the clear button (marked with an 'x') is clicked."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"state-management",children:(0,t.jsx)(n.strong,{children:"State Management"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"searchInput"})}),": Controls the input value of the search bar."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"results"})}),": An array of search results filtered from the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data"})})," prop based on the user's input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"isFocused"})}),": Indicates whether the search bar is currently focused."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"selected"})}),": An index marking the currently highlighted result in the dropdown list."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"dataAbb"})}),": (",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"array"})}),") An array that includes both the full names and their corresponding abbreviations derived from the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data"})})," prop."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"key-functions",children:(0,t.jsx)(n.strong,{children:"Key Functions"})}),"\n",(0,t.jsx)(n.h3,{id:"handleinputchange",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"handleInputChange"})})}),"\n",(0,t.jsxs)(n.p,{children:["Updates the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"searchInput"})})," state as the user types in the search bar."]}),"\n",(0,t.jsx)(n.h3,{id:"next",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"next"})})}),"\n",(0,t.jsx)(n.p,{children:"Handles the action when the Enter key is pressed, either executing a search or selecting the currently highlighted result."}),"\n",(0,t.jsx)(n.h3,{id:"handlekeydown",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"handleKeyDown"})})}),"\n",(0,t.jsx)(n.p,{children:"Manages keyboard interactions, including navigation through results and selection."}),"\n",(0,t.jsx)(n.h3,{id:"click",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"click"})})}),"\n",(0,t.jsx)(n.p,{children:"Handles the selection of a search result when clicked with the mouse."}),"\n",(0,t.jsx)(n.h3,{id:"handlex",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"handleX"})})}),"\n",(0,t.jsxs)(n.p,{children:["Clears the current search input and executes the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"onX"})})," prop function."]}),"\n",(0,t.jsx)(n.h2,{id:"key-useeffect-hooks",children:"Key useEffect Hooks"}),"\n",(0,t.jsx)(n.h3,{id:"effect-to-handle-abbreviations",children:(0,t.jsx)(n.strong,{children:"Effect to Handle Abbreviations"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"useEffect(() => {\n    if(!data){return}\n    let newData = [...data];\n    data.map(item => {\n        if(removeLastWord(item) in abbreviations){\n            newData.push(abbreviations[removeLastWord(item)]+\" \"+item.split(' ').pop());\n        }\n    });\n    setDataAbb(newData);\n}, [data]);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Adds support for abbreviations by creating a new data array that includes both full names and their corresponding abbreviations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dependencies:"})," Runs whenever the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data"})})," prop changes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Explanation:"})," It checks each item in the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data"})})," array, and if the item's base name matches an abbreviation, it adds the abbreviated version to the new data array (",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"newData"})}),"). The updated array is then set to the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"dataAbb"})})," state."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"effect-to-filter-results-based-on-search-input",children:(0,t.jsx)(n.strong,{children:"Effect to Filter Results Based on Search Input"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'useEffect(() => {\n    setSearchInput(searchInput.toLowerCase());\n    if(searchInput === "none"){\n        setSearchInput("");\n    }\n    if (searchInput === \'\' || !isFocused) {\n        setResults([]);\n        setLower("");\n    } else {\n        setSelected(0);\n        const filteredResults = dataAbb.filter(item =>\n            item.toLowerCase().startsWith(searchInput)\n        );\n        const newfilteredResults = dataAbb.filter(item => {\n            const includesSearchInput = item.toLowerCase().includes(searchInput.toLowerCase());\n            const notInResults = !results.includes(item);\n            return includesSearchInput && notInResults;\n        });\n        filteredResults.push(...newfilteredResults);\n        if (filteredResults.length === 0) {\n            filteredResults.push("no results found");\n            setLower("");\n        } else {\n            if(filteredResults.length > 1){\n                if(filteredResults[0].toLowerCase().startsWith(searchInput.toLowerCase())){\n                    setLower(filteredResults[0].toLowerCase());\n                } else {\n                    setLower("");\n                }\n            }\n        }\n        setResults(filteredResults);\n    }\n}, [searchInput, dataAbb]);\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Filters the search results based on the current ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"searchInput"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dependencies:"})," Runs whenever the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"searchInput"})})," or ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"dataAbb"})})," state changes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Explanation:"})," Handler for the general search logic. It normalizes the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"searchInput"})})," to lowercase and checks if it's empty or if the search bar is not focused. If either condition is true, it clears the results and ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"lower"})})," state. Otherwise, it filters ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"dataAbb"})})," based on whether items start with the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"searchInput"})})," and updates the results accordingly. It then filters dataAbb for items that include the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"searchInput"})})," but don\u2019t start with the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"searchInput"})}),", appending those entries to the end (first display search results that start with query, then display search results that include query)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:(0,t.jsx)(n.strong,{children:"Usage"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SearchBar"})})," component is used in Study Compass for the nameSearch, allowing users to search for classrooms by name. All classroom names are passed into the search bar. The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SearchBar"})})," component can be integrated into any application that requires a search functionality with support for keyboard navigation and abbreviation matching. It requires the parent component to provide searchable data and handle the selection of items from the search results."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<SearchBar\n  data={['Darrin Communications Center', 'Jonsson Engineering Center']}\n  onEnter={(selectedItem) => console.log('Selected:', selectedItem)}\n  onSearch={(query) => console.log('Search Query:', query)}\n  room=\"Darrin Communications Center\"\n  onX={() => console.log('Search cleared')}\n/>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:(0,t.jsx)(n.strong,{children:"Notes"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ensure the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data"})})," prop contains all searchable items"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"onEnter"})})," and ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"onSearch"})})," functions must be defined to handle the selection of items and execution of search queries, respectively."]}),"\n",(0,t.jsx)(n.li,{children:"The component is designed to be flexible and easily integrated into larger applications requiring search capabilities."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);