"use strict";(self["webpackChunkapp_ui_vue2"]=self["webpackChunkapp_ui_vue2"]||[]).push([[336],{7118:function(t,e,i){i.d(e,{EB:function(){return o},ZB:function(){return c},h7:function(){return l}});var s=i(3237),a=i(4589),l=(0,a.Ji)("v-card__actions"),n=(0,a.Ji)("v-card__subtitle"),c=(0,a.Ji)("v-card__text"),o=(0,a.Ji)("v-card__title");s.Z},8183:function(t,e,i){i.r(e),i.d(e,{default:function(){return B}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("header-nav",{attrs:{propsData:this.propsData}}),i("div",{staticClass:"pt-2 pb-2"},[i("v-card",{staticClass:"custom__infobox",attrs:{tile:"",elevation:"0"}},[i("v-card",{staticClass:"pa-1 custom__infobox",attrs:{tile:"",elevation:"0"}},[i("v-list",{staticClass:"transparent pa-0",attrs:{dense:""}},[i("v-list-item",{staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-9",staticStyle:{"min-width":"45px"}},[t._v("전체 상품")]),i("div",{},[t._v("2 건")])])],1)],1)],1)],1),i("v-card",{attrs:{tile:"",elevation:"0"}},[i("v-list",{staticClass:"pt-0"},[i("v-subheader",{staticClass:"secondary darken-3",staticStyle:{height:"34px"},attrs:{dark:""}},[i("div",{staticClass:"v-list-item__action mr-1"},[t._v("No.")]),i("div",{staticClass:"v-list-item__content"},[t._v("상품명")]),i("div",{staticClass:"v-list-item__action justify-end"},[t._v("정상가 / 특매가")])]),i("v-list-item-group",[t._l(t.items,(function(e,s){return[i("v-list-item",{key:s},[i("v-list-item-action",{staticClass:"text-h6 font-weight-bold mr-1"},[i("span",{staticClass:"grey--text"},[t._v(t._s(s+1))])]),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h6 font-weight-bold"},[t._v(" "+t._s(e.name)+" ")]),i("v-list-item-subtitle",{staticClass:"text-subtitle-1 black--text"},[t._v(t._s(e.barcode))])],1),i("v-list-item-action",{staticClass:"ml-2"},[i("v-list-item-subtitle",{staticClass:"text-subtitle-1 mb-0 text-right"},[t._v(" "+t._s(e.money)+" ")]),i("v-list-item-title",{staticClass:"text-h6 font-weight-bold mb-0 red--text align-self-end"},[t._v(" "+t._s(e.money)+" ")])],1)],1),s<t.items.length?i("v-divider",{key:s}):t._e()]}))],2)],1)],1),i("v-app-bar",{directives:[{name:"show",rawName:"v-show",value:t.checkOpt,expression:"checkOpt"}],staticClass:"white",attrs:{app:"",bottom:"",elevation:"0"}},[i("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2 custom__btn",attrs:{tile:"",depressed:"",large:""},on:{click:function(e){t.dialog3=!0}}},[i("span",{staticClass:"text-h6 font-weight-bold"},[t._v("추가")])]),i("v-btn",{staticClass:"flex-grow-1 ml-2 mr-2 custom__btn",attrs:{tile:"",depressed:"",large:""}},[i("span",{staticClass:"text-h6 font-weight-bold"},[t._v("전송")])])],1),i("v-dialog",{attrs:{persistent:""},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[i("v-card",[i("v-card-title",{staticClass:"pa-2 custom__headcolor",class:t.basecolor},[i("span",{staticClass:"font-weight-bold flex-grow-1 text-center"},[t._v("특매정보")]),i("v-btn",{staticStyle:{position:"absolute",right:"6px"},attrs:{icon:""},on:{click:function(e){t.dialog3=!1}}},[i("v-icon",{attrs:{large:""}},[t._v("mdi-close")])],1)],1),i("v-divider"),i("div",{staticClass:"mt-1"},[i("v-list",{staticClass:"transparent pt-1 pb-2",attrs:{dense:""}},[i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("바코드")]),i("div",{},[t._v("8801056018948")])]),i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px","align-items":"flex-start"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("상품명")]),i("div",{staticStyle:{"line-height":"1.2"}},[t._v("롯데칸타타프리미엄라떼입니다")])]),i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("규격")]),i("div",{},[t._v("275ml")])]),i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("매입가")]),i("div",{},[t._v(" 1,300"),i("span",{staticClass:"grey--text text--darken-2"},[t._v(".00")])])]),i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("판매가")]),i("div",{},[t._v("1,000")])])],1)],1),i("div",{staticClass:"grey lighten-4"},[i("v-list",{staticClass:"transparent pa-0 pt-2 pb-2",attrs:{dense:""}},[i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("특매매입가")]),i("div",{staticClass:"red--text text--darken-1",staticStyle:{"font-weight":"800 !important"}},[t._v(" 1,000"),i("span",{staticClass:"grey--text text--darken-1"},[t._v(".00")])])]),i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("특매판매가")]),i("div",{staticClass:"red--text text--darken-1",staticStyle:{"font-weight":"800 !important"}},[t._v(" 1,300 ")])]),i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("할인")]),i("div",{},[t._v("1개당 -300원 할인")])]),i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("할인율")]),i("div",{},[t._v("-30.00%")])]),i("v-list-item",{staticClass:"pa-2 pt-0 pb-0",staticStyle:{"min-height":"24px"}},[i("div",{staticClass:"mr-3",staticStyle:{"min-width":"76px"}},[t._v("이익룰")]),i("div",{},[t._v("23.8%")])])],1)],1),i("v-card-actions",[i("v-btn",{staticClass:"flex-grow-1 ml-2 mr-1 custom__btn",attrs:{tile:"",large:"",depressed:""},on:{click:function(e){t.dialog3=!0}}},[i("span",{staticClass:"text-h6 font-weight-bold"},[t._v("삭제")])]),i("v-btn",{staticClass:"flex-grow-1 ml-1 mr-2 custom__btn",attrs:{tile:"",large:"",depressed:""},on:{click:function(e){t.dialog3=!1}}},[i("span",{staticClass:"text-h6 font-weight-bold"},[t._v("수정")])])],1)],1)],1)],1)},a=[],l=i(4367),n=i(2552),c=i(629),o={components:{HeaderNav:n.Z},name:"SpecialSaleList",data:function(){return{checkOpt:!0,dialog3:!0,propsData:{pagetitle:"특매스캔목록",pageBack:!0,pageBtn:!1,pageBtnName:"편집",pageTo:"/purchaselistopt"},items:[{type:1,name:"일이삼사오육칠팔구십일이삼사오육칠팔구십",time:"2022-04-20 12:12",timecolor:"grey--text",money:"99,999,999",count:"999"},{type:1,name:"롯데칠성음료",time:"오늘 11 : 31",timecolor:"primary--text text--darken-4",money:"2,166",count:"54",ectmoney:".65"},{type:1,name:"서울우유",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"1,905",count:"22",ectmoney:".00"},{type:1,name:"서울우유",time:"오늘 11 : 31",timecolor:"primary--text text--darken-4",money:"5,715",count:"20",fontcolor:"red--text text--darken-1"},{type:1,name:"롯데칠성음료",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"2,166",count:"15",ectmoney:".65"},{type:1,name:"롯데칠성음료",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"2,166",count:"15",ectmoney:".65"},{type:1,name:"롯데칠성음료",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"2,166",count:"15",ectmoney:".65"},{type:1,name:"서울우유서울우유서울우유",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"211,905",count:"11",fontcolor:"red--text text--darken-1",ectmoney:".00"},{type:1,name:"롯데칠성음료",time:"2022-04-20 11 : 31",timecolor:"grey--text",money:"2,166",count:"7",ectmoney:".65"},{type:1,name:"롯데칠성음료",time:"오늘 11 : 31",timecolor:"primary--text text--darken-4",money:"2,166",count:"3",ectmoney:".65"}],password:"Password",show:!1,message:"공급사명",marker:!0}},methods:{clearMessage:function(){this.message=""},upValueParent:function(t){this.checkOpt=t}},computed:(0,l.Z)({},(0,c.rn)(["basecolor","dark"]))},r=o,m=i(1001),p=i(3453),v=i.n(p),d=i(426),h=i(680),_=i(3237),x=i(7118),y=i(4246),u=i(1418),g=i(6428),C=i(6816),b=i(7620),f=i(3099),w=i(2710),k=i(3249),S=i(7877),V=i(5533),Z=(0,m.Z)(r,s,a,!1,null,null,null),B=Z.exports;v()(Z,{VAppBar:d.Z,VBtn:h.Z,VCard:_.Z,VCardActions:x.h7,VCardTitle:x.EB,VDialog:y.Z,VDivider:u.Z,VIcon:g.Z,VList:C.Z,VListItem:b.Z,VListItemAction:f.Z,VListItemContent:w.km,VListItemGroup:k.Z,VListItemSubtitle:w.oZ,VListItemTitle:w.V9,VMain:S.Z,VSubheader:V.Z})}}]);
//# sourceMappingURL=336.1f38ac20.js.map