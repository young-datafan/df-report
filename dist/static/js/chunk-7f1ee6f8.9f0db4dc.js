/*! new version */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f1ee6f8"],{"39a2c":function(e,t,s){"use strict";s("4635")},4635:function(e,t,s){},ae2a:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"detail"},[s("PageBreadcrumb",{attrs:{"title-list":e.titleList}}),s("CalculateEventBaseInfo"),s("div",{staticClass:"detail-body"},[s("div",{staticClass:"body-head flex-box--row flex-box--between-justify"},[s("a-select",{staticClass:"head__select",attrs:{"allow-clear":"",placeholder:"请选择版本号"},model:{value:e.versionValue,callback:function(t){e.versionValue=t},expression:"versionValue"}},e._l(e.versionList,(function(t,a){return s("a-select-option",{key:a},[e._v(" "+e._s(t.name)+" ")])})),1),s("div",{staticClass:"head__btn"},[s("a-button",{staticClass:"head__button",attrs:{type:"primary",size:"small",shape:"round",ghost:""}},[e._v("编辑")]),s("a-button",{attrs:{type:"primary",size:"small",shape:"round",ghost:""},on:{click:e.versionComparison}},[e._v("版本对比")])],1)],1),s("div",{staticClass:"detail-info"},[e._m(0),s("div",{staticClass:"info-result"},[s("div",{staticClass:"result-tilte",on:{click:function(t){e.isResultOpen=!e.isResultOpen}}},[e._v(" 结果计算 "),e.isResultOpen?s("a-icon",{staticClass:"icon-down",attrs:{type:"caret-up"}}):s("a-icon",{staticClass:"icon-down",attrs:{type:"caret-down"}})],1),s("div",{staticClass:"line"}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isResultOpen,expression:"isResultOpen"}],staticClass:"result-table"},[s("SenseTable",e._b({ref:"senseTable"},"SenseTable",e.tableOptionsResult,!1))],1)]),s("div",{staticClass:"info-result"},[s("div",{staticClass:"result-tilte",on:{click:function(t){e.isFilterOpen=!e.isFilterOpen}}},[e._v(" 指标筛选 "),e.isFilterOpen?s("a-icon",{staticClass:"icon-down",attrs:{type:"caret-up"}}):s("a-icon",{staticClass:"icon-down",attrs:{type:"caret-down"}})],1),s("div",{staticClass:"line"}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isFilterOpen,expression:"isFilterOpen"}],staticClass:"result-table"},[s("SenseTable",e._b({ref:"senseTable"},"SenseTable",e.tableOptionsFilter,!1))],1)]),s("div",{staticClass:"info-result"},[s("div",{staticClass:"data-list-tilte",on:{click:function(t){e.isDataListOpen=!e.isDataListOpen}}},[e._v(" 数据项清单 "),e.isDataListOpen?s("a-icon",{staticClass:"icon-down",attrs:{type:"caret-up"}}):s("a-icon",{staticClass:"icon-down",attrs:{type:"caret-down"}})],1),s("div",{staticClass:"line"}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isDataListOpen,expression:"isDataListOpen"}],staticClass:"data-list-table"},[s("SenseTable",e._b({ref:"senseTable"},"SenseTable",e.tableOptionsDatalist,!1))],1)])])])],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"info-head"},[s("span",{staticClass:"info-head-margin"},[e._v("版本备注：规则包含‘税务’")]),s("span",[e._v("创建时间：2021-11-01 11:27:30")])])}],l=s("bc42"),n=s("7bb4"),o={name:"CalculateEventDetail",components:{CalculateEventBaseInfo:n["a"],PageBreadcrumb:l["a"]},data:function(){return{titleList:[{name:"测算管理"},{name:"测算事件管理"},{name:"九月云贸贷男性客户核心规则拒绝率"}],versionValue:null,versionList:[{name:"版本1"}],isResultOpen:!0,isFilterOpen:!0,isDataListOpen:!0,tableOptionsResult:{emptyRender:{size:"small"},hidePager:!0,loading:!1,columns:[{title:"事件名称",field:"eventName"},{title:"事件编号",field:"associationMode"},{title:"描述",field:"rightData"},{title:"创建人",field:"submitUserName"}],data:[]},tableOptionsFilter:{emptyRender:{size:"small"},hidePager:!0,loading:!1,columns:[{title:"事件名称",field:"eventName"},{title:"事件编号",field:"associationMode"},{title:"描述",field:"rightData"},{title:"创建人",field:"submitUserName"}],data:[]},tableOptionsDatalist:{emptyRender:{size:"small"},hidePager:!0,loading:!1,columns:[{title:"事件名称",field:"eventName"},{title:"事件编号",field:"associationMode"},{title:"描述",field:"rightData"},{title:"创建人",field:"submitUserName"}],data:[]}}},methods:{versionComparison:function(){var e=this.$route.query.eventCode;this.$router.push({path:"/calculate/calculateEventVersion",query:{eventCode:e}})}}},c=o,r=(s("39a2c"),s("2877")),d=Object(r["a"])(c,a,i,!1,null,"057e4470",null);t["default"]=d.exports}}]);