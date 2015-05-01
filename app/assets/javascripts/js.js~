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
    function() {
        var t, e, i, n, s, r, o, a, l, h, c, u, d, p, f, g, m, v, y, b, x, w, _, k, C, T, S, D, E, A, N, I, P, M, L, H, O, F, z, $, R, j, B, W, q, Y, U, X, G, V, K, Q, Z, J, te, ee, ie = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            ne = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) se.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            se = {}.hasOwnProperty,
            re = [].slice,
            oe = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
        M = {}, d = 10, Q = !1, z = null, y = null, I = null, j = null, ee = null, n = {
            BEFORE_CHANGE: "page:before-change",
            FETCH: "page:fetch",
            RECEIVE: "page:receive",
            CHANGE: "page:change",
            UPDATE: "page:update",
            LOAD: "page:load",
            RESTORE: "page:restore",
            BEFORE_UNLOAD: "page:before-unload",
            EXPIRE: "page:expire"
        }, k = function(t) {
            var e;
            return t = new i(t), U(), u(), null != z && z.start(), Q && (e = Z(t.absolute)) ? (C(e), T(t, null, !1)) : T(t, V)
        }, Z = function(t) {
            var e;
            return e = M[t], e && !e.transitionCacheDisabled ? e : void 0
        }, x = function(t) {
            return null == t && (t = !0), Q = t
        }, b = function(t) {
            return null == t && (t = !0), h ? t ? null != z ? z : z = new r("html") : (null != z && z.uninstall(), z = null) : void 0
        }, T = function(t, e, i) {
            return null == i && (i = !0), J(n.FETCH, {
                url: t.absolute
            }), null != ee && ee.abort(), ee = new XMLHttpRequest, ee.open("GET", t.withoutHashForIE10compatibility(), !0), ee.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), ee.setRequestHeader("X-XHR-Referer", j), ee.onload = function() {
                var i;
                return J(n.RECEIVE, {
                    url: t.absolute
                }), (i = F()) ? (B(t), W(), p.apply(null, _(i)), P(), "function" == typeof e && e(), J(n.LOAD)) : document.location.href = v() || t.absolute
            }, z && i && (ee.onprogress = function() {
                return function(t) {
                    var e;
                    return e = t.lengthComputable ? t.loaded / t.total * 100 : z.value + (100 - z.value) / 10, z.advanceTo(e)
                }
            }(this)), ee.onloadend = function() {
                return ee = null
            }, ee.onerror = function() {
                return document.location.href = t.absolute
            }, ee.send()
        }, C = function(t) {
            return null != ee && ee.abort(), p(t.title, t.body), $(t), J(n.RESTORE)
        }, u = function() {
            var t;
            return t = new i(y.url), M[t.absolute] = {
                url: t.relative,
                body: document.body,
                title: document.title,
                positionY: window.pageYOffset,
                positionX: window.pageXOffset,
                cachedAt: (new Date).getTime(),
                transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
            }, g(d)
        }, H = function(t) {
            return null == t && (t = d), /^[\d]+$/.test(t) ? d = parseInt(t) : void 0
        }, g = function(t) {
            var e, i, s, r, o, a;
            for (o = Object.keys(M), e = o.map(function(t) {
                    return M[t].cachedAt
                }).sort(function(t, e) {
                    return e - t
                }), a = [], i = 0, r = o.length; r > i; i++) s = o[i], M[s].cachedAt <= e[t] && (J(n.EXPIRE, M[s]), a.push(delete M[s]));
            return a
        }, p = function(e, i, s, r) {
            return J(n.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(i, document.body), null != s && t.update(s), K(), r && w(), y = window.history.state, null != z && z.done(), J(n.CHANGE), J(n.UPDATE)
        }, w = function() {
            var t, e, i, n, s, r, o, a, l, h, c, u;
            for (u = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), i = 0, s = u.length; s > i; i++)
                if (c = u[i], "" === (l = c.type) || "text/javascript" === l) {
                    for (e = document.createElement("script"), h = c.attributes, n = 0, r = h.length; r > n; n++) t = h[n], e.setAttribute(t.name, t.value);
                    c.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(c.innerHTML)), a = c.parentNode, o = c.nextSibling, a.removeChild(c), a.insertBefore(e, o)
                }
        }, X = function(t) {
            return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
        }, K = function() {
            var t, e;
            return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
        }, B = function(t) {
            return (t = new i(t)).absolute !== j ? window.history.pushState({
                turbolinks: !0,
                url: t.absolute
            }, "", t.absolute) : void 0
        }, W = function() {
            var t, e;
            return (t = ee.getResponseHeader("X-XHR-Redirected-To")) ? (t = new i(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
        }, v = function() {
            var t;
            return null != (t = ee.getResponseHeader("Location")) && new i(t).crossOrigin() ? t : void 0
        }, U = function() {
            return j = document.location.href
        }, Y = function() {
            return window.history.replaceState({
                turbolinks: !0,
                url: document.location.href
            }, "", document.location.href)
        }, q = function() {
            return y = window.history.state
        }, P = function() {
            var t;
            return navigator.userAgent.match(/Firefox/) && !(t = new i).hasNoHash() ? (window.history.replaceState(y, "", t.withoutHash()), document.location.hash = t.hash) : void 0
        }, $ = function(t) {
            return window.scrollTo(t.positionX, t.positionY)
        }, V = function() {
            return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
        }, f = function(t) {
            var e, i, n;
            if (null == t || "object" != typeof t) return t;
            e = new t.constructor;
            for (i in t) n = t[i], e[i] = f(n);
            return e
        }, O = function(t) {
            var e, i;
            return i = (null != (e = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? e[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", i
        }, J = function(t, e) {
            var i;
            return "undefined" != typeof Prototype && Event.fire(document, t, e, !0), i = document.createEvent("Events"), e && (i.data = e), i.initEvent(t, !0, !0), document.dispatchEvent(i)
        }, L = function(t) {
            return !J(n.BEFORE_CHANGE, {
                url: t
            })
        }, F = function() {
            var t, e, i, n, s, r;
            return e = function() {
                var t;
                return 400 <= (t = ee.status) && 600 > t
            }, r = function() {
                var t;
                return null != (t = ee.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
            }, n = function(t) {
                var e, i, n, s, r;
                for (s = t.querySelector("head").childNodes, r = [], e = 0, i = s.length; i > e; e++) n = s[e], null != ("function" == typeof n.getAttribute ? n.getAttribute("data-turbolinks-track") : void 0) && r.push(n.getAttribute("src") || n.getAttribute("href"));
                return r
            }, t = function(t) {
                var e;
                return I || (I = n(document)), e = n(t), e.length !== I.length || s(e, I).length !== I.length
            }, s = function(t, e) {
                var i, n, s, r, o;
                for (t.length > e.length && (s = [e, t], t = s[0], e = s[1]), r = [], i = 0, n = t.length; n > i; i++) o = t[i], ie.call(e, o) >= 0 && r.push(o);
                return r
            }, !e() && r() && (i = m(ee.responseText), i && !t(i)) ? i : void 0
        }, _ = function(e) {
            var i;
            return i = e.querySelector("title"), [null != i ? i.textContent : void 0, X(e.querySelector("body")), t.get(e).token, "runScripts"]
        }, t = {
            get: function(t) {
                var e;
                return null == t && (t = document), {
                    node: e = t.querySelector('meta[name="csrf-token"]'),
                    token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
                }
            },
            update: function(t) {
                var e;
                return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
            }
        }, m = function(t) {
            var e;
            return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
        }, i = function() {
            function t(e) {
                return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
            }
            return t.prototype.withoutHash = function() {
                return this.href.replace(this.hash, "").replace("#", "")
            }, t.prototype.withoutHashForIE10compatibility = function() {
                return this.withoutHash()
            }, t.prototype.hasNoHash = function() {
                return 0 === this.hash.length
            }, t.prototype.crossOrigin = function() {
                return this.origin !== (new t).origin
            }, t.prototype._parse = function() {
                var t;
                return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
            }, t
        }(), s = function(t) {
            function e(t) {
                return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
            }
            return ne(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function() {
                var t, i, n, s;
                for (i = 1 <= arguments.length ? re.call(arguments, 0) : [], n = 0, s = i.length; s > n; n++) t = i[n], e.HTML_EXTENSIONS.push(t);
                return e.HTML_EXTENSIONS
            }, e.prototype.shouldIgnore = function() {
                return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
            }, e.prototype._anchored = function() {
                return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new i).withoutHash()
            }, e.prototype._nonHtml = function() {
                return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
            }, e.prototype._optOut = function() {
                var t, e;
                for (e = this.originalElement; !t && e !== document;) t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
                return t
            }, e.prototype._target = function() {
                return 0 !== this.link.target.length
            }, e
        }(i), e = function() {
            function t(t) {
                this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (L(this.link.absolute) || te(this.link.href), this.event.preventDefault()))
            }
            return t.installHandlerLast = function(e) {
                return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
            }, t.handle = function(e) {
                return new t(e)
            }, t.prototype._extractLink = function() {
                var t;
                for (t = this.event.target; t.parentNode && "A" !== t.nodeName;) t = t.parentNode;
                return "A" === t.nodeName && 0 !== t.href.length ? this.link = new s(t) : void 0
            }, t.prototype._validForTurbolinks = function() {
                return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
            }, t.prototype._nonStandardClick = function() {
                return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
            }, t
        }(), r = function() {
            function t(t) {
                this.elementSelector = t, this._trickle = oe(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
            }
            var e;
            return e = "turbolinks-progress-bar", t.prototype.install = function() {
                return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
            }, t.prototype.uninstall = function() {
                return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
            }, t.prototype.start = function() {
                return this.advanceTo(5)
            }, t.prototype.advanceTo = function(t) {
                var e;
                if (t > (e = this.value) && 100 >= e) {
                    if (this.value = t, this._updateStyle(), 100 === this.value) return this._stopTrickle();
                    if (this.value > 0) return this._startTrickle()
                }
            }, t.prototype.done = function() {
                return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
            }, t.prototype._reset = function() {
                var t;
                return t = this.opacity, setTimeout(function(t) {
                    return function() {
                        return t.opacity = 0, t._updateStyle()
                    }
                }(this), this.speed / 2), setTimeout(function(e) {
                    return function() {
                        return e.value = 0, e.opacity = t, e._withSpeed(0, function() {
                            return e._updateStyle(!0)
                        })
                    }
                }(this), this.speed)
            }, t.prototype._startTrickle = function() {
                return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
            }, t.prototype._stopTrickle = function() {
                return delete this.trickling
            }, t.prototype._trickle = function() {
                return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
            }, t.prototype._withSpeed = function(t, e) {
                var i, n;
                return i = this.speed, this.speed = t, n = e(), this.speed = i, n
            }, t.prototype._updateStyle = function(t) {
                return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
            }, t.prototype._changeContentToForceRepaint = function() {
                return this.content = "" === this.content ? " " : ""
            }, t.prototype._createCSSRule = function() {
                return this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
            }, t
        }(), c = function(t) {
            return setTimeout(t, 500)
        }, E = function() {
            return document.addEventListener("DOMContentLoaded", function() {
                return J(n.CHANGE), J(n.UPDATE)
            }, !0)
        }, N = function() {
            return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function(t, e) {
                return jQuery.trim(e.responseText) ? J(n.UPDATE) : void 0
            }) : void 0
        }, A = function(t) {
            var e, n;
            return (null != (n = t.state) ? n.turbolinks : void 0) ? (e = M[new i(t.state.url).absolute]) ? (u(), C(e)) : te(t.target.location.href) : void 0
        }, D = function() {
            return Y(), q(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function() {
                return Y(), q()
            }, !1), c(function() {
                return window.addEventListener("popstate", A, !1)
            })
        }, S = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && S, o = !navigator.userAgent.match(/CriOS\//), G = "GET" === (R = O("request_method")) || "" === R, h = l && o && G, a = document.addEventListener && document.createEvent, a && (E(), N()), h ? (te = k, D()) : te = function(t) {
            return document.location.href = t
        }, this.Turbolinks = {
            visit: te,
            pagesCached: H,
            enableTransitionCache: x,
            enableProgressBar: b,
            allowLinkExtensions: s.allowExtensions,
            supported: h,
            EVENTS: f(n)
        }
    }.call(this), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.affix"),
                    r = "object" == typeof e && e;
                s || n.data("bs.affix", s = new i(this, r)), "string" == typeof e && s[e]()
            })
        }
        var i = function(e, n) {
            this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.3.4", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getState = function(t, e, i, n) {
            var s = this.$target.scrollTop(),
                r = this.$element.offset(),
                o = this.$target.height();
            if (null != i && "top" == this.affixed) return i > s ? "top" : !1;
            if ("bottom" == this.affixed) return null != i ? s + this.unpin <= r.top ? !1 : "bottom" : t - n >= s + o ? !1 : "bottom";
            var a = null == this.affixed,
                l = a ? s : r.top,
                h = a ? o : e;
            return null != i && i >= s ? "top" : null != n && l + h >= t - n ? "bottom" : !1
        }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    n = this.options.offset,
                    s = n.top,
                    r = n.bottom,
                    o = t(document.body).height();
                "object" != typeof n && (r = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
                var a = this.getState(o, e, s, r);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (a ? "-" + a : ""),
                        h = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({
                    top: o - e - r
                })
            }
        };
        var n = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
            return t.fn.affix = n, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var i = t(this),
                    n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
            })
        })
    }(jQuery), + function(t) {
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
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            e && 3 === e.which || (t(s).remove(), t(r).each(function() {
                var n = t(this),
                    s = i(n),
                    r = {
                        relatedTarget: this
                    };
                s.hasClass("open") && (s.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", r)))
            }))
        }

        function i(e) {
            var i = e.attr("data-target");
            i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && t(i);
            return n && n.length ? n : e.parent()
        }

        function n(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
            })
        }
        var s = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            o = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        o.VERSION = "3.3.4", o.prototype.toggle = function(n) {
            var s = t(this);
            if (!s.is(".disabled, :disabled")) {
                var r = i(s),
                    o = r.hasClass("open");
                if (e(), !o) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                    var a = {
                        relatedTarget: this
                    };
                    if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                    s.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
                }
                return !1
            }
        }, o.prototype.keydown = function(e) {
            if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                var n = t(this);
                if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var s = i(n),
                        o = s.hasClass("open");
                    if (!o && 27 != e.which || o && 27 == e.which) return 27 == e.which && s.find(r).trigger("focus"), n.trigger("click");
                    var a = " li:not(.disabled):visible a",
                        l = s.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                    if (l.length) {
                        var h = l.index(e.target);
                        38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', o.prototype.keydown)
    }(jQuery), + function(t) {
        "use strict";

        function e(e, n) {
            return this.each(function() {
                var s = t(this),
                    r = s.data("bs.modal"),
                    o = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
                r || s.data("bs.modal", r = new i(this, o)), "string" == typeof e ? r[e](n) : o.show && r.show(n)
            })
        }
        var i = function(e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function(e) {
            var n = this,
                s = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var s = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                var r = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                s ? n.$dialog.one("bsTransitionEnd", function() {
                    n.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
            }))
        }, i.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function(e) {
            var n = this,
                s = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && s;
                if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var o = function() {
                    n.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
            } else e && e()
        }, i.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var n = t(this),
                s = n.attr("href"),
                r = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
                o = r.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(s) && s
                }, r.data(), n.data());
            n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                    n.is(":visible") && n.trigger("focus")
                })
            }), e.call(r, o, this)
        })
    }(jQuery), + function(t) {
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
    }),
    function() {
        var t, e, i, n, s, r, o, a, l, h, c, u, d, p, f, g, m;
        i = function() {
            return document.querySelectorAll && document.addEventListener
        }, i() && (isNaN(Date.parse("2011-01-01T12:00:00-05:00")) && (a = Date.parse, s = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/, Date.parse = function(t) {
            var e, i, n, r, o, l, h, c, u, d;
            return t = t.toString(), (n = t.match(s)) && (d = n[0], c = n[1], o = n[2], e = n[3], i = n[4], r = n[5], h = n[6], u = n[7], "Z" !== u && (l = u.replace(":", "")), t = c + "/" + o + "/" + e + " " + i + ":" + r + ":" + h + " GMT" + [l]), a(t)
        }), m = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), r = "January February March April May June July August September October November December".split(" "), o = function(t) {
            return ("0" + t).slice(-2)
        }, f = function(t, e) {
            var i, n, s, a, l, h, c;
            return n = t.getDay(), i = t.getDate(), l = t.getMonth(), c = t.getFullYear(), s = t.getHours(), a = t.getMinutes(), h = t.getSeconds(), e.replace(/%([%aAbBcdeHIlmMpPSwyYZ])/g, function(e) {
                var u, d, p, g;
                switch (u = e[0], d = e[1]) {
                    case "%":
                        return "%";
                    case "a":
                        return m[n].slice(0, 3);
                    case "A":
                        return m[n];
                    case "b":
                        return r[l].slice(0, 3);
                    case "B":
                        return r[l];
                    case "c":
                        return t.toString();
                    case "d":
                        return o(i);
                    case "e":
                        return i;
                    case "H":
                        return o(s);
                    case "I":
                        return o(f(t, "%l"));
                    case "l":
                        return 0 === s || 12 === s ? 12 : (s + 12) % 12;
                    case "m":
                        return o(l + 1);
                    case "M":
                        return o(a);
                    case "p":
                        return s > 11 ? "PM" : "AM";
                    case "P":
                        return s > 11 ? "pm" : "am";
                    case "S":
                        return o(h);
                    case "w":
                        return n;
                    case "y":
                        return o(c % 100);
                    case "Y":
                        return c;
                    case "Z":
                        return null != (p = null != (g = t.toString().match(/\((\w+)\)$/)) ? g[1] : void 0) ? p : ""
                }
            })
        }, t = function() {
            function t(t, e, i) {
                this.date = new Date(Date.UTC(t, e - 1)), this.date.setUTCDate(i), this.year = this.date.getUTCFullYear(), this.month = this.date.getUTCMonth() + 1, this.day = this.date.getUTCDate(), this.value = this.date.getTime()
            }
            return t.fromDate = function(t) {
                return new this(t.getFullYear(), t.getMonth() + 1, t.getDate())
            }, t.today = function() {
                return this.fromDate(new Date)
            }, t.prototype.equals = function(t) {
                return (null != t ? t.value : void 0) === this.value
            }, t.prototype.is = function(t) {
                return this.equals(t)
            }, t.prototype.isToday = function() {
                return this.is(this.constructor.today())
            }, t.prototype.occursOnSameYearAs = function(t) {
                return this.year === (null != t ? t.year : void 0)
            }, t.prototype.occursThisYear = function() {
                return this.occursOnSameYearAs(this.constructor.today())
            }, t.prototype.daysSince = function(t) {
                return t ? (this.date - t.date) / 864e5 : void 0
            }, t.prototype.daysPassed = function() {
                return this.constructor.today().daysSince(this)
            }, t
        }(), e = function() {
            function e(e) {
                this.date = e, this.calendarDate = t.fromDate(this.date)
            }
            return e.prototype.toString = function() {
                var t, e;
                return (t = this.timeElapsed()) ? t + " ago" : (e = this.relativeWeekday()) ? e + " at " + this.formatTime() : "on " + this.formatDate()
            }, e.prototype.toTimeOrDateString = function() {
                return this.calendarDate.isToday() ? this.formatTime() : this.formatDate()
            }, e.prototype.timeElapsed = function() {
                var t, e, i, n;
                return i = (new Date).getTime() - this.date.getTime(), n = Math.round(i / 1e3), e = Math.round(n / 60), t = Math.round(e / 60), 0 > i ? null : 10 > n ? "a second" : 45 > n ? n + " seconds" : 90 > n ? "a minute" : 45 > e ? e + " minutes" : 90 > e ? "an hour" : 24 > t ? t + " hours" : null
            }, e.prototype.relativeWeekday = function() {
                switch (this.calendarDate.daysPassed()) {
                    case 0:
                        return "today";
                    case 1:
                        return "yesterday";
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        return f(this.date, "%A")
                }
            }, e.prototype.formatDate = function() {
                var t;
                return t = "%b %e", this.calendarDate.occursThisYear() || (t += ", %Y"), f(this.date, t)
            }, e.prototype.formatTime = function() {
                return f(this.date, "%l:%M%P")
            }, e
        }(), h = function(t) {
            return new e(t).formatDate()
        }, c = function(t) {
            return new e(t).toString()
        }, u = function(t) {
            return new e(t).toTimeOrDateString()
        }, d = function(t) {
            var i;
            return (i = new e(t).relativeWeekday()) ? i.charAt(0).toUpperCase() + i.substring(1) : void 0
        }, n = !1, g = function(t) {
            return n && t(), document.addEventListener("time:elapse", t), ("undefined" != typeof Turbolinks && null !== Turbolinks ? Turbolinks.supported : void 0) ? document.addEventListener("page:update", t) : "function" == typeof jQuery ? jQuery(document).on("ajaxSuccess", function(e, i) {
                return jQuery.trim(i.responseText) ? t() : void 0
            }) : void 0
        }, l = function(t, e) {
            return g(function() {
                var i, n, s, r, o;
                for (r = document.querySelectorAll(t), o = [], n = 0, s = r.length; s > n; n++) i = r[n], o.push(e(i));
                return o
            })
        }, document.addEventListener("DOMContentLoaded", function() {
            var t;
            return n = !0, t = "textContent" in document.body ? "textContent" : "innerText", l("time[data-local]:not([data-localized])", function(e) {
                var i, n, s, r;
                return i = e.getAttribute("datetime"), n = e.getAttribute("data-format"), s = e.getAttribute("data-local"), r = new Date(Date.parse(i)), isNaN(r) ? void 0 : (e.hasAttribute("title") || e.setAttribute("title", f(r, "%B %e, %Y at %l:%M%P %Z")), e[t] = function() {
                    var t, i;
                    switch (s) {
                        case "date":
                            return e.setAttribute("data-localized", !0), h(r);
                        case "time":
                            return e.setAttribute("data-localized", !0), f(r, n);
                        case "time-ago":
                            return c(r);
                        case "time-or-date":
                            return u(r);
                        case "weekday":
                            return null != (t = d(r)) ? t : "";
                        case "weekday-or-date":
                            return null != (i = d(r)) ? i : h(r)
                    }
                }())
            })
        }), p = function() {
            var t;
            return t = document.createEvent("Events"), t.initEvent("time:elapse", !0, !0), document.dispatchEvent(t)
        }, setInterval(p, 6e4), this.LocalTime = {
            relativeDate: h,
            relativeTimeAgo: c,
            relativeTimeOrDate: u,
            relativeWeekday: d,
            run: p,
            strftime: f
        })
    }.call(this),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(e, n) {
            var s, r, o, a = e.nodeName.toLowerCase();
            return "area" === a ? (s = e.parentNode, r = s.name, e.href && r && "map" === s.nodeName.toLowerCase() ? (o = t("img[usemap='#" + r + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.11.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            scrollParent: function(e) {
                var i = this.css("position"),
                    n = "absolute" === i,
                    s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    r = this.parents().filter(function() {
                        var e = t(this);
                        return n && "static" === e.css("position") ? !1 : s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && r.length ? r : t(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, n) {
                return !!t.data(e, n[3])
            },
            focusable: function(i) {
                return e(i, !isNaN(t.attr(i, "tabindex")))
            },
            tabbable: function(i) {
                var n = t.attr(i, "tabindex"),
                    s = isNaN(n);
                return (s || n >= 0) && e(i, !s)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
            function n(e, i, n, r) {
                return t.each(s, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), r && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                r = i.toLowerCase(),
                o = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                    t(this).css(r, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, s) {
                return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(r, n(this, e, !0, s) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
            focus: function(e) {
                return function(i, n) {
                    return "number" == typeof i ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), n && n.call(e)
                        }, i)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            disableSelection: function() {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(t + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(e) {
                if (void 0 !== e) return this.css("zIndex", e);
                if (this.length)
                    for (var i, n, s = t(this[0]); s.length && s[0] !== document;) {
                        if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        s = s.parent()
                    }
                return 0
            }
        }), t.ui.plugin = {
            add: function(e, i, n) {
                var s, r = t.ui[e].prototype;
                for (s in n) r.plugins[s] = r.plugins[s] || [], r.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i, n) {
                var s, r = t.plugins[e];
                if (r && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < r.length; s++) t.options[r[s][0]] && r[s][1].apply(t.element, i)
            }
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core"], t) : t(jQuery)
    }(function(t) {
        function e(t) {
            for (var e, i; t.length && t[0] !== document;) {
                if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                t = t.parent()
            }
            return 0
        }

        function i() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function n(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.delegate(i, "mouseout", function() {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", s)
        }

        function s() {
            t.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function r(e, i) {
            t.extend(e, i);
            for (var n in i) null == i[n] && (e[n] = i[n]);
            return e
        }
        t.extend(t.ui, {
            datepicker: {
                version: "1.11.2"
            }
        });
        var o;
        return t.extend(i.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return r(this._defaults, t || {}), this
            },
            _attachDatepicker: function(e, i) {
                var n, s, r;
                n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), r = this._newInst(t(e), s), r.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, r) : s && this._inlineDatepicker(e, r)
            },
            _newInst: function(e, i) {
                var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: s,
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, i) {
                var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, i) {
                var n, s, r, o = this._get(i, "appendText"),
                    a = this._get(i, "isRTL");
                i.append && i.append.remove(), o && (i.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"), e[a ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.focus(this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), r = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: r,
                    alt: s,
                    title: s
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(r ? t("<img/>").attr({
                    src: r,
                    alt: s,
                    title: s
                }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function() {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, r = new Date(2009, 11, 20),
                        o = this._get(t, "dateFormat");
                    o.match(/[DM]/) && (e = function(t) {
                        for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, r.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())), t.input.attr("size", this._formatDate(t, r).length)
                }
            },
            _inlineDatepicker: function(e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, i, n, s, o) {
                var a, l, h, c, u, d = this._dialogInst;
                return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), r(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function(e) {
                var i, n = t(e),
                    s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(e) {
                var i, n, s = t(e),
                    r = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, r.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function(e) {
                var i, n, s = t(e),
                    r = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, r.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function(e) {
                try {
                    return t.data(e, "datepicker")
                } catch (i) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(e, i, n) {
                var s, o, a, l, h = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), r(h.settings, s), null !== a && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, a)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h))))
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(e) {
                var i, n, s, r = t.datepicker._getInst(e.target),
                    o = !0,
                    a = r.dpDiv.is(".ui-datepicker-rtl");
                if (r._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", r.dpDiv), s[0] && t.datepicker._selectDay(e.target, r.selectedMonth, r.selectedYear, s[0]), i = t.datepicker._get(r, "onSelect"), i ? (n = t.datepicker._formatDate(r), i.apply(r.input ? r.input[0] : null, [n, r])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), o = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), o = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), o = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), o = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
                o && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var i, n, s = t.datepicker._getInst(e.target);
                return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
            },
            _doKeyUp: function(e) {
                var i, n = t.datepicker._getInst(e.target);
                if (n.input.val() !== n.lastVal) try {
                    i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
                } catch (s) {}
                return !0
            },
            _showDatepicker: function(i) {
                if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
                    var n, s, o, a, l, h, c;
                    n = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), o = s ? s.apply(i, [i, n]) : {}, o !== !1 && (r(n.settings, o), n.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), a = !1, t(i).parents().each(function() {
                        return a |= "fixed" === t(this).css("position"), !a
                    }), l = {
                        left: t.datepicker._pos[0],
                        top: t.datepicker._pos[1]
                    }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, a), n.dpDiv.css({
                        position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), n.inline || (h = t.datepicker._get(n, "showAnim"), c = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(n) && n.input.focus(), t.datepicker._curInst = n))
                }
            },
            _updateDatepicker: function(e) {
                this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, n = this._getNumberOfMonths(e),
                    r = n[1],
                    a = 17,
                    l = e.dpDiv.find("." + this._dayOverClass + " a");
                l.length > 0 && s.apply(l.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", a * r + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(e, i, n) {
                var s = e.dpDiv.outerWidth(),
                    r = e.dpDiv.outerHeight(),
                    o = e.input ? e.input.outerWidth() : 0,
                    a = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? s - o : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + r > h && h > r ? Math.abs(r + a) : 0), i
            },
            _findPos: function(e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
                return i = t(e).offset(), [i.left, i.top]
            },
            _hideDatepicker: function(e) {
                var i, n, s, r, o = this._curInst;
                !o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), n = this._get(o, "duration"), s = function() {
                    t.datepicker._tidyDialog(o)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), n, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, r = this._get(o, "onClose"), r && r.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                    (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(e, i, n) {
                var s = t(e),
                    r = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(r, i + ("M" === n ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
            },
            _gotoToday: function(e) {
                var i, n = t(e),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
            },
            _selectMonthYear: function(e, i, n) {
                var s = t(e),
                    r = this._getInst(s[0]);
                r["selected" + ("M" === n ? "Month" : "Year")] = r["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(s)
            },
            _selectDay: function(e, i, n, s) {
                var r, o = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (r = this._getInst(o[0]), r.selectedDay = r.currentDay = t("a", s).html(), r.selectedMonth = r.currentMonth = i, r.selectedYear = r.currentYear = n, this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
            },
            _clearDate: function(e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function(e, i) {
                var n, s = t(e),
                    r = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(r), r.input && r.input.val(i), this._updateAlternate(r), n = this._get(r, "onSelect"), n ? n.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var i, n, s, r = this._get(e, "altField");
                r && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(r).each(function() {
                    t(this).val(s)
                }))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(e, i, n) {
                if (null == e || null == i) throw "Invalid arguments";
                if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
                var s, r, o, a, l = 0,
                    h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                    u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                    g = -1,
                    m = -1,
                    v = -1,
                    y = -1,
                    b = !1,
                    x = function(t) {
                        var i = s + 1 < e.length && e.charAt(s + 1) === t;
                        return i && s++, i
                    },
                    w = function(t) {
                        var e = x(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1,
                            r = new RegExp("^\\d{" + s + "," + n + "}"),
                            o = i.substring(l).match(r);
                        if (!o) throw "Missing number at position " + l;
                        return l += o[0].length, parseInt(o[0], 10)
                    },
                    _ = function(e, n, s) {
                        var r = -1,
                            o = t.map(x(e) ? s : n, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if (t.each(o, function(t, e) {
                                var n = e[1];
                                return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = e[0], l += n.length, !1) : void 0
                            }), -1 !== r) return r + 1;
                        throw "Unknown name at position " + l
                    },
                    k = function() {
                        if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (s = 0; s < e.length; s++)
                    if (b) "'" !== e.charAt(s) || x("'") ? k() : b = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            v = w("d");
                            break;
                        case "D":
                            _("D", u, d);
                            break;
                        case "o":
                            y = w("o");
                            break;
                        case "m":
                            m = w("m");
                            break;
                        case "M":
                            m = _("M", p, f);
                            break;
                        case "y":
                            g = w("y");
                            break;
                        case "@":
                            a = new Date(w("@")), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                            break;
                        case "!":
                            a = new Date((w("!") - this._ticksTo1970) / 1e4), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                            break;
                        case "'":
                            x("'") ? k() : b = !0;
                            break;
                        default:
                            k()
                    }
                if (l < i.length && (o = i.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), y > -1)
                    for (m = 1, v = y;;) {
                        if (r = this._getDaysInMonth(g, m - 1), r >= v) break;
                        m++, v -= r
                    }
                if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw "Invalid date";
                return a
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    r = (i ? i.dayNames : null) || this._defaults.dayNames,
                    o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    h = function(t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    c = function(t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    u = "",
                    d = !1;
                if (e)
                    for (n = 0; n < t.length; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                        else switch (t.charAt(n)) {
                            case "d":
                                u += h("d", e.getDate(), 2);
                                break;
                            case "D":
                                u += c("D", e.getDay(), s, r);
                                break;
                            case "o":
                                u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                u += h("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                u += c("M", e.getMonth(), o, a);
                                break;
                            case "y":
                                u += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                break;
                            case "@":
                                u += e.getTime();
                                break;
                            case "!":
                                u += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? u += "'" : d = !0;
                                break;
                            default:
                                u += t.charAt(n)
                        }
                return u
            },
            _possibleChars: function(t) {
                var e, i = "",
                    n = !1,
                    s = function(i) {
                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                        return n && e++, n
                    };
                for (e = 0; e < t.length; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : n = !0;
                            break;
                        default:
                            i += t.charAt(e)
                    }
                return i
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        r = s,
                        o = this._getFormatConfig(t);
                    try {
                        r = this.parseDate(i, n, o) || s
                    } catch (a) {
                        n = e ? "" : n
                    }
                    t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), t.currentDay = n ? r.getDate() : 0, t.currentMonth = n ? r.getMonth() : 0, t.currentYear = n ? r.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(e, i, n) {
                var s = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    r = function(i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                        } catch (n) {}
                        for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, r = s.getFullYear(), o = s.getMonth(), a = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
                            switch (h[2] || "d") {
                                case "d":
                                case "D":
                                    a += parseInt(h[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    a += 7 * parseInt(h[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(r, o));
                                    break;
                                case "y":
                                case "Y":
                                    r += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(r, o))
                            }
                            h = l.exec(i)
                        }
                        return new Date(r, o, a)
                    },
                    o = null == i || "" === i ? n : "string" == typeof i ? r(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
                return o = o && "Invalid Date" === o.toString() ? n : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    r = t.selectedYear,
                    o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), s === t.selectedMonth && r === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function(e) {
                var i = this._get(e, "stepMonths"),
                    n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function() {
                    var e = {
                        prev: function() {
                            t.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function() {
                            t.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function() {
                            t.datepicker._hideDatepicker()
                        },
                        today: function() {
                            t.datepicker._gotoToday(n)
                        },
                        selectDay: function() {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function() {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, n, s, r, o, a, l, h, c, u, d, p, f, g, m, v, y, b, x, w, _, k, C, T, S, D, E, A, N, I, P, M, L, H, O, F, z, $, R = new Date,
                    j = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                    B = this._get(t, "isRTL"),
                    W = this._get(t, "showButtonPanel"),
                    q = this._get(t, "hideIfNoPrevNext"),
                    Y = this._get(t, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(t),
                    X = this._get(t, "showCurrentAtPos"),
                    G = this._get(t, "stepMonths"),
                    V = 1 !== U[0] || 1 !== U[1],
                    K = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(t, "min"),
                    Z = this._getMinMaxDate(t, "max"),
                    J = t.drawMonth - X,
                    te = t.drawYear;
                if (0 > J && (J += 12, te--), Z)
                    for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, J, 1)) > e;) J--, 0 > J && (J = 11, te--);
                for (t.drawMonth = J, t.drawYear = te, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, J - G, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, te, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(te, J + G, 1)), this._getFormatConfig(t)) : s, r = this._canAdjustMonth(t, 1, te, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", o = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? K : j, o = Y ? this.formatDate(o, a, this._getFormatConfig(t)) : o, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = W ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), x = "", _ = 0; _ < U[0]; _++) {
                    for (k = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                        if (T = this._daylightSavingAdjust(new Date(te, J, t.selectedDay)), S = " ui-corner-all", D = "", V) {
                            if (D += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                                case 0:
                                    D += " ui-datepicker-group-first", S = " ui-corner-" + (B ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    D += " ui-datepicker-group-last", S = " ui-corner-" + (B ? "left" : "right");
                                    break;
                                default:
                                    D += " ui-datepicker-group-middle", S = ""
                            }
                            D += "'>"
                        }
                        for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === _ ? B ? r : n : "") + (/all|right/.test(S) && 0 === _ ? B ? n : r : "") + this._generateMonthYearHeader(t, J, te, Q, Z, _ > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) A = (w + c) % 7, E += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[A] + "'>" + p[A] + "</span></th>";
                        for (D += E + "</tr></thead><tbody>", N = this._getDaysInMonth(te, J), te === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, N)), I = (this._getFirstDayOfMonth(te, J) - c + 7) % 7, P = Math.ceil((I + N) / 7), M = V && this.maxRows > P ? this.maxRows : P, this.maxRows = M, L = this._daylightSavingAdjust(new Date(te, J, 1 - I)), H = 0; M > H; H++) {
                            for (D += "<tr>", O = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(L) + "</td>" : "", w = 0; 7 > w; w++) F = m ? m.apply(t.input ? t.input[0] : null, [L]) : [!0, ""], z = L.getMonth() !== J, $ = z && !y || !F[0] || Q && Q > L || Z && L > Z, O += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + (L.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === L.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + ($ ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + F[1] + (L.getTime() === K.getTime() ? " " + this._currentClass : "") + (L.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + ($ ? "" : " data-handler='selectDay' data-event='click' data-month='" + L.getMonth() + "' data-year='" + L.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : $ ? "<span class='ui-state-default'>" + L.getDate() + "</span>" : "<a class='ui-state-default" + (L.getTime() === j.getTime() ? " ui-state-highlight" : "") + (L.getTime() === K.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + L.getDate() + "</a>") + "</td>", L.setDate(L.getDate() + 1), L = this._daylightSavingAdjust(L);
                            D += O + "</tr>"
                        }
                        J++, J > 11 && (J = 0, te++), D += "</tbody></table>" + (V ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += D
                    }
                    x += k
                }
                return x += h, t._keyEvent = !1, x
            },
            _generateMonthYearHeader: function(t, e, i, n, s, r, o, a) {
                var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    y = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    x = "";
                if (r || !m) x += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, x += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || c <= s.getMonth()) && (x += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                    x += "</select>"
                }
                if (y || (b += x + (!r && m && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", r || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? d : e
                            }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                    }
                return b += this._get(t, "yearSuffix"), y && (b += (!r && m && v ? "" : "&#xa0;") + x), b += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var n = t.drawYear + ("Y" === i ? e : 0),
                    s = t.drawMonth + ("M" === i ? e : 0),
                    r = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, r)));
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    r = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(t, r)
            },
            _isInRange: function(t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    r = this._getMinMaxDate(t, "max"),
                    o = null,
                    a = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), o = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!r || e.getTime() <= r.getTime()) && (!o || e.getFullYear() >= o) && (!a || e.getFullYear() <= a)
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function(e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.2", t.datepicker
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        var e = 0,
            i = Array.prototype.slice;
        return t.cleanData = function(e) {
            return function(i) {
                var n, s, r;
                for (r = 0; null != (s = i[r]); r++) try {
                    n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
                } catch (o) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, n) {
            var s, r, o, a, l = {},
                h = e.split(".")[0];
            return e = e.split(".")[1], s = h + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
                return !!t.data(e, s)
            }, t[h] = t[h] || {}, r = t[h][e], o = t[h][e] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, t.extend(o, r, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
                return t.isFunction(n) ? void(l[e] = function() {
                    var t = function() {
                            return i.prototype[e].apply(this, arguments)
                        },
                        s = function(t) {
                            return i.prototype[e].apply(this, t)
                        };
                    return function() {
                        var e, i = this._super,
                            r = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = r, e
                    }
                }()) : void(l[e] = n)
            }), o.prototype = t.widget.extend(a, {
                widgetEventPrefix: r ? a.widgetEventPrefix || e : e
            }, l, {
                constructor: o,
                namespace: h,
                widgetName: e,
                widgetFullName: s
            }), r ? (t.each(r._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete r._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var n, s, r = i.call(arguments, 1), o = 0, a = r.length; a > o; o++)
                for (n in r[o]) s = r[o][n], r[o].hasOwnProperty(n) && void 0 !== s && (e[n] = t.isPlainObject(s) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], s) : t.widget.extend({}, s) : s);
            return e
        }, t.widget.bridge = function(e, n) {
            var s = n.prototype.widgetFullName || e;
            t.fn[e] = function(r) {
                var o = "string" == typeof r,
                    a = i.call(arguments, 1),
                    l = this;
                return r = !o && a.length ? t.widget.extend.apply(null, [r].concat(a)) : r, this.each(o ? function() {
                    var i, n = t.data(this, s);
                    return "instance" === r ? (l = n, !1) : n ? t.isFunction(n[r]) && "_" !== r.charAt(0) ? (i = n[r].apply(n, a), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + r + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + r + "'")
                } : function() {
                    var e = t.data(this, s);
                    e ? (e.option(r || {}), e._init && e._init()) : t.data(this, s, new n(r, this))
                }), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(i, n) {
                n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === n && this.destroy()
                    }
                }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var n, s, r, o = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (o = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = o[e] = t.widget.extend({}, this.options[e]), r = 0; r < n.length - 1; r++) s[n[r]] = s[n[r]] || {}, s = s[n[r]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        o[e] = i
                    }
                return this._setOptions(o), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(e, i, n) {
                var s, r = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, o) {
                    function a() {
                        return e || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : void 0
                    }
                    "string" != typeof o && (a.guid = o.guid = o.guid || a.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + r.eventNamespace,
                        c = l[2];
                    c ? s.delegate(c, h, a) : i.bind(h, a)
                })
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, n) {
                var s, r, o = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
                    for (s in r) s in i || (i[s] = r[s]);
                return this.element.trigger(i, n), !(t.isFunction(o) && o.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(n, s, r) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var o, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), o = !t.isEmptyObject(s), s.complete = r, s.delay && n.delay(s.delay), o && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, r) : n.queue(function(i) {
                    t(this)[e](), r && r.call(n[0]), i()
                })
            }
        }), t.widget
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
    }(function(t) {
        var e, i = "ui-button ui-widget ui-state-default ui-corner-all",
            n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            s = function() {
                var e = t(this);
                setTimeout(function() {
                    e.find(":ui-button").button("refresh")
                }, 1)
            },
            r = function(e) {
                var i = e.name,
                    n = e.form,
                    s = t([]);
                return i && (i = i.replace(/'/g, "\\'"), s = n ? t(n).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function() {
                    return !this.form
                })), s
            };
        return t.widget("ui.button", {
            version: "1.11.2",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var n = this,
                    o = this.options,
                    a = "checkbox" === this.type || "radio" === this.type,
                    l = a ? "" : "ui-state-active";
                null === o.label && (o.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    o.disabled || this === e && t(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    o.disabled || t(this).removeClass(l)
                }).bind("click" + this.eventNamespace, function(t) {
                    o.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                }), this._on({
                    focus: function() {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function() {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                }), a && this.element.bind("change" + this.eventNamespace, function() {
                    n.refresh()
                }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    return o.disabled ? !1 : void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (o.disabled) return !1;
                    t(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
                    var e = n.element[0];
                    r(e).not(e).map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return o.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, void n.document.one("mouseup", function() {
                        e = null
                    }))
                }).bind("mouseup" + this.eventNamespace, function() {
                    return o.disabled ? !1 : void t(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(e) {
                    return o.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    t(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                })), this._setOption("disabled", o.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var t, e, i;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(t, e) {
                return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && this.buttonElement.removeClass("checkbox" === this.type || "radio" === this.type ? "ui-state-focus" : "ui-state-focus ui-state-active"))) : void this._resetButton()
            },
            refresh: function() {
                var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? r(this.element[0]).each(function() {
                    t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var e = this.buttonElement.removeClass(n),
                    i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                    s = this.options.icons,
                    r = s.primary && s.secondary,
                    o = [];
                s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (r ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(r ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
            }
        }), t.widget("ui.buttonset", {
            version: "1.11.2",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(t, e) {
                "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
            },
            refresh: function() {
                var e = "rtl" === this.element.css("direction"),
                    i = this.element.find(this.options.items),
                    n = i.filter(":ui-button");
                i.not(":ui-button").button(), n.button("refresh"), this.buttons = i.map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        }), t.ui.button
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./widget"], t) : t(jQuery)
    }(function(t) {
        var e = !1;
        return t(document).mouseup(function() {
            e = !1
        }), t.widget("ui.mouse", {
            version: "1.11.2",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function(i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(i) {
                if (!e) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var n = this,
                        s = 1 === i.which,
                        r = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                    return s && !r && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return n._mouseUp(t)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(i) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), e = !1, !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }),
    
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        return function() {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
            }

            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }

            function n(e) {
                var i = e[0];
                return 9 === i.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                }
            }
            t.ui = t.ui || {};
            var s, r, o = Math.max,
                a = Math.abs,
                l = Math.round,
                h = /left|center|right/,
                c = /top|center|bottom/,
                u = /[\+\-]\d+(\.[\d]+)?%?/,
                d = /^\w+/,
                p = /%$/,
                f = t.fn.position;
            t.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== s) return s;
                        var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            r = n.children()[0];
                        return t("body").append(n), e = r.offsetWidth, n.css("overflow", "scroll"), i = r.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                    },
                    getScrollInfo: function(e) {
                        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                            n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                            s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                            r = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                        return {
                            width: r ? t.position.scrollbarWidth() : 0,
                            height: s ? t.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(e) {
                        var i = t(e || window),
                            n = t.isWindow(i[0]),
                            s = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: n,
                            isDocument: s,
                            offset: i.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: n || s ? i.width() : i.outerWidth(),
                            height: n || s ? i.height() : i.outerHeight()
                        }
                    }
                }, t.fn.position = function(s) {
                    if (!s || !s.of) return f.apply(this, arguments);
                    s = t.extend({}, s);
                    var p, g, m, v, y, b, x = t(s.of),
                        w = t.position.getWithinInfo(s.within),
                        _ = t.position.getScrollInfo(w),
                        k = (s.collision || "flip").split(" "),
                        C = {};
                    return b = n(x), x[0].preventDefault && (s.at = "left top"), g = b.width, m = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function() {
                        var t, e, i = (s[this] || "").split(" ");
                        1 === i.length && (i = h.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = h.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), e = u.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                    }), 1 === k.length && (k[1] = k[0]), "right" === s.at[0] ? y.left += g : "center" === s.at[0] && (y.left += g / 2), "bottom" === s.at[1] ? y.top += m : "center" === s.at[1] && (y.top += m / 2), p = e(C.at, g, m), y.left += p[0], y.top += p[1], this.each(function() {
                        var n, h, c = t(this),
                            u = c.outerWidth(),
                            d = c.outerHeight(),
                            f = i(this, "marginLeft"),
                            b = i(this, "marginTop"),
                            T = u + f + i(this, "marginRight") + _.width,
                            S = d + b + i(this, "marginBottom") + _.height,
                            D = t.extend({}, y),
                            E = e(C.my, c.outerWidth(), c.outerHeight());
                        "right" === s.my[0] ? D.left -= u : "center" === s.my[0] && (D.left -= u / 2), "bottom" === s.my[1] ? D.top -= d : "center" === s.my[1] && (D.top -= d / 2), D.left += E[0], D.top += E[1], r || (D.left = l(D.left), D.top = l(D.top)), n = {
                            marginLeft: f,
                            marginTop: b
                        }, t.each(["left", "top"], function(e, i) {
                            t.ui.position[k[e]] && t.ui.position[k[e]][i](D, {
                                targetWidth: g,
                                targetHeight: m,
                                elemWidth: u,
                                elemHeight: d,
                                collisionPosition: n,
                                collisionWidth: T,
                                collisionHeight: S,
                                offset: [p[0] + E[0], p[1] + E[1]],
                                my: s.my,
                                at: s.at,
                                within: w,
                                elem: c
                            })
                        }), s.using && (h = function(t) {
                            var e = v.left - D.left,
                                i = e + g - u,
                                n = v.top - D.top,
                                r = n + m - d,
                                l = {
                                    target: {
                                        element: x,
                                        left: v.left,
                                        top: v.top,
                                        width: g,
                                        height: m
                                    },
                                    element: {
                                        element: c,
                                        left: D.left,
                                        top: D.top,
                                        width: u,
                                        height: d
                                    },
                                    horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
                                };
                            u > g && a(e + i) < g && (l.horizontal = "center"), d > m && a(n + r) < m && (l.vertical = "middle"), l.important = o(a(e), a(i)) > o(a(n), a(r)) ? "horizontal" : "vertical", s.using.call(this, t, l)
                        }), c.offset(t.extend(D, {
                            using: h
                        }))
                    })
                }, t.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i, n = e.within,
                                s = n.isWindow ? n.scrollLeft : n.offset.left,
                                r = n.width,
                                a = t.left - e.collisionPosition.marginLeft,
                                l = s - a,
                                h = a + e.collisionWidth - r - s;
                            e.collisionWidth > r ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left)
                        },
                        top: function(t, e) {
                            var i, n = e.within,
                                s = n.isWindow ? n.scrollTop : n.offset.top,
                                r = e.within.height,
                                a = t.top - e.collisionPosition.marginTop,
                                l = s - a,
                                h = a + e.collisionHeight - r - s;
                            e.collisionHeight > r ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i, n, s = e.within,
                                r = s.offset.left + s.scrollLeft,
                                o = s.width,
                                l = s.isWindow ? s.scrollLeft : s.offset.left,
                                h = t.left - e.collisionPosition.marginLeft,
                                c = h - l,
                                u = h + e.collisionWidth - o - l,
                                d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                f = -2 * e.offset[0];
                            0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - r, (0 > i || i < a(c)) && (t.left += d + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || a(n) < u) && (t.left += d + p + f))
                        },
                        top: function(t, e) {
                            var i, n, s = e.within,
                                r = s.offset.top + s.scrollTop,
                                o = s.height,
                                l = s.isWindow ? s.scrollTop : s.offset.top,
                                h = t.top - e.collisionPosition.marginTop,
                                c = h - l,
                                u = h + e.collisionHeight - o - l,
                                d = "top" === e.my[1],
                                p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                g = -2 * e.offset[1];
                            0 > c ? (n = t.top + p + f + g + e.collisionHeight - o - r, t.top + p + f + g > c && (0 > n || n < a(c)) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || a(i) < u) && (t.top += p + f + g))
                        }
                    },
                    flipfit: {
                        left: function() {
                            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var e, i, n, s, o, a = document.getElementsByTagName("body")[0],
                        l = document.createElement("div");
                    e = document.createElement(a ? "div" : "body"), n = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, a && t.extend(n, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (o in n) e.style[o] = n[o];
                    e.appendChild(l), i = a || document.documentElement, i.insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", s = t(l).offset().left, r = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
                }()
        }(), t.ui.position
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.resizable", t.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(t) {
                return parseInt(t, 10) || 0
            },
            _isNumber: function(t) {
                return !isNaN(parseInt(t, 10))
            },
            _hasScroll: function(e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            _create: function() {
                var e, i, n, s, r, o = this,
                    a = this.options;
                if (this.element.addClass("ui-resizable"), t.extend(this, {
                        _aspectRatio: !!a.aspectRatio,
                        aspectRatio: a.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) n = t.trim(e[i]), r = "ui-resizable-" + n, s = t("<div class='ui-resizable-handle " + r + "'></div>"), s.css({
                        zIndex: a.zIndex
                    }), "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(s);
                this._renderAxis = function(e) {
                    var i, n, s, r;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), r = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, r), this._proportionallyResize()), t(this.handles[i]).length
                }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    o.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = s && s[1] ? s[1] : "se")
                }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    a.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
                }).mouseleave(function() {
                    a.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var e, i = function(e) {
                    t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function(e) {
                var i, n, s = !1;
                for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function(e) {
                var i, n, s, r = this.options,
                    o = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), r.containment && (i += t(r.containment).scrollLeft() || 0, n += t(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: n
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.originalSize = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.sizeDiff = {
                    width: o.outerWidth() - o.width(),
                    height: o.outerHeight() - o.height()
                }, this.originalPosition = {
                    left: i,
                    top: n
                }, this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), o.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function(e) {
                var i, n, s = this.originalMousePosition,
                    r = this.axis,
                    o = e.pageX - s.left || 0,
                    a = e.pageY - s.top || 0,
                    l = this._change[r];
                return this._updatePrevProperties(), l ? (i = l.apply(this, [e, o, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var i, n, s, r, o, a, l, h = this.options,
                    c = this;
                return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, r = n ? 0 : c.sizeDiff.width, o = {
                    width: c.helper.width() - r,
                    height: c.helper.height() - s
                }, a = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(o, {
                    top: l,
                    left: a
                })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, n, s, r, o = this.options;
                r = {
                    minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                    maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                    minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                    maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, n = r.minWidth / this.aspectRatio, i = r.maxHeight * this.aspectRatio, s = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), n > r.minHeight && (r.minHeight = n), i < r.maxWidth && (r.maxWidth = i), s < r.maxHeight && (r.maxHeight = s)), this._vBoundaries = r
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    r = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    o = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.position.top + this.size.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return r && (t.width = e.minWidth), o && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), r && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), o && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(n[e], 10) || 0, i[e] += parseInt(s[e], 10) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function(t, e) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return {
                        left: n.left + e,
                        width: i.width - e
                    }
                },
                n: function(t, e, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return {
                        top: s.top + i,
                        height: n.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function(e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function(e) {
                var i = t(this).resizable("instance"),
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    r = s.length && /textarea/i.test(s[0].nodeName),
                    o = r && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                    a = r ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - a,
                        height: i.size.height - o
                    },
                    h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, c && h ? {
                    top: c,
                    left: h
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function() {
                        var n = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function() {
                var e, i, n, s, r, o, a, l = t(this).resizable("instance"),
                    h = l.options,
                    c = l.element,
                    u = h.containment,
                    d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {
                    left: 0,
                    top: 0
                }, l.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                    i[t] = l._num(e.css("padding" + n))
                }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                }, n = l.containerOffset, s = l.containerSize.height, r = l.containerSize.width, o = l._hasScroll(d, "left") ? d.scrollWidth : r, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                    element: d,
                    left: n.left,
                    top: n.top,
                    width: o,
                    height: a
                }))
            },
            resize: function(e) {
                var i, n, s, r, o = t(this).resizable("instance"),
                    a = o.options,
                    l = o.containerOffset,
                    h = o.position,
                    c = o._aspectRatio || e.shiftKey,
                    u = {
                        top: 0,
                        left: 0
                    },
                    d = o.containerElement,
                    p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (o._helper ? l.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - l.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = a.helper ? l.left : 0), h.top < (o._helper ? l.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - l.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? l.top : 0), s = o.containerElement.get(0) === o.element.parent().get(0), r = /relative|absolute/.test(o.containerElement.css("position")), s && r ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - u.left : o.offset.left - l.left)), n = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - u.top : o.offset.top - l.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio, p = !1)), n + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - n, c && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
            },
            stop: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.containerOffset,
                    s = e.containerPosition,
                    r = e.containerElement,
                    o = t(e.helper),
                    a = o.offset(),
                    l = o.outerWidth() - e.sizeDiff.width,
                    h = o.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(r.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: h
                }), e._helper && !i.animate && /static/.test(r.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: h
                })
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = function(e) {
                        t(e).each(function() {
                            var e = t(this);
                            e.data("ui-resizable-alsoresize", {
                                width: parseInt(e.width(), 10),
                                height: parseInt(e.height(), 10),
                                left: parseInt(e.css("left"), 10),
                                top: parseInt(e.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                    n(t)
                })
            },
            resize: function(e, i) {
                var n = t(this).resizable("instance"),
                    s = n.options,
                    r = n.originalSize,
                    o = n.originalPosition,
                    a = {
                        height: n.size.height - r.height || 0,
                        width: n.size.width - r.width || 0,
                        top: n.position.top - o.top || 0,
                        left: n.position.left - o.left || 0
                    },
                    l = function(e, n) {
                        t(e).each(function() {
                            var e = t(this),
                                s = t(this).data("ui-resizable-alsoresize"),
                                r = {},
                                o = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            t.each(o, function(t, e) {
                                var i = (s[e] || 0) + (a[e] || 0);
                                i && i >= 0 && (r[e] = i || null)
                            }), e.css(r)
                        })
                    };
                "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function(t, e) {
                    l(t, e)
                })
            },
            stop: function() {
                t(this).removeData("resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: n.height,
                    width: n.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
            },
            resize: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var e, i = t(this).resizable("instance"),
                    n = i.options,
                    s = i.size,
                    r = i.originalSize,
                    o = i.originalPosition,
                    a = i.axis,
                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    h = l[0] || 1,
                    c = l[1] || 1,
                    u = Math.round((s.width - r.width) / h) * h,
                    d = Math.round((s.height - r.height) / c) * c,
                    p = r.width + u,
                    f = r.height + d,
                    g = n.maxWidth && n.maxWidth < p,
                    m = n.maxHeight && n.maxHeight < f,
                    v = n.minWidth && n.minWidth > p,
                    y = n.minHeight && n.minHeight > f;
                n.grid = l, v && (p += h), y && (f += c), g && (p -= h), m && (f -= c), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = o.top - d) : (f = c - e.height, i.size.height = f, i.position.top = o.top + r.height - f), p - h > 0 ? (i.size.width = p, i.position.left = o.left - u) : (p = c - e.height, i.size.width = p, i.position.left = o.left + r.width - p))
            }
        }), t.ui.resizable
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./button", "./draggable", "./mouse", "./position", "./resizable"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.dialog", {
            version: "1.11.2",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "Close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(e) {
                        var i = t(this).css(e).offset().top;
                        0 > i && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
            },
            _destroy: function() {
                var t, e = this.originalPosition;
                this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function(e) {
                var i, n = this;
                if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
                    if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                        i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                    } catch (s) {}
                    this._hide(this.uiDialog, this.options.hide, function() {
                        n._trigger("close", e)
                    })
                }
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(e, i) {
                var n = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +t(this).css("z-index")
                    }).get(),
                    r = Math.max.apply(null, s);
                return r >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", r + 1), n = !0), n && !i && this._trigger("focus", e), n
            },
            open: function() {
                var e = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    e._focusTabbable(), e._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
            },
            _keepFocus: function(e) {
                function i() {
                    var e = this.document[0].activeElement,
                        i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                    i || this._focusTabbable()
                }
                e.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function(e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                n = i.filter(":first"),
                                s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                s.focus()
                            }), e.preventDefault()) : (this._delay(function() {
                                n.focus()
                            }), e.preventDefault())
                        }
                    },
                    mousedown: function(t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var e;
                this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                    mousedown: function(e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(), this.close(t)
                    }
                }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                    "aria-labelledby": e.attr("id")
                })
            },
            _title: function(t) {
                this.options.title || t.html("&#160;"), t.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function() {
                var e = this,
                    i = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, n) {
                    var s, r;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n, n = t.extend({
                        type: "button"
                    }, n), s = n.click, n.click = function() {
                        s.apply(e.element[0], arguments)
                    }, r = {
                        icons: n.icons,
                        text: n.showText
                    }, delete n.icons, delete n.showText, t("<button></button>", n).button(r).appendTo(e.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(n, s) {
                        t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                    },
                    drag: function(t, n) {
                        i._trigger("drag", t, e(n))
                    },
                    stop: function(s, r) {
                        var o = r.offset.left - i.document.scrollLeft(),
                            a = r.offset.top - i.document.scrollTop();
                        n.position = {
                            my: "left top",
                            at: "left" + (o >= 0 ? "+" : "") + o + " top" + (a >= 0 ? "+" : "") + a,
                            of: i.window
                        }, t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(r))
                    }
                })
            },
            _makeResizable: function() {
                function e(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                var i = this,
                    n = this.options,
                    s = n.resizable,
                    r = this.uiDialog.css("position"),
                    o = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: this._minHeight(),
                    handles: o,
                    start: function(n, s) {
                        t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                    },
                    resize: function(t, n) {
                        i._trigger("resize", t, e(n))
                    },
                    stop: function(s, r) {
                        var o = i.uiDialog.offset(),
                            a = o.left - i.document.scrollLeft(),
                            l = o.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(r))
                    }
                }).css("position", r)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(e) {
                        this._makeFocusTarget(), this._focusedElement = t(e.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var e = this._trackingInstances(),
                    i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
            },
            _trackingInstances: function() {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [], this.document.data("ui-dialog-instances", t)), t
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function() {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
            },
            _setOptions: function(e) {
                var i = this,
                    n = !1,
                    s = {};
                t.each(e, function(t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function(t, e) {
                var i, n, s = this.uiDialog;
                "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                    label: "" + e
                }), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var e = t(this);
                    return t("<div>").css({
                        position: "absolute",
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }).appendTo(e.parent()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(e) {
                return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var e = !0;
                    this._delay(function() {
                        e = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function(t) {
                            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                }
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.sortable", t.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(t, e, i) {
                return t >= e && e + i > t
            },
            _isFloating: function(t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function() {
                var t = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(e, i) {
                var n = null,
                    s = !1,
                    r = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                    return t.data(this, r.widgetName + "-item") === r ? (n = t(this), !1) : void 0
                }), t.data(e.target, r.widgetName + "-item") === r && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
                    this === e.target && (s = !0)
                }), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
            },
            _mouseStart: function(e, i, n) {
                var s, r, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, t.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(r)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var i, n, s, r, o = this.options,
                    a = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)), e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))), a !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i], s = n.item[0], r = this._intersectsWithPointer(n), r && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === r ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
                        if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset(),
                            r = this.options.axis,
                            o = {};
                        r && "x" !== r || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                            n._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, t(i).each(function() {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, i.each(function() {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    r = t.left,
                    o = r + t.width,
                    a = t.top,
                    l = a + t.height,
                    h = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || n + h > a && l > n + h,
                    d = "y" === this.options.axis || e + c > r && o > e + c,
                    p = u && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : r < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function(t) {
                var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    n = e && i,
                    s = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return n ? this.floating ? r && "right" === r || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                function i() {
                    a.push(this)
                }
                var n, s, r, o, a = [],
                    l = [],
                    h = this._connectWith();
                if (h && e)
                    for (n = h.length - 1; n >= 0; n--)
                        for (r = t(h[n]), s = r.length - 1; s >= 0; s--) o = t.data(r[s], this.widgetFullName), o && o !== this && !o.options.disabled && l.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                return t(a)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var i, n, s, r, o, a, l, h, c = this.items,
                    u = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (s = t(d[i]), n = s.length - 1; n >= 0; n--) r = t.data(s[n], this.widgetFullName), r && r !== this && !r.options.disabled && (u.push([t.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
                            item: this.currentItem
                        }) : t(r.options.items, r.element), r]), this.containers.push(r));
                for (i = u.length - 1; i >= 0; i--)
                    for (o = u[i][1], a = u[i][0], n = 0, h = a.length; h > n; n++) l = t(a[n]), l.data(this.widgetName + "-item", o), c.push({
                        item: l,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(e) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, s, r;
                for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), r = s.offset(), n.left = r.left, n.top = r.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) r = this.containers[i].element.offset(), this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                e = e || this;
                var i, n = e.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function() {
                        var n = e.currentItem[0].nodeName.toLowerCase(),
                            s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === n ? e.currentItem.children().each(function() {
                            t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
                        }) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                    },
                    update: function(t, s) {
                        (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _contactContainers: function(e) {
                var i, n, s, r, o, a, l, h, c, u, d = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                            d = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (s = 1e4, r = null, c = d.floating || this._isFloating(this.currentItem), o = c ? "left" : "top", a = c ? "width" : "height", u = c ? "clientX" : "clientY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[o], h = !1, e[u] - l > this.items[n][a] / 2 && (h = !0), Math.abs(e[u] - l) < s && (s = Math.abs(e[u] - l), r = this.items[n], this.direction = h ? "up" : "down"));
                        if (!r && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    r = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function(e) {
                var i, n, s = this.options,
                    r = e.pageX,
                    o = e.pageY,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((r - this.originalPageX) / s.grid[0]) * s.grid[0], r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(t, e) {
                function i(t, e, i) {
                    return function(n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && s.push(function(t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (s.push(function(t) {
                        this._trigger("remove", t, this._uiHash())
                    }), s.push(function(t) {
                        return function(e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), s.push(function(t) {
                        return function(e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.tabs", {
            version: "1.11.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function() {
                var t = /#.*$/;
                return function(e) {
                    var i, n;
                    e = e.cloneNode(!1), i = e.href.replace(t, ""), n = location.href.replace(t, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (s) {}
                    try {
                        n = decodeURIComponent(n)
                    } catch (s) {}
                    return e.hash.length > 1 && i === n
                }
            }(),
            _create: function() {
                var e = this,
                    i = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var e = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1);
                return null === e && (n && this.tabs.each(function(i, s) {
                    return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(this.document[0].activeElement).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function(e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(e, i) {
                function n() {
                    return e > s && (e = 0), 0 > e && (e = s), e
                }
                for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                    return i.index(t)
                }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return t("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = t(), this.anchors.each(function(i, n) {
                    var s, r, o, a = t(n).uniqueId().attr("id"),
                        l = t(n).closest("li"),
                        h = l.attr("aria-controls");
                    e._isLocal(n) ? (s = n.hash, o = s.substring(1), r = e.element.find(e._sanitizeSelector(s))) : (o = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + o, r = e.element.find(s), r.length || (r = e._createPanel(o), r.insertAfter(e.panels[i - 1] || e.tablist)), r.attr("aria-live", "polite")), r.length && (e.panels = e.panels.add(r)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": o,
                        "aria-labelledby": a
                    }), r.attr("aria-labelledby", a)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(e) {
                t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = e
            },
            _setupEvents: function(e) {
                var i = {};
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(e) {
                var i, n = this.element.parent();
                "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var e = t(this),
                        n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function() {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    r = s.closest("li"),
                    o = r[0] === n[0],
                    a = o && i.collapsible,
                    l = a ? t() : this._getPanelForTab(r),
                    h = n.length ? this._getPanelForTab(n) : t(),
                    c = {
                        oldTab: n,
                        oldPanel: h,
                        newTab: a ? t() : r,
                        newPanel: l
                    };
                e.preventDefault(), r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = a ? !1 : this.tabs.index(r), this.active = o ? t() : r, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(r), e), this._toggle(e, c))
            },
            _toggle: function(e, i) {
                function n() {
                    r.running = !1, r._trigger("activate", e, i)
                }

                function s() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && r.options.show ? r._show(o, r.options.show, n) : (o.show(), n())
                }
                var r = this,
                    o = i.newPanel,
                    a = i.oldPanel;
                this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), o.length && a.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return e === !1 ? t() : this.tabs.eq(e)
            },
            _getIndex: function(t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(e) {
                var i = this.options.disabled;
                i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function(t, i) {
                    return i !== e ? i : null
                })), this._setupDisabled(i))
            },
            disable: function(e) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setupDisabled(i)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var n = this,
                    s = this.tabs.eq(e),
                    r = s.find(".ui-tabs-anchor"),
                    o = this._getPanelForTab(s),
                    a = {
                        tab: s,
                        panel: o
                    };
                this._isLocal(r[0]) || (this.xhr = t.ajax(this._ajaxSettings(r, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function(t) {
                    setTimeout(function() {
                        o.html(t), n._trigger("load", i, a)
                    }, 1)
                }).complete(function(t, e) {
                    setTimeout(function() {
                        "abort" === e && n.panels.stop(!1, !0), s.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(e, i, n) {
                var s = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function(e, r) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: r
                        }, n))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        })
    }),
    function() {
        window.ActiveAdmin = {}
    }.call(this),
    function() {
        $(document).on("ready page:load", function() {
            return $(".batch_actions_selector li a").click(function(t) {
                var e;
                return t.stopPropagation(), t.preventDefault(), (e = $(this).data("confirm")) ? ActiveAdmin.modal_dialog(e, $(this).data("inputs"), function(t) {
                    return function(e) {
                        return $(t).trigger("confirm:complete", e)
                    }
                }(this)) : $(this).trigger("confirm:complete")
            }), $(".batch_actions_selector li a").on("confirm:complete", function(t, e) {
                var i;
                return (i = JSON.stringify(e)) ? $("#batch_action_inputs").val(i) : $("#batch_action_inputs").attr("disabled", "disabled"), $("#batch_action").val($(this).data("action")), $("#collection_selection").submit()
            }), $(".batch_actions_selector").length && $(":checkbox.toggle_all").length ? ($(".paginated_collection table.index_table").length ? $(".paginated_collection table.index_table").tableCheckboxToggler() : $(".paginated_collection").checkboxToggler(), $(document).on("change", ".paginated_collection :checkbox", function() {
                return $(".batch_actions_selector").each($(".paginated_collection :checkbox:checked").length ? function() {
                    return $(this).aaDropdownMenu("enable")
                } : function() {
                    return $(this).aaDropdownMenu("disable")
                })
            })) : void 0
        })
    }.call(this),
    function() {
        ActiveAdmin.CheckboxToggler = function() {
            function t(t, e) {
                var i;
                this.options = t, this.container = e, i = {}, this.options = $.extend(i, this.options), this._init(), this._bind()
            }
            return t.prototype._init = function() {
                if (!this.container) throw new Error("Container element not found");
                if (this.$container = $(this.container), !this.$container.find(".toggle_all").length) throw new Error('"toggle all" checkbox not found');
                return this.toggle_all_checkbox = this.$container.find(".toggle_all"), this.checkboxes = this.$container.find(":checkbox").not(this.toggle_all_checkbox)
            }, t.prototype._bind = function() {
                return this.checkboxes.change(function(t) {
                    return function(e) {
                        return t._didChangeCheckbox(e.target)
                    }
                }(this)), this.toggle_all_checkbox.change(function(t) {
                    return function() {
                        return t._didChangeToggleAllCheckbox()
                    }
                }(this))
            }, t.prototype._didChangeCheckbox = function() {
                switch (this.checkboxes.filter(":checked").length) {
                    case this.checkboxes.length - 1:
                        return this.toggle_all_checkbox.prop({
                            checked: null
                        });
                    case this.checkboxes.length:
                        return this.toggle_all_checkbox.prop({
                            checked: !0
                        })
                }
            }, t.prototype._didChangeToggleAllCheckbox = function() {
                var t;
                return t = this.toggle_all_checkbox.prop("checked") ? !0 : null, this.checkboxes.each(function(e) {
                    return function(i, n) {
                        return $(n).prop({
                            checked: t
                        }), e._didChangeCheckbox(n)
                    }
                }(this))
            }, t
        }(), $.widget.bridge("checkboxToggler", ActiveAdmin.CheckboxToggler)
    }.call(this),
  
    function() {
        var t;
        ActiveAdmin.flash = t = function() {
            function t(t, e, i) {
                this.message = t, this.type = null != e ? e : "notice", this.reference = jQuery("<div>").addClass("flash flash_" + this.type).text(this.message), jQuery(".flashes").append(this.reference), null != i && this.close_after(i)
            }
            return t.error = function(t, e) {
                return new this(t, "error", e)
            }, t.notice = function(t, e) {
                return new this(t, "notice", e)
            }, t.prototype.reference = function() {
                return this.reference
            }, t.prototype.close_after = function(t) {
                return setTimeout(function(t) {
                    return function() {
                        return t.close()
                    }
                }(this), 1e3 * t)
            }, t.prototype.close = function() {
                return this.reference.remove()
            }, t
        }()
    }.call(this),
    // function() {
    //     var t, e;
    //     $(function() {
    //         return $(document).on("click", "a.button.has_many_remove", function(t) {
    //             var i, n;
    //             return t.preventDefault(), i = $(this).closest(".has_many_container"), n = $(this).closest("fieldset"), e(i), i.trigger("has_many_remove:before", [n, i]), n.remove(), i.trigger("has_many_remove:after", [n, i])
    //         }), $(document).on("click", "a.button.has_many_add", function(t) {
    //             var i, n, s, r, o, a;
    //             return t.preventDefault(), o = $(this).closest(".has_many_container"), o.trigger(i = $.Event("has_many_add:before"), [o]), i.isDefaultPrevented() ? void 0 : (r = o.data("has_many_index") || o.children("fieldset").length - 1, o.data({
    //                 has_many_index: ++r
    //             }), a = new RegExp($(this).data("placeholder"), "g"), s = $(this).data("html").replace(a, r), n = $(s).insertBefore(this), e(o), o.trigger("has_many_add:after", [n, o]))
    //         }), $(document).on("change", '.has_many_container[data-sortable] :input[name$="[_destroy]"]', function() {
    //             return e($(this).closest(".has_many"))
    //         }), t(), $(document).on("has_many_add:after", ".has_many_container", t)
    //     }), t = function() {
    //         var t;
    //         return t = $(".has_many_container[data-sortable]:not(.ui-sortable)"), t.sortable({
    //             items: "> fieldset",
    //             handle: "> ol > .handle",
    //             stop: e
    //         }), t.each(e)
    //     }, e = function(t) {
    //         var e, i;
    //         return t = t instanceof jQuery ? t : $(this), e = t.data("sortable"), i = parseInt(t.data("sortable-start") || 0, 10), t.children("fieldset").each(function() {
    //             var t, n;
    //             return t = $(this).find("> ol > .input > :input[name$='[_destroy]']"), n = $(this).find("> ol > .input > :input[name$='[" + e + "]']"), n.length ? n.val(t.is(":checked") ? "" : i++) : void 0
    //         })
    //     }
    // }.call(this),
    function() {
        ActiveAdmin.modal_dialog = function(t, e, i) {
            var n, s, r, o, a, l, h, c, u, d;
            s = '<form id="dialog_confirm" title="' + t + '"><ul>';
            for (o in e) {
                if (c = e[o], /^(datepicker|checkbox|text)$/.test(c)) d = "input";
                else if ("textarea" === c) d = "textarea";
                else {
                    if (!$.isArray(c)) throw new Error("Unsupported input type: {" + o + ": " + c + "}");
                    l = ["select", "option", c, ""], d = l[0], n = l[1], a = l[2], c = l[3]
                }
                r = "datepicker" === c ? c : "", s += "<li>\n<label>" + (o.charAt(0).toUpperCase() + o.slice(1)) + "</label>\n<" + d + ' name="' + o + '" class="' + r + '" type="' + c + '">' + (a ? function() {
                    var t, e, i;
                    for (i = [], t = 0, e = a.length; e > t; t++) u = a[t], i.push($.isArray(u) ? "<" + n + " value=" + u[1] + ">" + u[0] + "</" + n + ">" : "<" + n + ">" + u + "</" + n + ">");
                    return i
                }().join("") : "") + ("</" + d + ">") + "</li>", h = [], d = h[0], n = h[1], a = h[2], c = h[3], r = h[4]
            }
            return s += "</ul></form>", $(s).appendTo("body").dialog({
                modal: !0,
                dialogClass: "active_admin_dialog",
                buttons: {
                    OK: function() {
                        return i($(this).serializeObject()), $(this).dialog("close")
                    },
                    Cancel: function() {
                        return $(this).dialog("close").remove()
                    }
                }
            })
        }
    }.call(this),
   
    function() {
        ActiveAdmin.Popover = function() {
            function t(t, e) {
                var i;
                this.options = t, this.element = e, this.$element = $(this.element), i = {
                    fadeInDuration: 20,
                    fadeOutDuration: 100,
                    autoOpen: !0,
                    pageWrapperElement: "#wrapper",
                    onClickActionItemCallback: null
                }, this.options = $.extend(i, options), this.isOpen = !1, (this.$popover = $(this.$element.attr("href"))).length || (this.$popover = this.$element.next(".popover")), this._buildPopover(), this._bind()
            }
            return t.prototype.open = function() {
                return this.isOpen = !0, this.$popover.fadeIn(this.options.fadeInDuration), this._positionPopover(), this._positionNipple(), this
            }, t.prototype.close = function() {
                return this.isOpen = !1, this.$popover.fadeOut(this.options.fadeOutDuration), this
            }, t.prototype.destroy = function() {
                return this.$element.removeData("popover"), this.$element.unbind(), this.$element = null, this
            }, t.prototype._buildPopover = function() {
                return this.$nipple = $('<div class="popover_nipple"></div>'), this.$popover.prepend(this.$nipple), this.$popover.hide(), this.$popover.addClass("popover")
            }, t.prototype._bind = function() {
                return $(this.options.pageWrapperElement).click(function(t) {
                    return function() {
                        return t.isOpen ? t.close() : void 0
                    }
                }(this)), this.options.autoOpen ? this.$element.click(function(t) {
                    return function(e) {
                        return e.stopPropagation(), t.isOpen ? t.close() : t.open()
                    }
                }(this)) : void 0
            }, t.prototype._positionPopover = function() {
                var t, e;
                return t = this.$element.offset().left + this.$element.outerWidth() / 2, e = this.$popover.outerWidth() / 2, this.$popover.css("left", t - e)
            }, t.prototype._positionNipple = function() {
                return this.$popover.css("top", this.$element.offset().top + this.$element.outerHeight() + 10), this.$nipple.css("left", this.$popover.outerWidth() / 2 - this.$nipple.outerWidth() / 2)
            }, t
        }(), $.widget.bridge("popover", ActiveAdmin.Popover)
    }.call(this),
    function() {
        var t = function(t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            },
            e = {}.hasOwnProperty;
        ActiveAdmin.TableCheckboxToggler = function(e) {
            function i() {
                return i.__super__.constructor.apply(this, arguments)
            }
            return t(i, e), i.prototype._init = function() {
                return i.__super__._init.apply(this, arguments)
            }, i.prototype._bind = function() {
                return i.__super__._bind.apply(this, arguments), this.$container.find("tbody td").click(function(t) {
                    return function(e) {
                        return "checkbox" !== e.target.type ? t._didClickCell(e.target) : void 0
                    }
                }(this))
            }, i.prototype._didChangeCheckbox = function(t) {
                var e;
                return i.__super__._didChangeCheckbox.apply(this, arguments), e = $(t).parents("tr"), t.checked ? e.addClass("selected") : e.removeClass("selected")
            }, i.prototype._didClickCell = function(t) {
                return $(t).parent("tr").find(":checkbox").click()
            }, i
        }(ActiveAdmin.CheckboxToggler), $.widget.bridge("tableCheckboxToggler", ActiveAdmin.TableCheckboxToggler)
    }.call(this),
    function() {
        $.ui.dialog.prototype._focusTabbable = function() {
            return this.uiDialog.focus()
        }
    }.call(this),
    function() {
        $.fn.serializeObject = function() {
            var t, e, i, n, s;
            for (n = {}, s = this.serializeArray(), t = 0, e = s.length; e > t; t++) i = s[t], n[i.name] = i.value;
            return n
        }
    }.call(this),
   
    function(t) {
        "undefined" == typeof t.fn.each2 && t.extend(t.fn, {
            each2: function(e) {
                for (var i = t([0]), n = -1, s = this.length; ++n < s && (i.context = i[0] = this[n]) && e.call(i[0], n, i) !== !1;);
                return this
            }
        })
    }(jQuery),
    function(t, e) {
        "use strict";

        function i(e) {
            var i = t(document.createTextNode(""));
            e.before(i), i.before(e), i.remove()
        }

        function n(t) {
            function e(t) {
                return R[t] || t
            }
            return t.replace(/[^\u0000-\u007E]/g, e)
        }

        function s(t, e) {
            for (var i = 0, n = e.length; n > i; i += 1)
                if (o(t, e[i])) return i;
            return -1
        }

        function r() {
            var e = t($);
            e.appendTo(document.body);
            var i = {
                width: e.width() - e[0].clientWidth,
                height: e.height() - e[0].clientHeight
            };
            return e.remove(), i
        }

        function o(t, i) {
            return t === i ? !0 : t === e || i === e ? !1 : null === t || null === i ? !1 : t.constructor === String ? t + "" == i + "" : i.constructor === String ? i + "" == t + "" : !1
        }

        function a(t, e, i) {
            var n, s, r;
            if (null === t || t.length < 1) return [];
            for (n = t.split(e), s = 0, r = n.length; r > s; s += 1) n[s] = i(n[s]);
            return n
        }

        function l(t) {
            return t.outerWidth(!1) - t.width()
        }

        function h(i) {
            var n = "keyup-change-value";
            i.on("keydown", function() {
                t.data(i, n) === e && t.data(i, n, i.val())
            }), i.on("keyup", function() {
                var s = t.data(i, n);
                s !== e && i.val() !== s && (t.removeData(i, n), i.trigger("keyup-change"))
            })
        }

        function c(i) {
            i.on("mousemove", function(i) {
                var n = F;
                (n === e || n.x !== i.pageX || n.y !== i.pageY) && t(i.target).trigger("mousemove-filtered", i)
            })
        }

        function u(t, i, n) {
            n = n || e;
            var s;
            return function() {
                var e = arguments;
                window.clearTimeout(s), s = window.setTimeout(function() {
                    i.apply(n, e)
                }, t)
            }
        }

        function d(t, e) {
            var i = u(t, function(t) {
                e.trigger("scroll-debounced", t)
            });
            e.on("scroll", function(t) {
                s(t.target, e.get()) >= 0 && i(t)
            })
        }

        function p(t) {
            t[0] !== document.activeElement && window.setTimeout(function() {
                var e, i = t[0],
                    n = t.val().length;
                t.focus();
                var s = i.offsetWidth > 0 || i.offsetHeight > 0;
                s && i === document.activeElement && (i.setSelectionRange ? i.setSelectionRange(n, n) : i.createTextRange && (e = i.createTextRange(), e.collapse(!1), e.select()))
            }, 0)
        }

        function f(e) {
            e = t(e)[0];
            var i = 0,
                n = 0;
            if ("selectionStart" in e) i = e.selectionStart, n = e.selectionEnd - i;
            else if ("selection" in document) {
                e.focus();
                var s = document.selection.createRange();
                n = document.selection.createRange().text.length, s.moveStart("character", -e.value.length), i = s.text.length - n
            }
            return {
                offset: i,
                length: n
            }
        }

        function g(t) {
            t.preventDefault(), t.stopPropagation()
        }

        function m(t) {
            t.preventDefault(), t.stopImmediatePropagation()
        }

        function v(e) {
            if (!L) {
                var i = e[0].currentStyle || window.getComputedStyle(e[0], null);
                L = t(document.createElement("div")).css({
                    position: "absolute",
                    left: "-10000px",
                    top: "-10000px",
                    display: "none",
                    fontSize: i.fontSize,
                    fontFamily: i.fontFamily,
                    fontStyle: i.fontStyle,
                    fontWeight: i.fontWeight,
                    letterSpacing: i.letterSpacing,
                    textTransform: i.textTransform,
                    whiteSpace: "nowrap"
                }), L.attr("class", "select2-sizer"), t(document.body).append(L)
            }
            return L.text(e.val()), L.width()
        }

        function y(e, i, n) {
            var s, r, o = [];
            s = t.trim(e.attr("class")), s && (s = "" + s, t(s.split(/\s+/)).each2(function() {
                0 === this.indexOf("select2-") && o.push(this)
            })), s = t.trim(i.attr("class")), s && (s = "" + s, t(s.split(/\s+/)).each2(function() {
                0 !== this.indexOf("select2-") && (r = n(this), r && o.push(r))
            })), e.attr("class", o.join(" "))
        }

        function b(t, e, i, s) {
            var r = n(t.toUpperCase()).indexOf(n(e.toUpperCase())),
                o = e.length;
            return 0 > r ? void i.push(s(t)) : (i.push(s(t.substring(0, r))), i.push("<span class='select2-match'>"), i.push(s(t.substring(r, r + o))), i.push("</span>"), void i.push(s(t.substring(r + o, t.length))))
        }

        function x(t) {
            var e = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
            };
            return String(t).replace(/[&<>"'\/\\]/g, function(t) {
                return e[t]
            })
        }

        function w(i) {
            var n, s = null,
                r = i.quietMillis || 100,
                o = i.url,
                a = this;
            return function(l) {
                window.clearTimeout(n), n = window.setTimeout(function() {
                    var n = i.data,
                        r = o,
                        h = i.transport || t.fn.select2.ajaxDefaults.transport,
                        c = {
                            type: i.type || "GET",
                            cache: i.cache || !1,
                            jsonpCallback: i.jsonpCallback || e,
                            dataType: i.dataType || "json"
                        },
                        u = t.extend({}, t.fn.select2.ajaxDefaults.params, c);
                    n = n ? n.call(a, l.term, l.page, l.context) : null, r = "function" == typeof r ? r.call(a, l.term, l.page, l.context) : r, s && "function" == typeof s.abort && s.abort(), i.params && (t.isFunction(i.params) ? t.extend(u, i.params.call(a)) : t.extend(u, i.params)), t.extend(u, {
                        url: r,
                        dataType: i.dataType,
                        data: n,
                        success: function(t) {
                            var e = i.results(t, l.page, l);
                            l.callback(e)
                        },
                        error: function(t, e, i) {
                            var n = {
                                hasError: !0,
                                jqXHR: t,
                                textStatus: e,
                                errorThrown: i
                            };
                            l.callback(n)
                        }
                    }), s = h.call(a, u)
                }, r)
            }
        }

        function _(e) {
            var i, n, s = e,
                r = function(t) {
                    return "" + t.text
                };
            t.isArray(s) && (n = s, s = {
                results: n
            }), t.isFunction(s) === !1 && (n = s, s = function() {
                return n
            });
            var o = s();
            return o.text && (r = o.text, t.isFunction(r) || (i = o.text, r = function(t) {
                    return t[i]
                })),
                function(e) {
                    var i, n = e.term,
                        o = {
                            results: []
                        };
                    return "" === n ? void e.callback(s()) : (i = function(s, o) {
                        var a, l;
                        if (s = s[0], s.children) {
                            a = {};
                            for (l in s) s.hasOwnProperty(l) && (a[l] = s[l]);
                            a.children = [], t(s.children).each2(function(t, e) {
                                i(e, a.children)
                            }), (a.children.length || e.matcher(n, r(a), s)) && o.push(a)
                        } else e.matcher(n, r(s), s) && o.push(s)
                    }, t(s().results).each2(function(t, e) {
                        i(e, o.results)
                    }), void e.callback(o))
                }
        }

        function k(i) {
            var n = t.isFunction(i);
            return function(s) {
                var r = s.term,
                    o = {
                        results: []
                    },
                    a = n ? i(s) : i;
                t.isArray(a) && (t(a).each(function() {
                    var t = this.text !== e,
                        i = t ? this.text : this;
                    ("" === r || s.matcher(r, i)) && o.results.push(t ? this : {
                        id: this,
                        text: this
                    })
                }), s.callback(o))
            }
        }

        function C(e, i) {
            if (t.isFunction(e)) return !0;
            if (!e) return !1;
            if ("string" == typeof e) return !0;
            throw new Error(i + " must be a string, function, or falsy value")
        }

        function T(e, i) {
            if (t.isFunction(e)) {
                var n = Array.prototype.slice.call(arguments, 2);
                return e.apply(i, n)
            }
            return e
        }

        function S(e) {
            var i = 0;
            return t.each(e, function(t, e) {
                e.children ? i += S(e.children) : i++
            }), i
        }

        function D(t, i, n, s) {
            var r, a, l, h, c, u = t,
                d = !1;
            if (!s.createSearchChoice || !s.tokenSeparators || s.tokenSeparators.length < 1) return e;
            for (;;) {
                for (a = -1, l = 0, h = s.tokenSeparators.length; h > l && (c = s.tokenSeparators[l], a = t.indexOf(c), !(a >= 0)); l++);
                if (0 > a) break;
                if (r = t.substring(0, a), t = t.substring(a + c.length), r.length > 0 && (r = s.createSearchChoice.call(this, r, i), r !== e && null !== r && s.id(r) !== e && null !== s.id(r))) {
                    for (d = !1, l = 0, h = i.length; h > l; l++)
                        if (o(s.id(r), s.id(i[l]))) {
                            d = !0;
                            break
                        }
                    d || n(r)
                }
            }
            return u !== t ? t : void 0
        }

        function E() {
            var e = this;
            t.each(arguments, function(t, i) {
                e[i].remove(), e[i] = null
            })
        }

        function A(e, i) {
            var n = function() {};
            return n.prototype = new e, n.prototype.constructor = n, n.prototype.parent = e.prototype, n.prototype = t.extend(n.prototype, i), n
        }
        if (window.Select2 === e) {
            var N, I, P, M, L, H, O, F = {
                    x: 0,
                    y: 0
                },
                z = {
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    HOME: 36,
                    END: 35,
                    BACKSPACE: 8,
                    DELETE: 46,
                    isArrow: function(t) {
                        switch (t = t.which ? t.which : t) {
                            case z.LEFT:
                            case z.RIGHT:
                            case z.UP:
                            case z.DOWN:
                                return !0
                        }
                        return !1
                    },
                    isControl: function(t) {
                        var e = t.which;
                        switch (e) {
                            case z.SHIFT:
                            case z.CTRL:
                            case z.ALT:
                                return !0
                        }
                        return t.metaKey ? !0 : !1
                    },
                    isFunctionKey: function(t) {
                        return t = t.which ? t.which : t, t >= 112 && 123 >= t
                    }
                },
                $ = "<div class='select2-measure-scrollbar'></div>",
                R = {
                    "\u24b6": "A",
                    "\uff21": "A",
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\u1ea6": "A",
                    "\u1ea4": "A",
                    "\u1eaa": "A",
                    "\u1ea8": "A",
                    "\xc3": "A",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u1eb0": "A",
                    "\u1eae": "A",
                    "\u1eb4": "A",
                    "\u1eb2": "A",
                    "\u0226": "A",
                    "\u01e0": "A",
                    "\xc4": "A",
                    "\u01de": "A",
                    "\u1ea2": "A",
                    "\xc5": "A",
                    "\u01fa": "A",
                    "\u01cd": "A",
                    "\u0200": "A",
                    "\u0202": "A",
                    "\u1ea0": "A",
                    "\u1eac": "A",
                    "\u1eb6": "A",
                    "\u1e00": "A",
                    "\u0104": "A",
                    "\u023a": "A",
                    "\u2c6f": "A",
                    "\ua732": "AA",
                    "\xc6": "AE",
                    "\u01fc": "AE",
                    "\u01e2": "AE",
                    "\ua734": "AO",
                    "\ua736": "AU",
                    "\ua738": "AV",
                    "\ua73a": "AV",
                    "\ua73c": "AY",
                    "\u24b7": "B",
                    "\uff22": "B",
                    "\u1e02": "B",
                    "\u1e04": "B",
                    "\u1e06": "B",
                    "\u0243": "B",
                    "\u0182": "B",
                    "\u0181": "B",
                    "\u24b8": "C",
                    "\uff23": "C",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\xc7": "C",
                    "\u1e08": "C",
                    "\u0187": "C",
                    "\u023b": "C",
                    "\ua73e": "C",
                    "\u24b9": "D",
                    "\uff24": "D",
                    "\u1e0a": "D",
                    "\u010e": "D",
                    "\u1e0c": "D",
                    "\u1e10": "D",
                    "\u1e12": "D",
                    "\u1e0e": "D",
                    "\u0110": "D",
                    "\u018b": "D",
                    "\u018a": "D",
                    "\u0189": "D",
                    "\ua779": "D",
                    "\u01f1": "DZ",
                    "\u01c4": "DZ",
                    "\u01f2": "Dz",
                    "\u01c5": "Dz",
                    "\u24ba": "E",
                    "\uff25": "E",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\u1ec0": "E",
                    "\u1ebe": "E",
                    "\u1ec4": "E",
                    "\u1ec2": "E",
                    "\u1ebc": "E",
                    "\u0112": "E",
                    "\u1e14": "E",
                    "\u1e16": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\xcb": "E",
                    "\u1eba": "E",
                    "\u011a": "E",
                    "\u0204": "E",
                    "\u0206": "E",
                    "\u1eb8": "E",
                    "\u1ec6": "E",
                    "\u0228": "E",
                    "\u1e1c": "E",
                    "\u0118": "E",
                    "\u1e18": "E",
                    "\u1e1a": "E",
                    "\u0190": "E",
                    "\u018e": "E",
                    "\u24bb": "F",
                    "\uff26": "F",
                    "\u1e1e": "F",
                    "\u0191": "F",
                    "\ua77b": "F",
                    "\u24bc": "G",
                    "\uff27": "G",
                    "\u01f4": "G",
                    "\u011c": "G",
                    "\u1e20": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u01e6": "G",
                    "\u0122": "G",
                    "\u01e4": "G",
                    "\u0193": "G",
                    "\ua7a0": "G",
                    "\ua77d": "G",
                    "\ua77e": "G",
                    "\u24bd": "H",
                    "\uff28": "H",
                    "\u0124": "H",
                    "\u1e22": "H",
                    "\u1e26": "H",
                    "\u021e": "H",
                    "\u1e24": "H",
                    "\u1e28": "H",
                    "\u1e2a": "H",
                    "\u0126": "H",
                    "\u2c67": "H",
                    "\u2c75": "H",
                    "\ua78d": "H",
                    "\u24be": "I",
                    "\uff29": "I",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u0130": "I",
                    "\xcf": "I",
                    "\u1e2e": "I",
                    "\u1ec8": "I",
                    "\u01cf": "I",
                    "\u0208": "I",
                    "\u020a": "I",
                    "\u1eca": "I",
                    "\u012e": "I",
                    "\u1e2c": "I",
                    "\u0197": "I",
                    "\u24bf": "J",
                    "\uff2a": "J",
                    "\u0134": "J",
                    "\u0248": "J",
                    "\u24c0": "K",
                    "\uff2b": "K",
                    "\u1e30": "K",
                    "\u01e8": "K",
                    "\u1e32": "K",
                    "\u0136": "K",
                    "\u1e34": "K",
                    "\u0198": "K",
                    "\u2c69": "K",
                    "\ua740": "K",
                    "\ua742": "K",
                    "\ua744": "K",
                    "\ua7a2": "K",
                    "\u24c1": "L",
                    "\uff2c": "L",
                    "\u013f": "L",
                    "\u0139": "L",
                    "\u013d": "L",
                    "\u1e36": "L",
                    "\u1e38": "L",
                    "\u013b": "L",
                    "\u1e3c": "L",
                    "\u1e3a": "L",
                    "\u0141": "L",
                    "\u023d": "L",
                    "\u2c62": "L",
                    "\u2c60": "L",
                    "\ua748": "L",
                    "\ua746": "L",
                    "\ua780": "L",
                    "\u01c7": "LJ",
                    "\u01c8": "Lj",
                    "\u24c2": "M",
                    "\uff2d": "M",
                    "\u1e3e": "M",
                    "\u1e40": "M",
                    "\u1e42": "M",
                    "\u2c6e": "M",
                    "\u019c": "M",
                    "\u24c3": "N",
                    "\uff2e": "N",
                    "\u01f8": "N",
                    "\u0143": "N",
                    "\xd1": "N",
                    "\u1e44": "N",
                    "\u0147": "N",
                    "\u1e46": "N",
                    "\u0145": "N",
                    "\u1e4a": "N",
                    "\u1e48": "N",
                    "\u0220": "N",
                    "\u019d": "N",
                    "\ua790": "N",
                    "\ua7a4": "N",
                    "\u01ca": "NJ",
                    "\u01cb": "Nj",
                    "\u24c4": "O",
                    "\uff2f": "O",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\u1ed2": "O",
                    "\u1ed0": "O",
                    "\u1ed6": "O",
                    "\u1ed4": "O",
                    "\xd5": "O",
                    "\u1e4c": "O",
                    "\u022c": "O",
                    "\u1e4e": "O",
                    "\u014c": "O",
                    "\u1e50": "O",
                    "\u1e52": "O",
                    "\u014e": "O",
                    "\u022e": "O",
                    "\u0230": "O",
                    "\xd6": "O",
                    "\u022a": "O",
                    "\u1ece": "O",
                    "\u0150": "O",
                    "\u01d1": "O",
                    "\u020c": "O",
                    "\u020e": "O",
                    "\u01a0": "O",
                    "\u1edc": "O",
                    "\u1eda": "O",
                    "\u1ee0": "O",
                    "\u1ede": "O",
                    "\u1ee2": "O",
                    "\u1ecc": "O",
                    "\u1ed8": "O",
                    "\u01ea": "O",
                    "\u01ec": "O",
                    "\xd8": "O",
                    "\u01fe": "O",
                    "\u0186": "O",
                    "\u019f": "O",
                    "\ua74a": "O",
                    "\ua74c": "O",
                    "\u01a2": "OI",
                    "\ua74e": "OO",
                    "\u0222": "OU",
                    "\u24c5": "P",
                    "\uff30": "P",
                    "\u1e54": "P",
                    "\u1e56": "P",
                    "\u01a4": "P",
                    "\u2c63": "P",
                    "\ua750": "P",
                    "\ua752": "P",
                    "\ua754": "P",
                    "\u24c6": "Q",
                    "\uff31": "Q",
                    "\ua756": "Q",
                    "\ua758": "Q",
                    "\u024a": "Q",
                    "\u24c7": "R",
                    "\uff32": "R",
                    "\u0154": "R",
                    "\u1e58": "R",
                    "\u0158": "R",
                    "\u0210": "R",
                    "\u0212": "R",
                    "\u1e5a": "R",
                    "\u1e5c": "R",
                    "\u0156": "R",
                    "\u1e5e": "R",
                    "\u024c": "R",
                    "\u2c64": "R",
                    "\ua75a": "R",
                    "\ua7a6": "R",
                    "\ua782": "R",
                    "\u24c8": "S",
                    "\uff33": "S",
                    "\u1e9e": "S",
                    "\u015a": "S",
                    "\u1e64": "S",
                    "\u015c": "S",
                    "\u1e60": "S",
                    "\u0160": "S",
                    "\u1e66": "S",
                    "\u1e62": "S",
                    "\u1e68": "S",
                    "\u0218": "S",
                    "\u015e": "S",
                    "\u2c7e": "S",
                    "\ua7a8": "S",
                    "\ua784": "S",
                    "\u24c9": "T",
                    "\uff34": "T",
                    "\u1e6a": "T",
                    "\u0164": "T",
                    "\u1e6c": "T",
                    "\u021a": "T",
                    "\u0162": "T",
                    "\u1e70": "T",
                    "\u1e6e": "T",
                    "\u0166": "T",
                    "\u01ac": "T",
                    "\u01ae": "T",
                    "\u023e": "T",
                    "\ua786": "T",
                    "\ua728": "TZ",
                    "\u24ca": "U",
                    "\uff35": "U",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\u0168": "U",
                    "\u1e78": "U",
                    "\u016a": "U",
                    "\u1e7a": "U",
                    "\u016c": "U",
                    "\xdc": "U",
                    "\u01db": "U",
                    "\u01d7": "U",
                    "\u01d5": "U",
                    "\u01d9": "U",
                    "\u1ee6": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u01d3": "U",
                    "\u0214": "U",
                    "\u0216": "U",
                    "\u01af": "U",
                    "\u1eea": "U",
                    "\u1ee8": "U",
                    "\u1eee": "U",
                    "\u1eec": "U",
                    "\u1ef0": "U",
                    "\u1ee4": "U",
                    "\u1e72": "U",
                    "\u0172": "U",
                    "\u1e76": "U",
                    "\u1e74": "U",
                    "\u0244": "U",
                    "\u24cb": "V",
                    "\uff36": "V",
                    "\u1e7c": "V",
                    "\u1e7e": "V",
                    "\u01b2": "V",
                    "\ua75e": "V",
                    "\u0245": "V",
                    "\ua760": "VY",
                    "\u24cc": "W",
                    "\uff37": "W",
                    "\u1e80": "W",
                    "\u1e82": "W",
                    "\u0174": "W",
                    "\u1e86": "W",
                    "\u1e84": "W",
                    "\u1e88": "W",
                    "\u2c72": "W",
                    "\u24cd": "X",
                    "\uff38": "X",
                    "\u1e8a": "X",
                    "\u1e8c": "X",
                    "\u24ce": "Y",
                    "\uff39": "Y",
                    "\u1ef2": "Y",
                    "\xdd": "Y",
                    "\u0176": "Y",
                    "\u1ef8": "Y",
                    "\u0232": "Y",
                    "\u1e8e": "Y",
                    "\u0178": "Y",
                    "\u1ef6": "Y",
                    "\u1ef4": "Y",
                    "\u01b3": "Y",
                    "\u024e": "Y",
                    "\u1efe": "Y",
                    "\u24cf": "Z",
                    "\uff3a": "Z",
                    "\u0179": "Z",
                    "\u1e90": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u1e92": "Z",
                    "\u1e94": "Z",
                    "\u01b5": "Z",
                    "\u0224": "Z",
                    "\u2c7f": "Z",
                    "\u2c6b": "Z",
                    "\ua762": "Z",
                    "\u24d0": "a",
                    "\uff41": "a",
                    "\u1e9a": "a",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\u1ea7": "a",
                    "\u1ea5": "a",
                    "\u1eab": "a",
                    "\u1ea9": "a",
                    "\xe3": "a",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u1eb1": "a",
                    "\u1eaf": "a",
                    "\u1eb5": "a",
                    "\u1eb3": "a",
                    "\u0227": "a",
                    "\u01e1": "a",
                    "\xe4": "a",
                    "\u01df": "a",
                    "\u1ea3": "a",
                    "\xe5": "a",
                    "\u01fb": "a",
                    "\u01ce": "a",
                    "\u0201": "a",
                    "\u0203": "a",
                    "\u1ea1": "a",
                    "\u1ead": "a",
                    "\u1eb7": "a",
                    "\u1e01": "a",
                    "\u0105": "a",
                    "\u2c65": "a",
                    "\u0250": "a",
                    "\ua733": "aa",
                    "\xe6": "ae",
                    "\u01fd": "ae",
                    "\u01e3": "ae",
                    "\ua735": "ao",
                    "\ua737": "au",
                    "\ua739": "av",
                    "\ua73b": "av",
                    "\ua73d": "ay",
                    "\u24d1": "b",
                    "\uff42": "b",
                    "\u1e03": "b",
                    "\u1e05": "b",
                    "\u1e07": "b",
                    "\u0180": "b",
                    "\u0183": "b",
                    "\u0253": "b",
                    "\u24d2": "c",
                    "\uff43": "c",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\xe7": "c",
                    "\u1e09": "c",
                    "\u0188": "c",
                    "\u023c": "c",
                    "\ua73f": "c",
                    "\u2184": "c",
                    "\u24d3": "d",
                    "\uff44": "d",
                    "\u1e0b": "d",
                    "\u010f": "d",
                    "\u1e0d": "d",
                    "\u1e11": "d",
                    "\u1e13": "d",
                    "\u1e0f": "d",
                    "\u0111": "d",
                    "\u018c": "d",
                    "\u0256": "d",
                    "\u0257": "d",
                    "\ua77a": "d",
                    "\u01f3": "dz",
                    "\u01c6": "dz",
                    "\u24d4": "e",
                    "\uff45": "e",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\u1ec1": "e",
                    "\u1ebf": "e",
                    "\u1ec5": "e",
                    "\u1ec3": "e",
                    "\u1ebd": "e",
                    "\u0113": "e",
                    "\u1e15": "e",
                    "\u1e17": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\xeb": "e",
                    "\u1ebb": "e",
                    "\u011b": "e",
                    "\u0205": "e",
                    "\u0207": "e",
                    "\u1eb9": "e",
                    "\u1ec7": "e",
                    "\u0229": "e",
                    "\u1e1d": "e",
                    "\u0119": "e",
                    "\u1e19": "e",
                    "\u1e1b": "e",
                    "\u0247": "e",
                    "\u025b": "e",
                    "\u01dd": "e",
                    "\u24d5": "f",
                    "\uff46": "f",
                    "\u1e1f": "f",
                    "\u0192": "f",
                    "\ua77c": "f",
                    "\u24d6": "g",
                    "\uff47": "g",
                    "\u01f5": "g",
                    "\u011d": "g",
                    "\u1e21": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u01e7": "g",
                    "\u0123": "g",
                    "\u01e5": "g",
                    "\u0260": "g",
                    "\ua7a1": "g",
                    "\u1d79": "g",
                    "\ua77f": "g",
                    "\u24d7": "h",
                    "\uff48": "h",
                    "\u0125": "h",
                    "\u1e23": "h",
                    "\u1e27": "h",
                    "\u021f": "h",
                    "\u1e25": "h",
                    "\u1e29": "h",
                    "\u1e2b": "h",
                    "\u1e96": "h",
                    "\u0127": "h",
                    "\u2c68": "h",
                    "\u2c76": "h",
                    "\u0265": "h",
                    "\u0195": "hv",
                    "\u24d8": "i",
                    "\uff49": "i",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\xef": "i",
                    "\u1e2f": "i",
                    "\u1ec9": "i",
                    "\u01d0": "i",
                    "\u0209": "i",
                    "\u020b": "i",
                    "\u1ecb": "i",
                    "\u012f": "i",
                    "\u1e2d": "i",
                    "\u0268": "i",
                    "\u0131": "i",
                    "\u24d9": "j",
                    "\uff4a": "j",
                    "\u0135": "j",
                    "\u01f0": "j",
                    "\u0249": "j",
                    "\u24da": "k",
                    "\uff4b": "k",
                    "\u1e31": "k",
                    "\u01e9": "k",
                    "\u1e33": "k",
                    "\u0137": "k",
                    "\u1e35": "k",
                    "\u0199": "k",
                    "\u2c6a": "k",
                    "\ua741": "k",
                    "\ua743": "k",
                    "\ua745": "k",
                    "\ua7a3": "k",
                    "\u24db": "l",
                    "\uff4c": "l",
                    "\u0140": "l",
                    "\u013a": "l",
                    "\u013e": "l",
                    "\u1e37": "l",
                    "\u1e39": "l",
                    "\u013c": "l",
                    "\u1e3d": "l",
                    "\u1e3b": "l",
                    "\u017f": "l",
                    "\u0142": "l",
                    "\u019a": "l",
                    "\u026b": "l",
                    "\u2c61": "l",
                    "\ua749": "l",
                    "\ua781": "l",
                    "\ua747": "l",
                    "\u01c9": "lj",
                    "\u24dc": "m",
                    "\uff4d": "m",
                    "\u1e3f": "m",
                    "\u1e41": "m",
                    "\u1e43": "m",
                    "\u0271": "m",
                    "\u026f": "m",
                    "\u24dd": "n",
                    "\uff4e": "n",
                    "\u01f9": "n",
                    "\u0144": "n",
                    "\xf1": "n",
                    "\u1e45": "n",
                    "\u0148": "n",
                    "\u1e47": "n",
                    "\u0146": "n",
                    "\u1e4b": "n",
                    "\u1e49": "n",
                    "\u019e": "n",
                    "\u0272": "n",
                    "\u0149": "n",
                    "\ua791": "n",
                    "\ua7a5": "n",
                    "\u01cc": "nj",
                    "\u24de": "o",
                    "\uff4f": "o",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\u1ed3": "o",
                    "\u1ed1": "o",
                    "\u1ed7": "o",
                    "\u1ed5": "o",
                    "\xf5": "o",
                    "\u1e4d": "o",
                    "\u022d": "o",
                    "\u1e4f": "o",
                    "\u014d": "o",
                    "\u1e51": "o",
                    "\u1e53": "o",
                    "\u014f": "o",
                    "\u022f": "o",
                    "\u0231": "o",
                    "\xf6": "o",
                    "\u022b": "o",
                    "\u1ecf": "o",
                    "\u0151": "o",
                    "\u01d2": "o",
                    "\u020d": "o",
                    "\u020f": "o",
                    "\u01a1": "o",
                    "\u1edd": "o",
                    "\u1edb": "o",
                    "\u1ee1": "o",
                    "\u1edf": "o",
                    "\u1ee3": "o",
                    "\u1ecd": "o",
                    "\u1ed9": "o",
                    "\u01eb": "o",
                    "\u01ed": "o",
                    "\xf8": "o",
                    "\u01ff": "o",
                    "\u0254": "o",
                    "\ua74b": "o",
                    "\ua74d": "o",
                    "\u0275": "o",
                    "\u01a3": "oi",
                    "\u0223": "ou",
                    "\ua74f": "oo",
                    "\u24df": "p",
                    "\uff50": "p",
                    "\u1e55": "p",
                    "\u1e57": "p",
                    "\u01a5": "p",
                    "\u1d7d": "p",
                    "\ua751": "p",
                    "\ua753": "p",
                    "\ua755": "p",
                    "\u24e0": "q",
                    "\uff51": "q",
                    "\u024b": "q",
                    "\ua757": "q",
                    "\ua759": "q",
                    "\u24e1": "r",
                    "\uff52": "r",
                    "\u0155": "r",
                    "\u1e59": "r",
                    "\u0159": "r",
                    "\u0211": "r",
                    "\u0213": "r",
                    "\u1e5b": "r",
                    "\u1e5d": "r",
                    "\u0157": "r",
                    "\u1e5f": "r",
                    "\u024d": "r",
                    "\u027d": "r",
                    "\ua75b": "r",
                    "\ua7a7": "r",
                    "\ua783": "r",
                    "\u24e2": "s",
                    "\uff53": "s",
                    "\xdf": "s",
                    "\u015b": "s",
                    "\u1e65": "s",
                    "\u015d": "s",
                    "\u1e61": "s",
                    "\u0161": "s",
                    "\u1e67": "s",
                    "\u1e63": "s",
                    "\u1e69": "s",
                    "\u0219": "s",
                    "\u015f": "s",
                    "\u023f": "s",
                    "\ua7a9": "s",
                    "\ua785": "s",
                    "\u1e9b": "s",
                    "\u24e3": "t",
                    "\uff54": "t",
                    "\u1e6b": "t",
                    "\u1e97": "t",
                    "\u0165": "t",
                    "\u1e6d": "t",
                    "\u021b": "t",
                    "\u0163": "t",
                    "\u1e71": "t",
                    "\u1e6f": "t",
                    "\u0167": "t",
                    "\u01ad": "t",
                    "\u0288": "t",
                    "\u2c66": "t",
                    "\ua787": "t",
                    "\ua729": "tz",
                    "\u24e4": "u",
                    "\uff55": "u",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\u0169": "u",
                    "\u1e79": "u",
                    "\u016b": "u",
                    "\u1e7b": "u",
                    "\u016d": "u",
                    "\xfc": "u",
                    "\u01dc": "u",
                    "\u01d8": "u",
                    "\u01d6": "u",
                    "\u01da": "u",
                    "\u1ee7": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u01d4": "u",
                    "\u0215": "u",
                    "\u0217": "u",
                    "\u01b0": "u",
                    "\u1eeb": "u",
                    "\u1ee9": "u",
                    "\u1eef": "u",
                    "\u1eed": "u",
                    "\u1ef1": "u",
                    "\u1ee5": "u",
                    "\u1e73": "u",
                    "\u0173": "u",
                    "\u1e77": "u",
                    "\u1e75": "u",
                    "\u0289": "u",
                    "\u24e5": "v",
                    "\uff56": "v",
                    "\u1e7d": "v",
                    "\u1e7f": "v",
                    "\u028b": "v",
                    "\ua75f": "v",
                    "\u028c": "v",
                    "\ua761": "vy",
                    "\u24e6": "w",
                    "\uff57": "w",
                    "\u1e81": "w",
                    "\u1e83": "w",
                    "\u0175": "w",
                    "\u1e87": "w",
                    "\u1e85": "w",
                    "\u1e98": "w",
                    "\u1e89": "w",
                    "\u2c73": "w",
                    "\u24e7": "x",
                    "\uff58": "x",
                    "\u1e8b": "x",
                    "\u1e8d": "x",
                    "\u24e8": "y",
                    "\uff59": "y",
                    "\u1ef3": "y",
                    "\xfd": "y",
                    "\u0177": "y",
                    "\u1ef9": "y",
                    "\u0233": "y",
                    "\u1e8f": "y",
                    "\xff": "y",
                    "\u1ef7": "y",
                    "\u1e99": "y",
                    "\u1ef5": "y",
                    "\u01b4": "y",
                    "\u024f": "y",
                    "\u1eff": "y",
                    "\u24e9": "z",
                    "\uff5a": "z",
                    "\u017a": "z",
                    "\u1e91": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u1e93": "z",
                    "\u1e95": "z",
                    "\u01b6": "z",
                    "\u0225": "z",
                    "\u0240": "z",
                    "\u2c6c": "z",
                    "\ua763": "z",
                    "\u0386": "\u0391",
                    "\u0388": "\u0395",
                    "\u0389": "\u0397",
                    "\u038a": "\u0399",
                    "\u03aa": "\u0399",
                    "\u038c": "\u039f",
                    "\u038e": "\u03a5",
                    "\u03ab": "\u03a5",
                    "\u038f": "\u03a9",
                    "\u03ac": "\u03b1",
                    "\u03ad": "\u03b5",
                    "\u03ae": "\u03b7",
                    "\u03af": "\u03b9",
                    "\u03ca": "\u03b9",
                    "\u0390": "\u03b9",
                    "\u03cc": "\u03bf",
                    "\u03cd": "\u03c5",
                    "\u03cb": "\u03c5",
                    "\u03b0": "\u03c5",
                    "\u03c9": "\u03c9",
                    "\u03c2": "\u03c3"
                };
            H = t(document), M = function() {
                var t = 1;
                return function() {
                    return t++
                }
            }(), N = A(Object, {
                bind: function(t) {
                    var e = this;
                    return function() {
                        t.apply(e, arguments)
                    }
                },
                init: function(i) {
                    var n, s, o = ".select2-results";
                    this.opts = i = this.prepareOpts(i), this.id = i.id, i.element.data("select2") !== e && null !== i.element.data("select2") && i.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = t(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = t("<span>", {
                        role: "status",
                        "aria-live": "polite"
                    }).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + M()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", i.element.attr("title")), this.body = t(document.body), y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", i.element.attr("style")), this.container.css(T(i.containerCss, this.opts.element)), this.container.addClass(T(i.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", g), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(T(i.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", g), this.results = n = this.container.find(o), this.search = s = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", g), c(this.results), this.dropdown.on("mousemove-filtered", o, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", o, this.bind(function(t) {
                        this._touchEvent = !0, this.highlightUnderEvent(t)
                    })), this.dropdown.on("touchmove", o, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", o, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function() {
                        this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                    })), d(80, this.results), this.dropdown.on("scroll-debounced", o, this.bind(this.loadMoreIfNeeded)), t(this.container).on("change", ".select2-input", function(t) {
                        t.stopPropagation()
                    }), t(this.dropdown).on("change", ".select2-input", function(t) {
                        t.stopPropagation()
                    }), t.fn.mousewheel && n.mousewheel(function(t, e, i, s) {
                        var r = n.scrollTop();
                        s > 0 && 0 >= r - s ? (n.scrollTop(0), g(t)) : 0 > s && n.get(0).scrollHeight - n.scrollTop() + s <= n.height() && (n.scrollTop(n.get(0).scrollHeight - n.height()), g(t))
                    }), h(s), s.on("keyup-change input paste", this.bind(this.updateResults)), s.on("focus", function() {
                        s.addClass("select2-focused")
                    }), s.on("blur", function() {
                        s.removeClass("select2-focused")
                    }), this.dropdown.on("mouseup", o, this.bind(function(e) {
                        t(e.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(e), this.selectHighlighted(e))
                    })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(t) {
                        t.stopPropagation()
                    }), this.nextSearchTerm = e, t.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== i.maximumInputLength && this.search.attr("maxlength", i.maximumInputLength);
                    var a = i.element.prop("disabled");
                    a === e && (a = !1), this.enable(!a);
                    var l = i.element.prop("readonly");
                    l === e && (l = !1), this.readonly(l), O = O || r(), this.autofocus = i.element.prop("autofocus"), i.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", i.searchInputPlaceholder)
                },
                destroy: function() {
                    var t = this.opts.element,
                        i = t.data("select2"),
                        n = this;
                    this.close(), t.length && t[0].detachEvent && n._sync && t.each(function() {
                        n._sync && this.detachEvent("onpropertychange", n._sync)
                    }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, i !== e && (i.container.remove(), i.liveRegion.remove(), i.dropdown.remove(), t.show().removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? t.attr({
                        tabindex: this.elementTabIndex
                    }) : t.removeAttr("tabindex"), t.show()), E.call(this, "container", "liveRegion", "dropdown", "results", "search")
                },
                optionToData: function(t) {
                    return t.is("option") ? {
                        id: t.prop("value"),
                        text: t.text(),
                        element: t.get(),
                        css: t.attr("class"),
                        disabled: t.prop("disabled"),
                        locked: o(t.attr("locked"), "locked") || o(t.data("locked"), !0)
                    } : t.is("optgroup") ? {
                        text: t.attr("label"),
                        children: [],
                        element: t.get(),
                        css: t.attr("class")
                    } : void 0
                },
                prepareOpts: function(i) {
                    var n, s, r, l, h = this;
                    if (n = i.element, "select" === n.get(0).tagName.toLowerCase() && (this.select = s = i.element), s && t.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                            if (this in i) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                        }), i = t.extend({}, {
                            populateResults: function(n, s, r) {
                                var o, a = this.opts.id,
                                    l = this.liveRegion;
                                (o = function(n, s, c) {
                                    var u, d, p, f, g, m, v, y, b, x;
                                    n = i.sortResults(n, s, r);
                                    var w = [];
                                    for (u = 0, d = n.length; d > u; u += 1) p = n[u], g = p.disabled === !0, f = !g && a(p) !== e, m = p.children && p.children.length > 0, v = t("<li></li>"), v.addClass("select2-results-dept-" + c), v.addClass("select2-result"), v.addClass(f ? "select2-result-selectable" : "select2-result-unselectable"), g && v.addClass("select2-disabled"), m && v.addClass("select2-result-with-children"), v.addClass(h.opts.formatResultCssClass(p)), v.attr("role", "presentation"), y = t(document.createElement("div")), y.addClass("select2-result-label"), y.attr("id", "select2-result-label-" + M()), y.attr("role", "option"), x = i.formatResult(p, y, r, h.opts.escapeMarkup), x !== e && (y.html(x), v.append(y)), m && (b = t("<ul></ul>"), b.addClass("select2-result-sub"), o(p.children, b, c + 1), v.append(b)), v.data("select2-data", p), w.push(v[0]);
                                    s.append(w), l.text(i.formatMatches(n.length))
                                })(s, n, 0)
                            }
                        }, t.fn.select2.defaults, i), "function" != typeof i.id && (r = i.id, i.id = function(t) {
                            return t[r]
                        }), t.isArray(i.element.data("select2Tags"))) {
                        if ("tags" in i) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
                        i.tags = i.element.data("select2Tags")
                    }
                    if (s ? (i.query = this.bind(function(t) {
                            var i, s, r, o = {
                                    results: [],
                                    more: !1
                                },
                                a = t.term;
                            r = function(e, i) {
                                var n;
                                e.is("option") ? t.matcher(a, e.text(), e) && i.push(h.optionToData(e)) : e.is("optgroup") && (n = h.optionToData(e), e.children().each2(function(t, e) {
                                    r(e, n.children)
                                }), n.children.length > 0 && i.push(n))
                            }, i = n.children(), this.getPlaceholder() !== e && i.length > 0 && (s = this.getPlaceholderOption(), s && (i = i.not(s))), i.each2(function(t, e) {
                                r(e, o.results)
                            }), t.callback(o)
                        }), i.id = function(t) {
                            return t.id
                        }) : "query" in i || ("ajax" in i ? (l = i.element.data("ajax-url"), l && l.length > 0 && (i.ajax.url = l), i.query = w.call(i.element, i.ajax)) : "data" in i ? i.query = _(i.data) : "tags" in i && (i.query = k(i.tags), i.createSearchChoice === e && (i.createSearchChoice = function(e) {
                            return {
                                id: t.trim(e),
                                text: t.trim(e)
                            }
                        }), i.initSelection === e && (i.initSelection = function(e, n) {
                            var s = [];
                            t(a(e.val(), i.separator, i.transformVal)).each(function() {
                                var e = {
                                        id: this,
                                        text: this
                                    },
                                    n = i.tags;
                                t.isFunction(n) && (n = n()), t(n).each(function() {
                                    return o(this.id, e.id) ? (e = this, !1) : void 0
                                }), s.push(e)
                            }), n(s)
                        }))), "function" != typeof i.query) throw "query function not defined for Select2 " + i.element.attr("id");
                    if ("top" === i.createSearchChoicePosition) i.createSearchChoicePosition = function(t, e) {
                        t.unshift(e)
                    };
                    else if ("bottom" === i.createSearchChoicePosition) i.createSearchChoicePosition = function(t, e) {
                        t.push(e)
                    };
                    else if ("function" != typeof i.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                    return i
                },
                monitorSource: function() {
                    var i, n = this.opts.element,
                        s = this;
                    n.on("change.select2", this.bind(function() {
                        this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                    })), this._sync = this.bind(function() {
                        var t = n.prop("disabled");
                        t === e && (t = !1), this.enable(!t);
                        var i = n.prop("readonly");
                        i === e && (i = !1), this.readonly(i), this.container && (y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(T(this.opts.containerCssClass, this.opts.element))), this.dropdown && (y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(T(this.opts.dropdownCssClass, this.opts.element)))
                    }), n.length && n[0].attachEvent && n.each(function() {
                        this.attachEvent("onpropertychange", s._sync)
                    }), i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, i !== e && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new i(function(e) {
                        t.each(e, s._sync)
                    }), this.propertyObserver.observe(n.get(0), {
                        attributes: !0,
                        subtree: !1
                    }))
                },
                triggerSelect: function(e) {
                    var i = t.Event("select2-selecting", {
                        val: this.id(e),
                        object: e,
                        choice: e
                    });
                    return this.opts.element.trigger(i), !i.isDefaultPrevented()
                },
                triggerChange: function(e) {
                    e = e || {}, e = t.extend({}, e, {
                        type: "change",
                        val: this.val()
                    }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
                },
                isInterfaceEnabled: function() {
                    return this.enabledInterface === !0
                },
                enableInterface: function() {
                    var t = this._enabled && !this._readonly,
                        e = !t;
                    return t === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", e), this.close(), this.enabledInterface = t, !0)
                },
                enable: function(t) {
                    t === e && (t = !0), this._enabled !== t && (this._enabled = t, this.opts.element.prop("disabled", !t), this.enableInterface())
                },
                disable: function() {
                    this.enable(!1)
                },
                readonly: function(t) {
                    t === e && (t = !1), this._readonly !== t && (this._readonly = t, this.opts.element.prop("readonly", t), this.enableInterface())
                },
                opened: function() {
                    return this.container ? this.container.hasClass("select2-dropdown-open") : !1
                },
                positionDropdown: function() {
                    var e, i, n, s, r, o = this.dropdown,
                        a = this.container,
                        l = a.offset(),
                        h = a.outerHeight(!1),
                        c = a.outerWidth(!1),
                        u = o.outerHeight(!1),
                        d = t(window),
                        p = d.width(),
                        f = d.height(),
                        g = d.scrollLeft() + p,
                        m = d.scrollTop() + f,
                        v = l.top + h,
                        y = l.left,
                        b = m >= v + u,
                        x = l.top - u >= d.scrollTop(),
                        w = o.outerWidth(!1),
                        _ = function() {
                            return g >= y + w
                        },
                        k = function() {
                            return l.left + g + a.outerWidth(!1) > w
                        },
                        C = o.hasClass("select2-drop-above");
                    C ? (i = !0, !x && b && (n = !0, i = !1)) : (i = !1, !b && x && (n = !0, i = !0)), n && (o.hide(), l = this.container.offset(), h = this.container.outerHeight(!1), c = this.container.outerWidth(!1), u = o.outerHeight(!1), g = d.scrollLeft() + p, m = d.scrollTop() + f, v = l.top + h, y = l.left, w = o.outerWidth(!1), o.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (r = t(".select2-results", o)[0], o.addClass("select2-drop-auto-width"), o.css("width", ""), w = o.outerWidth(!1) + (r.scrollHeight === r.clientHeight ? 0 : O.width), w > c ? c = w : w = c, u = o.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (e = this.body.offset(), v -= e.top, y -= e.left), !_() && k() && (y = l.left + this.container.outerWidth(!1) - w), s = {
                        left: y,
                        width: c
                    }, i ? (s.top = l.top - u, s.bottom = "auto", this.container.addClass("select2-drop-above"), o.addClass("select2-drop-above")) : (s.top = v, s.bottom = "auto", this.container.removeClass("select2-drop-above"), o.removeClass("select2-drop-above")), s = t.extend(s, T(this.opts.dropdownCss, this.opts.element)), o.css(s)
                },
                shouldOpen: function() {
                    var e;
                    return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (e = t.Event("select2-opening"), this.opts.element.trigger(e), !e.isDefaultPrevented())
                },
                clearDropdownAlignmentPreference: function() {
                    this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
                },
                open: function() {
                    return this.shouldOpen() ? (this.opening(), H.on("mousemove.select2Event", function(t) {
                        F.x = t.pageX, F.y = t.pageY
                    }), !0) : !1
                },
                opening: function() {
                    var e, n = this.containerEventName,
                        s = "scroll." + n,
                        r = "resize." + n,
                        o = "orientationchange." + n;
                    this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), e = t("#select2-drop-mask"), 0 === e.length && (e = t(document.createElement("div")), e.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), e.hide(), e.appendTo(this.body), e.on("mousedown touchstart click", function(n) {
                        i(e);
                        var s, r = t("#select2-drop");
                        r.length > 0 && (s = r.data("select2"), s.opts.selectOnBlur && s.selectHighlighted({
                            noFocus: !0
                        }), s.close(), n.preventDefault(), n.stopPropagation())
                    })), this.dropdown.prev()[0] !== e[0] && this.dropdown.before(e), t("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), e.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                    var a = this;
                    this.container.parents().add(window).each(function() {
                        t(this).on(r + " " + s + " " + o, function() {
                            a.opened() && a.positionDropdown()
                        })
                    })
                },
                close: function() {
                    if (this.opened()) {
                        var e = this.containerEventName,
                            i = "scroll." + e,
                            n = "resize." + e,
                            s = "orientationchange." + e;
                        this.container.parents().add(window).each(function() {
                            t(this).off(i).off(n).off(s)
                        }), this.clearDropdownAlignmentPreference(), t("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), H.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(t.Event("select2-close"))
                    }
                },
                externalSearch: function(t) {
                    this.open(), this.search.val(t), this.updateResults(!1)
                },
                clearSearch: function() {},
                getMaximumSelectionSize: function() {
                    return T(this.opts.maximumSelectionSize, this.opts.element)
                },
                ensureHighlightVisible: function() {
                    var e, i, n, s, r, o, a, l, h = this.results;
                    if (i = this.highlight(), !(0 > i)) {
                        if (0 == i) return void h.scrollTop(0);
                        e = this.findHighlightableChoices().find(".select2-result-label"), n = t(e[i]), l = (n.offset() || {}).top || 0, s = l + n.outerHeight(!0), i === e.length - 1 && (a = h.find("li.select2-more-results"), a.length > 0 && (s = a.offset().top + a.outerHeight(!0))), r = h.offset().top + h.outerHeight(!1), s > r && h.scrollTop(h.scrollTop() + (s - r)), o = l - h.offset().top, 0 > o && "none" != n.css("display") && h.scrollTop(h.scrollTop() + o)
                    }
                },
                findHighlightableChoices: function() {
                    return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
                },
                moveHighlight: function(e) {
                    for (var i = this.findHighlightableChoices(), n = this.highlight(); n > -1 && n < i.length;) {
                        n += e;
                        var s = t(i[n]);
                        if (s.hasClass("select2-result-selectable") && !s.hasClass("select2-disabled") && !s.hasClass("select2-selected")) {
                            this.highlight(n);
                            break
                        }
                    }
                },
                highlight: function(e) {
                    var i, n, r = this.findHighlightableChoices();
                    return 0 === arguments.length ? s(r.filter(".select2-highlighted")[0], r.get()) : (e >= r.length && (e = r.length - 1), 0 > e && (e = 0), this.removeHighlight(), i = t(r[e]), i.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", i.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(i.text()), n = i.data("select2-data"), void(n && this.opts.element.trigger({
                        type: "select2-highlight",
                        val: this.id(n),
                        choice: n
                    })))
                },
                removeHighlight: function() {
                    this.results.find(".select2-highlighted").removeClass("select2-highlighted")
                },
                touchMoved: function() {
                    this._touchMoved = !0
                },
                clearTouchMoved: function() {
                    this._touchMoved = !1
                },
                countSelectableResults: function() {
                    return this.findHighlightableChoices().length
                },
                highlightUnderEvent: function(e) {
                    var i = t(e.target).closest(".select2-result-selectable");
                    if (i.length > 0 && !i.is(".select2-highlighted")) {
                        var n = this.findHighlightableChoices();
                        this.highlight(n.index(i))
                    } else 0 == i.length && this.removeHighlight()
                },
                loadMoreIfNeeded: function() {
                    var t, e = this.results,
                        i = e.find("li.select2-more-results"),
                        n = this.resultsPage + 1,
                        s = this,
                        r = this.search.val(),
                        o = this.context;
                    0 !== i.length && (t = i.offset().top - e.offset().top - e.height(), t <= this.opts.loadMorePadding && (i.addClass("select2-active"), this.opts.query({
                        element: this.opts.element,
                        term: r,
                        page: n,
                        context: o,
                        matcher: this.opts.matcher,
                        callback: this.bind(function(t) {
                            s.opened() && (s.opts.populateResults.call(this, e, t.results, {
                                term: r,
                                page: n,
                                context: o
                            }), s.postprocessResults(t, !1, !1), t.more === !0 ? (i.detach().appendTo(e).html(s.opts.escapeMarkup(T(s.opts.formatLoadMore, s.opts.element, n + 1))), window.setTimeout(function() {
                                s.loadMoreIfNeeded()
                            }, 10)) : i.remove(), s.positionDropdown(), s.resultsPage = n, s.context = t.context, this.opts.element.trigger({
                                type: "select2-loaded",
                                items: t
                            }))
                        })
                    })))
                },
                tokenize: function() {},
                updateResults: function(i) {
                    function n() {
                        h.removeClass("select2-active"), d.positionDropdown(), d.liveRegion.text(c.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? c.text() : d.opts.formatMatches(c.find('.select2-result-selectable:not(".select2-selected")').length))
                    }

                    function s(t) {
                        c.html(t), n()
                    }
                    var r, a, l, h = this.search,
                        c = this.results,
                        u = this.opts,
                        d = this,
                        p = h.val(),
                        f = t.data(this.container, "select2-last-term");
                    if ((i === !0 || !f || !o(p, f)) && (t.data(this.container, "select2-last-term", p), i === !0 || this.showSearchInput !== !1 && this.opened())) {
                        l = ++this.queryCount;
                        var g = this.getMaximumSelectionSize();
                        if (g >= 1 && (r = this.data(), t.isArray(r) && r.length >= g && C(u.formatSelectionTooBig, "formatSelectionTooBig"))) return void s("<li class='select2-selection-limit'>" + T(u.formatSelectionTooBig, u.element, g) + "</li>");
                        if (h.val().length < u.minimumInputLength) return s(C(u.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + T(u.formatInputTooShort, u.element, h.val(), u.minimumInputLength) + "</li>" : ""), void(i && this.showSearch && this.showSearch(!0));
                        if (u.maximumInputLength && h.val().length > u.maximumInputLength) return void s(C(u.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + T(u.formatInputTooLong, u.element, h.val(), u.maximumInputLength) + "</li>" : "");
                        u.formatSearching && 0 === this.findHighlightableChoices().length && s("<li class='select2-searching'>" + T(u.formatSearching, u.element) + "</li>"), h.addClass("select2-active"), this.removeHighlight(), a = this.tokenize(), a != e && null != a && h.val(a), this.resultsPage = 1, u.query({
                            element: u.element,
                            term: h.val(),
                            page: this.resultsPage,
                            context: null,
                            matcher: u.matcher,
                            callback: this.bind(function(r) {
                                var a;
                                if (l == this.queryCount) {
                                    if (!this.opened()) return void this.search.removeClass("select2-active");
                                    if (r.hasError !== e && C(u.formatAjaxError, "formatAjaxError")) return void s("<li class='select2-ajax-error'>" + T(u.formatAjaxError, u.element, r.jqXHR, r.textStatus, r.errorThrown) + "</li>");
                                    if (this.context = r.context === e ? null : r.context, this.opts.createSearchChoice && "" !== h.val() && (a = this.opts.createSearchChoice.call(d, h.val(), r.results), a !== e && null !== a && d.id(a) !== e && null !== d.id(a) && 0 === t(r.results).filter(function() {
                                            return o(d.id(this), d.id(a))
                                        }).length && this.opts.createSearchChoicePosition(r.results, a)), 0 === r.results.length && C(u.formatNoMatches, "formatNoMatches")) return void s("<li class='select2-no-results'>" + T(u.formatNoMatches, u.element, h.val()) + "</li>");
                                    c.empty(), d.opts.populateResults.call(this, c, r.results, {
                                        term: h.val(),
                                        page: this.resultsPage,
                                        context: null
                                    }), r.more === !0 && C(u.formatLoadMore, "formatLoadMore") && (c.append("<li class='select2-more-results'>" + u.escapeMarkup(T(u.formatLoadMore, u.element, this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                        d.loadMoreIfNeeded()
                                    }, 10)), this.postprocessResults(r, i), n(), this.opts.element.trigger({
                                        type: "select2-loaded",
                                        items: r
                                    })
                                }
                            })
                        })
                    }
                },
                cancel: function() {
                    this.close()
                },
                blur: function() {
                    this.opts.selectOnBlur && this.selectHighlighted({
                        noFocus: !0
                    }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
                },
                focusSearch: function() {
                    p(this.search)
                },
                selectHighlighted: function(t) {
                    if (this._touchMoved) return void this.clearTouchMoved();
                    var e = this.highlight(),
                        i = this.results.find(".select2-highlighted"),
                        n = i.closest(".select2-result").data("select2-data");
                    n ? (this.highlight(e), this.onSelect(n, t)) : t && t.noFocus && this.close()
                },
                getPlaceholder: function() {
                    var t;
                    return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((t = this.getPlaceholderOption()) !== e ? t.text() : e)
                },
                getPlaceholderOption: function() {
                    if (this.select) {
                        var i = this.select.children("option").first();
                        if (this.opts.placeholderOption !== e) return "first" === this.opts.placeholderOption && i || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                        if ("" === t.trim(i.text()) && "" === i.val()) return i
                    }
                },
                initContainerWidth: function() {
                    function i() {
                        var i, n, s, r, o, a;
                        if ("off" === this.opts.width) return null;
                        if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                        if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                            if (i = this.opts.element.attr("style"), i !== e)
                                for (n = i.split(";"), r = 0, o = n.length; o > r; r += 1)
                                    if (a = n[r].replace(/\s/g, ""), s = a.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== s && s.length >= 1) return s[1];
                            return "resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                        }
                        return t.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                    }
                    var n = i.call(this);
                    null !== n && this.container.css("width", n)
                }
            }), I = A(N, {
                createContainer: function() {
                    var e = t(document.createElement("div")).attr({
                        "class": "select2-container"
                    }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
                    return e
                },
                enableInterface: function() {
                    this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
                },
                opening: function() {
                    var i, n, s;
                    this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), i = this.search.get(0), i.createTextRange ? (n = i.createTextRange(), n.collapse(!1), n.select()) : i.setSelectionRange && (s = this.search.val().length, i.setSelectionRange(s, s))), "" === this.search.val() && this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(t.Event("select2-open"))
                },
                close: function() {
                    this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
                },
                focus: function() {
                    this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
                },
                isFocused: function() {
                    return this.container.hasClass("select2-container-active")
                },
                cancel: function() {
                    this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
                },
                destroy: function() {
                    t("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), E.call(this, "selection", "focusser")
                },
                initContainer: function() {
                    var e, n, s = this.container,
                        r = this.dropdown,
                        o = M();
                    this.showSearch(this.opts.minimumResultsForSearch < 0 ? !1 : !0), this.selection = e = s.find(".select2-choice"), this.focusser = s.find(".select2-focusser"), e.find(".select2-chosen").attr("id", "select2-chosen-" + o), this.focusser.attr("aria-labelledby", "select2-chosen-" + o), this.results.attr("id", "select2-results-" + o), this.search.attr("aria-owns", "select2-results-" + o), this.focusser.attr("id", "s2id_autogen" + o), n = t("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.focus(this.bind(function() {
                        this.focus()
                    })), this.focusser.prev().text(n.text()).attr("for", this.focusser.attr("id"));
                    var a = this.opts.element.attr("title");
                    this.opts.element.attr("title", a || n.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(t("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(t) {
                        if (this.isInterfaceEnabled() && 229 != t.keyCode) {
                            if (t.which === z.PAGE_UP || t.which === z.PAGE_DOWN) return void g(t);
                            switch (t.which) {
                                case z.UP:
                                case z.DOWN:
                                    return this.moveHighlight(t.which === z.UP ? -1 : 1), void g(t);
                                case z.ENTER:
                                    return this.selectHighlighted(), void g(t);
                                case z.TAB:
                                    return void this.selectHighlighted({
                                        noFocus: !0
                                    });
                                case z.ESC:
                                    return this.cancel(t), void g(t)
                            }
                        }
                    })), this.search.on("blur", this.bind(function() {
                        document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                            this.opened() && this.search.focus()
                        }), 0)
                    })), this.focusser.on("keydown", this.bind(function(t) {
                        if (this.isInterfaceEnabled() && t.which !== z.TAB && !z.isControl(t) && !z.isFunctionKey(t) && t.which !== z.ESC) {
                            if (this.opts.openOnEnter === !1 && t.which === z.ENTER) return void g(t);
                            if (t.which == z.DOWN || t.which == z.UP || t.which == z.ENTER && this.opts.openOnEnter) {
                                if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return;
                                return this.open(), void g(t)
                            }
                            return t.which == z.DELETE || t.which == z.BACKSPACE ? (this.opts.allowClear && this.clear(), void g(t)) : void 0
                        }
                    })), h(this.focusser), this.focusser.on("keyup-change input", this.bind(function(t) {
                        if (this.opts.minimumResultsForSearch >= 0) {
                            if (t.stopPropagation(), this.opened()) return;
                            this.open()
                        }
                    })), e.on("mousedown touchstart", "abbr", this.bind(function(t) {
                        this.isInterfaceEnabled() && (this.clear(), m(t), this.close(), this.selection && this.selection.focus())
                    })), e.on("mousedown touchstart", this.bind(function(n) {
                        i(e), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), g(n)
                    })), r.on("mousedown touchstart", this.bind(function() {
                        this.opts.shouldFocusInput(this) && this.search.focus()
                    })), e.on("focus", this.bind(function(t) {
                        g(t)
                    })), this.focusser.on("focus", this.bind(function() {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                    })).on("blur", this.bind(function() {
                        this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(t.Event("select2-blur")))
                    })), this.search.on("focus", this.bind(function() {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                    })), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
                },
                clear: function(e) {
                    var i = this.selection.data("select2-data");
                    if (i) {
                        var n = t.Event("select2-clearing");
                        if (this.opts.element.trigger(n), n.isDefaultPrevented()) return;
                        var s = this.getPlaceholderOption();
                        this.opts.element.val(s ? s.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), e !== !1 && (this.opts.element.trigger({
                            type: "select2-removed",
                            val: this.id(i),
                            choice: i
                        }), this.triggerChange({
                            removed: i
                        }))
                    }
                },
                initSelection: function() {
                    if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                    else {
                        var t = this;
                        this.opts.initSelection.call(null, this.opts.element, function(i) {
                            i !== e && null !== i && (t.updateSelection(i), t.close(), t.setPlaceholder(), t.nextSearchTerm = t.opts.nextSearchTerm(i, t.search.val()))
                        })
                    }
                },
                isPlaceholderOptionSelected: function() {
                    var t;
                    return this.getPlaceholder() === e ? !1 : (t = this.getPlaceholderOption()) !== e && t.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === e || null === this.opts.element.val()
                },
                prepareOpts: function() {
                    var e = this.parent.prepareOpts.apply(this, arguments),
                        i = this;
                    return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
                        var n = t.find("option").filter(function() {
                            return this.selected && !this.disabled
                        });
                        e(i.optionToData(n))
                    } : "data" in e && (e.initSelection = e.initSelection || function(i, n) {
                        var s = i.val(),
                            r = null;
                        e.query({
                            matcher: function(t, i, n) {
                                var a = o(s, e.id(n));
                                return a && (r = n), a
                            },
                            callback: t.isFunction(n) ? function() {
                                n(r)
                            } : t.noop
                        })
                    }), e
                },
                getPlaceholder: function() {
                    return this.select && this.getPlaceholderOption() === e ? e : this.parent.getPlaceholder.apply(this, arguments)
                },
                setPlaceholder: function() {
                    var t = this.getPlaceholder();
                    if (this.isPlaceholderOptionSelected() && t !== e) {
                        if (this.select && this.getPlaceholderOption() === e) return;
                        this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                    }
                },
                postprocessResults: function(t, e, i) {
                    var n = 0,
                        s = this;
                    if (this.findHighlightableChoices().each2(function(t, e) {
                            return o(s.id(e.data("select2-data")), s.opts.element.val()) ? (n = t, !1) : void 0
                        }), i !== !1 && this.highlight(e === !0 && n >= 0 ? n : 0), e === !0) {
                        var r = this.opts.minimumResultsForSearch;
                        r >= 0 && this.showSearch(S(t.results) >= r)
                    }
                },
                showSearch: function(e) {
                    this.showSearchInput !== e && (this.showSearchInput = e, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e), t(this.dropdown, this.container).toggleClass("select2-with-searchbox", e))
                },
                onSelect: function(t, e) {
                    if (this.triggerSelect(t)) {
                        var i = this.opts.element.val(),
                            n = this.data();
                        this.opts.element.val(this.id(t)), this.updateSelection(t), this.opts.element.trigger({
                            type: "select2-selected",
                            val: this.id(t),
                            choice: t
                        }), this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()), this.close(), e && e.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), o(i, this.id(t)) || this.triggerChange({
                            added: t,
                            removed: n
                        })
                    }
                },
                updateSelection: function(t) {
                    var i, n, s = this.selection.find(".select2-chosen");
                    this.selection.data("select2-data", t), s.empty(), null !== t && (i = this.opts.formatSelection(t, s, this.opts.escapeMarkup)), i !== e && s.append(i), n = this.opts.formatSelectionCssClass(t, s), n !== e && s.addClass(n), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== e && this.container.addClass("select2-allowclear")
                },
                val: function() {
                    var t, i = !1,
                        n = null,
                        s = this,
                        r = this.data();
                    if (0 === arguments.length) return this.opts.element.val();
                    if (t = arguments[0], arguments.length > 1 && (i = arguments[1]), this.select) this.select.val(t).find("option").filter(function() {
                        return this.selected
                    }).each2(function(t, e) {
                        return n = s.optionToData(e), !1
                    }), this.updateSelection(n), this.setPlaceholder(), i && this.triggerChange({
                        added: n,
                        removed: r
                    });
                    else {
                        if (!t && 0 !== t) return void this.clear(i);
                        if (this.opts.initSelection === e) throw new Error("cannot call val() if initSelection() is not defined");
                        this.opts.element.val(t), this.opts.initSelection(this.opts.element, function(t) {
                            s.opts.element.val(t ? s.id(t) : ""), s.updateSelection(t), s.setPlaceholder(), i && s.triggerChange({
                                added: t,
                                removed: r
                            })
                        })
                    }
                },
                clearSearch: function() {
                    this.search.val(""), this.focusser.val("")
                },
                data: function(t) {
                    var i, n = !1;
                    return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == e && (i = null), i) : (arguments.length > 1 && (n = arguments[1]), void(t ? (i = this.data(), this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t), n && this.triggerChange({
                        added: t,
                        removed: i
                    })) : this.clear(n)))
                }
            }), P = A(N, {
                createContainer: function() {
                    var e = t(document.createElement("div")).attr({
                        "class": "select2-container select2-container-multi"
                    }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                    return e
                },
                prepareOpts: function() {
                    var e = this.parent.prepareOpts.apply(this, arguments),
                        i = this;
                    return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
                        var n = [];
                        t.find("option").filter(function() {
                            return this.selected && !this.disabled
                        }).each2(function(t, e) {
                            n.push(i.optionToData(e))
                        }), e(n)
                    } : "data" in e && (e.initSelection = e.initSelection || function(i, n) {
                        var s = a(i.val(), e.separator, e.transformVal),
                            r = [];
                        e.query({
                            matcher: function(i, n, a) {
                                var l = t.grep(s, function(t) {
                                    return o(t, e.id(a))
                                }).length;
                                return l && r.push(a), l
                            },
                            callback: t.isFunction(n) ? function() {
                                for (var t = [], i = 0; i < s.length; i++)
                                    for (var a = s[i], l = 0; l < r.length; l++) {
                                        var h = r[l];
                                        if (o(a, e.id(h))) {
                                            t.push(h), r.splice(l, 1);
                                            break
                                        }
                                    }
                                n(t)
                            } : t.noop
                        })
                    }), e
                },
                selectChoice: function(t) {
                    var e = this.container.find(".select2-search-choice-focus");
                    e.length && t && t[0] == e[0] || (e.length && this.opts.element.trigger("choice-deselected", e), e.removeClass("select2-search-choice-focus"), t && t.length && (this.close(), t.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", t)))
                },
                destroy: function() {
                    t("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), E.call(this, "searchContainer", "selection")
                },
                initContainer: function() {
                    var e, i = ".select2-choices";
                    this.searchContainer = this.container.find(".select2-search-field"), this.selection = e = this.container.find(i);
                    var n = this;
                    this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function() {
                        n.search[0].focus(), n.selectChoice(t(this))
                    }), this.search.attr("id", "s2id_autogen" + M()), this.search.prev().text(t("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.focus(this.bind(function() {
                        this.focus()
                    })), this.search.on("input paste", this.bind(function() {
                        this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                    })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(t) {
                        if (this.isInterfaceEnabled()) {
                            ++this.keydowns;
                            var i = e.find(".select2-search-choice-focus"),
                                n = i.prev(".select2-search-choice:not(.select2-locked)"),
                                s = i.next(".select2-search-choice:not(.select2-locked)"),
                                r = f(this.search);
                            if (i.length && (t.which == z.LEFT || t.which == z.RIGHT || t.which == z.BACKSPACE || t.which == z.DELETE || t.which == z.ENTER)) {
                                var o = i;
                                return t.which == z.LEFT && n.length ? o = n : t.which == z.RIGHT ? o = s.length ? s : null : t.which === z.BACKSPACE ? this.unselect(i.first()) && (this.search.width(10), o = n.length ? n : s) : t.which == z.DELETE ? this.unselect(i.first()) && (this.search.width(10), o = s.length ? s : null) : t.which == z.ENTER && (o = null), this.selectChoice(o), g(t), void(o && o.length || this.open())
                            }
                            if ((t.which === z.BACKSPACE && 1 == this.keydowns || t.which == z.LEFT) && 0 == r.offset && !r.length) return this.selectChoice(e.find(".select2-search-choice:not(.select2-locked)").last()), void g(t);
                            if (this.selectChoice(null), this.opened()) switch (t.which) {
                                case z.UP:
                                case z.DOWN:
                                    return this.moveHighlight(t.which === z.UP ? -1 : 1), void g(t);
                                case z.ENTER:
                                    return this.selectHighlighted(), void g(t);
                                case z.TAB:
                                    return this.selectHighlighted({
                                        noFocus: !0
                                    }), void this.close();
                                case z.ESC:
                                    return this.cancel(t), void g(t)
                            }
                            if (t.which !== z.TAB && !z.isControl(t) && !z.isFunctionKey(t) && t.which !== z.BACKSPACE && t.which !== z.ESC) {
                                if (t.which === z.ENTER) {
                                    if (this.opts.openOnEnter === !1) return;
                                    if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return
                                }
                                this.open(), (t.which === z.PAGE_UP || t.which === z.PAGE_DOWN) && g(t), t.which === z.ENTER && g(t)
                            }
                        }
                    })), this.search.on("keyup", this.bind(function() {
                        this.keydowns = 0, this.resizeSearch()
                    })), this.search.on("blur", this.bind(function(e) {
                        this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger(t.Event("select2-blur"))
                    })), this.container.on("click", i, this.bind(function(e) {
                        this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()))
                    })), this.container.on("focus", i, this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                    })), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
                },
                enableInterface: function() {
                    this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
                },
                initSelection: function() {
                    if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                        var t = this;
                        this.opts.initSelection.call(null, this.opts.element, function(i) {
                            i !== e && null !== i && (t.updateSelection(i), t.close(), t.clearSearch())
                        })
                    }
                },
                clearSearch: function() {
                    var t = this.getPlaceholder(),
                        i = this.getMaxSearchWidth();
                    t !== e && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(t).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10)
                },
                clearPlaceholder: function() {
                    this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
                },
                opening: function() {
                    this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(t.Event("select2-open"))
                },
                close: function() {
                    this.opened() && this.parent.close.apply(this, arguments)
                },
                focus: function() {
                    this.close(), this.search.focus()
                },
                isFocused: function() {
                    return this.search.hasClass("select2-focused")
                },
                updateSelection: function(e) {
                    var i = [],
                        n = [],
                        r = this;
                    t(e).each(function() {
                        s(r.id(this), i) < 0 && (i.push(r.id(this)), n.push(this))
                    }), e = n, this.selection.find(".select2-search-choice").remove(), t(e).each(function() {
                        r.addSelectedChoice(this)
                    }), r.postprocessResults()
                },
                tokenize: function() {
                    var t = this.search.val();
                    t = this.opts.tokenizer.call(this, t, this.data(), this.bind(this.onSelect), this.opts), null != t && t != e && (this.search.val(t), t.length > 0 && this.open())
                },
                onSelect: function(t, i) {
                    this.triggerSelect(t) && "" !== t.text && (this.addSelectedChoice(t), this.opts.element.trigger({
                        type: "selected",
                        val: this.id(t),
                        choice: t
                    }), this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(t, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                        added: t
                    }), i && i.noFocus || this.focusSearch())
                },
                cancel: function() {
                    this.close(), this.focusSearch()
                },
                addSelectedChoice: function(i) {
                    var n, s, r = !i.locked,
                        o = t("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                        a = t("<li class='select2-search-choice select2-locked'><div></div></li>"),
                        l = r ? o : a,
                        h = this.id(i),
                        c = this.getVal();
                    n = this.opts.formatSelection(i, l.find("div"), this.opts.escapeMarkup), n != e && l.find("div").replaceWith(t("<div></div>").html(n)), s = this.opts.formatSelectionCssClass(i, l.find("div")), s != e && l.addClass(s), r && l.find(".select2-search-choice-close").on("mousedown", g).on("click dblclick", this.bind(function(e) {
                        this.isInterfaceEnabled() && (this.unselect(t(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), g(e), this.close(), this.focusSearch())
                    })).on("focus", this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                    })), l.data("select2-data", i), l.insertBefore(this.searchContainer), c.push(h), this.setVal(c)
                },
                unselect: function(e) {
                    var i, n, r = this.getVal();
                    if (e = e.closest(".select2-search-choice"), 0 === e.length) throw "Invalid argument: " + e + ". Must be .select2-search-choice";
                    if (i = e.data("select2-data")) {
                        var o = t.Event("select2-removing");
                        if (o.val = this.id(i), o.choice = i, this.opts.element.trigger(o), o.isDefaultPrevented()) return !1;
                        for (;
                            (n = s(this.id(i), r)) >= 0;) r.splice(n, 1), this.setVal(r), this.select && this.postprocessResults();
                        return e.remove(), this.opts.element.trigger({
                            type: "select2-removed",
                            val: this.id(i),
                            choice: i
                        }), this.triggerChange({
                            removed: i
                        }), !0
                    }
                },
                postprocessResults: function(t, e, i) {
                    var n = this.getVal(),
                        r = this.results.find(".select2-result"),
                        o = this.results.find(".select2-result-with-children"),
                        a = this;
                    r.each2(function(t, e) {
                        var i = a.id(e.data("select2-data"));
                        s(i, n) >= 0 && (e.addClass("select2-selected"), e.find(".select2-result-selectable").addClass("select2-selected"))
                    }), o.each2(function(t, e) {
                        e.is(".select2-result-selectable") || 0 !== e.find(".select2-result-selectable:not(.select2-selected)").length || e.addClass("select2-selected")
                    }), -1 == this.highlight() && i !== !1 && this.opts.closeOnSelect === !0 && a.highlight(0), !this.opts.createSearchChoice && !r.filter(".select2-result:not(.select2-selected)").length > 0 && (!t || t && !t.more && 0 === this.results.find(".select2-no-results").length) && C(a.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + T(a.opts.formatNoMatches, a.opts.element, a.search.val()) + "</li>")
                },
                getMaxSearchWidth: function() {
                    return this.selection.width() - l(this.search)
                },
                resizeSearch: function() {
                    var t, e, i, n, s, r = l(this.search);
                    t = v(this.search) + 10, e = this.search.offset().left, i = this.selection.width(), n = this.selection.offset().left, s = i - (e - n) - r, t > s && (s = i - r), 40 > s && (s = i - r), 0 >= s && (s = t), this.search.width(Math.floor(s))
                },
                getVal: function() {
                    var t;
                    return this.select ? (t = this.select.val(), null === t ? [] : t) : (t = this.opts.element.val(), a(t, this.opts.separator, this.opts.transformVal))
                },
                setVal: function(e) {
                    var i;
                    this.select ? this.select.val(e) : (i = [], t(e).each(function() {
                        s(this, i) < 0 && i.push(this)
                    }), this.opts.element.val(0 === i.length ? "" : i.join(this.opts.separator)))
                },
                buildChangeDetails: function(t, e) {
                    for (var e = e.slice(0), t = t.slice(0), i = 0; i < e.length; i++)
                        for (var n = 0; n < t.length; n++) o(this.opts.id(e[i]), this.opts.id(t[n])) && (e.splice(i, 1), i > 0 && i--, t.splice(n, 1), n--);
                    return {
                        added: e,
                        removed: t
                    }
                },
                val: function(i, n) {
                    var s, r = this;
                    if (0 === arguments.length) return this.getVal();
                    if (s = this.data(), s.length || (s = []), !i && 0 !== i) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(n && this.triggerChange({
                        added: this.data(),
                        removed: s
                    }));
                    if (this.setVal(i), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), n && this.triggerChange(this.buildChangeDetails(s, this.data()));
                    else {
                        if (this.opts.initSelection === e) throw new Error("val() cannot be called if initSelection() is not defined");
                        this.opts.initSelection(this.opts.element, function(e) {
                            var i = t.map(e, r.id);
                            r.setVal(i), r.updateSelection(e), r.clearSearch(), n && r.triggerChange(r.buildChangeDetails(s, r.data()))
                        })
                    }
                    this.clearSearch()
                },
                onSortStart: function() {
                    if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                    this.search.width(0), this.searchContainer.hide()
                },
                onSortEnd: function() {
                    var e = [],
                        i = this;
                    this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                        e.push(i.opts.id(t(this).data("select2-data")))
                    }), this.setVal(e), this.triggerChange()
                },
                data: function(e, i) {
                    var n, s, r = this;
                    return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
                        return t(this).data("select2-data")
                    }).get() : (s = this.data(), e || (e = []), n = t.map(e, function(t) {
                        return r.opts.id(t)
                    }), this.setVal(n), this.updateSelection(e), this.clearSearch(), i && this.triggerChange(this.buildChangeDetails(s, this.data())), void 0)
                }
            }), t.fn.select2 = function() {
                var i, n, r, o, a, l = Array.prototype.slice.call(arguments, 0),
                    h = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                    c = ["opened", "isFocused", "container", "dropdown"],
                    u = ["val", "data"],
                    d = {
                        search: "externalSearch"
                    };
                return this.each(function() {
                    if (0 === l.length || "object" == typeof l[0]) i = 0 === l.length ? {} : t.extend({}, l[0]), i.element = t(this), "select" === i.element.get(0).tagName.toLowerCase() ? a = i.element.prop("multiple") : (a = i.multiple || !1, "tags" in i && (i.multiple = a = !0)), n = a ? new window.Select2["class"].multi : new window.Select2["class"].single, n.init(i);
                    else {
                        if ("string" != typeof l[0]) throw "Invalid arguments to select2 plugin: " + l;
                        if (s(l[0], h) < 0) throw "Unknown method: " + l[0];
                        if (o = e, n = t(this).data("select2"), n === e) return;
                        if (r = l[0], "container" === r ? o = n.container : "dropdown" === r ? o = n.dropdown : (d[r] && (r = d[r]), o = n[r].apply(n, l.slice(1))), s(l[0], c) >= 0 || s(l[0], u) >= 0 && 1 == l.length) return !1
                    }
                }), o === e ? this : o
            }, t.fn.select2.defaults = {
                width: "copy",
                loadMorePadding: 0,
                closeOnSelect: !0,
                openOnEnter: !0,
                containerCss: {},
                dropdownCss: {},
                containerCssClass: "",
                dropdownCssClass: "",
                formatResult: function(t, e, i, n) {
                    var s = [];
                    return b(this.text(t), i.term, s, n), s.join("")
                },
                transformVal: function(e) {
                    return t.trim(e)
                },
                formatSelection: function(t, i, n) {
                    return t ? n(this.text(t)) : e
                },
                sortResults: function(t) {
                    return t
                },
                formatResultCssClass: function(t) {
                    return t.css
                },
                formatSelectionCssClass: function() {
                    return e
                },
                minimumResultsForSearch: 0,
                minimumInputLength: 0,
                maximumInputLength: null,
                maximumSelectionSize: 0,
                id: function(t) {
                    return t == e ? null : t.id
                },
                text: function(e) {
                    return e && this.data && this.data.text ? t.isFunction(this.data.text) ? this.data.text(e) : e[this.data.text] : e.text
                },
                matcher: function(t, e) {
                    return n("" + e).toUpperCase().indexOf(n("" + t).toUpperCase()) >= 0
                },
                separator: ",",
                tokenSeparators: [],
                tokenizer: D,
                escapeMarkup: x,
                blurOnChange: !1,
                selectOnBlur: !1,
                adaptContainerCssClass: function(t) {
                    return t
                },
                adaptDropdownCssClass: function() {
                    return null
                },
                nextSearchTerm: function() {
                    return e
                },
                searchInputPlaceholder: "",
                createSearchChoicePosition: "top",
                shouldFocusInput: function(t) {
                    var e = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
                    return e && t.opts.minimumResultsForSearch < 0 ? !1 : !0
                }
            }, t.fn.select2.locales = [], t.fn.select2.locales.en = {
                formatMatches: function(t) {
                    return 1 === t ? "One result is available, press enter to select it." : t + " results are available, use up and down arrow keys to navigate."
                },
                formatNoMatches: function() {
                    return "No matches found"
                },
                formatAjaxError: function() {
                    return "Loading failed"
                },
                formatInputTooShort: function(t, e) {
                    var i = e - t.length;
                    return "Please enter " + i + " or more character" + (1 == i ? "" : "s")
                },
                formatInputTooLong: function(t, e) {
                    var i = t.length - e;
                    return "Please delete " + i + " character" + (1 == i ? "" : "s")
                },
                formatSelectionTooBig: function(t) {
                    return "You can only select " + t + " item" + (1 == t ? "" : "s")
                },
                formatLoadMore: function() {
                    return "Loading more results\u2026"
                },
                formatSearching: function() {
                    return "Searching\u2026"
                }
            }, t.extend(t.fn.select2.defaults, t.fn.select2.locales.en), t.fn.select2.ajaxDefaults = {
                transport: t.ajax,
                params: {
                    type: "GET",
                    cache: !1,
                    dataType: "json"
                }
            }, window.Select2 = {
                query: {
                    ajax: w,
                    local: _,
                    tags: k
                },
                util: {
                    debounce: u,
                    markMatch: b,
                    escapeMarkup: x,
                    stripDiacritics: n
                },
                "class": {
                    "abstract": N,
                    single: I,
                    multi: P
                }
            }
        }
    }(jQuery),
    function(t) {
        var e, i, n = "0.4.2",
            s = "hasOwnProperty",
            r = /[\.\/]/,
            o = "*",
            a = function() {},
            l = function(t, e) {
                return t - e
            },
            h = {
                n: {}
            },
            c = function(t, n) {
                t = String(t);
                var s, r = i,
                    o = Array.prototype.slice.call(arguments, 2),
                    a = c.listeners(t),
                    h = 0,
                    u = [],
                    d = {},
                    p = [],
                    f = e;
                e = t, i = 0;
                for (var g = 0, m = a.length; m > g; g++) "zIndex" in a[g] && (u.push(a[g].zIndex), a[g].zIndex < 0 && (d[a[g].zIndex] = a[g]));
                for (u.sort(l); u[h] < 0;)
                    if (s = d[u[h++]], p.push(s.apply(n, o)), i) return i = r, p;
                for (g = 0; m > g; g++)
                    if (s = a[g], "zIndex" in s)
                        if (s.zIndex == u[h]) {
                            if (p.push(s.apply(n, o)), i) break;
                            do
                                if (h++, s = d[u[h]], s && p.push(s.apply(n, o)), i) break;
                            while (s)
                        } else d[s.zIndex] = s;
                else if (p.push(s.apply(n, o)), i) break;
                return i = r, e = f, p.length ? p : null
            };
        c._events = h, c.listeners = function(t) {
            var e, i, n, s, a, l, c, u, d = t.split(r),
                p = h,
                f = [p],
                g = [];
            for (s = 0, a = d.length; a > s; s++) {
                for (u = [], l = 0, c = f.length; c > l; l++)
                    for (p = f[l].n, i = [p[d[s]], p[o]], n = 2; n--;) e = i[n], e && (u.push(e), g = g.concat(e.f || []));
                f = u
            }
            return g
        }, c.on = function(t, e) {
            if (t = String(t), "function" != typeof e) return function() {};
            for (var i = t.split(r), n = h, s = 0, o = i.length; o > s; s++) n = n.n, n = n.hasOwnProperty(i[s]) && n[i[s]] || (n[i[s]] = {
                n: {}
            });
            for (n.f = n.f || [], s = 0, o = n.f.length; o > s; s++)
                if (n.f[s] == e) return a;
            return n.f.push(e),
                function(t) {
                    +t == +t && (e.zIndex = +t)
                }
        }, c.f = function(t) {
            var e = [].slice.call(arguments, 1);
            return function() {
                c.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }, c.stop = function() {
            i = 1
        }, c.nt = function(t) {
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
        }, c.nts = function() {
            return e.split(r)
        }, c.off = c.unbind = function(t, e) {
            if (!t) return void(c._events = h = {
                n: {}
            });
            var i, n, a, l, u, d, p, f = t.split(r),
                g = [h];
            for (l = 0, u = f.length; u > l; l++)
                for (d = 0; d < g.length; d += a.length - 2) {
                    if (a = [d, 1], i = g[d].n, f[l] != o) i[f[l]] && a.push(i[f[l]]);
                    else
                        for (n in i) i[s](n) && a.push(i[n]);
                    g.splice.apply(g, a)
                }
            for (l = 0, u = g.length; u > l; l++)
                for (i = g[l]; i.n;) {
                    if (e) {
                        if (i.f) {
                            for (d = 0, p = i.f.length; p > d; d++)
                                if (i.f[d] == e) {
                                    i.f.splice(d, 1);
                                    break
                                }!i.f.length && delete i.f
                        }
                        for (n in i.n)
                            if (i.n[s](n) && i.n[n].f) {
                                var m = i.n[n].f;
                                for (d = 0, p = m.length; p > d; d++)
                                    if (m[d] == e) {
                                        m.splice(d, 1);
                                        break
                                    }!m.length && delete i.n[n].f
                            }
                    } else {
                        delete i.f;
                        for (n in i.n) i.n[s](n) && i.n[n].f && delete i.n[n].f
                    }
                    i = i.n
                }
        }, c.once = function(t, e) {
            var i = function() {
                return c.unbind(t, i), e.apply(this, arguments)
            };
            return c.on(t, i)
        }, c.version = n, c.toString = function() {
            return "You are running Eve " + n
        }, "undefined" != typeof module && module.exports ? module.exports = c : "undefined" != typeof define ? define("eve", [], function() {
            return c
        }) : t.eve = c
    }(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eve"], function(i) {
            return e(t, i)
        }) : e(t, t.eve)
    }(this, function(t, e) {
        function i(t) {
            if (i.is(t, "function")) return x ? t() : e.on("raphael.DOMload", t);
            if (i.is(t, X)) return i._engine.create[A](i, t.splice(0, 3 + i.is(t[0], Y))).add(t);
            var n = Array.prototype.slice.call(arguments, 0);
            if (i.is(n[n.length - 1], "function")) {
                var s = n.pop();
                return x ? s.call(i._engine.create[A](i, n)) : e.on("raphael.DOMload", function() {
                    s.call(i._engine.create[A](i, n))
                })
            }
            return i._engine.create[A](i, arguments)
        }

        function n(t) {
            if ("function" == typeof t || Object(t) !== t) return t;
            var e = new t.constructor;
            for (var i in t) t[T](i) && (e[i] = n(t[i]));
            return e
        }

        function s(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return t.push(t.splice(i, 1)[0])
        }

        function r(t, e, i) {
            function n() {
                var r = Array.prototype.slice.call(arguments, 0),
                    o = r.join("\u2400"),
                    a = n.cache = n.cache || {},
                    l = n.count = n.count || [];
                return a[T](o) ? (s(l, o), i ? i(a[o]) : a[o]) : (l.length >= 1e3 && delete a[l.shift()], l.push(o), a[o] = t[A](e, r), i ? i(a[o]) : a[o])
            }
            return n
        }

        function o() {
            return this.hex
        }

        function a(t, e) {
            for (var i = [], n = 0, s = t.length; s - 2 * !e > n; n += 2) {
                var r = [{
                    x: +t[n - 2],
                    y: +t[n - 1]
                }, {
                    x: +t[n],
                    y: +t[n + 1]
                }, {
                    x: +t[n + 2],
                    y: +t[n + 3]
                }, {
                    x: +t[n + 4],
                    y: +t[n + 5]
                }];
                e ? n ? s - 4 == n ? r[3] = {
                    x: +t[0],
                    y: +t[1]
                } : s - 2 == n && (r[2] = {
                    x: +t[0],
                    y: +t[1]
                }, r[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : r[0] = {
                    x: +t[s - 2],
                    y: +t[s - 1]
                } : s - 4 == n ? r[3] = r[2] : n || (r[0] = {
                    x: +t[n],
                    y: +t[n + 1]
                }), i.push(["C", (-r[0].x + 6 * r[1].x + r[2].x) / 6, (-r[0].y + 6 * r[1].y + r[2].y) / 6, (r[1].x + 6 * r[2].x - r[3].x) / 6, (r[1].y + 6 * r[2].y - r[3].y) / 6, r[2].x, r[2].y])
            }
            return i
        }

        function l(t, e, i, n, s) {
            var r = -3 * e + 9 * i - 9 * n + 3 * s,
                o = t * r + 6 * e - 12 * i + 6 * n;
            return t * o - 3 * e + 3 * i
        }

        function h(t, e, i, n, s, r, o, a, h) {
            null == h && (h = 1), h = h > 1 ? 1 : 0 > h ? 0 : h;
            for (var c = h / 2, u = 12, d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, g = 0; u > g; g++) {
                var m = c * d[g] + c,
                    v = l(m, t, i, s, o),
                    y = l(m, e, n, r, a),
                    b = v * v + y * y;
                f += p[g] * $.sqrt(b)
            }
            return c * f
        }

        function c(t, e, i, n, s, r, o, a, l) {
            if (!(0 > l || h(t, e, i, n, s, r, o, a) < l)) {
                var c, u = 1,
                    d = u / 2,
                    p = u - d,
                    f = .01;
                for (c = h(t, e, i, n, s, r, o, a, p); B(c - l) > f;) d /= 2, p += (l > c ? 1 : -1) * d, c = h(t, e, i, n, s, r, o, a, p);
                return p
            }
        }

        function u(t, e, i, n, s, r, o, a) {
            if (!(R(t, i) < j(s, o) || j(t, i) > R(s, o) || R(e, n) < j(r, a) || j(e, n) > R(r, a))) {
                var l = (t * n - e * i) * (s - o) - (t - i) * (s * a - r * o),
                    h = (t * n - e * i) * (r - a) - (e - n) * (s * a - r * o),
                    c = (t - i) * (r - a) - (e - n) * (s - o);
                if (c) {
                    var u = l / c,
                        d = h / c,
                        p = +u.toFixed(2),
                        f = +d.toFixed(2);
                    if (!(p < +j(t, i).toFixed(2) || p > +R(t, i).toFixed(2) || p < +j(s, o).toFixed(2) || p > +R(s, o).toFixed(2) || f < +j(e, n).toFixed(2) || f > +R(e, n).toFixed(2) || f < +j(r, a).toFixed(2) || f > +R(r, a).toFixed(2))) return {
                        x: u,
                        y: d
                    }
                }
            }
        }

        function d(t, e, n) {
            var s = i.bezierBBox(t),
                r = i.bezierBBox(e);
            if (!i.isBBoxIntersect(s, r)) return n ? 0 : [];
            for (var o = h.apply(0, t), a = h.apply(0, e), l = R(~~(o / 5), 1), c = R(~~(a / 5), 1), d = [], p = [], f = {}, g = n ? 0 : [], m = 0; l + 1 > m; m++) {
                var v = i.findDotsAtSegment.apply(i, t.concat(m / l));
                d.push({
                    x: v.x,
                    y: v.y,
                    t: m / l
                })
            }
            for (m = 0; c + 1 > m; m++) v = i.findDotsAtSegment.apply(i, e.concat(m / c)), p.push({
                x: v.x,
                y: v.y,
                t: m / c
            });
            for (m = 0; l > m; m++)
                for (var y = 0; c > y; y++) {
                    var b = d[m],
                        x = d[m + 1],
                        w = p[y],
                        _ = p[y + 1],
                        k = B(x.x - b.x) < .001 ? "y" : "x",
                        C = B(_.x - w.x) < .001 ? "y" : "x",
                        T = u(b.x, b.y, x.x, x.y, w.x, w.y, _.x, _.y);
                    if (T) {
                        if (f[T.x.toFixed(4)] == T.y.toFixed(4)) continue;
                        f[T.x.toFixed(4)] = T.y.toFixed(4);
                        var S = b.t + B((T[k] - b[k]) / (x[k] - b[k])) * (x.t - b.t),
                            D = w.t + B((T[C] - w[C]) / (_[C] - w[C])) * (_.t - w.t);
                        S >= 0 && 1.001 >= S && D >= 0 && 1.001 >= D && (n ? g++ : g.push({
                            x: T.x,
                            y: T.y,
                            t1: j(S, 1),
                            t2: j(D, 1)
                        }))
                    }
                }
            return g
        }

        function p(t, e, n) {
            t = i._path2curve(t), e = i._path2curve(e);
            for (var s, r, o, a, l, h, c, u, p, f, g = n ? 0 : [], m = 0, v = t.length; v > m; m++) {
                var y = t[m];
                if ("M" == y[0]) s = l = y[1], r = h = y[2];
                else {
                    "C" == y[0] ? (p = [s, r].concat(y.slice(1)), s = p[6], r = p[7]) : (p = [s, r, s, r, l, h, l, h], s = l, r = h);
                    for (var b = 0, x = e.length; x > b; b++) {
                        var w = e[b];
                        if ("M" == w[0]) o = c = w[1], a = u = w[2];
                        else {
                            "C" == w[0] ? (f = [o, a].concat(w.slice(1)), o = f[6], a = f[7]) : (f = [o, a, o, a, c, u, c, u], o = c, a = u);
                            var _ = d(p, f, n);
                            if (n) g += _;
                            else {
                                for (var k = 0, C = _.length; C > k; k++) _[k].segment1 = m, _[k].segment2 = b, _[k].bez1 = p, _[k].bez2 = f;
                                g = g.concat(_)
                            }
                        }
                    }
                }
            }
            return g
        }

        function f(t, e, i, n, s, r) {
            null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +n, this.e = +s, this.f = +r) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
        }

        function g() {
            return this.x + M + this.y + M + this.width + " \xd7 " + this.height
        }

        function m(t, e, i, n, s, r) {
            function o(t) {
                return ((u * t + c) * t + h) * t
            }

            function a(t, e) {
                var i = l(t, e);
                return ((f * i + p) * i + d) * i
            }

            function l(t, e) {
                var i, n, s, r, a, l;
                for (s = t, l = 0; 8 > l; l++) {
                    if (r = o(s) - t, B(r) < e) return s;
                    if (a = (3 * u * s + 2 * c) * s + h, B(a) < 1e-6) break;
                    s -= r / a
                }
                if (i = 0, n = 1, s = t, i > s) return i;
                if (s > n) return n;
                for (; n > i;) {
                    if (r = o(s), B(r - t) < e) return s;
                    t > r ? i = s : n = s, s = (n - i) / 2 + i
                }
                return s
            }
            var h = 3 * e,
                c = 3 * (n - e) - h,
                u = 1 - h - c,
                d = 3 * i,
                p = 3 * (s - i) - d,
                f = 1 - d - p;
            return a(t, 1 / (200 * r))
        }

        function v(t, e) {
            var i = [],
                n = {};
            if (this.ms = e, this.times = 1, t) {
                for (var s in t) t[T](s) && (n[J(s)] = t[s], i.push(J(s)));
                i.sort(ue)
            }
            this.anim = n, this.top = i[i.length - 1], this.percents = i
        }

        function y(t, n, s, r, o, a) {
            s = J(s);
            var l, h, c, u, d, p, g = t.ms,
                v = {},
                y = {},
                b = {};
            if (r)
                for (w = 0, k = li.length; k > w; w++) {
                    var x = li[w];
                    if (x.el.id == n.id && x.anim == t) {
                        x.percent != s ? (li.splice(w, 1), c = 1) : h = x, n.attr(x.totalOrigin);
                        break
                    }
                } else r = +y;
            for (var w = 0, k = t.percents.length; k > w; w++) {
                if (t.percents[w] == s || t.percents[w] > r * t.top) {
                    s = t.percents[w], d = t.percents[w - 1] || 0, g = g / t.top * (s - d), u = t.percents[w + 1], l = t.anim[s];
                    break
                }
                r && n.attr(t.anim[t.percents[w]])
            }
            if (l) {
                if (h) h.initstatus = r, h.start = new Date - h.ms * r;
                else {
                    for (var C in l)
                        if (l[T](C) && (ne[T](C) || n.paper.customAttributes[T](C))) switch (v[C] = n.attr(C), null == v[C] && (v[C] = ie[C]), y[C] = l[C], ne[C]) {
                            case Y:
                                b[C] = (y[C] - v[C]) / g;
                                break;
                            case "colour":
                                v[C] = i.getRGB(v[C]);
                                var S = i.getRGB(y[C]);
                                b[C] = {
                                    r: (S.r - v[C].r) / g,
                                    g: (S.g - v[C].g) / g,
                                    b: (S.b - v[C].b) / g
                                };
                                break;
                            case "path":
                                var D = Oe(v[C], y[C]),
                                    E = D[1];
                                for (v[C] = D[0], b[C] = [], w = 0, k = v[C].length; k > w; w++) {
                                    b[C][w] = [0];
                                    for (var A = 1, I = v[C][w].length; I > A; A++) b[C][w][A] = (E[w][A] - v[C][w][A]) / g
                                }
                                break;
                            case "transform":
                                var P = n._,
                                    M = je(P[C], y[C]);
                                if (M)
                                    for (v[C] = M.from, y[C] = M.to, b[C] = [], b[C].real = !0, w = 0, k = v[C].length; k > w; w++)
                                        for (b[C][w] = [v[C][w][0]], A = 1, I = v[C][w].length; I > A; A++) b[C][w][A] = (y[C][w][A] - v[C][w][A]) / g;
                                else {
                                    var O = n.matrix || new f,
                                        F = {
                                            _: {
                                                transform: P.transform
                                            },
                                            getBBox: function() {
                                                return n.getBBox(1)
                                            }
                                        };
                                    v[C] = [O.a, O.b, O.c, O.d, O.e, O.f], $e(F, y[C]), y[C] = F._.transform, b[C] = [(F.matrix.a - O.a) / g, (F.matrix.b - O.b) / g, (F.matrix.c - O.c) / g, (F.matrix.d - O.d) / g, (F.matrix.e - O.e) / g, (F.matrix.f - O.f) / g]
                                }
                                break;
                            case "csv":
                                var z = L(l[C])[H](_),
                                    $ = L(v[C])[H](_);
                                if ("clip-rect" == C)
                                    for (v[C] = $, b[C] = [], w = $.length; w--;) b[C][w] = (z[w] - v[C][w]) / g;
                                y[C] = z;
                                break;
                            default:
                                for (z = [][N](l[C]), $ = [][N](v[C]), b[C] = [], w = n.paper.customAttributes[C].length; w--;) b[C][w] = ((z[w] || 0) - ($[w] || 0)) / g
                        }
                    var R = l.easing,
                        j = i.easing_formulas[R];
                    if (!j)
                        if (j = L(R).match(Q), j && 5 == j.length) {
                            var B = j;
                            j = function(t) {
                                return m(t, +B[1], +B[2], +B[3], +B[4], g)
                            }
                        } else j = pe;
                    if (p = l.start || t.start || +new Date, x = {
                            anim: t,
                            percent: s,
                            timestamp: p,
                            start: p + (t.del || 0),
                            status: 0,
                            initstatus: r || 0,
                            stop: !1,
                            ms: g,
                            easing: j,
                            from: v,
                            diff: b,
                            to: y,
                            el: n,
                            callback: l.callback,
                            prev: d,
                            next: u,
                            repeat: a || t.times,
                            origin: n.attr(),
                            totalOrigin: o
                        }, li.push(x), r && !h && !c && (x.stop = !0, x.start = new Date - g * r, 1 == li.length)) return ci();
                    c && (x.start = new Date - x.ms * r), 1 == li.length && hi(ci)
                }
                e("raphael.anim.start." + n.id, n, t)
            }
        }

        function b(t) {
            for (var e = 0; e < li.length; e++) li[e].el.paper == t && li.splice(e--, 1)
        }
        i.version = "2.1.2", i.eve = e;
        var x, w, _ = /[, ]+/,
            k = {
                circle: 1,
                rect: 1,
                path: 1,
                ellipse: 1,
                text: 1,
                image: 1
            },
            C = /\{(\d+)\}/g,
            T = "hasOwnProperty",
            S = {
                doc: document,
                win: t
            },
            D = {
                was: Object.prototype[T].call(S.win, "Raphael"),
                is: S.win.Raphael
            },
            E = function() {
                this.ca = this.customAttributes = {}
            },
            A = "apply",
            N = "concat",
            I = "ontouchstart" in S.win || S.win.DocumentTouch && S.doc instanceof DocumentTouch,
            P = "",
            M = " ",
            L = String,
            H = "split",
            O = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [H](M),
            F = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            },
            z = L.prototype.toLowerCase,
            $ = Math,
            R = $.max,
            j = $.min,
            B = $.abs,
            W = $.pow,
            q = $.PI,
            Y = "number",
            U = "string",
            X = "array",
            G = Object.prototype.toString,
            V = (i._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
            K = {
                NaN: 1,
                Infinity: 1,
                "-Infinity": 1
            },
            Q = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
            Z = $.round,
            J = parseFloat,
            te = parseInt,
            ee = L.prototype.toUpperCase,
            ie = i._availableAttrs = {
                "arrow-end": "none",
                "arrow-start": "none",
                blur: 0,
                "clip-rect": "0 0 1e9 1e9",
                cursor: "default",
                cx: 0,
                cy: 0,
                fill: "#fff",
                "fill-opacity": 1,
                font: '10px "Arial"',
                "font-family": '"Arial"',
                "font-size": "10",
                "font-style": "normal",
                "font-weight": 400,
                gradient: 0,
                height: 0,
                href: "http://raphaeljs.com/",
                "letter-spacing": 0,
                opacity: 1,
                path: "M0,0",
                r: 0,
                rx: 0,
                ry: 0,
                src: "",
                stroke: "#000",
                "stroke-dasharray": "",
                "stroke-linecap": "butt",
                "stroke-linejoin": "butt",
                "stroke-miterlimit": 0,
                "stroke-opacity": 1,
                "stroke-width": 1,
                target: "_blank",
                "text-anchor": "middle",
                title: "Raphael",
                transform: "",
                width: 0,
                x: 0,
                y: 0
            },
            ne = i._availableAnimAttrs = {
                blur: Y,
                "clip-rect": "csv",
                cx: Y,
                cy: Y,
                fill: "colour",
                "fill-opacity": Y,
                "font-size": Y,
                height: Y,
                opacity: Y,
                path: "path",
                r: Y,
                rx: Y,
                ry: Y,
                stroke: "colour",
                "stroke-opacity": Y,
                "stroke-width": Y,
                transform: "transform",
                width: Y,
                x: Y,
                y: Y
            },
            se = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
            re = {
                hs: 1,
                rg: 1
            },
            oe = /,?([achlmqrstvxz]),?/gi,
            ae = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            le = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            he = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
            ce = (i._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
            ue = function(t, e) {
                return J(t) - J(e)
            },
            de = function() {},
            pe = function(t) {
                return t
            },
            fe = i._rectPath = function(t, e, i, n, s) {
                return s ? [
                    ["M", t + s, e],
                    ["l", i - 2 * s, 0],
                    ["a", s, s, 0, 0, 1, s, s],
                    ["l", 0, n - 2 * s],
                    ["a", s, s, 0, 0, 1, -s, s],
                    ["l", 2 * s - i, 0],
                    ["a", s, s, 0, 0, 1, -s, -s],
                    ["l", 0, 2 * s - n],
                    ["a", s, s, 0, 0, 1, s, -s],
                    ["z"]
                ] : [
                    ["M", t, e],
                    ["l", i, 0],
                    ["l", 0, n],
                    ["l", -i, 0],
                    ["z"]
                ]
            },
            ge = function(t, e, i, n) {
                return null == n && (n = i), [
                    ["M", t, e],
                    ["m", 0, -n],
                    ["a", i, n, 0, 1, 1, 0, 2 * n],
                    ["a", i, n, 0, 1, 1, 0, -2 * n],
                    ["z"]
                ]
            },
            me = i._getPath = {
                path: function(t) {
                    return t.attr("path")
                },
                circle: function(t) {
                    var e = t.attrs;
                    return ge(e.cx, e.cy, e.r)
                },
                ellipse: function(t) {
                    var e = t.attrs;
                    return ge(e.cx, e.cy, e.rx, e.ry)
                },
                rect: function(t) {
                    var e = t.attrs;
                    return fe(e.x, e.y, e.width, e.height, e.r)
                },
                image: function(t) {
                    var e = t.attrs;
                    return fe(e.x, e.y, e.width, e.height)
                },
                text: function(t) {
                    var e = t._getBBox();
                    return fe(e.x, e.y, e.width, e.height)
                },
                set: function(t) {
                    var e = t._getBBox();
                    return fe(e.x, e.y, e.width, e.height)
                }
            },
            ve = i.mapPath = function(t, e) {
                if (!e) return t;
                var i, n, s, r, o, a, l;
                for (t = Oe(t), s = 0, o = t.length; o > s; s++)
                    for (l = t[s], r = 1, a = l.length; a > r; r += 2) i = e.x(l[r], l[r + 1]), n = e.y(l[r], l[r + 1]), l[r] = i, l[r + 1] = n;
                return t
            };
        if (i._g = S, i.type = S.win.SVGAngle || S.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == i.type) {
            var ye, be = S.doc.createElement("div");
            if (be.innerHTML = '<v:shape adj="1"/>', ye = be.firstChild, ye.style.behavior = "url(#default#VML)", !ye || "object" != typeof ye.adj) return i.type = P;
            be = null
        }
        i.svg = !(i.vml = "VML" == i.type), i._Paper = E, i.fn = w = E.prototype = i.prototype, i._id = 0, i._oid = 0, i.is = function(t, e) {
            return e = z.call(e), "finite" == e ? !K[T](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || G.call(t).slice(8, -1).toLowerCase() == e
        }, i.angle = function(t, e, n, s, r, o) {
            if (null == r) {
                var a = t - n,
                    l = e - s;
                return a || l ? (180 + 180 * $.atan2(-l, -a) / q + 360) % 360 : 0
            }
            return i.angle(t, e, r, o) - i.angle(n, s, r, o)
        }, i.rad = function(t) {
            return t % 360 * q / 180
        }, i.deg = function(t) {
            return 180 * t / q % 360
        }, i.snapTo = function(t, e, n) {
            if (n = i.is(n, "finite") ? n : 10, i.is(t, X)) {
                for (var s = t.length; s--;)
                    if (B(t[s] - e) <= n) return t[s]
            } else {
                t = +t;
                var r = e % t;
                if (n > r) return e - r;
                if (r > t - n) return e - r + t
            }
            return e
        };
        i.createUUID = function(t, e) {
            return function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
            }
        }(/[xy]/g, function(t) {
            var e = 16 * $.random() | 0,
                i = "x" == t ? e : 3 & e | 8;
            return i.toString(16)
        });
        i.setWindow = function(t) {
            e("raphael.setWindow", i, S.win, t), S.win = t, S.doc = S.win.document, i._engine.initWin && i._engine.initWin(S.win)
        };
        var xe = function(t) {
                if (i.vml) {
                    var e, n = /^\s+|\s+$/g;
                    try {
                        var s = new ActiveXObject("htmlfile");
                        s.write("<body>"), s.close(), e = s.body
                    } catch (o) {
                        e = createPopup().document.body
                    }
                    var a = e.createTextRange();
                    xe = r(function(t) {
                        try {
                            e.style.color = L(t).replace(n, P);
                            var i = a.queryCommandValue("ForeColor");
                            return i = (255 & i) << 16 | 65280 & i | (16711680 & i) >>> 16, "#" + ("000000" + i.toString(16)).slice(-6)
                        } catch (s) {
                            return "none"
                        }
                    })
                } else {
                    var l = S.doc.createElement("i");
                    l.title = "Rapha\xebl Colour Picker", l.style.display = "none", S.doc.body.appendChild(l), xe = r(function(t) {
                        return l.style.color = t, S.doc.defaultView.getComputedStyle(l, P).getPropertyValue("color")
                    })
                }
                return xe(t)
            },
            we = function() {
                return "hsb(" + [this.h, this.s, this.b] + ")"
            },
            _e = function() {
                return "hsl(" + [this.h, this.s, this.l] + ")"
            },
            ke = function() {
                return this.hex
            },
            Ce = function(t, e, n) {
                if (null == e && i.is(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && i.is(t, U)) {
                    var s = i.getRGB(t);
                    t = s.r, e = s.g, n = s.b
                }
                return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
            },
            Te = function(t, e, n, s) {
                t *= 255, e *= 255, n *= 255;
                var r = {
                    r: t,
                    g: e,
                    b: n,
                    hex: i.rgb(t, e, n),
                    toString: ke
                };
                return i.is(s, "finite") && (r.opacity = s), r
            };
        i.color = function(t) {
            var e;
            return i.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = i.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : i.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = i.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (i.is(t, "string") && (t = i.getRGB(t)), i.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = i.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = i.rgb2hsb(t), t.v = e.b) : (t = {
                hex: "none"
            }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = ke, t
        }, i.hsb2rgb = function(t, e, i, n) {
            this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, t = t.h, n = t.o), t *= 360;
            var s, r, o, a, l;
            return t = t % 360 / 60, l = i * e, a = l * (1 - B(t % 2 - 1)), s = r = o = i - l, t = ~~t, s += [l, a, 0, 0, a, l][t], r += [a, l, l, a, 0, 0][t], o += [0, 0, a, l, l, a][t], Te(s, r, o, n)
        }, i.hsl2rgb = function(t, e, i, n) {
            this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), t *= 360;
            var s, r, o, a, l;
            return t = t % 360 / 60, l = 2 * e * (.5 > i ? i : 1 - i), a = l * (1 - B(t % 2 - 1)), s = r = o = i - l / 2, t = ~~t, s += [l, a, 0, 0, a, l][t], r += [a, l, l, a, 0, 0][t], o += [0, 0, a, l, l, a][t], Te(s, r, o, n)
        }, i.rgb2hsb = function(t, e, i) {
            i = Ce(t, e, i), t = i[0], e = i[1], i = i[2];
            var n, s, r, o;
            return r = R(t, e, i), o = r - j(t, e, i), n = 0 == o ? null : r == t ? (e - i) / o : r == e ? (i - t) / o + 2 : (t - e) / o + 4, n = (n + 360) % 6 * 60 / 360, s = 0 == o ? 0 : o / r, {
                h: n,
                s: s,
                b: r,
                toString: we
            }
        }, i.rgb2hsl = function(t, e, i) {
            i = Ce(t, e, i), t = i[0], e = i[1], i = i[2];
            var n, s, r, o, a, l;
            return o = R(t, e, i), a = j(t, e, i), l = o - a, n = 0 == l ? null : o == t ? (e - i) / l : o == e ? (i - t) / l + 2 : (t - e) / l + 4, n = (n + 360) % 6 * 60 / 360, r = (o + a) / 2, s = 0 == l ? 0 : .5 > r ? l / (2 * r) : l / (2 - 2 * r), {
                h: n,
                s: s,
                l: r,
                toString: _e
            }
        }, i._path2string = function() {
            return this.join(",").replace(oe, "$1")
        };
        i._preload = function(t, e) {
            var i = S.doc.createElement("img");
            i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
                e.call(this), this.onload = null, S.doc.body.removeChild(this)
            }, i.onerror = function() {
                S.doc.body.removeChild(this)
            }, S.doc.body.appendChild(i), i.src = t
        };
        i.getRGB = r(function(t) {
            if (!t || (t = L(t)).indexOf("-") + 1) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: o
            };
            if ("none" == t) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: o
            };
            !(re[T](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = xe(t));
            var e, n, s, r, a, l, h = t.match(V);
            return h ? (h[2] && (s = te(h[2].substring(5), 16), n = te(h[2].substring(3, 5), 16), e = te(h[2].substring(1, 3), 16)), h[3] && (s = te((a = h[3].charAt(3)) + a, 16), n = te((a = h[3].charAt(2)) + a, 16), e = te((a = h[3].charAt(1)) + a, 16)), h[4] && (l = h[4][H](se), e = J(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = J(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), s = J(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (r = J(l[3])), l[3] && "%" == l[3].slice(-1) && (r /= 100)), h[5] ? (l = h[5][H](se), e = J(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = J(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), s = J(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), ("deg" == l[0].slice(-3) || "\xb0" == l[0].slice(-1)) && (e /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (r = J(l[3])), l[3] && "%" == l[3].slice(-1) && (r /= 100), i.hsb2rgb(e, n, s, r)) : h[6] ? (l = h[6][H](se), e = J(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = J(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), s = J(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), ("deg" == l[0].slice(-3) || "\xb0" == l[0].slice(-1)) && (e /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (r = J(l[3])), l[3] && "%" == l[3].slice(-1) && (r /= 100), i.hsl2rgb(e, n, s, r)) : (h = {
                r: e,
                g: n,
                b: s,
                toString: o
            }, h.hex = "#" + (16777216 | s | n << 8 | e << 16).toString(16).slice(1), i.is(r, "finite") && (h.opacity = r), h)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: o
            }
        }, i), i.hsb = r(function(t, e, n) {
            return i.hsb2rgb(t, e, n).hex
        }), i.hsl = r(function(t, e, n) {
            return i.hsl2rgb(t, e, n).hex
        }), i.rgb = r(function(t, e, i) {
            return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
        }), i.getColor = function(t) {
            var e = this.getColor.start = this.getColor.start || {
                    h: 0,
                    s: 1,
                    b: t || .75
                },
                i = this.hsb2rgb(e.h, e.s, e.b);
            return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: e.b
            })), i.hex
        }, i.getColor.reset = function() {
            delete this.start
        }, i.parsePathString = function(t) {
            if (!t) return null;
            var e = Se(t);
            if (e.arr) return Ee(e.arr);
            var n = {
                    a: 7,
                    c: 6,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    z: 0
                },
                s = [];
            return i.is(t, X) && i.is(t[0], X) && (s = Ee(t)), s.length || L(t).replace(ae, function(t, e, i) {
                var r = [],
                    o = e.toLowerCase();
                if (i.replace(he, function(t, e) {
                        e && r.push(+e)
                    }), "m" == o && r.length > 2 && (s.push([e][N](r.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "r" == o) s.push([e][N](r));
                else
                    for (; r.length >= n[o] && (s.push([e][N](r.splice(0, n[o]))), n[o]););
            }), s.toString = i._path2string, e.arr = Ee(s), s
        }, i.parseTransformString = r(function(t) {
            if (!t) return null;
            var e = [];
            return i.is(t, X) && i.is(t[0], X) && (e = Ee(t)), e.length || L(t).replace(le, function(t, i, n) {
                {
                    var s = [];
                    z.call(i)
                }
                n.replace(he, function(t, e) {
                    e && s.push(+e)
                }), e.push([i][N](s))
            }), e.toString = i._path2string, e
        });
        var Se = function(t) {
            var e = Se.ps = Se.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {
                sleep: 100
            }, setTimeout(function() {
                for (var i in e) e[T](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i])
            }), e[t]
        };
        i.findDotsAtSegment = function(t, e, i, n, s, r, o, a, l) {
            var h = 1 - l,
                c = W(h, 3),
                u = W(h, 2),
                d = l * l,
                p = d * l,
                f = c * t + 3 * u * l * i + 3 * h * l * l * s + p * o,
                g = c * e + 3 * u * l * n + 3 * h * l * l * r + p * a,
                m = t + 2 * l * (i - t) + d * (s - 2 * i + t),
                v = e + 2 * l * (n - e) + d * (r - 2 * n + e),
                y = i + 2 * l * (s - i) + d * (o - 2 * s + i),
                b = n + 2 * l * (r - n) + d * (a - 2 * r + n),
                x = h * t + l * i,
                w = h * e + l * n,
                _ = h * s + l * o,
                k = h * r + l * a,
                C = 90 - 180 * $.atan2(m - y, v - b) / q;
            return (m > y || b > v) && (C += 180), {
                x: f,
                y: g,
                m: {
                    x: m,
                    y: v
                },
                n: {
                    x: y,
                    y: b
                },
                start: {
                    x: x,
                    y: w
                },
                end: {
                    x: _,
                    y: k
                },
                alpha: C
            }
        }, i.bezierBBox = function(t, e, n, s, r, o, a, l) {
            i.is(t, "array") || (t = [t, e, n, s, r, o, a, l]);
            var h = He.apply(null, t);
            return {
                x: h.min.x,
                y: h.min.y,
                x2: h.max.x,
                y2: h.max.y,
                width: h.max.x - h.min.x,
                height: h.max.y - h.min.y
            }
        }, i.isPointInsideBBox = function(t, e, i) {
            return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2
        }, i.isBBoxIntersect = function(t, e) {
            var n = i.isPointInsideBBox;
            return n(e, t.x, t.y) || n(e, t.x2, t.y) || n(e, t.x, t.y2) || n(e, t.x2, t.y2) || n(t, e.x, e.y) || n(t, e.x2, e.y) || n(t, e.x, e.y2) || n(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }, i.pathIntersection = function(t, e) {
            return p(t, e)
        }, i.pathIntersectionNumber = function(t, e) {
            return p(t, e, 1)
        }, i.isPointInsidePath = function(t, e, n) {
            var s = i.pathBBox(t);
            return i.isPointInsideBBox(s, e, n) && p(t, [
                ["M", e, n],
                ["H", s.x2 + 10]
            ], 1) % 2 == 1
        }, i._removedFactory = function(t) {
            return function() {
                e("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + t + "\u201d of removed object", t)
            }
        };
        var De = i.pathBBox = function(t) {
                var e = Se(t);
                if (e.bbox) return n(e.bbox);
                if (!t) return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    x2: 0,
                    y2: 0
                };
                t = Oe(t);
                for (var i, s = 0, r = 0, o = [], a = [], l = 0, h = t.length; h > l; l++)
                    if (i = t[l], "M" == i[0]) s = i[1], r = i[2], o.push(s), a.push(r);
                    else {
                        var c = He(s, r, i[1], i[2], i[3], i[4], i[5], i[6]);
                        o = o[N](c.min.x, c.max.x), a = a[N](c.min.y, c.max.y), s = i[5], r = i[6]
                    }
                var u = j[A](0, o),
                    d = j[A](0, a),
                    p = R[A](0, o),
                    f = R[A](0, a),
                    g = p - u,
                    m = f - d,
                    v = {
                        x: u,
                        y: d,
                        x2: p,
                        y2: f,
                        width: g,
                        height: m,
                        cx: u + g / 2,
                        cy: d + m / 2
                    };
                return e.bbox = n(v), v
            },
            Ee = function(t) {
                var e = n(t);
                return e.toString = i._path2string, e
            },
            Ae = i._pathToRelative = function(t) {
                var e = Se(t);
                if (e.rel) return Ee(e.rel);
                i.is(t, X) && i.is(t && t[0], X) || (t = i.parsePathString(t));
                var n = [],
                    s = 0,
                    r = 0,
                    o = 0,
                    a = 0,
                    l = 0;
                "M" == t[0][0] && (s = t[0][1], r = t[0][2], o = s, a = r, l++, n.push(["M", s, r]));
                for (var h = l, c = t.length; c > h; h++) {
                    var u = n[h] = [],
                        d = t[h];
                    if (d[0] != z.call(d[0])) switch (u[0] = z.call(d[0]), u[0]) {
                        case "a":
                            u[1] = d[1], u[2] = d[2], u[3] = d[3], u[4] = d[4], u[5] = d[5], u[6] = +(d[6] - s).toFixed(3), u[7] = +(d[7] - r).toFixed(3);
                            break;
                        case "v":
                            u[1] = +(d[1] - r).toFixed(3);
                            break;
                        case "m":
                            o = d[1], a = d[2];
                        default:
                            for (var p = 1, f = d.length; f > p; p++) u[p] = +(d[p] - (p % 2 ? s : r)).toFixed(3)
                    } else {
                        u = n[h] = [], "m" == d[0] && (o = d[1] + s, a = d[2] + r);
                        for (var g = 0, m = d.length; m > g; g++) n[h][g] = d[g]
                    }
                    var v = n[h].length;
                    switch (n[h][0]) {
                        case "z":
                            s = o, r = a;
                            break;
                        case "h":
                            s += +n[h][v - 1];
                            break;
                        case "v":
                            r += +n[h][v - 1];
                            break;
                        default:
                            s += +n[h][v - 2], r += +n[h][v - 1]
                    }
                }
                return n.toString = i._path2string, e.rel = Ee(n), n
            },
            Ne = i._pathToAbsolute = function(t) {
                var e = Se(t);
                if (e.abs) return Ee(e.abs);
                if (i.is(t, X) && i.is(t && t[0], X) || (t = i.parsePathString(t)), !t || !t.length) return [
                    ["M", 0, 0]
                ];
                var n = [],
                    s = 0,
                    r = 0,
                    o = 0,
                    l = 0,
                    h = 0;
                "M" == t[0][0] && (s = +t[0][1], r = +t[0][2], o = s, l = r, h++, n[0] = ["M", s, r]);
                for (var c, u, d = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = h, f = t.length; f > p; p++) {
                    if (n.push(c = []), u = t[p], u[0] != ee.call(u[0])) switch (c[0] = ee.call(u[0]), c[0]) {
                            case "A":
                                c[1] = u[1], c[2] = u[2], c[3] = u[3], c[4] = u[4], c[5] = u[5], c[6] = +(u[6] + s), c[7] = +(u[7] + r);
                                break;
                            case "V":
                                c[1] = +u[1] + r;
                                break;
                            case "H":
                                c[1] = +u[1] + s;
                                break;
                            case "R":
                                for (var g = [s, r][N](u.slice(1)), m = 2, v = g.length; v > m; m++) g[m] = +g[m] + s, g[++m] = +g[m] + r;
                                n.pop(), n = n[N](a(g, d));
                                break;
                            case "M":
                                o = +u[1] + s, l = +u[2] + r;
                            default:
                                for (m = 1, v = u.length; v > m; m++) c[m] = +u[m] + (m % 2 ? s : r)
                        } else if ("R" == u[0]) g = [s, r][N](u.slice(1)), n.pop(), n = n[N](a(g, d)), c = ["R"][N](u.slice(-2));
                        else
                            for (var y = 0, b = u.length; b > y; y++) c[y] = u[y];
                    switch (c[0]) {
                        case "Z":
                            s = o, r = l;
                            break;
                        case "H":
                            s = c[1];
                            break;
                        case "V":
                            r = c[1];
                            break;
                        case "M":
                            o = c[c.length - 2], l = c[c.length - 1];
                        default:
                            s = c[c.length - 2], r = c[c.length - 1]
                    }
                }
                return n.toString = i._path2string, e.abs = Ee(n), n
            },
            Ie = function(t, e, i, n) {
                return [t, e, i, n, i, n]
            },
            Pe = function(t, e, i, n, s, r) {
                var o = 1 / 3,
                    a = 2 / 3;
                return [o * t + a * i, o * e + a * n, o * s + a * i, o * r + a * n, s, r]
            },
            Me = function(t, e, i, n, s, o, a, l, h, c) {
                var u, d = 120 * q / 180,
                    p = q / 180 * (+s || 0),
                    f = [],
                    g = r(function(t, e, i) {
                        var n = t * $.cos(i) - e * $.sin(i),
                            s = t * $.sin(i) + e * $.cos(i);
                        return {
                            x: n,
                            y: s
                        }
                    });
                if (c) C = c[0], T = c[1], _ = c[2], k = c[3];
                else {
                    u = g(t, e, -p), t = u.x, e = u.y, u = g(l, h, -p), l = u.x, h = u.y;
                    var m = ($.cos(q / 180 * s), $.sin(q / 180 * s), (t - l) / 2),
                        v = (e - h) / 2,
                        y = m * m / (i * i) + v * v / (n * n);
                    y > 1 && (y = $.sqrt(y), i = y * i, n = y * n);
                    var b = i * i,
                        x = n * n,
                        w = (o == a ? -1 : 1) * $.sqrt(B((b * x - b * v * v - x * m * m) / (b * v * v + x * m * m))),
                        _ = w * i * v / n + (t + l) / 2,
                        k = w * -n * m / i + (e + h) / 2,
                        C = $.asin(((e - k) / n).toFixed(9)),
                        T = $.asin(((h - k) / n).toFixed(9));
                    C = _ > t ? q - C : C, T = _ > l ? q - T : T, 0 > C && (C = 2 * q + C), 0 > T && (T = 2 * q + T), a && C > T && (C -= 2 * q), !a && T > C && (T -= 2 * q)
                }
                var S = T - C;
                if (B(S) > d) {
                    var D = T,
                        E = l,
                        A = h;
                    T = C + d * (a && T > C ? 1 : -1), l = _ + i * $.cos(T), h = k + n * $.sin(T), f = Me(l, h, i, n, s, 0, a, E, A, [T, D, _, k])
                }
                S = T - C;
                var I = $.cos(C),
                    P = $.sin(C),
                    M = $.cos(T),
                    L = $.sin(T),
                    O = $.tan(S / 4),
                    F = 4 / 3 * i * O,
                    z = 4 / 3 * n * O,
                    R = [t, e],
                    j = [t + F * P, e - z * I],
                    W = [l + F * L, h - z * M],
                    Y = [l, h];
                if (j[0] = 2 * R[0] - j[0], j[1] = 2 * R[1] - j[1], c) return [j, W, Y][N](f);
                f = [j, W, Y][N](f).join()[H](",");
                for (var U = [], X = 0, G = f.length; G > X; X++) U[X] = X % 2 ? g(f[X - 1], f[X], p).y : g(f[X], f[X + 1], p).x;
                return U
            },
            Le = function(t, e, i, n, s, r, o, a, l) {
                var h = 1 - l;
                return {
                    x: W(h, 3) * t + 3 * W(h, 2) * l * i + 3 * h * l * l * s + W(l, 3) * o,
                    y: W(h, 3) * e + 3 * W(h, 2) * l * n + 3 * h * l * l * r + W(l, 3) * a
                }
            },
            He = r(function(t, e, i, n, s, r, o, a) {
                var l, h = s - 2 * i + t - (o - 2 * s + i),
                    c = 2 * (i - t) - 2 * (s - i),
                    u = t - i,
                    d = (-c + $.sqrt(c * c - 4 * h * u)) / 2 / h,
                    p = (-c - $.sqrt(c * c - 4 * h * u)) / 2 / h,
                    f = [e, a],
                    g = [t, o];
                return B(d) > "1e12" && (d = .5), B(p) > "1e12" && (p = .5), d > 0 && 1 > d && (l = Le(t, e, i, n, s, r, o, a, d), g.push(l.x), f.push(l.y)), p > 0 && 1 > p && (l = Le(t, e, i, n, s, r, o, a, p), g.push(l.x), f.push(l.y)), h = r - 2 * n + e - (a - 2 * r + n), c = 2 * (n - e) - 2 * (r - n), u = e - n, d = (-c + $.sqrt(c * c - 4 * h * u)) / 2 / h, p = (-c - $.sqrt(c * c - 4 * h * u)) / 2 / h, B(d) > "1e12" && (d = .5), B(p) > "1e12" && (p = .5), d > 0 && 1 > d && (l = Le(t, e, i, n, s, r, o, a, d), g.push(l.x), f.push(l.y)), p > 0 && 1 > p && (l = Le(t, e, i, n, s, r, o, a, p), g.push(l.x), f.push(l.y)), {
                    min: {
                        x: j[A](0, g),
                        y: j[A](0, f)
                    },
                    max: {
                        x: R[A](0, g),
                        y: R[A](0, f)
                    }
                }
            }),
            Oe = i._path2curve = r(function(t, e) {
                var i = !e && Se(t);
                if (!e && i.curve) return Ee(i.curve);
                for (var n = Ne(t), s = e && Ne(e), r = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, o = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, a = (function(t, e, i) {
                        var n, s;
                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                        switch (!(t[0] in {
                            T: 1,
                            Q: 1
                        }) && (e.qx = e.qy = null), t[0]) {
                            case "M":
                                e.X = t[1], e.Y = t[2];
                                break;
                            case "A":
                                t = ["C"][N](Me[A](0, [e.x, e.y][N](t.slice(1))));
                                break;
                            case "S":
                                "C" == i || "S" == i ? (n = 2 * e.x - e.bx, s = 2 * e.y - e.by) : (n = e.x, s = e.y), t = ["C", n, s][N](t.slice(1));
                                break;
                            case "T":
                                "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][N](Pe(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                break;
                            case "Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"][N](Pe(e.x, e.y, t[1], t[2], t[3], t[4]));
                                break;
                            case "L":
                                t = ["C"][N](Ie(e.x, e.y, t[1], t[2]));
                                break;
                            case "H":
                                t = ["C"][N](Ie(e.x, e.y, t[1], e.y));
                                break;
                            case "V":
                                t = ["C"][N](Ie(e.x, e.y, e.x, t[1]));
                                break;
                            case "Z":
                                t = ["C"][N](Ie(e.x, e.y, e.X, e.Y))
                        }
                        return t
                    }), l = function(t, e) {
                        if (t[e].length > 7) {
                            t[e].shift();
                            for (var i = t[e]; i.length;) t.splice(e++, 0, ["C"][N](i.splice(0, 6)));
                            t.splice(e, 1), u = R(n.length, s && s.length || 0)
                        }
                    }, h = function(t, e, i, r, o) {
                        t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", r.x, r.y]), i.bx = 0, i.by = 0, i.x = t[o][1], i.y = t[o][2], u = R(n.length, s && s.length || 0))
                    }, c = 0, u = R(n.length, s && s.length || 0); u > c; c++) {
                    n[c] = a(n[c], r), l(n, c), s && (s[c] = a(s[c], o)), s && l(s, c), h(n, s, r, o, c), h(s, n, o, r, c);
                    var d = n[c],
                        p = s && s[c],
                        f = d.length,
                        g = s && p.length;
                    r.x = d[f - 2], r.y = d[f - 1], r.bx = J(d[f - 4]) || r.x, r.by = J(d[f - 3]) || r.y, o.bx = s && (J(p[g - 4]) || o.x), o.by = s && (J(p[g - 3]) || o.y), o.x = s && p[g - 2], o.y = s && p[g - 1]
                }
                return s || (i.curve = Ee(n)), s ? [n, s] : n
            }, null, Ee),
            Fe = (i._parseDots = r(function(t) {
                for (var e = [], n = 0, s = t.length; s > n; n++) {
                    var r = {},
                        o = t[n].match(/^([^:]*):?([\d\.]*)/);
                    if (r.color = i.getRGB(o[1]), r.color.error) return null;
                    r.color = r.color.hex, o[2] && (r.offset = o[2] + "%"), e.push(r)
                }
                for (n = 1, s = e.length - 1; s > n; n++)
                    if (!e[n].offset) {
                        for (var a = J(e[n - 1].offset || 0), l = 0, h = n + 1; s > h; h++)
                            if (e[h].offset) {
                                l = e[h].offset;
                                break
                            }
                        l || (l = 100, h = s), l = J(l);
                        for (var c = (l - a) / (h - n + 1); h > n; n++) a += c, e[n].offset = a + "%"
                    }
                return e
            }), i._tear = function(t, e) {
                t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
            }),
            ze = (i._tofront = function(t, e) {
                e.top !== t && (Fe(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
            }, i._toback = function(t, e) {
                e.bottom !== t && (Fe(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
            }, i._insertafter = function(t, e, i) {
                Fe(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
            }, i._insertbefore = function(t, e, i) {
                Fe(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
            }, i.toMatrix = function(t, e) {
                var i = De(t),
                    n = {
                        _: {
                            transform: P
                        },
                        getBBox: function() {
                            return i
                        }
                    };
                return $e(n, e), n.matrix
            }),
            $e = (i.transformPath = function(t, e) {
                return ve(t, ze(t, e))
            }, i._extractTransform = function(t, e) {
                if (null == e) return t._.transform;
                e = L(e).replace(/\.{3}|\u2026/g, t._.transform || P);
                var n = i.parseTransformString(e),
                    s = 0,
                    r = 0,
                    o = 0,
                    a = 1,
                    l = 1,
                    h = t._,
                    c = new f;
                if (h.transform = n || [], n)
                    for (var u = 0, d = n.length; d > u; u++) {
                        var p, g, m, v, y, b = n[u],
                            x = b.length,
                            w = L(b[0]).toLowerCase(),
                            _ = b[0] != w,
                            k = _ ? c.invert() : 0;
                        "t" == w && 3 == x ? _ ? (p = k.x(0, 0), g = k.y(0, 0), m = k.x(b[1], b[2]), v = k.y(b[1], b[2]), c.translate(m - p, v - g)) : c.translate(b[1], b[2]) : "r" == w ? 2 == x ? (y = y || t.getBBox(1), c.rotate(b[1], y.x + y.width / 2, y.y + y.height / 2), s += b[1]) : 4 == x && (_ ? (m = k.x(b[2], b[3]), v = k.y(b[2], b[3]), c.rotate(b[1], m, v)) : c.rotate(b[1], b[2], b[3]), s += b[1]) : "s" == w ? 2 == x || 3 == x ? (y = y || t.getBBox(1), c.scale(b[1], b[x - 1], y.x + y.width / 2, y.y + y.height / 2), a *= b[1], l *= b[x - 1]) : 5 == x && (_ ? (m = k.x(b[3], b[4]), v = k.y(b[3], b[4]), c.scale(b[1], b[2], m, v)) : c.scale(b[1], b[2], b[3], b[4]), a *= b[1], l *= b[2]) : "m" == w && 7 == x && c.add(b[1], b[2], b[3], b[4], b[5], b[6]), h.dirtyT = 1, t.matrix = c
                    }
                t.matrix = c, h.sx = a, h.sy = l, h.deg = s, h.dx = r = c.e, h.dy = o = c.f, 1 == a && 1 == l && !s && h.bbox ? (h.bbox.x += +r, h.bbox.y += +o) : h.dirtyT = 1
            }),
            Re = function(t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                    case "t":
                        return [e, 0, 0];
                    case "m":
                        return [e, 1, 0, 0, 1, 0, 0];
                    case "r":
                        return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                    case "s":
                        return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                }
            },
            je = i._equaliseTransform = function(t, e) {
                e = L(e).replace(/\.{3}|\u2026/g, t), t = i.parseTransformString(t) || [], e = i.parseTransformString(e) || [];
                for (var n, s, r, o, a = R(t.length, e.length), l = [], h = [], c = 0; a > c; c++) {
                    if (r = t[c] || Re(e[c]), o = e[c] || Re(r), r[0] != o[0] || "r" == r[0].toLowerCase() && (r[2] != o[2] || r[3] != o[3]) || "s" == r[0].toLowerCase() && (r[3] != o[3] || r[4] != o[4])) return;
                    for (l[c] = [], h[c] = [], n = 0, s = R(r.length, o.length); s > n; n++) n in r && (l[c][n] = r[n]), n in o && (h[c][n] = o[n])
                }
                return {
                    from: l,
                    to: h
                }
            };
        i._getContainer = function(t, e, n, s) {
                var r;
                return r = null != s || i.is(t, "object") ? t : S.doc.getElementById(t), null != r ? r.tagName ? null == e ? {
                    container: r,
                    width: r.style.pixelWidth || r.offsetWidth,
                    height: r.style.pixelHeight || r.offsetHeight
                } : {
                    container: r,
                    width: e,
                    height: n
                } : {
                    container: 1,
                    x: t,
                    y: e,
                    width: n,
                    height: s
                } : void 0
            }, i.pathToRelative = Ae, i._engine = {}, i.path2curve = Oe, i.matrix = function(t, e, i, n, s, r) {
                return new f(t, e, i, n, s, r)
            },
            function(t) {
                function e(t) {
                    return t[0] * t[0] + t[1] * t[1]
                }

                function n(t) {
                    var i = $.sqrt(e(t));
                    t[0] && (t[0] /= i), t[1] && (t[1] /= i)
                }
                t.add = function(t, e, i, n, s, r) {
                    var o, a, l, h, c = [
                            [],
                            [],
                            []
                        ],
                        u = [
                            [this.a, this.c, this.e],
                            [this.b, this.d, this.f],
                            [0, 0, 1]
                        ],
                        d = [
                            [t, i, s],
                            [e, n, r],
                            [0, 0, 1]
                        ];
                    for (t && t instanceof f && (d = [
                            [t.a, t.c, t.e],
                            [t.b, t.d, t.f],
                            [0, 0, 1]
                        ]), o = 0; 3 > o; o++)
                        for (a = 0; 3 > a; a++) {
                            for (h = 0, l = 0; 3 > l; l++) h += u[o][l] * d[l][a];
                            c[o][a] = h
                        }
                    this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2]
                }, t.invert = function() {
                    var t = this,
                        e = t.a * t.d - t.b * t.c;
                    return new f(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                }, t.clone = function() {
                    return new f(this.a, this.b, this.c, this.d, this.e, this.f)
                }, t.translate = function(t, e) {
                    this.add(1, 0, 0, 1, t, e)
                }, t.scale = function(t, e, i, n) {
                    null == e && (e = t), (i || n) && this.add(1, 0, 0, 1, i, n), this.add(t, 0, 0, e, 0, 0), (i || n) && this.add(1, 0, 0, 1, -i, -n)
                }, t.rotate = function(t, e, n) {
                    t = i.rad(t), e = e || 0, n = n || 0;
                    var s = +$.cos(t).toFixed(9),
                        r = +$.sin(t).toFixed(9);
                    this.add(s, r, -r, s, e, n), this.add(1, 0, 0, 1, -e, -n)
                }, t.x = function(t, e) {
                    return t * this.a + e * this.c + this.e
                }, t.y = function(t, e) {
                    return t * this.b + e * this.d + this.f
                }, t.get = function(t) {
                    return +this[L.fromCharCode(97 + t)].toFixed(4)
                }, t.toString = function() {
                    return i.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                }, t.toFilter = function() {
                    return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                }, t.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, t.split = function() {
                    var t = {};
                    t.dx = this.e, t.dy = this.f;
                    var s = [
                        [this.a, this.c],
                        [this.b, this.d]
                    ];
                    t.scalex = $.sqrt(e(s[0])), n(s[0]), t.shear = s[0][0] * s[1][0] + s[0][1] * s[1][1], s[1] = [s[1][0] - s[0][0] * t.shear, s[1][1] - s[0][1] * t.shear], t.scaley = $.sqrt(e(s[1])), n(s[1]), t.shear /= t.scaley;
                    var r = -s[0][1],
                        o = s[1][1];
                    return 0 > o ? (t.rotate = i.deg($.acos(o)), 0 > r && (t.rotate = 360 - t.rotate)) : t.rotate = i.deg($.asin(r)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                }, t.toTransformString = function(t) {
                    var e = t || this[H]();
                    return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : P) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : P) + (e.rotate ? "r" + [e.rotate, 0, 0] : P)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                }
            }(f.prototype);
        var Be = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
        w.safari = "Apple Computer, Inc." == navigator.vendor && (Be && Be[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Be && Be[1] < 8 ? function() {
            var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
                stroke: "none"
            });
            setTimeout(function() {
                t.remove()
            })
        } : de;
        for (var We = function() {
                this.returnValue = !1
            }, qe = function() {
                return this.originalEvent.preventDefault()
            }, Ye = function() {
                this.cancelBubble = !0
            }, Ue = function() {
                return this.originalEvent.stopPropagation()
            }, Xe = function(t) {
                var e = S.doc.documentElement.scrollTop || S.doc.body.scrollTop,
                    i = S.doc.documentElement.scrollLeft || S.doc.body.scrollLeft;
                return {
                    x: t.clientX + i,
                    y: t.clientY + e
                }
            }, Ge = function() {
                return S.doc.addEventListener ? function(t, e, i, n) {
                    var s = function(t) {
                        var e = Xe(t);
                        return i.call(n, t, e.x, e.y)
                    };
                    if (t.addEventListener(e, s, !1), I && F[e]) {
                        var r = function(e) {
                            for (var s = Xe(e), r = e, o = 0, a = e.targetTouches && e.targetTouches.length; a > o; o++)
                                if (e.targetTouches[o].target == t) {
                                    e = e.targetTouches[o], e.originalEvent = r, e.preventDefault = qe, e.stopPropagation = Ue;
                                    break
                                }
                            return i.call(n, e, s.x, s.y)
                        };
                        t.addEventListener(F[e], r, !1)
                    }
                    return function() {
                        return t.removeEventListener(e, s, !1), I && F[e] && t.removeEventListener(F[e], s, !1), !0
                    }
                } : S.doc.attachEvent ? function(t, e, i, n) {
                    var s = function(t) {
                        t = t || S.win.event;
                        var e = S.doc.documentElement.scrollTop || S.doc.body.scrollTop,
                            s = S.doc.documentElement.scrollLeft || S.doc.body.scrollLeft,
                            r = t.clientX + s,
                            o = t.clientY + e;
                        return t.preventDefault = t.preventDefault || We, t.stopPropagation = t.stopPropagation || Ye, i.call(n, t, r, o)
                    };
                    t.attachEvent("on" + e, s);
                    var r = function() {
                        return t.detachEvent("on" + e, s), !0
                    };
                    return r
                } : void 0
            }(), Ve = [], Ke = function(t) {
                for (var i, n = t.clientX, s = t.clientY, r = S.doc.documentElement.scrollTop || S.doc.body.scrollTop, o = S.doc.documentElement.scrollLeft || S.doc.body.scrollLeft, a = Ve.length; a--;) {
                    if (i = Ve[a], I && t.touches) {
                        for (var l, h = t.touches.length; h--;)
                            if (l = t.touches[h], l.identifier == i.el._drag.id) {
                                n = l.clientX, s = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                break
                            }
                    } else t.preventDefault();
                    var c, u = i.el.node,
                        d = u.nextSibling,
                        p = u.parentNode,
                        f = u.style.display;
                    S.win.opera && p.removeChild(u), u.style.display = "none", c = i.el.paper.getElementByPoint(n, s), u.style.display = f, S.win.opera && (d ? p.insertBefore(u, d) : p.appendChild(u)), c && e("raphael.drag.over." + i.el.id, i.el, c), n += o, s += r, e("raphael.drag.move." + i.el.id, i.move_scope || i.el, n - i.el._drag.x, s - i.el._drag.y, n, s, t)
                }
            }, Qe = function(t) {
                i.unmousemove(Ke).unmouseup(Qe);
                for (var n, s = Ve.length; s--;) n = Ve[s], n.el._drag = {}, e("raphael.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, t);
                Ve = []
            }, Ze = i.el = {}, Je = O.length; Je--;) ! function(t) {
            i[t] = Ze[t] = function(e, n) {
                return i.is(e, "function") && (this.events = this.events || [], this.events.push({
                    name: t,
                    f: e,
                    unbind: Ge(this.shape || this.node || S.doc, t, e, n || this)
                })), this
            }, i["un" + t] = Ze["un" + t] = function(e) {
                for (var n = this.events || [], s = n.length; s--;) n[s].name != t || !i.is(e, "undefined") && n[s].f != e || (n[s].unbind(), n.splice(s, 1), !n.length && delete this.events);
                return this
            }
        }(O[Je]);
        Ze.data = function(t, n) {
            var s = ce[this.id] = ce[this.id] || {};
            if (0 == arguments.length) return s;
            if (1 == arguments.length) {
                if (i.is(t, "object")) {
                    for (var r in t) t[T](r) && this.data(r, t[r]);
                    return this
                }
                return e("raphael.data.get." + this.id, this, s[t], t), s[t]
            }
            return s[t] = n, e("raphael.data.set." + this.id, this, n, t), this
        }, Ze.removeData = function(t) {
            return null == t ? ce[this.id] = {} : ce[this.id] && delete ce[this.id][t], this
        }, Ze.getData = function() {
            return n(ce[this.id] || {})
        }, Ze.hover = function(t, e, i, n) {
            return this.mouseover(t, i).mouseout(e, n || i)
        }, Ze.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var ti = [];
        Ze.drag = function(t, n, s, r, o, a) {
            function l(l) {
                (l.originalEvent || l).preventDefault();
                var h = l.clientX,
                    c = l.clientY,
                    u = S.doc.documentElement.scrollTop || S.doc.body.scrollTop,
                    d = S.doc.documentElement.scrollLeft || S.doc.body.scrollLeft;
                if (this._drag.id = l.identifier, I && l.touches)
                    for (var p, f = l.touches.length; f--;)
                        if (p = l.touches[f], this._drag.id = p.identifier, p.identifier == this._drag.id) {
                            h = p.clientX, c = p.clientY;
                            break
                        }
                this._drag.x = h + d, this._drag.y = c + u, !Ve.length && i.mousemove(Ke).mouseup(Qe), Ve.push({
                    el: this,
                    move_scope: r,
                    start_scope: o,
                    end_scope: a
                }), n && e.on("raphael.drag.start." + this.id, n), t && e.on("raphael.drag.move." + this.id, t), s && e.on("raphael.drag.end." + this.id, s), e("raphael.drag.start." + this.id, o || r || this, l.clientX + d, l.clientY + u, l)
            }
            return this._drag = {}, ti.push({
                el: this,
                start: l
            }), this.mousedown(l), this
        }, Ze.onDragOver = function(t) {
            t ? e.on("raphael.drag.over." + this.id, t) : e.unbind("raphael.drag.over." + this.id)
        }, Ze.undrag = function() {
            for (var t = ti.length; t--;) ti[t].el == this && (this.unmousedown(ti[t].start), ti.splice(t, 1), e.unbind("raphael.drag.*." + this.id));
            !ti.length && i.unmousemove(Ke).unmouseup(Qe), Ve = []
        }, w.circle = function(t, e, n) {
            var s = i._engine.circle(this, t || 0, e || 0, n || 0);
            return this.__set__ && this.__set__.push(s), s
        }, w.rect = function(t, e, n, s, r) {
            var o = i._engine.rect(this, t || 0, e || 0, n || 0, s || 0, r || 0);
            return this.__set__ && this.__set__.push(o), o
        }, w.ellipse = function(t, e, n, s) {
            var r = i._engine.ellipse(this, t || 0, e || 0, n || 0, s || 0);
            return this.__set__ && this.__set__.push(r), r
        }, w.path = function(t) {
            t && !i.is(t, U) && !i.is(t[0], X) && (t += P);
            var e = i._engine.path(i.format[A](i, arguments), this);
            return this.__set__ && this.__set__.push(e), e
        }, w.image = function(t, e, n, s, r) {
            var o = i._engine.image(this, t || "about:blank", e || 0, n || 0, s || 0, r || 0);
            return this.__set__ && this.__set__.push(o), o
        }, w.text = function(t, e, n) {
            var s = i._engine.text(this, t || 0, e || 0, L(n));
            return this.__set__ && this.__set__.push(s), s
        }, w.set = function(t) {
            !i.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
            var e = new di(t);
            return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
        }, w.setStart = function(t) {
            this.__set__ = t || this.set()
        }, w.setFinish = function() {
            var t = this.__set__;
            return delete this.__set__, t
        }, w.setSize = function(t, e) {
            return i._engine.setSize.call(this, t, e)
        }, w.setViewBox = function(t, e, n, s, r) {
            return i._engine.setViewBox.call(this, t, e, n, s, r)
        }, w.top = w.bottom = null, w.raphael = i;
        var ei = function(t) {
            var e = t.getBoundingClientRect(),
                i = t.ownerDocument,
                n = i.body,
                s = i.documentElement,
                r = s.clientTop || n.clientTop || 0,
                o = s.clientLeft || n.clientLeft || 0,
                a = e.top + (S.win.pageYOffset || s.scrollTop || n.scrollTop) - r,
                l = e.left + (S.win.pageXOffset || s.scrollLeft || n.scrollLeft) - o;
            return {
                y: a,
                x: l
            }
        };
        w.getElementByPoint = function(t, e) {
            var i = this,
                n = i.canvas,
                s = S.doc.elementFromPoint(t, e);
            if (S.win.opera && "svg" == s.tagName) {
                var r = ei(n),
                    o = n.createSVGRect();
                o.x = t - r.x, o.y = e - r.y, o.width = o.height = 1;
                var a = n.getIntersectionList(o, null);
                a.length && (s = a[a.length - 1])
            }
            if (!s) return null;
            for (; s.parentNode && s != n.parentNode && !s.raphael;) s = s.parentNode;
            return s == i.canvas.parentNode && (s = n), s = s && s.raphael ? i.getById(s.raphaelid) : null
        }, w.getElementsByBBox = function(t) {
            var e = this.set();
            return this.forEach(function(n) {
                i.isBBoxIntersect(n.getBBox(), t) && e.push(n)
            }), e
        }, w.getById = function(t) {
            for (var e = this.bottom; e;) {
                if (e.id == t) return e;
                e = e.next
            }
            return null
        }, w.forEach = function(t, e) {
            for (var i = this.bottom; i;) {
                if (t.call(e, i) === !1) return this;
                i = i.next
            }
            return this
        }, w.getElementsByPoint = function(t, e) {
            var i = this.set();
            return this.forEach(function(n) {
                n.isPointInside(t, e) && i.push(n)
            }), i
        }, Ze.isPointInside = function(t, e) {
            var n = this.realPath = me[this.type](this);
            return this.attr("transform") && this.attr("transform").length && (n = i.transformPath(n, this.attr("transform"))), i.isPointInsidePath(n, t, e)
        }, Ze.getBBox = function(t) {
            if (this.removed) return {};
            var e = this._;
            return t ? ((e.dirty || !e.bboxwt) && (this.realPath = me[this.type](this), e.bboxwt = De(this.realPath), e.bboxwt.toString = g, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = me[this.type](this)), e.bbox = De(ve(this.realPath, this.matrix)), e.bbox.toString = g, e.dirty = e.dirtyT = 0), e.bbox)
        }, Ze.clone = function() {
            if (this.removed) return null;
            var t = this.paper[this.type]().attr(this.attr());
            return this.__set__ && this.__set__.push(t), t
        }, Ze.glow = function(t) {
            if ("text" == this.type) return null;
            t = t || {};
            var e = {
                    width: (t.width || 10) + (+this.attr("stroke-width") || 1),
                    fill: t.fill || !1,
                    opacity: t.opacity || .5,
                    offsetx: t.offsetx || 0,
                    offsety: t.offsety || 0,
                    color: t.color || "#000"
                },
                i = e.width / 2,
                n = this.paper,
                s = n.set(),
                r = this.realPath || me[this.type](this);
            r = this.matrix ? ve(r, this.matrix) : r;
            for (var o = 1; i + 1 > o; o++) s.push(n.path(r).attr({
                stroke: e.color,
                fill: e.fill ? e.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(e.width / i * o).toFixed(3),
                opacity: +(e.opacity / i).toFixed(3)
            }));
            return s.insertBefore(this).translate(e.offsetx, e.offsety)
        };
        var ii = function(t, e, n, s, r, o, a, l, u) {
                return null == u ? h(t, e, n, s, r, o, a, l) : i.findDotsAtSegment(t, e, n, s, r, o, a, l, c(t, e, n, s, r, o, a, l, u))
            },
            ni = function(t, e) {
                return function(n, s, r) {
                    n = Oe(n);
                    for (var o, a, l, h, c, u = "", d = {}, p = 0, f = 0, g = n.length; g > f; f++) {
                        if (l = n[f], "M" == l[0]) o = +l[1], a = +l[2];
                        else {
                            if (h = ii(o, a, l[1], l[2], l[3], l[4], l[5], l[6]), p + h > s) {
                                if (e && !d.start) {
                                    if (c = ii(o, a, l[1], l[2], l[3], l[4], l[5], l[6], s - p), u += ["C" + c.start.x, c.start.y, c.m.x, c.m.y, c.x, c.y], r) return u;
                                    d.start = u, u = ["M" + c.x, c.y + "C" + c.n.x, c.n.y, c.end.x, c.end.y, l[5], l[6]].join(), p += h, o = +l[5], a = +l[6];
                                    continue
                                }
                                if (!t && !e) return c = ii(o, a, l[1], l[2], l[3], l[4], l[5], l[6], s - p), {
                                    x: c.x,
                                    y: c.y,
                                    alpha: c.alpha
                                }
                            }
                            p += h, o = +l[5], a = +l[6]
                        }
                        u += l.shift() + l
                    }
                    return d.end = u, c = t ? p : e ? d : i.findDotsAtSegment(o, a, l[0], l[1], l[2], l[3], l[4], l[5], 1), c.alpha && (c = {
                        x: c.x,
                        y: c.y,
                        alpha: c.alpha
                    }), c
                }
            },
            si = ni(1),
            ri = ni(),
            oi = ni(0, 1);
        i.getTotalLength = si, i.getPointAtLength = ri, i.getSubpath = function(t, e, i) {
            if (this.getTotalLength(t) - i < 1e-6) return oi(t, e).end;
            var n = oi(t, i, 1);
            return e ? oi(n, e).end : n
        }, Ze.getTotalLength = function() {
            var t = this.getPath();
            if (t) return this.node.getTotalLength ? this.node.getTotalLength() : si(t)
        }, Ze.getPointAtLength = function(t) {
            var e = this.getPath();
            if (e) return ri(e, t)
        }, Ze.getPath = function() {
            var t, e = i._getPath[this.type];
            if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
        }, Ze.getSubpath = function(t, e) {
            var n = this.getPath();
            if (n) return i.getSubpath(n, t, e)
        };
        var ai = i.easing_formulas = {
            linear: function(t) {
                return t
            },
            "<": function(t) {
                return W(t, 1.7)
            },
            ">": function(t) {
                return W(t, .48)
            },
            "<>": function(t) {
                var e = .48 - t / 1.04,
                    i = $.sqrt(.1734 + e * e),
                    n = i - e,
                    s = W(B(n), 1 / 3) * (0 > n ? -1 : 1),
                    r = -i - e,
                    o = W(B(r), 1 / 3) * (0 > r ? -1 : 1),
                    a = s + o + .5;
                return 3 * (1 - a) * a * a + a * a * a
            },
            backIn: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            backOut: function(t) {
                t -= 1;
                var e = 1.70158;
                return t * t * ((e + 1) * t + e) + 1
            },
            elastic: function(t) {
                return t == !!t ? t : W(2, -10 * t) * $.sin(2 * (t - .075) * q / .3) + 1
            },
            bounce: function(t) {
                var e, i = 7.5625,
                    n = 2.75;
                return 1 / n > t ? e = i * t * t : 2 / n > t ? (t -= 1.5 / n, e = i * t * t + .75) : 2.5 / n > t ? (t -= 2.25 / n, e = i * t * t + .9375) : (t -= 2.625 / n, e = i * t * t + .984375), e
            }
        };
        ai.easeIn = ai["ease-in"] = ai["<"], ai.easeOut = ai["ease-out"] = ai[">"], ai.easeInOut = ai["ease-in-out"] = ai["<>"], ai["back-in"] = ai.backIn, ai["back-out"] = ai.backOut;
        var li = [],
            hi = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                setTimeout(t, 16)
            },
            ci = function() {
                for (var t = +new Date, n = 0; n < li.length; n++) {
                    var s = li[n];
                    if (!s.el.removed && !s.paused) {
                        var r, o, a = t - s.start,
                            l = s.ms,
                            h = s.easing,
                            c = s.from,
                            u = s.diff,
                            d = s.to,
                            p = (s.t, s.el),
                            f = {},
                            g = {};
                        if (s.initstatus ? (a = (s.initstatus * s.anim.top - s.prev) / (s.percent - s.prev) * l, s.status = s.initstatus, delete s.initstatus, s.stop && li.splice(n--, 1)) : s.status = (s.prev + (s.percent - s.prev) * (a / l)) / s.anim.top, !(0 > a))
                            if (l > a) {
                                var m = h(a / l);
                                for (var v in c)
                                    if (c[T](v)) {
                                        switch (ne[v]) {
                                            case Y:
                                                r = +c[v] + m * l * u[v];
                                                break;
                                            case "colour":
                                                r = "rgb(" + [ui(Z(c[v].r + m * l * u[v].r)), ui(Z(c[v].g + m * l * u[v].g)), ui(Z(c[v].b + m * l * u[v].b))].join(",") + ")";
                                                break;
                                            case "path":
                                                r = [];
                                                for (var b = 0, x = c[v].length; x > b; b++) {
                                                    r[b] = [c[v][b][0]];
                                                    for (var w = 1, _ = c[v][b].length; _ > w; w++) r[b][w] = +c[v][b][w] + m * l * u[v][b][w];
                                                    r[b] = r[b].join(M)
                                                }
                                                r = r.join(M);
                                                break;
                                            case "transform":
                                                if (u[v].real)
                                                    for (r = [], b = 0, x = c[v].length; x > b; b++)
                                                        for (r[b] = [c[v][b][0]], w = 1, _ = c[v][b].length; _ > w; w++) r[b][w] = c[v][b][w] + m * l * u[v][b][w];
                                                else {
                                                    var k = function(t) {
                                                        return +c[v][t] + m * l * u[v][t]
                                                    };
                                                    r = [
                                                        ["m", k(0), k(1), k(2), k(3), k(4), k(5)]
                                                    ]
                                                }
                                                break;
                                            case "csv":
                                                if ("clip-rect" == v)
                                                    for (r = [], b = 4; b--;) r[b] = +c[v][b] + m * l * u[v][b];
                                                break;
                                            default:
                                                var C = [][N](c[v]);
                                                for (r = [], b = p.paper.customAttributes[v].length; b--;) r[b] = +C[b] + m * l * u[v][b]
                                        }
                                        f[v] = r
                                    }
                                p.attr(f),
                                    function(t, i, n) {
                                        setTimeout(function() {
                                            e("raphael.anim.frame." + t, i, n)
                                        })
                                    }(p.id, p, s.anim)
                            } else {
                                if (function(t, n, s) {
                                        setTimeout(function() {
                                            e("raphael.anim.frame." + n.id, n, s), e("raphael.anim.finish." + n.id, n, s), i.is(t, "function") && t.call(n)
                                        })
                                    }(s.callback, p, s.anim), p.attr(d), li.splice(n--, 1), s.repeat > 1 && !s.next) {
                                    for (o in d) d[T](o) && (g[o] = s.totalOrigin[o]);
                                    s.el.attr(g), y(s.anim, s.el, s.anim.percents[0], null, s.totalOrigin, s.repeat - 1)
                                }
                                s.next && !s.stop && y(s.anim, s.el, s.next, null, s.totalOrigin, s.repeat)
                            }
                    }
                }
                i.svg && p && p.paper && p.paper.safari(), li.length && hi(ci)
            },
            ui = function(t) {
                return t > 255 ? 255 : 0 > t ? 0 : t
            };
        Ze.animateWith = function(t, e, n, s, r, o) {
            var a = this;
            if (a.removed) return o && o.call(a), a;
            var l = n instanceof v ? n : i.animation(n, s, r, o);
            y(l, a, l.percents[0], null, a.attr());
            for (var h = 0, c = li.length; c > h; h++)
                if (li[h].anim == e && li[h].el == t) {
                    li[c - 1].start = li[h].start;
                    break
                }
            return a
        }, Ze.onAnimation = function(t) {
            return t ? e.on("raphael.anim.frame." + this.id, t) : e.unbind("raphael.anim.frame." + this.id), this
        }, v.prototype.delay = function(t) {
            var e = new v(this.anim, this.ms);
            return e.times = this.times, e.del = +t || 0, e
        }, v.prototype.repeat = function(t) {
            var e = new v(this.anim, this.ms);
            return e.del = this.del, e.times = $.floor(R(t, 0)) || 1, e
        }, i.animation = function(t, e, n, s) {
            if (t instanceof v) return t;
            (i.is(n, "function") || !n) && (s = s || n || null, n = null), t = Object(t), e = +e || 0;
            var r, o, a = {};
            for (o in t) t[T](o) && J(o) != o && J(o) + "%" != o && (r = !0, a[o] = t[o]);
            return r ? (n && (a.easing = n), s && (a.callback = s), new v({
                100: a
            }, e)) : new v(t, e)
        }, Ze.animate = function(t, e, n, s) {
            var r = this;
            if (r.removed) return s && s.call(r), r;
            var o = t instanceof v ? t : i.animation(t, e, n, s);
            return y(o, r, o.percents[0], null, r.attr()), r
        }, Ze.setTime = function(t, e) {
            return t && null != e && this.status(t, j(e, t.ms) / t.ms), this
        }, Ze.status = function(t, e) {
            var i, n, s = [],
                r = 0;
            if (null != e) return y(t, this, -1, j(e, 1)), this;
            for (i = li.length; i > r; r++)
                if (n = li[r], n.el.id == this.id && (!t || n.anim == t)) {
                    if (t) return n.status;
                    s.push({
                        anim: n.anim,
                        status: n.status
                    })
                }
            return t ? 0 : s
        }, Ze.pause = function(t) {
            for (var i = 0; i < li.length; i++) li[i].el.id != this.id || t && li[i].anim != t || e("raphael.anim.pause." + this.id, this, li[i].anim) !== !1 && (li[i].paused = !0);
            return this
        }, Ze.resume = function(t) {
            for (var i = 0; i < li.length; i++)
                if (li[i].el.id == this.id && (!t || li[i].anim == t)) {
                    var n = li[i];
                    e("raphael.anim.resume." + this.id, this, n.anim) !== !1 && (delete n.paused, this.status(n.anim, n.status))
                }
            return this
        }, Ze.stop = function(t) {
            for (var i = 0; i < li.length; i++) li[i].el.id != this.id || t && li[i].anim != t || e("raphael.anim.stop." + this.id, this, li[i].anim) !== !1 && li.splice(i--, 1);
            return this
        }, e.on("raphael.remove", b), e.on("raphael.clear", b), Ze.toString = function() {
            return "Rapha\xebl\u2019s object"
        };
        var di = function(t) {
                if (this.items = [], this.length = 0, this.type = "set", t)
                    for (var e = 0, i = t.length; i > e; e++) !t[e] || t[e].constructor != Ze.constructor && t[e].constructor != di || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            },
            pi = di.prototype;
        pi.push = function() {
            for (var t, e, i = 0, n = arguments.length; n > i; i++) t = arguments[i], !t || t.constructor != Ze.constructor && t.constructor != di || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, pi.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, pi.forEach = function(t, e) {
            for (var i = 0, n = this.items.length; n > i; i++)
                if (t.call(e, this.items[i], i) === !1) return this;
            return this
        };
        for (var fi in Ze) Ze[T](fi) && (pi[fi] = function(t) {
            return function() {
                var e = arguments;
                return this.forEach(function(i) {
                    i[t][A](i, e)
                })
            }
        }(fi));
        return pi.attr = function(t, e) {
                if (t && i.is(t, X) && i.is(t[0], "object"))
                    for (var n = 0, s = t.length; s > n; n++) this.items[n].attr(t[n]);
                else
                    for (var r = 0, o = this.items.length; o > r; r++) this.items[r].attr(t, e);
                return this
            }, pi.clear = function() {
                for (; this.length;) this.pop()
            }, pi.splice = function(t, e) {
                t = 0 > t ? R(this.length + t, 0) : t, e = R(0, j(this.length - t, e));
                var i, n = [],
                    s = [],
                    r = [];
                for (i = 2; i < arguments.length; i++) r.push(arguments[i]);
                for (i = 0; e > i; i++) s.push(this[t + i]);
                for (; i < this.length - t; i++) n.push(this[t + i]);
                var o = r.length;
                for (i = 0; i < o + n.length; i++) this.items[t + i] = this[t + i] = o > i ? r[i] : n[i - o];
                for (i = this.items.length = this.length -= e - o; this[i];) delete this[i++];
                return new di(s)
            }, pi.exclude = function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (this[e] == t) return this.splice(e, 1), !0
            }, pi.animate = function(t, e, n, s) {
                (i.is(n, "function") || !n) && (s = n || null);
                var r, o, a = this.items.length,
                    l = a,
                    h = this;
                if (!a) return this;
                s && (o = function() {
                    !--a && s.call(h)
                }), n = i.is(n, U) ? n : o;
                var c = i.animation(t, e, n, o);
                for (r = this.items[--l].animate(c); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(r, c, c), this.items[l] && !this.items[l].removed || a--;
                return this
            }, pi.insertAfter = function(t) {
                for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                return this
            }, pi.getBBox = function() {
                for (var t = [], e = [], i = [], n = [], s = this.items.length; s--;)
                    if (!this.items[s].removed) {
                        var r = this.items[s].getBBox();
                        t.push(r.x), e.push(r.y), i.push(r.x + r.width), n.push(r.y + r.height)
                    }
                return t = j[A](0, t), e = j[A](0, e), i = R[A](0, i), n = R[A](0, n), {
                    x: t,
                    y: e,
                    x2: i,
                    y2: n,
                    width: i - t,
                    height: n - e
                }
            }, pi.clone = function(t) {
                t = this.paper.set();
                for (var e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].clone());
                return t
            }, pi.toString = function() {
                return "Rapha\xebl\u2018s set"
            }, pi.glow = function(t) {
                var e = this.paper.set();
                return this.forEach(function(i) {
                    var n = i.glow(t);
                    null != n && n.forEach(function(t) {
                        e.push(t)
                    })
                }), e
            }, pi.isPointInside = function(t, e) {
                var i = !1;
                return this.forEach(function(n) {
                    return n.isPointInside(t, e) ? (console.log("runned"), i = !0, !1) : void 0
                }), i
            }, i.registerFont = function(t) {
                if (!t.face) return t;
                this.fonts = this.fonts || {};
                var e = {
                        w: t.w,
                        face: {},
                        glyphs: {}
                    },
                    i = t.face["font-family"];
                for (var n in t.face) t.face[T](n) && (e.face[n] = t.face[n]);
                if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg) {
                    e.face["units-per-em"] = te(t.face["units-per-em"], 10);
                    for (var s in t.glyphs)
                        if (t.glyphs[T](s)) {
                            var r = t.glyphs[s];
                            if (e.glyphs[s] = {
                                    w: r.w,
                                    k: {},
                                    d: r.d && "M" + r.d.replace(/[mlcxtrv]/g, function(t) {
                                        return {
                                            l: "L",
                                            c: "C",
                                            x: "z",
                                            t: "m",
                                            r: "l",
                                            v: "c"
                                        }[t] || "M"
                                    }) + "z"
                                }, r.k)
                                for (var o in r.k) r[T](o) && (e.glyphs[s].k[o] = r.k[o])
                        }
                }
                return t
            }, w.getFont = function(t, e, n, s) {
                if (s = s || "normal", n = n || "normal", e = +e || {
                        normal: 400,
                        bold: 700,
                        lighter: 300,
                        bolder: 800
                    }[e] || 400, i.fonts) {
                    var r = i.fonts[t];
                    if (!r) {
                        var o = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, P) + "(\\s|$)", "i");
                        for (var a in i.fonts)
                            if (i.fonts[T](a) && o.test(a)) {
                                r = i.fonts[a];
                                break
                            }
                    }
                    var l;
                    if (r)
                        for (var h = 0, c = r.length; c > h && (l = r[h], l.face["font-weight"] != e || l.face["font-style"] != n && l.face["font-style"] || l.face["font-stretch"] != s); h++);
                    return l
                }
            }, w.print = function(t, e, n, s, r, o, a, l) {
                o = o || "middle", a = R(j(a || 0, 1), -1), l = R(j(l || 1, 3), 1);
                var h, c = L(n)[H](P),
                    u = 0,
                    d = 0,
                    p = P;
                if (i.is(s, "string") && (s = this.getFont(s)), s) {
                    h = (r || 16) / s.face["units-per-em"];
                    for (var f = s.face.bbox[H](_), g = +f[0], m = f[3] - f[1], v = 0, y = +f[1] + ("baseline" == o ? m + +s.face.descent : m / 2), b = 0, x = c.length; x > b; b++) {
                        if ("\n" == c[b]) u = 0, k = 0, d = 0, v += m * l;
                        else {
                            var w = d && s.glyphs[c[b - 1]] || {},
                                k = s.glyphs[c[b]];
                            u += d ? (w.w || s.w) + (w.k && w.k[c[b]] || 0) + s.w * a : 0, d = 1
                        }
                        k && k.d && (p += i.transformPath(k.d, ["t", u * h, v * h, "s", h, h, g, y, "t", (t - g) / h, (e - y) / h]))
                    }
                }
                return this.path(p).attr({
                    fill: "#000",
                    stroke: "none"
                })
            }, w.add = function(t) {
                if (i.is(t, "array"))
                    for (var e, n = this.set(), s = 0, r = t.length; r > s; s++) e = t[s] || {}, k[T](e.type) && n.push(this[e.type]().attr(e));
                return n
            }, i.format = function(t, e) {
                var n = i.is(e, X) ? [0][N](e) : arguments;
                return t && i.is(t, U) && n.length - 1 && (t = t.replace(C, function(t, e) {
                    return null == n[++e] ? P : n[e]
                })), t || P
            }, i.fullfill = function() {
                var t = /\{([^\}]+)\}/g,
                    e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    i = function(t, i, n) {
                        var s = n;
                        return i.replace(e, function(t, e, i, n, r) {
                            e = e || n, s && (e in s && (s = s[e]), "function" == typeof s && r && (s = s()))
                        }), s = (null == s || s == n ? t : s) + ""
                    };
                return function(e, n) {
                    return String(e).replace(t, function(t, e) {
                        return i(t, e, n)
                    })
                }
            }(), i.ninja = function() {
                return D.was ? S.win.Raphael = D.is : delete Raphael, i
            }, i.st = pi,
            function(t, e, n) {
                function s() {
                    /in/.test(t.readyState) ? setTimeout(s, 9) : i.eve("raphael.DOMload")
                }
                null == t.readyState && t.addEventListener && (t.addEventListener(e, n = function() {
                    t.removeEventListener(e, n, !1), t.readyState = "complete"
                }, !1), t.readyState = "loading"), s()
            }(document, "DOMContentLoaded"), e.on("raphael.DOMload", function() {
                x = !0
            }),
            function() {
                if (i.svg) {
                    var t = "hasOwnProperty",
                        e = String,
                        n = parseFloat,
                        s = parseInt,
                        r = Math,
                        o = r.max,
                        a = r.abs,
                        l = r.pow,
                        h = /[, ]+/,
                        c = i.eve,
                        u = "",
                        d = " ",
                        p = "http://www.w3.org/1999/xlink",
                        f = {
                            block: "M5,0 0,2.5 5,5z",
                            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                            open: "M6,1 1,3.5 6,6",
                            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                        },
                        g = {};
                    i.toString = function() {
                        return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version
                    };
                    var m = function(n, s) {
                            if (s) {
                                "string" == typeof n && (n = m(n));
                                for (var r in s) s[t](r) && ("xlink:" == r.substring(0, 6) ? n.setAttributeNS(p, r.substring(6), e(s[r])) : n.setAttribute(r, e(s[r])))
                            } else n = i._g.doc.createElementNS("http://www.w3.org/2000/svg", n), n.style && (n.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                            return n
                        },
                        v = function(t, s) {
                            var h = "linear",
                                c = t.id + s,
                                d = .5,
                                p = .5,
                                f = t.node,
                                g = t.paper,
                                v = f.style,
                                y = i._g.doc.getElementById(c);
                            if (!y) {
                                if (s = e(s).replace(i._radial_gradient, function(t, e, i) {
                                        if (h = "radial", e && i) {
                                            d = n(e), p = n(i);
                                            var s = 2 * (p > .5) - 1;
                                            l(d - .5, 2) + l(p - .5, 2) > .25 && (p = r.sqrt(.25 - l(d - .5, 2)) * s + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * s)
                                        }
                                        return u
                                    }), s = s.split(/\s*\-\s*/), "linear" == h) {
                                    var b = s.shift();
                                    if (b = -n(b), isNaN(b)) return null;
                                    var x = [0, 0, r.cos(i.rad(b)), r.sin(i.rad(b))],
                                        w = 1 / (o(a(x[2]), a(x[3])) || 1);
                                    x[2] *= w, x[3] *= w, x[2] < 0 && (x[0] = -x[2], x[2] = 0), x[3] < 0 && (x[1] = -x[3], x[3] = 0)
                                }
                                var _ = i._parseDots(s);
                                if (!_) return null;
                                if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && c != t.gradient.id && (g.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
                                    y = m(h + "Gradient", {
                                        id: c
                                    }), t.gradient = y, m(y, "radial" == h ? {
                                        fx: d,
                                        fy: p
                                    } : {
                                        x1: x[0],
                                        y1: x[1],
                                        x2: x[2],
                                        y2: x[3],
                                        gradientTransform: t.matrix.invert()
                                    }), g.defs.appendChild(y);
                                    for (var k = 0, C = _.length; C > k; k++) y.appendChild(m("stop", {
                                        offset: _[k].offset ? _[k].offset : k ? "100%" : "0%",
                                        "stop-color": _[k].color || "#fff"
                                    }))
                                }
                            }
                            return m(f, {
                                fill: "url(#" + c + ")",
                                opacity: 1,
                                "fill-opacity": 1
                            }), v.fill = u, v.opacity = 1, v.fillOpacity = 1, 1
                        },
                        y = function(t) {
                            var e = t.getBBox(1);
                            m(t.pattern, {
                                patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                            })
                        },
                        b = function(n, s, r) {
                            if ("path" == n.type) {
                                for (var o, a, l, h, c, d = e(s).toLowerCase().split("-"), p = n.paper, v = r ? "end" : "start", y = n.node, b = n.attrs, x = b["stroke-width"], w = d.length, _ = "classic", k = 3, C = 3, T = 5; w--;) switch (d[w]) {
                                    case "block":
                                    case "classic":
                                    case "oval":
                                    case "diamond":
                                    case "open":
                                    case "none":
                                        _ = d[w];
                                        break;
                                    case "wide":
                                        C = 5;
                                        break;
                                    case "narrow":
                                        C = 2;
                                        break;
                                    case "long":
                                        k = 5;
                                        break;
                                    case "short":
                                        k = 2
                                }
                                if ("open" == _ ? (k += 2, C += 2, T += 2, l = 1, h = r ? 4 : 1, c = {
                                        fill: "none",
                                        stroke: b.stroke
                                    }) : (h = l = k / 2, c = {
                                        fill: b.stroke,
                                        stroke: "none"
                                    }), n._.arrows ? r ? (n._.arrows.endPath && g[n._.arrows.endPath] --, n._.arrows.endMarker && g[n._.arrows.endMarker] --) : (n._.arrows.startPath && g[n._.arrows.startPath] --, n._.arrows.startMarker && g[n._.arrows.startMarker] --) : n._.arrows = {}, "none" != _) {
                                    var S = "raphael-marker-" + _,
                                        D = "raphael-marker-" + v + _ + k + C;
                                    i._g.doc.getElementById(S) ? g[S] ++ : (p.defs.appendChild(m(m("path"), {
                                        "stroke-linecap": "round",
                                        d: f[_],
                                        id: S
                                    })), g[S] = 1);
                                    var E, A = i._g.doc.getElementById(D);
                                    A ? (g[D] ++, E = A.getElementsByTagName("use")[0]) : (A = m(m("marker"), {
                                        id: D,
                                        markerHeight: C,
                                        markerWidth: k,
                                        orient: "auto",
                                        refX: h,
                                        refY: C / 2
                                    }), E = m(m("use"), {
                                        "xlink:href": "#" + S,
                                        transform: (r ? "rotate(180 " + k / 2 + " " + C / 2 + ") " : u) + "scale(" + k / T + "," + C / T + ")",
                                        "stroke-width": (1 / ((k / T + C / T) / 2)).toFixed(4)
                                    }), A.appendChild(E), p.defs.appendChild(A), g[D] = 1), m(E, c);
                                    var N = l * ("diamond" != _ && "oval" != _);
                                    r ? (o = n._.arrows.startdx * x || 0, a = i.getTotalLength(b.path) - N * x) : (o = N * x, a = i.getTotalLength(b.path) - (n._.arrows.enddx * x || 0)), c = {}, c["marker-" + v] = "url(#" + D + ")", (a || o) && (c.d = i.getSubpath(b.path, o, a)), m(y, c), n._.arrows[v + "Path"] = S, n._.arrows[v + "Marker"] = D, n._.arrows[v + "dx"] = N, n._.arrows[v + "Type"] = _, n._.arrows[v + "String"] = s
                                } else r ? (o = n._.arrows.startdx * x || 0, a = i.getTotalLength(b.path) - o) : (o = 0, a = i.getTotalLength(b.path) - (n._.arrows.enddx * x || 0)), n._.arrows[v + "Path"] && m(y, {
                                    d: i.getSubpath(b.path, o, a)
                                }), delete n._.arrows[v + "Path"], delete n._.arrows[v + "Marker"], delete n._.arrows[v + "dx"], delete n._.arrows[v + "Type"], delete n._.arrows[v + "String"];
                                for (c in g)
                                    if (g[t](c) && !g[c]) {
                                        var I = i._g.doc.getElementById(c);
                                        I && I.parentNode.removeChild(I)
                                    }
                            }
                        },
                        x = {
                            "": [0],
                            none: [0],
                            "-": [3, 1],
                            ".": [1, 1],
                            "-.": [3, 1, 1, 1],
                            "-..": [3, 1, 1, 1, 1, 1],
                            ". ": [1, 3],
                            "- ": [4, 3],
                            "--": [8, 3],
                            "- .": [4, 3, 1, 3],
                            "--.": [8, 3, 1, 3],
                            "--..": [8, 3, 1, 3, 1, 3]
                        },
                        w = function(t, i, n) {
                            if (i = x[e(i).toLowerCase()]) {
                                for (var s = t.attrs["stroke-width"] || "1", r = {
                                        round: s,
                                        square: s,
                                        butt: 0
                                    }[t.attrs["stroke-linecap"] || n["stroke-linecap"]] || 0, o = [], a = i.length; a--;) o[a] = i[a] * s + (a % 2 ? 1 : -1) * r;
                                m(t.node, {
                                    "stroke-dasharray": o.join(",")
                                })
                            }
                        },
                        _ = function(n, r) {
                            var l = n.node,
                                c = n.attrs,
                                d = l.style.visibility;
                            l.style.visibility = "hidden";
                            for (var f in r)
                                if (r[t](f)) {
                                    if (!i._availableAttrs[t](f)) continue;
                                    var g = r[f];
                                    switch (c[f] = g, f) {
                                        case "blur":
                                            n.blur(g);
                                            break;
                                        case "href":
                                        case "title":
                                            var x = m("title"),
                                                _ = i._g.doc.createTextNode(g);
                                            x.appendChild(_), l.appendChild(x);
                                            break;
                                        case "target":
                                            var k = l.parentNode;
                                            if ("a" != k.tagName.toLowerCase()) {
                                                var x = m("a");
                                                k.insertBefore(x, l), x.appendChild(l), k = x
                                            }
                                            "target" == f ? k.setAttributeNS(p, "show", "blank" == g ? "new" : g) : k.setAttributeNS(p, f, g);
                                            break;
                                        case "cursor":
                                            l.style.cursor = g;
                                            break;
                                        case "transform":
                                            n.transform(g);
                                            break;
                                        case "arrow-start":
                                            b(n, g);
                                            break;
                                        case "arrow-end":
                                            b(n, g, 1);
                                            break;
                                        case "clip-rect":
                                            var T = e(g).split(h);
                                            if (4 == T.length) {
                                                n.clip && n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);
                                                var S = m("clipPath"),
                                                    D = m("rect");
                                                S.id = i.createUUID(), m(D, {
                                                    x: T[0],
                                                    y: T[1],
                                                    width: T[2],
                                                    height: T[3]
                                                }), S.appendChild(D), n.paper.defs.appendChild(S), m(l, {
                                                    "clip-path": "url(#" + S.id + ")"
                                                }), n.clip = D
                                            }
                                            if (!g) {
                                                var E = l.getAttribute("clip-path");
                                                if (E) {
                                                    var A = i._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g, u));
                                                    A && A.parentNode.removeChild(A), m(l, {
                                                        "clip-path": u
                                                    }), delete n.clip
                                                }
                                            }
                                            break;
                                        case "path":
                                            "path" == n.type && (m(l, {
                                                d: g ? c.path = i._pathToAbsolute(g) : "M0,0"
                                            }), n._.dirty = 1, n._.arrows && ("startString" in n._.arrows && b(n, n._.arrows.startString), "endString" in n._.arrows && b(n, n._.arrows.endString, 1)));
                                            break;
                                        case "width":
                                            if (l.setAttribute(f, g), n._.dirty = 1, !c.fx) break;
                                            f = "x", g = c.x;
                                        case "x":
                                            c.fx && (g = -c.x - (c.width || 0));
                                        case "rx":
                                            if ("rx" == f && "rect" == n.type) break;
                                        case "cx":
                                            l.setAttribute(f, g), n.pattern && y(n), n._.dirty = 1;
                                            break;
                                        case "height":
                                            if (l.setAttribute(f, g), n._.dirty = 1, !c.fy) break;
                                            f = "y", g = c.y;
                                        case "y":
                                            c.fy && (g = -c.y - (c.height || 0));
                                        case "ry":
                                            if ("ry" == f && "rect" == n.type) break;
                                        case "cy":
                                            l.setAttribute(f, g), n.pattern && y(n), n._.dirty = 1;
                                            break;
                                        case "r":
                                            "rect" == n.type ? m(l, {
                                                rx: g,
                                                ry: g
                                            }) : l.setAttribute(f, g), n._.dirty = 1;
                                            break;
                                        case "src":
                                            "image" == n.type && l.setAttributeNS(p, "href", g);
                                            break;
                                        case "stroke-width":
                                            (1 != n._.sx || 1 != n._.sy) && (g /= o(a(n._.sx), a(n._.sy)) || 1), n.paper._vbSize && (g *= n.paper._vbSize), l.setAttribute(f, g), c["stroke-dasharray"] && w(n, c["stroke-dasharray"], r), n._.arrows && ("startString" in n._.arrows && b(n, n._.arrows.startString), "endString" in n._.arrows && b(n, n._.arrows.endString, 1));
                                            break;
                                        case "stroke-dasharray":
                                            w(n, g, r);
                                            break;
                                        case "fill":
                                            var N = e(g).match(i._ISURL);
                                            if (N) {
                                                S = m("pattern");
                                                var I = m("image");
                                                S.id = i.createUUID(), m(S, {
                                                        x: 0,
                                                        y: 0,
                                                        patternUnits: "userSpaceOnUse",
                                                        height: 1,
                                                        width: 1
                                                    }), m(I, {
                                                        x: 0,
                                                        y: 0,
                                                        "xlink:href": N[1]
                                                    }), S.appendChild(I),
                                                    function(t) {
                                                        i._preload(N[1], function() {
                                                            var e = this.offsetWidth,
                                                                i = this.offsetHeight;
                                                            m(t, {
                                                                width: e,
                                                                height: i
                                                            }), m(I, {
                                                                width: e,
                                                                height: i
                                                            }), n.paper.safari()
                                                        })
                                                    }(S), n.paper.defs.appendChild(S), m(l, {
                                                        fill: "url(#" + S.id + ")"
                                                    }), n.pattern = S, n.pattern && y(n);
                                                break
                                            }
                                            var P = i.getRGB(g);
                                            if (P.error) {
                                                if (("circle" == n.type || "ellipse" == n.type || "r" != e(g).charAt()) && v(n, g)) {
                                                    if ("opacity" in c || "fill-opacity" in c) {
                                                        var M = i._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u));
                                                        if (M) {
                                                            var L = M.getElementsByTagName("stop");
                                                            m(L[L.length - 1], {
                                                                "stop-opacity": ("opacity" in c ? c.opacity : 1) * ("fill-opacity" in c ? c["fill-opacity"] : 1)
                                                            })
                                                        }
                                                    }
                                                    c.gradient = g, c.fill = "none";
                                                    break
                                                }
                                            } else delete r.gradient, delete c.gradient, !i.is(c.opacity, "undefined") && i.is(r.opacity, "undefined") && m(l, {
                                                opacity: c.opacity
                                            }), !i.is(c["fill-opacity"], "undefined") && i.is(r["fill-opacity"], "undefined") && m(l, {
                                                "fill-opacity": c["fill-opacity"]
                                            });
                                            P[t]("opacity") && m(l, {
                                                "fill-opacity": P.opacity > 1 ? P.opacity / 100 : P.opacity
                                            });
                                        case "stroke":
                                            P = i.getRGB(g), l.setAttribute(f, P.hex), "stroke" == f && P[t]("opacity") && m(l, {
                                                "stroke-opacity": P.opacity > 1 ? P.opacity / 100 : P.opacity
                                            }), "stroke" == f && n._.arrows && ("startString" in n._.arrows && b(n, n._.arrows.startString), "endString" in n._.arrows && b(n, n._.arrows.endString, 1));
                                            break;
                                        case "gradient":
                                            ("circle" == n.type || "ellipse" == n.type || "r" != e(g).charAt()) && v(n, g);
                                            break;
                                        case "opacity":
                                            c.gradient && !c[t]("stroke-opacity") && m(l, {
                                                "stroke-opacity": g > 1 ? g / 100 : g
                                            });
                                        case "fill-opacity":
                                            if (c.gradient) {
                                                M = i._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u)), M && (L = M.getElementsByTagName("stop"), m(L[L.length - 1], {
                                                    "stop-opacity": g
                                                }));
                                                break
                                            }
                                        default:
                                            "font-size" == f && (g = s(g, 10) + "px");
                                            var H = f.replace(/(\-.)/g, function(t) {
                                                return t.substring(1).toUpperCase()
                                            });
                                            l.style[H] = g, n._.dirty = 1, l.setAttribute(f, g)
                                    }
                                }
                            C(n, r), l.style.visibility = d
                        },
                        k = 1.2,
                        C = function(n, r) {
                            if ("text" == n.type && (r[t]("text") || r[t]("font") || r[t]("font-size") || r[t]("x") || r[t]("y"))) {
                                var o = n.attrs,
                                    a = n.node,
                                    l = a.firstChild ? s(i._g.doc.defaultView.getComputedStyle(a.firstChild, u).getPropertyValue("font-size"), 10) : 10;
                                if (r[t]("text")) {
                                    for (o.text = r.text; a.firstChild;) a.removeChild(a.firstChild);
                                    for (var h, c = e(r.text).split("\n"), d = [], p = 0, f = c.length; f > p; p++) h = m("tspan"), p && m(h, {
                                        dy: l * k,
                                        x: o.x
                                    }), h.appendChild(i._g.doc.createTextNode(c[p])), a.appendChild(h), d[p] = h
                                } else
                                    for (d = a.getElementsByTagName("tspan"), p = 0, f = d.length; f > p; p++) p ? m(d[p], {
                                        dy: l * k,
                                        x: o.x
                                    }) : m(d[0], {
                                        dy: 0
                                    });
                                m(a, {
                                    x: o.x,
                                    y: o.y
                                }), n._.dirty = 1;
                                var g = n._getBBox(),
                                    v = o.y - (g.y + g.height / 2);
                                v && i.is(v, "finite") && m(d[0], {
                                    dy: v
                                })
                            }
                        },
                        T = function(t, e) {
                            this[0] = this.node = t, t.raphael = !0, this.id = i._oid++, t.raphaelid = this.id, this.matrix = i.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = {
                                transform: [],
                                sx: 1,
                                sy: 1,
                                deg: 0,
                                dx: 0,
                                dy: 0,
                                dirty: 1
                            }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
                        },
                        S = i.el;
                    T.prototype = S, S.constructor = T, i._engine.path = function(t, e) {
                        var i = m("path");
                        e.canvas && e.canvas.appendChild(i);
                        var n = new T(i, e);
                        return n.type = "path", _(n, {
                            fill: "none",
                            stroke: "#000",
                            path: t
                        }), n
                    }, S.rotate = function(t, i, s) {
                        if (this.removed) return this;
                        if (t = e(t).split(h), t.length - 1 && (i = n(t[1]), s = n(t[2])), t = n(t[0]), null == s && (i = s), null == i || null == s) {
                            var r = this.getBBox(1);
                            i = r.x + r.width / 2, s = r.y + r.height / 2
                        }
                        return this.transform(this._.transform.concat([
                            ["r", t, i, s]
                        ])), this
                    }, S.scale = function(t, i, s, r) {
                        if (this.removed) return this;
                        if (t = e(t).split(h), t.length - 1 && (i = n(t[1]), s = n(t[2]), r = n(t[3])), t = n(t[0]), null == i && (i = t), null == r && (s = r), null == s || null == r) var o = this.getBBox(1);
                        return s = null == s ? o.x + o.width / 2 : s, r = null == r ? o.y + o.height / 2 : r, this.transform(this._.transform.concat([
                            ["s", t, i, s, r]
                        ])), this
                    }, S.translate = function(t, i) {
                        return this.removed ? this : (t = e(t).split(h), t.length - 1 && (i = n(t[1])), t = n(t[0]) || 0, i = +i || 0, this.transform(this._.transform.concat([
                            ["t", t, i]
                        ])), this)
                    }, S.transform = function(e) {
                        var n = this._;
                        if (null == e) return n.transform;
                        if (i._extractTransform(this, e), this.clip && m(this.clip, {
                                transform: this.matrix.invert()
                            }), this.pattern && y(this), this.node && m(this.node, {
                                transform: this.matrix
                            }), 1 != n.sx || 1 != n.sy) {
                            var s = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
                            this.attr({
                                "stroke-width": s
                            })
                        }
                        return this
                    }, S.hide = function() {
                        return !this.removed && this.paper.safari(this.node.style.display = "none"), this
                    }, S.show = function() {
                        return !this.removed && this.paper.safari(this.node.style.display = ""), this
                    }, S.remove = function() {
                        if (!this.removed && this.node.parentNode) {
                            var t = this.paper;
                            t.__set__ && t.__set__.exclude(this), c.unbind("raphael.*.*." + this.id), this.gradient && t.defs.removeChild(this.gradient), i._tear(this, t), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                            for (var e in this) this[e] = "function" == typeof this[e] ? i._removedFactory(e) : null;
                            this.removed = !0
                        }
                    }, S._getBBox = function() {
                        if ("none" == this.node.style.display) {
                            this.show();
                            var t = !0
                        }
                        var e = {};
                        try {
                            e = this.node.getBBox()
                        } catch (i) {} finally {
                            e = e || {}
                        }
                        return t && this.hide(), e
                    }, S.attr = function(e, n) {
                        if (this.removed) return this;
                        if (null == e) {
                            var s = {};
                            for (var r in this.attrs) this.attrs[t](r) && (s[r] = this.attrs[r]);
                            return s.gradient && "none" == s.fill && (s.fill = s.gradient) && delete s.gradient, s.transform = this._.transform, s
                        }
                        if (null == n && i.is(e, "string")) {
                            if ("fill" == e && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                            if ("transform" == e) return this._.transform;
                            for (var o = e.split(h), a = {}, l = 0, u = o.length; u > l; l++) e = o[l], a[e] = e in this.attrs ? this.attrs[e] : i.is(this.paper.customAttributes[e], "function") ? this.paper.customAttributes[e].def : i._availableAttrs[e];
                            return u - 1 ? a : a[o[0]]
                        }
                        if (null == n && i.is(e, "array")) {
                            for (a = {}, l = 0, u = e.length; u > l; l++) a[e[l]] = this.attr(e[l]);
                            return a
                        }
                        if (null != n) {
                            var d = {};
                            d[e] = n
                        } else null != e && i.is(e, "object") && (d = e);
                        for (var p in d) c("raphael.attr." + p + "." + this.id, this, d[p]);
                        for (p in this.paper.customAttributes)
                            if (this.paper.customAttributes[t](p) && d[t](p) && i.is(this.paper.customAttributes[p], "function")) {
                                var f = this.paper.customAttributes[p].apply(this, [].concat(d[p]));
                                this.attrs[p] = d[p];
                                for (var g in f) f[t](g) && (d[g] = f[g])
                            }
                        return _(this, d), this
                    }, S.toFront = function() {
                        if (this.removed) return this;
                        "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                        var t = this.paper;
                        return t.top != this && i._tofront(this, t), this
                    }, S.toBack = function() {
                        if (this.removed) return this;
                        var t = this.node.parentNode;
                        "a" == t.tagName.toLowerCase() ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), i._toback(this, this.paper);
                        this.paper;
                        return this
                    }, S.insertAfter = function(t) {
                        if (this.removed) return this;
                        var e = t.node || t[t.length - 1].node;
                        return e.nextSibling ? e.parentNode.insertBefore(this.node, e.nextSibling) : e.parentNode.appendChild(this.node), i._insertafter(this, t, this.paper), this
                    }, S.insertBefore = function(t) {
                        if (this.removed) return this;
                        var e = t.node || t[0].node;
                        return e.parentNode.insertBefore(this.node, e), i._insertbefore(this, t, this.paper), this
                    }, S.blur = function(t) {
                        var e = this;
                        if (0 !== +t) {
                            var n = m("filter"),
                                s = m("feGaussianBlur");
                            e.attrs.blur = t, n.id = i.createUUID(), m(s, {
                                stdDeviation: +t || 1.5
                            }), n.appendChild(s), e.paper.defs.appendChild(n), e._blur = n, m(e.node, {
                                filter: "url(#" + n.id + ")"
                            })
                        } else e._blur && (e._blur.parentNode.removeChild(e._blur), delete e._blur, delete e.attrs.blur), e.node.removeAttribute("filter");
                        return e
                    }, i._engine.circle = function(t, e, i, n) {
                        var s = m("circle");
                        t.canvas && t.canvas.appendChild(s);
                        var r = new T(s, t);
                        return r.attrs = {
                            cx: e,
                            cy: i,
                            r: n,
                            fill: "none",
                            stroke: "#000"
                        }, r.type = "circle", m(s, r.attrs), r
                    }, i._engine.rect = function(t, e, i, n, s, r) {
                        var o = m("rect");
                        t.canvas && t.canvas.appendChild(o);
                        var a = new T(o, t);
                        return a.attrs = {
                            x: e,
                            y: i,
                            width: n,
                            height: s,
                            r: r || 0,
                            rx: r || 0,
                            ry: r || 0,
                            fill: "none",
                            stroke: "#000"
                        }, a.type = "rect", m(o, a.attrs), a
                    }, i._engine.ellipse = function(t, e, i, n, s) {
                        var r = m("ellipse");
                        t.canvas && t.canvas.appendChild(r);
                        var o = new T(r, t);
                        return o.attrs = {
                            cx: e,
                            cy: i,
                            rx: n,
                            ry: s,
                            fill: "none",
                            stroke: "#000"
                        }, o.type = "ellipse", m(r, o.attrs), o
                    }, i._engine.image = function(t, e, i, n, s, r) {
                        var o = m("image");
                        m(o, {
                            x: i,
                            y: n,
                            width: s,
                            height: r,
                            preserveAspectRatio: "none"
                        }), o.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(o);
                        var a = new T(o, t);
                        return a.attrs = {
                            x: i,
                            y: n,
                            width: s,
                            height: r,
                            src: e
                        }, a.type = "image", a
                    }, i._engine.text = function(t, e, n, s) {
                        var r = m("text");
                        t.canvas && t.canvas.appendChild(r);
                        var o = new T(r, t);
                        return o.attrs = {
                            x: e,
                            y: n,
                            "text-anchor": "middle",
                            text: s,
                            font: i._availableAttrs.font,
                            stroke: "none",
                            fill: "#000"
                        }, o.type = "text", _(o, o.attrs), o
                    }, i._engine.setSize = function(t, e) {
                        return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                    }, i._engine.create = function() {
                        var t = i._getContainer.apply(0, arguments),
                            e = t && t.container,
                            n = t.x,
                            s = t.y,
                            r = t.width,
                            o = t.height;
                        if (!e) throw new Error("SVG container not found.");
                        var a, l = m("svg"),
                            h = "overflow:hidden;";
                        return n = n || 0, s = s || 0, r = r || 512, o = o || 342, m(l, {
                            height: o,
                            version: 1.1,
                            width: r,
                            xmlns: "http://www.w3.org/2000/svg"
                        }), 1 == e ? (l.style.cssText = h + "position:absolute;left:" + n + "px;top:" + s + "px", i._g.doc.body.appendChild(l), a = 1) : (l.style.cssText = h + "position:relative", e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l)), e = new i._Paper, e.width = r, e.height = o, e.canvas = l, e.clear(), e._left = e._top = 0, a && (e.renderfix = function() {}), e.renderfix(), e
                    }, i._engine.setViewBox = function(t, e, i, n, s) {
                        c("raphael.setViewBox", this, this._viewBox, [t, e, i, n, s]);
                        var r, a, l = o(i / this.width, n / this.height),
                            h = this.top,
                            u = s ? "meet" : "xMinYMin";
                        for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, r = "0 0 " + this.width + d + this.height) : (this._vbSize = l, r = t + d + e + d + i + d + n), m(this.canvas, {
                                viewBox: r,
                                preserveAspectRatio: u
                            }); l && h;) a = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
                            "stroke-width": a
                        }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
                        return this._viewBox = [t, e, i, n, !!s], this
                    }, i.prototype.renderfix = function() {
                        var t, e = this.canvas,
                            i = e.style;
                        try {
                            t = e.getScreenCTM() || e.createSVGMatrix()
                        } catch (n) {
                            t = e.createSVGMatrix()
                        }
                        var s = -t.e % 1,
                            r = -t.f % 1;
                        (s || r) && (s && (this._left = (this._left + s) % 1, i.left = this._left + "px"), r && (this._top = (this._top + r) % 1, i.top = this._top + "px"))
                    }, i.prototype.clear = function() {
                        i.eve("raphael.clear", this);
                        for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
                        this.bottom = this.top = null, (this.desc = m("desc")).appendChild(i._g.doc.createTextNode("Created with Rapha\xebl " + i.version)), t.appendChild(this.desc), t.appendChild(this.defs = m("defs"))
                    }, i.prototype.remove = function() {
                        c("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                        for (var t in this) this[t] = "function" == typeof this[t] ? i._removedFactory(t) : null
                    };
                    var D = i.st;
                    for (var E in S) S[t](E) && !D[t](E) && (D[E] = function(t) {
                        return function() {
                            var e = arguments;
                            return this.forEach(function(i) {
                                i[t].apply(i, e)
                            })
                        }
                    }(E))
                }
            }(),
            function() {
                if (i.vml) {
                    var t = "hasOwnProperty",
                        e = String,
                        n = parseFloat,
                        s = Math,
                        r = s.round,
                        o = s.max,
                        a = s.min,
                        l = s.abs,
                        h = "fill",
                        c = /[, ]+/,
                        u = i.eve,
                        d = " progid:DXImageTransform.Microsoft",
                        p = " ",
                        f = "",
                        g = {
                            M: "m",
                            L: "l",
                            C: "c",
                            Z: "x",
                            m: "t",
                            l: "r",
                            c: "v",
                            z: "x"
                        },
                        m = /([clmz]),?([^clmz]*)/gi,
                        v = / progid:\S+Blur\([^\)]+\)/g,
                        y = /-?[^,\s-]+/g,
                        b = "position:absolute;left:0;top:0;width:1px;height:1px",
                        x = 21600,
                        w = {
                            path: 1,
                            rect: 1,
                            image: 1
                        },
                        _ = {
                            circle: 1,
                            ellipse: 1
                        },
                        k = function(t) {
                            var n = /[ahqstv]/gi,
                                s = i._pathToAbsolute;
                            if (e(t).match(n) && (s = i._path2curve), n = /[clmz]/g, s == i._pathToAbsolute && !e(t).match(n)) {
                                var o = e(t).replace(m, function(t, e, i) {
                                    var n = [],
                                        s = "m" == e.toLowerCase(),
                                        o = g[e];
                                    return i.replace(y, function(t) {
                                        s && 2 == n.length && (o += n + g["m" == e ? "l" : "L"], n = []), n.push(r(t * x))
                                    }), o + n
                                });
                                return o
                            }
                            var a, l, h = s(t);
                            o = [];
                            for (var c = 0, u = h.length; u > c; c++) {
                                a = h[c], l = h[c][0].toLowerCase(), "z" == l && (l = "x");
                                for (var d = 1, v = a.length; v > d; d++) l += r(a[d] * x) + (d != v - 1 ? "," : f);
                                o.push(l)
                            }
                            return o.join(p)
                        },
                        C = function(t, e, n) {
                            var s = i.matrix();
                            return s.rotate(-t, .5, .5), {
                                dx: s.x(e, n),
                                dy: s.y(e, n)
                            }
                        },
                        T = function(t, e, i, n, s, r) {
                            var o = t._,
                                a = t.matrix,
                                c = o.fillpos,
                                u = t.node,
                                d = u.style,
                                f = 1,
                                g = "",
                                m = x / e,
                                v = x / i;
                            if (d.visibility = "hidden", e && i) {
                                if (u.coordsize = l(m) + p + l(v), d.rotation = r * (0 > e * i ? -1 : 1), r) {
                                    var y = C(r, n, s);
                                    n = y.dx, s = y.dy
                                }
                                if (0 > e && (g += "x"), 0 > i && (g += " y") && (f = -1), d.flip = g, u.coordorigin = n * -m + p + s * -v, c || o.fillsize) {
                                    var b = u.getElementsByTagName(h);
                                    b = b && b[0], u.removeChild(b), c && (y = C(r, a.x(c[0], c[1]), a.y(c[0], c[1])), b.position = y.dx * f + p + y.dy * f), o.fillsize && (b.size = o.fillsize[0] * l(e) + p + o.fillsize[1] * l(i)), u.appendChild(b)
                                }
                                d.visibility = "visible"
                            }
                        };
                    i.toString = function() {
                        return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version
                    };
                    var S = function(t, i, n) {
                            for (var s = e(i).toLowerCase().split("-"), r = n ? "end" : "start", o = s.length, a = "classic", l = "medium", h = "medium"; o--;) switch (s[o]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    a = s[o];
                                    break;
                                case "wide":
                                case "narrow":
                                    h = s[o];
                                    break;
                                case "long":
                                case "short":
                                    l = s[o]
                            }
                            var c = t.node.getElementsByTagName("stroke")[0];
                            c[r + "arrow"] = a, c[r + "arrowlength"] = l, c[r + "arrowwidth"] = h
                        },
                        D = function(s, l) {
                            s.attrs = s.attrs || {};
                            var u = s.node,
                                d = s.attrs,
                                g = u.style,
                                m = w[s.type] && (l.x != d.x || l.y != d.y || l.width != d.width || l.height != d.height || l.cx != d.cx || l.cy != d.cy || l.rx != d.rx || l.ry != d.ry || l.r != d.r),
                                v = _[s.type] && (d.cx != l.cx || d.cy != l.cy || d.r != l.r || d.rx != l.rx || d.ry != l.ry),
                                y = s;
                            for (var b in l) l[t](b) && (d[b] = l[b]);
                            if (m && (d.path = i._getPath[s.type](s), s._.dirty = 1), l.href && (u.href = l.href), l.title && (u.title = l.title), l.target && (u.target = l.target), l.cursor && (g.cursor = l.cursor), "blur" in l && s.blur(l.blur), (l.path && "path" == s.type || m) && (u.path = k(~e(d.path).toLowerCase().indexOf("r") ? i._pathToAbsolute(d.path) : d.path), "image" == s.type && (s._.fillpos = [d.x, d.y], s._.fillsize = [d.width, d.height], T(s, 1, 1, 0, 0, 0))), "transform" in l && s.transform(l.transform), v) {
                                var C = +d.cx,
                                    D = +d.cy,
                                    A = +d.rx || +d.r || 0,
                                    N = +d.ry || +d.r || 0;
                                u.path = i.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", r((C - A) * x), r((D - N) * x), r((C + A) * x), r((D + N) * x), r(C * x)), s._.dirty = 1
                            }
                            if ("clip-rect" in l) {
                                var P = e(l["clip-rect"]).split(c);
                                if (4 == P.length) {
                                    P[2] = +P[2] + +P[0], P[3] = +P[3] + +P[1];
                                    var M = u.clipRect || i._g.doc.createElement("div"),
                                        L = M.style;
                                    L.clip = i.format("rect({1}px {2}px {3}px {0}px)", P), u.clipRect || (L.position = "absolute", L.top = 0, L.left = 0, L.width = s.paper.width + "px", L.height = s.paper.height + "px", u.parentNode.insertBefore(M, u), M.appendChild(u), u.clipRect = M)
                                }
                                l["clip-rect"] || u.clipRect && (u.clipRect.style.clip = "auto")
                            }
                            if (s.textpath) {
                                var H = s.textpath.style;
                                l.font && (H.font = l.font), l["font-family"] && (H.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, f) + '"'), l["font-size"] && (H.fontSize = l["font-size"]), l["font-weight"] && (H.fontWeight = l["font-weight"]), l["font-style"] && (H.fontStyle = l["font-style"])
                            }
                            if ("arrow-start" in l && S(y, l["arrow-start"]), "arrow-end" in l && S(y, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                                var O = u.getElementsByTagName(h),
                                    F = !1;
                                if (O = O && O[0], !O && (F = O = I(h)), "image" == s.type && l.src && (O.src = l.src), l.fill && (O.on = !0), (null == O.on || "none" == l.fill || null === l.fill) && (O.on = !1), O.on && l.fill) {
                                    var z = e(l.fill).match(i._ISURL);
                                    if (z) {
                                        O.parentNode == u && u.removeChild(O), O.rotate = !0, O.src = z[1], O.type = "tile";
                                        var $ = s.getBBox(1);
                                        O.position = $.x + p + $.y, s._.fillpos = [$.x, $.y], i._preload(z[1], function() {
                                            s._.fillsize = [this.offsetWidth, this.offsetHeight]
                                        })
                                    } else O.color = i.getRGB(l.fill).hex, O.src = f, O.type = "solid", i.getRGB(l.fill).error && (y.type in {
                                        circle: 1,
                                        ellipse: 1
                                    } || "r" != e(l.fill).charAt()) && E(y, l.fill, O) && (d.fill = "none", d.gradient = l.fill, O.rotate = !1)
                                }
                                if ("fill-opacity" in l || "opacity" in l) {
                                    var R = ((+d["fill-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+i.getRGB(l.fill).o + 1 || 2) - 1);
                                    R = a(o(R, 0), 1), O.opacity = R, O.src && (O.color = "none")
                                }
                                u.appendChild(O);
                                var j = u.getElementsByTagName("stroke") && u.getElementsByTagName("stroke")[0],
                                    B = !1;
                                !j && (B = j = I("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (j.on = !0), ("none" == l.stroke || null === l.stroke || null == j.on || 0 == l.stroke || 0 == l["stroke-width"]) && (j.on = !1);
                                var W = i.getRGB(l.stroke);
                                j.on && l.stroke && (j.color = W.hex), R = ((+d["stroke-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+W.o + 1 || 2) - 1);
                                var q = .75 * (n(l["stroke-width"]) || 1);
                                if (R = a(o(R, 0), 1), null == l["stroke-width"] && (q = d["stroke-width"]), l["stroke-width"] && (j.weight = q), q && 1 > q && (R *= q) && (j.weight = 1), j.opacity = R, l["stroke-linejoin"] && (j.joinstyle = l["stroke-linejoin"] || "miter"), j.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (j.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
                                    var Y = {
                                        "-": "shortdash",
                                        ".": "shortdot",
                                        "-.": "shortdashdot",
                                        "-..": "shortdashdotdot",
                                        ". ": "dot",
                                        "- ": "dash",
                                        "--": "longdash",
                                        "- .": "dashdot",
                                        "--.": "longdashdot",
                                        "--..": "longdashdotdot"
                                    };
                                    j.dashstyle = Y[t](l["stroke-dasharray"]) ? Y[l["stroke-dasharray"]] : f
                                }
                                B && u.appendChild(j)
                            }
                            if ("text" == y.type) {
                                y.paper.canvas.style.display = f;
                                var U = y.paper.span,
                                    X = 100,
                                    G = d.font && d.font.match(/\d+(?:\.\d*)?(?=px)/);
                                g = U.style, d.font && (g.font = d.font), d["font-family"] && (g.fontFamily = d["font-family"]), d["font-weight"] && (g.fontWeight = d["font-weight"]), d["font-style"] && (g.fontStyle = d["font-style"]), G = n(d["font-size"] || G && G[0]) || 10, g.fontSize = G * X + "px", y.textpath.string && (U.innerHTML = e(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                                var V = U.getBoundingClientRect();
                                y.W = d.w = (V.right - V.left) / X, y.H = d.h = (V.bottom - V.top) / X, y.X = d.x, y.Y = d.y + y.H / 2, ("x" in l || "y" in l) && (y.path.v = i.format("m{0},{1}l{2},{1}", r(d.x * x), r(d.y * x), r(d.x * x) + 1));
                                for (var K = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Q = 0, Z = K.length; Z > Q; Q++)
                                    if (K[Q] in l) {
                                        y._.dirty = 1;
                                        break
                                    }
                                switch (d["text-anchor"]) {
                                    case "start":
                                        y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
                                        break;
                                    case "end":
                                        y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
                                        break;
                                    default:
                                        y.textpath.style["v-text-align"] = "center", y.bbx = 0
                                }
                                y.textpath.style["v-text-kern"] = !0
                            }
                        },
                        E = function(t, r, o) {
                            t.attrs = t.attrs || {};
                            var a = (t.attrs, Math.pow),
                                l = "linear",
                                h = ".5 .5";
                            if (t.attrs.gradient = r, r = e(r).replace(i._radial_gradient, function(t, e, i) {
                                    return l = "radial", e && i && (e = n(e), i = n(i), a(e - .5, 2) + a(i - .5, 2) > .25 && (i = s.sqrt(.25 - a(e - .5, 2)) * (2 * (i > .5) - 1) + .5), h = e + p + i), f
                                }), r = r.split(/\s*\-\s*/), "linear" == l) {
                                var c = r.shift();
                                if (c = -n(c), isNaN(c)) return null
                            }
                            var u = i._parseDots(r);
                            if (!u) return null;
                            if (t = t.shape || t.node, u.length) {
                                t.removeChild(o), o.on = !0, o.method = "none", o.color = u[0].color, o.color2 = u[u.length - 1].color;
                                for (var d = [], g = 0, m = u.length; m > g; g++) u[g].offset && d.push(u[g].offset + p + u[g].color);
                                o.colors = d.length ? d.join() : "0% " + o.color, "radial" == l ? (o.type = "gradientTitle", o.focus = "100%", o.focussize = "0 0", o.focusposition = h, o.angle = 0) : (o.type = "gradient", o.angle = (270 - c) % 360), t.appendChild(o)
                            }
                            return 1
                        },
                        A = function(t, e) {
                            this[0] = this.node = t, t.raphael = !0, this.id = i._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = i.matrix(), this._ = {
                                transform: [],
                                sx: 1,
                                sy: 1,
                                dx: 0,
                                dy: 0,
                                deg: 0,
                                dirty: 1,
                                dirtyT: 1
                            }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
                        },
                        N = i.el;
                    A.prototype = N, N.constructor = A, N.transform = function(t) {
                        if (null == t) return this._.transform;
                        var n, s = this.paper._viewBoxShift,
                            r = s ? "s" + [s.scale, s.scale] + "-1-1t" + [s.dx, s.dy] : f;
                        s && (n = t = e(t).replace(/\.{3}|\u2026/g, this._.transform || f)), i._extractTransform(this, r + t);
                        var o, a = this.matrix.clone(),
                            l = this.skew,
                            h = this.node,
                            c = ~e(this.attrs.fill).indexOf("-"),
                            u = !e(this.attrs.fill).indexOf("url(");
                        if (a.translate(1, 1), u || c || "image" == this.type)
                            if (l.matrix = "1 0 0 1", l.offset = "0 0", o = a.split(), c && o.noRotation || !o.isSimple) {
                                h.style.filter = a.toFilter();
                                var d = this.getBBox(),
                                    g = this.getBBox(1),
                                    m = d.x - g.x,
                                    v = d.y - g.y;
                                h.coordorigin = m * -x + p + v * -x, T(this, 1, 1, m, v, 0)
                            } else h.style.filter = f, T(this, o.scalex, o.scaley, o.dx, o.dy, o.rotate);
                        else h.style.filter = f, l.matrix = e(a), l.offset = a.offset();
                        return n && (this._.transform = n), this
                    }, N.rotate = function(t, i, s) {
                        if (this.removed) return this;
                        if (null != t) {
                            if (t = e(t).split(c), t.length - 1 && (i = n(t[1]), s = n(t[2])), t = n(t[0]), null == s && (i = s), null == i || null == s) {
                                var r = this.getBBox(1);
                                i = r.x + r.width / 2, s = r.y + r.height / 2
                            }
                            return this._.dirtyT = 1, this.transform(this._.transform.concat([
                                ["r", t, i, s]
                            ])), this
                        }
                    }, N.translate = function(t, i) {
                        return this.removed ? this : (t = e(t).split(c), t.length - 1 && (i = n(t[1])), t = n(t[0]) || 0, i = +i || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += i), this.transform(this._.transform.concat([
                            ["t", t, i]
                        ])), this)
                    }, N.scale = function(t, i, s, r) {
                        if (this.removed) return this;
                        if (t = e(t).split(c), t.length - 1 && (i = n(t[1]), s = n(t[2]), r = n(t[3]), isNaN(s) && (s = null), isNaN(r) && (r = null)), t = n(t[0]), null == i && (i = t), null == r && (s = r), null == s || null == r) var o = this.getBBox(1);
                        return s = null == s ? o.x + o.width / 2 : s, r = null == r ? o.y + o.height / 2 : r, this.transform(this._.transform.concat([
                            ["s", t, i, s, r]
                        ])), this._.dirtyT = 1, this
                    }, N.hide = function() {
                        return !this.removed && (this.node.style.display = "none"), this
                    }, N.show = function() {
                        return !this.removed && (this.node.style.display = f), this
                    }, N._getBBox = function() {
                        return this.removed ? {} : {
                            x: this.X + (this.bbx || 0) - this.W / 2,
                            y: this.Y - this.H,
                            width: this.W,
                            height: this.H
                        }
                    }, N.remove = function() {
                        if (!this.removed && this.node.parentNode) {
                            this.paper.__set__ && this.paper.__set__.exclude(this), i.eve.unbind("raphael.*.*." + this.id), i._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                            for (var t in this) this[t] = "function" == typeof this[t] ? i._removedFactory(t) : null;
                            this.removed = !0
                        }
                    }, N.attr = function(e, n) {
                        if (this.removed) return this;
                        if (null == e) {
                            var s = {};
                            for (var r in this.attrs) this.attrs[t](r) && (s[r] = this.attrs[r]);
                            return s.gradient && "none" == s.fill && (s.fill = s.gradient) && delete s.gradient, s.transform = this._.transform, s
                        }
                        if (null == n && i.is(e, "string")) {
                            if (e == h && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                            for (var o = e.split(c), a = {}, l = 0, d = o.length; d > l; l++) e = o[l], a[e] = e in this.attrs ? this.attrs[e] : i.is(this.paper.customAttributes[e], "function") ? this.paper.customAttributes[e].def : i._availableAttrs[e];
                            return d - 1 ? a : a[o[0]]
                        }
                        if (this.attrs && null == n && i.is(e, "array")) {
                            for (a = {}, l = 0, d = e.length; d > l; l++) a[e[l]] = this.attr(e[l]);
                            return a
                        }
                        var p;
                        null != n && (p = {}, p[e] = n), null == n && i.is(e, "object") && (p = e);
                        for (var f in p) u("raphael.attr." + f + "." + this.id, this, p[f]);
                        if (p) {
                            for (f in this.paper.customAttributes)
                                if (this.paper.customAttributes[t](f) && p[t](f) && i.is(this.paper.customAttributes[f], "function")) {
                                    var g = this.paper.customAttributes[f].apply(this, [].concat(p[f]));
                                    this.attrs[f] = p[f];
                                    for (var m in g) g[t](m) && (p[m] = g[m])
                                }
                            p.text && "text" == this.type && (this.textpath.string = p.text), D(this, p)
                        }
                        return this
                    }, N.toFront = function() {
                        return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && i._tofront(this, this.paper), this
                    }, N.toBack = function() {
                        return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), i._toback(this, this.paper)), this)
                    }, N.insertAfter = function(t) {
                        return this.removed ? this : (t.constructor == i.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), i._insertafter(this, t, this.paper), this)
                    }, N.insertBefore = function(t) {
                        return this.removed ? this : (t.constructor == i.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), i._insertbefore(this, t, this.paper), this)
                    }, N.blur = function(t) {
                        var e = this.node.runtimeStyle,
                            n = e.filter;
                        return n = n.replace(v, f), 0 !== +t ? (this.attrs.blur = t, e.filter = n + p + d + ".Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = i.format("-{0}px 0 0 -{0}px", r(+t || 1.5))) : (e.filter = n, e.margin = 0, delete this.attrs.blur), this
                    }, i._engine.path = function(t, e) {
                        var i = I("shape");
                        i.style.cssText = b, i.coordsize = x + p + x, i.coordorigin = e.coordorigin;
                        var n = new A(i, e),
                            s = {
                                fill: "none",
                                stroke: "#000"
                            };
                        t && (s.path = t), n.type = "path", n.path = [], n.Path = f, D(n, s), e.canvas.appendChild(i);
                        var r = I("skew");
                        return r.on = !0, i.appendChild(r), n.skew = r, n.transform(f), n
                    }, i._engine.rect = function(t, e, n, s, r, o) {
                        var a = i._rectPath(e, n, s, r, o),
                            l = t.path(a),
                            h = l.attrs;
                        return l.X = h.x = e, l.Y = h.y = n, l.W = h.width = s, l.H = h.height = r, h.r = o, h.path = a, l.type = "rect", l
                    }, i._engine.ellipse = function(t, e, i, n, s) {
                        {
                            var r = t.path();
                            r.attrs
                        }
                        return r.X = e - n, r.Y = i - s, r.W = 2 * n, r.H = 2 * s, r.type = "ellipse", D(r, {
                            cx: e,
                            cy: i,
                            rx: n,
                            ry: s
                        }), r
                    }, i._engine.circle = function(t, e, i, n) {
                        {
                            var s = t.path();
                            s.attrs
                        }
                        return s.X = e - n, s.Y = i - n, s.W = s.H = 2 * n, s.type = "circle", D(s, {
                            cx: e,
                            cy: i,
                            r: n
                        }), s
                    }, i._engine.image = function(t, e, n, s, r, o) {
                        var a = i._rectPath(n, s, r, o),
                            l = t.path(a).attr({
                                stroke: "none"
                            }),
                            c = l.attrs,
                            u = l.node,
                            d = u.getElementsByTagName(h)[0];
                        return c.src = e, l.X = c.x = n, l.Y = c.y = s, l.W = c.width = r, l.H = c.height = o, c.path = a, l.type = "image", d.parentNode == u && u.removeChild(d), d.rotate = !0, d.src = e, d.type = "tile", l._.fillpos = [n, s], l._.fillsize = [r, o], u.appendChild(d), T(l, 1, 1, 0, 0, 0), l
                    }, i._engine.text = function(t, n, s, o) {
                        var a = I("shape"),
                            l = I("path"),
                            h = I("textpath");
                        n = n || 0, s = s || 0, o = o || "", l.v = i.format("m{0},{1}l{2},{1}", r(n * x), r(s * x), r(n * x) + 1), l.textpathok = !0, h.string = e(o), h.on = !0, a.style.cssText = b, a.coordsize = x + p + x, a.coordorigin = "0 0";
                        var c = new A(a, t),
                            u = {
                                fill: "#000",
                                stroke: "none",
                                font: i._availableAttrs.font,
                                text: o
                            };
                        c.shape = a, c.path = l, c.textpath = h, c.type = "text", c.attrs.text = e(o), c.attrs.x = n, c.attrs.y = s, c.attrs.w = 1, c.attrs.h = 1, D(c, u), a.appendChild(h), a.appendChild(l), t.canvas.appendChild(a);
                        var d = I("skew");
                        return d.on = !0, a.appendChild(d), c.skew = d, c.transform(f), c
                    }, i._engine.setSize = function(t, e) {
                        var n = this.canvas.style;
                        return this.width = t, this.height = e, t == +t && (t += "px"), e == +e && (e += "px"), n.width = t, n.height = e, n.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && i._engine.setViewBox.apply(this, this._viewBox), this
                    }, i._engine.setViewBox = function(t, e, n, s, r) {
                        i.eve("raphael.setViewBox", this, this._viewBox, [t, e, n, s, r]);
                        var a, l, h = this.width,
                            c = this.height,
                            u = 1 / o(n / h, s / c);
                        return r && (a = c / s, l = h / n, h > n * a && (t -= (h - n * a) / 2 / a), c > s * l && (e -= (c - s * l) / 2 / l)), this._viewBox = [t, e, n, s, !!r], this._viewBoxShift = {
                            dx: -t,
                            dy: -e,
                            scale: u
                        }, this.forEach(function(t) {
                            t.transform("...")
                        }), this
                    };
                    var I;
                    i._engine.initWin = function(t) {
                        var e = t.document;
                        e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                        try {
                            !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), I = function(t) {
                                return e.createElement("<rvml:" + t + ' class="rvml">')
                            }
                        } catch (i) {
                            I = function(t) {
                                return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                            }
                        }
                    }, i._engine.initWin(i._g.win), i._engine.create = function() {
                        var t = i._getContainer.apply(0, arguments),
                            e = t.container,
                            n = t.height,
                            s = t.width,
                            r = t.x,
                            o = t.y;
                        if (!e) throw new Error("VML container not found.");
                        var a = new i._Paper,
                            l = a.canvas = i._g.doc.createElement("div"),
                            h = l.style;
                        return r = r || 0, o = o || 0, s = s || 512, n = n || 342, a.width = s, a.height = n, s == +s && (s += "px"), n == +n && (n += "px"), a.coordsize = 1e3 * x + p + 1e3 * x, a.coordorigin = "0 0", a.span = i._g.doc.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(a.span), h.cssText = i.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", s, n), 1 == e ? (i._g.doc.body.appendChild(l), h.left = r + "px", h.top = o + "px", h.position = "absolute") : e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l), a.renderfix = function() {}, a
                    }, i.prototype.clear = function() {
                        i.eve("raphael.clear", this), this.canvas.innerHTML = f, this.span = i._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                    }, i.prototype.remove = function() {
                        i.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                        for (var t in this) this[t] = "function" == typeof this[t] ? i._removedFactory(t) : null;
                        return !0
                    };
                    var P = i.st;
                    for (var M in N) N[t](M) && !P[t](M) && (P[M] = function(t) {
                        return function() {
                            var e = arguments;
                            return this.forEach(function(i) {
                                i[t].apply(i, e)
                            })
                        }
                    }(M))
                }
            }(), D.was ? S.win.Raphael = i : Raphael = i, i
    }),
    function() {
        var t, e, i, n, s = [].slice,
            r = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            o = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) o.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            l = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = window.Morris = {}, t = jQuery, e.EventEmitter = function() {
            function t() {}
            return t.prototype.on = function(t, e) {
                return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this
            }, t.prototype.fire = function() {
                var t, e, i, n, r, o, a;
                if (i = arguments[0], t = 2 <= arguments.length ? s.call(arguments, 1) : [], null != this.handlers && null != this.handlers[i]) {
                    for (o = this.handlers[i], a = [], n = 0, r = o.length; r > n; n++) e = o[n], a.push(e.apply(null, t));
                    return a
                }
            }, t
        }(), e.commas = function(t) {
            var e, i, n, s;
            return null != t ? (n = 0 > t ? "-" : "", e = Math.abs(t), i = Math.floor(e).toFixed(0), n += i.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), s = e.toString(), s.length > i.length && (n += s.slice(i.length)), n) : "-"
        }, e.pad2 = function(t) {
            return (10 > t ? "0" : "") + t
        }, e.Grid = function(i) {
            function n(e) {
                this.resizeHandler = r(this.resizeHandler, this);
                var i = this;
                if (this.el = t("string" == typeof e.element ? document.getElementById(e.element) : e.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
                "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = t.extend({}, this.gridDefaults, this.defaults || {}, e), "string" == typeof this.options.units && (this.options.postUnits = e.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function(t) {
                    var e, n, s, r, o;
                    return n = i.el.offset(), o = t.pageX - n.left, i.selectFrom ? (e = i.data[i.hitTest(Math.min(o, i.selectFrom))]._x, s = i.data[i.hitTest(Math.max(o, i.selectFrom))]._x, r = s - e, i.selectionRect.attr({
                        x: e,
                        width: r
                    })) : i.fire("hovermove", o, t.pageY - n.top)
                }), this.el.bind("mouseleave", function() {
                    return i.selectFrom && (i.selectionRect.hide(), i.selectFrom = null), i.fire("hoverout")
                }), this.el.bind("touchstart touchmove touchend", function(t) {
                    var e, n;
                    return n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e = i.el.offset(), i.fire("hovermove", n.pageX - e.left, n.pageY - e.top)
                }), this.el.bind("click", function(t) {
                    var e;
                    return e = i.el.offset(), i.fire("gridclick", t.pageX - e.left, t.pageY - e.top)
                }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
                    fill: this.options.rangeSelectColor,
                    stroke: !1
                }).toBack().hide(), this.el.bind("mousedown", function(t) {
                    var e;
                    return e = i.el.offset(), i.startRange(t.pageX - e.left)
                }), this.el.bind("mouseup", function(t) {
                    var e;
                    return e = i.el.offset(), i.endRange(t.pageX - e.left), i.fire("hovermove", t.pageX - e.left, t.pageY - e.top)
                })), this.options.resize && t(window).bind("resize", function() {
                    return null != i.timeoutId && window.clearTimeout(i.timeoutId), i.timeoutId = window.setTimeout(i.resizeHandler, 100)
                }), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit()
            }
            return a(n, i), n.prototype.gridDefaults = {
                dateFormat: null,
                axes: !0,
                grid: !0,
                gridLineColor: "#aaa",
                gridStrokeWidth: .5,
                gridTextColor: "#888",
                gridTextSize: 12,
                gridTextFamily: "sans-serif",
                gridTextWeight: "normal",
                hideHover: !1,
                yLabelFormat: null,
                xLabelAngle: 0,
                numLines: 5,
                padding: 25,
                parseTime: !0,
                postUnits: "",
                preUnits: "",
                ymax: "auto",
                ymin: "auto 0",
                goals: [],
                goalStrokeWidth: 1,
                goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
                events: [],
                eventStrokeWidth: 1,
                eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
                rangeSelect: null,
                rangeSelectColor: "#eef",
                resize: !1
            }, n.prototype.setData = function(t, i) {
                var n, s, r, o, a, l, h, c, u, d, p, f, g, m, v;
                return null == i && (i = !0), this.options.data = t, null == t || 0 === t.length ? (this.data = [], this.raphael.clear(), void(null != this.hover && this.hover.hide())) : (f = this.cumulative ? 0 : null, g = this.cumulative ? 0 : null, this.options.goals.length > 0 && (a = Math.min.apply(Math, this.options.goals), o = Math.max.apply(Math, this.options.goals), g = null != g ? Math.min(g, a) : a, f = null != f ? Math.max(f, o) : o), this.data = function() {
                    var i, n, o;
                    for (o = [], r = i = 0, n = t.length; n > i; r = ++i) h = t[r], l = {
                        src: h
                    }, l.label = h[this.options.xkey], this.options.parseTime ? (l.x = e.parseDate(l.label), this.options.dateFormat ? l.label = this.options.dateFormat(l.x) : "number" == typeof l.label && (l.label = new Date(l.label).toString())) : (l.x = r, this.options.xLabelFormat && (l.label = this.options.xLabelFormat(l))), u = 0, l.y = function() {
                        var t, e, i, n;
                        for (i = this.options.ykeys, n = [], s = t = 0, e = i.length; e > t; s = ++t) p = i[s], m = h[p], "string" == typeof m && (m = parseFloat(m)), null != m && "number" != typeof m && (m = null), null != m && (this.cumulative ? u += m : null != f ? (f = Math.max(m, f), g = Math.min(m, g)) : f = g = m), this.cumulative && null != u && (f = Math.max(u, f), g = Math.min(u, g)), n.push(m);
                        return n
                    }.call(this), o.push(l);
                    return o
                }.call(this), this.options.parseTime && (this.data = this.data.sort(function(t, e) {
                    return (t.x > e.x) - (e.x > t.x)
                })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.events.length > 0 && (this.events = this.options.parseTime ? function() {
                    var t, i, s, r;
                    for (s = this.options.events, r = [], t = 0, i = s.length; i > t; t++) n = s[t], r.push(e.parseDate(n));
                    return r
                }.call(this) : this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", g), this.ymax = this.yboundary("max", f), this.ymin === this.ymax && (g && (this.ymin -= 1), this.ymax += 1), ((v = this.options.axes) === !0 || "both" === v || "y" === v || this.options.grid === !0) && (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (c = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function() {
                    var t, e, i, n;
                    for (n = [], d = t = e = this.ymin, i = this.ymax; c > 0 ? i >= t : t >= i; d = t += c) n.push(d);
                    return n
                }.call(this))), this.dirty = !0, i ? this.redraw() : void 0)
            }, n.prototype.yboundary = function(t, e) {
                var i, n;
                return i = this.options["y" + t], "string" == typeof i ? "auto" === i.slice(0, 4) ? i.length > 5 ? (n = parseInt(i.slice(5), 10), null == e ? n : Math[t](e, n)) : null != e ? e : 0 : parseInt(i, 10) : i
            }, n.prototype.autoGridLines = function(t, e, i) {
                var n, s, r, o, a, l, h, c, u;
                return a = e - t, u = Math.floor(Math.log(a) / Math.log(10)), h = Math.pow(10, u), s = Math.floor(t / h) * h, n = Math.ceil(e / h) * h, l = (n - s) / (i - 1), 1 === h && l > 1 && Math.ceil(l) !== l && (l = Math.ceil(l), n = s + l * (i - 1)), 0 > s && n > 0 && (s = Math.floor(t / l) * l, n = Math.ceil(e / l) * l), 1 > l ? (o = Math.floor(Math.log(l) / Math.log(10)), r = function() {
                    var t, e;
                    for (e = [], c = t = s; l > 0 ? n >= t : t >= n; c = t += l) e.push(parseFloat(c.toFixed(1 - o)));
                    return e
                }()) : r = function() {
                    var t, e;
                    for (e = [], c = t = s; l > 0 ? n >= t : t >= n; c = t += l) e.push(c);
                    return e
                }(), r
            }, n.prototype._calc = function() {
                var t, e, i, n, s, r, o, a;
                return s = this.el.width(), i = this.el.height(), (this.elementWidth !== s || this.elementHeight !== i || this.dirty) && (this.elementWidth = s, this.elementHeight = i, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, ((o = this.options.axes) === !0 || "both" === o || "y" === o) && (r = function() {
                    var t, i, n, s;
                    for (n = this.grid, s = [], t = 0, i = n.length; i > t; t++) e = n[t], s.push(this.measureText(this.yAxisFormat(e)).width);
                    return s
                }.call(this), this.left += Math.max.apply(Math, r)), ((a = this.options.axes) === !0 || "both" === a || "x" === a) && (t = function() {
                    var t, e, i;
                    for (i = [], n = t = 0, e = this.data.length; e >= 0 ? e > t : t > e; n = e >= 0 ? ++t : --t) i.push(this.measureText(this.data[n].text, -this.options.xLabelAngle).height);
                    return i
                }.call(this), this.bottom -= Math.max.apply(Math, t)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0
            }, n.prototype.transY = function(t) {
                return this.bottom - (t - this.ymin) * this.dy
            }, n.prototype.transX = function(t) {
                return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx
            }, n.prototype.redraw = function() {
                return this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0
            }, n.prototype.measureText = function(t, e) {
                var i, n;
                return null == e && (e = 0), n = this.raphael.text(100, 100, t).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(e), i = n.getBBox(), n.remove(), i
            }, n.prototype.yAxisFormat = function(t) {
                return this.yLabelFormat(t)
            }, n.prototype.yLabelFormat = function(t) {
                return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(t) : "" + this.options.preUnits + e.commas(t) + this.options.postUnits
            }, n.prototype.drawGrid = function() {
                var t, e, i, n, s, r, o, a;
                if (this.options.grid !== !1 || (s = this.options.axes) === !0 || "both" === s || "y" === s) {
                    for (r = this.grid, a = [], i = 0, n = r.length; n > i; i++) t = r[i], e = this.transY(t), ((o = this.options.axes) === !0 || "both" === o || "y" === o) && this.drawYAxisLabel(this.left - this.options.padding / 2, e, this.yAxisFormat(t)), a.push(this.options.grid ? this.drawGridLine("M" + this.left + "," + e + "H" + (this.left + this.width)) : void 0);
                    return a
                }
            }, n.prototype.drawGoals = function() {
                var t, e, i, n, s, r, o;
                for (r = this.options.goals, o = [], i = n = 0, s = r.length; s > n; i = ++n) e = r[i], t = this.options.goalLineColors[i % this.options.goalLineColors.length], o.push(this.drawGoal(e, t));
                return o
            }, n.prototype.drawEvents = function() {
                var t, e, i, n, s, r, o;
                for (r = this.events, o = [], i = n = 0, s = r.length; s > n; i = ++n) e = r[i], t = this.options.eventLineColors[i % this.options.eventLineColors.length], o.push(this.drawEvent(e, t));
                return o
            }, n.prototype.drawGoal = function(t, e) {
                return this.raphael.path("M" + this.left + "," + this.transY(t) + "H" + this.right).attr("stroke", e).attr("stroke-width", this.options.goalStrokeWidth)
            }, n.prototype.drawEvent = function(t, e) {
                return this.raphael.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", e).attr("stroke-width", this.options.eventStrokeWidth)
            }, n.prototype.drawYAxisLabel = function(t, e, i) {
                return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
            }, n.prototype.drawGridLine = function(t) {
                return this.raphael.path(t).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
            }, n.prototype.startRange = function(t) {
                return this.hover.hide(), this.selectFrom = t, this.selectionRect.attr({
                    x: t,
                    width: 0
                }).show()
            }, n.prototype.endRange = function(t) {
                var e, i;
                return this.selectFrom ? (i = Math.min(this.selectFrom, t), e = Math.max(this.selectFrom, t), this.options.rangeSelect.call(this.el, {
                    start: this.data[this.hitTest(i)].x,
                    end: this.data[this.hitTest(e)].x
                }), this.selectFrom = null) : void 0
            }, n.prototype.resizeHandler = function() {
                return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
            }, n
        }(e.EventEmitter), e.parseDate = function(t) {
            var e, i, n, s, r, o, a, l, h, c, u;
            return "number" == typeof t ? t : (i = t.match(/^(\d+) Q(\d)$/), s = t.match(/^(\d+)-(\d+)$/), r = t.match(/^(\d+)-(\d+)-(\d+)$/), a = t.match(/^(\d+) W(\d+)$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), h = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), i ? new Date(parseInt(i[1], 10), 3 * parseInt(i[2], 10) - 1, 1).getTime() : s ? new Date(parseInt(s[1], 10), parseInt(s[2], 10) - 1, 1).getTime() : r ? new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10)).getTime() : a ? (c = new Date(parseInt(a[1], 10), 0, 1), 4 !== c.getDay() && c.setMonth(0, 1 + (4 - c.getDay() + 7) % 7), c.getTime() + 6048e5 * parseInt(a[2], 10)) : l ? l[6] ? (o = 0, "Z" !== l[6] && (o = 60 * parseInt(l[8], 10) + parseInt(l[9], 10), "+" === l[7] && (o = 0 - o)), Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + o)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10)).getTime() : h ? (u = parseFloat(h[6]), e = Math.floor(u), n = Math.round(1e3 * (u - e)), h[8] ? (o = 0, "Z" !== h[8] && (o = 60 * parseInt(h[10], 10) + parseInt(h[11], 10), "+" === h[9] && (o = 0 - o)), Date.UTC(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10) + o, e, n)) : new Date(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10), e, n).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime())
        }, e.Hover = function() {
            function i(i) {
                null == i && (i = {}), this.options = t.extend({}, e.Hover.defaults, i), this.el = t("<div class='" + this.options["class"] + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
            }
            return i.defaults = {
                "class": "morris-hover morris-default-style"
            }, i.prototype.update = function(t, e, i) {
                return t ? (this.html(t), this.show(), this.moveTo(e, i)) : this.hide()
            }, i.prototype.html = function(t) {
                return this.el.html(t)
            }, i.prototype.moveTo = function(t, e) {
                var i, n, s, r, o, a;
                return o = this.options.parent.innerWidth(), r = this.options.parent.innerHeight(), n = this.el.outerWidth(), i = this.el.outerHeight(), s = Math.min(Math.max(0, t - n / 2), o - n), null != e ? (a = e - i - 10, 0 > a && (a = e + 10, a + i > r && (a = r / 2 - i / 2))) : a = r / 2 - i / 2, this.el.css({
                    left: s + "px",
                    top: parseInt(a) + "px"
                })
            }, i.prototype.show = function() {
                return this.el.show()
            }, i.prototype.hide = function() {
                return this.el.hide()
            }, i
        }(), e.Line = function(t) {
            function i(t) {
                return this.hilight = r(this.hilight, this), this.onHoverOut = r(this.onHoverOut, this), this.onHoverMove = r(this.onHoverMove, this), this.onGridClick = r(this.onGridClick, this), this instanceof e.Line ? void i.__super__.constructor.call(this, t) : new e.Line(t)
            }
            return a(i, t), i.prototype.init = function() {
                return "always" !== this.options.hideHover ? (this.hover = new e.Hover({
                    parent: this.el
                }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0
            }, i.prototype.defaults = {
                lineWidth: 3,
                pointSize: 4,
                lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                pointStrokeWidths: [1],
                pointStrokeColors: ["#ffffff"],
                pointFillColors: [],
                smooth: !0,
                xLabels: "auto",
                xLabelFormat: null,
                xLabelMargin: 24,
                hideHover: !1
            }, i.prototype.calc = function() {
                return this.calcPoints(), this.generatePaths()
            }, i.prototype.calcPoints = function() {
                var t, e, i, n, s, r;
                for (s = this.data, r = [], i = 0, n = s.length; n > i; i++) t = s[i], t._x = this.transX(t.x), t._y = function() {
                    var i, n, s, r;
                    for (s = t.y, r = [], i = 0, n = s.length; n > i; i++) e = s[i], r.push(null != e ? this.transY(e) : e);
                    return r
                }.call(this), r.push(t._ymax = Math.min.apply(Math, [this.bottom].concat(function() {
                    var i, n, s, r;
                    for (s = t._y, r = [], i = 0, n = s.length; n > i; i++) e = s[i], null != e && r.push(e);
                    return r
                }())));
                return r
            }, i.prototype.hitTest = function(t) {
                var e, i, n, s, r;
                if (0 === this.data.length) return null;
                for (r = this.data.slice(1), e = n = 0, s = r.length; s > n && (i = r[e], !(t < (i._x + this.data[e]._x) / 2)); e = ++n);
                return e
            }, i.prototype.onGridClick = function(t, e) {
                var i;
                return i = this.hitTest(t), this.fire("click", i, this.data[i].src, t, e)
            }, i.prototype.onHoverMove = function(t) {
                var e;
                return e = this.hitTest(t), this.displayHoverForRow(e)
            }, i.prototype.onHoverOut = function() {
                return this.options.hideHover !== !1 ? this.displayHoverForRow(null) : void 0
            }, i.prototype.displayHoverForRow = function(t) {
                var e;
                return null != t ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)), this.hilight(t)) : (this.hover.hide(), this.hilight())
            }, i.prototype.hoverContentForRow = function(t) {
                var e, i, n, s, r, o, a;
                for (n = this.data[t], e = "<div class='morris-hover-row-label'>" + n.label + "</div>", a = n.y, i = r = 0, o = a.length; o > r; i = ++r) s = a[i], e += "<div class='morris-hover-point' style='color: " + this.colorFor(n, i, "label") + "'>\n  " + this.options.labels[i] + ":\n  " + this.yLabelFormat(s) + "\n</div>";
                return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, n.src)), [e, n._x, n._ymax]
            }, i.prototype.generatePaths = function() {
                var t, i, n, s;
                return this.paths = function() {
                    var r, o, a, h;
                    for (h = [], i = r = 0, o = this.options.ykeys.length; o >= 0 ? o > r : r > o; i = o >= 0 ? ++r : --r) s = "boolean" == typeof this.options.smooth ? this.options.smooth : (a = this.options.ykeys[i], l.call(this.options.smooth, a) >= 0), t = function() {
                        var t, e, s, r;
                        for (s = this.data, r = [], t = 0, e = s.length; e > t; t++) n = s[t], void 0 !== n._y[i] && r.push({
                            x: n._x,
                            y: n._y[i]
                        });
                        return r
                    }.call(this), h.push(t.length > 1 ? e.Line.createPath(t, s, this.bottom) : null);
                    return h
                }.call(this)
            }, i.prototype.draw = function() {
                var t;
                return ((t = this.options.axes) === !0 || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries(), this.options.hideHover === !1 ? this.displayHoverForRow(this.data.length - 1) : void 0
            }, i.prototype.drawXAxis = function() {
                var t, i, n, s, r, o, a, l, h, c, u = this;
                for (a = this.bottom + this.options.padding / 2, r = null, s = null, t = function(t, e) {
                        var i, n, o, l, h;
                        return i = u.drawXAxisLabel(u.transX(e), a, t), h = i.getBBox(), i.transform("r" + -u.options.xLabelAngle), n = i.getBBox(), i.transform("t0," + n.height / 2 + "..."), 0 !== u.options.xLabelAngle && (l = -.5 * h.width * Math.cos(u.options.xLabelAngle * Math.PI / 180), i.transform("t" + l + ",0...")), n = i.getBBox(), (null == r || r >= n.x + n.width || null != s && s >= n.x) && n.x >= 0 && n.x + n.width < u.el.width() ? (0 !== u.options.xLabelAngle && (o = 1.25 * u.options.gridTextSize / Math.sin(u.options.xLabelAngle * Math.PI / 180), s = n.x - o), r = n.x - u.options.xLabelMargin) : i.remove()
                    }, n = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
                        [this.data[0].label, this.data[0].x]
                    ] : e.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
                        var t, e, i, n;
                        for (i = this.data, n = [], t = 0, e = i.length; e > t; t++) o = i[t], n.push([o.label, o.x]);
                        return n
                    }.call(this), n.reverse(), c = [], l = 0, h = n.length; h > l; l++) i = n[l], c.push(t(i[0], i[1]));
                return c
            }, i.prototype.drawSeries = function() {
                var t, e, i, n, s, r;
                for (this.seriesPoints = [], t = e = n = this.options.ykeys.length - 1; 0 >= n ? 0 >= e : e >= 0; t = 0 >= n ? ++e : --e) this._drawLineFor(t);
                for (r = [], t = i = s = this.options.ykeys.length - 1; 0 >= s ? 0 >= i : i >= 0; t = 0 >= s ? ++i : --i) r.push(this._drawPointFor(t));
                return r
            }, i.prototype._drawPointFor = function(t) {
                var e, i, n, s, r, o;
                for (this.seriesPoints[t] = [], r = this.data, o = [], n = 0, s = r.length; s > n; n++) i = r[n], e = null, null != i._y[t] && (e = this.drawLinePoint(i._x, i._y[t], this.colorFor(i, t, "point"), t)), o.push(this.seriesPoints[t].push(e));
                return o
            }, i.prototype._drawLineFor = function(t) {
                var e;
                return e = this.paths[t], null !== e ? this.drawLinePath(e, this.colorFor(null, t, "line"), t) : void 0
            }, i.createPath = function(t, i, n) {
                var s, r, o, a, l, h, c, u, d, p, f, g, m, v;
                for (c = "", i && (o = e.Line.gradients(t)), u = {
                        y: null
                    }, a = m = 0, v = t.length; v > m; a = ++m) s = t[a], null != s.y && (null != u.y ? i ? (r = o[a], h = o[a - 1], l = (s.x - u.x) / 4, d = u.x + l, f = Math.min(n, u.y + l * h), p = s.x - l, g = Math.min(n, s.y - l * r), c += "C" + d + "," + f + "," + p + "," + g + "," + s.x + "," + s.y) : c += "L" + s.x + "," + s.y : i && null == o[a] || (c += "M" + s.x + "," + s.y)), u = s;
                return c
            }, i.gradients = function(t) {
                var e, i, n, s, r, o, a, l;
                for (i = function(t, e) {
                        return (t.y - e.y) / (t.x - e.x)
                    }, l = [], n = o = 0, a = t.length; a > o; n = ++o) e = t[n], null != e.y ? (s = t[n + 1] || {
                    y: null
                }, r = t[n - 1] || {
                    y: null
                }, l.push(null != r.y && null != s.y ? i(r, s) : null != r.y ? i(r, e) : null != s.y ? i(e, s) : null)) : l.push(null);
                return l
            }, i.prototype.hilight = function(t) {
                var e, i, n, s, r;
                if (null !== this.prevHilight && this.prevHilight !== t)
                    for (e = i = 0, s = this.seriesPoints.length - 1; s >= 0 ? s >= i : i >= s; e = s >= 0 ? ++i : --i) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrinkSeries(e));
                if (null !== t && this.prevHilight !== t)
                    for (e = n = 0, r = this.seriesPoints.length - 1; r >= 0 ? r >= n : n >= r; e = r >= 0 ? ++n : --n) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrowSeries(e));
                return this.prevHilight = t
            }, i.prototype.colorFor = function(t, e, i) {
                return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, t, e, i) : "point" === i ? this.options.pointFillColors[e % this.options.pointFillColors.length] || this.options.lineColors[e % this.options.lineColors.length] : this.options.lineColors[e % this.options.lineColors.length]
            }, i.prototype.drawXAxisLabel = function(t, e, i) {
                return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
            }, i.prototype.drawLinePath = function(t, e, i) {
                return this.raphael.path(t).attr("stroke", e).attr("stroke-width", this.lineWidthForSeries(i))
            }, i.prototype.drawLinePoint = function(t, e, i, n) {
                return this.raphael.circle(t, e, this.pointSizeForSeries(n)).attr("fill", i).attr("stroke-width", this.pointStrokeWidthForSeries(n)).attr("stroke", this.pointStrokeColorForSeries(n))
            }, i.prototype.pointStrokeWidthForSeries = function(t) {
                return this.options.pointStrokeWidths[t % this.options.pointStrokeWidths.length]
            }, i.prototype.pointStrokeColorForSeries = function(t) {
                return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length]
            }, i.prototype.lineWidthForSeries = function(t) {
                return this.options.lineWidth instanceof Array ? this.options.lineWidth[t % this.options.lineWidth.length] : this.options.lineWidth
            }, i.prototype.pointSizeForSeries = function(t) {
                return this.options.pointSize instanceof Array ? this.options.pointSize[t % this.options.pointSize.length] : this.options.pointSize
            }, i.prototype.pointGrowSeries = function(t) {
                return Raphael.animation({
                    r: this.pointSizeForSeries(t) + 3
                }, 25, "linear")
            }, i.prototype.pointShrinkSeries = function(t) {
                return Raphael.animation({
                    r: this.pointSizeForSeries(t)
                }, 25, "linear")
            }, i
        }(e.Grid), e.labelSeries = function(i, n, s, r, o) {
            var a, l, h, c, u, d, p, f, g, m, v;
            if (h = 200 * (n - i) / s, l = new Date(i), p = e.LABEL_SPECS[r], void 0 === p)
                for (v = e.AUTO_LABEL_ORDER, g = 0, m = v.length; m > g; g++)
                    if (c = v[g], d = e.LABEL_SPECS[c], h >= d.span) {
                        p = d;
                        break
                    }
            for (void 0 === p && (p = e.LABEL_SPECS.second), o && (p = t.extend({}, p, {
                    fmt: o
                })), a = p.start(l), u = [];
                (f = a.getTime()) <= n;) f >= i && u.push([p.fmt(a), f]), p.incr(a);
            return u
        }, i = function(t) {
            return {
                span: 60 * t * 1e3,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours())
                },
                fmt: function(t) {
                    return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes())
                },
                incr: function(e) {
                    return e.setUTCMinutes(e.getUTCMinutes() + t)
                }
            }
        }, n = function(t) {
            return {
                span: 1e3 * t,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes())
                },
                fmt: function(t) {
                    return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes()) + ":" + e.pad2(t.getSeconds())
                },
                incr: function(e) {
                    return e.setUTCSeconds(e.getUTCSeconds() + t)
                }
            }
        }, e.LABEL_SPECS = {
            decade: {
                span: 1728e8,
                start: function(t) {
                    return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1)
                },
                fmt: function(t) {
                    return "" + t.getFullYear()
                },
                incr: function(t) {
                    return t.setFullYear(t.getFullYear() + 10)
                }
            },
            year: {
                span: 1728e7,
                start: function(t) {
                    return new Date(t.getFullYear(), 0, 1)
                },
                fmt: function(t) {
                    return "" + t.getFullYear()
                },
                incr: function(t) {
                    return t.setFullYear(t.getFullYear() + 1)
                }
            },
            month: {
                span: 24192e5,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), 1)
                },
                fmt: function(t) {
                    return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1)
                },
                incr: function(t) {
                    return t.setMonth(t.getMonth() + 1)
                }
            },
            week: {
                span: 6048e5,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate())
                },
                fmt: function(t) {
                    return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate())
                },
                incr: function(t) {
                    return t.setDate(t.getDate() + 7)
                }
            },
            day: {
                span: 864e5,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate())
                },
                fmt: function(t) {
                    return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate())
                },
                incr: function(t) {
                    return t.setDate(t.getDate() + 1)
                }
            },
            hour: i(60),
            "30min": i(30),
            "15min": i(15),
            "10min": i(10),
            "5min": i(5),
            minute: i(1),
            "30sec": n(30),
            "15sec": n(15),
            "10sec": n(10),
            "5sec": n(5),
            second: n(1)
        }, e.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], e.Area = function(i) {
            function n(i) {
                var r;
                return this instanceof e.Area ? (r = t.extend({}, s, i), this.cumulative = !r.behaveLikeLine, "auto" === r.fillOpacity && (r.fillOpacity = r.behaveLikeLine ? .8 : 1), void n.__super__.constructor.call(this, r)) : new e.Area(i)
            }
            var s;
            return a(n, i), s = {
                fillOpacity: "auto",
                behaveLikeLine: !1
            }, n.prototype.calcPoints = function() {
                var t, e, i, n, s, r, o;
                for (r = this.data, o = [], n = 0, s = r.length; s > n; n++) t = r[n], t._x = this.transX(t.x), e = 0, t._y = function() {
                    var n, s, r, o;
                    for (r = t.y, o = [], n = 0, s = r.length; s > n; n++) i = r[n], this.options.behaveLikeLine ? o.push(this.transY(i)) : (e += i || 0, o.push(this.transY(e)));
                    return o
                }.call(this), o.push(t._ymax = Math.max.apply(Math, t._y));
                return o
            }, n.prototype.drawSeries = function() {
                var t, e, i, n, s, r, o, a;
                for (this.seriesPoints = [], e = this.options.behaveLikeLine ? function() {
                        r = [];
                        for (var t = 0, e = this.options.ykeys.length - 1; e >= 0 ? e >= t : t >= e; e >= 0 ? t++ : t--) r.push(t);
                        return r
                    }.apply(this) : function() {
                        o = [];
                        for (var t = s = this.options.ykeys.length - 1; 0 >= s ? 0 >= t : t >= 0; 0 >= s ? t++ : t--) o.push(t);
                        return o
                    }.apply(this), a = [], i = 0, n = e.length; n > i; i++) t = e[i], this._drawFillFor(t), this._drawLineFor(t), a.push(this._drawPointFor(t));
                return a
            }, n.prototype._drawFillFor = function(t) {
                var e;
                return e = this.paths[t], null !== e ? (e += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(e, this.fillForSeries(t))) : void 0
            }, n.prototype.fillForSeries = function(t) {
                var e;
                return e = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line")), Raphael.hsl(e.h, this.options.behaveLikeLine ? .9 * e.s : .75 * e.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * e.l : 1.25 * e.l))
            }, n.prototype.drawFilledPath = function(t, e) {
                return this.raphael.path(t).attr("fill", e).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none")
            }, n
        }(e.Line), e.Bar = function(i) {
            function n(i) {
                return this.onHoverOut = r(this.onHoverOut, this), this.onHoverMove = r(this.onHoverMove, this), this.onGridClick = r(this.onGridClick, this), this instanceof e.Bar ? void n.__super__.constructor.call(this, t.extend({}, i, {
                    parseTime: !1
                })) : new e.Bar(i)
            }
            return a(n, i), n.prototype.init = function() {
                return this.cumulative = this.options.stacked, "always" !== this.options.hideHover ? (this.hover = new e.Hover({
                    parent: this.el
                }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0
            }, n.prototype.defaults = {
                barSizeRatio: .75,
                barGap: 3,
                barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                barOpacity: 1,
                barRadius: [0, 0, 0, 0],
                xLabelMargin: 50
            }, n.prototype.calc = function() {
                var t;
                return this.calcBars(), this.options.hideHover === !1 ? (t = this.hover).update.apply(t, this.hoverContentForRow(this.data.length - 1)) : void 0
            }, n.prototype.calcBars = function() {
                var t, e, i, n, s, r, o;
                for (r = this.data, o = [], t = n = 0, s = r.length; s > n; t = ++n) e = r[t], e._x = this.left + this.width * (t + .5) / this.data.length, o.push(e._y = function() {
                    var t, n, s, r;
                    for (s = e.y, r = [], t = 0, n = s.length; n > t; t++) i = s[t], r.push(null != i ? this.transY(i) : null);
                    return r
                }.call(this));
                return o
            }, n.prototype.draw = function() {
                var t;
                return ((t = this.options.axes) === !0 || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries()
            }, n.prototype.drawXAxis = function() {
                var t, e, i, n, s, r, o, a, l, h, c, u, d;
                for (h = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), o = null, r = null, d = [], t = c = 0, u = this.data.length; u >= 0 ? u > c : c > u; t = u >= 0 ? ++c : --c) a = this.data[this.data.length - 1 - t], e = this.drawXAxisLabel(a._x, h, a.label), l = e.getBBox(), e.transform("r" + -this.options.xLabelAngle), i = e.getBBox(), e.transform("t0," + i.height / 2 + "..."), 0 !== this.options.xLabelAngle && (s = -.5 * l.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), e.transform("t" + s + ",0...")), (null == o || o >= i.x + i.width || null != r && r >= i.x) && i.x >= 0 && i.x + i.width < this.el.width() ? (0 !== this.options.xLabelAngle && (n = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), r = i.x - n), d.push(o = i.x - this.options.xLabelMargin)) : d.push(e.remove());
                return d
            }, n.prototype.drawSeries = function() {
                var t, e, i, n, s, r, o, a, l, h, c, u, d, p, f;
                return i = this.width / this.options.data.length, a = this.options.stacked ? 1 : this.options.ykeys.length, t = (i * this.options.barSizeRatio - this.options.barGap * (a - 1)) / a, this.options.barSize && (t = Math.min(t, this.options.barSize)), u = i - t * a - this.options.barGap * (a - 1), o = u / 2, f = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() {
                    var a, u, g, m;
                    for (g = this.data, m = [], n = a = 0, u = g.length; u > a; n = ++a) l = g[n], s = 0, m.push(function() {
                        var a, u, g, m;
                        for (g = l._y, m = [], h = a = 0, u = g.length; u > a; h = ++a) p = g[h], null !== p ? (f ? (d = Math.min(p, f), e = Math.max(p, f)) : (d = p, e = this.bottom), r = this.left + n * i + o, this.options.stacked || (r += h * (t + this.options.barGap)), c = e - d, this.options.verticalGridCondition && this.options.verticalGridCondition(l.x) && this.drawBar(this.left + n * i, this.top, i, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (d -= s), this.drawBar(r, d, t, c, this.colorFor(l, h, "bar"), this.options.barOpacity, this.options.barRadius), m.push(s += c)) : m.push(null);
                        return m
                    }.call(this));
                    return m
                }.call(this)
            }, n.prototype.colorFor = function(t, e, i) {
                var n, s;
                return "function" == typeof this.options.barColors ? (n = {
                    x: t.x,
                    y: t.y[e],
                    label: t.label
                }, s = {
                    index: e,
                    key: this.options.ykeys[e],
                    label: this.options.labels[e]
                }, this.options.barColors.call(this, n, s, i)) : this.options.barColors[e % this.options.barColors.length]
            }, n.prototype.hitTest = function(t) {
                return 0 === this.data.length ? null : (t = Math.max(Math.min(t, this.right), this.left), Math.min(this.data.length - 1, Math.floor((t - this.left) / (this.width / this.data.length))))
            }, n.prototype.onGridClick = function(t, e) {
                var i;
                return i = this.hitTest(t), this.fire("click", i, this.data[i].src, t, e)
            }, n.prototype.onHoverMove = function(t) {
                var e, i;
                return e = this.hitTest(t), (i = this.hover).update.apply(i, this.hoverContentForRow(e))
            }, n.prototype.onHoverOut = function() {
                return this.options.hideHover !== !1 ? this.hover.hide() : void 0
            }, n.prototype.hoverContentForRow = function(t) {
                var e, i, n, s, r, o, a, l;
                for (n = this.data[t], e = "<div class='morris-hover-row-label'>" + n.label + "</div>", l = n.y, i = o = 0, a = l.length; a > o; i = ++o) r = l[i], e += "<div class='morris-hover-point' style='color: " + this.colorFor(n, i, "label") + "'>\n  " + this.options.labels[i] + ":\n  " + this.yLabelFormat(r) + "\n</div>";
                return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, n.src)), s = this.left + (t + .5) * this.width / this.data.length, [e, s]
            }, n.prototype.drawXAxisLabel = function(t, e, i) {
                var n;
                return n = this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
            }, n.prototype.drawBar = function(t, e, i, n, s, r, o) {
                var a, l;
                return a = Math.max.apply(Math, o), l = 0 === a || a > n ? this.raphael.rect(t, e, i, n) : this.raphael.path(this.roundedRect(t, e, i, n, o)), l.attr("fill", s).attr("fill-opacity", r).attr("stroke", "none")
            }, n.prototype.roundedRect = function(t, e, i, n, s) {
                return null == s && (s = [0, 0, 0, 0]), ["M", t, s[0] + e, "Q", t, e, t + s[0], e, "L", t + i - s[1], e, "Q", t + i, e, t + i, e + s[1], "L", t + i, e + n - s[2], "Q", t + i, e + n, t + i - s[2], e + n, "L", t + s[3], e + n, "Q", t, e + n, t, e + n - s[3], "Z"]
            }, n
        }(e.Grid), e.Donut = function(i) {
            function n(i) {
                this.resizeHandler = r(this.resizeHandler, this), this.select = r(this.select, this), this.click = r(this.click, this);
                var n = this;
                if (!(this instanceof e.Donut)) return new e.Donut(i);
                if (this.options = t.extend({}, this.defaults, i), this.el = t("string" == typeof i.element ? document.getElementById(i.element) : i.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
                void 0 !== i.data && 0 !== i.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && t(window).bind("resize", function() {
                    return null != n.timeoutId && window.clearTimeout(n.timeoutId), n.timeoutId = window.setTimeout(n.resizeHandler, 100)
                }), this.setData(i.data))
            }
            return a(n, i), n.prototype.defaults = {
                colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
                backgroundColor: "#FFFFFF",
                labelColor: "#000000",
                formatter: e.commas,
                resize: !1
            }, n.prototype.redraw = function() {
                var t, i, n, s, r, o, a, l, h, c, u, d, p, f, g, m, v, y, b, x, w, _, k;
                for (this.raphael.clear(), i = this.el.width() / 2, n = this.el.height() / 2, p = (Math.min(i, n) - 10) / 3, u = 0, x = this.values, f = 0, v = x.length; v > f; f++) d = x[f], u += d;
                for (l = 5 / (2 * p), t = 1.9999 * Math.PI - l * this.data.length, o = 0, r = 0, this.segments = [], w = this.values, s = g = 0, y = w.length; y > g; s = ++g) d = w[s], h = o + l + t * (d / u), c = new e.DonutSegment(i, n, 2 * p, p, o, h, this.data[s].color || this.options.colors[r % this.options.colors.length], this.options.backgroundColor, r, this.raphael), c.render(), this.segments.push(c), c.on("hover", this.select), c.on("click", this.click), o = h, r += 1;
                for (this.text1 = this.drawEmptyDonutLabel(i, n - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(i, n + 10, this.options.labelColor, 14), a = Math.max.apply(Math, this.values), r = 0, _ = this.values, k = [], m = 0, b = _.length; b > m; m++) {
                    if (d = _[m], d === a) {
                        this.select(r);
                        break
                    }
                    k.push(r += 1)
                }
                return k
            }, n.prototype.setData = function(t) {
                var e;
                return this.data = t, this.values = function() {
                    var t, i, n, s;
                    for (n = this.data, s = [], t = 0, i = n.length; i > t; t++) e = n[t], s.push(parseFloat(e.value));
                    return s
                }.call(this), this.redraw()
            }, n.prototype.click = function(t) {
                return this.fire("click", t, this.data[t])
            }, n.prototype.select = function(t) {
                var e, i, n, s, r, o;
                for (o = this.segments, s = 0, r = o.length; r > s; s++) i = o[s], i.deselect();
                return n = this.segments[t], n.select(), e = this.data[t], this.setLabels(e.label, this.options.formatter(e.value, e))
            }, n.prototype.setLabels = function(t, e) {
                var i, n, s, r, o, a, l, h;
                return i = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, r = 1.8 * i, s = i / 2, n = i / 3, this.text1.attr({
                    text: t,
                    transform: ""
                }), o = this.text1.getBBox(), a = Math.min(r / o.width, s / o.height), this.text1.attr({
                    transform: "S" + a + "," + a + "," + (o.x + o.width / 2) + "," + (o.y + o.height)
                }), this.text2.attr({
                    text: e,
                    transform: ""
                }), l = this.text2.getBBox(), h = Math.min(r / l.width, n / l.height), this.text2.attr({
                    transform: "S" + h + "," + h + "," + (l.x + l.width / 2) + "," + l.y
                })
            }, n.prototype.drawEmptyDonutLabel = function(t, e, i, n, s) {
                var r;
                return r = this.raphael.text(t, e, "").attr("font-size", n).attr("fill", i), null != s && r.attr("font-weight", s), r
            }, n.prototype.resizeHandler = function() {
                return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
            }, n
        }(e.EventEmitter), e.DonutSegment = function(t) {
            function e(t, e, i, n, s, o, a, l, h, c) {
                this.cx = t, this.cy = e, this.inner = i, this.outer = n, this.color = a, this.backgroundColor = l, this.index = h, this.raphael = c, this.deselect = r(this.deselect, this), this.select = r(this.select, this), this.sin_p0 = Math.sin(s), this.cos_p0 = Math.cos(s), this.sin_p1 = Math.sin(o), this.cos_p1 = Math.cos(o), this.is_long = o - s > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
            }
            return a(e, t), e.prototype.calcArcPoints = function(t) {
                return [this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1]
            }, e.prototype.calcSegment = function(t, e) {
                var i, n, s, r, o, a, l, h, c, u;
                return c = this.calcArcPoints(t), i = c[0], s = c[1], n = c[2], r = c[3], u = this.calcArcPoints(e), o = u[0], l = u[1], a = u[2], h = u[3], "M" + i + "," + s + ("A" + t + "," + t + ",0," + this.is_long + ",0," + n + "," + r) + ("L" + a + "," + h) + ("A" + e + "," + e + ",0," + this.is_long + ",1," + o + "," + l) + "Z"
            }, e.prototype.calcArc = function(t) {
                var e, i, n, s, r;
                return r = this.calcArcPoints(t), e = r[0], n = r[1], i = r[2], s = r[3], "M" + e + "," + n + ("A" + t + "," + t + ",0," + this.is_long + ",0," + i + "," + s)
            }, e.prototype.render = function() {
                var t = this;
                return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
                    return t.fire("hover", t.index)
                }, function() {
                    return t.fire("click", t.index)
                })
            }, e.prototype.drawDonutArc = function(t, e) {
                return this.raphael.path(t).attr({
                    stroke: e,
                    "stroke-width": 2,
                    opacity: 0
                })
            }, e.prototype.drawDonutSegment = function(t, e, i, n, s) {
                return this.raphael.path(t).attr({
                    fill: e,
                    stroke: i,
                    "stroke-width": 3
                }).hover(n).click(s)
            }, e.prototype.select = function() {
                return this.selected ? void 0 : (this.seg.animate({
                    path: this.selectedPath
                }, 150, "<>"), this.arc.animate({
                    opacity: 1
                }, 150, "<>"), this.selected = !0)
            }, e.prototype.deselect = function() {
                return this.selected ? (this.seg.animate({
                    path: this.path
                }, 150, "<>"), this.arc.animate({
                    opacity: 0
                }, 150, "<>"), this.selected = !1) : void 0
            }, e
        }(e.EventEmitter)
    }.call(this),
    function() {
        jQuery(function() {
            return $("#episode_video_identifier").length > 0 && ($("#episode_video_identifier").select2(), $("#episode_video_identifier").on("change", function() {
                var t, e, i;
                return i = $(this).select2().find(":selected"), t = $("#episode_number").val(), e = $("#episode_slug").val(), $("#episode_length").val(i.data("length")), $("#episode_thumbnail").val(i.data("thumbnail")), $("#episode_download_url").val(i.data("download-url") + "/" + t + "-" + e + ".mp4"), $("#episode_file_size").val(i.data("file-size"))
            })), $("#users_chart").length > 0 && Morris.Area({
                element: "users_chart",
                data: $("#users_chart").data("values"),
                xkey: "day",
                ykeys: ["amount"],
                labels: [],
                lineColors: ["#8e44ad"],
                hoverCallback: function(t, e) {
                    var i;
                    return i = e.data[t], "<strong>" + i.amount + " Users</strong><br/>" + i.day
                }
            }), $("#purchased_courses_chart").length > 0 ? Morris.Area({
                element: "purchased_courses_chart",
                data: $("#purchased_courses_chart").data("values"),
                xkey: "day",
                ykeys: ["amount"],
                labels: [],
                lineColors: ["#3498db"],
                hoverCallback: function(t, e) {
                    var i;
                    return i = e.data[t], "<strong>" + i.amount + " purchased_courses</strong><br/>" + i.day
                }
            }) : void 0
        })
    }.call(this),
    function() {
        var t, e;
        jQuery(function() {
            return $("#payment-form").length > 0 ? t() : void 0
        }), t = function() {
            return Stripe.setPublishableKey($('meta[name="stripe-key"]').attr("content")), $("input[data-stripe=number]").payment("formatCardNumber"), $("input[data-stripe=cvc]").payment("formatCardCVC"), $("#payment-form").submit(function(t) {
                var i;
                return t.preventDefault(), i = $(this), i.find("button").prop("disabled", !0), Stripe.card.createToken(i, e)
            })
        }, e = function(t, e) {
            var i, n;
            i = $("#payment-form"), e.error ? (i.find(".payment-errors").text(e.error.message), i.find("button").prop("disabled", !1)) : (n = e.id, i.append($('<input type="hidden" name="user[stripe_card_token]" />').val(n)), i.get(0).submit())
        }
    }.call(this);
    
    // function() {
    //     jQuery(function() {
    //         return $(".tooltip").tooltip(), $('[rel="tooltip"]').tooltip(), $('[data-toggle="tooltip"]').tooltip()
    //     })
    // }.call(this),
     
    
