(function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,c=1;c<s.length;c++){var i=s[c];0!==r[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},r={app:0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=i;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"297b":function(e,t,s){},"40d8":function(e,t,s){},"417f":function(e,t,s){"use strict";var n=s("a6e1"),r=s.n(n);r.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Navigation"),s("router-view")],1)},a=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav"},[s("div",{staticClass:"logo"},[s("Logo",{nativeOn:{click:function(t){return e.$router.push("/")}}})],1)])},c=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" swooo[sh] ")])},u=[],d={name:"Logo"},l=d,f=(s("5964"),s("2877")),b=Object(f["a"])(l,i,u,!1,null,"2ee8d3fd",null),j=b.exports,h={name:"Navigation",components:{Logo:j}},m=h,p=(s("56f7"),Object(f["a"])(m,o,c,!1,null,"58740011",null)),v=p.exports,g={name:"App",components:{Navigation:v}},y=g,w=(s("5c0b"),Object(f["a"])(y,r,a,!1,null,null,null)),k=w.exports,O=s("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var _=s("8c4f"),x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[e.isNotFound?s("div",{staticClass:"error"},[s("PageNotFound",{nativeOn:{click:function(t){return e.reset(t)}}})],1):s("div",{staticClass:"home"},[s("GenerateURLForm"),s("GeneratedURLCard")],1)])},z=[],S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("label",{attrs:{for:"url"}},[e._v("URL to shorten:")]),s("div",{staticClass:"duo"},[s("input",{staticClass:"prefix",class:e.error&&"url"===e.error.path?"error":"",attrs:{id:"prefix",type:"text",disabled:"",value:"https://"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.data.url,expression:"data.url"}],staticClass:"url",class:e.error&&"url"===e.error.path?"error":"",attrs:{id:"url",type:"text",placeholder:"your url"},domProps:{value:e.data.url},on:{input:function(t){t.target.composing||e.$set(e.data,"url",t.target.value)}}})]),s("label",{attrs:{for:"id"}},[e._v("Custom ID (optional)")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.data.id,expression:"data.id"}],staticClass:"id",class:e.error&&"id"===e.error.path?"error":"",attrs:{id:"id",type:"text",placeholder:"custom id"},domProps:{value:e.data.id},on:{input:function(t){t.target.composing||e.$set(e.data,"id",t.target.value)}}}),s("div",{staticClass:"content"},[s("Button",{attrs:{type:"submit",name:"Create URL"},nativeOn:{submit:function(t){return e.submit(t)}}}),s("p",{class:e.error?"errorP":""},[e._v(" "+e._s(e.error?e.messages:e.success?"URL generated successfully!":"")+" ")])],1)])])},C=[],L=(s("d3b7"),s("ac1f"),s("5319"),s("96cf"),s("1da1")),U=s("5530"),N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("button",{staticClass:"btn"},[e._v(e._s(e.name))])])},P=[],R={name:"Button",props:{name:{type:String,required:!0}}},$=R,E=(s("7c16"),Object(f["a"])($,N,P,!1,null,"66e1991d",null)),F=E.exports,M=s("8b02"),T=s("2f62"),q=s("c1df"),D=s.n(q),G={name:"GenerateURLForm",components:{Button:F},watch:{time:function(e){var t=this;e>0?(setTimeout((function(){return t.time--}),1e3),this.disabled=!0):(this.disabled=!1,this.error=null)}},data:function(){return{disabled:!1,error:null,time:0,success:!1,data:{id:null,url:null}}},computed:{messages:function(){var e={http:"Only secure URLs are allowed (HTTPS)",rate:"Too many requests",timeout:"You need to wait ".concat(this.time," secondes"),unknown:"Something went wrong",typeError:"Missing fields",url:"Must be a valid URL",matches:"Invalid characters",mongoErrorId:"ID already taken"};return e[this.error.type]}},methods:Object(U["a"])(Object(U["a"])({submit:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){var s,n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.sanitize();case 2:if(s=t.sent,!s.error){t.next=5;break}return t.abrupt("return",e.error=s.error);case 5:if(e.error){t.next=25;break}return t.next=8,window.location.href.replace(/8081/g,"8080");case 8:return n=t.sent,r=new Headers,t.t0=fetch,t.t1="".concat(n,"create"),t.t2=Object(U["a"])(Object(U["a"])({},r),{},{"Content-Type":"application/json"}),t.next=15,JSON.stringify(s);case 15:return t.t3=t.sent,t.t4={method:"POST",headers:t.t2,body:t.t3},t.next=19,(0,t.t0)(t.t1,t.t4);case 19:return a=t.sent,t.next=22,a.json();case 22:o=t.sent,o.error&&(e.error=o.error),200===o.status&&o.ok&&(e.time=30,e.success=!0,e.setSwooosh(o.data));case 25:case"end":return t.stop()}}),t)})))()},sanitize:function(){var e=/^https/g;if(this.error=null,this.success=!1,"string"===typeof this.data.id&&""===this.data.id&&(this.data.id=null),"string"===typeof this.data.url&&""===this.data.url&&(this.data.url=null),this.disabled)return this.error={type:"timeout"};var t=e.test(this.data.url)?this.data.url:"https://".concat(this.data.url),s=this.data.id||M["a"].hash(6);return{id:s,url:t,redirect:encodeURIComponent(t),shortUrl:"https://swooo.sh/i/".concat(s),createdOn:D()().format("dddd, MMMM Do YYYY, h:mm:ss a")}}},Object(T["b"])({setSwooosh:"setSwooosh"})),Object(T["c"])(["getSwooosh"]))},A=G,B=(s("e13f"),Object(f["a"])(A,S,C,!1,null,"a7e017d6",null)),H=B.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return Object.keys(e.getSwooosh).length>=1?s("div",{staticClass:"card"},[s("div",{staticClass:"body"},[s("a",{attrs:{id:"display",href:e.getSwooosh.shortUrl,target:"_BLANK"}},[e._v(e._s(e.getSwooosh.shortUrl))])])]):e._e()},Y=[],J=(s("99af"),s("3ca3"),s("ddb0"),s("2b3d"),s("62ed")),K=s.n(J),Q={name:"GeneratedURLCard",computed:Object(T["c"])({getSwooosh:"getSwooosh"}),updated:function(){K()("#display",{minSize:18,maxSize:26})},methods:{cleanUrl:function(e){var t=new URL(e);return"".concat(t.hostname,"/").concat(t.pathname.length>=2?"...":"")}}},V=Q,W=(s("417f"),Object(f["a"])(V,I,Y,!1,null,"223a652f",null)),X=W.exports,Z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"not-found"},[s("p",[e._v("Sorry, what you're looking")]),s("p",[e._v("for isn't here")]),s("Logo")],1)},ee=[],te={name:"PageNotFound",components:{Logo:j}},se=te,ne=(s("a4be"),Object(f["a"])(se,Z,ee,!1,null,"12e1b3ed",null)),re=ne.exports,ae={name:"Home",components:{PageNotFound:re,GenerateURLForm:H,GeneratedURLCard:X},methods:{reset:function(){this.$router.push({name:"Home"}),this.isNotFound=!1}},data:function(){return{isNotFound:!!this.$route.query.e}}},oe=ae,ce=(s("b516"),Object(f["a"])(oe,x,z,!1,null,"f00094a2",null)),ie=ce.exports;n["a"].use(_["a"]);var ue=[{path:"/",name:"Home",component:ie},{path:"*",redirect:"/"}],de=new _["a"]({mode:"history",base:"/",routes:ue}),le=de;n["a"].use(T["a"]);var fe=new T["a"].Store({state:{swooosh:{}},mutations:{setSwooosh:function(e,t){return e.swooosh=t}},actions:{setSwooosh:function(e,t){return e.commit("setSwooosh",t)}},getters:{getSwooosh:function(e){return e.swooosh}}});n["a"].config.productionTip=!1,new n["a"]({router:le,store:fe,render:function(e){return e(k)}}).$mount("#app")},"56f7":function(e,t,s){"use strict";var n=s("297b"),r=s.n(n);r.a},5964:function(e,t,s){"use strict";var n=s("fc0c"),r=s.n(n);r.a},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),r=s.n(n);r.a},"710f":function(e,t,s){},"7c16":function(e,t,s){"use strict";var n=s("710f"),r=s.n(n);r.a},"9c0c":function(e,t,s){},a4be:function(e,t,s){"use strict";var n=s("b2b1"),r=s.n(n);r.a},a6e1:function(e,t,s){},b2b1:function(e,t,s){},b516:function(e,t,s){"use strict";var n=s("40d8"),r=s.n(n);r.a},c90b:function(e,t,s){},e13f:function(e,t,s){"use strict";var n=s("c90b"),r=s.n(n);r.a},fc0c:function(e,t,s){}});
//# sourceMappingURL=app.7b11567e.js.map