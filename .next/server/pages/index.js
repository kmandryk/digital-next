/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtbmV4dC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/YjE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./pages/page.tsx\");\n\n\n\nconst appCSS = `header {\n  background-color: #036;\n  border-bottom: 2px solid #fcba19;\n  padding: 0 65px 0 65px;\n  color: #fff;\n  display: flex;\n  height: 65px;\n  top: 0px;\n  width: 100%;\n}\n\nheader h1 {\n  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;\n  font-weight: normal;  /* 400 */\n  margin: 5px 5px 0 18px;\n  visibility: hidden;\n}\n\nheader .banner {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 10px 0 0;\n  /* border-style: dotted;\n  border-width: 1px;\n  border-color: lightgrey; */\n}\n\nheader .other {\n  display: flex;\n  flex-grow: 1;\n  /* border-style: dotted;\n  border-width: 1px;\n  border-color: lightgrey; */\n}\n\n:focus {\n  outline: 4px solid #3B99FC;\n  outline-offset: 1px;\n}\n\n#bclogo {\n  width: 300px;\n}\n\n/*\n  These are sample media queries only. Media queries are quite subjective\n  but, in general, should be made for the three different classes of screen\n  size: phone, tablet, full.\n*/\n\n@media screen and (min-width: 600px) and (max-width: 899px) {\n  header h1 {\n    font-size: calc(7px + 2.2vw);\n    visibility: visible;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  header h1 {\n    font-size: 2.0em;\n    visibility: visible;\n  }\n}\n\n/* nav */\n.submenu {\n  background-color: rgb(56, 89, 138);\n  box-shadow: rgb(179 177 179) 0px 6px 8px -4px;\n  color: rgb(252, 186, 25);\n  min-height: 40px;\n  width: 100%;\n}\n\n.submenu ul {\n  color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  margin: 0px;\n  padding-left: 0px;\n  padding-top: 8px;\n}\n\n.submenu ul li a {\n  color: rgb(255, 255, 255);\n  display: flex;\n  font-size: 16px;\n  font-weight: normal;\n  padding: 0px 15px;\n  text-decoration: none;\n}\n\n/* footer */\nfooter {\n  background-color: #036;\n  border-top: 2px solid #fcba19;\n  color: #fff;\n  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif; \n  position: absolute;\n  width: -webkit-fill-available;\n}\n\nfooter .container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  height: 46px;\n}\n\nfooter ul {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0;\n  color: #fff;\n  list-style: none;\n  align-items: center;\n  height: 100%;\n}\n\nfooter ul li a {\n  font-size: 0.813em;\n  font-weight: normal;  /* 400 */\n  color: #fff;\n  border-right: 1px solid #4b5e7e;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\na:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n\n:focus {\n  outline: 4px solid #3B99FC;\n  outline-offset: 1px;\n}\n\n.bannerTitle {\n  color: rgb(49, 49, 50);\n  font-size: 37px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 10px;\n  text-align: left;\n}\n.subTitle {\n  color: rgb(49, 49, 50);\n  font-size: 19px;\n  text-align: left;\n}\n\n.col-md-6 {\n  -webkit-flex-basis: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n`;\nfunction Home({ data  }) {\n    console.log(\"this is \" + data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                children: appCSS\n            }, void 0, false, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"banner\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://gov.bc.ca\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    id: \"bclogo\",\n                                    src: \"/BCID_H_rgb_rev.svg\",\n                                    alt: \"Go to the Government of British Columbia website\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                    lineNumber: 176,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                lineNumber: 175,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Hello British Columbia\"\n                            }, void 0, false, {\n                                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"other\",\n                        children: \"\\xa0\"\n                    }, void 0, false, {\n                        fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                        lineNumber: 180,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"submenu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \".\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                            lineNumber: 187,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                        lineNumber: 187,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                    lineNumber: 186,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Next.js!\"\n            }, void 0, false, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                lineNumber: 190,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Here is the Wordpress page loaded in a Next.js App:\"\n            }, void 0, false, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                lineNumber: 191,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                data: data\n            }, void 0, false, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"footer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \".\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                    lineNumber: 196,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                lineNumber: 196,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \".\",\n                                    children: \"Disclaimer\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                    lineNumber: 197,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                lineNumber: 197,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \".\",\n                                    children: \"Privacy\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                    lineNumber: 198,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                lineNumber: 198,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \".\",\n                                    children: \"Accessibility\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                    lineNumber: 199,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                lineNumber: 199,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \".\",\n                                    children: \"Copyright\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                    lineNumber: 200,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                lineNumber: 200,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \".\",\n                                    children: \"Contact Us\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                    lineNumber: 201,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                                lineNumber: 201,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                        lineNumber: 195,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                    lineNumber: 194,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n                lineNumber: 193,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kmandryk/dev/digital-next/pages/index.tsx\",\n        lineNumber: 169,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps() {\n    // Fetch data from external API\n    const res = await fetch(`http://wordpress-c0cce6-dev.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages/67`);\n    const content = await res.json();\n    const data = content.content.rendered;\n    console.log(\"data \" + data);\n    // Pass data to the page via props\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ3JCO0FBRXpCLE1BQU1FLFNBQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdLZCxDQUFDO0FBRWMsU0FBU0MsS0FBSyxFQUFFQyxLQUFJLEVBQU8sRUFBRTtJQUMxQ0MsUUFBUUMsR0FBRyxDQUFDLGFBQWFGO0lBQ3pCLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXUiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ1U7MEJBQ0VSOzs7Ozs7MEJBRUgsOERBQUNTOztrQ0FDQyw4REFBQ0o7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBRUMsTUFBSzswQ0FDTiw0RUFBQ0M7b0NBQUlDLElBQUc7b0NBQVNDLEtBQUk7b0NBQXNCQyxLQUFJOzs7Ozs7Ozs7OzswQ0FFakQsOERBQUNDOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBRU4sOERBQUNYO3dCQUFJQyxXQUFVO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBS3pCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1c7OEJBQ0QsNEVBQUNDO2tDQUFHLDRFQUFDUjs0QkFBRUMsTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsQiw4REFBQ0s7MEJBQUc7Ozs7OzswQkFDViw4REFBQ0c7MEJBQUU7Ozs7OzswQkFDRyw4REFBQ3BCLDZDQUFJQTtnQkFBQ0csTUFBTUE7Ozs7OzswQkFDWiw4REFBQ2tCO2dCQUFPZCxXQUFVOzBCQUNoQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2YsNEVBQUNXOzswQ0FDQyw4REFBQ0M7MENBQUcsNEVBQUNSO29DQUFFQyxNQUFLOzhDQUFJOzs7Ozs7Ozs7OzswQ0FDaEIsOERBQUNPOzBDQUFHLDRFQUFDUjtvQ0FBRUMsTUFBSzs4Q0FBSTs7Ozs7Ozs7Ozs7MENBQ2hCLDhEQUFDTzswQ0FBRyw0RUFBQ1I7b0NBQUVDLE1BQUs7OENBQUk7Ozs7Ozs7Ozs7OzBDQUNoQiw4REFBQ087MENBQUcsNEVBQUNSO29DQUFFQyxNQUFLOzhDQUFJOzs7Ozs7Ozs7OzswQ0FDaEIsOERBQUNPOzBDQUFHLDRFQUFDUjtvQ0FBRUMsTUFBSzs4Q0FBSTs7Ozs7Ozs7Ozs7MENBQ2hCLDhEQUFDTzswQ0FBRyw0RUFBQ1I7b0NBQUVDLE1BQUs7OENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQixDQUFDO0FBRU0sZUFBZVUscUJBQXFCO0lBQ3pDLCtCQUErQjtJQUMvQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sQ0FBQywrRUFBK0UsQ0FBQztJQUN6RyxNQUFNQyxVQUFXLE1BQU1GLElBQUlHLElBQUk7SUFDL0IsTUFBT3ZCLE9BQU9zQixRQUFRQSxPQUFPLENBQUNFLFFBQVE7SUFDdEN2QixRQUFRQyxHQUFHLENBQUMsVUFBVUY7SUFDdEIsa0NBQWtDO0lBQ2xDLE9BQU87UUFBRXlCLE9BQU87WUFBRXpCO1FBQUs7SUFBRTtBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC1uZXh0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlJ1xuXG5jb25zdCBhcHBDU1M9YGhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmNiYTE5O1xuICBwYWRkaW5nOiAwIDY1cHggMCA2NXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2NXB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiDigJhOb3RvIFNhbnPigJksIFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsOyAgLyogNDAwICovXG4gIG1hcmdpbjogNXB4IDVweCAwIDE4cHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuaGVhZGVyIC5iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgLyogYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTsgKi9cbn1cblxuaGVhZGVyIC5vdGhlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgLyogYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTsgKi9cbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogNHB4IHNvbGlkICMzQjk5RkM7XG4gIG91dGxpbmUtb2Zmc2V0OiAxcHg7XG59XG5cbiNiY2xvZ28ge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi8qXG4gIFRoZXNlIGFyZSBzYW1wbGUgbWVkaWEgcXVlcmllcyBvbmx5LiBNZWRpYSBxdWVyaWVzIGFyZSBxdWl0ZSBzdWJqZWN0aXZlXG4gIGJ1dCwgaW4gZ2VuZXJhbCwgc2hvdWxkIGJlIG1hZGUgZm9yIHRoZSB0aHJlZSBkaWZmZXJlbnQgY2xhc3NlcyBvZiBzY3JlZW5cbiAgc2l6ZTogcGhvbmUsIHRhYmxldCwgZnVsbC5cbiovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcbiAgaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IGNhbGMoN3B4ICsgMi4ydncpO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDIuMGVtO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cblxuLyogbmF2ICovXG4uc3VibWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgODksIDEzOCk7XG4gIGJveC1zaGFkb3c6IHJnYigxNzkgMTc3IDE3OSkgMHB4IDZweCA4cHggLTRweDtcbiAgY29sb3I6IHJnYigyNTIsIDE4NiwgMjUpO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Ym1lbnUgdWwge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5zdWJtZW51IHVsIGxpIGEge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIGZvb3RlciAqL1xuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzNjtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmY2JhMTk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTog4oCYTm90byBTYW5z4oCZLCBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjsgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbmZvb3RlciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NnB4O1xufVxuXG5mb290ZXIgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuZm9vdGVyIHVsIGxpIGEge1xuICBmb250LXNpemU6IDAuODEzZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAvKiA0MDAgKi9cbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjVlN2U7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDRweCBzb2xpZCAjM0I5OUZDO1xuICBvdXRsaW5lLW9mZnNldDogMXB4O1xufVxuXG4uYmFubmVyVGl0bGUge1xuICBjb2xvcjogcmdiKDQ5LCA0OSwgNTApO1xuICBmb250LXNpemU6IDM3cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc3ViVGl0bGUge1xuICBjb2xvcjogcmdiKDQ5LCA0OSwgNTApO1xuICBmb250LXNpemU6IDE5cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb2wtbWQtNiB7XG4gIC13ZWJraXQtZmxleC1iYXNpczogNTAlO1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIG1heC13aWR0aDogNTAlO1xufVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9OiBhbnkpIHtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIFwiICsgZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPHN0eWxlPlxuICAgICAgICB7YXBwQ1NTfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ292LmJjLmNhXCI+XG4gICAgICAgICAgICA8aW1nIGlkPVwiYmNsb2dvXCIgc3JjPVwiL0JDSURfSF9yZ2JfcmV2LnN2Z1wiIGFsdD1cIkdvIHRvIHRoZSBHb3Zlcm5tZW50IG9mIEJyaXRpc2ggQ29sdW1iaWEgd2Vic2l0ZVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxoMT5IZWxsbyBCcml0aXNoIENvbHVtYmlhPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJcIj5cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIuXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDE+V2VsY29tZSB0byBOZXh0LmpzITwvaDE+XG48cD5IZXJlIGlzIHRoZSBXb3JkcHJlc3MgcGFnZSBsb2FkZWQgaW4gYSBOZXh0LmpzIEFwcDo8L3A+XG4gICAgICA8UGFnZSBkYXRhPXtkYXRhfS8+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIuXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiLlwiPkRpc2NsYWltZXI8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIi5cIj5Qcml2YWN5PC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIuXCI+QWNjZXNzaWJpbGl0eTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiLlwiPkNvcHlyaWdodDwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiLlwiPkNvbnRhY3QgVXM8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd29yZHByZXNzLWMwY2NlNi1kZXYuYXBwcy5zaWx2ZXIuZGV2b3BzLmdvdi5iYy5jYS93cC1qc29uL3dwL3YyL3BhZ2VzLzY3YClcbiAgY29uc3QgY29udGVudCA9ICBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCAgZGF0YSA9IGNvbnRlbnQuY29udGVudC5yZW5kZXJlZDtcbiAgY29uc29sZS5sb2coXCJkYXRhIFwiICsgZGF0YSk7XG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH1cbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJQYWdlIiwiYXBwQ1NTIiwiSG9tZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic3R5bGUiLCJoZWFkZXIiLCJhIiwiaHJlZiIsImltZyIsImlkIiwic3JjIiwiYWx0IiwiaDEiLCJ1bCIsImxpIiwicCIsImZvb3RlciIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwiY29udGVudCIsImpzb24iLCJyZW5kZXJlZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./pages/page.tsx":
/*!************************!*\
  !*** ./pages/page.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Page = ({ data  })=>{\n    console.log(\"hello\");\n    console.log(data);\n    const pageCSS = `\n\n    .page {\n        background: rgb(242, 242, 242);\n      }\n      .bannerTitle {\n        color: rgb(49, 49, 50);\n        font-size: 37px;\n        font-weight: 700;\n        line-height: 1.2;\n        margin-bottom: 10px;\n        text-align: left;\n      }\n      .subTitle {\n        color: rgb(49, 49, 50);\n        font-size: 19px;\n        text-align: left;\n      }\n      h3 {\n        margin: 40px 0 0;\n      }\n      ul {\n        list-style-type: none;\n        padding: 0;\n      }\n      li {\n        display: inline-block;\n        margin: 0 10px;\n      }\n      a {\n        color: #1a5a96;\n      }\n      \n      a:hover {\n        text-decoration: none;\n        color: blue;\n      }\n      \n      i.fa-external-link-alt {\n        color: #1a5a96;\n      }\n      .col-md-6 {\n        -webkit-flex-basis: 50%;\n        flex-basis: 50%;\n        max-width: 50%;\n      }\n      \n      .row {\n        margin: auto;\n        display: flex;\n        /* background: rgb(242, 242, 242); */\n        max-width: 1065px;\n        align-items: center;\n      }\n      \n      .sideImage {\n        background: rgb(242, 242, 242);\n        display: block;\n        max-width: 100%;\n        max-height: 100%;\n        padding-bottom: 20px;\n        padding-top: 20px;\n      }`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                children: pageCSS\n            }, void 0, false, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: data\n                }\n            }, void 0, false, {\n                fileName: \"/home/kmandryk/dev/digital-next/pages/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kmandryk/dev/digital-next/pages/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLE1BQU1BLE9BQU8sQ0FBQyxFQUFFQyxLQUFJLEVBQU8sR0FBSztJQUM1QkMsUUFBUUMsR0FBRyxDQUFDO0lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNRyxVQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BOERiLENBQUM7SUFDSixxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBT0Y7Ozs7OzswQkFDViw4REFBQ0M7Z0JBQUlFLHlCQUF5QjtvQkFBQ0MsUUFBUVA7Z0JBQUk7Ozs7Ozs7Ozs7OztBQUdyRDtBQUNBLGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC1uZXh0Ly4vcGFnZXMvcGFnZS50c3g/YTVjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQYWdlID0gKHsgZGF0YSB9OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IHBhZ2VDU1MgPWBcblxuICAgIC5wYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0MiwgMjQyLCAyNDIpO1xuICAgICAgfVxuICAgICAgLmJhbm5lclRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYig0OSwgNDksIDUwKTtcbiAgICAgICAgZm9udC1zaXplOiAzN3B4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgLnN1YlRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYig0OSwgNDksIDUwKTtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDQwcHggMCAwO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMxYTVhOTY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpLmZhLWV4dGVybmFsLWxpbmstYWx0IHtcbiAgICAgICAgY29sb3I6ICMxYTVhOTY7XG4gICAgICB9XG4gICAgICAuY29sLW1kLTYge1xuICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDUwJTtcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLyogYmFja2dyb3VuZDogcmdiKDI0MiwgMjQyLCAyNDIpOyAqL1xuICAgICAgICBtYXgtd2lkdGg6IDEwNjVweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNpZGVJbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgfWA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdHlsZT57cGFnZUNTU308L3N0eWxlPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGRhdGF9fT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbIlBhZ2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBhZ2VDU1MiLCJkaXYiLCJzdHlsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();