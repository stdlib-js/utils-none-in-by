// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e,i,n){var o;if(!t(e))throw new TypeError(s("null3L",e));if(!r(i))throw new TypeError(s("null2H",i));for(o in e)if(i.call(n,e[o],o,e))return!1;return!0}export{e as default};
//# sourceMappingURL=index.mjs.map
