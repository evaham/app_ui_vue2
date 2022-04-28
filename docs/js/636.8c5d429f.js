"use strict";(self["webpackChunkapp_ui_vue2"]=self["webpackChunkapp_ui_vue2"]||[]).push([[636],{636:function(t,e,a){a.r(e),a.d(e,{default:function(){return B}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("header-nav",{attrs:{propsData:this.propsData}}),a("div",{staticClass:"pa-3"},[a("v-card",{staticClass:"secondary",attrs:{dark:"",elevation:"0"}},[a("v-card-title",{staticClass:"justify-end"},[a("span",{staticClass:"mr-auto"},[t._v("총")]),a("span",{staticClass:"text-h5 font-weight-bold"},[t._v(" 9,786 "),a("span",{staticClass:"font-weight-regular"},[t._v(".65")])]),a("span",{staticClass:"ml-4"},[t._v("원")])])],1)],1),a("v-divider"),a("v-list",[a("v-subheader",{staticClass:"listsubheader",attrs:{dark:""}},[a("div",{staticClass:"v-list-item__action"},[t._v("No.")]),a("div",{staticClass:"v-list-item__content"},[t._v("매입사")]),a("div",{staticClass:"v-list-item__action"},[t._v("매입금액")])]),a("v-list-item-group",[t._l(t.items,(function(e,s){return[a("v-list-item",{key:s},[a("v-list-item-action",[a("span",[t._v(t._s(s+1))])]),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))]),a("v-list-item-subtitle",{staticClass:"mt-1",class:e.timecolor},[t._v(" "+t._s(e.time)+" ")])],1),a("v-list-item-action",[a("v-list-item-title",{staticClass:"font-weight-bold"},[t._v(" "+t._s(e.money)+" "),a("span",{staticClass:"font-weight-regular grey--text"},[t._v(" "+t._s(e.ectmoney)+" ")])])],1)],1),s<t.items.length?a("v-divider",{key:s}):t._e()]}))],2)],1),a("v-app-bar",{directives:[{name:"show",rawName:"v-show",value:t.checkOpt,expression:"checkOpt"}],staticClass:"white",attrs:{app:"",bottom:"",elevation:"0"}},[a("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",large:"",outlined:"",color:"accent"},on:{click:function(e){t.dialog3=!0}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus-circle-outline")]),a("span",[t._v("추가")])],1),a("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",large:"",color:"accent"}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-email-send-outline")]),a("span",[t._v("전송")])],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[a("v-card",[a("v-card-title",{staticClass:"pa-2"},[a("v-spacer"),a("span",[t._v("공급사")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog3=!1}}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-close")])],1)],1),a("v-divider"),a("v-card-text",[a("v-text-field",{staticClass:"mt-3",attrs:{filled:"","clear-icon":"mdi-close-circle",clearable:"",type:"text","background-color":"yellow lighten-5"},on:{"click:clear":t.clearMessage},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("div",{staticStyle:{"min-height":"100px"}},[t._v("상품리스트")])],1),a("v-card-actions",[a("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",large:"",color:"accent"},on:{click:function(e){t.dialog3=!1}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-barcode-scan")]),a("span",[t._v("스캔")])],1),a("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",disabled:"",large:"",color:"accent"},on:{click:function(e){t.dialog3=!1}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-check")]),a("span",[t._v("확인")])],1)],1)],1)],1)],1)},i=[],l=a(7888),c={components:{HeaderNav:l.Z},name:"PurchaseList",data:function(){return{checkOpt:!0,dialog3:!1,propsData:{pagetitle:"매입내역",pageBack:!0,pageBtn:!0,pageBtnName:"편집",pageTo:"/purchaselistopt"},items:[{name:"서울우유",time:"오늘 11 : 31",timecolor:"purple--text",money:"5,715",ectmoney:".00"},{name:"롯데칠성음료",time:"오늘 11 : 31",timecolor:"purple--text",money:"2,166",ectmoney:".65"},{name:"서울우유",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"1,905",ectmoney:".00"},{name:"서울우유",time:"오늘 11 : 31",timecolor:"purple--text",money:"5,715",ectmoney:".00"},{name:"롯데칠성음료",time:"오늘 11 : 31",timecolor:"purple--text",money:"2,166",ectmoney:".65"},{name:"서울우유",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"1,905",ectmoney:".00"}],password:"Password",show:!1,message:"서울우유",marker:!0}},methods:{clearMessage:function(){this.message=""},upValueParent:function(t){this.checkOpt=t}}},n=c,o=a(1001),r=a(3453),m=a.n(r),d=a(3343),v=a(680),p=a(3237),u=a(7118),g=a(2912),_=a(1418),h=a(6428),C=a(6816),f=a(7620),k=a(3099),x=a(6944),y=a(3249),b=a(7877),V=a(3631),w=a(5533),Z=a(4831),L=(0,o.Z)(n,s,i,!1,null,null,null),B=L.exports;m()(L,{VAppBar:d.Z,VBtn:v.Z,VCard:p.Z,VCardActions:u.h7,VCardText:u.ZB,VCardTitle:u.EB,VDialog:g.Z,VDivider:_.Z,VIcon:h.Z,VList:C.Z,VListItem:f.Z,VListItemAction:k.Z,VListItemContent:x.km,VListItemGroup:y.Z,VListItemSubtitle:x.oZ,VListItemTitle:x.V9,VMain:b.Z,VSpacer:V.Z,VSubheader:w.Z,VTextField:Z.Z})}}]);
//# sourceMappingURL=636.8c5d429f.js.map