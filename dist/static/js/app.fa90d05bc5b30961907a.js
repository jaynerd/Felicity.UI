webpackJsonp([1],{"34CL":function(t,e){},"5bh8":function(t,e){},Ge4A:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("HSQo"),a=n.n(s),i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"view-max",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},c=n("VU/8")(null,r,!1,null,null,null).exports,o=n("/ocq"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"flex-row flex-space":!0,"active-item":t.getActiveItem()},attrs:{id:"nav-item"},on:{click:function(e){t.selectItem()}}},[n("i",{staticClass:"material-icons"},[t._v(t._s(t.icon))]),t._v(" "),t.isNavOpen?n("span",{staticClass:"self-center"},[t._v(t._s(t.name))]):t._e()])},staticRenderFns:[]};var u={name:"Nav",components:{"app-nav-item":n("VU/8")({name:"NavItem",props:["icon","name","active"],methods:{selectItem:function(){this.$bus.$emit("select-item",this.name)},getActiveItem:function(){return this.name===this.active}},data:function(){return{isNavOpen:!1}},mounted:function(){var t=this;this.$bus.$on("toggle-nav",function(){t.isNavOpen=!t.isNavOpen})}},l,!1,function(t){n("34CL")},"data-v-4bcf1e26",null).exports},methods:{toggleNav:function(){this.isNavOpen=!this.isNavOpen,this.$bus.$emit("toggle-nav")}},data:function(){return{isNavOpen:!1,activeItem:"Dashboard"}},mounted:function(){var t=this;this.$bus.$on("select-item",function(e){t.activeItem=e})}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"flex-column gradient-border":!0,"nav-open":t.isNavOpen},attrs:{id:"nav"}},[n("div",{staticClass:"flex-end",on:{click:function(e){t.toggleNav()}}},[t.isNavOpen?n("i",{staticClass:"material-icons"},[t._v("arrow_back_ios")]):n("i",{staticClass:"material-icons"},[t._v("arrow_forward_ios")])]),t._v(" "),n("app-nav-item",{attrs:{icon:"dashboard",name:"Dashboard",active:t.activeItem}}),t._v(" "),n("app-nav-item",{attrs:{icon:"person",name:"Profile",active:t.activeItem}}),t._v(" "),n("app-nav-item",{attrs:{icon:"work",name:"Workspace",active:t.activeItem}}),t._v(" "),n("app-nav-item",{attrs:{icon:"bar_chart",name:"Report",active:t.activeItem}}),t._v(" "),n("app-nav-item",{attrs:{icon:"settings",name:"Settings",active:t.activeItem}})],1)},staticRenderFns:[]};var p=n("VU/8")(u,d,!1,function(t){n("Ot76")},"data-v-3975af13",null).exports,v={name:"Login",methods:{setUsername:function(t){this.credential.username=t},setPassword:function(t){this.credential.password=t},access:function(){var t,e,n,s=this;t=this.axios,e=this.credential,n=function(t){alert("Login successful"),s.$bus.$emit("log-in")},t.post("api/auth/login",e).then(function(t){var e=t.data;!0===e?n(e):alert(e)})},signup:function(){var t,e,n;t=this.axios,e=this.credential,n=function(t){alert("Account registered")},t.post("api/user/createuser",e).then(function(t){var e=t.data;!0===e?n(e):alert(e)})}},data:function(){return{credential:{username:"",password:""}}}};var f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-max flex-column content-center",attrs:{id:"login"}},[n("div",{staticClass:"flex-column self-center",attrs:{id:"login-box"}},[n("h3",{staticClass:"flex-1 self-center clip"},[t._v("Access Denied")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"flex-column flex-3 self-center content-center",attrs:{id:"input-box"}},[n("i",{staticClass:"self-center material-icons"},[t._v("account_circle")]),t._v(" "),n("div",{staticClass:"flex-column",attrs:{id:"input-text-box"}},[n("div",{staticClass:"flex-space self-center",attrs:{id:"input-text"}},[n("h4",{staticClass:"flex-1 self-center"},[t._v("ID:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.username,expression:"credential.username"}],staticClass:"flex-1 self-center",attrs:{type:"text"},domProps:{value:t.credential.username},on:{input:[function(e){e.target.composing||t.$set(t.credential,"username",e.target.value)},function(e){t.setUsername(e.target.value)}]}})]),t._v(" "),n("div",{staticClass:"flex-space self-center",attrs:{id:"input-text"}},[n("h4",{staticClass:"flex-1 self-center"},[t._v("PW:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.password,expression:"credential.password"}],staticClass:"flex-1 self-center",attrs:{type:"password"},domProps:{value:t.credential.password},on:{input:[function(e){e.target.composing||t.$set(t.credential,"password",e.target.value)},function(e){t.setPassword(e.target.value)}]}})])]),t._v(" "),n("div",{staticClass:"flex-space self-center",attrs:{id:"button-box"}},[n("button",{staticClass:"login",attrs:{type:"success"},on:{click:function(e){t.access()}}},[t._v("\n                    Log in\n                ")]),t._v(" "),n("button",{staticClass:"signup",attrs:{type:"button"},on:{click:function(e){t.signup()}}},[t._v("\n                    Sign up\n                ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"flex-1 self-center"},[this._v("Please "),e("span",{staticStyle:{color:"red"}},[this._v("Login")]),this._v(" Below")])}]};var m=n("VU/8")(v,f,!1,function(t){n("pBQQ")},"data-v-3ea6e3c0",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"report"}},[e("h1",[this._v("Report Contents")])])}]},_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"profile"}},[e("h1",[this._v("Profile Contents")])])}]},x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"settings"}},[e("h1",[this._v("Settings Contents")])])}]},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"dashboard"}},[e("h1",[this._v("Dashboard Contents")])])}]},b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"workspace"}},[e("h1",[this._v("Workspace Contents")])])}]},C={name:"SubBoard",props:["name"],components:{"app-report":n("VU/8")({name:"Report"},h,!1,null,null,null).exports,"app-profile":n("VU/8")({name:"Profile"},_,!1,null,null,null).exports,"app-settings":n("VU/8")({name:"Settings"},x,!1,null,null,null).exports,"app-dashboard":n("VU/8")({name:"Dashboard"},g,!1,null,null,null).exports,"app-workspace":n("VU/8")({name:"Workspace"},b,!1,null,null,null).exports},data:function(){return{title:this.name}},mounted:function(){var t=this;this.$bus.$on("select-item",function(e){t.title=e})}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-column flex-1",attrs:{id:"sub-board"}},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"flex-1",attrs:{id:"content"}},["Report"===t.title?n("app-report"):"Profile"===t.title?n("app-profile"):"Settings"===t.title?n("app-settings"):"Dashboard"===t.title?n("app-dashboard"):"Workspace"===t.title?n("app-workspace"):t._e()],1)])},staticRenderFns:[]};var w={name:"Board",components:{"app-sub-board":n("VU/8")(C,$,!1,function(t){n("lnx2")},"data-v-271fbb02",null).exports}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-1",attrs:{id:"board"}},[e("app-sub-board",{attrs:{name:"Dashboard"}})],1)},staticRenderFns:[]},k=n("VU/8")(w,E,!1,null,null,null).exports;function R(t){return(parseInt(t,10)>=10?"":"0")+t}var F={name:"Clock",methods:{updateDateTime:function(){var t=new Date;this.hours=t.getHours(),this.minutes=R(t.getMinutes()),this.seconds=R(t.getSeconds()),this.suffix=this.hours>=12?"PM":"AM",this.hours=this.hours%12||12}},data:function(){return{hours:0,minutes:0,seconds:0,suffix:""}},mounted:function(){this.$options.interval=setInterval(this.updateDateTime,1e3)},beforeDestroy:function(){clearInterval(this.$options.interval)}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"clock"}},[n("div",{attrs:{id:"hours"}},[n("span",{attrs:{id:"suffix"},domProps:{textContent:t._s(t.suffix)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.hours)}})]),t._v(" "),n("div",{attrs:{id:"minutes"},domProps:{textContent:t._s(t.minutes)}}),t._v(" "),n("div",{attrs:{id:"seconds"},domProps:{textContent:t._s(t.seconds)}})])},staticRenderFns:[]};var U={name:"Header",components:{"app-clock":n("VU/8")(F,N,!1,function(t){n("5bh8")},"data-v-176d61e6",null).exports}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-row",attrs:{id:"header"}},[e("div",{staticClass:"flex flex-1 content-center"},[e("app-clock",{staticClass:"self-center"})],1),this._v(" "),this._m(0),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-4 content-center"},[e("h1",{staticClass:"self-center clip"},[this._v("Felicity")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-1 content-center"},[e("h3",{staticClass:"self-center"},[this._v("Logout Team #N")])])}]};var I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex content-center",attrs:{id:"footer"}},[e("div",{staticClass:"self-center"},[this._v("\n        Copyright © "+this._s((new Date).getFullYear())+" Team SDM, All rights reserved.\n    ")])])},staticRenderFns:[]};var V={name:"Main",components:{"app-nav":p,"app-login":m,"app-board":k,"app-header":n("VU/8")(U,P,!1,function(t){n("SoqM")},"data-v-9105bc42",null).exports,"app-footer":n("VU/8")({name:"Footer"},I,!1,function(t){n("Ge4A")},"data-v-af0fd736",null).exports},data:function(){return{authenticated:!1}},mounted:function(){var t=this;this.$bus.$on("log-in",function(){t.authenticated=!0})}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"view-max flex-column",attrs:{id:"main"}},[e("app-header"),this._v(" "),this.authenticated?e("section",{staticClass:"view-max flex-row"},[e("app-nav"),this._v(" "),e("app-board")],1):e("app-login"),this._v(" "),e("app-footer")],1)},staticRenderFns:[]},y=n("VU/8")(V,D,!1,null,null,null).exports;i.a.use(o.a);var O=new o.a({routes:[{path:"/",name:"Main",component:y}]}),S=n("mtWM"),A=n.n(S);n("gJLk");i.a.config.productionTip=!1;var L=new i.a;a()(i.a.prototype,{$bus:{get:function(){return L}}}),i.a.prototype.axios=A.a.create({baseURL:"https://ey2hslj27c.execute-api.ap-southeast-2.amazonaws.com/Prod/"}),new i.a({el:"#app",router:O,components:{App:c},template:"<App/>"})},Ot76:function(t,e){},SoqM:function(t,e){},gJLk:function(t,e){},lnx2:function(t,e){},pBQQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fa90d05bc5b30961907a.js.map