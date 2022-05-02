"use strict";(self["webpackChunkapp_ui_vue2"]=self["webpackChunkapp_ui_vue2"]||[]).push([[230],{9230:function(t,e,a){a.r(e),a.d(e,{default:function(){return B}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("header-nav",{attrs:{propsData:this.propsData}}),a("div",{staticClass:"pa-2"},[a("v-card",{staticClass:"secondary",attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"pt-1 pb-1 justify-end white--text"},[a("span",{staticClass:"mr-auto text-body-1"},[t._v("총")]),a("span",{staticClass:"primary--text text-h5 font-weight-bold"},[t._v(" 9,786 "),a("span",{staticClass:"font-weight-regular"},[t._v(".65")])]),a("span",{staticClass:"ml-4 text-body-1"},[t._v("원")])])],1)],1),a("v-list",{staticClass:"pt-0"},[a("v-subheader",{staticClass:"secondary",staticStyle:{height:"34px"},attrs:{dark:""}},[a("div",{staticClass:"v-list-item__action mr-2"},[t._v("No.")]),a("div",{staticClass:"v-list-item__content"},[t._v("매입사")]),a("div",{staticClass:"v-list-item__action ml-2"},[t._v("매입금액")])]),a("v-list-item-group",[t._l(t.items,(function(e,s){return[a("v-list-item",{key:s},[a("v-list-item-action",{staticClass:"text-h6 mr-2"},[a("span",[t._v(t._s(s+1))])]),a("v-list-item-content",{staticClass:"pt-2 pb-2"},[a("v-list-item-title",{staticClass:"text-h6 mb-0"},[t._v(t._s(e.name))]),a("v-list-item-subtitle",{staticClass:"mt-0 subtitle-1 mt-0",class:e.timecolor},[t._v(" "+t._s(e.time)+" ")])],1),a("v-list-item-action",{staticClass:"ml-2"},[a("v-list-item-title",{staticClass:"text-h6 font-weight-bold"},[t._v(" "+t._s(e.money)+" "),a("span",{staticClass:"font-weight-regular grey--text"},[t._v(" "+t._s(e.ectmoney)+" ")])])],1)],1),s<t.items.length?a("v-divider",{key:s}):t._e()]}))],2)],1),a("v-app-bar",{directives:[{name:"show",rawName:"v-show",value:t.checkOpt,expression:"checkOpt"}],staticClass:"white",attrs:{app:"",bottom:"",elevation:"0"}},[a("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",outlined:"",color:"accent"},on:{click:function(e){t.dialog3=!0}}},[a("span",{staticClass:"text-h6"},[t._v("추가")])]),a("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",color:"accent"}},[a("span",{staticClass:"text-h6 text--grey"},[t._v("전송")])])],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[a("v-card",[a("v-card-title",{staticClass:"pa-2"},[a("v-spacer"),a("span",[t._v("공급사")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog3=!1}}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-close")])],1)],1),a("v-divider"),a("v-card-text",[a("v-text-field",{staticClass:"mt-3",attrs:{filled:"","clear-icon":"mdi-close-circle",clearable:"",type:"text","background-color":"yellow lighten-5"},on:{"click:clear":t.clearMessage},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("div",{staticStyle:{"min-height":"100px"}},[t._v("상품리스트")])],1),a("v-card-actions",[a("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",color:"accent"},on:{click:function(e){t.dialog3=!1}}},[a("span",{staticClass:"text-h6"},[t._v("스캔")])]),a("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",disabled:"",color:"accent"},on:{click:function(e){t.dialog3=!1}}},[a("span",{staticClass:"text-h6"},[t._v("확인")])])],1)],1)],1)],1)},i=[],l=a(7888),c={components:{HeaderNav:l.Z},name:"PurchaseList",data:function(){return{checkOpt:!0,dialog3:!1,propsData:{pagetitle:"매입내역",pageBack:!0,pageBtn:!0,pageBtnName:"편집",pageTo:"/purchaselistopt"},items:[{name:"서울우유",time:"오늘 11 : 31",timecolor:"amber--text text--darken-3 text--darken-3",money:"5,715",ectmoney:".00"},{name:"롯데칠성음료",time:"오늘 11 : 31",timecolor:"amber--text text--darken-3",money:"2,166",ectmoney:".65"},{name:"서울우유",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"1,905",ectmoney:".00"},{name:"서울우유",time:"오늘 11 : 31",timecolor:"amber--text text--darken-3",money:"5,715",ectmoney:".00"},{name:"롯데칠성음료",time:"오늘 11 : 31",timecolor:"amber--text text--darken-3",money:"2,166",ectmoney:".65"},{name:"서울우유",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"1,905",ectmoney:".00"}],password:"Password",show:!1,message:"서울우유",marker:!0}},methods:{clearMessage:function(){this.message=""},upValueParent:function(t){this.checkOpt=t}}},n=c,o=a(1001),r=a(3453),m=a.n(r),d=a(3343),v=a(680),p=a(3237),u=a(7118),g=a(2912),h=a(1418),x=a(6428),_=a(6816),C=a(7620),b=a(3099),y=a(6944),f=a(3249),k=a(7877),V=a(3631),w=a(5533),Z=a(4831),L=(0,o.Z)(n,s,i,!1,null,null,null),B=L.exports;m()(L,{VAppBar:d.Z,VBtn:v.Z,VCard:p.Z,VCardActions:u.h7,VCardText:u.ZB,VCardTitle:u.EB,VDialog:g.Z,VDivider:h.Z,VIcon:x.Z,VList:_.Z,VListItem:C.Z,VListItemAction:b.Z,VListItemContent:y.km,VListItemGroup:f.Z,VListItemSubtitle:y.oZ,VListItemTitle:y.V9,VMain:k.Z,VSpacer:V.Z,VSubheader:w.Z,VTextField:Z.Z})}}]);
//# sourceMappingURL=230.186f00f5.js.map