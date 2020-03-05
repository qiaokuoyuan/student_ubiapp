(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/students/leanCourse/leanCourse"],{

/***/ 354:
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/main.js?{"page":"pages%2Fstudents%2FleanCourse%2FleanCourse"} ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _leanCourse = _interopRequireDefault(__webpack_require__(/*! ./pages/students/leanCourse/leanCourse.vue */ 355));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_leanCourse.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 355:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/students/leanCourse/leanCourse.vue ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leanCourse.vue?vue&type=template&id=6b4d0776& */ 356);
/* harmony import */ var _leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leanCourse.vue?vue&type=script&lang=js& */ 358);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _leanCourse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leanCourse.vue?vue&type=style&index=0&lang=css& */ 360);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__["render"],
  _leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/students/leanCourse/leanCourse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 356:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/students/leanCourse/leanCourse.vue?vue&type=template&id=6b4d0776& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./leanCourse.vue?vue&type=template&id=6b4d0776& */ 357);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_template_id_6b4d0776___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 357:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/students/leanCourse/leanCourse.vue?vue&type=template&id=6b4d0776& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l2 = _vm.__map(_vm.list_catalog, function(c1, c1i) {
    var l1 = _vm.__map(c1.children, function(c2, c2i) {
      var l0 = _vm.__map(c2._res, function(r, ri) {
        var m0 = _vm.downloadStatus(r)
        var m1 = _vm.downloadStatus(r)
        var m2 = _vm.downloadStatus(r)
        return {
          $orig: _vm.__get_orig(r),
          m0: m0,
          m1: m1,
          m2: m2
        }
      })

      return {
        $orig: _vm.__get_orig(c2),
        l0: l0
      }
    })

    return {
      $orig: _vm.__get_orig(c1),
      l1: l1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l2: l2
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 358:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/students/leanCourse/leanCourse.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./leanCourse.vue?vue&type=script&lang=js& */ 359);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 359:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/students/leanCourse/leanCourse.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























































var _request = _interopRequireDefault(__webpack_require__(/*! @/common/request.js */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uniNavBar = function uniNavBar() {return __webpack_require__.e(/*! import() | components/uni-nav-bar/uni-nav-bar */ "components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/components/uni-nav-bar/uni-nav-bar.vue */ 1224));};var uniSection = function uniSection() {return __webpack_require__.e(/*! import() | components/uni-section/uni-section */ "components/uni-section/uni-section").then(__webpack_require__.bind(null, /*! @/components/uni-section/uni-section.vue */ 395));};var uniCollapse = function uniCollapse() {return __webpack_require__.e(/*! import() | components/uni-collapse/uni-collapse */ "components/uni-collapse/uni-collapse").then(__webpack_require__.bind(null, /*! @/components/uni-collapse/uni-collapse.vue */ 1323));};var uniCollapseItem = function uniCollapseItem() {return __webpack_require__.e(/*! import() | components/uni-collapse-item/uni-collapse-item */ "components/uni-collapse-item/uni-collapse-item").then(__webpack_require__.bind(null, /*! @/components/uni-collapse-item/uni-collapse-item.vue */ 1330));};var uniTag = function uniTag() {return __webpack_require__.e(/*! import() | components/uni-tag/uni-tag */ "components/uni-tag/uni-tag").then(__webpack_require__.bind(null, /*! @/components/uni-tag/uni-tag.vue */ 1337));};var uniIcons = function uniIcons() {return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 402));};var _default =





{
  components: {
    uniNavBar: uniNavBar,
    uniSection: uniSection,
    uniCollapse: uniCollapse,
    uniCollapseItem: uniCollapseItem,
    uniTag: uniTag,
    uniIcons: uniIcons },

  data: function data() {
    return {
      // 新添加的下载任务集合
      add_task_ids: '',

      // 课程code
      courseCode: '',

      // 目录结构图
      list_catalog: [],

      // 当前一级节点点开的是第几个
      current_catalog_index_lv1: 0,
      current_catalog_index_lv2: 0 };

  },

  onLoad: function onLoad(o) {
    this.courseCode = o.courseCode;

    // 刷新目录
    this.reloadCatalog();
  },
  methods: {
    // 在线阅读
    readOnline: function readOnline(item) {
      // 如果是视频,跳转阅读页面
      if (item.ResourceName.indexOf('.mp4') >= 0) {
        var url = '../read/read';
        url += '?resType=video';
        url += '&resTitle=' + item.ResourceName;
        url += '&resUrl=' + item.Link;
        uni.navigateTo({
          url: url });

      } else if (item.ResourceName.indexOf('.pdf') >= 0 || item.ResourceName.indexOf('.doc') >= 0) {
        var _url = '../read/read';
        _url += "?resType=''";
        _url += '&resTitle=' + item.ResourceName;
        _url += '&resUrl=' + item.Link;
        uni.navigateTo({
          url: _url });

      }
    },

    // 阅读离线缓存
    readOffline: function readOffline(item) {
      // 跳转到阅读页面
      uni.navigateTo({
        url: "../read/read?isLocal=1&fileid=".concat(item.ResourceCode) });

    },

    // 在线阅读资源
    readResource: function readResource(item) {
      console.log('尝试阅读：', JSON.stringify(item));

      // 检查当前元素是否被下载过
      var _status = this.downloadStatus(item);
      console.log('_status：', _status);
      // 如果是未下载,在线阅读
      if ('未下载' == _status) {
        this.readOnline(item);
      }

      // 如果是未下载,在线阅读
      if ('已下载' == _status) {
        this.readOffline(item);
      }
    },
    // 由于微信小程序不支持将 表达式写在标签上,单独使用一个函数
    changeShowChildren: function changeShowChildren(item) {
      item.showChildren = !item.showChildren;
    },
    // 询问是否要下载一个资源
    askDownload: function askDownload(res) {
      console.log('enter askDownload');
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确认下载吗？',
        showCancel: true,
        success: function success(e) {
          if (e.confirm) {
            // 如果点击了确定按钮
            that.downloadResource(res);

            that.add_task_ids += ',' + res.ResourceCode;
          }
        } });

    },
    // 下载一个资源
    downloadResource: function downloadResource(res) {
      var that = this;

      console.log('开始下载==》', JSON.stringify(res));

      // 下载的链接地址
      var url = res.Link;

      // 文件id
      var fileid = res.ResourceCode;

      // 文件名
      var filename = res.ResourceName;

      // 当前文件下载进度
      var rate = 0;

      // 获取文件下载信息的计时器(先清空)
      var it = '';

      var downloadTask = uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode === 200) {
            console.log('下载成功');
            // 清除下载进度检查器
            clearInterval(it);

            // 将文件 用 saveFile 存储
            console.log('开始 save 到永久目录');
            uni.saveFile({
              tempFilePath: res.tempFilePath,
              success: function success(savedFilePath) {
                console.log('开始 save 到永久目录完成==>', savedFilePath);

                // 如果存储在 storage 中
                var download_task = uni.getStorageSync('download_task') || [];

                // 将下载任务标记为已下载

                var task_find = false;
                for (var i = 0; i < download_task.length; ++i) {
                  if (download_task[i].fileid == fileid) {
                    console.log(' save 设置100% 完成');
                    task_find = true;
                    download_task[i].rate = 100;
                    download_task[i].save_dir = savedFilePath;
                    download_task[i].is_downloaded = true;
                    break;
                  }
                }

                // 如过未找到任务,则将任务加入到队列,并取消计时器
                if (!task_find) {
                  clearInterval(it);
                  download_task.push({
                    filename: filename,
                    fileid: fileid,
                    rate: 100,
                    save_dir: savedFilePath,
                    is_downloaded: true });

                }

                uni.setStorageSync('download_task', download_task);
              } });

          }
        } });


      console.log('开始下载');
      // 将下载任务放入队列

      var download_task = uni.getStorageSync('download_task');
      download_task = download_task || [];

      // 先检查任务队列中有没有已经存在当前任务
      if (
      !download_task.find(function (e) {
        return e.fileid == fileid;
      }))
      {
        download_task.push({
          fileid: fileid,
          filename: filename,
          rate: 0,
          save_dir: '',
          is_downloaded: false });

        uni.setStorageSync('download_task', download_task);
        // 记录下载进度
        downloadTask.onProgressUpdate(function (r) {
          rate = r.progress;
        });

        // 定时检查下载进度,并将下载进度存放在 getApp 中
        it = setInterval(function () {
          console.log('rate：', rate);

          var task = uni.getStorageSync('download_task') || [];
          for (var i = 0; i < task.length; ++i) {
            if (task[i].fileid == fileid) {
              task[i].rate = rate;
              break;
            }
          }

          console.log('setStorageSync：', JSON.stringify(task));
          uni.setStorageSync('download_task', task);
        }, 2000);
      }
    },
    // 检查一个资源是否已经下载
    downloadStatus: function downloadStatus(res) {
      try {
        // 如过在 add_task_ids 中,直接判断为 下载中
        if (this.add_task_ids.indexOf(res.ResourceCode) >= 0) {
          return '下载中';
        } else {
          // 如过不在,从  getStorageSync 中找
          var task = uni.getStorageSync('download_task') || [];

          console.log('JSON task is ==>', task);
          var task_item = task.find(function (e) {
            return e.fileid == res.ResourceCode;
          });

          if (task_item) {
            // 如过找到task_item
            if (task_item.is_downloaded) {
              // 如过已经下载完成
              return '已下载';
            } else if (task_item.rate >= 0 && task_item.rate < 100) {
              // 如过是正在下载
              return '下载中';
            } else {
              // 其他情况返回未知
              return '未知';
            }
          } else {
            // 如过未找到task_item,返回未下载
            return '未下载';
          }
        }
      } catch (e) {
        // 异常返回异常
        return '异常' + e;
      }
    },
    // 获取一个章节的资源
    toggleShowResource: function toggleShowResource(item) {
      var that = this;

      if (item.showResource) {
        // 如果正在显示资源,则不显示资源
        item.showResource = false;
      } else {
        // 如果当前没有显示资源,刷新资源

        item.showResource = true;

        uni.showLoading({
          mask: true });


        _request.default.request({
          url: '/api/ReadOnline/GetAllDataV2',
          data: {
            courseCode: that.courseCode,
            catalogCode: item.id } }).

        then(function (r) {
          uni.hideLoading();

          r = that.fr(r);
          if (r.Code == 200) {
            var _modules = r.Data || [];
            var _res = [];
            _modules.forEach(function (m) {
              m.CoResourceView.forEach(function (r) {
                _res.push(r);
              });
            });
            item._res = _res;
          }
        });
      }
    },
    lgThis: function lgThis() {
      console.log(JSON.stringify(this.list_catalog));
    },

    // 返回上一级方法
    back: function back() {
      var that = this;
      uni.redirectTo({
        url: "../courseInfo/courseInfo?courseCode=".concat(that.courseCode) });

    },
    // 刷新课程目录
    reloadCatalog: function reloadCatalog() {
      var that = this;

      uni.showLoading({
        mask: true });


      _request.default.request({
        url: '/api/Catalog/GetCatalogListLv2?courseCode=' + that.courseCode }).
      then(function (r) {
        uni.hideLoading();

        r = that.fr(r);
        if (r.Code == 200) {
          // 返回值是数组形式,转换为层级结构（转换为树结构）

          var _catalog_list = r.Data;

          _catalog_list.forEach(function (e) {
            e._res = [];
            e._modules = [];
            e.showChildren = false;
            e.showResource = false;
          });

          var _catalog_tree = that.toTree(_catalog_list);

          that.list_catalog = _catalog_tree;
        }
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 360:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/students/leanCourse/leanCourse.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./leanCourse.vue?vue&type=style&index=0&lang=css& */ 361);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_leanCourse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 361:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/students/leanCourse/leanCourse.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[354,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/students/leanCourse/leanCourse.js.map