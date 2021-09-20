(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(8),n=c.n(a),r=c(2),i=c(36),o=(c(14),c(0)),l=function(e){var t=e.label,c=e.selected,a=e.onSectionSelect,n=e.drawBraces,i=e.drawSelector,l=e.isLargeScreen,d=Object(s.useState)(""),j=Object(r.a)(d,2),h=j[0],u=j[1],b=l||n?"~ ".concat(t," ~"):t;return Object(o.jsxs)("div",{className:"section-button-container",children:[Object(o.jsxs)("button",{className:"section-button",onClick:function(e){e.preventDefault(),a(t)},children:[Object(o.jsx)("label",{className:h,onMouseEnter:function(){u("c".concat(Math.floor(6*Math.random()).toString()))},onMouseLeave:function(){return u("")},children:b}),Object(o.jsx)("br",{})]}),Object(o.jsx)("div",{className:"selected-marker",children:t==c&&i?"^":""})]})},d=function(e){var t=e.selected,c=e.onSectionSelect,s=e.drawBraces,a=e.drawSelector;e.isLargeScreen;return Object(o.jsxs)("div",{className:"section-nav",children:[s?Object(o.jsx)("div",{className:"instructions",children:"Pick a section!"}):void 0,Object(o.jsxs)("div",{className:"section-buttons",children:[Object(o.jsx)(l,{selected:t,onSectionSelect:c,drawBraces:s,drawSelector:a,label:"Projects",target:"Projects"}),Object(o.jsx)(l,{selected:t,onSectionSelect:c,drawBraces:s,drawSelector:a,label:"About",target:"About"}),Object(o.jsx)(l,{selected:t,onSectionSelect:c,drawBraces:s,drawSelector:a,label:"Contact",target:"Contact"}),Object(o.jsx)(l,{selected:t,onSectionSelect:c,drawBraces:s,drawSelector:a,label:"Blog",target:"Blog"})]})]})},j=function(e){var t=e.selected,c=e.onSectionSelect,s=Object(i.a)("(min-width:515px)");return Object(o.jsxs)("div",{className:"nameblock",children:[Object(o.jsxs)("div",{className:"name-and-blurb",children:[Object(o.jsxs)("h1",{className:"name-container",children:[Object(o.jsx)("div",{className:"name firstname",children:"Collin"}),Object(o.jsx)("div",{className:"name lastname",children:"Sparks"})]}),Object(o.jsx)("div",{className:"blurb",children:"Software Engineer"}),Object(o.jsx)("div",{className:"stack",children:"Python | JavaScript / React"})]}),Object(o.jsx)(d,{selected:t,onSectionSelect:c,drawBraces:!0,drawSelector:s,isLargeScreen:s})]})},h=function(e){var t=e.selected,c=e.onSectionSelect,s=e.setDrawHeader;return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h2",{className:"name",onClick:function(){return s(!1)},children:"Collin Sparks"}),Object(o.jsx)(d,{selected:t,onSectionSelect:c,drawSelector:!0})]})},u=function(){var e=Object(i.a)("(min-width:600px)");return Object(o.jsxs)("div",{className:"socials-container",children:[Object(o.jsx)("div",{className:"socials-title",children:"Socials"}),Object(o.jsxs)("div",{className:"socials-items",children:[Object(o.jsxs)("a",{href:"https://github.com/spark-c",children:[Object(o.jsx)("i",{className:"fa fa-github"}),Object(o.jsx)("div",{className:e?"social-label":"hidden",children:"spark-c"})]}),Object(o.jsxs)("a",{href:"https://twitter.com/collin_sparkles",children:[Object(o.jsx)("i",{className:"fa fa-twitter"}),Object(o.jsx)("div",{className:e?"social-label":"hidden",children:"@collin_sparkles"})]}),Object(o.jsxs)("a",{href:"https://linkedin.com/in/collin-sparks",children:[Object(o.jsx)("i",{className:"fa fa-linkedin"}),Object(o.jsx)("div",{className:e?"social-label":"hidden",children:"Collin Sparks"})]})]})]})},b=function(e){var t=e.children,c="Contact"===t.type.name;return Object(o.jsxs)("div",{className:"section-container",children:[t,c?void 0:Object(o.jsx)(u,{})]})},p=function(e){var t=e.project,c=e.showDetails,a=(e.isLargeScreen,Object(s.useState)(!1)),n=Object(r.a)(a,2),i=n[0],l=n[1],d=Object(s.useState)(""),j=Object(r.a)(d,2),h=j[0],u=j[1];return Object(o.jsxs)("div",{className:"card ".concat(h),onMouseEnter:function(){u("c".concat(Math.floor(6*Math.random()).toString()))},onMouseLeave:function(){return u("")},children:[Object(o.jsxs)("div",{className:"project-wrapper",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{className:"project-img",src:t["img-src"]})}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsxs)("div",{className:"project-details",children:[Object(o.jsx)("div",{className:"project-title item-margin",children:t.title}),Object(o.jsx)("div",{className:"project-stack item-margin",children:t.stack}),Object(o.jsx)("div",{className:"project-desc item-margin",children:t.desc})]}),Object(o.jsxs)("div",{className:"project-links",children:[t.writeup?Object(o.jsx)("div",{className:"show-writeup link-hover pointer",onClick:function(){c(!0,t.title)},children:"Details"}):void 0,t["host-url"]?Object(o.jsx)("a",{className:"project-host link-hover pointer",href:t["host-url"],target:"_blank",children:t.cta}):void 0,t.embed?Object(o.jsx)("div",{className:"project-expand link-hover pointer",onClick:function(){return l(!i)},children:t.cta}):void 0,t["github-url"]?Object(o.jsx)("a",{className:"project-github link-hover ",href:t["github-url"],children:"GitHub"}):void 0]})]})]}),t.embed&&i?t.embed:void 0]})},m=function(e){var t=e.showDetails,c=e.project;return Object(o.jsxs)("div",{className:"project-writeup",children:[Object(o.jsx)("button",{className:"backbutton",onClick:function(){return t(!1,void 0)},children:"<< Back"}),Object(o.jsx)("h1",{children:c.title}),Object(o.jsx)("p",{children:c.stack}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),c.writeup]})},O=function(e){var t=e.project,c=Object(s.useState)(""),a=Object(r.a)(c,2),n=a[0],i=a[1];return Object(o.jsxs)("div",{className:"oss-entry ".concat(n),onMouseEnter:function(){i("c".concat(Math.floor(6*Math.random()).toString()))},onMouseLeave:function(){return i("")},children:[Object(o.jsx)("a",{href:t.repo_url,target:"_blank",className:"project-title link-hover",children:t.title}),Object(o.jsx)("p",{children:t.description}),Object(o.jsx)("a",{className:"pr link-hover",href:t.pr_url,target:"_blank",children:"{ Go to PR }"})]})},v=c(9),g=c.n(v),x=c.p+"static/media/wcc.e23867ef.png",f=c.p+"static/media/sparksiebot.d0b7358c.png",S=c.p+"static/media/coffee-calc.8ad747d6.png",w={SparksieBOT:{title:"SparksieBOT","host-url":void 0,"github-url":"https://github.com/spark-c/SparksieBOT","img-src":f,desc:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"This bot is created and maintained to provide commands for utility and entertainment on my personal Discord server!"}),Object(o.jsx)("p",{children:"The project goes varying periods of light maintainance, heavy development for additional functionality, and occasional upkeep work to refactor old code to meet my improving code-quality standards."}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"strike",children:'You can click the "Live!" link to interact with SparksieBOT'})," Oops! SparksieBOT is currently ignoring commands sent from this page :("]})]}),stack:"Python (discord.py, SQLAlchemy) | Postgres | Heroku",cta:"Live!",embed:Object(o.jsx)(g.a,{className:"widgetbot",server:"742418152280948857",channel:"871196944754696233",height:600}),writeup:void 0},"web-contact-converter":{title:"web-contact-converter","host-url":"http://web-contact-converter.herokuapp.com","github-url":"https://github.com/spark-c/web-contact-converter","img-src":x,desc:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["A local company had a frequent task of manually transferring sales leads/contact information from a plain-text document into a spreadsheet -- which took ",Object(o.jsx)("span",{className:"italic",children:"hours"})," at a time. This app is used to enormously expedite the process!"]}),Object(o.jsx)("p",{children:'Note: The app is served from a Heroku "free" dyno, and unfortunately may take several seconds to load while it wakes up!'})]}),stack:"Python (Flask, SQLAlchemy) | JavaScript | Postgres | Heroku",cta:"Live!",embed:void 0,writeup:void 0},"coffee-calculator":{title:"coffee-calculator","host-url":"https://coffee-calculator-nine.vercel.app","github-url":"https://github.com/spark-c/coffee-calculator","img-src":S,desc:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"A small web app used for calculating the necessary variables of a pour-over coffee recipe."}),Object(o.jsx)("p",{children:"There are several modes to account for the various common combinations of given/desired values to calculate. Soon including a setting for making iced coffee! Based on V60 paramters."})]}),stack:"JavaScript (React) | Vercel",cta:"Live!",embed:void 0,writeup:void 0}},k={chipy:{title:"chipy.org",description:"This is the Chicago Python user group (ChiPy) main Django website codebase. This PR updates how contact form success feedback is presented to the user; replaces old alert-msg behavior with a new modal instead. (WIP)",repo_url:"https://github.com/chicagopython/chipy.org",pr_url:"https://github.com/chicagopython/chipy.org/pull/422"},hubspot:{title:"hubspot-api-python",description:"HubSpot's Python wrapper for their product's Auth and CRM APIs. This PR located, fixed, and tested broken links to the HubSpot API documentation in one of their sample app\u2019s README files.",repo_url:"https://github.com/HubSpot/hubspot-api-python/",pr_url:"https://github.com/HubSpot/hubspot-api-python/pull/53"},gh_changelog:{title:"github-changelog-generator",description:"This Ruby CLI tool automatically generates change-logs from tags, issues, labels and PRs on GitHub. This PR updated the project's help, docstrings, and documentation pages to accurately reflect whether each command's arguments were optional or required.",repo_url:"https://github.com/github-changelog-generator/github-changelog-generator/",pr_url:"https://github.com/github-changelog-generator/github-changelog-generator/pull/946"}},y=function(e){var t=e.isLargeScreen,c=Object(s.useState)(!1),a=Object(r.a)(c,2),n=a[0],i=a[1],l=Object(s.useState)(void 0),d=Object(r.a)(l,2),j=d[0],h=d[1],u=function(e,t){i(e),h(t)},b=[w.SparksieBOT,w["web-contact-converter"],w["coffee-calculator"]],v=[k.chipy,k.gh_changelog,k.hubspot],g=n?Object(o.jsx)(m,{project:w[j],showDetails:u}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Projects"}),b.map((function(e){return Object(o.jsx)(p,{project:e,showDetails:u,isLargeScreen:t},e.title)}))]}),x=n?void 0:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"OSS Contributions"}),v.map((function(e){return Object(o.jsx)(O,{project:e})}))]});return Object(o.jsxs)("div",{className:"section projects",children:[n?void 0:Object(o.jsx)("h1",{className:"section-title",children:"[ Here's some of my work! ]"}),g," ",x,"       "]})},N=Object(o.jsxs)("div",{className:"about-content",children:[Object(o.jsx)("p",{children:'My name is Collin Sparks -- some people have also taken to calling me "Sparkles", which is fine too!'}),Object(o.jsxs)("p",{children:["In short, I love solving problems and doing things that are useful to someone. ",Object(o.jsx)("span",{className:"italic",children:"Doubly"})," so when the solution involves cool technology!"]}),Object(o.jsx)("p",{children:'I started learning to code in 2018, when my mom had some wildly tedious recurring computer work to do for her job. I figured, "Surely there must be some better way..." Unsurprisingly, there was!'}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["One of the most attractive things to me about code is that it ",Object(o.jsx)("span",{className:"italic",children:"enables me to create"}),". I've sculpted, drawn, painted, built, choreographed, etc... but so far, code has been the media which helps me feel the most empowered and able to really MAKE things!"]}),Object(o.jsx)("p",{children:"On that note, I do have a huge love for art in general -- especially the performing arts. Big time."}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("h2",{children:"Arts, you say?"}),Object(o.jsx)("p",{children:"Yep!"}),Object(o.jsx)("p",{children:'Growing up in Ohio, I spent about 8 years dancing and peforming in a dance academy / company called BalletMet. It was awesome. Ballet is at the intersection of "incredibly artistic" and "wildly technical", and completely shaped my life experience as I was growing up.'}),Object(o.jsx)("p",{children:"And then in college, I got really into theatre! I was both a dancer and an actor for a while, but ended up getting very interested in Lighting Design as well. I've designed / implemented / programmed lights for a bunch of shows now, both in and out of school."})]}),C=c.p+"static/media/grievous.8ae934ef.png",L=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)("div",{className:"section about",children:[Object(o.jsx)("h1",{className:"section-title",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},onClick:function(){return a(!c)},children:"[ Hello there! ]"}),c?Object(o.jsx)("img",{className:"grievous",src:C,alt:"Star Wars' General Grievous saying 'General Kenobi!'"}):void 0,N]})},P=c(3),B=c.n(P),T=c(4),M=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),l=i[0],d=i[1],j=Object(s.useState)(""),h=Object(r.a)(j,2),b=h[0],p=h[1],m=Object(s.useState)(""),O=Object(r.a)(m,2),v=O[0],g=O[1],x=Object(s.useState)(void 0),f=Object(r.a)(x,2),S=f[0],w=f[1],k=Object(s.useState)(!1),y=Object(r.a)(k,2),N=y[0],C=y[1],L=function(){var e=Object(T.a)(B.a.mark((function e(){var t,s;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sparksie-api.vercel.app/send_email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sender_name:c,sender_email:l,subject:b,body:v})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).catch((function(e){console.log("hello my name is ".concat(e)),w("error")}));case 2:return t=e.sent,e.next=5,t;case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(T.a)(B.a.mark((function e(t){var c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),C(!0),S&&w(void 0),e.next=5,L();case 5:return c=e.sent,e.next=8,c;case 8:if(!e.sent){e.next=14;break}w("success"),g(""),a(""),d(""),p("");case 14:C(!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M={value:void 0};switch(S){case"success":M.value=Object(o.jsx)("p",{className:"feedback",children:"Email successfully sent!"});break;case"error":M.value=Object(o.jsx)("p",{className:"feedback",children:"Something went wrong on our end!"})}return Object(o.jsxs)("div",{className:"section contact",children:[Object(o.jsx)("h1",{className:"section-title",children:"[ Send an email below! ]"}),Object(o.jsx)(u,{}),M.value,Object(o.jsx)("div",{className:"contact-content",children:Object(o.jsxs)("form",{className:"contact-form",onSubmit:P,children:[N?Object(o.jsx)("p",{className:"loading-message",children:"Sending..."}):void 0,N?Object(o.jsx)("div",{className:"loading"}):void 0,Object(o.jsxs)("div",{className:"short-fields",children:[Object(o.jsxs)("div",{className:"name-input",children:[Object(o.jsxs)("label",{htmlFor:"name-input",children:["Your Name",Object(o.jsx)("span",{className:"red",children:"*"})]}),Object(o.jsx)("input",{className:"input short",id:"name-input",type:"text",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(o.jsxs)("div",{className:"email-input",children:[Object(o.jsxs)("label",{htmlFor:"email-input",children:["Your Email",Object(o.jsx)("span",{className:"red",children:"*"})]}),Object(o.jsx)("input",{className:"input short",id:"email-input",type:"text",name:"sender",value:l,onChange:function(e){return d(e.target.value)}})]})]}),Object(o.jsxs)("label",{htmlFor:"subject-input",children:["Subject Line",Object(o.jsx)("span",{className:"red",children:"*"})]}),Object(o.jsx)("input",{className:"input",id:"subject-input",type:"text",name:"subject",value:b,onChange:function(e){return p(e.target.value)}}),Object(o.jsxs)("label",{htmlFor:"message-input",children:["Message Body",Object(o.jsx)("span",{className:"red",children:"*"})]}),Object(o.jsx)("textarea",{className:"input",id:"message-input",name:"body",value:v,onChange:function(e){return g(e.target.value)}}),Object(o.jsx)("p",{className:"contact-cc",children:"Note: You will be cc'd on the email :)"}),Object(o.jsx)("input",{id:"contact-submit",type:"submit",value:"Send!"})]})})]})},I=function(e){var t=e.cache,c=e.updateCache,a=e.isLargeScreen,n=Object(s.useState)(t),i=Object(r.a)(n,2),l=i[0],d=i[1];Object(s.useEffect)((function(){c(l)}),[l]),Object(s.useEffect)((function(){h()}),[]);var j='\n    {\n        user(username: "collin-sparkles") {\n          publication {\n            posts(page: 0) {\n              title\n              brief\n              slug\n              dateAdded\n              coverImage\n            }\n          }\n        }\n      }\n    ',h=function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(T.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.hashnode.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:j,variables:{}})});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(T.a)(B.a.mark((function t(){var c;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:c=t.sent,d(c.data.user.publication.posts);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()},u=l?l.map((function(e){return Object(o.jsx)(p,{isLargeScreen:a,alignment:"left",project:{title:e.title,"host-url":"https://sparksnotes.hashnode.dev/".concat(e.slug),"github-url":void 0,"img-src":e.coverImage,desc:e.brief,date:e.dateAdded,cta:"Read more!"}},e.slug)})):void 0;return Object(o.jsxs)("div",{className:"section blog",children:[Object(o.jsxs)("h1",{className:"section-title",children:[Object(o.jsxs)("a",{href:"https://sparksnotes.hashnode.dev",children:["[ Check out\xa0",Object(o.jsx)("em",{className:"link-hover",children:"Sparks' Notes!"})]})," ]"]}),Object(o.jsx)("div",{className:"blog-content",children:Object(o.jsx)("div",{children:u||Object(o.jsx)("h2",{children:"Loading..."})})})]})},_=function(){return Object(o.jsx)("div",{className:"construction",children:Object(o.jsx)("div",{className:"construction-text",children:"Site under construction! :)"})})},A=function(){var e=Object(i.a)("(min-width:515px)"),t=Object(s.useState)(!1),c=Object(r.a)(t,2),a=c[0],n=c[1],l=Object(s.useState)("Projects"),d=Object(r.a)(l,2),u=d[0],p=d[1],m=Object(s.useState)(void 0),O=Object(r.a)(m,2),v=O[0],g=O[1],x={Projects:Object(o.jsx)(y,{isLargeScreen:e}),About:Object(o.jsx)(L,{}),Contact:Object(o.jsx)(M,{}),Blog:Object(o.jsx)(I,{isLargeScreen:e,cache:v,updateCache:g})},f=Object(s.useState)(x[u]),S=Object(r.a)(f,2),w=S[0],k=S[1],N=function(t){!1===e&&n(!0);var c=e?document.querySelector(".instructions"):document.querySelector("body");p(t),k(x[t]),c&&c.scrollIntoView(!0)},C=Object(o.jsx)(b,{label:u,children:w});return Object(o.jsxs)("div",{className:"content",children:[!0===a?Object(o.jsx)(h,{onSectionSelect:N,selected:u,setDrawHeader:n}):Object(o.jsx)(j,{onSectionSelect:N,selected:u}),Object(o.jsx)(_,{}),e||!0===a?C:void 0,Object(o.jsx)("footer",{children:Object(o.jsx)("div",{children:"Created by Collin Sparks with React :)"})})]})};n.a.render(Object(o.jsx)(A,{}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8f84628c.chunk.js.map