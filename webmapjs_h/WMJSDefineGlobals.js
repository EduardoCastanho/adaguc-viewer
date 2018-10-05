var isDefined, WMJSMap, WMJSLayer, getUrlVars, checkIfHashTagChanged, WMJSTimer, WMJSGetServiceFromStore, WMJScheckURL, URLEncode, URLDecode, WMJSDateOutSideRange, WMJSDateTooEarlyString, WMJSDateTooLateString, WMJSEmptyLayerName, WMJSEmptyLayerTitle, parseISO8601DateToDate, I18n, removeMouseWheelEvent, addMouseWheelEvent;
var initWMJS = function () {
  let wmjs = window.wmjs;
  isDefined = wmjs.isDefined;
  WMJSMap = wmjs.WMJSMap;
  WMJSLayer = wmjs.WMJSLayer;
  getUrlVars = wmjs.getUrlVars;
  checkIfHashTagChanged = wmjs.checkIfHashTagChanged;
  WMJSTimer = wmjs.WMJSTimer;
  WMJSGetServiceFromStore = wmjs.WMJSGetServiceFromStore;
  WMJScheckURL = wmjs.WMJScheckURL;
  URLEncode = wmjs.URLEncode;
  URLDecode = wmjs.URLDecode;
  WMJSDateOutSideRange = wmjs.WMJSDateOutSideRange;
  WMJSDateTooEarlyString = wmjs.WMJSDateTooEarlyString;
  WMJSDateTooLateString = wmjs.WMJSDateTooLateString;
  WMJSEmptyLayerName = wmjs.WMJSEmptyLayerName;
  WMJSEmptyLayerTitle = wmjs.WMJSEmptyLayerTitle;
  parseISO8601DateToDate = wmjs.parseISO8601DateToDate;
  I18n = wmjs.I18n;
  removeMouseWheelEvent = wmjs.removeMouseWheelEvent;
  addMouseWheelEvent = wmjs.addMouseWheelEvent;
};
$(function() {
  initWMJS();
});
