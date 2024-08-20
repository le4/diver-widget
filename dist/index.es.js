import * as b from "react";
import ot, { useState as ln } from "react";
import "react-dom";
function un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ze = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function fn() {
  if (Bt) return fe;
  Bt = 1;
  var e = ot, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, d) {
    var p, h = {}, T = null, _ = null;
    d !== void 0 && (T = "" + d), u.key !== void 0 && (T = "" + u.key), u.ref !== void 0 && (_ = u.ref);
    for (p in u) n.call(u, p) && !o.hasOwnProperty(p) && (h[p] = u[p]);
    if (c && c.defaultProps) for (p in u = c.defaultProps, u) h[p] === void 0 && (h[p] = u[p]);
    return { $$typeof: t, type: c, key: T, ref: _, props: h, _owner: s.current };
  }
  return fe.Fragment = r, fe.jsx = a, fe.jsxs = a, fe;
}
var de = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function dn() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ot, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), g = Symbol.iterator, E = "@@iterator";
    function y(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = g && i[g] || i[E];
      return typeof f == "function" ? f : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(i) {
      {
        for (var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
          m[v - 1] = arguments[v];
        S("error", i, m);
      }
    }
    function S(i, f, m) {
      {
        var v = C.ReactDebugCurrentFrame, N = v.getStackAddendum();
        N !== "" && (f += "%s", m = m.concat([N]));
        var x = m.map(function(O) {
          return String(O);
        });
        x.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, x);
      }
    }
    var B = !1, z = !1, $ = !1, I = !1, ae = !1, Y;
    Y = Symbol.for("react.module.reference");
    function be(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === o || ae || i === s || i === d || i === p || I || i === _ || B || z || $ || typeof i == "object" && i !== null && (i.$$typeof === T || i.$$typeof === h || i.$$typeof === a || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Y || i.getModuleId !== void 0));
    }
    function kr(i, f, m) {
      var v = i.displayName;
      if (v)
        return v;
      var N = f.displayName || f.name || "";
      return N !== "" ? m + "(" + N + ")" : m;
    }
    function mt(i) {
      return i.displayName || "Context";
    }
    function W(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var f = i;
            return mt(f) + ".Consumer";
          case a:
            var m = i;
            return mt(m._context) + ".Provider";
          case u:
            return kr(i, i.render, "ForwardRef");
          case h:
            var v = i.displayName || null;
            return v !== null ? v : W(i.type) || "Memo";
          case T: {
            var N = i, x = N._payload, O = N._init;
            try {
              return W(O(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ce = 0, ht, yt, gt, vt, bt, wt, Et;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function Dr() {
      {
        if (ce === 0) {
          ht = console.log, yt = console.info, gt = console.warn, vt = console.error, bt = console.group, wt = console.groupCollapsed, Et = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ce++;
      }
    }
    function Lr() {
      {
        if (ce--, ce === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, i, {
              value: ht
            }),
            info: Z({}, i, {
              value: yt
            }),
            warn: Z({}, i, {
              value: gt
            }),
            error: Z({}, i, {
              value: vt
            }),
            group: Z({}, i, {
              value: bt
            }),
            groupCollapsed: Z({}, i, {
              value: wt
            }),
            groupEnd: Z({}, i, {
              value: Et
            })
          });
        }
        ce < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var De = C.ReactCurrentDispatcher, Le;
    function we(i, f, m) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (N) {
            var v = N.stack.trim().match(/\n( *(at )?)/);
            Le = v && v[1] || "";
          }
        return `
` + Le + i;
      }
    }
    var Be = !1, Ee;
    {
      var Br = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new Br();
    }
    function St(i, f) {
      if (!i || Be)
        return "";
      {
        var m = Ee.get(i);
        if (m !== void 0)
          return m;
      }
      var v;
      Be = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = De.current, De.current = null, Dr();
      try {
        if (f) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (D) {
              v = D;
            }
            Reflect.construct(i, [], O);
          } else {
            try {
              O.call();
            } catch (D) {
              v = D;
            }
            i.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            v = D;
          }
          i();
        }
      } catch (D) {
        if (D && v && typeof D.stack == "string") {
          for (var R = D.stack.split(`
`), k = v.stack.split(`
`), A = R.length - 1, j = k.length - 1; A >= 1 && j >= 0 && R[A] !== k[j]; )
            j--;
          for (; A >= 1 && j >= 0; A--, j--)
            if (R[A] !== k[j]) {
              if (A !== 1 || j !== 1)
                do
                  if (A--, j--, j < 0 || R[A] !== k[j]) {
                    var M = `
` + R[A].replace(" at new ", " at ");
                    return i.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", i.displayName)), typeof i == "function" && Ee.set(i, M), M;
                  }
                while (A >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Be = !1, De.current = x, Lr(), Error.prepareStackTrace = N;
      }
      var se = i ? i.displayName || i.name : "", G = se ? we(se) : "";
      return typeof i == "function" && Ee.set(i, G), G;
    }
    function Ur(i, f, m) {
      return St(i, !1);
    }
    function $r(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function Re(i, f, m) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return St(i, $r(i));
      if (typeof i == "string")
        return we(i);
      switch (i) {
        case d:
          return we("Suspense");
        case p:
          return we("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return Ur(i.render);
          case h:
            return Re(i.type, f, m);
          case T: {
            var v = i, N = v._payload, x = v._init;
            try {
              return Re(x(N), f, m);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, Ot = {}, Tt = C.ReactDebugCurrentFrame;
    function Se(i) {
      if (i) {
        var f = i._owner, m = Re(i.type, i._source, f ? f.type : null);
        Tt.setExtraStackFrame(m);
      } else
        Tt.setExtraStackFrame(null);
    }
    function Ir(i, f, m, v, N) {
      {
        var x = Function.call.bind(le);
        for (var O in i)
          if (x(i, O)) {
            var R = void 0;
            try {
              if (typeof i[O] != "function") {
                var k = Error((v || "React class") + ": " + m + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              R = i[O](f, O, v, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              R = A;
            }
            R && !(R instanceof Error) && (Se(N), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", m, O, typeof R), Se(null)), R instanceof Error && !(R.message in Ot) && (Ot[R.message] = !0, Se(N), P("Failed %s type: %s", m, R.message), Se(null));
          }
      }
    }
    var Mr = Array.isArray;
    function Ue(i) {
      return Mr(i);
    }
    function Vr(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, m = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return m;
      }
    }
    function qr(i) {
      try {
        return Pt(i), !1;
      } catch {
        return !0;
      }
    }
    function Pt(i) {
      return "" + i;
    }
    function Nt(i) {
      if (qr(i))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vr(i)), Pt(i);
    }
    var ue = C.ReactCurrentOwner, Hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xt, _t, $e;
    $e = {};
    function Wr(i) {
      if (le.call(i, "ref")) {
        var f = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function zr(i) {
      if (le.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Jr(i, f) {
      if (typeof i.ref == "string" && ue.current && f && ue.current.stateNode !== f) {
        var m = W(ue.current.type);
        $e[m] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(ue.current.type), i.ref), $e[m] = !0);
      }
    }
    function Kr(i, f) {
      {
        var m = function() {
          xt || (xt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Yr(i, f) {
      {
        var m = function() {
          _t || (_t = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Zr = function(i, f, m, v, N, x, O) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: f,
        ref: m,
        props: O,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Gr(i, f, m, v, N) {
      {
        var x, O = {}, R = null, k = null;
        m !== void 0 && (Nt(m), R = "" + m), zr(f) && (Nt(f.key), R = "" + f.key), Wr(f) && (k = f.ref, Jr(f, N));
        for (x in f)
          le.call(f, x) && !Hr.hasOwnProperty(x) && (O[x] = f[x]);
        if (i && i.defaultProps) {
          var A = i.defaultProps;
          for (x in A)
            O[x] === void 0 && (O[x] = A[x]);
        }
        if (R || k) {
          var j = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          R && Kr(O, j), k && Yr(O, j);
        }
        return Zr(i, R, k, N, v, ue.current, O);
      }
    }
    var Ie = C.ReactCurrentOwner, Ct = C.ReactDebugCurrentFrame;
    function ne(i) {
      if (i) {
        var f = i._owner, m = Re(i.type, i._source, f ? f.type : null);
        Ct.setExtraStackFrame(m);
      } else
        Ct.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Ve(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function At() {
      {
        if (Ie.current) {
          var i = W(Ie.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Xr(i) {
      return "";
    }
    var jt = {};
    function Qr(i) {
      {
        var f = At();
        if (!f) {
          var m = typeof i == "string" ? i : i.displayName || i.name;
          m && (f = `

Check the top-level render call using <` + m + ">.");
        }
        return f;
      }
    }
    function Ft(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var m = Qr(f);
        if (jt[m])
          return;
        jt[m] = !0;
        var v = "";
        i && i._owner && i._owner !== Ie.current && (v = " It was passed a child from " + W(i._owner.type) + "."), ne(i), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, v), ne(null);
      }
    }
    function kt(i, f) {
      {
        if (typeof i != "object")
          return;
        if (Ue(i))
          for (var m = 0; m < i.length; m++) {
            var v = i[m];
            Ve(v) && Ft(v, f);
          }
        else if (Ve(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var N = y(i);
          if (typeof N == "function" && N !== i.entries)
            for (var x = N.call(i), O; !(O = x.next()).done; )
              Ve(O.value) && Ft(O.value, f);
        }
      }
    }
    function en(i) {
      {
        var f = i.type;
        if (f == null || typeof f == "string")
          return;
        var m;
        if (typeof f == "function")
          m = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === h))
          m = f.propTypes;
        else
          return;
        if (m) {
          var v = W(f);
          Ir(m, i.props, "prop", v, i);
        } else if (f.PropTypes !== void 0 && !Me) {
          Me = !0;
          var N = W(f);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(i) {
      {
        for (var f = Object.keys(i.props), m = 0; m < f.length; m++) {
          var v = f[m];
          if (v !== "children" && v !== "key") {
            ne(i), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ne(null);
            break;
          }
        }
        i.ref !== null && (ne(i), P("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    var Dt = {};
    function Lt(i, f, m, v, N, x) {
      {
        var O = be(i);
        if (!O) {
          var R = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = Xr();
          k ? R += k : R += At();
          var A;
          i === null ? A = "null" : Ue(i) ? A = "array" : i !== void 0 && i.$$typeof === t ? (A = "<" + (W(i.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : A = typeof i, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, R);
        }
        var j = Gr(i, f, m, N, x);
        if (j == null)
          return j;
        if (O) {
          var M = f.children;
          if (M !== void 0)
            if (v)
              if (Ue(M)) {
                for (var se = 0; se < M.length; se++)
                  kt(M[se], i);
                Object.freeze && Object.freeze(M);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              kt(M, i);
        }
        if (le.call(f, "key")) {
          var G = W(i), D = Object.keys(f).filter(function(cn) {
            return cn !== "key";
          }), qe = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dt[G + qe]) {
            var an = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qe, G, an, G), Dt[G + qe] = !0;
          }
        }
        return i === n ? tn(j) : en(j), j;
      }
    }
    function rn(i, f, m) {
      return Lt(i, f, m, !0);
    }
    function nn(i, f, m) {
      return Lt(i, f, m, !1);
    }
    var sn = nn, on = rn;
    de.Fragment = n, de.jsx = sn, de.jsxs = on;
  }()), de;
}
process.env.NODE_ENV === "production" ? Ze.exports = fn() : Ze.exports = dn();
var V = Ze.exports;
const Co = (e) => {
  const [t, r] = ln(0);
  return /* @__PURE__ */ V.jsxs("div", { children: [
    /* @__PURE__ */ V.jsxs("button", { onClick: () => r(t + 1), children: [
      "count: ",
      t
    ] }),
    /* @__PURE__ */ V.jsx("div", { children: e.content })
  ] });
};
function rr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: pn } = Object.prototype, { getPrototypeOf: it } = Object, _e = /* @__PURE__ */ ((e) => (t) => {
  const r = pn.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), H = (e) => (e = e.toLowerCase(), (t) => _e(t) === e), Ce = (e) => (t) => typeof t === e, { isArray: oe } = Array, ye = Ce("undefined");
function mn(e) {
  return e !== null && !ye(e) && e.constructor !== null && !ye(e.constructor) && U(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const nr = H("ArrayBuffer");
function hn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && nr(e.buffer), t;
}
const yn = Ce("string"), U = Ce("function"), sr = Ce("number"), Ae = (e) => e !== null && typeof e == "object", gn = (e) => e === !0 || e === !1, Oe = (e) => {
  if (_e(e) !== "object")
    return !1;
  const t = it(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, vn = H("Date"), bn = H("File"), wn = H("Blob"), En = H("FileList"), Rn = (e) => Ae(e) && U(e.pipe), Sn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || U(e.append) && ((t = _e(e)) === "formdata" || // detect form-data instance
  t === "object" && U(e.toString) && e.toString() === "[object FormData]"));
}, On = H("URLSearchParams"), [Tn, Pn, Nn, xn] = ["ReadableStream", "Request", "Response", "Headers"].map(H), _n = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ge(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), oe(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let c;
    for (n = 0; n < a; n++)
      c = o[n], t.call(null, e[c], c, e);
  }
}
function or(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const ee = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ir = (e) => !ye(e) && e !== ee;
function Ge() {
  const { caseless: e } = ir(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && or(t, s) || s;
    Oe(t[o]) && Oe(n) ? t[o] = Ge(t[o], n) : Oe(n) ? t[o] = Ge({}, n) : oe(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && ge(arguments[n], r);
  return t;
}
const Cn = (e, t, r, { allOwnKeys: n } = {}) => (ge(t, (s, o) => {
  r && U(s) ? e[o] = rr(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), An = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), jn = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Fn = (e, t, r, n) => {
  let s, o, a;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!n || n(a, e, t)) && !c[a] && (t[a] = e[a], c[a] = !0);
    e = r !== !1 && it(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, kn = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Dn = (e) => {
  if (!e) return null;
  if (oe(e)) return e;
  let t = e.length;
  if (!sr(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ln = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && it(Uint8Array)), Bn = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Un = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, $n = H("HTMLFormElement"), In = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), $t = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Mn = H("RegExp"), ar = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ge(r, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (n[o] = a || s);
  }), Object.defineProperties(e, n);
}, Vn = (e) => {
  ar(e, (t, r) => {
    if (U(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (U(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, qn = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return oe(e) ? n(e) : n(String(e).split(t)), r;
}, Hn = () => {
}, Wn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, He = "abcdefghijklmnopqrstuvwxyz", It = "0123456789", cr = {
  DIGIT: It,
  ALPHA: He,
  ALPHA_DIGIT: He + He.toUpperCase() + It
}, zn = (e = 16, t = cr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Jn(e) {
  return !!(e && U(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Kn = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Ae(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = oe(n) ? [] : {};
        return ge(n, (a, c) => {
          const u = r(a, s + 1);
          !ye(u) && (o[c] = u);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Yn = H("AsyncFunction"), Zn = (e) => e && (Ae(e) || U(e)) && U(e.then) && U(e.catch), lr = ((e, t) => e ? setImmediate : t ? ((r, n) => (ee.addEventListener("message", ({ source: s, data: o }) => {
  s === ee && o === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), ee.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  U(ee.postMessage)
), Gn = typeof queueMicrotask < "u" ? queueMicrotask.bind(ee) : typeof process < "u" && process.nextTick || lr, l = {
  isArray: oe,
  isArrayBuffer: nr,
  isBuffer: mn,
  isFormData: Sn,
  isArrayBufferView: hn,
  isString: yn,
  isNumber: sr,
  isBoolean: gn,
  isObject: Ae,
  isPlainObject: Oe,
  isReadableStream: Tn,
  isRequest: Pn,
  isResponse: Nn,
  isHeaders: xn,
  isUndefined: ye,
  isDate: vn,
  isFile: bn,
  isBlob: wn,
  isRegExp: Mn,
  isFunction: U,
  isStream: Rn,
  isURLSearchParams: On,
  isTypedArray: Ln,
  isFileList: En,
  forEach: ge,
  merge: Ge,
  extend: Cn,
  trim: _n,
  stripBOM: An,
  inherits: jn,
  toFlatObject: Fn,
  kindOf: _e,
  kindOfTest: H,
  endsWith: kn,
  toArray: Dn,
  forEachEntry: Bn,
  matchAll: Un,
  isHTMLForm: $n,
  hasOwnProperty: $t,
  hasOwnProp: $t,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ar,
  freezeMethods: Vn,
  toObjectSet: qn,
  toCamelCase: In,
  noop: Hn,
  toFiniteNumber: Wn,
  findKey: or,
  global: ee,
  isContextDefined: ir,
  ALPHABET: cr,
  generateString: zn,
  isSpecCompliantForm: Jn,
  toJSONObject: Kn,
  isAsyncFn: Yn,
  isThenable: Zn,
  setImmediate: lr,
  asap: Gn
};
function w(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
l.inherits(w, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ur = w.prototype, fr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  fr[e] = { value: e };
});
Object.defineProperties(w, fr);
Object.defineProperty(ur, "isAxiosError", { value: !0 });
w.from = (e, t, r, n, s, o) => {
  const a = Object.create(ur);
  return l.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (c) => c !== "isAxiosError"), w.call(a, e.message, t, r, n, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const Xn = null;
function Xe(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function dr(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mt(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = dr(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Qn(e) {
  return l.isArray(e) && !e.some(Xe);
}
const es = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function je(e, t, r) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = l.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, y) {
    return !l.isUndefined(y[E]);
  });
  const n = r.metaTokens, s = r.visitor || p, o = r.dots, a = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(g) {
    if (g === null) return "";
    if (l.isDate(g))
      return g.toISOString();
    if (!u && l.isBlob(g))
      throw new w("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(g) || l.isTypedArray(g) ? u && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function p(g, E, y) {
    let C = g;
    if (g && !y && typeof g == "object") {
      if (l.endsWith(E, "{}"))
        E = n ? E : E.slice(0, -2), g = JSON.stringify(g);
      else if (l.isArray(g) && Qn(g) || (l.isFileList(g) || l.endsWith(E, "[]")) && (C = l.toArray(g)))
        return E = dr(E), C.forEach(function(S, B) {
          !(l.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Mt([E], B, o) : a === null ? E : E + "[]",
            d(S)
          );
        }), !1;
    }
    return Xe(g) ? !0 : (t.append(Mt(y, E, o), d(g)), !1);
  }
  const h = [], T = Object.assign(es, {
    defaultVisitor: p,
    convertValue: d,
    isVisitable: Xe
  });
  function _(g, E) {
    if (!l.isUndefined(g)) {
      if (h.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      h.push(g), l.forEach(g, function(C, P) {
        (!(l.isUndefined(C) || C === null) && s.call(
          t,
          C,
          l.isString(P) ? P.trim() : P,
          E,
          T
        )) === !0 && _(C, E ? E.concat(P) : [P]);
      }), h.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Vt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function at(e, t) {
  this._pairs = [], e && je(e, this, t);
}
const pr = at.prototype;
pr.append = function(t, r) {
  this._pairs.push([t, r]);
};
pr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Vt);
  } : Vt;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function ts(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function mr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ts, s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = l.isURLSearchParams(t) ? t.toString() : new at(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class qt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    l.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const hr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rs = typeof URLSearchParams < "u" ? URLSearchParams : at, ns = typeof FormData < "u" ? FormData : null, ss = typeof Blob < "u" ? Blob : null, os = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rs,
    FormData: ns,
    Blob: ss
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ct = typeof window < "u" && typeof document < "u", is = ((e) => ct && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), as = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", cs = ct && window.location.href || "http://localhost", ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ct,
  hasStandardBrowserEnv: is,
  hasStandardBrowserWebWorkerEnv: as,
  origin: cs
}, Symbol.toStringTag, { value: "Module" })), q = {
  ...ls,
  ...os
};
function us(e, t) {
  return je(e, new q.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return q.isNode && l.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function fs(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ds(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function yr(e) {
  function t(r, n, s, o) {
    let a = r[o++];
    if (a === "__proto__") return !0;
    const c = Number.isFinite(+a), u = o >= r.length;
    return a = !a && l.isArray(s) ? s.length : a, u ? (l.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !c) : ((!s[a] || !l.isObject(s[a])) && (s[a] = []), t(r, n, s[a], o) && l.isArray(s[a]) && (s[a] = ds(s[a])), !c);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const r = {};
    return l.forEachEntry(e, (n, s) => {
      t(fs(n), s, r, 0);
    }), r;
  }
  return null;
}
function ps(e, t, r) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ve = {
  transitional: hr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = l.isObject(t);
    if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return s ? JSON.stringify(yr(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return us(t, this.formSerializer).toString();
      if ((c = l.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return je(
          c ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), ps(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ve.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (l.isResponse(t) || l.isReadableStream(t))
      return t;
    if (t && l.isString(t) && (n && !this.responseType || s)) {
      const a = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (a)
          throw c.name === "SyntaxError" ? w.from(c, w.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: q.classes.FormData,
    Blob: q.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
l.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ve.headers[e] = {};
});
const ms = l.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), hs = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), r = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!r || t[r] && ms[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ht = Symbol("internals");
function pe(e) {
  return e && String(e).trim().toLowerCase();
}
function Te(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(Te) : String(e);
}
function ys(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const gs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function We(e, t, r, n, s) {
  if (l.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!l.isString(t)) {
    if (l.isString(n))
      return t.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(t);
  }
}
function vs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function bs(e, t) {
  const r = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, o, a) {
        return this[n].call(this, t, s, o, a);
      },
      configurable: !0
    });
  });
}
class L {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(c, u, d) {
      const p = pe(u);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const h = l.findKey(s, p);
      (!h || s[h] === void 0 || d === !0 || d === void 0 && s[h] !== !1) && (s[h || u] = Te(c));
    }
    const a = (c, u) => l.forEach(c, (d, p) => o(d, p, u));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (l.isString(t) && (t = t.trim()) && !gs(t))
      a(hs(t), r);
    else if (l.isHeaders(t))
      for (const [c, u] of t.entries())
        o(u, c, n);
    else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = pe(t), t) {
      const n = l.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return ys(s);
        if (l.isFunction(r))
          return r.call(this, s, n);
        if (l.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = pe(t), t) {
      const n = l.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || We(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(a) {
      if (a = pe(a), a) {
        const c = l.findKey(n, a);
        c && (!r || We(n, n[c], c, r)) && (delete n[c], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || We(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return l.forEach(this, (s, o) => {
      const a = l.findKey(n, o);
      if (a) {
        r[a] = Te(s), delete r[o];
        return;
      }
      const c = t ? vs(o) : String(o).trim();
      c !== o && delete r[o], r[c] = Te(s), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && l.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Ht] = this[Ht] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const c = pe(a);
      n[c] || (bs(s, a), n[c] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(L.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
l.freezeMethods(L);
function ze(e, t) {
  const r = this || ve, n = t || r, s = L.from(n.headers);
  let o = n.data;
  return l.forEach(e, function(c) {
    o = c.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function gr(e) {
  return !!(e && e.__CANCEL__);
}
function ie(e, t, r) {
  w.call(this, e ?? "canceled", w.ERR_CANCELED, t, r), this.name = "CanceledError";
}
l.inherits(ie, w, {
  __CANCEL__: !0
});
function vr(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new w(
    "Request failed with status code " + r.status,
    [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ws(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Es(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const d = Date.now(), p = n[o];
    a || (a = d), r[s] = u, n[s] = d;
    let h = o, T = 0;
    for (; h !== s; )
      T += r[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), d - a < t)
      return;
    const _ = p && d - p;
    return _ ? Math.round(T * 1e3 / _) : void 0;
  };
}
function Rs(e, t) {
  let r = 0, n = 1e3 / t, s, o;
  const a = (d, p = Date.now()) => {
    r = p, s = null, o && (clearTimeout(o), o = null), e.apply(null, d);
  };
  return [(...d) => {
    const p = Date.now(), h = p - r;
    h >= n ? a(d, p) : (s = d, o || (o = setTimeout(() => {
      o = null, a(s);
    }, n - h)));
  }, () => s && a(s)];
}
const Pe = (e, t, r = 3) => {
  let n = 0;
  const s = Es(50, 250);
  return Rs((o) => {
    const a = o.loaded, c = o.lengthComputable ? o.total : void 0, u = a - n, d = s(u), p = a <= c;
    n = a;
    const h = {
      loaded: a,
      total: c,
      progress: c ? a / c : void 0,
      bytes: u,
      rate: d || void 0,
      estimated: d && c && p ? (c - a) / d : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, r);
}, Wt = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, zt = (e) => (...t) => l.asap(() => e(...t)), Ss = q.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(o) {
      let a = o;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(a) {
      const c = l.isString(a) ? s(a) : a;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Os = q.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, o) {
      const a = [e + "=" + encodeURIComponent(t)];
      l.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), l.isString(n) && a.push("path=" + n), l.isString(s) && a.push("domain=" + s), o === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ts(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ps(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function br(e, t) {
  return e && !Ts(t) ? Ps(e, t) : t;
}
const Jt = (e) => e instanceof L ? { ...e } : e;
function re(e, t) {
  t = t || {};
  const r = {};
  function n(d, p, h) {
    return l.isPlainObject(d) && l.isPlainObject(p) ? l.merge.call({ caseless: h }, d, p) : l.isPlainObject(p) ? l.merge({}, p) : l.isArray(p) ? p.slice() : p;
  }
  function s(d, p, h) {
    if (l.isUndefined(p)) {
      if (!l.isUndefined(d))
        return n(void 0, d, h);
    } else return n(d, p, h);
  }
  function o(d, p) {
    if (!l.isUndefined(p))
      return n(void 0, p);
  }
  function a(d, p) {
    if (l.isUndefined(p)) {
      if (!l.isUndefined(d))
        return n(void 0, d);
    } else return n(void 0, p);
  }
  function c(d, p, h) {
    if (h in t)
      return n(d, p);
    if (h in e)
      return n(void 0, d);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: c,
    headers: (d, p) => s(Jt(d), Jt(p), !0)
  };
  return l.forEach(Object.keys(Object.assign({}, e, t)), function(p) {
    const h = u[p] || s, T = h(e[p], t[p], p);
    l.isUndefined(T) && h !== c || (r[p] = T);
  }), r;
}
const wr = (e) => {
  const t = re({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: c } = t;
  t.headers = a = L.from(a), t.url = mr(br(t.baseURL, t.url), e.params, e.paramsSerializer), c && a.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let u;
  if (l.isFormData(r)) {
    if (q.hasStandardBrowserEnv || q.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((u = a.getContentType()) !== !1) {
      const [d, ...p] = u ? u.split(";").map((h) => h.trim()).filter(Boolean) : [];
      a.setContentType([d || "multipart/form-data", ...p].join("; "));
    }
  }
  if (q.hasStandardBrowserEnv && (n && l.isFunction(n) && (n = n(t)), n || n !== !1 && Ss(t.url))) {
    const d = s && o && Os.read(o);
    d && a.set(s, d);
  }
  return t;
}, Ns = typeof XMLHttpRequest < "u", xs = Ns && function(e) {
  return new Promise(function(r, n) {
    const s = wr(e);
    let o = s.data;
    const a = L.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: u, onDownloadProgress: d } = s, p, h, T, _, g;
    function E() {
      _ && _(), g && g(), s.cancelToken && s.cancelToken.unsubscribe(p), s.signal && s.signal.removeEventListener("abort", p);
    }
    let y = new XMLHttpRequest();
    y.open(s.method.toUpperCase(), s.url, !0), y.timeout = s.timeout;
    function C() {
      if (!y)
        return;
      const S = L.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), z = {
        data: !c || c === "text" || c === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: S,
        config: e,
        request: y
      };
      vr(function(I) {
        r(I), E();
      }, function(I) {
        n(I), E();
      }, z), y = null;
    }
    "onloadend" in y ? y.onloadend = C : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(C);
    }, y.onabort = function() {
      y && (n(new w("Request aborted", w.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function() {
      n(new w("Network Error", w.ERR_NETWORK, e, y)), y = null;
    }, y.ontimeout = function() {
      let B = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const z = s.transitional || hr;
      s.timeoutErrorMessage && (B = s.timeoutErrorMessage), n(new w(
        B,
        z.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
        e,
        y
      )), y = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in y && l.forEach(a.toJSON(), function(B, z) {
      y.setRequestHeader(z, B);
    }), l.isUndefined(s.withCredentials) || (y.withCredentials = !!s.withCredentials), c && c !== "json" && (y.responseType = s.responseType), d && ([T, g] = Pe(d, !0), y.addEventListener("progress", T)), u && y.upload && ([h, _] = Pe(u), y.upload.addEventListener("progress", h), y.upload.addEventListener("loadend", _)), (s.cancelToken || s.signal) && (p = (S) => {
      y && (n(!S || S.type ? new ie(null, e, y) : S), y.abort(), y = null);
    }, s.cancelToken && s.cancelToken.subscribe(p), s.signal && (s.signal.aborted ? p() : s.signal.addEventListener("abort", p)));
    const P = ws(s.url);
    if (P && q.protocols.indexOf(P) === -1) {
      n(new w("Unsupported protocol " + P + ":", w.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(o || null);
  });
}, _s = (e, t) => {
  let r = new AbortController(), n;
  const s = function(u) {
    if (!n) {
      n = !0, a();
      const d = u instanceof Error ? u : this.reason;
      r.abort(d instanceof w ? d : new ie(d instanceof Error ? d.message : d));
    }
  };
  let o = t && setTimeout(() => {
    s(new w(`timeout ${t} of ms exceeded`, w.ETIMEDOUT));
  }, t);
  const a = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((u) => {
      u && (u.removeEventListener ? u.removeEventListener("abort", s) : u.unsubscribe(s));
    }), e = null);
  };
  e.forEach((u) => u && u.addEventListener && u.addEventListener("abort", s));
  const { signal: c } = r;
  return c.unsubscribe = a, [c, () => {
    o && clearTimeout(o), o = null;
  }];
}, Cs = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, As = async function* (e, t, r) {
  for await (const n of e)
    yield* Cs(ArrayBuffer.isView(n) ? n : await r(String(n)), t);
}, Kt = (e, t, r, n, s) => {
  const o = As(e, t, s);
  let a = 0, c, u = (d) => {
    c || (c = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: p, value: h } = await o.next();
        if (p) {
          u(), d.close();
          return;
        }
        let T = h.byteLength;
        if (r) {
          let _ = a += T;
          r(_);
        }
        d.enqueue(new Uint8Array(h));
      } catch (p) {
        throw u(p), p;
      }
    },
    cancel(d) {
      return u(d), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Fe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Er = Fe && typeof ReadableStream == "function", Qe = Fe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Rr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, js = Er && Rr(() => {
  let e = !1;
  const t = new Request(q.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Yt = 64 * 1024, et = Er && Rr(() => l.isReadableStream(new Response("").body)), Ne = {
  stream: et && ((e) => e.body)
};
Fe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ne[t] && (Ne[t] = l.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new w(`Response type '${t}' is not supported`, w.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Fs = async (e) => {
  if (e == null)
    return 0;
  if (l.isBlob(e))
    return e.size;
  if (l.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (l.isArrayBufferView(e) || l.isArrayBuffer(e))
    return e.byteLength;
  if (l.isURLSearchParams(e) && (e = e + ""), l.isString(e))
    return (await Qe(e)).byteLength;
}, ks = async (e, t) => {
  const r = l.toFiniteNumber(e.getContentLength());
  return r ?? Fs(t);
}, Ds = Fe && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: s,
    cancelToken: o,
    timeout: a,
    onDownloadProgress: c,
    onUploadProgress: u,
    responseType: d,
    headers: p,
    withCredentials: h = "same-origin",
    fetchOptions: T
  } = wr(e);
  d = d ? (d + "").toLowerCase() : "text";
  let [_, g] = s || o || a ? _s([s, o], a) : [], E, y;
  const C = () => {
    !E && setTimeout(() => {
      _ && _.unsubscribe();
    }), E = !0;
  };
  let P;
  try {
    if (u && js && r !== "get" && r !== "head" && (P = await ks(p, n)) !== 0) {
      let $ = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), I;
      if (l.isFormData(n) && (I = $.headers.get("content-type")) && p.setContentType(I), $.body) {
        const [ae, Y] = Wt(
          P,
          Pe(zt(u))
        );
        n = Kt($.body, Yt, ae, Y, Qe);
      }
    }
    l.isString(h) || (h = h ? "include" : "omit"), y = new Request(t, {
      ...T,
      signal: _,
      method: r.toUpperCase(),
      headers: p.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: h
    });
    let S = await fetch(y);
    const B = et && (d === "stream" || d === "response");
    if (et && (c || B)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((be) => {
        $[be] = S[be];
      });
      const I = l.toFiniteNumber(S.headers.get("content-length")), [ae, Y] = c && Wt(
        I,
        Pe(zt(c), !0)
      ) || [];
      S = new Response(
        Kt(S.body, Yt, ae, () => {
          Y && Y(), B && C();
        }, Qe),
        $
      );
    }
    d = d || "text";
    let z = await Ne[l.findKey(Ne, d) || "text"](S, e);
    return !B && C(), g && g(), await new Promise(($, I) => {
      vr($, I, {
        data: z,
        headers: L.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: y
      });
    });
  } catch (S) {
    throw C(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new w("Network Error", w.ERR_NETWORK, e, y),
      {
        cause: S.cause || S
      }
    ) : w.from(S, S && S.code, e, y);
  }
}), tt = {
  http: Xn,
  xhr: xs,
  fetch: Ds
};
l.forEach(tt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Zt = (e) => `- ${e}`, Ls = (e) => l.isFunction(e) || e === null || e === !1, Sr = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let a;
      if (n = r, !Ls(r) && (n = tt[(a = String(r)).toLowerCase()], n === void 0))
        throw new w(`Unknown adapter '${a}'`);
      if (n)
        break;
      s[a || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(s).map(
        ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(Zt).join(`
`) : " " + Zt(o[0]) : "as no adapter specified";
      throw new w(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: tt
};
function Je(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ie(null, e);
}
function Gt(e) {
  return Je(e), e.headers = L.from(e.headers), e.data = ze.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Sr.getAdapter(e.adapter || ve.adapter)(e).then(function(n) {
    return Je(e), n.data = ze.call(
      e,
      e.transformResponse,
      n
    ), n.headers = L.from(n.headers), n;
  }, function(n) {
    return gr(n) || (Je(e), n && n.response && (n.response.data = ze.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = L.from(n.response.headers))), Promise.reject(n);
  });
}
const Or = "1.7.4", lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  lt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Xt = {};
lt.transitional = function(t, r, n) {
  function s(o, a) {
    return "[Axios v" + Or + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, c) => {
    if (t === !1)
      throw new w(
        s(a, " has been removed" + (r ? " in " + r : "")),
        w.ERR_DEPRECATED
      );
    return r && !Xt[a] && (Xt[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, c) : !0;
  };
};
function Bs(e, t, r) {
  if (typeof e != "object")
    throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], a = t[o];
    if (a) {
      const c = e[o], u = c === void 0 || a(c, o, e);
      if (u !== !0)
        throw new w("option " + o + " must be " + u, w.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new w("Unknown option " + o, w.ERR_BAD_OPTION);
  }
}
const rt = {
  assertOptions: Bs,
  validators: lt
}, J = rt.validators;
class te {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new qt(),
      response: new qt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = re(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && rt.assertOptions(n, {
      silentJSONParsing: J.transitional(J.boolean),
      forcedJSONParsing: J.transitional(J.boolean),
      clarifyTimeoutError: J.transitional(J.boolean)
    }, !1), s != null && (l.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : rt.assertOptions(s, {
      encode: J.function,
      serialize: J.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = o && l.merge(
      o.common,
      o[r.method]
    );
    o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete o[g];
      }
    ), r.headers = L.concat(a, o);
    const c = [];
    let u = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(r) === !1 || (u = u && E.synchronous, c.unshift(E.fulfilled, E.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(E) {
      d.push(E.fulfilled, E.rejected);
    });
    let p, h = 0, T;
    if (!u) {
      const g = [Gt.bind(this), void 0];
      for (g.unshift.apply(g, c), g.push.apply(g, d), T = g.length, p = Promise.resolve(r); h < T; )
        p = p.then(g[h++], g[h++]);
      return p;
    }
    T = c.length;
    let _ = r;
    for (h = 0; h < T; ) {
      const g = c[h++], E = c[h++];
      try {
        _ = g(_);
      } catch (y) {
        E.call(this, y);
        break;
      }
    }
    try {
      p = Gt.call(this, _);
    } catch (g) {
      return Promise.reject(g);
    }
    for (h = 0, T = d.length; h < T; )
      p = p.then(d[h++], d[h++]);
    return p;
  }
  getUri(t) {
    t = re(this.defaults, t);
    const r = br(t.baseURL, t.url);
    return mr(r, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
  te.prototype[t] = function(r, n) {
    return this.request(re(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, c) {
      return this.request(re(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  te.prototype[t] = r(), te.prototype[t + "Form"] = r(!0);
});
class ut {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const a = new Promise((c) => {
        n.subscribe(c), o = c;
      }).then(s);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, t(function(o, a, c) {
      n.reason || (n.reason = new ie(o, a, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ut(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function Us(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function $s(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const nt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(nt).forEach(([e, t]) => {
  nt[t] = e;
});
function Tr(e) {
  const t = new te(e), r = rr(te.prototype.request, t);
  return l.extend(r, te.prototype, t, { allOwnKeys: !0 }), l.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Tr(re(e, s));
  }, r;
}
const F = Tr(ve);
F.Axios = te;
F.CanceledError = ie;
F.CancelToken = ut;
F.isCancel = gr;
F.VERSION = Or;
F.toFormData = je;
F.AxiosError = w;
F.Cancel = F.CanceledError;
F.all = function(t) {
  return Promise.all(t);
};
F.spread = Us;
F.isAxiosError = $s;
F.mergeConfig = re;
F.AxiosHeaders = L;
F.formToJSON = (e) => yr(l.isHTMLForm(e) ? new FormData(e) : e);
F.getAdapter = Sr.getAdapter;
F.HttpStatusCode = nt;
F.default = F;
function Is(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ms(...e) {
  return (t) => e.forEach((r) => Is(r, t));
}
var ke = b.forwardRef((e, t) => {
  const { children: r, ...n } = e, s = b.Children.toArray(r), o = s.find(qs);
  if (o) {
    const a = o.props.children, c = s.map((u) => u === o ? b.Children.count(a) > 1 ? b.Children.only(null) : b.isValidElement(a) ? a.props.children : null : u);
    return /* @__PURE__ */ V.jsx(st, { ...n, ref: t, children: b.isValidElement(a) ? b.cloneElement(a, void 0, c) : null });
  }
  return /* @__PURE__ */ V.jsx(st, { ...n, ref: t, children: r });
});
ke.displayName = "Slot";
var st = b.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (b.isValidElement(r)) {
    const s = Ws(r);
    return b.cloneElement(r, {
      ...Hs(n, r.props),
      // @ts-ignore
      ref: t ? Ms(t, s) : s
    });
  }
  return b.Children.count(r) > 1 ? b.Children.only(null) : null;
});
st.displayName = "SlotClone";
var Vs = ({ children: e }) => /* @__PURE__ */ V.jsx(V.Fragment, { children: e });
function qs(e) {
  return b.isValidElement(e) && e.type === Vs;
}
function Hs(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...c) => {
      o(...c), s(...c);
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...o } : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Ws(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var zs = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Js = zs.reduce((e, t) => {
  const r = b.forwardRef((n, s) => {
    const { asChild: o, ...a } = n, c = o ? ke : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ V.jsx(c, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Ks = "VisuallyHidden", Pr = b.forwardRef(
  (e, t) => /* @__PURE__ */ V.jsx(
    Js.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Pr.displayName = Ks;
var Nr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], s = 0; s < arguments.length; s++) {
        var o = arguments[s];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number")
            n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var c = r.apply(null, o);
              c && n.push(c);
            }
          } else if (a === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              n.push(o.toString());
              continue;
            }
            for (var u in o)
              t.call(o, u) && o[u] && n.push(u);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Nr);
var Ys = Nr.exports;
const K = /* @__PURE__ */ un(Ys), xr = { asChild: { type: "boolean" } }, Zs = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: !0 }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: !0 }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: !0 } }, Gs = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: !0 }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: !0 }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: !0 } }, Xs = ["gray", "gold", "bronze", "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "lime", "mint", "sky"], Qs = { color: { type: "enum", values: Xs, default: "" } }, eo = { highContrast: { type: "boolean", className: "rt-high-contrast", default: void 0 } }, ft = ["initial", "xs", "sm", "md", "lg", "xl"];
function _r(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function he(e) {
  return typeof e == "object" && Object.keys(e).some((t) => ft.includes(t));
}
function to({ className: e, customProperties: t, ...r }) {
  const n = Cr({ allowArbitraryValues: !0, className: e, ...r }), s = ro({ customProperties: t, ...r });
  return [n, s];
}
function Cr({ allowArbitraryValues: e, value: t, className: r, propValues: n, parseValue: s = (o) => o }) {
  const o = [];
  if (t) {
    if (typeof t == "string" && n.includes(t)) return Qt(r, t, s);
    if (he(t)) {
      const a = t;
      for (const c in a) {
        if (!_r(a, c) || !ft.includes(c)) continue;
        const u = a[c];
        if (u !== void 0) {
          if (n.includes(u)) {
            const d = Qt(r, u, s), p = c === "initial" ? d : `${c}:${d}`;
            o.push(p);
          } else if (e) {
            const d = c === "initial" ? r : `${c}:${r}`;
            o.push(d);
          }
        }
      }
      return o.join(" ");
    }
    if (e) return r;
  }
}
function Qt(e, t, r) {
  const n = e ? "-" : "", s = r(t), o = s == null ? void 0 : s.startsWith("-"), a = o ? "-" : "", c = o ? s == null ? void 0 : s.substring(1) : s;
  return `${a}${e}${n}${c}`;
}
function ro({ customProperties: e, value: t, propValues: r, parseValue: n = (s) => s }) {
  let s = {};
  if (!(!t || typeof t == "string" && r.includes(t))) {
    if (typeof t == "string" && (s = Object.fromEntries(e.map((o) => [o, t]))), he(t)) {
      const o = t;
      for (const a in o) {
        if (!_r(o, a) || !ft.includes(a)) continue;
        const c = o[a];
        if (!r.includes(c)) for (const u of e) s = { [a === "initial" ? u : `${u}-${a}`]: c, ...s };
      }
    }
    for (const o in s) {
      const a = s[o];
      a !== void 0 && (s[o] = n(a));
    }
    return s;
  }
}
function er(...e) {
  let t = {};
  for (const r of e) r && (t = { ...t, ...r });
  return Object.keys(t).length ? t : void 0;
}
function no(...e) {
  return Object.assign({}, ...e);
}
function dt(e, ...t) {
  let r, n;
  const s = { ...e }, o = no(...t);
  for (const a in o) {
    let c = s[a];
    const u = o[a];
    if (u.default !== void 0 && c === void 0 && (c = u.default), u.type === "enum" && ![u.default, ...u.values].includes(c) && !he(c) && (c = u.default), s[a] = c, "className" in u && u.className) {
      delete s[a];
      const d = "responsive" in u;
      if (!c || he(c) && !d) continue;
      if (he(c) && (u.default !== void 0 && c.initial === void 0 && (c.initial = u.default), u.type === "enum" && ([u.default, ...u.values].includes(c.initial) || (c.initial = u.default))), u.type === "enum") {
        const p = Cr({ allowArbitraryValues: !1, value: c, className: u.className, propValues: u.values, parseValue: u.parseValue });
        r = K(r, p);
        continue;
      }
      if (u.type === "string" || u.type === "enum | string") {
        const p = u.type === "string" ? [] : u.values, [h, T] = to({ className: u.className, customProperties: u.customProperties, propValues: p, parseValue: u.parseValue, value: c });
        n = er(n, T), r = K(r, h);
        continue;
      }
      if (u.type === "boolean" && c) {
        r = K(r, u.className);
        continue;
      }
    }
  }
  return s.className = K(r, e.className), s.style = er(n, e.style), s;
}
const X = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], pt = { m: { type: "enum | string", values: X, responsive: !0, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: X, responsive: !0, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: X, responsive: !0, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: X, responsive: !0, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: X, responsive: !0, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: X, responsive: !0, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: X, responsive: !0, className: "rt-r-ml", customProperties: ["--ml"] } }, so = ["none", "small", "medium", "large", "full"], oo = { radius: { type: "enum", values: so, default: void 0 } }, Q = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], io = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: Q, responsive: !0 }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: Q, responsive: !0 }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: Q, responsive: !0 }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: Q, responsive: !0 }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: Q, responsive: !0 }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: Q, responsive: !0 }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: Q, responsive: !0 } }, Ke = ["visible", "hidden", "clip", "scroll", "auto"], ao = ["static", "relative", "absolute", "fixed", "sticky"], me = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], co = ["0", "1"], lo = ["0", "1"], uo = { ...io, ...Zs, ...Gs, position: { type: "enum", className: "rt-r-position", values: ao, responsive: !0 }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: me, responsive: !0 }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: me, responsive: !0 }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: me, responsive: !0 }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: me, responsive: !0 }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: me, responsive: !0 }, overflow: { type: "enum", className: "rt-r-overflow", values: Ke, responsive: !0 }, overflowX: { type: "enum", className: "rt-r-ox", values: Ke, responsive: !0 }, overflowY: { type: "enum", className: "rt-r-oy", values: Ke, responsive: !0 }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: !0 }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: co, responsive: !0 }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: lo, responsive: !0 }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: !0 }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: !0 }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: !0 }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: !0 }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: !0 }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: !0 }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: !0 } }, fo = ["1", "2", "3", "4"], po = ["classic", "solid", "soft", "surface", "outline", "ghost"], tr = { ...xr, size: { type: "enum", className: "rt-r-size", values: fo, default: "2", responsive: !0 }, variant: { type: "enum", className: "rt-variant", values: po, default: "solid" }, ...Qs, ...eo, ...oo, loading: { type: "boolean", className: "rt-loading", default: !1 } }, Ye = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], mo = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: Ye, responsive: !0 }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: Ye, responsive: !0 }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: Ye, responsive: !0 } }, ho = ["div", "span"], yo = ["none", "inline-flex", "flex"], go = ["row", "column", "row-reverse", "column-reverse"], vo = ["start", "center", "end", "baseline", "stretch"], bo = ["start", "center", "end", "between"], wo = ["nowrap", "wrap", "wrap-reverse"], Eo = { as: { type: "enum", values: ho, default: "div" }, ...xr, display: { type: "enum", className: "rt-r-display", values: yo, responsive: !0 }, direction: { type: "enum", className: "rt-r-fd", values: go, responsive: !0 }, align: { type: "enum", className: "rt-r-ai", values: vo, responsive: !0 }, justify: { type: "enum", className: "rt-r-jc", values: bo, parseValue: Ro, responsive: !0 }, wrap: { type: "enum", className: "rt-r-fw", values: wo, responsive: !0 }, ...mo };
function Ro(e) {
  return e === "between" ? "space-between" : e;
}
const xe = b.forwardRef((e, t) => {
  const { className: r, asChild: n, as: s = "div", ...o } = dt(e, Eo, uo, pt);
  return b.createElement(n ? ke : s, { ...o, ref: t, className: K("rt-Flex", r) });
});
xe.displayName = "Flex";
const So = ["1", "2", "3"], Oo = { size: { type: "enum", className: "rt-r-size", values: So, default: "2", responsive: !0 }, loading: { type: "boolean", default: !0 } }, Ar = b.forwardRef((e, t) => {
  const { className: r, children: n, loading: s, ...o } = dt(e, Oo, pt);
  if (!s) return n;
  const a = b.createElement("span", { ...o, ref: t, className: K("rt-Spinner", r) }, b.createElement("span", { className: "rt-SpinnerLeaf" }), b.createElement("span", { className: "rt-SpinnerLeaf" }), b.createElement("span", { className: "rt-SpinnerLeaf" }), b.createElement("span", { className: "rt-SpinnerLeaf" }), b.createElement("span", { className: "rt-SpinnerLeaf" }), b.createElement("span", { className: "rt-SpinnerLeaf" }), b.createElement("span", { className: "rt-SpinnerLeaf" }), b.createElement("span", { className: "rt-SpinnerLeaf" }));
  return n === void 0 ? a : b.createElement(xe, { asChild: !0, position: "relative", align: "center", justify: "center" }, b.createElement("span", null, b.createElement("span", { "aria-hidden": !0, style: { display: "contents", visibility: "hidden" }, inert: void 0 }, n), b.createElement(xe, { asChild: !0, align: "center", justify: "center", position: "absolute", inset: "0" }, b.createElement("span", null, a))));
});
Ar.displayName = "Spinner";
function To(e, t) {
  if (e !== void 0) return typeof e == "string" ? t(e) : Object.fromEntries(Object.entries(e).map(([r, n]) => [r, t(n)]));
}
function Po(e) {
  switch (e) {
    case "1":
      return "1";
    case "2":
    case "3":
      return "2";
    case "4":
      return "3";
  }
}
const jr = b.forwardRef((e, t) => {
  const { size: r = tr.size.default } = e, { className: n, children: s, asChild: o, color: a, radius: c, disabled: u = e.loading, ...d } = dt(e, tr, pt);
  return b.createElement(o ? ke : "button", { "data-disabled": u || void 0, "data-accent-color": a, "data-radius": c, ...d, ref: t, className: K("rt-reset", "rt-BaseButton", n), disabled: u }, e.loading ? b.createElement(b.Fragment, null, b.createElement("span", { style: { display: "contents", visibility: "hidden" }, "aria-hidden": !0 }, s), b.createElement(Pr, null, s), b.createElement(xe, { asChild: !0, align: "center", justify: "center", position: "absolute", inset: "0" }, b.createElement("span", null, b.createElement(Ar, { size: To(r, Po) })))) : s);
});
jr.displayName = "BaseButton";
const Fr = b.forwardRef(({ className: e, ...t }, r) => b.createElement(jr, { ...t, ref: r, className: K("rt-Button", e) }));
Fr.displayName = "Button";
const No = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", Ao = (e) => {
  const [t, r] = ot.useState("");
  console.log("Args", e);
  const n = () => {
    console.log("btnClick==>"), F.get("https://y.ctpia.com.cn/v1/test").then((s) => {
      console.log(s.data), r(s.data.message.time);
    }).catch((s) => {
      console.error(s);
    });
  };
  return /* @__PURE__ */ V.jsxs("div", { children: [
    /* @__PURE__ */ V.jsx("img", { src: No, className: "logo" }),
    /* @__PURE__ */ V.jsx(Fr, { className: "btn", onClick: n, children: "GET" }),
    t
  ] });
};
export {
  Co as CusButton,
  Ao as CusInput
};
