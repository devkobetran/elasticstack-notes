"use strict";(self.webpackChunkelasticstack_notes=self.webpackChunkelasticstack_notes||[]).push([[8993],{7953:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=i(4848),r=i(8453);const t={sidebar_position:1},l="Managing Documents",c={id:"tutorial/managing-documents",title:"Managing Documents",description:"The following sections will use the Kibana console tool on the localhost url.",source:"@site/docs/tutorial/managing-documents.md",sourceDirName:"tutorial",slug:"/tutorial/managing-documents",permalink:"/elasticstack-notes/docs/tutorial/managing-documents",draft:!1,unlisted:!1,editUrl:"https://github.com/kotran222/elasticstack-notes/docs/tutorial/managing-documents.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/elasticstack-notes/docs/category/tutorial"},next:{title:"Mapping and Analysis",permalink:"/elasticstack-notes/docs/tutorial/mapping-and-analysis"}},d={},o=[{value:"Creating &amp; Deleting Indices",id:"creating--deleting-indices",level:2},{value:"Indexing Documents",id:"indexing-documents",level:2},{value:"Retrieving documents by ID",id:"retrieving-documents-by-id",level:2},{value:"Updating documents",id:"updating-documents",level:2},{value:"Documents are immutable",id:"documents-are-immutable",level:3},{value:"Scripted updates",id:"scripted-updates",level:2},{value:"Upserts",id:"upserts",level:2},{value:"Replacing Documents",id:"replacing-documents",level:2},{value:"Deleting Documents",id:"deleting-documents",level:2},{value:"Understanding Routing",id:"understanding-routing",level:2},{value:"How Elasticsearch reads data",id:"how-elasticsearch-reads-data",level:2},{value:"How Elasticsearch writes data",id:"how-elasticsearch-writes-data",level:2},{value:"Recovering when a primary shard fails",id:"recovering-when-a-primary-shard-fails",level:3},{value:"Understanding document versioning",id:"understanding-document-versioning",level:2},{value:"Types of versioning",id:"types-of-versioning",level:3},{value:"Purpose of Versioning",id:"purpose-of-versioning",level:3},{value:"Optimistic Concurrency Control",id:"optimistic-concurrency-control",level:2},{value:"How to handle failures?",id:"how-to-handle-failures",level:3},{value:"Update by Query",id:"update-by-query",level:2},{value:"Delete by Query",id:"delete-by-query",level:2},{value:"Batch Processing",id:"batch-processing",level:2},{value:"Intro to Bulk API",id:"intro-to-bulk-api",level:3},{value:"Things to be aware of",id:"things-to-be-aware-of",level:3},{value:"When to use the Bulk API",id:"when-to-use-the-bulk-api",level:3},{value:"Final note",id:"final-note",level:3},{value:"Importing data with cURL",id:"importing-data-with-curl",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"managing-documents",children:"Managing Documents"})}),"\n",(0,s.jsx)(n.p,{children:"The following sections will use the Kibana console tool on the localhost url."}),"\n",(0,s.jsx)(n.h2,{id:"creating--deleting-indices",children:"Creating & Deleting Indices"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deleting an index:"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Deleting pages index example"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DELETE /pages\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creating an index:"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Adding products index example"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To specify index settings, add a request body"}),"\n",(0,s.jsx)(n.li,{children:"Add a JSON object"}),"\n",(0,s.jsx)(n.li,{children:"First line specifies the HTTP verb and endpoint"}),"\n",(0,s.jsx)(n.li,{children:"Following lines specify the JSON request body"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'PUT /products\n{\n    "settings": {\n        "number_of_shards": 2,\n        "number_of_replicas": 2,\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"indexing-documents",children:"Indexing Documents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Index a document using POST request"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"products index example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_doc\n{\n    "name": "Coffee Maker",\n    "price": 64,\n    "in_stock": 10\n}\n\n// set id to 100\nPUT /products/_doc/100\n{\n    "name": "Toaster",\n    "price": 49,\n    "in_stock": 4\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"retrieving-documents-by-id",children:"Retrieving documents by ID"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrieve Toaster example at id 100"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GET /products/_doc/100\n"})}),"\n",(0,s.jsx)(n.h2,{id:"updating-documents",children:"Updating documents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Updating Toaster example at id 100 to have less count down to 3 in stock"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/100\n{\n    "doc": {\n        "in_stock": 3\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adding New Fields"}),"\n",(0,s.jsx)(n.li,{children:"Adding electronics field to Toaster Example"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/100\n{\n    "doc": {\n        "tags": ["electronics"]\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"documents-are-immutable",children:"Documents are immutable"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Elasticsearch documents are immutable"}),"\n",(0,s.jsx)(n.li,{children:"Instead, we replaced documents entirely"}),"\n",(0,s.jsxs)(n.li,{children:["The Update API is simpler and ",(0,s.jsx)(n.strong,{children:"saves network traffic"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The current document is retrieved"}),"\n",(0,s.jsx)(n.li,{children:"The field values are changed"}),"\n",(0,s.jsx)(n.li,{children:"The existing document is replaced with the modified document"}),"\n",(0,s.jsx)(n.li,{children:"Replacing is less requests compared to modifying, which is good."}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"scripted-updates",children:"Scripted updates"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Elasticsearch supports scripting, allowing you to write custom logic or code while assessing a document's values"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scripting to decrease count for Toaster example"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ctx"})," is a variable, short word for context"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"_source"})," property gives an object containing the document's fields"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"in_stock"})," field is the custom count of items created earlier"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--"})," decrements and ",(0,s.jsx)(n.code,{children:"++"})," increments"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/100\n{\n    "script": {\n        "source": "ctx._source.in_stock--"\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scripting to assign a new count for Toaster example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/100\n{\n    "script": {\n        "source": "ctx._source.in_stock = 10"\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Could pass in parameters"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scripting to account for parameters making changes to count for Toaster example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/100\n{\n    "script": {\n        "source": "ctx._source.in_stock -= params.quantity"\n        "params": {\n            "quantity": 4\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scripting to decrease count for Toaster, accounting for edge cases, example"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add an if clause to check if stock is zero. Cannot decrement when 0."}),"\n",(0,s.jsxs)(n.li,{children:['if the if clause is met, then no changes are applied to the document and the "result" key is set to ',(0,s.jsx)(n.code,{children:"noop"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/100\n{\n    "script": {\n        "source": """\n            if(ctx._source.in_stock == 0){\n                ctx.op = \'noop\';\n            }\n\n            ctx._source.in_stock--;\n        """\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Similarly, could change to this logic that does the same thing:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/100\n{\n    "script": {\n        "source": """\n            if(ctx._source.in_stock > 0){\n                ctx._source.in_stock--;\n            }\n        """\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:'NOTE: The different with this code compared to the one before is that it will always yield a result of "updated", regardless of whether or not the field value was actually changed.'}),(0,s.jsx)(n.p,{children:"If it is important to detect if nothing was changed go with the new logic."})]}),"\n",(0,s.jsx)(n.h2,{id:"upserts",children:"Upserts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Upserting"}),": to conditionally update or insert a document based on whether or not the document already exists."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In other words, if the document already exists, a script is ran, and if it doesn't, a new document is indexed."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Upserting Example, adding a new product"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Since there is no document with id 101, the contents of the upsert option is indexed as a new document."}),"\n",(0,s.jsxs)(n.li,{children:['To verify in the console, when you run the query, the "result" key contains a value ',(0,s.jsx)(n.code,{children:"created"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:['If you run the query again, the "result" key contains a value ',(0,s.jsx)(n.code,{children:"updated"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"in_stock"})," value will increase to ",(0,s.jsx)(n.code,{children:"6"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/101\n{\n    "script": {\n        "source": "ctx._source.in_stock++"\n    },\n    "upsert": {\n        "name": "Blender",\n        "price": 399,\n        "in_stock": 5\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"replacing-documents",children:"Replacing Documents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Toaster Example"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Previous Toaster had a price of 49 and additional tag fields."}),"\n",(0,s.jsxs)(n.li,{children:["Replace the document to show a Toaster with a price of 79.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The query will also give a document without the additional tag fields."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'PUT /products/_doc/100\n{\n    "name": "Toaster",\n    "price": 79,\n    "in_stock": 4\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"deleting-documents",children:"Deleting Documents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Delete document at id 101"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DELETE /products/_doc/101\n"})}),"\n",(0,s.jsx)(n.h2,{id:"understanding-routing",children:"Understanding Routing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Routing is used to let Elasticsearch know where to store documents and how to find documents once they have been indexed."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Routing"})," is the process of resolving a shard for a document."]}),"\n",(0,s.jsx)(n.li,{children:"Routing is 100% transparent when using Elasticsearch."}),"\n",(0,s.jsx)(n.li,{children:"It is possible to customize routing for various purposes."}),"\n",(0,s.jsx)(n.li,{children:"The default routing strategy ensures that documents are distributed evenly."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["FORMULA:\n",(0,s.jsx)(n.code,{children:"shard_num = hash(_routing) % num_primary_shards"})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you manipulate the ",(0,s.jsx)(n.code,{children:"num_primary_shards"}),", Elasticsearch may not be able to locate documents even though it exists."]}),"\n",(0,s.jsx)(n.li,{children:"Modifying the number of shards requires creating a new index and reindexing documents into it."}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"how-elasticsearch-reads-data",children:"How Elasticsearch reads data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A read request is received and handled by a ",(0,s.jsx)(n.strong,{children:"coordinating node"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Routing is used to resolve the document's replication group."}),"\n",(0,s.jsxs)(n.li,{children:["Elasticsearch uses a technique called Adaptive Replica Selection (ARS).","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If Elasticsearch retrieved the document directly from the primary shard, all retrievals would end up on the same shard, which does not scale well."}),"\n",(0,s.jsx)(n.li,{children:"Instead, a shard is chosen from the replication group."}),"\n",(0,s.jsx)(n.li,{children:"ARS selects the best performance shard copy."}),"\n",(0,s.jsx)(n.li,{children:"Then, the coordinating node sends the read request to that shard."}),"\n",(0,s.jsx)(n.li,{children:"When the shard responds, the coordinating node collects the response and sends it to the client."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"ARS helps reduce query response times."}),"\n",(0,s.jsx)(n.li,{children:"ARS is an intelligent load balancer."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-elasticsearch-writes-data",children:"How Elasticsearch writes data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Write operations are sent to primary shards","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Primary shards validate the structure of the request and its field values."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"The primary shard forwards the operation to its replica shards in parallel to improve performance."}),"\n",(0,s.jsxs)(n.li,{children:["Primary terms and sequence numbers are used to recover from failures","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Primary terms"})," are a way to distinguish old and new primary shards."]}),"\n",(0,s.jsx)(n.li,{children:"A primary term is a counter for how many times the primary shard has changed."}),"\n",(0,s.jsx)(n.li,{children:"The primary term is appended to write operations."}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.strong,{children:"sequence number"})," is a counter that is incremented for each write operation until the primary shard changes."]}),"\n",(0,s.jsx)(n.li,{children:"Sequence number is appended to write operations together with the primary term."}),"\n",(0,s.jsx)(n.li,{children:"The primary shard increases the sequence number."}),"\n",(0,s.jsx)(n.li,{children:"Sequence numbers enable Elasticsearch to order write operations."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"recovering-when-a-primary-shard-fails",children:"Recovering when a primary shard fails"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Primary terms and sequence numbers are key when Elasticsearch needs to recover from a primary shard failure.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enables Elasticsearch to more efficiently figure out which write operations need to be applied"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"For large indices, this process is really expensive."}),"\n",(0,s.jsxs)(n.li,{children:["Global and local checkpoints help speed up the recovery process","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Checkpoints"})," are sequence numbers."]}),"\n",(0,s.jsx)(n.li,{children:"Each replication group has a global checkpoint"}),"\n",(0,s.jsx)(n.li,{children:"Each replica shard has a local checkpoint"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Global checkpoints"})," is the sequence number that all active shards within a replication group have been aligned at least up to","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This means any operations containing a sequence number lower than the global checkpoint have already been performed on all shards within the replication group."}),"\n",(0,s.jsx)(n.li,{children:"If a primary shard fails and rejoins the cluster at a later point, Elasticsearch only needs to compare the operations that are above the global checkpoint that it last knew about."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Local checkpoints"})," is the sequence number for the last write operation that was performed."]}),"\n",(0,s.jsx)(n.li,{children:"Primary terms and sequence numbers are available within responses."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"understanding-document-versioning",children:"Understanding document versioning"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Versioning is not a revision history of documents."}),"\n",(0,s.jsxs)(n.li,{children:["Elasticsearch stores an ",(0,s.jsx)(n.code,{children:"_version"})," metadata field with every document","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The value is an integer"}),"\n",(0,s.jsx)(n.li,{children:"When the document is updated, the value will increment by 1."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"_version"})," field is returned when retrieving documents"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"types-of-versioning",children:"Types of versioning"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default type of versioning is called ",(0,s.jsx)(n.strong,{children:"internal versioning"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"External Versioning"}),": used when versions are maintained outside of Elasticsearch.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["e.g. when documents are also stored in a database","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'PUT /products/_doc/123?version=521&version_type=external\n{\n    "name": "Coffee Maker",\n    "price": 64,\n    "in_stock": 10\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"purpose-of-versioning",children:"Purpose of Versioning"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can see how many times a document has been modified.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Probably not useful"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"This versioning is hardly used."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optimistic-concurrency-control",children:"Optimistic Concurrency Control"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Prevent overwriting documents due to concurrent operations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If Primary term and sequence term matches what's currently there, then success response, else error response."}),"\n",(0,s.jsx)(n.li,{children:"Elasticserach will reject a write operation if it contains the wrong primary term or sequence number"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update/100?if_primary_term=X&if_seq_no=X\n{\n    "doc": {\n        "in_stock": 123\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-handle-failures",children:"How to handle failures?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Handle the situation at the application level","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrieve the document again"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"_primary_term"})," and ",(0,s.jsx)(n.code,{children:"_seq_no"})," for a new update request"]}),"\n",(0,s.jsx)(n.li,{children:"Remember to perform any calculations that use field values again"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"update-by-query",children:"Update by Query"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"conflicts": "proceed"'})," will prevent the query from being aborted when there is a version conflict."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_update_by_query\n{\n  "conflicts": "proceed",\n  "script": {\n    "source": "ctx._source.in_stock--"\n  },\n  "query": {\n    "match_all": {}\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The query creates a snapshot to do optimistic concurrency control","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prevents overwriting changes made after the snapshot was taken."}),"\n",(0,s.jsx)(n.li,{children:"The query may take a while to finish if updating many documents."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Each document's primary term and sequence number is used.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A document is only updated if the values match the ones from the snapshot (optimistic concurrency control)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Number of version conflicts is returned with the ",(0,s.jsx)(n.code,{children:"version_conflicts"})," key."]}),"\n",(0,s.jsxs)(n.li,{children:["Search queries and bulk requests are sent to replication groups sequentially","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Elasticsearch retries these queries up to 10 times"}),"\n",(0,s.jsxs)(n.li,{children:["If the queries still fail, the whole query is aborted","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Any changes already made to the document are not rolled back"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"The API returns information about failures"}),"\n",(0,s.jsxs)(n.li,{children:["If a document had been modified since taking the snapshot, the query is aborted.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is checked with the document's primary term and sequence number"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["To count version conflicts instead of aborting the query, the ",(0,s.jsx)(n.code,{children:"conflicts"})," option can be set to ",(0,s.jsx)(n.code,{children:"proceed"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"delete-by-query",children:"Delete by Query"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Delete multiple documents within a single query"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'Example: Delete all documents within the "products" index'}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Query will delete all documents that match the query"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"match_all"})," is empty hence it deletes all document"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_delete_by_query\n{\n  "query": {\n    "match_all": {}\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"batch-processing",children:"Batch Processing"}),"\n",(0,s.jsx)(n.h3,{id:"intro-to-bulk-api",children:"Intro to Bulk API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Index, Update, and Delete many documents at once at a large scale.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Achieved by processing individual requests in batches using Bulk API."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html",children:"Bulk API"})," expects data formatted using the NDJSON specification"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"action_and_metadata\\n\noptional_source\\n\naction_and_metadata\\n\noptional_source\\n\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the Kibana console, let's index a new document","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"_id"'})," is optional"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /_bulk\n{ "index": { "_index": "products", "_id": 200} }\n{ "name": "Expresso Machine", "price": 199,, "in_stock": 5 }\n{ "create": { "_index": "products", "_id": 201 } }\n{ "name": "Milk Frother", "price": 149, "in_stock": 14 }\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The code above will create two new products"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST /products/_bulk\n{ "update": { "_id": 201 } }\n{ "doc": { "price": 129 } }\n{ "delete": { "_id": 200 } }\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The code above doesn't need index since it's specified after ",(0,s.jsx)(n.code,{children:"POST"}),".\nIt will update document with id 201 and delete document with id 200."]})}),"\n",(0,s.jsx)(n.h3,{id:"things-to-be-aware-of",children:"Things to be aware of"}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The HTTP ",(0,s.jsx)(n.code,{children:"Content-Type"})," header should be set to"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/x-ndjson\n"})}),(0,s.jsx)(n.p,{children:"Using HTTP clients, we need to handle this ourselves."})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Each line must end with a newline character such as ",(0,s.jsx)(n.code,{children:"\\n"})," or ",(0,s.jsx)(n.code,{children:"\\r\\n"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This includes the last line"}),"\n",(0,s.jsxs)(n.li,{children:["In a text editor, just leave the last line empty. Don't type ",(0,s.jsx)(n.code,{children:"\\n"})," or ",(0,s.jsx)(n.code,{children:"\\r\\n"}),"."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A failed action will not affect other actions","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Neither will the bulk request as a whole be aborted"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The Bulk API returns detailed info about each action","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Inspect the items key to see if a given action succeeded","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The order is the same as the actions within the request"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"errors"})," key conveniently tells us if any errors occurred."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"when-to-use-the-bulk-api",children:"When to use the Bulk API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Needed when performing lots of write operations at the same time"}),"\n",(0,s.jsxs)(n.li,{children:["The Bulk API is more efficient than sending individual write requests","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A lot of network round trips are avoided"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"final-note",children:"Final note"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Routing is used to resolve a document's shard","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Routing could be customized"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The Bulk API supports optimistic concurrency control","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Include the ",(0,s.jsx)(n.code,{children:"if_primary_term"})," and ",(0,s.jsx)(n.code,{children:"if_seq_no"})," parameters within the action metadata"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"importing-data-with-curl",children:"Importing data with cURL"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(0).A+"",children:"Download products-bulk.json"})}),"\n",(0,s.jsxs)(n.li,{children:["In terminal, the working directory is the file location of your test file: ",(0,s.jsx)(n.code,{children:"products-bulk.json"}),". Then, enter:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -H "Content-Type: application/x-ndjson" -XPOST http://localhost:9200/products/_bulk --data-binary "@products-bulk.json"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},0:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/files/products-bulk-1c81f84fae51b36460545ea5840b9ace.json"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);