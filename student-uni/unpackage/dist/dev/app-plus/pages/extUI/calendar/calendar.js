"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 326);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 3).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 4).default || __webpack_require__(/*! uni-stat-config */ 4);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),

/***/ 198:
/*!********************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-section/uni-section.vue ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-section.vue?vue&type=template&id=0b6e5cfb&scoped=true& */ 199);
/* harmony import */ var _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-section.vue?vue&type=script&lang=js& */ 201);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=0b6e5cfb&scoped=true&lang=css& */ 203).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=0b6e5cfb&scoped=true&lang=css& */ 203).default)
            }

}

/* normalize component */

var component = Object(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b6e5cfb",
  "1ad3ee1e",
  false,
  _uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-section/uni-section.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 199:
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-section/uni-section.vue?vue&type=template&id=0b6e5cfb&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=template&id=0b6e5cfb&scoped=true& */ 200);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_0b6e5cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25120200103005","_inBundle":false,"_integrity":"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz","_shasum":"a77a63481f36474f3e86686868051219d1bb12df","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"6be187a3dfe15f95dd6146d9fec08e1f81100987","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25120200103005"};

/***/ }),

/***/ 20:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 200:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-section/uni-section.vue?vue&type=template&id=0b6e5cfb&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: ["uni-section"] },
    [
      _vm.type
        ? _c("view", { staticClass: ["uni-section__head"] }, [
            _c("view", {
              staticClass: ["uni-section__head-tag"],
              class: _vm.type
            })
          ])
        : _vm._e(),
      _c("view", { staticClass: ["uni-section__content"] }, [
        _c(
          "u-text",
          {
            staticClass: ["uni-section__content-title"],
            class: { distraction: !_vm.subTitle }
          },
          [_vm._v(_vm._s(_vm.title))]
        ),
        _vm.subTitle
          ? _c("u-text", { staticClass: ["uni-section__content-sub"] }, [
              _vm._v(_vm._s(_vm.subTitle))
            ])
          : _vm._e()
      ]),
      _vm._t("default")
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 201:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=script&lang=js& */ 202);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 202:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Section 标题栏
 * @description 标题栏
 * @property {String} type = [line|circle] 标题装饰类型
 * 	@value line 竖线
 * 	@value circle 圆形
 * @property {String} title 主标题
 * @property {String} subTitle 副标题
 */var _default =

{
  name: 'UniTitle',
  props: {
    type: {
      type: String,
      default: '' },

    title: {
      type: String,
      default: '' },

    subTitle: {
      type: String,
      default: '' } },


  data: function data() {
    return {};
  },
  watch: {
    title: function title(newVal) {
      if (uni.report && newVal !== '') {
        uni.report('title', newVal);
      }
    } },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),

/***/ 203:
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-section/uni-section.vue?vue&type=style&index=0&id=0b6e5cfb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_0b6e5cfb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=style&index=0&id=0b6e5cfb&scoped=true&lang=css& */ 204);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_0b6e5cfb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_0b6e5cfb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_0b6e5cfb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_0b6e5cfb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_0b6e5cfb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 204:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-section/uni-section.vue?vue&type=style&index=0&id=0b6e5cfb&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-section": {
    "position": "relative",
    "marginTop": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "50",
    "backgroundColor": "#f8f8f8",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "0.5",
    "fontWeight": "normal"
  },
  "uni-section__head": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "10"
  },
  "line": {
    "height": "15",
    "backgroundColor": "#c0c0c0",
    "borderRadius": "5",
    "width": "3"
  },
  "circle": {
    "width": "8",
    "height": "8",
    "borderTopRightRadius": "50",
    "borderTopLeftRadius": "50",
    "borderBottomLeftRadius": "50",
    "borderBottomRightRadius": "50",
    "backgroundColor": "#c0c0c0"
  },
  "uni-section__content": {
    "flex": 1,
    "color": "#333333"
  },
  "uni-section__content-title": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "distraction": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-section__content-sub": {
    "fontSize": "24rpx",
    "color": "#999999"
  }
}

/***/ }),

/***/ 3:
/*!*********************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages.json?{"type":"style"} ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 326:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/main.js?{"page":"pages%2FextUI%2Fcalendar%2Fcalendar"} ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/extUI/calendar/calendar.nvue?mpType=page */ 327);

        
        
        
        _pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/extUI/calendar/calendar'
        _pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 327:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/extUI/calendar/calendar.nvue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.nvue?vue&type=template&id=796c1f67&mpType=page */ 328);
/* harmony import */ var _calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.nvue?vue&type=script&lang=js&mpType=page */ 330);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./calendar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 348).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./calendar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 348).default)
            }

}

/* normalize component */

var component = Object(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "7fc48f9e",
  false,
  _calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/extUI/calendar/calendar.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 328:
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/extUI/calendar/calendar.nvue?vue&type=template&id=796c1f67&mpType=page ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./calendar.nvue?vue&type=template&id=796c1f67&mpType=page */ 329);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_796c1f67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 329:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/extUI/calendar/calendar.nvue?vue&type=template&id=796c1f67&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _vm.showCalendar
        ? _c(
            "view",
            { staticClass: ["calendar-content"] },
            [
              _c("u-text", { staticClass: ["example-info"] }, [
                _vm._v(
                  "日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等。"
                )
              ]),
              _c("uni-section", { attrs: { title: "插入模式", type: "line" } }),
              _c(
                "view",
                [
                  _c("uni-calendar", {
                    attrs: { selected: _vm.info.selected, showMonth: false },
                    on: { change: _vm.change, monthSwitch: _vm.monthSwitch }
                  })
                ],
                1
              ),
              _c("uni-section", { attrs: { title: "弹出模式", type: "line" } }),
              _c(
                "view",
                { staticClass: ["example-body"] },
                [
                  _c(
                    "button",
                    {
                      staticClass: ["calendar-button"],
                      attrs: { type: "button" },
                      on: { click: _vm.open }
                    },
                    [_vm._v("打开日历")]
                  )
                ],
                1
              ),
              _c("uni-calendar", {
                ref: "calendar",
                attrs: {
                  date: _vm.info.date,
                  insert: _vm.info.insert,
                  lunar: _vm.info.lunar,
                  startDate: _vm.info.startDate,
                  endDate: _vm.info.endDate,
                  range: _vm.info.range
                },
                on: { confirm: _vm.confirm }
              })
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 330:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/extUI/calendar/calendar.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./calendar.nvue?vue&type=script&lang=js&mpType=page */ 331);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 331:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/extUI/calendar/calendar.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















var _uniSection = _interopRequireDefault(__webpack_require__(/*! @/components/uni-section/uni-section.vue */ 198));
var _uniCalendar = _interopRequireDefault(__webpack_require__(/*! @/components/uni-calendar/uni-calendar.vue */ 332));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { uniSection: _uniSection.default, uniCalendar: _uniCalendar.default }, data: function data() {return { showCalendar: false, info: { date: '2019-08-15', startDate: '2019-06-15', endDate: '2019-010-15', lunar: true, range: true, insert: false, selected: [] } };


  },
  onReady: function onReady() {var _this = this;
    this.$nextTick(function () {
      _this.showCalendar = true;
    });
    // TODO 模拟请求异步同步数据
    setTimeout(function () {
      _this.info.selected = [{
        date: '2019-08-20',
        info: '打卡' },

      {
        date: '2019-08-21',
        info: '签到',
        data: {
          custom: '自定义信息',
          name: '自定义消息头' } },


      {
        date: '2019-08-22',
        info: '已打卡' }];


    }, 500);
  },
  methods: {
    open: function open() {
      this.$refs.calendar.open();
    },
    change: function change(e) {
      console.log(__f__('change 返回:', e, " at pages\\extUI\\calendar\\calendar.nvue:69"));
      // 模拟动态打卡
      if (this.info.selected.length > 5) return;
      this.info.selected.push({
        date: e.fulldate,
        info: '打卡' });

    },
    confirm: function confirm(e) {
      console.log(__f__('confirm 返回:', e, " at pages\\extUI\\calendar\\calendar.nvue:78"));
    },
    monthSwitch: function monthSwitch(e) {
      console.log(__f__('monthSwitchs 返回:', e, " at pages\\extUI\\calendar\\calendar.nvue:81"));
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 51)["default"]))

/***/ }),

/***/ 332:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar.vue ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-calendar.vue?vue&type=template&id=02f88889&scoped=true& */ 333);
/* harmony import */ var _uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-calendar.vue?vue&type=script&lang=js& */ 335);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-calendar.vue?vue&type=style&index=0&id=02f88889&scoped=true&lang=css& */ 346).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-calendar.vue?vue&type=style&index=0&id=02f88889&scoped=true&lang=css& */ 346).default)
            }

}

/* normalize component */

var component = Object(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02f88889",
  "6f75a3a6",
  false,
  _uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 333:
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar.vue?vue&type=template&id=02f88889&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar.vue?vue&type=template&id=02f88889&scoped=true& */ 334);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_02f88889_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 334:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar.vue?vue&type=template&id=02f88889&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: ["uni-calendar"], on: { touchmove: _vm.clean } },
    [
      !_vm.insert && _vm.show
        ? _c("view", {
            staticClass: ["uni-calendar__mask"],
            class: { "uni-calendar--mask-show": _vm.aniMaskShow },
            on: { click: _vm.clean }
          })
        : _vm._e(),
      _vm.insert || _vm.show
        ? _c(
            "view",
            {
              staticClass: ["uni-calendar__content"],
              class: {
                "uni-calendar--fixed": !_vm.insert,
                "uni-calendar--ani-show": _vm.aniMaskShow
              }
            },
            [
              !_vm.insert
                ? _c(
                    "view",
                    {
                      staticClass: [
                        "uni-calendar__header",
                        "uni-calendar--fixed-top"
                      ]
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: ["uni-calendar__header-btn-box"],
                          on: { click: _vm.close }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: [
                                "uni-calendar__header-text",
                                "uni-calendar--fixed-width"
                              ]
                            },
                            [_vm._v("取消")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["uni-calendar__header-btn-box"],
                          on: { click: _vm.confirm }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: [
                                "uni-calendar__header-text",
                                "uni-calendar--fixed-width"
                              ]
                            },
                            [_vm._v("确定")]
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _c("view", { staticClass: ["uni-calendar__header"] }, [
                _c(
                  "view",
                  {
                    staticClass: ["uni-calendar__header-btn-box"],
                    on: { click: _vm.pre }
                  },
                  [
                    _c("view", {
                      staticClass: [
                        "uni-calendar__header-btn",
                        "uni-calendar--left"
                      ]
                    })
                  ]
                ),
                _c("u-text", { staticClass: ["uni-calendar__header-text"] }, [
                  _vm._v(
                    _vm._s(
                      (_vm.nowDate.year || "") +
                        "年" +
                        (_vm.nowDate.month || "") +
                        "月"
                    )
                  )
                ]),
                _c(
                  "view",
                  {
                    staticClass: ["uni-calendar__header-btn-box"],
                    on: { click: _vm.next }
                  },
                  [
                    _c("view", {
                      staticClass: [
                        "uni-calendar__header-btn",
                        "uni-calendar--right"
                      ]
                    })
                  ]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["uni-calendar__backtoday"],
                    on: { click: _vm.backtoday }
                  },
                  [_vm._v("回到今天")]
                )
              ]),
              _c(
                "view",
                { staticClass: ["uni-calendar__box"] },
                [
                  _vm.showMonth
                    ? _c("view", { staticClass: ["uni-calendar__box-bg"] }, [
                        _c(
                          "u-text",
                          { staticClass: ["uni-calendar__box-bg-text"] },
                          [_vm._v(_vm._s(_vm.nowDate.month))]
                        )
                      ])
                    : _vm._e(),
                  _vm._m(0),
                  _vm._l(_vm.weeks, function(item, weekIndex) {
                    return _c(
                      "view",
                      { key: weekIndex, staticClass: ["uni-calendar__weeks"] },
                      _vm._l(item, function(weeks, weeksIndex) {
                        return _c(
                          "view",
                          {
                            key: weeksIndex,
                            staticClass: ["uni-calendar__weeks-item"]
                          },
                          [
                            _c("uni-calendar-item", {
                              attrs: {
                                weeks: weeks,
                                calendar: _vm.calendar,
                                selected: _vm.selected,
                                lunar: _vm.lunar
                              },
                              on: { change: _vm.choiceDate }
                            })
                          ],
                          1
                        )
                      }),
                      0
                    )
                  })
                ],
                2
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["uni-calendar__weeks"] }, [
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("日")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("一")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("二")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("三")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("四")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("五")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("六")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ 335:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar.vue?vue&type=script&lang=js& */ 336);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 336:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























































var _util = _interopRequireDefault(__webpack_require__(/*! ./util.js */ 337));
var _uniCalendarItem = _interopRequireDefault(__webpack_require__(/*! ./uni-calendar-item.vue */ 339));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * Calendar 日历
 * @description 日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
 * @tutorial https://ext.dcloud.net.cn/plugin?id=56
 * @property {String} date 自定义当前时间，默认为今天
 * @property {Boolean} lunar 显示农历
 * @property {String} startDate 日期选择范围-开始日期
 * @property {String} endDate 日期选择范围-结束日期
 * @property {Boolean} range 范围选择
 * @property {Boolean} insert = [true|false] 插入模式,默认为false
 * 	@value true 弹窗模式
 * 	@value false 插入模式
 * @property {Array} selected 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]
 * @property {Boolean} showMonth 是否选择月份为背景
 * @event {Function} change 日期改变，`insert :ture` 时生效
 * @event {Function} confirm 确认选择`insert :false` 时生效
 * @event {Function} monthSwitch 切换月份时触发
 * @example <uni-calendar :insert="true":lunar="true" :start-date="'2019-3-2'":end-date="'2019-5-20'"@change="change" />
 */var _default2 = { components: { uniCalendarItem: _uniCalendarItem.default }, props: { date: { type: String, default: '' }, selected: { type: Array, default: function _default() {return [];} }, lunar: { type: Boolean, default: false }, startDate: { type: String, default: '' }, endDate: { type: String, default: '' }, range: { type: Boolean, default: false }, insert: { type: Boolean, default: true }, showMonth: { type: Boolean, default: true } }, data: function data() {return { show: false, weeks: [], calendar: {}, nowDate: '', aniMaskShow: false };}, watch: { selected: function selected(newVal) {this.cale.setSelectInfo(this.nowDate.fullDate, newVal);this.weeks = this.cale.weeks;} }, created: function created() {// 获取日历方法实例
    this.cale = new _util.default({ date: this.date,
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range });

    this.init(this.cale.date.fullDate);
  },
  methods: {
    // 取消穿透
    clean: function clean() {},
    init: function init(date) {
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(date);
    },
    open: function open() {var _this = this;
      this.show = true;
      this.$nextTick(function () {
        setTimeout(function () {
          _this.aniMaskShow = true;
        }, 50);
      });
    },
    close: function close() {var _this2 = this;
      this.aniMaskShow = false;
      this.$nextTick(function () {
        setTimeout(function () {
          _this2.show = false;
        }, 300);
      });
    },
    confirm: function confirm() {
      this.setEmit('confirm');
      this.close();
    },
    change: function change() {
      if (!this.insert) return;
      this.setEmit('change');
    },
    monthSwitch: function monthSwitch() {var _this$nowDate =



      this.nowDate,year = _this$nowDate.year,month = _this$nowDate.month;
      this.$emit('monthSwitch', {
        year: year,
        month: Number(month) });

    },
    setEmit: function setEmit(name) {var _this$calendar =







      this.calendar,year = _this$calendar.year,month = _this$calendar.month,date = _this$calendar.date,fullDate = _this$calendar.fullDate,lunar = _this$calendar.lunar,extraInfo = _this$calendar.extraInfo;
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year: year,
        month: month,
        date: date,
        fulldate: fullDate,
        lunar: lunar,
        extraInfo: extraInfo || {} });

    },
    choiceDate: function choiceDate(weeks) {
      if (weeks.disable) return;
      this.calendar = weeks;
      // 设置多选
      this.cale.setMultiple(this.calendar.fullDate);
      this.weeks = this.cale.weeks;
      this.change();
    },
    backtoday: function backtoday() {
      this.cale.setDate(this.date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(this.date);
      this.change();
    },
    pre: function pre() {
      var preDate = this.cale.getDate(this.nowDate.fullDate, -1, 'month').fullDate;
      this.setDate(preDate);
      this.monthSwitch();

    },
    next: function next() {
      var nextDate = this.cale.getDate(this.nowDate.fullDate, +1, 'month').fullDate;
      this.setDate(nextDate);
      this.monthSwitch();
    },
    setDate: function setDate(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.cale.getInfo(date);
    } } };exports.default = _default2;

/***/ }),

/***/ 337:
/*!*************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/util.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _calendar = _interopRequireDefault(__webpack_require__(/*! ./calendar.js */ 338));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Calendar = /*#__PURE__*/function () {
  function Calendar()





  {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},date = _ref.date,selected = _ref.selected,startDate = _ref.startDate,endDate = _ref.endDate,range = _ref.range;_classCallCheck(this, Calendar);
    // 当前日期
    this.date = this.getDate(date); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 范围开始
    this.startDate = startDate;
    // 范围结束
    this.endDate = endDate;
    this.range = range;
    // 多选状态
    this.multipleStatus = {
      before: '',
      after: '',
      data: []

      // 每周日期
    };this.weeks = {};

    this._getWeek(this.date.fullDate);
  }

  /**
     * 获取任意时间
     */_createClass(Calendar, [{ key: "getDate", value: function getDate(
    date) {var AddDayCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
      if (!date) {
        date = new Date();
      }
      if (typeof date !== 'object') {
        date = date.replace(/-/g, '/');
      }
      var dd = new Date(date);
      switch (str) {
        case 'day':
          dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
          break;
        case 'month':
          if (dd.getDate() === 31) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            dd.setMonth(dd.getMonth() + AddDayCount); // 获取AddDayCount天后的日期
          }
          break;
        case 'year':
          dd.setFullYear(dd.getFullYear() + AddDayCount); // 获取AddDayCount天后的日期
          break;}

      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
      var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
      return {
        fullDate: y + '-' + m + '-' + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay() };

    }


    /**
       * 获取上月剩余天数
       */ }, { key: "_getLastMonthDays", value: function _getLastMonthDays(
    firstDay, full) {
      var dateArr = [];
      for (var i = firstDay; i > 0; i--) {
        var beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true });

      }
      return dateArr;
    }
    /**
       * 获取本月天数
       */ }, { key: "_currentMonthDys", value: function _currentMonthDys(
    dateData, full) {var _this = this;
      var dateArr = [];
      var fullDate = this.date.fullDate;var _loop = function _loop(
      i) {
        var isinfo = false;
        var nowDate = full.year + '-' + (full.month < 10 ?
        full.month : full.month) + '-' + (i < 10 ?
        '0' + i : i);
        // 是否今天
        var isDay = fullDate === nowDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          var dateCompBefore = _this.dateCompare(_this.startDate, fullDate);
          disableBefore = _this.dateCompare(dateCompBefore ? _this.startDate : fullDate, nowDate);
        }

        if (_this.endDate) {
          var dateCompAfter = _this.dateCompare(fullDate, _this.endDate);
          disableAfter = _this.dateCompare(nowDate, dateCompAfter ? _this.endDate : fullDate);
        }

        var multiples = _this.multipleStatus.data;
        var checked = false;
        var multiplesStatus = -1;
        if (_this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex(function (item) {
              return _this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }

        var data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: _this.range ? checked : false,
          month: full.month,
          lunar: _this.getlunar(full.year, full.month, i),
          disable: !disableBefore || !disableAfter,
          isDay: isDay };

        if (info) {
          data.extraInfo = info;
        }

        dateArr.push(data);};for (var i = 1; i <= dateData; i++) {_loop(i);
      }
      return dateArr;
    }
    /**
       * 获取下月天数
       */ }, { key: "_getNextMonthDays", value: function _getNextMonthDays(
    surplus, full) {
      var dateArr = [];
      for (var i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i),
          disable: true });

      }
      return dateArr;
    }
    /**
       * 设置日期
       * @param {Object} date
       */ }, { key: "setDate", value: function setDate(
    date) {
      this._getWeek(date);
    }
    /**
       * 获取当前日期详情
       * @param {Object} date
       */ }, { key: "getInfo", value: function getInfo(
    date) {var _this2 = this;
      if (!date) {
        date = new Date();
      }
      var dateInfo = this.canlender.find(function (item) {return item.fullDate === _this2.getDate(date).fullDate;});
      return dateInfo;
    }

    /**
       * 比较时间大小
       */ }, { key: "dateCompare", value: function dateCompare(
    startDate, endDate) {
      // 计算截止时间
      startDate = new Date(startDate.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      endDate = new Date(endDate.replace('-', '/').replace('-', '/'));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }

    /**
       * 比较时间是否相等
       */ }, { key: "dateEqual", value: function dateEqual(
    before, after) {
      // 计算截止时间
      before = new Date(before.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      after = new Date(after.replace('-', '/').replace('-', '/'));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }


    /**
       * 获取日期范围内所有日期
       * @param {Object} begin
       * @param {Object} end
       */ }, { key: "geDateAll", value: function geDateAll(
    begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
       * 计算阴历日期显示
       */ }, { key: "getlunar", value: function getlunar(
    year, month, date) {
      return _calendar.default.solar2lunar(year, month, date);
    }
    /**
       * 设置打点
       */ }, { key: "setSelectInfo", value: function setSelectInfo(
    data, value) {
      this.selected = value;
      this._getWeek(data);
    }

    /**
       *  获取多选状态
       */ }, { key: "setMultiple", value: function setMultiple(
    fullDate) {var _this$multipleStatus =



      this.multipleStatus,before = _this$multipleStatus.before,after = _this$multipleStatus.after;
      if (!this.range) return;
      if (before && after) {
        this.multipleStatus.before = '';
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
        this._getWeek(fullDate);
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this._getWeek(fullDate);
        }
      }
    }

    /**
       * 获取每周数据
       * @param {Object} dateData
       */ }, { key: "_getWeek", value: function _getWeek(
    dateData) {var _this$getDate =






      this.getDate(dateData),fullDate = _this$getDate.fullDate,year = _this$getDate.year,month = _this$getDate.month,date = _this$getDate.date,day = _this$getDate.day;
      var firstDay = new Date(year, month - 1, 1).getDay();
      var currentDay = new Date(year, month, 0).getDate();
      var dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)), // 上个月末尾几天
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)), // 本月天数
        nextMonthDays: [], // 下个月开始几天
        weeks: [] };

      var canlender = [];
      var surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      var weeks = {};
      // 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
      for (var i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }

    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  }]);return Calendar;}();var _default =


Calendar;exports.default = _default;

/***/ }),

/***/ 338:
/*!*****************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/calendar.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                     * @1900-2100区间内的公历、农历互转
                                                                                                     * @charset UTF-8
                                                                                                     * @github  https://github.com/jjonline/calendar.js
                                                                                                     * @Author  Jea杨(JJonline@JJonline.Cn)
                                                                                                     * @Time    2014-7-21
                                                                                                     * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
                                                                                                     * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
                                                                                                     * @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
                                                                                                     * @Version 1.0.3
                                                                                                     * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
                                                                                                     * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
                                                                                                     */
/* eslint-disable */
var calendar = {

  /**
                     * 农历1900-2100的润大小信息表
                     * @Array Of Property
                     * @return Hex
                     */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
  0x0d520], // 2100

  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
                                                                    * 天干地支之天干速查表
                                                                    * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
                                                                    * @return Cn string
                                                                    */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],

  /**
                                                                                                                 * 天干地支之地支速查表
                                                                                                                 * @Array Of Property
                                                                                                                 * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
                                                                                                                 * @return Cn string
                                                                                                                 */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],

  /**
                                                                                                                                     * 天干地支之地支速查表<=>生肖
                                                                                                                                     * @Array Of Property
                                                                                                                                     * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
                                                                                                                                     * @return Cn string
                                                                                                                                     */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],

  /**
                                                                                                                                         * 24节气速查表
                                                                                                                                         * @Array Of Property
                                                                                                                                         * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
                                                                                                                                         * @return Cn string
                                                                                                                                         */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],

  /**
                                                                                                                                                                                                                                                                                                                                                                                                                   * 1900-2100各年的24节气日期速查表
                                                                                                                                                                                                                                                                                                                                                                                                                   * @Array Of Property
                                                                                                                                                                                                                                                                                                                                                                                                                   * @return 0x string For splice
                                                                                                                                                                                                                                                                                                                                                                                                                   */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
  '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
  '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
  '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],

  /**
                                                                                                             * 数字转中文速查表
                                                                                                             * @Array Of Property
                                                                                                             * @trans ['日','一','二','三','四','五','六','七','八','九','十']
                                                                                                             * @return Cn string
                                                                                                             */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],

  /**
                                                                                                                             * 日期转农历称呼速查表
                                                                                                                             * @Array Of Property
                                                                                                                             * @trans ['初','十','廿','卅']
                                                                                                                             * @return Cn string
                                                                                                                             */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],

  /**
                                                       * 月份转农历称呼速查表
                                                       * @Array Of Property
                                                       * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
                                                       * @return Cn string
                                                       */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],

  /**
                                                                                                                                       * 返回农历y年一整年的总天数
                                                                                                                                       * @param lunar Year
                                                                                                                                       * @return Number
                                                                                                                                       * @eg:var count = calendar.lYearDays(1987) ;//count=387
                                                                                                                                       */
  lYearDays: function lYearDays(y) {
    var i;var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {sum += this.lunarInfo[y - 1900] & i ? 1 : 0;}
    return sum + this.leapDays(y);
  },

  /**
         * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
         * @param lunar Year
         * @return Number (0-12)
         * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
         */
  leapMonth: function leapMonth(y) {// 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },

  /**
         * 返回农历y年闰月的天数 若该年没有闰月则返回0
         * @param lunar Year
         * @return Number (0、29、30)
         * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
         */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },

  /**
         * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
         * @param lunar Year
         * @return Number (-1、29、30)
         * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
         */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },

  /**
         * 返回公历(!)y年m月的天数
         * @param solar Year
         * @return Number (-1、28、29、30、31)
         * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
         */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {// 2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },

  /**
        * 农历年份转换为干支纪年
        * @param  lYear 农历年的年份数
        * @return Cn string
        */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; // 如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; // 如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },

  /**
        * 公历月、日判断所属星座
        * @param  cMonth [description]
        * @param  cDay [description]
        * @return Cn string
        */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
         * 传入offset偏移量返回干支
         * @param offset 相对甲子的偏移量
         * @return Cn string
         */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },

  /**
         * 传入公历(!)y年获得该年第n个节气的公历日期
         * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
         * @return day Number
         * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
         */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {return -1;}
    if (n < 1 || n > 24) {return -1;}
    var _table = this.sTermInfo[y - 1900];
    var _info = [
    parseInt('0x' + _table.substr(0, 5)).toString(),
    parseInt('0x' + _table.substr(5, 5)).toString(),
    parseInt('0x' + _table.substr(10, 5)).toString(),
    parseInt('0x' + _table.substr(15, 5)).toString(),
    parseInt('0x' + _table.substr(20, 5)).toString(),
    parseInt('0x' + _table.substr(25, 5)).toString()];

    var _calday = [
    _info[0].substr(0, 1),
    _info[0].substr(1, 2),
    _info[0].substr(3, 1),
    _info[0].substr(4, 2),

    _info[1].substr(0, 1),
    _info[1].substr(1, 2),
    _info[1].substr(3, 1),
    _info[1].substr(4, 2),

    _info[2].substr(0, 1),
    _info[2].substr(1, 2),
    _info[2].substr(3, 1),
    _info[2].substr(4, 2),

    _info[3].substr(0, 1),
    _info[3].substr(1, 2),
    _info[3].substr(3, 1),
    _info[3].substr(4, 2),

    _info[4].substr(0, 1),
    _info[4].substr(1, 2),
    _info[4].substr(3, 1),
    _info[4].substr(4, 2),

    _info[5].substr(0, 1),
    _info[5].substr(1, 2),
    _info[5].substr(3, 1),
    _info[5].substr(4, 2)];

    return parseInt(_calday[n - 1]);
  },

  /**
         * 传入农历数字月份返回汉语通俗表示法
         * @param lunar month
         * @return Cn string
         * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
         */
  toChinaMonth: function toChinaMonth(m) {// 月 => \u6708
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字
    return s;
  },

  /**
         * 传入农历日期数字返回汉字表示法
         * @param lunar day
         * @return Cn string
         * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
         */
  toChinaDay: function toChinaDay(d) {// 日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";break;
      case 20:
        s = "\u4E8C\u5341";break;
        break;
      case 30:
        s = "\u4E09\u5341";break;
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];}

    return s;
  },

  /**
         * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
         * @param y year
         * @return Cn string
         * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
         */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },

  /**
         * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
         * @param y  solar year
         * @param m  solar month
         * @param d  solar day
         * @return JSON object
         * @eg:console.log(calendar.solar2lunar(1987,11,01));
         */
  solar2lunar: function solar2lunar(y, m, d) {// 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    // 公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    // 未传参  获得当天
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;var leap = 0;var temp = 0;
    // 修正ymd参数
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;i--;
    }

    // 是否今天
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    // 星期几
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    // 农历年
    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月
    var isLeap = false;

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap == true && i == leap + 1) {isLeap = false;}
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;--i;
      }
    }
    if (offset < 0) {
      offset += temp;--i;
    }
    // 农历月
    var month = i;
    // 农历日
    var day = offset + 1;
    // 天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    // 传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    // 该日期所属的星座
    var astro = this.toAstro(m, d);

    return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': this.getAnimal(year), 'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month), 'IDayCn': this.toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': "\u661F\u671F" + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro };
  },

  /**
         * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
         * @param y  lunar year
         * @param m  lunar month
         * @param d  lunar day
         * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
         * @return JSON object
         * @eg:console.log(calendar.lunar2solar(1987,9,10));
         */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {// 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset = 0;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {return -1;} // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {return -1;} // 超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    // bugFix 2016-9-25
    // if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {return -1;} // 参数合法性效验

    // 计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {// 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    // 转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {offset += day;}
    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();

    return this.solar2lunar(cY, cM, cD);
  } };var _default =


calendar;exports.default = _default;

/***/ }),

/***/ 339:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar-item.vue ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-calendar-item.vue?vue&type=template&id=0b612807&scoped=true& */ 340);
/* harmony import */ var _uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-calendar-item.vue?vue&type=script&lang=js& */ 342);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-calendar-item.vue?vue&type=style&index=0&id=0b612807&scoped=true&lang=css& */ 344).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-calendar-item.vue?vue&type=style&index=0&id=0b612807&scoped=true&lang=css& */ 344).default)
            }

}

/* normalize component */

var component = Object(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b612807",
  "2959770a",
  false,
  _uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 340:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar-item.vue?vue&type=template&id=0b612807&scoped=true& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar-item.vue?vue&type=template&id=0b612807&scoped=true& */ 341);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_0b612807_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 341:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar-item.vue?vue&type=template&id=0b612807&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    {
      staticClass: ["uni-calendar-item__weeks-box"],
      class: {
        "uni-calendar-item--disable": _vm.weeks.disable,
        "uni-calendar-item--isDay":
          _vm.calendar.fullDate === _vm.weeks.fullDate && _vm.weeks.isDay,
        "uni-calendar-item--checked":
          _vm.calendar.fullDate === _vm.weeks.fullDate && !_vm.weeks.isDay,
        "uni-calendar-item--multiple": _vm.weeks.multiple
      },
      on: {
        click: function($event) {
          _vm.choiceDate(_vm.weeks)
        }
      }
    },
    [
      _c("view", { staticClass: ["uni-calendar-item__weeks-box-item"] }, [
        _vm.selected && _vm.weeks.extraInfo
          ? _c("u-text", {
              staticClass: ["uni-calendar-item__weeks-box-circle"]
            })
          : _vm._e(),
        _c(
          "u-text",
          {
            staticClass: ["uni-calendar-item__weeks-box-text"],
            class: {
              "uni-calendar-item--isDay-text": _vm.weeks.isDay,
              "uni-calendar-item--isDay":
                _vm.calendar.fullDate === _vm.weeks.fullDate && _vm.weeks.isDay,
              "uni-calendar-item--checked":
                _vm.calendar.fullDate === _vm.weeks.fullDate &&
                !_vm.weeks.isDay,
              "uni-calendar-item--multiple": _vm.weeks.multiple,
              "uni-calendar-item--disable": _vm.weeks.disable
            }
          },
          [_vm._v(_vm._s(_vm.weeks.date))]
        ),
        !_vm.lunar && !_vm.weeks.extraInfo && _vm.weeks.isDay
          ? _c(
              "u-text",
              {
                staticClass: ["uni-calendar-item__weeks-lunar-text"],
                class: {
                  "uni-calendar-item--isDay-text": _vm.weeks.isDay,
                  "uni-calendar-item--isDay":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    _vm.weeks.isDay,
                  "uni-calendar-item--checked":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    !_vm.weeks.isDay,
                  "uni-calendar-item--multiple": _vm.weeks.multiple
                }
              },
              [_vm._v("今天")]
            )
          : _vm._e(),
        _vm.lunar && !_vm.weeks.extraInfo
          ? _c(
              "u-text",
              {
                staticClass: ["uni-calendar-item__weeks-lunar-text"],
                class: {
                  "uni-calendar-item--isDay-text": _vm.weeks.isDay,
                  "uni-calendar-item--isDay":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    _vm.weeks.isDay,
                  "uni-calendar-item--checked":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    !_vm.weeks.isDay,
                  "uni-calendar-item--multiple": _vm.weeks.multiple,
                  "uni-calendar-item--disable": _vm.weeks.disable
                }
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.weeks.isDay
                      ? "今天"
                      : _vm.weeks.lunar.IDayCn === "初一"
                      ? _vm.weeks.lunar.IMonthCn
                      : _vm.weeks.lunar.IDayCn
                  )
                )
              ]
            )
          : _vm._e(),
        _vm.weeks.extraInfo && _vm.weeks.extraInfo.info
          ? _c(
              "u-text",
              {
                staticClass: ["uni-calendar-item__weeks-lunar-text"],
                class: {
                  "uni-calendar-item--extra": _vm.weeks.extraInfo.info,
                  "uni-calendar-item--isDay-text": _vm.weeks.isDay,
                  "uni-calendar-item--isDay":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    _vm.weeks.isDay,
                  "uni-calendar-item--checked":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    !_vm.weeks.isDay,
                  "uni-calendar-item--multiple": _vm.weeks.multiple,
                  "uni-calendar-item--disable": _vm.weeks.disable
                }
              },
              [_vm._v(_vm._s(_vm.weeks.extraInfo.info))]
            )
          : _vm._e()
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 342:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar-item.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar-item.vue?vue&type=script&lang=js& */ 343);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 343:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar-item.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 =
{
  props: {
    weeks: {
      type: Object,
      default: function _default() {
        return {};
      } },

    calendar: {
      type: Object,
      default: function _default() {
        return {};
      } },

    selected: {
      type: Array,
      default: function _default() {
        return [];
      } },

    lunar: {
      type: Boolean,
      default: false } },


  methods: {
    choiceDate: function choiceDate(weeks) {
      this.$emit('change', weeks);
    } } };exports.default = _default2;

/***/ }),

/***/ 344:
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar-item.vue?vue&type=style&index=0&id=0b612807&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_0b612807_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar-item.vue?vue&type=style&index=0&id=0b612807&scoped=true&lang=css& */ 345);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_0b612807_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_0b612807_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_0b612807_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_0b612807_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_0b612807_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 345:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar-item.vue?vue&type=style&index=0&id=0b612807&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-calendar-item__weeks-box": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "uni-calendar-item__weeks-box-text": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "uni-calendar-item__weeks-lunar-text": {
    "fontSize": "24rpx",
    "color": "#333333"
  },
  "uni-calendar-item__weeks-box-item": {
    "position": "relative",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100rpx",
    "height": "100rpx"
  },
  "uni-calendar-item__weeks-box-circle": {
    "position": "absolute",
    "top": "5",
    "right": "5",
    "width": "8",
    "height": "8",
    "borderRadius": "8",
    "backgroundColor": "#dd524d"
  },
  "uni-calendar-item--disable": {
    "backgroundColor": "rgba(249,249,249,0.3)",
    "color": "#c0c0c0"
  },
  "uni-calendar-item--isDay-text": {
    "color": "#007aff"
  },
  "uni-calendar-item--isDay": {
    "backgroundColor": "#007aff",
    "opacity": 0.8,
    "color": "#ffffff"
  },
  "uni-calendar-item--extra": {
    "color": "#dd524d",
    "opacity": 0.8
  },
  "uni-calendar-item--checked": {
    "backgroundColor": "#007aff",
    "color": "#ffffff",
    "opacity": 0.8
  },
  "uni-calendar-item--multiple": {
    "backgroundColor": "#007aff",
    "color": "#ffffff",
    "opacity": 0.8
  }
}

/***/ }),

/***/ 346:
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar.vue?vue&type=style&index=0&id=02f88889&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_02f88889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar.vue?vue&type=style&index=0&id=02f88889&scoped=true&lang=css& */ 347);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_02f88889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_02f88889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_02f88889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_02f88889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_02f88889_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 347:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uni-calendar/uni-calendar.vue?vue&type=style&index=0&id=02f88889&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-calendar": {
    "flexDirection": "column"
  },
  "uni-calendar__mask": {
    "position": "fixed",
    "bottom": 0,
    "top": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "transitionProperty": "opacity",
    "transitionDuration": 300,
    "opacity": 0
  },
  "@TRANSITION": {
    "uni-calendar__mask": {
      "property": "opacity",
      "duration": 300
    },
    "uni-calendar--fixed": {
      "property": "transform",
      "duration": 300
    }
  },
  "uni-calendar--mask-show": {
    "opacity": 1
  },
  "uni-calendar--fixed": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "transform": "translateY(460px)"
  },
  "uni-calendar--ani-show": {
    "transform": "translateY(0)"
  },
  "uni-calendar__content": {
    "backgroundColor": "#ffffff"
  },
  "uni-calendar__header": {
    "position": "relative",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "50",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "uni-calendar--fixed-top": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "borderTopColor": "#e5e5e5",
    "borderTopStyle": "solid",
    "borderTopWidth": "1"
  },
  "uni-calendar--fixed-width": {
    "width": "50"
  },
  "uni-calendar__backtoday": {
    "position": "absolute",
    "right": 0,
    "top": "25rpx",
    "paddingTop": 0,
    "paddingRight": "5",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "25",
    "lineHeight": "25",
    "fontSize": "12",
    "borderTopLeftRadius": "25",
    "borderBottomLeftRadius": "25",
    "color": "#333333",
    "backgroundColor": "#f1f1f1"
  },
  "uni-calendar__header-text": {
    "textAlign": "center",
    "width": "100",
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "uni-calendar__header-btn-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "50",
    "height": "50"
  },
  "uni-calendar__header-btn": {
    "width": "10",
    "height": "10",
    "borderLeftColor": "#808080",
    "borderLeftStyle": "solid",
    "borderLeftWidth": "2",
    "borderTopColor": "#555555",
    "borderTopStyle": "solid",
    "borderTopWidth": "2"
  },
  "uni-calendar--left": {
    "transform": "rotate(-45deg)"
  },
  "uni-calendar--right": {
    "transform": "rotate(135deg)"
  },
  "uni-calendar__weeks": {
    "position": "relative",
    "flexDirection": "row"
  },
  "uni-calendar__weeks-item": {
    "flex": 1
  },
  "uni-calendar__weeks-day": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "45",
    "borderBottomColor": "#F5F5F5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "uni-calendar__weeks-day-text": {
    "fontSize": "14"
  },
  "uni-calendar__box": {
    "position": "relative"
  },
  "uni-calendar__box-bg": {
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "uni-calendar__box-bg-text": {
    "fontSize": "200",
    "fontWeight": "bold",
    "color": "#999999",
    "opacity": 0.1,
    "textAlign": "center"
  }
}

/***/ }),

/***/ 348:
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/extUI/calendar/calendar.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./calendar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 349);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 349:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/extUI/calendar/calendar.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "example": {
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15"
  },
  "example-info": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "color": "#3b4144",
    "backgroundColor": "#ffffff",
    "fontSize": "14",
    "lineHeight": "20"
  },
  "example-info-text": {
    "fontSize": "14",
    "lineHeight": "20",
    "color": "#3b4144"
  },
  "example-body": {
    "flexDirection": "row",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "backgroundColor": "#ffffff"
  },
  "word-btn-white": {
    "fontSize": "18",
    "color": "#FFFFFF"
  },
  "word-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6",
    "height": "48",
    "marginTop": "15",
    "marginRight": "15",
    "marginBottom": "15",
    "marginLeft": "15",
    "backgroundColor": "#007AFF"
  },
  "word-btn--hover": {
    "backgroundColor": "#4ca2ff"
  },
  "calendar-button": {
    "flex": 1,
    "fontWeight": "bold",
    "fontSize": "32rpx"
  }
}

/***/ }),

/***/ 4:
/*!********************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages.json?{"type":"stat"} ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__D064FA9"});

/***/ }),

/***/ 5:
/*!*********************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/main.js?{"type":"appStyle"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 51:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);

    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  return msg;
}

/***/ }),

/***/ 6:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_software_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 7:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/ZDg0MiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlP2RkZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT85MjA5Iiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/ZTJiNiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT8wZjQ1Iiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/YjgzNyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzLmpzb24/ZGMxOCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL21haW4uanM/Yzc2OCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/N2M4YSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/YmQ4MiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/MTdjYSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/Y2E4OCIsInVuaS1hcHA6Ly8vcGFnZXMvZXh0VUkvY2FsZW5kYXIvY2FsZW5kYXIubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWU/ZDJhZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWU/OTcyNSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWU/MWZlYyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWU/MmE3OSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLnZ1ZSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktY2FsZW5kYXIvdXRpbC5qcyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktY2FsZW5kYXIvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXItaXRlbS52dWU/ZTNhYiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT85Zjg2Iiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLWl0ZW0udnVlPzc5ZGIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXItaXRlbS52dWU/Y2MxMiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLWl0ZW0udnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLWl0ZW0udnVlPzI4ODYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXItaXRlbS52dWU/MWNlNSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWU/ZjcyMiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWU/NmFhMiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/YzFiZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/MzNkMSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzLmpzb24/YzVjYyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL21haW4uanM/NmFhNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvQXBwLnZ1ZT9mNTdiIiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvQXBwLnZ1ZT83NmVjIl0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJDYWxlbmRhciIsImRhdGUiLCJzZWxlY3RlZCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJyYW5nZSIsImdldERhdGUiLCJtdWx0aXBsZVN0YXR1cyIsImJlZm9yZSIsImFmdGVyIiwid2Vla3MiLCJfZ2V0V2VlayIsImZ1bGxEYXRlIiwiQWRkRGF5Q291bnQiLCJkZCIsInNldERhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwic2V0RnVsbFllYXIiLCJnZXRGdWxsWWVhciIsInkiLCJtIiwiZCIsInllYXIiLCJtb250aCIsImRheSIsImdldERheSIsImZpcnN0RGF5IiwiZnVsbCIsImRhdGVBcnIiLCJiZWZvcmVEYXRlIiwibHVuYXIiLCJnZXRsdW5hciIsImRpc2FibGUiLCJkYXRlRGF0YSIsImlzaW5mbyIsIm5vd0RhdGUiLCJpc0RheSIsImZpbmQiLCJpdGVtIiwiZGF0ZUVxdWFsIiwiZGlzYWJsZUJlZm9yZSIsImRpc2FibGVBZnRlciIsImRhdGVDb21wQmVmb3JlIiwiZGF0ZUNvbXBhcmUiLCJkYXRlQ29tcEFmdGVyIiwibXVsdGlwbGVzIiwiY2hlY2tlZCIsIm11bHRpcGxlc1N0YXR1cyIsImZpbmRJbmRleCIsIm11bHRpcGxlIiwiZXh0cmFJbmZvIiwic3VycGx1cyIsIk51bWJlciIsImRhdGVJbmZvIiwiY2FubGVuZGVyIiwiYmVnaW4iLCJlbmQiLCJhYiIsInNwbGl0IiwiYWUiLCJkYiIsImRlIiwidW5peERiIiwidW5peERlIiwiayIsIkNBTEVOREFSIiwic29sYXIybHVuYXIiLCJnZURhdGVBbGwiLCJjdXJyZW50RGF5IiwiZGF0ZXMiLCJsYXN0TW9udGhEYXlzIiwiX2dldExhc3RNb250aERheXMiLCJjdXJyZW50TW9udGhEeXMiLCJfY3VycmVudE1vbnRoRHlzIiwibmV4dE1vbnRoRGF5cyIsIl9nZXROZXh0TW9udGhEYXlzIiwiY29uY2F0IiwiQXJyYXkiLCJjYWxlbmRhciIsImx1bmFySW5mbyIsInNvbGFyTW9udGgiLCJHYW4iLCJaaGkiLCJBbmltYWxzIiwic29sYXJUZXJtIiwic1Rlcm1JbmZvIiwiblN0cjEiLCJuU3RyMiIsIm5TdHIzIiwibFllYXJEYXlzIiwic3VtIiwibGVhcERheXMiLCJsZWFwTW9udGgiLCJtb250aERheXMiLCJzb2xhckRheXMiLCJtcyIsInRvR2FuWmhpWWVhciIsImxZZWFyIiwiZ2FuS2V5IiwiemhpS2V5IiwidG9Bc3RybyIsImNNb250aCIsImNEYXkiLCJzIiwidG9HYW5aaGkiLCJvZmZzZXQiLCJnZXRUZXJtIiwibiIsIl90YWJsZSIsIl9pbmZvIiwiX2NhbGRheSIsInRvQ2hpbmFNb250aCIsInRvQ2hpbmFEYXkiLCJnZXRBbmltYWwiLCJvYmpEYXRlIiwibGVhcCIsInRlbXAiLCJVVEMiLCJpc1RvZGF5T2JqIiwiaXNUb2RheSIsIm5XZWVrIiwiY1dlZWsiLCJpc0xlYXAiLCJzbSIsImd6WSIsImZpcnN0Tm9kZSIsInNlY29uZE5vZGUiLCJnek0iLCJpc1Rlcm0iLCJUZXJtIiwiZGF5Q3ljbGljYWwiLCJnekQiLCJhc3RybyIsImx1bmFyMnNvbGFyIiwiaXNMZWFwTW9udGgiLCJsZWFwT2Zmc2V0IiwibGVhcERheSIsIl9kYXkiLCJpc0FkZCIsInN0bWFwIiwiY2FsT2JqIiwiY1kiLCJnZXRVVENGdWxsWWVhciIsImNNIiwiZ2V0VVRDTW9udGgiLCJjRCIsImdldFVUQ0RhdGUiLCJ0eXBvZiIsInByb3RvdHlwZSIsInN1YnN0cmluZyIsImZvcm1hdExvZyIsIl9sZW4iLCJhcmd1bWVudHMiLCJfa2V5IiwibXNncyIsIm1hcCIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwidlR5cGUiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsIm1zZyIsImxhc3RNc2ciLCJwb3AiLCJqb2luIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FB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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQWs4QixDQUFnQiwyOEJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F0OUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QVYsSUFBc0JBLEtBQUssS0FBSyxTQUFwQyxFQUErQztBQUM3Q3ZTLFdBQUMsR0FBRyxjQUFjdVMsS0FBZCxHQUFzQixLQUF0QixHQUE4QnZTLENBQTlCLEdBQWtDLFNBQWxDLEdBQThDdVMsS0FBOUMsR0FBc0QsS0FBMUQ7QUFDRCxTQUZELE1BRU87QUFDTHZTLFdBQUMsR0FBR3lTLE1BQU0sQ0FBQ3pTLENBQUQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFPQSxDQUFQO0FBQ0QsR0ExQlUsQ0FBWDtBQTJCQSxNQUFJMFMsR0FBRyxHQUFHLEVBQVY7O0FBRUEsTUFBSVAsSUFBSSxDQUFDalksTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CLFFBQUl5WSxPQUFPLEdBQUdSLElBQUksQ0FBQ1MsR0FBTCxFQUFkO0FBQ0FGLE9BQUcsR0FBR1AsSUFBSSxDQUFDVSxJQUFMLENBQVUsYUFBVixDQUFOOztBQUVBLFFBQUlGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixNQUFoQixNQUE0QixDQUFoQyxFQUFtQztBQUNqQ0osU0FBRyxJQUFJQyxPQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELFNBQUcsSUFBSSxnQkFBZ0JDLE9BQXZCO0FBQ0Q7QUFDRixHQVRELE1BU087QUFDTEQsT0FBRyxHQUFHUCxJQUFJLENBQUMsQ0FBRCxDQUFWO0FBQ0Q7O0FBRUQsU0FBT08sR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3JERDtBQUFBO0FBQUE7QUFBQTtBQUFnNkIsQ0FBZ0IseTZCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBcDdCLG1CIiwiZmlsZSI6InBhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMyNik7XG4iLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IFNUQVRfVkVSU0lPTiA9IHZlcnNpb247XHJcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XHJcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcclxuY29uc3QgUEFHRV9QVkVSX1RJTUUgPSAxODAwO1xyXG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xyXG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xyXG4gIGxldCB1dWlkID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdXVpZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV1aWRcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB1dWlkID0gVVVJRF9WQUxVRTtcclxuICB9XHJcblxyXG4gIGlmICghdXVpZCkge1xyXG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIHV1aWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdXVpZDtcclxufVxyXG5cclxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBhcnIgPSBPYmplY3Qua2V5cyhzdGF0RGF0YSk7XHJcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIGxldCBzZ2luID0ge307XHJcbiAgbGV0IHNnaW5TdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcclxuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcclxuICAgIHNnaW5TdHIgKz0gc29ydEFycltpXSArICc9JyArIHN0YXREYXRhW3NvcnRBcnJbaV1dICsgJyYnO1xyXG4gIH1cclxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIC8vIHNnaW5TdHIgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpICsgJyZrZXk9JyArIFNUQVRfS0VZO1xyXG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWduOiAnJyxcclxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcclxuICB9XHJcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbn07XHJcblxyXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTGlzdCA9IHtcclxuICAgICdhcHAtcGx1cyc6ICduJyxcclxuICAgICdoNSc6ICdoNScsXHJcbiAgICAnbXAtd2VpeGluJzogJ3d4JyxcclxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcclxuICAgICdtcC1iYWlkdSc6ICdiZCcsXHJcbiAgICAnbXAtdG91dGlhbyc6ICd0dCcsXHJcbiAgICAnbXAtcXEnOiAncXEnXHJcbiAgfTtcclxuICByZXR1cm4gcGxhdGZvcm1MaXN0W3Byb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk1dO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFja05hbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHBhY2tOYW1lID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XHJcbiAgICAvLyDlhbzlrrnlvq7kv6HlsI/nqIvluo/kvY7niYjmnKzln7rnoYDlupNcclxuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XHJcbiAgICAgIHBhY2tOYW1lID0gdW5pLmdldEFjY291bnRJbmZvU3luYygpLm1pbmlQcm9ncmFtLmFwcElkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFja05hbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgPyBwbHVzLnJ1bnRpbWUudmVyc2lvbiA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICduJykge1xyXG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xyXG4gIH1cclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNjZW5lID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgc2NlbmUgPSAnJztcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICd3eCcpIHtcclxuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcbiAgfVxyXG4gIHJldHVybiBzY2VuZTtcclxufTtcclxuY29uc3QgRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnRmlyc3RfX1Zpc2l0X19UaW1lJztcclxuY29uc3QgTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdMYXN0X19WaXNpdF9fVGltZSc7XHJcblxyXG5jb25zdCBnZXRGaXJzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZLCB0aW1lKTtcclxuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICB9XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMYXN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9ICcnO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSwgZ2V0VGltZSgpKTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcclxubGV0IEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5sZXQgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxuXHJcblxyXG5jb25zdCBzZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSwgZ2V0VGltZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FKTtcclxuICB9XHJcbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuY29uc3QgVE9UQUxfX1ZJU0lUX19DT1VOVCA9ICdUb3RhbF9fVmlzaXRfX0NvdW50JztcclxuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCk7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgY291bnQgPSB0aW1lU3RvcmdlO1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQsIGNvdW50KTtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5jb25zdCBHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBmb3IgKGxldCBwcm9wIGluIHN0YXREYXRhKSB7XHJcbiAgICBkYXRhW3Byb3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXREYXRhW3Byb3BdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5sZXQgU2V0X19GaXJzdF9fVGltZSA9IDA7XHJcbmxldCBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gMDtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0UmVzaWRlbmNlVGltZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHJlc2lkZW5jZVRpbWUgPSAwO1xyXG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XHJcbiAgICByZXNpZGVuY2VUaW1lID0gU2V0X19MYXN0X19UaW1lIC0gU2V0X19GaXJzdF9fVGltZTtcclxuICB9XHJcblxyXG4gIHJlc2lkZW5jZVRpbWUgPSBwYXJzZUludChyZXNpZGVuY2VUaW1lIC8gMTAwMCk7XHJcbiAgcmVzaWRlbmNlVGltZSA9IHJlc2lkZW5jZVRpbWUgPCAxID8gMSA6IHJlc2lkZW5jZVRpbWU7XHJcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gQVBQX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gUEFHRV9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNpZGVuY2VUaW1lXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSkgfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG4gIGxldCBxdWVyeSA9IHNlbGYuX3F1ZXJ5O1xyXG4gIGxldCBzdHIgPSBxdWVyeSAmJiBKU09OLnN0cmluZ2lmeShxdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShxdWVyeSkgOiAnJztcclxuICAvLyBjbGVhclxyXG4gIHNlbGYuX3F1ZXJ5ID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUgKyBzdHIgKXx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUgKyBzdHIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XHJcbiAgaWYgKHNlbGYubXBUeXBlID09PSAncGFnZScgfHwgKHNlbGYuJG1wICYmIHNlbGYuJG1wLm1wVHlwZSA9PT0gJ3BhZ2UnKSB8fCBzZWxmLiRvcHRpb25zLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FsaWJyYXRpb24gPSAoZXZlbnROYW1lLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gIGxvZ2luIOOAgSBzaGFyZSDjgIFwYXlfc3VjY2VzcyDjgIFwYXlfZmFpbCDjgIFyZWdpc3RlciDjgIF0aXRsZVxyXG4gIGlmKCFldmVudE5hbWUpe1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCDnvLrlsJEgW2V2ZW50TmFtZV0g5Y+C5pWwYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAoZXZlbnROYW1lLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOaIliBPYmplY3Qg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChldmVudE5hbWUgPT09ICd0aXRsZScgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZXNKc29uID0gcmVxdWlyZSgndW5pLXBhZ2VzP3tcInR5cGVcIjpcInN0eWxlXCJ9JykuZGVmYXVsdDtcclxuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XHJcblxyXG5jb25zdCByZXN1bHRPcHRpb25zID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jbGFzcyBVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VsZiA9ICcnO1xyXG4gICAgdGhpcy5fcmV0cnkgPSAwO1xyXG4gICAgdGhpcy5fcGxhdGZvcm0gPSAnJztcclxuICAgIHRoaXMuX3F1ZXJ5ID0ge307XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICBsdDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLl9vcGVyYXRpbmdUaW1lID0gMDtcclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge1xyXG4gICAgICAnMSc6IFtdLFxyXG4gICAgICAnMTEnOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhID0ge1xyXG4gICAgICB1dWlkOiBnZXRVdWlkKCksXHJcbiAgICAgIHV0OiBnZXRQbGF0Zm9ybU5hbWUoKSxcclxuICAgICAgbXBuOiBnZXRQYWNrTmFtZSgpLFxyXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sXHJcbiAgICAgIHY6IGdldFZlcnNpb24oKSxcclxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcclxuICAgICAgY246ICcnLFxyXG4gICAgICBwbjogJycsXHJcbiAgICAgIGN0OiAnJyxcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICB0dDogJycsXHJcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcclxuICAgICAgYnJhbmQ6IHJlc3VsdE9wdGlvbnMuYnJhbmQgfHwgJycsXHJcbiAgICAgIG1kOiByZXN1bHRPcHRpb25zLm1vZGVsLFxyXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcclxuICAgICAgbXBzZGs6IHJlc3VsdE9wdGlvbnMuU0RLVmVyc2lvbiB8fCAnJyxcclxuICAgICAgbXB2OiByZXN1bHRPcHRpb25zLnZlcnNpb24gfHwgJycsXHJcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXHJcbiAgICAgIHByOiByZXN1bHRPcHRpb25zLnBpeGVsUmF0aW8sXHJcbiAgICAgIHd3OiByZXN1bHRPcHRpb25zLndpbmRvd1dpZHRoLFxyXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXHJcbiAgICAgIHN3OiByZXN1bHRPcHRpb25zLnNjcmVlbldpZHRoLFxyXG4gICAgICBzaDogcmVzdWx0T3B0aW9ucy5zY3JlZW5IZWlnaHRcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdhcHAnKTtcclxuICAgICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0eXBlKSB7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICB0aGlzLl9zZW5kSGlkZVJlcXVlc3Qoe1xyXG4gICAgICB1cmxyZWY6IHJvdXRlLFxyXG4gICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgfSwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICBfcGFnZVNob3coKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIGNvbnN0IHJvdXRlcGF0aCA9IGdldFJvdXRlKCk7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUuY29uZmlnID0gUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcgJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldy50aXRsZVRleHQgfHxcclxuICAgICAgUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLm5hdmlnYXRpb25CYXJUaXRsZVRleHQgfHwgJyc7XHJcblxyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvblNob3cpIHtcclxuICAgICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+i/meaYryBvbkxhdWNoIOS5i+WQjuaJp+ihjOeahOesrOS4gOasoSBwYWdlU2hvdyDvvIzkuLrkuIvmrKHorrDlvZXml7bpl7TlgZrlh4blpIcnKTtcclxuICAgICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBfcGFnZUhpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgICAgdGhpcy5fc2VuZFBhZ2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICAgIGx0OiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9naW4oKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnbG9naW4nXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIF9zaGFyZSgpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdzaGFyZSdcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfcGF5bWVudChrZXkpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXlcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxJztcclxuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdCA9ICcxJztcclxuICAgIHRoaXMuc3RhdERhdGEudXJsID0gKG9wdGlvbnMucGF0aCArIHF1ZXJ5KSB8fCAnJztcclxuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEuc2MgPSBnZXRTY2VuZShvcHRpb25zLnNjZW5lKTtcclxuICAgIHRoaXMuc3RhdERhdGEuZnZ0cyA9IGdldEZpcnN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnR2YyA9IGdldFRvdGFsVmlzaXRDb3VudCgpO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMTEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsLFxyXG4gICAgICB0dDogdGhpcy5zdGF0RGF0YS50dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCB0eXBlKTtcclxuICB9XHJcbiAgX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAga2V5ID0gJycsXHJcbiAgICB2YWx1ZSA9IFwiXCJcclxuICB9ID0ge30pIHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fbGFzdFBhZ2VSb3V0ZTtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzIxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybDogcm91dGUsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBlX246IGtleSxcclxuICAgICAgZV92OiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLnRvU3RyaW5nKCksXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV0d29ya0luZm8oKSB7XHJcbiAgICB1bmkuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0RGF0YS5uZXQgPSByZXN1bHQubmV0d29ya1R5cGU7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KCkge1xyXG4gICAgcGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCkge1xyXG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLnBuID0gcmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY3QgPSByZXN1bHQuYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IDA7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChkYXRhLCB0eXBlKSB7XHJcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlO1xyXG4gICAgZGF0YS50dG4gPSB0aXRsZS5wYWdlO1xyXG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xyXG4gICAgZGF0YS50dGMgPSB0aXRsZS5yZXBvcnQ7XHJcblxyXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICByZXF1ZXN0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdERhdGFbZGF0YS5sdF0pIHtcclxuICAgICAgcmVxdWVzdERhdGFbZGF0YS5sdF0gPSBbXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3REYXRhW2RhdGEubHRdLnB1c2goZGF0YSk7XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScsIHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaVN0YXREYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG4gICAgLy8g5pe26Ze06LaF6L+H77yM6YeN5paw6I635Y+W5pe26Ze05oizXHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgbGV0IGZpcnN0QXJyID0gW107XHJcbiAgICBsZXQgY29udGVudEFyciA9IFtdO1xyXG4gICAgbGV0IGxhc3RBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHVuaVN0YXREYXRhKSB7XHJcbiAgICAgIGNvbnN0IHJkID0gdW5pU3RhdERhdGFbaV07XHJcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBnZXRTcGxpY2luZyhlbG0pO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xyXG4gICAgICAgICAgbGFzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xyXG4gICAgbGV0IG9wdGlvbnNEYXRhID0ge1xyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTiwgLy/nu5/orqEgU0RLIOeJiOacrOWPt1xyXG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxyXG4gICAgICByZXF1ZXN0czogSlNPTi5zdHJpbmdpZnkoZmlyc3RBcnIpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgJiYgdGhpcy5zdGF0RGF0YS5wID09PSAnYScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICB9XHJcbiAgX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKSB7XHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogU1RBVF9VUkwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyBoZWFkZXI6IHtcclxuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBkYXRhOiBvcHRpb25zRGF0YSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3N0YXQgcmVxdWVzdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGg1IOivt+axglxyXG4gICAqL1xyXG4gIGltYWdlUmVxdWVzdChkYXRhKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0U2dpbihHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zKGRhdGEpKS5vcHRpb25zO1xyXG4gICAgaW1hZ2Uuc3JjID0gU1RBVF9INV9VUkwgKyAnPycgKyBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2VuZEV2ZW50KGtleSwgdmFsdWUpIHtcclxuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxyXG4gICAgaWYgKGNhbGlicmF0aW9uKGtleSwgdmFsdWUpKSByZXR1cm5cclxuXHJcbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5yZXBvcnQgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5LFxyXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vIOazqOWGjOaLpuaIquWZqFxyXG4gICAgaWYgKHR5cGVvZiB1bmkuYWRkSW50ZXJjZXB0b3IgPT09ICdmdW5jdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRMb2dpbigpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFNoYXJlKHRydWUpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRJbnRlcmNlcHRvckluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcclxuICAgICAgaW52b2tlKGFyZ3MpIHtcclxuICAgICAgICBzZWxmLl9uYXZpZ2F0aW9uQmFyVGl0bGUucGFnZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0TG9naW4oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZWxmLl9sb2dpbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFNoYXJlKHR5cGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2hhcmUnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFJlcXVlc3RQYXltZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdyZXF1ZXN0UGF5bWVudCcsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVwb3J0KG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ3JlcG9ydCBpbml0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xyXG4gICAgaWYgKCFzZWxmLiRzY29wZSAmJiAhc2VsZi4kbXApIHtcclxuICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzaG93KHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25TaG93KHNlbGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHkoc2VsZikge1xyXG4gICAgLy8gdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGhpZGUoc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVycm9yKGVtKSB7XHJcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCflvZPliY3ov5DooYznjq/looPkuLrlvIDlj5HogIXlt6XlhbfvvIzkuI3kuIrmiqXmlbDmja7jgIInKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZW1WYWwgPSAnJztcclxuICAgIGlmICghZW0ubWVzc2FnZSkge1xyXG4gICAgICBlbVZhbCA9IEpTT04uc3RyaW5naWZ5KGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtVmFsID0gZW0uc3RhY2s7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXHJcbiAgICAgIG1wdjogdGhpcy5zdGF0RGF0YS5tcHYsXHJcbiAgICAgIHY6IHRoaXMuc3RhdERhdGEudixcclxuICAgICAgZW06IGVtVmFsLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XHJcbmxldCBpc0hpZGUgPSBmYWxzZTtcclxuY29uc3QgbGlmZWN5Y2xlID0ge1xyXG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcclxuICAgIHN0YXQucmVwb3J0KG9wdGlvbnMsIHRoaXMpO1xyXG4gIH0sXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHN0YXQucmVhZHkodGhpcyk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgc3RhdC5sb2FkKG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgLy8g6YeN5YaZ5YiG5Lqr77yM6I635Y+W5YiG5Lqr5LiK5oql5LqL5Lu2XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG9sZFNoYXJlQXBwTWVzc2FnZSA9IHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlO1xyXG4gICAgICB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gb2xkU2hhcmVBcHBNZXNzYWdlLmNhbGwodGhpcywgb3B0aW9ucylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgc3RhdC5zaG93KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaXNIaWRlID0gdHJ1ZTtcclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKGlzSGlkZSkge1xyXG4gICAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvbkVycm9yKGUpIHtcclxuICAgIHN0YXQuZXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XHJcbiAgICAgIHN0YXQuc2VuZEV2ZW50KHR5cGUsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbm1haW4oKTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGI2ZTVjZmImc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiNmU1Y2ZiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjZlNWNmYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYjZlNWNmYlwiLFxuICBcIjFhZDNlZTFlXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGI2ZTVjZmImc2NvcGVkPXRydWUmXCIiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgb3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbihjb21wb25lbnRzLCBvcHRpb25zLmNvbXBvbmVudHMgfHwge30pXG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uXCJdIH0sXG4gICAgW1xuICAgICAgX3ZtLnR5cGVcbiAgICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2hlYWRcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiXSxcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS50eXBlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2NvbnRlbnRcIl0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiXSxcbiAgICAgICAgICAgIGNsYXNzOiB7IGRpc3RyYWN0aW9uOiAhX3ZtLnN1YlRpdGxlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uc3ViVGl0bGVcbiAgICAgICAgICA/IF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiXSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN1YlRpdGxlKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidW5pLXNlY3Rpb25cIj5cclxuXHRcdDx2aWV3IHYtaWY9XCJ0eXBlXCIgY2xhc3M9XCJ1bmktc2VjdGlvbl9faGVhZFwiPlxyXG5cdFx0XHQ8dmlldyA6Y2xhc3M9XCJ0eXBlXCIgY2xhc3M9XCJ1bmktc2VjdGlvbl9faGVhZC10YWdcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktc2VjdGlvbl9fY29udGVudFwiPlxyXG5cdFx0XHQ8dGV4dCA6Y2xhc3M9XCJ7J2Rpc3RyYWN0aW9uJzohc3ViVGl0bGV9XCIgY2xhc3M9XCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiPnt7IHRpdGxlIH19PC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCB2LWlmPVwic3ViVGl0bGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiPnt7IHN1YlRpdGxlIH19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHNsb3QgLz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG5cdCAqIFNlY3Rpb24g5qCH6aKY5qCPXHJcblx0ICogQGRlc2NyaXB0aW9uIOagh+mimOagj1xyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlID0gW2xpbmV8Y2lyY2xlXSDmoIfpopjoo4XppbDnsbvlnotcclxuXHQgKiBcdEB2YWx1ZSBsaW5lIOerlue6v1xyXG5cdCAqIFx0QHZhbHVlIGNpcmNsZSDlnIblvaJcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdGl0bGUg5Li75qCH6aKYXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHN1YlRpdGxlIOWJr+agh+mimFxyXG5cdCAqL1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnVW5pVGl0bGUnLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJUaXRsZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0dGl0bGUobmV3VmFsKSB7XHJcblx0XHRcdFx0aWYgKHVuaS5yZXBvcnQgJiYgbmV3VmFsICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dW5pLnJlcG9ydCgndGl0bGUnLCBuZXdWYWwpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkNsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnVuaS1zZWN0aW9uIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNlNWU1ZTU7XHJcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDAuNXB4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdH1cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdC51bmktc2VjdGlvbjphZnRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRoZWlnaHQ6IDFweDtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSguNSk7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlWSguNSk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC51bmktc2VjdGlvbl9faGVhZCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdHdpZHRoOiAzcHg7XHJcblx0fVxyXG5cclxuXHQuY2lyY2xlIHtcclxuXHRcdHdpZHRoOiA4cHg7XHJcblx0XHRoZWlnaHQ6IDhweDtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblxyXG5cdC5kaXN0cmFjdGlvbiB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9fY29udGVudC1zdWIge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5O1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiNmU1Y2ZiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiNmU1Y2ZiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidW5pLXNlY3Rpb25cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjhmOFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZTVlNWU1XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjAuNVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIm5vcm1hbFwiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2hlYWRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcImxpbmVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNjMGMwYzBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVcIixcbiAgICBcIndpZHRoXCI6IFwiM1wiXG4gIH0sXG4gIFwiY2lyY2xlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiOFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOFwiLFxuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNjMGMwYzBcIlxuICB9LFxuICBcInVuaS1zZWN0aW9uX19jb250ZW50XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJkaXN0cmFjdGlvblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9fY29udGVudC1zdWJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk2YzFmNjcmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2FsZW5kYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vY2FsZW5kYXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjdmYzQ4ZjllXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9wYWdlcy9leHRVSS9jYWxlbmRhci9jYWxlbmRhci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk2YzFmNjcmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dDYWxlbmRhclxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJjYWxlbmRhci1jb250ZW50XCJdIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtaW5mb1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCLml6Xljobnu4Tku7blj6/ku6Xmn6XnnIvml6XmnJ/vvIzpgInmi6nku7vmhI/ojIPlm7TlhoXnmoTml6XmnJ/vvIzmiZPngrnmk43kvZzjgILluLjnlKjlnLrmma/lpoLvvJrphZLlupfml6XmnJ/pooTorqLjgIHngavovabmnLrnpajpgInmi6notK3kubDml6XmnJ/jgIHkuIrkuIvnj63miZPljaHnrYnjgIJcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwidW5pLXNlY3Rpb25cIiwgeyBhdHRyczogeyB0aXRsZTogXCLmj5LlhaXmqKHlvI9cIiwgdHlwZTogXCJsaW5lXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1bmktY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzZWxlY3RlZDogX3ZtLmluZm8uc2VsZWN0ZWQsIHNob3dNb250aDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uY2hhbmdlLCBtb250aFN3aXRjaDogX3ZtLm1vbnRoU3dpdGNoIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwidW5pLXNlY3Rpb25cIiwgeyBhdHRyczogeyB0aXRsZTogXCLlvLnlh7rmqKHlvI9cIiwgdHlwZTogXCJsaW5lXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZXhhbXBsZS1ib2R5XCJdIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiY2FsZW5kYXItYnV0dG9uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW4gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5omT5byA5pel5Y6GXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcInVuaS1jYWxlbmRhclwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcImNhbGVuZGFyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGU6IF92bS5pbmZvLmRhdGUsXG4gICAgICAgICAgICAgICAgICBpbnNlcnQ6IF92bS5pbmZvLmluc2VydCxcbiAgICAgICAgICAgICAgICAgIGx1bmFyOiBfdm0uaW5mby5sdW5hcixcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogX3ZtLmluZm8uc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogX3ZtLmluZm8uZW5kRGF0ZSxcbiAgICAgICAgICAgICAgICAgIHJhbmdlOiBfdm0uaW5mby5yYW5nZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY29uZmlybTogX3ZtLmNvbmZpcm0gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FsZW5kYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FsZW5kYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY2FsZW5kYXItY29udGVudFwiIHYtaWY9XCJzaG93Q2FsZW5kYXJcIj5cclxuXHRcdDx0ZXh0IGNsYXNzPVwiZXhhbXBsZS1pbmZvXCI+5pel5Y6G57uE5Lu25Y+v5Lul5p+l55yL5pel5pyf77yM6YCJ5oup5Lu75oSP6IyD5Zu05YaF55qE5pel5pyf77yM5omT54K55pON5L2c44CC5bi455So5Zy65pmv5aaC77ya6YWS5bqX5pel5pyf6aKE6K6i44CB54Gr6L2m5py656Wo6YCJ5oup6LSt5Lmw5pel5pyf44CB5LiK5LiL54+t5omT5Y2h562J44CCPC90ZXh0PlxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5o+S5YWl5qih5byPXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHZpZXc+XHJcblx0XHRcdDwhLS0g5o+S5YWl5qih5byPIC0tPlxyXG5cdFx0XHQ8dW5pLWNhbGVuZGFyIDpzZWxlY3RlZD1cImluZm8uc2VsZWN0ZWRcIiA6c2hvd01vbnRoPVwiZmFsc2VcIiBAY2hhbmdlPVwiY2hhbmdlXCIgQG1vbnRoU3dpdGNoPVwibW9udGhTd2l0Y2hcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5by55Ye65qih5byPXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJleGFtcGxlLWJvZHlcIj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImNhbGVuZGFyLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJvcGVuXCI+5omT5byA5pel5Y6GPC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dW5pLWNhbGVuZGFyIHJlZj1cImNhbGVuZGFyXCIgOmRhdGU9XCJpbmZvLmRhdGVcIiA6aW5zZXJ0PVwiaW5mby5pbnNlcnRcIiA6bHVuYXI9XCJpbmZvLmx1bmFyXCIgOnN0YXJ0RGF0ZT1cImluZm8uc3RhcnREYXRlXCIgOmVuZERhdGU9XCJpbmZvLmVuZERhdGVcIiA6cmFuZ2U9XCJpbmZvLnJhbmdlXCIgQGNvbmZpcm09XCJjb25maXJtXCIgLz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB1bmlTZWN0aW9uIGZyb20gJ0AvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWUnXHJcblx0aW1wb3J0IHVuaUNhbGVuZGFyIGZyb20gJ0AvY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaVNlY3Rpb24sXHJcblx0XHRcdHVuaUNhbGVuZGFyXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzaG93Q2FsZW5kYXI6IGZhbHNlLFxyXG5cdFx0XHRcdGluZm86IHtcclxuXHRcdFx0XHRcdGRhdGU6ICcyMDE5LTA4LTE1JyxcclxuXHRcdFx0XHRcdHN0YXJ0RGF0ZTogJzIwMTktMDYtMTUnLFxyXG5cdFx0XHRcdFx0ZW5kRGF0ZTogJzIwMTktMDEwLTE1JyxcclxuXHRcdFx0XHRcdGx1bmFyOiB0cnVlLFxyXG5cdFx0XHRcdFx0cmFuZ2U6IHRydWUsXHJcblx0XHRcdFx0XHRpbnNlcnQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IFtdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0NhbGVuZGFyID0gdHJ1ZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQvLyBUT0RPIOaooeaLn+ivt+axguW8guatpeWQjOatpeaVsOaNrlxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmluZm8uc2VsZWN0ZWQgPSBbe1xyXG5cdFx0XHRcdFx0XHRkYXRlOiAnMjAxOS0wOC0yMCcsXHJcblx0XHRcdFx0XHRcdGluZm86ICfmiZPljaEnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkYXRlOiAnMjAxOS0wOC0yMScsXHJcblx0XHRcdFx0XHRcdGluZm86ICfnrb7liLAnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0Y3VzdG9tOiAn6Ieq5a6a5LmJ5L+h5oGvJyxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn6Ieq5a6a5LmJ5raI5oGv5aS0J1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkYXRlOiAnMjAxOS0wOC0yMicsXHJcblx0XHRcdFx0XHRcdGluZm86ICflt7LmiZPljaEnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LCA1MDApXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvcGVuKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuY2FsZW5kYXIub3BlbigpXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZShlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2NoYW5nZSDov5Tlm546JywgZSlcclxuXHRcdFx0XHQvLyDmqKHmi5/liqjmgIHmiZPljaFcclxuXHRcdFx0XHRpZiAodGhpcy5pbmZvLnNlbGVjdGVkLmxlbmd0aCA+IDUpIHJldHVyblxyXG5cdFx0XHRcdHRoaXMuaW5mby5zZWxlY3RlZC5wdXNoKHtcclxuXHRcdFx0XHRcdGRhdGU6IGUuZnVsbGRhdGUsXHJcblx0XHRcdFx0XHRpbmZvOiAn5omT5Y2hJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbmZpcm0oZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjb25maXJtIOi/lOWbnjonLCBlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb250aFN3aXRjaChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ21vbnRoU3dpdGNocyDov5Tlm546JywgZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0Lyog5aS05p2h5bCP56iL5bqP57uE5Lu25YaF5LiN6IO95byV5YWl5a2X5L2TICovXHJcblx0LyogI2lmZGVmIE1QLVRPVVRJQU8gKi9cclxuXHRAZm9udC1mYWNlIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL3VuaS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0fVxyXG5cclxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdHBhZ2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZmNDtcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cclxuXHR2aWV3IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAxNXB4IDE1cHg7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1pbmZvIHtcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRjb2xvcjogIzNiNDE0NDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1ib2R5IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mbyB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGNvbG9yOiAjM2I0MTQ0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mby10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Y29sb3I6ICMzYjQxNDQ7XHJcblx0fVxyXG5cclxuXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4td2hpdGUge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4ge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdGhlaWdodDogNDhweDtcclxuXHRcdG1hcmdpbjogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4tLWhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0Y2EyZmY7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1ib2R5IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQuY2FsZW5kYXItYnV0dG9uIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWNhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmY4ODg4OSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDJmODg4ODkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMmY4ODg4OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMmY4ODg4OVwiLFxuICBcIjZmNzVhM2E2XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJmODg4ODkmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJcIl0sIG9uOiB7IHRvdWNobW92ZTogX3ZtLmNsZWFuIH0gfSxcbiAgICBbXG4gICAgICAhX3ZtLmluc2VydCAmJiBfdm0uc2hvd1xuICAgICAgICA/IF9jKFwidmlld1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX19tYXNrXCJdLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJ1bmktY2FsZW5kYXItLW1hc2stc2hvd1wiOiBfdm0uYW5pTWFza1Nob3cgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xlYW4gfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uaW5zZXJ0IHx8IF92bS5zaG93XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fY29udGVudFwiXSxcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci0tZml4ZWRcIjogIV92bS5pbnNlcnQsXG4gICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItLWFuaS1zaG93XCI6IF92bS5hbmlNYXNrU2hvd1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmluc2VydFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyX19oZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLS1maXhlZC10b3BcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXJfX2hlYWRlci10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLS1maXhlZC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX19oZWFkZXItYnRuLWJveFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jb25maXJtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXJfX2hlYWRlci10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLS1maXhlZC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu5a6aXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9faGVhZGVyXCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX19oZWFkZXItYnRuLWJveFwiXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wcmUgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLS1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX2hlYWRlci10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgIChfdm0ubm93RGF0ZS55ZWFyIHx8IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwi5bm0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5ub3dEYXRlLm1vbnRoIHx8IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwi5pyIXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94XCJdLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm5leHQgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLS1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX19iYWNrdG9kYXlcIl0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYmFja3RvZGF5IH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Zue5Yiw5LuK5aSpXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fYm94XCJdIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3dNb250aFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX2JveC1iZ1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX19ib3gtYmctdGV4dFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubm93RGF0ZS5tb250aCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLndlZWtzLCBmdW5jdGlvbihpdGVtLCB3ZWVrSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiB3ZWVrSW5kZXgsIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0sIGZ1bmN0aW9uKHdlZWtzLCB3ZWVrc0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB3ZWVrc0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWl0ZW1cIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidW5pLWNhbGVuZGFyLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla3M6IHdlZWtzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxlbmRhcjogX3ZtLmNhbGVuZGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdW5hcjogX3ZtLmx1bmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uY2hvaWNlRGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3NcIl0gfSwgW1xuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCJdIH0sIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5pelXCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiXSB9LCBbXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIl0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIuS4gFwiKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIl0gfSwgW1xuICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLkuoxcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCJdIH0sIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5LiJXCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiXSB9LCBbXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIl0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIuWbm1wiKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIl0gfSwgW1xuICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLkupRcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCJdIH0sIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5YWtXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJjbGVhblwiPlxyXG5cdFx0PHZpZXcgdi1pZj1cIiFpbnNlcnQmJnNob3dcIiBjbGFzcz1cInVuaS1jYWxlbmRhcl9fbWFza1wiIDpjbGFzcz1cInsndW5pLWNhbGVuZGFyLS1tYXNrLXNob3cnOmFuaU1hc2tTaG93fVwiIEBjbGljaz1cImNsZWFuXCI+PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cImluc2VydCB8fCBzaG93XCIgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2NvbnRlbnRcIiA6Y2xhc3M9XCJ7J3VuaS1jYWxlbmRhci0tZml4ZWQnOiFpbnNlcnQsJ3VuaS1jYWxlbmRhci0tYW5pLXNob3cnOmFuaU1hc2tTaG93fVwiPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwiIWluc2VydFwiIGNsYXNzPVwidW5pLWNhbGVuZGFyX19oZWFkZXIgdW5pLWNhbGVuZGFyLS1maXhlZC10b3BcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0bi1ib3hcIiBAY2xpY2s9XCJjbG9zZVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2hlYWRlci10ZXh0IHVuaS1jYWxlbmRhci0tZml4ZWQtd2lkdGhcIj7lj5bmtog8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyX19oZWFkZXItYnRuLWJveFwiIEBjbGljaz1cImNvbmZpcm1cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX19oZWFkZXItdGV4dCB1bmktY2FsZW5kYXItLWZpeGVkLXdpZHRoXCI+56Gu5a6aPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9faGVhZGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94XCIgQGNsaWNrPVwicHJlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0biB1bmktY2FsZW5kYXItLWxlZnRcIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX19oZWFkZXItdGV4dFwiPnt7IChub3dEYXRlLnllYXJ8fCcnKSArJ+W5tCcrKCBub3dEYXRlLm1vbnRofHwnJykgKyfmnIgnfX08L3RleHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94XCIgQGNsaWNrPVwibmV4dFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4gdW5pLWNhbGVuZGFyLS1yaWdodFwiPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2JhY2t0b2RheVwiIEBjbGljaz1cImJhY2t0b2RheVwiPuWbnuWIsOS7iuWkqTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fYm94XCI+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInNob3dNb250aFwiIGNsYXNzPVwidW5pLWNhbGVuZGFyX19ib3gtYmdcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX19ib3gtYmctdGV4dFwiPnt7bm93RGF0ZS5tb250aH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3NcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCI+5pelPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIj7kuIA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiPuS6jDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCI+5LiJPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIj7lm5s8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiPuS6lDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCI+5YWtPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3NcIiB2LWZvcj1cIihpdGVtLHdlZWtJbmRleCkgaW4gd2Vla3NcIiA6a2V5PVwid2Vla0luZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtaXRlbVwiIHYtZm9yPVwiKHdlZWtzLHdlZWtzSW5kZXgpIGluIGl0ZW1cIiA6a2V5PVwid2Vla3NJbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dW5pLWNhbGVuZGFyLWl0ZW0gOndlZWtzPVwid2Vla3NcIiA6Y2FsZW5kYXI9XCJjYWxlbmRhclwiIDpzZWxlY3RlZD1cInNlbGVjdGVkXCIgOmx1bmFyPVwibHVuYXJcIiBAY2hhbmdlPVwiY2hvaWNlRGF0ZVwiPjwvdW5pLWNhbGVuZGFyLWl0ZW0+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi91dGlsLmpzJztcclxuXHRpbXBvcnQgdW5pQ2FsZW5kYXJJdGVtIGZyb20gJy4vdW5pLWNhbGVuZGFyLWl0ZW0udnVlJ1xyXG5cdC8qKlxyXG5cdCAqIENhbGVuZGFyIOaXpeWOhlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDml6Xljobnu4Tku7blj6/ku6Xmn6XnnIvml6XmnJ/vvIzpgInmi6nku7vmhI/ojIPlm7TlhoXnmoTml6XmnJ/vvIzmiZPngrnmk43kvZzjgILluLjnlKjlnLrmma/lpoLvvJrphZLlupfml6XmnJ/pooTorqLjgIHngavovabmnLrnpajpgInmi6notK3kubDml6XmnJ/jgIHkuIrkuIvnj63miZPljaHnrYlcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9NTZcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gZGF0ZSDoh6rlrprkuYnlvZPliY3ml7bpl7TvvIzpu5jorqTkuLrku4rlpKlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGx1bmFyIOaYvuekuuWGnOWOhlxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdGFydERhdGUg5pel5pyf6YCJ5oup6IyD5Zu0LeW8gOWni+aXpeacn1xyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBlbmREYXRlIOaXpeacn+mAieaLqeiMg+WbtC3nu5PmnZ/ml6XmnJ9cclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHJhbmdlIOiMg+WbtOmAieaLqVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaW5zZXJ0ID0gW3RydWV8ZmFsc2VdIOaPkuWFpeaooeW8jyzpu5jorqTkuLpmYWxzZVxyXG5cdCAqIFx0QHZhbHVlIHRydWUg5by556qX5qih5byPXHJcblx0ICogXHRAdmFsdWUgZmFsc2Ug5o+S5YWl5qih5byPXHJcblx0ICogQHByb3BlcnR5IHtBcnJheX0gc2VsZWN0ZWQg5omT54K577yM5pyf5b6F5qC85byPW3tkYXRlOiAnMjAxOS0wNi0yNycsIGluZm86ICfnrb7liLAnLCBkYXRhOiB7IGN1c3RvbTogJ+iHquWumuS5ieS/oeaBrycsIG5hbWU6ICfoh6rlrprkuYnmtojmga/lpLQnLHh4eDp4eHguLi4gfX1dXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93TW9udGgg5piv5ZCm6YCJ5oup5pyI5Lu95Li66IOM5pmvXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2hhbmdlIOaXpeacn+aUueWPmO+8jGBpbnNlcnQgOnR1cmVgIOaXtueUn+aViFxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNvbmZpcm0g56Gu6K6k6YCJ5oupYGluc2VydCA6ZmFsc2VgIOaXtueUn+aViFxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IG1vbnRoU3dpdGNoIOWIh+aNouaciOS7veaXtuinpuWPkVxyXG5cdCAqIEBleGFtcGxlIDx1bmktY2FsZW5kYXIgOmluc2VydD1cInRydWVcIjpsdW5hcj1cInRydWVcIiA6c3RhcnQtZGF0ZT1cIicyMDE5LTMtMidcIjplbmQtZGF0ZT1cIicyMDE5LTUtMjAnXCJAY2hhbmdlPVwiY2hhbmdlXCIgLz5cclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaUNhbGVuZGFySXRlbVxyXG5cdFx0fSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGRhdGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VsZWN0ZWQ6IHtcclxuXHRcdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0bHVuYXI6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXJ0RGF0ZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbmREYXRlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbnNlcnQ6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd01vbnRoOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdHdlZWtzOiBbXSxcclxuXHRcdFx0XHRjYWxlbmRhcjoge30sXHJcblx0XHRcdFx0bm93RGF0ZTogJycsXHJcblx0XHRcdFx0YW5pTWFza1Nob3c6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRzZWxlY3RlZChuZXdWYWwpIHtcclxuXHRcdFx0XHR0aGlzLmNhbGUuc2V0U2VsZWN0SW5mbyh0aGlzLm5vd0RhdGUuZnVsbERhdGUsIG5ld1ZhbClcclxuXHRcdFx0XHR0aGlzLndlZWtzID0gdGhpcy5jYWxlLndlZWtzXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyDojrflj5bml6Xljobmlrnms5Xlrp7kvotcclxuXHRcdFx0dGhpcy5jYWxlID0gbmV3IENhbGVuZGFyKHtcclxuXHRcdFx0XHRkYXRlOiB0aGlzLmRhdGUsXHJcblx0XHRcdFx0c2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXHJcblx0XHRcdFx0c3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcclxuXHRcdFx0XHRlbmREYXRlOiB0aGlzLmVuZERhdGUsXHJcblx0XHRcdFx0cmFuZ2U6IHRoaXMucmFuZ2UsXHJcblx0XHRcdH0pXHJcblx0XHRcdHRoaXMuaW5pdCh0aGlzLmNhbGUuZGF0ZS5mdWxsRGF0ZSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOWPlua2iOepv+mAj1xyXG5cdFx0XHRjbGVhbigpIHt9LFxyXG5cdFx0XHRpbml0KGRhdGUpIHtcclxuXHRcdFx0XHR0aGlzLndlZWtzID0gdGhpcy5jYWxlLndlZWtzXHJcblx0XHRcdFx0dGhpcy5ub3dEYXRlID0gdGhpcy5jYWxlbmRhciA9IHRoaXMuY2FsZS5nZXRJbmZvKGRhdGUpXHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW4oKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFuaU1hc2tTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0fSwgNTApXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy5hbmlNYXNrU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29uZmlybSgpIHtcclxuXHRcdFx0XHR0aGlzLnNldEVtaXQoJ2NvbmZpcm0nKVxyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2UoKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmluc2VydCkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5zZXRFbWl0KCdjaGFuZ2UnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb250aFN3aXRjaCgpIHtcclxuXHRcdFx0XHRsZXQge1xyXG5cdFx0XHRcdFx0eWVhcixcclxuXHRcdFx0XHRcdG1vbnRoXHJcblx0XHRcdFx0fSA9IHRoaXMubm93RGF0ZVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ21vbnRoU3dpdGNoJywge1xyXG5cdFx0XHRcdFx0eWVhcixcclxuXHRcdFx0XHRcdG1vbnRoOiBOdW1iZXIobW9udGgpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0RW1pdChuYW1lKSB7XHJcblx0XHRcdFx0bGV0IHtcclxuXHRcdFx0XHRcdHllYXIsXHJcblx0XHRcdFx0XHRtb250aCxcclxuXHRcdFx0XHRcdGRhdGUsXHJcblx0XHRcdFx0XHRmdWxsRGF0ZSxcclxuXHRcdFx0XHRcdGx1bmFyLFxyXG5cdFx0XHRcdFx0ZXh0cmFJbmZvXHJcblx0XHRcdFx0fSA9IHRoaXMuY2FsZW5kYXJcclxuXHRcdFx0XHR0aGlzLiRlbWl0KG5hbWUsIHtcclxuXHRcdFx0XHRcdHJhbmdlOiB0aGlzLmNhbGUubXVsdGlwbGVTdGF0dXMsXHJcblx0XHRcdFx0XHR5ZWFyLFxyXG5cdFx0XHRcdFx0bW9udGgsXHJcblx0XHRcdFx0XHRkYXRlLFxyXG5cdFx0XHRcdFx0ZnVsbGRhdGU6IGZ1bGxEYXRlLFxyXG5cdFx0XHRcdFx0bHVuYXIsXHJcblx0XHRcdFx0XHRleHRyYUluZm86IGV4dHJhSW5mbyB8fCB7fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGNob2ljZURhdGUod2Vla3MpIHtcclxuXHRcdFx0XHRpZiAod2Vla3MuZGlzYWJsZSkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5jYWxlbmRhciA9IHdlZWtzXHJcblx0XHRcdFx0Ly8g6K6+572u5aSa6YCJXHJcblx0XHRcdFx0dGhpcy5jYWxlLnNldE11bHRpcGxlKHRoaXMuY2FsZW5kYXIuZnVsbERhdGUpXHJcblx0XHRcdFx0dGhpcy53ZWVrcyA9IHRoaXMuY2FsZS53ZWVrc1xyXG5cdFx0XHRcdHRoaXMuY2hhbmdlKClcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFja3RvZGF5KCkge1xyXG5cdFx0XHRcdHRoaXMuY2FsZS5zZXREYXRlKHRoaXMuZGF0ZSlcclxuXHRcdFx0XHR0aGlzLndlZWtzID0gdGhpcy5jYWxlLndlZWtzXHJcblx0XHRcdFx0dGhpcy5ub3dEYXRlID0gdGhpcy5jYWxlbmRhciA9IHRoaXMuY2FsZS5nZXRJbmZvKHRoaXMuZGF0ZSlcclxuXHRcdFx0XHR0aGlzLmNoYW5nZSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdHByZSgpIHtcclxuXHRcdFx0XHRjb25zdCBwcmVEYXRlID0gdGhpcy5jYWxlLmdldERhdGUodGhpcy5ub3dEYXRlLmZ1bGxEYXRlLCAtMSwgJ21vbnRoJykuZnVsbERhdGVcclxuXHRcdFx0XHR0aGlzLnNldERhdGUocHJlRGF0ZSlcclxuXHRcdFx0XHR0aGlzLm1vbnRoU3dpdGNoKClcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdG5leHQoKSB7XHJcblx0XHRcdFx0Y29uc3QgbmV4dERhdGUgPSB0aGlzLmNhbGUuZ2V0RGF0ZSh0aGlzLm5vd0RhdGUuZnVsbERhdGUsICsxLCAnbW9udGgnKS5mdWxsRGF0ZVxyXG5cdFx0XHRcdHRoaXMuc2V0RGF0ZShuZXh0RGF0ZSlcclxuXHRcdFx0XHR0aGlzLm1vbnRoU3dpdGNoKClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0RGF0ZShkYXRlKSB7XHJcblx0XHRcdFx0dGhpcy5jYWxlLnNldERhdGUoZGF0ZSlcclxuXHRcdFx0XHR0aGlzLndlZWtzID0gdGhpcy5jYWxlLndlZWtzXHJcblx0XHRcdFx0dGhpcy5ub3dEYXRlID0gdGhpcy5jYWxlLmdldEluZm8oZGF0ZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51bmktY2FsZW5kYXIge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdC51bmktY2FsZW5kYXJfX21hc2sge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktY2FsZW5kYXItLW1hc2stc2hvdyB7XHJcblx0XHRvcGFjaXR5OiAxXHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyLS1maXhlZCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ2MHB4KTtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyLS1hbmktc2hvdyB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyX19jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyX19oZWFkZXIge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNlNWU1ZTU7XHJcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuXHR9XHJcblxyXG5cdC51bmktY2FsZW5kYXItLWZpeGVkLXRvcCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogI2U1ZTVlNTtcclxuXHRcdGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhci0tZml4ZWQtd2lkdGgge1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHQvKiBwYWRkaW5nOiAwIDE1cHg7XHJcbiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhcl9fYmFja3RvZGF5IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dG9wOiAyNXJweDtcclxuXHRcdHBhZGRpbmc6IDAgNXB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0aGVpZ2h0OiAyNXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI1cHg7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHR9XHJcblxyXG5cdC51bmktY2FsZW5kYXJfX2hlYWRlci10ZXh0IHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblxyXG5cdC51bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHR9XHJcblxyXG5cdC51bmktY2FsZW5kYXJfX2hlYWRlci1idG4ge1xyXG5cdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHRib3JkZXItbGVmdC1jb2xvcjogIzgwODA4MDtcclxuXHRcdGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjNTU1NTU1O1xyXG5cdFx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAycHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyLS1sZWZ0IHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyLS1yaWdodCB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG5cdH1cclxuXHJcblxyXG5cdC51bmktY2FsZW5kYXJfX3dlZWtzIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyX193ZWVrcy1pdGVtIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyX193ZWVrcy1kYXkge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjRjVGNUY1O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyX19ib3gge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhcl9fYm94LWJnIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC51bmktY2FsZW5kYXJfX2JveC1iZy10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjAwcHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0b3BhY2l0eTogMC4xO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IENBTEVOREFSIGZyb20gJy4vY2FsZW5kYXIuanMnXHJcblxyXG5jbGFzcyBDYWxlbmRhciB7XHJcblx0Y29uc3RydWN0b3Ioe1xyXG5cdFx0ZGF0ZSxcclxuXHRcdHNlbGVjdGVkLFxyXG5cdFx0c3RhcnREYXRlLFxyXG5cdFx0ZW5kRGF0ZSxcclxuXHRcdHJhbmdlXHJcblx0fSA9IHt9KSB7XHJcblx0XHQvLyDlvZPliY3ml6XmnJ9cclxuXHRcdHRoaXMuZGF0ZSA9IHRoaXMuZ2V0RGF0ZShkYXRlKSAvLyDlvZPliY3liJ3lhaXml6XmnJ9cclxuXHRcdC8vIOaJk+eCueS/oeaBr1xyXG5cdFx0dGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkIHx8IFtdO1xyXG5cdFx0Ly8g6IyD5Zu05byA5aeLXHJcblx0XHR0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVxyXG5cdFx0Ly8g6IyD5Zu057uT5p2fXHJcblx0XHR0aGlzLmVuZERhdGUgPSBlbmREYXRlXHJcblx0XHR0aGlzLnJhbmdlID0gcmFuZ2VcclxuXHRcdC8vIOWkmumAieeKtuaAgVxyXG5cdFx0dGhpcy5tdWx0aXBsZVN0YXR1cyA9IHtcclxuXHRcdFx0YmVmb3JlOiAnJyxcclxuXHRcdFx0YWZ0ZXI6ICcnLFxyXG5cdFx0XHRkYXRhOiBbXVxyXG5cdFx0fVxyXG5cdFx0Ly8g5q+P5ZGo5pel5pyfXHJcblx0XHR0aGlzLndlZWtzID0ge31cclxuXHJcblx0XHR0aGlzLl9nZXRXZWVrKHRoaXMuZGF0ZS5mdWxsRGF0ZSlcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOiOt+WPluS7u+aEj+aXtumXtFxyXG5cdCAqL1xyXG5cdGdldERhdGUoZGF0ZSwgQWRkRGF5Q291bnQgPSAwLCBzdHIgPSAnZGF5Jykge1xyXG5cdFx0aWYgKCFkYXRlKSB7XHJcblx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgpXHJcblx0XHR9XHJcblx0XHRpZiAodHlwZW9mIGRhdGUgIT09ICdvYmplY3QnKSB7XHJcblx0XHRcdGRhdGUgPSBkYXRlLnJlcGxhY2UoLy0vZywgJy8nKVxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZGQgPSBuZXcgRGF0ZShkYXRlKVxyXG5cdFx0c3dpdGNoIChzdHIpIHtcclxuXHRcdFx0Y2FzZSAnZGF5JzpcclxuXHRcdFx0XHRkZC5zZXREYXRlKGRkLmdldERhdGUoKSArIEFkZERheUNvdW50KSAvLyDojrflj5ZBZGREYXlDb3VudOWkqeWQjueahOaXpeacn1xyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJ21vbnRoJzpcclxuXHRcdFx0XHRpZiAoZGQuZ2V0RGF0ZSgpID09PSAzMSkge1xyXG5cdFx0XHRcdFx0ZGQuc2V0RGF0ZShkZC5nZXREYXRlKCkgKyBBZGREYXlDb3VudClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGQuc2V0TW9udGgoZGQuZ2V0TW9udGgoKSArIEFkZERheUNvdW50KSAvLyDojrflj5ZBZGREYXlDb3VudOWkqeWQjueahOaXpeacn1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICd5ZWFyJzpcclxuXHRcdFx0XHRkZC5zZXRGdWxsWWVhcihkZC5nZXRGdWxsWWVhcigpICsgQWRkRGF5Q291bnQpIC8vIOiOt+WPlkFkZERheUNvdW505aSp5ZCO55qE5pel5pyfXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHkgPSBkZC5nZXRGdWxsWWVhcigpXHJcblx0XHRjb25zdCBtID0gZGQuZ2V0TW9udGgoKSArIDEgPCAxMCA/ICcwJyArIChkZC5nZXRNb250aCgpICsgMSkgOiBkZC5nZXRNb250aCgpICsgMSAvLyDojrflj5blvZPliY3mnIjku73nmoTml6XmnJ/vvIzkuI3otrMxMOihpTBcclxuXHRcdGNvbnN0IGQgPSBkZC5nZXREYXRlKCkgPCAxMCA/ICcwJyArIGRkLmdldERhdGUoKSA6IGRkLmdldERhdGUoKSAvLyDojrflj5blvZPliY3lh6Dlj7fvvIzkuI3otrMxMOihpTBcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGZ1bGxEYXRlOiB5ICsgJy0nICsgbSArICctJyArIGQsXHJcblx0XHRcdHllYXI6IHksXHJcblx0XHRcdG1vbnRoOiBtLFxyXG5cdFx0XHRkYXRlOiBkLFxyXG5cdFx0XHRkYXk6IGRkLmdldERheSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICog6I635Y+W5LiK5pyI5Ymp5L2Z5aSp5pWwXHJcblx0ICovXHJcblx0X2dldExhc3RNb250aERheXMoZmlyc3REYXksIGZ1bGwpIHtcclxuXHRcdGxldCBkYXRlQXJyID0gW11cclxuXHRcdGZvciAobGV0IGkgPSBmaXJzdERheTsgaSA+IDA7IGktLSkge1xyXG5cdFx0XHRjb25zdCBiZWZvcmVEYXRlID0gbmV3IERhdGUoZnVsbC55ZWFyLCBmdWxsLm1vbnRoIC0gMSwgLWkgKyAxKS5nZXREYXRlKClcclxuXHRcdFx0ZGF0ZUFyci5wdXNoKHtcclxuXHRcdFx0XHRkYXRlOiBiZWZvcmVEYXRlLFxyXG5cdFx0XHRcdG1vbnRoOiBmdWxsLm1vbnRoIC0gMSxcclxuXHRcdFx0XHRsdW5hcjogdGhpcy5nZXRsdW5hcihmdWxsLnllYXIsIGZ1bGwubW9udGggLSAxLCBiZWZvcmVEYXRlKSxcclxuXHRcdFx0XHRkaXNhYmxlOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGF0ZUFyclxyXG5cdH1cclxuXHQvKipcclxuXHQgKiDojrflj5bmnKzmnIjlpKnmlbBcclxuXHQgKi9cclxuXHRfY3VycmVudE1vbnRoRHlzKGRhdGVEYXRhLCBmdWxsKSB7XHJcblx0XHRsZXQgZGF0ZUFyciA9IFtdXHJcblx0XHRsZXQgZnVsbERhdGUgPSB0aGlzLmRhdGUuZnVsbERhdGVcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IGRhdGVEYXRhOyBpKyspIHtcclxuXHRcdFx0bGV0IGlzaW5mbyA9IGZhbHNlXHJcblx0XHRcdGxldCBub3dEYXRlID0gZnVsbC55ZWFyICsgJy0nICsgKGZ1bGwubW9udGggPCAxMCA/XHJcblx0XHRcdFx0ZnVsbC5tb250aCA6IGZ1bGwubW9udGgpICsgJy0nICsgKGkgPCAxMCA/XHJcblx0XHRcdFx0JzAnICsgaSA6IGkpXHJcblx0XHRcdC8vIOaYr+WQpuS7iuWkqVxyXG5cdFx0XHRsZXQgaXNEYXkgPSBmdWxsRGF0ZSA9PT0gbm93RGF0ZVxyXG5cdFx0XHQvLyDojrflj5bmiZPngrnkv6Hmga9cclxuXHRcdFx0bGV0IGluZm8gPSB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQuZmluZCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmRhdGVFcXVhbChub3dEYXRlLCBpdGVtLmRhdGUpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdC8vIOaXpeacn+emgeeUqFxyXG5cdFx0XHRsZXQgZGlzYWJsZUJlZm9yZSA9IHRydWVcclxuXHRcdFx0bGV0IGRpc2FibGVBZnRlciA9IHRydWVcclxuXHRcdFx0aWYgKHRoaXMuc3RhcnREYXRlKSB7XHJcblx0XHRcdFx0bGV0IGRhdGVDb21wQmVmb3JlID0gdGhpcy5kYXRlQ29tcGFyZSh0aGlzLnN0YXJ0RGF0ZSwgZnVsbERhdGUpXHJcblx0XHRcdFx0ZGlzYWJsZUJlZm9yZSA9IHRoaXMuZGF0ZUNvbXBhcmUoZGF0ZUNvbXBCZWZvcmUgPyB0aGlzLnN0YXJ0RGF0ZSA6IGZ1bGxEYXRlLCBub3dEYXRlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5lbmREYXRlKSB7XHJcblx0XHRcdFx0bGV0IGRhdGVDb21wQWZ0ZXIgPSB0aGlzLmRhdGVDb21wYXJlKGZ1bGxEYXRlLCB0aGlzLmVuZERhdGUpXHJcblx0XHRcdFx0ZGlzYWJsZUFmdGVyID0gdGhpcy5kYXRlQ29tcGFyZShub3dEYXRlLCBkYXRlQ29tcEFmdGVyID8gdGhpcy5lbmREYXRlIDogZnVsbERhdGUpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBtdWx0aXBsZXMgPSB0aGlzLm11bHRpcGxlU3RhdHVzLmRhdGFcclxuXHRcdFx0bGV0IGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRsZXQgbXVsdGlwbGVzU3RhdHVzID0gLTFcclxuXHRcdFx0aWYgKHRoaXMucmFuZ2UpIHtcclxuXHRcdFx0XHRpZiAobXVsdGlwbGVzKSB7XHJcblx0XHRcdFx0XHRtdWx0aXBsZXNTdGF0dXMgPSBtdWx0aXBsZXMuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRhdGVFcXVhbChpdGVtLCBub3dEYXRlKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG11bHRpcGxlc1N0YXR1cyAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRmdWxsRGF0ZTogbm93RGF0ZSxcclxuXHRcdFx0XHR5ZWFyOiBmdWxsLnllYXIsXHJcblx0XHRcdFx0ZGF0ZTogaSxcclxuXHRcdFx0XHRtdWx0aXBsZTogdGhpcy5yYW5nZSA/IGNoZWNrZWQgOiBmYWxzZSxcclxuXHRcdFx0XHRtb250aDogZnVsbC5tb250aCxcclxuXHRcdFx0XHRsdW5hcjogdGhpcy5nZXRsdW5hcihmdWxsLnllYXIsIGZ1bGwubW9udGgsIGkpLFxyXG5cdFx0XHRcdGRpc2FibGU6ICFkaXNhYmxlQmVmb3JlIHx8ICFkaXNhYmxlQWZ0ZXIsXHJcblx0XHRcdFx0aXNEYXlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaW5mbykge1xyXG5cdFx0XHRcdGRhdGEuZXh0cmFJbmZvID0gaW5mb1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkYXRlQXJyLnB1c2goZGF0YSlcclxuXHRcdH1cclxuXHRcdHJldHVybiBkYXRlQXJyXHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIOiOt+WPluS4i+aciOWkqeaVsFxyXG5cdCAqL1xyXG5cdF9nZXROZXh0TW9udGhEYXlzKHN1cnBsdXMsIGZ1bGwpIHtcclxuXHRcdGxldCBkYXRlQXJyID0gW11cclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3VycGx1cyArIDE7IGkrKykge1xyXG5cdFx0XHRkYXRlQXJyLnB1c2goe1xyXG5cdFx0XHRcdGRhdGU6IGksXHJcblx0XHRcdFx0bW9udGg6IE51bWJlcihmdWxsLm1vbnRoKSArIDEsXHJcblx0XHRcdFx0bHVuYXI6IHRoaXMuZ2V0bHVuYXIoZnVsbC55ZWFyLCBOdW1iZXIoZnVsbC5tb250aCkgKyAxLCBpKSxcclxuXHRcdFx0XHRkaXNhYmxlOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGF0ZUFyclxyXG5cdH1cclxuXHQvKipcclxuXHQgKiDorr7nva7ml6XmnJ9cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0ZVxyXG5cdCAqL1xyXG5cdHNldERhdGUoZGF0ZSkge1xyXG5cdFx0dGhpcy5fZ2V0V2VlayhkYXRlKVxyXG5cdH1cclxuXHQvKipcclxuXHQgKiDojrflj5blvZPliY3ml6XmnJ/or6bmg4VcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0ZVxyXG5cdCAqL1xyXG5cdGdldEluZm8oZGF0ZSkge1xyXG5cdFx0aWYgKCFkYXRlKSB7XHJcblx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgpXHJcblx0XHR9XHJcblx0XHRjb25zdCBkYXRlSW5mbyA9IHRoaXMuY2FubGVuZGVyLmZpbmQoaXRlbSA9PiBpdGVtLmZ1bGxEYXRlID09PSB0aGlzLmdldERhdGUoZGF0ZSkuZnVsbERhdGUpXHJcblx0XHRyZXR1cm4gZGF0ZUluZm9cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOavlOi+g+aXtumXtOWkp+Wwj1xyXG5cdCAqL1xyXG5cdGRhdGVDb21wYXJlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG5cdFx0Ly8g6K6h566X5oiq5q2i5pe26Ze0XHJcblx0XHRzdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUucmVwbGFjZSgnLScsICcvJykucmVwbGFjZSgnLScsICcvJykpXHJcblx0XHQvLyDorqHnrpfor6bnu4bpobnnmoTmiKrmraLml7bpl7RcclxuXHRcdGVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlLnJlcGxhY2UoJy0nLCAnLycpLnJlcGxhY2UoJy0nLCAnLycpKVxyXG5cdFx0aWYgKHN0YXJ0RGF0ZSA8PSBlbmREYXRlKSB7XHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOavlOi+g+aXtumXtOaYr+WQpuebuOetiVxyXG5cdCAqL1xyXG5cdGRhdGVFcXVhbChiZWZvcmUsIGFmdGVyKSB7XHJcblx0XHQvLyDorqHnrpfmiKrmraLml7bpl7RcclxuXHRcdGJlZm9yZSA9IG5ldyBEYXRlKGJlZm9yZS5yZXBsYWNlKCctJywgJy8nKS5yZXBsYWNlKCctJywgJy8nKSlcclxuXHRcdC8vIOiuoeeul+ivpue7humhueeahOaIquatouaXtumXtFxyXG5cdFx0YWZ0ZXIgPSBuZXcgRGF0ZShhZnRlci5yZXBsYWNlKCctJywgJy8nKS5yZXBsYWNlKCctJywgJy8nKSlcclxuXHRcdGlmIChiZWZvcmUuZ2V0VGltZSgpIC0gYWZ0ZXIuZ2V0VGltZSgpID09PSAwKSB7XHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiDojrflj5bml6XmnJ/ojIPlm7TlhoXmiYDmnInml6XmnJ9cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gYmVnaW5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZW5kXHJcblx0ICovXHJcblx0Z2VEYXRlQWxsKGJlZ2luLCBlbmQpIHtcclxuXHRcdHZhciBhcnIgPSBbXVxyXG5cdFx0dmFyIGFiID0gYmVnaW4uc3BsaXQoJy0nKVxyXG5cdFx0dmFyIGFlID0gZW5kLnNwbGl0KCctJylcclxuXHRcdHZhciBkYiA9IG5ldyBEYXRlKClcclxuXHRcdGRiLnNldEZ1bGxZZWFyKGFiWzBdLCBhYlsxXSAtIDEsIGFiWzJdKVxyXG5cdFx0dmFyIGRlID0gbmV3IERhdGUoKVxyXG5cdFx0ZGUuc2V0RnVsbFllYXIoYWVbMF0sIGFlWzFdIC0gMSwgYWVbMl0pXHJcblx0XHR2YXIgdW5peERiID0gZGIuZ2V0VGltZSgpIC0gMjQgKiA2MCAqIDYwICogMTAwMFxyXG5cdFx0dmFyIHVuaXhEZSA9IGRlLmdldFRpbWUoKSAtIDI0ICogNjAgKiA2MCAqIDEwMDBcclxuXHRcdGZvciAodmFyIGsgPSB1bml4RGI7IGsgPD0gdW5peERlOykge1xyXG5cdFx0XHRrID0gayArIDI0ICogNjAgKiA2MCAqIDEwMDBcclxuXHRcdFx0YXJyLnB1c2godGhpcy5nZXREYXRlKG5ldyBEYXRlKHBhcnNlSW50KGspKSkuZnVsbERhdGUpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXJyXHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIOiuoeeul+mYtOWOhuaXpeacn+aYvuekulxyXG5cdCAqL1xyXG5cdGdldGx1bmFyKHllYXIsIG1vbnRoLCBkYXRlKSB7XHJcblx0XHRyZXR1cm4gQ0FMRU5EQVIuc29sYXIybHVuYXIoeWVhciwgbW9udGgsIGRhdGUpXHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIOiuvue9ruaJk+eCuVxyXG5cdCAqL1xyXG5cdHNldFNlbGVjdEluZm8oZGF0YSwgdmFsdWUpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZVxyXG5cdFx0dGhpcy5fZ2V0V2VlayhkYXRhKVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogIOiOt+WPluWkmumAieeKtuaAgVxyXG5cdCAqL1xyXG5cdHNldE11bHRpcGxlKGZ1bGxEYXRlKSB7XHJcblx0XHRsZXQge1xyXG5cdFx0XHRiZWZvcmUsXHJcblx0XHRcdGFmdGVyXHJcblx0XHR9ID0gdGhpcy5tdWx0aXBsZVN0YXR1c1xyXG5cdFx0aWYgKCF0aGlzLnJhbmdlKSByZXR1cm5cclxuXHRcdGlmIChiZWZvcmUgJiYgYWZ0ZXIpIHtcclxuXHRcdFx0dGhpcy5tdWx0aXBsZVN0YXR1cy5iZWZvcmUgPSAnJ1xyXG5cdFx0XHR0aGlzLm11bHRpcGxlU3RhdHVzLmFmdGVyID0gJydcclxuXHRcdFx0dGhpcy5tdWx0aXBsZVN0YXR1cy5kYXRhID0gW11cclxuXHRcdFx0dGhpcy5fZ2V0V2VlayhmdWxsRGF0ZSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghYmVmb3JlKSB7XHJcblx0XHRcdFx0dGhpcy5tdWx0aXBsZVN0YXR1cy5iZWZvcmUgPSBmdWxsRGF0ZVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubXVsdGlwbGVTdGF0dXMuYWZ0ZXIgPSBmdWxsRGF0ZVxyXG5cdFx0XHRcdGlmICh0aGlzLmRhdGVDb21wYXJlKHRoaXMubXVsdGlwbGVTdGF0dXMuYmVmb3JlLCB0aGlzLm11bHRpcGxlU3RhdHVzLmFmdGVyKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5tdWx0aXBsZVN0YXR1cy5kYXRhID0gdGhpcy5nZURhdGVBbGwodGhpcy5tdWx0aXBsZVN0YXR1cy5iZWZvcmUsIHRoaXMubXVsdGlwbGVTdGF0dXMuYWZ0ZXIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm11bHRpcGxlU3RhdHVzLmRhdGEgPSB0aGlzLmdlRGF0ZUFsbCh0aGlzLm11bHRpcGxlU3RhdHVzLmFmdGVyLCB0aGlzLm11bHRpcGxlU3RhdHVzLmJlZm9yZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuX2dldFdlZWsoZnVsbERhdGUpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOiOt+WPluavj+WRqOaVsOaNrlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRlRGF0YVxyXG5cdCAqL1xyXG5cdF9nZXRXZWVrKGRhdGVEYXRhKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGZ1bGxEYXRlLFxyXG5cdFx0XHR5ZWFyLFxyXG5cdFx0XHRtb250aCxcclxuXHRcdFx0ZGF0ZSxcclxuXHRcdFx0ZGF5XHJcblx0XHR9ID0gdGhpcy5nZXREYXRlKGRhdGVEYXRhKVxyXG5cdFx0bGV0IGZpcnN0RGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAxKS5nZXREYXkoKVxyXG5cdFx0bGV0IGN1cnJlbnREYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpXHJcblx0XHRsZXQgZGF0ZXMgPSB7XHJcblx0XHRcdGxhc3RNb250aERheXM6IHRoaXMuX2dldExhc3RNb250aERheXMoZmlyc3REYXksIHRoaXMuZ2V0RGF0ZShkYXRlRGF0YSkpLCAvLyDkuIrkuKrmnIjmnKvlsL7lh6DlpKlcclxuXHRcdFx0Y3VycmVudE1vbnRoRHlzOiB0aGlzLl9jdXJyZW50TW9udGhEeXMoY3VycmVudERheSwgdGhpcy5nZXREYXRlKGRhdGVEYXRhKSksIC8vIOacrOaciOWkqeaVsFxyXG5cdFx0XHRuZXh0TW9udGhEYXlzOiBbXSwgLy8g5LiL5Liq5pyI5byA5aeL5Yeg5aSpXHJcblx0XHRcdHdlZWtzOiBbXVxyXG5cdFx0fVxyXG5cdFx0bGV0IGNhbmxlbmRlciA9IFtdXHJcblx0XHRjb25zdCBzdXJwbHVzID0gNDIgLSAoZGF0ZXMubGFzdE1vbnRoRGF5cy5sZW5ndGggKyBkYXRlcy5jdXJyZW50TW9udGhEeXMubGVuZ3RoKVxyXG5cdFx0ZGF0ZXMubmV4dE1vbnRoRGF5cyA9IHRoaXMuX2dldE5leHRNb250aERheXMoc3VycGx1cywgdGhpcy5nZXREYXRlKGRhdGVEYXRhKSlcclxuXHRcdGNhbmxlbmRlciA9IGNhbmxlbmRlci5jb25jYXQoZGF0ZXMubGFzdE1vbnRoRGF5cywgZGF0ZXMuY3VycmVudE1vbnRoRHlzLCBkYXRlcy5uZXh0TW9udGhEYXlzKVxyXG5cdFx0bGV0IHdlZWtzID0ge31cclxuXHRcdC8vIOaLvOaOpeaVsOe7hCAg5LiK5Liq5pyI5byA5aeL5Yeg5aSpICsg5pys5pyI5aSp5pWwKyDkuIvkuKrmnIjlvIDlp4vlh6DlpKlcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2FubGVuZGVyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpICUgNyA9PT0gMCkge1xyXG5cdFx0XHRcdHdlZWtzW3BhcnNlSW50KGkgLyA3KV0gPSBuZXcgQXJyYXkoNylcclxuXHRcdFx0fVxyXG5cdFx0XHR3ZWVrc1twYXJzZUludChpIC8gNyldW2kgJSA3XSA9IGNhbmxlbmRlcltpXVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jYW5sZW5kZXIgPSBjYW5sZW5kZXJcclxuXHRcdHRoaXMud2Vla3MgPSB3ZWVrc1xyXG5cdH1cclxuXHJcblx0Ly/pnZnmgIHmlrnms5VcclxuXHQvLyBzdGF0aWMgaW5pdChkYXRlKSB7XHJcblx0Ly8gXHRpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuXHQvLyBcdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBDYWxlbmRhcihkYXRlKTtcclxuXHQvLyBcdH1cclxuXHQvLyBcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdC8vIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyXHJcbiIsIi8qKlxyXG4qIEAxOTAwLTIxMDDljLrpl7TlhoXnmoTlhazljobjgIHlhpzljobkupLovaxcclxuKiBAY2hhcnNldCBVVEYtOFxyXG4qIEBnaXRodWIgIGh0dHBzOi8vZ2l0aHViLmNvbS9qam9ubGluZS9jYWxlbmRhci5qc1xyXG4qIEBBdXRob3IgIEplYeadqChKSm9ubGluZUBKSm9ubGluZS5DbilcclxuKiBAVGltZSAgICAyMDE0LTctMjFcclxuKiBAVGltZSAgICAyMDE2LTgtMTMgRml4ZWQgMjAzM2hleOOAgUF0dHJpYnV0aW9uIEFubmFsc1xyXG4qIEBUaW1lICAgIDIwMTYtOS0yNSBGaXhlZCBsdW5hciBMZWFwTW9udGggUGFyYW0gQnVnXHJcbiogQFRpbWUgICAgMjAxNy03LTI0IEZpeGVkIHVzZSBnZXRUZXJtIEZ1bmMgUGFyYW0gRXJyb3IudXNlIHNvbGFyIHllYXIsTk9UIGx1bmFyIHllYXJcclxuKiBAVmVyc2lvbiAxLjAuM1xyXG4qIEDlhazljobovazlhpzljobvvJpjYWxlbmRhci5zb2xhcjJsdW5hcigxOTg3LDExLDAxKTsgLy9beW91IGNhbiBpZ25vcmUgcGFyYW1zIG9mIHByZWZpeCAwXVxyXG4qIEDlhpzljobovazlhazljobvvJpjYWxlbmRhci5sdW5hcjJzb2xhcigxOTg3LDA5LDEwKTsgLy9beW91IGNhbiBpZ25vcmUgcGFyYW1zIG9mIHByZWZpeCAwXVxyXG4qL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG52YXIgY2FsZW5kYXIgPSB7XHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOWGnOWOhjE5MDAtMjEwMOeahOa2puWkp+Wwj+S/oeaBr+ihqFxyXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxyXG4gICAgICAqIEByZXR1cm4gSGV4XHJcbiAgICAgICovXHJcbiAgbHVuYXJJbmZvOiBbMHgwNGJkOCwgMHgwNGFlMCwgMHgwYTU3MCwgMHgwNTRkNSwgMHgwZDI2MCwgMHgwZDk1MCwgMHgxNjU1NCwgMHgwNTZhMCwgMHgwOWFkMCwgMHgwNTVkMiwgLy8gMTkwMC0xOTA5XHJcbiAgICAweDA0YWUwLCAweDBhNWI2LCAweDBhNGQwLCAweDBkMjUwLCAweDFkMjU1LCAweDBiNTQwLCAweDBkNmEwLCAweDBhZGEyLCAweDA5NWIwLCAweDE0OTc3LCAvLyAxOTEwLTE5MTlcclxuICAgIDB4MDQ5NzAsIDB4MGE0YjAsIDB4MGI0YjUsIDB4MDZhNTAsIDB4MDZkNDAsIDB4MWFiNTQsIDB4MDJiNjAsIDB4MDk1NzAsIDB4MDUyZjIsIDB4MDQ5NzAsIC8vIDE5MjAtMTkyOVxyXG4gICAgMHgwNjU2NiwgMHgwZDRhMCwgMHgwZWE1MCwgMHgwNmU5NSwgMHgwNWFkMCwgMHgwMmI2MCwgMHgxODZlMywgMHgwOTJlMCwgMHgxYzhkNywgMHgwYzk1MCwgLy8gMTkzMC0xOTM5XHJcbiAgICAweDBkNGEwLCAweDFkOGE2LCAweDBiNTUwLCAweDA1NmEwLCAweDFhNWI0LCAweDAyNWQwLCAweDA5MmQwLCAweDBkMmIyLCAweDBhOTUwLCAweDBiNTU3LCAvLyAxOTQwLTE5NDlcclxuICAgIDB4MDZjYTAsIDB4MGI1NTAsIDB4MTUzNTUsIDB4MDRkYTAsIDB4MGE1YjAsIDB4MTQ1NzMsIDB4MDUyYjAsIDB4MGE5YTgsIDB4MGU5NTAsIDB4MDZhYTAsIC8vIDE5NTAtMTk1OVxyXG4gICAgMHgwYWVhNiwgMHgwYWI1MCwgMHgwNGI2MCwgMHgwYWFlNCwgMHgwYTU3MCwgMHgwNTI2MCwgMHgwZjI2MywgMHgwZDk1MCwgMHgwNWI1NywgMHgwNTZhMCwgLy8gMTk2MC0xOTY5XHJcbiAgICAweDA5NmQwLCAweDA0ZGQ1LCAweDA0YWQwLCAweDBhNGQwLCAweDBkNGQ0LCAweDBkMjUwLCAweDBkNTU4LCAweDBiNTQwLCAweDBiNmEwLCAweDE5NWE2LCAvLyAxOTcwLTE5NzlcclxuICAgIDB4MDk1YjAsIDB4MDQ5YjAsIDB4MGE5NzQsIDB4MGE0YjAsIDB4MGIyN2EsIDB4MDZhNTAsIDB4MDZkNDAsIDB4MGFmNDYsIDB4MGFiNjAsIDB4MDk1NzAsIC8vIDE5ODAtMTk4OVxyXG4gICAgMHgwNGFmNSwgMHgwNDk3MCwgMHgwNjRiMCwgMHgwNzRhMywgMHgwZWE1MCwgMHgwNmI1OCwgMHgwNWFjMCwgMHgwYWI2MCwgMHgwOTZkNSwgMHgwOTJlMCwgLy8gMTk5MC0xOTk5XHJcbiAgICAweDBjOTYwLCAweDBkOTU0LCAweDBkNGEwLCAweDBkYTUwLCAweDA3NTUyLCAweDA1NmEwLCAweDBhYmI3LCAweDAyNWQwLCAweDA5MmQwLCAweDBjYWI1LCAvLyAyMDAwLTIwMDlcclxuICAgIDB4MGE5NTAsIDB4MGI0YTAsIDB4MGJhYTQsIDB4MGFkNTAsIDB4MDU1ZDksIDB4MDRiYTAsIDB4MGE1YjAsIDB4MTUxNzYsIDB4MDUyYjAsIDB4MGE5MzAsIC8vIDIwMTAtMjAxOVxyXG4gICAgMHgwNzk1NCwgMHgwNmFhMCwgMHgwYWQ1MCwgMHgwNWI1MiwgMHgwNGI2MCwgMHgwYTZlNiwgMHgwYTRlMCwgMHgwZDI2MCwgMHgwZWE2NSwgMHgwZDUzMCwgLy8gMjAyMC0yMDI5XHJcbiAgICAweDA1YWEwLCAweDA3NmEzLCAweDA5NmQwLCAweDA0YWZiLCAweDA0YWQwLCAweDBhNGQwLCAweDFkMGI2LCAweDBkMjUwLCAweDBkNTIwLCAweDBkZDQ1LCAvLyAyMDMwLTIwMzlcclxuICAgIDB4MGI1YTAsIDB4MDU2ZDAsIDB4MDU1YjIsIDB4MDQ5YjAsIDB4MGE1NzcsIDB4MGE0YjAsIDB4MGFhNTAsIDB4MWIyNTUsIDB4MDZkMjAsIDB4MGFkYTAsIC8vIDIwNDAtMjA0OVxyXG4gICAgLyoqIEFkZCBCeSBKSm9ubGluZUBKSm9ubGluZS5DbioqL1xyXG4gICAgMHgxNGI2MywgMHgwOTM3MCwgMHgwNDlmOCwgMHgwNDk3MCwgMHgwNjRiMCwgMHgxNjhhNiwgMHgwZWE1MCwgMHgwNmIyMCwgMHgxYTZjNCwgMHgwYWFlMCwgLy8gMjA1MC0yMDU5XHJcbiAgICAweDBhMmUwLCAweDBkMmUzLCAweDBjOTYwLCAweDBkNTU3LCAweDBkNGEwLCAweDBkYTUwLCAweDA1ZDU1LCAweDA1NmEwLCAweDBhNmQwLCAweDA1NWQ0LCAvLyAyMDYwLTIwNjlcclxuICAgIDB4MDUyZDAsIDB4MGE5YjgsIDB4MGE5NTAsIDB4MGI0YTAsIDB4MGI2YTYsIDB4MGFkNTAsIDB4MDU1YTAsIDB4MGFiYTQsIDB4MGE1YjAsIDB4MDUyYjAsIC8vIDIwNzAtMjA3OVxyXG4gICAgMHgwYjI3MywgMHgwNjkzMCwgMHgwNzMzNywgMHgwNmFhMCwgMHgwYWQ1MCwgMHgxNGI1NSwgMHgwNGI2MCwgMHgwYTU3MCwgMHgwNTRlNCwgMHgwZDE2MCwgLy8gMjA4MC0yMDg5XHJcbiAgICAweDBlOTY4LCAweDBkNTIwLCAweDBkYWEwLCAweDE2YWE2LCAweDA1NmQwLCAweDA0YWUwLCAweDBhOWQ0LCAweDBhMmQwLCAweDBkMTUwLCAweDBmMjUyLCAvLyAyMDkwLTIwOTlcclxuICAgIDB4MGQ1MjBdLCAvLyAyMTAwXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOWFrOWOhuavj+S4quaciOS7veeahOWkqeaVsOaZrumAmuihqFxyXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxyXG4gICAgICAqIEByZXR1cm4gTnVtYmVyXHJcbiAgICAgICovXHJcbiAgc29sYXJNb250aDogWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdLFxyXG5cclxuICAvKipcclxuICAgICAgKiDlpKnlubLlnLDmlK/kuYvlpKnlubLpgJ/mn6XooahcclxuICAgICAgKiBAQXJyYXkgT2YgUHJvcGVydHkgdHJhbnNbXCLnlLJcIixcIuS5mVwiLFwi5LiZXCIsXCLkuIFcIixcIuaIilwiLFwi5bexXCIsXCLluppcIixcIui+m1wiLFwi5aOsXCIsXCLnmbhcIl1cclxuICAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xyXG4gICAgICAqL1xyXG4gIEdhbjogWydcXHU3NTMyJywgJ1xcdTRlNTknLCAnXFx1NGUxOScsICdcXHU0ZTAxJywgJ1xcdTYyMGEnLCAnXFx1NWRmMScsICdcXHU1ZTlhJywgJ1xcdThmOWInLCAnXFx1NThlYycsICdcXHU3Njc4J10sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOWkqeW5suWcsOaUr+S5i+WcsOaUr+mAn+afpeihqFxyXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxyXG4gICAgICAqIEB0cmFuc1tcIuWtkFwiLFwi5LiRXCIsXCLlr4VcIixcIuWNr1wiLFwi6L6wXCIsXCLlt7NcIixcIuWNiFwiLFwi5pyqXCIsXCLnlLNcIixcIumFiVwiLFwi5oiMXCIsXCLkuqVcIl1cclxuICAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xyXG4gICAgICAqL1xyXG4gIFpoaTogWydcXHU1YjUwJywgJ1xcdTRlMTEnLCAnXFx1NWJjNScsICdcXHU1MzZmJywgJ1xcdThmYjAnLCAnXFx1NWRmMycsICdcXHU1MzQ4JywgJ1xcdTY3MmEnLCAnXFx1NzUzMycsICdcXHU5MTQ5JywgJ1xcdTYyMGMnLCAnXFx1NGVhNSddLFxyXG5cclxuICAvKipcclxuICAgICAgKiDlpKnlubLlnLDmlK/kuYvlnLDmlK/pgJ/mn6Xooag8PT7nlJ/ogpZcclxuICAgICAgKiBAQXJyYXkgT2YgUHJvcGVydHlcclxuICAgICAgKiBAdHJhbnNbXCLpvKBcIixcIueJm1wiLFwi6JmOXCIsXCLlhZRcIixcIum+mVwiLFwi6JuHXCIsXCLpqaxcIixcIue+ilwiLFwi54y0XCIsXCLpuKFcIixcIueLl1wiLFwi54yqXCJdXHJcbiAgICAgICogQHJldHVybiBDbiBzdHJpbmdcclxuICAgICAgKi9cclxuICBBbmltYWxzOiBbJ1xcdTlmMjAnLCAnXFx1NzI1YicsICdcXHU4NjRlJywgJ1xcdTUxNTQnLCAnXFx1OWY5OScsICdcXHU4NmM3JywgJ1xcdTlhNmMnLCAnXFx1N2Y4YScsICdcXHU3MzM0JywgJ1xcdTllMjEnLCAnXFx1NzJkNycsICdcXHU3MzJhJ10sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIDI06IqC5rCU6YCf5p+l6KGoXHJcbiAgICAgICogQEFycmF5IE9mIFByb3BlcnR5XHJcbiAgICAgICogQHRyYW5zW1wi5bCP5a+SXCIsXCLlpKflr5JcIixcIueri+aYpVwiLFwi6Zuo5rC0XCIsXCLmg4rom7BcIixcIuaYpeWIhlwiLFwi5riF5piOXCIsXCLosLfpm6hcIixcIueri+Wkj1wiLFwi5bCP5ruhXCIsXCLoipLnp41cIixcIuWkj+iHs1wiLFwi5bCP5pqRXCIsXCLlpKfmmpFcIixcIueri+eni1wiLFwi5aSE5pqRXCIsXCLnmb3pnLJcIixcIueni+WIhlwiLFwi5a+S6ZyyXCIsXCLpnJzpmY1cIixcIueri+WGrFwiLFwi5bCP6ZuqXCIsXCLlpKfpm6pcIixcIuWGrOiHs1wiXVxyXG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXHJcbiAgICAgICovXHJcbiAgc29sYXJUZXJtOiBbJ1xcdTVjMGZcXHU1YmQyJywgJ1xcdTU5MjdcXHU1YmQyJywgJ1xcdTdhY2JcXHU2NjI1JywgJ1xcdTk2ZThcXHU2YzM0JywgJ1xcdTYwY2FcXHU4NmYwJywgJ1xcdTY2MjVcXHU1MjA2JywgJ1xcdTZlMDVcXHU2NjBlJywgJ1xcdThjMzdcXHU5NmU4JywgJ1xcdTdhY2JcXHU1OTBmJywgJ1xcdTVjMGZcXHU2ZWUxJywgJ1xcdTgyOTJcXHU3OWNkJywgJ1xcdTU5MGZcXHU4MWYzJywgJ1xcdTVjMGZcXHU2NjkxJywgJ1xcdTU5MjdcXHU2NjkxJywgJ1xcdTdhY2JcXHU3OWNiJywgJ1xcdTU5MDRcXHU2NjkxJywgJ1xcdTc2N2RcXHU5NzMyJywgJ1xcdTc5Y2JcXHU1MjA2JywgJ1xcdTViZDJcXHU5NzMyJywgJ1xcdTk3MWNcXHU5NjRkJywgJ1xcdTdhY2JcXHU1MWFjJywgJ1xcdTVjMGZcXHU5NmVhJywgJ1xcdTU5MjdcXHU5NmVhJywgJ1xcdTUxYWNcXHU4MWYzJ10sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIDE5MDAtMjEwMOWQhOW5tOeahDI06IqC5rCU5pel5pyf6YCf5p+l6KGoXHJcbiAgICAgICogQEFycmF5IE9mIFByb3BlcnR5XHJcbiAgICAgICogQHJldHVybiAweCBzdHJpbmcgRm9yIHNwbGljZVxyXG4gICAgICAqL1xyXG4gIHNUZXJtSW5mbzogWyc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLCAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJywgJzk3YmNmOTdjMzU5ODA4MmM5NWY4Yzk2NWNjOTIwZicsXHJcbiAgICAnOTdiZDBiMDZiZGIwNzIyYzk2NWNlMWNmY2M5MjBmJywgJ2IwMjcwOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLFxyXG4gICAgJzk3YmNmOTdjMzU5ODAxZWM5NWY4Yzk2NWNjOTIwZicsICc5N2JkMGIwNmJkYjA3MjJjOTY1Y2UxY2ZjYzkyMGYnLCAnYjAyNzA5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJyxcclxuICAgICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLCAnOTdiY2Y5N2MzNTk4MDFlYzk1ZjhjOTY1Y2M5MjBmJywgJzk3YmQwYjA2YmRiMDcyMmM5NjVjZTFjZmNjOTIwZicsXHJcbiAgICAnYjAyNzA5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJywgJzk3NzgzOTdiZDE5ODAxZWM5MjEwYzk2NWNjOTIwZScsICc5N2I2Yjk3YmQxOTgwMWVjOTVmOGM5NjVjYzkyMGYnLFxyXG4gICAgJzk3YmQwOTgwMWQ5ODA4MmM5NWY4ZTFjZmNjOTIwZicsICc5N2JkMDk3YmQwOTdjMzZiMGI2ZmM5MjEwYzhkYzInLCAnOTc3ODM5N2JkMTk3YzM2YzkyMTBjOTI3NGM5MWFhJyxcclxuICAgICc5N2I2Yjk3YmQxOTgwMWVjOTVmOGM5NjVjYzkyMGUnLCAnOTdiZDA5ODAxZDk4MDgyYzk1ZjhlMWNmY2M5MjBmJywgJzk3YmQwOTdiZDA5N2MzNmIwYjZmYzkyMTBjOGRjMicsXHJcbiAgICAnOTc3ODM5N2JkMDk3YzM2YzkyMTBjOTI3NGM5MWFhJywgJzk3YjZiOTdiZDE5ODAxZWM5NWY4Yzk2NWNjOTIwZScsICc5N2JjZjk3YzM1OTgwODJjOTVmOGUxY2ZjYzkyMGYnLFxyXG4gICAgJzk3YmQwOTdiZDA5N2MzNmIwYjZmYzkyMTBjOGRjMicsICc5Nzc4Mzk3YmQwOTdjMzZjOTIxMGM5Mjc0YzkxYWEnLCAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJyxcclxuICAgICc5N2JjZjk3YzM1OTgwODJjOTVmOGM5NjVjYzkyMGYnLCAnOTdiZDA5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJywgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsXHJcbiAgICAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJywgJzk3YmNmOTdjMzU5ODA4MmM5NWY4Yzk2NWNjOTIwZicsICc5N2JkMDk3YmQwOTdjMzViMGI2ZmM5MjBmYjA3MjInLFxyXG4gICAgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLCAnOTdiY2Y5N2MzNTk4MDFlYzk1ZjhjOTY1Y2M5MjBmJyxcclxuICAgICc5N2JkMDk3YmQwOTdjMzViMGI2ZmM5MjBmYjA3MjInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJywgJzk3YjZiOTdiZDE5ODAxZWM5MjEwYzk2NWNjOTIwZScsXHJcbiAgICAnOTdiY2Y5N2MzNTk4MDFlYzk1ZjhjOTY1Y2M5MjBmJywgJzk3YmQwOTdiZDA5N2MzNWIwYjZmYzkyMGZiMDcyMicsICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLFxyXG4gICAgJzk3YjZiOTdiZDE5ODAxZWM5MjEwYzk2NWNjOTIwZScsICc5N2JjZjk3YzM1OTgwMWVjOTVmOGM5NjVjYzkyMGYnLCAnOTdiZDA5N2JkMDdmNTk1YjBiNmZjOTIwZmIwNzIyJyxcclxuICAgICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5MjEwYzhkYzInLCAnOTc3ODM5N2JkMTk4MDFlYzkyMTBjOTI3NGM5MjBlJywgJzk3YjZiOTdiZDE5ODAxZWM5NWY4Yzk2NWNjOTIwZicsXHJcbiAgICAnOTdiZDA3ZjUzMDdmNTk1YjBiMGJjOTIwZmIwNzIyJywgJzdmMGUzOTdiZDA5N2MzNmIwYjZmYzkyMTBjOGRjMicsICc5Nzc4Mzk3YmQwOTdjMzZjOTIxMGM5Mjc0YzkyMGUnLFxyXG4gICAgJzk3YjZiOTdiZDE5ODAxZWM5NWY4Yzk2NWNjOTIwZicsICc5N2JkMDdmNTMwN2Y1OTViMGIwYmM5MjBmYjA3MjInLCAnN2YwZTM5N2JkMDk3YzM2YjBiNmZjOTIxMGM4ZGMyJyxcclxuICAgICc5Nzc4Mzk3YmQwOTdjMzZjOTIxMGM5Mjc0YzkxYWEnLCAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJywgJzk3YmQwN2YxNDg3ZjU5NWIwYjBiYzkyMGZiMDcyMicsXHJcbiAgICAnN2YwZTM5N2JkMDk3YzM2YjBiNmZjOTIxMGM4ZGMyJywgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLFxyXG4gICAgJzk3YmNmN2YxNDg3ZjU5NWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzk3YmQwOTdjMzViMGI2ZmM5MjBmYjA3MjInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJyxcclxuICAgICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLCAnOTdiY2Y3ZjE0ODdmNTk1YjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMGZiMDcyMicsXHJcbiAgICAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJywgJzk3YjZiOTdiZDE5ODAxZWM5MjEwYzk2NWNjOTIwZScsICc5N2JjZjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLFxyXG4gICAgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMGZiMDcyMicsICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLCAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJyxcclxuICAgICc5N2JjZjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM5N2JkMDdmNTk1YjBiNmZjOTIwZmIwNzIyJywgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsXHJcbiAgICAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTI3NGM5MjBlJywgJzk3YmNmN2YwZTQ3ZjUzMWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzk3YmQwN2Y1OTViMGIwYmM5MjBmYjA3MjInLFxyXG4gICAgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyMTBjOTFhYScsICc5N2I2Yjk3YmQxOTdjMzZjOTIxMGM5Mjc0YzkyMGUnLCAnOTdiY2Y3ZjBlNDdmNTMxYjBiMGJiMGI2ZmIwNzIyJyxcclxuICAgICc3ZjBlMzk3YmQwN2Y1OTViMGIwYmM5MjBmYjA3MjInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTIxMGM4ZGMyJywgJzk3NzgzOTdiZDA5N2MzNmM5MjEwYzkyNzRjOTIwZScsXHJcbiAgICAnOTdiNmI3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIyJywgJzdmMGUzN2Y1MzA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsICc3ZjBlMzk3YmQwOTdjMzZiMGI2ZmM5MjEwYzhkYzInLFxyXG4gICAgJzk3NzgzOTdiZDA5N2MzNmIwYjcwYzkyNzRjOTFhYScsICc5N2I2YjdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLCAnN2YwZTM3ZjE0ODdmNTk1YjBiMGJiMGI2ZmIwNzIyJyxcclxuICAgICc3ZjBlMzk3YmQwOTdjMzViMGI2ZmM5MjEwYzhkYzInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJywgJzk3YjZiN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsXHJcbiAgICAnN2YwZTI3ZjE0ODdmNTk1YjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMGZiMDcyMicsICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLFxyXG4gICAgJzk3YjZiN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsICc3ZjBlMjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJyxcclxuICAgICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLCAnOTdiNmI3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJywgJzdmMGUyN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsXHJcbiAgICAnN2YwZTM5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJywgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsICc5N2I2YjdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLFxyXG4gICAgJzdmMGUyN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzk3YmQwN2Y1OTViMGIwYmM5MjBmYjA3MjInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJyxcclxuICAgICc5N2I2YjdmMGU0N2Y1MzFiMDcyM2IwNzg3YjA3MjEnLCAnN2YwZTI3ZjBlNDdmNTMxYjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzOTdiZDA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsXHJcbiAgICAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTIxMGM5MWFhJywgJzk3YjZiN2YwZTQ3ZjE0OWIwNzIzYjA3ODdiMDcyMScsICc3ZjBlMjdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjInLFxyXG4gICAgJzdmMGUzOTdiZDA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5MjEwYzhkYzInLCAnOTc3ODM3ZjBlMzdmMTQ5YjA3MjNiMDc4N2IwNzIxJyxcclxuICAgICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjInLCAnN2YwZTM3ZjUzMDdmNTk1YjBiMGJjOTIwZmIwNzIyJywgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMTBjOGRjMicsXHJcbiAgICAnOTc3ODM3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNzIxJywgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsICc3ZjBlMzdmMTQ4N2Y1OTViMGIwYmIwYjZmYjA3MjInLFxyXG4gICAgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMTBjOGRjMicsICc5Nzc4MzdmMGUzN2YxNDk5ODA4MmIwNzg3YjA2YmQnLCAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJyxcclxuICAgICc3ZjBlMjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJywgJzk3NzgzN2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDZiZCcsXHJcbiAgICAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJywgJzdmMGUyN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzk3YmQwOTdjMzViMGI2ZmM5MjBmYjA3MjInLFxyXG4gICAgJzk3NzgzN2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDZiZCcsICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLCAnN2YwZTI3ZjE0ODdmNTMxYjBiMGJiMGI2ZmIwNzIyJyxcclxuICAgICc3ZjBlMzk3YmQwN2Y1OTViMGIwYmM5MjBmYjA3MjInLCAnOTc3ODM3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJywgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsXHJcbiAgICAnN2YwZTI3ZjE0ODdmNTMxYjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzOTdiZDA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsICc5Nzc4MzdmMGUzN2YxNDk5ODA4MmIwNzg3YjA2YmQnLFxyXG4gICAgJzdmMDdlN2YwZTQ3ZjE0OWIwNzIzYjA3ODdiMDcyMScsICc3ZjBlMjdmMGU0N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM5N2JkMDdmNTk1YjBiMGJjOTIwZmIwNzIyJyxcclxuICAgICc5Nzc4MzdmMGUzN2YxNDk5ODA4MmIwNzIzYjA2YmQnLCAnN2YwN2U3ZjBlMzdmMTQ5YjA3MjNiMDc4N2IwNzIxJywgJzdmMGUyN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMicsXHJcbiAgICAnN2YwZTM5N2JkMDdmNTk1YjBiMGJjOTIwZmIwNzIyJywgJzk3NzgzN2YwZTM3ZjE0ODk4MDgyYjA3MjNiMDJkNScsICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA3MjEnLFxyXG4gICAgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMicsICc3ZjBlMzdmMTQ4N2Y1OTViMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM3ZjBlMzdmMTQ4OTgwODJiMDcyM2IwMmQ1JyxcclxuICAgICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA3MjEnLCAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIyJywgJzdmMGUzN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsXHJcbiAgICAnN2YwZTM3ZjBlMzdmMTQ4OTgwODJiMDcyM2IwMmQ1JywgJzdlYzk2N2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDZiZCcsICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLFxyXG4gICAgJzdmMGUzN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzdmMGUzN2YxNDg5ODA4MmIwNzIyOTdjMzUnLCAnN2VjOTY3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJyxcclxuICAgICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLCAnN2YwZTI3ZjE0ODdmNTMxYjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzN2YwZTM3ZjE0ODk4MDgyYjA3MjI5N2MzNScsXHJcbiAgICAnN2VjOTY3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJywgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsICc3ZjBlMjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLFxyXG4gICAgJzdmMGUzN2YwZTM2NmFhODk4MDFlYjA3MjI5N2MzNScsICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA2YmQnLCAnN2YwN2U3ZjBlNDdmMTQ5YjA3MjNiMDc4N2IwNzIxJyxcclxuICAgICc3ZjBlMjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM3ZjBlMzY2YWE4OTgwMWViMDcyMjk3YzM1JywgJzdlYzk2N2YwZTM3ZjE0OTk4MDgyYjA3MjNiMDZiZCcsXHJcbiAgICAnN2YwN2U3ZjBlNDdmMTQ5YjA3MjNiMDc4N2IwNzIxJywgJzdmMGUyN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMicsICc3ZjBlMzdmMGUzNjZhYTg5ODAxZWIwNzIyOTdjMzUnLFxyXG4gICAgJzdlYzk2N2YwZTM3ZjE0OTk4MDgyYjA3MjNiMDZiZCcsICc3ZjA3ZTdmMGUzN2YxNDk5ODA4M2IwNzg3YjA3MjEnLCAnN2YwZTI3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIyJyxcclxuICAgICc3ZjBlMzdmMGUzNjZhYTg5ODAxZWIwNzIyOTdjMzUnLCAnN2VjOTY3ZjBlMzdmMTQ4OTgwODJiMDcyM2IwMmQ1JywgJzdmMDdlN2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDcyMScsXHJcbiAgICAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIyJywgJzdmMGUzNjY2NWI2NmFhODk4MDFlOTgwODI5N2MzNScsICc2NjVmNjdmMGUzN2YxNDg5ODA4MmIwNzIzYjAyZDUnLFxyXG4gICAgJzdlYzk2N2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDcyMScsICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjInLCAnN2YwZTM2NjY1YjY2YTQ0OTgwMWU5ODA4Mjk3YzM1JyxcclxuICAgICc2NjVmNjdmMGUzN2YxNDg5ODA4MmIwNzIzYjAyZDUnLCAnN2VjOTY3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJywgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsXHJcbiAgICAnN2YwZTM2NjY1YjY2YTQ0OTgwMWU5ODA4Mjk3YzM1JywgJzY2NWY2N2YwZTM3ZjE0ODk4MDgyYjA3MjI5N2MzNScsICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA2YmQnLFxyXG4gICAgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsICc3ZjBlMjY2NjViNjZhNDQ5ODAxZTk4MDgyOTdjMzUnLCAnNjY1ZjY3ZjBlMzdmMTQ4OTgwMWViMDcyMjk3YzM1JyxcclxuICAgICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA2YmQnLCAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJywgJzdmMGUyN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMiddLFxyXG5cclxuICAvKipcclxuICAgICAgKiDmlbDlrZfovazkuK3mlofpgJ/mn6XooahcclxuICAgICAgKiBAQXJyYXkgT2YgUHJvcGVydHlcclxuICAgICAgKiBAdHJhbnMgWyfml6UnLCfkuIAnLCfkuownLCfkuIknLCflm5snLCfkupQnLCflha0nLCfkuIMnLCflhasnLCfkuZ0nLCfljYEnXVxyXG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXHJcbiAgICAgICovXHJcbiAgblN0cjE6IFsnXFx1NjVlNScsICdcXHU0ZTAwJywgJ1xcdTRlOGMnLCAnXFx1NGUwOScsICdcXHU1NmRiJywgJ1xcdTRlOTQnLCAnXFx1NTE2ZCcsICdcXHU0ZTAzJywgJ1xcdTUxNmInLCAnXFx1NGU1ZCcsICdcXHU1MzQxJ10sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOaXpeacn+i9rOWGnOWOhuensOWRvOmAn+afpeihqFxyXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxyXG4gICAgICAqIEB0cmFucyBbJ+WInScsJ+WNgScsJ+W7vycsJ+WNhSddXHJcbiAgICAgICogQHJldHVybiBDbiBzdHJpbmdcclxuICAgICAgKi9cclxuICBuU3RyMjogWydcXHU1MjFkJywgJ1xcdTUzNDEnLCAnXFx1NWVmZicsICdcXHU1MzQ1J10sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOaciOS7vei9rOWGnOWOhuensOWRvOmAn+afpeihqFxyXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxyXG4gICAgICAqIEB0cmFucyBbJ+atoycsJ+S4gCcsJ+S6jCcsJ+S4iScsJ+WbmycsJ+S6lCcsJ+WFrScsJ+S4gycsJ+WFqycsJ+S5nScsJ+WNgScsJ+WGrCcsJ+iFiiddXHJcbiAgICAgICogQHJldHVybiBDbiBzdHJpbmdcclxuICAgICAgKi9cclxuICBuU3RyMzogWydcXHU2YjYzJywgJ1xcdTRlOGMnLCAnXFx1NGUwOScsICdcXHU1NmRiJywgJ1xcdTRlOTQnLCAnXFx1NTE2ZCcsICdcXHU0ZTAzJywgJ1xcdTUxNmInLCAnXFx1NGU1ZCcsICdcXHU1MzQxJywgJ1xcdTUxYWMnLCAnXFx1ODE0YSddLFxyXG5cclxuICAvKipcclxuICAgICAgKiDov5Tlm57lhpzljoZ55bm05LiA5pW05bm055qE5oC75aSp5pWwXHJcbiAgICAgICogQHBhcmFtIGx1bmFyIFllYXJcclxuICAgICAgKiBAcmV0dXJuIE51bWJlclxyXG4gICAgICAqIEBlZzp2YXIgY291bnQgPSBjYWxlbmRhci5sWWVhckRheXMoMTk4NykgOy8vY291bnQ9Mzg3XHJcbiAgICAgICovXHJcbiAgbFllYXJEYXlzOiBmdW5jdGlvbiAoeSkge1xyXG4gICAgdmFyIGk7IHZhciBzdW0gPSAzNDhcclxuICAgIGZvciAoaSA9IDB4ODAwMDsgaSA+IDB4ODsgaSA+Pj0gMSkgeyBzdW0gKz0gKHRoaXMubHVuYXJJbmZvW3kgLSAxOTAwXSAmIGkpID8gMSA6IDAgfVxyXG4gICAgcmV0dXJuIChzdW0gKyB0aGlzLmxlYXBEYXlzKHkpKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOi/lOWbnuWGnOWOhnnlubTpl7DmnIjmmK/lk6rkuKrmnIjvvJvoi6V55bm05rKh5pyJ6Zew5pyIIOWImei/lOWbnjBcclxuICAgICAgKiBAcGFyYW0gbHVuYXIgWWVhclxyXG4gICAgICAqIEByZXR1cm4gTnVtYmVyICgwLTEyKVxyXG4gICAgICAqIEBlZzp2YXIgbGVhcE1vbnRoID0gY2FsZW5kYXIubGVhcE1vbnRoKDE5ODcpIDsvL2xlYXBNb250aD02XHJcbiAgICAgICovXHJcbiAgbGVhcE1vbnRoOiBmdW5jdGlvbiAoeSkgeyAvLyDpl7DlrZfnvJbnoIEgXFx1OTVmMFxyXG4gICAgcmV0dXJuICh0aGlzLmx1bmFySW5mb1t5IC0gMTkwMF0gJiAweGYpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICAgICog6L+U5Zue5Yac5Y6GeeW5tOmXsOaciOeahOWkqeaVsCDoi6Xor6XlubTmsqHmnInpl7DmnIjliJnov5Tlm54wXHJcbiAgICAgICogQHBhcmFtIGx1bmFyIFllYXJcclxuICAgICAgKiBAcmV0dXJuIE51bWJlciAoMOOAgTI544CBMzApXHJcbiAgICAgICogQGVnOnZhciBsZWFwTW9udGhEYXkgPSBjYWxlbmRhci5sZWFwRGF5cygxOTg3KSA7Ly9sZWFwTW9udGhEYXk9MjlcclxuICAgICAgKi9cclxuICBsZWFwRGF5czogZnVuY3Rpb24gKHkpIHtcclxuICAgIGlmICh0aGlzLmxlYXBNb250aCh5KSkge1xyXG4gICAgICByZXR1cm4gKCh0aGlzLmx1bmFySW5mb1t5IC0gMTkwMF0gJiAweDEwMDAwKSA/IDMwIDogMjkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDApXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICAgICog6L+U5Zue5Yac5Y6GeeW5tG3mnIjvvIjpnZ7pl7DmnIjvvInnmoTmgLvlpKnmlbDvvIzorqHnrpdt5Li66Zew5pyI5pe255qE5aSp5pWw6K+35L2/55SobGVhcERheXPmlrnms5VcclxuICAgICAgKiBAcGFyYW0gbHVuYXIgWWVhclxyXG4gICAgICAqIEByZXR1cm4gTnVtYmVyICgtMeOAgTI544CBMzApXHJcbiAgICAgICogQGVnOnZhciBNb250aERheSA9IGNhbGVuZGFyLm1vbnRoRGF5cygxOTg3LDkpIDsvL01vbnRoRGF5PTI5XHJcbiAgICAgICovXHJcbiAgbW9udGhEYXlzOiBmdW5jdGlvbiAoeSwgbSkge1xyXG4gICAgaWYgKG0gPiAxMiB8fCBtIDwgMSkgeyByZXR1cm4gLTEgfS8vIOaciOS7veWPguaVsOS7jjHoh7MxMu+8jOWPguaVsOmUmeivr+i/lOWbni0xXHJcbiAgICByZXR1cm4gKCh0aGlzLmx1bmFySW5mb1t5IC0gMTkwMF0gJiAoMHgxMDAwMCA+PiBtKSkgPyAzMCA6IDI5KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOi/lOWbnuWFrOWOhighKXnlubRt5pyI55qE5aSp5pWwXHJcbiAgICAgICogQHBhcmFtIHNvbGFyIFllYXJcclxuICAgICAgKiBAcmV0dXJuIE51bWJlciAoLTHjgIEyOOOAgTI544CBMzDjgIEzMSlcclxuICAgICAgKiBAZWc6dmFyIHNvbGFyTW9udGhEYXkgPSBjYWxlbmRhci5sZWFwRGF5cygxOTg3KSA7Ly9zb2xhck1vbnRoRGF5PTMwXHJcbiAgICAgICovXHJcbiAgc29sYXJEYXlzOiBmdW5jdGlvbiAoeSwgbSkge1xyXG4gICAgaWYgKG0gPiAxMiB8fCBtIDwgMSkgeyByZXR1cm4gLTEgfSAvLyDoi6Xlj4LmlbDplJnor68g6L+U5ZueLTFcclxuICAgIHZhciBtcyA9IG0gLSAxXHJcbiAgICBpZiAobXMgPT0gMSkgeyAvLyAy5pyI5Lu955qE6Zew5bmz6KeE5b6L5rWL566X5ZCO56Gu6K6k6L+U5ZueMjjmiJYyOVxyXG4gICAgICByZXR1cm4gKCgoeSAlIDQgPT0gMCkgJiYgKHkgJSAxMDAgIT0gMCkgfHwgKHkgJSA0MDAgPT0gMCkpID8gMjkgOiAyOClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5zb2xhck1vbnRoW21zXSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgICAqIOWGnOWOhuW5tOS7vei9rOaNouS4uuW5suaUr+e6quW5tFxyXG4gICAgICogQHBhcmFtICBsWWVhciDlhpzljoblubTnmoTlubTku73mlbBcclxuICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXHJcbiAgICAgKi9cclxuICB0b0dhblpoaVllYXI6IGZ1bmN0aW9uIChsWWVhcikge1xyXG4gICAgdmFyIGdhbktleSA9IChsWWVhciAtIDMpICUgMTBcclxuICAgIHZhciB6aGlLZXkgPSAobFllYXIgLSAzKSAlIDEyXHJcbiAgICBpZiAoZ2FuS2V5ID09IDApIGdhbktleSA9IDEwLy8g5aaC5p6c5L2Z5pWw5Li6MOWImeS4uuacgOWQjuS4gOS4quWkqeW5slxyXG4gICAgaWYgKHpoaUtleSA9PSAwKSB6aGlLZXkgPSAxMi8vIOWmguaenOS9meaVsOS4ujDliJnkuLrmnIDlkI7kuIDkuKrlnLDmlK9cclxuICAgIHJldHVybiB0aGlzLkdhbltnYW5LZXkgLSAxXSArIHRoaXMuWmhpW3poaUtleSAtIDFdXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICAgKiDlhazljobmnIjjgIHml6XliKTmlq3miYDlsZ7mmJ/luqdcclxuICAgICAqIEBwYXJhbSAgY01vbnRoIFtkZXNjcmlwdGlvbl1cclxuICAgICAqIEBwYXJhbSAgY0RheSBbZGVzY3JpcHRpb25dXHJcbiAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgdG9Bc3RybzogZnVuY3Rpb24gKGNNb250aCwgY0RheSkge1xyXG4gICAgdmFyIHMgPSAnXFx1OWI1NFxcdTdmYWZcXHU2YzM0XFx1NzRmNlxcdTUzY2NcXHU5YzdjXFx1NzY3ZFxcdTdmOGFcXHU5MWQxXFx1NzI1YlxcdTUzY2NcXHU1YjUwXFx1NWRlOFxcdTg3ZjlcXHU3MmVlXFx1NWI1MFxcdTU5MDRcXHU1OTczXFx1NTkyOVxcdTc5ZTRcXHU1OTI5XFx1ODc0ZVxcdTVjMDRcXHU2MjRiXFx1OWI1NFxcdTdmYWYnXHJcbiAgICB2YXIgYXJyID0gWzIwLCAxOSwgMjEsIDIxLCAyMSwgMjIsIDIzLCAyMywgMjMsIDIzLCAyMiwgMjJdXHJcbiAgICByZXR1cm4gcy5zdWJzdHIoY01vbnRoICogMiAtIChjRGF5IDwgYXJyW2NNb250aCAtIDFdID8gMiA6IDApLCAyKSArICdcXHU1ZWE3Jy8vIOW6p1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOS8oOWFpW9mZnNldOWBj+enu+mHj+i/lOWbnuW5suaUr1xyXG4gICAgICAqIEBwYXJhbSBvZmZzZXQg55u45a+555Sy5a2Q55qE5YGP56e76YePXHJcbiAgICAgICogQHJldHVybiBDbiBzdHJpbmdcclxuICAgICAgKi9cclxuICB0b0dhblpoaTogZnVuY3Rpb24gKG9mZnNldCkge1xyXG4gICAgcmV0dXJuIHRoaXMuR2FuW29mZnNldCAlIDEwXSArIHRoaXMuWmhpW29mZnNldCAlIDEyXVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAgICAqIOS8oOWFpeWFrOWOhighKXnlubTojrflvpfor6XlubTnrKxu5Liq6IqC5rCU55qE5YWs5Y6G5pel5pyfXHJcbiAgICAgICogQHBhcmFtIHnlhazljoblubQoMTkwMC0yMTAwKe+8m27kuozljYHlm5voioLmsJTkuK3nmoTnrKzlh6DkuKroioLmsJQoMX4yNCnvvJvku45uPTEo5bCP5a+SKeeul+i1t1xyXG4gICAgICAqIEByZXR1cm4gZGF5IE51bWJlclxyXG4gICAgICAqIEBlZzp2YXIgXzI0ID0gY2FsZW5kYXIuZ2V0VGVybSgxOTg3LDMpIDsvL18yND00O+aEj+WNszE5ODflubQy5pyINOaXpeeri+aYpVxyXG4gICAgICAqL1xyXG4gIGdldFRlcm06IGZ1bmN0aW9uICh5LCBuKSB7XHJcbiAgICBpZiAoeSA8IDE5MDAgfHwgeSA+IDIxMDApIHsgcmV0dXJuIC0xIH1cclxuICAgIGlmIChuIDwgMSB8fCBuID4gMjQpIHsgcmV0dXJuIC0xIH1cclxuICAgIHZhciBfdGFibGUgPSB0aGlzLnNUZXJtSW5mb1t5IC0gMTkwMF1cclxuICAgIHZhciBfaW5mbyA9IFtcclxuICAgICAgcGFyc2VJbnQoJzB4JyArIF90YWJsZS5zdWJzdHIoMCwgNSkpLnRvU3RyaW5nKCksXHJcbiAgICAgIHBhcnNlSW50KCcweCcgKyBfdGFibGUuc3Vic3RyKDUsIDUpKS50b1N0cmluZygpLFxyXG4gICAgICBwYXJzZUludCgnMHgnICsgX3RhYmxlLnN1YnN0cigxMCwgNSkpLnRvU3RyaW5nKCksXHJcbiAgICAgIHBhcnNlSW50KCcweCcgKyBfdGFibGUuc3Vic3RyKDE1LCA1KSkudG9TdHJpbmcoKSxcclxuICAgICAgcGFyc2VJbnQoJzB4JyArIF90YWJsZS5zdWJzdHIoMjAsIDUpKS50b1N0cmluZygpLFxyXG4gICAgICBwYXJzZUludCgnMHgnICsgX3RhYmxlLnN1YnN0cigyNSwgNSkpLnRvU3RyaW5nKClcclxuICAgIF1cclxuICAgIHZhciBfY2FsZGF5ID0gW1xyXG4gICAgICBfaW5mb1swXS5zdWJzdHIoMCwgMSksXHJcbiAgICAgIF9pbmZvWzBdLnN1YnN0cigxLCAyKSxcclxuICAgICAgX2luZm9bMF0uc3Vic3RyKDMsIDEpLFxyXG4gICAgICBfaW5mb1swXS5zdWJzdHIoNCwgMiksXHJcblxyXG4gICAgICBfaW5mb1sxXS5zdWJzdHIoMCwgMSksXHJcbiAgICAgIF9pbmZvWzFdLnN1YnN0cigxLCAyKSxcclxuICAgICAgX2luZm9bMV0uc3Vic3RyKDMsIDEpLFxyXG4gICAgICBfaW5mb1sxXS5zdWJzdHIoNCwgMiksXHJcblxyXG4gICAgICBfaW5mb1syXS5zdWJzdHIoMCwgMSksXHJcbiAgICAgIF9pbmZvWzJdLnN1YnN0cigxLCAyKSxcclxuICAgICAgX2luZm9bMl0uc3Vic3RyKDMsIDEpLFxyXG4gICAgICBfaW5mb1syXS5zdWJzdHIoNCwgMiksXHJcblxyXG4gICAgICBfaW5mb1szXS5zdWJzdHIoMCwgMSksXHJcbiAgICAgIF9pbmZvWzNdLnN1YnN0cigxLCAyKSxcclxuICAgICAgX2luZm9bM10uc3Vic3RyKDMsIDEpLFxyXG4gICAgICBfaW5mb1szXS5zdWJzdHIoNCwgMiksXHJcblxyXG4gICAgICBfaW5mb1s0XS5zdWJzdHIoMCwgMSksXHJcbiAgICAgIF9pbmZvWzRdLnN1YnN0cigxLCAyKSxcclxuICAgICAgX2luZm9bNF0uc3Vic3RyKDMsIDEpLFxyXG4gICAgICBfaW5mb1s0XS5zdWJzdHIoNCwgMiksXHJcblxyXG4gICAgICBfaW5mb1s1XS5zdWJzdHIoMCwgMSksXHJcbiAgICAgIF9pbmZvWzVdLnN1YnN0cigxLCAyKSxcclxuICAgICAgX2luZm9bNV0uc3Vic3RyKDMsIDEpLFxyXG4gICAgICBfaW5mb1s1XS5zdWJzdHIoNCwgMilcclxuICAgIF1cclxuICAgIHJldHVybiBwYXJzZUludChfY2FsZGF5W24gLSAxXSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgICAgKiDkvKDlhaXlhpzljobmlbDlrZfmnIjku73ov5Tlm57msYnor63pgJrkv5fooajnpLrms5VcclxuICAgICAgKiBAcGFyYW0gbHVuYXIgbW9udGhcclxuICAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xyXG4gICAgICAqIEBlZzp2YXIgY25Nb250aCA9IGNhbGVuZGFyLnRvQ2hpbmFNb250aCgxMikgOy8vY25Nb250aD0n6IWK5pyIJ1xyXG4gICAgICAqL1xyXG4gIHRvQ2hpbmFNb250aDogZnVuY3Rpb24gKG0pIHsgLy8g5pyIID0+IFxcdTY3MDhcclxuICAgIGlmIChtID4gMTIgfHwgbSA8IDEpIHsgcmV0dXJuIC0xIH0gLy8g6Iul5Y+C5pWw6ZSZ6K+vIOi/lOWbni0xXHJcbiAgICB2YXIgcyA9IHRoaXMublN0cjNbbSAtIDFdXHJcbiAgICBzICs9ICdcXHU2NzA4Jy8vIOWKoOS4iuaciOWtl1xyXG4gICAgcmV0dXJuIHNcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgICAgKiDkvKDlhaXlhpzljobml6XmnJ/mlbDlrZfov5Tlm57msYnlrZfooajnpLrms5VcclxuICAgICAgKiBAcGFyYW0gbHVuYXIgZGF5XHJcbiAgICAgICogQHJldHVybiBDbiBzdHJpbmdcclxuICAgICAgKiBAZWc6dmFyIGNuRGF5ID0gY2FsZW5kYXIudG9DaGluYURheSgyMSkgOy8vY25Nb250aD0n5bu/5LiAJ1xyXG4gICAgICAqL1xyXG4gIHRvQ2hpbmFEYXk6IGZ1bmN0aW9uIChkKSB7IC8vIOaXpSA9PiBcXHU2NWU1XHJcbiAgICB2YXIgc1xyXG4gICAgc3dpdGNoIChkKSB7XHJcbiAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgcyA9ICdcXHU1MjFkXFx1NTM0MSc7IGJyZWFrXHJcbiAgICAgIGNhc2UgMjA6XHJcbiAgICAgICAgcyA9ICdcXHU0ZThjXFx1NTM0MSc7IGJyZWFrXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAzMDpcclxuICAgICAgICBzID0gJ1xcdTRlMDlcXHU1MzQxJzsgYnJlYWtcclxuICAgICAgICBicmVha1xyXG4gICAgICBkZWZhdWx0IDpcclxuICAgICAgICBzID0gdGhpcy5uU3RyMltNYXRoLmZsb29yKGQgLyAxMCldXHJcbiAgICAgICAgcyArPSB0aGlzLm5TdHIxW2QgJSAxMF1cclxuICAgIH1cclxuICAgIHJldHVybiAocylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgICAgKiDlubTku73ovaznlJ/ogpZbIeS7heiDveWkp+iHtOi9rOaNol0gPT4g57K+56Gu5YiS5YiG55Sf6IKW5YiG55WM57q/5piv4oCc56uL5pil4oCdXHJcbiAgICAgICogQHBhcmFtIHkgeWVhclxyXG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXHJcbiAgICAgICogQGVnOnZhciBhbmltYWwgPSBjYWxlbmRhci5nZXRBbmltYWwoMTk4NykgOy8vYW5pbWFsPSflhZQnXHJcbiAgICAgICovXHJcbiAgZ2V0QW5pbWFsOiBmdW5jdGlvbiAoeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuQW5pbWFsc1soeSAtIDQpICUgMTJdXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICAgICog5Lyg5YWl6Ziz5Y6G5bm05pyI5pel6I635b6X6K+m57uG55qE5YWs5Y6G44CB5Yac5Y6Gb2JqZWN05L+h5oGvIDw9PkpTT05cclxuICAgICAgKiBAcGFyYW0geSAgc29sYXIgeWVhclxyXG4gICAgICAqIEBwYXJhbSBtICBzb2xhciBtb250aFxyXG4gICAgICAqIEBwYXJhbSBkICBzb2xhciBkYXlcclxuICAgICAgKiBAcmV0dXJuIEpTT04gb2JqZWN0XHJcbiAgICAgICogQGVnOmNvbnNvbGUubG9nKGNhbGVuZGFyLnNvbGFyMmx1bmFyKDE5ODcsMTEsMDEpKTtcclxuICAgICAgKi9cclxuICBzb2xhcjJsdW5hcjogZnVuY3Rpb24gKHksIG0sIGQpIHsgLy8g5Y+C5pWw5Yy66Ze0MTkwMC4xLjMxfjIxMDAuMTIuMzFcclxuICAgIC8vIOW5tOS7vemZkOWumuOAgeS4iumZkFxyXG4gICAgaWYgKHkgPCAxOTAwIHx8IHkgPiAyMTAwKSB7XHJcbiAgICAgIHJldHVybiAtMS8vIHVuZGVmaW5lZOi9rOaNouS4uuaVsOWtl+WPmOS4uk5hTlxyXG4gICAgfVxyXG4gICAgLy8g5YWs5Y6G5Lyg5Y+C5pyA5LiL6ZmQXHJcbiAgICBpZiAoeSA9PSAxOTAwICYmIG0gPT0gMSAmJiBkIDwgMzEpIHtcclxuICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcbiAgICAvLyDmnKrkvKDlj4IgIOiOt+W+l+W9k+WkqVxyXG4gICAgaWYgKCF5KSB7XHJcbiAgICAgIHZhciBvYmpEYXRlID0gbmV3IERhdGUoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIG9iakRhdGUgPSBuZXcgRGF0ZSh5LCBwYXJzZUludChtKSAtIDEsIGQpXHJcbiAgICB9XHJcbiAgICB2YXIgaTsgdmFyIGxlYXAgPSAwOyB2YXIgdGVtcCA9IDBcclxuICAgIC8vIOS/ruato3ltZOWPguaVsFxyXG4gICAgdmFyIHkgPSBvYmpEYXRlLmdldEZ1bGxZZWFyKClcclxuICAgIHZhciBtID0gb2JqRGF0ZS5nZXRNb250aCgpICsgMVxyXG4gICAgdmFyIGQgPSBvYmpEYXRlLmdldERhdGUoKVxyXG4gICAgdmFyIG9mZnNldCA9IChEYXRlLlVUQyhvYmpEYXRlLmdldEZ1bGxZZWFyKCksIG9iakRhdGUuZ2V0TW9udGgoKSwgb2JqRGF0ZS5nZXREYXRlKCkpIC0gRGF0ZS5VVEMoMTkwMCwgMCwgMzEpKSAvIDg2NDAwMDAwXHJcbiAgICBmb3IgKGkgPSAxOTAwOyBpIDwgMjEwMSAmJiBvZmZzZXQgPiAwOyBpKyspIHtcclxuICAgICAgdGVtcCA9IHRoaXMubFllYXJEYXlzKGkpXHJcbiAgICAgIG9mZnNldCAtPSB0ZW1wXHJcbiAgICB9XHJcbiAgICBpZiAob2Zmc2V0IDwgMCkge1xyXG4gICAgICBvZmZzZXQgKz0gdGVtcDsgaS0tXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5piv5ZCm5LuK5aSpXHJcbiAgICB2YXIgaXNUb2RheU9iaiA9IG5ldyBEYXRlKClcclxuICAgIHZhciBpc1RvZGF5ID0gZmFsc2VcclxuICAgIGlmIChpc1RvZGF5T2JqLmdldEZ1bGxZZWFyKCkgPT0geSAmJiBpc1RvZGF5T2JqLmdldE1vbnRoKCkgKyAxID09IG0gJiYgaXNUb2RheU9iai5nZXREYXRlKCkgPT0gZCkge1xyXG4gICAgICBpc1RvZGF5ID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8g5pif5pyf5YegXHJcbiAgICB2YXIgbldlZWsgPSBvYmpEYXRlLmdldERheSgpXHJcbiAgICB2YXIgY1dlZWsgPSB0aGlzLm5TdHIxW25XZWVrXVxyXG4gICAgLy8g5pWw5a2X6KGo56S65ZGo5Yeg6aG65bqU5aSp5pyd5ZGo5LiA5byA5aeL55qE5oOv5L6LXHJcbiAgICBpZiAobldlZWsgPT0gMCkge1xyXG4gICAgICBuV2VlayA9IDdcclxuICAgIH1cclxuICAgIC8vIOWGnOWOhuW5tFxyXG4gICAgdmFyIHllYXIgPSBpXHJcbiAgICB2YXIgbGVhcCA9IHRoaXMubGVhcE1vbnRoKGkpIC8vIOmXsOWTquS4quaciFxyXG4gICAgdmFyIGlzTGVhcCA9IGZhbHNlXHJcblxyXG4gICAgLy8g5pWI6aqM6Zew5pyIXHJcbiAgICBmb3IgKGkgPSAxOyBpIDwgMTMgJiYgb2Zmc2V0ID4gMDsgaSsrKSB7XHJcbiAgICAgIC8vIOmXsOaciFxyXG4gICAgICBpZiAobGVhcCA+IDAgJiYgaSA9PSAobGVhcCArIDEpICYmIGlzTGVhcCA9PSBmYWxzZSkge1xyXG4gICAgICAgIC0taVxyXG4gICAgICAgIGlzTGVhcCA9IHRydWU7IHRlbXAgPSB0aGlzLmxlYXBEYXlzKHllYXIpIC8vIOiuoeeul+WGnOWOhumXsOaciOWkqeaVsFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlbXAgPSB0aGlzLm1vbnRoRGF5cyh5ZWFyLCBpKS8vIOiuoeeul+WGnOWOhuaZrumAmuaciOWkqeaVsFxyXG4gICAgICB9XHJcbiAgICAgIC8vIOino+mZpOmXsOaciFxyXG4gICAgICBpZiAoaXNMZWFwID09IHRydWUgJiYgaSA9PSAobGVhcCArIDEpKSB7IGlzTGVhcCA9IGZhbHNlIH1cclxuICAgICAgb2Zmc2V0IC09IHRlbXBcclxuICAgIH1cclxuICAgIC8vIOmXsOaciOWvvOiHtOaVsOe7hOS4i+agh+mHjeWPoOWPluWPjVxyXG4gICAgaWYgKG9mZnNldCA9PSAwICYmIGxlYXAgPiAwICYmIGkgPT0gbGVhcCArIDEpIHtcclxuICAgICAgaWYgKGlzTGVhcCkge1xyXG4gICAgICAgIGlzTGVhcCA9IGZhbHNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXNMZWFwID0gdHJ1ZTsgLS1pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgIG9mZnNldCArPSB0ZW1wOyAtLWlcclxuICAgIH1cclxuICAgIC8vIOWGnOWOhuaciFxyXG4gICAgdmFyIG1vbnRoID0gaVxyXG4gICAgLy8g5Yac5Y6G5pelXHJcbiAgICB2YXIgZGF5ID0gb2Zmc2V0ICsgMVxyXG4gICAgLy8g5aSp5bmy5Zyw5pSv5aSE55CGXHJcbiAgICB2YXIgc20gPSBtIC0gMVxyXG4gICAgdmFyIGd6WSA9IHRoaXMudG9HYW5aaGlZZWFyKHllYXIpXHJcblxyXG4gICAgLy8g5b2T5pyI55qE5Lik5Liq6IqC5rCUXHJcbiAgICAvLyBidWdmaXgtMjAxNy03LTI0IDExOjAzOjM4IHVzZSBsdW5hciBZZWFyIFBhcmFtIGB5YCBOb3QgYHllYXJgXHJcbiAgICB2YXIgZmlyc3ROb2RlID0gdGhpcy5nZXRUZXJtKHksIChtICogMiAtIDEpKS8vIOi/lOWbnuW9k+aciOOAjOiKguOAjeS4uuWHoOaXpeW8gOWni1xyXG4gICAgdmFyIHNlY29uZE5vZGUgPSB0aGlzLmdldFRlcm0oeSwgKG0gKiAyKSkvLyDov5Tlm57lvZPmnIjjgIzoioLjgI3kuLrlh6Dml6XlvIDlp4tcclxuXHJcbiAgICAvLyDkvp3mja4xMuiKguawlOS/ruato+W5suaUr+aciFxyXG4gICAgdmFyIGd6TSA9IHRoaXMudG9HYW5aaGkoKHkgLSAxOTAwKSAqIDEyICsgbSArIDExKVxyXG4gICAgaWYgKGQgPj0gZmlyc3ROb2RlKSB7XHJcbiAgICAgIGd6TSA9IHRoaXMudG9HYW5aaGkoKHkgLSAxOTAwKSAqIDEyICsgbSArIDEyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS8oOWFpeeahOaXpeacn+eahOiKguawlOS4juWQplxyXG4gICAgdmFyIGlzVGVybSA9IGZhbHNlXHJcbiAgICB2YXIgVGVybSA9IG51bGxcclxuICAgIGlmIChmaXJzdE5vZGUgPT0gZCkge1xyXG4gICAgICBpc1Rlcm0gPSB0cnVlXHJcbiAgICAgIFRlcm0gPSB0aGlzLnNvbGFyVGVybVttICogMiAtIDJdXHJcbiAgICB9XHJcbiAgICBpZiAoc2Vjb25kTm9kZSA9PSBkKSB7XHJcbiAgICAgIGlzVGVybSA9IHRydWVcclxuICAgICAgVGVybSA9IHRoaXMuc29sYXJUZXJtW20gKiAyIC0gMV1cclxuICAgIH1cclxuICAgIC8vIOaXpeafsSDlvZPmnIjkuIDml6XkuI4gMTkwMC8xLzEg55u45beu5aSp5pWwXHJcbiAgICB2YXIgZGF5Q3ljbGljYWwgPSBEYXRlLlVUQyh5LCBzbSwgMSwgMCwgMCwgMCwgMCkgLyA4NjQwMDAwMCArIDI1NTY3ICsgMTBcclxuICAgIHZhciBnekQgPSB0aGlzLnRvR2FuWmhpKGRheUN5Y2xpY2FsICsgZCAtIDEpXHJcbiAgICAvLyDor6Xml6XmnJ/miYDlsZ7nmoTmmJ/luqdcclxuICAgIHZhciBhc3RybyA9IHRoaXMudG9Bc3RybyhtLCBkKVxyXG5cclxuICAgIHJldHVybiB7ICdsWWVhcic6IHllYXIsICdsTW9udGgnOiBtb250aCwgJ2xEYXknOiBkYXksICdBbmltYWwnOiB0aGlzLmdldEFuaW1hbCh5ZWFyKSwgJ0lNb250aENuJzogKGlzTGVhcCA/ICdcXHU5NWYwJyA6ICcnKSArIHRoaXMudG9DaGluYU1vbnRoKG1vbnRoKSwgJ0lEYXlDbic6IHRoaXMudG9DaGluYURheShkYXkpLCAnY1llYXInOiB5LCAnY01vbnRoJzogbSwgJ2NEYXknOiBkLCAnZ3pZZWFyJzogZ3pZLCAnZ3pNb250aCc6IGd6TSwgJ2d6RGF5JzogZ3pELCAnaXNUb2RheSc6IGlzVG9kYXksICdpc0xlYXAnOiBpc0xlYXAsICduV2Vlayc6IG5XZWVrLCAnbmNXZWVrJzogJ1xcdTY2MWZcXHU2NzFmJyArIGNXZWVrLCAnaXNUZXJtJzogaXNUZXJtLCAnVGVybSc6IFRlcm0sICdhc3Rybyc6IGFzdHJvIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgICAgKiDkvKDlhaXlhpzljoblubTmnIjml6Xku6Xlj4rkvKDlhaXnmoTmnIjku73mmK/lkKbpl7DmnIjojrflvpfor6bnu4bnmoTlhazljobjgIHlhpzljoZvYmplY3Tkv6Hmga8gPD0+SlNPTlxyXG4gICAgICAqIEBwYXJhbSB5ICBsdW5hciB5ZWFyXHJcbiAgICAgICogQHBhcmFtIG0gIGx1bmFyIG1vbnRoXHJcbiAgICAgICogQHBhcmFtIGQgIGx1bmFyIGRheVxyXG4gICAgICAqIEBwYXJhbSBpc0xlYXBNb250aCAgbHVuYXIgbW9udGggaXMgbGVhcCBvciBub3QuW+WmguaenOaYr+WGnOWOhumXsOaciOesrOWbm+S4quWPguaVsOi1i+WAvHRydWXljbPlj69dXHJcbiAgICAgICogQHJldHVybiBKU09OIG9iamVjdFxyXG4gICAgICAqIEBlZzpjb25zb2xlLmxvZyhjYWxlbmRhci5sdW5hcjJzb2xhcigxOTg3LDksMTApKTtcclxuICAgICAgKi9cclxuICBsdW5hcjJzb2xhcjogZnVuY3Rpb24gKHksIG0sIGQsIGlzTGVhcE1vbnRoKSB7IC8vIOWPguaVsOWMuumXtDE5MDAuMS4zMX4yMTAwLjEyLjFcclxuICAgIHZhciBpc0xlYXBNb250aCA9ICEhaXNMZWFwTW9udGhcclxuICAgIHZhciBsZWFwT2Zmc2V0ID0gMFxyXG4gICAgdmFyIGxlYXBNb250aCA9IHRoaXMubGVhcE1vbnRoKHkpXHJcbiAgICB2YXIgbGVhcERheSA9IHRoaXMubGVhcERheXMoeSlcclxuICAgIGlmIChpc0xlYXBNb250aCAmJiAobGVhcE1vbnRoICE9IG0pKSB7IHJldHVybiAtMSB9Ly8g5Lyg5Y+C6KaB5rGC6K6h566X6K+l6Zew5pyI5YWs5Y6GIOS9huivpeW5tOW+l+WHuueahOmXsOaciOS4juS8oOWPgueahOaciOS7veW5tuS4jeWQjFxyXG4gICAgaWYgKHkgPT0gMjEwMCAmJiBtID09IDEyICYmIGQgPiAxIHx8IHkgPT0gMTkwMCAmJiBtID09IDEgJiYgZCA8IDMxKSB7IHJldHVybiAtMSB9Ly8g6LaF5Ye65LqG5pyA5aSn5p6B6ZmQ5YC8XHJcbiAgICB2YXIgZGF5ID0gdGhpcy5tb250aERheXMoeSwgbSlcclxuICAgIHZhciBfZGF5ID0gZGF5XHJcbiAgICAvLyBidWdGaXggMjAxNi05LTI1XHJcbiAgICAvLyBpZiBtb250aCBpcyBsZWFwLCBfZGF5IHVzZSBsZWFwRGF5cyBtZXRob2RcclxuICAgIGlmIChpc0xlYXBNb250aCkge1xyXG4gICAgICBfZGF5ID0gdGhpcy5sZWFwRGF5cyh5LCBtKVxyXG4gICAgfVxyXG4gICAgaWYgKHkgPCAxOTAwIHx8IHkgPiAyMTAwIHx8IGQgPiBfZGF5KSB7IHJldHVybiAtMSB9Ly8g5Y+C5pWw5ZCI5rOV5oCn5pWI6aqMXHJcblxyXG4gICAgLy8g6K6h566X5Yac5Y6G55qE5pe26Ze05beuXHJcbiAgICB2YXIgb2Zmc2V0ID0gMFxyXG4gICAgZm9yICh2YXIgaSA9IDE5MDA7IGkgPCB5OyBpKyspIHtcclxuICAgICAgb2Zmc2V0ICs9IHRoaXMubFllYXJEYXlzKGkpXHJcbiAgICB9XHJcbiAgICB2YXIgbGVhcCA9IDA7IHZhciBpc0FkZCA9IGZhbHNlXHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IG07IGkrKykge1xyXG4gICAgICBsZWFwID0gdGhpcy5sZWFwTW9udGgoeSlcclxuICAgICAgaWYgKCFpc0FkZCkgeyAvLyDlpITnkIbpl7DmnIhcclxuICAgICAgICBpZiAobGVhcCA8PSBpICYmIGxlYXAgPiAwKSB7XHJcbiAgICAgICAgICBvZmZzZXQgKz0gdGhpcy5sZWFwRGF5cyh5KTsgaXNBZGQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG9mZnNldCArPSB0aGlzLm1vbnRoRGF5cyh5LCBpKVxyXG4gICAgfVxyXG4gICAgLy8g6L2s5o2i6Zew5pyI5Yac5Y6GIOmcgOihpeWFheivpeW5tOmXsOaciOeahOWJjeS4gOS4quaciOeahOaXtuW3rlxyXG4gICAgaWYgKGlzTGVhcE1vbnRoKSB7IG9mZnNldCArPSBkYXkgfVxyXG4gICAgLy8gMTkwMOW5tOWGnOWOhuato+aciOS4gOaXpeeahOWFrOWOhuaXtumXtOS4ujE5MDDlubQx5pyIMzDml6Uw5pe2MOWIhjDnp5Io6K+l5pe26Ze05Lmf5piv5pys5Yac5Y6G55qE5pyA5byA5aeL6LW35aeL54K5KVxyXG4gICAgdmFyIHN0bWFwID0gRGF0ZS5VVEMoMTkwMCwgMSwgMzAsIDAsIDAsIDApXHJcbiAgICB2YXIgY2FsT2JqID0gbmV3IERhdGUoKG9mZnNldCArIGQgLSAzMSkgKiA4NjQwMDAwMCArIHN0bWFwKVxyXG4gICAgdmFyIGNZID0gY2FsT2JqLmdldFVUQ0Z1bGxZZWFyKClcclxuICAgIHZhciBjTSA9IGNhbE9iai5nZXRVVENNb250aCgpICsgMVxyXG4gICAgdmFyIGNEID0gY2FsT2JqLmdldFVUQ0RhdGUoKVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNvbGFyMmx1bmFyKGNZLCBjTSwgY0QpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxlbmRhclxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYjYxMjgwNyZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWNhbGVuZGFyLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLWNhbGVuZGFyLWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGI2MTI4MDcmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiNjEyODA3JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBiNjEyODA3XCIsXG4gIFwiMjk1OTc3MGFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY2FsZW5kYXItaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGI2MTI4MDcmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWJveFwiXSxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGVcIjogX3ZtLndlZWtzLmRpc2FibGUsXG4gICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5XCI6XG4gICAgICAgICAgX3ZtLmNhbGVuZGFyLmZ1bGxEYXRlID09PSBfdm0ud2Vla3MuZnVsbERhdGUgJiYgX3ZtLndlZWtzLmlzRGF5LFxuICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkXCI6XG4gICAgICAgICAgX3ZtLmNhbGVuZGFyLmZ1bGxEYXRlID09PSBfdm0ud2Vla3MuZnVsbERhdGUgJiYgIV92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0tbXVsdGlwbGVcIjogX3ZtLndlZWtzLm11bHRpcGxlXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5jaG9pY2VEYXRlKF92bS53ZWVrcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtaXRlbVwiXSB9LCBbXG4gICAgICAgIF92bS5zZWxlY3RlZCAmJiBfdm0ud2Vla3MuZXh0cmFJbmZvXG4gICAgICAgICAgPyBfYyhcInUtdGV4dFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LWNpcmNsZVwiXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LXRleHRcIl0sXG4gICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0XCI6IF92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0taXNEYXlcIjpcbiAgICAgICAgICAgICAgICBfdm0uY2FsZW5kYXIuZnVsbERhdGUgPT09IF92bS53ZWVrcy5mdWxsRGF0ZSAmJiBfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWRcIjpcbiAgICAgICAgICAgICAgICBfdm0uY2FsZW5kYXIuZnVsbERhdGUgPT09IF92bS53ZWVrcy5mdWxsRGF0ZSAmJlxuICAgICAgICAgICAgICAgICFfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLW11bHRpcGxlXCI6IF92bS53ZWVrcy5tdWx0aXBsZSxcbiAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0tZGlzYWJsZVwiOiBfdm0ud2Vla3MuZGlzYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLndlZWtzLmRhdGUpKV1cbiAgICAgICAgKSxcbiAgICAgICAgIV92bS5sdW5hciAmJiAhX3ZtLndlZWtzLmV4dHJhSW5mbyAmJiBfdm0ud2Vla3MuaXNEYXlcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1sdW5hci10ZXh0XCJdLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0XCI6IF92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5XCI6XG4gICAgICAgICAgICAgICAgICAgIF92bS5jYWxlbmRhci5mdWxsRGF0ZSA9PT0gX3ZtLndlZWtzLmZ1bGxEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbGVuZGFyLmZ1bGxEYXRlID09PSBfdm0ud2Vla3MuZnVsbERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLW11bHRpcGxlXCI6IF92bS53ZWVrcy5tdWx0aXBsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuS7iuWkqVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0ubHVuYXIgJiYgIV92bS53ZWVrcy5leHRyYUluZm9cbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1sdW5hci10ZXh0XCJdLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0XCI6IF92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5XCI6XG4gICAgICAgICAgICAgICAgICAgIF92bS5jYWxlbmRhci5mdWxsRGF0ZSA9PT0gX3ZtLndlZWtzLmZ1bGxEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbGVuZGFyLmZ1bGxEYXRlID09PSBfdm0ud2Vla3MuZnVsbERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLW11bHRpcGxlXCI6IF92bS53ZWVrcy5tdWx0aXBsZSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGVcIjogX3ZtLndlZWtzLmRpc2FibGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIF92bS53ZWVrcy5pc0RheVxuICAgICAgICAgICAgICAgICAgICAgID8gXCLku4rlpKlcIlxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLndlZWtzLmx1bmFyLklEYXlDbiA9PT0gXCLliJ3kuIBcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLndlZWtzLmx1bmFyLklNb250aENuXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0ud2Vla3MubHVuYXIuSURheUNuXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLndlZWtzLmV4dHJhSW5mbyAmJiBfdm0ud2Vla3MuZXh0cmFJbmZvLmluZm9cbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1sdW5hci10ZXh0XCJdLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1leHRyYVwiOiBfdm0ud2Vla3MuZXh0cmFJbmZvLmluZm8sXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0XCI6IF92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5XCI6XG4gICAgICAgICAgICAgICAgICAgIF92bS5jYWxlbmRhci5mdWxsRGF0ZSA9PT0gX3ZtLndlZWtzLmZ1bGxEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbGVuZGFyLmZ1bGxEYXRlID09PSBfdm0ud2Vla3MuZnVsbERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLW11bHRpcGxlXCI6IF92bS53ZWVrcy5tdWx0aXBsZSxcbiAgICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGVcIjogX3ZtLndlZWtzLmRpc2FibGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS53ZWVrcy5leHRyYUluZm8uaW5mbykpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3hcIiA6Y2xhc3M9XCJ7XHJcblx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGUnOndlZWtzLmRpc2FibGUsXHJcblx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5JzpjYWxlbmRhci5mdWxsRGF0ZSA9PT0gd2Vla3MuZnVsbERhdGUgJiYgd2Vla3MuaXNEYXksXHJcblx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWQnOihjYWxlbmRhci5mdWxsRGF0ZSA9PT0gd2Vla3MuZnVsbERhdGUgJiYgIXdlZWtzLmlzRGF5KSAsXHJcblx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLW11bHRpcGxlJzogd2Vla3MubXVsdGlwbGVcclxuXHRcdH1cIiBAY2xpY2s9XCJjaG9pY2VEYXRlKHdlZWtzKVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LWl0ZW1cIj5cclxuXHRcdFx0PHRleHQgdi1pZj1cInNlbGVjdGVkJiZ3ZWVrcy5leHRyYUluZm9cIiBjbGFzcz1cInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtY2lyY2xlXCI+PC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtdGV4dFwiIDpjbGFzcz1cIntcclxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5LXRleHQnOiB3ZWVrcy5pc0RheSxcclxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5JzpjYWxlbmRhci5mdWxsRGF0ZSA9PT0gd2Vla3MuZnVsbERhdGUgJiYgd2Vla3MuaXNEYXksXHJcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkJzpjYWxlbmRhci5mdWxsRGF0ZSA9PT0gd2Vla3MuZnVsbERhdGUgJiYgIXdlZWtzLmlzRGF5LFxyXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0tbXVsdGlwbGUnOiB3ZWVrcy5tdWx0aXBsZSxcclxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGUnOndlZWtzLmRpc2FibGUsXHJcblx0XHRcdFx0fVwiPnt7d2Vla3MuZGF0ZX19PC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCB2LWlmPVwiIWx1bmFyJiYhd2Vla3MuZXh0cmFJbmZvICYmIHdlZWtzLmlzRGF5XCIgY2xhc3M9XCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtbHVuYXItdGV4dFwiIDpjbGFzcz1cIntcclxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5LXRleHQnOndlZWtzLmlzRGF5LFxyXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0taXNEYXknOmNhbGVuZGFyLmZ1bGxEYXRlID09PSB3ZWVrcy5mdWxsRGF0ZSAmJiB3ZWVrcy5pc0RheSxcclxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWQnOmNhbGVuZGFyLmZ1bGxEYXRlID09PSB3ZWVrcy5mdWxsRGF0ZSAmJiAhd2Vla3MuaXNEYXksXHJcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZSc6IHdlZWtzLm11bHRpcGxlLFxyXG5cdFx0XHRcdH1cIj7ku4rlpKk8L3RleHQ+XHJcblx0XHRcdDx0ZXh0IHYtaWY9XCJsdW5hciYmIXdlZWtzLmV4dHJhSW5mb1wiIGNsYXNzPVwidW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWx1bmFyLXRleHRcIiA6Y2xhc3M9XCJ7XHJcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0Jzp3ZWVrcy5pc0RheSxcclxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5JzpjYWxlbmRhci5mdWxsRGF0ZSA9PT0gd2Vla3MuZnVsbERhdGUgJiYgd2Vla3MuaXNEYXksXHJcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkJzpjYWxlbmRhci5mdWxsRGF0ZSA9PT0gd2Vla3MuZnVsbERhdGUgJiYgIXdlZWtzLmlzRGF5LFxyXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0tbXVsdGlwbGUnOiB3ZWVrcy5tdWx0aXBsZSxcclxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGUnOndlZWtzLmRpc2FibGUsXHJcblx0XHRcdFx0fVwiPnt7d2Vla3MuaXNEYXk/J+S7iuWkqSc6ICh3ZWVrcy5sdW5hci5JRGF5Q24gPT09ICfliJ3kuIAnP3dlZWtzLmx1bmFyLklNb250aENuOndlZWtzLmx1bmFyLklEYXlDbil9fTwvdGV4dD5cclxuXHRcdFx0PHRleHQgdi1pZj1cIndlZWtzLmV4dHJhSW5mbyYmd2Vla3MuZXh0cmFJbmZvLmluZm9cIiBjbGFzcz1cInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1sdW5hci10ZXh0XCIgOmNsYXNzPVwie1xyXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0tZXh0cmEnOndlZWtzLmV4dHJhSW5mby5pbmZvLFxyXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0taXNEYXktdGV4dCc6d2Vla3MuaXNEYXksXHJcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1pc0RheSc6Y2FsZW5kYXIuZnVsbERhdGUgPT09IHdlZWtzLmZ1bGxEYXRlICYmIHdlZWtzLmlzRGF5LFxyXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0tY2hlY2tlZCc6Y2FsZW5kYXIuZnVsbERhdGUgPT09IHdlZWtzLmZ1bGxEYXRlICYmICF3ZWVrcy5pc0RheSxcclxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLW11bHRpcGxlJzogd2Vla3MubXVsdGlwbGUsXHJcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1kaXNhYmxlJzp3ZWVrcy5kaXNhYmxlLFxyXG5cdFx0XHRcdH1cIj57e3dlZWtzLmV4dHJhSW5mby5pbmZvfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR3ZWVrczoge1xyXG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiB7fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2FsZW5kYXI6IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdFx0ZGVmYXVsdDogKCkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxlY3RlZDoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICgpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0bHVuYXI6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNob2ljZURhdGUod2Vla3MpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB3ZWVrcylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94IHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWx1bmFyLXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtaXRlbSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtY2lyY2xlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNXB4O1xyXG5cdFx0cmlnaHQ6IDVweDtcclxuXHRcdHdpZHRoOiA4cHg7XHJcblx0XHRoZWlnaHQ6IDhweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkZDUyNGQ7XHJcblxyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhci1pdGVtLS1kaXNhYmxlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC4zKTtcclxuXHRcdGNvbG9yOiAjYzBjMGMwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0IHtcclxuXHRcdGNvbG9yOiAjMDA3YWZmO1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhci1pdGVtLS1pc0RheSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWZmO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQudW5pLWNhbGVuZGFyLWl0ZW0tLWV4dHJhIHtcclxuXHRcdGNvbG9yOiAjZGQ1MjRkO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdH1cclxuXHJcblx0LnVuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmY7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdG9wYWNpdHk6IDAuODtcclxuXHR9XHJcblxyXG5cdC51bmktY2FsZW5kYXItaXRlbS0tbXVsdGlwbGUge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2FmZjtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiNjEyODA3JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiNjEyODA3JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWJveFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWJveC10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWx1bmFyLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LWl0ZW1cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBycHhcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtY2lyY2xlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjVcIixcbiAgICBcInJpZ2h0XCI6IFwiNVwiLFxuICAgIFwid2lkdGhcIjogXCI4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGQ1MjRkXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItaXRlbS0tZGlzYWJsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI0OSwyNDksMjQ5LDAuMylcIixcbiAgICBcImNvbG9yXCI6IFwiI2MwYzBjMFwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5LXRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3YWZmXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItaXRlbS0taXNEYXlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2FmZlwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjgsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci1pdGVtLS1leHRyYVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNkZDUyNGRcIixcbiAgICBcIm9wYWNpdHlcIjogMC44XG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2FmZlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOFxuICB9LFxuICBcInVuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YWZmXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm9wYWNpdHlcIjogMC44XG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMmY4ODg4OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDJmODg4ODkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktY2FsZW5kYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX19tYXNrXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjQpXCIsXG4gICAgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogXCJvcGFjaXR5XCIsXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogMzAwLFxuICAgIFwib3BhY2l0eVwiOiAwXG4gIH0sXG4gIFwiQFRSQU5TSVRJT05cIjoge1xuICAgIFwidW5pLWNhbGVuZGFyX19tYXNrXCI6IHtcbiAgICAgIFwicHJvcGVydHlcIjogXCJvcGFjaXR5XCIsXG4gICAgICBcImR1cmF0aW9uXCI6IDMwMFxuICAgIH0sXG4gICAgXCJ1bmktY2FsZW5kYXItLWZpeGVkXCI6IHtcbiAgICAgIFwicHJvcGVydHlcIjogXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwiZHVyYXRpb25cIjogMzAwXG4gICAgfVxuICB9LFxuICBcInVuaS1jYWxlbmRhci0tbWFzay1zaG93XCI6IHtcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9LFxuICBcInVuaS1jYWxlbmRhci0tZml4ZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IFwidHJhbnNmb3JtXCIsXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogMzAwLFxuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSg0NjBweClcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci0tYW5pLXNob3dcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgwKVwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX19jb250ZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9faGVhZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZTVlNWU1XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci0tZml4ZWQtdG9wXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZTVlNWU1XCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci0tZml4ZWQtd2lkdGhcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MFwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX19iYWNrdG9kYXlcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcInRvcFwiOiBcIjI1cnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNVwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI1XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjEyXCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiMjVcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogXCIyNVwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjFmMWYxXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXJfX2hlYWRlci10ZXh0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIxMDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX19oZWFkZXItYnRuLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI1MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiIzgwODA4MFwiLFxuICAgIFwiYm9yZGVyTGVmdFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiIzU1NTU1NVwiLFxuICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIyXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItLWxlZnRcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwicm90YXRlKC00NWRlZylcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci0tcmlnaHRcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwicm90YXRlKDEzNWRlZylcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fd2Vla3NcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX193ZWVrcy1pdGVtXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI0NVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjRjVGNUY1XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNFwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX19ib3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX19ib3gtYmdcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX19ib3gtYmctdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwMFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjEsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYWxlbmRhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYWxlbmRhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImV4YW1wbGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIlxuICB9LFxuICBcImV4YW1wbGUtaW5mb1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIixcbiAgICBcImNvbG9yXCI6IFwiIzNiNDE0NFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJleGFtcGxlLWluZm8tdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjBcIixcbiAgICBcImNvbG9yXCI6IFwiIzNiNDE0NFwiXG4gIH0sXG4gIFwiZXhhbXBsZS1ib2R5XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwid29yZC1idG4td2hpdGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxOFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0blwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3QUZGXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0bi0taG92ZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRjYTJmZlwiXG4gIH0sXG4gIFwiY2FsZW5kYXItYnV0dG9uXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMycnB4XCJcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fRDA2NEZBOVwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImZ1bmN0aW9uIHR5cG9mICh2KSB7XHJcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKCkge1xyXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxyXG4gIH1cclxuXHJcbiAgdmFyIG1zZ3MgPSBhcmdzLm1hcChmdW5jdGlvbiAodikge1xyXG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuXHJcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcclxuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXHJcblxyXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xyXG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHYgPSBTdHJpbmcodilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdlxyXG4gIH0pXHJcbiAgdmFyIG1zZyA9ICcnXHJcblxyXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcclxuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxyXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXHJcblxyXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XHJcbiAgICAgIG1zZyArPSBsYXN0TXNnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbXNnID0gbXNnc1swXVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1zZ1xyXG59XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHNvZnR3YXJlXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxzb2Z0d2FyZVxcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcc29mdHdhcmVcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHt9Il0sInNvdXJjZVJvb3QiOiIifQ==