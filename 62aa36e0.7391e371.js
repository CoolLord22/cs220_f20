(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),r=(n(0),n(166)),o={id:"hw1",title:"Homework 1"},s={unversionedId:"hw/hw1",id:"hw/hw1",isDocsHomePage:!1,title:"Homework 1",description:"* You are expected to work individually.",source:"@site/docs\\hw\\hw1.md",slug:"/hw/hw1",permalink:"/cs220_f20/docs/hw/hw1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/hw/hw1.md",version:"current"},c=[{value:"Learning Objectives",id:"learning-objectives",children:[{value:"Overview",id:"overview",children:[]},{value:"Specific Requirements",id:"specific-requirements",children:[]},{value:"Submission",id:"submission",children:[]}]}],l={rightToc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"You are expected to work individually."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Due: Friday September 18th at 11pm EDT (Baltimore time).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"This assignment is worth 60 points."))))),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Objectives")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"arithmetic operators"),Object(r.b)("li",{parentName:"ul"},"control structures"),Object(r.b)("li",{parentName:"ul"},"input collection and validation"),Object(r.b)("li",{parentName:"ul"},"version control using ",Object(r.b)("inlineCode",{parentName:"li"},"git"))))),Object(r.b)("h3",{id:"overview"},"Overview"),Object(r.b)("p",null,"In this assignment, you will create a C program which allows the user to enter an arithmetic expression of arbitrary length, and which calculates and outputs the value of that expression. The expression may consist of numeric literals (floating point values), as well as the two arithmetic operators ",Object(r.b)("inlineCode",{parentName:"p"},"*")," (for multiplication) and ",Object(r.b)("inlineCode",{parentName:"p"},"/")," (for division), but no parentheses. The result output by the program should not be formatted to a specific number of decimal places but displayed with the full precision of a ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("u",null,"float"))," value. "),Object(r.b)("p",null,"Your program will validate the user's input. If the user inputs an expression which is not well-formed (for example missing operands or operators, contains invalid operators, contains parentheses etc.), your program will report the error message ",Object(r.b)("inlineCode",{parentName:"p"},"malformed expression")," and end immediately with a return value of ",Object(r.b)("inlineCode",{parentName:"p"},"1"),". If the user inputs an expression which attempts division by zero, your program will report the error message ",Object(r.b)("inlineCode",{parentName:"p"},"division by zero")," and end immediately with a return value of ",Object(r.b)("inlineCode",{parentName:"p"},"2"),". Otherwise, the return value should be ",Object(r.b)("inlineCode",{parentName:"p"},"0"),". "),Object(r.b)("p",null,"Throughout your work on this assignment, be sure to frequently add, commit (supplying meaningful messages) and push your changes to your personal git repository.  After you complete your work on the assignment, you will be asked to submit a ",Object(r.b)("em",{parentName:"p"},"gitlog.txt")," file, just as in Homework 0. However, we expect your log for this homework to show more activity. Recall that your code is always expected to compile without errors or warnings. Submissions which do not compile properly may earn zero points, so be sure to submit to Gradescope early and often! And once you get a good start on the assignment, always have some earlier compiling version of your work pushed up to Github."),Object(r.b)("h3",{id:"specific-requirements"},"Specific Requirements"),Object(r.b)("p",null,"In the homework folder of your private repository (",Object(r.b)("inlineCode",{parentName:"p"},"cs220-fall-student-JHED"),"), you will create a new subfolder named ",Object(r.b)("inlineCode",{parentName:"p"},"hw1"),". In that ",Object(r.b)("inlineCode",{parentName:"p"},"hw1")," subfolder, you will create your program in a new C source file named ",Object(r.b)("inlineCode",{parentName:"p"},"arithmetic.c"),". At the top of the file, be sure to add two comment lines that indicate ",Object(r.b)("strong",{parentName:"p"},"your name")," and ",Object(r.b)("strong",{parentName:"p"},"JHED ID"),"."),Object(r.b)("p",null,"Note that your program will continue collecting (parts of) the expression entered by the user as long as it is well-formed. A proper expression may contain zero or more of any kind of whitespace (spaces, tabs, newlines) between operands and operators. As such, the user will press ",Object(r.b)("strong",{parentName:"p"},"ctrl-d")," to indicate the end of the input.  "),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In some situations, the user will need to press ",Object(r.b)("strong",{parentName:"p"},"ctrl-d")," twice in a row."))),Object(r.b)("p",null,'Whenever a badly formed expression is detected, your program should output exactly the message "malformed expression" followed by a newline character. Whenever division by zero is attempted, your program should output exactly the message "division by zero" followed by a newline character. At most one of "malformed expression" or "division by zero" will apply to a given input, since the program is immediately terminated once one or the other is detected.'),Object(r.b)("p",null,"Here are several samples runs of the program on ugrad, where $ denotes the command prompt, and user input is highlighted with colors. Note that the first line shown below is the command you are expected to use as you compile your program (and the one that will be used by the graders).  The compilation line should report zero errors and warnings, as demonstrated below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ gcc -std=c99 -pedantic -Wall -Wextra arithmetic.c\n$ ./a.out\nPlease enter an arithmetic expression using * and / only:\n5.25 (followed by ctrl-d)\n5.250000\n$ ./a.out\nPlease enter an arithmetic expression using * and / only:\n3*\n4.3/2\n6.450000\n$ ./a.out\nPlease enter an arithmetic expression using * and / only:\n100 / 7 * 20 * -5\n-1428.571533\n$ ./a.out\nPlease enter an arithmetic expression using * and / only:\n100 / 0 * 20 * * * -5\ndivision by zero\n$ ./a.out\nPlease enter an arithmetic expression using * and / only:\n20.5 */-50\nmalformed expression\n$ ./a.out\nPlease enter an arithmetic expression using * and / only:\n3 * 4 - 2\nmalformed expression\n$ ./a.out\nPlease enter an arithmetic expression using * and / only:\n(user enters nothing prior to ctrl-d)\nmalformed expression\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There may be other ways for the input expressions to be malformed, besides the three ways shown above. You must be careful to check for all the various ways it might be malformed. The followings are few examples for valid expressions:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"5. * 1\n(user enters ctrl-d)\n\n.1 * .5\n(user enters ctrl-d)\n\n-.5\n(user enters ctrl-d)\n\n1 * +1\n(user enters ctrl-d)\n\n1 / 01\n* 2 (note: user hits enter and continues typing before hitting ctrl-d)\n(user presses ctrl-d)\n")))),Object(r.b)("h3",{id:"submission"},"Submission"),Object(r.b)("p",null,"Create a ",Object(r.b)("em",{parentName:"p"},".zip")," file named ",Object(r.b)("em",{parentName:"p"},"hw1.zip")," which contains only ",Object(r.b)("strong",{parentName:"p"},"arithmetic.c")," and ",Object(r.b)("strong",{parentName:"p"},"gitlog.txt"),". Copy the ",Object(r.b)("em",{parentName:"p"},"hw1.zip")," file to your local machine and submit it as Homework 1 on Gradescope. "),Object(r.b)("p",null,"When you submit, Gradescope conducts a series of automatic tests.  These tests do basic checks like making sure that you submitted the right files and that your ",Object(r.b)("inlineCode",{parentName:"p"},".c")," file compiles properly.  If you see error messages here (look for red), address them and resubmit."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You may re-submit any number of times prior to the deadline; only your latest submission will be graded."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Review the course syllabus for late submission policies (grace period and late days)."))),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"No-compile Policy")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Remember that if your final submitted code does not compile, you will earn a zero score for the assignment."))),Object(r.b)("p",null,"Two notes regarding automatic checks for programming assignments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Passing an automatic check is not itself worth points.  (There might be a nominal, low point value like 0.01 associated with a check, but that will not count in the end.) The checks exist to help you and the graders find obvious errors.  This will be true for most of the assignments; the actual grades are given manually by the graders, along with comments."),Object(r.b)("li",{parentName:"ul"},"The automatic checks cover some of the requirements set out in the assignment, but not all. In general, it is up to you to test your own work and ensure your programs satisfy all stated requirements.  Passing all the automatic checks does not necessarily mean you will earn all the points.")))}m.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=m(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||p[d]||r;return n?i.a.createElement(u,s(s({ref:t},l),{},{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);