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
/******/ 	return __webpack_require__(__webpack_require__.s = 133);
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

/***/ 133:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/main.js?{"page":"pages%2FtabBar%2FextUI%2FextUI"} ***!
  \*******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_tabBar_extUI_extUI_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tabBar/extUI/extUI.nvue?mpType=page */ 134);

        
        
        
        _pages_tabBar_extUI_extUI_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_tabBar_extUI_extUI_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/tabBar/extUI/extUI'
        _pages_tabBar_extUI_extUI_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_tabBar_extUI_extUI_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 134:
/*!***********************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/tabBar/extUI/extUI.nvue?mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extUI.nvue?vue&type=template&id=7c5d857a&mpType=page */ 135);
/* harmony import */ var _extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extUI.nvue?vue&type=script&lang=js&mpType=page */ 137);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./extUI.nvue?vue&type=style&index=0&lang=css&mpType=page */ 144).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./extUI.nvue?vue&type=style&index=0&lang=css&mpType=page */ 144).default)
            }

}

/* normalize component */

var component = Object(_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "25efcc7c",
  false,
  _extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/tabBar/extUI/extUI.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 135:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/tabBar/extUI/extUI.nvue?vue&type=template&id=7c5d857a&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./extUI.nvue?vue&type=template&id=7c5d857a&mpType=page */ 136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_template_id_7c5d857a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 136:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/tabBar/extUI/extUI.nvue?vue&type=template&id=7c5d857a&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "view",
        { staticClass: ["uni-container"] },
        [
          _c(
            "view",
            { staticClass: ["uni-header-logo"] },
            [
              _c("u-image", {
                staticClass: ["uni-header-image"],
                attrs: { src: "/static/extuiIndex.png" }
              })
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["uni-hello-text"] },
            [
              _c("u-text", { staticClass: ["hello-text"] }, [
                _vm._v("以下是uni-app扩展组件示例，更多组件见插件市场：")
              ]),
              _c("u-link", {
                staticClass: ["hello-link"],
                attrs: {
                  href: "https://ext.dcloud.net.cn/",
                  text: "https://ext.dcloud.net.cn",
                  inWhiteList: true
                }
              })
            ],
            1
          ),
          _vm._l(_vm.lists, function(item) {
            return _c("view", { key: item.url, staticClass: ["uni-panel"] }, [
              _c(
                "view",
                {
                  staticClass: ["uni-panel-h"],
                  on: {
                    click: function($event) {
                      _vm.goDetailPage(item.url)
                    }
                  }
                },
                [
                  _c("u-text", { staticClass: ["uni-panel-text"] }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _c(
                    "u-text",
                    { staticClass: ["uni-panel-icon", "uni-icon"] },
                    [_vm._v("")]
                  )
                ]
              )
            ])
          })
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 137:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/tabBar/extUI/extUI.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./extUI.nvue?vue&type=script&lang=js&mpType=page */ 138);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 138:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/tabBar/extUI/extUI.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

















var _uLink = _interopRequireDefault(__webpack_require__(/*! @/components/uLink.vue */ 139));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { uLink: _uLink.default }, data: function data() {return { navigateFlag: false, lists: [{ name: "Badge 数字角标", url: "badge" }, { name: "Calendar 日历", url: "calendar" }, { name: "Card 卡片",
        url: "card" },

      {
        name: "Collapse 折叠面板",
        url: "collapse" },

      {
        name: "Countdown 倒计时",
        url: "countdown" },

      {
        name: "Drawer 抽屉",
        url: "drawer" },

      {
        name: "Fab 悬浮按钮",
        url: "fab" },

      {
        name: "Fav 收藏按钮",
        url: "fav" },

      {
        name: "GoodsNav 商品导航",
        url: "goods-nav" },

      {
        name: "Grid 宫格",
        url: "grid" },

      {
        name: "Icons 图标",
        url: "icons" },

      {
        name: "IndexedList 索引列表",
        url: "indexed-list" },

      {
        name: "Link 超链接",
        url: "link" },

      {
        name: "List 列表",
        url: "list" },

      {
        name: "LoadMore 加载更多",
        url: "load-more" },

      {
        name: "NavBar 自定义导航栏",
        url: "nav-bar" },

      {
        name: "NoticeBar 通告栏",
        url: "notice-bar" },

      {
        name: "NumberBox 数字输入框",
        url: "number-box" },

      {
        name: "Pagination 分页器",
        url: "pagination" },

      {
        name: "PopUp 弹出层",
        url: "popup" },

      {
        name: "Rate 评分",
        url: "rate" },

      {
        name: "SearchBar 搜索栏",
        url: "search-bar" },

      {
        name: "SegmentedControl 分段器",
        url: "segmented-control" },

      {
        name: "Steps 步骤条",
        url: "steps" },

      {
        name: "SwipeAction 滑动操作",
        url: "swipe-action" },

      {
        name: "SwiperDot 轮播图指示点",
        url: "swiper-dot" },

      {
        name: "Tag 标签",
        url: "tag" },

      {
        name: "Transition 过渡动画",
        url: "transition" }] };



  },
  onLoad: function onLoad() {},
  onReady: function onReady() {},
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '欢迎体验uni-app',
      path: '/pages/tabBar/extUI/extUI' };

  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: '/pages/about/about' });

  },
  methods: {
    goDetailPage: function goDetailPage(path) {var _this = this;
      if (this.navigateFlag) {
        return;
      }
      this.navigateFlag = true;
      uni.navigateTo({
        url: '/pages/extUI/' + path + '/' + path });

      setTimeout(function () {
        _this.navigateFlag = false;
      }, 200);
    } } };exports.default = _default;

/***/ }),

/***/ 139:
/*!**************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uLink.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uLink.vue?vue&type=template&id=40cbc6d6& */ 140);
/* harmony import */ var _uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uLink.vue?vue&type=script&lang=js& */ 142);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "12acb7ad",
  false,
  _uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 140:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uLink.vue?vue&type=template&id=40cbc6d6& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uLink.vue?vue&type=template&id=40cbc6d6& */ 141);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_template_id_40cbc6d6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 141:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uLink.vue?vue&type=template&id=40cbc6d6& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "u-text",
    {
      staticStyle: { textDecoration: "underline" },
      attrs: { href: _vm.href, inWhiteList: _vm.inWhiteList },
      on: { click: _vm.openURL }
    },
    [_vm._v(_vm._s(_vm.text))]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 142:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uLink.vue?vue&type=script&lang=js& */ 143);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 143:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/components/uLink.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//

/**
 * @description u-link是一个外部网页超链接组件，在小程序内打开内部web-view组件或复制url，在app内打开外部浏览器，在h5端打开新网页
 * @property {String} href 点击后打开的外部网页url，小程序中必须以https://开头
 * @property {String} text 显示的文字
 * @property {Boolean} inWhiteList 是否在小程序白名单中，如果在的话，在小程序端会直接打开内置web-view，否则会只会复制url，提示在外部打开
 * @example * <u-link href="https://ext.dcloud.net.cn" text="https://ext.dcloud.net.cn" :inWhiteList="true"></u-link>
 */var _default =
{
  name: 'u-link',
  props: {
    href: {
      type: String,
      default: '' },

    text: {
      type: String,
      default: '' },

    inWhiteList: {
      type: Boolean,
      default: false } },


  methods: {
    openURL: function openURL() {

      plus.runtime.openURL(this.href); //这里默认使用外部浏览器打开而不是内部web-view组件打开



















    } } };exports.default = _default;

/***/ }),

/***/ 144:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/tabBar/extUI/extUI.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./extUI.nvue?vue&type=style&index=0&lang=css&mpType=page */ 145);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_extUI_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 145:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/pages/tabBar/extUI/extUI.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-icon": {
    "fontFamily": "uniicons",
    "fontWeight": "normal"
  },
  "uni-container": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "backgroundColor": "#f8f8f8"
  },
  "uni-header-logo": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "10upx"
  },
  "uni-header-image": {
    "width": "80",
    "height": "80"
  },
  "uni-hello-text": {
    "marginBottom": "20"
  },
  "hello-text": {
    "color": "#7A7E83",
    "fontSize": "14",
    "lineHeight": "20"
  },
  "hello-link": {
    "color": "#7A7E83",
    "fontSize": "14",
    "lineHeight": "20"
  },
  "uni-panel": {
    "marginBottom": "12"
  },
  "uni-panel-h": {
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12"
  },
  "uni-panel-h-on": {
    "backgroundColor": "#f0f0f0"
  },
  "uni-panel-text": {
    "flex": 1,
    "color": "#000000",
    "fontSize": "14",
    "fontWeight": "normal"
  },
  "uni-panel-icon": {
    "marginLeft": "15",
    "color": "#999999",
    "fontSize": "14",
    "fontWeight": "normal",
    "transform": "rotate(0deg)",
    "transitionDuration": 0,
    "transitionProperty": "transform"
  },
  "@TRANSITION": {
    "uni-panel-icon": {
      "duration": 0,
      "property": "transform"
    }
  },
  "uni-panel-icon-on": {
    "transform": "rotate(180deg)"
  },
  "uni-navigate-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF",
    "borderTopStyle": "solid",
    "borderTopColor": "#f0f0f0",
    "borderTopWidth": "1",
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "backgroundColor:active": "#f8f8f8"
  },
  "uni-navigate-text": {
    "flex": 1,
    "color": "#000000",
    "fontSize": "14",
    "fontWeight": "normal"
  },
  "uni-navigate-icon": {
    "marginLeft": "15",
    "color": "#999999",
    "fontSize": "14",
    "fontWeight": "normal"
  }
}

/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25720200116005","_inBundle":false,"_integrity":"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz","_shasum":"08bb17aba91c84a981f33d74153aa3dd07b578ad","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"a129bde60de35f7ef497f43d5a45b4556231995c","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25720200116005"};

/***/ }),

/***/ 21:
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

/***/ 6:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Naga/Documents/GitHub/student_ubiapp/student-uni/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../fastwarews/HBuilderX.2.6.1.20200226.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_fastwarews_HBuilderX_2_6_1_20200226_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvbWFpbi5qcz8xZDYwIiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvcGFnZXMvdGFiQmFyL2V4dFVJL2V4dFVJLm52dWU/ODE4OCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL3RhYkJhci9leHRVSS9leHRVSS5udnVlPzkyYmYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9wYWdlcy90YWJCYXIvZXh0VUkvZXh0VUkubnZ1ZT80ODYxIiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvcGFnZXMvdGFiQmFyL2V4dFVJL2V4dFVJLm52dWU/N2I2NyIsInVuaS1hcHA6Ly8vcGFnZXMvdGFiQmFyL2V4dFVJL2V4dFVJLm52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VMaW5rLnZ1ZT9mOTI5Iiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvY29tcG9uZW50cy91TGluay52dWU/Y2U4YyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL2NvbXBvbmVudHMvdUxpbmsudnVlP2NhNmMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VMaW5rLnZ1ZT80M2JmIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VMaW5rLnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL3RhYkJhci9leHRVSS9leHRVSS5udnVlPzRjYWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9wYWdlcy90YWJCYXIvZXh0VUkvZXh0VUkubnZ1ZT8wNmNiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvcGFnZXMuanNvbj9kYzE4Iiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvcGFnZXMuanNvbj9jNWNjIiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvbWFpbi5qcz82YWE2Iiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvQXBwLnZ1ZT9mNTdiIiwid2VicGFjazovLy9DOi9Vc2Vycy9OYWdhL0RvY3VtZW50cy9HaXRIdWIvc3R1ZGVudF91YmlhcHAvc3R1ZGVudC11bmkvQXBwLnZ1ZT83NmVjIl0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBLDZEOztBQUVBLElBQU1BLFlBQVksR0FBR0MsZ0JBQXJCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLG1DQUFqQjtBQUNBLElBQU1DLFdBQVcsR0FBRyx1Q0FBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsSUFBdkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsR0FBdEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsRUFBdkI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLGdCQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxpQkFBbkI7O0FBRUEsU0FBU0MsT0FBVCxHQUFtQjtBQUNqQixNQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBLE1BQUlDLGVBQWUsT0FBTyxHQUExQixFQUErQjtBQUM3QixRQUFJO0FBQ0ZELFVBQUksR0FBR0UsSUFBSSxDQUFDQyxPQUFMLENBQWFDLFdBQWIsRUFBUDtBQUNELEtBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkwsVUFBSSxHQUFHLEVBQVA7QUFDRDtBQUNELFdBQU9BLElBQVA7QUFDRDs7QUFFRCxNQUFJO0FBQ0ZBLFFBQUksR0FBR00sR0FBRyxDQUFDQyxjQUFKLENBQW1CVixRQUFuQixDQUFQO0FBQ0QsR0FGRCxDQUVFLE9BQU9RLENBQVAsRUFBVTtBQUNWTCxRQUFJLEdBQUdGLFVBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNFLElBQUwsRUFBVztBQUNUQSxRQUFJLEdBQUdRLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEVBQWIsR0FBa0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBekI7QUFDQSxRQUFJO0FBQ0ZOLFNBQUcsQ0FBQ08sY0FBSixDQUFtQmhCLFFBQW5CLEVBQTZCRyxJQUE3QjtBQUNELEtBRkQsQ0FFRSxPQUFPSyxDQUFQLEVBQVU7QUFDVkMsU0FBRyxDQUFDTyxjQUFKLENBQW1CaEIsUUFBbkIsRUFBNkJDLFVBQTdCO0FBQ0Q7QUFDRjtBQUNELFNBQU9FLElBQVA7QUFDRDs7QUFFRCxJQUFNYyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxRQUFELEVBQWM7QUFDNUIsTUFBSUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsUUFBWixDQUFWO0FBQ0EsTUFBSUksT0FBTyxHQUFHSCxHQUFHLENBQUNJLElBQUosRUFBZDtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxPQUFLLElBQUlDLENBQVQsSUFBY0osT0FBZCxFQUF1QjtBQUNyQkUsUUFBSSxDQUFDRixPQUFPLENBQUNJLENBQUQsQ0FBUixDQUFKLEdBQW1CUixRQUFRLENBQUNJLE9BQU8sQ0FBQ0ksQ0FBRCxDQUFSLENBQTNCO0FBQ0FELFdBQU8sSUFBSUgsT0FBTyxDQUFDSSxDQUFELENBQVAsR0FBYSxHQUFiLEdBQW1CUixRQUFRLENBQUNJLE9BQU8sQ0FBQ0ksQ0FBRCxDQUFSLENBQTNCLEdBQTBDLEdBQXJEO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQSxTQUFPO0FBQ0xDLFFBQUksRUFBRSxFQUREO0FBRUxDLFdBQU8sRUFBRUgsT0FBTyxDQUFDSSxNQUFSLENBQWUsQ0FBZixFQUFrQkosT0FBTyxDQUFDSyxNQUFSLEdBQWlCLENBQW5DLENBRkosRUFBUDs7QUFJRCxDQWhCRDs7QUFrQkEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzVCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0EsT0FBSyxJQUFJUCxDQUFULElBQWNNLElBQWQsRUFBb0I7QUFDbEJDLE9BQUcsSUFBSVAsQ0FBQyxHQUFHLEdBQUosR0FBVU0sSUFBSSxDQUFDTixDQUFELENBQWQsR0FBb0IsR0FBM0I7QUFDRDtBQUNELFNBQU9PLEdBQUcsQ0FBQ0osTUFBSixDQUFXLENBQVgsRUFBY0ksR0FBRyxDQUFDSCxNQUFKLEdBQWEsQ0FBM0IsQ0FBUDtBQUNELENBTkQ7O0FBUUEsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixTQUFPQyxRQUFRLENBQUMsSUFBSXhCLElBQUosR0FBV3VCLE9BQVgsS0FBdUIsSUFBeEIsQ0FBZjtBQUNELENBRkQ7O0FBSUEsSUFBTTlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFNZ0MsWUFBWSxHQUFHO0FBQ25CLGdCQUFZLEdBRE87QUFFbkIsVUFBTSxJQUZhO0FBR25CLGlCQUFhLElBSE07QUFJbkIsaUJBQWEsS0FKTTtBQUtuQixnQkFBWSxJQUxPO0FBTW5CLGtCQUFjLElBTks7QUFPbkIsYUFBUyxJQVBVLEVBQXJCOztBQVNBLFNBQU9BLFlBQVksQ0FBQ0MsVUFBRCxDQUFuQjtBQUNELENBWEQ7O0FBYUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUluQyxlQUFlLE9BQU8sSUFBdEIsSUFBOEJBLGVBQWUsT0FBTyxJQUF4RCxFQUE4RDtBQUM1RDtBQUNBLFFBQUdLLEdBQUcsQ0FBQytCLE9BQUosQ0FBWSxvQkFBWixDQUFILEVBQXFDO0FBQ25DRCxjQUFRLEdBQUc5QixHQUFHLENBQUNnQyxrQkFBSixHQUF5QkMsV0FBekIsQ0FBcUNDLEtBQXJDLElBQThDLEVBQXpEO0FBQ0Q7QUFDRjtBQUNELFNBQU9KLFFBQVA7QUFDRCxDQVREOztBQVdBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsU0FBT3hDLGVBQWUsT0FBTyxHQUF0QixHQUE0QkMsSUFBSSxDQUFDQyxPQUFMLENBQWFaLE9BQXpDLEdBQW1ELEVBQTFEO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNbUQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxZQUFZLEdBQUcxQyxlQUFlLEVBQXBDO0FBQ0EsTUFBSTJDLE9BQU8sR0FBRyxFQUFkO0FBQ0EsTUFBSUQsWUFBWSxLQUFLLEdBQXJCLEVBQTBCO0FBQ3hCQyxXQUFPLEdBQUcxQyxJQUFJLENBQUNDLE9BQUwsQ0FBYXlDLE9BQXZCO0FBQ0Q7QUFDRCxTQUFPQSxPQUFQO0FBQ0QsQ0FQRDs7QUFTQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDcEIsT0FBRCxFQUFhO0FBQzVCLE1BQU1rQixZQUFZLEdBQUcxQyxlQUFlLEVBQXBDO0FBQ0EsTUFBSTZDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSXJCLE9BQUosRUFBYTtBQUNYLFdBQU9BLE9BQVA7QUFDRDtBQUNELE1BQUlrQixZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDekJHLFNBQUssR0FBR3hDLEdBQUcsQ0FBQ3lDLG9CQUFKLEdBQTJCRCxLQUFuQztBQUNEO0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBVkQ7QUFXQSxJQUFNRSx1QkFBdUIsR0FBRyxvQkFBaEM7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxtQkFBL0I7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLE1BQU1DLFVBQVUsR0FBRzdDLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQnlDLHVCQUFuQixDQUFuQjtBQUNBLE1BQUlJLElBQUksR0FBRyxDQUFYO0FBQ0EsTUFBSUQsVUFBSixFQUFnQjtBQUNkQyxRQUFJLEdBQUdELFVBQVA7QUFDRCxHQUZELE1BRU87QUFDTEMsUUFBSSxHQUFHckIsT0FBTyxFQUFkO0FBQ0F6QixPQUFHLENBQUNPLGNBQUosQ0FBbUJtQyx1QkFBbkIsRUFBNENJLElBQTVDO0FBQ0E5QyxPQUFHLENBQUMrQyxpQkFBSixDQUFzQkosc0JBQXRCO0FBQ0Q7QUFDRCxTQUFPRyxJQUFQO0FBQ0QsQ0FYRDs7QUFhQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsTUFBTUgsVUFBVSxHQUFHN0MsR0FBRyxDQUFDQyxjQUFKLENBQW1CMEMsc0JBQW5CLENBQW5CO0FBQ0EsTUFBSUcsSUFBSSxHQUFHLENBQVg7QUFDQSxNQUFJRCxVQUFKLEVBQWdCO0FBQ2RDLFFBQUksR0FBR0QsVUFBUDtBQUNELEdBRkQsTUFFTztBQUNMQyxRQUFJLEdBQUcsRUFBUDtBQUNEO0FBQ0Q5QyxLQUFHLENBQUNPLGNBQUosQ0FBbUJvQyxzQkFBbkIsRUFBMkNsQixPQUFPLEVBQWxEO0FBQ0EsU0FBT3FCLElBQVA7QUFDRCxDQVZEOzs7QUFhQSxJQUFNRyxtQkFBbUIsR0FBRyx5QkFBNUI7QUFDQSxJQUFJQyx5QkFBeUIsR0FBRyxDQUFoQztBQUNBLElBQUlDLHdCQUF3QixHQUFHLENBQS9COzs7QUFHQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakNGLDJCQUF5QixHQUFHekIsT0FBTyxFQUFuQztBQUNBLE1BQUk5QixlQUFlLE9BQU8sR0FBMUIsRUFBK0I7QUFDN0JLLE9BQUcsQ0FBQ08sY0FBSixDQUFtQjBDLG1CQUFuQixFQUF3Q3hCLE9BQU8sRUFBL0M7QUFDRDtBQUNELFNBQU95Qix5QkFBUDtBQUNELENBTkQ7O0FBUUEsSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDRiwwQkFBd0IsR0FBRzFCLE9BQU8sRUFBbEM7QUFDQSxNQUFJOUIsZUFBZSxPQUFPLEdBQTFCLEVBQStCO0FBQzdCdUQsNkJBQXlCLEdBQUdsRCxHQUFHLENBQUNDLGNBQUosQ0FBbUJnRCxtQkFBbkIsQ0FBNUI7QUFDRDtBQUNELFNBQU9FLHdCQUF3QixHQUFHRCx5QkFBbEM7QUFDRCxDQU5EO0FBT0EsSUFBTUksbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLE1BQU1WLFVBQVUsR0FBRzdDLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQnFELG1CQUFuQixDQUFuQjtBQUNBLE1BQUlFLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSVgsVUFBSixFQUFnQjtBQUNkVyxTQUFLLEdBQUdYLFVBQVI7QUFDQVcsU0FBSztBQUNOO0FBQ0R4RCxLQUFHLENBQUNPLGNBQUosQ0FBbUIrQyxtQkFBbkIsRUFBd0NFLEtBQXhDO0FBQ0EsU0FBT0EsS0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTUMsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixDQUFDaEQsUUFBRCxFQUFjO0FBQ2pELE1BQUljLElBQUksR0FBRyxFQUFYO0FBQ0EsT0FBSyxJQUFJbUMsSUFBVCxJQUFpQmpELFFBQWpCLEVBQTJCO0FBQ3pCYyxRQUFJLENBQUNtQyxJQUFELENBQUosR0FBYUMsa0JBQWtCLENBQUNsRCxRQUFRLENBQUNpRCxJQUFELENBQVQsQ0FBL0I7QUFDRDtBQUNELFNBQU9uQyxJQUFQO0FBQ0QsQ0FORDs7QUFRQSxJQUFJcUMsZ0JBQWdCLEdBQUcsQ0FBdkI7QUFDQSxJQUFJQyxlQUFlLEdBQUcsQ0FBdEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixNQUFJaEIsSUFBSSxHQUFHLElBQUk1QyxJQUFKLEdBQVd1QixPQUFYLEVBQVg7QUFDQW1DLGtCQUFnQixHQUFHZCxJQUFuQjtBQUNBZSxpQkFBZSxHQUFHLENBQWxCO0FBQ0EsU0FBT2YsSUFBUDtBQUNELENBTEQ7OztBQVFBLElBQU1pQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLE1BQUlqQixJQUFJLEdBQUcsSUFBSTVDLElBQUosR0FBV3VCLE9BQVgsRUFBWDtBQUNBb0MsaUJBQWUsR0FBR2YsSUFBbEI7QUFDQSxTQUFPQSxJQUFQO0FBQ0QsQ0FKRDs7O0FBT0EsSUFBTWtCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLE1BQUlOLGdCQUFnQixLQUFLLENBQXpCLEVBQTRCO0FBQzFCTSxpQkFBYSxHQUFHTCxlQUFlLEdBQUdELGdCQUFsQztBQUNEOztBQUVETSxlQUFhLEdBQUd4QyxRQUFRLENBQUN3QyxhQUFhLEdBQUcsSUFBakIsQ0FBeEI7QUFDQUEsZUFBYSxHQUFHQSxhQUFhLEdBQUcsQ0FBaEIsR0FBb0IsQ0FBcEIsR0FBd0JBLGFBQXhDO0FBQ0EsTUFBSUQsSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDbEIsUUFBSUUsUUFBUSxHQUFHRCxhQUFhLEdBQUc3RSxhQUFoQixHQUFnQyxJQUFoQyxHQUF1QyxLQUF0RDtBQUNBLFdBQU87QUFDTDZFLG1CQUFhLEVBQWJBLGFBREs7QUFFTEMsY0FBUSxFQUFSQSxRQUZLLEVBQVA7O0FBSUQ7QUFDRCxNQUFJRixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQixRQUFJRSxTQUFRLEdBQUdELGFBQWEsR0FBRzlFLGNBQWhCLEdBQWlDLElBQWpDLEdBQXdDLEtBQXZEO0FBQ0EsV0FBTztBQUNMOEUsbUJBQWEsRUFBYkEsYUFESztBQUVMQyxjQUFRLEVBQVJBLFNBRkssRUFBUDs7QUFJRDs7QUFFRCxTQUFPO0FBQ0xELGlCQUFhLEVBQWJBLGFBREssRUFBUDs7O0FBSUQsQ0EzQkQ7O0FBNkJBLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBSUMsS0FBSyxHQUFHQyxlQUFlLEVBQTNCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixLQUFLLENBQUNBLEtBQUssQ0FBQ2hELE1BQU4sR0FBZSxDQUFoQixDQUFoQjtBQUNBLE1BQUltRCxLQUFLLEdBQUdELElBQUksQ0FBQ0UsR0FBakI7O0FBRUEsTUFBSTlFLGVBQWUsT0FBTyxJQUExQixFQUFnQztBQUM5QixXQUFPNkUsS0FBSyxDQUFDRSxHQUFOLElBQWFGLEtBQUssQ0FBQ0UsR0FBTixDQUFVSCxJQUFWLENBQWVJLEVBQW5DO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBUUgsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBOUIsSUFBeUNMLEtBQUssQ0FBQ0UsR0FBTixJQUFhRixLQUFLLENBQUNFLEdBQU4sQ0FBVUgsSUFBVixDQUFlTSxLQUE1RTtBQUNEO0FBQ0YsQ0FWRDs7QUFZQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDN0IsTUFBSVYsS0FBSyxHQUFHQyxlQUFlLEVBQTNCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixLQUFLLENBQUNBLEtBQUssQ0FBQ2hELE1BQU4sR0FBZSxDQUFoQixDQUFoQjtBQUNBLE1BQUltRCxLQUFLLEdBQUdELElBQUksQ0FBQ0UsR0FBakI7QUFDQSxNQUFJTyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsTUFBakI7QUFDQSxNQUFJekQsR0FBRyxHQUFHd0QsS0FBSyxJQUFJRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsS0FBZixNQUEwQixJQUFuQyxHQUEwQyxNQUFNRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsS0FBZixDQUFoRCxHQUF3RSxFQUFsRjtBQUNBO0FBQ0FELE1BQUksQ0FBQ0UsTUFBTCxHQUFjLEVBQWQ7QUFDQSxNQUFJdEYsZUFBZSxPQUFPLElBQTFCLEVBQWdDO0FBQzlCLFdBQU82RSxLQUFLLENBQUNFLEdBQU4sSUFBYUYsS0FBSyxDQUFDRSxHQUFOLENBQVVILElBQVYsQ0FBZUksRUFBZixHQUFvQm5ELEdBQXhDO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBUWdELEtBQUssQ0FBQ0ksTUFBTixJQUFnQkosS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWIsR0FBcUJyRCxHQUF0QyxJQUErQ2dELEtBQUssQ0FBQ0UsR0FBTixJQUFhRixLQUFLLENBQUNFLEdBQU4sQ0FBVUgsSUFBVixDQUFlTSxLQUFmLEdBQXVCckQsR0FBMUY7QUFDRDtBQUNGLENBYkQ7O0FBZUEsSUFBTTRELFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNMLElBQUQsRUFBVTtBQUM3QixNQUFJQSxJQUFJLENBQUNNLE1BQUwsS0FBZ0IsTUFBaEIsSUFBMkJOLElBQUksQ0FBQ0wsR0FBTCxJQUFZSyxJQUFJLENBQUNMLEdBQUwsQ0FBU1csTUFBVCxLQUFvQixNQUEzRCxJQUFzRU4sSUFBSSxDQUFDTyxRQUFMLENBQWNELE1BQWQsS0FBeUIsTUFBbkcsRUFBMkc7QUFDekcsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQUxEOztBQU9BLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBWXJFLE9BQVosRUFBd0I7QUFDMUM7QUFDQSxNQUFHLENBQUNxRSxTQUFKLEVBQWM7QUFDWkMsV0FBTyxDQUFDQyxLQUFSO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFJLE9BQU9GLFNBQVAsS0FBcUIsUUFBekIsRUFBbUM7QUFDakNDLFdBQU8sQ0FBQ0MsS0FBUjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0QsTUFBSUYsU0FBUyxDQUFDbkUsTUFBVixHQUFtQixHQUF2QixFQUE0QjtBQUMxQm9FLFdBQU8sQ0FBQ0MsS0FBUjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUksT0FBT3ZFLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsT0FBUCxLQUFtQixRQUF0RCxFQUFnRTtBQUM5RHNFLFdBQU8sQ0FBQ0MsS0FBUjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUksT0FBT3ZFLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0JBLE9BQU8sQ0FBQ0UsTUFBUixHQUFpQixHQUFwRCxFQUF5RDtBQUN2RG9FLFdBQU8sQ0FBQ0MsS0FBUjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUlGLFNBQVMsS0FBSyxPQUFkLElBQXlCLE9BQU9yRSxPQUFQLEtBQW1CLFFBQWhELEVBQTBEO0FBQ3hEc0UsV0FBTyxDQUFDQyxLQUFSLENBQWMsOERBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGLENBN0JEOztBQStCQSxJQUFNQyxTQUFTLEdBQUdDLG1CQUFPLENBQUMsbUNBQUQsQ0FBUCxDQUFzQ0MsT0FBeEQ7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLG1CQUFPLENBQUMsd0JBQUQsQ0FBUCxDQUEyQkMsT0FBM0IsSUFBc0NELG1CQUFPLENBQUMsd0JBQUQsQ0FBaEU7O0FBRUEsSUFBTUcsYUFBYSxHQUFHL0YsR0FBRyxDQUFDZ0csaUJBQUosRUFBdEIsQzs7QUFFTUMsSTtBQUNKLGtCQUFjO0FBQ1osU0FBS2xCLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS21CLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtsQixNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUttQixtQkFBTCxHQUEyQjtBQUN6QkMsWUFBTSxFQUFFLEVBRGlCO0FBRXpCOUIsVUFBSSxFQUFFLEVBRm1CO0FBR3pCK0IsWUFBTSxFQUFFLEVBSGlCO0FBSXpCQyxRQUFFLEVBQUUsRUFKcUIsRUFBM0I7O0FBTUEsU0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCO0FBQzNCLFdBQUssRUFEc0I7QUFFM0IsWUFBTSxFQUZxQixFQUE3Qjs7QUFJQSxTQUFLQyxvQkFBTCxHQUE0QixLQUE1Qjs7QUFFQSxTQUFLQyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixLQUF0QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLcEcsUUFBTCxHQUFnQjtBQUNkZixVQUFJLEVBQUVELE9BQU8sRUFEQztBQUVkcUgsUUFBRSxFQUFFbkgsZUFBZSxFQUZMO0FBR2RvSCxTQUFHLEVBQUVsRixXQUFXLEVBSEY7QUFJZG1GLFFBQUUsRUFBRWxCLFVBQVUsQ0FBQ21CLEtBSkQ7QUFLZEMsU0FBRyxFQUFFbEksWUFMUztBQU1kbUksT0FBQyxFQUFFaEYsVUFBVSxFQU5DO0FBT2RpRixRQUFFLEVBQUVoRixVQUFVLEVBUEE7QUFRZGlGLFFBQUUsRUFBRSxFQVJVO0FBU2RDLFFBQUUsRUFBRSxFQVRVO0FBVWRDLFFBQUUsRUFBRSxFQVZVO0FBV2RDLE9BQUMsRUFBRS9GLE9BQU8sRUFYSTtBQVlkZ0csUUFBRSxFQUFFLEVBWlU7QUFhZEMsT0FBQyxFQUFFM0IsYUFBYSxDQUFDNEIsUUFBZCxLQUEyQixTQUEzQixHQUF1QyxHQUF2QyxHQUE2QyxHQWJsQztBQWNkQyxXQUFLLEVBQUU3QixhQUFhLENBQUM2QixLQUFkLElBQXVCLEVBZGhCO0FBZWRDLFFBQUUsRUFBRTlCLGFBQWEsQ0FBQytCLEtBZko7QUFnQmRDLFFBQUUsRUFBRWhDLGFBQWEsQ0FBQ2lDLE1BQWQsQ0FBcUJDLE9BQXJCLENBQTZCLGlCQUE3QixFQUFnRCxFQUFoRCxDQWhCVTtBQWlCZEMsV0FBSyxFQUFFbkMsYUFBYSxDQUFDb0MsVUFBZCxJQUE0QixFQWpCckI7QUFrQmRDLFNBQUcsRUFBRXJDLGFBQWEsQ0FBQzlHLE9BQWQsSUFBeUIsRUFsQmhCO0FBbUJkb0osVUFBSSxFQUFFdEMsYUFBYSxDQUFDdUMsUUFuQk47QUFvQmRDLFFBQUUsRUFBRXhDLGFBQWEsQ0FBQ3lDLFVBcEJKO0FBcUJkQyxRQUFFLEVBQUUxQyxhQUFhLENBQUMyQyxXQXJCSjtBQXNCZEMsUUFBRSxFQUFFNUMsYUFBYSxDQUFDNkMsWUF0Qko7QUF1QmRDLFFBQUUsRUFBRTlDLGFBQWEsQ0FBQytDLFdBdkJKO0FBd0JkQyxRQUFFLEVBQUVoRCxhQUFhLENBQUNpRCxZQXhCSixFQUFoQjs7O0FBMkJELEc7O0FBRWtCO0FBQ2pCLFVBQUksS0FBS3JDLGNBQVQsRUFBeUI7QUFDdkI1QyxtQkFBVztBQUNYLFlBQU1qQixJQUFJLEdBQUdrQixnQkFBZ0IsQ0FBQyxLQUFELENBQTdCO0FBQ0EsWUFBSWxCLElBQUksQ0FBQ3FCLFFBQVQsRUFBbUI7QUFDakIsY0FBSWhELE9BQU8sR0FBRztBQUNaOEgsZ0JBQUksRUFBRSxLQUFLcEMsY0FEQztBQUVackUsaUJBQUssRUFBRSxLQUFLL0IsUUFBTCxDQUFjeUksRUFGVCxFQUFkOztBQUlBLGVBQUtDLGtCQUFMLENBQXdCaEksT0FBeEI7QUFDRDtBQUNELGFBQUt3RixjQUFMLEdBQXNCLEtBQXRCO0FBQ0Q7QUFDRixLOztBQUVnQjVCLFEsRUFBTWQsSSxFQUFNOztBQUUzQixXQUFLMEMsY0FBTCxHQUFzQixJQUF0QjtBQUNBNUMsaUJBQVc7QUFDWCxVQUFNakIsSUFBSSxHQUFHa0IsZ0JBQWdCLEVBQTdCO0FBQ0FGLGtCQUFZO0FBQ1osVUFBTWUsS0FBSyxHQUFHQyxZQUFZLENBQUMsSUFBRCxDQUExQjtBQUNBLFdBQUtzRSxnQkFBTCxDQUFzQjtBQUNwQkMsY0FBTSxFQUFFeEUsS0FEWTtBQUVwQnlFLGlCQUFTLEVBQUV4RyxJQUFJLENBQUNvQixhQUZJLEVBQXRCO0FBR0dELFVBSEg7QUFJRCxLOztBQUVXO0FBQ1YsVUFBTVksS0FBSyxHQUFHQyxZQUFZLENBQUMsSUFBRCxDQUExQjtBQUNBLFVBQU15RSxTQUFTLEdBQUduRixRQUFRLEVBQTFCO0FBQ0EsV0FBS2dDLG1CQUFMLENBQXlCQyxNQUF6QixHQUFrQ1YsU0FBUztBQUN6Q0EsZUFBUyxDQUFDdEIsS0FBVixDQUFnQmtGLFNBQWhCLENBRGdDO0FBRWhDNUQsZUFBUyxDQUFDdEIsS0FBVixDQUFnQmtGLFNBQWhCLEVBQTJCQyxVQUZLO0FBR2hDN0QsZUFBUyxDQUFDdEIsS0FBVixDQUFnQmtGLFNBQWhCLEVBQTJCQyxVQUEzQixDQUFzQ0MsU0FITjtBQUloQzlELGVBQVM7QUFDVEEsZUFBUyxDQUFDdEIsS0FBVixDQUFnQmtGLFNBQWhCLENBREE7QUFFQTVELGVBQVMsQ0FBQ3RCLEtBQVYsQ0FBZ0JrRixTQUFoQixFQUEyQkcsc0JBTkssSUFNcUIsRUFOdkQ7O0FBUUEsVUFBSSxLQUFLOUMsY0FBVCxFQUF5QjtBQUN2QjlDLG9CQUFZO0FBQ1osYUFBSzhDLGNBQUwsR0FBc0IsS0FBdEI7QUFDQTtBQUNBLGFBQUtDLGNBQUwsR0FBc0JoQyxLQUF0QjtBQUNBO0FBQ0Q7O0FBRURkLGlCQUFXO0FBQ1gsV0FBSzhDLGNBQUwsR0FBc0JoQyxLQUF0QjtBQUNBLFVBQU0vQixJQUFJLEdBQUdrQixnQkFBZ0IsQ0FBQyxNQUFELENBQTdCO0FBQ0EsVUFBSWxCLElBQUksQ0FBQ3FCLFFBQVQsRUFBbUI7QUFDakIsWUFBSWhELE9BQU8sR0FBRztBQUNaOEgsY0FBSSxFQUFFLEtBQUtwQyxjQURDO0FBRVpyRSxlQUFLLEVBQUUsS0FBSy9CLFFBQUwsQ0FBY3lJLEVBRlQsRUFBZDs7QUFJQSxhQUFLQyxrQkFBTCxDQUF3QmhJLE9BQXhCO0FBQ0Q7QUFDRDJDLGtCQUFZO0FBQ2IsSzs7QUFFVztBQUNWLFVBQUksQ0FBQyxLQUFLNkMsY0FBVixFQUEwQjtBQUN4QjVDLG1CQUFXO0FBQ1gsWUFBTWpCLElBQUksR0FBR2tCLGdCQUFnQixDQUFDLE1BQUQsQ0FBN0I7QUFDQSxhQUFLMkYsZ0JBQUwsQ0FBc0I7QUFDcEJDLGFBQUcsRUFBRSxLQUFLL0MsY0FEVTtBQUVwQndDLGdCQUFNLEVBQUUsS0FBS3hDLGNBRk87QUFHcEJ5QyxtQkFBUyxFQUFFeEcsSUFBSSxDQUFDb0IsYUFISSxFQUF0Qjs7QUFLQSxhQUFLa0MsbUJBQUwsR0FBMkI7QUFDekJDLGdCQUFNLEVBQUUsRUFEaUI7QUFFekI5QixjQUFJLEVBQUUsRUFGbUI7QUFHekIrQixnQkFBTSxFQUFFLEVBSGlCO0FBSXpCQyxZQUFFLEVBQUUsRUFKcUIsRUFBM0I7O0FBTUE7QUFDRDtBQUNGLEs7O0FBRVE7QUFDUCxXQUFLc0QsaUJBQUwsQ0FBdUI7QUFDckJDLFdBQUcsRUFBRSxPQURnQixFQUF2QjtBQUVHLE9BRkg7QUFHRCxLOztBQUVRO0FBQ1AsV0FBS0QsaUJBQUwsQ0FBdUI7QUFDckJDLFdBQUcsRUFBRSxPQURnQixFQUF2QjtBQUVHLE9BRkg7QUFHRCxLO0FBQ1FBLE8sRUFBSztBQUNaLFdBQUtELGlCQUFMLENBQXVCO0FBQ3JCQyxXQUFHLEVBQUhBLEdBRHFCLEVBQXZCO0FBRUcsT0FGSDtBQUdELEs7QUFDa0IzSSxXLEVBQVM7O0FBRTFCLFdBQUtpRixtQkFBTCxDQUF5QkcsRUFBekIsR0FBOEIsR0FBOUI7QUFDQSxVQUFJdkIsS0FBSyxHQUFHN0QsT0FBTyxDQUFDNkQsS0FBUixJQUFpQkUsSUFBSSxDQUFDQyxTQUFMLENBQWVoRSxPQUFPLENBQUM2RCxLQUF2QixNQUFrQyxJQUFuRCxHQUEwRCxNQUFNRSxJQUFJLENBQUNDLFNBQUwsQ0FBZWhFLE9BQU8sQ0FBQzZELEtBQXZCLENBQWhFLEdBQWdHLEVBQTVHO0FBQ0EsV0FBS3ZFLFFBQUwsQ0FBYzhGLEVBQWQsR0FBbUIsR0FBbkI7QUFDQSxXQUFLOUYsUUFBTCxDQUFjbUosR0FBZCxHQUFxQnpJLE9BQU8sQ0FBQzhILElBQVIsR0FBZWpFLEtBQWhCLElBQTBCLEVBQTlDO0FBQ0EsV0FBS3ZFLFFBQUwsQ0FBYytHLENBQWQsR0FBa0IvRixPQUFPLEVBQXpCO0FBQ0EsV0FBS2hCLFFBQUwsQ0FBY3lJLEVBQWQsR0FBbUIzRyxRQUFRLENBQUNwQixPQUFPLENBQUNxQixLQUFULENBQTNCO0FBQ0EsV0FBSy9CLFFBQUwsQ0FBY3NKLElBQWQsR0FBcUJuSCxpQkFBaUIsRUFBdEM7QUFDQSxXQUFLbkMsUUFBTCxDQUFjdUosSUFBZCxHQUFxQmhILGdCQUFnQixFQUFyQztBQUNBLFdBQUt2QyxRQUFMLENBQWN3SixHQUFkLEdBQW9CMUcsa0JBQWtCLEVBQXRDO0FBQ0EsVUFBSTVELGVBQWUsT0FBTyxHQUExQixFQUErQjtBQUM3QixhQUFLdUssV0FBTDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtDLGNBQUw7QUFDRDtBQUNGLEs7O0FBRWdCQyxPLEVBQUs7O0FBRWxCUixTQUZrQjs7O0FBS2hCUSxTQUxnQixDQUVsQlIsR0FGa0IsQ0FHbEJQLE1BSGtCLEdBS2hCZSxHQUxnQixDQUdsQmYsTUFIa0IsQ0FJbEJDLFNBSmtCLEdBS2hCYyxHQUxnQixDQUlsQmQsU0FKa0I7QUFNcEIsV0FBS2xELG1CQUFMLENBQXlCRyxFQUF6QixHQUE4QixJQUE5QjtBQUNBLFVBQUlwRixPQUFPLEdBQUc7QUFDWjZGLFVBQUUsRUFBRSxLQUFLdkcsUUFBTCxDQUFjdUcsRUFETjtBQUVadEgsWUFBSSxFQUFFLEtBQUtlLFFBQUwsQ0FBY2YsSUFGUjtBQUdaNkcsVUFBRSxFQUFFLElBSFE7QUFJWk8sVUFBRSxFQUFFLEtBQUtyRyxRQUFMLENBQWNxRyxFQUpOO0FBS1o4QyxXQUFHLEVBQUhBLEdBTFk7QUFNWm5DLFVBQUUsRUFBRSxLQUFLaEgsUUFBTCxDQUFjZ0gsRUFOTjtBQU9aNEIsY0FBTSxFQUFOQSxNQVBZO0FBUVpDLGlCQUFTLEVBQVRBLFNBUlk7QUFTWmxDLFVBQUUsRUFBRSxLQUFLM0csUUFBTCxDQUFjMkcsRUFUTjtBQVVaRixXQUFHLEVBQUUsS0FBS3pHLFFBQUwsQ0FBY3lHLEdBVlA7QUFXWk0sU0FBQyxFQUFFL0YsT0FBTyxFQVhFO0FBWVppRyxTQUFDLEVBQUUsS0FBS2pILFFBQUwsQ0FBY2lILENBWkwsRUFBZDs7QUFjQSxXQUFLMkMsT0FBTCxDQUFhbEosT0FBYjtBQUNELEs7O0FBRWdCaUosTyxFQUFLbkcsSSxFQUFNOztBQUV4Qm9GLFlBRndCOztBQUl0QmUsU0FKc0IsQ0FFeEJmLE1BRndCLENBR3hCQyxTQUh3QixHQUl0QmMsR0FKc0IsQ0FHeEJkLFNBSHdCO0FBSzFCLFVBQUluSSxPQUFPLEdBQUc7QUFDWjZGLFVBQUUsRUFBRSxLQUFLdkcsUUFBTCxDQUFjdUcsRUFETjtBQUVadEgsWUFBSSxFQUFFLEtBQUtlLFFBQUwsQ0FBY2YsSUFGUjtBQUdaNkcsVUFBRSxFQUFFLEdBSFE7QUFJWk8sVUFBRSxFQUFFLEtBQUtyRyxRQUFMLENBQWNxRyxFQUpOO0FBS1p1QyxjQUFNLEVBQU5BLE1BTFk7QUFNWkMsaUJBQVMsRUFBVEEsU0FOWTtBQU9abEMsVUFBRSxFQUFFLEtBQUszRyxRQUFMLENBQWMyRyxFQVBOO0FBUVpGLFdBQUcsRUFBRSxLQUFLekcsUUFBTCxDQUFjeUcsR0FSUDtBQVNaTSxTQUFDLEVBQUUvRixPQUFPLEVBVEU7QUFVWmlHLFNBQUMsRUFBRSxLQUFLakgsUUFBTCxDQUFjaUgsQ0FWTCxFQUFkOztBQVlBLFdBQUsyQyxPQUFMLENBQWFsSixPQUFiLEVBQXNCOEMsSUFBdEI7QUFDRCxLOzs7O0FBSU8sb0ZBQUosRUFBSSxpQkFGTjZGLEdBRU0sQ0FGTkEsR0FFTSx5QkFGQSxFQUVBLDhCQUROUSxLQUNNLENBRE5BLEtBQ00sMkJBREUsRUFDRjtBQUNOLFVBQU16RixLQUFLLEdBQUcsS0FBS2dDLGNBQW5CO0FBQ0EsVUFBSTFGLE9BQU8sR0FBRztBQUNaNkYsVUFBRSxFQUFFLEtBQUt2RyxRQUFMLENBQWN1RyxFQUROO0FBRVp0SCxZQUFJLEVBQUUsS0FBS2UsUUFBTCxDQUFjZixJQUZSO0FBR1o2RyxVQUFFLEVBQUUsSUFIUTtBQUlaTyxVQUFFLEVBQUUsS0FBS3JHLFFBQUwsQ0FBY3FHLEVBSk47QUFLWjhDLFdBQUcsRUFBRS9FLEtBTE87QUFNWnVDLFVBQUUsRUFBRSxLQUFLM0csUUFBTCxDQUFjMkcsRUFOTjtBQU9abUQsV0FBRyxFQUFFVCxHQVBPO0FBUVpVLFdBQUcsRUFBRSxPQUFPRixLQUFQLEtBQWtCLFFBQWxCLEdBQTZCcEYsSUFBSSxDQUFDQyxTQUFMLENBQWVtRixLQUFmLENBQTdCLEdBQXFEQSxLQUFLLENBQUNHLFFBQU4sRUFSOUM7QUFTWnZELFdBQUcsRUFBRSxLQUFLekcsUUFBTCxDQUFjeUcsR0FUUDtBQVVaTSxTQUFDLEVBQUUvRixPQUFPLEVBVkU7QUFXWmlHLFNBQUMsRUFBRSxLQUFLakgsUUFBTCxDQUFjaUgsQ0FYTCxFQUFkOztBQWFBLFdBQUsyQyxPQUFMLENBQWFsSixPQUFiO0FBQ0QsSzs7QUFFZ0I7QUFDZm5CLFNBQUcsQ0FBQzBLLGNBQUosQ0FBbUI7QUFDakJDLGVBQU8sRUFBRSxpQkFBQ0MsTUFBRCxFQUFZO0FBQ25CLGVBQUksQ0FBQ25LLFFBQUwsQ0FBY29LLEdBQWQsR0FBb0JELE1BQU0sQ0FBQ0UsV0FBM0I7QUFDQSxlQUFJLENBQUNDLFdBQUw7QUFDRCxTQUpnQixFQUFuQjs7QUFNRCxLOztBQUVhO0FBQ1puTCxVQUFJLENBQUNDLE9BQUwsQ0FBYXFLLFdBQWIsQ0FBeUJ0SyxJQUFJLENBQUNDLE9BQUwsQ0FBYW9ILEtBQXRDLEVBQTZDLFVBQUMrRCxPQUFELEVBQWE7QUFDeEQsY0FBSSxDQUFDdkssUUFBTCxDQUFjMEcsQ0FBZCxHQUFrQjZELE9BQU8sQ0FBQy9MLE9BQVIsSUFBbUIsRUFBckM7QUFDQSxjQUFJLENBQUNrTCxjQUFMO0FBQ0QsT0FIRDtBQUlELEs7O0FBRWE7QUFDWixVQUFJckUsVUFBVSxDQUFDaUYsV0FBZixFQUE0QjtBQUMxQi9LLFdBQUcsQ0FBQytLLFdBQUosQ0FBZ0I7QUFDZDlHLGNBQUksRUFBRSxPQURRO0FBRWRnSCxpQkFBTyxFQUFFLElBRks7QUFHZE4saUJBQU8sRUFBRSxpQkFBQ0MsTUFBRCxFQUFZO0FBQ25CLGdCQUFJQSxNQUFNLENBQUNNLE9BQVgsRUFBb0I7QUFDbEIsb0JBQUksQ0FBQ3pLLFFBQUwsQ0FBYzRHLEVBQWQsR0FBbUJ1RCxNQUFNLENBQUNNLE9BQVAsQ0FBZUMsT0FBbEM7QUFDQSxvQkFBSSxDQUFDMUssUUFBTCxDQUFjNkcsRUFBZCxHQUFtQnNELE1BQU0sQ0FBQ00sT0FBUCxDQUFlRSxRQUFsQztBQUNBLG9CQUFJLENBQUMzSyxRQUFMLENBQWM4RyxFQUFkLEdBQW1CcUQsTUFBTSxDQUFDTSxPQUFQLENBQWVHLElBQWxDO0FBQ0Q7O0FBRUQsa0JBQUksQ0FBQzVLLFFBQUwsQ0FBYzZLLEdBQWQsR0FBb0JWLE1BQU0sQ0FBQ1csUUFBM0I7QUFDQSxrQkFBSSxDQUFDOUssUUFBTCxDQUFjK0ssR0FBZCxHQUFvQlosTUFBTSxDQUFDYSxTQUEzQjtBQUNBLGtCQUFJLENBQUNwQixPQUFMLENBQWEsTUFBSSxDQUFDNUosUUFBbEI7QUFDRCxXQWJhLEVBQWhCOztBQWVELE9BaEJELE1BZ0JPO0FBQ0wsYUFBS0EsUUFBTCxDQUFjNkssR0FBZCxHQUFvQixDQUFwQjtBQUNBLGFBQUs3SyxRQUFMLENBQWMrSyxHQUFkLEdBQW9CLENBQXBCO0FBQ0EsYUFBS25CLE9BQUwsQ0FBYSxLQUFLNUosUUFBbEI7QUFDRDtBQUNGLEs7O0FBRU9jLFEsRUFBTTBDLEksRUFBTTtBQUNsQixVQUFJbkIsSUFBSSxHQUFHckIsT0FBTyxFQUFsQjtBQUNBLFVBQU1pSyxLQUFLLEdBQUcsS0FBS3RGLG1CQUFuQjtBQUNBN0UsVUFBSSxDQUFDb0ssR0FBTCxHQUFXRCxLQUFLLENBQUNuSCxJQUFqQjtBQUNBaEQsVUFBSSxDQUFDcUssSUFBTCxHQUFZRixLQUFLLENBQUNyRixNQUFsQjtBQUNBOUUsVUFBSSxDQUFDc0ssR0FBTCxHQUFXSCxLQUFLLENBQUNwRixNQUFqQjs7QUFFQSxVQUFJd0YsV0FBVyxHQUFHLEtBQUtyRixxQkFBdkI7QUFDQSxVQUFJOUcsZUFBZSxPQUFPLEdBQTFCLEVBQStCO0FBQzdCbU0sbUJBQVcsR0FBRzlMLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixtQkFBbkIsS0FBMkMsRUFBekQ7QUFDRDtBQUNELFVBQUksQ0FBQzZMLFdBQVcsQ0FBQ3ZLLElBQUksQ0FBQ2dGLEVBQU4sQ0FBaEIsRUFBMkI7QUFDekJ1RixtQkFBVyxDQUFDdkssSUFBSSxDQUFDZ0YsRUFBTixDQUFYLEdBQXVCLEVBQXZCO0FBQ0Q7QUFDRHVGLGlCQUFXLENBQUN2SyxJQUFJLENBQUNnRixFQUFOLENBQVgsQ0FBcUJ3RixJQUFyQixDQUEwQnhLLElBQTFCOztBQUVBLFVBQUk1QixlQUFlLE9BQU8sR0FBMUIsRUFBK0I7QUFDN0JLLFdBQUcsQ0FBQ08sY0FBSixDQUFtQixtQkFBbkIsRUFBd0N1TCxXQUF4QztBQUNEO0FBQ0QsVUFBSXpJLG9CQUFvQixLQUFLL0QsY0FBekIsSUFBMkMsQ0FBQzJFLElBQWhELEVBQXNEO0FBQ3BEO0FBQ0Q7QUFDRCxVQUFJK0gsV0FBVyxHQUFHLEtBQUt2RixxQkFBdkI7QUFDQSxVQUFJOUcsZUFBZSxPQUFPLEdBQTFCLEVBQStCO0FBQzdCcU0sbUJBQVcsR0FBR2hNLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixtQkFBbkIsQ0FBZDtBQUNEO0FBQ0Q7QUFDQW1ELDBCQUFvQjtBQUNwQixVQUFJNkksUUFBUSxHQUFHLEVBQWY7QUFDQSxVQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxVQUFJQyxPQUFPLEdBQUcsRUFBZCxDQTlCa0I7O0FBZ0NUbEwsT0FoQ1M7QUFpQ2hCLFlBQU1tTCxFQUFFLEdBQUdKLFdBQVcsQ0FBQy9LLENBQUQsQ0FBdEI7QUFDQW1MLFVBQUUsQ0FBQ0MsT0FBSCxDQUFXLFVBQUNDLEdBQUQsRUFBUztBQUNsQixjQUFNQyxPQUFPLEdBQUdqTCxXQUFXLENBQUNnTCxHQUFELENBQTNCO0FBQ0EsY0FBSXJMLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWGdMLG9CQUFRLENBQUNGLElBQVQsQ0FBY1EsT0FBZDtBQUNELFdBRkQsTUFFTyxJQUFJdEwsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNsQmtMLG1CQUFPLENBQUNKLElBQVIsQ0FBYVEsT0FBYjtBQUNELFdBRk0sTUFFQTtBQUNMTCxzQkFBVSxDQUFDSCxJQUFYLENBQWdCUSxPQUFoQjtBQUNEO0FBQ0YsU0FURCxFQWxDZ0IsRUFnQ2xCLEtBQUssSUFBSXRMLENBQVQsSUFBYytLLFdBQWQsRUFBMkIsT0FBbEIvSyxDQUFrQjtBQVkxQjs7QUFFRGdMLGNBQVEsQ0FBQ0YsSUFBVCxPQUFBRSxRQUFRLEVBQVNDLFVBQVQsUUFBd0JDLE9BQXhCLEVBQVI7QUFDQSxVQUFJSyxXQUFXLEdBQUc7QUFDaEJ0RixXQUFHLEVBQUVsSSxZQURXLEVBQ0c7QUFDbkJ3SSxTQUFDLEVBQUUxRSxJQUZhLEVBRVA7QUFDVDJKLGdCQUFRLEVBQUV2SCxJQUFJLENBQUNDLFNBQUwsQ0FBZThHLFFBQWYsQ0FITSxFQUFsQjs7O0FBTUEsV0FBS3hGLHFCQUFMLEdBQTZCLEVBQTdCO0FBQ0EsVUFBSTlHLGVBQWUsT0FBTyxHQUExQixFQUErQjtBQUM3QkssV0FBRyxDQUFDK0MsaUJBQUosQ0FBc0IsbUJBQXRCO0FBQ0Q7O0FBRUQsVUFBSXhCLElBQUksQ0FBQ3VGLEVBQUwsS0FBWSxJQUFoQixFQUFzQjtBQUNwQixhQUFLNEYsWUFBTCxDQUFrQkYsV0FBbEI7QUFDQTtBQUNEOztBQUVELFVBQUk3TSxlQUFlLE9BQU8sR0FBdEIsSUFBNkIsS0FBS2MsUUFBTCxDQUFjaUgsQ0FBZCxLQUFvQixHQUFyRCxFQUEwRDtBQUN4RGlGLGtCQUFVLENBQUMsWUFBTTtBQUNmLGdCQUFJLENBQUNDLFlBQUwsQ0FBa0JKLFdBQWxCO0FBQ0QsU0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdBO0FBQ0Q7QUFDRCxXQUFLSSxZQUFMLENBQWtCSixXQUFsQjtBQUNELEs7QUFDWUEsZSxFQUFhO0FBQ3hCeE0sU0FBRyxDQUFDcUssT0FBSixDQUFZO0FBQ1ZULFdBQUcsRUFBRTFLLFFBREs7QUFFVjJOLGNBQU0sRUFBRSxNQUZFO0FBR1Y7QUFDQTtBQUNBO0FBQ0F0TCxZQUFJLEVBQUVpTCxXQU5JO0FBT1Y3QixlQUFPLEVBQUUsbUJBQU07QUFDYjtBQUNBO0FBQ0E7QUFDRCxTQVhTO0FBWVZtQyxZQUFJLEVBQUUsY0FBQy9NLENBQUQsRUFBTztBQUNYLGNBQUksRUFBRSxNQUFJLENBQUNtRyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCeUcsc0JBQVUsQ0FBQyxZQUFNO0FBQ2Ysb0JBQUksQ0FBQ0MsWUFBTCxDQUFrQkosV0FBbEI7QUFDRCxhQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFDRixTQWxCUyxFQUFaOztBQW9CRDtBQUNEOzs7QUFHYWpMLFEsRUFBTTtBQUNqQixVQUFJd0wsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBLFVBQUk3TCxPQUFPLEdBQUdYLE9BQU8sQ0FBQ2lELDRCQUE0QixDQUFDbEMsSUFBRCxDQUE3QixDQUFQLENBQTRDSixPQUExRDtBQUNBNEwsV0FBSyxDQUFDRSxHQUFOLEdBQVk5TixXQUFXLEdBQUcsR0FBZCxHQUFvQmdDLE9BQWhDO0FBQ0QsSzs7QUFFUzJJLE8sRUFBS1EsSyxFQUFPO0FBQ3BCO0FBQ0EsVUFBSS9FLFdBQVcsQ0FBQ3VFLEdBQUQsRUFBTVEsS0FBTixDQUFmLEVBQTZCOztBQUU3QixVQUFJUixHQUFHLEtBQUssT0FBWixFQUFxQjtBQUNuQixhQUFLMUQsbUJBQUwsQ0FBeUJFLE1BQXpCLEdBQWtDZ0UsS0FBbEM7QUFDQTtBQUNEO0FBQ0QsV0FBS1QsaUJBQUwsQ0FBdUI7QUFDckJDLFdBQUcsRUFBSEEsR0FEcUI7QUFFckJRLGFBQUssRUFBRSxPQUFPQSxLQUFQLEtBQWtCLFFBQWxCLEdBQTZCcEYsSUFBSSxDQUFDQyxTQUFMLENBQWVtRixLQUFmLENBQTdCLEdBQXFEQSxLQUZ2QyxFQUF2QjtBQUdHLE9BSEg7QUFJRCxLOzs7O0FBSUc0QyxJO0FBQ2lCO0FBQ25CLFVBQUksQ0FBQyxLQUFLQyxRQUFWLEVBQW9CO0FBQ2xCLGFBQUtBLFFBQUwsR0FBZ0IsSUFBSUQsSUFBSixFQUFoQjtBQUNEO0FBQ0QsYUFBTyxLQUFLQyxRQUFaO0FBQ0QsSztBQUNELGtCQUFjO0FBQ1o7QUFDQSxXQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0E7QUFDQSxRQUFJLE9BQU9uTixHQUFHLENBQUNvTixjQUFYLEtBQThCLFVBQTlCLElBQTRDeEwsYUFBQSxLQUF5QixhQUF6RSxFQUF3RjtBQUN0RixhQUFLeUwsa0JBQUw7QUFDQSxhQUFLQyxjQUFMO0FBQ0EsYUFBS0MsY0FBTCxDQUFvQixJQUFwQjtBQUNBLGFBQUtDLHVCQUFMO0FBQ0QsS0FUVztBQVViLEc7O0FBRW9CO0FBQ25CLFVBQUl6SSxJQUFJLEdBQUcsSUFBWDtBQUNBL0UsU0FBRyxDQUFDb04sY0FBSixDQUFtQix1QkFBbkIsRUFBNEM7QUFDMUNLLGNBRDBDLGtCQUNuQ0MsSUFEbUMsRUFDN0I7QUFDWDNJLGNBQUksQ0FBQ3FCLG1CQUFMLENBQXlCN0IsSUFBekIsR0FBZ0NtSixJQUFJLENBQUNoQyxLQUFyQztBQUNELFNBSHlDLEVBQTVDOztBQUtELEs7O0FBRWdCO0FBQ2YsVUFBSTNHLElBQUksR0FBRyxJQUFYO0FBQ0EvRSxTQUFHLENBQUNvTixjQUFKLENBQW1CLE9BQW5CLEVBQTRCO0FBQzFCTyxnQkFEMEIsc0JBQ2Y7QUFDVDVJLGNBQUksQ0FBQzZJLE1BQUw7QUFDRCxTQUh5QixFQUE1Qjs7QUFLRCxLOztBQUVjM0osUSxFQUFNO0FBQ25CLFVBQUljLElBQUksR0FBRyxJQUFYO0FBQ0EsVUFBSSxDQUFDZCxJQUFMLEVBQVc7QUFDVGMsWUFBSSxDQUFDOEksTUFBTDtBQUNBO0FBQ0Q7QUFDRDdOLFNBQUcsQ0FBQ29OLGNBQUosQ0FBbUIsT0FBbkIsRUFBNEI7QUFDMUJ6QyxlQUQwQixxQkFDaEI7QUFDUjVGLGNBQUksQ0FBQzhJLE1BQUw7QUFDRCxTQUh5QjtBQUkxQmYsWUFKMEIsa0JBSW5CO0FBQ0wvSCxjQUFJLENBQUM4SSxNQUFMO0FBQ0QsU0FOeUIsRUFBNUI7O0FBUUQsSzs7QUFFeUI7QUFDeEIsVUFBSTlJLElBQUksR0FBRyxJQUFYO0FBQ0EvRSxTQUFHLENBQUNvTixjQUFKLENBQW1CLGdCQUFuQixFQUFxQztBQUNuQ3pDLGVBRG1DLHFCQUN6QjtBQUNSNUYsY0FBSSxDQUFDK0ksUUFBTCxDQUFjLGFBQWQ7QUFDRCxTQUhrQztBQUluQ2hCLFlBSm1DLGtCQUk1QjtBQUNML0gsY0FBSSxDQUFDK0ksUUFBTCxDQUFjLFVBQWQ7QUFDRCxTQU5rQyxFQUFyQzs7QUFRRCxLOztBQUVNM00sVyxFQUFTNEQsSSxFQUFNO0FBQ3BCLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBM0IsMEJBQW9CO0FBQ3BCLFdBQUt3RCxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsV0FBS3VDLGtCQUFMLENBQXdCaEksT0FBeEIsRUFBaUMsSUFBakM7QUFDRCxLOztBQUVJQSxXLEVBQVM0RCxJLEVBQU07QUFDbEIsVUFBSSxDQUFDQSxJQUFJLENBQUNILE1BQU4sSUFBZ0IsQ0FBQ0csSUFBSSxDQUFDTCxHQUExQixFQUErQjtBQUM3QixZQUFNSCxJQUFJLEdBQUdELGVBQWUsRUFBNUI7QUFDQVMsWUFBSSxDQUFDSCxNQUFMLEdBQWNMLElBQUksQ0FBQ0EsSUFBSSxDQUFDbEQsTUFBTCxHQUFjLENBQWYsQ0FBbEI7QUFDRDtBQUNELFdBQUswRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLRSxNQUFMLEdBQWM5RCxPQUFkO0FBQ0QsSzs7QUFFSTRELFEsRUFBTTtBQUNULFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUlLLFlBQVksQ0FBQ0wsSUFBRCxDQUFoQixFQUF3QjtBQUN0QixhQUFLZ0osU0FBTCxDQUFlaEosSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtpSixnQkFBTCxDQUFzQmpKLElBQXRCO0FBQ0Q7QUFDRixLOztBQUVLQSxRLEVBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNELEs7QUFDSUEsUSxFQUFNO0FBQ1QsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBSUssWUFBWSxDQUFDTCxJQUFELENBQWhCLEVBQXdCO0FBQ3RCLGFBQUtrSixTQUFMLENBQWVsSixJQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS21KLGdCQUFMLENBQXNCbkosSUFBdEIsRUFBNEIsSUFBNUI7QUFDRDtBQUNGLEs7QUFDS29KLE0sRUFBSTtBQUNSLFVBQUksS0FBS2hJLFNBQUwsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakMsWUFBSXZFLElBQUosRUFBNEM7QUFDMUM2RCxpQkFBTyxDQUFDMkksSUFBUixDQUFhLHFCQUFiO0FBQ0Q7QUFDRDtBQUNEO0FBQ0QsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxVQUFJLENBQUNGLEVBQUUsQ0FBQ0csT0FBUixFQUFpQjtBQUNmRCxhQUFLLEdBQUduSixJQUFJLENBQUNDLFNBQUwsQ0FBZWdKLEVBQWYsQ0FBUjtBQUNELE9BRkQsTUFFTztBQUNMRSxhQUFLLEdBQUdGLEVBQUUsQ0FBQ0ksS0FBWDtBQUNEO0FBQ0QsVUFBSXBOLE9BQU8sR0FBRztBQUNaNkYsVUFBRSxFQUFFLEtBQUt2RyxRQUFMLENBQWN1RyxFQUROO0FBRVp0SCxZQUFJLEVBQUUsS0FBS2UsUUFBTCxDQUFjZixJQUZSO0FBR1o2RyxVQUFFLEVBQUUsSUFIUTtBQUlaTyxVQUFFLEVBQUUsS0FBS3JHLFFBQUwsQ0FBY3FHLEVBSk47QUFLWk0sVUFBRSxFQUFFLEtBQUszRyxRQUFMLENBQWMyRyxFQUxOO0FBTVpjLGFBQUssRUFBRSxLQUFLekgsUUFBTCxDQUFjeUgsS0FOVDtBQU9aRSxXQUFHLEVBQUUsS0FBSzNILFFBQUwsQ0FBYzJILEdBUFA7QUFRWmpCLFNBQUMsRUFBRSxLQUFLMUcsUUFBTCxDQUFjMEcsQ0FSTDtBQVNaZ0gsVUFBRSxFQUFFRSxLQVRRO0FBVVpuSCxXQUFHLEVBQUUsS0FBS3pHLFFBQUwsQ0FBY3lHLEdBVlA7QUFXWk0sU0FBQyxFQUFFL0YsT0FBTyxFQVhFO0FBWVppRyxTQUFDLEVBQUUsS0FBS2pILFFBQUwsQ0FBY2lILENBWkwsRUFBZDs7QUFjQSxXQUFLMkMsT0FBTCxDQUFhbEosT0FBYjtBQUNELEssbUJBdklnQjhFLEk7OztBQTBJbkIsSUFBTXVJLElBQUksR0FBR3RCLElBQUksQ0FBQ3VCLFdBQUwsRUFBYjtBQUNBLElBQUlDLE1BQU0sR0FBRyxLQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxVQURnQixvQkFDUHpOLE9BRE8sRUFDRTtBQUNoQnFOLFFBQUksQ0FBQ2xJLE1BQUwsQ0FBWW5GLE9BQVosRUFBcUIsSUFBckI7QUFDRCxHQUhlO0FBSWhCME4sU0FKZ0IscUJBSU47QUFDUkwsUUFBSSxDQUFDTSxLQUFMLENBQVcsSUFBWDtBQUNELEdBTmU7QUFPaEJDLFFBUGdCLGtCQU9UNU4sT0FQUyxFQU9BO0FBQ2RxTixRQUFJLENBQUNRLElBQUwsQ0FBVTdOLE9BQVYsRUFBbUIsSUFBbkI7QUFDQTtBQUNBLFFBQUksS0FBS3lELE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlxSyxpQkFBL0IsRUFBa0Q7QUFDaEQsVUFBSUMsa0JBQWtCLEdBQUcsS0FBS3RLLE1BQUwsQ0FBWXFLLGlCQUFyQztBQUNBLFdBQUtySyxNQUFMLENBQVlxSyxpQkFBWixHQUFnQyxVQUFTOU4sT0FBVCxFQUFrQjtBQUNoRHFOLFlBQUksQ0FBQ2pCLGNBQUwsQ0FBb0IsS0FBcEI7QUFDQSxlQUFPMkIsa0JBQWtCLENBQUNDLElBQW5CLENBQXdCLElBQXhCLEVBQThCaE8sT0FBOUIsQ0FBUDtBQUNELE9BSEQ7QUFJRDtBQUNGLEdBakJlO0FBa0JoQmlPLFFBbEJnQixvQkFrQlA7QUFDUFYsVUFBTSxHQUFHLEtBQVQ7QUFDQUYsUUFBSSxDQUFDYSxJQUFMLENBQVUsSUFBVjtBQUNELEdBckJlO0FBc0JoQkMsUUF0QmdCLG9CQXNCUDtBQUNQWixVQUFNLEdBQUcsSUFBVDtBQUNBRixRQUFJLENBQUNlLElBQUwsQ0FBVSxJQUFWO0FBQ0QsR0F6QmU7QUEwQmhCQyxVQTFCZ0Isc0JBMEJMO0FBQ1QsUUFBSWQsTUFBSixFQUFZO0FBQ1ZBLFlBQU0sR0FBRyxLQUFUO0FBQ0E7QUFDRDtBQUNERixRQUFJLENBQUNlLElBQUwsQ0FBVSxJQUFWO0FBQ0QsR0FoQ2U7QUFpQ2hCRSxTQWpDZ0IsbUJBaUNSMVAsQ0FqQ1EsRUFpQ0w7QUFDVHlPLFFBQUksQ0FBQzlJLEtBQUwsQ0FBVzNGLENBQVg7QUFDRCxHQW5DZSxFQUFsQjs7O0FBc0NBLFNBQVMyUCxJQUFULEdBQWdCO0FBQ2QsTUFBSTlOLElBQUosRUFBNEM7QUFDMUM1QixPQUFHLENBQUNzRyxNQUFKLEdBQWEsVUFBU3JDLElBQVQsRUFBZTlDLE9BQWYsRUFBd0IsQ0FBRSxDQUF2QztBQUNELEdBRkQsTUFFSyxZQU1KO0FBQ0Y7O0FBRUR1TyxJQUFJLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvMkJKLFFBQW9DO0FBQ3BDLFFBQThCO0FBQzlCLFFBQXFFO0FBQ3JFLFFBQVEsa0ZBQUc7QUFDWCxRQUFRLGtGQUFHO0FBQ1gsUUFBUSxrRkFBRztBQUNYLGdCQUFnQixrRkFBRzs7Ozs7Ozs7Ozs7OztBQ1BuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThIO0FBQzlIO0FBQ3FFO0FBQ0w7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyxtRUFBMEQ7QUFDOUcsYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLG1FQUEwRDtBQUNuSDs7QUFFQTs7QUFFQTtBQUMyTjtBQUMzTixnQkFBZ0Isc05BQVU7QUFDMUIsRUFBRSx1RkFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QyxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUNBQWlDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNENBQTRDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOENBQThDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFBQTtBQUF3bEIsQ0FBZ0IsZ2xCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0I1bUIsNEY7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxjQUNBLHFCQURBLEVBREEsRUFJQSxJQUpBLGtCQUlBLENBQ0EsU0FDQSxtQkFEQSxFQUVBLFVBQ0Esa0JBREEsRUFFQSxZQUZBLElBSUEsRUFDQSxtQkFEQSxFQUVBLGVBRkEsRUFKQSxFQVFBLEVBQ0EsZUFEQTtBQUVBLG1CQUZBLEVBUkE7O0FBWUE7QUFDQSw2QkFEQTtBQUVBLHVCQUZBLEVBWkE7O0FBZ0JBO0FBQ0EsNkJBREE7QUFFQSx3QkFGQSxFQWhCQTs7QUFvQkE7QUFDQSx5QkFEQTtBQUVBLHFCQUZBLEVBcEJBOztBQXdCQTtBQUNBLHdCQURBO0FBRUEsa0JBRkEsRUF4QkE7O0FBNEJBO0FBQ0Esd0JBREE7QUFFQSxrQkFGQSxFQTVCQTs7QUFnQ0E7QUFDQSw2QkFEQTtBQUVBLHdCQUZBLEVBaENBOztBQW9DQTtBQUNBLHVCQURBO0FBRUEsbUJBRkEsRUFwQ0E7O0FBd0NBO0FBQ0Esd0JBREE7QUFFQSxvQkFGQSxFQXhDQTs7QUE0Q0E7QUFDQSxnQ0FEQTtBQUVBLDJCQUZBLEVBNUNBOztBQWdEQTtBQUNBLHdCQURBO0FBRUEsbUJBRkEsRUFoREE7O0FBb0RBO0FBQ0EsdUJBREE7QUFFQSxtQkFGQSxFQXBEQTs7QUF3REE7QUFDQSw2QkFEQTtBQUVBLHdCQUZBLEVBeERBOztBQTREQTtBQUNBLDZCQURBO0FBRUEsc0JBRkEsRUE1REE7O0FBZ0VBO0FBQ0EsNkJBREE7QUFFQSx5QkFGQSxFQWhFQTs7QUFvRUE7QUFDQSwrQkFEQTtBQUVBLHlCQUZBLEVBcEVBOztBQXdFQTtBQUNBLDhCQURBO0FBRUEseUJBRkEsRUF4RUE7O0FBNEVBO0FBQ0EseUJBREE7QUFFQSxvQkFGQSxFQTVFQTs7QUFnRkE7QUFDQSx1QkFEQTtBQUVBLG1CQUZBLEVBaEZBOztBQW9GQTtBQUNBLDZCQURBO0FBRUEseUJBRkEsRUFwRkE7O0FBd0ZBO0FBQ0Esb0NBREE7QUFFQSxnQ0FGQSxFQXhGQTs7QUE0RkE7QUFDQSx5QkFEQTtBQUVBLG9CQUZBLEVBNUZBOztBQWdHQTtBQUNBLGdDQURBO0FBRUEsMkJBRkEsRUFoR0E7O0FBb0dBO0FBQ0EsZ0NBREE7QUFFQSx5QkFGQSxFQXBHQTs7QUF3R0E7QUFDQSxzQkFEQTtBQUVBLGtCQUZBLEVBeEdBOztBQTRHQTtBQUNBLCtCQURBO0FBRUEseUJBRkEsRUE1R0EsQ0FGQTs7OztBQW9IQSxHQXpIQTtBQTBIQSxRQTFIQSxvQkEwSEEsRUExSEE7QUEySEEsU0EzSEEscUJBMkhBLEVBM0hBO0FBNEhBLG1CQTVIQSwrQkE0SEE7QUFDQTtBQUNBLDBCQURBO0FBRUEsdUNBRkE7O0FBSUEsR0FqSUE7QUFrSUEsMEJBbElBLG9DQWtJQSxDQWxJQSxFQWtJQTtBQUNBO0FBQ0EsK0JBREE7O0FBR0EsR0F0SUE7QUF1SUE7QUFDQSxnQkFEQSx3QkFDQSxJQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBREE7O0FBR0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxHQUZBO0FBR0EsS0FaQSxFQXZJQSxFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrSDtBQUNsSDtBQUN5RDtBQUNMO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNxTjtBQUNyTixnQkFBZ0Isc05BQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9GQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ2hDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRCxjQUFjLCtDQUErQztBQUM3RCxXQUFXO0FBQ1gsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBMGpCLENBQWdCLG9rQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSzlrQjs7Ozs7OztBQU9BO0FBQ0EsZ0JBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQUxBOztBQVNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQVRBLEVBRkE7OztBQWdCQTtBQUNBLFdBREEscUJBQ0E7O0FBRUEsc0NBRkEsQ0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsS0F2QkEsRUFoQkEsRTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBMC9CLENBQWdCLHc3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTlnQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFBZSxnRUFBQyxVQUFVLGtCOzs7Ozs7Ozs7Ozs7QUNBMUI7QUFBZSxnRUFBQyx5Qjs7Ozs7Ozs7Ozs7QUNBaEI7QUFDQSwyREFBMkQsbUJBQU8sQ0FBQyxrREFBMkM7Ozs7Ozs7Ozs7Ozs7QUNEOUc7QUFBQTtBQUFBO0FBQUE7QUFBODdCLENBQWdCLHk2QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWw5QixtQiIsImZpbGUiOiJwYWdlcy90YWJCYXIvZXh0VUkvZXh0VUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMzKTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy90YWJCYXIvZXh0VUkvZXh0VUkubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdGFiQmFyL2V4dFVJL2V4dFVJJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2V4dFVJLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2M1ZDg1N2EmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2V4dFVJLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXh0VUkubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vZXh0VUkubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2V4dFVJLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMjVlZmNjN2NcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvTmFnYS9Eb2N1bWVudHMvR2l0SHViL3N0dWRlbnRfdWJpYXBwL3N0dWRlbnQtdW5pL3BhZ2VzL3RhYkJhci9leHRVSS9leHRVSS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leHRVSS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjNWQ4NTdhJm1wVHlwZT1wYWdlXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1widW5pLWNvbnRhaW5lclwiXSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1oZWFkZXItbG9nb1wiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktaGVhZGVyLWltYWdlXCJdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2V4dHVpSW5kZXgucG5nXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktaGVsbG8tdGV4dFwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWxsby10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLku6XkuIvmmK91bmktYXBw5omp5bGV57uE5Lu256S65L6L77yM5pu05aSa57uE5Lu26KeB5o+S5Lu25biC5Zy677yaXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInUtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImhlbGxvLWxpbmtcIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9cIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jblwiLFxuICAgICAgICAgICAgICAgICAgaW5XaGl0ZUxpc3Q6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl9sKF92bS5saXN0cywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwidmlld1wiLCB7IGtleTogaXRlbS51cmwsIHN0YXRpY0NsYXNzOiBbXCJ1bmktcGFuZWxcIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXBhbmVsLWhcIl0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmdvRGV0YWlsUGFnZShpdGVtLnVybClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXBhbmVsLXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktcGFuZWwtaWNvblwiLCBcInVuaS1pY29uXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLukbBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXh0VUkubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXh0VUkubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidW5pLWNvbnRhaW5lclwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktaGVhZGVyLWxvZ29cIj5cclxuXHRcdFx0PGltYWdlIGNsYXNzPVwidW5pLWhlYWRlci1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvZXh0dWlJbmRleC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktaGVsbG8tdGV4dFwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImhlbGxvLXRleHRcIj7ku6XkuIvmmK91bmktYXBw5omp5bGV57uE5Lu256S65L6L77yM5pu05aSa57uE5Lu26KeB5o+S5Lu25biC5Zy677yaPC90ZXh0PlxyXG5cdFx0XHQ8dS1saW5rIGNsYXNzPVwiaGVsbG8tbGlua1wiIDpocmVmPVwiJ2h0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vJ1wiIDp0ZXh0PVwiJ2h0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24nXCIgOmluV2hpdGVMaXN0PVwidHJ1ZVwiPjwvdS1saW5rPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktcGFuZWxcIiB2LWZvcj1cIml0ZW0gaW4gbGlzdHNcIiA6a2V5PVwiaXRlbS51cmxcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktcGFuZWwtaFwiIEBjbGljaz1cImdvRGV0YWlsUGFnZShpdGVtLnVybClcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1wYW5lbC10ZXh0XCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1wYW5lbC1pY29uIHVuaS1pY29uXCI+JiN4ZTQ3MDs8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHVMaW5rIGZyb20gXCJAL2NvbXBvbmVudHMvdUxpbmsudnVlXCJcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVMaW5rXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRuYXZpZ2F0ZUZsYWc6IGZhbHNlLFxyXG5cdFx0XHRcdGxpc3RzOiBbe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIkJhZGdlIOaVsOWtl+inkuagh1wiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwiYmFkZ2VcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJDYWxlbmRhciDml6XljoZcIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcImNhbGVuZGFyXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiQ2FyZCDljaHniYdcIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcImNhcmRcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJDb2xsYXBzZSDmipjlj6DpnaLmnb9cIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcImNvbGxhcHNlXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiQ291bnRkb3duIOWAkuiuoeaXtlwiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwiY291bnRkb3duXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiRHJhd2VyIOaKveWxiVwiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwiZHJhd2VyXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiRmFiIOaCrOa1ruaMiemSrlwiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwiZmFiXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiRmF2IOaUtuiXj+aMiemSrlwiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwiZmF2XCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiR29vZHNOYXYg5ZWG5ZOB5a+86IiqXCIsXHJcblx0XHRcdFx0XHRcdHVybDogXCJnb29kcy1uYXZcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJHcmlkIOWuq+agvFwiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwiZ3JpZFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIkljb25zIOWbvuagh1wiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwiaWNvbnNcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJJbmRleGVkTGlzdCDntKLlvJXliJfooahcIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcImluZGV4ZWQtbGlzdFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIkxpbmsg6LaF6ZO+5o6lXCIsXHJcblx0XHRcdFx0XHRcdHVybDogXCJsaW5rXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiTGlzdCDliJfooahcIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcImxpc3RcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJMb2FkTW9yZSDliqDovb3mm7TlpJpcIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcImxvYWQtbW9yZVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIk5hdkJhciDoh6rlrprkuYnlr7zoiKrmoI9cIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcIm5hdi1iYXJcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJOb3RpY2VCYXIg6YCa5ZGK5qCPXCIsXHJcblx0XHRcdFx0XHRcdHVybDogXCJub3RpY2UtYmFyXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiTnVtYmVyQm94IOaVsOWtl+i+k+WFpeahhlwiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwibnVtYmVyLWJveFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIlBhZ2luYXRpb24g5YiG6aG15ZmoXCIsXHJcblx0XHRcdFx0XHRcdHVybDogXCJwYWdpbmF0aW9uXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiUG9wVXAg5by55Ye65bGCXCIsXHJcblx0XHRcdFx0XHRcdHVybDogXCJwb3B1cFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIlJhdGUg6K+E5YiGXCIsXHJcblx0XHRcdFx0XHRcdHVybDogXCJyYXRlXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiU2VhcmNoQmFyIOaQnOe0ouagj1wiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwic2VhcmNoLWJhclwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIlNlZ21lbnRlZENvbnRyb2wg5YiG5q615ZmoXCIsXHJcblx0XHRcdFx0XHRcdHVybDogXCJzZWdtZW50ZWQtY29udHJvbFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIlN0ZXBzIOatpemqpOadoVwiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwic3RlcHNcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJTd2lwZUFjdGlvbiDmu5Hliqjmk43kvZxcIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcInN3aXBlLWFjdGlvblwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIlN3aXBlckRvdCDova7mkq3lm77mjIfnpLrngrlcIixcclxuXHRcdFx0XHRcdFx0dXJsOiBcInN3aXBlci1kb3RcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJUYWcg5qCH562+XCIsXHJcblx0XHRcdFx0XHRcdHVybDogXCJ0YWdcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1wiLFxyXG5cdFx0XHRcdFx0XHR1cmw6IFwidHJhbnNpdGlvblwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7fSxcclxuXHRcdG9uUmVhZHkoKSB7fSxcclxuXHRcdG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRpdGxlOiAn5qyi6L+O5L2T6aqMdW5pLWFwcCcsXHJcblx0XHRcdFx0cGF0aDogJy9wYWdlcy90YWJCYXIvZXh0VUkvZXh0VUknXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoZSkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2Fib3V0L2Fib3V0J1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdvRGV0YWlsUGFnZShwYXRoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubmF2aWdhdGVGbGFnKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubmF2aWdhdGVGbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvZXh0VUkvJyArIHBhdGggKyAnLycgKyBwYXRoXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5hdmlnYXRlRmxhZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIDIwMClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0QGltcG9ydCAnLi4vLi4vLi4vY29tbW9uL3VuaS1udnVlLmNzcyc7XHJcbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91TGluay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBjYmM2ZDYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91TGluay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VMaW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjEyYWNiN2FkXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIlVzZXJzL05hZ2EvRG9jdW1lbnRzL0dpdEh1Yi9zdHVkZW50X3ViaWFwcC9zdHVkZW50LXVuaS9jb21wb25lbnRzL3VMaW5rLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VMaW5rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGNiYzZkNiZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidS10ZXh0XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIgfSxcbiAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5ocmVmLCBpbldoaXRlTGlzdDogX3ZtLmluV2hpdGVMaXN0IH0sXG4gICAgICBvbjogeyBjbGljazogX3ZtLm9wZW5VUkwgfVxuICAgIH0sXG4gICAgW192bS5fdihfdm0uX3MoX3ZtLnRleHQpKV1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91TGluay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91TGluay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHRleHQgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXCIgOmhyZWY9XCJocmVmXCIgQGNsaWNrPVwib3BlblVSTFwiIDppbldoaXRlTGlzdD1cImluV2hpdGVMaXN0XCI+e3t0ZXh0fX08L3RleHQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiB1LWxpbmvmmK/kuIDkuKrlpJbpg6jnvZHpobXotoXpk77mjqXnu4Tku7bvvIzlnKjlsI/nqIvluo/lhoXmiZPlvIDlhoXpg6h3ZWItdmlld+e7hOS7tuaIluWkjeWItnVybO+8jOWcqGFwcOWGheaJk+W8gOWklumDqOa1j+iniOWZqO+8jOWcqGg156uv5omT5byA5paw572R6aG1XHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGhyZWYg54K55Ye75ZCO5omT5byA55qE5aSW6YOo572R6aG1dXJs77yM5bCP56iL5bqP5Lit5b+F6aG75LulaHR0cHM6Ly/lvIDlpLRcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdGV4dCDmmL7npLrnmoTmloflrZdcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGluV2hpdGVMaXN0IOaYr+WQpuWcqOWwj+eoi+W6j+eZveWQjeWNleS4re+8jOWmguaenOWcqOeahOivne+8jOWcqOWwj+eoi+W6j+err+S8muebtOaOpeaJk+W8gOWGhee9rndlYi12aWV377yM5ZCm5YiZ5Lya5Y+q5Lya5aSN5Yi2dXJs77yM5o+Q56S65Zyo5aSW6YOo5omT5byAXHJcblx0ICogQGV4YW1wbGUgKiA8dS1saW5rIGhyZWY9XCJodHRwczovL2V4dC5kY2xvdWQubmV0LmNuXCIgdGV4dD1cImh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY25cIiA6aW5XaGl0ZUxpc3Q9XCJ0cnVlXCI+PC91LWxpbms+XHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3UtbGluaycsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRocmVmOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHRleHQ6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5XaGl0ZUxpc3Q6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9wZW5VUkwoKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5VUkwodGhpcy5ocmVmKSAvL+i/memHjOm7mOiupOS9v+eUqOWklumDqOa1j+iniOWZqOaJk+W8gOiAjOS4jeaYr+WGhemDqHdlYi12aWV357uE5Lu25omT5byAXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0d2luZG93Lm9wZW4odGhpcy5ocmVmKVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUFxyXG5cdFx0XHRcdGlmICh0aGlzLmluV2hpdGVMaXN0KSB7IC8v5aaC5p6c5Zyo5bCP56iL5bqP55qE572R5Z2A55m95ZCN5Y2V5Lit77yM5Lya6LWw5YaF572ud2Vidmlld+aJk+W8gO+8jOWQpuWImeS8muWkjeWItue9keWdgOaPkOekuuWcqOWklumDqOa1j+iniOWZqOaJk+W8gFxyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvY29tcG9uZW50L3dlYi12aWV3L3dlYi12aWV3P3VybD0nICsgdGhpcy5ocmVmXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xyXG5cdFx0XHRcdFx0XHRkYXRhOiB0aGlzLmhyZWZcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmnKznvZHlnYDml6Dms5Xnm7TmjqXlnKjlsI/nqIvluo/lhoXmiZPlvIDjgILlt7Loh6rliqjlpI3liLbnvZHlnYDvvIzor7flnKjmiYvmnLrmtY/op4jlmajph4znspjotLTor6XnvZHlnYAnLFxyXG5cdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2V4dFVJLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leHRVSS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1pY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJ1bmlpY29uc1wiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIm5vcm1hbFwiXG4gIH0sXG4gIFwidW5pLWNvbnRhaW5lclwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY4ZjhcIlxuICB9LFxuICBcInVuaS1oZWFkZXItbG9nb1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHVweFwiXG4gIH0sXG4gIFwidW5pLWhlYWRlci1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MFwiXG4gIH0sXG4gIFwidW5pLWhlbGxvLXRleHRcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcImhlbGxvLXRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjN0E3RTgzXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcImhlbGxvLWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjN0E3RTgzXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcInVuaS1wYW5lbFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMlwiXG4gIH0sXG4gIFwidW5pLXBhbmVsLWhcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEyXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMlwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEyXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEyXCJcbiAgfSxcbiAgXCJ1bmktcGFuZWwtaC1vblwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjBmMGYwXCJcbiAgfSxcbiAgXCJ1bmktcGFuZWwtdGV4dFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIlxuICB9LFxuICBcInVuaS1wYW5lbC1pY29uXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCIsXG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJyb3RhdGUoMGRlZylcIixcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiAwLFxuICAgIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IFwidHJhbnNmb3JtXCJcbiAgfSxcbiAgXCJAVFJBTlNJVElPTlwiOiB7XG4gICAgXCJ1bmktcGFuZWwtaWNvblwiOiB7XG4gICAgICBcImR1cmF0aW9uXCI6IDAsXG4gICAgICBcInByb3BlcnR5XCI6IFwidHJhbnNmb3JtXCJcbiAgICB9XG4gIH0sXG4gIFwidW5pLXBhbmVsLWljb24tb25cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwicm90YXRlKDE4MGRlZylcIlxuICB9LFxuICBcInVuaS1uYXZpZ2F0ZS1pdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2YwZjBmMFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEyXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphY3RpdmVcIjogXCIjZjhmOGY4XCJcbiAgfSxcbiAgXCJ1bmktbmF2aWdhdGUtdGV4dFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIlxuICB9LFxuICBcInVuaS1uYXZpZ2F0ZS1pY29uXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBvcHRpb25zLmNvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudHMsIG9wdGlvbnMuY29tcG9uZW50cyB8fCB7fSlcbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7fSxcImdsb2JhbFN0eWxlXCI6e319IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX19EMDY0RkE5XCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uL2Zhc3R3YXJld3MvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vZmFzdHdhcmV3cy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi9mYXN0d2FyZXdzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7fSJdLCJzb3VyY2VSb290IjoiIn0=