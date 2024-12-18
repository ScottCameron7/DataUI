"use strict";(self["webpackChunkvue_ui"]=self["webpackChunkvue_ui"]||[]).push([[685],{5685:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("el-row",{staticClass:"tac"},[e("el-col",{attrs:{span:12}},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},[e("el-submenu",{attrs:{index:"1"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-location"}),e("span",[t._v("数据配置")])]),e("el-menu-item-group",[e("el-menu-item",{attrs:{index:"1-0"},on:{click:function(e){return t.Home()}}},[t._v("首页")]),e("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.UserList()}}},[t._v("用户列表")]),e("el-menu-item",{attrs:{index:"1-3"},on:{click:function(e){return t.AddUserData()}}},[t._v("注册用户")])],1)],2),e("el-submenu",{attrs:{index:"2"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("文件操作")])]),e("el-menu-item-group",[e("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){return t.FileList()}}},[t._v("文件列表")]),e("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){return t.UpLoadFile()}}},[t._v("文件上传")])],1)],2),e("el-menu-item",{attrs:{index:"3",disabled:""}},[e("i",{staticClass:"el-icon-document"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),e("el-menu-item",{attrs:{index:"4"},on:{click:function(e){return t.ThisUserData()}}},[e("i",{staticClass:"el-icon-setting"}),t._v(" 我的用户 ")])],1)],1)],1)],1),e("el-drawer",{ref:"drawer",staticStyle:{"text-align":"center"},attrs:{title:"用户设置","before-close":t.handleCloses,visible:t.drawer,direction:"rtl","custom-class":"demo-drawer"},on:{"update:visible":function(e){t.drawer=e}}},[e("div",{staticClass:"demo-drawer__content"},[e("el-form",{attrs:{model:t.form}},[e("span",{staticStyle:{"text-align":"left"}},[t._v("账号:")]),e("el-input",{attrs:{type:"text",disabled:"true"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),e("br"),e("span",{staticStyle:{"text-align":"left"}},[t._v("密码:")]),e("el-input",{attrs:{type:"text"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("div",{staticClass:"demo-drawer__footer"},[e("el-button",{on:{click:t.cancelForms}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.UserDataR()}}},[t._v(t._s(t.loading?"提交中 ...":"确 定"))])],1),e("br"),e("br"),e("span",{staticStyle:{"text-align":"center"}},[t._v("修改头像")]),e("div",{staticClass:"demo-drawer__footer"},[e("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"http://93rf36tz6467.vicp.fun:15427/SetUserDataImg","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"auto-upload":!1,data:{account:t.account}}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")]),e("el-button",{attrs:{type:"primary",loading:this.loading},on:{click:function(e){return t.handleCloses()}}},[t._v(t._s(t.loading?"提交中 ...":"确 定"))])],1)],1)],1)]),e("el-container",[e("el-header",[e("img",{attrs:{src:"http://93rf36tz6467.vicp.fun:15427/1111.jpg",height:"80px"}}),e("div",{staticStyle:{float:"right"}},[e("div",[e("el-avatar",{attrs:{src:this.show,alt:this.img}}),e("el-row",{staticClass:"block-col-2",staticStyle:{float:"right"}},[e("el-col",{attrs:{span:12}},[e("el-dropdown",{on:{command:t.showSettion}},[e("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(this.account)),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{icon:"el-icon-plus",command:"1"}},[t._v("黄金糕")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus",command:"2"}},[t._v("狮子头")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus-outline",command:"3"}},[t._v("螺蛳粉")]),e("el-dropdown-item",{attrs:{icon:"el-icon-setting",command:"User"}},[t._v("用户设置")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-check",command:"4"}},[t._v("蚵仔煎")])],1)],1)],1)],1)],1)])]),e("el-main",[e("router-view")],1),e("el-footer")],1)],1)},o=[],i=(s(4114),s(4373)),n={name:"NavMenuView",components:{},data(){return{drawer:!1,dialog:!1,loading:!1,account:window.sessionStorage["account"],img:"",show:"http://93rf36tz6467.vicp.fun:15427/getThisImg?account="+window.sessionStorage["account"],form:{password:window.sessionStorage["password"]}}},methods:{UpLoadFile(){this.$router.push({path:"/UpLoad"})},Home(){this.$router.push({path:"/NavMenuView"})},UserList(){this.$router.push({path:"/UserData"})},FileList(){this.$router.push({path:"/FileData"})},AddUserData(){this.$router.push({path:"/AddUserData"})},ThisUserData(){this.$router.push({path:"/ThisUserDataUI"})},handleOpen(t,e){console.log(t,e)},handleClose(t,e){console.log(t,e)},showSettion(t){1==t||2==t||3==t?console.log(t):"User"==t?this.drawer=!0:5==t&&console.log(t)},handleCloses(){this.loading=!0,this.submitUpload(),this.cancelForm()},UserDataR(){i.A.get("http://93rf36tz6467.vicp.fun:15427/SetUserData?account="+window.sessionStorage["account"]+"&password="+this.form.password).then((t=>{t.data?this.$message({message:"修改成功",type:"success"}):this.$message.error("修改失败"),this.drawer=!1}))},cancelForm(){this.loading=!1,this.drawer=!1},cancelForms(){this.drawer=!1},submitUpload(){this.$refs.upload.submit(),this.$message({message:"修改成功",type:"success"})},gerImgData(){i.A.get("http://93rf36tz6467.vicp.fun:15427/getThisImg?account="+window.sessionStorage["account"]).then((t=>{this.img=t.data}))}},mounted(){null==window.sessionStorage["account"]?this.$router.push({path:"/"}):this.gerImgData()}},r=n,l=s(1656),c=(0,l.A)(r,a,o,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=685.01ef573a.js.map