webpackJsonp([1],{"+LG1":function(t,e){},0:function(t,e,s){s("j1ja"),t.exports=s("NHnr")},DGqU:function(t,e){},Fk0y:function(t,e){},FuvG:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"root",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},r,!1,function(t){s("Fk0y")},null,null).exports,i=s("/ocq"),o=s("Xxa5"),c=s.n(o),l=s("exGp"),u=s.n(l),p=s("Dd8w"),d=s.n(p),_=s("NYxO"),v="CATEGORY",f="POST_LIST",h={name:"Modal",props:{isModalShow:{type:Boolean,require:!0,default:!1}},methods:{closeModal:function(){this.$emit("update:isModalShow",!this.isModalShow)}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isModalShow?s("div",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[s("div",{staticClass:"modal__bg"}),t._v(" "),s("div",{staticClass:"modal__body"},[s("p",{staticClass:"modal__close"},[s("span",{on:{click:t.closeModal}},[s("i",{staticClass:"fas fa-times"})])]),t._v(" "),t._t("default")],2)]):t._e()},staticRenderFns:[]};var g=s("VU/8")(h,m,!1,function(t){s("DGqU")},"data-v-45b31f96",null).exports,y={name:"ListItem",props:{postData:{type:Object,require:!0}},computed:d()({},Object(_.c)(["getCategoryList"]),{categoryNo:function(){return this.postData.category_no},postNo:function(){return this.postData.no},email:function(){return this.postData.email},updatedDate:function(){return this.postData.updated_at},title:function(){return this.postData.title},contents:function(){return this.postData.contents}}),methods:{getCategoryName:function(t){return this.getCategoryList[t]},goDetail:function(t){this.$router.push({name:"PostDetail",params:{postNo:this.postNo}})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"post",on:{click:function(e){return t.goDetail(t.postNo)}}},[s("header",{staticClass:"post__header"},[s("p",{staticClass:"post__category"},[t._v(t._s(t.getCategoryName(t.categoryNo)))]),t._v(" "),s("p",{staticClass:"post__no"},[t._v(t._s(t.postNo))])]),t._v(" "),s("div",{staticClass:"post__writeInfo"},[s("span",{staticClass:"post__email"},[t._v(t._s(t.email))]),t._v(" |\n    "),s("span",{staticClass:"post__date"},[t._v(t._s(t.updatedDate))])]),t._v(" "),s("div",{staticClass:"post__body"},[s("p",{staticClass:"post__title"},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"post__contents"},[t._v(t._s(t.contents))])])])},staticRenderFns:[]};var w=s("VU/8")(y,C,!1,function(t){s("mr7p")},"data-v-0f156ac1",null).exports,b={name:"AdsItem",props:{adsData:{type:Object,require:!0}},computed:{img:function(){return"https://comento.cafe24.com/public/images/".concat(this.adsData.img)},title:function(){return this.adsData.title},contents:function(){return this.adsData.contents}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ads"},[s("p",{staticClass:"ads__header"},[t._v("Sponsored")]),t._v(" "),s("img",{attrs:{src:t.img,alt:""}}),t._v(" "),s("div",{staticClass:"ads__body"},[s("h1",{staticClass:"ads__title"},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"ads__contents"},[t._v(t._s(t.contents))])])])},staticRenderFns:[]};var P={name:"List",components:{"filter-modal":g,ListItem:w,AdsItem:s("VU/8")(b,L,!1,function(t){s("mBTS")},"data-v-917de426",null).exports},data:function(){return{postList:[],sortType:"asc",selectedFilter:[],isModalShow:!1,postPage:1,bottom:!1}},computed:d()({},Object(_.c)(["getCategoryList","getLoadedPostList"]),{getCategory:function(){return this.getCategoryList},getLoadedPost:function(){return this.getLoadedPostList}}),watch:{sortType:function(){this.$store.commit(f,[]),this.getPostList()},selectedFilter:function(){this.$store.commit(f,[]),this.getPostList()},bottom:function(){this.postPage+=1,this.getPostList()}},methods:d()({},Object(_.b)(["getPostListAPI","getCategoryAPI"]),{getPostList:function(){var t=this;return u()(c.a.mark(function e(){var s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={post:{page:t.postPage,ord:t.sortType,category:t.selectedFilter},ads:{page:t.postPage,limit:3}},e.next=4,t.getPostListAPI(s);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0);case 9:case"end":return e.stop()}},e,t,[[0,6]])}))()},init:function(){var t=this;return u()(c.a.mark(function e(){var s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getCategoryAPI();case 3:s=e.sent,t.selectedFilter=s.list.reduce(function(t,e){return t.push(e.no),t},[]),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},clickFilter:function(){this.isModalShow=!this.isModalShow},isBottom:function(){var t=window.pageYOffset,e=document.documentElement.clientHeight,s=document.documentElement.scrollHeight;return e+t>=s||s<e}}),created:function(){var t=this;window.addEventListener("scroll",function(){t.bottom=t.isBottom()}),this.getLoadedPostList.length<1&&this.init()}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board"},[s("header",{staticClass:"board__header"},[s("h1",{staticClass:"board__title"},[t._v("Scroll bulletin board")]),t._v(" "),s("nav",{staticClass:"board__nav"},[s("button",{staticClass:"board__filter",attrs:{type:"button"},on:{click:t.clickFilter}},[t._v("필터")]),t._v(" "),s("div",{staticClass:"board__sortGroup"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sortType,expression:"sortType"}],attrs:{type:"radio",id:"sortAsc",name:"sort",value:"asc",checked:""},domProps:{checked:t._q(t.sortType,"asc")},on:{change:function(e){t.sortType="asc"}}}),t._v(" "),s("label",{staticClass:"board__sortAsc",attrs:{for:"sortAsc"}},[t._v("오름차순")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sortType,expression:"sortType"}],attrs:{type:"radio",id:"sortDesc",name:"sort",value:"desc"},domProps:{checked:t._q(t.sortType,"desc")},on:{change:function(e){t.sortType="desc"}}}),t._v(" "),s("label",{staticClass:"board__sortDesc",attrs:{for:"sortDesc"}},[t._v("내림차순")])])])]),t._v(" "),s("div",{staticClass:"board__body"},t._l(t.getLoadedPost,function(e,a){return s("div",{key:a,staticClass:"border__item"},[0===e.itemType?s("list-item",{attrs:{postData:e}}):1===e.itemType?s("ads-item",{attrs:{adsData:e}}):t._e()],1)}),0),t._v(" "),s("filter-modal",{staticClass:"filterModal",attrs:{isModalShow:t.isModalShow},on:{"update:isModalShow":function(e){t.isModalShow=e},"update:is-modal-show":function(e){t.isModalShow=e}}},[s("h1",{staticClass:"filterModal__title"},[t._v("필터")]),t._v(" "),s("div",{staticClass:"filterModal__body"},t._l(t.getCategory,function(e,a){return s("label",{key:a},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedFilter,expression:"selectedFilter"}],attrs:{type:"checkbox"},domProps:{value:a,checked:Array.isArray(t.selectedFilter)?t._i(t.selectedFilter,a)>-1:t.selectedFilter},on:{change:function(e){var s=t.selectedFilter,r=e.target,n=!!r.checked;if(Array.isArray(s)){var i=a,o=t._i(s,i);r.checked?o<0&&(t.selectedFilter=s.concat([i])):o>-1&&(t.selectedFilter=s.slice(0,o).concat(s.slice(o+1)))}else t.selectedFilter=n}}}),t._v(" "+t._s(e)+"\n      ")])}),0)])],1)},staticRenderFns:[]};var x=s("VU/8")(P,D,!1,function(t){s("kt5g")},"data-v-2db95559",null).exports,k={name:"Reply",props:{replyData:{type:Object,require:!0}},computed:{contents:function(){return this.replyData.contents},email:function(){return this.replyData.email},updatedDate:function(){return this.replyData.updated_at}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"reply"},[s("p",{staticClass:"reply__contents"},[t._v(t._s(t.contents))]),t._v(" "),s("div",{staticClass:"reply__writeInfo"},[s("span",{staticClass:"reply__email"},[t._v(t._s(t.email))]),t._v(" |\n    "),s("span",{staticClass:"reply__date"},[t._v(t._s(t.updatedDate))])])])},staticRenderFns:[]};var A={name:"PostDetail",components:{Reply:s("VU/8")(k,F,!1,function(t){s("FuvG")},"data-v-4e18847c",null).exports},props:{postNo:{type:String,require:!0}},data:function(){return{article:{},replies:[]}},computed:d()({},Object(_.c)(["getCategoryList"]),{categoryNo:function(){return this.category_no},articleNo:function(){return this.article.no},title:function(){return this.article.title},email:function(){return this.article.email},updatedDate:function(){return this.article.updated_at},contents:function(){return this.article.contents},repliesCount:function(){return this.replies.length}}),methods:d()({},Object(_.b)(["getPostDetailAPI"]),{init:function(){var t=this;return u()(c.a.mark(function e(){var s,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={req_no:t.postNo},e.next=4,t.getPostDetailAPI(s);case 4:a=e.sent,t.article=a.article,a.replies&&(t.replies=a.replies),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},getCategoryName:function(t){return this.getCategoryList[t]}}),created:function(){this.init()}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[t._m(0),t._v(" "),s("article",{staticClass:"detail__article"},[s("h2",{staticClass:"article__title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"article__writeInfo"},[s("span",{staticClass:"article__email"},[t._v(t._s(t.email))]),t._v(" |\n      "),s("span",{staticClass:"article__date"},[t._v(t._s(t.updatedDate))])]),t._v(" "),s("p",{staticClass:"article__contents"},[t._v(t._s(t.contents))]),t._v(" "),s("div",{staticClass:"article__replise"},[s("h2",{staticClass:"replise__count"},[s("span",[t._v(t._s(t.repliesCount))]),t._v(" Replies\n      ")]),t._v(" "),t._l(t.replies,function(t,e){return s("reply",{key:e,attrs:{replyData:t}})})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"detail__header"},[e("h1",{staticClass:"detail__title"},[this._v("Bulletin board detail")])])}]};var E=s("VU/8")(A,T,!1,function(t){s("+LG1")},"data-v-f80b3e3a",null).exports;a.a.use(i.a);var M,N=new i.a({mode:"history",routes:[{path:"/",name:"List",component:x},{path:"/detail/:postNo",name:"PostDetail",component:E,props:!0}]}),I=s("mtWM"),S=s.n(I),O=s("bOdI"),$=s.n(O),q=s("Gu7T"),j=s.n(q),R=(M={},$()(M,v,function(t,e){t.List.category.list[e.no]=e.name}),$()(M,f,function(t,e){var s;e.length<1&&(t.List.postList=[]),(s=t.List.postList).push.apply(s,j()(e))}),M),G=s("BO1k"),U=s.n(G),B="http://comento.cafe24.com",V=function(){return S.a.get(B+"/category.php")},H=function(t){return S.a.get(B+"/request.php",{params:t})},Y=function(t){return S.a.get(B+"/detail.php",{params:t})},W=function(t){return S.a.get(B+"/ads.php",{params:t})},J=function(t,e){for(var s=t.length+e.length,a=[],r=0,n=0,i=0;i<s;i+=1)(i+1)%4!=0?t[r]&&(t[r].itemType=0,a.push(t[r]),r+=1):e[n]&&(e[n].itemType=1,a.push(e[n]),n+=1);return a},X={getCategoryAPI:function(t){var e=this;return u()(c.a.mark(function s(){var a,r,n,i,o,l,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V();case 3:for(a=e.sent,r=!0,n=!1,i=void 0,e.prev=7,o=U()(a.data.list);!(r=(l=o.next()).done);r=!0)u=l.value,t.commit(v,u);e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),n=!0,i=e.t0;case 15:e.prev=15,e.prev=16,!r&&o.return&&o.return();case 18:if(e.prev=18,!n){e.next=21;break}throw i;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return e.abrupt("return",a.data);case 26:throw e.prev=26,e.t1=e.catch(0),new Error("getCategoryAPI Error "+e.t1);case 29:case"end":return e.stop()}},s,e,[[0,26],[7,11,15,23],[16,,18,22]])}))()},getPostListAPI:function(t,e){var s=this;return u()(c.a.mark(function a(){var r,n,i;return c.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,H(e.post);case 3:return r=s.sent,s.next=6,W(e.ads);case 6:return n=s.sent,i=J(r.data.list,n.data.list),t.commit(f,i),s.abrupt("return",i);case 12:throw s.prev=12,s.t0=s.catch(0),new Error("getPostList Error "+s.t0);case 15:case"end":return s.stop()}},a,s,[[0,12]])}))()},getPostDetailAPI:function(t,e){var s=this;return u()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e);case 3:return a=t.sent,t.abrupt("return",a.data.detail);case 7:throw t.prev=7,t.t0=t.catch(0),new Error("getPostDetailAPI Error "+t.t0);case 10:case"end":return t.stop()}},t,s,[[0,7]])}))()}};a.a.use(_.a);var z=new _.a.Store({state:{List:{category:{list:{}},postList:[]}},getters:{getCategoryList:function(t){return t.List.category.list},getLoadedPostList:function(t){return t.List.postList}},mutations:R,actions:X});a.a.prototype.$http=S.a,a.a.config.productionTip=!1,new a.a({el:"#app",store:z,router:N,components:{App:n},template:"<App/>"})},kt5g:function(t,e){},mBTS:function(t,e){},mr7p:function(t,e){}},[0]);
//# sourceMappingURL=app.d7f70cc3dbbf665fe2a4.js.map