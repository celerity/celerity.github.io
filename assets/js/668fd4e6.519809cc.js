"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80300],{37839:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(74848),i=s(28453);const o={id:"host-tasks",title:"I/O and Verification using Host Tasks",sidebar_label:"Host Tasks"},r=void 0,a={id:"host-tasks",title:"I/O and Verification using Host Tasks",description:"While Celerity is focused on accelerator computations, real-world applications will contain host code as part of their",source:"@site/celerity-runtime/docs/host-tasks.md",sourceDirName:".",slug:"/host-tasks",permalink:"/docs/host-tasks",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Philip Salzmann",lastUpdatedAt:1684940269e3,frontMatter:{id:"host-tasks",title:"I/O and Verification using Host Tasks",sidebar_label:"Host Tasks"},sidebar:"docs",previous:{title:"Range Mappers",permalink:"/docs/range-mappers"},next:{title:"Reductions",permalink:"/docs/reductions"}},c={},l=[{value:"Master-Node Host Tasks",id:"master-node-host-tasks",level:2},{value:"Distributed Host Tasks",id:"distributed-host-tasks",level:2},{value:"Experimental: Collective Host Tasks",id:"experimental-collective-host-tasks",level:2},{value:"Collective Groups",id:"collective-groups",level:3},{value:"Buffer Access from a Collective Host Task",id:"buffer-access-from-a-collective-host-task",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"While Celerity is focused on accelerator computations, real-world applications will contain host code as part of their\ndata flow. This may include calls to specialized libraries, distributed I/O operations or verification."}),"\n",(0,n.jsxs)(t.p,{children:["To integrate such tasks into an asynchronous distributed program, Celerity offers ",(0,n.jsx)(t.strong,{children:"host tasks"})," with semantics\nspecialized for these different applications. Similar to compute tasks, they are scheduled through the command group\nhandler using the ",(0,n.jsx)(t.code,{children:"celerity::handler::host_task"})," family of methods."]}),"\n",(0,n.jsx)(t.p,{children:"Host tasks are executed in a background thread pool on each participating node and may execute concurrently."}),"\n",(0,n.jsx)(t.h2,{id:"master-node-host-tasks",children:"Master-Node Host Tasks"}),"\n",(0,n.jsxs)(t.p,{children:["The simplest kind of host task is executed on the master node only. The relevant overload of ",(0,n.jsx)(t.code,{children:"host_task"})," is selected\nwith the ",(0,n.jsx)(t.code,{children:"on_master_node"})," tag:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"cgh.host_task(celerity::on_master_node, []{ ... });\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Buffers can be accessed in the usual fashion, although there is no ",(0,n.jsx)(t.code,{children:"item"})," structure passed into the kernel. Instead,\nwhen constructing an accessor, a ",(0,n.jsx)(t.code,{children:"fixed"})," or ",(0,n.jsx)(t.code,{children:"all"})," range mapper is used to specify the range of interest. Also,\nthe ",(0,n.jsx)(t.code,{children:"*_host_task"})," selector must be used for selecting the access mode."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'celerity::distr_queue q;\ncelerity::buffer<float, 1> result;\nq.submit([&](celerity::handler &cgh) {\n\tcelerity::accessor acc{buffer, cgh, celerity::access::all{},\n\t\t\tcelerity::read_only_host_task};\n    cgh.host_task(celerity::on_master_node, [=]{\n        printf("The result is %g\\n", acc[0]);\n    });\n});\n'})}),"\n",(0,n.jsx)(t.h2,{id:"distributed-host-tasks",children:"Distributed Host Tasks"}),"\n",(0,n.jsxs)(t.p,{children:["If a computation involving host code is to be distributed across a cluster, Celerity can split the iteration space\naccordingly. Such a distributed host task is created by passing a global size to ",(0,n.jsx)(t.code,{children:"host_task"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"cgh.host_task(global_size, [](celerity::partition<Dims>) { ... });\ncgh.host_task(global_size, global_offset, [](celerity::partition<Dims>) { ... });\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Instead of the per-item kernel invocation of ",(0,n.jsx)(t.code,{children:"handler::parallel_for"})," that is useful for accelerator\ncomputations, ther host kernel will receive ",(0,n.jsx)(t.em,{children:"partitions"})," of the iteration space. They describe the iteration sub-space\nthis node receives:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'celerity::distr_queue q;\nq.submit([&](celerity::handler &cgh) {\n    cgh.host_task(celerity::range<1>(100), [=](celerity::partition<1> part) {\n        printf("This node received %zu items\\n", part.get_subrange().range[0]);\n    });\n});\n'})}),"\n",(0,n.jsx)(t.p,{children:"In distributed host tasks, buffers can be accessed using the same range mappers as in device computations with the\nexpected semantics."}),"\n",(0,n.jsx)(t.p,{children:"Celerity makes no guarantees about the granularity of the split. Also, some nodes may receive multiple concurrent\ninvocations of the kernel while others might not participate in the host task at all."}),"\n",(0,n.jsx)(t.h2,{id:"experimental-collective-host-tasks",children:"Experimental: Collective Host Tasks"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," This feature is subject to change."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Efficient distributed I/O routines need to perform ",(0,n.jsx)(t.em,{children:"collective"})," operations accross a cluster, i.e. operations\nin which all nodes participate simultaneously. A popular API that makes use of this feature is\n",(0,n.jsx)(t.a,{href:"https://support.hdfgroup.org/HDF5/PHDF5/",children:(0,n.jsx)(t.em,{children:"Parallel HDF5"})}),", providing access to array data on the file system\nthrough an API using MPI I/O as the underlying driver (See the Celerity ",(0,n.jsx)(t.code,{children:"distr_io"})," example for a demonstration)."]}),"\n",(0,n.jsxs)(t.p,{children:["Invoking collective operations from a Celerity program requires additional support from the runtime to guarantee\nproper ordering of MPI calls, the participation of each node in the operation and absence of race conditions between\nconcurrent host tasks on the same queue. To request a host task satisfying these conditions, use the\n",(0,n.jsx)(t.code,{children:"experimental::collective"})," tag:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"cgh.host_task(celerity::experimental::collective,\n    [](celerity::experimental::collective_partition part) { ... });\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"collective_partition"})," is a specialization of the one-dimensional ",(0,n.jsx)(t.code,{children:"partition"}),". Note how no global size is passed\nto the host task. Instead, the runtime creates a one-dimensional iteration space where the size is the number of\nparticipating nodes, and the single-element subrange on each node is the node index. Additionally,\n",(0,n.jsx)(t.code,{children:"collective_partition"})," provides access to the MPI communicator for this task:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"celerity::distr_queue q;\nq.submit([](celerity::handler &cgh) {\n    cgh.host_task(celerity::experimental::collective,\n            [](celerity::experimental::collective_partition> part) {\n        MPI_Comm comm = part.get_collective_mpi_comm();\n        MPI_Barrier(comm);\n    });\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Third-party APIs using MPI collectives will have a ",(0,n.jsx)(t.code,{children:"MPI_Comm"})," parameter where this communicator can be passed in.\nCelerity guarantees the communicator to be free of race conditions with other operations for the duration of the\nhost task. If multiple collective tasks are scheduled, they receive the same MPI communicator."]}),"\n",(0,n.jsx)(t.h3,{id:"collective-groups",children:"Collective Groups"}),"\n",(0,n.jsxs)(t.p,{children:["To guarantee proper ordering of MPI operations across the cluster, collective host tasks on the same communicator\nmust neither be run concurrently nor be reordered on one node. In case there are multiple independent collective\noperations eligible to be run concurrently, Celerity can be notified of this by using ",(0,n.jsx)(t.em,{children:"collective groups"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"celerity::distr_queue q;\ncelerity::experimental::collective_group first_group;\ncelerity::experimental::collective_group second_group;\nq.submit([&](celerity::handler &cgh) {\n    cgh.host_task(celerity::experimental::collective(first_group), []...);\n});\nq.submit([&](celerity::handler &cgh) {\n    cgh.host_task(celerity::experimental::collective(second_group), []...);\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Since these two host tasks use different collective groups and are also independent with regards to their buffer\naccesses, they can now be executed concurrently. For this purpose, each kernel receives a MPI communicator unique to its\ncollective group. The prior example without explicit mentions of a collective group implicitly binds to\n",(0,n.jsx)(t.code,{children:"celerity::experimental::default_collective_group"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"buffer-access-from-a-collective-host-task",children:"Buffer Access from a Collective Host Task"}),"\n",(0,n.jsx)(t.p,{children:"Collective host tasks are special in that they receive an implicit one-dimensional iteration space that just identifies\nthe participating nodes. To access buffers in a meaningful way, these node indices must be translated to buffer regions.\nIn the typical Celerity fashion, this is handled via range mappers."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"celerity::experimental::even_split"})," range mapper maps a one-dimensional range onto arbitrary-dimensional buffers by\nsplitting them along the first (slowest) dimension into contiguous memory portions.\n",(0,n.jsx)(t.code,{children:"celerity::accessor::get_allocation_window"})," can then be used to retrieve the host-local chunk of the buffer:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"celerity::distr_queue q;\ncelerity::buffer<float, 2> buf;\nq.submit([&](celerity::handler& cgh) {\n\tcelerity::accessor acc{buffer, cgh,\n\t\t\tcelerity::experimental::access::even_split<2>{},\n\t\t\tcelerity::read_only_host_task};\n    cgh.host_task(celerity::experimental::collective,\n            [=](celerity::experimental::collective_partition part) {\n        auto aw = acc.get_allocation_window(part);\n        // ...\n    });\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);