(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(19),s=c.n(a),r=(c(26),c(27),c(13)),j=c(2),l=c(4),o=c(5),b=c(7),h=c(6),u=c(0),d=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("li",{id:this.props.item,children:Object(u.jsx)(r.b,{to:this.props.tolink,onClick:this.props.activec.bind(this,this.props.item),children:this.props.item})})}}]),c}(n.Component),O=(c.p,function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).activeitem=function(e){n.state.NavItemActive.length>0&&document.getElementById(n.state.NavItemActive).classList.remove("active"),n.setState({NavItemActive:e},(function(){document.getElementById(n.state.NavItemActive).classList.add("active")}))},n.state={NavItemActive:""},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("nav",{className:"navbar navbar-light navbar-dark imageWrapper",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)(d,{item:"Home",tolink:"/",activec:this.activeitem}),Object(u.jsx)(d,{item:"About",tolink:"/about",activec:this.activeitem}),Object(u.jsx)(d,{item:"Education",tolink:"/education",activec:this.activeitem}),Object(u.jsx)(d,{item:"Skills",tolink:"/skills",activec:this.activeitem}),Object(u.jsx)(d,{item:"Contact",tolink:"/contact",activec:this.activeitem})]}),Object(u.jsx)("div",{className:"img"})]})}}]),c}(n.Component)),p=c(21),m=c.n(p),x=c.p+"static/media/martha_gamez.d6741bc8.jpg",v=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"social",children:[Object(u.jsx)("a",{href:"https://github.com/Martha121",target:"_blank",children:Object(u.jsx)("i",{class:"fab fa-github"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/martha-gamez-60a5764a/",target:"_blank",children:Object(u.jsx)("i",{class:"fab fa-linkedin-in"})})]})}}]),c}(n.Component),f=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"condiv home",children:[Object(u.jsx)("img",{src:x,className:"profilepic"}),Object(u.jsx)(m.a,{className:"typingeffect",text:["Hi! I am Martha Gamez.","I am a fullstack web developer."],speed:100,eraseDelay:700}),Object(u.jsx)(v,{})]})}}]),c}(n.Component),g=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"condiv",children:[Object(u.jsx)("h1",{className:"subtopic",children:"About Me"}),Object(u.jsx)("h4",{children:"Hey there,"}),Object(u.jsx)("h1",{children:"I'm Martha Gamez"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"I am an Electrical Engineer and a Full Stack Web Developer. I started my journey in the world of web development by Pursuing my Full Stack Web Development Certificate at The University of Texas in Austin.I like creating Interactive UI components for better UX and share those desgin and codes to the world through Github."})]})}}]),c}(n.Component),k=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{class:"widecard",children:Object(u.jsxs)("div",{class:"compdet",children:[Object(u.jsx)("h3",{children:this.props.title}),Object(u.jsx)("h4",{class:"secondtext",children:this.props.where}),Object(u.jsxs)("h4",{class:"secondtext",children:[this.props.from," - ",this.props.to]})]})})}}]),c}(n.Component),y=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"condiv",children:[Object(u.jsx)("h1",{className:"subtopic",children:"My Education"}),Object(u.jsx)(k,{title:"Full Stack Web Developer",where:"University of Texas",from:"June 2021",to:"Present"}),Object(u.jsx)(k,{title:"Electrical Engineering",where:"ITESM",from:"1991",to:"1996"})]})}}]),c}(n.Component),N=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).state={Languages:["HTML5","CSS3","JavaScript ES6+","SQL","REACT JS","NoSQL"],applications:["Github","MongoDB","MySQL"],Tools:["Github","MongoDB","MySQL"]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:" container condiv skills",children:[Object(u.jsx)("h1",{className:" two subtopic",children:"My Skills"}),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("div",{classname:"one",children:[Object(u.jsx)("h2",{children:" Languages"}),Object(u.jsx)("ul",{children:this.state.Languages.map((function(e){return Object(u.jsx)("li",{children:e})}))})]}),Object(u.jsxs)("div",{classname:"two",children:[Object(u.jsx)("h2",{children:" Applications "}),Object(u.jsx)("ul",{children:this.state.applications.map((function(e){return Object(u.jsx)("li",{children:e})}))})]}),Object(u.jsxs)("div",{className:"three",children:[Object(u.jsx)("h2",{children:" Tools "}),Object(u.jsx)("ul",{children:this.state.Tools.map((function(e){return Object(u.jsx)("li",{children:e})}))})]})]})]})}}]),c}(n.Component),C=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"condiv contact",children:[Object(u.jsx)("h1",{className:"subtopic",children:"Contact Me"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Email : marthagamez211@gmail.com"}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Phone: 512 6982297"}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Austin,Tx."}),Object(u.jsx)(v,{})]})}}]),c}(n.Component);var I=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsx)(j.a,{exact:!0,path:"/",children:Object(u.jsx)(f,{})}),Object(u.jsx)(j.a,{path:"/about",children:Object(u.jsx)(g,{})}),Object(u.jsx)(j.a,{path:"/education",children:Object(u.jsx)(y,{})}),Object(u.jsx)(j.a,{path:"/skills",children:Object(u.jsx)(N,{})}),Object(u.jsx)(j.a,{path:"/contact",children:Object(u.jsx)(C,{})})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.679db775.chunk.js.map