"use strict";(self.webpackChunkelasticstack_notes=self.webpackChunkelasticstack_notes||[]).push([[1344],{6169:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=i(4848),t=i(8453);const s={sidebar_position:4},o="Joining Queries",l={id:"tutorial/joining-queries",title:"Joining Queries",description:"Don't use Elasticsearch as a primary data store",source:"@site/docs/tutorial/joining-queries.md",sourceDirName:"tutorial",slug:"/tutorial/joining-queries",permalink:"/elasticstack-notes/docs/tutorial/joining-queries",draft:!1,unlisted:!1,editUrl:"https://github.com/devkobetran/elasticstack-notes/docs/tutorial/joining-queries.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Searching for Data",permalink:"/elasticstack-notes/docs/tutorial/searching-for-data"},next:{title:"Controlling Query Results",permalink:"/elasticstack-notes/docs/tutorial/controlling-query-results"}},d={},a=[{value:"Mapping document relationships",id:"mapping-document-relationships",level:2},{value:"Adding documents",id:"adding-documents",level:2},{value:"Querying by parent ID",id:"querying-by-parent-id",level:2},{value:"Querying child documents by parent",id:"querying-child-documents-by-parent",level:2},{value:"Querying parent by child documents",id:"querying-parent-by-child-documents",level:2},{value:"Multi-level relations",id:"multi-level-relations",level:2},{value:"Parent / Child Inner Hits",id:"parent--child-inner-hits",level:2},{value:"Terms lookout mechanism",id:"terms-lookout-mechanism",level:2},{value:"Join Limitations",id:"join-limitations",level:2},{value:"Join Field Performance Considerations",id:"join-field-performance-considerations",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"joining-queries",children:"Joining Queries"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Don't use Elasticsearch as a primary data store"}),(0,r.jsx)(n.p,{children:"Optimize search performance by denormalizing data"}),(0,r.jsx)(n.p,{children:"Performance > disk space"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"Elasticsearch only supports simple joins"}),(0,r.jsx)(n.p,{children:"Joins are expensive"})]}),"\n",(0,r.jsx)(n.h2,{id:"mapping-document-relationships",children:"Mapping document relationships"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Define document relationships by first defining them in the mapping."}),"\n",(0,r.jsxs)(n.li,{children:["Join documents using a join field.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Join field defines the relations between the types of documents that are part of the document hierarchy."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'PUT /department\n{\n    "mappings": {\n        "_doc": {\n            "properties": {\n                "join_field": {\n                    "type": "join",\n                    "relations": {\n                        "department": "employee"\n                    }\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"department"})," is the parent of ",(0,r.jsx)(n.code,{children:"employee"})]})}),"\n",(0,r.jsx)(n.h2,{id:"adding-documents",children:"Adding documents"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'PUT /department/_doc/1\n{\n    "name": "Development",\n    "join_field": "department"\n}\n\nPUT /department/_doc/2\n{\n    "name": "Marketing",\n    "join_field": "department"\n}\n\nPUT /department/_doc/3\n{\n    "name": "Bo Anderson",\n    "age": 28,\n    "gender": "M",\n    "join_field": {\n        "name": "employee",\n        "parent": 1\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"querying-by-parent-id",children:"Querying by parent ID"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /department/_search\n{\n    "query": {\n        "parent_id": {\n            "type": "employee"\n            "id": 1\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"querying-child-documents-by-parent",children:"Querying child documents by parent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-has-parent-query.html#_sorting_2",children:"Has parent query docs"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /department/_search\n{\n    "query": {\n        "has_parent": {\n            "parent_type": "department",\n            "score": true,\n            "query": {\n                "term": {\n                    "name.keyword": "Development"\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"querying-parent-by-child-documents",children:"Querying parent by child documents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-has-child-query.html#_sorting",children:"Had child query docs"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /department/_search\n{\n    "query": {\n        "has_child": {\n            "type": "employee",\n            "score_mode": "sum",\n            "query": {\n                "bool": {\n                    "must": [\n                        {\n                            "range": {\n                                "age": {\n                                    "gte": 50\n                                }\n                            }\n                        }\n                    ],\n                    "should": [\n                        {\n                            "term": {\n                                "gender.keyword": "M"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"min score mode: The lowest score of matching child documents is mapped into the parent"}),"\n",(0,r.jsx)(n.li,{children:"max score mode: The highest score of matching child documents is mapped into the parent"}),"\n",(0,r.jsx)(n.li,{children:"sum score mode: The matching children's scores are summed up and mapped into the parent"}),"\n",(0,r.jsx)(n.li,{children:"avg score mode: The average score based on matching child documents is mapped into the parent"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"multi-level-relations",children:"Multi-level relations"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'PUT /company\n{\n    "mappings": {\n        "_doc": {\n            "properties": {\n                "join_field": {\n                    "type": "join",\n                    "relations": {\n                        "company": ["department", "supplier"],\n                        "department": "employee"\n                    }\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart BT\n\nA((Employee, ID: 3)) --\x3e B[Department, ID: 2]\nB --?routing=1--\x3e C[Company, ID: 1]\nD[Supplier] --\x3e C\nA --?routing=1--\x3e C\n\nstyle A fill:blue,color:white;\nstyle B fill:orange,color:white;\nstyle C fill:green,color:white,stroke:black;\nstyle D fill:pink,color:white;"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'PUT /company/_doc/1\n{\n    "name": "My Company Inc",\n    "join_field": "company"\n}\n\nPUT /company/_doc/2?routing=1\n{\n    "name": "Development",\n    "join_field": {\n        "name": "department",\n        "parent": 1\n    }\n}\n\nPUT /company/_doc/3?routing=1\n{\n    "name": "Bo Anderson",\n    "join_field": {\n        "name": "employee",\n        "parent": 2\n    }\n}\n\nGET /company/_search\n{\n    "query": {\n        "has_child": {\n            "type": "department",\n            "query": {\n                "has_child": {\n                    "type": "employee",\n                    "query": {\n                        "term": {\n                            "name.keyword": "John Doe"\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parent--child-inner-hits",children:"Parent / Child Inner Hits"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /department/_search\n{\n    "query": {\n        "has_parent": {\n            "parent_type": "department",\n            "inner_hits": {}\n            "query": {\n                "term": {\n                    "name.keyword": "Development\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"By including inner hits within the results, we can see which department cost each employee to match."}),(0,r.jsx)(n.p,{children:"In other words, we can tell which parent document cost a given child document to be returned."})]}),"\n",(0,r.jsx)(n.h2,{id:"terms-lookout-mechanism",children:"Terms lookout mechanism"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /stories/_search\n{\n    "query": {\n        "terms": {\n            "user": {\n                "index": "users",\n                "type": "_doc",\n                "id": 1,\n                "path": "following"\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The more terms, the slower the query"})}),"\n",(0,r.jsx)(n.h2,{id:"join-limitations",children:"Join Limitations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The documents that are joining must be stored within the same index."}),"\n",(0,r.jsx)(n.li,{children:"Parent and child documents must be on the same shard"}),"\n",(0,r.jsxs)(n.li,{children:["Only one join field per index","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A join field can have as many relations as you want"}),"\n",(0,r.jsx)(n.li,{children:"New relations can be added after creating the index"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Child relations can only be added to existing parents"}),"\n",(0,r.jsxs)(n.li,{children:["A document can only have one parent","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"e.g. an employee can only work under one department"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["A document can have multiple children","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"e.g. a department can have multiple employees"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"join-field-performance-considerations",children:"Join Field Performance Considerations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Join Fields are slow"}),"\n",(0,r.jsxs)(n.li,{children:["Avoid join fields whenever possible, except a few scenarios","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A one to many relationship between 2 document types, where one type has many more documents than the other"}),"\n",(0,r.jsx)(n.li,{children:"e.g. recipes as parent documents and ingredients as child documents is a good scenario for join fields since there are more ingredients than recipes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["The more child documents pointing to unique parents, the slower the ",(0,r.jsx)(n.code,{children:"has_child"})," query is","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Basically the more documents, the slower the query"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["The number of parent documents slows down the ",(0,r.jsx)(n.code,{children:"has_parent"})," query"]}),"\n",(0,r.jsx)(n.li,{children:"Each level of document relations adds an overhead to queries"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In the general sense, it is recommended to not map document relationships"}),"\n",(0,r.jsx)(n.li,{children:"Denormalize data instead of mapping document relationships"}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(6540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);