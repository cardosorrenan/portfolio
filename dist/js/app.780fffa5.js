(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},1195:function(t,e,a){t.exports=a.p+"img/avatar.f6d88f87.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("5f5b"),o=a("ecee"),i=a("c074"),r=a("f2d1"),c=a("ad3d"),l=a("f0eb"),u=a("77ed"),d=a.n(u),m=a("98c9"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-page-transition",[a("router-view")],1)},h=[],f=(a("034f"),a("2877")),v={},g=Object(f["a"])(v,p,h,!1,null,null,null),b=g.exports,w=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("home-background"),a("b-row",{staticClass:"main w-100 h-100"},[a("b-col",{staticClass:"infos h-100",attrs:{cols:"12"}},[a("div",{staticClass:"name my-2"},[a("p",[t._v(t._s(t.name))])]),a("b-row",{staticClass:"d-inline-flex align-items-center mb-5"},[a("font-awesome-icon",{staticClass:"text-dark mr-1",attrs:{icon:["fa","cog"],size:"xs",spin:""}}),a("vue-typer")],1),a("b-row",[a("a",{staticClass:"circle",on:{click:function(e){return t.redirect(t.links.linkedin)}}},[a("font-awesome-icon",{staticClass:"icon",attrs:{size:"2x",icon:["fab","linkedin-in"]}})],1),a("a",{staticClass:"circle",on:{click:function(e){return t.redirect(t.links.github)}}},[a("font-awesome-icon",{staticClass:"icon",attrs:{size:"2x",icon:["fab","github"]}})],1),a("a",{staticClass:"circle",on:{click:function(e){return t.redirect(t.links.instagram)}}},[a("font-awesome-icon",{staticClass:"icon",attrs:{size:"2x",icon:["fab","instagram"]}})],1)]),a("b-col",{staticClass:"mt-5 pt-5"},[a("router-link",{attrs:{to:"about"}},[a("b-row",{staticClass:"btn-router text-center ml-auto mt-3"},[a("b-col",{attrs:{cols:"10"}},[a("p",{staticClass:"pl-3 name-router"},[t._v("about.")])]),a("b-col",{staticClass:"pr-3",attrs:{cols:"2"}},[a("font-awesome-icon",{staticClass:"icon-router animated heartBeat",attrs:{size:"2x",icon:["fa","caret-right"]}})],1)],1)],1)],1)],1),a("footer",{staticClass:"footer"},[t._v("Made with Vue and ❤")])],1)],1)},C=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-typer",{attrs:{text:t.array,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":20,"type-delay":20,"pre-erase-delay":1800,"erase-delay":10,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"expand"}})},k=[],_=a("e956"),z={name:"VueTyper",components:{"vue-typer":_["VueTyper"]},data:function(){return{array:[" starting..."," hello!"," stay safe..."," stay in home!"," rebooting"," "]}}},T=z,M=(a("e3a6"),Object(f["a"])(T,y,k,!1,null,null,null)),V=M.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"background"},[a("b-col",{attrs:{cols:"12"}},[a("vue-particles",{staticClass:"particles",attrs:{color:"#8b8b8b",particleOpacity:.5,particlesNumber:80,shapeType:"circle",particleSize:1.5,linesColor:"#6e6e6e",linesWidth:3,lineLinked:!0,lineOpacity:.5,linesDistance:100,moveSpeed:1.5,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)],1)},j=[],H=(a("9611"),{}),O=Object(f["a"])(H,E,j,!1,null,"104a2834",null),W=O.exports,B={name:"HelloWorld",data:function(){return{name:"Renan Cardoso",linkAvatar:"https://avatars2.githubusercontent.com/u/48356874?s=460&u=7a51c810b858176066b58eedf36b032991a1464c&v=4",links:{linkedin:"https://www.linkedin.com/in/cardosorrenan/",github:"https://github.com/cardosorrenan",instagram:"https://www.instagram.com/cardosorrenan/"}}},components:{"vue-typer":V,"home-background":W},methods:{redirect:function(t){var e=t;window.open(e,"_target")}}},L=B,P=(a("a169"),Object(f["a"])(L,x,C,!1,null,null,null)),G=P.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",{staticClass:"background mb-5",attrs:{"align-h":"center"}},[s("router-link",{staticClass:"router",attrs:{to:"/"}},[s("b-row",{staticClass:"btn-router",attrs:{"align-h":"center","align-v":"center"}},[s("font-awesome-icon",{staticClass:"icon-router animated heartBeat",attrs:{size:"1x",icon:["fa","caret-left"]}}),s("p",{staticClass:"name-router mx-1"},[t._v("home")])],1)],1),s("b-row",{staticClass:"title-page",attrs:{"align-v":"center"}},[s("p",{staticClass:"title-name mx-3"},[t._v(t._s(t.hello))]),s("font-awesome-icon",{staticClass:"title-icon animated wobble",attrs:{icon:["fa","hand-spock"]}})],1),s("b-row",{staticClass:"card mb-5"},[s("b-row",{staticClass:"card-top p-2 mb-3",attrs:{"align-v":"center"}},[s("p",{staticClass:"pl-3"},[t._v(t._s(t.textTop))]),s("img",{staticClass:"card-top-img ml-auto",attrs:{src:a("f7ad")},on:{click:t.changeLang}})]),s("b-row",[s("b-col",{staticClass:"col-avatar d-inline-flex justify-content-center",attrs:{"align-self":"center",md:"4"}},[s("img",{staticClass:"card-avatar mb-3",attrs:{src:a("1195")}})]),s("b-col",{staticClass:"col-avatar ",attrs:{md:"8"}},[s("p",{staticClass:"text-card"},[t._v(" "+t._s(t.textMain)+" ")])])],1),s("p",{staticClass:"text-card mr-3"},[t._v(" "+t._s(t.textGit)+" ")]),t.windowWidth>450?s("git-card"):s("git-card-less"),s("br"),s("p",{staticClass:"text-card mr-3"},[t._v(" "+t._s(t.textWorkTools)+" ")]),s("div",{staticClass:"container-images"},t._l(t.techs,(function(e,a){return s("img",{key:a,staticClass:"image",attrs:{src:e.img},on:{click:function(a){return t.goTo(e.link)}}})})),0),s("br"),s("div",{staticClass:"contact mb-4"},[s("font-awesome-icon",{staticClass:"mr-2 icon-footer-card",attrs:{icon:["fa","envelope"]}}),s("p",{staticClass:"text"},[t._v("renanhc96@gmail.com")])],1),s("div",{staticClass:"contact mb-4"},[s("font-awesome-icon",{staticClass:"mr-2 icon-footer-card",attrs:{icon:["fa","map-marked-alt"]}}),s("p",{staticClass:"text"},[t._v("Everywhere, on web")])],1),s("div",{staticClass:"contact mb-5"},[s("font-awesome-icon",{staticClass:"mr-2 icon-footer-card",attrs:{icon:["fa","file-export"]}}),s("a",{attrs:{href:t.pdfLink,download:""}},[s("p",{staticClass:"ml-2 p-2 text-light icon-cv"},[t._v("Download CV")])])],1)],1)],1)},S=[],A=(a("c922"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{on:{click:function(e){return t.goTo("https://github.com/cardosorrenan")}}},[a("div",{staticClass:"git-container"},[a("b-row",{staticClass:"mt-3 ml-4"},[a("b-col",{attrs:{cols:"1"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}})])]),a("b-col",{staticClass:"git-name pl-2 ",attrs:{cols:"9"}},[t._v(" cardosorrenan ")]),a("b-col",{staticClass:"pr-3",attrs:{cols:"1"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 16",width:"8",height:"16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"}})])])],1),a("b-row",{staticClass:"git-body mt-4 ml-4"},[t._v(" it ain't much, but it's honest work ")]),a("b-row",{staticClass:"mt-4 ml-4",attrs:{"align-v":"center"}},[a("div",{staticClass:"circle-footer "}),a("p",{staticClass:"git-body ml-1 mr-4"},[t._v("Fortran")]),a("svg",{staticClass:"ml-3",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 16",width:"14",height:"16"}},[a("path",{staticClass:"icon-footer",attrs:{"fill-rule":"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}})]),a("p",{staticClass:"git-body ml-1 mr-4"},[t._v("99")]),a("svg",{staticClass:"icon-footer",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 16",width:"10",height:"16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]),a("p",{staticClass:"git-body ml-1 mr-4"},[t._v("99")])])],1)])}),$=[],D={methods:{goTo:function(t){window.open(t,"_target")}}},q=D,I=(a("cfdf"),Object(f["a"])(q,A,$,!1,null,"37e1e673",null)),R=I.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{on:{click:function(e){return t.goTo("https://github.com/cardosorrenan")}}},[a("div",{staticClass:"git-container mt-4"},[a("b-row",{staticClass:"mt-2 ml-2"},[a("b-col",{attrs:{cols:"1"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}})])]),a("b-col",{staticClass:"git-name pl-2",attrs:{cols:"10"}},[t._v(" cardosorrenan ")]),a("b-col",{attrs:{cols:"1"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 16",width:"8",height:"16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"}})])])],1),a("b-row",{staticClass:"git-body mt-3 ml-2"},[t._v(" it ain't much, but it's honest work ")]),a("b-row",{staticClass:"mt-3 ml-2",attrs:{"align-v":"center"}},[a("div",{staticClass:"circle-footer "}),a("p",{staticClass:"p-footer ml-1 mr-3"},[t._v("Fortran")]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 16",width:"14",height:"16"}},[a("path",{staticClass:"icon-footer",attrs:{"fill-rule":"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}})]),a("p",{staticClass:"p-footer ml-1 mr-3"},[t._v("99")]),a("svg",{staticClass:"icon-footer",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 16",width:"10",height:"16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]),a("p",{staticClass:"p-footer ml-1 mr-3"},[t._v("99")])])],1)])},N=[],J={methods:{goTo:function(t){window.open(t,"_target")}}},K=J,Q=(a("c4e4"),Object(f["a"])(K,F,N,!1,null,"00e4ad7c",null)),X=Q.exports,Y={components:{GitCard:R,GitCardLess:X},mounted:function(){var t=this;this.init(),window.onresize=function(){t.windowWidth=window.innerWidth}},methods:{init:function(){this.textTop=this.textTopEnUs,this.textMain=this.textMainEnUs,this.textGit=this.textGitEnUs,this.textWorkTools=this.textWorkToolsEnUs},changeLang:function(){0===this.lang?(this.textTop=this.textTopPtBr,this.textMain=this.textMainPtBr,this.textGit=this.textGitPtBr,this.textWorkTools=this.textWorkToolsPtBr,this.lang=1):(this.textTop=this.textTopEnUs,this.textMain=this.textMainEnUs,this.textGit=this.textGitEnUs,this.textWorkTools=this.textWorkToolsEnUs,this.lang=0)},goTo:function(t){window.open(t,"_target")}},data:function(){return{windowWidth:window.innerWidth,url:"../assets/cv.pdf",pdfLink:a("c922"),lang:0,hello:"<HelloWorld />",textTop:"",textGit:"",textWorkTools:"",textMain:"",textMainPtBr:"Sou Renan Cardoso e atualmente morando em Sobral (CE).\n\n        Com quase dois anos, estou focado em criar sistemas web & aplicações mobile utilizando principalmente as tecnologias da stack javascript.\n\n        Encontro-me graduando o curso de Engenharia da Computação pela Universidade Federal do Ceará. Meu CV está ao final da página :)\n\n        Interesses:\n\n        » Desenvolvimento Web\n        » Computação em Nuvem\n        » Data Science\n        » IoT\n        » Eletrônica em Geral\n\n        ",textMainEnUs:"Hi, my name is Renan Cardoso and currently living at Sobral (CE).\n\n        Almost two years, i'm focused on developing web systems and mobile applications using specially the technologies of the javascript stack.\n\n        I'm studying Computer Engineering course at Universidade Federal do Ceará. My resume is included at the bottom of the page :)\n\n        Interests:\n\n        » Web Development\n        » Cloud Computing\n        » Data Science\n        » IoT\n        » Electronics (General)\n\n        ",textTopPtBr:"Opa...",textTopEnUs:"Hey...",textGitPtBr:"Sempre que possível compartilho meus projetos e estudos no github. Dê uma conferida:",textGitEnUs:"Whenever possible... i'm sharing my projects and studies on github. Take a look on my repo's:",textWorkToolsPtBr:"Neste momento, essas são as tecnologias que estou utilizando no trabalho:",textWorkToolsEnUs:"At this time, these are the technologies i'm using at job:",techs:[{id:1,img:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",link:"https://nodejs.org/en/about/"},{id:2,img:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",link:"https://vuejs.org/"},{id:3,img:"https://symbols.getvecta.com/stencil_73/32_adonisjs-icon.95407caf46.svg",link:"https://adonisjs.com/"},{id:4,img:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",link:"https://www.mongodb.com/"},{id:5,img:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png",link:"https://www.postgresql.org/"},{id:6,img:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",link:"https://github.com/python"}]}}},Z=Y,tt=(a("b3ae"),Object(f["a"])(Z,U,S,!1,null,"407efa8a",null)),et=tt.exports;s["default"].use(w["a"]);var at=[{path:"/",name:"Home",component:G,meta:{title:"Renan Cardoso - Home",transition:"fade-in-left"}},{path:"/about",name:"About",component:et,meta:{title:"Renan Cardoso - About",transition:"fade-in-right"}}],st=new w["a"]({mode:"history",routes:at});st.beforeEach((function(t,e,a){document.title=t.meta.title,a()}));var nt=st;a("f9e3"),a("2dd8");o["c"].add(i["f"],i["d"],i["c"],i["b"],i["e"],i["k"],i["j"],i["l"],i["g"],i["m"],i["a"],r["c"],r["a"],r["b"],i["h"],i["i"]),s["default"].component("font-awesome-icon",c["a"]),s["default"].config.productionTip=!1,s["default"].use(m["a"]),s["default"].use(n["a"]),s["default"].use(l["default"]),s["default"].use(d.a),new s["default"]({router:nt,render:function(t){return t(b)}}).$mount("#app")},6813:function(t,e,a){},"85ec":function(t,e,a){},"89f0":function(t,e,a){},9611:function(t,e,a){"use strict";var s=a("d675"),n=a.n(s);n.a},a169:function(t,e,a){"use strict";var s=a("6813"),n=a.n(s);n.a},b3ae:function(t,e,a){"use strict";var s=a("f499"),n=a.n(s);n.a},b54f:function(t,e,a){},c4e4:function(t,e,a){"use strict";var s=a("89f0"),n=a.n(s);n.a},c922:function(t,e,a){t.exports=a.p+"baaa0ed2b7f60514b968482203d9a866.pdf"},cfdf:function(t,e,a){"use strict";var s=a("b54f"),n=a.n(s);n.a},d675:function(t,e,a){},daef:function(t,e,a){},e3a6:function(t,e,a){"use strict";var s=a("daef"),n=a.n(s);n.a},f499:function(t,e,a){},f7ad:function(t,e,a){t.exports=a.p+"img/changeLang.1aab642c.png"}});
//# sourceMappingURL=app.780fffa5.js.map
