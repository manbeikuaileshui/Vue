(function(){"use strict";var t={8116:function(t,e,n){var i=n(144),o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"guanyu"}}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.test}},[t._v("测试一下go")])])])},a=[],l={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},test(){this.$router.go(-2)}}},u=l,c=n(1001),v=(0,c.Z)(u,s,a,!1,null,"0de62362",null),p=v.exports,f={name:"App",components:{Banner:p}},h=f,m=(0,c.Z)(h,o,r,!1,null,null,null),d=m.exports,_=n(8345),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},b=[],w={name:"About",beforeRouteEnter(t,e,n){console.log("About---beforeRouterEnter",t,e),t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("学校名不对，无权限查看！！！"):n()},beforeRouteLeave(t,e,n){console.log("About---beforeRouterLeave",t,e),n()}},x=w,y=(0,c.Z)(x,g,b,!1,null,null,null),k=y.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view")],1)],1)])},Z=[],A={name:"Home"},O=A,P=(0,c.Z)(O,C,Z,!1,null,null,null),j=P.exports,$=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},N=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],R={name:"News",data(){return{opacity:1}},activated(){console.log("News组件被激活了"),this.timer=setInterval((()=>{console.log("@"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News组件失活了"),clearInterval(this.timer)}},S=R,q=(0,c.Z)(S,$,N,!1,null,null,null),E=q.exports,L=function(){var t=this,e=t._self._c;return e("div",[e("ol",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",params:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},B=[],D=(n(7658),{name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){console.log(this.$router),this.$router.push({name:"xiangqing",params:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",params:{id:t.id,title:t.title}})}},beforeDestroy(){console.log("Message组件即将被销毁")}}),H=D,I=(0,c.Z)(H,L,B,!1,null,"ed09524c",null),M=I.exports,T=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},V=[],z={name:"Detail",props:["id","title"],mounted(){console.log(this)}},F=z,G=(0,c.Z)(F,T,V,!1,null,null,null),J=G.exports;const K=new _.ZP({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:j,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:E,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:M,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail/:id/:title",component:J,meta:{isAuth:!0,title:"详情"},props({params:{id:t,title:e}}){return{id:t,title:e}}}]}]}]});K.afterEach(((t,e)=>{console.log("后置路由守卫",t,e),document.title=t.meta.title||"硅谷系统"}));var Q=K;i.ZP.use(_.ZP),i.ZP.config.productionTip=!1,new i.ZP({el:"#app",render:t=>t(d),router:Q})}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,r<s&&(s=r));if(a){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,s=i[0],a=i[1],l=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(e&&e(i);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8116)}));i=n.O(i)})();
//# sourceMappingURL=app.1bb570ff.js.map