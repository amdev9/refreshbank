! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = se.type(t);
        return "function" === i || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (se.isFunction(e)) return se.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return se.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (de.test(e)) return se.filter(e, t, i);
            e = se.filter(e, t)
        }
        return se.grep(t, function(t) {
            return se.inArray(t, e) >= 0 !== i
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function r(t) {
        var e = xe[t] = {};
        return se.each(t.match(be) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (o(), se.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Te, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ce.test(i) ? se.parseJSON(i) : i
                } catch (s) {}
                se.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function h(t) {
        var e;
        for (e in t)
            if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, i, n) {
        if (se.acceptData(t)) {
            var s, r, o = se.expando,
                a = t.nodeType,
                l = a ? se.cache : t,
                h = a ? t[o] : t[o] && o;
            if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = a ? t[o] = G.pop() || se.guid++ : o), l[h] || (l[h] = a ? {} : {
                toJSON: se.noop
            }), ("object" == typeof e || "function" == typeof e) && (n ? l[h] = se.extend(l[h], e) : l[h].data = se.extend(l[h].data, e)), r = l[h], n || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[se.camelCase(e)] = i), "string" == typeof e ? (s = r[e], null == s && (s = r[se.camelCase(e)])) : s = r, s
        }
    }

    function u(t, e, i) {
        if (se.acceptData(t)) {
            var n, s, r = t.nodeType,
                o = r ? se.cache : t,
                a = r ? t[se.expando] : se.expando;
            if (o[a]) {
                if (e && (n = i ? o[a] : o[a].data)) {
                    se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in n ? e = [e] : (e = se.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !h(n) : !se.isEmptyObject(n)) return
                }(i || (delete o[a].data, h(o[a]))) && (r ? se.cleanData([t], !0) : ie.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = Oe.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function m(t, e) {
        var i, n, s = 0,
            r = typeof t.getElementsByTagName !== ke ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== ke ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || se.nodeName(n, e) ? r.push(n) : se.merge(r, m(n, e));
        return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], r) : r
    }

    function v(t) {
        Ne.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type, t
    }

    function x(t) {
        var e = Xe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) se._data(i, "globalEval", !e || se._data(e[n], "globalEval"))
    }

    function _(t, e) {
        if (1 === e.nodeType && se.hasData(t)) {
            var i, n, s, r = se._data(t),
                o = se._data(e, r),
                a = r.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)
                    for (n = 0, s = a[i].length; s > n; n++) se.event.add(e, i, a[i][n])
            }
            o.data && (o.data = se.extend({}, o.data))
        }
    }

    function k(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[se.expando]) {
                s = se._data(e);
                for (n in s.events) se.removeEvent(e, n, s.handle);
                e.removeAttribute(se.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ne.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, i) {
        var n, s = se(i.createElement(e)).appendTo(i.body),
            r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : se.css(s[0], "display");
        return s.detach(), r
    }

    function T(t) {
        var e = fe,
            i = Je[t];
        return i || (i = C(t, e), "none" !== i && i || (Ze = (Ze || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Ze.detach()), Je[t] = i), i
    }

    function S(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function D(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = di.length; s--;)
            if (e = di[s] + i, e in t) return e;
        return n
    }

    function E(t, e) {
        for (var i, n, s, r = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (r[o] = se._data(n, "olddisplay"), i = n.style.display, e ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ee(n) && (r[o] = se._data(n, "olddisplay", T(n.nodeName)))) : (s = Ee(n), (i && "none" !== i || !s) && se._data(n, "olddisplay", s ? i : se.css(n, "display"))));
        for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
        return t
    }

    function A(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function N(t, e, i, n, s) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === i && (o += se.css(t, i + De[r], !0, s)), n ? ("content" === i && (o -= se.css(t, "padding" + De[r], !0, s)), "margin" !== i && (o -= se.css(t, "border" + De[r] + "Width", !0, s))) : (o += se.css(t, "padding" + De[r], !0, s), "padding" !== i && (o += se.css(t, "border" + De[r] + "Width", !0, s)));
        return o
    }

    function I(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = ti(t),
            o = ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, r);
        if (0 >= s || null == s) {
            if (s = ei(t, e, r), (0 > s || null == s) && (s = t.style[e]), ni.test(s)) return s;
            n = o && (ie.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + N(t, e, i || (o ? "border" : "content"), n, r) + "px"
    }

    function P(t, e, i, n, s) {
        return new P.prototype.init(t, e, i, n, s)
    }

    function M() {
        return setTimeout(function() {
            pi = void 0
        }), pi = se.now()
    }

    function L(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = De[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function H(t, e, i) {
        for (var n, s = (bi[e] || []).concat(bi["*"]), r = 0, o = s.length; o > r; r++)
            if (n = s[r].call(i, e, t)) return n
    }

    function O(t, e, i) {
        var n, s, r, o, a, l, h, c, u = this,
            d = {},
            p = t.style,
            f = t.nodeType && Ee(t),
            g = se._data(t, "fxshow");
        i.queue || (a = se._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, se.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = se.css(t, "display"), c = "none" === h ? se._data(t, "olddisplay") || T(t.nodeName) : h, "inline" === c && "none" === se.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], gi.exec(s)) {
                if (delete e[n], r = r || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || se.style(t, n)
            } else h = void 0;
        if (se.isEmptyObject(d)) "inline" === ("none" === h ? T(t.nodeName) : h) && (p.display = h);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = se._data(t, "fxshow", {}), r && (g.hidden = !f), f ? se(t).show() : u.done(function() {
                se(t).hide()
            }), u.done(function() {
                var e;
                se._removeData(t, "fxshow");
                for (e in d) se.style(t, e, d[e])
            });
            for (n in d) o = H(f ? g[n] : 0, n, u), n in g || (g[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function F(t, e) {
        var i, n, s, r, o;
        for (i in t)
            if (n = se.camelCase(i), s = e[n], r = t[i], se.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), o = se.cssHooks[n], o && "expand" in o) {
                r = o.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = s)
            } else e[n] = s
    }

    function z(t, e, i) {
        var n, s, r = 0,
            o = yi.length,
            a = se.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = pi || M(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, r = 1 - n, o = 0, l = h.tweens.length; l > o; o++) h.tweens[o].run(r);
                return a.notifyWith(t, [h, r, i]), 1 > r && l ? i : (a.resolveWith(t, [h]), !1)
            },
            h = a.promise({
                elem: t,
                props: se.extend({}, e),
                opts: se.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: pi || M(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = se.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) h.tweens[i].run(1);
                    return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (F(c, h.opts.specialEasing); o > r; r++)
            if (n = yi[r].call(h, t, c, h.opts)) return n;
        return se.map(c, H, h), se.isFunction(h.opts.start) && h.opts.start.call(t, h), se.fx.timer(se.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function $(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                r = e.toLowerCase().match(be) || [];
            if (se.isFunction(i))
                for (; n = r[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function R(t, e, i, n) {
        function s(a) {
            var l;
            return r[a] = !0, se.each(t[a] || [], function(t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || o || r[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }), l
        }
        var r = {},
            o = t === Wi;
        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }

    function j(t, e) {
        var i, n, s = se.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && se.extend(!0, t, i), t
    }

    function B(t, e, i) {
        for (var n, s, r, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (o in a)
                if (a[o] && a[o].test(s)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                n || (n = o)
            }
            r = r || n
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function W(t, e, i, n) {
        var s, r, o, a, l, h = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (o = h[l + " " + r] || h["* " + r], !o)
                for (s in h)
                    if (a = s.split(" "), a[1] === r && (o = h[l + " " + a[0]] || h["* " + a[0]])) {
                        o === !0 ? o = h[s] : h[s] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: o ? u : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function q(t, e, i, n) {
        var s;
        if (se.isArray(e)) se.each(e, function(e, s) {
            i || Xi.test(t) ? n(t, s) : q(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== se.type(e)) n(t, e);
        else
            for (s in e) q(t + "[" + s + "]", e[s], i, n)
    }

    function Y() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function X(t) {
        return se.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var G = [],
        V = G.slice,
        K = G.concat,
        Q = G.push,
        Z = G.indexOf,
        J = {},
        te = J.toString,
        ee = J.hasOwnProperty,
        ie = {},
        ne = "1.11.2",
        se = function(t, e) {
            return new se.fn.init(t, e)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oe = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function(t, e) {
            return e.toUpperCase()
        };
    se.fn = se.prototype = {
        jquery: ne,
        constructor: se,
        selector: "",
        length: 0,
        toArray: function() {
            return V.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
        },
        pushStack: function(t) {
            var e = se.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return se.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(se.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: G.sort,
        splice: G.splice
    }, se.extend = se.fn.extend = function() {
        var t, e, i, n, s, r, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || se.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (s = arguments[a]))
                for (n in s) t = o[n], i = s[n], o !== i && (h && i && (se.isPlainObject(i) || (e = se.isArray(i))) ? (e ? (e = !1, r = t && se.isArray(t) ? t : []) : r = t && se.isPlainObject(t) ? t : {}, o[n] = se.extend(h, r, i)) : void 0 !== i && (o[n] = i));
        return o
    }, se.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === se.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === se.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !se.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && se.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(oe, "ms-").replace(ae, le)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var s, r = 0,
                o = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; o > r && (s = e.apply(t[r], n), s !== !1); r++);
                else
                    for (r in t)
                        if (s = e.apply(t[r], n), s === !1) break
            } else if (a)
                for (; o > r && (s = e.call(t[r], r, t[r]), s !== !1); r++);
            else
                for (r in t)
                    if (s = e.call(t[r], r, t[r]), s === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(re, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? se.merge(n, "string" == typeof t ? [t] : t) : Q.call(n, t)), n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (Z) return Z.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n, s = [], r = 0, o = t.length, a = !i; o > r; r++) n = !e(t[r], r), n !== a && s.push(t[r]);
            return s
        },
        map: function(t, e, n) {
            var s, r = 0,
                o = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; o > r; r++) s = e(t[r], r, n), null != s && l.push(s);
            else
                for (r in t) s = e(t[r], r, n), null != s && l.push(s);
            return K.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), se.isFunction(t) ? (i = V.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(V.call(arguments)))
            }, n.guid = t.guid = t.guid || se.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        J["[object " + e + "]"] = e.toLowerCase()
    });
    var he = function(t) {
        function e(t, e, i, n) {
            var s, r, o, a, l, h, u, p, f, g;
            if ((e ? e.ownerDocument || e : R) !== P && I(e), e = e || P, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && L) {
                if (11 !== a && (s = ye.exec(t)))
                    if (o = s[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(o), !r || !r.parentNode) return i;
                            if (r.id === o) return i.push(r), i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(o)) && z(e, r) && r.id === o) return i.push(r), i
                    } else {
                        if (s[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = s[3]) && w.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(o)), i
                    }
                if (w.qsa && (!H || !H.test(t))) {
                    if (p = u = $, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (h = T(t), (u = e.getAttribute("id")) ? p = u.replace(xe, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                        f = be.test(t) && c(e.parentNode) || e, g = h.join(",")
                    }
                    if (g) try {
                        return Z.apply(i, f.querySelectorAll(g)), i
                    } catch (m) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return D(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > _.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[$] = !0, t
        }

        function s(t) {
            var e = P.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) _.attrHandle[i[n]] = e
        }

        function o(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function h(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, r = t([], i.length, e), o = r.length; o--;) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function u() {}

        function d(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                r = B++;
            return e.first ? function(e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, r)
            } : function(e, i, o) {
                var a, l, h = [j, r];
                if (o) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, o)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) {
                            if (l = e[$] || (e[$] = {}), (a = l[n]) && a[0] === j && a[1] === r) return h[2] = a[2];
                            if (l[n] = h, h[2] = t(e, i, o)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var s = 0, r = i.length; r > s; s++) e(t, i[s], n);
            return n
        }

        function m(t, e, i, n, s) {
            for (var r, o = [], a = 0, l = t.length, h = null != e; l > a; a++)(r = t[a]) && (!i || i(r, n, s)) && (o.push(r), h && e.push(a));
            return o
        }

        function v(t, e, i, s, r, o) {
            return s && !s[$] && (s = v(s)), r && !r[$] && (r = v(r, o)), n(function(n, o, a, l) {
                var h, c, u, d = [],
                    p = [],
                    f = o.length,
                    v = n || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : m(v, d, t, a, l),
                    b = i ? r || (n ? t : f || s) ? [] : o : y;
                if (i && i(y, b, a, l), s)
                    for (h = m(b, p), s(h, [], a, l), c = h.length; c--;)(u = h[c]) && (b[p[c]] = !(y[p[c]] = u));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (h = [], c = b.length; c--;)(u = b[c]) && h.push(y[c] = u);
                            r(null, b = [], h, l)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (h = r ? te(n, u) : d[c]) > -1 && (n[h] = !(o[h] = u))
                    }
                } else b = m(b === o ? b.splice(f, b.length) : b), r ? r(null, o, b, l) : Z.apply(o, b)
            })
        }

        function y(t) {
            for (var e, i, n, s = t.length, r = _.relative[t[0].type], o = r || _.relative[" "], a = r ? 1 : 0, l = p(function(t) {
                    return t === e
                }, o, !0), h = p(function(t) {
                    return te(e, t) > -1
                }, o, !0), c = [function(t, i, n) {
                    var s = !r && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                    return e = null, s
                }]; s > a; a++)
                if (i = _.relative[t[a].type]) c = [p(f(c), i)];
                else {
                    if (i = _.filter[t[a].type].apply(null, t[a].matches), i[$]) {
                        for (n = ++a; s > n && !_.relative[t[n].type]; n++);
                        return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && y(t.slice(a, n)), s > n && y(t = t.slice(n)), s > n && d(t))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function b(t, i) {
            var s = i.length > 0,
                r = t.length > 0,
                o = function(n, o, a, l, h) {
                    var c, u, d, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = E,
                        b = n || r && _.find.TAG("*", h),
                        x = j += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (h && (E = o !== P && o); f !== w && null != (c = b[f]); f++) {
                        if (r && c) {
                            for (u = 0; d = t[u++];)
                                if (d(c, o, a)) {
                                    l.push(c);
                                    break
                                }
                            h && (j = x)
                        }
                        s && ((c = !d && c) && p--, n && g.push(c))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; d = i[u++];) d(g, v, o, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = K.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return h && (j = x, E = y), g
                };
            return s ? n(o) : o
        }
        var x, w, _, k, C, T, S, D, E, A, N, I, P, M, L, H, O, F, z, $ = "sizzle" + 1 * new Date,
            R = t.document,
            j = 0,
            B = 0,
            W = i(),
            q = i(),
            Y = i(),
            U = function(t, e) {
                return t === e && (N = !0), 0
            },
            X = 1 << 31,
            G = {}.hasOwnProperty,
            V = [],
            K = V.pop,
            Q = V.push,
            Z = V.push,
            J = V.slice,
            te = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            se = ne.replace("w", "w#"),
            re = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ie + "*\\]",
            oe = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ie + "+", "g"),
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            he = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            de = new RegExp(oe),
            pe = new RegExp("^" + se + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            _e = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            ke = function() {
                I()
            };
        try {
            Z.apply(V = J.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: V.length ? function(t, e) {
                    Q.apply(t, J.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, I = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : R;
            return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, M = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ke, !1) : i.attachEvent && i.attachEvent("onunload", ke)), L = !C(n), w.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = s(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName), w.getById = s(function(t) {
                return M.appendChild(t).id = $, !n.getElementsByName || !n.getElementsByName($).length
            }), w.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && L) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, _.filter.ID = function(t) {
                var e = t.replace(we, _e);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function(t) {
                var e = t.replace(we, _e);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), _.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    s = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, _.find.CLASS = w.getElementsByClassName && function(t, e) {
                return L ? e.getElementsByClassName(t) : void 0
            }, O = [], H = [], (w.qsa = ve.test(n.querySelectorAll)) && (s(function(t) {
                M.appendChild(t).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + ie + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + $ + "-]").length || H.push("~="), t.querySelectorAll(":checked").length || H.push(":checked"), t.querySelectorAll("a#" + $ + "+*").length || H.push(".#.+[+~]")
            }), s(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (w.matchesSelector = ve.test(F = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && s(function(t) {
                w.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), O.push("!=", oe)
            }), H = H.length && new RegExp(H.join("|")), O = O.length && new RegExp(O.join("|")), e = ve.test(M.compareDocumentPosition), z = e || ve.test(M.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return N = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && z(R, t) ? -1 : e === n || e.ownerDocument === R && z(R, e) ? 1 : A ? te(A, t) - te(A, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return N = !0, 0;
                var i, s = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    h = [e];
                if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : A ? te(A, t) - te(A, e) : 0;
                if (r === a) return o(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) h.unshift(i);
                for (; l[s] === h[s];) s++;
                return s ? o(l[s], h[s]) : l[s] === R ? -1 : h[s] === R ? 1 : 0
            }, n) : P
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== P && I(t), i = i.replace(ue, "='$1']"), !(!w.matchesSelector || !L || O && O.test(i) || H && H.test(i))) try {
                var n = F.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (s) {}
            return e(i, P, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== P && I(t), z(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== P && I(t);
            var i = _.attrHandle[e.toLowerCase()],
                n = i && G.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !L) : void 0;
            return void 0 !== n ? n : w.attributes || !L ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (N = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(U), N) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return A = null, t
        }, k = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += k(e);
            return i
        }, _ = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, _e), t[3] = (t[3] || t[4] || t[5] || "").replace(we, _e), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && de.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, _e).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var r = e.attr(s, t);
                        return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var r = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var h, c, u, d, p, f, g = r !== o ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (u = e; u = u[g];)
                                        if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                for (c = m[$] || (m[$] = {}), h = c[t] || [], p = h[0] === j && h[1], d = h[0] === j && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++d && u === e) {
                                        c[t] = [j, p, d];
                                        break
                                    }
                            } else if (y && (h = (e[$] || (e[$] = {}))[t]) && h[0] === j) d = h[1];
                            else
                                for (;
                                    (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (y && ((u[$] || (u[$] = {}))[t] = [j, d]), u !== e)););
                            return d -= s, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[$] ? r(i) : r.length > 1 ? (s = [t, t, "", i], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = r(t, i), o = s.length; o--;) n = te(t, s[o]), t[n] = !(e[n] = s[o])
                    }) : function(t) {
                        return r(t, 0, s)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = S(t.replace(le, "$1"));
                    return s[$] ? n(function(t, e, i, n) {
                        for (var r, o = s(t, null, n, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, n, r) {
                        return e[0] = t, s(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(we, _e),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, _e).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === M
                },
                focus: function(t) {
                    return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(t, e) {
                    return [e - 1]
                }),
                eq: h(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: h(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: h(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: h(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: h(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) _.pseudos[x] = l(x);
        return u.prototype = _.filters = _.pseudos, _.setFilters = new u, T = e.tokenize = function(t, i) {
            var n, s, r, o, a, l, h, c = q[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], h = _.preFilter; a;) {
                (!n || (s = he.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(r = [])), n = !1, (s = ce.exec(a)) && (n = s.shift(), r.push({
                    value: n,
                    type: s[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (o in _.filter) !(s = fe[o].exec(a)) || h[o] && !(s = h[o](s)) || (n = s.shift(), r.push({
                    value: n,
                    type: o,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : q(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                r = Y[t + " "];
            if (!r) {
                for (e || (e = T(t)), i = e.length; i--;) r = y(e[i]), r[$] ? n.push(r) : s.push(r);
                r = Y(t, b(s, n)), r.selector = t
            }
            return r
        }, D = e.select = function(t, e, i, n) {
            var s, r, o, a, l, h = "function" == typeof t && t,
                u = !n && T(t = h.selector || t);
            if (i = i || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && w.getById && 9 === e.nodeType && L && _.relative[r[1].type]) {
                    if (e = (_.find.ID(o.matches[0].replace(we, _e), e) || [])[0], !e) return i;
                    h && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (s = fe.needsContext.test(t) ? 0 : r.length; s-- && (o = r[s], !_.relative[a = o.type]);)
                    if ((l = _.find[a]) && (n = l(o.matches[0].replace(we, _e), be.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(s, 1), t = n.length && d(r), !t) return Z.apply(i, n), i;
                        break
                    }
            }
            return (h || S(t, u))(n, e, !L, i, be.test(t) && c(e.parentNode) || e), i
        }, w.sortStable = $.split("").sort(U).join("") === $, w.detectDuplicates = !!N, I(), w.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(P.createElement("div"))
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(ee, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    se.find = he, se.expr = he.selectors, se.expr[":"] = se.expr.pseudos, se.unique = he.uniqueSort, se.text = he.getText, se.isXMLDoc = he.isXML, se.contains = he.contains;
    var ce = se.expr.match.needsContext,
        ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        de = /^.[^:#\[\.,]*$/;
    se.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? se.find.matchesSelector(n, t) ? [n] : [] : se.find.matches(t, se.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, se.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof t) return this.pushStack(se(t).filter(function() {
                for (e = 0; s > e; e++)
                    if (se.contains(n[e], this)) return !0
            }));
            for (e = 0; s > e; e++) se.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? se.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && ce.test(t) ? se(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = se.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), ue.test(i[1]) && se.isPlainObject(e))
                        for (i in e) se.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pe.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = fe, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
        };
    me.prototype = se.fn, pe = se(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    se.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !se(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), se.fn.extend({
        has: function(t) {
            var e, i = se(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (se.contains(this, i[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, r = [], o = ce.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? se.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), se.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return se.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return se.dir(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return se.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return se.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return se.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return se.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return se.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return se.sibling(t.firstChild)
        },
        contents: function(t) {
            return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : se.merge([], t.childNodes)
        }
    }, function(t, e) {
        se.fn[t] = function(i, n) {
            var s = se.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = se.filter(n, s)), this.length > 1 && (ye[t] || (s = se.unique(s)), ve.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var be = /\S+/g,
        xe = {};
    se.Callbacks = function(t) {
        t = "string" == typeof t ? xe[t] || r(t) : se.extend({}, t);
        var e, i, n, s, o, a, l = [],
            h = !t.once && [],
            c = function(r) {
                for (i = t.memory && r, n = !0, o = a || 0, a = 0, s = l.length, e = !0; l && s > o; o++)
                    if (l[o].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                e = !1, l && (h ? h.length && c(h.shift()) : i ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function r(e) {
                            se.each(e, function(e, i) {
                                var n = se.type(i);
                                "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                            })
                        }(arguments), e ? s = l.length : i && (a = n, c(i))
                    }
                    return this
                },
                remove: function() {
                    return l && se.each(arguments, function(t, i) {
                        for (var n;
                            (n = se.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (s >= n && s--, o >= n && o--)
                    }), this
                },
                has: function(t) {
                    return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = h = i = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return h = void 0, i || u.disable(), this
                },
                locked: function() {
                    return !h
                },
                fireWith: function(t, i) {
                    return !l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : c(i)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, se.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", se.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", se.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", se.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return se.Deferred(function(i) {
                            se.each(e, function(e, r) {
                                var o = se.isFunction(t[e]) && t[e];
                                s[r[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && se.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? se.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, se.each(e, function(t, r) {
                var o = r[2],
                    a = r[3];
                n[r[1]] = o.add, a && o.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), s[r[0]] = function() {
                    return s[r[0] + "With"](this === s ? n : this, arguments), this
                }, s[r[0] + "With"] = o.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                r = V.call(arguments),
                o = r.length,
                a = 1 !== o || t && se.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : se.Deferred(),
                h = function(t, i, n) {
                    return function(s) {
                        i[t] = this, n[t] = arguments.length > 1 ? V.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); o > s; s++) r[s] && se.isFunction(r[s].promise) ? r[s].promise().done(h(s, n, r)).fail(l.reject).progress(h(s, i, e)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    });
    var we;
    se.fn.ready = function(t) {
        return se.ready.promise().done(t), this
    }, se.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? se.readyWait++ : se.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--se.readyWait : !se.isReady) {
                if (!fe.body) return setTimeout(se.ready);
                se.isReady = !0, t !== !0 && --se.readyWait > 0 || (we.resolveWith(fe, [se]), se.fn.triggerHandler && (se(fe).triggerHandler("ready"), se(fe).off("ready")))
            }
        }
    }), se.ready.promise = function(e) {
        if (!we)
            if (we = se.Deferred(), "complete" === fe.readyState) setTimeout(se.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            fe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && fe.documentElement
            } catch (n) {}
            i && i.doScroll && ! function s() {
                if (!se.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(s, 50)
                    }
                    o(), se.ready()
                }
            }()
        }
        return we.promise(e)
    };
    var _e, ke = "undefined";
    for (_e in se(ie)) break;
    ie.ownLast = "0" !== _e, ie.inlineBlockNeedsLayout = !1, se(function() {
            var t, e, i, n;
            i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var t = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ie.deleteExpando = !1
                }
            }
            t = null
        }(), se.acceptData = function(t) {
            var e = se.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Te = /([A-Z])/g;
    se.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando], !!t && !h(t)
        },
        data: function(t, e, i) {
            return c(t, e, i)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }), se.fn.extend({
        data: function(t, e) {
            var i, n, s, r = this[0],
                o = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (s = se.data(r), 1 === r.nodeType && !se._data(r, "parsedAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = se.camelCase(n.slice(5)), l(r, n, s[n])));
                    se._data(r, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                se.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                se.data(this, t, e)
            }) : r ? l(r, t, se.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                se.removeData(this, t)
            })
        }
    }), se.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = se._data(t, e), i && (!n || se.isArray(i) ? n = se._data(t, e, se.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = se.queue(t, e),
                n = i.length,
                s = i.shift(),
                r = se._queueHooks(t, e),
                o = function() {
                    se.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, o, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return se._data(t, i) || se._data(t, i, {
                empty: se.Callbacks("once memory").add(function() {
                    se._removeData(t, e + "queue"), se._removeData(t, i)
                })
            })
        }
    }), se.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? se.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = se.queue(this, t, e);
                se._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && se.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                se.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = se.Deferred(),
                r = this,
                o = this.length,
                a = function() {
                    --n || s.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = se._data(r[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        De = ["Top", "Right", "Bottom", "Left"],
        Ee = function(t, e) {
            return t = e || t, "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
        },
        Ae = se.access = function(t, e, i, n, s, r, o) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === se.type(i)) {
                s = !0;
                for (a in i) se.access(t, e, a, i[a], !0, r, o)
            } else if (void 0 !== n && (s = !0, se.isFunction(n) || (o = !0), h && (o ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                    return h.call(se(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : h ? e.call(t) : l ? e(t[0], i) : r
        },
        Ne = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = fe.createElement("input"),
            e = fe.createElement("div"),
            i = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, i, n = fe.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Ie = /^(?:input|select|textarea)$/i,
        Pe = /^key/,
        Me = /^(?:mouse|pointer|contextmenu)|click/,
        Le = /^(?:focusinfocus|focusoutblur)$/,
        He = /^([^.]*)(?:\.(.+)|)$/;
    se.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var r, o, a, l, h, c, u, d, p, f, g, m = se._data(t);
            if (m) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = se.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                        return typeof se === ke || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;) r = He.exec(e[a]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p && (h = se.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = se.event.special[p] || {}, u = se.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && se.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (d = o[p]) || (d = o[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), se.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var r, o, a, l, h, c, u, d, p, f, g, m = se.hasData(t) && se._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(be) || [""], h = e.length; h--;)
                    if (a = He.exec(e[h]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = se.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) o = d[r], !s && g !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(r, 1), o.selector && d.delegateCount--, u.remove && u.remove.call(t, o));
                        l && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || se.removeEvent(t, p, m.handle), delete c[p])
                    } else
                        for (p in c) se.event.remove(t, p + e[h], i, n, !0);
                se.isEmptyObject(c) && (delete m.handle, se._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var r, o, a, l, h, c, u, d = [n || fe],
                p = ee.call(e, "type") ? e.type : e,
                f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Le.test(p + se.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[se.expando] ? e : new se.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : se.makeArray(i, [e]), h = se.event.special[p] || {}, s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                if (!s && !h.noBubble && !se.isWindow(n)) {
                    for (l = h.delegateType || p, Le.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                    c === (n.ownerDocument || fe) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (u = 0;
                    (a = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : h.bindType || p, r = (se._data(a, "events") || {})[e.type] && se._data(a, "handle"), r && r.apply(a, i), r = o && a[o], r && r.apply && se.acceptData(a) && (e.result = r.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), i) === !1) && se.acceptData(n) && o && n[p] && !se.isWindow(n)) {
                    c = n[o], c && (n[o] = null), se.event.triggered = p;
                    try {
                        n[p]()
                    } catch (g) {}
                    se.event.triggered = void 0, c && (n[o] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = se.event.fix(t);
            var e, i, n, s, r, o = [],
                a = V.call(arguments),
                l = (se._data(this, "events") || {})[t.type] || [],
                h = se.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (o = se.event.handlers.call(this, t, l), e = 0;
                    (s = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, r = 0;
                        (n = s.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((se.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, r, o = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], r = 0; a > r; r++) n = e[r], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? se(i, this).index(l) >= 0 : se.find(i, this, null, [l]).length), s[i] && s.push(n);
                        s.length && o.push({
                            elem: l,
                            handlers: s
                        })
                    }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        fix: function(t) {
            if (t[se.expando]) return t;
            var e, i, n, s = t.type,
                r = t,
                o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = Me.test(s) ? this.mouseHooks : Pe.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new se.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = r.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, r = e.button,
                    o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return se.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = se.extend(new se.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? se.event.trigger(s, null, e) : se.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, se.removeEvent = fe.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === ke && (t[n] = null), t.detachEvent(n, i))
    }, se.Event = function(t, e) {
        return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(t, e)
    }, se.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, se.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        se.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    r = t.handleObj;
                return (!s || s !== n && !se.contains(n, s)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ie.submitBubbles || (se.event.special.submit = {
        setup: function() {
            return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    i = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form : void 0;
                i && !se._data(i, "submitBubbles") && (se.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), se._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (se.event.special.change = {
        setup: function() {
            return Ie.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), se.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), se.event.simulate("change", this, t, !0)
            })), !1) : void se.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ie.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
                }), se._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return se.event.remove(this, "._change"), !Ie.test(this.nodeName)
        }
    }), ie.focusinBubbles || se.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            se.event.simulate(e, t.target, se.event.fix(t), !0)
        };
        se.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = se._data(n, e);
                s || n.addEventListener(t, i, !0), se._data(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = se._data(n, e) - 1;
                s ? se._data(n, e, s) : (n.removeEventListener(t, i, !0), se._removeData(n, e))
            }
        }
    }), se.fn.extend({
        on: function(t, e, i, n, s) {
            var r, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (r in t) this.on(r, e, i, t[r], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === s && (o = n, n = function(t) {
                return se().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = se.guid++)), this.each(function() {
                se.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, se(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                se.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                se.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? se.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Fe = / jQuery\d+="(?:null|\d+)"/g,
        ze = new RegExp("<(?:" + Oe + ")[\\s/>]", "i"),
        $e = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        je = /<([\w:]+)/,
        Be = /<tbody/i,
        We = /<|&#?\w+;/,
        qe = /<(?:script|style|link)/i,
        Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Xe = /^true\/(.*)/,
        Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ke = g(fe),
        Qe = Ke.appendChild(fe.createElement("div"));
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, se.extend({
        clone: function(t, e, i) {
            var n, s, r, o, a, l = se.contains(t.ownerDocument, t);
            if (ie.html5Clone || se.isXMLDoc(t) || !ze.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Qe.innerHTML = t.outerHTML, Qe.removeChild(r = Qe.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t)))
                for (n = m(r), a = m(t), o = 0; null != (s = a[o]); ++o) n[o] && k(s, n[o]);
            if (e)
                if (i)
                    for (a = a || m(t), n = n || m(r), o = 0; null != (s = a[o]); o++) _(s, n[o]);
                else _(t, r);
            return n = m(r, "script"), n.length > 0 && w(n, !l && m(t, "script")), n = a = s = null, r
        },
        buildFragment: function(t, e, i, n) {
            for (var s, r, o, a, l, h, c, u = t.length, d = g(e), p = [], f = 0; u > f; f++)
                if (r = t[f], r || 0 === r)
                    if ("object" === se.type(r)) se.merge(p, r.nodeType ? [r] : r);
                    else if (We.test(r)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (je.exec(r) || ["", ""])[1].toLowerCase(), c = Ve[l] || Ve._default, a.innerHTML = c[1] + r.replace(Re, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
                if (!ie.leadingWhitespace && $e.test(r) && p.push(e.createTextNode($e.exec(r)[0])), !ie.tbody)
                    for (r = "table" !== l || Be.test(r) ? "<table>" !== c[1] || Be.test(r) ? 0 : a : a.firstChild, s = r && r.childNodes.length; s--;) se.nodeName(h = r.childNodes[s], "tbody") && !h.childNodes.length && r.removeChild(h);
                for (se.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(r));
            for (a && d.removeChild(a), ie.appendChecked || se.grep(m(p, "input"), v), f = 0; r = p[f++];)
                if ((!n || -1 === se.inArray(r, n)) && (o = se.contains(r.ownerDocument, r), a = m(d.appendChild(r), "script"), o && w(a), i))
                    for (s = 0; r = a[s++];) Ue.test(r.type || "") && i.push(r);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var i, n, s, r, o = 0, a = se.expando, l = se.cache, h = ie.deleteExpando, c = se.event.special; null != (i = t[o]); o++)
                if ((e || se.acceptData(i)) && (s = i[a], r = s && l[s])) {
                    if (r.events)
                        for (n in r.events) c[n] ? se.event.remove(i, n) : se.removeEvent(i, n, r.handle);
                    l[s] && (delete l[s], h ? delete i[a] : typeof i.removeAttribute !== ke ? i.removeAttribute(a) : i[a] = null, G.push(s))
                }
        }
    }), se.fn.extend({
        text: function(t) {
            return Ae(this, function(t) {
                return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? se.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || se.cleanData(m(i)), i.parentNode && (e && se.contains(i.ownerDocument, i) && w(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && se.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && se.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return se.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ae(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Fe, "") : void 0;
                if (!("string" != typeof t || qe.test(t) || !ie.htmlSerialize && ze.test(t) || !ie.leadingWhitespace && $e.test(t) || Ve[(je.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Re, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (se.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, se.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = K.apply([], t);
            var i, n, s, r, o, a, l = 0,
                h = this.length,
                c = this,
                u = h - 1,
                d = t[0],
                p = se.isFunction(d);
            if (p || h > 1 && "string" == typeof d && !ie.checkClone && Ye.test(d)) return this.each(function(i) {
                var n = c.eq(i);
                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (h && (a = se.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (r = se.map(m(a, "script"), b), s = r.length; h > l; l++) n = a, l !== u && (n = se.clone(n, !0, !0), s && se.merge(r, m(n, "script"))), e.call(this[l], n, l);
                if (s)
                    for (o = r[r.length - 1].ownerDocument, se.map(r, x), l = 0; s > l; l++) n = r[l], Ue.test(n.type || "") && !se._data(n, "globalEval") && se.contains(o, n) && (n.src ? se._evalUrl && se._evalUrl(n.src) : se.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ge, "")));
                a = i = null
            }
            return this
        }
    }), se.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        se.fn[t] = function(t) {
            for (var i, n = 0, s = [], r = se(t), o = r.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), se(r[n])[e](i), Q.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Ze, Je = {};
    ! function() {
        var t;
        ie.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var ti, ei, ii = /^margin/,
        ni = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        si = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ei = function(t, e, i) {
            var n, s, r, o, a = t.style;
            return i = i || ti(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || se.contains(t.ownerDocument, t) || (o = se.style(t, e)), ni.test(o) && ii.test(e) && (n = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = s, a.maxWidth = r)), void 0 === o ? o : o + ""
        }) : fe.documentElement.currentStyle && (ti = function(t) {
            return t.currentStyle
        }, ei = function(t, e, i) {
            var n, s, r, o, a = t.style;
            return i = i || ti(t), o = i ? i[e] : void 0, null == o && a && a[e] && (o = a[e]), ni.test(o) && !si.test(e) && (n = a.left, s = t.runtimeStyle, r = s && s.left, r && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, r && (s.left = r)), void 0 === o ? o : o + "" || "auto"
        }),
        function() {
            function e() {
                var e, i, n, s;
                i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = o = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, s = e.appendChild(fe.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(s)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), i.removeChild(n))
            }
            var i, n, s, r, o, a, l;
            i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], n = s && s.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, se.extend(ie, {
                reliableHiddenOffsets: function() {
                    return null == a && e(), a
                },
                boxSizingReliable: function() {
                    return null == o && e(), o
                },
                pixelPosition: function() {
                    return null == r && e(), r
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), se.swap = function(t, e, i, n) {
            var s, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            s = i.apply(t, n || []);
            for (r in e) t.style[r] = o[r];
            return s
        };
    var ri = /alpha\([^)]*\)/i,
        oi = /opacity\s*=\s*([^)]*)/,
        ai = /^(none|table(?!-c[ea]).+)/,
        li = new RegExp("^(" + Se + ")(.*)$", "i"),
        hi = new RegExp("^([+-])=(" + Se + ")", "i"),
        ci = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ui = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        di = ["Webkit", "O", "Moz", "ms"];
    se.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, o, a = se.camelCase(e),
                    l = t.style;
                if (e = se.cssProps[a] || (se.cssProps[a] = D(l, a)), o = se.cssHooks[e] || se.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(t, !1, n)) ? s : l[e];
                if (r = typeof i, "string" === r && (s = hi.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(se.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || se.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n))))) try {
                    l[e] = i
                } catch (h) {}
            }
        },
        css: function(t, e, i, n) {
            var s, r, o, a = se.camelCase(e);
            return e = se.cssProps[a] || (se.cssProps[a] = D(t.style, a)), o = se.cssHooks[e] || se.cssHooks[a], o && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = ei(t, e, n)), "normal" === r && e in ui && (r = ui[e]), "" === i || i ? (s = parseFloat(r), i === !0 || se.isNumeric(s) ? s || 0 : r) : r
        }
    }), se.each(["height", "width"], function(t, e) {
        se.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? ai.test(se.css(t, "display")) && 0 === t.offsetWidth ? se.swap(t, ci, function() {
                    return I(t, e, n)
                }) : I(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var s = n && ti(t);
                return A(t, i, n ? N(t, e, n, ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), ie.opacity || (se.cssHooks.opacity = {
        get: function(t, e) {
            return oi.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === se.trim(r.replace(ri, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ri.test(r) ? r.replace(ri, s) : r + " " + s)
        }
    }), se.cssHooks.marginRight = S(ie.reliableMarginRight, function(t, e) {
        return e ? se.swap(t, {
            display: "inline-block"
        }, ei, [t, "marginRight"]) : void 0
    }), se.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        se.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + De[n] + e] = r[n] || r[n - 2] || r[0];
                return s
            }
        }, ii.test(t) || (se.cssHooks[t + e].set = A)
    }), se.fn.extend({
        css: function(t, e) {
            return Ae(this, function(t, e, i) {
                var n, s, r = {},
                    o = 0;
                if (se.isArray(e)) {
                    for (n = ti(t), s = e.length; s > o; o++) r[e[o]] = se.css(t, e[o], !1, n);
                    return r
                }
                return void 0 !== i ? se.style(t, e, i) : se.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ee(this) ? se(this).show() : se(this).hide()
            })
        }
    }), se.Tween = P, P.prototype = {
        constructor: P,
        init: function(t, e, i, n, s, r) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (se.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = P.propHooks[this.prop];
            return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, se.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, se.fx = P.prototype.init, se.fx.step = {};
    var pi, fi, gi = /^(?:toggle|show|hide)$/,
        mi = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        vi = /queueHooks$/,
        yi = [O],
        bi = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    s = mi.exec(e),
                    r = s && s[3] || (se.cssNumber[t] ? "" : "px"),
                    o = (se.cssNumber[t] || "px" !== r && +n) && mi.exec(se.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (o && o[3] !== r) {
                    r = r || o[3], s = s || [], o = +n || 1;
                    do a = a || ".5", o /= a, se.style(i.elem, t, o + r); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return s && (o = i.start = +o || +n || 0, i.unit = r, i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]), i
            }]
        };
    se.Animation = se.extend(z, {
            tweener: function(t, e) {
                se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, s = t.length; s > n; n++) i = t[n], bi[i] = bi[i] || [], bi[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? yi.unshift(t) : yi.push(t)
            }
        }), se.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? se.extend({}, t) : {
                complete: i || !i && e || se.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !se.isFunction(e) && e
            };
            return n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                se.isFunction(n.old) && n.old.call(this), n.queue && se.dequeue(this, n.queue)
            }, n
        }, se.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Ee).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = se.isEmptyObject(t),
                    r = se.speed(e, i, n),
                    o = function() {
                        var e = z(this, se.extend({}, t), r);
                        (s || se._data(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, s || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        r = se.timers,
                        o = se._data(this);
                    if (s) o[s] && o[s].stop && n(o[s]);
                    else
                        for (s in o) o[s] && o[s].stop && vi.test(s) && n(o[s]);
                    for (s = r.length; s--;) r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1));
                    (e || !i) && se.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = se._data(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        r = se.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, se.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), se.each(["toggle", "show", "hide"], function(t, e) {
            var i = se.fn[e];
            se.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, s)
            }
        }), se.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            se.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), se.timers = [], se.fx.tick = function() {
            var t, e = se.timers,
                i = 0;
            for (pi = se.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || se.fx.stop(), pi = void 0
        }, se.fx.timer = function(t) {
            se.timers.push(t), t() ? se.fx.start() : se.timers.pop()
        }, se.fx.interval = 13, se.fx.start = function() {
            fi || (fi = setInterval(se.fx.tick, se.fx.interval))
        }, se.fx.stop = function() {
            clearInterval(fi), fi = null
        }, se.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, se.fn.delay = function(t, e) {
            return t = se.fx ? se.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t, e, i, n, s;
            e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), s = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = s.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !s.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
        }();
    var xi = /\r/g;
    se.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = se.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, se(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : se.isArray(s) && (s = se.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(xi, "") : null == i ? "" : i)
            }
        }
    }), se.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = se.find.attr(t, "value");
                    return null != e ? e : se.trim(se.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, r = "select-one" === t.type || 0 > s, o = r ? null : [], a = r ? s + 1 : n.length, l = 0 > s ? a : r ? s : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && se.nodeName(i.parentNode, "optgroup"))) {
                            if (e = se(i).val(), r) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, r = se.makeArray(e), o = s.length; o--;)
                        if (n = s[o], se.inArray(se.valHooks.option.get(n), r) >= 0) try {
                            n.selected = i = !0
                        } catch (a) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), se.each(["radio", "checkbox"], function() {
        se.valHooks[this] = {
            set: function(t, e) {
                return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (se.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var wi, _i, ki = se.expr.attrHandle,
        Ci = /^(?:checked|selected)$/i,
        Ti = ie.getSetAttribute,
        Si = ie.input;
    se.fn.extend({
        attr: function(t, e) {
            return Ae(this, se.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                se.removeAttr(this, t)
            })
        }
    }), se.extend({
        attr: function(t, e, i) {
            var n, s, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === ke ? se.prop(t, e, i) : (1 === r && se.isXMLDoc(t) || (e = e.toLowerCase(), n = se.attrHooks[e] || (se.expr.match.bool.test(e) ? _i : wi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = se.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void se.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                r = e && e.match(be);
            if (r && 1 === t.nodeType)
                for (; i = r[s++];) n = se.propFix[i] || i, se.expr.match.bool.test(i) ? Si && Ti || !Ci.test(i) ? t[n] = !1 : t[se.camelCase("default-" + i)] = t[n] = !1 : se.attr(t, i, ""), t.removeAttribute(Ti ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && se.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), _i = {
        set: function(t, e, i) {
            return e === !1 ? se.removeAttr(t, i) : Si && Ti || !Ci.test(i) ? t.setAttribute(!Ti && se.propFix[i] || i, i) : t[se.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, se.each(se.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ki[e] || se.find.attr;
        ki[e] = Si && Ti || !Ci.test(e) ? function(t, e, n) {
            var s, r;
            return n || (r = ki[e], ki[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ki[e] = r), s
        } : function(t, e, i) {
            return i ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Si && Ti || (se.attrHooks.value = {
        set: function(t, e, i) {
            return se.nodeName(t, "input") ? void(t.defaultValue = e) : wi && wi.set(t, e, i)
        }
    }), Ti || (wi = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, ki.id = ki.name = ki.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, se.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: wi.set
    }, se.attrHooks.contenteditable = {
        set: function(t, e, i) {
            wi.set(t, "" === e ? !1 : e, i)
        }
    }, se.each(["width", "height"], function(t, e) {
        se.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ie.style || (se.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Di = /^(?:input|select|textarea|button|object)$/i,
        Ei = /^(?:a|area)$/i;
    se.fn.extend({
        prop: function(t, e) {
            return Ae(this, se.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = se.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), se.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, s, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return r = 1 !== o || !se.isXMLDoc(t), r && (e = se.propFix[e] || e, s = se.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = se.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Di.test(t.nodeName) || Ei.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || se.each(["href", "src"], function(t, e) {
        se.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (se.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        se.propFix[this.toLowerCase()] = this
    }), ie.enctype || (se.propFix.enctype = "encoding");
    var Ai = /[\t\r\n\f]/g;
    se.fn.extend({
        addClass: function(t) {
            var e, i, n, s, r, o, a = 0,
                l = this.length,
                h = "string" == typeof t && t;
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).addClass(t.call(this, e, this.className))
            });
            if (h)
                for (e = (t || "").match(be) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ai, " ") : " ")) {
                        for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o = se.trim(n), i.className !== o && (i.className = o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, r, o, a = 0,
                l = this.length,
                h = 0 === arguments.length || "string" == typeof t && t;
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).removeClass(t.call(this, e, this.className))
            });
            if (h)
                for (e = (t || "").match(be) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ai, " ") : "")) {
                        for (r = 0; s = e[r++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        o = t ? se.trim(n) : "", i.className !== o && (i.className = o)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(se.isFunction(t) ? function(i) {
                se(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, s = se(this), r = t.match(be) || []; e = r[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === ke || "boolean" === i) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : se._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ai, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        se.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), se.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Ni = se.now(),
        Ii = /\?/,
        Pi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    se.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            s = se.trim(e + "");
        return s && !se.trim(s.replace(Pi, function(t, e, s, r) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !r - !s, "")
        })) ? Function("return " + s)() : se.error("Invalid JSON: " + e)
    }, se.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e), i
    };
    var Mi, Li, Hi = /#.*$/,
        Oi = /([?&])_=[^&]*/,
        Fi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        zi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        $i = /^(?:GET|HEAD)$/,
        Ri = /^\/\//,
        ji = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bi = {},
        Wi = {},
        qi = "*/".concat("*");
    try {
        Li = location.href
    } catch (Yi) {
        Li = fe.createElement("a"), Li.href = "", Li = Li.href
    }
    Mi = ji.exec(Li.toLowerCase()) || [], se.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Li,
            type: "GET",
            isLocal: zi.test(Mi[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": se.parseJSON,
                "text xml": se.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? j(j(t, se.ajaxSettings), e) : j(se.ajaxSettings, t)
        },
        ajaxPrefilter: $(Bi),
        ajaxTransport: $(Wi),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var s, c, v, y, x, _ = e;
                2 !== b && (b = 2, a && clearTimeout(a), h = void 0, o = n || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = B(u, w, i)), y = W(u, y, w, s), s ? (u.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (se.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (se.etag[r] = x)), 204 === t || "HEAD" === u.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, c = y.data, v = y.error, s = !v)) : (v = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || _) + "", s ? f.resolveWith(d, [c, _, w]) : f.rejectWith(d, [w, _, v]), w.statusCode(m), m = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, u, s ? c : v]), g.fireWith(d, [w, _]), l && (p.trigger("ajaxComplete", [w, u]), --se.active || se.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, r, o, a, l, h, c, u = se.ajaxSetup({}, e),
                d = u.context || u,
                p = u.context && (d.nodeType || d.jquery) ? se(d) : se.event,
                f = se.Deferred(),
                g = se.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = Fi.exec(o);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return h && h.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || Li) + "").replace(Hi, "").replace(Ri, Mi[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = se.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (n = ji.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Mi[1] && n[2] === Mi[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Mi[3] || ("http:" === Mi[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = se.param(u.data, u.traditional)), R(Bi, u, e, w), 2 === b) return w;
            l = se.event && u.global, l && 0 === se.active++ && se.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !$i.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (Ii.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Oi.test(r) ? r.replace(Oi, "$1_=" + Ni++) : r + (Ii.test(r) ? "&" : "?") + "_=" + Ni++)), u.ifModified && (se.lastModified[r] && w.setRequestHeader("If-Modified-Since", se.lastModified[r]), se.etag[r] && w.setRequestHeader("If-None-Match", se.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + qi + "; q=0.01" : "") : u.accepts["*"]);
            for (s in u.headers) w.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[s](u[s]);
            if (h = R(Wi, u, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, h.send(v, i)
                } catch (_) {
                    if (!(2 > b)) throw _;
                    i(-1, _)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) {
            return se.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return se.get(t, void 0, e, "script")
        }
    }), se.each(["get", "post"], function(t, e) {
        se[e] = function(t, i, n, s) {
            return se.isFunction(i) && (s = s || n, n = i, i = void 0), se.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }), se._evalUrl = function(t) {
        return se.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, se.fn.extend({
        wrapAll: function(t) {
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(se.isFunction(t) ? function(e) {
                se(this).wrapInner(t.call(this, e))
            } : function() {
                var e = se(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = se.isFunction(t);
            return this.each(function(i) {
                se(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
            }).end()
        }
    }), se.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
    }, se.expr.filters.visible = function(t) {
        return !se.expr.filters.hidden(t)
    };
    var Ui = /%20/g,
        Xi = /\[\]$/,
        Gi = /\r?\n/g,
        Vi = /^(?:submit|button|image|reset|file)$/i,
        Ki = /^(?:input|select|textarea|keygen)/i;
    se.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = se.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t)) se.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) q(i, t[i], e, s);
        return n.join("&").replace(Ui, "+")
    }, se.fn.extend({
        serialize: function() {
            return se.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = se.prop(this, "elements");
                return t ? se.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !se(this).is(":disabled") && Ki.test(this.nodeName) && !Vi.test(t) && (this.checked || !Ne.test(t))
            }).map(function(t, e) {
                var i = se(this).val();
                return null == i ? null : se.isArray(i) ? se.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Gi, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Gi, "\r\n")
                }
            }).get()
        }
    }), se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || U()
    } : Y;
    var Qi = 0,
        Zi = {},
        Ji = se.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Zi) Zi[t](void 0, !0)
    }), ie.cors = !!Ji && "withCredentials" in Ji, Ji = ie.ajax = !!Ji, Ji && se.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function(i, n) {
                    var s, r = t.xhr(),
                        o = ++Qi;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) r[s] = t.xhrFields[s];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && r.setRequestHeader(s, i[s] + "");
                    r.send(t.hasContent && t.data || null), e = function(i, s) {
                        var a, l, h;
                        if (e && (s || 4 === r.readyState))
                            if (delete Zi[o], e = void 0, r.onreadystatechange = se.noop, s) 4 !== r.readyState && r.abort();
                            else {
                                h = {}, a = r.status, "string" == typeof r.responseText && (h.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                            }
                        h && n(a, l, h, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Zi[o] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), se.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return se.globalEval(t), t
            }
        }
    }), se.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), se.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = fe.head || se("head")[0] || fe.documentElement;
            return {
                send: function(n, s) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
    se.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || se.expando + "_" + Ni++;
            return this[t] = !0, t
        }
    }), se.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, r, o, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += (Ii.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return o || se.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = t[s], t[s] = function() {
            o = arguments
        }, n.always(function() {
            t[s] = r, e[s] && (e.jsonpCallback = i.jsonpCallback, tn.push(s)), o && se.isFunction(r) && r(o[0]), o = r = void 0
        }), "script") : void 0
    }), se.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || fe;
        var n = ue.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = se.buildFragment([t], e, s), s && s.length && se(s).remove(), se.merge([], n.childNodes))
    };
    var nn = se.fn.load;
    se.fn.load = function(t, e, i) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var n, s, r, o = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = se.trim(t.slice(a, t.length)), t = t.slice(0, a)), se.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && se.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(n ? se("<div>").append(se.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            o.each(i, s || [t.responseText, e, t])
        }), this
    }, se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        se.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), se.expr.filters.animated = function(t) {
        return se.grep(se.timers, function(e) {
            return t === e.elem
        }).length
    };
    var sn = t.document.documentElement;
    se.offset = {
        setOffset: function(t, e, i) {
            var n, s, r, o, a, l, h, c = se.css(t, "position"),
                u = se(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), r = se.css(t, "top"), l = se.css(t, "left"), h = ("absolute" === c || "fixed" === c) && se.inArray("auto", [r, l]) > -1, h ? (n = u.position(), o = n.top, s = n.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), se.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, se.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                se.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                r = s && s.ownerDocument;
            if (r) return e = r.documentElement, se.contains(e, s) ? (typeof s.getBoundingClientRect !== ke && (n = s.getBoundingClientRect()), i = X(r), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === se.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (i = t.offset()), i.top += se.css(t[0], "borderTopWidth", !0), i.left += se.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - se.css(n, "marginTop", !0),
                    left: e.left - i.left - se.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || sn; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");) t = t.offsetParent;
                return t || sn
            })
        }
    }), se.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        se.fn[t] = function(n) {
            return Ae(this, function(t, n, s) {
                var r = X(t);
                return void 0 === s ? r ? e in r ? r[e] : r.document.documentElement[n] : t[n] : void(r ? r.scrollTo(i ? se(r).scrollLeft() : s, i ? s : se(r).scrollTop()) : t[n] = s)
            }, t, n, arguments.length, null)
        }
    }), se.each(["top", "left"], function(t, e) {
        se.cssHooks[e] = S(ie.pixelPosition, function(t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? se(t).position()[e] + "px" : i) : void 0
        })
    }), se.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        se.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            se.fn[n] = function(n, s) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || s === !0 ? "margin" : "border");
                return Ae(this, function(e, i, n) {
                    var s;
                    return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? se.css(e, i, o) : se.style(e, i, n, o)
                }, e, r ? n : void 0, r, null)
            }
        })
    }), se.fn.size = function() {
        return this.length
    }, se.fn.andSelf = se.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return se
    });
    var rn = t.jQuery,
        on = t.$;
    return se.noConflict = function(e) {
        return t.$ === se && (t.$ = on), e && t.jQuery === se && (t.jQuery = rn), se
    }, typeof e === ke && (t.jQuery = t.$ = se), se
}),
function() {
    var t, e;
    t = window.jQuery || ("function" == typeof require ? require("jquery") : void 0), e = t(document), t.turbo = {
        version: "2.1.0",
        isReady: !1,
        use: function(t, i) {
            return e.off(".turbo").on("" + t + ".turbo", this.onLoad).on("" + i + ".turbo", this.onFetch)
        },
        addCallback: function(i) {
            return t.turbo.isReady && i(t), e.on("turbo:ready", function() {
                return i(t)
            })
        },
        onLoad: function() {
            return t.turbo.isReady = !0, e.trigger("turbo:ready")
        },
        onFetch: function() {
            return t.turbo.isReady = !1
        },
        register: function() {
            return t(this.onLoad), t.fn.ready = this.addCallback
        }
    }, t.turbo.register(), t.turbo.use("page:load", "page:fetch")
}.call(this),
    function(t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var i, n = t(document);
        t.rails = i = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(e) {
                var i = t('meta[name="csrf-token"]').attr("content");
                i && e.setRequestHeader("X-CSRF-Token", i)
            },
            refreshCSRFTokens: function() {
                var e = t("meta[name=csrf-token]").attr("content"),
                    i = t("meta[name=csrf-param]").attr("content");
                t('form input[name="' + i + '"]').val(e)
            },
            fire: function(e, i, n) {
                var s = t.Event(i);
                return e.trigger(s, n), s.result !== !1
            },
            confirm: function(t) {
                return confirm(t)
            },
            ajax: function(e) {
                return t.ajax(e)
            },
            href: function(t) {
                return t.attr("href")
            },
            handleRemote: function(n) {
                var s, r, o, a, l, h, c, u;
                if (i.fire(n, "ajax:before")) {
                    if (a = n.data("cross-domain"), l = a === e ? null : a, h = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                        s = n.attr("method"), r = n.attr("action"), o = n.serializeArray();
                        var d = n.data("ujs:submit-button");
                        d && (o.push(d), n.data("ujs:submit-button", null))
                    } else n.is(i.inputChangeSelector) ? (s = n.data("method"), r = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", r = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (s = n.data("method"), r = i.href(n), o = n.data("params") || null);
                    return u = {
                        type: s || "GET",
                        data: o,
                        dataType: c,
                        beforeSend: function(t, s) {
                            return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s]) ? void n.trigger("ajax:send", t) : !1
                        },
                        success: function(t, e, i) {
                            n.trigger("ajax:success", [t, e, i])
                        },
                        complete: function(t, e) {
                            n.trigger("ajax:complete", [t, e])
                        },
                        error: function(t, e, i) {
                            n.trigger("ajax:error", [t, e, i])
                        },
                        crossDomain: l
                    }, h && (u.xhrFields = {
                        withCredentials: h
                    }), r && (u.url = r), i.ajax(u)
                }
                return !1
            },
            handleMethod: function(n) {
                var s = i.href(n),
                    r = n.data("method"),
                    o = n.attr("target"),
                    a = t("meta[name=csrf-token]").attr("content"),
                    l = t("meta[name=csrf-param]").attr("content"),
                    h = t('<form method="post" action="' + s + '"></form>'),
                    c = '<input name="_method" value="' + r + '" type="hidden" />';
                l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && h.attr("target", o), h.hide().append(c).appendTo("body"), h.submit()
            },
            formElements: function(e, i) {
                return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
            },
            disableFormElements: function(e) {
                i.formElements(e, i.disableSelector).each(function() {
                    i.disableFormElement(t(this))
                })
            },
            disableFormElement: function(t) {
                var i, n;
                i = t.is("button") ? "html" : "val", n = t.data("disable-with"), t.data("ujs:enable-with", t[i]()), n !== e && t[i](n), t.prop("disabled", !0)
            },
            enableFormElements: function(e) {
                i.formElements(e, i.enableSelector).each(function() {
                    i.enableFormElement(t(this))
                })
            },
            enableFormElement: function(t) {
                var e = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
            },
            allowAction: function(t) {
                var e, n = t.data("confirm"),
                    s = !1;
                return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
            },
            blankInputs: function(e, i, n) {
                var s, r, o = t(),
                    a = i || "input,textarea",
                    l = e.find(a);
                return l.each(function() {
                    if (s = t(this), r = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !r == !n) {
                        if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                        o = o.add(s)
                    }
                }), o.length ? o : !1
            },
            nonBlankInputs: function(t, e) {
                return i.blankInputs(t, e, !0)
            },
            stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function(t) {
                var n = t.data("disable-with");
                t.data("ujs:enable-with", t.html()), n !== e && t.html(n), t.bind("click.railsDisable", function(t) {
                    return i.stopEverything(t)
                })
            },
            enableElement: function(t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
            }
        }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
            t.crossDomain || i.CSRFProtection(n)
        }), t(window).on("pageshow.rails", function() {
            t(t.rails.enableSelector).each(function() {
                var e = t(this);
                e.data("ujs:enable-with") && t.rails.enableFormElement(e)
            }), t(t.rails.linkDisableSelector).each(function() {
                var e = t(this);
                e.data("ujs:enable-with") && t.rails.enableElement(e)
            })
        }), n.delegate(i.linkDisableSelector, "ajax:complete", function() {
            i.enableElement(t(this))
        }), n.delegate(i.buttonDisableSelector, "ajax:complete", function() {
            i.enableFormElement(t(this))
        }), n.delegate(i.linkClickSelector, "click.rails", function(n) {
            var s = t(this),
                r = s.data("method"),
                o = s.data("params"),
                a = n.metaKey || n.ctrlKey;
            if (!i.allowAction(s)) return i.stopEverything(n);
            if (!a && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
                if (a && (!r || "GET" === r) && !o) return !0;
                var l = i.handleRemote(s);
                return l === !1 ? i.enableElement(s) : l.fail(function() {
                    i.enableElement(s)
                }), !1
            }
            return r ? (i.handleMethod(s), !1) : void 0
        }), n.delegate(i.buttonClickSelector, "click.rails", function(e) {
            var n = t(this);
            if (!i.allowAction(n)) return i.stopEverything(e);
            n.is(i.buttonDisableSelector) && i.disableFormElement(n);
            var s = i.handleRemote(n);
            return s === !1 ? i.enableFormElement(n) : s.fail(function() {
                i.enableFormElement(n)
            }), !1
        }), n.delegate(i.inputChangeSelector, "change.rails", function(e) {
            var n = t(this);
            return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
        }), n.delegate(i.formSubmitSelector, "submit.rails", function(n) {
            var s, r, o = t(this),
                a = o.data("remote") !== e;
            if (!i.allowAction(o)) return i.stopEverything(n);
            if (o.attr("novalidate") == e && (s = i.blankInputs(o, i.requiredInputSelector), s && i.fire(o, "ajax:aborted:required", [s]))) return i.stopEverything(n);
            if (a) {
                if (r = i.nonBlankInputs(o, i.fileInputSelector)) {
                    setTimeout(function() {
                        i.disableFormElements(o)
                    }, 13);
                    var l = i.fire(o, "ajax:aborted:file", [r]);
                    return l || setTimeout(function() {
                        i.enableFormElements(o)
                    }, 13), l
                }
                return i.handleRemote(o), !1
            }
            setTimeout(function() {
                i.disableFormElements(o)
            }, 13)
        }), n.delegate(i.formInputClickSelector, "click.rails", function(e) {
            var n = t(this);
            if (!i.allowAction(n)) return i.stopEverything(e);
            var s = n.attr("name"),
                r = s ? {
                    name: s,
                    value: n.val()
                } : null;
            n.closest("form").data("ujs:submit-button", r)
        }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function(e) {
            this == e.target && i.disableFormElements(t(this))
        }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function(e) {
            this == e.target && i.enableFormElements(t(this))
        }), t(function() {
            i.refreshCSRFTokens()
        }))
    }(jQuery),
    
      + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    s = i.data("bs.alert");
                s || i.data("bs.alert", s = new n(this)), "string" == typeof e && s[e].call(i)
            })
        }
        var i = '[data-dismiss="alert"]',
            n = function(e) {
                t(e).on("click", i, this.close)
            };
        n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
            function i() {
                o.detach().trigger("closed.bs.alert").remove()
            }
            var s = t(this),
                r = s.attr("data-target");
            r || (r = s.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var o = t(r);
            e && e.preventDefault(), o.length || (o = s.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
        };
        var s = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
            return t.fn.alert = s, this
        }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.button"),
                    r = "object" == typeof e && e;
                s || n.data("bs.button", s = new i(this, r)), "toggle" == e ? s.toggle() : e && s.setState(e)
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
        };
        i.VERSION = "3.3.4", i.DEFAULTS = {
            loadingText: "loading..."
        }, i.prototype.setState = function(e) {
            var i = "disabled",
                n = this.$element,
                s = n.is("input") ? "val" : "html",
                r = n.data();
            e += "Text", null == r.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function() {
                n[s](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
            }, this), 0)
        }, i.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input");
                "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            t && this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
            return t.fn.button = n, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
            var n = t(i.target);
            n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.carousel"),
                    r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    o = "string" == typeof e ? e : r.slide;
                s || n.data("bs.carousel", s = new i(this, r)), "number" == typeof e ? s.to(e) : o ? s[o]() : r.interval && s.pause().cycle()
            })
        }
        var i = function(e, i) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, i.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, i.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, i.prototype.getItemForDirection = function(t, e) {
            var i = this.getItemIndex(e),
                n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
            if (n && !this.options.wrap) return e;
            var s = "prev" == t ? -1 : 1,
                r = (i + s) % this.$items.length;
            return this.$items.eq(r)
        }, i.prototype.to = function(t) {
            var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
        }, i.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, i.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, i.prototype.slide = function(e, n) {
            var s = this.$element.find(".item.active"),
                r = n || this.getItemForDirection(e, s),
                o = this.interval,
                a = "next" == e ? "left" : "right",
                l = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var h = r[0],
                c = t.Event("slide.bs.carousel", {
                    relatedTarget: h,
                    direction: a
                });
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var u = t(this.$indicators.children()[this.getItemIndex(r)]);
                    u && u.addClass("active")
                }
                var d = t.Event("slid.bs.carousel", {
                    relatedTarget: h,
                    direction: a
                });
                return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, s.addClass(a), r.addClass(a), s.one("bsTransitionEnd", function() {
                    r.removeClass([e, a].join(" ")).addClass("active"), s.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(d)
                    }, 0)
                }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), o && this.cycle(), this
            }
        };
        var n = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = n, this
        };
        var s = function(i) {
            var n, s = t(this),
                r = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var o = t.extend({}, r.data(), s.data()),
                    a = s.attr("data-slide-to");
                a && (o.interval = !1), e.call(r, o), a && r.data("bs.carousel").to(a), i.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var i = t(this);
                e.call(i, i.data())
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return t(n)
        }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    s = i.data("bs.collapse"),
                    r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !s && r.toggle && /show|hide/.test(e) && (r.toggle = !1), s || i.data("bs.collapse", s = new n(this, r)), "string" == typeof e && s[e]()
            })
        }
        var n = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        n.VERSION = "3.3.4", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
            toggle: !0
        }, n.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, n.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                    var r = t.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                        var o = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", o].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])
                    }
                }
            }
        }, n.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var s = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
                }
            }
        }, n.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, n.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                var s = t(n);
                this.addAriaAndCollapsedClass(e(s), s)
            }, this)).end()
        }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
        };
        var s = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = s, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
            var s = t(this);
            s.attr("data-target") || n.preventDefault();
            var r = e(s),
                o = r.data("bs.collapse"),
                a = o ? "toggle" : s.data();
            i.call(r, a)
        })
    }(jQuery),  + function(t) {
        "use strict";

        function e(i, n) {
            this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function i(i) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.scrollspy"),
                    r = "object" == typeof i && i;
                s || n.data("bs.scrollspy", s = new e(this, r)), "string" == typeof i && s[i]()
            })
        }
        e.VERSION = "3.3.4", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function() {
            var e = this,
                i = "offset",
                n = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    s = e.data("target") || e.attr("href"),
                    r = /^#./.test(s) && t(s);
                return r && r.length && r.is(":visible") && [
                    [r[i]().top + n, s]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                s = this.offsets,
                r = this.targets,
                o = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n) return o != (t = r[r.length - 1]) && this.activate(t);
            if (o && e < s[0]) return this.activeTarget = null, this.clear();
            for (t = s.length; t--;) o != r[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(r[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = n, this
        }, t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.tab");
                s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
            })
        }
        var i = function(e) {
            this.element = t(e)
        };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
            if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var s = i.find(".active:last a"),
                    r = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    o = t.Event("show.bs.tab", {
                        relatedTarget: s[0]
                    });
                if (s.trigger(r), e.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var a = t(n);
                    this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                        s.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: s[0]
                        })
                    })
                }
            }
        }, i.prototype.activate = function(e, n, s) {
            function r() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
            }
            var o = n.find("> .active"),
                a = s && t.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
            o.length && a ? o.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), o.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
            return t.fn.tab = n, this
        };
        var s = function(i) {
            i.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
    }(jQuery), + function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() {
                i = !0
            });
            var s = function() {
                i || t(n).trigger(t.support.transition.end)
            };
            return setTimeout(s, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.tooltip"),
                    r = "object" == typeof e && e;
                (s || !/destroy|hide/.test(e)) && (s || n.data("bs.tooltip", s = new i(this, r)), "string" == typeof e && s[e]())
            })
        }
        var i = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
        };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, i.prototype.init = function(e, i, n) {
            if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var s = this.options.trigger.split(" "), r = s.length; r--;) {
                var o = s[r];
                if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != o) {
                    var a = "hover" == o ? "mouseenter" : "focusin",
                        l = "hover" == o ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.getOptions = function(e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, i.prototype.getDelegateOptions = function() {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, function(t, n) {
                i[t] != n && (e[t] = n)
            }), e
        }, i.prototype.enter = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)) : i.show())
        }, i.prototype.leave = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide()
        }, i.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !n) return;
                var s = this,
                    r = this.tip(),
                    o = this.getUID(this.type);
                this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    h = l.test(a);
                h && (a = a.replace(l, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
                var c = this.getPosition(),
                    u = r[0].offsetWidth,
                    d = r[0].offsetHeight;
                if (h) {
                    var p = a,
                        f = this.options.container ? t(this.options.container) : this.$element.parent(),
                        g = this.getPosition(f);
                    a = "bottom" == a && c.bottom + d > g.bottom ? "top" : "top" == a && c.top - d < g.top ? "bottom" : "right" == a && c.right + u > g.width ? "left" : "left" == a && c.left - u < g.left ? "right" : a, r.removeClass(p).addClass(a)
                }
                var m = this.getCalculatedOffset(a, c, u, d);
                this.applyPlacement(m, a);
                var v = function() {
                    var t = s.hoverState;
                    s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
                };
                t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
            }
        }, i.prototype.applyPlacement = function(e, i) {
            var n = this.tip(),
                s = n[0].offsetWidth,
                r = n[0].offsetHeight,
                o = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top = e.top + o, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
                using: function(t) {
                    n.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth,
                h = n[0].offsetHeight;
            "top" == i && h != r && (e.top = e.top + r - h);
            var c = this.getViewportAdjustedDelta(i, e, l, h);
            c.left ? e.left += c.left : e.top += c.top;
            var u = /top|bottom/.test(i),
                d = u ? 2 * c.left - s + l : 2 * c.top - r + h,
                p = u ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(d, n[0][p], u)
        }, i.prototype.replaceArrow = function(t, e, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
        }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, i.prototype.hide = function(e) {
            function n() {
                "in" != s.hoverState && r.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
            }
            var s = this,
                r = t(this.$tip),
                o = t.Event("hide.bs." + this.type);
            return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
        }, i.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, i.prototype.hasContent = function() {
            return this.getTitle()
        }, i.prototype.getPosition = function(e) {
            e = e || this.$element;
            var i = e[0],
                n = "BODY" == i.tagName,
                s = i.getBoundingClientRect();
            null == s.width && (s = t.extend({}, s, {
                width: s.right - s.left,
                height: s.bottom - s.top
            }));
            var r = n ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                o = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                a = n ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, s, o, a, r)
        }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - i / 2
            } : "top" == t ? {
                top: e.top - n,
                left: e.left + e.width / 2 - i / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - n / 2,
                left: e.left - i
            } : {
                top: e.top + e.height / 2 - n / 2,
                left: e.left + e.width
            }
        }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
            var s = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return s;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                o = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - r - o.scroll,
                    l = e.top + r - o.scroll + n;
                a < o.top ? s.top = o.top - a : l > o.top + o.height && (s.top = o.top + o.height - l)
            } else {
                var h = e.left - r,
                    c = e.left + r + i;
                h < o.left ? s.left = o.left - h : c > o.width && (s.left = o.left + o.width - c)
            }
            return s
        }, i.prototype.getTitle = function() {
            var t, e = this.$element,
                i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
        }, i.prototype.getUID = function(t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, i.prototype.tip = function() {
            return this.$tip = this.$tip || t(this.options.template)
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, i.prototype.enable = function() {
            this.enabled = !0
        }, i.prototype.disable = function() {
            this.enabled = !1
        }, i.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, i.prototype.toggle = function(e) {
            var i = this;
            e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, i.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type)
            })
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = n, this
        }
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.popover"),
                    r = "object" == typeof e && e;
                (s || !/destroy|hide/.test(e)) && (s || n.data("bs.popover", s = new i(this, r)), "string" == typeof e && s[e]())
            })
        }
        var i = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.3.4", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, i.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, i.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var n = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
            return t.fn.popover = n, this
        }
    }(jQuery),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.NProgress = e()
    }(this, function() {
        function t(t, e, i) {
            return e > t ? e : t > i ? i : t
        }

        function e(t) {
            return 100 * (-1 + t)
        }

        function i(t, i, n) {
            var s;
            return s = "translate3d" === h.positionUsing ? {
                transform: "translate3d(" + e(t) + "%,0,0)"
            } : "translate" === h.positionUsing ? {
                transform: "translate(" + e(t) + "%,0)"
            } : {
                "margin-left": e(t) + "%"
            }, s.transition = "all " + i + "ms " + n, s
        }

        function n(t, e) {
            var i = "string" == typeof t ? t : o(t);
            return i.indexOf(" " + e + " ") >= 0
        }

        function s(t, e) {
            var i = o(t),
                s = i + e;
            n(i, e) || (t.className = s.substring(1))
        }

        function r(t, e) {
            var i, s = o(t);
            n(t, e) && (i = s.replace(" " + e + " ", " "), t.className = i.substring(1, i.length - 1))
        }

        function o(t) {
            return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
        }

        function a(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        var l = {};
        l.version = "0.1.6";
        var h = l.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        l.configure = function(t) {
                var e, i;
                for (e in t) i = t[e], void 0 !== i && t.hasOwnProperty(e) && (h[e] = i);
                return this
            }, l.status = null, l.set = function(e) {
                var n = l.isStarted();
                e = t(e, h.minimum, 1), l.status = 1 === e ? null : e;
                var s = l.render(!n),
                    r = s.querySelector(h.barSelector),
                    o = h.speed,
                    a = h.easing;
                return s.offsetWidth, c(function(t) {
                    "" === h.positionUsing && (h.positionUsing = l.getPositioningCSS()), u(r, i(e, o, a)), 1 === e ? (u(s, {
                        transition: "none",
                        opacity: 1
                    }), s.offsetWidth, setTimeout(function() {
                        u(s, {
                            transition: "all " + o + "ms linear",
                            opacity: 0
                        }), setTimeout(function() {
                            l.remove(), t()
                        }, o)
                    }, o)) : setTimeout(t, o)
                }), this
            }, l.isStarted = function() {
                return "number" == typeof l.status
            }, l.start = function() {
                l.status || l.set(0);
                var t = function() {
                    setTimeout(function() {
                        l.status && (l.trickle(), t())
                    }, h.trickleSpeed)
                };
                return h.trickle && t(), this
            }, l.done = function(t) {
                return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
            }, l.inc = function(e) {
                var i = l.status;
                return i ? ("number" != typeof e && (e = (1 - i) * t(Math.random() * i, .1, .95)), i = t(i + e, 0, .994), l.set(i)) : l.start()
            }, l.trickle = function() {
                return l.inc(Math.random() * h.trickleRate)
            },
            function() {
                var t = 0,
                    e = 0;
                l.promise = function(i) {
                    return i && "resolved" != i.state() ? (0 == e && l.start(), t++, e++, i.always(function() {
                        e--, 0 == e ? (t = 0, l.done()) : l.set((t - e) / t)
                    }), this) : this
                }
            }(), l.render = function(t) {
                if (l.isRendered()) return document.getElementById("nprogress");
                s(document.documentElement, "nprogress-busy");
                var i = document.createElement("div");
                i.id = "nprogress", i.innerHTML = h.template;
                var n, r = i.querySelector(h.barSelector),
                    o = t ? "-100" : e(l.status || 0),
                    c = document.querySelector(h.parent);
                return u(r, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + o + "%,0,0)"
                }), h.showSpinner || (n = i.querySelector(h.spinnerSelector), n && a(n)), c != document.body && s(c, "nprogress-custom-parent"), c.appendChild(i), i
            }, l.remove = function() {
                r(document.documentElement, "nprogress-busy"), r(document.querySelector(h.parent), "nprogress-custom-parent");
                var t = document.getElementById("nprogress");
                t && a(t)
            }, l.isRendered = function() {
                return !!document.getElementById("nprogress")
            }, l.getPositioningCSS = function() {
                var t = document.body.style,
                    e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
                return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin"
            };
        var c = function() {
                function t() {
                    var i = e.shift();
                    i && i(t)
                }
                var e = [];
                return function(i) {
                    e.push(i), 1 == e.length && t()
                }
            }(),
            u = function() {
                function t(t) {
                    return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) {
                        return e.toUpperCase()
                    })
                }

                function e(t) {
                    var e = document.body.style;
                    if (t in e) return t;
                    for (var i, n = s.length, r = t.charAt(0).toUpperCase() + t.slice(1); n--;)
                        if (i = s[n] + r, i in e) return i;
                    return t
                }

                function i(i) {
                    return i = t(i), r[i] || (r[i] = e(i))
                }

                function n(t, e, n) {
                    e = i(e), t.style[e] = n
                }
                var s = ["Webkit", "O", "Moz", "ms"],
                    r = {};
                return function(t, e) {
                    var i, s, r = arguments;
                    if (2 == r.length)
                        for (i in e) s = e[i], void 0 !== s && e.hasOwnProperty(i) && n(t, i, s);
                    else n(t, r[1], r[2])
                }
            }();
        return l
    }), $(function() {
        $(document).on("page:fetch", function() {
            NProgress.start()
        }), $(document).on("page:receive", function() {
            NProgress.set(.7)
        }), $(document).on("page:change", function() {
            NProgress.done()
        }), $(document).on("page:restore", function() {
            NProgress.remove()
        })
    });
    

    jQuery (function() {
   $.fn.fixMe = function() {
      return this.each(function() {
         var $this = $(this),
            $t_fixed;
         function init() {
           
            $t_fixed = $this.clone();
            $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
            resizeFixed();
         }
         function resizeFixed() {
            $t_fixed.find("th").each(function(index) {
               $(this).css("width",$this.find("th").eq(index).outerWidth()+"px");
            });
         }
         function scrollFixed() {
            var offset = $(this).scrollTop(),
            tableOffsetTop = $this.offset().top,
            tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
            if(offset < tableOffsetTop || offset > tableOffsetBottom)
               $t_fixed.hide();
            else if(offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
               $t_fixed.show();
         }
         $(window).resize(resizeFixed);
         $(window).scroll(scrollFixed);
         init();
      });
   };
});

$(document).ready(function(){
   $("table").fixMe();
   $(".up").click(function() {
      $('html, body').animate({
      scrollTop: 0
   }, 2000);
 });
});

    // function() {
    //     jQuery(function() {
    //         return $(".tooltip").tooltip(), $('[rel="tooltip"]').tooltip(), $('[data-toggle="tooltip"]').tooltip()
    //     })
    // }.call(this),
     
    
