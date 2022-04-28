"use strict";(self["webpackChunkapp_ui_vue2"]=self["webpackChunkapp_ui_vue2"]||[]).push([[207],{207:function(t,e,i){i.r(e),i.d(e,{default:function(){return L}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("header-nav",{attrs:{propsData:this.propsData}}),i("div",{staticClass:"pa-3"},[i("v-card",{staticClass:"secondary",attrs:{dark:"",elevation:"0"}},[i("v-list",{staticClass:"transparent",attrs:{dense:""}},[i("v-list-item",{staticStyle:{"min-height":"30px"}},[i("div",{staticClass:"mr-10",staticStyle:{"min-width":"70px"}},[t._v("공급사")]),i("div",[t._v("롯데칠성음료")])]),i("v-list-item",{staticStyle:{"min-height":"30px"}},[i("div",{staticClass:"mr-10",staticStyle:{"min-width":"70px"}},[t._v("금액")]),i("div",[t._v("12433.35원")])]),i("v-list-item",{staticStyle:{"min-height":"30px"}},[i("div",{staticClass:"mr-10",staticStyle:{"min-width":"70px"}},[t._v("날짜")]),i("div",{staticClass:"accent-text"},[t._v("2022-04-21 11:31")])])],1)],1)],1),i("v-list",[i("v-subheader",{staticClass:"listsubheader",attrs:{dark:""}},[i("div",{staticClass:"v-list-item__action"},[t._v("No.")]),i("div",{staticClass:"v-list-item__content"},[t._v("매입사")]),i("div",{staticClass:"v-list-item__action"},[t._v("매입금액")])]),i("v-list-item-group",[t._l(t.items,(function(e,s){return[i("v-list-item",{key:s},[i("v-list-item-action",[i("span",[t._v(t._s(s+1))])]),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))]),i("v-list-item-subtitle",{staticClass:"mt-1",class:e.timecolor},[t._v(" "+t._s(e.time)+" ")])],1),i("v-list-item-action",[i("v-list-item-title",{staticClass:"font-weight-bold"},[t._v(" "+t._s(e.money)+" "),i("span",{staticClass:"font-weight-regular grey--text"},[t._v(" "+t._s(e.ectmoney)+" ")])])],1)],1),s<t.items.length?i("v-divider",{key:s}):t._e()]}))],2)],1),i("v-app-bar",{staticClass:"white",attrs:{app:"",bottom:"",elevation:"0"}},[i("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",large:"",color:"accent"},on:{click:function(e){t.dialog3=!0}}},[i("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus-circle-outline")]),i("span",[t._v("상품 추가")])],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[i("v-card",[i("v-card-title",{staticClass:"pa-2"},[i("v-spacer"),i("span",[t._v("공급사")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog3=!1}}},[i("v-icon",{attrs:{large:""}},[t._v("mdi-close")])],1)],1),i("v-divider"),i("v-card-text",[i("v-text-field",{staticClass:"mt-3",attrs:{filled:"","clear-icon":"mdi-close-circle",clearable:"",type:"text","background-color":"purple lighten-5"},on:{"click:clear":t.clearMessage},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),i("div",{staticClass:"text-h6",staticStyle:{"min-height":"100px"}},[t._v("상품리스트")])],1),i("v-card-actions",[i("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",large:"",color:"primary"},on:{click:function(e){t.dialog3=!1}}},[t._v(" 스캔 ")]),i("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2",attrs:{rounded:"",depressed:"",disabled:"",large:"",color:"primary"},on:{click:function(e){t.dialog3=!1}}},[t._v(" 확인 ")])],1)],1)],1)],1)},a=[],l=i(7888),c={components:{HeaderNav:l.Z},name:"PurchaseList",data:function(){return{dialog3:!1,propsData:{pagetitle:"매입상세",pageBack:!0,pageBtn:!0,pageBtnName:"편집"},items:[{name:"서울우유",time:"오늘 11 : 31",timecolor:"purple--text",money:"5,715",ectmoney:".00"},{name:"롯데칠성음료",time:"오늘 11 : 31",timecolor:"purple--text",money:"2,166",ectmoney:".65"},{name:"서울우유",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"1,905",ectmoney:".00"}],password:"Password",show:!1,message:"서울우유",marker:!0}},methods:{clearMessage:function(){this.message=""}}},n=c,r=i(1001),o=i(3453),m=i.n(o),v=i(3343),d=i(680),p=i(3237),u=i(7118),g=i(2912),_=i(1418),h=i(6428),C=i(6816),x=i(7620),f=i(3099),y=i(6944),V=i(3249),b=i(7877),k=i(3631),Z=i(5533),w=i(4831),S=(0,r.Z)(n,s,a,!1,null,null,null),L=S.exports;m()(S,{VAppBar:v.Z,VBtn:d.Z,VCard:p.Z,VCardActions:u.h7,VCardText:u.ZB,VCardTitle:u.EB,VDialog:g.Z,VDivider:_.Z,VIcon:h.Z,VList:C.Z,VListItem:x.Z,VListItemAction:f.Z,VListItemContent:y.km,VListItemGroup:V.Z,VListItemSubtitle:y.oZ,VListItemTitle:y.V9,VMain:b.Z,VSpacer:k.Z,VSubheader:Z.Z,VTextField:w.Z})}}]);
//# sourceMappingURL=207.268b1330.js.map