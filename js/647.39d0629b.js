"use strict";(self["webpackChunkvue_ui"]=self["webpackChunkvue_ui"]||[]).push([[647],{6647:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var l=function(){var t=this,e=t._self._c;return e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"250"}},[e("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"150"}}),e("el-table-column",{attrs:{prop:"account",label:"姓名",width:"120"}}),e("el-table-column",{attrs:{prop:"password",label:"密码",width:"120"}}),e("el-table-column",{attrs:{prop:"permissions",label:"权限",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0==e.row.permissions?"普通用户":"")+" "+t._s(1==e.row.permissions?"管理员":"")+" "+t._s(2==e.row.permissions?"超级管理员":"")+" ")]}}])})],1)},s=[],r=a(4373),n={name:"UserTabView",data(){return{tableData:[]}},mounted(){r.A.get("http://93rf36tz6467.vicp.fun:15427/UserData").then((t=>{this.tableData=t.data.data}))}},i=n,u=a(1656),o=(0,u.A)(i,l,s,!1,null,null,null),p=o.exports}}]);
//# sourceMappingURL=647.39d0629b.js.map