(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{116:function(e,a,t){"use strict";function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}a.a=function(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}},131:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(124),c=t(122),s=t(51),i=t.n(s);const o=37,u=39;a.a=function(e){const{block:a,children:t,defaultValue:s,values:m,groupId:d}=e,{tabGroupChoices:b,setTabGroupChoices:h}=Object(r.a)(),[E,v]=Object(n.useState)(s),[f,p]=Object(n.useState)(!1);if(null!=d){const e=b[d];null!=e&&e!==E&&m.some(a=>a.value===e)&&v(e)}const _=e=>{v(e),null!=d&&h(d,e)},g=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||p(!0)},y=()=>{p(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",y)},[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a})},m.map(({value:e,label:a})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":E===e,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":E===e}),style:f?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case u:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case o:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(g,e.target,e),w(e)},onFocus:()=>_(e),onClick:()=>{_(e),p(!1)},onPointerDown:()=>p(!1)},a))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter(e=>e.props.value===E)[0]))}},132:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("div",null,e.children)}},90:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=(t(116),t(120)),c=(t(117),t(115),t(119));t(121),t(131),t(132),t(91);a.default=function(){return l.a.createElement(r.a,{title:"Course Staff"},l.a.createElement("div",{className:"container",style:{display:"block",margin:"2% 0 0 2%"}},l.a.createElement("h1",null,"Instructors"),l.a.createElement("div",{class:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 1%"}},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("div",{class:"avatar"},l.a.createElement("img",{class:"avatar__photo avatar__photo--xl",src:Object(c.a)("img/darvish.jpg")}),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h4",{class:"avatar__name"},"Dr. Ali Darvish, Lecturer"),l.a.createElement("small",{class:"avatar__subtitle"},"Depertment of Computer Science ",l.a.createElement("br",null),"Email: darvish /AT/ jhu DOT edu ",l.a.createElement("br",null),"Web: ",l.a.createElement("a",{href:"http://cs.jhu.edu/~darvish/",target:"_blank"},"http://cs.jhu.edu/~darvish/"),l.a.createElement("br",null),"Office Hours: TBD ",l.a.createElement("br",null),"Online Meeting: zoom link")))))),l.a.createElement("br",null),l.a.createElement("div",{class:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 1%"}},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("div",{class:"avatar"},l.a.createElement("img",{class:"avatar__photo avatar__photo--xl",src:Object(c.a)("img/singchun.jpg")}),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h4",{class:"avatar__name"},"Sing Chun Lee, Ph.D Candidate"),l.a.createElement("small",{class:"avatar__subtitle"},"Depertment of Computer Science ",l.a.createElement("br",null),"Email: singchun DOT lee /AT/ jhu DOT edu ",l.a.createElement("br",null),"Web: ",l.a.createElement("a",{href:"http://www.cs.jhu.edu/~singchun",target:"_blank"},"www.cs.jhu.edu/~singchun")," ",l.a.createElement("br",null),"Office Hours: TBD ",l.a.createElement("br",null),"Online Meeting: zoom link ",l.a.createElement("br",null))))))),l.a.createElement("br",null),l.a.createElement("h2",null,"Head Course Assistants"),l.a.createElement("br",null),l.a.createElement("h2",null,"Course Assistants")))}}}]);