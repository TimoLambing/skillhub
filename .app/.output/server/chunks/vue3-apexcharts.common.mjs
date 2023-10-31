import * as vue from 'vue';
import * as apexcharts from 'apexcharts';

function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
			if (k !== 'default' && !(k in n)) {
				const d = Object.getOwnPropertyDescriptor(e, k);
				if (d) {
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			}
		} }
	}
	return Object.freeze(n);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var vue3Apexcharts_common$2 = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apexcharts);

(function (module) {
	module.exports =
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
	/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "8bbf":
	/***/ (function(module, exports) {

	module.exports = require$$0;

	/***/ }),

	/***/ "95e6":
	/***/ (function(module, exports) {

	module.exports = require$$1;

	/***/ }),

	/***/ "fb15":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	// ESM COMPAT FLAG
	__webpack_require__.r(__webpack_exports__);

	// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
	var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

	// EXTERNAL MODULE: external {"root":"ApexCharts","commonjs":"apexcharts","commonjs2":"apexcharts"}
	var external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_ = __webpack_require__("95e6");
	var external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_default = /*#__PURE__*/__webpack_require__.n(external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_);

	// CONCATENATED MODULE: ./src/vue3-apexcharts.js
	/* eslint-disable */



	// define all emitted events in order to better
	// document how the component should work
	const events = [
	  "animationEnd",
	  "beforeMount",
	  "mounted",
	  "updated",
	  "click",
	  "mouseMove",
	  "mouseLeave",
	  "legendClick",
	  "markerClick",
	  "selection",
	  "dataPointSelection",
	  "dataPointMouseEnter",
	  "dataPointMouseLeave",
	  "beforeZoom",
	  "beforeResetZoom",
	  "zoomed",
	  "scrolled",
	  "brushScrolled"
	];

	const vueApexcharts = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
	  name: "apexchart",
	  props: {
	    options: {
	      type: Object
	    },
	    type: {
	      type: String
	    },
	    series: {
	      type: Array,
	      required: true
	    },
	    width: {
	      default: "100%"
	    },
	    height: {
	      default: "auto"
	    }
	  },

	  // events emitted by this component
	  emits: events,

	  setup(props, { emit }) {
	    const __el = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
	    const chart = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);

	    const isObject = item => {
	      return item && typeof item === "object" && !Array.isArray(item) && item != null;
	    };

	    const extend = (target, source) => {
	      if (typeof Object.assign !== "function") {
	        (function() {
	          Object.assign = function(target) {
	            // We must check against these specific cases.
	            if (target === undefined || target === null) {
	              throw new TypeError("Cannot convert undefined or null to object");
	            }

	            let output = Object(target);
	            for (let index = 1; index < arguments.length; index++) {
	              let source = arguments[index];
	              if (source !== undefined && source !== null) {
	                for (let nextKey in source) {
	                  if (source.hasOwnProperty(nextKey)) {
	                    output[nextKey] = source[nextKey];
	                  }
	                }
	              }
	            }
	            return output;
	          };
	        })();
	      }

	      let output = Object.assign({}, target);
	      if (isObject(target) && isObject(source)) {
	        Object.keys(source).forEach(key => {
	          if (isObject(source[key])) {
	            if (!(key in target)) {
	              Object.assign(output, {
	                [key]: source[key]
	              });
	            } else {
	              output[key] = extend(target[key], source[key]);
	            }
	          } else {
	            Object.assign(output, {
	              [key]: source[key]
	            });
	          }
	        });
	      }
	      return output;
	    };

	    const init = async () => {
	      await Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();
	      
	      if (chart.value) {
				  return;
	      }

	      const newOptions = {
	        chart: {
	          type: props.type || props.options.chart.type || "line",
	          height: props.height,
	          width: props.width,
	          events: {}
	        },
	        series: props.series
	      };

	      // emit events to the parent component
	      // to allow for two-way data binding
	      events.forEach(event => {
	        let callback = (...args) => emit(event, ...args); // args => chartContext, options
	        newOptions.chart.events[event] = callback;
	      });

	      const config = extend(props.options, newOptions);
	      chart.value = new external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_default.a(__el.value, config);
	      return chart.value.render();
	    };

	    const refresh = () => {
	      destroy();
	      return init();
	    };

	    const destroy = () => {
	      chart.value.destroy();
	    };

	    const updateSeries = (newSeries, animate) => {
	      return chart.value.updateSeries(newSeries, animate);
	    };

	    const updateOptions = (newOptions, redrawPaths, animate, updateSyncedCharts) => {
	      return chart.value.updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts);
	    };

	    const toggleSeries = seriesName => {
	      return chart.value.toggleSeries(seriesName);
	    };

	    const showSeries = seriesName => {
	      chart.value.showSeries(seriesName);
	    };

	    const hideSeries = seriesName => {
	      chart.value.hideSeries(seriesName);
	    };

	    const appendSeries = (newSeries, animate) => {
	      return chart.value.appendSeries(newSeries, animate);
	    };

	    const resetSeries = () => {
	      chart.value.resetSeries();
	    };

	    const toggleDataPointSelection = (seriesIndex, dataPointIndex) => {
	      chart.value.toggleDataPointSelection(seriesIndex, dataPointIndex);
	    };

	    const appendData = newData => {
	      return chart.value.appendData(newData);
	    };

	    const zoomX = (start, end) => {
	      return chart.value.zoomX(start, end);
	    };

	    const dataURI = options => {
	      return chart.value.dataURI(options);
	    };

	    const setLocale = localeName => {
	      return chart.value.setLocale(localeName);
	    };

	    const addXaxisAnnotation = (options, pushToMemory) => {
	      chart.value.addXaxisAnnotation(options, pushToMemory);
	    };

	    const addYaxisAnnotation = (options, pushToMemory) => {
	      chart.value.addYaxisAnnotation(options, pushToMemory);
	    };

	    const addPointAnnotation = (options, pushToMemory) => {
	      chart.value.addPointAnnotation(options, pushToMemory);
	    };

	    const removeAnnotation = (id, options) => {
	      chart.value.removeAnnotation(id, options);
	    };

	    const clearAnnotations = () => {
	      chart.value.clearAnnotations();
	    };

	    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeMount"])(() => {
	      window.ApexCharts = external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_default.a;
	    });

	    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
	      __el.value = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])().proxy.$el;
	      init();
	    });

	    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(() => {
	      if (!chart.value) {
	        return;
	      }
	      destroy();
	    });

	    const reactiveProps = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRefs"])(props);
	    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(reactiveProps.options, () => {
	      if (!chart.value && props.options) {
	        init();
	      } else {
	        chart.value.updateOptions(props.options);
	      }
	    });

	    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(
	      reactiveProps.series,
	      () => {
	        if (!chart.value && props.series) {
	          init();
	        } else {
	          chart.value.updateSeries(props.series);
	        }
	      },
	      { deep: true }
	    );

	    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(reactiveProps.type, () => {
	      refresh();
	    });

	    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(reactiveProps.width, () => {
	      refresh();
	    });

	    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(reactiveProps.height, () => {
	      refresh();
	    });

	    return {
	      chart,
	      init,
	      refresh,
	      destroy,
	      updateOptions,
	      updateSeries,
	      toggleSeries,
	      showSeries,
	      hideSeries,
	      resetSeries,
	      zoomX,
	      toggleDataPointSelection,
	      appendData,
	      appendSeries,
	      addXaxisAnnotation,
	      addYaxisAnnotation,
	      addPointAnnotation,
	      removeAnnotation,
	      clearAnnotations,
	      setLocale,
	      dataURI
	    };
	  },

	  render() {
	    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
	      class: "vue-apexcharts"
	    });
	  }
	});

	/* harmony default export */ var vue3_apexcharts = (vueApexcharts);

	// CONCATENATED MODULE: ./src/index.js
	/* eslint-disable */


	const install = app => {
	  app.component(vue3_apexcharts.name, vue3_apexcharts);
	};

	vue3_apexcharts.install = install;

	/* harmony default export */ var src_0 = (vue3_apexcharts);

	// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


	/* harmony default export */ __webpack_exports__["default"] = (src_0);



	/***/ })

	/******/ });
	
} (vue3Apexcharts_common$2));

var vue3Apexcharts_commonExports = vue3Apexcharts_common$2.exports;
const vue3Apexcharts_common = /*@__PURE__*/getDefaultExportFromCjs(vue3Apexcharts_commonExports);

const vue3Apexcharts_common$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: vue3Apexcharts_common
}, [vue3Apexcharts_commonExports]);

export { vue3Apexcharts_common$1 as v };
//# sourceMappingURL=vue3-apexcharts.common.mjs.map
