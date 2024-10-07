"use strict";(self.webpackChunkelasticstack_notes=self.webpackChunkelasticstack_notes||[]).push([[1097],{5352:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=s(4848),l=s(8453);const t={sidebar_position:2},r="Environment Setup",c={id:"environment-setup",title:"Environment Setup",description:"Local Setup",source:"@site/docs/environment-setup.md",sourceDirName:".",slug:"/environment-setup",permalink:"/elasticstack-notes/docs/environment-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/kotran222/elasticstack-notes/docs/environment-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/elasticstack-notes/docs/intro"},next:{title:"Reference Docs",permalink:"/elasticstack-notes/docs/reference-docs"}},a={},o=[{value:"Local Setup",id:"local-setup",level:2},{value:"Managed Services",id:"managed-services",level:2},{value:"Hosting OpenSearch on Bonsai",id:"hosting-opensearch-on-bonsai",level:2},{value:"Hosting Elasticsearch &amp; Kibana on Elastic Cloud",id:"hosting-elasticsearch--kibana-on-elastic-cloud",level:2},{value:"Download",id:"download",level:3},{value:"Setting up Elasticsearch",id:"setting-up-elasticsearch",level:3},{value:"Setting up Kibana",id:"setting-up-kibana",level:3},{value:"Inspecting the cluster",id:"inspecting-the-cluster",level:2},{value:"Using the Console tool in Kibana",id:"using-the-console-tool-in-kibana",level:3},{value:"Resources",id:"resources",level:3},{value:"Sending queries with cURL",id:"sending-queries-with-curl",level:2},{value:"Installation of cURL",id:"installation-of-curl",level:3},{value:"Steps",id:"steps",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"environment-setup",children:"Environment Setup"})}),"\n",(0,i.jsx)(n.h2,{id:"local-setup",children:"Local Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Docker works but complicated"}),"\n",(0,i.jsx)(n.li,{children:"Elasticsearch available on MacOS"}),"\n",(0,i.jsx)(n.li,{children:"Opensearch not available on MacOS"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"managed-services",children:"Managed Services"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Elasticsearch:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Elastic Cloud"}),"\n",(0,i.jsx)(n.li,{children:"Google Cloud"}),"\n",(0,i.jsx)(n.li,{children:"Microsoft Azure"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"OpenSearch:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bonsai (Free forever)"}),"\n",(0,i.jsx)(n.li,{children:"AWS"}),"\n",(0,i.jsx)(n.li,{children:"DigitalOcean"}),"\n",(0,i.jsx)(n.li,{children:"Aiven"}),"\n",(0,i.jsx)(n.li,{children:"Instacluster"}),"\n",(0,i.jsx)(n.li,{children:"Exoscale"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hosting-opensearch-on-bonsai",children:"Hosting OpenSearch on Bonsai"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://bonsai.io/",children:"Bonsai"})}),"\n",(0,i.jsx)(n.h2,{id:"hosting-elasticsearch--kibana-on-elastic-cloud",children:"Hosting Elasticsearch & Kibana on Elastic Cloud"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The instructions below are purely for MacOS"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"download",children:"Download"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.elastic.co/downloads/elasticsearch",children:"Download Elasticsearch"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.elastic.co/downloads/kibana",children:"Download Kibana"})}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-elasticsearch",children:"Setting up Elasticsearch"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go to folder where elasticsearch is located in terminal."}),"\n",(0,i.jsxs)(n.li,{children:["Disable Gatekeeper for the elasticsearch directory: ",(0,i.jsx)(n.code,{children:"xattr -d -r com.apple.quarantine elasticsearch"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cd elasticsearch"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bin/elasticsearch"})," to invoke a script named elasticsearch within the bin directory"]}),"\n",(0,i.jsx)(n.li,{children:"Make sure the passwords and tokens are displayed."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Things may keep running in the terminal ... so pay attention and scroll to the summary with the password and tokens."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Resetting the elastic user's password: ",(0,i.jsx)(n.code,{children:"bin/elasticsearch-reset-password -u elastic"})]}),"\n",(0,i.jsxs)(n.li,{children:["Generate a new Kibana enrollment token: ",(0,i.jsx)(n.code,{children:"bin/elasticsearch-create-enrollment-token --scope kibana"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Valid for 30 minutes"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-kibana",children:"Setting up Kibana"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go to folder where kibana is located in terminal."}),"\n",(0,i.jsxs)(n.li,{children:["Disable Gatekeeper for the kibana directory: ",(0,i.jsx)(n.code,{children:"xattr -d -r com.apple.quarantine kibana"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cd kibana"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"bin/kibana"})}),"\n",(0,i.jsxs)(n.li,{children:["Copy the generated localhost url and paste it in the browser.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It asks for an Enrollment token."}),"\n",(0,i.jsxs)(n.li,{children:["Grab the enrollment token from Elasticsearch and paste it there. Then, click ",(0,i.jsx)(n.strong,{children:"Configure Elastic"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The Elastic login will appear. Enter the elastic superuser credentials generated from the terminal for elasticsearch."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"inspecting-the-cluster",children:"Inspecting the cluster"}),"\n",(0,i.jsx)(n.h3,{id:"using-the-console-tool-in-kibana",children:"Using the Console tool in Kibana"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After logging in to the elastic login page through the localhost url when you ran kibana, a dashboard will appear."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Expand the menu bar in the top left corner."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Management"}),", select ",(0,i.jsx)(n.strong,{children:"Dev Tools"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Modify the console, with your own requests such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieving the cluster's health:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// _cluster is the API\n// health is the command\nGET /_cluster/health\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Listing "nodes"'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// _cat is the CAT API\n// nodes is the command\n// v is a query parameter which adds a descriptive header row to the output\nGET /_cat/nodes?v\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Creating a new index called "pages"'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PUT /pages\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["List all the shards within the cluster","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It will detail which index the shard will belong to"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /_cat/shards?v\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-nodes.html",children:"cat nodes API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-nodes-info.html",children:"Nodes info API"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sending-queries-with-curl",children:"Sending queries with cURL"}),"\n",(0,i.jsx)(n.h3,{id:"installation-of-curl",children:"Installation of cURL"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This step is probably not needed for macOS systems."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://curl.se/download.html",children:"Install cURL, if necessary"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open terminal and be in ",(0,i.jsx)(n.code,{children:"elasticsearch"})," directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"curl --cacert config/certs/http_ca.crt -u elastic -X GET https://localhost:9200"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Password prompt will appear. Enter superuser password for local login."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Insecure way and revealing password:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl --cacert config/certs/http_ca.crt -u elastic:YOUR_PASSWORD -X GET https://localhost:9200\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use Search API for a products index."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl --cacert config/certs/http_ca.crt -u elastic:YOUR_PASSWORD -X GET -H "Content-Type:application/json" https://localhost:9200/products/_search -d \'{ "query": { "match_all": {} } }\'\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);