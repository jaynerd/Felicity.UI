webpackJsonp([1],{"2KsO":function(t,e){},"34CL":function(t,e){},"4Yi0":function(t,e){},Ge4A:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"view-max",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},i=n("VU/8")(null,a,!1,null,null,null).exports,r=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"flex-row flex-space":!0,"active-item":t.getActiveItem()},attrs:{id:"nav-item"},on:{click:function(e){t.selectItem()}}},[n("i",{staticClass:"material-icons"},[t._v(t._s(t.icon))]),t._v(" "),t.isNavOpen?n("span",{staticClass:"self-center"},[t._v(t._s(t.name))]):t._e()])},staticRenderFns:[]};var c={name:"Nav",components:{"app-nav-item":n("VU/8")({name:"NavItem",props:["icon","name","active"],methods:{selectItem:function(){this.$bus.$emit("select-item",this.name)},getActiveItem:function(){return this.name===this.active}},data:function(){return{isNavOpen:!1}},mounted:function(){var t=this;this.$bus.$on("toggle-nav",function(){t.isNavOpen=!t.isNavOpen})}},o,!1,function(t){n("34CL")},"data-v-4bcf1e26",null).exports},methods:{toggleNav:function(){this.isNavOpen=!this.isNavOpen,this.$bus.$emit("toggle-nav")}},data:function(){return{isNavOpen:!1,activeItem:"Dashboard"}},mounted:function(){var t=this;this.$bus.$on("select-item",function(e){t.activeItem=e})}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"flex-column gradient-border":!0,"nav-open":t.isNavOpen},attrs:{id:"nav"}},[n("div",{staticClass:"flex-end",on:{click:function(e){t.toggleNav()}}},[t.isNavOpen?n("i",{staticClass:"material-icons"},[t._v("arrow_back_ios")]):n("i",{staticClass:"material-icons"},[t._v("arrow_forward_ios")])]),t._v(" "),n("app-nav-item",{attrs:{icon:"dashboard",name:"Dashboard",active:t.activeItem}}),t._v(" "),n("app-nav-item",{attrs:{icon:"person",name:"Profile",active:t.activeItem}}),t._v(" "),n("app-nav-item",{attrs:{icon:"work",name:"Workspace",active:t.activeItem}}),t._v(" "),n("app-nav-item",{attrs:{icon:"bar_chart",name:"Report",active:t.activeItem}}),t._v(" "),n("app-nav-item",{attrs:{icon:"settings",name:"Settings",active:t.activeItem}})],1)},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(t){n("Ot76")},"data-v-3975af13",null).exports,d={name:"Login",methods:{setUsername:function(t){this.credential.username=t},setPassword:function(t){this.credential.password=t},access:function(){var t,e,n,s=this;t=this.axios,e=this.credential,n=function(t){alert("Login successful"),s.$bus.$emit("log-in")},t.post("api/auth/login",e).then(function(t){var e=t.data;null!=e.userName?n(e):alert(e)})},signup:function(){var t,e,n;t=this.axios,e=this.credential,n=function(t){alert("Account registered")},t.post("api/user/createuser",e).then(function(t){var e=t.data;!0===e?n(e):alert(e)})}},data:function(){return{credential:{username:"",password:""}}}};var v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-max flex-column content-center",attrs:{id:"login"}},[n("div",{staticClass:"flex-column self-center",attrs:{id:"login-box"}},[n("h3",{staticClass:"flex-1 self-center clip"},[t._v("Access Denied")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"flex-column flex-3 self-center content-center",attrs:{id:"input-box"}},[n("i",{staticClass:"self-center material-icons"},[t._v("account_circle")]),t._v(" "),n("div",{staticClass:"flex-column",attrs:{id:"input-text-box"}},[n("div",{staticClass:"flex-space self-center",attrs:{id:"input-text"}},[n("h4",{staticClass:"flex-1 self-center"},[t._v("ID:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.username,expression:"credential.username"}],staticClass:"flex-1 self-center",attrs:{type:"text"},domProps:{value:t.credential.username},on:{input:[function(e){e.target.composing||t.$set(t.credential,"username",e.target.value)},function(e){t.setUsername(e.target.value)}]}})]),t._v(" "),n("div",{staticClass:"flex-space self-center",attrs:{id:"input-text"}},[n("h4",{staticClass:"flex-1 self-center"},[t._v("PW:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.password,expression:"credential.password"}],staticClass:"flex-1 self-center",attrs:{type:"password"},domProps:{value:t.credential.password},on:{input:[function(e){e.target.composing||t.$set(t.credential,"password",e.target.value)},function(e){t.setPassword(e.target.value)}]}})])]),t._v(" "),n("div",{staticClass:"flex-space self-center",attrs:{id:"button-box"}},[n("button",{staticClass:"login",attrs:{type:"success"},on:{click:function(e){t.access()}}},[t._v("\n                    Log in\n                ")]),t._v(" "),n("button",{staticClass:"signup",attrs:{type:"button"},on:{click:function(e){t.signup()}}},[t._v("\n                    Sign up\n                ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"flex-1 self-center"},[this._v("Please "),e("span",{staticStyle:{color:"red"}},[this._v("Login")]),this._v(" Below")])}]};var f=n("VU/8")(d,v,!1,function(t){n("4Yi0")},"data-v-1af26057",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"report"}},[e("h1",[this._v("Report Contents")])])}]},p=n("VU/8")({name:"Report"},m,!1,null,null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"profile"}},[e("h1",[this._v("Profile Contents")])])}]},_=n("VU/8")({name:"Profile"},h,!1,null,null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"settings"}},[e("h1",[this._v("Settings Contents")])])}]},b=n("VU/8")({name:"Settings"},x,!1,null,null,null).exports,C={name:"TeamBox",props:{name:name},methods:{openTeamView:function(){this.$bus.$emit("team-view")}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex content-center",attrs:{id:"team-box"},on:{click:function(e){t.openTeamView()}}},[n("h3",{staticClass:"self-center"},[t._v("\n        "+t._s(t.name)+"\n    ")])])},staticRenderFns:[]};var w={name:"TeamView",methods:{openTeamBoxView:function(){this.$bus.$emit("team-box-view")},showModal:function(){this.CreateModal("Header","Desc","Submit",function(){alert("Submitted")},"Cancel",function(){alert("Canceled")})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"team-view"}},[n("h3",[t._v("This is team view")]),t._v(" "),n("button",{on:{click:function(e){t.openTeamBoxView()}}},[t._v("\n        return\n    ")]),t._v(" "),n("button",{on:{click:function(e){t.showModal()}}},[t._v("\n        modal\n    ")])])},staticRenderFns:[]};var k={name:"Dashboard",components:{"app-team-box":n("VU/8")(C,$,!1,function(t){n("2KsO")},"data-v-1175c261",null).exports,"app-team-view":n("VU/8")(w,g,!1,function(t){n("l+AD")},"data-v-4d0a9359",null).exports},data:function(){return{teamCount:5,isTeamViewOn:!1}},mounted:function(){var t=this;this.$bus.$on("team-view",function(){t.isTeamViewOn=!0}),this.$bus.$on("team-box-view",function(){t.isTeamViewOn=!1})}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-column",attrs:{id:"dashboard"}},[n("h1",[t._v("Dashboard Contents")]),t._v(" "),t.isTeamViewOn?t._e():n("div",{staticClass:"flex"},t._l(t.teamCount,function(t){return n("div",{key:t},[n("app-team-box",{attrs:{name:t}})],1)})),t._v(" "),t.isTeamViewOn?n("div",[n("app-team-view")],1):t._e()])},staticRenderFns:[]},T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"workspace"}},[e("h1",[this._v("Workspace Contents")])])}]},E={name:"SubBoard",props:["name"],components:{"app-report":p,"app-profile":_,"app-settings":b,"app-dashboard":n("VU/8")(k,V,!1,null,null,null).exports,"app-workspace":n("VU/8")({name:"Workspace"},T,!1,null,null,null).exports},data:function(){return{title:this.name}},mounted:function(){var t=this;this.$bus.$on("select-item",function(e){t.title=e})}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-column flex-1",attrs:{id:"sub-board"}},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"flex-1",attrs:{id:"content"}},["Report"===t.title?n("app-report"):"Profile"===t.title?n("app-profile"):"Settings"===t.title?n("app-settings"):"Dashboard"===t.title?n("app-dashboard"):"Workspace"===t.title?n("app-workspace"):t._e()],1)])},staticRenderFns:[]};var F={name:"Board",components:{"app-sub-board":n("VU/8")(E,R,!1,function(t){n("lnx2")},"data-v-271fbb02",null).exports}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-1",attrs:{id:"board"}},[e("app-sub-board",{attrs:{name:"Dashboard"}})],1)},staticRenderFns:[]},U=n("VU/8")(F,N,!1,null,null,null).exports,y={name:"Clock",methods:{updateDateTime:function(){var t=new Date;this.hours=t.getHours(),this.minutes=this.GetZero(t.getMinutes()),this.seconds=this.GetZero(t.getSeconds()),this.suffix=this.GetTimeSuffix(this.hours),this.hours=this.hours%12||12}},data:function(){return{hours:0,minutes:0,seconds:0,suffix:""}},mounted:function(){this.$options.interval=setInterval(this.updateDateTime,1e3)},beforeDestroy:function(){clearInterval(this.$options.interval)}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"clock"}},[n("div",{attrs:{id:"hours"}},[n("span",{attrs:{id:"suffix"},domProps:{textContent:t._s(t.suffix)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.hours)}})]),t._v(" "),n("div",{attrs:{id:"minutes"},domProps:{textContent:t._s(t.minutes)}}),t._v(" "),n("div",{attrs:{id:"seconds"},domProps:{textContent:t._s(t.seconds)}})])},staticRenderFns:[]};var S={name:"Header",components:{"app-clock":n("VU/8")(y,O,!1,function(t){n("ewNy")},"data-v-8cc3f754",null).exports}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-row",attrs:{id:"header"}},[e("div",{staticClass:"flex flex-1 content-center"},[e("app-clock",{staticClass:"self-center"})],1),this._v(" "),this._m(0),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-4 content-center"},[e("h1",{staticClass:"self-center clip"},[this._v("Felicity")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-1 content-center"},[e("h3",{staticClass:"self-center"},[this._v("Logout Team #N")])])}]};var P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex content-center",attrs:{id:"footer"}},[e("div",{staticClass:"self-center"},[this._v("\n        Copyright © "+this._s((new Date).getFullYear())+" Team SDM, All rights reserved.\n    ")])])},staticRenderFns:[]};var I={name:"Main",components:{"app-nav":u,"app-login":f,"app-board":U,"app-header":n("VU/8")(S,D,!1,function(t){n("SoqM")},"data-v-9105bc42",null).exports,"app-footer":n("VU/8")({name:"Footer"},P,!1,function(t){n("Ge4A")},"data-v-af0fd736",null).exports},data:function(){return{authenticated:!1}},mounted:function(){var t=this;this.$bus.$on("log-in",function(){t.authenticated=!0})}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"view-max flex-column",attrs:{id:"main"}},[e("app-header"),this._v(" "),this.authenticated?e("section",{staticClass:"view-max flex-row"},[e("app-nav"),this._v(" "),e("app-board")],1):e("app-login"),this._v(" "),e("app-footer"),this._v(" "),e("div",{staticClass:"flex",attrs:{id:"modal-anchor"}})],1)},staticRenderFns:[]},A=n("VU/8")(I,M,!1,null,null,null).exports;s.a.use(r.a);var L=new r.a({routes:[{path:"/",name:"Main",component:A}]}),G=n("mtWM"),W=n.n(G),B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-mask",attrs:{id:"modal"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-header"},[n("h3",[t._t("title")],2)]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{on:{click:t.btn1Click}},[t._v(t._s(t.btn1Text))]),t._v(" "),t.btn2Text?n("button",{on:{click:t.btn2Click}},[t._v(t._s(t.btn2Text))]):t._e()])])])},staticRenderFns:[]};var H=n("VU/8")({name:"Modal",data:function(){return{btn1Text:"",btn1Callback:null,btn2Text:"",btn2Callback:null}},methods:{btn1Click:function(){this.btn1Callback&&this.btn1Callback(),this.$el.remove()},btn2Click:function(){this.btn2Callback&&this.btn2Callback(),this.$el.remove()}}},B,!1,function(t){n("a+ZS")},"data-v-4883548e",null).exports,Z={methods:{GetTimeSuffix:function(t){return t>=12?"PM":"AM"},GetZero:function(t){return(parseInt(t,10)>=10?"":"0")+t},CreateModal:function(t,e,n,a,i,r){var o=new(s.a.extend(H))({data:{btn1Text:n,btn1Callback:a,btn2Text:i,btn2Callback:r}});o.$slots.title=[t],o.$slots.body=[e],o.$mount(),document.querySelector("#modal-anchor").appendChild(o.$el)}}};n("gJLk"),s.a.config.productionTip=!1,s.a.prototype.$bus=new s.a,s.a.mixin(Z),s.a.prototype.axios=W.a.create({baseURL:"https://ey2hslj27c.execute-api.ap-southeast-2.amazonaws.com/Prod/"}),new s.a({el:"#app",router:L,components:{App:i},template:"<App/>"})},Ot76:function(t,e){},SoqM:function(t,e){},"a+ZS":function(t,e){},ewNy:function(t,e){},gJLk:function(t,e){},"l+AD":function(t,e){},lnx2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3be79a4feb7e6ddd1994.js.map