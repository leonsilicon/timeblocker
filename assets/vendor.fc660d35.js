var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target2 = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target2[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target2[prop] = source[prop];
    }
  return target2;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t2, e2) {
    module.exports = e2();
  }(commonjsGlobal, function() {
    var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s = "minute", u = "hour", a = "day", o2 = "week", f = "month", h2 = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t3, e3, n3) {
      var r3 = String(t3);
      return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
    }, g = { s: m, z: function(t3) {
      var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
      return (e3 <= 0 ? "+" : "-") + m(r3, 2, "0") + ":" + m(i3, 2, "0");
    }, m: function t3(e3, n3) {
      if (e3.date() < n3.date())
        return -t3(n3, e3);
      var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, f), s2 = n3 - i3 < 0, u2 = e3.clone().add(r3 + (s2 ? -1 : 1), f);
      return +(-(r3 + (n3 - i3) / (s2 ? i3 - u2 : u2 - i3)) || 0);
    }, a: function(t3) {
      return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
    }, p: function(t3) {
      return { M: f, y: c, w: o2, d: a, D: d, h: u, m: s, s: i2, ms: r2, Q: h2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t3) {
      return t3 === void 0;
    } }, D = "en", v = {};
    v[D] = M;
    var p2 = function(t3) {
      return t3 instanceof _;
    }, S = function(t3, e3, n3) {
      var r3;
      if (!t3)
        return D;
      if (typeof t3 == "string")
        v[t3] && (r3 = t3), e3 && (v[t3] = e3, r3 = t3);
      else {
        var i3 = t3.name;
        v[i3] = t3, r3 = i3;
      }
      return !n3 && r3 && (D = r3), r3 || !n3 && D;
    }, w = function(t3, e3) {
      if (p2(t3))
        return t3.clone();
      var n3 = typeof e3 == "object" ? e3 : {};
      return n3.date = t3, n3.args = arguments, new _(n3);
    }, O = g;
    O.l = S, O.i = p2, O.w = function(t3, e3) {
      return w(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
    };
    var _ = function() {
      function M2(t3) {
        this.$L = S(t3.locale, null, true), this.parse(t3);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t3) {
        this.$d = function(t4) {
          var e3 = t4.date, n3 = t4.utc;
          if (e3 === null)
            return new Date(NaN);
          if (O.u(e3))
            return new Date();
          if (e3 instanceof Date)
            return new Date(e3);
          if (typeof e3 == "string" && !/Z$/i.test(e3)) {
            var r3 = e3.match(l);
            if (r3) {
              var i3 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
              return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
            }
          }
          return new Date(e3);
        }(t3), this.$x = t3.x || {}, this.init();
      }, m2.init = function() {
        var t3 = this.$d;
        this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === $);
      }, m2.isSame = function(t3, e3) {
        var n3 = w(t3);
        return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
      }, m2.isAfter = function(t3, e3) {
        return w(t3) < this.startOf(e3);
      }, m2.isBefore = function(t3, e3) {
        return this.endOf(e3) < w(t3);
      }, m2.$g = function(t3, e3, n3) {
        return O.u(t3) ? this[e3] : this.set(n3, t3);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t3, e3) {
        var n3 = this, r3 = !!O.u(e3) || e3, h3 = O.p(t3), $2 = function(t4, e4) {
          var i3 = O.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
          return r3 ? i3 : i3.endOf(a);
        }, l2 = function(t4, e4) {
          return O.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
        switch (h3) {
          case c:
            return r3 ? $2(1, 0) : $2(31, 11);
          case f:
            return r3 ? $2(1, M3) : $2(0, M3 + 1);
          case o2:
            var D2 = this.$locale().weekStart || 0, v2 = (y2 < D2 ? y2 + 7 : y2) - D2;
            return $2(r3 ? m3 - v2 : m3 + (6 - v2), M3);
          case a:
          case d:
            return l2(g2 + "Hours", 0);
          case u:
            return l2(g2 + "Minutes", 1);
          case s:
            return l2(g2 + "Seconds", 2);
          case i2:
            return l2(g2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t3) {
        return this.startOf(t3, false);
      }, m2.$set = function(t3, e3) {
        var n3, o3 = O.p(t3), h3 = "set" + (this.$u ? "UTC" : ""), $2 = (n3 = {}, n3[a] = h3 + "Date", n3[d] = h3 + "Date", n3[f] = h3 + "Month", n3[c] = h3 + "FullYear", n3[u] = h3 + "Hours", n3[s] = h3 + "Minutes", n3[i2] = h3 + "Seconds", n3[r2] = h3 + "Milliseconds", n3)[o3], l2 = o3 === a ? this.$D + (e3 - this.$W) : e3;
        if (o3 === f || o3 === c) {
          var y2 = this.clone().set(d, 1);
          y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $2 && this.$d[$2](l2);
        return this.init(), this;
      }, m2.set = function(t3, e3) {
        return this.clone().$set(t3, e3);
      }, m2.get = function(t3) {
        return this[O.p(t3)]();
      }, m2.add = function(r3, h3) {
        var d2, $2 = this;
        r3 = Number(r3);
        var l2 = O.p(h3), y2 = function(t3) {
          var e3 = w($2);
          return O.w(e3.date(e3.date() + Math.round(t3 * r3)), $2);
        };
        if (l2 === f)
          return this.set(f, this.$M + r3);
        if (l2 === c)
          return this.set(c, this.$y + r3);
        if (l2 === a)
          return y2(1);
        if (l2 === o2)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e2, d2[u] = n2, d2[i2] = t2, d2)[l2] || 1, m3 = this.$d.getTime() + r3 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t3, e3) {
        return this.add(-1 * t3, e3);
      }, m2.format = function(t3) {
        var e3 = this, n3 = this.$locale();
        if (!this.isValid())
          return n3.invalidDate || $;
        var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o3 = n3.weekdays, f2 = n3.months, h3 = function(t4, n4, i4, s3) {
          return t4 && (t4[n4] || t4(e3, r3)) || i4[n4].substr(0, s3);
        }, c2 = function(t4) {
          return O.s(s2 % 12 || 12, t4, "0");
        }, d2 = n3.meridiem || function(t4, e4, n4) {
          var r4 = t4 < 12 ? "AM" : "PM";
          return n4 ? r4.toLowerCase() : r4;
        }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h3(n3.monthsShort, a2, f2, 3), MMMM: h3(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(n3.weekdaysMin, this.$W, o3, 2), ddd: h3(n3.weekdaysShort, this.$W, o3, 3), dddd: o3[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i3 };
        return r3.replace(y, function(t4, e4) {
          return e4 || l2[t4] || i3.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r3, d2, $2) {
        var l2, y2 = O.p(d2), M3 = w(r3), m3 = (M3.utcOffset() - this.utcOffset()) * e2, g2 = this - M3, D2 = O.m(this, M3);
        return D2 = (l2 = {}, l2[c] = D2 / 12, l2[f] = D2, l2[h2] = D2 / 3, l2[o2] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n2, l2[s] = g2 / e2, l2[i2] = g2 / t2, l2)[y2] || g2, $2 ? D2 : O.a(D2);
      }, m2.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m2.$locale = function() {
        return v[this.$L];
      }, m2.locale = function(t3, e3) {
        if (!t3)
          return this.$L;
        var n3 = this.clone(), r3 = S(t3, e3, true);
        return r3 && (n3.$L = r3), n3;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), b = _.prototype;
    return w.prototype = b, [["$ms", r2], ["$s", i2], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t3) {
      b[t3[1]] = function(e3) {
        return this.$g(e3, t3[0], t3[1]);
      };
    }), w.extend = function(t3, e3) {
      return t3.$i || (t3(e3, _, w), t3.$i = true), w;
    }, w.locale = S, w.isDayjs = p2, w.unix = function(t3) {
      return w(1e3 * t3);
    }, w.en = v[D], w.Ls = v, w.p = {}, w;
  });
})(dayjs_min);
var dayjs = dayjs_min.exports;
var localizedFormat$1 = { exports: {} };
(function(module, exports) {
  !function(e2, t2) {
    module.exports = t2();
  }(commonjsGlobal, function() {
    var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t2, o2, n2) {
      var r2 = o2.prototype, i2 = r2.format;
      n2.en.formats = e2, r2.format = function(t3) {
        t3 === void 0 && (t3 = "YYYY-MM-DDTHH:mm:ssZ");
        var o3 = this.$locale().formats, n3 = function(t4, o4) {
          return t4.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t5, n4, r3) {
            var i3 = r3 && r3.toUpperCase();
            return n4 || o4[r3] || e2[r3] || o4[i3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e3, t6, o5) {
              return t6 || o5.slice(1);
            });
          });
        }(t3, o3 === void 0 ? {} : o3);
        return i2.call(this, n3);
      };
    };
  });
})(localizedFormat$1);
var localizedFormat = localizedFormat$1.exports;
var utc$1 = { exports: {} };
(function(module, exports) {
  !function(t2, i2) {
    module.exports = i2();
  }(commonjsGlobal, function() {
    var t2 = "minute", i2 = /[+-]\d\d(?::?\d\d)?/g, e2 = /([+-]|\d\d)/g;
    return function(s, f, n2) {
      var u = f.prototype;
      n2.utc = function(t3) {
        var i3 = { date: t3, utc: true, args: arguments };
        return new f(i3);
      }, u.utc = function(i3) {
        var e3 = n2(this.toDate(), { locale: this.$L, utc: true });
        return i3 ? e3.add(this.utcOffset(), t2) : e3;
      }, u.local = function() {
        return n2(this.toDate(), { locale: this.$L, utc: false });
      };
      var o2 = u.parse;
      u.parse = function(t3) {
        t3.utc && (this.$u = true), this.$utils().u(t3.$offset) || (this.$offset = t3.$offset), o2.call(this, t3);
      };
      var r2 = u.init;
      u.init = function() {
        if (this.$u) {
          var t3 = this.$d;
          this.$y = t3.getUTCFullYear(), this.$M = t3.getUTCMonth(), this.$D = t3.getUTCDate(), this.$W = t3.getUTCDay(), this.$H = t3.getUTCHours(), this.$m = t3.getUTCMinutes(), this.$s = t3.getUTCSeconds(), this.$ms = t3.getUTCMilliseconds();
        } else
          r2.call(this);
      };
      var a = u.utcOffset;
      u.utcOffset = function(s2, f2) {
        var n3 = this.$utils().u;
        if (n3(s2))
          return this.$u ? 0 : n3(this.$offset) ? a.call(this) : this.$offset;
        if (typeof s2 == "string" && (s2 = function(t3) {
          t3 === void 0 && (t3 = "");
          var s3 = t3.match(i2);
          if (!s3)
            return null;
          var f3 = ("" + s3[0]).match(e2) || ["-", 0, 0], n4 = f3[0], u3 = 60 * +f3[1] + +f3[2];
          return u3 === 0 ? 0 : n4 === "+" ? u3 : -u3;
        }(s2)) === null)
          return this;
        var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o3 = this;
        if (f2)
          return o3.$offset = u2, o3.$u = s2 === 0, o3;
        if (s2 !== 0) {
          var r3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (o3 = this.local().add(u2 + r3, t2)).$offset = u2, o3.$x.$localOffset = r3;
        } else
          o3 = this.utc();
        return o3;
      };
      var h2 = u.format;
      u.format = function(t3) {
        var i3 = t3 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h2.call(this, i3);
      }, u.valueOf = function() {
        var t3 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * t3;
      }, u.isUTC = function() {
        return !!this.$u;
      }, u.toISOString = function() {
        return this.toDate().toISOString();
      }, u.toString = function() {
        return this.toDate().toUTCString();
      };
      var l = u.toDate;
      u.toDate = function(t3) {
        return t3 === "s" && this.$offset ? n2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
      };
      var c = u.diff;
      u.diff = function(t3, i3, e3) {
        if (t3 && this.$u === t3.$u)
          return c.call(this, t3, i3, e3);
        var s2 = this.local(), f2 = n2(t3).local();
        return c.call(s2, f2, i3, e3);
      };
    };
  });
})(utc$1);
var utc = utc$1.exports;
var timezone$1 = { exports: {} };
(function(module, exports) {
  !function(t2, e2) {
    module.exports = e2();
  }(commonjsGlobal, function() {
    var t2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e2 = {};
    return function(n2, i2, o2) {
      var r2, a = function(t3, n3, i3) {
        i3 === void 0 && (i3 = {});
        var o3 = new Date(t3);
        return function(t4, n4) {
          n4 === void 0 && (n4 = {});
          var i4 = n4.timeZoneName || "short", o4 = t4 + "|" + i4, r3 = e2[o4];
          return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t4, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i4 }), e2[o4] = r3), r3;
        }(n3, i3).formatToParts(o3);
      }, u = function(e3, n3) {
        for (var i3 = a(e3, n3), r3 = [], u2 = 0; u2 < i3.length; u2 += 1) {
          var f2 = i3[u2], s2 = f2.type, m = f2.value, c = t2[s2];
          c >= 0 && (r3[c] = parseInt(m, 10));
        }
        var d = r3[3], l = d === 24 ? 0 : d, v = r3[0] + "-" + r3[1] + "-" + r3[2] + " " + l + ":" + r3[4] + ":" + r3[5] + ":000", h2 = +e3;
        return (o2.utc(v).valueOf() - (h2 -= h2 % 1e3)) / 6e4;
      }, f = i2.prototype;
      f.tz = function(t3, e3) {
        t3 === void 0 && (t3 = r2);
        var n3 = this.utcOffset(), i3 = this.toDate(), a2 = i3.toLocaleString("en-US", { timeZone: t3 }), u2 = Math.round((i3 - new Date(a2)) / 1e3 / 60), f2 = o2(a2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i3.getTimezoneOffset() / 15) - u2, true);
        if (e3) {
          var s2 = f2.utcOffset();
          f2 = f2.add(n3 - s2, "minute");
        }
        return f2.$x.$timezone = t3, f2;
      }, f.offsetName = function(t3) {
        var e3 = this.$x.$timezone || o2.tz.guess(), n3 = a(this.valueOf(), e3, { timeZoneName: t3 }).find(function(t4) {
          return t4.type.toLowerCase() === "timezonename";
        });
        return n3 && n3.value;
      };
      var s = f.startOf;
      f.startOf = function(t3, e3) {
        if (!this.$x || !this.$x.$timezone)
          return s.call(this, t3, e3);
        var n3 = o2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return s.call(n3, t3, e3).tz(this.$x.$timezone, true);
      }, o2.tz = function(t3, e3, n3) {
        var i3 = n3 && e3, a2 = n3 || e3 || r2, f2 = u(+o2(), a2);
        if (typeof t3 != "string")
          return o2(t3).tz(a2);
        var s2 = function(t4, e4, n4) {
          var i4 = t4 - 60 * e4 * 1e3, o3 = u(i4, n4);
          if (e4 === o3)
            return [i4, e4];
          var r3 = u(i4 -= 60 * (o3 - e4) * 1e3, n4);
          return o3 === r3 ? [i4, o3] : [t4 - 60 * Math.min(o3, r3) * 1e3, Math.max(o3, r3)];
        }(o2.utc(t3, i3).valueOf(), f2, a2), m = s2[0], c = s2[1], d = o2(m).utcOffset(c);
        return d.$x.$timezone = a2, d;
      }, o2.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o2.tz.setDefault = function(t3) {
        r2 = t3;
      };
    };
  });
})(timezone$1);
var timezone = timezone$1.exports;
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i2 = 0; i2 < list.length; i2++) {
    map[list[i2]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i2 = 0; i2 < value.length; i2++) {
      const item = value[i2];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      const normalized = normalizeClass(value[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject$2(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$2 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache = Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
let activeEffectScope;
const effectScopeStack = [];
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      try {
        this.on();
        return fn();
      } finally {
        this.off();
      }
    }
  }
  on() {
    if (this.active) {
      effectScopeStack.push(this);
      activeEffectScope = this;
    }
  }
  off() {
    if (this.active) {
      effectScopeStack.pop();
      activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
    }
  }
  stop(fromParent) {
    if (this.active) {
      this.effects.forEach((e2) => e2.stop());
      this.cleanups.forEach((cleanup) => cleanup());
      if (this.scopes) {
        this.scopes.forEach((e2) => e2.stop(true));
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect, scope) {
  scope = scope || activeEffectScope;
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i2 = 0; i2 < deps.length; i2++) {
      const dep = deps[i2];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    if (!effectStack.length || !effectStack.includes(this)) {
      try {
        effectStack.push(activeEffect = this);
        enableTracking();
        trackOpBit = 1 << ++effectTrackDepth;
        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }
        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }
        trackOpBit = 1 << --effectTrackDepth;
        resetTracking();
        effectStack.pop();
        const n2 = effectStack.length;
        activeEffect = n2 > 0 ? effectStack[n2 - 1] : void 0;
      }
    }
  }
  stop() {
    if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target2, type, key) {
  if (!isTracking()) {
    return;
  }
  let depsMap = targetMap.get(target2);
  if (!depsMap) {
    targetMap.set(target2, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = createDep());
  }
  trackEffects(dep);
}
function isTracking() {
  return shouldTrack && activeEffect !== void 0;
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger$2(target2, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target2);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target2)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target2)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target2)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target2)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target2)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target2)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i2 = 0, l = this.length; i2 < l; i2++) {
        track(arr, "get", i2 + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target2, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target2)) {
      return target2;
    }
    const targetIsArray = isArray(target2);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target2, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target2, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target2, key, value, receiver) {
    let oldValue = target2[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray(target2) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target2) && isIntegerKey(key) ? Number(key) < target2.length : hasOwn(target2, key);
    const result = Reflect.set(target2, key, value, receiver);
    if (target2 === toRaw(receiver)) {
      if (!hadKey) {
        trigger$2(target2, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger$2(target2, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target2, key) {
  const hadKey = hasOwn(target2, key);
  target2[key];
  const result = Reflect.deleteProperty(target2, key);
  if (result && hadKey) {
    trigger$2(target2, "delete", key, void 0);
  }
  return result;
}
function has(target2, key) {
  const result = Reflect.has(target2, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target2, "has", key);
  }
  return result;
}
function ownKeys$1(target2) {
  track(target2, "iterate", isArray(target2) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target2);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys: ownKeys$1
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target2, key) {
    return true;
  },
  deleteProperty(target2, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target2, key, isReadonly2 = false, isShallow2 = false) {
  target2 = target2["__v_raw"];
  const rawTarget = toRaw(target2);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target2.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target2.get(rawKey));
  } else if (target2 !== rawTarget) {
    target2.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target2 = this["__v_raw"];
  const rawTarget = toRaw(target2);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target2.has(key) : target2.has(key) || target2.has(rawKey);
}
function size$1(target2, isReadonly2 = false) {
  target2 = target2["__v_raw"];
  !isReadonly2 && track(toRaw(target2), "iterate", ITERATE_KEY);
  return Reflect.get(target2, "size", target2);
}
function add(value) {
  value = toRaw(value);
  const target2 = toRaw(this);
  const proto = getProto(target2);
  const hadKey = proto.has.call(target2, value);
  if (!hadKey) {
    target2.add(value);
    trigger$2(target2, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target2 = toRaw(this);
  const { has: has2, get: get2 } = getProto(target2);
  let hadKey = has2.call(target2, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target2, key);
  }
  const oldValue = get2.call(target2, key);
  target2.set(key, value);
  if (!hadKey) {
    trigger$2(target2, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger$2(target2, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target2 = toRaw(this);
  const { has: has2, get: get2 } = getProto(target2);
  let hadKey = has2.call(target2, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target2, key);
  }
  get2 ? get2.call(target2, key) : void 0;
  const result = target2.delete(key);
  if (hadKey) {
    trigger$2(target2, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target2 = toRaw(this);
  const hadItems = target2.size !== 0;
  const result = target2.clear();
  if (hadItems) {
    trigger$2(target2, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target2 = observed["__v_raw"];
    const rawTarget = toRaw(target2);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target2.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target2 = this["__v_raw"];
    const rawTarget = toRaw(target2);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target2[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size$1(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size$1(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size$1(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size$1(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target2, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target2;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target2 ? instrumentations : target2, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target2) {
  if (isReadonly(target2)) {
    return target2;
  }
  return createReactiveObject(target2, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target2) {
  return createReactiveObject(target2, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target2) {
  return createReactiveObject(target2, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target2, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target2)) {
    return target2;
  }
  if (target2["__v_raw"] && !(isReadonly2 && target2["__v_isReactive"])) {
    return target2;
  }
  const existingProxy = proxyMap.get(target2);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target2);
  if (targetType === 0) {
    return target2;
  }
  const proxy = new Proxy(target2, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target2, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (isTracking()) {
    ref2 = toRaw(ref2);
    if (!ref2.dep) {
      ref2.dep = createDep();
    }
    {
      trackEffects(ref2.dep);
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r2) {
  return Boolean(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target2, key, receiver) => unref(Reflect.get(target2, key, receiver)),
  set: (target2, key, value, receiver) => {
    const oldValue = target2[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target2, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
Promise.resolve();
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i2 = 0; i2 < fn.length; i2++) {
    values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError$1(err, type, contextVNode, throwInDev);
}
function logError$1(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue$1 = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue$1[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue$1.length || !queue$1.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i2 = queue$1.indexOf(job);
  if (i2 > flushIndex) {
    queue$1.splice(i2, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!isArray(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen, parentJob);
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  flushPreFlushCbs(seen);
  queue$1.sort((a, b) => getId(a) - getId(b));
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue$1.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue$1.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function emit$1(instance, event, ...rawArgs) {
  const props2 = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props2) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props2[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => a.trim());
    } else if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  let handlerName;
  let handler = props2[handlerName = toHandlerKey(event)] || props2[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props2[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props2[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  cache.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props: props2, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props2, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false)
        ;
      result = normalizeVNode(render2.length > 1 ? render2(props2, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit
      } : { attrs, slots, emit }) : render2(props2, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root.transition = vnode.transition;
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props2) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props2)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i2 = 0; i2 < dynamicProps.length; i2++) {
        const key = dynamicProps[i2];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key = nextKeys[i2];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else
      ;
  }
}
function watchPostEffect(effect, options) {
  return doWatch(effect, null, { flush: "post" });
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some(isReactive);
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i2) => hasChanged(v, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        job();
      }
    };
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      traverse(value[i2], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject$2(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props2, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const rawProps = toRaw(props2);
      const { mode } = rawProps;
      const child = children[0];
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props2, state, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props2;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        hook(el, done);
        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        onLeave(el, done);
        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props2, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i2 = 0; i2 < children.length; i2++) {
    const child = children[i2];
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } else if (keepComment || child.type !== Comment) {
      ret.push(child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i2 = 0; i2 < ret.length; i2++) {
      ret[i2].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target2) {
  registerKeepAliveHook(hook, "a", target2);
}
function onDeactivated(hook, target2) {
  registerKeepAliveHook(hook, "da", target2);
}
function registerKeepAliveHook(hook, type, target2 = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target2;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target2);
  if (target2) {
    let current = target2.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target2, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target2, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target2);
}
function injectHook(type, hook, target2 = currentInstance, prepend = false) {
  if (target2) {
    const hooks = target2[type] || (target2[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target2.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target2);
      const res = callWithAsyncErrorHandling(hook, target2, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target2 = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target2);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target2 = currentInstance) {
  injectHook("ec", hook, target2);
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components: components2,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components2)
    instance.components = components2;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  cache.set(base, resolved);
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props2 = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props2, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props2)) {
      props2[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props2 : shallowReactive(props2);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props2;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props: props2, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props2);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key = propsToUpdate[i2];
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props2[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props2, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props2[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props2[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger$2(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props2, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props2[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props2);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key = needCastKeys[i2];
      props2[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props2, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props2);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props2, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props2);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  const normalized = withCtx((...args) => {
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i2 = 0; i2 < directives.length; i2++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i2];
    if (isFunction(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i2 = 0; i2 < bindings.length; i2++) {
    const binding = bindings[i2];
    if (oldBindings) {
      binding.oldValue = oldBindings[i2].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let uid$2 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid$2++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r2, i2) => setRef(r2, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i2] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (isRef(ref2)) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target2 = getGlobalThis();
  target2.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props: props2, shapeFlag, transition, patchFlag, dirs } = vnode;
    if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
      el = vnode.el = hostCloneNode(vnode.el);
    } else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props2 && props2.is, props2);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props2) {
        for (const key in props2) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props2[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props2) {
          hostPatchProp(el, "value", null, props2.value);
        }
        if (vnodeHook = props2.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props2 && props2.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
        hostSetScopeId(el, slotScopeIds[i2]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
            const key = propsToUpdate[i2];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i2 = 0; i2 < newChildren.length; i2++) {
      const oldVNode = oldChildren[i2];
      const newVNode = newChildren[i2];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props: props2 } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props2 && props2.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props2 && props2.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope);
    const update2 = instance.update = effect.run.bind(effect);
    update2.id = instance.uid;
    toggleRecurse(instance, true);
    update2();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i2;
    for (i2 = 0; i2 < commonLength; i2++) {
      const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      patch(c1[i2], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i2 = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[i2];
      const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i2++;
    }
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i2 > e1) {
      if (i2 <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i2 <= e2) {
          patch(null, c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i2++;
        }
      }
    } else if (i2 > e2) {
      while (i2 <= e1) {
        unmount(c1[i2], parentComponent, parentSuspense, true);
        i2++;
      }
    } else {
      const s1 = i2;
      const s2 = i2;
      const keyToNewIndexMap = new Map();
      for (i2 = s2; i2 <= e2; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i2);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i2 = 0; i2 < toBePatched; i2++)
        newIndexToOldIndexMap[i2] = 0;
      for (i2 = s1; i2 <= e1; i2++) {
        const prevChild = c1[i2];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i2 = toBePatched - 1; i2 >= 0; i2--) {
        const nextIndex = s2 + i2;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i2] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i2 !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props: props2, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props2 && props2.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props2 && props2.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update: update2, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update2) {
      update2.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update: update2 }, allowed) {
  effect.allowRecurse = update2.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i2 = 0; i2 < ch1.length; i2++) {
      const c1 = ch1[i2];
      let c2 = ch2[i2];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i2, j, u, v, c;
  const len = arr.length;
  for (i2 = 0; i2 < len; i2++) {
    const arrI = arr[i2];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i2] = j;
        result.push(i2);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i2] = result[u - 1];
        }
        result[u] = i2;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props2) => props2 && (props2.disabled || props2.disabled === "");
const isTargetSVG = (target2) => typeof SVGElement !== "undefined" && target2 instanceof SVGElement;
const resolveTarget = (props2, select) => {
  const targetSelector = props2 && props2.to;
  if (isString(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target2 = select(targetSelector);
      return target2;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target2 = n2.target = resolveTarget(n2.props, querySelector);
      const targetAnchor = n2.targetAnchor = createText("");
      if (target2) {
        insert(targetAnchor, target2);
        isSVG = isSVG || isTargetSVG(target2);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target2) {
        mount(target2, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const target2 = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target2;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      isSVG = isSVG || isTargetSVG(target2);
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, mainAnchor, internals, 1);
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0);
          }
        } else if (wasDisabled) {
          moveTeleport(n2, target2, targetAnchor, internals, 1);
        }
      }
    }
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target: target2, props: props2 } = vnode;
    if (target2) {
      hostRemove(targetAnchor);
    }
    if (doRemove || !isTeleportDisabled(props2)) {
      hostRemove(anchor);
      if (shapeFlag & 16) {
        for (let i2 = 0; i2 < children.length; i2++) {
          const child = children[i2];
          unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props: props2 } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props2)) {
    if (shapeFlag & 16) {
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
  const target2 = vnode.target = resolveTarget(vnode.props, querySelector);
  if (target2) {
    const targetNode = target2._lpa || target2.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        vnode.targetAnchor = hydrateChildren(targetNode, vnode, target2, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
      target2._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props2, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props2, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props2, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props2, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props2 = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props: props2,
    key: props2 && normalizeKey(props2),
    ref: props2 && normalizeRef(props2),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props2 = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props2, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props2) {
    props2 = guardReactiveProps(props2);
    let { class: klass, style } = props2;
    if (klass && !isString(klass)) {
      props2.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props2.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(type, props2, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props2) {
  if (!props2)
    return null;
  return isProxy(props2) || InternalObjectKey in props2 ? extend({}, props2) : props2;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props: props2, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props2 || {}, extraProps) : props2;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(Fragment, null, child.slice());
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    const toMerge = args[i2];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i2 = 0, l = source.length; i2 < l; i2++) {
      ret[i2] = renderItem(source[i2], i2, void 0, cached && cached[i2]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i2 = 0; i2 < source; i2++) {
      ret[i2] = renderItem(i2 + 1, i2, void 0, cached && cached[i2]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i2) => renderItem(item, i2, void 0, cached && cached[i2]));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i2 = 0, l = keys.length; i2 < l; i2++) {
        const key = keys[i2];
        ret[i2] = renderItem(source[key], key, i2, cached && cached[i2]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
const getPublicInstance = (i2) => {
  if (!i2)
    return null;
  if (isStatefulComponent(i2))
    return getExposeProxy(i2) || i2.proxy;
  return getPublicInstance(i2.parent);
};
const publicPropertiesMap = extend(Object.create(null), {
  $: (i2) => i2,
  $el: (i2) => i2.vnode.el,
  $data: (i2) => i2.data,
  $props: (i2) => i2.props,
  $attrs: (i2) => i2.attrs,
  $slots: (i2) => i2.slots,
  $refs: (i2) => i2.refs,
  $parent: (i2) => getPublicInstance(i2.parent),
  $root: (i2) => getPublicInstance(i2.root),
  $emit: (i2) => i2.emit,
  $options: (i2) => resolveMergedOptions(i2),
  $forceUpdate: (i2) => () => queueJob(i2.update),
  $nextTick: (i2) => nextTick.bind(i2.proxy),
  $watch: (i2) => instanceWatch.bind(i2)
});
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props: props2, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props2[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props2[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  }
};
const emptyAppContext = createAppContext();
let uid$1$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props: props2, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props2, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e2) => {
          handleError(e2, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target2, key) {
      track(instance, "get", "$attrs");
      return target2[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target2, key) {
        if (key in target2) {
          return target2[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}
function getComponentName(Component) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version = "3.2.29";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props2) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props2 && props2.multiple != null) {
      el.setAttribute("multiple", props2.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i2 = 0; i2 < prefixes.length; i2++) {
    const prefixed = prefixes[i2] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      el[key] = includeBooleanAttr(value);
      return;
    } else if (value == null && type === "string") {
      el[key] = "";
      el.removeAttribute(key);
      return;
    } else if (type === "number") {
      try {
        el[key] = 0;
      } catch (_a) {
      }
      el.removeAttribute(key);
      return;
    }
  }
  try {
    el[key] = value;
  } catch (e2) {
  }
}
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== "undefined") {
  if (_getNow() > document.createEvent("Event").timeStamp) {
    _getNow = () => performance.now();
  }
  const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
let cachedNow = 0;
const p = Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    const timeStamp = e2.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, invoker.value), instance, 5, [e2]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn && fn(e3));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    return;
  }
  const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
  watchPostEffect(setVars);
  onMounted(() => {
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor)
        break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
    }
  }
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props2, { slots }) => h(BaseTransition, resolveTransitionProps(props2), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n2 = NumberOf(duration);
    return [n2, n2];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e2) => {
    if (e2.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i2) => toMs(d) + toMs(delays[i2])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props2, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props2.moveClass || `${props2.name || "v"}-move`;
      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c) => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el._moveCb = (e2) => {
          if (e2 && e2.target !== el) {
            return;
          }
          if (!e2 || /transform$/.test(e2.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = toRaw(props2);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        if (child.key != null) {
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
        }
      }
      if (prevChildren) {
        for (let i2 = 0; i2 < prevChildren.length; i2++) {
          const child = prevChildren[i2];
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
          positionMap.set(child, child.el.getBoundingClientRect());
        }
      }
      return createVNode(tag, null, children);
    };
  }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el._moveCb) {
    el._moveCb();
  }
  if (el._enterCb) {
    el._enterCb();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  if (el._vtc) {
    el._vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"];
  return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e2) {
  e2.target.composing = true;
}
function onCompositionEnd(e2) {
  const target2 = e2.target;
  if (target2.composing) {
    target2.composing = false;
    trigger$1(target2, "input");
  }
}
function trigger$1(el, type) {
  const e2 = document.createEvent("HTMLEvents");
  e2.initEvent(type, true, true);
  el.dispatchEvent(e2);
}
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el._assign = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e2) => {
      if (e2.target.composing)
        return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = toNumber(domValue);
      }
      el._assign(domValue);
    });
    if (trim) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (el.composing)
      return;
    if (document.activeElement === el) {
      if (lazy) {
        return;
      }
      if (trim && el.value.trim() === value) {
        return;
      }
      if ((number || el.type === "number") && toNumber(el.value) === value) {
        return;
      }
    }
    const newValue = value == null ? "" : value;
    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e2) => e2.stopPropagation(),
  prevent: (e2) => e2.preventDefault(),
  self: (e2) => e2.target !== e2.currentTarget,
  ctrl: (e2) => !e2.ctrlKey,
  shift: (e2) => !e2.shiftKey,
  alt: (e2) => !e2.altKey,
  meta: (e2) => !e2.metaKey,
  left: (e2) => "button" in e2 && e2.button !== 0,
  middle: (e2) => "button" in e2 && e2.button !== 1,
  right: (e2) => "button" in e2 && e2.button !== 2,
  exact: (e2, modifiers) => systemModifiers.some((m) => e2[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i2 = 0; i2 < modifiers.length; i2++) {
      const guard = modifierGuards[modifiers[i2]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
var isVue2 = false;
/*!
  * pinia v2.0.11
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject$1(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: new Map(),
    state
  });
  return pinia;
}
const noop$2 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$2) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target2, patchToApply) {
  for (const key in patchToApply) {
    const subPatch = patchToApply[key];
    const targetValue = target2[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      target2[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target2[key] = subPatch;
    }
  }
  return target2;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$1 } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign$1(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$1($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot) {
  let scope;
  const buildState2 = options.state;
  const optionsForPlugin = assign$1({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!buildState2 && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    nextTick().then(() => {
      isListening = true;
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop$2;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$1({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign$1({}, partialStore));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!buildState2) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else
      ;
  }
  {
    assign$1(store, setupStore);
    assign$1(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$1($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign$1(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && buildState2 && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance2 = getCurrentInstance();
    pinia = pinia || currentInstance2 && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target2, props2) {
  for (var i2 = 0; i2 < props2.length; i2++) {
    var descriptor = props2[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target2, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target2;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _createForOfIteratorHelper(o2, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (!it) {
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it)
        o2 = it;
      var i2 = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n2() {
          if (i2 >= o2.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o2[i2++]
          };
        },
        e: function e2(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s() {
      it = it.call(o2);
    },
    n: function n2() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e2(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var TRPCClientError = /* @__PURE__ */ function(_Error) {
  _inherits(TRPCClientError2, _Error);
  var _super = /* @__PURE__ */ _createSuper(TRPCClientError2);
  function TRPCClientError2(message, opts) {
    var _opts$cause, _opts$isDone, _opts$result, _opts$result2;
    var _this;
    _classCallCheck(this, TRPCClientError2);
    var cause = (_opts$cause = opts.cause) !== null && _opts$cause !== void 0 ? _opts$cause : opts.originalError;
    _this = _super.call(this, message, {
      cause
    });
    _this.originalError = void 0;
    _this.cause = void 0;
    _this.shape = void 0;
    _this.data = void 0;
    _this.isDone = void 0;
    _this.isDone = (_opts$isDone = opts.isDone) !== null && _opts$isDone !== void 0 ? _opts$isDone : false;
    _this.cause = _this.originalError = cause;
    _this.shape = (_opts$result = opts.result) === null || _opts$result === void 0 ? void 0 : _opts$result.error;
    _this.data = (_opts$result2 = opts.result) === null || _opts$result2 === void 0 ? void 0 : _opts$result2.error.data;
    _this.name = "TRPCClientError";
    Object.setPrototypeOf(_assertThisInitialized(_this), TRPCClientError2.prototype);
    return _this;
  }
  _createClass(TRPCClientError2, null, [{
    key: "from",
    value: function from(result) {
      var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!(result instanceof Error)) {
        var _message;
        return new TRPCClientError2((_message = result.error.message) !== null && _message !== void 0 ? _message : "", _objectSpread2(_objectSpread2({}, opts), {}, {
          cause: null,
          result
        }));
      }
      if (result.name === "TRPCClientError") {
        return result;
      }
      return new TRPCClientError2(result.message, _objectSpread2(_objectSpread2({}, opts), {}, {
        cause: result,
        result: null
      }));
    }
  }]);
  return TRPCClientError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
var TRPCAbortError = /* @__PURE__ */ function(_Error) {
  _inherits(TRPCAbortError2, _Error);
  var _super = /* @__PURE__ */ _createSuper(TRPCAbortError2);
  function TRPCAbortError2() {
    var _this;
    _classCallCheck(this, TRPCAbortError2);
    _this = _super.call(this, "The operation was aborted.");
    _this.name = "TRPCAbortError";
    Object.setPrototypeOf(_assertThisInitialized(_this), TRPCAbortError2.prototype);
    return _this;
  }
  return _createClass(TRPCAbortError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function arrayToDict(array) {
  var dict = {};
  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    dict[index] = element;
  }
  return dict;
}
function httpRequest(props2) {
  var type = props2.type, rt = props2.runtime, path = props2.path;
  var ac = rt.AbortController ? new rt.AbortController() : null;
  var method = {
    query: "GET",
    mutation: "POST",
    subscription: "PATCH"
  };
  var input = "input" in props2 ? rt.transformer.serialize(props2.input) : arrayToDict(props2.inputs.map(function(_input) {
    return rt.transformer.serialize(_input);
  }));
  function getUrl() {
    var url = props2.url + "/" + path;
    var queryParts = [];
    if ("inputs" in props2) {
      queryParts.push("batch=1");
    }
    if (type === "query" && input !== void 0) {
      queryParts.push("input=".concat(encodeURIComponent(JSON.stringify(input))));
    }
    if (queryParts.length) {
      url += "?" + queryParts.join("&");
    }
    return url;
  }
  function getBody() {
    if (type === "query") {
      return void 0;
    }
    return input !== void 0 ? JSON.stringify(input) : void 0;
  }
  var promise = new Promise(function(resolve2, reject) {
    var url = getUrl();
    Promise.resolve(rt.headers()).then(function(headers) {
      return rt.fetch(url, {
        method: method[type],
        signal: ac === null || ac === void 0 ? void 0 : ac.signal,
        body: getBody(),
        headers: _objectSpread2({
          "content-type": "application/json"
        }, headers)
      });
    }).then(function(res) {
      return res.json();
    }).then(function(json) {
      resolve2(json);
    }).catch(reject);
  });
  var cancel = function cancel2() {
    ac === null || ac === void 0 ? void 0 : ac.abort();
  };
  return {
    promise,
    cancel
  };
}
function transformRPCResponse(_ref) {
  var envelope = _ref.envelope, runtime = _ref.runtime;
  if ("error" in envelope) {
    return TRPCClientError.from(_objectSpread2(_objectSpread2({}, envelope), {}, {
      error: runtime.transformer.deserialize(envelope.error)
    }));
  }
  if (envelope.result.type === "data") {
    return _objectSpread2(_objectSpread2({}, envelope.result), {}, {
      data: runtime.transformer.deserialize(envelope.result.data)
    });
  }
  return envelope.result;
}
function dataLoader(fetchMany, opts) {
  var batch = null;
  var dispatchTimer = null;
  var destroyTimerAndBatch = function destroyTimerAndBatch2() {
    clearTimeout(dispatchTimer);
    dispatchTimer = null;
    batch = null;
  };
  function dispatch() {
    var batchCopy = batch;
    destroyTimerAndBatch();
    var _fetchMany = fetchMany(batchCopy.items.map(function(v) {
      return v.key;
    })), promise = _fetchMany.promise, cancel = _fetchMany.cancel;
    batchCopy.cancel = cancel;
    promise.then(function(result) {
      for (var i2 = 0; i2 < result.length; i2++) {
        var _value = result[i2];
        batchCopy.items[i2].resolve(_value);
      }
    }).catch(function(cause) {
      var _iterator = _createForOfIteratorHelper(batchCopy.items), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;
          item.reject(cause);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }
  function load(key) {
    var batchItem = {
      cancelled: false,
      key
    };
    if (!batch) {
      batch = {
        items: [],
        cancel: function cancel2() {
          destroyTimerAndBatch();
        }
      };
    }
    var thisBatch = batch;
    var promise = new Promise(function(resolve2, reject) {
      var item = batchItem;
      item.reject = reject;
      item.resolve = resolve2;
      thisBatch.items.push(item);
      if (typeof (opts === null || opts === void 0 ? void 0 : opts.maxBatchSize) !== "undefined" && thisBatch.items.length >= opts.maxBatchSize) {
        dispatch();
        return;
      }
    });
    if (!dispatchTimer) {
      dispatchTimer = setTimeout(dispatch);
    }
    var cancel = function cancel2() {
      batchItem.cancelled = true;
      if (thisBatch.items.some(function(item) {
        return !item.cancelled;
      })) {
        return;
      }
      thisBatch.cancel();
    };
    return {
      promise,
      cancel
    };
  }
  return {
    load
  };
}
function httpBatchLink(opts) {
  var url = opts.url, maxBatchSize = opts.maxBatchSize;
  return function(runtime) {
    var fetcher = function fetcher2(type) {
      return function(keyInputPairs) {
        var path = keyInputPairs.map(function(op) {
          return op.path;
        }).join(",");
        var inputs = keyInputPairs.map(function(op) {
          return op.input;
        });
        var _httpRequest = httpRequest({
          url,
          inputs,
          path,
          runtime,
          type
        }), promise = _httpRequest.promise, cancel = _httpRequest.cancel;
        return {
          promise: promise.then(function(res) {
            if (!Array.isArray(res)) {
              return keyInputPairs.map(function() {
                return res;
              });
            }
            return res;
          }),
          cancel
        };
      };
    };
    var query = dataLoader(fetcher("query"), {
      maxBatchSize
    });
    var mutation = dataLoader(fetcher("mutation"), {
      maxBatchSize
    });
    var subscription = dataLoader(fetcher("subscription"), {
      maxBatchSize
    });
    var loaders = {
      query,
      subscription,
      mutation
    };
    return function(_ref) {
      var op = _ref.op, prev = _ref.prev, onDestroy = _ref.onDestroy;
      var loader = loaders[op.type];
      var _loader$load = loader.load(op), promise = _loader$load.promise, cancel = _loader$load.cancel;
      var isDone = false;
      var prevOnce = function prevOnce2(result) {
        if (isDone) {
          return;
        }
        isDone = true;
        prev(result);
      };
      onDestroy(function() {
        prevOnce(TRPCClientError.from(new TRPCAbortError(), {
          isDone: true
        }));
        cancel();
      });
      promise.then(function(envelope) {
        prevOnce(transformRPCResponse({
          envelope,
          runtime
        }));
      }).catch(function(cause) {
        prevOnce(TRPCClientError.from(cause));
      });
    };
  };
}
function observable() {
  var listeners = [];
  var value = null;
  return {
    subscribe: function subscribe(callbacks) {
      var listener = {
        callbacks,
        unsubscribe: function unsubscribe() {
          var index = listeners.indexOf(listener);
          if (index !== -1) {
            var _listener$callbacks$o, _listener$callbacks;
            listeners.splice(index, 1);
            (_listener$callbacks$o = (_listener$callbacks = listener.callbacks).onDone) === null || _listener$callbacks$o === void 0 ? void 0 : _listener$callbacks$o.call(_listener$callbacks);
          }
        }
      };
      listeners.push(listener);
      return function() {
        listener.unsubscribe();
      };
    },
    next: function next(newValue) {
      var oldValue = value;
      value = newValue;
      if (oldValue !== newValue) {
        var _iterator = _createForOfIteratorHelper(listeners), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _listener$callbacks$o2, _listener$callbacks2;
            var listener = _step.value;
            (_listener$callbacks$o2 = (_listener$callbacks2 = listener.callbacks).onNext) === null || _listener$callbacks$o2 === void 0 ? void 0 : _listener$callbacks$o2.call(_listener$callbacks2, newValue);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    done: function done() {
      while (listeners.length) {
        var _listener$callbacks$o3, _listener$callbacks3;
        var listener = listeners.pop();
        listener === null || listener === void 0 ? void 0 : (_listener$callbacks$o3 = (_listener$callbacks3 = listener.callbacks).onDone) === null || _listener$callbacks$o3 === void 0 ? void 0 : _listener$callbacks$o3.call(_listener$callbacks3);
        listener === null || listener === void 0 ? void 0 : listener.unsubscribe();
      }
    },
    error: function(_error) {
      function error(_x) {
        return _error.apply(this, arguments);
      }
      error.toString = function() {
        return _error.toString();
      };
      return error;
    }(function(error) {
      var _iterator2 = _createForOfIteratorHelper(listeners), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _listener$callbacks$o4, _listener$callbacks4;
          var listener = _step2.value;
          (_listener$callbacks$o4 = (_listener$callbacks4 = listener.callbacks).onError) === null || _listener$callbacks$o4 === void 0 ? void 0 : _listener$callbacks$o4.call(_listener$callbacks4, error);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    })
  };
}
function observableSubject(initialValue) {
  var $obs = observable();
  var value = initialValue;
  $obs.next(initialValue);
  return _objectSpread2(_objectSpread2({}, $obs), {}, {
    next: function next(v) {
      value = v;
      $obs.next(v);
    },
    get: function get2() {
      return value;
    }
  });
}
function executeChain(opts) {
  var $result = observableSubject(null);
  var updateResult = function updateResult2(result) {
    if (result instanceof Error) {
      $result.error(result);
      if (result.isDone) {
        $result.done();
      }
    } else {
      $result.next(result);
    }
  };
  function walk(_ref) {
    var index = _ref.index, op = _ref.op, stack = _ref.stack;
    var link = opts.links[index];
    var prev = index === 0 ? function(value) {
      return updateResult(value);
    } : stack[index - 1];
    link({
      op,
      prev,
      next: function next(op2, prevOp) {
        var prevStack = stack.slice();
        prevStack[index] = prevOp;
        walk({
          index: index + 1,
          op: op2,
          stack: prevStack
        });
      },
      onDestroy: function onDestroy(callback) {
        $result.subscribe({
          onDone: function onDone() {
            callback();
          }
        });
      }
    });
  }
  walk({
    index: 0,
    op: opts.op,
    stack: []
  });
  return $result;
}
function getWindow() {
  if (typeof window !== "undefined") {
    return window;
  }
  return global;
}
function getAbortController(ac) {
  var win = getWindow();
  return ac || win.AbortController || null;
}
function getFetch(f) {
  if (f) {
    return f;
  }
  var win = getWindow();
  if (win.fetch) {
    return typeof win.fetch.bind === "function" ? win.fetch.bind(win) : win.fetch;
  }
  throw new Error("No fetch implementation found");
}
var idCounter = 0;
function getRequestId() {
  return ++idCounter;
}
var TRPCClient = /* @__PURE__ */ function() {
  function TRPCClient2(opts) {
    var _this = this;
    _classCallCheck(this, TRPCClient2);
    this.links = void 0;
    this.runtime = void 0;
    var transformer = opts.transformer ? "input" in opts.transformer ? {
      serialize: opts.transformer.input.serialize,
      deserialize: opts.transformer.output.deserialize
    } : opts.transformer : {
      serialize: function serialize(data) {
        return data;
      },
      deserialize: function deserialize(data) {
        return data;
      }
    };
    var _fetch = getFetch(opts === null || opts === void 0 ? void 0 : opts.fetch);
    var AC = getAbortController(opts === null || opts === void 0 ? void 0 : opts.AbortController);
    function getHeadersFn() {
      if (opts.headers) {
        var headers = opts.headers;
        return typeof headers === "function" ? headers : function() {
          return headers;
        };
      }
      return function() {
        return {};
      };
    }
    this.runtime = {
      transformer,
      AbortController: AC,
      fetch: _fetch,
      headers: getHeadersFn()
    };
    if ("links" in opts) {
      this.links = opts.links.map(function(link) {
        return link(_this.runtime);
      });
    } else {
      this.links = [httpBatchLink({
        url: opts.url
      })(this.runtime)];
    }
  }
  _createClass(TRPCClient2, [{
    key: "$request",
    value: function $request(_ref) {
      var type = _ref.type, input = _ref.input, path = _ref.path, _ref$context = _ref.context, context = _ref$context === void 0 ? {} : _ref$context;
      var $result = executeChain({
        links: this.links,
        op: {
          id: getRequestId(),
          type,
          path,
          input,
          context
        }
      });
      return $result;
    }
  }, {
    key: "requestAsPromise",
    value: function requestAsPromise(opts) {
      var $result = this.$request(opts);
      var promise = new Promise(function(resolve2, reject) {
        var res = $result.get();
        if ((res === null || res === void 0 ? void 0 : res.type) === "data") {
          resolve2(res.data);
          $result.done();
          return;
        }
        $result.subscribe({
          onNext: function onNext(result) {
            if ((result === null || result === void 0 ? void 0 : result.type) !== "data") {
              return;
            }
            resolve2(result.data);
            $result.done();
          },
          onError: function onError(err) {
            reject(err);
            $result.done();
          },
          onDone: function onDone() {
            reject(TRPCClientError.from(new TRPCAbortError()));
          }
        });
      });
      promise.cancel = function() {
        $result.done();
      };
      return promise;
    }
  }, {
    key: "query",
    value: function query(path) {
      var _ref2;
      var context = (_ref2 = arguments.length <= 2 ? void 0 : arguments[2]) === null || _ref2 === void 0 ? void 0 : _ref2.context;
      return this.requestAsPromise({
        type: "query",
        path,
        input: arguments.length <= 1 ? void 0 : arguments[1],
        context
      });
    }
  }, {
    key: "mutation",
    value: function mutation(path) {
      var _ref3;
      var context = (_ref3 = arguments.length <= 2 ? void 0 : arguments[2]) === null || _ref3 === void 0 ? void 0 : _ref3.context;
      return this.requestAsPromise({
        type: "mutation",
        path,
        input: arguments.length <= 1 ? void 0 : arguments[1],
        context
      });
    }
  }, {
    key: "subscription",
    value: function subscription(path, input, opts) {
      var $res = this.$request({
        type: "subscription",
        path,
        input,
        context: opts.context
      });
      $res.subscribe({
        onNext: function onNext(output) {
          if (output) {
            var _opts$onNext;
            (_opts$onNext = opts.onNext) === null || _opts$onNext === void 0 ? void 0 : _opts$onNext.call(opts, output);
          }
        },
        onError: function onError(err) {
          var _opts$onError;
          (_opts$onError = opts.onError) === null || _opts$onError === void 0 ? void 0 : _opts$onError.call(opts, err);
        },
        onDone: opts.onDone
      });
      return function() {
        $res.done();
      };
    }
  }]);
  return TRPCClient2;
}();
function createTRPCClient(opts) {
  return new TRPCClient(opts);
}
!function(n2) {
  var r2 = {};
  function o2(t2) {
    if (r2[t2])
      return r2[t2].exports;
    var e2 = r2[t2] = { i: t2, l: false, exports: {} };
    return n2[t2].call(e2.exports, e2, e2.exports, o2), e2.l = true, e2.exports;
  }
  o2.m = n2, o2.c = r2, o2.d = function(t2, e2, n3) {
    o2.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: n3 });
  }, o2.r = function(t2) {
    typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, o2.t = function(e2, t2) {
    if (1 & t2 && (e2 = o2(e2)), 8 & t2)
      return e2;
    if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
      return e2;
    var n3 = Object.create(null);
    if (o2.r(n3), Object.defineProperty(n3, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
      for (var r3 in e2)
        o2.d(n3, r3, function(t3) {
          return e2[t3];
        }.bind(null, r3));
    return n3;
  }, o2.n = function(t2) {
    var e2 = t2 && t2.__esModule ? function() {
      return t2.default;
    } : function() {
      return t2;
    };
    return o2.d(e2, "a", e2), e2;
  }, o2.o = function(t2, e2) {
    return Object.prototype.hasOwnProperty.call(t2, e2);
  }, o2.p = "", o2(o2.s = 191);
}([function(n2, t2, e2) {
  !function(t3) {
    function e3(t4) {
      return t4 && t4.Math == Math && t4;
    }
    n2.exports = e3(typeof globalThis == "object" && globalThis) || e3(typeof window == "object" && window) || e3(typeof self == "object" && self) || e3(typeof t3 == "object" && t3) || function() {
      return this;
    }() || Function("return this")();
  }.call(this, e2(151));
}, function(t2, e2) {
  var n2 = Function.prototype, r2 = n2.bind, o2 = n2.call, i2 = r2 && r2.bind(o2);
  t2.exports = r2 ? function(t3) {
    return t3 && i2(o2, t3);
  } : function(t3) {
    return t3 && function() {
      return o2.apply(t3, arguments);
    };
  };
}, function(t2, e2) {
  t2.exports = function(t3) {
    try {
      return !!t3();
    } catch (t4) {
      return true;
    }
  };
}, function(t2, e2, n2) {
  var u = n2(0), l = n2(42).f, f = n2(45), d = n2(37), h2 = n2(97), p2 = n2(124), v = n2(80);
  t2.exports = function(t3, e3) {
    var n3, r2, o2, i2 = t3.target, a = t3.global, c = t3.stat, s = a ? u : c ? u[i2] || h2(i2, {}) : (u[i2] || {}).prototype;
    if (s)
      for (n3 in e3) {
        if (r2 = e3[n3], o2 = t3.noTargetGet ? (o2 = l(s, n3)) && o2.value : s[n3], !v(a ? n3 : i2 + (c ? "." : "#") + n3, t3.forced) && o2 !== void 0) {
          if (typeof r2 == typeof o2)
            continue;
          p2(r2, o2);
        }
        (t3.sham || o2 && o2.sham) && f(r2, "sham", true), d(s, n3, r2, t3);
      }
  };
}, function(t2, e2, n2) {
  var r2 = n2(104), o2 = n2(37), n2 = n2(155);
  r2 || o2(Object.prototype, "toString", n2, { unsafe: true });
}, function(t2, e2, n2) {
  var r2 = n2(30), o2 = n2(88), i2 = n2(67), a = n2(49), n2 = n2(108), c = "Array Iterator", s = a.set, u = a.getterFor(c);
  t2.exports = n2(Array, "Array", function(t3, e3) {
    s(this, { type: c, target: r2(t3), index: 0, kind: e3 });
  }, function() {
    var t3 = u(this), e3 = t3.target, n3 = t3.kind, r3 = t3.index++;
    return !e3 || r3 >= e3.length ? { value: t3.target = void 0, done: true } : n3 == "keys" ? { value: r3, done: false } : n3 == "values" ? { value: e3[r3], done: false } : { value: [r3, e3[r3]], done: false };
  }, "values"), i2.Arguments = i2.Array, o2("keys"), o2("values"), o2("entries");
}, function(t2, e2, n2) {
  var r2 = n2(134).charAt, o2 = n2(22), i2 = n2(49), n2 = n2(108), a = "String Iterator", c = i2.set, s = i2.getterFor(a);
  n2(String, "String", function(t3) {
    c(this, { type: a, string: o2(t3), index: 0 });
  }, function() {
    var t3 = s(this), e3 = t3.string, n3 = t3.index;
    return n3 >= e3.length ? { value: void 0, done: true } : (n3 = r2(e3, n3), t3.index += n3.length, { value: n3, done: false });
  });
}, function(t2, e2, n2) {
  function r2(t3, e3) {
    var n3 = lt[t3] = A(nt);
    return Z(n3, { type: Q, tag: t3, description: e3 }), v || (n3.description = e3), n3;
  }
  function o2(e3, t3) {
    C(e3);
    var n3 = E(t3), t3 = D(n3).concat(yt(n3));
    return X(t3, function(t4) {
      v && !d(gt, n3, t4) || mt(e3, t4, n3[t4]);
    }), e3;
  }
  function i2(t3, e3) {
    var n3 = E(t3), t3 = x(e3);
    if (n3 !== tt || !y(lt, t3) || y(ft, t3)) {
      e3 = it(n3, t3);
      return !e3 || !y(lt, t3) || y(n3, G) && n3[G][t3] || (e3.enumerable = true), e3;
    }
  }
  function a(t3) {
    var t3 = ct(E(t3)), e3 = [];
    return X(t3, function(t4) {
      y(lt, t4) || y(Y, t4) || ut(e3, t4);
    }), e3;
  }
  var c, s = n2(3), u = n2(0), l = n2(43), f = n2(83), d = n2(21), h2 = n2(1), p2 = n2(61), v = n2(18), m = n2(95), g = n2(2), y = n2(20), b = n2(85), _ = n2(14), w = n2(19), O = n2(44), k = n2(72), C = n2(17), S = n2(36), E = n2(30), x = n2(71), j = n2(22), T = n2(59), A = n2(50), D = n2(65), P = n2(54), M = n2(106), I = n2(102), L = n2(42), N = n2(25), R = n2(69), B = n2(105), H = n2(37), F = n2(76), V = n2(78), Y = n2(62), W = n2(77), z = n2(12), U = n2(130), q = n2(131), K = n2(86), $ = n2(49), X = n2(55).forEach, G = V("hidden"), Q = "Symbol", n2 = "prototype", V = z("toPrimitive"), Z = $.set, J = $.getterFor(Q), tt = Object[n2], et = u.Symbol, nt = et && et[n2], rt = u.TypeError, u = u.QObject, ot = l("JSON", "stringify"), it = L.f, at = N.f, ct = M.f, st = R.f, ut = h2([].push), lt = F("symbols"), ft = F("op-symbols"), dt = F("string-to-symbol-registry"), ht = F("symbol-to-string-registry"), F = F("wks"), pt = !u || !u[n2] || !u[n2].findChild, vt = v && g(function() {
    return A(at({}, "a", { get: function() {
      return at(this, "a", { value: 7 }).a;
    } })).a != 7;
  }) ? function(t3, e3, n3) {
    var r3 = it(tt, e3);
    r3 && delete tt[e3], at(t3, e3, n3), r3 && t3 !== tt && at(tt, e3, r3);
  } : at, mt = function(t3, e3, n3) {
    t3 === tt && mt(ft, e3, n3), C(t3);
    e3 = x(e3);
    return C(n3), y(lt, e3) ? (n3.enumerable ? (y(t3, G) && t3[G][e3] && (t3[G][e3] = false), n3 = A(n3, { enumerable: T(0, false) })) : (y(t3, G) || at(t3, G, T(1, {})), t3[G][e3] = true), vt(t3, e3, n3)) : at(t3, e3, n3);
  }, gt = function(t3) {
    var e3 = x(t3), t3 = d(st, this, e3);
    return !(this === tt && y(lt, e3) && !y(ft, e3)) && (!(t3 || !y(this, e3) || !y(lt, e3) || y(this, G) && this[G][e3]) || t3);
  }, yt = function(t3) {
    var e3 = t3 === tt, t3 = ct(e3 ? ft : E(t3)), n3 = [];
    return X(t3, function(t4) {
      !y(lt, t4) || e3 && !y(tt, t4) || ut(n3, lt[t4]);
    }), n3;
  };
  m || (H(nt = (et = function() {
    if (O(nt, this))
      throw rt("Symbol is not a constructor");
    var t3 = arguments.length && arguments[0] !== void 0 ? j(arguments[0]) : void 0, e3 = W(t3), n3 = function(t4) {
      this === tt && d(n3, ft, t4), y(this, G) && y(this[G], e3) && (this[G][e3] = false), vt(this, e3, T(1, t4));
    };
    return v && pt && vt(tt, e3, { configurable: true, set: n3 }), r2(e3, t3);
  })[n2], "toString", function() {
    return J(this).tag;
  }), H(et, "withoutSetter", function(t3) {
    return r2(W(t3), t3);
  }), R.f = gt, N.f = mt, L.f = i2, P.f = M.f = a, I.f = yt, U.f = function(t3) {
    return r2(z(t3), t3);
  }, v && (at(nt, "description", { configurable: true, get: function() {
    return J(this).description;
  } }), p2 || H(tt, "propertyIsEnumerable", gt, { unsafe: true }))), s({ global: true, wrap: true, forced: !m, sham: !m }, { Symbol: et }), X(D(F), function(t3) {
    q(t3);
  }), s({ target: Q, stat: true, forced: !m }, { for: function(t3) {
    var e3 = j(t3);
    if (y(dt, e3))
      return dt[e3];
    t3 = et(e3);
    return dt[e3] = t3, ht[t3] = e3, t3;
  }, keyFor: function(t3) {
    if (!k(t3))
      throw rt(t3 + " is not a symbol");
    if (y(ht, t3))
      return ht[t3];
  }, useSetter: function() {
    pt = true;
  }, useSimple: function() {
    pt = false;
  } }), s({ target: "Object", stat: true, forced: !m, sham: !v }, { create: function(t3, e3) {
    return e3 === void 0 ? A(t3) : o2(A(t3), e3);
  }, defineProperty: mt, defineProperties: o2, getOwnPropertyDescriptor: i2 }), s({ target: "Object", stat: true, forced: !m }, { getOwnPropertyNames: a, getOwnPropertySymbols: yt }), s({ target: "Object", stat: true, forced: g(function() {
    I.f(1);
  }) }, { getOwnPropertySymbols: function(t3) {
    return I.f(S(t3));
  } }), ot && s({ target: "JSON", stat: true, forced: !m || g(function() {
    var t3 = et();
    return ot([t3]) != "[null]" || ot({ a: t3 }) != "{}" || ot(Object(t3)) != "{}";
  }) }, { stringify: function(t3, e3, n3) {
    var r3 = B(arguments), o3 = e3;
    if ((w(e3) || t3 !== void 0) && !k(t3))
      return b(e3) || (e3 = function(t4, e4) {
        if (_(o3) && (e4 = d(o3, this, t4, e4)), !k(e4))
          return e4;
      }), r3[1] = e3, f(ot, null, r3);
  } }), nt[V] || (c = nt.valueOf, H(nt, V, function(t3) {
    return d(c, this);
  })), K(et, Q), Y[G] = true;
}, function(t2, e2, n2) {
  function r2(e3, t3) {
    if (e3) {
      if (e3[l] !== d)
        try {
          u(e3, l, d);
        } catch (t4) {
          e3[l] = d;
        }
      if (e3[f] || u(e3, f, t3), a[t3]) {
        for (var n3 in s)
          if (e3[n3] !== s[n3])
            try {
              u(e3, n3, s[n3]);
            } catch (t4) {
              e3[n3] = s[n3];
            }
      }
    }
  }
  var o2, i2 = n2(0), a = n2(135), c = n2(136), s = n2(5), u = n2(45), n2 = n2(12), l = n2("iterator"), f = n2("toStringTag"), d = s.values;
  for (o2 in a)
    r2(i2[o2] && i2[o2].prototype, o2);
  r2(c, "DOMTokenList");
}, function(t2, e2, n2) {
  function r2(e3) {
    if (e3 && e3.forEach !== s)
      try {
        u(e3, "forEach", s);
      } catch (t3) {
        e3.forEach = s;
      }
  }
  var o2, i2 = n2(0), a = n2(135), c = n2(136), s = n2(166), u = n2(45);
  for (o2 in a)
    a[o2] && r2(i2[o2] && i2[o2].prototype);
  r2(c);
}, function(t2, e2, n2) {
  var r2, o2, i2, a, c, s, u, l = n2(3), f = n2(18), d = n2(0), h2 = n2(1), p2 = n2(20), v = n2(14), m = n2(44), g = n2(22), y = n2(25).f, n2 = n2(124), b = d.Symbol, _ = b && b.prototype;
  !f || !v(b) || "description" in _ && b().description === void 0 || (r2 = {}, n2(n2 = function() {
    var t3 = arguments.length < 1 || arguments[0] === void 0 ? void 0 : g(arguments[0]), e3 = m(_, this) ? new b(t3) : t3 === void 0 ? b() : b(t3);
    return t3 === "" && (r2[e3] = true), e3;
  }, b), (n2.prototype = _).constructor = n2, o2 = String(b("test")) == "Symbol(test)", i2 = h2(_.toString), a = h2(_.valueOf), c = /^Symbol\((.*)\)[^)]+$/, s = h2("".replace), u = h2("".slice), y(_, "description", { configurable: true, get: function() {
    var t3 = a(this), e3 = i2(t3);
    if (p2(r2, t3))
      return "";
    e3 = o2 ? u(e3, 7, -1) : s(e3, c, "$1");
    return e3 === "" ? void 0 : e3;
  } }), l({ global: true, forced: true }, { Symbol: n2 }));
}, function(t2, e2, n2) {
  n2(131)("iterator");
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(76), i2 = n2(20), a = n2(77), c = n2(95), s = n2(122), u = o2("wks"), l = r2.Symbol, f = l && l.for, d = s ? l : l && l.withoutSetter || a;
  t2.exports = function(t3) {
    var e3;
    return i2(u, t3) && (c || typeof u[t3] == "string") || (e3 = "Symbol." + t3, c && i2(l, t3) ? u[t3] = l[t3] : u[t3] = (s && f ? f : d)(e3)), u[t3];
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(36), i2 = n2(65);
  r2({ target: "Object", stat: true, forced: n2(2)(function() {
    i2(1);
  }) }, { keys: function(t3) {
    return i2(o2(t3));
  } });
}, function(t2, e2) {
  t2.exports = function(t3) {
    return typeof t3 == "function";
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(55).filter;
  r2({ target: "Array", proto: true, forced: !n2(93)("filter") }, { filter: function(t3) {
    return o2(this, t3, 1 < arguments.length ? arguments[1] : void 0);
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), n2 = n2(89);
  r2({ target: "RegExp", proto: true, forced: /./.exec !== n2 }, { exec: n2 });
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(19), i2 = r2.String, a = r2.TypeError;
  t2.exports = function(t3) {
    if (o2(t3))
      return t3;
    throw a(i2(t3) + " is not an object");
  };
}, function(t2, e2, n2) {
  n2 = n2(2);
  t2.exports = !n2(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] != 7;
  });
}, function(t2, e2, n2) {
  var r2 = n2(14);
  t2.exports = function(t3) {
    return typeof t3 == "object" ? t3 !== null : r2(t3);
  };
}, function(t2, e2, n2) {
  var r2 = n2(1), o2 = n2(36), i2 = r2({}.hasOwnProperty);
  t2.exports = Object.hasOwn || function(t3, e3) {
    return i2(o2(t3), e3);
  };
}, function(t2, e2) {
  var n2 = Function.prototype.call;
  t2.exports = n2.bind ? n2.bind(n2) : function() {
    return n2.apply(n2, arguments);
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(82), i2 = r2.String;
  t2.exports = function(t3) {
    if (o2(t3) === "Symbol")
      throw TypeError("Cannot convert a Symbol value to a string");
    return i2(t3);
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(2), i2 = n2(30), a = n2(42).f, n2 = n2(18), o2 = o2(function() {
    a(1);
  });
  r2({ target: "Object", stat: true, forced: !n2 || o2, sham: !n2 }, { getOwnPropertyDescriptor: function(t3, e3) {
    return a(i2(t3), e3);
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(18), s = n2(125), u = n2(30), l = n2(42), f = n2(66);
  r2({ target: "Object", stat: true, sham: !o2 }, { getOwnPropertyDescriptors: function(t3) {
    for (var e3, n3, r3 = u(t3), o3 = l.f, i2 = s(r3), a = {}, c = 0; i2.length > c; )
      (n3 = o3(r3, e3 = i2[c++])) !== void 0 && f(a, e3, n3);
    return a;
  } });
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(18), i2 = n2(123), a = n2(17), c = n2(71), s = r2.TypeError, u = Object.defineProperty;
  e2.f = o2 ? u : function(t3, e3, n3) {
    if (a(t3), e3 = c(e3), a(n3), i2)
      try {
        return u(t3, e3, n3);
      } catch (t4) {
      }
    if ("get" in n3 || "set" in n3)
      throw s("Accessors not supported");
    return "value" in n3 && (t3[e3] = n3.value), t3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(0), i2 = n2(2), u = n2(85), l = n2(19), f = n2(36), d = n2(46), h2 = n2(66), p2 = n2(132), a = n2(93), c = n2(12), n2 = n2(73), v = c("isConcatSpreadable"), m = 9007199254740991, g = "Maximum allowed index exceeded", y = o2.TypeError, i2 = 51 <= n2 || !i2(function() {
    var t3 = [];
    return t3[v] = false, t3.concat()[0] !== t3;
  }), a = a("concat");
  r2({ target: "Array", proto: true, forced: !i2 || !a }, { concat: function(t3) {
    for (var e3, n3, r3, o3 = f(this), i3 = p2(o3, 0), a2 = 0, c2 = -1, s = arguments.length; c2 < s; c2++)
      if (function(t4) {
        if (!l(t4))
          return false;
        var e4 = t4[v];
        return e4 !== void 0 ? !!e4 : u(t4);
      }(r3 = c2 === -1 ? o3 : arguments[c2])) {
        if (n3 = d(r3), m < a2 + n3)
          throw y(g);
        for (e3 = 0; e3 < n3; e3++, a2++)
          e3 in r3 && h2(i3, a2, r3[e3]);
      } else {
        if (m <= a2)
          throw y(g);
        h2(i3, a2++, r3);
      }
    return i3.length = a2, i3;
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(0), u = n2(85), l = n2(84), f = n2(19), d = n2(100), h2 = n2(46), p2 = n2(30), v = n2(66), i2 = n2(12), a = n2(93), m = n2(105), a = a("slice"), g = i2("species"), y = o2.Array, b = Math.max;
  r2({ target: "Array", proto: true, forced: !a }, { slice: function(t3, e3) {
    var n3, r3, o3, i3 = p2(this), a2 = h2(i3), c = d(t3, a2), s = d(e3 === void 0 ? a2 : e3, a2);
    if (u(i3) && (n3 = i3.constructor, (n3 = l(n3) && (n3 === y || u(n3.prototype)) || f(n3) && (n3 = n3[g]) === null ? void 0 : n3) === y || n3 === void 0))
      return m(i3, c, s);
    for (r3 = new (n3 === void 0 ? y : n3)(b(s - c, 0)), o3 = 0; c < s; c++, o3++)
      c in i3 && v(r3, o3, i3[c]);
    return r3.length = o3, r3;
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(55).find, i2 = n2(88), n2 = "find", a = true;
  n2 in [] && Array(1)[n2](function() {
    a = false;
  }), r2({ target: "Array", proto: true, forced: a }, { find: function(t3) {
    return o2(this, t3, 1 < arguments.length ? arguments[1] : void 0);
  } }), i2(n2);
}, function(t2, e2, n2) {
  n2(3)({ target: "Object", stat: true }, { setPrototypeOf: n2(103) });
}, function(t2, e2, n2) {
  var r2 = n2(70), o2 = n2(39);
  t2.exports = function(t3) {
    return r2(o2(t3));
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(2), i2 = n2(36), a = n2(81), n2 = n2(128);
  r2({ target: "Object", stat: true, forced: o2(function() {
    a(1);
  }), sham: !n2 }, { getPrototypeOf: function(t3) {
    return a(i2(t3));
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(43), i2 = n2(83), a = n2(156), c = n2(129), s = n2(17), u = n2(19), l = n2(50), n2 = n2(2), f = o2("Reflect", "construct"), d = Object.prototype, h2 = [].push, p2 = n2(function() {
    function t3() {
    }
    return !(f(function() {
    }, [], t3) instanceof t3);
  }), v = !n2(function() {
    f(function() {
    });
  }), n2 = p2 || v;
  r2({ target: "Reflect", stat: true, forced: n2, sham: n2 }, { construct: function(t3, e3) {
    c(t3), s(e3);
    var n3 = arguments.length < 3 ? t3 : c(arguments[2]);
    if (v && !p2)
      return f(t3, e3, n3);
    if (t3 == n3) {
      switch (e3.length) {
        case 0:
          return new t3();
        case 1:
          return new t3(e3[0]);
        case 2:
          return new t3(e3[0], e3[1]);
        case 3:
          return new t3(e3[0], e3[1], e3[2]);
        case 4:
          return new t3(e3[0], e3[1], e3[2], e3[3]);
      }
      var r3 = [null];
      return i2(h2, r3, e3), new (i2(a, t3, r3))();
    }
    r3 = n3.prototype, n3 = l(u(r3) ? r3 : d), r3 = i2(t3, n3, e3);
    return u(r3) ? r3 : n3;
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(127).includes, n2 = n2(88);
  r2({ target: "Array", proto: true }, { includes: function(t3) {
    return o2(this, t3, 1 < arguments.length ? arguments[1] : void 0);
  } }), n2("includes");
}, function(t2, e2, n2) {
  var r2 = n2(18), o2 = n2(0), i2 = n2(1), a = n2(80), c = n2(37), s = n2(20), u = n2(116), l = n2(44), f = n2(72), d = n2(121), h2 = n2(2), p2 = n2(54).f, v = n2(42).f, m = n2(25).f, g = n2(165), y = n2(91).trim, n2 = "Number", b = o2[n2], _ = b.prototype, w = o2.TypeError, O = i2("".slice), k = i2("".charCodeAt), C = function(t3) {
    var e3, n3, r3, o3, i3, a2, c2, s2 = d(t3, "number");
    if (f(s2))
      throw w("Cannot convert a Symbol value to a number");
    if (typeof s2 == "string" && 2 < s2.length) {
      if (s2 = y(s2), (e3 = k(s2, 0)) === 43 || e3 === 45) {
        if ((t3 = k(s2, 2)) === 88 || t3 === 120)
          return NaN;
      } else if (e3 === 48) {
        switch (k(s2, 1)) {
          case 66:
          case 98:
            n3 = 2, r3 = 49;
            break;
          case 79:
          case 111:
            n3 = 8, r3 = 55;
            break;
          default:
            return +s2;
        }
        for (i3 = (o3 = O(s2, 2)).length, a2 = 0; a2 < i3; a2++)
          if ((c2 = k(o3, a2)) < 48 || r3 < c2)
            return NaN;
        return parseInt(o3, n3);
      }
    }
    return +s2;
  };
  if (a(n2, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
    for (var S, E = function(t3) {
      var t3 = arguments.length < 1 ? 0 : b(function(t4) {
        t4 = d(t4, "number");
        return typeof t4 == "bigint" ? t4 : C(t4);
      }(t3)), e3 = this;
      return l(_, e3) && h2(function() {
        g(e3);
      }) ? u(Object(t3), e3, E) : t3;
    }, x = r2 ? p2(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), j = 0; x.length > j; j++)
      s(b, S = x[j]) && !s(E, S) && m(E, S, v(b, S));
    c(o2, n2, (E.prototype = _).constructor = E);
  }
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(172);
  r2({ target: "Array", stat: true, forced: !n2(149)(function(t3) {
    Array.from(t3);
  }) }, { from: o2 });
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(39), i2 = r2.Object;
  t2.exports = function(t3) {
    return i2(o2(t3));
  };
}, function(t2, e2, n2) {
  var s = n2(0), u = n2(14), l = n2(20), f = n2(45), d = n2(97), r2 = n2(99), o2 = n2(49), h2 = n2(63).CONFIGURABLE, i2 = o2.get, p2 = o2.enforce, v = String(String).split("String");
  (t2.exports = function(t3, e3, n3, r3) {
    var o3 = !!r3 && !!r3.unsafe, i3 = !!r3 && !!r3.enumerable, a = !!r3 && !!r3.noTargetGet, c = r3 && r3.name !== void 0 ? r3.name : e3;
    u(n3) && (String(c).slice(0, 7) === "Symbol(" && (c = "[" + String(c).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!l(n3, "name") || h2 && n3.name !== c) && f(n3, "name", c), (r3 = p2(n3)).source || (r3.source = v.join(typeof c == "string" ? c : ""))), t3 !== s ? (o3 ? !a && t3[e3] && (i3 = true) : delete t3[e3], i3 ? t3[e3] = n3 : f(t3, e3, n3)) : i3 ? t3[e3] = n3 : d(e3, n3);
  })(Function.prototype, "toString", function() {
    return u(this) && i2(this).source || r2(this);
  });
}, function(t2, e2, n2) {
  var l = n2(83), f = n2(21), r2 = n2(1), o2 = n2(111), d = n2(114), g = n2(17), h2 = n2(39), y = n2(162), b = n2(112), _ = n2(64), w = n2(22), i2 = n2(53), O = n2(107), k = n2(113), C = n2(89), a = n2(110), n2 = n2(2), S = a.UNSUPPORTED_Y, E = 4294967295, x = Math.min, j = [].push, T = r2(/./.exec), A = r2(j), D = r2("".slice);
  o2("split", function(o3, p2, v) {
    var m = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function(t3, e3) {
      var n3 = w(h2(this)), r3 = e3 === void 0 ? E : e3 >>> 0;
      if (r3 == 0)
        return [];
      if (t3 === void 0)
        return [n3];
      if (!d(t3))
        return f(p2, n3, t3, r3);
      for (var o4, i3, a2, c = [], e3 = (t3.ignoreCase ? "i" : "") + (t3.multiline ? "m" : "") + (t3.unicode ? "u" : "") + (t3.sticky ? "y" : ""), s = 0, u = new RegExp(t3.source, e3 + "g"); (o4 = f(C, u, n3)) && !(s < (i3 = u.lastIndex) && (A(c, D(n3, s, o4.index)), 1 < o4.length && o4.index < n3.length && l(j, c, O(o4, 1)), a2 = o4[0].length, s = i3, r3 <= c.length)); )
        u.lastIndex === o4.index && u.lastIndex++;
      return s === n3.length ? !a2 && T(u, "") || A(c, "") : A(c, D(n3, s)), r3 < c.length ? O(c, 0, r3) : c;
    } : "0".split(void 0, 0).length ? function(t3, e3) {
      return t3 === void 0 && e3 === 0 ? [] : f(p2, this, t3, e3);
    } : p2;
    return [function(t3, e3) {
      var n3 = h2(this), r3 = t3 == null ? void 0 : i2(t3, o3);
      return r3 ? f(r3, t3, n3, e3) : f(m, w(n3), t3, e3);
    }, function(t3, e3) {
      var n3 = g(this), r3 = w(t3), o4 = v(m, n3, r3, e3, m !== p2);
      if (o4.done)
        return o4.value;
      var t3 = y(n3, RegExp), i3 = n3.unicode, o4 = (n3.ignoreCase ? "i" : "") + (n3.multiline ? "m" : "") + (n3.unicode ? "u" : "") + (S ? "g" : "y"), a2 = new t3(S ? "^(?:" + n3.source + ")" : n3, o4), c = e3 === void 0 ? E : e3 >>> 0;
      if (c == 0)
        return [];
      if (r3.length === 0)
        return k(a2, r3) === null ? [r3] : [];
      for (var s = 0, u = 0, l2 = []; u < r3.length; ) {
        a2.lastIndex = S ? 0 : u;
        var f2, d2 = k(a2, S ? D(r3, u) : r3);
        if (d2 === null || (f2 = x(_(a2.lastIndex + (S ? u : 0)), r3.length)) === s)
          u = b(r3, u, i3);
        else {
          if (A(l2, D(r3, s, u)), l2.length === c)
            return l2;
          for (var h3 = 1; h3 <= d2.length - 1; h3++)
            if (A(l2, d2[h3]), l2.length === c)
              return l2;
          u = s = f2;
        }
      }
      return A(l2, D(r3, s)), l2;
    }];
  }, !!n2(function() {
    var t3 = /(?:)/, e3 = t3.exec;
    t3.exec = function() {
      return e3.apply(this, arguments);
    };
    t3 = "ab".split(t3);
    return t3.length !== 2 || t3[0] !== "a" || t3[1] !== "b";
  }), S);
}, function(t2, e2, n2) {
  var r2 = n2(0).TypeError;
  t2.exports = function(t3) {
    if (t3 == null)
      throw r2("Can't call method on " + t3);
    return t3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(1), o2 = n2(63).PROPER, i2 = n2(37), a = n2(17), c = n2(44), s = n2(22), u = n2(2), l = n2(109), n2 = "toString", f = RegExp.prototype, d = f[n2], h2 = r2(l), u = u(function() {
    return d.call({ source: "a", flags: "b" }) != "/a/b";
  }), o2 = o2 && d.name != n2;
  (u || o2) && i2(RegExp.prototype, n2, function() {
    var t3 = a(this), e3 = s(t3.source), n3 = t3.flags;
    return "/" + e3 + "/" + s(n3 !== void 0 || !c(f, t3) || "flags" in f ? n3 : h2(t3));
  }, { unsafe: true });
}, function(t2, e2, n2) {
  var r2 = n2(18), o2 = n2(63).EXISTS, i2 = n2(1), a = n2(25).f, n2 = Function.prototype, c = i2(n2.toString), s = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, u = i2(s.exec);
  r2 && !o2 && a(n2, "name", { configurable: true, get: function() {
    try {
      return u(s, c(this))[1];
    } catch (t3) {
      return "";
    }
  } });
}, function(t2, e2, n2) {
  var r2 = n2(18), o2 = n2(21), i2 = n2(69), a = n2(59), c = n2(30), s = n2(71), u = n2(20), l = n2(123), f = Object.getOwnPropertyDescriptor;
  e2.f = r2 ? f : function(t3, e3) {
    if (t3 = c(t3), e3 = s(e3), l)
      try {
        return f(t3, e3);
      } catch (t4) {
      }
    if (u(t3, e3))
      return a(!o2(i2.f, t3, e3), t3[e3]);
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(14);
  t2.exports = function(t3, e3) {
    return arguments.length < 2 ? (n3 = r2[t3], o2(n3) ? n3 : void 0) : r2[t3] && r2[t3][e3];
    var n3;
  };
}, function(t2, e2, n2) {
  n2 = n2(1);
  t2.exports = n2({}.isPrototypeOf);
}, function(t2, e2, n2) {
  var r2 = n2(18), o2 = n2(25), i2 = n2(59);
  t2.exports = r2 ? function(t3, e3, n3) {
    return o2.f(t3, e3, i2(1, n3));
  } : function(t3, e3, n3) {
    return t3[e3] = n3, t3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(64);
  t2.exports = function(t3) {
    return r2(t3.length);
  };
}, function(t2, e2, n2) {
  var O = n2(83), o2 = n2(21), r2 = n2(1), i2 = n2(111), a = n2(2), k = n2(17), C = n2(14), S = n2(79), E = n2(64), x = n2(22), c = n2(39), j = n2(112), s = n2(53), T = n2(171), A = n2(113), u = n2(12)("replace"), D = Math.max, P = Math.min, M = r2([].concat), I = r2([].push), L = r2("".indexOf), N = r2("".slice), r2 = "a".replace(/./, "$0") === "$0", l = !!/./[u] && /./[u]("a", "$0") === "";
  i2("replace", function(t3, b, _) {
    var w = l ? "$" : "$0";
    return [function(t4, e3) {
      var n3 = c(this), r3 = t4 == null ? void 0 : s(t4, u);
      return r3 ? o2(r3, t4, n3, e3) : o2(b, x(n3), t4, e3);
    }, function(t4, e3) {
      var n3 = k(this), r3 = x(t4);
      if (typeof e3 == "string" && L(e3, w) === -1 && L(e3, "$<") === -1) {
        t4 = _(b, n3, r3, e3);
        if (t4.done)
          return t4.value;
      }
      var o3 = C(e3);
      o3 || (e3 = x(e3));
      var i3, a2 = n3.global;
      a2 && (i3 = n3.unicode, n3.lastIndex = 0);
      for (var c2 = []; ; ) {
        if ((d = A(n3, r3)) === null)
          break;
        if (I(c2, d), !a2)
          break;
        x(d[0]) === "" && (n3.lastIndex = j(r3, E(n3.lastIndex), i3));
      }
      for (var s2, u2 = "", l2 = 0, f = 0; f < c2.length; f++) {
        for (var d, h2 = x((d = c2[f])[0]), p2 = D(P(S(d.index), r3.length), 0), v = [], m = 1; m < d.length; m++)
          I(v, (s2 = d[m]) === void 0 ? s2 : String(s2));
        var g, y = d.groups, y = o3 ? (g = M([h2], v, p2, r3), y !== void 0 && I(g, y), x(O(e3, void 0, g))) : T(h2, r3, p2, v, y, e3);
        l2 <= p2 && (u2 += N(r3, l2, p2) + y, l2 = p2 + h2.length);
      }
      return u2 + N(r3, l2);
    }];
  }, !!a(function() {
    var t3 = /./;
    return t3.exec = function() {
      var t4 = [];
      return t4.groups = { a: "7" }, t4;
    }, "".replace(t3, "$<a>") !== "7";
  }) || !r2 || l);
}, function(t2, e2, n2) {
  var n2 = n2(1), r2 = n2({}.toString), o2 = n2("".slice);
  t2.exports = function(t3) {
    return o2(r2(t3), 8, -1);
  };
}, function(t2, e2, n2) {
  var r2, o2, i2, a, c, s, u, l, f = n2(153), d = n2(0), h2 = n2(1), p2 = n2(19), v = n2(45), m = n2(20), g = n2(96), y = n2(78), n2 = n2(62), b = "Object already initialized", _ = d.TypeError, d = d.WeakMap;
  u = f || g.state ? (r2 = g.state || (g.state = new d()), o2 = h2(r2.get), i2 = h2(r2.has), a = h2(r2.set), c = function(t3, e3) {
    if (i2(r2, t3))
      throw new _(b);
    return e3.facade = t3, a(r2, t3, e3), e3;
  }, s = function(t3) {
    return o2(r2, t3) || {};
  }, function(t3) {
    return i2(r2, t3);
  }) : (n2[l = y("state")] = true, c = function(t3, e3) {
    if (m(t3, l))
      throw new _(b);
    return e3.facade = t3, v(t3, l, e3), e3;
  }, s = function(t3) {
    return m(t3, l) ? t3[l] : {};
  }, function(t3) {
    return m(t3, l);
  }), t2.exports = { set: c, get: s, has: u, enforce: function(t3) {
    return u(t3) ? s(t3) : c(t3, {});
  }, getterFor: function(n3) {
    return function(t3) {
      var e3;
      if (!p2(t3) || (e3 = s(t3)).type !== n3)
        throw _("Incompatible receiver, " + n3 + " required");
      return e3;
    };
  } };
}, function(t2, e2, n2) {
  function r2() {
  }
  function o2(t3) {
    t3.write(v("")), t3.close();
    var e3 = t3.parentWindow.Object;
    return t3 = null, e3;
  }
  var i2, a = n2(17), c = n2(157), s = n2(101), u = n2(62), l = n2(158), f = n2(98), n2 = n2(78), d = "prototype", h2 = "script", p2 = n2("IE_PROTO"), v = function(t3) {
    return "<" + h2 + ">" + t3 + "</" + h2 + ">";
  }, m = function() {
    try {
      i2 = new ActiveXObject("htmlfile");
    } catch (t4) {
    }
    var t3, e3;
    m = typeof document == "undefined" || document.domain && i2 ? o2(i2) : (t3 = f("iframe"), e3 = "java" + h2 + ":", t3.style.display = "none", l.appendChild(t3), t3.src = String(e3), (t3 = t3.contentWindow.document).open(), t3.write(v("document.F=Object")), t3.close(), t3.F);
    for (var n3 = s.length; n3--; )
      delete m[d][s[n3]];
    return m();
  };
  u[p2] = true, t2.exports = Object.create || function(t3, e3) {
    var n3;
    return t3 !== null ? (r2[d] = a(t3), n3 = new r2(), r2[d] = null, n3[p2] = t3) : n3 = m(), e3 === void 0 ? n3 : c(n3, e3);
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(1), i2 = n2(139), a = n2(39), c = n2(22), n2 = n2(140), s = o2("".indexOf);
  r2({ target: "String", proto: true, forced: !n2("includes") }, { includes: function(t3) {
    return !!~s(c(a(this)), c(i2(t3)), 1 < arguments.length ? arguments[1] : void 0);
  } });
}, function(t2, e2, n2) {
  var r2 = n2(18), o2 = n2(0), i2 = n2(1), a = n2(80), u = n2(116), l = n2(45), c = n2(25).f, s = n2(54).f, f = n2(44), d = n2(114), h2 = n2(22), p2 = n2(109), v = n2(110), m = n2(37), g = n2(2), y = n2(20), b = n2(49).enforce, _ = n2(141), w = n2(12), O = n2(137), k = n2(138), C = w("match"), S = o2.RegExp, E = S.prototype, x = o2.SyntaxError, j = i2(p2), T = i2(E.exec), A = i2("".charAt), D = i2("".replace), P = i2("".indexOf), M = i2("".slice), I = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/, L = /a/g, N = /a/g, i2 = new S(L) !== L, R = v.MISSED_STICKY, B = v.UNSUPPORTED_Y, g = r2 && (!i2 || R || O || k || g(function() {
    return N[C] = false, S(L) != L || S(N) == N || S(L, "i") != "/a/i";
  })), H = function(t3) {
    for (var e3, n3 = t3.length, r3 = 0, o3 = "", i3 = false; r3 <= n3; r3++)
      (e3 = A(t3, r3)) !== "\\" ? i3 || e3 !== "." ? (e3 === "[" ? i3 = true : e3 === "]" && (i3 = false), o3 += e3) : o3 += "[\\s\\S]" : o3 += e3 + A(t3, ++r3);
    return o3;
  }, F = function(t3) {
    for (var e3, n3 = t3.length, r3 = 0, o3 = "", i3 = [], a2 = {}, c2 = false, s2 = false, u2 = 0, l2 = ""; r3 <= n3; r3++) {
      if ((e3 = A(t3, r3)) === "\\")
        e3 += A(t3, ++r3);
      else if (e3 === "]")
        c2 = false;
      else if (!c2)
        switch (true) {
          case e3 === "[":
            c2 = true;
            break;
          case e3 === "(":
            T(I, M(t3, r3 + 1)) && (r3 += 2, s2 = true), o3 += e3, u2++;
            continue;
          case (e3 === ">" && s2):
            if (l2 === "" || y(a2, l2))
              throw new x("Invalid capture group name");
            a2[l2] = true, s2 = !(i3[i3.length] = [l2, u2]), l2 = "";
            continue;
        }
      s2 ? l2 += e3 : o3 += e3;
    }
    return [o3, i3];
  };
  if (a("RegExp", g)) {
    for (var V = function(t3, e3) {
      var n3, r3, o3 = f(E, this), i3 = d(t3), a2 = e3 === void 0, c2 = [], s2 = t3;
      if (!o3 && i3 && a2 && t3.constructor === V)
        return t3;
      if ((i3 || f(E, t3)) && (t3 = t3.source, a2 && (e3 = "flags" in s2 ? s2.flags : j(s2))), t3 = t3 === void 0 ? "" : h2(t3), e3 = e3 === void 0 ? "" : h2(e3), s2 = t3, i3 = e3 = O && "dotAll" in L && (n3 = !!e3 && -1 < P(e3, "s")) ? D(e3, /s/g, "") : e3, R && "sticky" in L && (r3 = !!e3 && -1 < P(e3, "y")) && B && (e3 = D(e3, /y/g, "")), k && (t3 = (a2 = F(t3))[0], c2 = a2[1]), e3 = u(S(t3, e3), o3 ? this : E, V), (n3 || r3 || c2.length) && (o3 = b(e3), n3 && (o3.dotAll = true, o3.raw = V(H(t3), i3)), r3 && (o3.sticky = true), c2.length && (o3.groups = c2)), t3 !== s2)
        try {
          l(e3, "source", s2 === "" ? "(?:)" : s2);
        } catch (t4) {
        }
      return e3;
    }, Y = s(S), W = 0; Y.length > W; )
      !function(e3) {
        e3 in V || c(V, e3, { configurable: true, get: function() {
          return S[e3];
        }, set: function(t3) {
          S[e3] = t3;
        } });
      }(Y[W++]);
    (E.constructor = V).prototype = E, m(o2, "RegExp", V);
  }
  _("RegExp");
}, function(t2, e2, n2) {
  var r2 = n2(60);
  t2.exports = function(t3, e3) {
    e3 = t3[e3];
    return e3 == null ? void 0 : r2(e3);
  };
}, function(t2, e2, n2) {
  var r2 = n2(126), o2 = n2(101).concat("length", "prototype");
  e2.f = Object.getOwnPropertyNames || function(t3) {
    return r2(t3, o2);
  };
}, function(t2, e2, n2) {
  function r2(d) {
    var h2 = d == 1, p2 = d == 2, v = d == 3, m = d == 4, g = d == 6, y = d == 7, b = d == 5 || g;
    return function(t3, e3, n3, r3) {
      for (var o3, i2, a = O(t3), c = w(a), s = _(e3, n3), u = k(c), l = 0, r3 = r3 || C, f = h2 ? r3(t3, u) : p2 || y ? r3(t3, 0) : void 0; l < u; l++)
        if ((b || l in c) && (i2 = s(o3 = c[l], l, a), d))
          if (h2)
            f[l] = i2;
          else if (i2)
            switch (d) {
              case 3:
                return true;
              case 5:
                return o3;
              case 6:
                return l;
              case 2:
                S(f, o3);
            }
          else
            switch (d) {
              case 4:
                return false;
              case 7:
                S(f, o3);
            }
      return g ? -1 : v || m ? m : f;
    };
  }
  var _ = n2(87), o2 = n2(1), w = n2(70), O = n2(36), k = n2(46), C = n2(132), S = o2([].push);
  t2.exports = { forEach: r2(0), map: r2(1), filter: r2(2), some: r2(3), every: r2(4), find: r2(5), findIndex: r2(6), filterReject: r2(7) };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(1), i2 = n2(42).f, a = n2(64), c = n2(22), s = n2(139), u = n2(39), l = n2(140), n2 = n2(61), f = o2("".startsWith), d = o2("".slice), h2 = Math.min, l = l("startsWith");
  r2({ target: "String", proto: true, forced: !!(n2 || l || (!(i2 = i2(String.prototype, "startsWith")) || i2.writable)) && !l }, { startsWith: function(t3) {
    var e3 = c(u(this));
    s(t3);
    var n3 = a(h2(1 < arguments.length ? arguments[1] : void 0, e3.length)), t3 = c(t3);
    return f ? f(e3, t3, n3) : d(e3, n3, n3 + t3.length) === t3;
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(55).map;
  r2({ target: "Array", proto: true, forced: !n2(93)("map") }, { map: function(t3) {
    return o2(this, t3, 1 < arguments.length ? arguments[1] : void 0);
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), i2 = n2(21), a = n2(19), c = n2(17), s = n2(177), u = n2(42), l = n2(81);
  r2({ target: "Reflect", stat: true }, { get: function t3(e3, n3) {
    var r3, o2 = arguments.length < 3 ? e3 : arguments[2];
    return c(e3) === o2 ? e3[n3] : (r3 = u.f(e3, n3)) ? s(r3) ? r3.value : r3.get === void 0 ? void 0 : i2(r3.get, o2) : a(r3 = l(e3)) ? t3(r3, n3, o2) : void 0;
  } });
}, function(t2, e2) {
  t2.exports = function(t3, e3) {
    return { enumerable: !(1 & t3), configurable: !(2 & t3), writable: !(4 & t3), value: e3 };
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(14), i2 = n2(75), a = r2.TypeError;
  t2.exports = function(t3) {
    if (o2(t3))
      return t3;
    throw a(i2(t3) + " is not a function");
  };
}, function(t2, e2) {
  t2.exports = false;
}, function(t2, e2) {
  t2.exports = {};
}, function(t2, e2, n2) {
  var r2 = n2(18), o2 = n2(20), i2 = Function.prototype, a = r2 && Object.getOwnPropertyDescriptor, n2 = o2(i2, "name"), o2 = n2 && function() {
  }.name === "something", i2 = n2 && (!r2 || a(i2, "name").configurable);
  t2.exports = { EXISTS: n2, PROPER: o2, CONFIGURABLE: i2 };
}, function(t2, e2, n2) {
  var r2 = n2(79), o2 = Math.min;
  t2.exports = function(t3) {
    return 0 < t3 ? o2(r2(t3), 9007199254740991) : 0;
  };
}, function(t2, e2, n2) {
  var r2 = n2(126), o2 = n2(101);
  t2.exports = Object.keys || function(t3) {
    return r2(t3, o2);
  };
}, function(t2, e2, n2) {
  var r2 = n2(71), o2 = n2(25), i2 = n2(59);
  t2.exports = function(t3, e3, n3) {
    e3 = r2(e3);
    e3 in t3 ? o2.f(t3, e3, i2(0, n3)) : t3[e3] = n3;
  };
}, function(t2, e2) {
  t2.exports = {};
}, function(t2, e2, n2) {
  var o2 = n2(21), r2 = n2(111), u = n2(17), l = n2(64), f = n2(22), i2 = n2(39), a = n2(53), d = n2(112), h2 = n2(113);
  r2("match", function(r3, c, s) {
    return [function(t3) {
      var e3 = i2(this), n3 = t3 == null ? void 0 : a(t3, r3);
      return n3 ? o2(n3, t3, e3) : new RegExp(t3)[r3](f(e3));
    }, function(t3) {
      var e3 = u(this), n3 = f(t3), t3 = s(c, e3, n3);
      if (t3.done)
        return t3.value;
      if (!e3.global)
        return h2(e3, n3);
      for (var r4 = e3.unicode, o3 = [], i3 = e3.lastIndex = 0; (a2 = h2(e3, n3)) !== null; ) {
        var a2 = f(a2[0]);
        (o3[i3] = a2) === "" && (e3.lastIndex = d(n3, l(e3.lastIndex), r4)), i3++;
      }
      return i3 === 0 ? null : o3;
    }];
  });
}, function(t2, e2, n2) {
  var r2 = {}.propertyIsEnumerable, o2 = Object.getOwnPropertyDescriptor, i2 = o2 && !r2.call({ 1: 2 }, 1);
  e2.f = i2 ? function(t3) {
    t3 = o2(this, t3);
    return !!t3 && t3.enumerable;
  } : r2;
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(1), i2 = n2(2), a = n2(48), c = r2.Object, s = o2("".split);
  t2.exports = i2(function() {
    return !c("z").propertyIsEnumerable(0);
  }) ? function(t3) {
    return a(t3) == "String" ? s(t3, "") : c(t3);
  } : c;
}, function(t2, e2, n2) {
  var r2 = n2(121), o2 = n2(72);
  t2.exports = function(t3) {
    t3 = r2(t3, "string");
    return o2(t3) ? t3 : t3 + "";
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(43), i2 = n2(14), a = n2(44), n2 = n2(122), c = r2.Object;
  t2.exports = n2 ? function(t3) {
    return typeof t3 == "symbol";
  } : function(t3) {
    var e3 = o2("Symbol");
    return i2(e3) && a(e3.prototype, c(t3));
  };
}, function(t2, e2, n2) {
  var r2, o2, i2 = n2(0), a = n2(74), n2 = i2.process, i2 = i2.Deno, i2 = n2 && n2.versions || i2 && i2.version, i2 = i2 && i2.v8;
  !(o2 = i2 ? 0 < (r2 = i2.split("."))[0] && r2[0] < 4 ? 1 : +(r2[0] + r2[1]) : o2) && a && (!(r2 = a.match(/Edge\/(\d+)/)) || 74 <= r2[1]) && (r2 = a.match(/Chrome\/(\d+)/)) && (o2 = +r2[1]), t2.exports = o2;
}, function(t2, e2, n2) {
  n2 = n2(43);
  t2.exports = n2("navigator", "userAgent") || "";
}, function(t2, e2, n2) {
  var r2 = n2(0).String;
  t2.exports = function(t3) {
    try {
      return r2(t3);
    } catch (t4) {
      return "Object";
    }
  };
}, function(t2, e2, n2) {
  var r2 = n2(61), o2 = n2(96);
  (t2.exports = function(t3, e3) {
    return o2[t3] || (o2[t3] = e3 !== void 0 ? e3 : {});
  })("versions", []).push({ version: "3.19.3", mode: r2 ? "pure" : "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
}, function(t2, e2, n2) {
  var n2 = n2(1), r2 = 0, o2 = Math.random(), i2 = n2(1 .toString);
  t2.exports = function(t3) {
    return "Symbol(" + (t3 === void 0 ? "" : t3) + ")_" + i2(++r2 + o2, 36);
  };
}, function(t2, e2, n2) {
  var r2 = n2(76), o2 = n2(77), i2 = r2("keys");
  t2.exports = function(t3) {
    return i2[t3] || (i2[t3] = o2(t3));
  };
}, function(t2, e2) {
  var n2 = Math.ceil, r2 = Math.floor;
  t2.exports = function(t3) {
    t3 = +t3;
    return t3 != t3 || t3 == 0 ? 0 : (0 < t3 ? r2 : n2)(t3);
  };
}, function(t2, e2, n2) {
  function r2(t3, e3) {
    return (t3 = s[c(t3)]) == l || t3 != u && (i2(e3) ? o2(e3) : !!e3);
  }
  var o2 = n2(2), i2 = n2(14), a = /#|\.prototype\./, c = r2.normalize = function(t3) {
    return String(t3).replace(a, ".").toLowerCase();
  }, s = r2.data = {}, u = r2.NATIVE = "N", l = r2.POLYFILL = "P";
  t2.exports = r2;
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(20), i2 = n2(14), a = n2(36), c = n2(78), n2 = n2(128), s = c("IE_PROTO"), u = r2.Object, l = u.prototype;
  t2.exports = n2 ? u.getPrototypeOf : function(t3) {
    var e3 = a(t3);
    if (o2(e3, s))
      return e3[s];
    t3 = e3.constructor;
    return i2(t3) && e3 instanceof t3 ? t3.prototype : e3 instanceof u ? l : null;
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(104), i2 = n2(14), a = n2(48), c = n2(12)("toStringTag"), s = r2.Object, u = a(function() {
    return arguments;
  }()) == "Arguments";
  t2.exports = o2 ? a : function(t3) {
    var e3;
    return t3 === void 0 ? "Undefined" : t3 === null ? "Null" : typeof (t3 = function(t4, e4) {
      try {
        return t4[e4];
      } catch (t5) {
      }
    }(e3 = s(t3), c)) == "string" ? t3 : u ? a(e3) : (t3 = a(e3)) == "Object" && i2(e3.callee) ? "Arguments" : t3;
  };
}, function(t2, e2) {
  var n2 = Function.prototype, r2 = n2.apply, o2 = n2.bind, i2 = n2.call;
  t2.exports = typeof Reflect == "object" && Reflect.apply || (o2 ? i2.bind(r2) : function() {
    return i2.apply(r2, arguments);
  });
}, function(t2, e2, n2) {
  function r2() {
  }
  function o2(t3) {
    if (!c(t3))
      return false;
    try {
      return d(r2, f, t3), true;
    } catch (t4) {
      return false;
    }
  }
  var i2 = n2(1), a = n2(2), c = n2(14), s = n2(82), u = n2(43), l = n2(99), f = [], d = u("Reflect", "construct"), h2 = /^\s*(?:class|function)\b/, p2 = i2(h2.exec), v = !h2.exec(r2);
  t2.exports = !d || a(function() {
    var t3;
    return o2(o2.call) || !o2(Object) || !o2(function() {
      t3 = true;
    }) || t3;
  }) ? function(t3) {
    if (!c(t3))
      return false;
    switch (s(t3)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    return v || !!p2(h2, l(t3));
  } : o2;
}, function(t2, e2, n2) {
  var r2 = n2(48);
  t2.exports = Array.isArray || function(t3) {
    return r2(t3) == "Array";
  };
}, function(t2, e2, n2) {
  var r2 = n2(25).f, o2 = n2(20), i2 = n2(12)("toStringTag");
  t2.exports = function(t3, e3, n3) {
    t3 && !o2(t3 = n3 ? t3 : t3.prototype, i2) && r2(t3, i2, { configurable: true, value: e3 });
  };
}, function(t2, e2, n2) {
  var r2 = n2(1), o2 = n2(60), i2 = r2(r2.bind);
  t2.exports = function(t3, e3) {
    return o2(t3), e3 === void 0 ? t3 : i2 ? i2(t3, e3) : function() {
      return t3.apply(e3, arguments);
    };
  };
}, function(t2, e2, n2) {
  var r2 = n2(12), o2 = n2(50), n2 = n2(25), i2 = r2("unscopables"), a = Array.prototype;
  a[i2] == null && n2.f(a, i2, { configurable: true, value: o2(null) }), t2.exports = function(t3) {
    a[i2][t3] = true;
  };
}, function(t2, e2, n2) {
  var p2 = n2(21), r2 = n2(1), v = n2(22), m = n2(109), o2 = n2(110), i2 = n2(76), g = n2(50), y = n2(49).get, a = n2(137), n2 = n2(138), b = i2("native-string-replace", String.prototype.replace), _ = RegExp.prototype.exec, w = _, O = r2("".charAt), k = r2("".indexOf), C = r2("".replace), S = r2("".slice), E = (i2 = /b*/g, p2(_, r2 = /a/, "a"), p2(_, i2, "a"), r2.lastIndex !== 0 || i2.lastIndex !== 0), x = o2.BROKEN_CARET, j = /()??/.exec("")[1] !== void 0;
  (E || j || x || a || n2) && (w = function(t3) {
    var e3, n3, r3, o3, i3, a2, c = this, s = y(c), u = v(t3), l = s.raw;
    if (l)
      return l.lastIndex = c.lastIndex, h2 = p2(w, l, u), c.lastIndex = l.lastIndex, h2;
    var f = s.groups, d = x && c.sticky, t3 = p2(m, c), l = c.source, h2 = 0, s = u;
    if (d && (t3 = C(t3, "y", ""), k(t3, "g") === -1 && (t3 += "g"), s = S(u, c.lastIndex), 0 < c.lastIndex && (!c.multiline || c.multiline && O(u, c.lastIndex - 1) !== "\n") && (l = "(?: " + l + ")", s = " " + s, h2++), e3 = new RegExp("^(?:" + l + ")", t3)), j && (e3 = new RegExp("^" + l + "$(?!\\s)", t3)), E && (n3 = c.lastIndex), r3 = p2(_, d ? e3 : c, s), d ? r3 ? (r3.input = S(r3.input, h2), r3[0] = S(r3[0], h2), r3.index = c.lastIndex, c.lastIndex += r3[0].length) : c.lastIndex = 0 : E && r3 && (c.lastIndex = c.global ? r3.index + r3[0].length : n3), j && r3 && 1 < r3.length && p2(b, r3[0], e3, function() {
      for (o3 = 1; o3 < arguments.length - 2; o3++)
        arguments[o3] === void 0 && (r3[o3] = void 0);
    }), r3 && f)
      for (r3.groups = i3 = g(null), o3 = 0; o3 < f.length; o3++)
        i3[(a2 = f[o3])[0]] = r3[a2[1]];
    return r3;
  }), t2.exports = w;
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(91).trim;
  r2({ target: "String", proto: true, forced: n2(163)("trim") }, { trim: function() {
    return o2(this);
  } });
}, function(t2, e2, n2) {
  function r2(e3) {
    return function(t3) {
      t3 = a(i2(t3));
      return 1 & e3 && (t3 = c(t3, s, "")), t3 = 2 & e3 ? c(t3, u, "") : t3;
    };
  }
  var o2 = n2(1), i2 = n2(39), a = n2(22), n2 = n2(92), c = o2("".replace), n2 = "[" + n2 + "]", s = RegExp("^" + n2 + n2 + "*"), u = RegExp(n2 + n2 + "*$");
  t2.exports = { start: r2(1), end: r2(2), trim: r2(3) };
}, function(t2, e2) {
  t2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
}, function(t2, e2, n2) {
  var r2 = n2(2), o2 = n2(12), i2 = n2(73), a = o2("species");
  t2.exports = function(e3) {
    return 51 <= i2 || !r2(function() {
      var t3 = [];
      return (t3.constructor = {})[a] = function() {
        return { foo: 1 };
      }, t3[e3](Boolean).foo !== 1;
    });
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(1), i2 = n2(70), a = n2(30), n2 = n2(117), c = o2([].join), i2 = i2 != Object, n2 = n2("join", ",");
  r2({ target: "Array", proto: true, forced: i2 || !n2 }, { join: function(t3) {
    return c(a(this), t3 === void 0 ? "," : t3);
  } });
}, function(t2, e2, n2) {
  var r2 = n2(73), n2 = n2(2);
  t2.exports = !!Object.getOwnPropertySymbols && !n2(function() {
    var t3 = Symbol();
    return !String(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && r2 && r2 < 41;
  });
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(97), n2 = "__core-js_shared__", n2 = r2[n2] || o2(n2, {});
  t2.exports = n2;
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = Object.defineProperty;
  t2.exports = function(e3, n3) {
    try {
      o2(r2, e3, { value: n3, configurable: true, writable: true });
    } catch (t3) {
      r2[e3] = n3;
    }
    return n3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), n2 = n2(19), o2 = r2.document, i2 = n2(o2) && n2(o2.createElement);
  t2.exports = function(t3) {
    return i2 ? o2.createElement(t3) : {};
  };
}, function(t2, e2, n2) {
  var r2 = n2(1), o2 = n2(14), n2 = n2(96), i2 = r2(Function.toString);
  o2(n2.inspectSource) || (n2.inspectSource = function(t3) {
    return i2(t3);
  }), t2.exports = n2.inspectSource;
}, function(t2, e2, n2) {
  var r2 = n2(79), o2 = Math.max, i2 = Math.min;
  t2.exports = function(t3, e3) {
    t3 = r2(t3);
    return t3 < 0 ? o2(t3 + e3, 0) : i2(t3, e3);
  };
}, function(t2, e2) {
  t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function(t2, e2) {
  e2.f = Object.getOwnPropertySymbols;
}, function(t2, e2, n2) {
  var o2 = n2(1), i2 = n2(17), a = n2(154);
  t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var n3, r2 = false, t3 = {};
    try {
      (n3 = o2(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(t3, []), r2 = t3 instanceof Array;
    } catch (t4) {
    }
    return function(t4, e3) {
      return i2(t4), a(e3), r2 ? n3(t4, e3) : t4.__proto__ = e3, t4;
    };
  }() : void 0);
}, function(t2, e2, n2) {
  var r2 = {};
  r2[n2(12)("toStringTag")] = "z", t2.exports = String(r2) === "[object z]";
}, function(t2, e2, n2) {
  n2 = n2(1);
  t2.exports = n2([].slice);
}, function(t2, e2, n2) {
  var r2 = n2(48), o2 = n2(30), i2 = n2(54).f, a = n2(107), c = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  t2.exports.f = function(t3) {
    return c && r2(t3) == "Window" ? function(t4) {
      try {
        return i2(t4);
      } catch (t5) {
        return a(c);
      }
    }(t3) : i2(o2(t3));
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), s = n2(100), u = n2(46), l = n2(66), f = r2.Array, d = Math.max;
  t2.exports = function(t3, e3, n3) {
    for (var r3 = u(t3), o2 = s(e3, r3), i2 = s(n3 === void 0 ? r3 : n3, r3), a = f(d(i2 - o2, 0)), c = 0; o2 < i2; o2++, c++)
      l(a, c, t3[o2]);
    return a.length = c, a;
  };
}, function(t2, e2, n2) {
  function m() {
    return this;
  }
  var g = n2(3), y = n2(21), b = n2(61), r2 = n2(63), _ = n2(14), w = n2(161), O = n2(81), k = n2(103), C = n2(86), S = n2(45), E = n2(37), o2 = n2(12), x = n2(67), n2 = n2(133), j = r2.PROPER, T = r2.CONFIGURABLE, A = n2.IteratorPrototype, D = n2.BUGGY_SAFARI_ITERATORS, P = o2("iterator"), M = "values", I = "entries";
  t2.exports = function(t3, e3, n3, r3, o3, i2, a) {
    w(n3, e3, r3);
    function c(t4) {
      if (t4 === o3 && v)
        return v;
      if (!D && t4 in h2)
        return h2[t4];
      switch (t4) {
        case "keys":
        case M:
        case I:
          return function() {
            return new n3(this, t4);
          };
      }
      return function() {
        return new n3(this);
      };
    }
    var s, u, l, f = e3 + " Iterator", d = false, h2 = t3.prototype, p2 = h2[P] || h2["@@iterator"] || o3 && h2[o3], v = !D && p2 || c(o3), r3 = e3 == "Array" && h2.entries || p2;
    if (r3 && (s = O(r3.call(new t3()))) !== Object.prototype && s.next && (b || O(s) === A || (k ? k(s, A) : _(s[P]) || E(s, P, m)), C(s, f, true, true), b && (x[f] = m)), j && o3 == M && p2 && p2.name !== M && (!b && T ? S(h2, "name", M) : (d = true, v = function() {
      return y(p2, this);
    })), o3)
      if (u = { values: c(M), keys: i2 ? v : c("keys"), entries: c(I) }, a)
        for (l in u)
          !D && !d && l in h2 || E(h2, l, u[l]);
      else
        g({ target: e3, proto: true, forced: D || d }, u);
    return b && !a || h2[P] === v || E(h2, P, v, { name: o3 }), x[e3] = v, u;
  };
}, function(t2, e2, n2) {
  var r2 = n2(17);
  t2.exports = function() {
    var t3 = r2(this), e3 = "";
    return t3.global && (e3 += "g"), t3.ignoreCase && (e3 += "i"), t3.multiline && (e3 += "m"), t3.dotAll && (e3 += "s"), t3.unicode && (e3 += "u"), t3.sticky && (e3 += "y"), e3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(2), o2 = n2(0).RegExp, i2 = r2(function() {
    var t3 = o2("a", "y");
    return t3.lastIndex = 2, t3.exec("abcd") != null;
  }), n2 = i2 || r2(function() {
    return !o2("a", "y").sticky;
  }), r2 = i2 || r2(function() {
    var t3 = o2("^r", "gy");
    return t3.lastIndex = 2, t3.exec("str") != null;
  });
  t2.exports = { BROKEN_CARET: r2, MISSED_STICKY: n2, UNSUPPORTED_Y: i2 };
}, function(t2, e2, n2) {
  n2(16);
  var s = n2(1), u = n2(37), l = n2(89), f = n2(2), d = n2(12), h2 = n2(45), p2 = d("species"), v = RegExp.prototype;
  t2.exports = function(n3, t3, e3, r2) {
    var a, o2 = d(n3), c = !f(function() {
      var t4 = {};
      return t4[o2] = function() {
        return 7;
      }, ""[n3](t4) != 7;
    }), i2 = c && !f(function() {
      var t4 = false, e4 = /a/;
      return n3 === "split" && ((e4 = { constructor: {} }).constructor[p2] = function() {
        return e4;
      }, e4.flags = "", e4[o2] = /./[o2]), e4.exec = function() {
        return t4 = true, null;
      }, e4[o2](""), !t4;
    });
    c && i2 && !e3 || (a = s(/./[o2]), t3 = t3(o2, ""[n3], function(t4, e4, n4, r3, o3) {
      var i3 = s(t4), t4 = e4.exec;
      return t4 === l || t4 === v.exec ? c && !o3 ? { done: true, value: a(e4, n4, r3) } : { done: true, value: i3(n4, e4, r3) } : { done: false };
    }), u(String.prototype, n3, t3[0]), u(v, o2, t3[1])), r2 && h2(v[o2], "sham", true);
  };
}, function(t2, e2, n2) {
  var r2 = n2(134).charAt;
  t2.exports = function(t3, e3, n3) {
    return e3 + (n3 ? r2(t3, e3).length : 1);
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(21), i2 = n2(17), a = n2(14), c = n2(48), s = n2(89), u = r2.TypeError;
  t2.exports = function(t3, e3) {
    var n3 = t3.exec;
    if (a(n3)) {
      n3 = o2(n3, t3, e3);
      return n3 !== null && i2(n3), n3;
    }
    if (c(t3) === "RegExp")
      return o2(s, t3, e3);
    throw u("RegExp#exec called on incompatible receiver");
  };
}, function(t2, e2, n2) {
  var r2 = n2(19), o2 = n2(48), i2 = n2(12)("match");
  t2.exports = function(t3) {
    var e3;
    return r2(t3) && ((e3 = t3[i2]) !== void 0 ? !!e3 : o2(t3) == "RegExp");
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), n2 = n2(164);
  r2({ target: "Number", stat: true, forced: Number.parseFloat != n2 }, { parseFloat: n2 });
}, function(t2, e2, n2) {
  var i2 = n2(14), a = n2(19), c = n2(103);
  t2.exports = function(t3, e3, n3) {
    var r2, o2;
    return c && i2(r2 = e3.constructor) && r2 !== n3 && a(o2 = r2.prototype) && o2 !== n3.prototype && c(t3, o2), t3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(2);
  t2.exports = function(t3, e3) {
    var n3 = [][t3];
    return !!n3 && r2(function() {
      n3.call(null, e3 || function() {
        throw 1;
      }, 1);
    });
  };
}, function(t2, e2, n2) {
  n2(142)("Set", function(t3) {
    return function() {
      return t3(this, arguments.length ? arguments[0] : void 0);
    };
  }, n2(150));
}, function(t2, e2, n2) {
  var r2 = n2(82), o2 = n2(53), i2 = n2(67), a = n2(12)("iterator");
  t2.exports = function(t3) {
    if (t3 != null)
      return o2(t3, a) || o2(t3, "@@iterator") || i2[r2(t3)];
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), n2 = n2(176);
  r2({ target: "Number", stat: true, forced: Number.parseInt != n2 }, { parseInt: n2 });
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(21), i2 = n2(19), a = n2(72), c = n2(53), s = n2(152), n2 = n2(12), u = r2.TypeError, l = n2("toPrimitive");
  t2.exports = function(t3, e3) {
    if (!i2(t3) || a(t3))
      return t3;
    var n3 = c(t3, l);
    if (n3) {
      if (n3 = o2(n3, t3, e3 = e3 === void 0 ? "default" : e3), !i2(n3) || a(n3))
        return n3;
      throw u("Can't convert object to primitive value");
    }
    return s(t3, e3 = e3 === void 0 ? "number" : e3);
  };
}, function(t2, e2, n2) {
  n2 = n2(95);
  t2.exports = n2 && !Symbol.sham && typeof Symbol.iterator == "symbol";
}, function(t2, e2, n2) {
  var r2 = n2(18), o2 = n2(2), i2 = n2(98);
  t2.exports = !r2 && !o2(function() {
    return Object.defineProperty(i2("div"), "a", { get: function() {
      return 7;
    } }).a != 7;
  });
}, function(t2, e2, n2) {
  var c = n2(20), s = n2(125), u = n2(42), l = n2(25);
  t2.exports = function(t3, e3) {
    for (var n3 = s(e3), r2 = l.f, o2 = u.f, i2 = 0; i2 < n3.length; i2++) {
      var a = n3[i2];
      c(t3, a) || r2(t3, a, o2(e3, a));
    }
  };
}, function(t2, e2, n2) {
  var r2 = n2(43), o2 = n2(1), i2 = n2(54), a = n2(102), c = n2(17), s = o2([].concat);
  t2.exports = r2("Reflect", "ownKeys") || function(t3) {
    var e3 = i2.f(c(t3)), n3 = a.f;
    return n3 ? s(e3, n3(t3)) : e3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(1), a = n2(20), c = n2(30), s = n2(127).indexOf, u = n2(62), l = r2([].push);
  t2.exports = function(t3, e3) {
    var n3, r3 = c(t3), o2 = 0, i2 = [];
    for (n3 in r3)
      !a(u, n3) && a(r3, n3) && l(i2, n3);
    for (; e3.length > o2; )
      a(r3, n3 = e3[o2++]) && (~s(i2, n3) || l(i2, n3));
    return i2;
  };
}, function(t2, e2, n2) {
  function r2(c) {
    return function(t3, e3, n3) {
      var r3, o2 = s(t3), i2 = l(o2), a = u(n3, i2);
      if (c && e3 != e3) {
        for (; a < i2; )
          if ((r3 = o2[a++]) != r3)
            return true;
      } else
        for (; a < i2; a++)
          if ((c || a in o2) && o2[a] === e3)
            return c || a || 0;
      return !c && -1;
    };
  }
  var s = n2(30), u = n2(100), l = n2(46);
  t2.exports = { includes: r2(true), indexOf: r2(false) };
}, function(t2, e2, n2) {
  n2 = n2(2);
  t2.exports = !n2(function() {
    function t3() {
    }
    return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
  });
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(84), i2 = n2(75), a = r2.TypeError;
  t2.exports = function(t3) {
    if (o2(t3))
      return t3;
    throw a(i2(t3) + " is not a constructor");
  };
}, function(t2, e2, n2) {
  n2 = n2(12);
  e2.f = n2;
}, function(t2, e2, n2) {
  var r2 = n2(159), o2 = n2(20), i2 = n2(130), a = n2(25).f;
  t2.exports = function(t3) {
    var e3 = r2.Symbol || (r2.Symbol = {});
    o2(e3, t3) || a(e3, t3, { value: i2.f(t3) });
  };
}, function(t2, e2, n2) {
  var r2 = n2(160);
  t2.exports = function(t3, e3) {
    return new (r2(t3))(e3 === 0 ? 0 : e3);
  };
}, function(t2, e2, n2) {
  var r2, o2 = n2(2), i2 = n2(14), a = n2(50), c = n2(81), s = n2(37), u = n2(12), l = n2(61), f = u("iterator"), n2 = false;
  [].keys && ("next" in (u = [].keys()) ? (u = c(c(u))) !== Object.prototype && (r2 = u) : n2 = true), r2 == null || o2(function() {
    var t3 = {};
    return r2[f].call(t3) !== t3;
  }) ? r2 = {} : l && (r2 = a(r2)), i2(r2[f]) || s(r2, f, function() {
    return this;
  }), t2.exports = { IteratorPrototype: r2, BUGGY_SAFARI_ITERATORS: n2 };
}, function(t2, e2, n2) {
  function r2(i2) {
    return function(t3, e3) {
      var n3, r3 = c(s(t3)), o3 = a(e3), t3 = r3.length;
      return o3 < 0 || t3 <= o3 ? i2 ? "" : void 0 : (e3 = l(r3, o3)) < 55296 || 56319 < e3 || o3 + 1 === t3 || (n3 = l(r3, o3 + 1)) < 56320 || 57343 < n3 ? i2 ? u(r3, o3) : e3 : i2 ? f(r3, o3, o3 + 2) : n3 - 56320 + (e3 - 55296 << 10) + 65536;
    };
  }
  var o2 = n2(1), a = n2(79), c = n2(22), s = n2(39), u = o2("".charAt), l = o2("".charCodeAt), f = o2("".slice);
  t2.exports = { codeAt: r2(false), charAt: r2(true) };
}, function(t2, e2) {
  t2.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
}, function(t2, e2, n2) {
  n2 = n2(98)("span").classList, n2 = n2 && n2.constructor && n2.constructor.prototype;
  t2.exports = n2 === Object.prototype ? void 0 : n2;
}, function(t2, e2, n2) {
  var r2 = n2(2), o2 = n2(0).RegExp;
  t2.exports = r2(function() {
    var t3 = o2(".", "s");
    return !(t3.dotAll && t3.exec("\n") && t3.flags === "s");
  });
}, function(t2, e2, n2) {
  var r2 = n2(2), o2 = n2(0).RegExp;
  t2.exports = r2(function() {
    var t3 = o2("(?<a>b)", "g");
    return t3.exec("b").groups.a !== "b" || "b".replace(t3, "$<a>c") !== "bc";
  });
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(114), i2 = r2.TypeError;
  t2.exports = function(t3) {
    if (o2(t3))
      throw i2("The method doesn't accept regular expressions");
    return t3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(12)("match");
  t2.exports = function(e3) {
    var n3 = /./;
    try {
      "/./"[e3](n3);
    } catch (t3) {
      try {
        return n3[r2] = false, "/./"[e3](n3);
      } catch (t4) {
      }
    }
    return false;
  };
}, function(t2, e2, n2) {
  var r2 = n2(43), o2 = n2(25), i2 = n2(12), a = n2(18), c = i2("species");
  t2.exports = function(t3) {
    var e3 = r2(t3), t3 = o2.f;
    a && e3 && !e3[c] && t3(e3, c, { configurable: true, get: function() {
      return this;
    } });
  };
}, function(t2, e2, n2) {
  var m = n2(3), g = n2(0), y = n2(1), b = n2(80), _ = n2(37), w = n2(143), O = n2(144), k = n2(148), C = n2(14), S = n2(19), E = n2(2), x = n2(149), j = n2(86), T = n2(116);
  t2.exports = function(t3, e3, n3) {
    function r2(t4) {
      var n4 = y(h2[t4]);
      _(h2, t4, t4 == "add" ? function(t5) {
        return n4(this, t5 === 0 ? 0 : t5), this;
      } : t4 == "delete" ? function(t5) {
        return !(l && !S(t5)) && n4(this, t5 === 0 ? 0 : t5);
      } : t4 == "get" ? function(t5) {
        return l && !S(t5) ? void 0 : n4(this, t5 === 0 ? 0 : t5);
      } : t4 == "has" ? function(t5) {
        return !(l && !S(t5)) && n4(this, t5 === 0 ? 0 : t5);
      } : function(t5, e4) {
        return n4(this, t5 === 0 ? 0 : t5, e4), this;
      });
    }
    var o2, i2, a, c, s, u = t3.indexOf("Map") !== -1, l = t3.indexOf("Weak") !== -1, f = u ? "set" : "add", d = g[t3], h2 = d && d.prototype, p2 = d, v = {};
    return b(t3, !C(d) || !(l || h2.forEach && !E(function() {
      new d().entries().next();
    }))) ? (p2 = n3.getConstructor(e3, t3, u, f), w.enable()) : b(t3, true) && (i2 = (o2 = new p2())[f](l ? {} : -0, 1) != o2, a = E(function() {
      o2.has(1);
    }), c = x(function(t4) {
      new d(t4);
    }), s = !l && E(function() {
      for (var t4 = new d(), e4 = 5; e4--; )
        t4[f](e4, e4);
      return !t4.has(-0);
    }), c || (((p2 = e3(function(t4, e4) {
      k(t4, h2);
      t4 = T(new d(), t4, p2);
      return e4 != null && O(e4, t4[f], { that: t4, AS_ENTRIES: u }), t4;
    })).prototype = h2).constructor = p2), (a || s) && (r2("delete"), r2("has"), u && r2("get")), (s || i2) && r2(f), l && h2.clear && delete h2.clear), v[t3] = p2, m({ global: true, forced: p2 != d }, v), j(p2, t3), l || n3.setStrong(p2, t3, u), p2;
  };
}, function(t2, e2, n2) {
  function r2(t3) {
    u(t3, m, { value: { objectID: "O" + g++, weakData: {} } });
  }
  var a = n2(3), c = n2(1), o2 = n2(62), i2 = n2(19), s = n2(20), u = n2(25).f, l = n2(54), f = n2(106), d = n2(167), h2 = n2(77), p2 = n2(169), v = false, m = h2("meta"), g = 0, y = t2.exports = { enable: function() {
    y.enable = function() {
    }, v = true;
    var o3 = l.f, i3 = c([].splice), t3 = {};
    t3[m] = 1, o3(t3).length && (l.f = function(t4) {
      for (var e3 = o3(t4), n3 = 0, r3 = e3.length; n3 < r3; n3++)
        if (e3[n3] === m) {
          i3(e3, n3, 1);
          break;
        }
      return e3;
    }, a({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: f.f }));
  }, fastKey: function(t3, e3) {
    if (!i2(t3))
      return typeof t3 == "symbol" ? t3 : (typeof t3 == "string" ? "S" : "P") + t3;
    if (!s(t3, m)) {
      if (!d(t3))
        return "F";
      if (!e3)
        return "E";
      r2(t3);
    }
    return t3[m].objectID;
  }, getWeakData: function(t3, e3) {
    if (!s(t3, m)) {
      if (!d(t3))
        return true;
      if (!e3)
        return false;
      r2(t3);
    }
    return t3[m].weakData;
  }, onFreeze: function(t3) {
    return p2 && v && d(t3) && !s(t3, m) && r2(t3), t3;
  } };
  o2[m] = true;
}, function(t2, e2, n2) {
  function m(t3, e3) {
    this.stopped = t3, this.result = e3;
  }
  var r2 = n2(0), g = n2(87), y = n2(21), b = n2(17), _ = n2(75), w = n2(145), O = n2(46), k = n2(44), C = n2(146), S = n2(119), E = n2(147), x = r2.TypeError, j = m.prototype;
  t2.exports = function(t3, e3, n3) {
    function r3(t4) {
      return i2 && E(i2, "normal", t4), new m(true, t4);
    }
    function o2(t4) {
      return d ? (b(t4), p2 ? v(t4[0], t4[1], r3) : v(t4[0], t4[1])) : p2 ? v(t4, r3) : v(t4);
    }
    var i2, a, c, s, u, l, f = n3 && n3.that, d = !(!n3 || !n3.AS_ENTRIES), h2 = !(!n3 || !n3.IS_ITERATOR), p2 = !(!n3 || !n3.INTERRUPTED), v = g(e3, f);
    if (h2)
      i2 = t3;
    else {
      if (!(h2 = S(t3)))
        throw x(_(t3) + " is not iterable");
      if (w(h2)) {
        for (a = 0, c = O(t3); a < c; a++)
          if ((s = o2(t3[a])) && k(j, s))
            return s;
        return new m(false);
      }
      i2 = C(t3, h2);
    }
    for (u = i2.next; !(l = y(u, i2)).done; ) {
      try {
        s = o2(l.value);
      } catch (t4) {
        E(i2, "throw", t4);
      }
      if (typeof s == "object" && s && k(j, s))
        return s;
    }
    return new m(false);
  };
}, function(t2, e2, n2) {
  var r2 = n2(12), o2 = n2(67), i2 = r2("iterator"), a = Array.prototype;
  t2.exports = function(t3) {
    return t3 !== void 0 && (o2.Array === t3 || a[i2] === t3);
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(21), i2 = n2(60), a = n2(17), c = n2(75), s = n2(119), u = r2.TypeError;
  t2.exports = function(t3, e3) {
    var n3 = arguments.length < 2 ? s(t3) : e3;
    if (i2(n3))
      return a(o2(n3, t3));
    throw u(c(t3) + " is not iterable");
  };
}, function(t2, e2, n2) {
  var i2 = n2(21), a = n2(17), c = n2(53);
  t2.exports = function(t3, e3, n3) {
    var r2, o2;
    a(t3);
    try {
      if (!(r2 = c(t3, "return"))) {
        if (e3 === "throw")
          throw n3;
        return n3;
      }
      r2 = i2(r2, t3);
    } catch (t4) {
      o2 = true, r2 = t4;
    }
    if (e3 === "throw")
      throw n3;
    if (o2)
      throw r2;
    return a(r2), n3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(44), i2 = r2.TypeError;
  t2.exports = function(t3, e3) {
    if (o2(e3, t3))
      return t3;
    throw i2("Incorrect invocation");
  };
}, function(t2, e2, n2) {
  var o2 = n2(12)("iterator"), i2 = false;
  try {
    var r2 = 0, a = { next: function() {
      return { done: !!r2++ };
    }, return: function() {
      i2 = true;
    } };
    a[o2] = function() {
      return this;
    }, Array.from(a, function() {
      throw 2;
    });
  } catch (t3) {
  }
  t2.exports = function(t3, e3) {
    if (!e3 && !i2)
      return false;
    var n3 = false;
    try {
      var r3 = {};
      r3[o2] = function() {
        return { next: function() {
          return { done: n3 = true };
        } };
      }, t3(r3);
    } catch (t4) {
    }
    return n3;
  };
}, function(t2, e2, n2) {
  var u = n2(25).f, l = n2(50), f = n2(170), d = n2(87), h2 = n2(148), p2 = n2(144), a = n2(108), c = n2(141), v = n2(18), m = n2(143).fastKey, n2 = n2(49), g = n2.set, y = n2.getterFor;
  t2.exports = { getConstructor: function(t3, n3, r2, o2) {
    function i2(t4, e3, n4) {
      var r3, o3 = s(t4), i3 = a2(t4, e3);
      return i3 ? i3.value = n4 : (o3.last = i3 = { index: r3 = m(e3, true), key: e3, value: n4, previous: n4 = o3.last, next: void 0, removed: false }, o3.first || (o3.first = i3), n4 && (n4.next = i3), v ? o3.size++ : t4.size++, r3 !== "F" && (o3.index[r3] = i3)), t4;
    }
    function a2(t4, e3) {
      var n4, r3 = s(t4);
      if ((t4 = m(e3)) !== "F")
        return r3.index[t4];
      for (n4 = r3.first; n4; n4 = n4.next)
        if (n4.key == e3)
          return n4;
    }
    var t3 = t3(function(t4, e3) {
      h2(t4, c2), g(t4, { type: n3, index: l(null), first: void 0, last: void 0, size: 0 }), v || (t4.size = 0), e3 != null && p2(e3, t4[o2], { that: t4, AS_ENTRIES: r2 });
    }), c2 = t3.prototype, s = y(n3);
    return f(c2, { clear: function() {
      for (var t4 = s(this), e3 = t4.index, n4 = t4.first; n4; )
        n4.removed = true, n4.previous && (n4.previous = n4.previous.next = void 0), delete e3[n4.index], n4 = n4.next;
      t4.first = t4.last = void 0, v ? t4.size = 0 : this.size = 0;
    }, delete: function(t4) {
      var e3, n4 = s(this), r3 = a2(this, t4);
      return r3 && (e3 = r3.next, t4 = r3.previous, delete n4.index[r3.index], r3.removed = true, t4 && (t4.next = e3), e3 && (e3.previous = t4), n4.first == r3 && (n4.first = e3), n4.last == r3 && (n4.last = t4), v ? n4.size-- : this.size--), !!r3;
    }, forEach: function(t4) {
      for (var e3, n4 = s(this), r3 = d(t4, 1 < arguments.length ? arguments[1] : void 0); e3 = e3 ? e3.next : n4.first; )
        for (r3(e3.value, e3.key, this); e3 && e3.removed; )
          e3 = e3.previous;
    }, has: function(t4) {
      return !!a2(this, t4);
    } }), f(c2, r2 ? { get: function(t4) {
      t4 = a2(this, t4);
      return t4 && t4.value;
    }, set: function(t4, e3) {
      return i2(this, t4 === 0 ? 0 : t4, e3);
    } } : { add: function(t4) {
      return i2(this, t4 = t4 === 0 ? 0 : t4, t4);
    } }), v && u(c2, "size", { get: function() {
      return s(this).size;
    } }), t3;
  }, setStrong: function(t3, e3, n3) {
    var r2 = e3 + " Iterator", o2 = y(e3), i2 = y(r2);
    a(t3, e3, function(t4, e4) {
      g(this, { type: r2, target: t4, state: o2(t4), kind: e4, last: void 0 });
    }, function() {
      for (var t4 = i2(this), e4 = t4.kind, n4 = t4.last; n4 && n4.removed; )
        n4 = n4.previous;
      return t4.target && (t4.last = n4 = n4 ? n4.next : t4.state.first) ? e4 == "keys" ? { value: n4.key, done: false } : e4 == "values" ? { value: n4.value, done: false } : { value: [n4.key, n4.value], done: false } : { value: t4.target = void 0, done: true };
    }, n3 ? "entries" : "values", !n3, true), c(e3);
  } };
}, function(t2, e2) {
  var n2 = function() {
    return this;
  }();
  try {
    n2 = n2 || new Function("return this")();
  } catch (t3) {
    typeof window == "object" && (n2 = window);
  }
  t2.exports = n2;
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(21), i2 = n2(14), a = n2(19), c = r2.TypeError;
  t2.exports = function(t3, e3) {
    var n3, r3;
    if (e3 === "string" && i2(n3 = t3.toString) && !a(r3 = o2(n3, t3)))
      return r3;
    if (i2(n3 = t3.valueOf) && !a(r3 = o2(n3, t3)))
      return r3;
    if (e3 !== "string" && i2(n3 = t3.toString) && !a(r3 = o2(n3, t3)))
      return r3;
    throw c("Can't convert object to primitive value");
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(14), n2 = n2(99), r2 = r2.WeakMap;
  t2.exports = o2(r2) && /native code/.test(n2(r2));
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(14), i2 = r2.String, a = r2.TypeError;
  t2.exports = function(t3) {
    if (typeof t3 == "object" || o2(t3))
      return t3;
    throw a("Can't set " + i2(t3) + " as a prototype");
  };
}, function(t2, e2, n2) {
  var r2 = n2(104), o2 = n2(82);
  t2.exports = r2 ? {}.toString : function() {
    return "[object " + o2(this) + "]";
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(1), i2 = n2(60), a = n2(19), c = n2(20), s = n2(105), u = r2.Function, l = o2([].concat), f = o2([].join), d = {};
  t2.exports = u.bind || function(e3) {
    var n3 = i2(this), t3 = n3.prototype, r3 = s(arguments, 1), o3 = function() {
      var t4 = l(r3, s(arguments));
      return this instanceof o3 ? function(t5, e4, n4) {
        if (!c(d, e4)) {
          for (var r4 = [], o4 = 0; o4 < e4; o4++)
            r4[o4] = "a[" + o4 + "]";
          d[e4] = u("C,a", "return new C(" + f(r4, ",") + ")");
        }
        return d[e4](t5, n4);
      }(n3, t4.length, t4) : n3.apply(e3, t4);
    };
    return a(t3) && (o3.prototype = t3), o3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(18), c = n2(25), s = n2(17), u = n2(30), l = n2(65);
  t2.exports = r2 ? Object.defineProperties : function(t3, e3) {
    s(t3);
    for (var n3, r3 = u(e3), o2 = l(e3), i2 = o2.length, a = 0; a < i2; )
      c.f(t3, n3 = o2[a++], r3[n3]);
    return t3;
  };
}, function(t2, e2, n2) {
  n2 = n2(43);
  t2.exports = n2("document", "documentElement");
}, function(t2, e2, n2) {
  n2 = n2(0);
  t2.exports = n2;
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(85), i2 = n2(84), a = n2(19), c = n2(12)("species"), s = r2.Array;
  t2.exports = function(t3) {
    var e3;
    return o2(t3) && (e3 = t3.constructor, (i2(e3) && (e3 === s || o2(e3.prototype)) || a(e3) && (e3 = e3[c]) === null) && (e3 = void 0)), e3 === void 0 ? s : e3;
  };
}, function(t2, e2, n2) {
  function o2() {
    return this;
  }
  var i2 = n2(133).IteratorPrototype, a = n2(50), c = n2(59), s = n2(86), u = n2(67);
  t2.exports = function(t3, e3, n3, r2) {
    e3 += " Iterator";
    return t3.prototype = a(i2, { next: c(+!r2, n3) }), s(t3, e3, false, true), u[e3] = o2, t3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(17), o2 = n2(129), i2 = n2(12)("species");
  t2.exports = function(t3, e3) {
    var n3, t3 = r2(t3).constructor;
    return t3 === void 0 || (n3 = r2(t3)[i2]) == null ? e3 : o2(n3);
  };
}, function(t2, e2, n2) {
  var r2 = n2(63).PROPER, o2 = n2(2), i2 = n2(92);
  t2.exports = function(t3) {
    return o2(function() {
      return !!i2[t3]() || "\u200B\x85\u180E"[t3]() !== "\u200B\x85\u180E" || r2 && i2[t3].name !== t3;
    });
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(2), i2 = n2(1), a = n2(22), c = n2(91).trim, n2 = n2(92), s = i2("".charAt), u = r2.parseFloat, r2 = r2.Symbol, l = r2 && r2.iterator, o2 = 1 / u(n2 + "-0") != -1 / 0 || l && !o2(function() {
    u(Object(l));
  });
  t2.exports = o2 ? function(t3) {
    var e3 = c(a(t3)), t3 = u(e3);
    return t3 === 0 && s(e3, 0) == "-" ? -0 : t3;
  } : u;
}, function(t2, e2, n2) {
  n2 = n2(1);
  t2.exports = n2(1 .valueOf);
}, function(t2, e2, n2) {
  var r2 = n2(55).forEach, n2 = n2(117)("forEach");
  t2.exports = n2 ? [].forEach : function(t3) {
    return r2(this, t3, 1 < arguments.length ? arguments[1] : void 0);
  };
}, function(t2, e2, n2) {
  var r2 = n2(2), o2 = n2(19), i2 = n2(48), a = n2(168), c = Object.isExtensible, r2 = r2(function() {
  });
  t2.exports = r2 || a ? function(t3) {
    return !!o2(t3) && ((!a || i2(t3) != "ArrayBuffer") && (!c || c(t3)));
  } : c;
}, function(t2, e2, n2) {
  n2 = n2(2);
  t2.exports = n2(function() {
    var t3;
    typeof ArrayBuffer == "function" && (t3 = new ArrayBuffer(8), Object.isExtensible(t3) && Object.defineProperty(t3, "a", { value: 8 }));
  });
}, function(t2, e2, n2) {
  n2 = n2(2);
  t2.exports = !n2(function() {
    return Object.isExtensible(Object.preventExtensions({}));
  });
}, function(t2, e2, n2) {
  var o2 = n2(37);
  t2.exports = function(t3, e3, n3) {
    for (var r2 in e3)
      o2(t3, r2, e3[r2], n3);
    return t3;
  };
}, function(t2, e2, n2) {
  var r2 = n2(1), o2 = n2(36), d = Math.floor, h2 = r2("".charAt), p2 = r2("".replace), v = r2("".slice), m = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, g = /\$([$&'`]|\d{1,2})/g;
  t2.exports = function(i2, a, c, s, u, t3) {
    var l = c + i2.length, f = s.length, e3 = g;
    return u !== void 0 && (u = o2(u), e3 = m), p2(t3, e3, function(t4, e4) {
      var n3;
      switch (h2(e4, 0)) {
        case "$":
          return "$";
        case "&":
          return i2;
        case "`":
          return v(a, 0, c);
        case "'":
          return v(a, l);
        case "<":
          n3 = u[v(e4, 1, -1)];
          break;
        default:
          var r3 = +e4;
          if (r3 == 0)
            return t4;
          if (f < r3) {
            var o3 = d(r3 / 10);
            return o3 === 0 ? t4 : o3 <= f ? s[o3 - 1] === void 0 ? h2(e4, 1) : s[o3 - 1] + h2(e4, 1) : t4;
          }
          n3 = s[r3 - 1];
      }
      return n3 === void 0 ? "" : n3;
    });
  };
}, function(t2, e2, n2) {
  var r2 = n2(0), d = n2(87), h2 = n2(21), p2 = n2(36), v = n2(173), m = n2(145), g = n2(84), y = n2(46), b = n2(66), _ = n2(146), w = n2(119), O = r2.Array;
  t2.exports = function(t3) {
    var e3 = p2(t3), n3 = g(this), t3 = arguments.length, r3 = 1 < t3 ? arguments[1] : void 0, o2 = r3 !== void 0;
    o2 && (r3 = d(r3, 2 < t3 ? arguments[2] : void 0));
    var i2, a, c, s, u, l, t3 = w(e3), f = 0;
    if (!t3 || this == O && m(t3))
      for (i2 = y(e3), a = n3 ? new this(i2) : O(i2); f < i2; f++)
        l = o2 ? r3(e3[f], f) : e3[f], b(a, f, l);
    else
      for (u = (s = _(e3, t3)).next, a = n3 ? new this() : []; !(c = h2(u, s)).done; f++)
        l = o2 ? v(s, r3, [c.value, f], true) : c.value, b(a, f, l);
    return a.length = f, a;
  };
}, function(t2, e2, n2) {
  var o2 = n2(17), i2 = n2(147);
  t2.exports = function(e3, t3, n3, r2) {
    try {
      return r2 ? t3(o2(n3)[0], n3[1]) : t3(n3);
    } catch (t4) {
      i2(e3, "throw", t4);
    }
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(2), n2 = n2(106).f;
  r2({ target: "Object", stat: true, forced: o2(function() {
    return !Object.getOwnPropertyNames(1);
  }) }, { getOwnPropertyNames: n2 });
}, function(t2, e2, n2) {
  n2(142)("Map", function(t3) {
    return function() {
      return t3(this, arguments.length ? arguments[0] : void 0);
    };
  }, n2(150));
}, function(t2, e2, n2) {
  var r2 = n2(0), o2 = n2(2), i2 = n2(1), a = n2(22), c = n2(91).trim, n2 = n2(92), s = r2.parseInt, r2 = r2.Symbol, u = r2 && r2.iterator, l = /^[+-]?0x/i, f = i2(l.exec), o2 = s(n2 + "08") !== 8 || s(n2 + "0x16") !== 22 || u && !o2(function() {
    s(Object(u));
  });
  t2.exports = o2 ? function(t3, e3) {
    t3 = c(a(t3));
    return s(t3, e3 >>> 0 || (f(l, t3) ? 16 : 10));
  } : s;
}, function(t2, e2, n2) {
  var r2 = n2(20);
  t2.exports = function(t3) {
    return t3 !== void 0 && (r2(t3, "value") || r2(t3, "writable"));
  };
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(1), c = n2(60), s = n2(36), u = n2(46), l = n2(22), i2 = n2(2), f = n2(179), a = n2(117), d = n2(180), h2 = n2(181), p2 = n2(73), v = n2(182), m = [], g = o2(m.sort), y = o2(m.push), n2 = i2(function() {
    m.sort(void 0);
  }), o2 = i2(function() {
    m.sort(null);
  }), a = a("sort"), b = !i2(function() {
    if (p2)
      return p2 < 70;
    if (!(d && 3 < d)) {
      if (h2)
        return true;
      if (v)
        return v < 603;
      for (var t3, e3, n3, r3 = "", o3 = 65; o3 < 76; o3++) {
        switch (t3 = String.fromCharCode(o3), o3) {
          case 66:
          case 69:
          case 70:
          case 72:
            e3 = 3;
            break;
          case 68:
          case 71:
            e3 = 4;
            break;
          default:
            e3 = 2;
        }
        for (n3 = 0; n3 < 47; n3++)
          m.push({ k: t3 + n3, v: e3 });
      }
      for (m.sort(function(t4, e4) {
        return e4.v - t4.v;
      }), n3 = 0; n3 < m.length; n3++)
        t3 = m[n3].k.charAt(0), r3.charAt(r3.length - 1) !== t3 && (r3 += t3);
      return r3 !== "DGBEFHACIJK";
    }
  });
  r2({ target: "Array", proto: true, forced: n2 || !o2 || !a || !b }, { sort: function(t3) {
    t3 !== void 0 && c(t3);
    var e3 = s(this);
    if (b)
      return t3 === void 0 ? g(e3) : g(e3, t3);
    for (var n3, r3, o3 = [], i3 = u(e3), a2 = 0; a2 < i3; a2++)
      a2 in e3 && y(o3, e3[a2]);
    for (f(o3, (r3 = t3, function(t4, e4) {
      return e4 === void 0 ? -1 : t4 === void 0 ? 1 : r3 !== void 0 ? +r3(t4, e4) || 0 : l(t4) > l(e4) ? 1 : -1;
    })), n3 = o3.length, a2 = 0; a2 < n3; )
      e3[a2] = o3[a2++];
    for (; a2 < i3; )
      delete e3[a2++];
    return e3;
  } });
}, function(t2, e2, n2) {
  function o2(t3, e3) {
    var n3 = t3.length, r2 = a(n3 / 2);
    return n3 < 8 ? function(t4, e4) {
      var n4 = t4.length, r3 = 1, o3, i3;
      while (r3 < n4) {
        i3 = r3;
        o3 = t4[r3];
        while (i3 && e4(t4[i3 - 1], o3) > 0)
          t4[i3] = t4[--i3];
        if (i3 !== r3++)
          t4[i3] = o3;
      }
      return t4;
    }(t3, e3) : function(t4, e4, n4, r3) {
      var o3 = e4.length, i3 = n4.length, a2 = 0, c = 0;
      while (a2 < o3 || c < i3)
        t4[a2 + c] = a2 < o3 && c < i3 ? r3(e4[a2], n4[c]) <= 0 ? e4[a2++] : n4[c++] : a2 < o3 ? e4[a2++] : n4[c++];
      return t4;
    }(t3, o2(i2(t3, 0, r2), e3), o2(i2(t3, r2), e3), e3);
  }
  var i2 = n2(107), a = Math.floor;
  t2.exports = o2;
}, function(t2, e2, n2) {
  n2 = n2(74).match(/firefox\/(\d+)/i);
  t2.exports = !!n2 && +n2[1];
}, function(t2, e2, n2) {
  n2 = n2(74);
  t2.exports = /MSIE|Trident/.test(n2);
}, function(t2, e2, n2) {
  n2 = n2(74).match(/AppleWebKit\/(\d+)\./);
  t2.exports = !!n2 && +n2[1];
}, function(t2, e2, n2) {
  var r2 = n2(3), n2 = n2(184);
  r2({ target: "Object", stat: true, forced: Object.assign !== n2 }, { assign: n2 });
}, function(t2, e2, n2) {
  var d = n2(18), r2 = n2(1), h2 = n2(21), o2 = n2(2), p2 = n2(65), v = n2(102), m = n2(69), g = n2(36), y = n2(70), i2 = Object.assign, a = Object.defineProperty, b = r2([].concat);
  t2.exports = !i2 || o2(function() {
    if (d && i2({ b: 1 }, i2(a({}, "a", { enumerable: true, get: function() {
      a(this, "b", { value: 3, enumerable: false });
    } }), { b: 2 })).b !== 1)
      return true;
    var t3 = {}, e3 = {}, n3 = Symbol(), r3 = "abcdefghijklmnopqrst";
    return t3[n3] = 7, r3.split("").forEach(function(t4) {
      e3[t4] = t4;
    }), i2({}, t3)[n3] != 7 || p2(i2({}, e3)).join("") != r3;
  }) ? function(t3, e3) {
    for (var n3 = g(t3), r3 = arguments.length, o3 = 1, i3 = v.f, a2 = m.f; o3 < r3; )
      for (var c, s = y(arguments[o3++]), u = i3 ? b(p2(s), i3(s)) : p2(s), l = u.length, f = 0; f < l; )
        c = u[f++], d && !h2(a2, s, c) || (n3[c] = s[c]);
    return n3;
  } : i2;
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(55).findIndex, i2 = n2(88), n2 = "findIndex", a = true;
  n2 in [] && Array(1)[n2](function() {
    a = false;
  }), r2({ target: "Array", proto: true, forced: a }, { findIndex: function(t3) {
    return o2(this, t3, 1 < arguments.length ? arguments[1] : void 0);
  } }), i2(n2);
}, function(t2, e2, n2) {
  n2(3)({ target: "Number", stat: true }, { isNaN: function(t3) {
    return t3 != t3;
  } });
}, function(t2, e2, n2) {
  var r2 = n2(3), o2 = n2(188).values;
  r2({ target: "Object", stat: true }, { values: function(t3) {
    return o2(t3);
  } });
}, function(t2, e2, n2) {
  function r2(c) {
    return function(t3) {
      for (var e3, n3 = l(t3), r3 = u(n3), o3 = r3.length, i2 = 0, a = []; i2 < o3; )
        e3 = r3[i2++], s && !f(n3, e3) || d(a, c ? [e3, n3[e3]] : n3[e3]);
      return a;
    };
  }
  var s = n2(18), o2 = n2(1), u = n2(65), l = n2(30), f = o2(n2(69).f), d = o2([].push);
  t2.exports = { entries: r2(true), values: r2(false) };
}, function(t2, e2, n2) {
  var n2 = n2(3), r2 = Math.ceil, o2 = Math.floor;
  n2({ target: "Math", stat: true }, { trunc: function(t3) {
    return (0 < t3 ? o2 : r2)(t3);
  } });
}, , function(t2, e2, n2) {
  n2.r(e2);
  var i2 = {};
  n2.r(i2), n2.d(i2, "top", function() {
    return st;
  }), n2.d(i2, "bottom", function() {
    return ut;
  }), n2.d(i2, "right", function() {
    return lt;
  }), n2.d(i2, "left", function() {
    return ft;
  }), n2.d(i2, "auto", function() {
    return dt;
  }), n2.d(i2, "basePlacements", function() {
    return ht;
  }), n2.d(i2, "start", function() {
    return pt;
  }), n2.d(i2, "end", function() {
    return vt;
  }), n2.d(i2, "clippingParents", function() {
    return mt;
  }), n2.d(i2, "viewport", function() {
    return gt;
  }), n2.d(i2, "popper", function() {
    return yt;
  }), n2.d(i2, "reference", function() {
    return bt;
  }), n2.d(i2, "variationPlacements", function() {
    return _t;
  }), n2.d(i2, "placements", function() {
    return wt;
  }), n2.d(i2, "beforeRead", function() {
    return Ot;
  }), n2.d(i2, "read", function() {
    return kt;
  }), n2.d(i2, "afterRead", function() {
    return Ct;
  }), n2.d(i2, "beforeMain", function() {
    return St;
  }), n2.d(i2, "main", function() {
    return Et;
  }), n2.d(i2, "afterMain", function() {
    return xt;
  }), n2.d(i2, "beforeWrite", function() {
    return jt;
  }), n2.d(i2, "write", function() {
    return Tt;
  }), n2.d(i2, "afterWrite", function() {
    return At;
  }), n2.d(i2, "modifierPhases", function() {
    return Dt;
  }), n2.d(i2, "applyStyles", function() {
    return Rt;
  }), n2.d(i2, "arrow", function() {
    return ee;
  }), n2.d(i2, "computeStyles", function() {
    return ie;
  }), n2.d(i2, "eventListeners", function() {
    return ce;
  }), n2.d(i2, "flip", function() {
    return we;
  }), n2.d(i2, "hide", function() {
    return Ce;
  }), n2.d(i2, "offset", function() {
    return Se;
  }), n2.d(i2, "popperOffsets", function() {
    return Ee;
  }), n2.d(i2, "preventOverflow", function() {
    return xe;
  }), n2.d(i2, "popperGenerator", function() {
    return Pe;
  }), n2.d(i2, "detectOverflow", function() {
    return _e;
  }), n2.d(i2, "createPopperBase", function() {
    return Me;
  }), n2.d(i2, "createPopper", function() {
    return Ie;
  }), n2.d(i2, "createPopperLite", function() {
    return Le;
  });
  n2(29), n2(31), n2(4), n2(32), n2(7), n2(10), n2(11), n2(5), n2(6), n2(8), n2(16), n2(68), n2(33), n2(51), n2(56), n2(38), n2(90), n2(115), n2(34), n2(9), n2(13), n2(52), n2(40), n2(26);
  function r2(t3) {
    return (r2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function f(t3) {
    return (t3 = k(t3)) && document.querySelector(t3) ? t3 : null;
  }
  function a(t3) {
    return (t3 = k(t3)) ? document.querySelector(t3) : null;
  }
  function c(t3) {
    t3.dispatchEvent(new Event(O));
  }
  function d(t3) {
    return C(t3) ? t3.jquery ? t3[0] : t3 : typeof t3 == "string" && 0 < t3.length ? document.querySelector(t3) : null;
  }
  function h2(o3, i3, a2) {
    Object.keys(a2).forEach(function(t3) {
      var e3 = a2[t3], n3 = i3[t3], r3 = n3 && C(n3) ? "element" : (r3 = n3) == null ? "".concat(r3) : {}.toString.call(r3).match(/\s([a-z]+)/i)[1].toLowerCase();
      if (!new RegExp(e3).test(r3))
        throw new TypeError("".concat(o3.toUpperCase(), ': Option "').concat(t3, '" provided type "').concat(r3, '" but expected type "').concat(e3, '".'));
    });
  }
  function u(t3) {
    return !(!C(t3) || t3.getClientRects().length === 0) && getComputedStyle(t3).getPropertyValue("visibility") === "visible";
  }
  function o2(t3) {
    return !t3 || t3.nodeType !== Node.ELEMENT_NODE || (!!t3.classList.contains("disabled") || (t3.disabled !== void 0 ? t3.disabled : t3.hasAttribute("disabled") && t3.getAttribute("disabled") !== "false"));
  }
  function s(t3) {
    return document.documentElement.attachShadow ? typeof t3.getRootNode != "function" ? t3 instanceof ShadowRoot ? t3 : t3.parentNode ? s(t3.parentNode) : null : (t3 = t3.getRootNode()) instanceof ShadowRoot ? t3 : null : null;
  }
  function l() {
  }
  function p2(t3) {
    t3.offsetHeight;
  }
  function v() {
    var t3 = window.jQuery;
    return t3 && !document.body.hasAttribute("data-bs-no-jquery") ? t3 : null;
  }
  function m() {
    return document.documentElement.dir === "rtl";
  }
  function g(r3) {
    var t3;
    t3 = function() {
      var t4, e3, n3 = v();
      n3 && (t4 = r3.NAME, e3 = n3.fn[t4], n3.fn[t4] = r3.jQueryInterface, n3.fn[t4].Constructor = r3, n3.fn[t4].noConflict = function() {
        return n3.fn[t4] = e3, r3.jQueryInterface;
      });
    }, document.readyState === "loading" ? (S.length || document.addEventListener("DOMContentLoaded", function() {
      S.forEach(function(t4) {
        return t4();
      });
    }), S.push(t3)) : t3();
  }
  function y(t3) {
    typeof t3 == "function" && t3();
  }
  function b(n3, r3) {
    var t3, o3;
    2 < arguments.length && arguments[2] !== void 0 && !arguments[2] ? y(n3) : (t3 = function(t4) {
      if (!t4)
        return 0;
      var e3 = window.getComputedStyle(t4), n4 = e3.transitionDuration, r4 = e3.transitionDelay, t4 = Number.parseFloat(n4), e3 = Number.parseFloat(r4);
      return t4 || e3 ? (n4 = n4.split(",")[0], r4 = r4.split(",")[0], (Number.parseFloat(n4) + Number.parseFloat(r4)) * w) : 0;
    }(r3) + 5, o3 = false, r3.addEventListener(O, function t4(e3) {
      e3.target === r3 && (o3 = true, r3.removeEventListener(O, t4), y(n3));
    }), setTimeout(function() {
      o3 || c(r3);
    }, t3));
  }
  function _(t3, e3, n3, r3) {
    var o3 = t3.indexOf(e3);
    return o3 === -1 ? t3[!n3 && r3 ? t3.length - 1 : 0] : (e3 = t3.length, o3 += n3 ? 1 : -1, r3 && (o3 = (o3 + e3) % e3), t3[Math.max(0, Math.min(o3, e3 - 1))]);
  }
  var w = 1e3, O = "transitionend", k = function(t3) {
    var e3 = t3.getAttribute("data-bs-target");
    if (!e3 || e3 === "#") {
      t3 = t3.getAttribute("href");
      if (!t3 || !t3.includes("#") && !t3.startsWith("."))
        return null;
      e3 = (t3 = t3.includes("#") && !t3.startsWith("#") ? "#".concat(t3.split("#")[1]) : t3) && t3 !== "#" ? t3.trim() : null;
    }
    return e3;
  }, C = function(t3) {
    return !(!t3 || r2(t3) !== "object") && (t3 = t3.jquery !== void 0 ? t3[0] : t3).nodeType !== void 0;
  }, S = [];
  n2(118), n2(47), n2(27), n2(41), n2(35);
  function E(t3, e3) {
    return function(t4) {
      if (Array.isArray(t4))
        return t4;
    }(t3) || function(t4, e4) {
      var n3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
      if (n3 != null) {
        var r3, o3, i3 = [], a2 = true, c2 = false;
        try {
          for (n3 = n3.call(t4); !(a2 = (r3 = n3.next()).done) && (i3.push(r3.value), !e4 || i3.length !== e4); a2 = true)
            ;
        } catch (t5) {
          c2 = true, o3 = t5;
        } finally {
          try {
            a2 || n3.return == null || n3.return();
          } finally {
            if (c2)
              throw o3;
          }
        }
        return i3;
      }
    }(t3, e3) || function(t4, e4) {
      if (t4) {
        if (typeof t4 == "string")
          return x(t4, e4);
        var n3 = Object.prototype.toString.call(t4).slice(8, -1);
        return (n3 = n3 === "Object" && t4.constructor ? t4.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t4) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? x(t4, e4) : void 0;
      }
    }(t3, e3) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function x(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  var j = /[^.]*(?=\..*)\.|.*/, T = /\..*/, A = /::\d+$/, D = {}, P = 1, M = { mouseenter: "mouseover", mouseleave: "mouseout" }, I = /^(mouseenter|mouseleave)/i, L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function N(t3, e3) {
    return e3 && "".concat(e3, "::").concat(P++) || t3.uidEvent || P++;
  }
  function R(t3) {
    var e3 = N(t3);
    return t3.uidEvent = e3, D[e3] = D[e3] || {}, D[e3];
  }
  function B(t3, e3, n3) {
    for (var r3 = 2 < arguments.length && n3 !== void 0 ? n3 : null, o3 = Object.keys(t3), i3 = 0, a2 = o3.length; i3 < a2; i3++) {
      var c2 = t3[o3[i3]];
      if (c2.originalHandler === e3 && c2.delegationSelector === r3)
        return c2;
    }
    return null;
  }
  function H(t3, e3, n3) {
    var r3 = typeof e3 == "string", n3 = r3 ? n3 : e3, e3 = Y(t3);
    return [r3, n3, e3 = !L.has(e3) ? t3 : e3];
  }
  function F(t3, e3, n3, r3, o3) {
    var i3, a2, c2, s2, u2, l2, f2, d2, h3, p3;
    typeof e3 == "string" && t3 && (n3 || (n3 = r3, r3 = null), I.test(e3) && (u2 = function(e4) {
      return function(t4) {
        if (!t4.relatedTarget || t4.relatedTarget !== t4.delegateTarget && !t4.delegateTarget.contains(t4.relatedTarget))
          return e4.call(this, t4);
      };
    }, r3 ? r3 = u2(r3) : n3 = u2(n3)), i3 = (s2 = E(H(e3, n3, r3), 3))[0], a2 = s2[1], c2 = s2[2], (u2 = B(s2 = (u2 = R(t3))[c2] || (u2[c2] = {}), a2, i3 ? n3 : null)) ? u2.oneOff = u2.oneOff && o3 : (e3 = N(a2, e3.replace(j, "")), (r3 = i3 ? (d2 = t3, h3 = n3, p3 = r3, function t4(e4) {
      for (var n4 = d2.querySelectorAll(h3), r4 = e4.target; r4 && r4 !== this; r4 = r4.parentNode)
        for (var o4 = n4.length; o4--; )
          if (n4[o4] === r4)
            return e4.delegateTarget = r4, t4.oneOff && W.off(d2, e4.type, h3, p3), p3.apply(r4, [e4]);
      return null;
    }) : (l2 = t3, f2 = n3, function t4(e4) {
      return e4.delegateTarget = l2, t4.oneOff && W.off(l2, e4.type, f2), f2.apply(l2, [e4]);
    })).delegationSelector = i3 ? n3 : null, r3.originalHandler = a2, r3.oneOff = o3, s2[r3.uidEvent = e3] = r3, t3.addEventListener(c2, r3, i3)));
  }
  function V(t3, e3, n3, r3, o3) {
    r3 = B(e3[n3], r3, o3);
    r3 && (t3.removeEventListener(n3, r3, Boolean(o3)), delete e3[n3][r3.uidEvent]);
  }
  function Y(t3) {
    return t3 = t3.replace(T, ""), M[t3] || t3;
  }
  var W = { on: function(t3, e3, n3, r3) {
    F(t3, e3, n3, r3, false);
  }, one: function(t3, e3, n3, r3) {
    F(t3, e3, n3, r3, true);
  }, off: function(a2, c2, t3, e3) {
    if (typeof c2 == "string" && a2) {
      var n3 = E(H(c2, t3, e3), 3), r3 = n3[0], e3 = n3[1], o3 = n3[2], i3 = o3 !== c2, s2 = R(a2), n3 = c2.startsWith(".");
      if (e3 !== void 0)
        return s2 && s2[o3] ? void V(a2, s2, o3, e3, r3 ? t3 : null) : void 0;
      n3 && Object.keys(s2).forEach(function(t4) {
        var e4, n4, r4, o4, i4;
        e4 = a2, n4 = s2, r4 = t4, o4 = c2.slice(1), i4 = n4[r4] || {}, Object.keys(i4).forEach(function(t5) {
          t5.includes(o4) && (t5 = i4[t5], V(e4, n4, r4, t5.originalHandler, t5.delegationSelector));
        });
      });
      var u2 = s2[o3] || {};
      Object.keys(u2).forEach(function(t4) {
        var e4 = t4.replace(A, "");
        i3 && !c2.includes(e4) || (t4 = u2[t4], V(a2, s2, o3, t4.originalHandler, t4.delegationSelector));
      });
    }
  }, trigger: function(t3, e3, n3) {
    if (typeof e3 != "string" || !t3)
      return null;
    var r3, o3 = v(), i3 = Y(e3), a2 = e3 !== i3, c2 = L.has(i3), s2 = true, u2 = true, l2 = false, f2 = null;
    return a2 && o3 && (r3 = o3.Event(e3, n3), o3(t3).trigger(r3), s2 = !r3.isPropagationStopped(), u2 = !r3.isImmediatePropagationStopped(), l2 = r3.isDefaultPrevented()), c2 ? (f2 = document.createEvent("HTMLEvents")).initEvent(i3, s2, true) : f2 = new CustomEvent(e3, { bubbles: s2, cancelable: true }), n3 !== void 0 && Object.keys(n3).forEach(function(t4) {
      Object.defineProperty(f2, t4, { get: function() {
        return n3[t4];
      } });
    }), l2 && f2.preventDefault(), u2 && t3.dispatchEvent(f2), f2.defaultPrevented && r3 !== void 0 && r3.preventDefault(), f2;
  } }, z = W, U = (n2(174), n2(175), new Map()), q = function(t3, e3, n3) {
    U.has(t3) || U.set(t3, new Map());
    t3 = U.get(t3);
    t3.has(e3) || t3.size === 0 ? t3.set(e3, n3) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(t3.keys())[0], "."));
  }, K = function(t3, e3) {
    return U.has(t3) && U.get(t3).get(e3) || null;
  }, $ = function(t3, e3) {
    var n3;
    U.has(t3) && ((n3 = U.get(t3)).delete(e3), n3.size === 0 && U.delete(t3));
  };
  function X(t3) {
    return (X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function G(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  var Q = function() {
    function e3(t4) {
      !function(t5, e4) {
        if (!(t5 instanceof e4))
          throw new TypeError("Cannot call a class as a function");
      }(this, e3), (t4 = d(t4)) && (this._element = t4, q(this._element, this.constructor.DATA_KEY, this));
    }
    var t3, n3, r3;
    return t3 = e3, r3 = [{ key: "getInstance", value: function(t4) {
      return K(d(t4), this.DATA_KEY);
    } }, { key: "getOrCreateInstance", value: function(t4) {
      var e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return this.getInstance(t4) || new this(t4, X(e4) === "object" ? e4 : null);
    } }, { key: "VERSION", get: function() {
      return "5.1.3";
    } }, { key: "NAME", get: function() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    } }, { key: "DATA_KEY", get: function() {
      return "bs.".concat(this.NAME);
    } }, { key: "EVENT_KEY", get: function() {
      return ".".concat(this.DATA_KEY);
    } }], (n3 = [{ key: "dispose", value: function() {
      var e4 = this;
      $(this._element, this.constructor.DATA_KEY), z.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function(t4) {
        e4[t4] = null;
      });
    } }, { key: "_queueCallback", value: function(t4, e4) {
      b(t4, e4, !(2 < arguments.length && arguments[2] !== void 0) || arguments[2]);
    } }]) && G(t3.prototype, n3), r3 && G(t3, r3), e3;
  }();
  function Z(t3) {
    return (Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function J(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function tt(t3, e3) {
    return (tt = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function et(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = nt(n3);
      return function(t4, e4) {
        {
          if (e4 && (Z(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = nt(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function nt(t3) {
    return (nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var rt = ".".concat("bs.button"), ot = '[data-bs-toggle="button"]', it = "click".concat(rt).concat(".data-api"), at = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && tt(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = et(o3);
    function o3() {
      return function(t4, e4) {
        if (!(t4 instanceof e4))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), r3.apply(this, arguments);
    }
    return t3 = o3, n3 = [{ key: "NAME", get: function() {
      return "button";
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this);
        e4 === "toggle" && t4[e4]();
      });
    } }], (e3 = [{ key: "toggle", value: function() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    } }]) && J(t3.prototype, e3), n3 && J(t3, n3), o3;
  }();
  z.on(document, it, ot, function(t3) {
    t3.preventDefault();
    t3 = t3.target.closest(ot);
    at.getOrCreateInstance(t3).toggle();
  }), g(at);
  var ct = at, st = (n2(28), n2(57), n2(120), n2(15), n2(58), n2(23), n2(24), "top"), ut = "bottom", lt = "right", ft = "left", dt = "auto", ht = [st, ut, lt, ft], pt = "start", vt = "end", mt = "clippingParents", gt = "viewport", yt = "popper", bt = "reference", _t = ht.reduce(function(t3, e3) {
    return t3.concat([e3 + "-" + pt, e3 + "-" + vt]);
  }, []), wt = [].concat(ht, [dt]).reduce(function(t3, e3) {
    return t3.concat([e3, e3 + "-" + pt, e3 + "-" + vt]);
  }, []), Ot = "beforeRead", kt = "read", Ct = "afterRead", St = "beforeMain", Et = "main", xt = "afterMain", jt = "beforeWrite", Tt = "write", At = "afterWrite", Dt = [Ot, kt, Ct, St, Et, xt, jt, Tt, At];
  function Pt(t3) {
    return t3 ? (t3.nodeName || "").toLowerCase() : null;
  }
  function Mt(t3) {
    if (t3 == null)
      return window;
    if (t3.toString() === "[object Window]")
      return t3;
    t3 = t3.ownerDocument;
    return t3 && t3.defaultView || window;
  }
  function It(t3) {
    return t3 instanceof Mt(t3).Element || t3 instanceof Element;
  }
  function Lt(t3) {
    return t3 instanceof Mt(t3).HTMLElement || t3 instanceof HTMLElement;
  }
  function Nt(t3) {
    return typeof ShadowRoot != "undefined" && (t3 instanceof Mt(t3).ShadowRoot || t3 instanceof ShadowRoot);
  }
  var Rt = { name: "applyStyles", enabled: true, phase: "write", fn: function(t3) {
    var o3 = t3.state;
    Object.keys(o3.elements).forEach(function(t4) {
      var e3 = o3.styles[t4] || {}, n3 = o3.attributes[t4] || {}, r3 = o3.elements[t4];
      Lt(r3) && Pt(r3) && (Object.assign(r3.style, e3), Object.keys(n3).forEach(function(t5) {
        var e4 = n3[t5];
        e4 === false ? r3.removeAttribute(t5) : r3.setAttribute(t5, e4 === true ? "" : e4);
      }));
    });
  }, effect: function(t3) {
    var r3 = t3.state, o3 = { popper: { position: r3.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(r3.elements.popper.style, o3.popper), r3.styles = o3, r3.elements.arrow && Object.assign(r3.elements.arrow.style, o3.arrow), function() {
      Object.keys(r3.elements).forEach(function(t4) {
        var e3 = r3.elements[t4], n3 = r3.attributes[t4] || {}, t4 = Object.keys((r3.styles.hasOwnProperty(t4) ? r3.styles : o3)[t4]).reduce(function(t5, e4) {
          return t5[e4] = "", t5;
        }, {});
        Lt(e3) && Pt(e3) && (Object.assign(e3.style, t4), Object.keys(n3).forEach(function(t5) {
          e3.removeAttribute(t5);
        }));
      });
    };
  }, requires: ["computeStyles"] };
  function Bt(t3) {
    return t3.split("-")[0];
  }
  var Ht = Math.max, Ft = Math.min, Vt = Math.round;
  function Yt(t3, e3) {
    e3 === void 0 && (e3 = false);
    var n3 = t3.getBoundingClientRect(), r3 = 1, o3 = 1;
    return Lt(t3) && e3 && (e3 = t3.offsetHeight, 0 < (t3 = t3.offsetWidth) && (r3 = Vt(n3.width) / t3 || 1), 0 < e3 && (o3 = Vt(n3.height) / e3 || 1)), { width: n3.width / r3, height: n3.height / o3, top: n3.top / o3, right: n3.right / r3, bottom: n3.bottom / o3, left: n3.left / r3, x: n3.left / r3, y: n3.top / o3 };
  }
  function Wt(t3) {
    var e3 = Yt(t3), n3 = t3.offsetWidth, r3 = t3.offsetHeight;
    return Math.abs(e3.width - n3) <= 1 && (n3 = e3.width), Math.abs(e3.height - r3) <= 1 && (r3 = e3.height), { x: t3.offsetLeft, y: t3.offsetTop, width: n3, height: r3 };
  }
  function zt(t3, e3) {
    var n3 = e3.getRootNode && e3.getRootNode();
    if (t3.contains(e3))
      return true;
    if (n3 && Nt(n3)) {
      var r3 = e3;
      do {
        if (r3 && t3.isSameNode(r3))
          return true;
      } while (r3 = r3.parentNode || r3.host);
    }
    return false;
  }
  function Ut(t3) {
    return Mt(t3).getComputedStyle(t3);
  }
  function qt(t3) {
    return ((It(t3) ? t3.ownerDocument : t3.document) || window.document).documentElement;
  }
  function Kt(t3) {
    return Pt(t3) === "html" ? t3 : t3.assignedSlot || t3.parentNode || (Nt(t3) ? t3.host : null) || qt(t3);
  }
  function $t(t3) {
    return Lt(t3) && Ut(t3).position !== "fixed" ? t3.offsetParent : null;
  }
  function Xt(t3) {
    for (var e3, n3 = Mt(t3), r3 = $t(t3); r3 && (e3 = r3, 0 <= ["table", "td", "th"].indexOf(Pt(e3))) && Ut(r3).position === "static"; )
      r3 = $t(r3);
    return (!r3 || Pt(r3) !== "html" && (Pt(r3) !== "body" || Ut(r3).position !== "static")) && (r3 || function(t4) {
      var e4 = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n4 = navigator.userAgent.indexOf("Trident") !== -1;
      if (n4 && Lt(t4) && Ut(t4).position === "fixed")
        return null;
      for (var r4 = Kt(t4); Lt(r4) && ["html", "body"].indexOf(Pt(r4)) < 0; ) {
        var o3 = Ut(r4);
        if (o3.transform !== "none" || o3.perspective !== "none" || o3.contain === "paint" || ["transform", "perspective"].indexOf(o3.willChange) !== -1 || e4 && o3.willChange === "filter" || e4 && o3.filter && o3.filter !== "none")
          return r4;
        r4 = r4.parentNode;
      }
      return null;
    }(t3)) || n3;
  }
  function Gt(t3) {
    return 0 <= ["top", "bottom"].indexOf(t3) ? "x" : "y";
  }
  function Qt(t3, e3, n3) {
    return Ht(t3, Ft(e3, n3));
  }
  function Zt() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function Jt(t3) {
    return Object.assign({}, Zt(), t3);
  }
  function te(n3, t3) {
    return t3.reduce(function(t4, e3) {
      return t4[e3] = n3, t4;
    }, {});
  }
  var ee = { name: "arrow", enabled: true, phase: "main", fn: function(t3) {
    var e3, n3, r3 = t3.state, o3 = t3.name, i3 = t3.options, a2 = r3.elements.arrow, c2 = r3.modifiersData.popperOffsets, s2 = Bt(r3.placement), u2 = Gt(s2), l2 = 0 <= [ft, lt].indexOf(s2) ? "height" : "width";
    a2 && c2 && (e3 = i3.padding, n3 = r3, t3 = Jt(typeof (e3 = typeof e3 == "function" ? e3(Object.assign({}, n3.rects, { placement: n3.placement })) : e3) != "number" ? e3 : te(e3, ht)), s2 = Wt(a2), i3 = u2 === "y" ? st : ft, n3 = u2 === "y" ? ut : lt, e3 = r3.rects.reference[l2] + r3.rects.reference[u2] - c2[u2] - r3.rects.popper[l2], c2 = c2[u2] - r3.rects.reference[u2], a2 = (a2 = Xt(a2)) ? u2 === "y" ? a2.clientHeight || 0 : a2.clientWidth || 0 : 0, i3 = t3[i3], n3 = a2 - s2[l2] - t3[n3], n3 = Qt(i3, c2 = a2 / 2 - s2[l2] / 2 + (e3 / 2 - c2 / 2), n3), r3.modifiersData[o3] = ((o3 = {})[u2] = n3, o3.centerOffset = n3 - c2, o3));
  }, effect: function(t3) {
    var e3 = t3.state;
    (t3 = (t3 = t3.options.element) === void 0 ? "[data-popper-arrow]" : t3) != null && (typeof t3 != "string" || (t3 = e3.elements.popper.querySelector(t3))) && zt(e3.elements.popper, t3) && (e3.elements.arrow = t3);
  }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function ne(t3) {
    return t3.split("-")[1];
  }
  var re = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function oe(t3) {
    var e3 = t3.popper, n3 = t3.popperRect, r3 = t3.placement, o3 = t3.variation, i3 = t3.offsets, a2 = t3.position, c2 = t3.gpuAcceleration, s2 = t3.adaptive, u2 = t3.roundOffsets, l2 = t3.isFixed, f2 = u2 === true ? (v2 = (g2 = i3).x, m2 = g2.y, g2 = window.devicePixelRatio || 1, { x: Vt(v2 * g2) / g2 || 0, y: Vt(m2 * g2) / g2 || 0 }) : typeof u2 == "function" ? u2(i3) : i3, d2 = f2.x, h3 = d2 === void 0 ? 0 : d2, p3 = f2.y, t3 = p3 === void 0 ? 0 : p3, v2 = i3.hasOwnProperty("x"), m2 = i3.hasOwnProperty("y"), g2 = ft, u2 = st, d2 = window;
    s2 && (f2 = "clientHeight", p3 = "clientWidth", (i3 = Xt(e3)) === Mt(e3) && Ut(i3 = qt(e3)).position !== "static" && a2 === "absolute" && (f2 = "scrollHeight", p3 = "scrollWidth"), r3 !== st && (r3 !== ft && r3 !== lt || o3 !== vt) || (u2 = ut, t3 -= (l2 && d2.visualViewport ? d2.visualViewport.height : i3[f2]) - n3.height, t3 *= c2 ? 1 : -1), r3 !== ft && (r3 !== st && r3 !== ut || o3 !== vt) || (g2 = lt, h3 -= (l2 && d2.visualViewport ? d2.visualViewport.width : i3[p3]) - n3.width, h3 *= c2 ? 1 : -1));
    var s2 = Object.assign({ position: a2 }, s2 && re);
    return c2 ? Object.assign({}, s2, ((c2 = {})[u2] = m2 ? "0" : "", c2[g2] = v2 ? "0" : "", c2.transform = (d2.devicePixelRatio || 1) <= 1 ? "translate(" + h3 + "px, " + t3 + "px)" : "translate3d(" + h3 + "px, " + t3 + "px, 0)", c2)) : Object.assign({}, s2, ((s2 = {})[u2] = m2 ? t3 + "px" : "", s2[g2] = v2 ? h3 + "px" : "", s2.transform = "", s2));
  }
  var ie = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t3) {
    var e3 = t3.state, n3 = t3.options, t3 = (r3 = n3.gpuAcceleration) === void 0 || r3, r3 = (r3 = n3.adaptive) === void 0 || r3, n3 = (n3 = n3.roundOffsets) === void 0 || n3, t3 = { placement: Bt(e3.placement), variation: ne(e3.placement), popper: e3.elements.popper, popperRect: e3.rects.popper, gpuAcceleration: t3, isFixed: e3.options.strategy === "fixed" };
    e3.modifiersData.popperOffsets != null && (e3.styles.popper = Object.assign({}, e3.styles.popper, oe(Object.assign({}, t3, { offsets: e3.modifiersData.popperOffsets, position: e3.options.strategy, adaptive: r3, roundOffsets: n3 })))), e3.modifiersData.arrow != null && (e3.styles.arrow = Object.assign({}, e3.styles.arrow, oe(Object.assign({}, t3, { offsets: e3.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: n3 })))), e3.attributes.popper = Object.assign({}, e3.attributes.popper, { "data-popper-placement": e3.placement });
  }, data: {} }, ae = { passive: true };
  var ce = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
  }, effect: function(t3) {
    var e3 = t3.state, n3 = t3.instance, r3 = t3.options, o3 = (t3 = r3.scroll) === void 0 || t3, i3 = (r3 = r3.resize) === void 0 || r3, a2 = Mt(e3.elements.popper), c2 = [].concat(e3.scrollParents.reference, e3.scrollParents.popper);
    return o3 && c2.forEach(function(t4) {
      t4.addEventListener("scroll", n3.update, ae);
    }), i3 && a2.addEventListener("resize", n3.update, ae), function() {
      o3 && c2.forEach(function(t4) {
        t4.removeEventListener("scroll", n3.update, ae);
      }), i3 && a2.removeEventListener("resize", n3.update, ae);
    };
  }, data: {} }, se = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ue(t3) {
    return t3.replace(/left|right|bottom|top/g, function(t4) {
      return se[t4];
    });
  }
  var le = { start: "end", end: "start" };
  function fe(t3) {
    return t3.replace(/start|end/g, function(t4) {
      return le[t4];
    });
  }
  function de(t3) {
    t3 = Mt(t3);
    return { scrollLeft: t3.pageXOffset, scrollTop: t3.pageYOffset };
  }
  function he(t3) {
    return Yt(qt(t3)).left + de(t3).scrollLeft;
  }
  function pe(t3) {
    var e3 = Ut(t3), n3 = e3.overflow, t3 = e3.overflowX, e3 = e3.overflowY;
    return /auto|scroll|overlay|hidden/.test(n3 + e3 + t3);
  }
  function ve(t3, e3) {
    e3 === void 0 && (e3 = []);
    var n3 = function t4(e4) {
      return 0 <= ["html", "body", "#document"].indexOf(Pt(e4)) ? e4.ownerDocument.body : Lt(e4) && pe(e4) ? e4 : t4(Kt(e4));
    }(t3), t3 = n3 === ((r3 = t3.ownerDocument) == null ? void 0 : r3.body), r3 = Mt(n3), n3 = t3 ? [r3].concat(r3.visualViewport || [], pe(n3) ? n3 : []) : n3, e3 = e3.concat(n3);
    return t3 ? e3 : e3.concat(ve(Kt(n3)));
  }
  function me(t3) {
    return Object.assign({}, t3, { left: t3.x, top: t3.y, right: t3.x + t3.width, bottom: t3.y + t3.height });
  }
  function ge(t3, e3) {
    return e3 === gt ? me((i3 = Mt(o3 = t3), a2 = qt(o3), c2 = i3.visualViewport, s2 = a2.clientWidth, u2 = a2.clientHeight, a2 = i3 = 0, c2 && (s2 = c2.width, u2 = c2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i3 = c2.offsetLeft, a2 = c2.offsetTop)), { width: s2, height: u2, x: i3 + he(o3), y: a2 })) : It(e3) ? ((r3 = Yt(n3 = e3)).top = r3.top + n3.clientTop, r3.left = r3.left + n3.clientLeft, r3.bottom = r3.top + n3.clientHeight, r3.right = r3.left + n3.clientWidth, r3.width = n3.clientWidth, r3.height = n3.clientHeight, r3.x = r3.left, r3.y = r3.top, r3) : me((o3 = qt(t3), a2 = qt(o3), e3 = de(o3), r3 = (n3 = o3.ownerDocument) == null ? void 0 : n3.body, t3 = Ht(a2.scrollWidth, a2.clientWidth, r3 ? r3.scrollWidth : 0, r3 ? r3.clientWidth : 0), n3 = Ht(a2.scrollHeight, a2.clientHeight, r3 ? r3.scrollHeight : 0, r3 ? r3.clientHeight : 0), o3 = -e3.scrollLeft + he(o3), e3 = -e3.scrollTop, Ut(r3 || a2).direction === "rtl" && (o3 += Ht(a2.clientWidth, r3 ? r3.clientWidth : 0) - t3), { width: t3, height: n3, x: o3, y: e3 }));
    var n3, r3, o3, i3, a2, c2, s2, u2;
  }
  function ye(n3, t3, e3) {
    var r3, o3, i3, a2, t3 = t3 === "clippingParents" ? (o3 = ve(Kt(r3 = n3)), i3 = 0 <= ["absolute", "fixed"].indexOf(Ut(r3).position), It(a2 = i3 && Lt(r3) ? Xt(r3) : r3) ? o3.filter(function(t4) {
      return It(t4) && zt(t4, a2) && Pt(t4) !== "body" && (!i3 || Ut(t4).position !== "static");
    }) : []) : [].concat(t3), t3 = [].concat(t3, [e3]), e3 = t3[0], e3 = t3.reduce(function(t4, e4) {
      e4 = ge(n3, e4);
      return t4.top = Ht(e4.top, t4.top), t4.right = Ft(e4.right, t4.right), t4.bottom = Ft(e4.bottom, t4.bottom), t4.left = Ht(e4.left, t4.left), t4;
    }, ge(n3, e3));
    return e3.width = e3.right - e3.left, e3.height = e3.bottom - e3.top, e3.x = e3.left, e3.y = e3.top, e3;
  }
  function be(t3) {
    var e3, n3 = t3.reference, r3 = t3.element, o3 = t3.placement, t3 = o3 ? Bt(o3) : null, o3 = o3 ? ne(o3) : null, i3 = n3.x + n3.width / 2 - r3.width / 2, a2 = n3.y + n3.height / 2 - r3.height / 2;
    switch (t3) {
      case st:
        e3 = { x: i3, y: n3.y - r3.height };
        break;
      case ut:
        e3 = { x: i3, y: n3.y + n3.height };
        break;
      case lt:
        e3 = { x: n3.x + n3.width, y: a2 };
        break;
      case ft:
        e3 = { x: n3.x - r3.width, y: a2 };
        break;
      default:
        e3 = { x: n3.x, y: n3.y };
    }
    var c2 = t3 ? Gt(t3) : null;
    if (c2 != null) {
      var s2 = c2 === "y" ? "height" : "width";
      switch (o3) {
        case pt:
          e3[c2] = e3[c2] - (n3[s2] / 2 - r3[s2] / 2);
          break;
        case vt:
          e3[c2] = e3[c2] + (n3[s2] / 2 - r3[s2] / 2);
      }
    }
    return e3;
  }
  function _e(t3, e3) {
    var r3, n3 = e3 = e3 === void 0 ? {} : e3, o3 = n3.placement, i3 = o3 === void 0 ? t3.placement : o3, a2 = n3.boundary, c2 = a2 === void 0 ? mt : a2, s2 = n3.rootBoundary, e3 = s2 === void 0 ? gt : s2, o3 = n3.elementContext, a2 = o3 === void 0 ? yt : o3, s2 = n3.altBoundary, o3 = s2 !== void 0 && s2, s2 = n3.padding, n3 = s2 === void 0 ? 0 : s2, s2 = Jt(typeof n3 != "number" ? n3 : te(n3, ht)), n3 = t3.rects.popper, o3 = t3.elements[o3 ? a2 === yt ? bt : yt : a2], o3 = ye(It(o3) ? o3 : o3.contextElement || qt(t3.elements.popper), c2, e3), c2 = Yt(t3.elements.reference), e3 = be({ reference: c2, element: n3, strategy: "absolute", placement: i3 }), e3 = me(Object.assign({}, n3, e3)), c2 = a2 === yt ? e3 : c2, u2 = { top: o3.top - c2.top + s2.top, bottom: c2.bottom - o3.bottom + s2.bottom, left: o3.left - c2.left + s2.left, right: c2.right - o3.right + s2.right }, t3 = t3.modifiersData.offset;
    return a2 === yt && t3 && (r3 = t3[i3], Object.keys(u2).forEach(function(t4) {
      var e4 = 0 <= [lt, ut].indexOf(t4) ? 1 : -1, n4 = 0 <= [st, ut].indexOf(t4) ? "y" : "x";
      u2[t4] += r3[n4] * e4;
    })), u2;
  }
  var we = { name: "flip", enabled: true, phase: "main", fn: function(t3) {
    var f2 = t3.state, e3 = t3.options, n3 = t3.name;
    if (!f2.modifiersData[n3]._skip) {
      for (var r3 = e3.mainAxis, o3 = r3 === void 0 || r3, t3 = e3.altAxis, i3 = t3 === void 0 || t3, r3 = e3.fallbackPlacements, d2 = e3.padding, h3 = e3.boundary, p3 = e3.rootBoundary, a2 = e3.altBoundary, t3 = e3.flipVariations, v2 = t3 === void 0 || t3, m2 = e3.allowedAutoPlacements, t3 = f2.options.placement, e3 = Bt(t3), e3 = r3 || (e3 === t3 || !v2 ? [ue(t3)] : function(t4) {
        if (Bt(t4) === dt)
          return [];
        var e4 = ue(t4);
        return [fe(t4), e4, fe(e4)];
      }(t3)), c2 = [t3].concat(e3).reduce(function(t4, e4) {
        return t4.concat(Bt(e4) === dt ? (n4 = f2, o4 = r4 = (r4 = { placement: e4, boundary: h3, rootBoundary: p3, padding: d2, flipVariations: v2, allowedAutoPlacements: m2 }) === void 0 ? {} : r4, t4 = o4.placement, i4 = o4.boundary, a3 = o4.rootBoundary, c3 = o4.padding, r4 = o4.flipVariations, s3 = (o4 = o4.allowedAutoPlacements) === void 0 ? wt : o4, u3 = ne(t4), t4 = u3 ? r4 ? _t : _t.filter(function(t5) {
          return ne(t5) === u3;
        }) : ht, l3 = (r4 = (r4 = t4.filter(function(t5) {
          return 0 <= s3.indexOf(t5);
        })).length === 0 ? t4 : r4).reduce(function(t5, e5) {
          return t5[e5] = _e(n4, { placement: e5, boundary: i4, rootBoundary: a3, padding: c3 })[Bt(e5)], t5;
        }, {}), Object.keys(l3).sort(function(t5, e5) {
          return l3[t5] - l3[e5];
        })) : e4);
        var n4, r4, o4, i4, a3, c3, s3, u3, l3;
      }, []), s2 = f2.rects.reference, u2 = f2.rects.popper, l2 = new Map(), g2 = true, y2 = c2[0], b2 = 0; b2 < c2.length; b2++) {
        var _2 = c2[b2], w2 = Bt(_2), O2 = ne(_2) === pt, k2 = 0 <= [st, ut].indexOf(w2), C2 = k2 ? "width" : "height", S2 = _e(f2, { placement: _2, boundary: h3, rootBoundary: p3, altBoundary: a2, padding: d2 }), k2 = k2 ? O2 ? lt : ft : O2 ? ut : st;
        s2[C2] > u2[C2] && (k2 = ue(k2));
        O2 = ue(k2), C2 = [];
        if (o3 && C2.push(S2[w2] <= 0), i3 && C2.push(S2[k2] <= 0, S2[O2] <= 0), C2.every(function(t4) {
          return t4;
        })) {
          y2 = _2, g2 = false;
          break;
        }
        l2.set(_2, C2);
      }
      if (g2) {
        for (var E2 = v2 ? 3 : 1; 0 < E2; E2--)
          if (function(e4) {
            var t4 = c2.find(function(t5) {
              t5 = l2.get(t5);
              if (t5)
                return t5.slice(0, e4).every(function(t6) {
                  return t6;
                });
            });
            if (t4)
              return y2 = t4, "break";
          }(E2) === "break")
            break;
      }
      f2.placement !== y2 && (f2.modifiersData[n3]._skip = true, f2.placement = y2, f2.reset = true);
    }
  }, requiresIfExists: ["offset"], data: { _skip: false } };
  function Oe(t3, e3, n3) {
    return { top: t3.top - e3.height - (n3 = n3 === void 0 ? { x: 0, y: 0 } : n3).y, right: t3.right - e3.width + n3.x, bottom: t3.bottom - e3.height + n3.y, left: t3.left - e3.width - n3.x };
  }
  function ke(e3) {
    return [st, lt, ut, ft].some(function(t3) {
      return 0 <= e3[t3];
    });
  }
  var Ce = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t3) {
    var e3 = t3.state, n3 = t3.name, r3 = e3.rects.reference, o3 = e3.rects.popper, i3 = e3.modifiersData.preventOverflow, a2 = _e(e3, { elementContext: "reference" }), t3 = _e(e3, { altBoundary: true }), r3 = Oe(a2, r3), t3 = Oe(t3, o3, i3), o3 = ke(r3), i3 = ke(t3);
    e3.modifiersData[n3] = { referenceClippingOffsets: r3, popperEscapeOffsets: t3, isReferenceHidden: o3, hasPopperEscaped: i3 }, e3.attributes.popper = Object.assign({}, e3.attributes.popper, { "data-popper-reference-hidden": o3, "data-popper-escaped": i3 });
  } };
  var Se = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t3) {
    var a2 = t3.state, e3 = t3.options, n3 = t3.name, c2 = (r3 = e3.offset) === void 0 ? [0, 0] : r3, t3 = wt.reduce(function(t4, e4) {
      var n4, r4, o3, i3;
      return t4[e4] = (n4 = e4, r4 = a2.rects, o3 = c2, i3 = Bt(n4), e4 = 0 <= [ft, st].indexOf(i3) ? -1 : 1, o3 = (o3 = (n4 = typeof o3 == "function" ? o3(Object.assign({}, r4, { placement: n4 })) : o3)[0]) || 0, n4 = ((n4 = n4[1]) || 0) * e4, 0 <= [ft, lt].indexOf(i3) ? { x: n4, y: o3 } : { x: o3, y: n4 }), t4;
    }, {}), r3 = (e3 = t3[a2.placement]).x, e3 = e3.y;
    a2.modifiersData.popperOffsets != null && (a2.modifiersData.popperOffsets.x += r3, a2.modifiersData.popperOffsets.y += e3), a2.modifiersData[n3] = t3;
  } };
  var Ee = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t3) {
    var e3 = t3.state, t3 = t3.name;
    e3.modifiersData[t3] = be({ reference: e3.rects.reference, element: e3.rects.popper, strategy: "absolute", placement: e3.placement });
  }, data: {} };
  var xe = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t3) {
    var e3, n3, r3, o3 = t3.state, i3 = t3.options, a2 = t3.name, c2 = i3.mainAxis, s2 = c2 === void 0 || c2, u2 = (C2 = i3.altAxis) !== void 0 && C2, l2 = i3.boundary, f2 = i3.rootBoundary, d2 = i3.altBoundary, h3 = i3.padding, p3 = (S2 = i3.tether) === void 0 || S2, v2 = i3.tetherOffset, m2 = v2 === void 0 ? 0 : v2, g2 = _e(o3, { boundary: l2, rootBoundary: f2, padding: h3, altBoundary: d2 }), y2 = Bt(o3.placement), b2 = ne(o3.placement), _2 = !b2, w2 = (r3 = Gt(y2)) === "x" ? "y" : "x", O2 = o3.modifiersData.popperOffsets, k2 = o3.rects.reference, t3 = o3.rects.popper, C2 = typeof (c2 = typeof m2 == "function" ? m2(Object.assign({}, o3.rects, { placement: o3.placement })) : m2) == "number" ? { mainAxis: c2, altAxis: c2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, c2), S2 = o3.modifiersData.offset ? o3.modifiersData.offset[o3.placement] : null, i3 = { x: 0, y: 0 };
    O2 && (s2 && (v2 = r3 === "y" ? "height" : "width", f2 = (e3 = O2[r3]) + g2[l2 = r3 === "y" ? st : ft], n3 = e3 - g2[h3 = r3 === "y" ? ut : lt], d2 = p3 ? -t3[v2] / 2 : 0, m2 = (b2 === pt ? k2 : t3)[v2], c2 = b2 === pt ? -t3[v2] : -k2[v2], s2 = o3.elements.arrow, b2 = p3 && s2 ? Wt(s2) : { width: 0, height: 0 }, l2 = (s2 = o3.modifiersData["arrow#persistent"] ? o3.modifiersData["arrow#persistent"].padding : Zt())[l2], h3 = s2[h3], b2 = Qt(0, k2[v2], b2[v2]), l2 = _2 ? k2[v2] / 2 - d2 - b2 - l2 - C2.mainAxis : m2 - b2 - l2 - C2.mainAxis, c2 = _2 ? -k2[v2] / 2 + d2 + b2 + h3 + C2.mainAxis : c2 + b2 + h3 + C2.mainAxis, h3 = (b2 = o3.elements.arrow && Xt(o3.elements.arrow)) ? r3 === "y" ? b2.clientTop || 0 : b2.clientLeft || 0 : 0, b2 = e3 + c2 - (c2 = (b2 = S2 == null ? void 0 : S2[r3]) != null ? b2 : 0), n3 = Qt(p3 ? Ft(f2, e3 + l2 - c2 - h3) : f2, e3, p3 ? Ht(n3, b2) : n3), O2[r3] = n3, i3[r3] = n3 - e3), u2 && (n3 = w2 == "y" ? "height" : "width", u2 = (e3 = O2[w2]) + g2[r3 === "x" ? st : ft], g2 = e3 - g2[r3 === "x" ? ut : lt], r3 = [st, ft].indexOf(y2) !== -1, S2 = (y2 = S2 == null ? void 0 : S2[w2]) != null ? y2 : 0, y2 = r3 ? u2 : e3 - k2[n3] - t3[n3] - S2 + C2.altAxis, S2 = r3 ? e3 + k2[n3] + t3[n3] - S2 - C2.altAxis : g2, g2 = p3 && r3 ? (C2 = Qt(y2, C2 = e3, r3 = S2), r3 < C2 ? r3 : C2) : Qt(p3 ? y2 : u2, e3, p3 ? S2 : g2), O2[w2] = g2, i3[w2] = g2 - e3), o3.modifiersData[a2] = i3);
  }, requiresIfExists: ["offset"] };
  function je(t3, e3, n3) {
    n3 === void 0 && (n3 = false);
    var r3 = Lt(e3), o3 = Lt(e3) && (o3 = (a2 = e3).getBoundingClientRect(), i3 = Vt(o3.width) / a2.offsetWidth || 1, a2 = Vt(o3.height) / a2.offsetHeight || 1, i3 !== 1 || a2 !== 1), i3 = qt(e3), a2 = Yt(t3, o3), t3 = { scrollLeft: 0, scrollTop: 0 }, o3 = { x: 0, y: 0 };
    return !r3 && n3 || (Pt(e3) === "body" && !pe(i3) || (t3 = (n3 = e3) !== Mt(n3) && Lt(n3) ? { scrollLeft: n3.scrollLeft, scrollTop: n3.scrollTop } : de(n3)), Lt(e3) ? ((o3 = Yt(e3, true)).x += e3.clientLeft, o3.y += e3.clientTop) : i3 && (o3.x = he(i3))), { x: a2.left + t3.scrollLeft - o3.x, y: a2.top + t3.scrollTop - o3.y, width: a2.width, height: a2.height };
  }
  function Te(t3) {
    var n3 = new Map(), r3 = new Set(), o3 = [];
    return t3.forEach(function(t4) {
      n3.set(t4.name, t4);
    }), t3.forEach(function(t4) {
      r3.has(t4.name) || !function e3(t5) {
        r3.add(t5.name), [].concat(t5.requires || [], t5.requiresIfExists || []).forEach(function(t6) {
          r3.has(t6) || (t6 = n3.get(t6)) && e3(t6);
        }), o3.push(t5);
      }(t4);
    }), o3;
  }
  var Ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function De() {
    for (var t3 = arguments.length, e3 = new Array(t3), n3 = 0; n3 < t3; n3++)
      e3[n3] = arguments[n3];
    return !e3.some(function(t4) {
      return !(t4 && typeof t4.getBoundingClientRect == "function");
    });
  }
  function Pe(t3) {
    var e3 = t3 = t3 === void 0 ? {} : t3, t3 = e3.defaultModifiers, f2 = t3 === void 0 ? [] : t3, e3 = e3.defaultOptions, d2 = e3 === void 0 ? Ae : e3;
    return function(r3, o3, e4) {
      e4 === void 0 && (e4 = d2);
      var n3, i3, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ae, d2), modifiersData: {}, elements: { reference: r3, popper: o3 }, attributes: {}, styles: {} }, c2 = [], s2 = false, u2 = { state: a2, setOptions: function(t4) {
        t4 = typeof t4 == "function" ? t4(a2.options) : t4;
        l2(), a2.options = Object.assign({}, d2, a2.options, t4), a2.scrollParents = { reference: It(r3) ? ve(r3) : r3.contextElement ? ve(r3.contextElement) : [], popper: ve(o3) };
        var n4, e5, t4 = (t4 = [].concat(f2, a2.options.modifiers), e5 = t4.reduce(function(t5, e6) {
          var n5 = t5[e6.name];
          return t5[e6.name] = n5 ? Object.assign({}, n5, e6, { options: Object.assign({}, n5.options, e6.options), data: Object.assign({}, n5.data, e6.data) }) : e6, t5;
        }, {}), t4 = Object.keys(e5).map(function(t5) {
          return e5[t5];
        }), n4 = Te(t4), Dt.reduce(function(t5, e6) {
          return t5.concat(n4.filter(function(t6) {
            return t6.phase === e6;
          }));
        }, []));
        return a2.orderedModifiers = t4.filter(function(t5) {
          return t5.enabled;
        }), a2.orderedModifiers.forEach(function(t5) {
          var e6 = t5.name, n5 = t5.options, t5 = t5.effect;
          typeof t5 == "function" && (n5 = t5({ state: a2, name: e6, instance: u2, options: n5 === void 0 ? {} : n5 }), c2.push(n5 || function() {
          }));
        }), u2.update();
      }, forceUpdate: function() {
        if (!s2) {
          var t4 = a2.elements, e5 = t4.reference, t4 = t4.popper;
          if (De(e5, t4)) {
            a2.rects = { reference: je(e5, Xt(t4), a2.options.strategy === "fixed"), popper: Wt(t4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
              return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
            });
            for (var n4, r4, o4, i4 = 0; i4 < a2.orderedModifiers.length; i4++)
              a2.reset !== true ? (n4 = (o4 = a2.orderedModifiers[i4]).fn, r4 = o4.options, o4 = o4.name, typeof n4 == "function" && (a2 = n4({ state: a2, options: r4 === void 0 ? {} : r4, name: o4, instance: u2 }) || a2)) : (a2.reset = false, i4 = -1);
          }
        }
      }, update: (n3 = function() {
        return new Promise(function(t4) {
          u2.forceUpdate(), t4(a2);
        });
      }, function() {
        return i3 = i3 || new Promise(function(t4) {
          Promise.resolve().then(function() {
            i3 = void 0, t4(n3());
          });
        });
      }), destroy: function() {
        l2(), s2 = true;
      } };
      return De(r3, o3) && u2.setOptions(e4).then(function(t4) {
        !s2 && e4.onFirstUpdate && e4.onFirstUpdate(t4);
      }), u2;
      function l2() {
        c2.forEach(function(t4) {
          return t4();
        }), c2 = [];
      }
    };
  }
  var Me = Pe(), Ie = Pe({ defaultModifiers: [ce, Ee, ie, Rt, Se, we, xe, ee, Ce] }), Le = Pe({ defaultModifiers: [ce, Ee, ie, Rt] });
  function Ne(t3) {
    return t3 === "true" || t3 !== "false" && (t3 === Number(t3).toString() ? Number(t3) : t3 === "" || t3 === "null" ? null : t3);
  }
  function Re(t3) {
    return t3.replace(/[A-Z]/g, function(t4) {
      return "-".concat(t4.toLowerCase());
    });
  }
  var Be = { setDataAttribute: function(t3, e3, n3) {
    t3.setAttribute("data-bs-".concat(Re(e3)), n3);
  }, removeDataAttribute: function(t3, e3) {
    t3.removeAttribute("data-bs-".concat(Re(e3)));
  }, getDataAttributes: function(n3) {
    if (!n3)
      return {};
    var r3 = {};
    return Object.keys(n3.dataset).filter(function(t3) {
      return t3.startsWith("bs");
    }).forEach(function(t3) {
      var e3 = (e3 = t3.replace(/^bs/, "")).charAt(0).toLowerCase() + e3.slice(1, e3.length);
      r3[e3] = Ne(n3.dataset[t3]);
    }), r3;
  }, getDataAttribute: function(t3, e3) {
    return Ne(t3.getAttribute("data-bs-".concat(Re(e3))));
  }, offset: function(t3) {
    t3 = t3.getBoundingClientRect();
    return { top: t3.top + window.pageYOffset, left: t3.left + window.pageXOffset };
  }, position: function(t3) {
    return { top: t3.offsetTop, left: t3.offsetLeft };
  } };
  n2(94);
  function He(t3) {
    return function(t4) {
      if (Array.isArray(t4))
        return Fe(t4);
    }(t3) || function(t4) {
      if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
        return Array.from(t4);
    }(t3) || function(t4, e3) {
      if (t4) {
        if (typeof t4 == "string")
          return Fe(t4, e3);
        var n3 = Object.prototype.toString.call(t4).slice(8, -1);
        return (n3 = n3 === "Object" && t4.constructor ? t4.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t4) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? Fe(t4, e3) : void 0;
      }
    }(t3) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Fe(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  var Ve = { find: function(t3) {
    var e3, n3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document.documentElement;
    return (e3 = []).concat.apply(e3, He(Element.prototype.querySelectorAll.call(n3, t3)));
  }, findOne: function(t3) {
    var e3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(e3, t3);
  }, children: function(t3, e3) {
    var n3;
    return (n3 = []).concat.apply(n3, He(t3.children)).filter(function(t4) {
      return t4.matches(e3);
    });
  }, parents: function(t3, e3) {
    for (var n3 = [], r3 = t3.parentNode; r3 && r3.nodeType === Node.ELEMENT_NODE && r3.nodeType !== 3; )
      r3.matches(e3) && n3.push(r3), r3 = r3.parentNode;
    return n3;
  }, prev: function(t3, e3) {
    for (var n3 = t3.previousElementSibling; n3; ) {
      if (n3.matches(e3))
        return [n3];
      n3 = n3.previousElementSibling;
    }
    return [];
  }, next: function(t3, e3) {
    for (var n3 = t3.nextElementSibling; n3; ) {
      if (n3.matches(e3))
        return [n3];
      n3 = n3.nextElementSibling;
    }
    return [];
  }, focusableChildren: function(t3) {
    var e3 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function(t4) {
      return "".concat(t4, ':not([tabindex^="-"])');
    }).join(", ");
    return this.find(e3, t3).filter(function(t4) {
      return !o2(t4) && u(t4);
    });
  } };
  function Ye(t3) {
    return (Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function We(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function ze(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? We(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : We(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function Ue(t3) {
    return function(t4) {
      if (Array.isArray(t4))
        return qe(t4);
    }(t3) || function(t4) {
      if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
        return Array.from(t4);
    }(t3) || function(t4, e3) {
      if (t4) {
        if (typeof t4 == "string")
          return qe(t4, e3);
        var n3 = Object.prototype.toString.call(t4).slice(8, -1);
        return (n3 = n3 === "Object" && t4.constructor ? t4.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t4) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? qe(t4, e3) : void 0;
      }
    }(t3) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function qe(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  function Ke(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function $e() {
    return ($e = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, n3) {
      var r3 = function(t4, e4) {
        for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Qe(t4)) !== null; )
          ;
        return t4;
      }(t3, e3);
      if (r3) {
        e3 = Object.getOwnPropertyDescriptor(r3, e3);
        return e3.get ? e3.get.call(arguments.length < 3 ? t3 : n3) : e3.value;
      }
    }).apply(this, arguments);
  }
  function Xe(t3, e3) {
    return (Xe = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function Ge(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = Qe(n3);
      return function(t4, e4) {
        {
          if (e4 && (Ye(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = Qe(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function Qe(t3) {
    return (Qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var Ze = "dropdown", Je = ".".concat("bs.dropdown"), tn = ".data-api", en = "Escape", nn = "ArrowUp", rn = "ArrowDown", on = new RegExp("".concat(nn, "|").concat(rn, "|").concat(en)), an = "hide".concat(Je), cn = "hidden".concat(Je), sn = "show".concat(Je), un = "shown".concat(Je), ln = "click".concat(Je).concat(tn), fn = "keydown".concat(Je).concat(tn), dn = "keyup".concat(Je).concat(tn), hn = "show", pn = '[data-bs-toggle="dropdown"]', vn = ".dropdown-menu", mn = m() ? "top-end" : "top-start", gn = m() ? "top-start" : "top-end", yn = m() ? "bottom-end" : "bottom-start", bn = m() ? "bottom-start" : "bottom-end", _n = m() ? "left-start" : "right-start", wn = m() ? "right-start" : "left-start", On = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: true }, kn = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" }, Cn = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Xe(t4, e4);
    }(s2, Q);
    var t3, e3, n3, r3 = Ge(s2);
    function s2(t4, e4) {
      return function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, s2), (t4 = r3.call(this, t4))._popper = null, t4._config = t4._getConfig(e4), t4._menu = t4._getMenuElement(), t4._inNavbar = t4._detectNavbar(), t4;
    }
    return t3 = s2, n3 = [{ key: "Default", get: function() {
      return On;
    } }, { key: "DefaultType", get: function() {
      return kn;
    } }, { key: "NAME", get: function() {
      return Ze;
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = s2.getOrCreateInstance(this, e4);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0)
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4]();
        }
      });
    } }, { key: "clearMenus", value: function(t4) {
      if (!t4 || t4.button !== 2 && (t4.type !== "keyup" || t4.key === "Tab"))
        for (var e4 = Ve.find(pn), n4 = 0, r4 = e4.length; n4 < r4; n4++) {
          var o3 = s2.getInstance(e4[n4]);
          if (o3 && o3._config.autoClose !== false && o3._isShown()) {
            var i3 = { relatedTarget: o3._element };
            if (t4) {
              var a2 = t4.composedPath(), c2 = a2.includes(o3._menu);
              if (a2.includes(o3._element) || o3._config.autoClose === "inside" && !c2 || o3._config.autoClose === "outside" && c2)
                continue;
              if (o3._menu.contains(t4.target) && (t4.type === "keyup" && t4.key === "Tab" || /input|select|option|textarea|form/i.test(t4.target.tagName)))
                continue;
              t4.type === "click" && (i3.clickEvent = t4);
            }
            o3._completeHide(i3);
          }
        }
    } }, { key: "getParentFromElement", value: function(t4) {
      return a(t4) || t4.parentNode;
    } }, { key: "dataApiKeydownHandler", value: function(t4) {
      if (/input|textarea/i.test(t4.target.tagName) ? !(t4.key === "Space" || t4.key !== en && (t4.key !== rn && t4.key !== nn || t4.target.closest(vn))) : on.test(t4.key)) {
        var e4 = this.classList.contains(hn);
        if ((e4 || t4.key !== en) && (t4.preventDefault(), t4.stopPropagation(), !o2(this))) {
          var n4 = this.matches(pn) ? this : Ve.prev(this, pn)[0], n4 = s2.getOrCreateInstance(n4);
          if (t4.key !== en)
            return t4.key === nn || t4.key === rn ? (e4 || n4.show(), void n4._selectMenuItem(t4)) : void (e4 && t4.key !== "Space" || s2.clearMenus());
          n4.hide();
        }
      }
    } }], (e3 = [{ key: "toggle", value: function() {
      return this._isShown() ? this.hide() : this.show();
    } }, { key: "show", value: function() {
      var t4, e4;
      o2(this._element) || this._isShown(this._menu) || (t4 = { relatedTarget: this._element }, z.trigger(this._element, sn, t4).defaultPrevented || (e4 = s2.getParentFromElement(this._element), this._inNavbar ? Be.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e4), "ontouchstart" in document.documentElement && !e4.closest(".navbar-nav") && (e4 = []).concat.apply(e4, Ue(document.body.children)).forEach(function(t5) {
        return z.on(t5, "mouseover", l);
      }), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(hn), this._element.classList.add(hn), z.trigger(this._element, un, t4)));
    } }, { key: "hide", value: function() {
      var t4;
      !o2(this._element) && this._isShown(this._menu) && (t4 = { relatedTarget: this._element }, this._completeHide(t4));
    } }, { key: "dispose", value: function() {
      this._popper && this._popper.destroy(), $e(Qe(s2.prototype), "dispose", this).call(this);
    } }, { key: "update", value: function() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    } }, { key: "_completeHide", value: function(t4) {
      var e4;
      z.trigger(this._element, an, t4).defaultPrevented || ("ontouchstart" in document.documentElement && (e4 = []).concat.apply(e4, Ue(document.body.children)).forEach(function(t5) {
        return z.off(t5, "mouseover", l);
      }), this._popper && this._popper.destroy(), this._menu.classList.remove(hn), this._element.classList.remove(hn), this._element.setAttribute("aria-expanded", "false"), Be.removeDataAttribute(this._menu, "popper"), z.trigger(this._element, cn, t4));
    } }, { key: "_getConfig", value: function(t4) {
      if (t4 = ze(ze(ze({}, this.constructor.Default), Be.getDataAttributes(this._element)), t4), h2(Ze, t4, this.constructor.DefaultType), Ye(t4.reference) === "object" && !C(t4.reference) && typeof t4.reference.getBoundingClientRect != "function")
        throw new TypeError("".concat(Ze.toUpperCase(), ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'));
      return t4;
    } }, { key: "_createPopper", value: function(t4) {
      if (i2 === void 0)
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      var e4 = this._element;
      this._config.reference === "parent" ? e4 = t4 : C(this._config.reference) ? e4 = d(this._config.reference) : Ye(this._config.reference) === "object" && (e4 = this._config.reference);
      var n4 = this._getPopperConfig(), t4 = n4.modifiers.find(function(t5) {
        return t5.name === "applyStyles" && t5.enabled === false;
      });
      this._popper = Ie(e4, this._menu, n4), t4 && Be.setDataAttribute(this._menu, "popper", "static");
    } }, { key: "_isShown", value: function() {
      return (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this._element).classList.contains(hn);
    } }, { key: "_getMenuElement", value: function() {
      return Ve.next(this._element, vn)[0];
    } }, { key: "_getPlacement", value: function() {
      var t4 = this._element.parentNode;
      if (t4.classList.contains("dropend"))
        return _n;
      if (t4.classList.contains("dropstart"))
        return wn;
      var e4 = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      return t4.classList.contains("dropup") ? e4 ? gn : mn : e4 ? bn : yn;
    } }, { key: "_detectNavbar", value: function() {
      return this._element.closest(".".concat("navbar")) !== null;
    } }, { key: "_getOffset", value: function() {
      var e4 = this, n4 = this._config.offset;
      return typeof n4 == "string" ? n4.split(",").map(function(t4) {
        return Number.parseInt(t4, 10);
      }) : typeof n4 == "function" ? function(t4) {
        return n4(t4, e4._element);
      } : n4;
    } }, { key: "_getPopperConfig", value: function() {
      var t4 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return this._config.display === "static" && (t4.modifiers = [{ name: "applyStyles", enabled: false }]), ze(ze({}, t4), typeof this._config.popperConfig == "function" ? this._config.popperConfig(t4) : this._config.popperConfig);
    } }, { key: "_selectMenuItem", value: function(t4) {
      var e4 = t4.key, n4 = t4.target, t4 = Ve.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(u);
      t4.length && _(t4, n4, e4 === rn, !t4.includes(n4)).focus();
    } }]) && Ke(t3.prototype, e3), n3 && Ke(t3, n3), s2;
  }();
  z.on(document, fn, pn, Cn.dataApiKeydownHandler), z.on(document, fn, vn, Cn.dataApiKeydownHandler), z.on(document, ln, Cn.clearMenus), z.on(document, dn, Cn.clearMenus), z.on(document, ln, pn, function(t3) {
    t3.preventDefault(), Cn.getOrCreateInstance(this).toggle();
  }), g(Cn);
  var Sn = Cn;
  function En(t3) {
    return (En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function xn(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function jn(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? xn(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : xn(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function Tn(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function An(t3, e3) {
    return (An = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function Dn(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = Pn(n3);
      return function(t4, e4) {
        {
          if (e4 && (En(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = Pn(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function Pn(t3) {
    return (Pn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var Mn = "collapse", In = "bs.collapse", Ln = ".".concat(In), Nn = { toggle: true, parent: null }, Rn = { toggle: "boolean", parent: "(null|element)" }, Bn = "show".concat(Ln), Hn = "shown".concat(Ln), Fn = "hide".concat(Ln), Vn = "hidden".concat(Ln), Yn = "click".concat(Ln).concat(".data-api"), Wn = "show", zn = "collapse", Un = "collapsing", qn = "collapsed", Kn = ":scope .".concat(zn, " .").concat(zn), $n = '[data-bs-toggle="collapse"]', Xn = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && An(t4, e4);
    }(l2, Q);
    var t3, e3, n3, u2 = Dn(l2);
    function l2(t4, e4) {
      var n4;
      !function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, l2), (n4 = u2.call(this, t4))._isTransitioning = false, n4._config = n4._getConfig(e4), n4._triggerArray = [];
      for (var r3 = Ve.find($n), o3 = 0, i3 = r3.length; o3 < i3; o3++) {
        var a2 = r3[o3], c2 = f(a2), s2 = Ve.find(c2).filter(function(t5) {
          return t5 === n4._element;
        });
        c2 !== null && s2.length && (n4._selector = c2, n4._triggerArray.push(a2));
      }
      return n4._initializeChildren(), n4._config.parent || n4._addAriaAndCollapsedClass(n4._triggerArray, n4._isShown()), n4._config.toggle && n4.toggle(), n4;
    }
    return t3 = l2, n3 = [{ key: "Default", get: function() {
      return Nn;
    } }, { key: "NAME", get: function() {
      return Mn;
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = {};
        typeof e4 == "string" && /show|hide/.test(e4) && (t4.toggle = false);
        t4 = l2.getOrCreateInstance(this, t4);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0)
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4]();
        }
      });
    } }], (e3 = [{ key: "toggle", value: function() {
      this._isShown() ? this.hide() : this.show();
    } }, { key: "show", value: function() {
      var t4 = this;
      if (!this._isTransitioning && !this._isShown()) {
        var e4, n4 = [];
        this._config.parent && (e4 = Ve.find(Kn, this._config.parent), n4 = Ve.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function(t5) {
          return !e4.includes(t5);
        }));
        var r3, o3 = Ve.findOne(this._selector);
        if (n4.length) {
          var i3, a2 = n4.find(function(t5) {
            return o3 !== t5;
          });
          if ((i3 = a2 ? l2.getInstance(a2) : null) && i3._isTransitioning)
            return;
        }
        z.trigger(this._element, Bn).defaultPrevented || (n4.forEach(function(t5) {
          o3 !== t5 && l2.getOrCreateInstance(t5, { toggle: false }).hide(), i3 || q(t5, In, null);
        }), r3 = this._getDimension(), this._element.classList.remove(zn), this._element.classList.add(Un), this._element.style[r3] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true, n4 = r3[0].toUpperCase() + r3.slice(1), n4 = "scroll".concat(n4), this._queueCallback(function() {
          t4._isTransitioning = false, t4._element.classList.remove(Un), t4._element.classList.add(zn, Wn), t4._element.style[r3] = "", z.trigger(t4._element, Hn);
        }, this._element, true), this._element.style[r3] = "".concat(this._element[n4], "px"));
      }
    } }, { key: "hide", value: function() {
      var t4 = this;
      if (!this._isTransitioning && this._isShown() && !z.trigger(this._element, Fn).defaultPrevented) {
        var e4 = this._getDimension();
        this._element.style[e4] = "".concat(this._element.getBoundingClientRect()[e4], "px"), p2(this._element), this._element.classList.add(Un), this._element.classList.remove(zn, Wn);
        for (var n4 = this._triggerArray.length, r3 = 0; r3 < n4; r3++) {
          var o3 = this._triggerArray[r3], i3 = a(o3);
          i3 && !this._isShown(i3) && this._addAriaAndCollapsedClass([o3], false);
        }
        this._isTransitioning = true;
        this._element.style[e4] = "", this._queueCallback(function() {
          t4._isTransitioning = false, t4._element.classList.remove(Un), t4._element.classList.add(zn), z.trigger(t4._element, Vn);
        }, this._element, true);
      }
    } }, { key: "_isShown", value: function() {
      return (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this._element).classList.contains(Wn);
    } }, { key: "_getConfig", value: function(t4) {
      return (t4 = jn(jn(jn({}, Nn), Be.getDataAttributes(this._element)), t4)).toggle = Boolean(t4.toggle), t4.parent = d(t4.parent), h2(Mn, t4, Rn), t4;
    } }, { key: "_getDimension", value: function() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    } }, { key: "_initializeChildren", value: function() {
      var e4, n4 = this;
      this._config.parent && (e4 = Ve.find(Kn, this._config.parent), Ve.find($n, this._config.parent).filter(function(t4) {
        return !e4.includes(t4);
      }).forEach(function(t4) {
        var e5 = a(t4);
        e5 && n4._addAriaAndCollapsedClass([t4], n4._isShown(e5));
      }));
    } }, { key: "_addAriaAndCollapsedClass", value: function(t4, e4) {
      t4.length && t4.forEach(function(t5) {
        e4 ? t5.classList.remove(qn) : t5.classList.add(qn), t5.setAttribute("aria-expanded", e4);
      });
    } }]) && Tn(t3.prototype, e3), n3 && Tn(t3, n3), l2;
  }();
  z.on(document, Yn, $n, function(t3) {
    (t3.target.tagName === "A" || t3.delegateTarget && t3.delegateTarget.tagName === "A") && t3.preventDefault();
    t3 = f(this);
    Ve.find(t3).forEach(function(t4) {
      Xn.getOrCreateInstance(t4, { toggle: false }).toggle();
    });
  }), g(Xn);
  var Gn = Xn;
  function Qn(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  var Zn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Jn = ".sticky-top", tr = function() {
    function t3() {
      !function(t4, e4) {
        if (!(t4 instanceof e4))
          throw new TypeError("Cannot call a class as a function");
      }(this, t3), this._element = document.body;
    }
    var e3, n3;
    return e3 = t3, (n3 = [{ key: "getWidth", value: function() {
      var t4 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t4);
    } }, { key: "hide", value: function() {
      var e4 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function(t4) {
        return t4 + e4;
      }), this._setElementAttributes(Zn, "paddingRight", function(t4) {
        return t4 + e4;
      }), this._setElementAttributes(Jn, "marginRight", function(t4) {
        return t4 - e4;
      });
    } }, { key: "_disableOverFlow", value: function() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    } }, { key: "_setElementAttributes", value: function(t4, n4, r3) {
      var o3 = this, i3 = this.getWidth();
      this._applyManipulationCallback(t4, function(t5) {
        var e4;
        t5 !== o3._element && window.innerWidth > t5.clientWidth + i3 || (o3._saveInitialAttribute(t5, n4), e4 = window.getComputedStyle(t5)[n4], t5.style[n4] = "".concat(r3(Number.parseFloat(e4)), "px"));
      });
    } }, { key: "reset", value: function() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Zn, "paddingRight"), this._resetElementAttributes(Jn, "marginRight");
    } }, { key: "_saveInitialAttribute", value: function(t4, e4) {
      var n4 = t4.style[e4];
      n4 && Be.setDataAttribute(t4, e4, n4);
    } }, { key: "_resetElementAttributes", value: function(t4, n4) {
      this._applyManipulationCallback(t4, function(t5) {
        var e4 = Be.getDataAttribute(t5, n4);
        e4 === void 0 ? t5.style.removeProperty(n4) : (Be.removeDataAttribute(t5, n4), t5.style[n4] = e4);
      });
    } }, { key: "_applyManipulationCallback", value: function(t4, e4) {
      C(t4) ? e4(t4) : Ve.find(t4, this._element).forEach(e4);
    } }, { key: "isOverflowing", value: function() {
      return 0 < this.getWidth();
    } }]) && Qn(e3.prototype, n3), t3;
  }();
  function er(t3) {
    return (er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function nr(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function rr(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? nr(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : nr(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function or(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  var ir = { className: "modal-backdrop", isVisible: true, isAnimated: false, rootElement: "body", clickCallback: null }, ar = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" }, cr = "backdrop", sr = "mousedown.bs.".concat(cr), ur = function() {
    function e3(t4) {
      !function(t5, e4) {
        if (!(t5 instanceof e4))
          throw new TypeError("Cannot call a class as a function");
      }(this, e3), this._config = this._getConfig(t4), this._isAppended = false, this._element = null;
    }
    var t3, n3;
    return t3 = e3, (n3 = [{ key: "show", value: function(t4) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && p2(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function() {
        y(t4);
      })) : y(t4);
    } }, { key: "hide", value: function(t4) {
      var e4 = this;
      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function() {
        e4.dispose(), y(t4);
      })) : y(t4);
    } }, { key: "_getElement", value: function() {
      var t4;
      return this._element || ((t4 = document.createElement("div")).className = this._config.className, this._config.isAnimated && t4.classList.add("fade"), this._element = t4), this._element;
    } }, { key: "_getConfig", value: function(t4) {
      return (t4 = rr(rr({}, ir), er(t4) === "object" ? t4 : {})).rootElement = d(t4.rootElement), h2(cr, t4, ar), t4;
    } }, { key: "_append", value: function() {
      var t4 = this;
      this._isAppended || (this._config.rootElement.append(this._getElement()), z.on(this._getElement(), sr, function() {
        y(t4._config.clickCallback);
      }), this._isAppended = true);
    } }, { key: "dispose", value: function() {
      this._isAppended && (z.off(this._element, sr), this._element.remove(), this._isAppended = false);
    } }, { key: "_emulateAnimation", value: function(t4) {
      b(t4, this._getElement(), this._config.isAnimated);
    } }]) && or(t3.prototype, n3), e3;
  }();
  function lr(t3) {
    return (lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function fr(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function dr(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? fr(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : fr(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function hr(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function pr(e3) {
    var n3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "hide", t3 = "click.dismiss".concat(e3.EVENT_KEY), r3 = e3.NAME;
    z.on(document, t3, '[data-bs-dismiss="'.concat(r3, '"]'), function(t4) {
      ["A", "AREA"].includes(this.tagName) && t4.preventDefault(), o2(this) || (t4 = a(this) || this.closest(".".concat(r3)), e3.getOrCreateInstance(t4)[n3]());
    });
  }
  var vr = { trapElement: null, autofocus: true }, mr = { trapElement: "element", autofocus: "boolean" }, gr = ".".concat("bs.focustrap"), yr = "focusin".concat(gr), br = "keydown.tab".concat(gr), _r = "backward", wr = function() {
    function e3(t4) {
      !function(t5, e4) {
        if (!(t5 instanceof e4))
          throw new TypeError("Cannot call a class as a function");
      }(this, e3), this._config = this._getConfig(t4), this._isActive = false, this._lastTabNavDirection = null;
    }
    var t3, n3;
    return t3 = e3, (n3 = [{ key: "activate", value: function() {
      var e4 = this, t4 = this._config, n4 = t4.trapElement, t4 = t4.autofocus;
      this._isActive || (t4 && n4.focus(), z.off(document, gr), z.on(document, yr, function(t5) {
        return e4._handleFocusin(t5);
      }), z.on(document, br, function(t5) {
        return e4._handleKeydown(t5);
      }), this._isActive = true);
    } }, { key: "deactivate", value: function() {
      this._isActive && (this._isActive = false, z.off(document, gr));
    } }, { key: "_handleFocusin", value: function(t4) {
      var e4 = t4.target, t4 = this._config.trapElement;
      e4 === document || e4 === t4 || t4.contains(e4) || ((e4 = Ve.focusableChildren(t4)).length === 0 ? t4 : this._lastTabNavDirection === _r ? e4[e4.length - 1] : e4[0]).focus();
    } }, { key: "_handleKeydown", value: function(t4) {
      t4.key === "Tab" && (this._lastTabNavDirection = t4.shiftKey ? _r : "forward");
    } }, { key: "_getConfig", value: function(t4) {
      return t4 = dr(dr({}, vr), lr(t4) === "object" ? t4 : {}), h2("focustrap", t4, mr), t4;
    } }]) && hr(t3.prototype, n3), e3;
  }();
  function Or(t3) {
    return (Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function kr(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function Cr(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? kr(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : kr(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function Sr(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function Er() {
    return (Er = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, n3) {
      var r3 = function(t4, e4) {
        for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Tr(t4)) !== null; )
          ;
        return t4;
      }(t3, e3);
      if (r3) {
        e3 = Object.getOwnPropertyDescriptor(r3, e3);
        return e3.get ? e3.get.call(arguments.length < 3 ? t3 : n3) : e3.value;
      }
    }).apply(this, arguments);
  }
  function xr(t3, e3) {
    return (xr = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function jr(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = Tr(n3);
      return function(t4, e4) {
        {
          if (e4 && (Or(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = Tr(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function Tr(t3) {
    return (Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var Ar = "offcanvas", Dr = ".".concat("bs.offcanvas"), e2 = ".data-api", rt = "load".concat(Dr).concat(e2), Pr = { backdrop: true, keyboard: true, scroll: false }, Mr = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" }, Ir = ".offcanvas.show", Lr = "show".concat(Dr), Nr = "shown".concat(Dr), Rr = "hide".concat(Dr), Br = "hidden".concat(Dr), it = "click".concat(Dr).concat(e2), Hr = "keydown.dismiss".concat(Dr), Fr = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && xr(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = jr(o3);
    function o3(t4, e4) {
      return function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), (t4 = r3.call(this, t4))._config = t4._getConfig(e4), t4._isShown = false, t4._backdrop = t4._initializeBackDrop(), t4._focustrap = t4._initializeFocusTrap(), t4._addEventListeners(), t4;
    }
    return t3 = o3, n3 = [{ key: "NAME", get: function() {
      return Ar;
    } }, { key: "Default", get: function() {
      return Pr;
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this, e4);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0 || e4.startsWith("_") || e4 === "constructor")
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4](this);
        }
      });
    } }], (e3 = [{ key: "toggle", value: function(t4) {
      return this._isShown ? this.hide() : this.show(t4);
    } }, { key: "show", value: function(t4) {
      var e4 = this;
      this._isShown || z.trigger(this._element, Lr, { relatedTarget: t4 }).defaultPrevented || (this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new tr().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function() {
        e4._config.scroll || e4._focustrap.activate(), z.trigger(e4._element, Nr, { relatedTarget: t4 });
      }, this._element, true));
    } }, { key: "hide", value: function() {
      var t4 = this;
      this._isShown && (z.trigger(this._element, Rr).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function() {
        t4._element.setAttribute("aria-hidden", true), t4._element.removeAttribute("aria-modal"), t4._element.removeAttribute("role"), t4._element.style.visibility = "hidden", t4._config.scroll || new tr().reset(), z.trigger(t4._element, Br);
      }, this._element, true)));
    } }, { key: "dispose", value: function() {
      this._backdrop.dispose(), this._focustrap.deactivate(), Er(Tr(o3.prototype), "dispose", this).call(this);
    } }, { key: "_getConfig", value: function(t4) {
      return t4 = Cr(Cr(Cr({}, Pr), Be.getDataAttributes(this._element)), Or(t4) === "object" ? t4 : {}), h2(Ar, t4, Mr), t4;
    } }, { key: "_initializeBackDrop", value: function() {
      var t4 = this;
      return new ur({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: true, rootElement: this._element.parentNode, clickCallback: function() {
        return t4.hide();
      } });
    } }, { key: "_initializeFocusTrap", value: function() {
      return new wr({ trapElement: this._element });
    } }, { key: "_addEventListeners", value: function() {
      var e4 = this;
      z.on(this._element, Hr, function(t4) {
        e4._config.keyboard && t4.key === "Escape" && e4.hide();
      });
    } }]) && Sr(t3.prototype, e3), n3 && Sr(t3, n3), o3;
  }();
  z.on(document, it, '[data-bs-toggle="offcanvas"]', function(t3) {
    var e3 = this, n3 = a(this);
    ["A", "AREA"].includes(this.tagName) && t3.preventDefault(), o2(this) || (z.one(n3, Br, function() {
      u(e3) && e3.focus();
    }), (t3 = Ve.findOne(Ir)) && t3 !== n3 && Fr.getInstance(t3).hide(), Fr.getOrCreateInstance(n3).toggle(this));
  }), z.on(window, rt, function() {
    return Ve.find(Ir).forEach(function(t3) {
      return Fr.getOrCreateInstance(t3).show();
    });
  }), pr(Fr), g(Fr);
  Je = Fr;
  function Vr(t3) {
    return (Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function Yr(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function Wr(t3, e3) {
    return (Wr = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function zr(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = Ur(n3);
      return function(t4, e4) {
        {
          if (e4 && (Vr(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = Ur(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function Ur(t3) {
    return (Ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var tn = ".".concat("bs.alert"), qr = "close".concat(tn), Kr = "closed".concat(tn), fn = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Wr(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = zr(o3);
    function o3() {
      return function(t4, e4) {
        if (!(t4 instanceof e4))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), r3.apply(this, arguments);
    }
    return t3 = o3, n3 = [{ key: "NAME", get: function() {
      return "alert";
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0 || e4.startsWith("_") || e4 === "constructor")
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4](this);
        }
      });
    } }], (e3 = [{ key: "close", value: function() {
      var t4, e4 = this;
      z.trigger(this._element, qr).defaultPrevented || (this._element.classList.remove("show"), t4 = this._element.classList.contains("fade"), this._queueCallback(function() {
        return e4._destroyElement();
      }, this._element, t4));
    } }, { key: "_destroyElement", value: function() {
      this._element.remove(), z.trigger(this._element, Kr), this.dispose();
    } }]) && Yr(t3.prototype, e3), n3 && Yr(t3, n3), o3;
  }();
  pr(fn, "close"), g(fn);
  dn = fn;
  function $r(t3) {
    return ($r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function Xr(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function Gr(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? Xr(Object(n3), true).forEach(function(t4) {
        eo(e3, t4, n3[t4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Xr(Object(n3)).forEach(function(t4) {
        Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
      });
    }
    return e3;
  }
  function Qr(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function Zr(t3, e3) {
    return (Zr = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function Jr(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = to(n3);
      return function(t4, e4) {
        {
          if (e4 && ($r(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = to(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function to(t3) {
    return (to = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  function eo(t3, e3, n3) {
    return e3 in t3 ? Object.defineProperty(t3, e3, { value: n3, enumerable: true, configurable: true, writable: true }) : t3[e3] = n3, t3;
  }
  var no = "carousel", ln = ".".concat("bs.carousel"), Ln = ".data-api", ro = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, oo = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, io = "next", ao = "prev", co = "left", so = "right", uo = (eo(Yn = {}, "ArrowLeft", so), eo(Yn, "ArrowRight", co), Yn), lo = "slide".concat(ln), fo = "slid".concat(ln), ho = "keydown".concat(ln), po = "mouseenter".concat(ln), vo = "mouseleave".concat(ln), mo = "touchstart".concat(ln), go = "touchmove".concat(ln), yo = "touchend".concat(ln), bo = "pointerdown".concat(ln), _o = "pointerup".concat(ln), wo = "dragstart".concat(ln), e2 = "load".concat(ln).concat(Ln), Dr = "click".concat(ln).concat(Ln), Oo = "active", ko = ".active.carousel-item", Co = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Zr(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = Jr(o3);
    function o3(t4, e4) {
      return function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), (t4 = r3.call(this, t4))._items = null, t4._interval = null, t4._activeElement = null, t4._isPaused = false, t4._isSliding = false, t4.touchTimeout = null, t4.touchStartX = 0, t4.touchDeltaX = 0, t4._config = t4._getConfig(e4), t4._indicatorsElement = Ve.findOne(".carousel-indicators", t4._element), t4._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, t4._pointerEvent = Boolean(window.PointerEvent), t4._addEventListeners(), t4;
    }
    return t3 = o3, n3 = [{ key: "Default", get: function() {
      return ro;
    } }, { key: "NAME", get: function() {
      return no;
    } }, { key: "carouselInterface", value: function(t4, e4) {
      var n4 = o3.getOrCreateInstance(t4, e4), r4 = n4._config;
      $r(e4) === "object" && (r4 = Gr(Gr({}, r4), e4));
      t4 = typeof e4 == "string" ? e4 : r4.slide;
      if (typeof e4 == "number")
        n4.to(e4);
      else if (typeof t4 == "string") {
        if (n4[t4] === void 0)
          throw new TypeError('No method named "'.concat(t4, '"'));
        n4[t4]();
      } else
        r4.interval && r4.ride && (n4.pause(), n4.cycle());
    } }, { key: "jQueryInterface", value: function(t4) {
      return this.each(function() {
        o3.carouselInterface(this, t4);
      });
    } }, { key: "dataApiClickHandler", value: function(t4) {
      var e4, n4, r4 = a(this);
      r4 && r4.classList.contains("carousel") && (e4 = Gr(Gr({}, Be.getDataAttributes(r4)), Be.getDataAttributes(this)), (n4 = this.getAttribute("data-bs-slide-to")) && (e4.interval = false), o3.carouselInterface(r4, e4), n4 && o3.getInstance(r4).to(n4), t4.preventDefault());
    } }], (e3 = [{ key: "next", value: function() {
      this._slide(io);
    } }, { key: "nextWhenVisible", value: function() {
      !document.hidden && u(this._element) && this.next();
    } }, { key: "prev", value: function() {
      this._slide(ao);
    } }, { key: "pause", value: function(t4) {
      t4 || (this._isPaused = true), Ve.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (c(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    } }, { key: "cycle", value: function(t4) {
      t4 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    } }, { key: "to", value: function(t4) {
      var e4 = this;
      this._activeElement = Ve.findOne(ko, this._element);
      var n4 = this._getItemIndex(this._activeElement);
      if (!(t4 > this._items.length - 1 || t4 < 0))
        if (this._isSliding)
          z.one(this._element, fo, function() {
            return e4.to(t4);
          });
        else {
          if (n4 === t4)
            return this.pause(), void this.cycle();
          this._slide(n4 < t4 ? io : ao, this._items[t4]);
        }
    } }, { key: "_getConfig", value: function(t4) {
      return t4 = Gr(Gr(Gr({}, ro), Be.getDataAttributes(this._element)), $r(t4) === "object" ? t4 : {}), h2(no, t4, oo), t4;
    } }, { key: "_handleSwipe", value: function() {
      var t4 = Math.abs(this.touchDeltaX);
      t4 <= 40 || (t4 = t4 / this.touchDeltaX, this.touchDeltaX = 0, t4 && this._slide(0 < t4 ? so : co));
    } }, { key: "_addEventListeners", value: function() {
      var e4 = this;
      this._config.keyboard && z.on(this._element, ho, function(t4) {
        return e4._keydown(t4);
      }), this._config.pause === "hover" && (z.on(this._element, po, function(t4) {
        return e4.pause(t4);
      }), z.on(this._element, vo, function(t4) {
        return e4.cycle(t4);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    } }, { key: "_addTouchEventListeners", value: function() {
      function t4(t5) {
        r4(t5) ? n4.touchStartX = t5.clientX : n4._pointerEvent || (n4.touchStartX = t5.touches[0].clientX);
      }
      function e4(t5) {
        r4(t5) && (n4.touchDeltaX = t5.clientX - n4.touchStartX), n4._handleSwipe(), n4._config.pause === "hover" && (n4.pause(), n4.touchTimeout && clearTimeout(n4.touchTimeout), n4.touchTimeout = setTimeout(function(t6) {
          return n4.cycle(t6);
        }, 500 + n4._config.interval));
      }
      var n4 = this, r4 = function(t5) {
        return n4._pointerEvent && (t5.pointerType === "pen" || t5.pointerType === "touch");
      };
      Ve.find(".carousel-item img", this._element).forEach(function(t5) {
        z.on(t5, wo, function(t6) {
          return t6.preventDefault();
        });
      }), this._pointerEvent ? (z.on(this._element, bo, t4), z.on(this._element, _o, e4), this._element.classList.add("pointer-event")) : (z.on(this._element, mo, t4), z.on(this._element, go, function(t5) {
        t5 = t5, n4.touchDeltaX = t5.touches && 1 < t5.touches.length ? 0 : t5.touches[0].clientX - n4.touchStartX;
      }), z.on(this._element, yo, e4));
    } }, { key: "_keydown", value: function(t4) {
      var e4;
      /input|textarea/i.test(t4.target.tagName) || (e4 = uo[t4.key]) && (t4.preventDefault(), this._slide(e4));
    } }, { key: "_getItemIndex", value: function(t4) {
      return this._items = t4 && t4.parentNode ? Ve.find(".carousel-item", t4.parentNode) : [], this._items.indexOf(t4);
    } }, { key: "_getItemByOrder", value: function(t4, e4) {
      return _(this._items, e4, t4 === io, this._config.wrap);
    } }, { key: "_triggerSlideEvent", value: function(t4, e4) {
      var n4 = this._getItemIndex(t4), r4 = this._getItemIndex(Ve.findOne(ko, this._element));
      return z.trigger(this._element, lo, { relatedTarget: t4, direction: e4, from: r4, to: n4 });
    } }, { key: "_setActiveIndicatorElement", value: function(t4) {
      if (this._indicatorsElement) {
        var e4 = Ve.findOne(".active", this._indicatorsElement);
        e4.classList.remove(Oo), e4.removeAttribute("aria-current");
        for (var n4 = Ve.find("[data-bs-target]", this._indicatorsElement), r4 = 0; r4 < n4.length; r4++)
          if (Number.parseInt(n4[r4].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t4)) {
            n4[r4].classList.add(Oo), n4[r4].setAttribute("aria-current", "true");
            break;
          }
      }
    } }, { key: "_updateInterval", value: function() {
      var t4 = this._activeElement || Ve.findOne(ko, this._element);
      t4 && ((t4 = Number.parseInt(t4.getAttribute("data-bs-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t4) : this._config.interval = this._config.defaultInterval || this._config.interval);
    } }, { key: "_slide", value: function(t4, e4) {
      var n4, r4 = this, o4 = this._directionToOrder(t4), i3 = Ve.findOne(ko, this._element), a2 = this._getItemIndex(i3), c2 = e4 || this._getItemByOrder(o4, i3), s2 = this._getItemIndex(c2), t4 = Boolean(this._interval), e4 = o4 === io, u2 = e4 ? "carousel-item-start" : "carousel-item-end", l2 = e4 ? "carousel-item-next" : "carousel-item-prev", f2 = this._orderToDirection(o4);
      c2 && c2.classList.contains(Oo) ? this._isSliding = false : this._isSliding || this._triggerSlideEvent(c2, f2).defaultPrevented || i3 && c2 && (this._isSliding = true, t4 && this.pause(), this._setActiveIndicatorElement(c2), this._activeElement = c2, n4 = function() {
        z.trigger(r4._element, fo, { relatedTarget: c2, direction: f2, from: a2, to: s2 });
      }, this._element.classList.contains("slide") ? (c2.classList.add(l2), p2(c2), i3.classList.add(u2), c2.classList.add(u2), this._queueCallback(function() {
        c2.classList.remove(u2, l2), c2.classList.add(Oo), i3.classList.remove(Oo, l2, u2), r4._isSliding = false, setTimeout(n4, 0);
      }, i3, true)) : (i3.classList.remove(Oo), c2.classList.add(Oo), this._isSliding = false, n4()), t4 && this.cycle());
    } }, { key: "_directionToOrder", value: function(t4) {
      return [so, co].includes(t4) ? m() ? t4 === co ? ao : io : t4 === co ? io : ao : t4;
    } }, { key: "_orderToDirection", value: function(t4) {
      return [io, ao].includes(t4) ? m() ? t4 === ao ? co : so : t4 === ao ? so : co : t4;
    } }]) && Qr(t3.prototype, e3), n3 && Qr(t3, n3), o3;
  }();
  z.on(document, Dr, "[data-bs-slide], [data-bs-slide-to]", Co.dataApiClickHandler), z.on(window, e2, function() {
    for (var t3 = Ve.find('[data-bs-ride="carousel"]'), e3 = 0, n3 = t3.length; e3 < n3; e3++)
      Co.carouselInterface(t3[e3], Co.getInstance(t3[e3]));
  }), g(Co);
  it = Co;
  function So(t3) {
    return (So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function Eo(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function xo(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? Eo(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : Eo(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function jo(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function To() {
    return (To = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, n3) {
      var r3 = function(t4, e4) {
        for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Po(t4)) !== null; )
          ;
        return t4;
      }(t3, e3);
      if (r3) {
        e3 = Object.getOwnPropertyDescriptor(r3, e3);
        return e3.get ? e3.get.call(arguments.length < 3 ? t3 : n3) : e3.value;
      }
    }).apply(this, arguments);
  }
  function Ao(t3, e3) {
    return (Ao = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function Do(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = Po(n3);
      return function(t4, e4) {
        {
          if (e4 && (So(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = Po(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function Po(t3) {
    return (Po = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var Mo = ".".concat("bs.modal"), Io = { backdrop: true, keyboard: true, focus: true }, Lo = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" }, No = "hide".concat(Mo), Ro = "hidePrevented".concat(Mo), Bo = "hidden".concat(Mo), Ho = "show".concat(Mo), Fo = "shown".concat(Mo), Vo = "resize".concat(Mo), Yo = "click.dismiss".concat(Mo), Wo = "keydown.dismiss".concat(Mo), zo = "mouseup.dismiss".concat(Mo), Uo = "mousedown.dismiss".concat(Mo), rt = "click".concat(Mo).concat(".data-api"), qo = "modal-open", Ko = "modal-static", $o = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ao(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = Do(o3);
    function o3(t4, e4) {
      return function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), (t4 = r3.call(this, t4))._config = t4._getConfig(e4), t4._dialog = Ve.findOne(".modal-dialog", t4._element), t4._backdrop = t4._initializeBackDrop(), t4._focustrap = t4._initializeFocusTrap(), t4._isShown = false, t4._ignoreBackdropClick = false, t4._isTransitioning = false, t4._scrollBar = new tr(), t4;
    }
    return t3 = o3, n3 = [{ key: "Default", get: function() {
      return Io;
    } }, { key: "NAME", get: function() {
      return "modal";
    } }, { key: "jQueryInterface", value: function(e4, n4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this, e4);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0)
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4](n4);
        }
      });
    } }], (e3 = [{ key: "toggle", value: function(t4) {
      return this._isShown ? this.hide() : this.show(t4);
    } }, { key: "show", value: function(t4) {
      var e4 = this;
      this._isShown || this._isTransitioning || z.trigger(this._element, Ho, { relatedTarget: t4 }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.classList.add(qo), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), z.on(this._dialog, Uo, function() {
        z.one(e4._element, zo, function(t5) {
          t5.target === e4._element && (e4._ignoreBackdropClick = true);
        });
      }), this._showBackdrop(function() {
        return e4._showElement(t4);
      }));
    } }, { key: "hide", value: function() {
      var t4, e4 = this;
      this._isShown && !this._isTransitioning && (z.trigger(this._element, No).defaultPrevented || (this._isShown = false, (t4 = this._isAnimated()) && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), z.off(this._element, Yo), z.off(this._dialog, Uo), this._queueCallback(function() {
        return e4._hideModal();
      }, this._element, t4)));
    } }, { key: "dispose", value: function() {
      [window, this._dialog].forEach(function(t4) {
        return z.off(t4, Mo);
      }), this._backdrop.dispose(), this._focustrap.deactivate(), To(Po(o3.prototype), "dispose", this).call(this);
    } }, { key: "handleUpdate", value: function() {
      this._adjustDialog();
    } }, { key: "_initializeBackDrop", value: function() {
      return new ur({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    } }, { key: "_initializeFocusTrap", value: function() {
      return new wr({ trapElement: this._element });
    } }, { key: "_getConfig", value: function(t4) {
      return t4 = xo(xo(xo({}, Io), Be.getDataAttributes(this._element)), So(t4) === "object" ? t4 : {}), h2("modal", t4, Lo), t4;
    } }, { key: "_showElement", value: function(t4) {
      var e4 = this, n4 = this._isAnimated(), r4 = Ve.findOne(".modal-body", this._dialog);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, r4 && (r4.scrollTop = 0), n4 && p2(this._element), this._element.classList.add("show");
      this._queueCallback(function() {
        e4._config.focus && e4._focustrap.activate(), e4._isTransitioning = false, z.trigger(e4._element, Fo, { relatedTarget: t4 });
      }, this._dialog, n4);
    } }, { key: "_setEscapeEvent", value: function() {
      var e4 = this;
      this._isShown ? z.on(this._element, Wo, function(t4) {
        e4._config.keyboard && t4.key === "Escape" ? (t4.preventDefault(), e4.hide()) : e4._config.keyboard || t4.key !== "Escape" || e4._triggerBackdropTransition();
      }) : z.off(this._element, Wo);
    } }, { key: "_setResizeEvent", value: function() {
      var t4 = this;
      this._isShown ? z.on(window, Vo, function() {
        return t4._adjustDialog();
      }) : z.off(window, Vo);
    } }, { key: "_hideModal", value: function() {
      var t4 = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(function() {
        document.body.classList.remove(qo), t4._resetAdjustments(), t4._scrollBar.reset(), z.trigger(t4._element, Bo);
      });
    } }, { key: "_showBackdrop", value: function(t4) {
      var e4 = this;
      z.on(this._element, Yo, function(t5) {
        e4._ignoreBackdropClick ? e4._ignoreBackdropClick = false : t5.target === t5.currentTarget && (e4._config.backdrop === true ? e4.hide() : e4._config.backdrop === "static" && e4._triggerBackdropTransition());
      }), this._backdrop.show(t4);
    } }, { key: "_isAnimated", value: function() {
      return this._element.classList.contains("fade");
    } }, { key: "_triggerBackdropTransition", value: function() {
      var t4, e4, n4, r4, o4, i3 = this;
      z.trigger(this._element, Ro).defaultPrevented || (t4 = this._element, e4 = t4.classList, n4 = t4.scrollHeight, r4 = t4.style, !(o4 = n4 > document.documentElement.clientHeight) && r4.overflowY === "hidden" || e4.contains(Ko) || (o4 || (r4.overflowY = "hidden"), e4.add(Ko), this._queueCallback(function() {
        e4.remove(Ko), o4 || i3._queueCallback(function() {
          r4.overflowY = "";
        }, i3._dialog);
      }, this._dialog), this._element.focus()));
    } }, { key: "_adjustDialog", value: function() {
      var t4 = this._element.scrollHeight > document.documentElement.clientHeight, e4 = this._scrollBar.getWidth(), n4 = 0 < e4;
      (!n4 && t4 && !m() || n4 && !t4 && m()) && (this._element.style.paddingLeft = "".concat(e4, "px")), (n4 && !t4 && !m() || !n4 && t4 && m()) && (this._element.style.paddingRight = "".concat(e4, "px"));
    } }, { key: "_resetAdjustments", value: function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    } }]) && jo(t3.prototype, e3), n3 && jo(t3, n3), o3;
  }();
  z.on(document, rt, '[data-bs-toggle="modal"]', function(t3) {
    var e3 = this, n3 = a(this);
    ["A", "AREA"].includes(this.tagName) && t3.preventDefault(), z.one(n3, Ho, function(t4) {
      t4.defaultPrevented || z.one(n3, Bo, function() {
        u(e3) && e3.focus();
      });
    });
    t3 = Ve.findOne(".modal.show");
    t3 && $o.getInstance(t3).hide(), $o.getOrCreateInstance(n3).toggle(this);
  }), pr($o), g($o);
  tn = $o;
  function Xo(t3) {
    return function(t4) {
      if (Array.isArray(t4))
        return Go(t4);
    }(t3) || function(t4) {
      if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
        return Array.from(t4);
    }(t3) || function(t4, e3) {
      if (t4) {
        if (typeof t4 == "string")
          return Go(t4, e3);
        var n3 = Object.prototype.toString.call(t4).slice(8, -1);
        return (n3 = n3 === "Object" && t4.constructor ? t4.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t4) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? Go(t4, e3) : void 0;
      }
    }(t3) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Go(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  var Qo = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Zo = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Jo = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, fn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] };
  function ti(t3, i3, e3) {
    if (!t3.length)
      return t3;
    if (e3 && typeof e3 == "function")
      return e3(t3);
    for (var e3 = new window.DOMParser().parseFromString(t3, "text/html"), a2 = (t3 = []).concat.apply(t3, Xo(e3.body.querySelectorAll("*"))), n3 = function(t4, e4) {
      var n4 = a2[t4], r4 = n4.nodeName.toLowerCase();
      if (!Object.keys(i3).includes(r4))
        return n4.remove(), "continue";
      var t4 = (t4 = []).concat.apply(t4, Xo(n4.attributes)), o4 = [].concat(i3["*"] || [], i3[r4] || []);
      t4.forEach(function(t5) {
        !function(t6, e5) {
          var n5 = t6.nodeName.toLowerCase();
          if (e5.includes(n5))
            return !Qo.has(n5) || Boolean(Zo.test(t6.nodeValue) || Jo.test(t6.nodeValue));
          for (var r5 = e5.filter(function(t7) {
            return t7 instanceof RegExp;
          }), o5 = 0, i4 = r5.length; o5 < i4; o5++)
            if (r5[o5].test(n5))
              return true;
          return false;
        }(t5, o4) && n4.removeAttribute(t5.nodeName);
      });
    }, r3 = 0, o3 = a2.length; r3 < o3; r3++)
      n3(r3);
    return e3.body.innerHTML;
  }
  function ei(t3) {
    return (ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function ni(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function ri(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? ni(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : ni(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function oi(t3) {
    return function(t4) {
      if (Array.isArray(t4))
        return ii(t4);
    }(t3) || function(t4) {
      if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
        return Array.from(t4);
    }(t3) || function(t4, e3) {
      if (t4) {
        if (typeof t4 == "string")
          return ii(t4, e3);
        var n3 = Object.prototype.toString.call(t4).slice(8, -1);
        return (n3 = n3 === "Object" && t4.constructor ? t4.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t4) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? ii(t4, e3) : void 0;
      }
    }(t3) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ii(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  function ai(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function ci() {
    return (ci = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, n3) {
      var r3 = function(t4, e4) {
        for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = li(t4)) !== null; )
          ;
        return t4;
      }(t3, e3);
      if (r3) {
        e3 = Object.getOwnPropertyDescriptor(r3, e3);
        return e3.get ? e3.get.call(arguments.length < 3 ? t3 : n3) : e3.value;
      }
    }).apply(this, arguments);
  }
  function si(t3, e3) {
    return (si = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function ui(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = li(n3);
      return function(t4, e4) {
        {
          if (e4 && (ei(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = li(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function li(t3) {
    return (li = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var fi = "tooltip", Yn = ".".concat("bs.tooltip"), di = new Set(["sanitize", "allowList", "sanitizeFn"]), hi = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, pi = { AUTO: "auto", TOP: "top", RIGHT: m() ? "left" : "right", BOTTOM: "bottom", LEFT: m() ? "right" : "left" }, vi = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: [0, 0], container: false, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: true, sanitizeFn: null, allowList: fn, popperConfig: null }, mi = { HIDE: "hide".concat(Yn), HIDDEN: "hidden".concat(Yn), SHOW: "show".concat(Yn), SHOWN: "shown".concat(Yn), INSERTED: "inserted".concat(Yn), CLICK: "click".concat(Yn), FOCUSIN: "focusin".concat(Yn), FOCUSOUT: "focusout".concat(Yn), MOUSEENTER: "mouseenter".concat(Yn), MOUSELEAVE: "mouseleave".concat(Yn) }, gi = "fade", yi = "show", bi = "show", _i = ".tooltip-inner", wi = ".".concat("modal"), Oi = "hide.bs.modal", ki = "hover", Ci = "focus", ln = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && si(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = ui(o3);
    function o3(t4, e4) {
      if (!function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), i2 === void 0)
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      return (t4 = r3.call(this, t4))._isEnabled = true, t4._timeout = 0, t4._hoverState = "", t4._activeTrigger = {}, t4._popper = null, t4._config = t4._getConfig(e4), t4.tip = null, t4._setListeners(), t4;
    }
    return t3 = o3, n3 = [{ key: "Default", get: function() {
      return vi;
    } }, { key: "NAME", get: function() {
      return fi;
    } }, { key: "Event", get: function() {
      return mi;
    } }, { key: "DefaultType", get: function() {
      return hi;
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this, e4);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0)
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4]();
        }
      });
    } }], (e3 = [{ key: "enable", value: function() {
      this._isEnabled = true;
    } }, { key: "disable", value: function() {
      this._isEnabled = false;
    } }, { key: "toggleEnabled", value: function() {
      this._isEnabled = !this._isEnabled;
    } }, { key: "toggle", value: function(t4) {
      this._isEnabled && (t4 ? ((t4 = this._initializeOnDelegatedTarget(t4))._activeTrigger.click = !t4._activeTrigger.click, t4._isWithActiveTrigger() ? t4._enter(null, t4) : t4._leave(null, t4)) : this.getTipElement().classList.contains(yi) ? this._leave(null, this) : this._enter(null, this));
    } }, { key: "dispose", value: function() {
      clearTimeout(this._timeout), z.off(this._element.closest(wi), Oi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), ci(li(o3.prototype), "dispose", this).call(this);
    } }, { key: "show", value: function() {
      var t4, e4, n4, r4, o4 = this;
      if (this._element.style.display === "none")
        throw new Error("Please use show on visible elements");
      this.isWithContent() && this._isEnabled && (e4 = z.trigger(this._element, this.constructor.Event.SHOW), t4 = ((n4 = s(this._element)) === null ? this._element.ownerDocument.documentElement : n4).contains(this._element), !e4.defaultPrevented && t4 && (this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(_i).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null), n4 = this.getTipElement(), e4 = function(t5) {
        for (; t5 += Math.floor(1e6 * Math.random()), document.getElementById(t5); )
          ;
        return t5;
      }(this.constructor.NAME), n4.setAttribute("id", e4), this._element.setAttribute("aria-describedby", e4), this._config.animation && n4.classList.add(gi), t4 = typeof this._config.placement == "function" ? this._config.placement.call(this, n4, this._element) : this._config.placement, e4 = this._getAttachment(t4), this._addAttachmentClass(e4), t4 = this._config.container, q(n4, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (t4.append(n4), z.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Ie(this._element, n4, this._getPopperConfig(e4)), n4.classList.add(yi), (e4 = this._resolvePossibleFunction(this._config.customClass)) && (n4 = n4.classList).add.apply(n4, oi(e4.split(" "))), "ontouchstart" in document.documentElement && (r4 = []).concat.apply(r4, oi(document.body.children)).forEach(function(t5) {
        z.on(t5, "mouseover", l);
      }), r4 = this.tip.classList.contains(gi), this._queueCallback(function() {
        var t5 = o4._hoverState;
        o4._hoverState = null, z.trigger(o4._element, o4.constructor.Event.SHOWN), t5 === "out" && o4._leave(null, o4);
      }, this.tip, r4)));
    } }, { key: "hide", value: function() {
      var t4, e4, n4 = this;
      this._popper && (t4 = this.getTipElement(), z.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented || (t4.classList.remove(yi), "ontouchstart" in document.documentElement && (e4 = []).concat.apply(e4, oi(document.body.children)).forEach(function(t5) {
        return z.off(t5, "mouseover", l);
      }), this._activeTrigger.click = false, this._activeTrigger[Ci] = false, this._activeTrigger[ki] = false, e4 = this.tip.classList.contains(gi), this._queueCallback(function() {
        n4._isWithActiveTrigger() || (n4._hoverState !== bi && t4.remove(), n4._cleanTipClass(), n4._element.removeAttribute("aria-describedby"), z.trigger(n4._element, n4.constructor.Event.HIDDEN), n4._disposePopper());
      }, this.tip, e4), this._hoverState = ""));
    } }, { key: "update", value: function() {
      this._popper !== null && this._popper.update();
    } }, { key: "isWithContent", value: function() {
      return Boolean(this.getTitle());
    } }, { key: "getTipElement", value: function() {
      if (this.tip)
        return this.tip;
      var t4 = document.createElement("div");
      t4.innerHTML = this._config.template;
      t4 = t4.children[0];
      return this.setContent(t4), t4.classList.remove(gi, yi), this.tip = t4, this.tip;
    } }, { key: "setContent", value: function(t4) {
      this._sanitizeAndSetContent(t4, this.getTitle(), _i);
    } }, { key: "_sanitizeAndSetContent", value: function(t4, e4, n4) {
      t4 = Ve.findOne(n4, t4);
      e4 || !t4 ? this.setElementContent(t4, e4) : t4.remove();
    } }, { key: "setElementContent", value: function(t4, e4) {
      if (t4 !== null)
        return C(e4) ? (e4 = d(e4), void (this._config.html ? e4.parentNode !== t4 && (t4.innerHTML = "", t4.append(e4)) : t4.textContent = e4.textContent)) : void (this._config.html ? (this._config.sanitize && (e4 = ti(e4, this._config.allowList, this._config.sanitizeFn)), t4.innerHTML = e4) : t4.textContent = e4);
    } }, { key: "getTitle", value: function() {
      var t4 = this._element.getAttribute("data-bs-original-title") || this._config.title;
      return this._resolvePossibleFunction(t4);
    } }, { key: "updateAttachment", value: function(t4) {
      return t4 === "right" ? "end" : t4 === "left" ? "start" : t4;
    } }, { key: "_initializeOnDelegatedTarget", value: function(t4, e4) {
      return e4 || this.constructor.getOrCreateInstance(t4.delegateTarget, this._getDelegateConfig());
    } }, { key: "_getOffset", value: function() {
      var e4 = this, n4 = this._config.offset;
      return typeof n4 == "string" ? n4.split(",").map(function(t4) {
        return Number.parseInt(t4, 10);
      }) : typeof n4 == "function" ? function(t4) {
        return n4(t4, e4._element);
      } : n4;
    } }, { key: "_resolvePossibleFunction", value: function(t4) {
      return typeof t4 == "function" ? t4.call(this._element) : t4;
    } }, { key: "_getPopperConfig", value: function(t4) {
      var e4 = this, t4 = { placement: t4, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: ".".concat(this.constructor.NAME, "-arrow") } }, { name: "onChange", enabled: true, phase: "afterWrite", fn: function(t5) {
        return e4._handlePopperPlacementChange(t5);
      } }], onFirstUpdate: function(t5) {
        t5.options.placement !== t5.placement && e4._handlePopperPlacementChange(t5);
      } };
      return ri(ri({}, t4), typeof this._config.popperConfig == "function" ? this._config.popperConfig(t4) : this._config.popperConfig);
    } }, { key: "_addAttachmentClass", value: function(t4) {
      this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(t4)));
    } }, { key: "_getAttachment", value: function(t4) {
      return pi[t4.toUpperCase()];
    } }, { key: "_setListeners", value: function() {
      var n4 = this;
      this._config.trigger.split(" ").forEach(function(t4) {
        var e4;
        t4 === "click" ? z.on(n4._element, n4.constructor.Event.CLICK, n4._config.selector, function(t5) {
          return n4.toggle(t5);
        }) : t4 !== "manual" && (e4 = t4 === ki ? n4.constructor.Event.MOUSEENTER : n4.constructor.Event.FOCUSIN, t4 = t4 === ki ? n4.constructor.Event.MOUSELEAVE : n4.constructor.Event.FOCUSOUT, z.on(n4._element, e4, n4._config.selector, function(t5) {
          return n4._enter(t5);
        }), z.on(n4._element, t4, n4._config.selector, function(t5) {
          return n4._leave(t5);
        }));
      }), this._hideModalHandler = function() {
        n4._element && n4.hide();
      }, z.on(this._element.closest(wi), Oi, this._hideModalHandler), this._config.selector ? this._config = ri(ri({}, this._config), {}, { trigger: "manual", selector: "" }) : this._fixTitle();
    } }, { key: "_fixTitle", value: function() {
      var t4 = this._element.getAttribute("title"), e4 = ei(this._element.getAttribute("data-bs-original-title"));
      !t4 && e4 === "string" || (this._element.setAttribute("data-bs-original-title", t4 || ""), !t4 || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t4), this._element.setAttribute("title", ""));
    } }, { key: "_enter", value: function(t4, e4) {
      e4 = this._initializeOnDelegatedTarget(t4, e4), t4 && (e4._activeTrigger[t4.type === "focusin" ? Ci : ki] = true), e4.getTipElement().classList.contains(yi) || e4._hoverState === bi ? e4._hoverState = bi : (clearTimeout(e4._timeout), e4._hoverState = bi, e4._config.delay && e4._config.delay.show ? e4._timeout = setTimeout(function() {
        e4._hoverState === bi && e4.show();
      }, e4._config.delay.show) : e4.show());
    } }, { key: "_leave", value: function(t4, e4) {
      e4 = this._initializeOnDelegatedTarget(t4, e4), t4 && (e4._activeTrigger[t4.type === "focusout" ? Ci : ki] = e4._element.contains(t4.relatedTarget)), e4._isWithActiveTrigger() || (clearTimeout(e4._timeout), e4._hoverState = "out", e4._config.delay && e4._config.delay.hide ? e4._timeout = setTimeout(function() {
        e4._hoverState === "out" && e4.hide();
      }, e4._config.delay.hide) : e4.hide());
    } }, { key: "_isWithActiveTrigger", value: function() {
      for (var t4 in this._activeTrigger)
        if (this._activeTrigger[t4])
          return true;
      return false;
    } }, { key: "_getConfig", value: function(t4) {
      var e4 = Be.getDataAttributes(this._element);
      return Object.keys(e4).forEach(function(t5) {
        di.has(t5) && delete e4[t5];
      }), (t4 = ri(ri(ri({}, this.constructor.Default), e4), ei(t4) === "object" && t4 ? t4 : {})).container = t4.container === false ? document.body : d(t4.container), typeof t4.delay == "number" && (t4.delay = { show: t4.delay, hide: t4.delay }), typeof t4.title == "number" && (t4.title = t4.title.toString()), typeof t4.content == "number" && (t4.content = t4.content.toString()), h2(fi, t4, this.constructor.DefaultType), t4.sanitize && (t4.template = ti(t4.template, t4.allowList, t4.sanitizeFn)), t4;
    } }, { key: "_getDelegateConfig", value: function() {
      var t4, e4 = {};
      for (t4 in this._config)
        this.constructor.Default[t4] !== this._config[t4] && (e4[t4] = this._config[t4]);
      return e4;
    } }, { key: "_cleanTipClass", value: function() {
      var e4 = this.getTipElement(), t4 = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"), t4 = e4.getAttribute("class").match(t4);
      t4 !== null && 0 < t4.length && t4.map(function(t5) {
        return t5.trim();
      }).forEach(function(t5) {
        return e4.classList.remove(t5);
      });
    } }, { key: "_getBasicClassPrefix", value: function() {
      return "bs-tooltip";
    } }, { key: "_handlePopperPlacementChange", value: function(t4) {
      t4 = t4.state;
      t4 && (this.tip = t4.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t4.placement)));
    } }, { key: "_disposePopper", value: function() {
      this._popper && (this._popper.destroy(), this._popper = null);
    } }]) && ai(t3.prototype, e3), n3 && ai(t3, n3), o3;
  }();
  g(ln);
  var Si = ln;
  function Ei(t3) {
    return (Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function xi(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function ji(t3, e3) {
    return (ji = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function Ti(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = Ai(n3);
      return function(t4, e4) {
        {
          if (e4 && (Ei(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = Ai(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function Ai(t3) {
    return (Ai = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  function Di(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function Pi(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? Di(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : Di(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  var Ln = ".".concat("bs.popover"), Mi = Pi(Pi({}, Si.Default), {}, { placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ii = Pi(Pi({}, Si.DefaultType), {}, { content: "(string|element|function)" }), Li = { HIDE: "hide".concat(Ln), HIDDEN: "hidden".concat(Ln), SHOW: "show".concat(Ln), SHOWN: "shown".concat(Ln), INSERTED: "inserted".concat(Ln), CLICK: "click".concat(Ln), FOCUSIN: "focusin".concat(Ln), FOCUSOUT: "focusout".concat(Ln), MOUSEENTER: "mouseenter".concat(Ln), MOUSELEAVE: "mouseleave".concat(Ln) }, Dr = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && ji(t4, e4);
    }(o3, Si);
    var t3, e3, n3, r3 = Ti(o3);
    function o3() {
      return function(t4, e4) {
        if (!(t4 instanceof e4))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), r3.apply(this, arguments);
    }
    return t3 = o3, n3 = [{ key: "Default", get: function() {
      return Mi;
    } }, { key: "NAME", get: function() {
      return "popover";
    } }, { key: "Event", get: function() {
      return Li;
    } }, { key: "DefaultType", get: function() {
      return Ii;
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this, e4);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0)
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4]();
        }
      });
    } }], (e3 = [{ key: "isWithContent", value: function() {
      return this.getTitle() || this._getContent();
    } }, { key: "setContent", value: function(t4) {
      this._sanitizeAndSetContent(t4, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t4, this._getContent(), ".popover-body");
    } }, { key: "_getContent", value: function() {
      return this._resolvePossibleFunction(this._config.content);
    } }, { key: "_getBasicClassPrefix", value: function() {
      return "bs-popover";
    } }]) && xi(t3.prototype, e3), n3 && xi(t3, n3), o3;
  }();
  g(Dr);
  e2 = Dr;
  n2(178);
  function Ni(t3) {
    return (Ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function Ri(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function Bi(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? Ri(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : Ri(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function Hi(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function Fi() {
    return (Fi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, n3) {
      var r3 = function(t4, e4) {
        for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Wi(t4)) !== null; )
          ;
        return t4;
      }(t3, e3);
      if (r3) {
        e3 = Object.getOwnPropertyDescriptor(r3, e3);
        return e3.get ? e3.get.call(arguments.length < 3 ? t3 : n3) : e3.value;
      }
    }).apply(this, arguments);
  }
  function Vi(t3, e3) {
    return (Vi = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function Yi(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = Wi(n3);
      return function(t4, e4) {
        {
          if (e4 && (Ni(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = Wi(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function Wi(t3) {
    return (Wi = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var zi = "scrollspy", Ui = ".".concat("bs.scrollspy"), qi = { offset: 10, method: "auto", target: "" }, Ki = { offset: "number", method: "string", target: "(string|element)" }, $i = "activate".concat(Ui), Xi = "scroll".concat(Ui), rt = "load".concat(Ui).concat(".data-api"), Gi = "dropdown-item", Qi = "active", Zi = ".nav-link", Ji = ".list-group-item", ta = "".concat(Zi, ", ").concat(Ji, ", .").concat(Gi), ea = "position", na = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Vi(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = Yi(o3);
    function o3(t4, e4) {
      var n4;
      return function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), (n4 = r3.call(this, t4))._scrollElement = n4._element.tagName === "BODY" ? window : n4._element, n4._config = n4._getConfig(e4), n4._offsets = [], n4._targets = [], n4._activeTarget = null, n4._scrollHeight = 0, z.on(n4._scrollElement, Xi, function() {
        return n4._process();
      }), n4.refresh(), n4._process(), n4;
    }
    return t3 = o3, n3 = [{ key: "Default", get: function() {
      return qi;
    } }, { key: "NAME", get: function() {
      return zi;
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this, e4);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0)
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4]();
        }
      });
    } }], (e3 = [{ key: "refresh", value: function() {
      var e4 = this, t4 = this._scrollElement === this._scrollElement.window ? "offset" : ea, r4 = this._config.method === "auto" ? t4 : this._config.method, o4 = r4 === ea ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.find(ta, this._config.target).map(function(t5) {
        var e5 = f(t5), n4 = e5 ? Ve.findOne(e5) : null;
        if (n4) {
          t5 = n4.getBoundingClientRect();
          if (t5.width || t5.height)
            return [Be[r4](n4).top + o4, e5];
        }
        return null;
      }).filter(function(t5) {
        return t5;
      }).sort(function(t5, e5) {
        return t5[0] - e5[0];
      }).forEach(function(t5) {
        e4._offsets.push(t5[0]), e4._targets.push(t5[1]);
      });
    } }, { key: "dispose", value: function() {
      z.off(this._scrollElement, Ui), Fi(Wi(o3.prototype), "dispose", this).call(this);
    } }, { key: "_getConfig", value: function(t4) {
      return (t4 = Bi(Bi(Bi({}, qi), Be.getDataAttributes(this._element)), Ni(t4) === "object" && t4 ? t4 : {})).target = d(t4.target) || document.documentElement, h2(zi, t4, Ki), t4;
    } }, { key: "_getScrollTop", value: function() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    } }, { key: "_getScrollHeight", value: function() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    } }, { key: "_getOffsetHeight", value: function() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    } }, { key: "_process", value: function() {
      var t4 = this._getScrollTop() + this._config.offset, e4 = this._getScrollHeight(), n4 = this._config.offset + e4 - this._getOffsetHeight();
      if (this._scrollHeight !== e4 && this.refresh(), n4 <= t4) {
        n4 = this._targets[this._targets.length - 1];
        this._activeTarget !== n4 && this._activate(n4);
      } else {
        if (this._activeTarget && t4 < this._offsets[0] && 0 < this._offsets[0])
          return this._activeTarget = null, void this._clear();
        for (var r4 = this._offsets.length; r4--; )
          this._activeTarget !== this._targets[r4] && t4 >= this._offsets[r4] && (this._offsets[r4 + 1] === void 0 || t4 < this._offsets[r4 + 1]) && this._activate(this._targets[r4]);
      }
    } }, { key: "_activate", value: function(e4) {
      this._activeTarget = e4, this._clear();
      var t4 = ta.split(",").map(function(t5) {
        return "".concat(t5, '[data-bs-target="').concat(e4, '"],').concat(t5, '[href="').concat(e4, '"]');
      }), t4 = Ve.findOne(t4.join(","), this._config.target);
      t4.classList.add(Qi), t4.classList.contains(Gi) ? Ve.findOne(".dropdown-toggle", t4.closest(".dropdown")).classList.add(Qi) : Ve.parents(t4, ".nav, .list-group").forEach(function(t5) {
        Ve.prev(t5, "".concat(Zi, ", ").concat(Ji)).forEach(function(t6) {
          return t6.classList.add(Qi);
        }), Ve.prev(t5, ".nav-item").forEach(function(t6) {
          Ve.children(t6, Zi).forEach(function(t7) {
            return t7.classList.add(Qi);
          });
        });
      }), z.trigger(this._scrollElement, $i, { relatedTarget: e4 });
    } }, { key: "_clear", value: function() {
      Ve.find(ta, this._config.target).filter(function(t4) {
        return t4.classList.contains(Qi);
      }).forEach(function(t4) {
        return t4.classList.remove(Qi);
      });
    } }]) && Hi(t3.prototype, e3), n3 && Hi(t3, n3), o3;
  }();
  z.on(window, rt, function() {
    Ve.find('[data-bs-spy="scroll"]').forEach(function(t3) {
      return new na(t3);
    });
  }), g(na);
  fn = na;
  function ra(t3) {
    return (ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function oa(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function ia(t3, e3) {
    return (ia = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function aa(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = ca(n3);
      return function(t4, e4) {
        {
          if (e4 && (ra(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = ca(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function ca(t3) {
    return (ca = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var Yn = ".".concat("bs.tab"), sa = "hide".concat(Yn), ua = "hidden".concat(Yn), la = "show".concat(Yn), fa = "shown".concat(Yn), ln = "click".concat(Yn).concat(".data-api"), da = "active", ha = ".active", pa = ":scope > li > .active", va = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && ia(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = aa(o3);
    function o3() {
      return function(t4, e4) {
        if (!(t4 instanceof e4))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), r3.apply(this, arguments);
    }
    return t3 = o3, n3 = [{ key: "NAME", get: function() {
      return "tab";
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0)
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4]();
        }
      });
    } }], (e3 = [{ key: "show", value: function() {
      var t4, e4, n4, r4, o4 = this;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(da) || (t4 = a(this._element), (r4 = this._element.closest(".nav, .list-group")) && (n4 = r4.nodeName === "UL" || r4.nodeName === "OL" ? pa : ha, e4 = (e4 = Ve.find(n4, r4))[e4.length - 1]), n4 = e4 ? z.trigger(e4, sa, { relatedTarget: this._element }) : null, z.trigger(this._element, la, { relatedTarget: e4 }).defaultPrevented || n4 !== null && n4.defaultPrevented || (this._activate(this._element, r4), r4 = function() {
        z.trigger(e4, ua, { relatedTarget: o4._element }), z.trigger(o4._element, fa, { relatedTarget: e4 });
      }, t4 ? this._activate(t4, t4.parentNode, r4) : r4()));
    } }, { key: "_activate", value: function(t4, e4, n4) {
      function r4() {
        return o4._transitionComplete(t4, i3, n4);
      }
      var o4 = this, i3 = (!e4 || e4.nodeName !== "UL" && e4.nodeName !== "OL" ? Ve.children(e4, ha) : Ve.find(pa, e4))[0], e4 = n4 && i3 && i3.classList.contains("fade");
      i3 && e4 ? (i3.classList.remove("show"), this._queueCallback(r4, t4, true)) : r4();
    } }, { key: "_transitionComplete", value: function(t4, e4, n4) {
      var r4;
      e4 && (e4.classList.remove(da), (r4 = Ve.findOne(":scope > .dropdown-menu .active", e4.parentNode)) && r4.classList.remove(da), e4.getAttribute("role") === "tab" && e4.setAttribute("aria-selected", false)), t4.classList.add(da), t4.getAttribute("role") === "tab" && t4.setAttribute("aria-selected", true), p2(t4), t4.classList.contains("fade") && t4.classList.add("show");
      var e4 = t4.parentNode;
      (e4 = e4 && e4.nodeName === "LI" ? e4.parentNode : e4) && e4.classList.contains("dropdown-menu") && ((e4 = t4.closest(".dropdown")) && Ve.find(".dropdown-toggle", e4).forEach(function(t5) {
        return t5.classList.add(da);
      }), t4.setAttribute("aria-expanded", true)), n4 && n4();
    } }]) && oa(t3.prototype, e3), n3 && oa(t3, n3), o3;
  }();
  z.on(document, ln, '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t3) {
    ["A", "AREA"].includes(this.tagName) && t3.preventDefault(), o2(this) || va.getOrCreateInstance(this).show();
  }), g(va);
  Ln = va;
  function ma(t3) {
    return (ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function ga(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function ya(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? ga(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : ga(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function ba(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function _a() {
    return (_a = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, n3) {
      var r3 = function(t4, e4) {
        for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = ka(t4)) !== null; )
          ;
        return t4;
      }(t3, e3);
      if (r3) {
        e3 = Object.getOwnPropertyDescriptor(r3, e3);
        return e3.get ? e3.get.call(arguments.length < 3 ? t3 : n3) : e3.value;
      }
    }).apply(this, arguments);
  }
  function wa(t3, e3) {
    return (wa = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function Oa(n3) {
    var r3 = function() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t3) {
        return false;
      }
    }();
    return function() {
      var t3, e3 = ka(n3);
      return function(t4, e4) {
        {
          if (e4 && (ma(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return function(t5) {
          if (t5 !== void 0)
            return t5;
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }(t4);
      }(this, r3 ? (t3 = ka(this).constructor, Reflect.construct(e3, arguments, t3)) : e3.apply(this, arguments));
    };
  }
  function ka(t3) {
    return (ka = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var Dr = ".".concat("bs.toast"), Ca = "mouseover".concat(Dr), Sa = "mouseout".concat(Dr), Ea = "focusin".concat(Dr), xa = "focusout".concat(Dr), ja = "hide".concat(Dr), Ta = "hidden".concat(Dr), Aa = "show".concat(Dr), Da = "shown".concat(Dr), Pa = "show", Ma = "showing", Ia = { animation: "boolean", autohide: "boolean", delay: "number" }, La = { animation: true, autohide: true, delay: 5e3 }, rt = function() {
    !function(t4, e4) {
      if (typeof e4 != "function" && e4 !== null)
        throw new TypeError("Super expression must either be null or a function");
      t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && wa(t4, e4);
    }(o3, Q);
    var t3, e3, n3, r3 = Oa(o3);
    function o3(t4, e4) {
      return function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), (t4 = r3.call(this, t4))._config = t4._getConfig(e4), t4._timeout = null, t4._hasMouseInteraction = false, t4._hasKeyboardInteraction = false, t4._setListeners(), t4;
    }
    return t3 = o3, n3 = [{ key: "DefaultType", get: function() {
      return Ia;
    } }, { key: "Default", get: function() {
      return La;
    } }, { key: "NAME", get: function() {
      return "toast";
    } }, { key: "jQueryInterface", value: function(e4) {
      return this.each(function() {
        var t4 = o3.getOrCreateInstance(this, e4);
        if (typeof e4 == "string") {
          if (t4[e4] === void 0)
            throw new TypeError('No method named "'.concat(e4, '"'));
          t4[e4](this);
        }
      });
    } }], (e3 = [{ key: "show", value: function() {
      var t4 = this;
      z.trigger(this._element, Aa).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), p2(this._element), this._element.classList.add(Pa), this._element.classList.add(Ma), this._queueCallback(function() {
        t4._element.classList.remove(Ma), z.trigger(t4._element, Da), t4._maybeScheduleHide();
      }, this._element, this._config.animation));
    } }, { key: "hide", value: function() {
      var t4 = this;
      this._element.classList.contains(Pa) && (z.trigger(this._element, ja).defaultPrevented || (this._element.classList.add(Ma), this._queueCallback(function() {
        t4._element.classList.add("hide"), t4._element.classList.remove(Ma), t4._element.classList.remove(Pa), z.trigger(t4._element, Ta);
      }, this._element, this._config.animation)));
    } }, { key: "dispose", value: function() {
      this._clearTimeout(), this._element.classList.contains(Pa) && this._element.classList.remove(Pa), _a(ka(o3.prototype), "dispose", this).call(this);
    } }, { key: "_getConfig", value: function(t4) {
      return t4 = ya(ya(ya({}, La), Be.getDataAttributes(this._element)), ma(t4) === "object" && t4 ? t4 : {}), h2("toast", t4, this.constructor.DefaultType), t4;
    } }, { key: "_maybeScheduleHide", value: function() {
      var t4 = this;
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function() {
        t4.hide();
      }, this._config.delay)));
    } }, { key: "_onInteraction", value: function(t4, e4) {
      switch (t4.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e4;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e4;
      }
      e4 ? this._clearTimeout() : (t4 = t4.relatedTarget, this._element === t4 || this._element.contains(t4) || this._maybeScheduleHide());
    } }, { key: "_setListeners", value: function() {
      var e4 = this;
      z.on(this._element, Ca, function(t4) {
        return e4._onInteraction(t4, true);
      }), z.on(this._element, Sa, function(t4) {
        return e4._onInteraction(t4, false);
      }), z.on(this._element, Ea, function(t4) {
        return e4._onInteraction(t4, true);
      }), z.on(this._element, xa, function(t4) {
        return e4._onInteraction(t4, false);
      });
    } }, { key: "_clearTimeout", value: function() {
      clearTimeout(this._timeout), this._timeout = null;
    } }]) && ba(t3.prototype, e3), n3 && ba(t3, n3), o3;
  }();
  pr(rt), g(rt);
  function Na(t3) {
    for (; t3 += Math.floor(Math.random() * Wa), document.getElementById(t3); )
      ;
    return t3;
  }
  function Ra(i3, a2, c2) {
    Object.keys(c2).forEach(function(t3) {
      var e3, n3 = c2[t3], r3 = a2[t3], o3 = r3 && ((e3 = r3)[0] || e3).nodeType ? "element" : (o3 = r3) == null ? "".concat(o3) : {}.toString.call(o3).match(/\s([a-z]+)/i)[1].toLowerCase();
      if (!new RegExp(n3).test(o3))
        throw new Error("".concat(i3.toUpperCase(), ": ") + 'Option "'.concat(t3, '" provided type "').concat(o3, '" ') + 'but expected type "'.concat(n3, '".'));
    });
  }
  function Ba() {
    var t3 = window.jQuery;
    return t3 && !document.body.hasAttribute("data-mdb-no-jquery") ? t3 : null;
  }
  function Ha(t3) {
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t3) : t3();
  }
  function Fa(t3) {
    return document.createElement(t3);
  }
  var Va, Ya, Yn = rt, Wa = 1e6, za = (document.documentElement.dir, Va = {}, Ya = 1, { set: function(t3, e3, n3) {
    t3[e3] === void 0 && (t3[e3] = { key: e3, id: Ya }, Ya++), Va[t3[e3].id] = n3;
  }, get: function(t3, e3) {
    if (!t3 || t3[e3] === void 0)
      return null;
    t3 = t3[e3];
    return t3.key === e3 ? Va[t3.id] : null;
  }, delete: function(t3, e3) {
    var n3;
    t3[e3] === void 0 || (n3 = t3[e3]).key === e3 && (delete Va[n3.id], delete t3[e3]);
  } }), Ua = { setData: function(t3, e3, n3) {
    za.set(t3, e3, n3);
  }, getData: function(t3, e3) {
    return za.get(t3, e3);
  }, removeData: function(t3, e3) {
    za.delete(t3, e3);
  } };
  function qa(t3, e3) {
    return function(t4) {
      if (Array.isArray(t4))
        return t4;
    }(t3) || function(t4, e4) {
      var n3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
      if (n3 != null) {
        var r3, o3, i3 = [], a2 = true, c2 = false;
        try {
          for (n3 = n3.call(t4); !(a2 = (r3 = n3.next()).done) && (i3.push(r3.value), !e4 || i3.length !== e4); a2 = true)
            ;
        } catch (t5) {
          c2 = true, o3 = t5;
        } finally {
          try {
            a2 || n3.return == null || n3.return();
          } finally {
            if (c2)
              throw o3;
          }
        }
        return i3;
      }
    }(t3, e3) || function(t4, e4) {
      if (t4) {
        if (typeof t4 == "string")
          return Ka(t4, e4);
        var n3 = Object.prototype.toString.call(t4).slice(8, -1);
        return (n3 = n3 === "Object" && t4.constructor ? t4.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t4) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? Ka(t4, e4) : void 0;
      }
    }(t3, e3) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Ka(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  var $a = Ba(), Xa = /[^.]*(?=\..*)\.|.*/, Ga = /\..*/, Qa = /::\d+$/, Za = {}, Ja = 1, tc = { mouseenter: "mouseover", mouseleave: "mouseout" }, ec = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];
  function nc(t3, e3) {
    return e3 && "".concat(e3, "::").concat(Ja++) || t3.uidEvent || Ja++;
  }
  function rc(t3) {
    var e3 = nc(t3);
    return t3.uidEvent = e3, Za[e3] = Za[e3] || {}, Za[e3];
  }
  function oc(t3, e3, n3) {
    for (var r3 = 2 < arguments.length && n3 !== void 0 ? n3 : null, o3 = Object.keys(t3), i3 = 0, a2 = o3.length; i3 < a2; i3++) {
      var c2 = t3[o3[i3]];
      if (c2.originalHandler === e3 && c2.delegationSelector === r3)
        return c2;
    }
    return null;
  }
  function ic(t3, e3, n3) {
    var r3 = typeof e3 == "string", o3 = r3 ? n3 : e3, n3 = t3.replace(Ga, ""), e3 = tc[n3];
    return [r3, o3, n3 = !(-1 < ec.indexOf(n3 = e3 ? e3 : n3)) ? t3 : n3];
  }
  function ac(t3, e3, n3, r3, o3) {
    var i3, a2, c2, s2, u2, l2, f2, d2, h3, p3;
    typeof e3 == "string" && t3 && (n3 || (n3 = r3, r3 = null), i3 = (s2 = qa(ic(e3, n3, r3), 3))[0], a2 = s2[1], c2 = s2[2], (u2 = oc(s2 = (u2 = rc(t3))[c2] || (u2[c2] = {}), a2, i3 ? n3 : null)) ? u2.oneOff = u2.oneOff && o3 : (e3 = nc(a2, e3.replace(Xa, "")), (r3 = i3 ? (d2 = t3, h3 = n3, p3 = r3, function t4(e4) {
      for (var n4 = d2.querySelectorAll(h3), r4 = e4.target; r4 && r4 !== this; r4 = r4.parentNode)
        for (var o4 = n4.length; o4--; )
          if (n4[o4] === r4)
            return e4.delegateTarget = r4, t4.oneOff && sc.off(d2, e4.type, p3), p3.apply(r4, [e4]);
      return null;
    }) : (l2 = t3, f2 = n3, function t4(e4) {
      return e4.delegateTarget = l2, t4.oneOff && sc.off(l2, e4.type, f2), f2.apply(l2, [e4]);
    })).delegationSelector = i3 ? n3 : null, r3.originalHandler = a2, r3.oneOff = o3, s2[r3.uidEvent = e3] = r3, t3.addEventListener(c2, r3, i3)));
  }
  function cc(t3, e3, n3, r3, o3) {
    r3 = oc(e3[n3], r3, o3);
    r3 && (t3.removeEventListener(n3, r3, Boolean(o3)), delete e3[n3][r3.uidEvent]);
  }
  var sc = { on: function(t3, e3, n3, r3) {
    ac(t3, e3, n3, r3, false);
  }, one: function(t3, e3, n3, r3) {
    ac(t3, e3, n3, r3, true);
  }, off: function(a2, c2, t3, e3) {
    if (typeof c2 == "string" && a2) {
      var n3 = qa(ic(c2, t3, e3), 3), r3 = n3[0], e3 = n3[1], o3 = n3[2], i3 = o3 !== c2, s2 = rc(a2), n3 = c2.charAt(0) === ".";
      if (e3 !== void 0)
        return s2 && s2[o3] ? void cc(a2, s2, o3, e3, r3 ? t3 : null) : void 0;
      n3 && Object.keys(s2).forEach(function(t4) {
        var e4, n4, r4, o4, i4;
        e4 = a2, n4 = s2, r4 = t4, o4 = c2.slice(1), i4 = n4[r4] || {}, Object.keys(i4).forEach(function(t5) {
          -1 < t5.indexOf(o4) && (t5 = i4[t5], cc(e4, n4, r4, t5.originalHandler, t5.delegationSelector));
        });
      });
      var u2 = s2[o3] || {};
      Object.keys(u2).forEach(function(t4) {
        var e4 = t4.replace(Qa, "");
        (!i3 || -1 < c2.indexOf(e4)) && (t4 = u2[t4], cc(a2, s2, o3, t4.originalHandler, t4.delegationSelector));
      });
    }
  }, trigger: function(t3, e3, n3) {
    if (typeof e3 != "string" || !t3)
      return null;
    var r3, o3 = e3.replace(Ga, ""), i3 = e3 !== o3, a2 = -1 < ec.indexOf(o3), c2 = true, s2 = true, u2 = false, l2 = null;
    return i3 && $a && (r3 = $a.Event(e3, n3), $a(t3).trigger(r3), c2 = !r3.isPropagationStopped(), s2 = !r3.isImmediatePropagationStopped(), u2 = r3.isDefaultPrevented()), a2 ? (l2 = document.createEvent("HTMLEvents")).initEvent(o3, c2, true) : l2 = new CustomEvent(e3, { bubbles: c2, cancelable: true }), n3 !== void 0 && Object.keys(n3).forEach(function(t4) {
      Object.defineProperty(l2, t4, { get: function() {
        return n3[t4];
      } });
    }), u2 && l2.preventDefault(), s2 && t3.dispatchEvent(l2), l2.defaultPrevented && r3 !== void 0 && r3.preventDefault(), l2;
  } }, uc = function(t3, e3, n3, r3) {
    for (var o3 = e3.split(" "), i3 = 0; i3 < o3.length; i3++)
      sc.on(t3, o3[i3], n3, r3);
  }, lc = function(t3, e3, n3, r3) {
    for (var o3 = e3.split(" "), i3 = 0; i3 < o3.length; i3++)
      sc.off(t3, o3[i3], n3, r3);
  }, fc = sc;
  n2(183);
  function dc(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function hc(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? dc(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : dc(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function pc(t3) {
    return t3 === "true" || t3 !== "false" && (t3 === Number(t3).toString() ? Number(t3) : t3 === "" || t3 === "null" ? null : t3);
  }
  function vc(t3) {
    return t3.replace(/[A-Z]/g, function(t4) {
      return "-".concat(t4.toLowerCase());
    });
  }
  var mc = { setDataAttribute: function(t3, e3, n3) {
    t3.setAttribute("data-mdb-".concat(vc(e3)), n3);
  }, removeDataAttribute: function(t3, e3) {
    t3.removeAttribute("data-mdb-".concat(vc(e3)));
  }, getDataAttributes: function(t3) {
    if (!t3)
      return {};
    var n3 = hc({}, t3.dataset);
    return Object.keys(n3).filter(function(t4) {
      return t4.startsWith("mdb");
    }).forEach(function(t4) {
      var e3 = (e3 = t4.replace(/^mdb/, "")).charAt(0).toLowerCase() + e3.slice(1, e3.length);
      n3[e3] = pc(n3[t4]);
    }), n3;
  }, getDataAttribute: function(t3, e3) {
    return pc(t3.getAttribute("data-mdb-".concat(vc(e3))));
  }, offset: function(t3) {
    t3 = t3.getBoundingClientRect();
    return { top: t3.top + document.body.scrollTop, left: t3.left + document.body.scrollLeft };
  }, position: function(t3) {
    return { top: t3.offsetTop, left: t3.offsetLeft };
  }, style: function(t3, e3) {
    Object.assign(t3.style, e3);
  }, toggleClass: function(t3, e3) {
    t3 && (t3.classList.contains(e3) ? t3.classList.remove(e3) : t3.classList.add(e3));
  }, addClass: function(t3, e3) {
    t3.classList.contains(e3) || t3.classList.add(e3);
  }, addStyle: function(e3, n3) {
    Object.keys(n3).forEach(function(t3) {
      e3.style[t3] = n3[t3];
    });
  }, removeClass: function(t3, e3) {
    t3.classList.contains(e3) && t3.classList.remove(e3);
  }, hasClass: function(t3, e3) {
    return t3.classList.contains(e3);
  } };
  function gc(t3) {
    return function(t4) {
      if (Array.isArray(t4))
        return yc(t4);
    }(t3) || function(t4) {
      if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
        return Array.from(t4);
    }(t3) || function(t4, e3) {
      if (t4) {
        if (typeof t4 == "string")
          return yc(t4, e3);
        var n3 = Object.prototype.toString.call(t4).slice(8, -1);
        return (n3 = n3 === "Object" && t4.constructor ? t4.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t4) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? yc(t4, e3) : void 0;
      }
    }(t3) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function yc(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  var bc = { closest: function(t3, e3) {
    return t3.closest(e3);
  }, matches: function(t3, e3) {
    return t3.matches(e3);
  }, find: function(t3) {
    var e3, n3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document.documentElement;
    return (e3 = []).concat.apply(e3, gc(Element.prototype.querySelectorAll.call(n3, t3)));
  }, findOne: function(t3) {
    var e3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(e3, t3);
  }, children: function(t3, e3) {
    var n3;
    return (n3 = []).concat.apply(n3, gc(t3.children)).filter(function(t4) {
      return t4.matches(e3);
    });
  }, parents: function(t3, e3) {
    for (var n3 = [], r3 = t3.parentNode; r3 && r3.nodeType === Node.ELEMENT_NODE && r3.nodeType !== 3; )
      this.matches(r3, e3) && n3.push(r3), r3 = r3.parentNode;
    return n3;
  }, prev: function(t3, e3) {
    for (var n3 = t3.previousElementSibling; n3; ) {
      if (n3.matches(e3))
        return [n3];
      n3 = n3.previousElementSibling;
    }
    return [];
  }, next: function(t3, e3) {
    for (var n3 = t3.nextElementSibling; n3; ) {
      if (this.matches(n3, e3))
        return [n3];
      n3 = n3.nextElementSibling;
    }
    return [];
  } };
  function _c(t3) {
    return (_c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function wc(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function Oc(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? wc(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : wc(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function kc(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  var Cc = "ripple", Sc = "mdb.ripple", Ec = "ripple-surface", xc = "ripple-wave", jc = ["[data-mdb-ripple]"], Tc = "ripple-surface-unbound", Ac = [0, 0, 0], Dc = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], Pc = { rippleCentered: false, rippleColor: "", rippleDuration: "500ms", rippleRadius: 0, rippleUnbound: false }, Mc = { rippleCentered: "boolean", rippleColor: "string", rippleDuration: "string", rippleRadius: "number", rippleUnbound: "boolean" }, Ic = function() {
    function n3(t4, e4) {
      !function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, n3), this._element = t4, this._options = this._getConfig(e4), this._element && (Ua.setData(t4, Sc, this), mc.addClass(this._element, Ec)), this._clickHandler = this._createRipple.bind(this), this._rippleTimer = null, this._isMinWidthSet = false, this.init();
    }
    var t3, e3, r3;
    return t3 = n3, r3 = [{ key: "NAME", get: function() {
      return Cc;
    } }, { key: "autoInitial", value: function(e4) {
      return function(t4) {
        e4._autoInit(t4);
      };
    } }, { key: "jQueryInterface", value: function(t4) {
      return this.each(function() {
        return Ua.getData(this, Sc) ? null : new n3(this, t4);
      });
    } }, { key: "getInstance", value: function(t4) {
      return Ua.getData(t4, Sc);
    } }, { key: "getOrCreateInstance", value: function(t4) {
      var e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return this.getInstance(t4) || new this(t4, _c(e4) === "object" ? e4 : null);
    } }], (e3 = [{ key: "init", value: function() {
      this._addClickEvent(this._element);
    } }, { key: "dispose", value: function() {
      Ua.removeData(this._element, Sc), fc.off(this._element, "click", this._clickHandler), this._element = null, this._options = null;
    } }, { key: "_autoInit", value: function(e4) {
      var n4 = this;
      jc.forEach(function(t4) {
        bc.closest(e4.target, t4) && (n4._element = bc.closest(e4.target, t4));
      }), this._element.style.minWidth || (mc.style(this._element, { "min-width": "".concat(this._element.offsetWidth, "px") }), this._isMinWidthSet = true), mc.addClass(this._element, Ec), this._options = this._getConfig(), this._createRipple(e4);
    } }, { key: "_addClickEvent", value: function(t4) {
      fc.on(t4, "mousedown", this._clickHandler);
    } }, { key: "_createRipple", value: function(t4) {
      mc.hasClass(this._element, Ec) || mc.addClass(this._element, Ec);
      var e4 = t4.layerX, n4 = t4.layerY, r4 = this._element.offsetHeight, o3 = this._element.offsetWidth, i3 = this._durationToMsNumber(this._options.rippleDuration), a2 = { offsetX: this._options.rippleCentered ? r4 / 2 : e4, offsetY: this._options.rippleCentered ? o3 / 2 : n4, height: r4, width: o3 }, c2 = this._getDiameter(a2), t4 = this._options.rippleRadius || c2 / 2, a2 = { delay: 0.5 * i3, duration: i3 - 0.5 * i3 }, c2 = { left: this._options.rippleCentered ? "".concat(o3 / 2 - t4, "px") : "".concat(e4 - t4, "px"), top: this._options.rippleCentered ? "".concat(r4 / 2 - t4, "px") : "".concat(n4 - t4, "px"), height: "".concat(2 * this._options.rippleRadius || c2, "px"), width: "".concat(2 * this._options.rippleRadius || c2, "px"), transitionDelay: "0s, ".concat(a2.delay, "ms"), transitionDuration: "".concat(i3, "ms, ").concat(a2.duration, "ms") }, a2 = Fa("div");
      this._createHTMLRipple({ wrapper: this._element, ripple: a2, styles: c2 }), this._removeHTMLRipple({ ripple: a2, duration: i3 });
    } }, { key: "_createHTMLRipple", value: function(t4) {
      var e4 = t4.wrapper, n4 = t4.ripple, r4 = t4.styles;
      Object.keys(r4).forEach(function(t5) {
        return n4.style[t5] = r4[t5];
      }), n4.classList.add(xc), this._options.rippleColor !== "" && (this._removeOldColorClasses(e4), this._addColor(n4, e4)), this._toggleUnbound(e4), this._appendRipple(n4, e4);
    } }, { key: "_removeHTMLRipple", value: function(t4) {
      var e4 = this, n4 = t4.ripple, t4 = t4.duration;
      this._rippleTimer && (clearTimeout(this._rippleTimer), this._rippleTimer = null), this._rippleTimer = setTimeout(function() {
        n4 && (n4.remove(), e4._element && (bc.find(".".concat(xc), e4._element).forEach(function(t5) {
          t5.remove();
        }), e4._isMinWidthSet && (mc.style(e4._element, { "min-width": "" }), e4._isMinWidthSet = false), mc.removeClass(e4._element, Ec)));
      }, t4);
    } }, { key: "_durationToMsNumber", value: function(t4) {
      return Number(t4.replace("ms", "").replace("s", "000"));
    } }, { key: "_getConfig", value: function() {
      var t4 = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e4 = mc.getDataAttributes(this._element), t4 = Oc(Oc(Oc({}, Pc), e4), t4);
      return Ra(Cc, t4, Mc), t4;
    } }, { key: "_getDiameter", value: function(t4) {
      function e4(t5, e5) {
        return Math.sqrt(Math.pow(t5, 2) + Math.pow(e5, 2));
      }
      var n4 = t4.offsetX, r4 = t4.offsetY, o3 = t4.height, i3 = t4.width, a2 = r4 <= o3 / 2, c2 = n4 <= i3 / 2, s2 = r4 === o3 / 2 && n4 === i3 / 2, u2 = a2 == true && c2 == false, l2 = a2 == true && c2 == true, t4 = a2 == false && c2 == true, c2 = a2 == false && c2 == false, o3 = { topLeft: e4(n4, r4), topRight: e4(i3 - n4, r4), bottomLeft: e4(n4, o3 - r4), bottomRight: e4(i3 - n4, o3 - r4) }, r4 = 0;
      return s2 || c2 ? r4 = o3.topLeft : t4 ? r4 = o3.topRight : l2 ? r4 = o3.bottomRight : u2 && (r4 = o3.bottomLeft), 2 * r4;
    } }, { key: "_appendRipple", value: function(t4, e4) {
      e4.appendChild(t4), setTimeout(function() {
        mc.addClass(t4, "active");
      }, 50);
    } }, { key: "_toggleUnbound", value: function(t4) {
      this._options.rippleUnbound === true ? mc.addClass(t4, Tc) : t4.classList.remove(Tc);
    } }, { key: "_addColor", value: function(t4, e4) {
      var n4 = this;
      Dc.find(function(t5) {
        return t5 === n4._options.rippleColor.toLowerCase();
      }) ? mc.addClass(e4, "".concat(Ec, "-").concat(this._options.rippleColor.toLowerCase())) : (e4 = this._colorToRGB(this._options.rippleColor).join(","), e4 = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%".split("{{color}}").join("".concat(e4)), t4.style.backgroundImage = "radial-gradient(circle, ".concat(e4, ")"));
    } }, { key: "_removeOldColorClasses", value: function(e4) {
      var t4 = new RegExp("".concat(Ec, "-[a-z]+"), "gi");
      (e4.classList.value.match(t4) || []).forEach(function(t5) {
        e4.classList.remove(t5);
      });
    } }, { key: "_colorToRGB", value: function(t4) {
      return t4.toLowerCase() === "transparent" ? Ac : t4[0] === "#" ? ((r4 = t4).length < 7 && (r4 = "#".concat(r4[1]).concat(r4[1]).concat(r4[2]).concat(r4[2]).concat(r4[3]).concat(r4[3])), [parseInt(r4.substr(1, 2), 16), parseInt(r4.substr(3, 2), 16), parseInt(r4.substr(5, 2), 16)]) : (t4.indexOf("rgb") === -1 && (e4 = t4, n4 = document.body.appendChild(document.createElement("fictum")), r4 = "rgb(1, 2, 3)", n4.style.color = r4, t4 = n4.style.color !== r4 ? Ac : (n4.style.color = e4, n4.style.color === r4 || n4.style.color === "" ? Ac : (e4 = getComputedStyle(n4).color, document.body.removeChild(n4), e4))), t4.indexOf("rgb") === 0 ? ((t4 = (t4 = t4).match(/[.\d]+/g).map(function(t5) {
        return +Number(t5);
      })).length = 3, t4) : Ac);
      var e4, n4, r4;
    } }]) && kc(t3.prototype, e3), r3 && kc(t3, r3), n3;
  }();
  jc.forEach(function(t3) {
    fc.one(document, "mousedown", t3, Ic.autoInitial(new Ic()));
  }), Ha(function() {
    var t3, e3 = Ba();
    e3 && (t3 = e3.fn[Cc], e3.fn[Cc] = Ic.jQueryInterface, e3.fn[Cc].Constructor = Ic, e3.fn[Cc].noConflict = function() {
      return e3.fn[Cc] = t3, Ic.jQueryInterface;
    });
  });
  ln = Ic;
  n2(185);
  function Lc(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  var Nc = function() {
    function o3(t4) {
      var e4 = this, n3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, r3 = 2 < arguments.length ? arguments[2] : void 0;
      !function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, o3), this._element = t4, this._toggler = r3, this._event = n3.event || "blur", this._condition = n3.condition || function() {
        return true;
      }, this._selector = n3.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])', this._onlyVisible = n3.onlyVisible || false, this._focusableElements = [], this._firstElement = null, this._lastElement = null, this.handler = function(t5) {
        e4._condition(t5) && t5.target === e4._lastElement && (t5.preventDefault(), e4._firstElement.focus());
      };
    }
    var t3, e3;
    return t3 = o3, (e3 = [{ key: "trap", value: function() {
      this._setElements(), this._init(), this._setFocusTrap();
    } }, { key: "disable", value: function() {
      var e4 = this;
      this._focusableElements.forEach(function(t4) {
        t4.removeEventListener(e4._event, e4.handler);
      }), this._toggler && this._toggler.focus();
    } }, { key: "update", value: function() {
      this._setElements(), this._setFocusTrap();
    } }, { key: "_init", value: function() {
      var n3 = this;
      window.addEventListener("keydown", function t4(e4) {
        n3._firstElement && e4.key === "Tab" && !n3._focusableElements.includes(e4.target) && (e4.preventDefault(), n3._firstElement.focus(), window.removeEventListener("keydown", t4));
      });
    } }, { key: "_filterVisible", value: function(t4) {
      return t4.filter(function(t5) {
        if (!function(t6) {
          if (!t6)
            return false;
          if (t6.style && t6.parentNode && t6.parentNode.style) {
            var e5 = getComputedStyle(t6), t6 = getComputedStyle(t6.parentNode);
            return e5.display !== "none" && t6.display !== "none" && e5.visibility !== "hidden";
          }
          return false;
        }(t5))
          return false;
        for (var e4 = bc.parents(t5, "*"), n3 = 0; n3 < e4.length; n3++) {
          var r3 = window.getComputedStyle(e4[n3]);
          if (r3 && (r3.display === "none" || r3.visibility === "hidden"))
            return false;
        }
        return true;
      });
    } }, { key: "_setElements", value: function() {
      this._focusableElements = bc.find(this._selector, this._element), this._onlyVisible && (this._focusableElements = this._filterVisible(this._focusableElements)), this._firstElement = this._focusableElements[0], this._lastElement = this._focusableElements[this._focusableElements.length - 1];
    } }, { key: "_setFocusTrap", value: function() {
      var n3 = this;
      this._focusableElements.forEach(function(t4, e4) {
        e4 === n3._focusableElements.length - 1 ? t4.addEventListener(n3._event, n3.handler) : t4.removeEventListener(n3._event, n3.handler);
      });
    } }]) && Lc(t3.prototype, e3), o3;
  }();
  n2(186);
  function Rc(t3) {
    return t3.getDate();
  }
  function Bc(t3) {
    return t3.getDay();
  }
  function Hc(t3) {
    return t3.getMonth();
  }
  function Fc(t3) {
    return t3.getFullYear();
  }
  function Vc(t3) {
    return qc((t3 = t3).getFullYear(), t3.getMonth() + 1, 0).getDate();
  }
  function Yc() {
    return new Date();
  }
  function Wc(t3, e3) {
    return zc(t3, 12 * e3);
  }
  function zc(t3, e3) {
    e3 = qc(t3.getFullYear(), t3.getMonth() + e3, t3.getDate());
    return Rc(t3) !== Rc(e3) && e3.setDate(0), e3;
  }
  function Uc(t3, e3) {
    return qc(t3.getFullYear(), t3.getMonth(), t3.getDate() + e3);
  }
  function qc(t3, e3, n3) {
    n3 = new Date(t3, e3, n3);
    return 0 <= t3 && t3 < 100 && n3.setFullYear(n3.getFullYear() - 1900), n3;
  }
  function Kc(t3) {
    t3 = t3.split("-");
    return qc(t3[0], t3[1], t3[2]);
  }
  function $c(t3, e3) {
    return t3.setHours(0, 0, 0, 0), e3.setHours(0, 0, 0, 0), t3.getTime() === e3.getTime();
  }
  function Xc(t3, e3) {
    return ((Fc(t3) - function(t4, e4, n3) {
      var r3 = 0;
      n3 ? (n3 = Fc(n3), r3 = n3 - t4 + 1) : e4 && (r3 = Fc(e4));
      return r3;
    }()) % e3 + e3) % e3;
  }
  function Gc(t3, e3, n3, r3, o3) {
    return n3 === "days" ? Fc(t3) === Fc(e3) && Hc(t3) === Hc(e3) : n3 === "months" ? Fc(t3) === Fc(e3) : n3 === "years" && (Fc(e3) >= o3 && Fc(e3) <= r3);
  }
  function Qc(t3, e3, n3, r3, o3, i3, a2, c2, s2) {
    var u2, l2, f2 = Hc(t3), d2 = Fc(t3), h3 = Rc(t3), p3 = Bc(t3), v2 = Fa("div"), o3 = "\n      ".concat((u2 = h3, l2 = p3, h3 = f2, '\n      <div class="datepicker-header">\n        <div class="datepicker-title">\n          <span class="datepicker-title-text">'.concat((p3 = o3).title, '</span>\n        </div>\n        <div class="datepicker-date">\n          <span class="datepicker-date-text">').concat(p3.weekdaysShort[l2], ", ").concat(p3.monthsShort[h3], " ").concat(u2, "</span>\n        </div>\n      </div>\n    ")), "\n      ").concat((t3 = t3, e3 = e3, n3 = n3, r3 = r3, i3 = i3, a2 = a2, c2 = c2, '\n    <div class="datepicker-main">\n      '.concat(function(t4, e4, n4) {
      return '\n    <div class="datepicker-date-controls">\n      <button class="datepicker-view-change-button" aria-label="'.concat(n4.switchToMultiYearViewLabel, '">\n        ').concat(n4.monthsFull[t4], " ").concat(e4, '\n      </button>\n      <div class="datepicker-arrow-controls">\n        <button class="datepicker-previous-button" aria-label="').concat(n4.prevMonthLabel, '"></button>\n        <button class="datepicker-next-button" aria-label="').concat(n4.nextMonthLabel, '"></button>\n      </div>\n    </div>\n    ');
    }(f2, d2 = d2, o3 = o3), '\n      <div class="datepicker-view" tabindex="0">\n        ').concat(function(t4, e4, n4, r4, o4, i4, a3, c3, s3) {
      s3 = i4.view === "days" ? Zc(t4, n4, i4) : i4.view === "months" ? Jc(e4, r4, o4, i4, a3) : ts(t4, r4, 0, c3, s3);
      return s3;
    }(t3, d2, e3, n3, r3, o3, i3, a2, c2), "\n      </div>\n      ").concat(function(t4) {
      return '\n        <div class="datepicker-footer">\n          <button class="datepicker-footer-btn datepicker-clear-btn" aria-label="'.concat(t4.clearBtnLabel, '">').concat(t4.clearBtnText, '</button>\n          <button class="datepicker-footer-btn datepicker-cancel-btn" aria-label="').concat(t4.cancelBtnLabel, '">').concat(t4.cancelBtnText, '</button>\n          <button class="datepicker-footer-btn datepicker-ok-btn" aria-label="').concat(t4.okBtnLabel, '">').concat(t4.okBtnText, "</button>\n        </div>\n      ");
    }(o3), "\n    </div>\n  ")), "\n    ");
    return mc.addClass(v2, "datepicker-modal-container"), mc.addClass(v2, "datepicker-modal-container-".concat(s2)), v2.innerHTML = o3, v2;
  }
  function Zc(t3, e3, n3) {
    t3 = function(t4, e4, n4) {
      for (var r3 = [], o3 = Hc(t4), i3 = Hc(zc(t4, -1)), a2 = Hc(zc(t4, 1)), c2 = Fc(t4), s2 = function(t5, e5, n5) {
        return n5 = 0 < (n5 = n5.startDay) ? 7 - n5 : 0, 7 <= (n5 = new Date(t5, e5).getDay() + n5) ? n5 - 7 : n5;
      }(c2, o3, n4), u2 = Vc(t4), l2 = Vc(zc(t4, -1)), f2 = 1, d2 = false, h3 = 1; h3 < 7; h3++) {
        var p3 = [];
        if (h3 === 1) {
          for (var v2 = l2 - s2 + 1; v2 <= l2; v2++) {
            var m2 = qc(c2, i3, v2);
            p3.push({ date: m2, currentMonth: d2, isSelected: e4 && $c(m2, e4), isToday: $c(m2, Yc()), dayNumber: Rc(m2) });
          }
          d2 = true;
          for (var g2 = 7 - p3.length, y2 = 0; y2 < g2; y2++) {
            var b2 = qc(c2, o3, f2);
            p3.push({ date: b2, currentMonth: d2, isSelected: e4 && $c(b2, e4), isToday: $c(b2, Yc()), dayNumber: Rc(b2) }), f2++;
          }
        } else
          for (var _2 = 1; _2 < 8; _2++) {
            u2 < f2 && (d2 = !(f2 = 1));
            var w2 = qc(c2, d2 ? o3 : a2, f2);
            p3.push({ date: w2, currentMonth: d2, isSelected: e4 && $c(w2, e4), isToday: $c(w2, Yc()), dayNumber: Rc(w2) }), f2++;
          }
        r3.push(p3);
      }
      return r3;
    }(t3, e3, n3), e3 = n3.weekdaysNarrow, e3 = "\n      <tr>\n        ".concat(e3.map(function(t4, e4) {
      return '<th class="datepicker-day-heading" scope="col" aria-label="'.concat(n3.weekdaysFull[e4], '">').concat(t4, "</th>");
    }).join(""), "\n      </tr>\n    "), t3 = t3.map(function(t4) {
      return "\n        <tr>\n          ".concat(t4.map(function(t5) {
        return '\n              <td\n              class="datepicker-cell datepicker-small-cell datepicker-day-cell\n              '.concat(t5.currentMonth ? "" : "disabled", " ").concat(t5.disabled ? "disabled" : "", "\n              ").concat(t5.isToday && "current", " ").concat(t5.isSelected && "selected", '"\n              data-mdb-date="').concat(Fc(t5.date), "-").concat(Hc(t5.date), "-").concat(Rc(t5.date), '"\n              aria-label="').concat(t5.date, '"\n              aria-selected="').concat(t5.isSelected, '">\n                <div\n                  class="datepicker-cell-content datepicker-small-cell-content"\n                  style="').concat(t5.currentMonth ? "display: block" : "display: none", '">\n                  ').concat(t5.dayNumber, "\n                  </div>\n              </td>\n            ");
      }).join(""), "\n        </tr>\n      ");
    }).join("");
    return '\n      <table class="datepicker-table">\n        <thead>\n          '.concat(e3, '\n        </thead>\n        <tbody class="datepicker-table-body">\n         ').concat(t3, "\n        </tbody>\n      </table>\n    ");
  }
  function Jc(n3, r3, o3, i3, t3) {
    var t3 = function(t4, e3) {
      for (var n4 = [], r4 = [], o4 = 0; o4 < t4.monthsShort.length; o4++) {
        var i4;
        r4.push(t4.monthsShort[o4]), r4.length === e3 && (i4 = r4, n4.push(i4), r4 = []);
      }
      return n4;
    }(i3, t3), a2 = Hc(Yc()), t3 = "\n      ".concat(t3.map(function(t4) {
      return "\n          <tr>\n            ".concat(t4.map(function(t5) {
        var e3 = i3.monthsShort.indexOf(t5);
        return '\n                <td class="datepicker-cell datepicker-large-cell datepicker-month-cell '.concat(e3 === o3 && n3 === r3 ? "selected" : "", " ").concat(e3 === a2 ? "current" : "", '" data-mdb-month="').concat(e3, '" data-mdb-year="').concat(n3, '" aria-label="').concat(t5, ", ").concat(n3, '">\n                  <div class="datepicker-cell-content datepicker-large-cell-content">').concat(t5, "</div>\n                </td>\n              ");
      }).join(""), "\n          </tr>\n        ");
    }).join(""), "\n    ");
    return '\n      <table class="datepicker-table">\n        <tbody class="datepicker-table-body">\n         '.concat(t3, "\n        </tbody>\n      </table>\n    ");
  }
  function ts(t3, e3, n3, r3, o3) {
    var o3 = function(t4, e4, n4) {
      for (var r4 = [], o4 = Fc(t4), t4 = Xc(t4, e4), i4 = o4 - t4, a2 = [], c2 = 0; c2 < e4; c2++) {
        var s2;
        a2.push(i4 + c2), a2.length === n4 && (s2 = a2, r4.push(s2), a2 = []);
      }
      return r4;
    }(t3, r3, o3), i3 = Fc(Yc()), o3 = "\n    ".concat(o3.map(function(t4) {
      return "\n        <tr>\n          ".concat(t4.map(function(t5) {
        return '\n              <td class="datepicker-cell datepicker-large-cell datepicker-year-cell '.concat(t5 === e3 ? "selected" : "", " ").concat(t5 === i3 ? "current" : "", '" aria-label="').concat(t5, '" data-mdb-year="').concat(t5, '">\n                <div class="datepicker-cell-content datepicker-large-cell-content">').concat(t5, "</div>\n              </td>\n            ");
      }).join(""), "\n        </tr>\n      ");
    }).join(""), "\n  ");
    return '\n      <table class="datepicker-table">\n        <tbody class="datepicker-table-body">\n        '.concat(o3, "\n        </tbody>\n      </table>\n    ");
  }
  function es(t3) {
    return (es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function ns(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function rs(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? ns(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : ns(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function os(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  var is = "datepicker", as = "mdb.datepicker", Dr = ".".concat(as), cs = "close".concat(Dr), ss = "open".concat(Dr), us = "dateChange".concat(Dr), ls = "click".concat(Dr).concat(".data-api"), fs = { title: "Select date", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekdaysNarrow: ["S", "M", "T", "W", "T", "F", "S"], okBtnText: "Ok", clearBtnText: "Clear", cancelBtnText: "Cancel", okBtnLabel: "Confirm selection", clearBtnLabel: "Clear selection", cancelBtnLabel: "Cancel selection", nextMonthLabel: "Next month", prevMonthLabel: "Previous month", nextYearLabel: "Next year", prevYearLabel: "Previous year", nextMultiYearLabel: "Next 24 years", prevMultiYearLabel: "Previous 24 years", switchToMultiYearViewLabel: "Choose year and month", switchToMonthViewLabel: "Choose date", switchToDayViewLabel: "Choose date", startDate: null, startDay: 0, format: "dd/mm/yyyy", view: "days", toggleButton: true, disableToggleButton: false, disableInput: false }, ds = { title: "string", monthsFull: "array", monthsShort: "array", weekdaysFull: "array", weekdaysShort: "array", weekdaysNarrow: "array", okBtnText: "string", clearBtnText: "string", cancelBtnText: "string", okBtnLabel: "string", clearBtnLabel: "string", cancelBtnLabel: "string", nextMonthLabel: "string", prevMonthLabel: "string", nextYearLabel: "string", prevYearLabel: "string", nextMultiYearLabel: "string", prevMultiYearLabel: "string", switchToMultiYearViewLabel: "string", switchToMonthViewLabel: "string", switchToDayViewLabel: "string", startDate: "(null|string|date)", startDay: "number", format: "string", view: "string", toggleButton: "boolean", disableToggleButton: "boolean", disableInput: "boolean" }, hs = function() {
    function n3(t4, e4) {
      !function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, n3), this._element = t4, this._input = bc.findOne("input", this._element), this._options = this._getConfig(e4), this._activeDate = new Date(), this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._view = this._options.view, this._popper = null, this._focusTrap = null, this._isOpen = false, this._toggleButtonId = Na("datepicker-toggle-"), this._element && Ua.setData(t4, as, this), this._init(), this.toggleButton && this._options.disableToggle && (this.toggleButton.disabled = "true"), this._options.disableInput && (this._input.disabled = "true");
    }
    var t3, e3, r3;
    return t3 = n3, r3 = [{ key: "NAME", get: function() {
      return is;
    } }, { key: "getInstance", value: function(t4) {
      return Ua.getData(t4, as);
    } }, { key: "getOrCreateInstance", value: function(t4) {
      var e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return this.getInstance(t4) || new this(t4, es(e4) === "object" ? e4 : null);
    } }], (e3 = [{ key: "container", get: function() {
      return bc.findOne(".datepicker-modal-container".concat("-", this._toggleButtonId)) || bc.findOne(".datepicker-dropdown-container".concat("-", this._toggleButtonId));
    } }, { key: "options", get: function() {
      return this._options;
    } }, { key: "activeCell", get: function() {
      var t4;
      return this._view === "days" && (t4 = this._getActiveDayCell()), this._view === "months" && (t4 = this._getActiveMonthCell()), t4 = this._view === "years" ? this._getActiveYearCell() : t4;
    } }, { key: "activeDay", get: function() {
      return Rc(this._activeDate);
    } }, { key: "activeMonth", get: function() {
      return Hc(this._activeDate);
    } }, { key: "activeYear", get: function() {
      return Fc(this._activeDate);
    } }, { key: "firstYearInView", get: function() {
      return this.activeYear - Xc(this._activeDate, 24);
    } }, { key: "lastYearInView", get: function() {
      return this.firstYearInView + 24 - 1;
    } }, { key: "viewChangeButton", get: function() {
      return bc.findOne(".datepicker-view-change-button", this.container);
    } }, { key: "previousButton", get: function() {
      return bc.findOne(".datepicker-previous-button", this.container);
    } }, { key: "nextButton", get: function() {
      return bc.findOne(".datepicker-next-button", this.container);
    } }, { key: "okButton", get: function() {
      return bc.findOne(".datepicker-ok-btn", this.container);
    } }, { key: "cancelButton", get: function() {
      return bc.findOne(".datepicker-cancel-btn", this.container);
    } }, { key: "clearButton", get: function() {
      return bc.findOne(".datepicker-clear-btn", this.container);
    } }, { key: "datesContainer", get: function() {
      return bc.findOne(".datepicker-view", this.container);
    } }, { key: "toggleButton", get: function() {
      return bc.findOne(".datepicker-toggle-button", this._element);
    } }, { key: "_getConfig", value: function(t4) {
      var e4 = mc.getDataAttributes(this._element);
      return t4 = rs(rs(rs({}, fs), e4), t4), Ra(is, t4, ds), t4.startDay && t4.startDay !== 0 && (e4 = this._getNewDaysOrderArray(t4), t4.weekdaysNarrow = e4), t4;
    } }, { key: "_getNewDaysOrderArray", value: function(t4) {
      var e4 = t4.startDay, t4 = t4.weekdaysNarrow;
      return t4.slice(e4).concat(t4.slice(0, e4));
    } }, { key: "_init", value: function() {
      !this.toggleButton && this._options.toggleButton && (this._appendToggleButton(), (this._input.readOnly || this._input.disabled) && (this.toggleButton.style.pointerEvents = "none")), this._listenToUserInput(), this._listenToToggleClick(), this._listenToToggleKeydown();
    } }, { key: "_appendToggleButton", value: function() {
      var t4 = '\n    <button id="'.concat(this._toggleButtonId, '" type="button" class="datepicker-toggle-button" data-mdb-toggle="datepicker">\n      <i class="far fa-calendar datepicker-toggle-icon"></i>\n    </button>\n  ');
      this._element.insertAdjacentHTML("beforeend", t4), mc.addClass(this._input, "form-icon-trailing");
    } }, { key: "open", value: function() {
      var t4, e4, n4 = this;
      this._input.readOnly || this._input.disabled || (t4 = fc.trigger(this._element, ss), this._isOpen || t4.defaultPrevented || (this._setInitialDate(), e4 = Fa("div"), mc.addClass(e4, "datepicker-backdrop"), t4 = e4, e4 = Qc(this._activeDate, this._selectedDate, this._selectedYear, this._selectedMonth, this._options, 4, 24, 24, this._toggleButtonId), this._openModal(t4, e4), mc.addClass(this.container, "animation"), mc.addClass(this.container, "fade-in"), this.container.style.animationDuration = "300ms", mc.addClass(t4, "animation"), mc.addClass(t4, "fade-in"), t4.style.animationDuration = "150ms", this._setFocusTrap(this.container), this._listenToDateSelection(), this._addControlsListeners(), this._listenToEscapeClick(), this._listenToKeyboardNavigation(), this._listenToDatesContainerFocus(), this._listenToDatesContainerBlur(), this._asyncFocusDatesContainer(), this._updateViewControlsAndAttributes(this._view), this._isOpen = true, setTimeout(function() {
        n4._listenToOutsideClick();
      }, 0)));
    } }, { key: "_openDropdown", value: function(t4) {
      this._popper = Ie(this._input, t4, { placement: "bottom-start" }), document.body.appendChild(t4);
    } }, { key: "_openModal", value: function(t4, e4) {
      document.body.appendChild(t4), document.body.appendChild(e4);
      window.innerWidth > document.documentElement.clientWidth && (document.body.style.overflow = "hidden", document.body.style.paddingRight = "15px");
    } }, { key: "_setFocusTrap", value: function(t4) {
      this._focusTrap = new Nc(t4, { event: "keydown", condition: function(t5) {
        return t5.key === "Tab";
      } }), this._focusTrap.trap();
    } }, { key: "_listenToUserInput", value: function() {
      var e4 = this;
      fc.on(this._input, "input", function(t4) {
        e4._handleUserInput(t4.target.value);
      });
    } }, { key: "_listenToToggleClick", value: function() {
      var e4 = this;
      fc.on(this._element, ls, '[data-mdb-toggle="datepicker"]', function(t4) {
        t4.preventDefault(), e4.open();
      });
    } }, { key: "_listenToToggleKeydown", value: function() {
      var e4 = this;
      fc.on(this._element, "keydown", '[data-mdb-toggle="datepicker"]', function(t4) {
        t4.keyCode !== 13 || e4._isOpen || e4.open();
      });
    } }, { key: "_listenToDateSelection", value: function() {
      var r4 = this;
      fc.on(this.datesContainer, "click", function(t4) {
        var e4 = (t4.target.nodeName === "DIV" ? t4.target.parentNode : t4.target).dataset, n4 = t4.target.nodeName === "DIV" ? t4.target.parentNode : t4.target;
        e4.mdbDate && r4._pickDay(e4.mdbDate, n4), e4.mdbMonth && e4.mdbYear && (t4 = parseInt(e4.mdbMonth, 10), n4 = parseInt(e4.mdbYear, 10), r4._pickMonth(t4, n4)), e4.mdbYear && !e4.mdbMonth && (e4 = parseInt(e4.mdbYear, 10), r4._pickYear(e4)), r4._updateHeaderDate(r4._activeDate, r4._options.monthsShort, r4._options.weekdaysShort);
      });
    } }, { key: "_updateHeaderDate", value: function(t4, e4, n4) {
      var r4 = bc.findOne(".datepicker-date-text", this.container), o3 = Hc(t4), i3 = Rc(t4), t4 = Bc(t4);
      r4.innerHTML = "".concat(n4[t4], ", ").concat(e4[o3], " ").concat(i3);
    } }, { key: "_addControlsListeners", value: function() {
      var t4 = this;
      fc.on(this.nextButton, "click", function() {
        t4._view === "days" ? t4.nextMonth() : t4._view === "years" ? t4.nextYears() : t4.nextYear();
      }), fc.on(this.previousButton, "click", function() {
        t4._view === "days" ? t4.previousMonth() : t4._view === "years" ? t4.previousYears() : t4.previousYear();
      }), fc.on(this.viewChangeButton, "click", function() {
        t4._view === "days" ? t4._changeView("years") : t4._view !== "years" && t4._view !== "months" || t4._changeView("days");
      }), this._listenToFooterButtonsClick();
    } }, { key: "_listenToFooterButtonsClick", value: function() {
      var t4 = this;
      fc.on(this.okButton, "click", function() {
        return t4.handleOk();
      }), fc.on(this.cancelButton, "click", function() {
        return t4.handleCancel();
      }), fc.on(this.clearButton, "click", function() {
        return t4.handleClear();
      });
    } }, { key: "_listenToOutsideClick", value: function() {
      var n4 = this;
      fc.on(document, ls, function(t4) {
        var e4 = t4.target === n4.container, t4 = n4.container && n4.container.contains(t4.target);
        e4 || t4 || n4.close();
      });
    } }, { key: "_listenToEscapeClick", value: function() {
      var e4 = this;
      fc.on(document, "keydown", function(t4) {
        t4.keyCode === 27 && e4._isOpen && e4.close();
      });
    } }, { key: "_listenToKeyboardNavigation", value: function() {
      var e4 = this;
      fc.on(this.datesContainer, "keydown", function(t4) {
        e4._handleKeydown(t4);
      });
    } }, { key: "_listenToDatesContainerFocus", value: function() {
      var t4 = this;
      fc.on(this.datesContainer, "focus", function() {
        t4._focusActiveCell(t4.activeCell);
      });
    } }, { key: "_listenToDatesContainerBlur", value: function() {
      var t4 = this;
      fc.on(this.datesContainer, "blur", function() {
        t4._removeCurrentFocusStyles();
      });
    } }, { key: "_handleKeydown", value: function(t4) {
      this._view === "days" && this._handleDaysViewKeydown(t4), this._view === "months" && this._handleMonthsViewKeydown(t4), this._view === "years" && this._handleYearsViewKeydown(t4);
    } }, { key: "_handleDaysViewKeydown", value: function(t4) {
      var e4 = this._activeDate, n4 = this.activeCell;
      switch (t4.keyCode) {
        case 37:
          this._activeDate = Uc(this._activeDate, -1);
          break;
        case 39:
          this._activeDate = Uc(this._activeDate, 1);
          break;
        case 38:
          this._activeDate = Uc(this._activeDate, -7);
          break;
        case 40:
          this._activeDate = Uc(this._activeDate, 7);
          break;
        case 36:
          this._activeDate = Uc(this._activeDate, 1 - Rc(this._activeDate));
          break;
        case 35:
          this._activeDate = Uc(this._activeDate, Vc(this._activeDate) - Rc(this._activeDate));
          break;
        case 33:
          this._activeDate = zc(this._activeDate, -1);
          break;
        case 34:
          this._activeDate = zc(this._activeDate, 1);
          break;
        case 13:
        case 32:
          return this._selectDate(this._activeDate), void t4.preventDefault();
        default:
          return;
      }
      Gc(e4, this._activeDate, this._view, 24, 0) || this._changeView("days"), this._removeHighlightFromCell(n4), this._focusActiveCell(this.activeCell), t4.preventDefault();
    } }, { key: "_asyncFocusDatesContainer", value: function() {
      var t4 = this;
      setTimeout(function() {
        t4.datesContainer.focus();
      }, 0);
    } }, { key: "_focusActiveCell", value: function(t4) {
      t4 && mc.addClass(t4, "focused");
    } }, { key: "_removeHighlightFromCell", value: function(t4) {
      t4 && t4.classList.remove("focused");
    } }, { key: "_getActiveDayCell", value: function() {
      var e4 = this, t4 = bc.find("td", this.datesContainer);
      return Array.from(t4).find(function(t5) {
        return $c(Kc(t5.dataset.mdbDate), e4._activeDate);
      });
    } }, { key: "_handleMonthsViewKeydown", value: function(t4) {
      var e4 = this._activeDate, n4 = this.activeCell;
      switch (t4.keyCode) {
        case 37:
          this._activeDate = zc(this._activeDate, -1);
          break;
        case 39:
          this._activeDate = zc(this._activeDate, 1);
          break;
        case 38:
          this._activeDate = zc(this._activeDate, -4);
          break;
        case 40:
          this._activeDate = zc(this._activeDate, 4);
          break;
        case 36:
          this._activeDate = zc(this._activeDate, -this.activeMonth);
          break;
        case 35:
          this._activeDate = zc(this._activeDate, 11 - this.activeMonth);
          break;
        case 33:
          this._activeDate = Wc(this._activeDate, -1);
          break;
        case 34:
          this._activeDate = Wc(this._activeDate, 1);
          break;
        case 13:
        case 32:
          return void this._selectMonth(this.activeMonth);
        default:
          return;
      }
      Gc(e4, this._activeDate, this._view, 24, 0) || this._changeView("months"), this._removeHighlightFromCell(n4), this._focusActiveCell(this.activeCell), t4.preventDefault();
    } }, { key: "_getActiveMonthCell", value: function() {
      var n4 = this, t4 = bc.find("td", this.datesContainer);
      return Array.from(t4).find(function(t5) {
        var e4 = parseInt(t5.dataset.mdbYear, 10), t5 = parseInt(t5.dataset.mdbMonth, 10);
        return e4 === n4.activeYear && t5 === n4.activeMonth;
      });
    } }, { key: "_handleYearsViewKeydown", value: function(t4) {
      var e4 = this._activeDate, n4 = this.activeCell;
      switch (t4.keyCode) {
        case 37:
          this._activeDate = Wc(this._activeDate, -1);
          break;
        case 39:
          this._activeDate = Wc(this._activeDate, 1);
          break;
        case 38:
          this._activeDate = Wc(this._activeDate, -4);
          break;
        case 40:
          this._activeDate = Wc(this._activeDate, 4);
          break;
        case 36:
          this._activeDate = Wc(this._activeDate, -Xc(this._activeDate, 24));
          break;
        case 35:
          this._activeDate = Wc(this._activeDate, 24 - Xc(this._activeDate, 24) - 1);
          break;
        case 33:
          this._activeDate = Wc(this._activeDate, -24);
          break;
        case 34:
          this._activeDate = Wc(this._activeDate, 24);
          break;
        case 13:
        case 32:
          return void this._selectYear(this.activeYear);
        default:
          return;
      }
      Gc(e4, this._activeDate, this._view, 24, 0) || this._changeView("years"), this._removeHighlightFromCell(n4), this._focusActiveCell(this.activeCell), t4.preventDefault();
    } }, { key: "_getActiveYearCell", value: function() {
      var e4 = this, t4 = bc.find("td", this.datesContainer);
      return Array.from(t4).find(function(t5) {
        return parseInt(t5.dataset.mdbYear, 10) === e4.activeYear;
      });
    } }, { key: "_setInitialDate", value: function() {
      this._input.value ? this._handleUserInput(this._input.value) : this._options.startDate ? this._activeDate = new Date(this._options.startDate) : this._activeDate = new Date();
    } }, { key: "close", value: function() {
      var t4 = fc.trigger(this._element, cs);
      this._isOpen && !t4.defaultPrevented && (this._removeDatepickerListeners(), mc.addClass(this.container, "animation"), mc.addClass(this.container, "fade-out"), this._closeModal(), this._isOpen = false, this._view = this._options.view, (this.toggleButton || this._input).focus());
    } }, { key: "_closeDropdown", value: function() {
      var t4 = this, e4 = bc.findOne(".datepicker-dropdown-container");
      e4.addEventListener("animationend", function() {
        e4 && document.body.removeChild(e4), t4._popper && t4._popper.destroy();
      }), this._removeFocusTrap();
    } }, { key: "_closeModal", value: function() {
      var t4 = bc.findOne(".datepicker-backdrop"), e4 = bc.findOne(".datepicker-modal-container");
      mc.addClass(t4, "animation"), mc.addClass(t4, "fade-out"), e4 && t4 && t4.addEventListener("animationend", function() {
        document.body.removeChild(t4), document.body.removeChild(e4), document.body.style.overflow = "", document.body.style.paddingRight = "";
      });
    } }, { key: "_removeFocusTrap", value: function() {
      this._focusTrap && (this._focusTrap.disable(), this._focusTrap = null);
    } }, { key: "_removeDatepickerListeners", value: function() {
      fc.off(this.nextButton, "click"), fc.off(this.previousButton, "click"), fc.off(this.viewChangeButton, "click"), fc.off(this.okButton, "click"), fc.off(this.cancelButton, "click"), fc.off(this.clearButton, "click"), fc.off(this.datesContainer, "click"), fc.off(this.datesContainer, "keydown"), fc.off(this.datesContainer, "focus"), fc.off(this.datesContainer, "blur"), fc.off(document, ls);
    } }, { key: "dispose", value: function() {
      this._isOpen && this.close(), this._removeInputAndToggleListeners();
      var t4 = bc.findOne("#".concat(this._toggleButtonId));
      t4 && this._element.removeChild(t4), Ua.removeData(this._element, as), this._element = null, this._input = null, this._options = null, this._activeDate = null, this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._view = null, this._popper = null, this._focusTrap = null;
    } }, { key: "_removeInputAndToggleListeners", value: function() {
      fc.off(this._input, "input"), fc.off(this._element, ls, '[data-mdb-toggle="datepicker"]'), fc.off(this._element, "keydown", '[data-mdb-toggle="datepicker"]');
    } }, { key: "handleOk", value: function() {
      this._confirmSelection(this._selectedDate), this.close();
    } }, { key: "_selectDate", value: function(t4) {
      var e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : this.activeCell;
      this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e4), this._selectedDate = t4;
    } }, { key: "_selectYear", value: function(t4) {
      var e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : this.activeCell;
      this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e4), this._selectedYear = t4, this._asyncChangeView("months");
    } }, { key: "_selectMonth", value: function(t4) {
      var e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : this.activeCell;
      this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e4), this._selectedMonth = t4, this._asyncChangeView("days");
    } }, { key: "_removeSelectedStyles", value: function(t4) {
      t4 && t4.classList.remove("selected");
    } }, { key: "_addSelectedStyles", value: function(t4) {
      t4 && mc.addClass(t4, "selected");
    } }, { key: "_confirmSelection", value: function(t4) {
      var e4;
      t4 && (e4 = this.formatDate(t4), this._input.value = e4, mc.addClass(this._input, "active"), fc.trigger(this._element, us, { date: t4 }));
    } }, { key: "handleCancel", value: function() {
      this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this.close();
    } }, { key: "handleClear", value: function() {
      this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._removeCurrentSelectionStyles(), this._input.value = "", this._input.classList.remove("active"), this._setInitialDate(), this._changeView("days");
    } }, { key: "_removeCurrentSelectionStyles", value: function() {
      var t4 = bc.findOne(".selected", this.container);
      t4 && t4.classList.remove("selected");
    } }, { key: "_removeCurrentFocusStyles", value: function() {
      var t4 = bc.findOne(".focused", this.container);
      t4 && t4.classList.remove("focused");
    } }, { key: "formatDate", value: function(t4) {
      var e4 = Rc(t4), n4 = this._addLeadingZero(Rc(t4)), r4 = this._options.weekdaysShort[Bc(t4)], o3 = this._options.weekdaysFull[Bc(t4)], i3 = Hc(t4) + 1, a2 = this._addLeadingZero(Hc(t4) + 1), c2 = this._options.monthsShort[Hc(t4)], s2 = this._options.monthsFull[Hc(t4)], u2 = Fc(t4).toString().length === 2 ? Fc(t4) : Fc(t4).toString().slice(2, 4), l2 = Fc(t4), t4 = this._options.format.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g), f2 = "";
      return t4.forEach(function(t5) {
        switch (t5) {
          case "dddd":
            t5 = t5.replace(t5, o3);
            break;
          case "ddd":
            t5 = t5.replace(t5, r4);
            break;
          case "dd":
            t5 = t5.replace(t5, n4);
            break;
          case "d":
            t5 = t5.replace(t5, e4);
            break;
          case "mmmm":
            t5 = t5.replace(t5, s2);
            break;
          case "mmm":
            t5 = t5.replace(t5, c2);
            break;
          case "mm":
            t5 = t5.replace(t5, a2);
            break;
          case "m":
            t5 = t5.replace(t5, i3);
            break;
          case "yyyy":
            t5 = t5.replace(t5, l2);
            break;
          case "yy":
            t5 = t5.replace(t5, u2);
        }
        f2 += t5;
      }), f2;
    } }, { key: "_addLeadingZero", value: function(t4) {
      return parseInt(t4, 10) < 10 ? "0".concat(t4) : t4;
    } }, { key: "_pickDay", value: function(t4, e4) {
      t4 = Kc(t4);
      this._activeDate = t4, this._selectDate(t4, e4);
    } }, { key: "_pickYear", value: function(t4) {
      var e4 = qc(t4, this.activeMonth, this.activeDay);
      this._activeDate = e4, this._selectedDate = e4, this._selectYear(t4);
    } }, { key: "_pickMonth", value: function(t4, e4) {
      e4 = qc(e4, t4, this.activeDay);
      this._activeDate = e4, this._selectMonth(t4);
    } }, { key: "nextMonth", value: function() {
      var t4, e4 = Zc(t4 = zc(this._activeDate, 1), this._selectedDate, this._options);
      this._activeDate = t4, this.viewChangeButton.textContent = "".concat(this._options.monthsFull[this.activeMonth], " ").concat(this.activeYear), this.datesContainer.innerHTML = e4;
    } }, { key: "previousMonth", value: function() {
      var t4 = zc(this._activeDate, -1), t4 = Zc(this._activeDate = t4, this._selectedDate, this._options);
      this.viewChangeButton.textContent = "".concat(this._options.monthsFull[this.activeMonth], " ").concat(this.activeYear), this.datesContainer.innerHTML = t4;
    } }, { key: "nextYear", value: function() {
      var t4 = Wc(this._activeDate, 1);
      this._activeDate = t4, this.viewChangeButton.textContent = "".concat(this.activeYear);
      t4 = Jc(this.activeYear, this._selectedYear, this._selectedMonth, this._options, 4);
      this.datesContainer.innerHTML = t4;
    } }, { key: "previousYear", value: function() {
      var t4 = Wc(this._activeDate, -1);
      this._activeDate = t4, this.viewChangeButton.textContent = "".concat(this.activeYear);
      t4 = Jc(this.activeYear, this._selectedYear, this._selectedMonth, this._options, 4);
      this.datesContainer.innerHTML = t4;
    } }, { key: "nextYears", value: function() {
      var t4 = Wc(this._activeDate, 24), t4 = ts(this._activeDate = t4, this._selectedYear, this._options, 24, 4);
      this.viewChangeButton.textContent = "".concat(this.firstYearInView, " - ").concat(this.lastYearInView), this.datesContainer.innerHTML = t4;
    } }, { key: "previousYears", value: function() {
      var t4 = Wc(this._activeDate, -24), t4 = ts(this._activeDate = t4, this._selectedYear, this._options, 24, 4);
      this.viewChangeButton.textContent = "".concat(this.firstYearInView, " - ").concat(this.lastYearInView), this.datesContainer.innerHTML = t4;
    } }, { key: "_asyncChangeView", value: function(t4) {
      var e4 = this;
      setTimeout(function() {
        e4._changeView(t4);
      }, 0);
    } }, { key: "_changeView", value: function(t4) {
      this._view = t4, this.datesContainer.blur(), t4 === "days" && (this.datesContainer.innerHTML = Zc(this._activeDate, this._selectedDate, this._options)), t4 === "months" && (this.datesContainer.innerHTML = Jc(this.activeYear, this._selectedYear, this._selectedMonth, this._options, 4)), t4 === "years" && (this.datesContainer.innerHTML = ts(this._activeDate, this._selectedYear, this._options, 24, 4)), this.datesContainer.focus(), this._updateViewControlsAndAttributes(t4);
    } }, { key: "_updateViewControlsAndAttributes", value: function(t4) {
      t4 === "days" && (this.viewChangeButton.textContent = "".concat(this._options.monthsFull[this.activeMonth], " ").concat(this.activeYear), this.viewChangeButton.setAttribute("aria-label", this._options.switchToMultiYearViewLabel), this.previousButton.setAttribute("aria-label", this._options.prevMonthLabel), this.nextButton.setAttribute("aria-label", this._options.nextMonthLabel)), t4 === "months" && (this.viewChangeButton.textContent = "".concat(this.activeYear), this.viewChangeButton.setAttribute("aria-label", this._options.switchToDayViewLabel), this.previousButton.setAttribute("aria-label", this._options.prevYearLabel), this.nextButton.setAttribute("aria-label", this._options.nextYearLabel)), t4 === "years" && (this.viewChangeButton.textContent = "".concat(this.firstYearInView, " - ").concat(this.lastYearInView), this.viewChangeButton.setAttribute("aria-label", this._options.switchToMonthViewLabel), this.previousButton.setAttribute("aria-label", this._options.prevMultiYearLabel), this.nextButton.setAttribute("aria-label", this._options.nextMultiYearLabel));
    } }, { key: "_handleUserInput", value: function(t4) {
      var e4 = this._getDelimeters(this._options.format), e4 = this._parseDate(t4, this._options.format, e4);
      Number.isNaN(e4.getTime()) ? (this._activeDate = new Date(), this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null) : (this._activeDate = e4, this._selectedDate = e4);
    } }, { key: "_getDelimeters", value: function(t4) {
      return t4.match(/[^(dmy)]{1,}/g);
    } }, { key: "_parseDate", value: function(t4, e4, n4) {
      for (var n4 = n4[0] !== n4[1] ? n4[0] + n4[1] : n4[0], n4 = new RegExp("[".concat(n4, "]")), r4 = t4.split(n4), o3 = e4.split(n4), n4 = e4.indexOf("mmm") !== -1, i3 = [], a2 = 0; a2 < o3.length; a2++)
        o3[a2].indexOf("yy") !== -1 && (i3[0] = { value: r4[a2], format: o3[a2] }), o3[a2].indexOf("m") !== -1 && (i3[1] = { value: r4[a2], format: o3[a2] }), o3[a2].indexOf("d") !== -1 && o3[a2].length <= 2 && (i3[2] = { value: r4[a2], format: o3[a2] });
      e4 = e4.indexOf("mmmm") !== -1 ? this._options.monthsFull : this._options.monthsShort;
      return qc(Number(i3[0].value), n4 ? this.getMonthNumberByMonthName(i3[1].value, e4) : Number(i3[1].value) - 1, Number(i3[2].value));
    } }, { key: "getMonthNumberByMonthName", value: function(e4, t4) {
      return t4.findIndex(function(t5) {
        return t5 === e4;
      });
    } }]) && os(t3.prototype, e3), r3 && os(t3, r3), n3;
  }(), rt = hs;
  bc.find(".datepicker").forEach(function(t3) {
    var e3 = hs.getInstance(t3);
    e3 || new hs(t3);
  });
  n2(187), n2(189);
  function ps(t3, e3) {
    return function(t4) {
      if (Array.isArray(t4))
        return t4;
    }(t3) || function(t4, e4) {
      var n3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
      if (n3 != null) {
        var r3, o3, i3 = [], a2 = true, c2 = false;
        try {
          for (n3 = n3.call(t4); !(a2 = (r3 = n3.next()).done) && (i3.push(r3.value), !e4 || i3.length !== e4); a2 = true)
            ;
        } catch (t5) {
          c2 = true, o3 = t5;
        } finally {
          try {
            a2 || n3.return == null || n3.return();
          } finally {
            if (c2)
              throw o3;
          }
        }
        return i3;
      }
    }(t3, e3) || function(t4, e4) {
      if (t4) {
        if (typeof t4 == "string")
          return vs(t4, e4);
        var n3 = Object.prototype.toString.call(t4).slice(8, -1);
        return (n3 = n3 === "Object" && t4.constructor ? t4.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t4) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? vs(t4, e4) : void 0;
      }
    }(t3, e3) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function vs(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  function ms(t3, e3) {
    var n3 = t3.clientX, r3 = t3.clientY, o3 = t3.touches, i3 = 2 < arguments.length && arguments[2] !== void 0 && arguments[2], t3 = (a2 = e3.getBoundingClientRect()).left, e3 = a2.top, a2 = {};
    return i3 && o3 ? i3 && 0 < Object.keys(o3).length && (a2 = { x: o3[0].clientX - t3, y: o3[0].clientY - e3 }) : a2 = { x: n3 - t3, y: r3 - e3 }, a2;
  }
  function gs() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  var ys = function(t3) {
    return t3 && Object.prototype.toString.call(t3) === "[object Date]" && !isNaN(t3);
  }, bs = function(t3) {
    t3 = (!(1 < arguments.length && arguments[1] !== void 0) || arguments[1] ? t3.value : t3).replace(/:/gi, " ");
    return t3.split(" ");
  };
  function _s(t3) {
    return (_s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function ws(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function Os(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? ws(Object(n3), true).forEach(function(t4) {
        js(e3, t4, n3[t4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : ws(Object(n3)).forEach(function(t4) {
        Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
      });
    }
    return e3;
  }
  function ks(t3, e3) {
    return function(t4) {
      if (Array.isArray(t4))
        return t4;
    }(t3) || function(t4, e4) {
      var n3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
      if (n3 != null) {
        var r3, o3, i3 = [], a2 = true, c2 = false;
        try {
          for (n3 = n3.call(t4); !(a2 = (r3 = n3.next()).done) && (i3.push(r3.value), !e4 || i3.length !== e4); a2 = true)
            ;
        } catch (t5) {
          c2 = true, o3 = t5;
        } finally {
          try {
            a2 || n3.return == null || n3.return();
          } finally {
            if (c2)
              throw o3;
          }
        }
        return i3;
      }
    }(t3, e3) || Ss(t3, e3) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Cs(t3) {
    return function(t4) {
      if (Array.isArray(t4))
        return Es(t4);
    }(t3) || function(t4) {
      if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
        return Array.from(t4);
    }(t3) || Ss(t3) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Ss(t3, e3) {
    if (t3) {
      if (typeof t3 == "string")
        return Es(t3, e3);
      var n3 = Object.prototype.toString.call(t3).slice(8, -1);
      return (n3 = n3 === "Object" && t3.constructor ? t3.constructor.name : n3) === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? Es(t3, e3) : void 0;
    }
  }
  function Es(t3, e3) {
    (e3 == null || e3 > t3.length) && (e3 = t3.length);
    for (var n3 = 0, r3 = new Array(e3); n3 < e3; n3++)
      r3[n3] = t3[n3];
    return r3;
  }
  function xs(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  function js(t3, e3, n3) {
    return e3 in t3 ? Object.defineProperty(t3, e3, { value: n3, enumerable: true, configurable: true, writable: true }) : t3[e3] = n3, t3;
  }
  var Ts = "timepicker", As = "mdb.".concat(Ts), Ds = "active", Ps = "".concat(Ts, "-am"), Ms = "".concat(Ts, "-cancel"), Is = "".concat(Ts, "-clear"), Ls = "".concat(Ts, "-submit"), Ns = "".concat(Ts, "-circle"), Rs = "".concat(Ts, "-clock-animation"), Bs = "".concat(Ts, "-clock"), Hs = "".concat(Ts, "-clock-inner"), Fs = "".concat(Ts, "-clock-wrapper"), Vs = ".".concat(Ts, "-current"), Ys = "".concat(Ts, "-current-inline"), Ws = "".concat(Ts, "-hand-pointer"), zs = "".concat(Ts, "-hour"), Us = "".concat(Ts, "-hour-mode"), qs = "".concat(Ts, "-icon-down"), Ks = "".concat(Ts, "-icon-inline-hour"), $s = "".concat(Ts, "-icon-inline-minute"), Xs = "".concat(Ts, "-icon-up"), Gs = "".concat(Ts, "-inline-hour-icons"), Qs = "".concat(Ts, "-middle-dot"), Zs = "".concat(Ts, "-minute"), Js = "".concat(Ts, "-modal"), tu = "".concat(Ts, "-pm"), eu = "".concat(Ts, "-tips-element"), nu = "".concat(Ts, "-time-tips-hours"), ru = "".concat(Ts, "-tips-inner-element"), ou = "".concat(Ts, "-time-tips-inner"), iu = "".concat(Ts, "-time-tips-minutes"), au = "".concat(Ts, "-transform"), cu = "".concat(Ts, "-wrapper"), su = "".concat(Ts, "-input"), uu = { appendValidationInfo: true, bodyID: "", cancelLabel: "Cancel", clearLabel: "Clear", closeModalOnBackdropClick: true, closeModalOnMinutesClick: false, defaultTime: "", disabled: false, focusInputAfterApprove: false, footerID: "", format12: true, headID: "", increment: false, invalidLabel: "Invalid Time Format", maxHour: "", minHour: "", maxTime: "", minTime: "", modalID: "", okLabel: "Ok", overflowHidden: true, pickerID: "", readOnly: false, showClearBtn: true, switchHoursToMinutesOnClick: true, iconClass: "far fa-clock fa-sm timepicker-icon", withIcon: true, pmLabel: "PM", amLabel: "AM" }, lu = { appendValidationInfo: "boolean", bodyID: "string", cancelLabel: "string", clearLabel: "string", closeModalOnBackdropClick: "boolean", closeModalOnMinutesClick: "boolean", disabled: "boolean", footerID: "string", format12: "boolean", headID: "string", increment: "boolean", invalidLabel: "string", maxHour: "(string|number)", minHour: "(string|number)", modalID: "string", okLabel: "string", overflowHidden: "boolean", pickerID: "string", readOnly: "boolean", showClearBtn: "boolean", switchHoursToMinutesOnClick: "boolean", defaultTime: "(string|date|number)", iconClass: "string", withIcon: "boolean", pmLabel: "string", amLabel: "string" }, fu = function() {
    function n3(t4) {
      var C2 = this, e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      !function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, n3), js(this, "_toggleBackgroundColorCircle", function(t5) {
        C2._modal.querySelector(".".concat(t5, ".").concat(Ds)) !== null ? mc.addStyle(C2._circle, { backgroundColor: "#1976d2" }) : mc.addStyle(C2._circle, { backgroundColor: "transparent" });
      }), js(this, "_toggleClassActive", function(t5, e5, n4) {
        var r4 = e5.textContent, o3 = Cs(t5).find(function(t6) {
          return Number(t6) === Number(r4);
        });
        return n4.forEach(function(t6) {
          mc.hasClass(t6, "disabled") || (t6.textContent === o3 ? mc.addClass(t6, Ds) : mc.removeClass(t6, Ds));
        });
      }), js(this, "_makeMinutesDegrees", function(t5, e5) {
        var n4 = C2._options.increment;
        return t5 = t5 < 0 ? (e5 = Math.round(360 + t5 / 6) % 60, 360 + 6 * Math.round(t5 / 6)) : (e5 = Math.round(t5 / 6) % 60, 6 * Math.round(t5 / 6)), n4 && (t5 = 30 * Math.round(t5 / 30), (e5 = 6 * Math.round(t5 / 6) / 6) === 60 && (e5 = "00")), { degrees: t5 = 360 <= t5 ? 0 : t5, minute: e5, addDegrees: n4 ? 30 : 6 };
      }), js(this, "_makeHourDegrees", function(t5, e5, n4) {
        var r4 = C2._options, o3 = r4.maxHour, r4 = r4.minHour;
        if (t5 && (mc.hasClass(t5, Hs) || mc.hasClass(t5, ou) || mc.hasClass(t5, ru) ? e5 < 0 ? (n4 = Math.round(360 + e5 / 30) % 24, e5 = 360 + e5) : (n4 = Math.round(e5 / 30) + 12) === 12 && (n4 = "00") : e5 < 0 ? (n4 = Math.round(360 + e5 / 30) % 12, e5 = 360 + e5) : ((n4 = Math.round(e5 / 30) % 12) === 0 || 12 < n4) && (n4 = 12), 360 <= e5 && (e5 = 0), !(o3 !== "" && n4 > Number(o3) || r4 !== "" && n4 < Number(r4))))
          return { degrees: e5, hour: n4, addDegrees: 30 };
      }), js(this, "_makeInnerHoursDegrees", function(t5, e5) {
        return t5 < 0 ? (e5 = Math.round(360 + t5 / 30) % 24, t5 = 360 + t5) : (e5 = Math.round(t5 / 30) + 12) === 12 && (e5 = "00"), { degrees: t5, hour: e5, addDegrees: 30 };
      }), js(this, "_getAppendClock", function() {
        var a2 = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : [], t5 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : ".".concat(Bs), c2 = 2 < arguments.length ? arguments[2] : void 0, e5 = C2._options, s2 = e5.maxHour, u2 = e5.minHour, l2 = e5.minTime, f2 = e5.maxTime, n4 = e5.inline, r4 = e5.format12, e5 = ks(bs(f2, false), 3), d2 = e5[0], h3 = e5[1], p3 = e5[2], e5 = ks(bs(l2, false), 3), v2 = e5[0], m2 = e5[1], g2 = e5[2];
        n4 || r4 && C2._isInvalidTimeFormat && !mc.hasClass(C2._AM, "active") && mc.addClass(C2._PM, "active");
        var y2, b2, _2, w2 = bc.findOne(".".concat(Us, ".").concat(Ds)), O2 = bc.findOne(t5), k2 = 360 / a2.length;
        O2 !== null && (y2 = (O2.offsetWidth - 32) / 2, b2 = (O2.offsetHeight - 32) / 2, _2 = y2 - 4, Cs(a2).forEach(function(t6, e6) {
          var n5 = e6 * k2 * (Math.PI / 180), r5 = Fa("span"), o3 = Fa("span");
          o3.innerHTML = t6, mc.addClass(r5, c2);
          var i3 = r5.offsetWidth, e6 = r5.offsetHeight;
          return mc.addStyle(r5, { left: "".concat(y2 + Math.sin(n5) * _2 - i3, "px"), bottom: "".concat(b2 + Math.cos(n5) * _2 - e6, "px") }), a2.includes("05") && mc.addClass(r5, "".concat(iu)), a2.includes("13") ? o3.classList.add(ru) : o3.classList.add(eu), mc.hasClass(r5, "".concat(iu)) ? mc.hasClass(r5, "".concat(iu)) && (f2 !== "" && Number(t6) > Number(h3) && Number(C2._hour.textContent) >= Number(d2) && mc.addClass(r5, "disabled"), l2 !== "" && Number(t6) < Number(m2) && Number(C2._hour.textContent) <= Number(v2) && mc.addClass(r5, "disabled"), f2 !== "" && p3 !== void 0 && (p3 === "PM" && w2.textContent === "PM" ? Number(t6) > Number(h3) && Number(C2._hour.textContent) >= Number(d2) && mc.addClass(r5, "disabled") : p3 === "PM" && w2.textContent === "AM" && mc.removeClass(r5, "disabled"), (p3 === "AM" && w2.textContent === "PM" || p3 === "AM" && w2.textContent === "AM" && Number(C2._hour.textContent) >= Number(d2) && Number(t6) > Number(h3)) && mc.addClass(r5, "disabled")), l2 !== "" && g2 !== void 0 && (g2 === "PM" && w2.textContent === "PM" ? (Number(t6) < Number(m2) && Number(C2._hour.textContent) === Number(v2) || Number(C2._hour.textContent) < Number(v2)) && mc.addClass(r5, "disabled") : g2 === "PM" && w2.textContent === "AM" && mc.addClass(r5, "disabled"), g2 === "AM" && w2.textContent === "PM" ? mc.removeClass(r5, "disabled") : g2 === "AM" && w2.textContent === "AM" && (Number(C2._hour.textContent) === Number(v2) && Number(t6) < Number(m2) || Number(C2._hour.textContent) < Number(v2)) && mc.addClass(r5, "disabled"))) : (s2 !== "" && Number(t6) > Number(s2) && mc.addClass(r5, "disabled"), u2 !== "" && Number(t6) < Number(u2) && mc.addClass(r5, "disabled"), f2 !== "" && (p3 !== void 0 ? (p3 === "PM" && w2.textContent === "PM" && (C2._isAmEnabled = false, C2._isPmEnabled = true, Number(t6) > Number(d2) && mc.addClass(r5, "disabled")), p3 === "AM" && w2.textContent === "PM" ? (C2._isAmEnabled = false, C2._isPmEnabled = true, mc.addClass(r5, "disabled")) : p3 === "AM" && w2.textContent === "AM" && (C2._isAmEnabled = true, C2._isPmEnabled = false, Number(t6) > Number(d2) && mc.addClass(r5, "disabled"))) : Number(t6) > Number(d2) && mc.addClass(r5, "disabled")), l2 !== "" && Number(t6) < Number(v2) && mc.addClass(r5, "disabled"), l2 !== "" && g2 !== void 0 && (g2 === "PM" && w2.textContent === "PM" ? (C2._isAmEnabled = false, C2._isPmEnabled = true, Number(t6) < Number(v2) && mc.addClass(r5, "disabled")) : g2 === "PM" && w2.textContent === "AM" && (C2._isAmEnabled = true, C2._isPmEnabled = false, mc.addClass(r5, "disabled")), g2 === "AM" && w2.textContent === "PM" ? (C2._isAmEnabled = false, C2._isPmEnabled = true, mc.removeClass(r5, "disabled")) : g2 === "AM" && w2.textContent === "AM" && (C2._isAmEnabled = true, C2._isPmEnabled = false, Number(t6) < Number(v2) && mc.addClass(r5, "disabled")))), r5.appendChild(o3), O2.appendChild(r5);
        }));
      }), this._element = t4, this._element && Ua.setData(t4, As, this), this._document = document, this._options = this._getConfig(e4), this._currentTime = null, this._toggleButtonId = Na("timepicker-toggle-"), this.hoursArray = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], this.innerHours = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], this.minutesArray = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], this.input = bc.findOne("input", this._element), this.dataWithIcon = t4.dataset.withIcon, this.dataToggle = t4.dataset.toggle, this.customIcon = bc.findOne(".timepicker-toggle-button", this._element), this._checkToggleButton(), this.inputFormatShow = bc.findOne("[data-mdb-timepicker-format24]", this._element), this.inputFormat = this.inputFormatShow === null ? "" : Object.values(this.inputFormatShow.dataset)[0], this.elementToggle = bc.findOne("[data-mdb-toggle]", this._element), this.toggleElement = Object.values(t4.querySelector("[data-mdb-toggle]").dataset)[0], this._hour = null, this._minutes = null, this._AM = null, this._PM = null, this._wrapper = null, this._modal = null, this._hand = null, this._circle = null, this._focusTrap = null, this._popper = null, this._interval = null, this._inputValue = this._options.defaultTime !== "" ? this._options.defaultTime : this.input.value, this._options.format12 && (this._currentTime = function(t5) {
        var e5, n4, r4;
        if (t5 !== "")
          return ys(t5) ? (e5 = t5.getHours(), (e5 %= 12) === 0 && (r4 = "AM"), e5 = e5 || 12, r4 === void 0 && (r4 = 12 <= e5 ? "PM" : "AM"), n4 = (n4 = t5.getMinutes()) < 10 ? "0".concat(n4) : n4) : (e5 = (t5 = ps(bs(t5, false), 3))[0], n4 = t5[1], r4 = t5[2], (e5 %= 12) === 0 && (r4 = "AM"), e5 = e5 || 12, r4 === void 0 && (r4 = 12 <= e5 ? "PM" : "AM")), { hours: e5, minutes: n4, amOrPm: r4 };
      }(this._inputValue)), this._options.readOnly && this.input.setAttribute("readonly", true), this.init(), this._isHours = true, this._isMinutes = false, this._isInvalidTimeFormat = false, this._isMouseMove = false, this._isInner = false, this._isAmEnabled = false, this._isPmEnabled = false, this._objWithDataOnChange = { degrees: null };
    }
    var t3, e3, r3;
    return t3 = n3, r3 = [{ key: "NAME", get: function() {
      return Ts;
    } }, { key: "getInstance", value: function(t4) {
      return Ua.getData(t4, As);
    } }, { key: "getOrCreateInstance", value: function(t4) {
      var e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return this.getInstance(t4) || new this(t4, _s(e4) === "object" ? e4 : null);
    } }], (e3 = [{ key: "init", value: function() {
      var t4, e4, n4, r4;
      mc.addClass(this.input, su), this._currentTime !== void 0 ? (t4 = (e4 = this._currentTime).hours, n4 = e4.minutes, r4 = e4.amOrPm, e4 = Number(t4) < 10 ? 0 : "", n4 = "".concat(e4).concat(Number(t4), ":").concat(n4), r4 = r4, this.input.value = "".concat(n4, " ").concat(r4)) : this.input.value = r4 = n4 = e4 = "", 0 < this.input.value.length && this.input.value !== "" && mc.addClass(this.input, "active"), this._options === null && this._element === null || (this._handleOpen(), this._listenToToggleKeydown());
    } }, { key: "dispose", value: function() {
      this._removeModal(), this._element !== null && Ua.removeData(this._element, As), this._element = null, this._options = null, this.input = null, this._focusTrap = null, fc.off(this._document, "click", "[data-mdb-toggle='".concat(this.toggleElement, "']")), fc.off(this._element, "keydown", "[data-mdb-toggle='".concat(this.toggleElement, "']"));
    } }, { key: "_checkToggleButton", value: function() {
      this.customIcon === null && (this.dataWithIcon !== void 0 && (this._options.withIcon = null, this.dataWithIcon === "true" && this._appendToggleButton(this._options)), this._options.withIcon && this._appendToggleButton(this._options));
    } }, { key: "_appendToggleButton", value: function() {
      var t4 = function(t5, e4) {
        t5 = t5.iconClass;
        return '\n  <button id="'.concat(e4, '" tabindex="0" type="button" class="timepicker-toggle-button" data-mdb-toggle="timepicker"  >\n    <i class="').concat(t5, '"></i>\n  </button>\n');
      }(this._options, this._toggleButtonId);
      this.input.insertAdjacentHTML("afterend", t4);
    } }, { key: "_getDomElements", value: function() {
      this._hour = bc.findOne(".".concat(zs)), this._minutes = bc.findOne(".".concat(Zs)), this._AM = bc.findOne(".".concat(Ps)), this._PM = bc.findOne(".".concat(tu)), this._wrapper = bc.findOne(".".concat(cu)), this._modal = bc.findOne(".".concat(Js)), this._hand = bc.findOne(".".concat(Ws)), this._circle = bc.findOne(".".concat(Ns)), this._clock = bc.findOne(".".concat(Bs)), this._clockInner = bc.findOne(".".concat(Hs));
    } }, { key: "_handlerMaxMinHoursOptions", value: function(t4, e4, n4, r4, o3, i3) {
      var a2 = n4 !== "" ? 30 * n4 : "", c2 = r4 !== "" ? 30 * r4 : "";
      if (n4 !== "" && r4 !== "") {
        if ((t4 = t4 <= 0 ? 360 + t4 : t4) <= a2 && c2 <= t4)
          return e4();
      } else if (r4 !== "") {
        if (t4 <= 0 && (t4 = 360 + t4), (c2 = 12 < Number(r4) ? 30 * r4 - c2 : c2) <= t4 && i3 === void 0)
          return e4();
        if (i3 !== void 0) {
          if (i3 === "PM" && this._isAmEnabled)
            return;
          if (i3 === "PM" && this._isPmEnabled && c2 <= t4)
            return e4();
          if (i3 === "AM" && this._isPmEnabled)
            return e4();
          if (i3 === "AM" && this._isAmEnabled && c2 <= t4)
            return e4();
        }
      } else {
        if (n4 === "")
          return e4();
        if ((t4 = t4 <= 0 ? 360 + t4 : t4) <= a2 && o3 === void 0)
          return e4();
        if (o3 !== void 0) {
          if (o3 === "AM" && this._isPmEnabled)
            return;
          if (o3 === "AM" && this._isAmEnabled && t4 <= a2)
            return e4();
          if (o3 === "PM" && this._isPmEnabled) {
            if (t4 <= a2)
              return e4();
          } else if (o3 === "PM" && this._isAmEnabled)
            return e4();
        }
      }
      return e4;
    } }, { key: "_handleKeyboard", value: function() {
      var b2 = this;
      fc.on(this._document, "keydown", "", function(t4) {
        var e4 = b2._options, n4 = e4.maxHour, r4 = e4.minHour, o3 = e4.increment, i3 = bc.findOne(".".concat(iu)) !== null, a2 = bc.findOne(".".concat(ou)) !== null, c2 = Number(b2._hand.style.transform.replace(/[^\d-]/g, "")), s2 = bc.find(".".concat(iu), b2._modal), u2 = bc.find(".".concat(nu), b2._modal), l2 = bc.find(".".concat(ou), b2._modal), f2 = n4 !== "" ? Number(n4) : "", d2 = r4 !== "" ? Number(r4) : "", h3 = b2._makeHourDegrees(t4.target, c2, void 0).hour, p3 = b2._makeHourDegrees(t4.target, c2, void 0), v2 = p3.degrees, m2 = p3.addDegrees, g2 = b2._makeMinutesDegrees(c2, void 0), y2 = g2.minute, e4 = g2.degrees, p3 = b2._makeMinutesDegrees(c2, void 0).addDegrees, g2 = b2._makeInnerHoursDegrees(c2, void 0).hour;
        t4.keyCode === 27 && (c2 = bc.findOne(".".concat(Ms), b2._modal), fc.trigger(c2, "click")), i3 ? (t4.keyCode === 38 && (mc.addStyle(b2._hand, { transform: "rotateZ(".concat(e4 += p3, "deg)") }), y2 += 1, o3 && (y2 += 4) === "0014" && (y2 = 5), b2._minutes.textContent = b2._setHourOrMinute(59 < y2 ? 0 : y2), b2._toggleClassActive(b2.minutesArray, b2._minutes, s2), b2._toggleBackgroundColorCircle("".concat(iu))), t4.keyCode === 40 && (mc.addStyle(b2._hand, { transform: "rotateZ(".concat(e4 -= p3, "deg)") }), o3 ? y2 -= 5 : --y2, y2 === -1 ? y2 = 59 : y2 === -5 && (y2 = 55), b2._minutes.textContent = b2._setHourOrMinute(y2), b2._toggleClassActive(b2.minutesArray, b2._minutes, s2), b2._toggleBackgroundColorCircle("".concat(iu)))) : (a2 && (t4.keyCode === 39 && (b2._isInner = false, mc.addStyle(b2._hand, { height: "calc(40% + 1px)" }), b2._hour.textContent = b2._setHourOrMinute(12 < h3 ? 1 : h3), b2._toggleClassActive(b2.hoursArray, b2._hour, u2), b2._toggleClassActive(b2.innerHours, b2._hour, l2)), t4.keyCode === 37 && (b2._isInner = true, mc.addStyle(b2._hand, { height: "21.5%" }), b2._hour.textContent = b2._setHourOrMinute(24 <= g2 || g2 === "00" ? 0 : g2), b2._toggleClassActive(b2.innerHours, b2._hour, l2), b2._toggleClassActive(b2.hoursArray, b2._hour - 1, u2))), t4.keyCode === 38 && (b2._handlerMaxMinHoursOptions(v2 + 30, function() {
          return mc.addStyle(b2._hand, { transform: "rotateZ(".concat(v2 + m2, "deg)") });
        }, n4, r4), b2._isInner ? ((g2 += 1) === 24 ? g2 = 0 : g2 !== 25 && g2 !== "001" || (g2 = 13), b2._hour.textContent = b2._setHourOrMinute(g2), b2._toggleClassActive(b2.innerHours, b2._hour, l2)) : (h3 += 1, n4 !== "" && r4 !== "" ? n4 < h3 ? h3 = f2 : h3 < r4 && (h3 = d2) : n4 !== "" && r4 === "" ? n4 < h3 && (h3 = f2) : n4 === "" && r4 !== "" && 12 <= h3 && (h3 = 12), b2._hour.textContent = b2._setHourOrMinute(12 < h3 ? 1 : h3), b2._toggleClassActive(b2.hoursArray, b2._hour, u2))), t4.keyCode === 40 && (b2._handlerMaxMinHoursOptions(v2 - 30, function() {
          return mc.addStyle(b2._hand, { transform: "rotateZ(".concat(v2 - m2, "deg)") });
        }, n4, r4), b2._isInner ? (--g2 === 12 ? g2 = 0 : g2 === -1 && (g2 = 23), b2._hour.textContent = b2._setHourOrMinute(g2), b2._toggleClassActive(b2.innerHours, b2._hour, l2)) : (--h3, n4 !== "" && r4 !== "" ? f2 < h3 ? h3 = f2 : h3 < d2 && (h3 = d2) : n4 === "" && r4 !== "" ? h3 <= d2 && (h3 = d2) : n4 === "" || r4 !== "" || h3 <= 1 && (h3 = 1), b2._hour.textContent = b2._setHourOrMinute(h3 === 0 ? 12 : h3), b2._toggleClassActive(b2.hoursArray, b2._hour, u2))));
      });
    } }, { key: "_setActiveClassToTipsOnOpen", value: function(t4) {
      var e4 = this;
      if (!this._isInvalidTimeFormat) {
        for (var n4 = arguments.length, r4 = new Array(1 < n4 ? n4 - 1 : 0), o3 = 1; o3 < n4; o3++)
          r4[o3 - 1] = arguments[o3];
        [].concat(r4).filter(function(t5) {
          return t5 === "PM" ? mc.addClass(e4._PM, Ds) : t5 === "AM" ? mc.addClass(e4._AM, Ds) : (mc.removeClass(e4._AM, Ds), mc.removeClass(e4._PM, Ds)), t5;
        });
        var i3 = bc.find(".".concat(nu), this._modal);
        this._addActiveClassToTip(i3, t4);
      }
    } }, { key: "_setTipsAndTimesDependOnInputValue", value: function(t4, e4) {
      var n4 = this._options, r4 = n4.inline, n4 = n4.format12;
      this._isInvalidTimeFormat ? (this._hour.textContent = "12", this._minutes.textContent = "00", r4 || mc.addStyle(this._hand, { transform: "rotateZ(0deg)" }), n4 && mc.addClass(this._PM, Ds)) : (n4 = 12 < t4 ? 30 * t4 - 360 : 30 * t4, this._hour.textContent = t4, this._minutes.textContent = e4, r4 || (mc.addStyle(this._hand, { transform: "rotateZ(".concat(n4, "deg)") }), mc.addStyle(this._circle, { backgroundColor: "#1976d2" }), (12 < Number(t4) || t4 === "00") && mc.addStyle(this._hand, { height: "21.5%" })));
    } }, { key: "_listenToToggleKeydown", value: function() {
      var e4 = this;
      fc.on(this._element, "keydown", "[data-mdb-toggle='".concat(this.toggleElement, "']"), function(t4) {
        t4.keyCode === 13 && (t4.preventDefault(), fc.trigger(e4.elementToggle, "click"));
      });
    } }, { key: "_handleOpen", value: function() {
      var b2 = this;
      uc(this._element, "click", "[data-mdb-toggle='".concat(this.toggleElement, "']"), function(y2) {
        var t4;
        b2._options !== null && (t4 = mc.getDataAttribute(b2.input, "toggle") !== null ? 200 : 0, setTimeout(function() {
          mc.addStyle(b2.elementToggle, { pointerEvents: "none" }), b2.elementToggle.blur();
          var t5, e4, n4, r4, o3, i3, a2, c2 = bs(b2.input)[0] === "" ? ["12", "00", "PM"] : bs(b2.input), s2 = b2._options, u2 = s2.modalID, l2 = s2.inline, f2 = s2.format12, d2 = s2.overflowHidden, h3 = ks(c2, 3), p3 = h3[0], v2 = h3[1], m2 = h3[2], g2 = Fa("div");
          (12 < Number(p3) || p3 === "00") && (b2._isInner = true), b2.input.blur(), y2.target.blur(), g2.innerHTML = (t5 = b2._options, e4 = t5.okLabel, n4 = t5.cancelLabel, r4 = t5.headID, o3 = t5.footerID, i3 = t5.bodyID, a2 = t5.pickerID, s2 = t5.clearLabel, c2 = t5.showClearBtn, h3 = t5.amLabel, t5 = t5.pmLabel, "<div id='".concat(a2, `' class='timepicker-wrapper h-full flex items-center justify-center flex-col fixed'>
      <div class="flex items-center justify-center flex-col timepicker-container">
        <div class="flex flex-col timepicker-elements justify-around">
        <div id='`).concat(r4, `' class='timepicker-head flex flex-row items-center justify-center'>
        <div class='timepicker-head-content flex w-100 justify-evenly'>
            <div class="timepicker-current-wrapper">
              <span class="relative h-100">
                <button type='button' class='timepicker-current timepicker-hour active ripple' tabindex="0">21</button>
              </span>
              <button type='button' class='timepicker-dot' disabled>:</button>
            <span class="relative h-100">
              <button type='button' class='timepicker-current timepicker-minute ripple' tabindex="0">21</button>
            </span>
            </div>
            <div class="flex flex-col justify-center timepicker-mode-wrapper">
              <button type='button' class="timepicker-hour-mode timepicker-am ripple" tabindex="0">`).concat(h3, '</button>\n              <button class="timepicker-hour-mode timepicker-pm ripple" tabindex="0">').concat(t5, "</button>\n            </div>\n        </div>\n      </div>\n      <div id='").concat(i3, "' class='timepicker-clock-wrapper flex justify-center flex-col items-center'>\n        <div class='timepicker-clock'>\n          <span class='timepicker-middle-dot absolute'></span>\n          <div class='timepicker-hand-pointer absolute'>\n            <div class='timepicker-circle absolute'></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id='").concat(o3, `' class='timepicker-footer'>
      <div class="w-full flex justify-between">
        `).concat(c2 ? `<button type='button' class='timepicker-button timepicker-clear ripple' tabindex="0">`.concat(s2, "</button>") : "", `
        <button type='button' class='timepicker-button timepicker-cancel ripple' tabindex="0">`).concat(n4, `</button>
        <button type='button' class='timepicker-button timepicker-submit ripple' tabindex="0">`).concat(e4, "</button>\n      </div>\n    </div>\n  </div>\n</div>")), mc.addClass(g2, Js), g2.setAttribute("role", "dialog"), g2.setAttribute("tabIndex", "-1"), g2.setAttribute("id", u2), l2 && (b2._popper = Ie(b2.input, g2, { placement: "bottom-start" })), b2._document.body.appendChild(g2), b2._getDomElements(), b2._toggleBackdropAnimation(), b2._setActiveClassToTipsOnOpen(p3, v2, m2), b2._appendTimes(), b2._setActiveClassToTipsOnOpen(p3, v2, m2), b2._setTipsAndTimesDependOnInputValue(p3, v2), b2.input.value === "" && (v2 = bc.find(".".concat(nu), b2._modal), f2 && mc.addClass(b2._PM, Ds), b2._hour.textContent = "12", b2._minutes.textContent = "00", b2._addActiveClassToTip(v2, Number(b2._hour.textContent))), b2._handleSwitchTimeMode(), b2._handleOkButton(), b2._handleClose(), l2 ? (b2._handleHoverInlineBtn(), b2._handleDocumentClickInline(), b2._handleInlineClicks()) : (b2._handleSwitchHourMinute(), b2._handleClockClick(), b2._handleKeyboard(), mc.addStyle(b2._hour, { pointerEvents: "none" }), mc.addStyle(b2._minutes, { pointerEvents: "" })), d2 && (d2 = window.innerWidth > document.documentElement.clientWidth, mc.addStyle(b2._document.body, { overflow: "hidden" }), !gs() && d2 && mc.addStyle(b2._document.body, { paddingRight: "15px" })), b2._focusTrap = new Nc(b2._wrapper, { event: "keydown", condition: function(t6) {
            return t6.key === "Tab";
          } }), b2._focusTrap.trap();
        }, t4));
      });
    } }, { key: "_handleInlineClicks", value: function() {
      var d2 = this;
      uc(this._modal, "click mousedown mouseup touchstart touchend contextmenu", ".".concat(Xs, ", .").concat(qs), function(t4) {
        function e4(t5) {
          t5 = f2(t5), d2._hour.textContent = d2._setHourOrMinute(t5);
        }
        function n4(t5) {
          t5 = l2(t5), d2._minutes.textContent = d2._setHourOrMinute(t5);
        }
        function r4() {
          e4(s2 += 1);
        }
        function o3() {
          n4(u2 += 1);
        }
        function i3() {
          e4(--s2);
        }
        function a2() {
          n4(--u2);
        }
        var c2 = t4.target, t4 = t4.type, s2 = Number(d2._hour.textContent), u2 = Number(d2._minutes.textContent), l2 = function(t5) {
          return 59 < t5 ? t5 = 0 : t5 < 0 && (t5 = 59), t5;
        }, f2 = function(t5) {
          return 12 < t5 ? t5 = 1 : t5 < 1 && (t5 = 12), t5 = 12 < t5 ? 1 : t5;
        };
        mc.hasClass(c2, Xs) ? mc.hasClass(c2.parentNode, Gs) ? t4 === "mousedown" || t4 === "touchstart" ? (clearInterval(d2._interval), d2._interval = setInterval(r4, 100)) : t4 === "mouseup" || t4 === "touchend" || t4 === "contextmenu" ? clearInterval(d2._interval) : r4() : t4 === "mousedown" || t4 === "touchstart" ? (clearInterval(d2._interval), d2._interval = setInterval(o3, 100)) : t4 === "mouseup" || t4 === "touchend" || t4 === "contextmenu" ? clearInterval(d2._interval) : o3() : mc.hasClass(c2, qs) && (mc.hasClass(c2.parentNode, Gs) ? t4 === "mousedown" || t4 === "touchstart" ? (clearInterval(d2._interval), d2._interval = setInterval(i3, 100)) : t4 === "mouseup" || t4 === "touchend" ? clearInterval(d2._interval) : i3() : t4 === "mousedown" || t4 === "touchstart" ? (clearInterval(d2._interval), d2._interval = setInterval(a2, 100)) : t4 === "mouseup" || t4 === "touchend" ? clearInterval(d2._interval) : a2());
      });
    } }, { key: "_handleClose", value: function() {
      var a2 = this;
      fc.on(this._modal, "click", ".".concat(cu, ", .").concat(Ms, ", .").concat(Is), function(t4) {
        function e4() {
          mc.addStyle(a2.elementToggle, { pointerEvents: "auto" }), a2._toggleBackdropAnimation(true), a2._removeModal(), a2._focusTrap.disable(), a2._focusTrap = null, a2.elementToggle ? a2.elementToggle.focus() : a2.input && a2.input.focus();
        }
        var n4, r4, o3 = t4.target, i3 = a2._options.closeModalOnBackdropClick;
        mc.hasClass(o3, Is) ? (a2.input.value = "", mc.removeClass(a2.input, "active"), n4 = (r4 = ks(bs(a2.input)[0] === "" ? ["12", "00", "PM"] : bs(a2.input), 3))[0], t4 = r4[1], r4 = r4[2], a2._setTipsAndTimesDependOnInputValue("12", "00"), a2._setActiveClassToTipsOnOpen(n4, t4, r4), a2._hour.click()) : (mc.hasClass(o3, Ms) || mc.hasClass(o3, cu) && i3) && e4();
      });
    } }, { key: "showValueInput", value: function() {
      return this.input.value;
    } }, { key: "_handleOkButton", value: function() {
      var o3 = this;
      uc(this._modal, "click", ".".concat(Ls), function() {
        var t4 = o3._options, e4 = t4.readOnly, n4 = t4.focusInputAfterApprove, r4 = o3._document.querySelector(".".concat(Us, ".").concat(Ds)), t4 = "".concat(o3._hour.textContent, ":").concat(o3._minutes.textContent);
        mc.addClass(o3.input, "active"), mc.addStyle(o3.elementToggle, { pointerEvents: "auto" }), o3._isInvalidTimeFormat && mc.removeClass(o3.input, "is-invalid"), !e4 && n4 && o3.input.focus(), mc.addStyle(o3.elementToggle, { pointerEvents: "auto" }), o3.input.value = r4 === null ? "".concat(t4, " PM") : "".concat(t4, " ").concat(r4.textContent), o3._toggleBackdropAnimation(true), o3._removeModal(), fc.trigger(o3.input, "input.mdb.timepicker");
      });
    } }, { key: "_handleHoverInlineBtn", value: function() {
      var o3 = this;
      uc(this._modal, "mouseover mouseleave", ".".concat(Ys), function(t4) {
        var e4 = t4.type, n4 = t4.target, r4 = bc.find(".".concat(Ks), o3._modal), t4 = bc.find(".".concat($s), o3._modal);
        e4 === "mouseover" ? mc.hasClass(n4, zs) ? r4.forEach(function(t5) {
          return mc.addClass(t5, Ds);
        }) : t4.forEach(function(t5) {
          return mc.addClass(t5, Ds);
        }) : mc.hasClass(n4, zs) ? r4.forEach(function(t5) {
          return mc.removeClass(t5, Ds);
        }) : t4.forEach(function(t5) {
          return mc.removeClass(t5, Ds);
        });
      });
    } }, { key: "_handleDocumentClickInline", value: function() {
      var e4 = this;
      fc.on(document, "click", function(t4) {
        t4 = t4.target;
        !e4._modal || e4._modal.contains(t4) || mc.hasClass(t4, "timepicker-icon") || (clearInterval(e4._interval), mc.addStyle(e4.elementToggle, { pointerEvents: "auto" }), e4._removeModal());
      });
    } }, { key: "_handleSwitchHourMinute", value: function() {
      var t4, e4, c2 = this;
      t4 = "click", e4 = Vs, fc.on(document, t4, e4, function(t5) {
        t5 = t5.target;
        mc.hasClass(t5, "active") || (document.querySelectorAll(e4).forEach(function(t6) {
          mc.hasClass(t6, "active") && mc.removeClass(t6, "active");
        }), mc.addClass(t5, "active"));
      }), fc.on(this._modal, "click", Vs, function() {
        function e5(t6, e6) {
          r4.forEach(function(t7) {
            return t7.remove();
          }), n4.forEach(function(t7) {
            return t7.remove();
          }), mc.addClass(c2._hand, au), setTimeout(function() {
            mc.removeClass(c2._hand, au);
          }, 401), c2._getAppendClock(t6, ".".concat(Bs), e6), setTimeout(function() {
            var t7, e7;
            t7 = bc.find(".".concat(nu), c2._modal), e7 = bc.find(".".concat(iu), c2._modal), c2._addActiveClassToTip(t7, i3), c2._addActiveClassToTip(e7, a2);
          }, 401);
        }
        var t5 = bc.find(Vs, c2._modal), n4 = bc.find(".".concat(iu), c2._modal), r4 = bc.find(".".concat(nu), c2._modal), o3 = bc.find(".".concat(ou), c2._modal), i3 = Number(c2._hour.textContent), a2 = Number(c2._minutes.textContent);
        t5.forEach(function(t6) {
          mc.hasClass(t6, Ds) && (mc.hasClass(t6, Zs) ? (mc.addClass(c2._hand, au), mc.addStyle(c2._hand, { transform: "rotateZ(".concat(6 * c2._minutes.textContent, "deg)"), height: "calc(40% + 1px)" }), 0 < o3.length && o3.forEach(function(t7) {
            return t7.remove();
          }), e5(c2.minutesArray, "".concat(iu)), c2._hour.style.pointerEvents = "", c2._minutes.style.pointerEvents = "none") : mc.hasClass(t6, zs) && (mc.addStyle(c2._hand, { transform: "rotateZ(".concat(30 * c2._hour.textContent, "deg)") }), 12 < Number(c2._hour.textContent) ? (mc.addStyle(c2._hand, { transform: "rotateZ(".concat(30 * c2._hour.textContent - 360, "deg)"), height: "21.5%" }), 12 < Number(c2._hour.textContent) && mc.addStyle(c2._hand, { height: "21.5%" })) : mc.addStyle(c2._hand, { height: "calc(40% + 1px)" }), 0 < o3.length && o3.forEach(function(t7) {
            return t7.remove();
          }), e5(c2.hoursArray, "".concat(nu)), mc.addStyle(c2._hour, { pointerEvents: "none" }), mc.addStyle(c2._minutes, { pointerEvents: "" })));
        });
      });
    } }, { key: "_handleSwitchTimeMode", value: function() {
      fc.on(document, "click", ".".concat(Us), function(t4) {
        t4 = t4.target;
        mc.hasClass(t4, Ds) || (bc.find(".".concat(Us)).forEach(function(t5) {
          mc.hasClass(t5, Ds) && mc.removeClass(t5, Ds);
        }), mc.addClass(t4, Ds));
      });
    } }, { key: "_handleClockClick", value: function() {
      var g2 = this, y2 = bc.findOne(".".concat(Fs));
      uc(document, "mousedown mouseup mousemove mouseleave mouseover touchstart touchmove touchend", "", function(t4) {
        gs() || t4.preventDefault();
        var e4 = g2._options, n4 = e4.maxHour, r4 = e4.minHour, o3 = t4.type, i3 = t4.target, a2 = g2._options, c2 = a2.closeModalOnMinutesClick, s2 = a2.switchHoursToMinutesOnClick, u2 = bc.findOne(".".concat(iu), g2._modal) !== null, l2 = bc.findOne(".".concat(nu), g2._modal) !== null, f2 = bc.findOne(".".concat(ou), g2._modal) !== null, d2 = bc.find(".".concat(iu), g2._modal), e4 = ms(t4, y2), a2 = y2.offsetWidth / 2, e4 = Math.atan2(e4.y - a2, e4.x - a2);
        gs() && (h3 = ms(t4, y2, true), e4 = Math.atan2(h3.y - a2, h3.x - a2));
        var h3, p3 = null;
        if (o3 === "mousedown" || o3 === "mousemove" || o3 === "touchmove" || o3 === "touchstart" ? o3 !== "mousedown" && o3 !== "touchstart" && o3 !== "touchmove" || (mc.hasClass(i3, Fs) || mc.hasClass(i3, Bs) || mc.hasClass(i3, iu) || mc.hasClass(i3, Hs) || mc.hasClass(i3, ou) || mc.hasClass(i3, nu) || mc.hasClass(i3, Ns) || mc.hasClass(i3, Ws) || mc.hasClass(i3, Qs) || mc.hasClass(i3, eu) || mc.hasClass(i3, ru)) && (g2._isMouseMove = true, gs() && t4.touches && (h3 = t4.touches[0].clientX, a2 = t4.touches[0].clientY, p3 = document.elementFromPoint(h3, a2))) : o3 !== "mouseup" && o3 !== "touchend" || (g2._isMouseMove = false, (mc.hasClass(i3, Bs) || mc.hasClass(i3, Hs) || mc.hasClass(i3, ou) || mc.hasClass(i3, nu) || mc.hasClass(i3, Ns) || mc.hasClass(i3, Ws) || mc.hasClass(i3, Qs) || mc.hasClass(i3, eu) || mc.hasClass(i3, ru)) && (l2 || f2) && s2 && fc.trigger(g2._minutes, "click"), u2 && c2 && (v2 = bc.findOne(".".concat(Ls), g2._modal), fc.trigger(v2, "click"))), u2) {
          var v2 = Math.trunc(180 * e4 / Math.PI) + 90, u2 = g2._makeMinutesDegrees(v2, void 0), v2 = u2.degrees, u2 = u2.minute;
          if (g2._handlerMaxMinMinutesOptions(v2, u2) === void 0)
            return;
          v2 = g2._handlerMaxMinMinutesOptions(v2, u2), u2 = v2.degrees, v2 = v2.minute;
          if (g2._isMouseMove) {
            if (mc.addStyle(g2._hand, { transform: "rotateZ(".concat(u2, "deg)") }), v2 === void 0)
              return;
            g2._minutes.textContent = 10 <= v2 || v2 === "00" ? v2 : "0".concat(v2), g2._toggleClassActive(g2.minutesArray, g2._minutes, d2), g2._toggleBackgroundColorCircle("".concat(iu)), g2._objWithDataOnChange.degreesMinutes = u2, g2._objWithDataOnChange.minutes = v2;
          }
        }
        if (l2 || f2) {
          var m2 = Math.trunc(180 * e4 / Math.PI) + 90, m2 = 30 * Math.round(m2 / 30);
          if (mc.addStyle(g2._circle, { backgroundColor: "#1976d2" }), g2._makeHourDegrees(i3, m2, void 0) === void 0)
            return;
          g2._objWithDataOnChange.degreesHours = m2, g2._handlerMaxMinHoursOptions(m2, function() {
            if (gs() && m2) {
              var t5 = g2._makeHourDegrees(p3, m2, void 0), e5 = t5.degrees, t5 = t5.hour;
              return g2._handleMoveHand(p3, t5, e5);
            }
            t5 = g2._makeHourDegrees(i3, m2, void 0), e5 = t5.degrees, t5 = t5.hour;
            return g2._handleMoveHand(i3, t5, e5);
          }, n4, r4);
        }
        t4.stopPropagation();
      });
    } }, { key: "_handleMoveHand", value: function(t4, e4, n4) {
      var r4 = bc.find(".".concat(nu), this._modal), o3 = bc.find(".".concat(ou), this._modal);
      this._isMouseMove && (mc.hasClass(t4, Hs) || mc.hasClass(t4, ou) || mc.hasClass(t4, ru) ? mc.addStyle(this._hand, { height: "21.5%" }) : mc.addStyle(this._hand, { height: "calc(40% + 1px)" }), mc.addStyle(this._hand, { transform: "rotateZ(".concat(n4, "deg)") }), this._hour.textContent = 10 <= e4 || e4 === "00" ? e4 : "0".concat(e4), this._toggleClassActive(this.hoursArray, this._hour, r4), this._toggleClassActive(this.innerHours, this._hour, o3), this._objWithDataOnChange.hour = 10 <= e4 || e4 === "00" ? e4 : "0".concat(e4));
    } }, { key: "_handlerMaxMinMinutesOptions", value: function(t4, e4) {
      var n4 = this._options, r4 = n4.increment, o3 = n4.maxTime, i3 = n4.minTime, a2 = bs(o3, false)[1], c2 = bs(i3, false)[1], s2 = bs(o3, false)[0], u2 = bs(i3, false)[0], l2 = bs(o3, false)[2], n4 = bs(i3, false)[2], a2 = a2 !== "" ? 6 * a2 : "", c2 = c2 !== "" ? 6 * c2 : "";
      if (l2 === void 0 && n4 === void 0) {
        if (o3 !== "" && i3 !== "") {
          if (t4 <= a2 && c2 <= t4)
            return t4;
        } else if (i3 !== "" && Number(this._hour.textContent) <= Number(u2)) {
          if (t4 <= c2 - 6)
            return t4;
        } else if (o3 !== "" && Number(this._hour.textContent) >= Number(s2) && a2 + 6 <= t4)
          return t4;
      } else if (i3 !== "") {
        if (n4 === "PM" && this._isAmEnabled)
          return;
        if (n4 === "PM" && this._isPmEnabled) {
          if (Number(this._hour.textContent) < Number(u2))
            return;
          if (Number(this._hour.textContent) <= Number(u2) && t4 <= c2 - 6)
            return t4;
        } else if (n4 === "AM" && this._isAmEnabled) {
          if (Number(this._hour.textContent) < Number(u2))
            return;
          if (Number(this._hour.textContent) <= Number(u2) && t4 <= c2 - 6)
            return t4;
        }
      } else if (o3 !== "") {
        if (l2 === "AM" && this._isPmEnabled)
          return;
        if (l2 === "PM" && this._isPmEnabled) {
          if (Number(this._hour.textContent) >= Number(s2) && a2 + 6 <= t4)
            return t4;
        } else if (l2 === "AM" && this._isAmEnabled && Number(this._hour.textContent) >= Number(s2) && a2 + 6 <= t4)
          return t4;
      }
      return (t4 = r4 ? 30 * Math.round(t4 / 30) : t4) <= 0 ? t4 = 360 + t4 : 360 <= t4 && (t4 = 0), { degrees: t4, minute: e4 };
    } }, { key: "_removeModal", value: function() {
      var t4 = this;
      setTimeout(function() {
        t4._modal.remove(), mc.addStyle(t4._document.body, { overflow: "" }), gs() || mc.addStyle(t4._document.body, { paddingRight: "" });
      }, 300), lc(this._document, "click keydown mousedown mouseup mousemove mouseleave mouseover touchmove touchend");
    } }, { key: "_toggleBackdropAnimation", value: function() {
      0 < arguments.length && arguments[0] !== void 0 && arguments[0] ? (mc.addClass(this._wrapper, "animation"), mc.addClass(this._wrapper, "fade-out"), this._wrapper.style.animationDuration = "300ms") : (mc.addClass(this._wrapper, "animation"), mc.addClass(this._wrapper, "fade-in"), this._wrapper.style.animationDuration = "300ms", this._options.inline || mc.addClass(this._clock, Rs));
    } }, { key: "_addActiveClassToTip", value: function(t4, e4) {
      t4.forEach(function(t5) {
        Number(t5.textContent) === Number(e4) && mc.addClass(t5, Ds);
      });
    } }, { key: "_setHourOrMinute", value: function(t4) {
      return t4 < 10 ? "0".concat(t4) : t4;
    } }, { key: "_appendTimes", value: function() {
      this._getAppendClock(this.hoursArray, ".".concat(Bs), "".concat(nu));
    } }, { key: "_getConfig", value: function(t4) {
      var e4 = mc.getDataAttributes(this._element);
      return t4 = Os(Os(Os({}, uu), e4), t4), Ra(Ts, t4, lu), t4;
    } }]) && xs(t3.prototype, e3), r3 && xs(t3, r3), n3;
  }(), Dr = fu;
  function du(t3) {
    return (du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
      return typeof t4;
    } : function(t4) {
      return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
    })(t3);
  }
  function hu(e3, t3) {
    var n3, r3 = Object.keys(e3);
    return Object.getOwnPropertySymbols && (n3 = Object.getOwnPropertySymbols(e3), t3 && (n3 = n3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), r3.push.apply(r3, n3)), r3;
  }
  function pu(r3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var o3 = arguments[t3] != null ? arguments[t3] : {};
      t3 % 2 ? hu(Object(o3), true).forEach(function(t4) {
        var e3, n3;
        e3 = r3, t4 = o3[n3 = t4], n3 in e3 ? Object.defineProperty(e3, n3, { value: t4, enumerable: true, configurable: true, writable: true }) : e3[n3] = t4;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r3, Object.getOwnPropertyDescriptors(o3)) : hu(Object(o3)).forEach(function(t4) {
        Object.defineProperty(r3, t4, Object.getOwnPropertyDescriptor(o3, t4));
      });
    }
    return r3;
  }
  function vu(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, r3.key, r3);
    }
  }
  fc.on(window, "DOMContentLoaded", function() {
    bc.find(".".concat(Ts)).forEach(function(t3) {
      var e3 = fu.getInstance(t3);
      e3 || new fu(t3);
    });
  });
  var mu = "stepper", gu = "mdb.stepper", n2 = ".".concat(gu), yu = "horizontal", bu = "vertical", _u = { stepperType: "string", stepperLinear: "boolean", stepperNoEditable: "boolean", stepperActive: "string", stepperCompleted: "string", stepperInvalid: "string", stepperDisabled: "string", stepperVerticalBreakpoint: "number", stepperMobileBreakpoint: "number", stepperMobileBarBreakpoint: "number" }, wu = { stepperType: yu, stepperLinear: false, stepperNoEditable: false, stepperActive: "", stepperCompleted: "", stepperInvalid: "", stepperDisabled: "", stepperVerticalBreakpoint: 0, stepperMobileBreakpoint: 0, stepperMobileBarBreakpoint: 4 }, Ou = "mousedown".concat(n2), ku = "keydown".concat(n2), Cu = "keyup".concat(n2), Su = "resize".concat(n2), Eu = "animationend", xu = "".concat(mu, "-step"), ju = "".concat(mu, "-head"), Tu = "".concat(mu, "-content"), Au = "".concat(mu, "-active"), Du = "".concat(mu, "-completed"), Pu = "".concat(mu, "-invalid"), Mu = "".concat(mu, "-disabled"), Iu = "".concat(mu, "-").concat(bu), Lu = "".concat(mu, "-content-hide"), Nu = "".concat(mu, "-").concat(yu), Ru = function() {
    function n3(t4, e4) {
      !function(t5, e5) {
        if (!(t5 instanceof e5))
          throw new TypeError("Cannot call a class as a function");
      }(this, n3), this._element = t4, this._options = this._getConfig(e4), this._elementHeight = 0, this._steps = bc.find(".".concat(xu), this._element), this._currentView = "", this._activeStepIndex = 0, this._verticalStepperStyles = [], this._element && (Ua.setData(t4, gu, this), this._init());
    }
    var t3, e3, r3;
    return t3 = n3, r3 = [{ key: "NAME", get: function() {
      return mu;
    } }, { key: "getInstance", value: function(t4) {
      return Ua.getData(t4, gu);
    } }, { key: "getOrCreateInstance", value: function(t4) {
      var e4 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return this.getInstance(t4) || new this(t4, du(e4) === "object" ? e4 : null);
    } }], (e3 = [{ key: "activeStep", get: function() {
      return this._steps[this._activeStepIndex];
    } }, { key: "activeStepIndex", get: function() {
      return this._activeStepIndex;
    } }, { key: "dispose", value: function() {
      this._steps.forEach(function(t4) {
        fc.off(t4, Ou), fc.off(t4, ku);
      }), fc.off(window, Su), Ua.removeData(this._element, gu), this._element = null;
    } }, { key: "changeStep", value: function(t4) {
      this._toggleStep(t4);
    } }, { key: "nextStep", value: function() {
      this._toggleStep(this._activeStepIndex + 1);
    } }, { key: "previousStep", value: function() {
      this._toggleStep(this._activeStepIndex - 1);
    } }, { key: "_init", value: function() {
      var t4 = bc.findOne(".".concat(Au), this._element);
      t4 ? this._activeStepIndex = this._steps.indexOf(t4) : this._toggleStepClass(this._activeStepIndex, "add", Au), this._toggleStepClass(this._activeStepIndex, "add", this._options.stepperActive), this._bindMouseDown(), this._bindKeysNavigation(), this._options.stepperType === bu ? this._toggleVertical() : this._toggleHorizontal(), (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView(), this._bindResize();
    } }, { key: "_getConfig", value: function(t4) {
      var e4 = mc.getDataAttributes(this._element);
      return t4 = pu(pu(pu({}, wu), e4), t4), Ra(mu, t4, _u), t4;
    } }, { key: "_bindMouseDown", value: function() {
      var n4 = this;
      this._steps.forEach(function(t4) {
        t4 = bc.findOne(".".concat(ju), t4);
        fc.on(t4, Ou, function(t5) {
          var e4 = bc.parents(t5.target, ".".concat(xu))[0], e4 = n4._steps.indexOf(e4);
          t5.preventDefault(), n4._toggleStep(e4);
        });
      });
    } }, { key: "_bindResize", value: function() {
      var t4 = this;
      fc.on(window, Su, function() {
        t4._currentView === bu && t4._setSingleStepHeight(t4.activeStep), t4._currentView === yu && t4._setHeight(t4.activeStep), (t4._options.stepperVerticalBreakpoint || t4._options.stepperMobileBreakpoint) && t4._toggleStepperView();
      });
    } }, { key: "_toggleStepperView", value: function() {
      var e4 = this, t4 = this._options.stepperVerticalBreakpoint < window.innerWidth, n4 = this._options.stepperVerticalBreakpoint > window.innerWidth, r4 = this._options.stepperMobileBreakpoint > window.innerWidth;
      t4 && this._currentView !== yu && this._toggleHorizontal(), n4 && !r4 && this._currentView !== bu && (this._steps.forEach(function(t5) {
        t5 = bc.findOne(".".concat(Tu), t5);
        e4._resetStepperHeight(), e4._showElement(t5);
      }), this._toggleVertical());
    } }, { key: "_toggleStep", value: function(t4) {
      this._activeStepIndex !== t4 && (this._options.stepperNoEditable && this._toggleDisabled(), this._showElement(bc.findOne(".".concat(Tu), this._steps[t4])), this._toggleActive(t4), t4 > this._activeStepIndex && this._toggleCompleted(this._activeStepIndex), this._currentView === yu ? this._animateHorizontalStep(t4) : (this._animateVerticalStep(t4), this._setSingleStepHeight(this._steps[t4])), this._toggleStepTabIndex(bc.findOne(".".concat(ju), this.activeStep), bc.findOne(".".concat(ju), this._steps[t4])), this._activeStepIndex = t4);
    } }, { key: "_resetStepperHeight", value: function() {
      this._element.style.height = "";
    } }, { key: "_setStepsHeight", value: function() {
      var n4 = this;
      this._steps.forEach(function(t4) {
        var e4 = bc.findOne(".".concat(Tu), t4), t4 = window.getComputedStyle(e4);
        n4._verticalStepperStyles.push({ paddingTop: parseFloat(t4.paddingTop), paddingBottom: parseFloat(t4.paddingBottom) });
        t4 = e4.scrollHeight;
        e4.style.height = "".concat(t4, "px");
      });
    } }, { key: "_setSingleStepHeight", value: function(t4) {
      var e4 = bc.findOne(".".concat(Tu), t4), n4 = this.activeStep === t4, t4 = this._steps.indexOf(t4), t4 = n4 ? (e4.style.height = "", e4.scrollHeight) : e4.scrollHeight + this._verticalStepperStyles[t4].paddingTop + this._verticalStepperStyles[t4].paddingBottom;
      e4.style.height = "".concat(t4, "px");
    } }, { key: "_toggleVertical", value: function() {
      this._currentView = bu, this._toggleStepperClass(Iu), this._setStepsHeight(), this._hideInactiveSteps();
    } }, { key: "_toggleHorizontal", value: function() {
      this._currentView = yu, this._toggleStepperClass(Nu), this._setHeight(this.activeStep), this._hideInactiveSteps();
    } }, { key: "_toggleStepperClass", value: function(t4) {
      this._element.classList.remove(Nu, Iu), this._element.classList.add(t4), t4 !== Iu && this._steps.forEach(function(t5) {
        bc.findOne(".".concat(Tu), t5).classList.remove(Lu);
      });
    } }, { key: "_toggleStepClass", value: function(t4, e4, n4) {
      n4 && this._steps[t4].classList[e4](n4);
    } }, { key: "_bindKeysNavigation", value: function() {
      var u2 = this;
      this._toggleStepTabIndex(false, bc.findOne(".".concat(ju), this.activeStep)), this._steps.forEach(function(t4) {
        t4 = bc.findOne(".".concat(ju), t4);
        fc.on(t4, ku, function(t5) {
          var e4, n4 = bc.parents(t5.currentTarget, ".".concat(xu))[0], r4 = bc.next(n4, ".".concat(xu))[0], o3 = bc.prev(n4, ".".concat(xu))[0], i3 = bc.findOne(".".concat(ju), n4), a2 = bc.findOne(".".concat(ju), u2.activeStep), c2 = null, s2 = null;
          r4 && (c2 = bc.findOne(".".concat(ju), r4)), o3 && (s2 = bc.findOne(".".concat(ju), o3)), t5.keyCode === 37 && u2._currentView !== bu && (s2 ? (u2._toggleStepTabIndex(i3, s2), u2._toggleOutlineStyles(i3, s2), s2.focus()) : c2 && (u2._toggleStepTabIndex(i3, c2), u2._toggleOutlineStyles(i3, c2), c2.focus())), t5.keyCode === 39 && u2._currentView !== bu && (c2 ? (u2._toggleStepTabIndex(i3, c2), u2._toggleOutlineStyles(i3, c2), c2.focus()) : s2 && (u2._toggleStepTabIndex(i3, s2), u2._toggleOutlineStyles(i3, s2), s2.focus())), t5.keyCode === 40 && u2._currentView === bu && (t5.preventDefault(), c2 && (u2._toggleStepTabIndex(i3, c2), u2._toggleOutlineStyles(i3, c2), c2.focus())), t5.keyCode === 38 && u2._currentView === bu && (t5.preventDefault(), s2 && (u2._toggleStepTabIndex(i3, s2), u2._toggleOutlineStyles(i3, s2), s2.focus())), t5.keyCode === 36 && (e4 = bc.findOne(".".concat(ju), u2._steps[0]), u2._toggleStepTabIndex(i3, e4), u2._toggleOutlineStyles(i3, e4), e4.focus()), t5.keyCode === 35 && (e4 = u2._steps[u2._steps.length - 1], e4 = bc.findOne(".".concat(ju), e4), u2._toggleStepTabIndex(i3, e4), u2._toggleOutlineStyles(i3, e4), e4.focus()), t5.keyCode !== 13 && t5.keyCode !== 32 || (t5.preventDefault(), u2.changeStep(u2._steps.indexOf(n4))), t5.keyCode === 9 && (u2._toggleStepTabIndex(i3, a2), u2._toggleOutlineStyles(i3, false), a2.focus());
        }), fc.on(t4, Cu, function(t5) {
          var e4 = bc.parents(t5.currentTarget, ".".concat(xu))[0], n4 = bc.findOne(".".concat(ju), e4), e4 = bc.findOne(".".concat(ju), u2.activeStep);
          t5.keyCode === 9 && (u2._toggleStepTabIndex(n4, e4), u2._toggleOutlineStyles(false, e4), e4.focus());
        });
      });
    } }, { key: "_toggleStepTabIndex", value: function(t4, e4) {
      t4 && t4.setAttribute("tabIndex", -1), e4 && e4.setAttribute("tabIndex", 0);
    } }, { key: "_toggleOutlineStyles", value: function(t4, e4) {
      t4 && (t4.style.outline = ""), e4 && (e4.style.outline = "revert");
    } }, { key: "_toggleDisabled", value: function() {
      this._toggleStepClass(this._activeStepIndex, "add", Mu), this._toggleStepClass(this._activeStepIndex, "add", this._options.stepperDisabled);
    } }, { key: "_toggleActive", value: function(t4) {
      this._toggleStepClass(t4, "add", Au), this._toggleStepClass(this._activeStepIndex, "remove", Au), this._toggleStepClass(t4, "add", this._options.stepperActive), this._toggleStepClass(this._activeStepIndex, "remove", this._options.stepperActive);
    } }, { key: "_toggleCompleted", value: function(t4) {
      this._toggleStepClass(t4, "add", Du), this._toggleStepClass(t4, "remove", Pu), this._toggleStepClass(t4, "add", this._options.stepperCompleted), this._toggleStepClass(t4, "remove", this._options.stepperInvalid);
    } }, { key: "_hideInactiveSteps", value: function() {
      var e4 = this;
      this._steps.forEach(function(t4) {
        t4.classList.contains(Au) || e4._hideElement(bc.findOne(".".concat(Tu), t4));
      });
    } }, { key: "_setHeight", value: function(t4) {
      var e4 = bc.findOne(".".concat(Tu), t4), n4 = getComputedStyle(e4), r4 = bc.findOne(".".concat(ju), t4), t4 = getComputedStyle(r4), n4 = e4.offsetHeight + parseFloat(n4.marginTop) + parseFloat(n4.marginBottom), t4 = r4.offsetHeight + parseFloat(t4.marginTop) + parseFloat(t4.marginBottom);
      this._element.style.height = "".concat(t4 + n4, "px");
    } }, { key: "_hideElement", value: function(t4) {
      bc.parents(t4, ".".concat(xu))[0].classList.contains(Au) || this._currentView === bu ? t4.classList.add(Lu) : t4.style.display = "none";
    } }, { key: "_showElement", value: function(t4) {
      this._currentView === bu ? t4.classList.remove(Lu) : t4.style.display = "block";
    } }, { key: "_animateHorizontalStep", value: function(n4) {
      var t4, r4 = this, e4 = n4 > this._activeStepIndex, o3 = bc.findOne(".".concat(Tu), this._steps[n4]), i3 = bc.findOne(".".concat(Tu), this.activeStep);
      this._steps.forEach(function(t5, e5) {
        t5 = bc.findOne(".".concat(Tu), t5);
        r4._clearStepAnimation(t5), e5 !== n4 && e5 !== r4._activeStepIndex && r4._hideElement(t5);
      }), e4 = e4 ? (t4 = "slide-out-left", "slide-in-right") : (t4 = "slide-out-right", "slide-in-left"), i3.classList.add(t4, "animation", "fast"), o3.classList.add(e4, "animation", "fast"), this._setHeight(this._steps[n4]), fc.one(i3, Eu, function(t5) {
        r4._clearStepAnimation(t5.target), r4._hideElement(t5.target);
      }), fc.one(o3, Eu, function(t5) {
        r4._clearStepAnimation(t5.target);
      });
    } }, { key: "_animateVerticalStep", value: function(t4) {
      var e4 = bc.findOne(".".concat(Tu), this._steps[t4]), t4 = bc.findOne(".".concat(Tu), this.activeStep);
      this._hideElement(t4), this._showElement(e4);
    } }, { key: "_clearStepAnimation", value: function(t4) {
      t4.classList.remove("slide-out-left", "slide-in-right", "slide-out-right", "slide-in-left", "animation", "fast");
    } }]) && vu(t3.prototype, e3), r3 && vu(t3, r3), n3;
  }();
  bc.find('[data-mdb-stepper="stepper"]').forEach(function(t3) {
    return Ru.getInstance(t3) || new Ru(t3);
  });
  n2 = Ru;
  window.Alert = dn, window.Button = ct, window.Dropdown = Sn, window.Carousel = it, window.Collapse = Gn, window.Offcanvas = Je, window.Modal = tn, window.Popover = e2, window.ScrollSpy = fn, window.Tab = Ln, window.Toast = Yn, window.Tooltip = Si, window.Ripple = ln, window.Datepicker = rt, window.Timepicker = Dr, window.Stepper = n2;
}]);
const copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
const canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", __spreadProps(__spreadValues({}, toStringDescriptor), { value: newToString }));
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}
const calledFunctions = new WeakMap();
const onetime = (function_, options = {}) => {
  if (typeof function_ !== "function") {
    throw new TypeError("Expected a function");
  }
  let returnValue;
  let callCount = 0;
  const functionName = function_.displayName || function_.name || "<anonymous>";
  const onetime2 = function(...arguments_) {
    calledFunctions.set(onetime2, ++callCount);
    if (callCount === 1) {
      returnValue = function_.apply(this, arguments_);
      function_ = null;
    } else if (options.throw === true) {
      throw new Error(`Function \`${functionName}\` can only be called once`);
    }
    return returnValue;
  };
  mimicFunction(onetime2, function_);
  calledFunctions.set(onetime2, callCount);
  return onetime2;
};
onetime.callCount = (function_) => {
  if (!calledFunctions.has(function_)) {
    throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
  }
  return calledFunctions.get(function_);
};
const props = {
  title: [String],
  spin: [Boolean],
  width: [Number, String],
  height: [Number, String],
  ariaLabel: [String],
  class: [String],
  icon: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 24
  },
  viewBox: {
    type: String,
    default: "0 0 24 24"
  },
  xmlns: {
    type: String,
    default: "http://www.w3.org/2000/svg"
  },
  role: {
    type: String,
    default: "img"
  }
};
var icons = "";
const mdiAlert$1 = "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z";
const getAttrs = (props2, attrs) => {
  var _a, _b, _c;
  const iconPath = (_a = props2.icon) != null ? _a : mdiAlert$1;
  const spanAttrs = __spreadValues({
    role: props2.role,
    "aria-label": props2.ariaLabel
  }, attrs);
  const svgAttrs = {
    fill: "currentColor",
    width: (_b = props2.width) != null ? _b : props2.size,
    height: (_c = props2.height) != null ? _c : props2.size,
    viewBox: props2.viewBox,
    xmlns: props2.xmlns
  };
  const pathAttrs = {
    d: iconPath
  };
  return {
    spanAttrs,
    svgAttrs,
    pathAttrs
  };
};
function getClass(data) {
  const classes = {
    "v-icon": true
  };
  if (data.class !== void 0)
    classes[data.class] = true;
  return classes;
}
const simpleVueIcon = {
  install(app) {
    app.component("VIcon", {
      name: "VIcon",
      props,
      render() {
        const { spanAttrs, svgAttrs, pathAttrs } = getAttrs(this, this.$attrs);
        return h("span", __spreadProps(__spreadValues({}, spanAttrs), {
          class: getClass(this)
        }), [
          h("svg", svgAttrs, [
            this.title ? h("title", [this.title]) : void 0,
            h("path", pathAttrs)
          ])
        ]);
      }
    });
  }
};
const e = { maxWidth: void 0, minWidth: void 0, comfortZone: "0px", watchWindowSize: false, windowResizeHandlerDebounceTime: 150, disableNonInputWarning: false }, i = (e2) => {
  const { mirror: i2, options: t2 } = e2;
  t2.maxWidth && (e2.style.maxWidth = t2.maxWidth), t2.minWidth && (e2.style.minWidth = t2.minWidth);
  let n2 = e2.value;
  for (n2 || (n2 = e2.placeholder || ""); i2.childNodes.length; )
    i2.removeChild(i2.childNodes[0]);
  i2.appendChild(document.createTextNode(n2));
  const o2 = i2.scrollWidth + 2;
  o2 != e2.scrollWidth && (e2.style.width = `${o2}px`);
}, t = (e2) => {
  const i2 = window.getComputedStyle(e2), { options: t2 } = e2;
  Object.assign(e2.mirror.style, { position: "absolute", top: "0", left: "0", visibility: "hidden", height: "0", overflow: "hidden", whiteSpace: "pre", fontSize: i2.fontSize, fontFamily: i2.fontFamily, fontWeight: i2.fontWeight, fontStyle: i2.fontStyle, letterSpacing: i2.letterSpacing, textTransform: i2.textTransform, paddingRight: `calc(${t2.comfortZone} + ${i2.paddingRight} + ${i2.borderRightWidth})`, paddingLeft: `calc(${i2.paddingLeft} + ${i2.borderLeftWidth})` });
}, n = (e2) => {
  t(e2), i(e2);
};
var o = { beforeMount: function(i2, t2) {
  var n2;
  if (i2.options = (n2 = t2.value, Object.assign({}, e, n2)), !i2.options.disableNonInputWarning && i2.tagName.toLocaleUpperCase() !== "INPUT")
    throw new Error("v-input-autowidth can only be used on input elements.");
}, mounted: function(e2, o2, r2) {
  const d = Object.prototype.hasOwnProperty.call(r2.props, "@onUpdate:modelValue");
  if (e2.sizerFunc = (t2) => i(e2), e2.mirror = document.createElement("div"), t(e2), e2.mirror.setAttribute("aria-hidden", "true"), document.body.appendChild(e2.mirror), n(e2), d || e2.addEventListener("input", e2.sizerFunc), e2.options.watchWindowSize && e2.options.windowResizeHandlerDebounceTime !== void 0) {
    const i2 = (i3) => n(e2);
    e2.windowResizeHandler = ((e3, i3) => {
      let t2;
      return (...n2) => {
        let o3;
        return t2 && clearTimeout(t2), t2 = setTimeout(() => {
          o3 = e3(...n2);
        }, i3), o3;
      };
    })(i2, e2.options.windowResizeHandlerDebounceTime), window.addEventListener("resize", e2.windowResizeHandler, { passive: true });
  }
}, updated: function(e2) {
  e2.sizerFunc && e2.sizerFunc();
}, unmounted: function(e2) {
  document.body.removeChild(e2.mirror), e2.sizerFunc && e2.removeEventListener("input", e2.sizerFunc), e2.options.watchWindowSize && e2.windowResizeHandler && window.removeEventListener("resize", e2.windowResizeHandler);
} };
const r = { install: (e2) => {
  Number(e2.version.split(".")[0]) < 3 && console.warn("This plugin requires Vue 3"), e2.directive("autowidth", o);
} };
const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};
const useSizeProps = {
  size: String
};
function useSize(props2, sizes = useSizeDefaults) {
  return computed(() => props2.size !== void 0 ? { fontSize: props2.size in sizes ? `${sizes[props2.size]}px` : props2.size } : null);
}
const createComponent = (raw) => markRaw(defineComponent(raw));
const createDirective = (raw) => markRaw(raw);
function hSlot(slot, otherwise) {
  return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
  if (slot !== void 0) {
    const vnode = slot();
    if (vnode !== void 0 && vnode !== null) {
      return vnode.slice();
    }
  }
  return otherwise;
}
function hMergeSlot(slot, source) {
  return slot !== void 0 ? source.concat(slot()) : source;
}
function hMergeSlotSafely(slot, source) {
  if (slot === void 0) {
    return source;
  }
  return source !== void 0 ? source.concat(slot()) : slot();
}
const defaultViewBox = "0 0 24 24";
const sameFn = (i2) => i2;
const ionFn = (i2) => `ionicons ${i2}`;
const libMap = {
  "icon-": sameFn,
  "bt-": (i2) => `bt ${i2}`,
  "eva-": (i2) => `eva ${i2}`,
  "ion-md": ionFn,
  "ion-ios": ionFn,
  "ion-logo": ionFn,
  "mdi-": (i2) => `mdi ${i2}`,
  "iconfont ": sameFn,
  "ti-": (i2) => `themify-icon ${i2}`,
  "bi-": (i2) => `bootstrap-icons ${i2}`
};
const matMap = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
};
const libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
const matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
const mRE = /^[Mm]\s?[-+]?\.?\d/;
const imgRE = /^img:/;
const svgUseRE = /^svguse:/;
const ionRE = /^ion-/;
const faLaRE = /^[lf]a[srlbdk]? /;
var QIcon = createComponent({
  name: "QIcon",
  props: __spreadProps(__spreadValues({}, useSizeProps), {
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  }),
  setup(props2, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props2);
    const classes = computed(() => "q-icon" + (props2.left === true ? " on-left" : "") + (props2.right === true ? " on-right" : "") + (props2.color !== void 0 ? ` text-${props2.color}` : ""));
    const type = computed(() => {
      let cls;
      let icon = props2.name;
      if (icon === "none" || !icon) {
        return { none: true };
      }
      if ($q.iconMapFn !== null) {
        const res = $q.iconMapFn(icon);
        if (res !== void 0) {
          if (res.icon !== void 0) {
            icon = res.icon;
            if (icon === "none" || !icon) {
              return { none: true };
            }
          } else {
            return {
              cls: res.cls,
              content: res.content !== void 0 ? res.content : " "
            };
          }
        }
      }
      if (mRE.test(icon) === true) {
        const [def2, viewBox = defaultViewBox] = icon.split("|");
        return {
          svg: true,
          viewBox,
          nodes: def2.split("&&").map((path) => {
            const [d, style, transform] = path.split("@@");
            return h("path", { style, d, transform });
          })
        };
      }
      if (imgRE.test(icon) === true) {
        return {
          img: true,
          src: icon.substring(4)
        };
      }
      if (svgUseRE.test(icon) === true) {
        const [def2, viewBox = defaultViewBox] = icon.split("|");
        return {
          svguse: true,
          src: def2.substring(7),
          viewBox
        };
      }
      let content = " ";
      const matches = icon.match(libRE);
      if (matches !== null) {
        cls = libMap[matches[1]](icon);
      } else if (faLaRE.test(icon) === true) {
        cls = icon;
      } else if (ionRE.test(icon) === true) {
        cls = `ionicons ion-${$q.platform.is.ios === true ? "ios" : "md"}${icon.substr(3)}`;
      } else {
        cls = "notranslate material-icons";
        const matches2 = icon.match(matRE);
        if (matches2 !== null) {
          icon = icon.substring(2);
          cls += matMap[matches2[1]];
        }
        content = icon;
      }
      return {
        cls,
        content
      };
    });
    return () => {
      const data = {
        class: classes.value,
        style: sizeStyle.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      if (type.value.none === true) {
        return h(props2.tag, data, hSlot(slots.default));
      }
      if (type.value.img === true) {
        return h("span", data, hMergeSlot(slots.default, [
          h("img", { src: type.value.src })
        ]));
      }
      if (type.value.svg === true) {
        return h("span", data, hMergeSlot(slots.default, [
          h("svg", {
            viewBox: type.value.viewBox
          }, type.value.nodes)
        ]));
      }
      if (type.value.svguse === true) {
        return h("span", data, hMergeSlot(slots.default, [
          h("svg", {
            viewBox: type.value.viewBox
          }, [
            h("use", { "xlink:href": type.value.src })
          ])
        ]));
      }
      if (type.value.cls !== void 0) {
        data.class += " " + type.value.cls;
      }
      return h(props2.tag, data, hMergeSlot(slots.default, [
        type.value.content
      ]));
    };
  }
});
var QAvatar = createComponent({
  name: "QAvatar",
  props: __spreadProps(__spreadValues({}, useSizeProps), {
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean
  }),
  setup(props2, { slots }) {
    const sizeStyle = useSize(props2);
    const classes = computed(() => "q-avatar" + (props2.color ? ` bg-${props2.color}` : "") + (props2.textColor ? ` text-${props2.textColor} q-chip--colored` : "") + (props2.square === true ? " q-avatar--square" : props2.rounded === true ? " rounded-borders" : ""));
    const contentStyle = computed(() => props2.fontSize ? { fontSize: props2.fontSize } : null);
    return () => {
      const icon = props2.icon !== void 0 ? [h(QIcon, { name: props2.icon })] : void 0;
      return h("div", {
        class: classes.value,
        style: sizeStyle.value
      }, [
        h("div", {
          class: "q-avatar__content row flex-center overflow-hidden",
          style: contentStyle.value
        }, hMergeSlotSafely(slots.default, icon))
      ]);
    };
  }
});
const useSpinnerProps = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function useSpinner(props2) {
  return {
    cSize: computed(() => props2.size in useSizeDefaults ? `${useSizeDefaults[props2.size]}px` : props2.size),
    classes: computed(() => "q-spinner" + (props2.color ? ` text-${props2.color}` : ""))
  };
}
var QSpinner = createComponent({
  name: "QSpinner",
  props: __spreadProps(__spreadValues({}, useSpinnerProps), {
    thickness: {
      type: Number,
      default: 5
    }
  }),
  setup(props2) {
    const { cSize, classes } = useSpinner(props2);
    return () => h("svg", {
      class: classes.value + " q-spinner-mat",
      width: cSize.value,
      height: cSize.value,
      viewBox: "25 25 50 50"
    }, [
      h("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": props2.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function css(element, css2) {
  const style = element.style;
  for (const prop in css2) {
    style[prop] = css2[prop];
  }
}
function getElement(el) {
  if (el === void 0 || el === null) {
    return void 0;
  }
  if (typeof el === "string") {
    try {
      return document.querySelector(el) || void 0;
    } catch (err) {
      return void 0;
    }
  }
  const target2 = isRef(el) === true ? el.value : el;
  if (target2) {
    return target2.$el || target2;
  }
}
function childHasFocus(el, focusedEl) {
  if (el === void 0 || el === null || el.contains(focusedEl) === true) {
    return true;
  }
  for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) {
    if (next.contains(focusedEl)) {
      return true;
    }
  }
  return false;
}
const listenOpts = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true
};
try {
  const opts = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(listenOpts, {
        hasPassive: true,
        passive: { passive: true },
        notPassive: { passive: false },
        passiveCapture: { passive: true, capture: true },
        notPassiveCapture: { passive: false, capture: true }
      });
    }
  });
  window.addEventListener("qtest", null, opts);
  window.removeEventListener("qtest", null, opts);
} catch (e2) {
}
function noop$1() {
}
function position(e2) {
  if (e2.touches && e2.touches[0]) {
    e2 = e2.touches[0];
  } else if (e2.changedTouches && e2.changedTouches[0]) {
    e2 = e2.changedTouches[0];
  } else if (e2.targetTouches && e2.targetTouches[0]) {
    e2 = e2.targetTouches[0];
  }
  return {
    top: e2.clientY,
    left: e2.clientX
  };
}
function getEventPath(e2) {
  if (e2.path) {
    return e2.path;
  }
  if (e2.composedPath) {
    return e2.composedPath();
  }
  const path = [];
  let el = e2.target;
  while (el) {
    path.push(el);
    if (el.tagName === "HTML") {
      path.push(document);
      path.push(window);
      return path;
    }
    el = el.parentElement;
  }
}
function stop(e2) {
  e2.stopPropagation();
}
function prevent(e2) {
  e2.cancelable !== false && e2.preventDefault();
}
function stopAndPrevent(e2) {
  e2.cancelable !== false && e2.preventDefault();
  e2.stopPropagation();
}
function addEvt(ctx, targetName, events) {
  const name = `__q_${targetName}_evt`;
  ctx[name] = ctx[name] !== void 0 ? ctx[name].concat(events) : events;
  events.forEach((evt) => {
    evt[0].addEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
  });
}
function cleanEvt(ctx, targetName) {
  const name = `__q_${targetName}_evt`;
  if (ctx[name] !== void 0) {
    ctx[name].forEach((evt) => {
      evt[0].removeEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
    });
    ctx[name] = void 0;
  }
}
let lastKeyCompositionStatus = false;
function onKeyDownComposition(evt) {
  lastKeyCompositionStatus = evt.isComposing === true;
}
function shouldIgnoreKey(evt) {
  return lastKeyCompositionStatus === true || evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true;
}
function isKeyCode(evt, keyCodes) {
  return shouldIgnoreKey(evt) === true ? false : [].concat(keyCodes).includes(evt.keyCode);
}
function throttle(fn, limit = 250) {
  let wait = false, result;
  return function() {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }
    return result;
  };
}
function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && stop(evt);
  const color = ctx.modifiers.color;
  let center = ctx.modifiers.center;
  center = center === true || forceCenter === true;
  const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width, height } = el.getBoundingClientRect(), diameter2 = Math.sqrt(width * width + height * height), radius2 = diameter2 / 2, centerX = `${(width - diameter2) / 2}px`, x = center ? centerX : `${pos.left - left - radius2}px`, centerY = `${(height - diameter2) / 2}px`, y = center ? centerY : `${pos.top - top - radius2}px`;
  innerNode.className = "q-ripple__inner";
  css(innerNode, {
    height: `${diameter2}px`,
    width: `${diameter2}px`,
    transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  });
  node.className = `q-ripple${color ? " text-" + color : ""}`;
  node.setAttribute("dir", "ltr");
  node.appendChild(innerNode);
  el.appendChild(node);
  const abort = () => {
    node.remove();
    clearTimeout(timer);
  };
  ctx.abort.push(abort);
  let timer = setTimeout(() => {
    innerNode.classList.add("q-ripple__inner--enter");
    innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
    innerNode.style.opacity = 0.2;
    timer = setTimeout(() => {
      innerNode.classList.remove("q-ripple__inner--enter");
      innerNode.classList.add("q-ripple__inner--leave");
      innerNode.style.opacity = 0;
      timer = setTimeout(() => {
        node.remove();
        ctx.abort.splice(ctx.abort.indexOf(abort), 1);
      }, 275);
    }, 250);
  }, 50);
}
function updateModifiers(ctx, { modifiers, value, arg, instance }) {
  const cfg = Object.assign({}, instance.$q.config.ripple, modifiers, value);
  ctx.modifiers = {
    early: cfg.early === true,
    stop: cfg.stop === true,
    center: cfg.center === true,
    color: cfg.color || arg,
    keyCodes: [].concat(cfg.keyCodes || 13)
  };
}
var Ripple = createDirective({
  name: "ripple",
  beforeMount(el, binding) {
    const ctx = {
      enabled: binding.value !== false,
      modifiers: {},
      abort: [],
      start(evt) {
        if (ctx.enabled === true && evt.qSkipRipple !== true && (ctx.modifiers.early === true ? ["mousedown", "touchstart"].includes(evt.type) === true : evt.type === "click")) {
          showRipple(evt, el, ctx, evt.qKeyEvent === true);
        }
      },
      keystart: throttle((evt) => {
        if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) {
          showRipple(evt, el, ctx, true);
        }
      }, 300)
    };
    updateModifiers(ctx, binding);
    el.__qripple = ctx;
    addEvt(ctx, "main", [
      [el, "mousedown", "start", "passive"],
      [el, "touchstart", "start", "passive"],
      [el, "click", "start", "passive"],
      [el, "keydown", "keystart", "passive"],
      [el, "keyup", "keystart", "passive"]
    ]);
  },
  updated(el, binding) {
    if (binding.oldValue !== binding.value) {
      const ctx = el.__qripple;
      ctx.enabled = binding.value !== false;
      if (ctx.enabled === true && Object(binding.value) === binding.value) {
        updateModifiers(ctx, binding);
      }
    }
  },
  beforeUnmount(el) {
    const ctx = el.__qripple;
    ctx.abort.forEach((fn) => {
      fn();
    });
    cleanEvt(ctx, "main");
    delete el._qripple;
  }
});
const alignMap = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
};
const alignValues = Object.keys(alignMap);
const useAlignProps = {
  align: {
    type: String,
    validator: (v) => alignValues.includes(v)
  }
};
function useAlign(props2) {
  return computed(() => {
    const align = props2.align === void 0 ? props2.vertical === true ? "stretch" : "left" : props2.align;
    return `${props2.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
  });
}
function getParentVm(vm) {
  if (Object(vm.$parent) === vm.$parent) {
    return vm.$parent;
  }
  vm = vm.$.parent;
  while (Object(vm) === vm) {
    if (Object(vm.proxy) === vm.proxy) {
      return vm.proxy;
    }
    vm = vm.parent;
  }
}
function vmHasRouter(vm) {
  return vm.appContext.config.globalProperties.$router !== void 0;
}
function getOriginalPath$1(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isSameRouteRecord$1(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function includesParams$1(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key], outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) {
        return false;
      }
    } else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2])) {
      return false;
    }
  }
  return true;
}
function isEquivalentArray$1(a, b) {
  return Array.isArray(b) === true ? a.length === b.length && a.every((value, i2) => value === b[i2]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue$1(a, b) {
  return Array.isArray(a) === true ? isEquivalentArray$1(a, b) : Array.isArray(b) === true ? isEquivalentArray$1(b, a) : a === b;
}
function isSameRouteLocationParams$1(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (isSameRouteLocationParamsValue$1(a[key], b[key]) === false) {
      return false;
    }
  }
  return true;
}
const useRouterLinkProps = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  },
  href: String,
  target: String,
  disable: Boolean
};
function useRouterLink(fallbackTag) {
  const vm = getCurrentInstance();
  const { props: props2, proxy } = vm;
  const hasRouter = vmHasRouter(vm);
  const hasHrefLink = computed(() => props2.disable !== true && props2.href !== void 0);
  const hasRouterLinkProps = computed(() => hasRouter === true && props2.disable !== true && hasHrefLink.value !== true && props2.to !== void 0 && props2.to !== null && props2.to !== "");
  const linkRoute = computed(() => {
    if (hasRouterLinkProps.value === true) {
      try {
        return proxy.$router.resolve(props2.to);
      } catch (err) {
      }
    }
    return null;
  });
  const hasRouterLink = computed(() => linkRoute.value !== null);
  const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
  const linkTag = computed(() => props2.type === "a" || hasLink.value === true ? "a" : props2.tag || fallbackTag || "div");
  const linkProps = computed(() => hasHrefLink.value === true ? {
    href: props2.href,
    target: props2.target
  } : hasRouterLink.value === true ? {
    href: linkRoute.value.href,
    target: props2.target
  } : {});
  const linkActiveIndex = computed(() => {
    if (hasRouterLink.value === false) {
      return null;
    }
    const { matched } = linkRoute.value, { length } = matched, routeMatched = matched[length - 1];
    if (routeMatched === void 0) {
      return -1;
    }
    const currentMatched = proxy.$route.matched;
    if (currentMatched.length === 0) {
      return -1;
    }
    const index = currentMatched.findIndex(isSameRouteRecord$1.bind(null, routeMatched));
    if (index > -1) {
      return index;
    }
    const parentRecordPath = getOriginalPath$1(matched[length - 2]);
    return length > 1 && getOriginalPath$1(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord$1.bind(null, matched[length - 2])) : index;
  });
  const linkIsActive = computed(() => hasRouterLink.value === true && linkActiveIndex.value > -1 && includesParams$1(proxy.$route.params, linkRoute.value.params));
  const linkIsExactActive = computed(() => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams$1(proxy.$route.params, linkRoute.value.params));
  const linkClass = computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props2.exactActiveClass} ${props2.activeClass}` : props2.exact === true ? "" : linkIsActive.value === true ? ` ${props2.activeClass}` : "" : "");
  function navigateToRouterLink(e2) {
    if (props2.disable === true || e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey || e2.__qNavigate !== true && e2.defaultPrevented === true || e2.button !== void 0 && e2.button !== 0 || props2.target === "_blank") {
      return false;
    }
    prevent(e2);
    return proxy.$router[props2.replace === true ? "replace" : "push"](props2.to).catch((err) => err);
  }
  return {
    hasRouterLink,
    hasHrefLink,
    hasLink,
    linkTag,
    linkRoute,
    linkIsActive,
    linkIsExactActive,
    linkClass,
    linkProps,
    navigateToRouterLink
  };
}
const padding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const formTypes = ["button", "submit", "reset"];
const mediaTypeRE = /[^\s]\/[^\s]/;
const useBtnProps = __spreadProps(__spreadValues(__spreadValues({}, useSizeProps), useRouterLinkProps), {
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  round: Boolean,
  outline: Boolean,
  flat: Boolean,
  unelevated: Boolean,
  rounded: Boolean,
  push: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  align: __spreadProps(__spreadValues({}, useAlignProps.align), {
    default: "center"
  }),
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
});
function useBtn(props2) {
  const sizeStyle = useSize(props2, defaultSizes);
  const alignClass = useAlign(props2);
  const { hasRouterLink, hasLink, linkTag, linkProps, navigateToRouterLink } = useRouterLink("button");
  const style = computed(() => {
    const obj = props2.fab === false && props2.fabMini === false ? sizeStyle.value : {};
    return props2.padding !== void 0 ? Object.assign({}, obj, {
      padding: props2.padding.split(/\s+/).map((v) => v in padding ? padding[v] + "px" : v).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : obj;
  });
  const isRounded = computed(() => props2.rounded === true || props2.fab === true || props2.fabMini === true);
  const isActionable = computed(() => props2.disable !== true && props2.loading !== true);
  const tabIndex = computed(() => isActionable.value === true ? props2.tabindex || 0 : -1);
  const design = computed(() => {
    if (props2.flat === true)
      return "flat";
    if (props2.outline === true)
      return "outline";
    if (props2.push === true)
      return "push";
    if (props2.unelevated === true)
      return "unelevated";
    return "standard";
  });
  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };
    if (hasLink.value === true) {
      Object.assign(acc, linkProps.value);
    } else if (formTypes.includes(props2.type) === true) {
      acc.type = props2.type;
    }
    if (linkTag.value === "a") {
      if (props2.disable === true) {
        acc["aria-disabled"] = "true";
      } else if (acc.href === void 0) {
        acc.role = "button";
      }
      if (hasRouterLink.value !== true && mediaTypeRE.test(props2.type) === true) {
        acc.type = props2.type;
      }
    } else if (props2.disable === true) {
      acc.disabled = "";
      acc["aria-disabled"] = "true";
    }
    if (props2.loading === true && props2.percentage !== void 0) {
      Object.assign(acc, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": props2.percentage
      });
    }
    return acc;
  });
  const classes = computed(() => {
    let colors;
    if (props2.color !== void 0) {
      if (props2.flat === true || props2.outline === true) {
        colors = `text-${props2.textColor || props2.color}`;
      } else {
        colors = `bg-${props2.color} text-${props2.textColor || "white"}`;
      }
    } else if (props2.textColor) {
      colors = `text-${props2.textColor}`;
    }
    return `q-btn--${design.value} q-btn--${props2.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : ""}`}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props2.disable === true ? " disabled" : "") + (props2.fab === true ? " q-btn--fab" : props2.fabMini === true ? " q-btn--fab-mini" : "") + (props2.noCaps === true ? " q-btn--no-uppercase" : "") + (props2.dense === true ? " q-btn--dense" : "") + (props2.stretch === true ? " no-border-radius self-stretch" : "") + (props2.glossy === true ? " glossy" : "");
  });
  const innerClasses = computed(() => alignClass.value + (props2.stack === true ? " column" : " row") + (props2.noWrap === true ? " no-wrap text-no-wrap" : "") + (props2.loading === true ? " q-btn__content--hidden" : ""));
  return {
    classes,
    style,
    innerClasses,
    attributes,
    hasRouterLink,
    hasLink,
    linkTag,
    navigateToRouterLink,
    isActionable
  };
}
const { passiveCapture } = listenOpts;
let touchTarget = null, keyboardTarget = null, mouseTarget = null;
var QBtn = createComponent({
  name: "QBtn",
  props: __spreadProps(__spreadValues({}, useBtnProps), {
    percentage: Number,
    darkPercentage: Boolean
  }),
  emits: ["click", "keydown", "touchstart", "mousedown", "keyup"],
  setup(props2, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const {
      classes,
      style,
      innerClasses,
      attributes,
      hasRouterLink,
      hasLink,
      linkTag,
      navigateToRouterLink,
      isActionable
    } = useBtn(props2);
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer;
    const hasLabel = computed(() => props2.label !== void 0 && props2.label !== null && props2.label !== "");
    const ripple = computed(() => props2.disable === true || props2.ripple === false ? false : __spreadValues({
      keyCodes: hasLink.value === true ? [13, 32] : [13]
    }, props2.ripple === true ? {} : props2.ripple));
    const rippleProps = computed(() => ({ center: props2.round }));
    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props2.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    const onEvents = computed(() => {
      if (props2.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstartPassive: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        };
      }
      if (isActionable.value === true) {
        return {
          onClick,
          onKeydown: onKeydown2,
          onMousedown,
          onTouchstartPassive
        };
      }
      return {
        onClick: stopAndPrevent
      };
    });
    const nodeProps = computed(() => __spreadValues(__spreadValues({
      ref: rootRef,
      class: "q-btn q-btn-item non-selectable no-outline " + classes.value,
      style: style.value
    }, attributes.value), onEvents.value));
    function onClick(e2) {
      if (rootRef.value === null) {
        return;
      }
      if (e2 !== void 0) {
        if (e2.defaultPrevented === true) {
          return;
        }
        const el = document.activeElement;
        if (props2.type === "submit" && el !== document.body && rootRef.value.contains(el) === false && el.contains(rootRef.value) === false) {
          rootRef.value.focus();
          const onClickCleanup = () => {
            document.removeEventListener("keydown", stopAndPrevent, true);
            document.removeEventListener("keyup", onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
          };
          document.addEventListener("keydown", stopAndPrevent, true);
          document.addEventListener("keyup", onClickCleanup, passiveCapture);
          rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
        }
      }
      if (hasRouterLink.value === true) {
        const go = () => {
          e2.__qNavigate = true;
          navigateToRouterLink(e2);
        };
        emit("click", e2, go);
        e2.defaultPrevented !== true && go();
      } else {
        emit("click", e2);
      }
    }
    function onKeydown2(e2) {
      if (rootRef.value === null) {
        return;
      }
      if (isKeyCode(e2, [13, 32]) === true) {
        stopAndPrevent(e2);
        if (keyboardTarget !== rootRef.value) {
          keyboardTarget !== null && cleanup();
          rootRef.value.focus();
          keyboardTarget = rootRef.value;
          rootRef.value.classList.add("q-btn--active");
          document.addEventListener("keyup", onPressEnd, true);
          rootRef.value.addEventListener("blur", onPressEnd, passiveCapture);
        }
      }
      emit("keydown", e2);
    }
    function onTouchstartPassive(e2) {
      if (rootRef.value === null) {
        return;
      }
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;
        localTouchTargetEl = e2.target;
        localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
      }
      avoidMouseRipple = true;
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        avoidMouseRipple = false;
      }, 200);
      emit("touchstart", e2);
    }
    function onMousedown(e2) {
      if (rootRef.value === null) {
        return;
      }
      if (mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add("q-btn--active");
        document.addEventListener("mouseup", onPressEnd, passiveCapture);
      }
      e2.qSkipRipple = avoidMouseRipple === true;
      emit("mousedown", e2);
    }
    function onPressEnd(e2) {
      if (rootRef.value === null) {
        return;
      }
      if (e2 !== void 0 && e2.type === "blur" && document.activeElement === rootRef.value) {
        return;
      }
      if (e2 !== void 0 && e2.type === "keyup") {
        if (keyboardTarget === rootRef.value && isKeyCode(e2, [13, 32]) === true) {
          const evt = new MouseEvent("click", e2);
          evt.qKeyEvent = true;
          e2.defaultPrevented === true && prevent(evt);
          e2.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);
          stopAndPrevent(e2);
          e2.qKeyEvent = true;
        }
        emit("keyup", e2);
      }
      cleanup();
    }
    function cleanup(destroying) {
      const blurTarget = blurTargetRef.value;
      if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
        blurTarget.setAttribute("tabindex", -1);
        blurTarget.focus();
      }
      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }
      if (mouseTarget === rootRef.value) {
        document.removeEventListener("mouseup", onPressEnd, passiveCapture);
        mouseTarget = null;
      }
      if (keyboardTarget === rootRef.value) {
        document.removeEventListener("keyup", onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
        keyboardTarget = null;
      }
      rootRef.value !== null && rootRef.value.classList.remove("q-btn--active");
    }
    function onLoadingEvt(evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }
    onBeforeUnmount(() => {
      cleanup(true);
    });
    Object.assign(proxy, { click: onClick });
    return () => {
      let inner = [];
      props2.icon !== void 0 && inner.push(h(QIcon, {
        name: props2.icon,
        left: props2.stack === false && hasLabel.value === true,
        role: "img",
        "aria-hidden": "true"
      }));
      hasLabel.value === true && inner.push(h("span", { class: "block" }, [props2.label]));
      inner = hMergeSlot(slots.default, inner);
      if (props2.iconRight !== void 0 && props2.round === false) {
        inner.push(h(QIcon, {
          name: props2.iconRight,
          right: props2.stack === false && hasLabel.value === true,
          role: "img",
          "aria-hidden": "true"
        }));
      }
      const child = [
        h("span", {
          class: "q-focus-helper",
          ref: blurTargetRef
        })
      ];
      if (props2.loading === true && props2.percentage !== void 0) {
        child.push(h("span", {
          class: "q-btn__progress absolute-full overflow-hidden"
        }, [
          h("span", {
            class: "q-btn__progress-indicator fit block" + (props2.darkPercentage === true ? " q-btn__progress--dark" : ""),
            style: percentageStyle.value
          })
        ]));
      }
      child.push(h("span", {
        class: "q-btn__content text-center col items-center q-anchor--skip " + innerClasses.value
      }, inner));
      props2.loading !== null && child.push(h(Transition, {
        name: "q-transition--fade"
      }, () => props2.loading === true ? [
        h("span", {
          key: "loading",
          class: "absolute-full flex flex-center"
        }, slots.loading !== void 0 ? slots.loading() : [h(QSpinner)])
      ] : null));
      return withDirectives(h(linkTag.value, nodeProps.value, child), [[
        Ripple,
        ripple.value,
        void 0,
        rippleProps.value
      ]]);
    };
  }
});
const globalConfig = {};
let globalConfigIsFrozen = false;
function freezeGlobalConfig() {
  globalConfigIsFrozen = true;
}
let target = document.body;
function createGlobalNode(id) {
  const el = document.createElement("div");
  if (id !== void 0) {
    el.id = id;
  }
  if (globalConfig.globalNodes !== void 0) {
    const cls = globalConfig.globalNodes.class;
    if (cls !== void 0) {
      el.className = cls;
    }
  }
  target.appendChild(el);
  return el;
}
function removeGlobalNode(el) {
  el.remove();
}
function injectProp(target2, propName, get2, set2) {
  Object.defineProperty(target2, propName, {
    get: get2,
    set: set2,
    enumerable: true
  });
}
const isRuntimeSsrPreHydration = ref(false);
let iosCorrection;
function getMatch(userAgent2, platformMatch) {
  const match = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(userAgent2) || /(opr)[\/]([\w.]+)/.exec(userAgent2) || /(vivaldi)[\/]([\w.]+)/.exec(userAgent2) || /(chrome|crios)[\/]([\w.]+)/.exec(userAgent2) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent2) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent2) || /(firefox|fxios)[\/]([\w.]+)/.exec(userAgent2) || /(webkit)[\/]([\w.]+)/.exec(userAgent2) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent2) || [];
  return {
    browser: match[5] || match[3] || match[1] || "",
    version: match[2] || match[4] || "0",
    versionNumber: match[4] || match[2] || "0",
    platform: platformMatch[0] || ""
  };
}
function getPlatformMatch(userAgent2) {
  return /(ipad)/.exec(userAgent2) || /(ipod)/.exec(userAgent2) || /(windows phone)/.exec(userAgent2) || /(iphone)/.exec(userAgent2) || /(kindle)/.exec(userAgent2) || /(silk)/.exec(userAgent2) || /(android)/.exec(userAgent2) || /(win)/.exec(userAgent2) || /(mac)/.exec(userAgent2) || /(linux)/.exec(userAgent2) || /(cros)/.exec(userAgent2) || /(playbook)/.exec(userAgent2) || /(bb)/.exec(userAgent2) || /(blackberry)/.exec(userAgent2) || [];
}
const hasTouch = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function applyIosCorrection(is) {
  iosCorrection = { is: __spreadValues({}, is) };
  delete is.mac;
  delete is.desktop;
  const platform = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(is, {
    mobile: true,
    ios: true,
    platform,
    [platform]: true
  });
}
function getPlatform(UA) {
  const userAgent2 = UA.toLowerCase(), platformMatch = getPlatformMatch(userAgent2), matched = getMatch(userAgent2, platformMatch), browser = {};
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.versionNumber, 10);
  }
  if (matched.platform) {
    browser[matched.platform] = true;
  }
  const knownMobiles = browser.android || browser.ios || browser.bb || browser.blackberry || browser.ipad || browser.iphone || browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"];
  if (knownMobiles === true || userAgent2.indexOf("mobile") > -1) {
    browser.mobile = true;
    if (browser.edga || browser.edgios) {
      browser.edge = true;
      matched.browser = "edge";
    } else if (browser.crios) {
      browser.chrome = true;
      matched.browser = "chrome";
    } else if (browser.fxios) {
      browser.firefox = true;
      matched.browser = "firefox";
    }
  } else {
    browser.desktop = true;
  }
  if (browser.ipod || browser.ipad || browser.iphone) {
    browser.ios = true;
  }
  if (browser["windows phone"]) {
    browser.winphone = true;
    delete browser["windows phone"];
  }
  if (browser.chrome || browser.opr || browser.safari || browser.vivaldi || browser.mobile === true && browser.ios !== true && knownMobiles !== true) {
    browser.webkit = true;
  }
  if (browser.edg) {
    matched.browser = "edgechromium";
    browser.edgeChromium = true;
  }
  if (browser.safari && browser.blackberry || browser.bb) {
    matched.browser = "blackberry";
    browser.blackberry = true;
  }
  if (browser.safari && browser.playbook) {
    matched.browser = "playbook";
    browser.playbook = true;
  }
  if (browser.opr) {
    matched.browser = "opera";
    browser.opera = true;
  }
  if (browser.safari && browser.android) {
    matched.browser = "android";
    browser.android = true;
  }
  if (browser.safari && browser.kindle) {
    matched.browser = "kindle";
    browser.kindle = true;
  }
  if (browser.safari && browser.silk) {
    matched.browser = "silk";
    browser.silk = true;
  }
  if (browser.vivaldi) {
    matched.browser = "vivaldi";
    browser.vivaldi = true;
  }
  browser.name = matched.browser;
  browser.platform = matched.platform;
  {
    if (userAgent2.indexOf("electron") > -1) {
      browser.electron = true;
    } else if (document.location.href.indexOf("-extension://") > -1) {
      browser.bex = true;
    } else {
      if (window.Capacitor !== void 0) {
        browser.capacitor = true;
        browser.nativeMobile = true;
        browser.nativeMobileWrapper = "capacitor";
      } else if (window._cordovaNative !== void 0 || window.cordova !== void 0) {
        browser.cordova = true;
        browser.nativeMobile = true;
        browser.nativeMobileWrapper = "cordova";
      }
      if (hasTouch === true && browser.mac === true && (browser.desktop === true && browser.safari === true || browser.nativeMobile === true && browser.android !== true && browser.ios !== true && browser.ipad !== true)) {
        applyIosCorrection(browser);
      }
    }
  }
  return browser;
}
const userAgent = navigator.userAgent || navigator.vendor || window.opera;
const ssrClient = {
  has: {
    touch: false,
    webStorage: false
  },
  within: { iframe: false }
};
const client = {
  userAgent,
  is: getPlatform(userAgent),
  has: {
    touch: hasTouch
  },
  within: {
    iframe: window.self !== window.top
  }
};
const Platform = {
  install(opts) {
    const { $q } = opts;
    if (isRuntimeSsrPreHydration.value === true) {
      opts.onSSRHydrated.push(() => {
        isRuntimeSsrPreHydration.value = false;
        Object.assign($q.platform, client);
        iosCorrection = void 0;
      });
      $q.platform = reactive(this);
    } else {
      $q.platform = this;
    }
  }
};
{
  let hasWebStorage;
  injectProp(client.has, "webStorage", () => {
    if (hasWebStorage !== void 0) {
      return hasWebStorage;
    }
    try {
      if (window.localStorage) {
        hasWebStorage = true;
        return true;
      }
    } catch (e2) {
    }
    hasWebStorage = false;
    return false;
  });
  client.is.ios === true && window.navigator.vendor.toLowerCase().indexOf("apple") === -1;
  if (isRuntimeSsrPreHydration.value === true) {
    Object.assign(Platform, client, iosCorrection, ssrClient);
  } else {
    Object.assign(Platform, client);
  }
}
var defineReactivePlugin = (state, plugin) => {
  const reactiveState = reactive(state);
  for (const name in state) {
    injectProp(plugin, name, () => reactiveState[name], (val) => {
      reactiveState[name] = val;
    });
  }
  return plugin;
};
function debounce(fn, wait = 250, immediate) {
  let timeout;
  function debounced() {
    const args = arguments;
    const later = () => {
      timeout = void 0;
      if (immediate !== true) {
        fn.apply(this, args);
      }
    };
    clearTimeout(timeout);
    if (immediate === true && timeout === void 0) {
      fn.apply(this, args);
    }
    timeout = setTimeout(later, wait);
  }
  debounced.cancel = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
const SIZE_LIST = ["sm", "md", "lg", "xl"];
const { passive } = listenOpts;
var Screen = defineReactivePlugin({
  width: 0,
  height: 0,
  name: "xs",
  sizes: {
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920
  },
  lt: {
    sm: true,
    md: true,
    lg: true,
    xl: true
  },
  gt: {
    xs: false,
    sm: false,
    md: false,
    lg: false
  },
  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false
}, {
  setSizes: noop$1,
  setDebounce: noop$1,
  install({ $q, onSSRHydrated }) {
    $q.screen = this;
    if (this.__installed === true) {
      if ($q.config.screen !== void 0) {
        if ($q.config.screen.bodyClasses === false) {
          document.body.classList.remove(`screen--${this.name}`);
        } else {
          this.__update(true);
        }
      }
      return;
    }
    const { visualViewport } = window;
    const target2 = visualViewport || window;
    const scrollingElement = document.scrollingElement || document.documentElement;
    const getSize = visualViewport === void 0 || client.is.mobile === true ? () => [
      Math.max(window.innerWidth, scrollingElement.clientWidth),
      Math.max(window.innerHeight, scrollingElement.clientHeight)
    ] : () => [
      visualViewport.width * visualViewport.scale + window.innerWidth - scrollingElement.clientWidth,
      visualViewport.height * visualViewport.scale + window.innerHeight - scrollingElement.clientHeight
    ];
    const classes = $q.config.screen !== void 0 && $q.config.screen.bodyClasses === true;
    this.__update = (force) => {
      const [w, h2] = getSize();
      if (h2 !== this.height) {
        this.height = h2;
      }
      if (w !== this.width) {
        this.width = w;
      } else if (force !== true) {
        return;
      }
      let s = this.sizes;
      this.gt.xs = w >= s.sm;
      this.gt.sm = w >= s.md;
      this.gt.md = w >= s.lg;
      this.gt.lg = w >= s.xl;
      this.lt.sm = w < s.sm;
      this.lt.md = w < s.md;
      this.lt.lg = w < s.lg;
      this.lt.xl = w < s.xl;
      this.xs = this.lt.sm;
      this.sm = this.gt.xs === true && this.lt.md === true;
      this.md = this.gt.sm === true && this.lt.lg === true;
      this.lg = this.gt.md === true && this.lt.xl === true;
      this.xl = this.gt.lg;
      s = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl";
      if (s !== this.name) {
        if (classes === true) {
          document.body.classList.remove(`screen--${this.name}`);
          document.body.classList.add(`screen--${s}`);
        }
        this.name = s;
      }
    };
    let updateEvt, updateSizes = {}, updateDebounce = 16;
    this.setSizes = (sizes) => {
      SIZE_LIST.forEach((name) => {
        if (sizes[name] !== void 0) {
          updateSizes[name] = sizes[name];
        }
      });
    };
    this.setDebounce = (deb) => {
      updateDebounce = deb;
    };
    const start = () => {
      const style = getComputedStyle(document.body);
      if (style.getPropertyValue("--q-size-sm")) {
        SIZE_LIST.forEach((name) => {
          this.sizes[name] = parseInt(style.getPropertyValue(`--q-size-${name}`), 10);
        });
      }
      this.setSizes = (sizes) => {
        SIZE_LIST.forEach((name) => {
          if (sizes[name]) {
            this.sizes[name] = sizes[name];
          }
        });
        this.__update(true);
      };
      this.setDebounce = (delay) => {
        updateEvt !== void 0 && target2.removeEventListener("resize", updateEvt, passive);
        updateEvt = delay > 0 ? debounce(this.__update, delay) : this.__update;
        target2.addEventListener("resize", updateEvt, passive);
      };
      this.setDebounce(updateDebounce);
      if (Object.keys(updateSizes).length > 0) {
        this.setSizes(updateSizes);
        updateSizes = void 0;
      } else {
        this.__update();
      }
      classes === true && this.name === "xs" && document.body.classList.add("screen--xs");
    };
    if (isRuntimeSsrPreHydration.value === true) {
      onSSRHydrated.push(start);
    } else {
      start();
    }
  }
});
const Plugin$2 = defineReactivePlugin({
  isActive: false,
  mode: false
}, {
  __media: void 0,
  set(val) {
    Plugin$2.mode = val;
    if (val === "auto") {
      if (Plugin$2.__media === void 0) {
        Plugin$2.__media = window.matchMedia("(prefers-color-scheme: dark)");
        Plugin$2.__updateMedia = () => {
          Plugin$2.set("auto");
        };
        Plugin$2.__media.addListener(Plugin$2.__updateMedia);
      }
      val = Plugin$2.__media.matches;
    } else if (Plugin$2.__media !== void 0) {
      Plugin$2.__media.removeListener(Plugin$2.__updateMedia);
      Plugin$2.__media = void 0;
    }
    Plugin$2.isActive = val === true;
    document.body.classList.remove(`body--${val === true ? "light" : "dark"}`);
    document.body.classList.add(`body--${val === true ? "dark" : "light"}`);
  },
  toggle() {
    {
      Plugin$2.set(Plugin$2.isActive === false);
    }
  },
  install({ $q, onSSRHydrated, ssrContext }) {
    const { dark } = $q.config;
    $q.dark = this;
    if (this.__installed === true && dark === void 0) {
      return;
    }
    this.isActive = dark === true;
    const initialVal = dark !== void 0 ? dark : false;
    if (isRuntimeSsrPreHydration.value === true) {
      const ssrSet = (val) => {
        this.__fromSSR = val;
      };
      const originalSet = this.set;
      this.set = ssrSet;
      ssrSet(initialVal);
      onSSRHydrated.push(() => {
        this.set = originalSet;
        this.set(this.__fromSSR);
      });
    } else {
      this.set(initialVal);
    }
  }
});
const getTrue = () => true;
function filterInvalidPath(path) {
  return typeof path === "string" && path !== "" && path !== "/" && path !== "#/";
}
function normalizeExitPath(path) {
  path.startsWith("#") === true && (path = path.substr(1));
  path.startsWith("/") === false && (path = "/" + path);
  path.endsWith("/") === true && (path = path.substr(0, path.length - 1));
  return "#" + path;
}
function getShouldExitFn(cfg) {
  if (cfg.backButtonExit === false) {
    return () => false;
  }
  if (cfg.backButtonExit === "*") {
    return getTrue;
  }
  const exitPaths = ["#/"];
  Array.isArray(cfg.backButtonExit) === true && exitPaths.push(...cfg.backButtonExit.filter(filterInvalidPath).map(normalizeExitPath));
  return () => exitPaths.includes(window.location.hash);
}
var History = {
  __history: [],
  add: noop$1,
  remove: noop$1,
  install({ $q }) {
    if (this.__installed === true) {
      return;
    }
    const { cordova, capacitor } = client.is;
    if (cordova !== true && capacitor !== true) {
      return;
    }
    const qConf = $q.config[cordova === true ? "cordova" : "capacitor"];
    if (qConf !== void 0 && qConf.backButton === false) {
      return;
    }
    if (capacitor === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) {
      return;
    }
    this.add = (entry) => {
      if (entry.condition === void 0) {
        entry.condition = getTrue;
      }
      this.__history.push(entry);
    };
    this.remove = (entry) => {
      const index = this.__history.indexOf(entry);
      if (index >= 0) {
        this.__history.splice(index, 1);
      }
    };
    const shouldExit = getShouldExitFn(Object.assign({ backButtonExit: true }, qConf));
    const backHandler = () => {
      if (this.__history.length) {
        const entry = this.__history[this.__history.length - 1];
        if (entry.condition() === true) {
          this.__history.pop();
          entry.handler();
        }
      } else if (shouldExit() === true) {
        navigator.app.exitApp();
      } else {
        window.history.back();
      }
    };
    if (cordova === true) {
      document.addEventListener("deviceready", () => {
        document.addEventListener("backbutton", backHandler, false);
      });
    } else {
      window.Capacitor.Plugins.App.addListener("backButton", backHandler);
    }
  }
};
var defaultLang = {
  isoName: "en-US",
  nativeName: "English (US)",
  label: {
    clear: "Clear",
    ok: "OK",
    cancel: "Cancel",
    close: "Close",
    set: "Set",
    select: "Select",
    reset: "Reset",
    remove: "Remove",
    update: "Update",
    create: "Create",
    search: "Search",
    filter: "Filter",
    refresh: "Refresh"
  },
  date: {
    days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    firstDayOfWeek: 0,
    format24h: false,
    pluralDay: "days"
  },
  table: {
    noData: "No data available",
    noResults: "No matching records found",
    loading: "Loading...",
    selectedRecords: (rows) => rows === 1 ? "1 record selected." : (rows === 0 ? "No" : rows) + " records selected.",
    recordsPerPage: "Records per page:",
    allRows: "All",
    pagination: (start, end, total) => start + "-" + end + " of " + total,
    columns: "Columns"
  },
  editor: {
    url: "URL",
    bold: "Bold",
    italic: "Italic",
    strikethrough: "Strikethrough",
    underline: "Underline",
    unorderedList: "Unordered List",
    orderedList: "Ordered List",
    subscript: "Subscript",
    superscript: "Superscript",
    hyperlink: "Hyperlink",
    toggleFullscreen: "Toggle Fullscreen",
    quote: "Quote",
    left: "Left align",
    center: "Center align",
    right: "Right align",
    justify: "Justify align",
    print: "Print",
    outdent: "Decrease indentation",
    indent: "Increase indentation",
    removeFormat: "Remove formatting",
    formatting: "Formatting",
    fontSize: "Font Size",
    align: "Align",
    hr: "Insert Horizontal Rule",
    undo: "Undo",
    redo: "Redo",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    heading5: "Heading 5",
    heading6: "Heading 6",
    paragraph: "Paragraph",
    code: "Code",
    size1: "Very small",
    size2: "A bit small",
    size3: "Normal",
    size4: "Medium-large",
    size5: "Big",
    size6: "Very big",
    size7: "Maximum",
    defaultFont: "Default Font",
    viewSource: "View Source"
  },
  tree: {
    noNodes: "No nodes available",
    noResults: "No matching nodes found"
  }
};
function getLocale() {
  const val = Array.isArray(navigator.languages) === true && navigator.languages.length > 0 ? navigator.languages[0] : navigator.language;
  if (typeof val === "string") {
    return val.split(/[-_]/).map((v, i2) => i2 === 0 ? v.toLowerCase() : i2 > 1 || v.length < 4 ? v.toUpperCase() : v[0].toUpperCase() + v.slice(1).toLowerCase()).join("-");
  }
}
const Plugin$1 = defineReactivePlugin({
  __langPack: {}
}, {
  getLocale,
  set(langObject = defaultLang, ssrContext) {
    const lang = __spreadProps(__spreadValues({}, langObject), {
      rtl: langObject.rtl === true,
      getLocale
    });
    {
      const el = document.documentElement;
      el.setAttribute("dir", lang.rtl === true ? "rtl" : "ltr");
      el.setAttribute("lang", lang.isoName);
      lang.set = Plugin$1.set;
      Object.assign(Plugin$1.__langPack, lang);
      Plugin$1.props = lang;
      Plugin$1.isoName = lang.isoName;
      Plugin$1.nativeName = lang.nativeName;
    }
  },
  install({ $q, lang, ssrContext }) {
    {
      $q.lang = Plugin$1.__langPack;
      if (this.__installed === true) {
        lang !== void 0 && this.set(lang);
      } else {
        this.set(lang || defaultLang);
      }
    }
  }
});
function setCssVar(propName, value, element = document.body) {
  if (typeof propName !== "string") {
    throw new TypeError("Expected a string as propName");
  }
  if (typeof value !== "string") {
    throw new TypeError("Expected a string as value");
  }
  if (!(element instanceof Element)) {
    throw new TypeError("Expected a DOM element");
  }
  element.style.setProperty(`--q-${propName}`, value);
}
function getMobilePlatform(is) {
  if (is.ios === true)
    return "ios";
  if (is.android === true)
    return "android";
}
function getBodyClasses({ is, has: has2, within }, cfg) {
  const cls = [
    is.desktop === true ? "desktop" : "mobile",
    `${has2.touch === false ? "no-" : ""}touch`
  ];
  if (is.mobile === true) {
    const mobile = getMobilePlatform(is);
    mobile !== void 0 && cls.push("platform-" + mobile);
  }
  if (is.nativeMobile === true) {
    const type = is.nativeMobileWrapper;
    cls.push(type);
    cls.push("native-mobile");
    if (is.ios === true && (cfg[type] === void 0 || cfg[type].iosStatusBarPadding !== false)) {
      cls.push("q-ios-padding");
    }
  } else if (is.electron === true) {
    cls.push("electron");
  } else if (is.bex === true) {
    cls.push("bex");
  }
  within.iframe === true && cls.push("within-iframe");
  return cls;
}
function applyClientSsrCorrections() {
  const classes = document.body.className;
  let newCls = classes;
  if (iosCorrection !== void 0) {
    newCls = newCls.replace("desktop", "platform-ios mobile");
  }
  if (client.has.touch === true) {
    newCls = newCls.replace("no-touch", "touch");
  }
  if (client.within.iframe === true) {
    newCls += " within-iframe";
  }
  if (classes !== newCls) {
    document.body.className = newCls;
  }
}
function setColors(brand) {
  for (const color in brand) {
    setCssVar(color, brand[color]);
  }
}
var Body = {
  install(opts) {
    if (this.__installed === true) {
      return;
    }
    if (isRuntimeSsrPreHydration.value === true) {
      applyClientSsrCorrections();
    } else {
      const { $q } = opts;
      $q.config.brand !== void 0 && setColors($q.config.brand);
      const cls = getBodyClasses(client, $q.config);
      document.body.classList.add.apply(document.body.classList, cls);
    }
    if (client.is.ios === true) {
      document.body.addEventListener("touchstart", noop$1);
    }
    window.addEventListener("keydown", onKeyDownComposition, true);
  }
};
var materialIcons = {
  name: "material-icons",
  type: {
    positive: "check_circle",
    negative: "warning",
    info: "info",
    warning: "priority_high"
  },
  arrow: {
    up: "arrow_upward",
    right: "arrow_forward",
    down: "arrow_downward",
    left: "arrow_back",
    dropdown: "arrow_drop_down"
  },
  chevron: {
    left: "chevron_left",
    right: "chevron_right"
  },
  colorPicker: {
    spectrum: "gradient",
    tune: "tune",
    palette: "style"
  },
  pullToRefresh: {
    icon: "refresh"
  },
  carousel: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down",
    navigationIcon: "lens"
  },
  chip: {
    remove: "cancel",
    selected: "check"
  },
  datetime: {
    arrowLeft: "chevron_left",
    arrowRight: "chevron_right",
    now: "access_time",
    today: "today"
  },
  editor: {
    bold: "format_bold",
    italic: "format_italic",
    strikethrough: "strikethrough_s",
    underline: "format_underlined",
    unorderedList: "format_list_bulleted",
    orderedList: "format_list_numbered",
    subscript: "vertical_align_bottom",
    superscript: "vertical_align_top",
    hyperlink: "link",
    toggleFullscreen: "fullscreen",
    quote: "format_quote",
    left: "format_align_left",
    center: "format_align_center",
    right: "format_align_right",
    justify: "format_align_justify",
    print: "print",
    outdent: "format_indent_decrease",
    indent: "format_indent_increase",
    removeFormat: "format_clear",
    formatting: "text_format",
    fontSize: "format_size",
    align: "format_align_left",
    hr: "remove",
    undo: "undo",
    redo: "redo",
    heading: "format_size",
    code: "code",
    size: "format_size",
    font: "font_download",
    viewSource: "code"
  },
  expansionItem: {
    icon: "keyboard_arrow_down",
    denseIcon: "arrow_drop_down"
  },
  fab: {
    icon: "add",
    activeIcon: "close"
  },
  field: {
    clear: "cancel",
    error: "error"
  },
  pagination: {
    first: "first_page",
    prev: "keyboard_arrow_left",
    next: "keyboard_arrow_right",
    last: "last_page"
  },
  rating: {
    icon: "grade"
  },
  stepper: {
    done: "check",
    active: "edit",
    error: "warning"
  },
  tabs: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down"
  },
  table: {
    arrowUp: "arrow_upward",
    warning: "warning",
    firstPage: "first_page",
    prevPage: "chevron_left",
    nextPage: "chevron_right",
    lastPage: "last_page"
  },
  tree: {
    icon: "play_arrow"
  },
  uploader: {
    done: "done",
    clear: "clear",
    add: "add_box",
    upload: "cloud_upload",
    removeQueue: "clear_all",
    removeUploaded: "done_all"
  }
};
const Plugin = defineReactivePlugin({
  iconMapFn: null,
  __icons: {}
}, {
  set(setObject, ssrContext) {
    const def2 = __spreadProps(__spreadValues({}, setObject), { rtl: setObject.rtl === true });
    {
      def2.set = Plugin.set;
      Object.assign(Plugin.__icons, def2);
    }
  },
  install({ $q, iconSet, ssrContext }) {
    {
      if ($q.config.iconMapFn !== void 0) {
        this.iconMapFn = $q.config.iconMapFn;
      }
      $q.iconSet = this.__icons;
      injectProp($q, "iconMapFn", () => this.iconMapFn, (val) => {
        this.iconMapFn = val;
      });
      if (this.__installed === true) {
        iconSet !== void 0 && this.set(iconSet);
      } else {
        this.set(iconSet || materialIcons);
      }
    }
  }
});
const quasarKey = "_q_";
const formKey = "_q_fo_";
function isPlainObject(v) {
  return Object.prototype.toString.call(v) === "[object Object]";
}
const autoInstalledPlugins = [
  Platform,
  Body,
  Plugin$2,
  Screen,
  History,
  Plugin$1,
  Plugin
];
function createChildApp(appCfg, parentApp) {
  const app = createApp(appCfg);
  app.config.globalProperties = parentApp.config.globalProperties;
  const _a = parentApp._context, { reload } = _a, appContext = __objRest(_a, ["reload"]);
  Object.assign(app._context, appContext);
  return app;
}
function installPlugins(pluginOpts, pluginList) {
  pluginList.forEach((Plugin2) => {
    Plugin2.install(pluginOpts);
    Plugin2.__installed = true;
  });
}
function prepareApp(app, uiOpts, pluginOpts) {
  app.config.globalProperties.$q = pluginOpts.$q;
  app.provide(quasarKey, pluginOpts.$q);
  installPlugins(pluginOpts, autoInstalledPlugins);
  uiOpts.components !== void 0 && Object.values(uiOpts.components).forEach((c) => {
    if (isPlainObject(c) === true && c.name !== void 0) {
      app.component(c.name, c);
    }
  });
  uiOpts.directives !== void 0 && Object.values(uiOpts.directives).forEach((d) => {
    if (isPlainObject(d) === true && d.name !== void 0) {
      app.directive(d.name, d);
    }
  });
  uiOpts.plugins !== void 0 && installPlugins(pluginOpts, Object.values(uiOpts.plugins).filter((p2) => typeof p2.install === "function" && autoInstalledPlugins.includes(p2) === false));
  if (isRuntimeSsrPreHydration.value === true) {
    pluginOpts.$q.onSSRHydrated = () => {
      pluginOpts.onSSRHydrated.forEach((fn) => {
        fn();
      });
      pluginOpts.$q.onSSRHydrated = () => {
      };
    };
  }
}
var installQuasar = function(parentApp, opts = {}) {
  const $q = { version: "2.5.5" };
  if (globalConfigIsFrozen === false) {
    if (opts.config !== void 0) {
      Object.assign(globalConfig, opts.config);
    }
    $q.config = __spreadValues({}, globalConfig);
    freezeGlobalConfig();
  } else {
    $q.config = opts.config || {};
  }
  prepareApp(parentApp, opts, {
    parentApp,
    $q,
    lang: opts.lang,
    iconSet: opts.iconSet,
    onSSRHydrated: []
  });
};
let uid$1 = 0;
const defaults = {};
const groups = {};
const notificationsList = {};
const positionClass$1 = {};
const emptyRE = /^\s*$/;
const notifRefs = [];
const positionList = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top",
  "bottom",
  "left",
  "right",
  "center"
];
const badgePositions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right"
];
const notifTypes = {
  positive: {
    icon: ($q) => $q.iconSet.type.positive,
    color: "positive"
  },
  negative: {
    icon: ($q) => $q.iconSet.type.negative,
    color: "negative"
  },
  warning: {
    icon: ($q) => $q.iconSet.type.warning,
    color: "warning",
    textColor: "dark"
  },
  info: {
    icon: ($q) => $q.iconSet.type.info,
    color: "info"
  },
  ongoing: {
    group: false,
    timeout: 0,
    spinner: true,
    color: "grey-8"
  }
};
function addNotification(config, $q, originalApi) {
  if (!config) {
    return logError("parameter required");
  }
  let Api;
  const notif = { textColor: "white" };
  if (config.ignoreDefaults !== true) {
    Object.assign(notif, defaults);
  }
  if (isPlainObject(config) === false) {
    if (notif.type) {
      Object.assign(notif, notifTypes[notif.type]);
    }
    config = { message: config };
  }
  Object.assign(notif, notifTypes[config.type || notif.type], config);
  if (typeof notif.icon === "function") {
    notif.icon = notif.icon($q);
  }
  if (!notif.spinner) {
    notif.spinner = false;
  } else {
    if (notif.spinner === true) {
      notif.spinner = QSpinner;
    }
    notif.spinner = markRaw(notif.spinner);
  }
  notif.meta = {
    hasMedia: Boolean(notif.spinner !== false || notif.icon || notif.avatar),
    hasText: hasContent(notif.message) || hasContent(notif.caption)
  };
  if (notif.position) {
    if (positionList.includes(notif.position) === false) {
      return logError("wrong position", config);
    }
  } else {
    notif.position = "bottom";
  }
  if (notif.timeout === void 0) {
    notif.timeout = 5e3;
  } else {
    const t2 = parseInt(notif.timeout, 10);
    if (isNaN(t2) || t2 < 0) {
      return logError("wrong timeout", config);
    }
    notif.timeout = t2;
  }
  if (notif.timeout === 0) {
    notif.progress = false;
  } else if (notif.progress === true) {
    notif.meta.progressClass = "q-notification__progress" + (notif.progressClass ? ` ${notif.progressClass}` : "");
    notif.meta.progressStyle = {
      animationDuration: `${notif.timeout + 1e3}ms`
    };
  }
  const actions = (Array.isArray(config.actions) === true ? config.actions : []).concat(config.ignoreDefaults !== true && Array.isArray(defaults.actions) === true ? defaults.actions : []).concat(notifTypes[config.type] !== void 0 && Array.isArray(notifTypes[config.type].actions) === true ? notifTypes[config.type].actions : []);
  const { closeBtn } = notif;
  closeBtn && actions.push({
    label: typeof closeBtn === "string" ? closeBtn : $q.lang.label.close
  });
  notif.actions = actions.map((_a) => {
    var _b = _a, { handler, noDismiss } = _b, item = __objRest(_b, ["handler", "noDismiss"]);
    return __spreadProps(__spreadValues({
      flat: true
    }, item), {
      onClick: typeof handler === "function" ? () => {
        handler();
        noDismiss !== true && dismiss();
      } : () => {
        dismiss();
      }
    });
  });
  if (notif.multiLine === void 0) {
    notif.multiLine = notif.actions.length > 1;
  }
  Object.assign(notif.meta, {
    class: `q-notification row items-stretch q-notification--${notif.multiLine === true ? "multi-line" : "standard"}` + (notif.color !== void 0 ? ` bg-${notif.color}` : "") + (notif.textColor !== void 0 ? ` text-${notif.textColor}` : "") + (notif.classes !== void 0 ? ` ${notif.classes}` : ""),
    wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (notif.multiLine === true ? "column no-wrap justify-center" : "row items-center"),
    contentClass: "q-notification__content row items-center" + (notif.multiLine === true ? "" : " col"),
    leftClass: notif.meta.hasText === true ? "additional" : "single",
    attrs: __spreadValues({
      role: "alert"
    }, notif.attrs)
  });
  if (notif.group === false) {
    notif.group = void 0;
    notif.meta.group = void 0;
  } else {
    if (notif.group === void 0 || notif.group === true) {
      notif.group = [
        notif.message,
        notif.caption,
        notif.multiline
      ].concat(notif.actions.map((props2) => `${props2.label}*${props2.icon}`)).join("|");
    }
    notif.meta.group = notif.group + "|" + notif.position;
  }
  if (notif.actions.length === 0) {
    notif.actions = void 0;
  } else {
    notif.meta.actionsClass = "q-notification__actions row items-center " + (notif.multiLine === true ? "justify-end" : "col-auto") + (notif.meta.hasMedia === true ? " q-notification__actions--with-media" : "");
  }
  if (originalApi !== void 0) {
    clearTimeout(originalApi.notif.meta.timer);
    notif.meta.uid = originalApi.notif.meta.uid;
    const index = notificationsList[notif.position].value.indexOf(originalApi.notif);
    notificationsList[notif.position].value[index] = notif;
  } else {
    const original = groups[notif.meta.group];
    if (original === void 0) {
      notif.meta.uid = uid$1++;
      notif.meta.badge = 1;
      if (["left", "right", "center"].indexOf(notif.position) !== -1) {
        notificationsList[notif.position].value.splice(Math.floor(notificationsList[notif.position].value.length / 2), 0, notif);
      } else {
        const action = notif.position.indexOf("top") > -1 ? "unshift" : "push";
        notificationsList[notif.position].value[action](notif);
      }
      if (notif.group !== void 0) {
        groups[notif.meta.group] = notif;
      }
    } else {
      clearTimeout(original.meta.timer);
      if (notif.badgePosition !== void 0) {
        if (badgePositions.includes(notif.badgePosition) === false) {
          return logError("wrong badgePosition", config);
        }
      } else {
        notif.badgePosition = `top-${notif.position.indexOf("left") > -1 ? "right" : "left"}`;
      }
      notif.meta.uid = original.meta.uid;
      notif.meta.badge = original.meta.badge + 1;
      notif.meta.badgeClass = `q-notification__badge q-notification__badge--${notif.badgePosition}` + (notif.badgeColor !== void 0 ? ` bg-${notif.badgeColor}` : "") + (notif.badgeTextColor !== void 0 ? ` text-${notif.badgeTextColor}` : "") + (notif.badgeClass ? ` ${notif.badgeClass}` : "");
      const index = notificationsList[notif.position].value.indexOf(original);
      notificationsList[notif.position].value[index] = groups[notif.meta.group] = notif;
    }
  }
  const dismiss = () => {
    removeNotification(notif);
    Api = void 0;
  };
  if (notif.timeout > 0) {
    notif.meta.timer = setTimeout(() => {
      dismiss();
    }, notif.timeout + 1e3);
  }
  if (notif.group !== void 0) {
    return (props2) => {
      if (props2 !== void 0) {
        logError("trying to update a grouped one which is forbidden", config);
      } else {
        dismiss();
      }
    };
  }
  Api = {
    dismiss,
    config,
    notif
  };
  if (originalApi !== void 0) {
    Object.assign(originalApi, Api);
    return;
  }
  return (props2) => {
    if (Api !== void 0) {
      if (props2 === void 0) {
        Api.dismiss();
      } else {
        const newNotif = Object.assign({}, Api.config, props2, {
          group: false,
          position: notif.position
        });
        addNotification(newNotif, $q, Api);
      }
    }
  };
}
function removeNotification(notif) {
  clearTimeout(notif.meta.timer);
  const index = notificationsList[notif.position].value.indexOf(notif);
  if (index !== -1) {
    if (notif.group !== void 0) {
      delete groups[notif.meta.group];
    }
    const el = notifRefs["" + notif.meta.uid];
    if (el) {
      const { width, height } = getComputedStyle(el);
      el.style.left = `${el.offsetLeft}px`;
      el.style.width = width;
      el.style.height = height;
    }
    notificationsList[notif.position].value.splice(index, 1);
    if (typeof notif.onDismiss === "function") {
      notif.onDismiss();
    }
  }
}
function hasContent(str) {
  return str !== void 0 && str !== null && emptyRE.test(str) !== true;
}
function logError(error, config) {
  console.error(`Notify: ${error}`, config);
  return false;
}
function getComponent() {
  return createComponent({
    name: "QNotifications",
    devtools: { hide: true },
    setup() {
      return () => h("div", { class: "q-notifications" }, positionList.map((pos) => {
        return h(TransitionGroup, {
          key: pos,
          class: positionClass$1[pos],
          tag: "div",
          name: `q-notification--${pos}`
        }, () => notificationsList[pos].value.map((notif) => {
          const meta = notif.meta;
          const mainChild = [];
          if (meta.hasMedia === true) {
            if (notif.spinner !== false) {
              mainChild.push(h(notif.spinner, {
                class: "q-notification__spinner q-notification__spinner--" + meta.leftClass,
                color: notif.spinnerColor,
                size: notif.spinnerSize
              }));
            } else if (notif.icon) {
              mainChild.push(h(QIcon, {
                class: "q-notification__icon q-notification__icon--" + meta.leftClass,
                name: notif.icon,
                color: notif.iconColor,
                size: notif.iconSize,
                role: "img"
              }));
            } else if (notif.avatar) {
              mainChild.push(h(QAvatar, {
                class: "q-notification__avatar q-notification__avatar--" + meta.leftClass
              }, () => h("img", { src: notif.avatar, "aria-hidden": "true" })));
            }
          }
          if (meta.hasText === true) {
            let msgChild;
            const msgData = { class: "q-notification__message col" };
            if (notif.html === true) {
              msgData.innerHTML = notif.caption ? `<div>${notif.message}</div><div class="q-notification__caption">${notif.caption}</div>` : notif.message;
            } else {
              const msgNode = [notif.message];
              msgChild = notif.caption ? [
                h("div", msgNode),
                h("div", { class: "q-notification__caption" }, [notif.caption])
              ] : msgNode;
            }
            mainChild.push(h("div", msgData, msgChild));
          }
          const child = [
            h("div", { class: meta.contentClass }, mainChild)
          ];
          notif.progress === true && child.push(h("div", {
            key: `${meta.uid}|p|${meta.badge}`,
            class: meta.progressClass,
            style: meta.progressStyle
          }));
          notif.actions !== void 0 && child.push(h("div", {
            class: meta.actionsClass
          }, notif.actions.map((props2) => h(QBtn, props2))));
          meta.badge > 1 && child.push(h("div", {
            key: `${meta.uid}|${meta.badge}`,
            class: notif.meta.badgeClass,
            style: notif.badgeStyle
          }, [meta.badge]));
          return h("div", __spreadValues({
            ref: (el) => {
              notifRefs["" + meta.uid] = el;
            },
            key: meta.uid,
            class: meta.class
          }, meta.attrs), [
            h("div", { class: meta.wrapperClass }, child)
          ]);
        }));
      }));
    }
  });
}
var Notify = {
  setDefaults(opts) {
    {
      isPlainObject(opts) === true && Object.assign(defaults, opts);
    }
  },
  registerType(typeName, typeOpts) {
    if (isPlainObject(typeOpts) === true) {
      notifTypes[typeName] = typeOpts;
    }
  },
  install({ $q, parentApp }) {
    $q.notify = this.create = (opts) => addNotification(opts, $q);
    $q.notify.setDefaults = this.setDefaults;
    $q.notify.registerType = this.registerType;
    if ($q.config.notify !== void 0) {
      this.setDefaults($q.config.notify);
    }
    if (this.__installed !== true) {
      positionList.forEach((pos) => {
        notificationsList[pos] = ref([]);
        const vert = ["left", "center", "right"].includes(pos) === true ? "center" : pos.indexOf("top") > -1 ? "top" : "bottom", align = pos.indexOf("left") > -1 ? "start" : pos.indexOf("right") > -1 ? "end" : "center", classes = ["left", "right"].includes(pos) ? `items-${pos === "left" ? "start" : "end"} justify-center` : pos === "center" ? "flex-center" : `items-${align}`;
        positionClass$1[pos] = `q-notifications__list q-notifications__list--${vert} fixed column no-wrap ${classes}`;
      });
      const el = createGlobalNode("q-notify");
      createChildApp(getComponent(), parentApp).mount(el);
    }
  }
};
function useHistory(showing, hide, hideOnRouteChange) {
  let historyEntry;
  function removeFromHistory() {
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
  }
  onBeforeUnmount(() => {
    showing.value === true && removeFromHistory();
  });
  return {
    removeFromHistory,
    addToHistory() {
      historyEntry = {
        condition: () => hideOnRouteChange.value === true,
        handler: hide
      };
      History.add(historyEntry);
    }
  };
}
function useTimeout() {
  let timer;
  onBeforeUnmount(() => {
    clearTimeout(timer);
  });
  return {
    registerTimeout(fn, delay) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    },
    removeTimeout() {
      clearTimeout(timer);
    }
  };
}
function useTick() {
  let tickFn;
  onBeforeUnmount(() => {
    tickFn = void 0;
  });
  return {
    registerTick(fn) {
      tickFn = fn;
      nextTick(() => {
        if (tickFn === fn) {
          tickFn();
          tickFn = void 0;
        }
      });
    },
    removeTick() {
      tickFn = void 0;
    }
  };
}
const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
};
const useModelToggleEmits = [
  "before-show",
  "show",
  "before-hide",
  "hide"
];
function useModelToggle({
  showing,
  canShow,
  hideOnRouteChange,
  handleShow,
  handleHide,
  processOnMount
}) {
  const vm = getCurrentInstance();
  const { props: props2, emit, proxy } = vm;
  let payload;
  function toggle(evt) {
    if (showing.value === true) {
      hide(evt);
    } else {
      show(evt);
    }
  }
  function show(evt) {
    if (props2.disable === true || evt !== void 0 && evt.qAnchorHandled === true || canShow !== void 0 && canShow(evt) !== true) {
      return;
    }
    const listener = props2["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", true);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props2.modelValue === null || listener === false || false) {
      processShow(evt);
    }
  }
  function processShow(evt) {
    if (showing.value === true) {
      return;
    }
    showing.value = true;
    emit("before-show", evt);
    if (handleShow !== void 0) {
      handleShow(evt);
    } else {
      emit("show", evt);
    }
  }
  function hide(evt) {
    if (props2.disable === true) {
      return;
    }
    const listener = props2["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", false);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props2.modelValue === null || listener === false || false) {
      processHide(evt);
    }
  }
  function processHide(evt) {
    if (showing.value === false) {
      return;
    }
    showing.value = false;
    emit("before-hide", evt);
    if (handleHide !== void 0) {
      handleHide(evt);
    } else {
      emit("hide", evt);
    }
  }
  function processModelChange(val) {
    if (props2.disable === true && val === true) {
      if (props2["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", false);
      }
    } else if (val === true !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
  }
  watch(() => props2.modelValue, processModelChange);
  if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
    watch(() => proxy.$route.fullPath, () => {
      if (hideOnRouteChange.value === true && showing.value === true) {
        hide();
      }
    });
  }
  processOnMount === true && onMounted(() => {
    processModelChange(props2.modelValue);
  });
  const publicMethods = { show, hide, toggle };
  Object.assign(proxy, publicMethods);
  return publicMethods;
}
const useTransitionProps = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function useTransition(props2, showing) {
  const transitionState = ref(showing.value);
  watch(showing, (val) => {
    nextTick(() => {
      transitionState.value = val;
    });
  });
  return {
    transition: computed(() => "q-transition--" + (transitionState.value === true ? props2.transitionHide : props2.transitionShow)),
    transitionStyle: computed(() => `--q-transition-duration: ${props2.transitionDuration}ms`)
  };
}
let queue = [];
let waitFlags = [];
function clearFlag(flag) {
  waitFlags = waitFlags.filter((entry) => entry !== flag);
}
function addFocusWaitFlag(flag) {
  clearFlag(flag);
  waitFlags.push(flag);
}
function removeFocusWaitFlag(flag) {
  clearFlag(flag);
  if (waitFlags.length === 0 && queue.length > 0) {
    queue[queue.length - 1]();
    queue = [];
  }
}
function addFocusFn(fn) {
  if (waitFlags.length === 0) {
    fn();
  } else {
    queue.push(fn);
  }
}
function removeFocusFn(fn) {
  queue = queue.filter((entry) => entry !== fn);
}
const portalList = [];
function getPortalVm(el) {
  return portalList.find((vm) => vm.__qPortalInnerRef.value !== null && vm.__qPortalInnerRef.value.contains(el));
}
function closePortalMenus(vm, evt) {
  do {
    if (vm.$options.name === "QMenu") {
      vm.hide(evt);
      if (vm.$props.separateClosePopup === true) {
        return getParentVm(vm);
      }
    } else if (vm.__qPortalInnerRef !== void 0) {
      const parent = getParentVm(vm);
      if (parent !== void 0 && parent.$options.name === "QPopupProxy") {
        vm.hide(evt);
        return parent;
      } else {
        return vm;
      }
    }
    vm = getParentVm(vm);
  } while (vm !== void 0 && vm !== null);
}
function closePortals(vm, evt, depth) {
  while (depth !== 0 && vm !== void 0 && vm !== null) {
    if (vm.__qPortalInnerRef !== void 0) {
      depth--;
      if (vm.$options.name === "QMenu") {
        vm = closePortalMenus(vm, evt);
        continue;
      }
      vm.hide(evt);
    }
    vm = getParentVm(vm);
  }
}
function isOnGlobalDialog(vm) {
  vm = vm.parent;
  while (vm !== void 0 && vm !== null) {
    if (vm.type.name === "QGlobalDialog") {
      return true;
    }
    if (vm.type.name === "QDialog" || vm.type.name === "QMenu") {
      return false;
    }
    vm = vm.parent;
  }
  return false;
}
function usePortal(vm, innerRef, renderPortalContent, checkGlobalDialog) {
  const portalIsActive = ref(false);
  let portalEl = null;
  const focusObj = {};
  const onGlobalDialog = checkGlobalDialog === true && isOnGlobalDialog(vm);
  function showPortal(isReady) {
    if (isReady === true) {
      removeFocusWaitFlag(focusObj);
      return;
    }
    if (portalIsActive.value === false) {
      if (onGlobalDialog === false && portalEl === null) {
        portalEl = createGlobalNode();
      }
      portalIsActive.value = true;
      portalList.push(vm.proxy);
      addFocusWaitFlag(focusObj);
    }
  }
  function hidePortal() {
    removeFocusWaitFlag(focusObj);
    portalIsActive.value = false;
    const index = portalList.indexOf(vm.proxy);
    if (index > -1) {
      portalList.splice(index, 1);
    }
    if (portalEl !== null) {
      removeGlobalNode(portalEl);
      portalEl = null;
    }
  }
  onUnmounted(hidePortal);
  Object.assign(vm.proxy, { __qPortalInnerRef: innerRef });
  return {
    showPortal,
    hidePortal,
    portalIsActive,
    renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, renderPortalContent())] : void 0
  };
}
const scrollTargets = [null, document, document.body, document.scrollingElement, document.documentElement];
function getScrollTarget(el, targetEl) {
  let target2 = getElement(targetEl);
  if (target2 === void 0) {
    if (el === void 0 || el === null) {
      return window;
    }
    target2 = el.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return scrollTargets.includes(target2) ? window : target2;
}
function getVerticalScrollPosition(scrollTarget) {
  return scrollTarget === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
  return scrollTarget === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : scrollTarget.scrollLeft;
}
let size;
function getScrollbarWidth() {
  if (size !== void 0) {
    return size;
  }
  const inner = document.createElement("p"), outer = document.createElement("div");
  css(inner, {
    width: "100%",
    height: "200px"
  });
  css(outer, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w2 = inner.offsetWidth;
  if (w1 === w2) {
    w2 = outer.clientWidth;
  }
  outer.remove();
  size = w1 - w2;
  return size;
}
function hasScrollbar(el, onY = true) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  return onY ? el.scrollHeight > el.clientHeight && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-y"])) : el.scrollWidth > el.clientWidth && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-x"]));
}
let registered = 0, scrollPositionX, scrollPositionY, maxScrollTop, vpPendingUpdate = false, bodyLeft, bodyTop, closeTimer;
function onWheel(e2) {
  if (shouldPreventScroll(e2)) {
    stopAndPrevent(e2);
  }
}
function shouldPreventScroll(e2) {
  if (e2.target === document.body || e2.target.classList.contains("q-layout__backdrop")) {
    return true;
  }
  const path = getEventPath(e2), shift = e2.shiftKey && !e2.deltaX, scrollY = !shift && Math.abs(e2.deltaX) <= Math.abs(e2.deltaY), delta = shift || scrollY ? e2.deltaY : e2.deltaX;
  for (let index = 0; index < path.length; index++) {
    const el = path[index];
    if (hasScrollbar(el, scrollY)) {
      return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
    }
  }
  return true;
}
function onAppleScroll(e2) {
  if (e2.target === document) {
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
  }
}
function onAppleResize(evt) {
  if (vpPendingUpdate === true) {
    return;
  }
  vpPendingUpdate = true;
  requestAnimationFrame(() => {
    vpPendingUpdate = false;
    const { height } = evt.target, { clientHeight, scrollTop } = document.scrollingElement;
    if (maxScrollTop === void 0 || height !== window.innerHeight) {
      maxScrollTop = clientHeight - height;
      document.scrollingElement.scrollTop = scrollTop;
    }
    if (scrollTop > maxScrollTop) {
      document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
    }
  });
}
function apply(action) {
  const body = document.body, hasViewport = window.visualViewport !== void 0;
  if (action === "add") {
    const { overflowY, overflowX } = window.getComputedStyle(body);
    scrollPositionX = getHorizontalScrollPosition(window);
    scrollPositionY = getVerticalScrollPosition(window);
    bodyLeft = body.style.left;
    bodyTop = body.style.top;
    body.style.left = `-${scrollPositionX}px`;
    body.style.top = `-${scrollPositionY}px`;
    if (overflowX !== "hidden" && (overflowX === "scroll" || body.scrollWidth > window.innerWidth)) {
      body.classList.add("q-body--force-scrollbar-x");
    }
    if (overflowY !== "hidden" && (overflowY === "scroll" || body.scrollHeight > window.innerHeight)) {
      body.classList.add("q-body--force-scrollbar-y");
    }
    body.classList.add("q-body--prevent-scroll");
    document.qScrollPrevented = true;
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
        window.scrollTo(0, 0);
      } else {
        window.addEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
  }
  if (client.is.desktop === true && client.is.mac === true) {
    window[`${action}EventListener`]("wheel", onWheel, listenOpts.notPassive);
  }
  if (action === "remove") {
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.visualViewport.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
      } else {
        window.removeEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
    body.classList.remove("q-body--prevent-scroll");
    body.classList.remove("q-body--force-scrollbar-x");
    body.classList.remove("q-body--force-scrollbar-y");
    document.qScrollPrevented = false;
    body.style.left = bodyLeft;
    body.style.top = bodyTop;
    window.scrollTo(scrollPositionX, scrollPositionY);
    maxScrollTop = void 0;
  }
}
function preventScroll(state) {
  let action = "add";
  if (state === true) {
    registered++;
    if (closeTimer !== void 0) {
      clearTimeout(closeTimer);
      closeTimer = void 0;
      return;
    }
    if (registered > 1) {
      return;
    }
  } else {
    if (registered === 0) {
      return;
    }
    registered--;
    if (registered > 0) {
      return;
    }
    action = "remove";
    if (client.is.ios === true && client.is.nativeMobile === true) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        apply(action);
        closeTimer = void 0;
      }, 100);
      return;
    }
  }
  apply(action);
}
function usePreventScroll() {
  let currentState;
  return {
    preventBodyScroll(state) {
      if (state !== currentState && (currentState !== void 0 || state === true)) {
        currentState = state;
        preventScroll(state);
      }
    }
  };
}
const handlers$1 = [];
let escDown;
function onKeydown(evt) {
  escDown = evt.keyCode === 27;
}
function onBlur() {
  if (escDown === true) {
    escDown = false;
  }
}
function onKeyup(evt) {
  if (escDown === true) {
    escDown = false;
    if (isKeyCode(evt, 27) === true) {
      handlers$1[handlers$1.length - 1](evt);
    }
  }
}
function update(action) {
  window[action]("keydown", onKeydown);
  window[action]("blur", onBlur);
  window[action]("keyup", onKeyup);
  escDown = false;
}
function addEscapeKey(fn) {
  if (client.is.desktop === true) {
    handlers$1.push(fn);
    if (handlers$1.length === 1) {
      update("addEventListener");
    }
  }
}
function removeEscapeKey(fn) {
  const index = handlers$1.indexOf(fn);
  if (index > -1) {
    handlers$1.splice(index, 1);
    if (handlers$1.length === 0) {
      update("removeEventListener");
    }
  }
}
const handlers = [];
function trigger(e2) {
  handlers[handlers.length - 1](e2);
}
function addFocusout(fn) {
  if (client.is.desktop === true) {
    handlers.push(fn);
    if (handlers.length === 1) {
      document.body.addEventListener("focusin", trigger);
    }
  }
}
function removeFocusout(fn) {
  const index = handlers.indexOf(fn);
  if (index > -1) {
    handlers.splice(index, 1);
    if (handlers.length === 0) {
      document.body.removeEventListener("focusin", trigger);
    }
  }
}
let maximizedModals = 0;
const positionClass = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
};
const transitions = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
};
var QDialog = createComponent({
  name: "QDialog",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues(__spreadValues({}, useModelToggleProps), useTransitionProps), {
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (val) => val === "standard" || ["top", "bottom", "left", "right"].includes(val)
    }
  }),
  emits: [
    ...useModelToggleEmits,
    "shake",
    "click",
    "escape-key"
  ],
  setup(props2, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const innerRef = ref(null);
    const showing = ref(false);
    const transitionState = ref(false);
    const animating = ref(false);
    let shakeTimeout, refocusTarget = null, isMaximized, avoidAutoClose;
    const hideOnRouteChange = computed(() => props2.persistent !== true && props2.noRouteDismiss !== true && props2.seamless !== true);
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout, removeTimeout } = useTimeout();
    const { registerTick, removeTick } = useTick();
    const { showPortal, hidePortal, portalIsActive, renderPortal } = usePortal(vm, innerRef, renderPortalContent, true);
    const { hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide,
      processOnMount: true
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const classes = computed(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props2.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props2.position} ${positionClass[props2.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props2.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props2.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props2.square === true ? " q-dialog__inner--square" : ""));
    const transitionShow = computed(() => "q-transition--" + (props2.transitionShow === void 0 ? transitions[props2.position][0] : props2.transitionShow));
    const transitionHide = computed(() => "q-transition--" + (props2.transitionHide === void 0 ? transitions[props2.position][1] : props2.transitionHide));
    const transition = computed(() => transitionState.value === true ? transitionHide.value : transitionShow.value);
    const transitionStyle = computed(() => `--q-transition-duration: ${props2.transitionDuration}ms`);
    const useBackdrop = computed(() => showing.value === true && props2.seamless !== true);
    const onEvents = computed(() => props2.autoClose === true ? { onClick: onAutoClose } : {});
    const rootClasses = computed(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
      attrs.class
    ]);
    watch(showing, (val) => {
      nextTick(() => {
        transitionState.value = val;
      });
    });
    watch(() => props2.maximized, (state) => {
      showing.value === true && updateMaximized(state);
    });
    watch(useBackdrop, (val) => {
      preventBodyScroll(val);
      if (val === true) {
        addFocusout(onFocusChange);
        addEscapeKey(onEscapeKey);
      } else {
        removeFocusout(onFocusChange);
        removeEscapeKey(onEscapeKey);
      }
    });
    function handleShow(evt) {
      removeTimeout();
      removeTick();
      addToHistory();
      refocusTarget = props2.noRefocus === false && document.activeElement !== null ? document.activeElement : null;
      updateMaximized(props2.maximized);
      showPortal();
      animating.value = true;
      if (props2.noFocus !== true) {
        document.activeElement !== null && document.activeElement.blur();
        registerTick(focus);
      }
      registerTimeout(() => {
        if (vm.proxy.$q.platform.is.ios === true) {
          if (props2.seamless !== true && document.activeElement) {
            const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height = window.visualViewport !== void 0 ? window.visualViewport.height : innerHeight;
            if (top > 0 && bottom > height / 2) {
              document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - height, bottom >= innerHeight ? Infinity : Math.ceil(document.scrollingElement.scrollTop + bottom - height / 2));
            }
            document.activeElement.scrollIntoView();
          }
          avoidAutoClose = true;
          innerRef.value.click();
          avoidAutoClose = false;
        }
        showPortal(true);
        animating.value = false;
        emit("show", evt);
      }, props2.transitionDuration);
    }
    function handleHide(evt) {
      removeTimeout();
      removeTick();
      removeFromHistory();
      cleanup(true);
      animating.value = true;
      if (refocusTarget !== null) {
        refocusTarget.focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal();
        animating.value = false;
        emit("hide", evt);
      }, props2.transitionDuration);
    }
    function focus() {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node === null || node.contains(document.activeElement) === true) {
          return;
        }
        node = node.querySelector("[autofocus], [data-autofocus]") || node;
        node.focus({ preventScroll: true });
      });
    }
    function shake() {
      focus();
      emit("shake");
      const node = innerRef.value;
      if (node !== null) {
        node.classList.remove("q-animate--scale");
        node.classList.add("q-animate--scale");
        clearTimeout(shakeTimeout);
        shakeTimeout = setTimeout(() => {
          if (innerRef.value !== null) {
            node.classList.remove("q-animate--scale");
            focus();
          }
        }, 170);
      }
    }
    function onEscapeKey() {
      if (props2.seamless !== true) {
        if (props2.persistent === true || props2.noEscDismiss === true) {
          props2.maximized !== true && props2.noShake !== true && shake();
        } else {
          emit("escape-key");
          hide();
        }
      }
    }
    function cleanup(hiding) {
      clearTimeout(shakeTimeout);
      if (hiding === true || showing.value === true) {
        updateMaximized(false);
        if (props2.seamless !== true) {
          preventBodyScroll(false);
          removeFocusout(onFocusChange);
          removeEscapeKey(onEscapeKey);
        }
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function updateMaximized(active) {
      if (active === true) {
        if (isMaximized !== true) {
          maximizedModals < 1 && document.body.classList.add("q-body--dialog");
          maximizedModals++;
          isMaximized = true;
        }
      } else if (isMaximized === true) {
        if (maximizedModals < 2) {
          document.body.classList.remove("q-body--dialog");
        }
        maximizedModals--;
        isMaximized = false;
      }
    }
    function onAutoClose(e2) {
      if (avoidAutoClose !== true) {
        hide(e2);
        emit("click", e2);
      }
    }
    function onBackdropClick(e2) {
      if (props2.persistent !== true && props2.noBackdropDismiss !== true) {
        hide(e2);
      } else if (props2.noShake !== true) {
        shake();
      }
    }
    function onFocusChange(evt) {
      if (showing.value === true && portalIsActive.value === true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus();
      }
    }
    Object.assign(vm.proxy, {
      focus,
      shake,
      __updateRefocusTarget(target2) {
        refocusTarget = target2 || null;
      }
    });
    onBeforeUnmount(cleanup);
    function renderPortalContent() {
      return h("div", __spreadProps(__spreadValues({}, attrs), {
        class: rootClasses.value
      }), [
        h(Transition, {
          name: "q-transition--fade",
          appear: true
        }, () => useBackdrop.value === true ? h("div", {
          class: "q-dialog__backdrop fixed-full",
          style: transitionStyle.value,
          "aria-hidden": "true",
          onMousedown: onBackdropClick
        }) : null),
        h(Transition, { name: transition.value, appear: true }, () => showing.value === true ? h("div", __spreadValues({
          ref: innerRef,
          class: classes.value,
          style: transitionStyle.value,
          tabindex: -1
        }, onEvents.value), hSlot(slots.default)) : null)
      ]);
    }
    return renderPortal;
  }
});
const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props2, $q) {
  return computed(() => props2.dark === null ? $q.dark.isActive : props2.dark);
}
var QCard = createComponent({
  name: "QCard",
  props: __spreadProps(__spreadValues({}, useDarkProps), {
    tag: {
      type: String,
      default: "div"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  }),
  setup(props2, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props2, vm.proxy.$q);
    const classes = computed(() => "q-card" + (isDark.value === true ? " q-card--dark q-dark" : "") + (props2.bordered === true ? " q-card--bordered" : "") + (props2.square === true ? " q-card--square no-border-radius" : "") + (props2.flat === true ? " q-card--flat no-shadow" : ""));
    return () => h(props2.tag, { class: classes.value }, hSlot(slots.default));
  }
});
var QCardSection = createComponent({
  name: "QCardSection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    horizontal: Boolean
  },
  setup(props2, { slots }) {
    const classes = computed(() => `q-card__section q-card__section--${props2.horizontal === true ? "horiz row no-wrap" : "vert"}`);
    return () => h(props2.tag, { class: classes.value }, hSlot(slots.default));
  }
});
var QCardActions = createComponent({
  name: "QCardActions",
  props: __spreadProps(__spreadValues({}, useAlignProps), {
    vertical: Boolean
  }),
  setup(props2, { slots }) {
    const alignClass = useAlign(props2);
    const classes = computed(() => `q-card__actions ${alignClass.value} q-card__actions--${props2.vertical === true ? "vert column" : "horiz row"}`);
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const insetMap = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
};
const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};
var QSeparator = createComponent({
  name: "QSeparator",
  props: __spreadProps(__spreadValues({}, useDarkProps), {
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  }),
  setup(props2) {
    const vm = getCurrentInstance();
    const isDark = useDark(props2, vm.proxy.$q);
    const orientation = computed(() => props2.vertical === true ? "vertical" : "horizontal");
    const orientClass = computed(() => ` q-separator--${orientation.value}`);
    const insetClass = computed(() => props2.inset !== false ? `${orientClass.value}-${insetMap[props2.inset]}` : "");
    const classes = computed(() => `q-separator${orientClass.value}${insetClass.value}` + (props2.color !== void 0 ? ` bg-${props2.color}` : "") + (isDark.value === true ? " q-separator--dark" : ""));
    const style = computed(() => {
      const acc = {};
      if (props2.size !== void 0) {
        acc[props2.vertical === true ? "width" : "height"] = props2.size;
      }
      if (props2.spaced !== false) {
        const size2 = props2.spaced === true ? `${margins.md}px` : props2.spaced in margins ? `${margins[props2.spaced]}px` : props2.spaced;
        const dir = props2.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size2;
      }
      return acc;
    });
    return () => h("hr", {
      class: classes.value,
      style: style.value,
      "aria-orientation": orientation.value
    });
  }
});
function useFormChild({ validate, resetValidation, requiresQForm }) {
  const $form = inject(formKey, false);
  if ($form !== false) {
    const { props: props2, proxy } = getCurrentInstance();
    Object.assign(proxy, { validate, resetValidation });
    watch(() => props2.disable, (val) => {
      if (val === true) {
        typeof resetValidation === "function" && resetValidation();
        $form.unbindComponent(proxy);
      } else {
        $form.bindComponent(proxy);
      }
    });
    props2.disable !== true && $form.bindComponent(proxy);
    onBeforeUnmount(() => {
      props2.disable !== true && $form.unbindComponent(proxy);
    });
  } else if (requiresQForm === true) {
    console.error("Parent QForm not found on useFormChild()!");
  }
}
const hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
const testPattern = {
  date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
  time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
  fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
  timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
  hexColor: (v) => hex.test(v),
  hexaColor: (v) => hexa.test(v),
  hexOrHexaColor: (v) => hexOrHexa.test(v),
  rgbColor: (v) => rgb.test(v),
  rgbaColor: (v) => rgba.test(v),
  rgbOrRgbaColor: (v) => rgb.test(v) || rgba.test(v),
  hexOrRgbColor: (v) => hex.test(v) || rgb.test(v),
  hexaOrRgbaColor: (v) => hexa.test(v) || rgba.test(v),
  anyColor: (v) => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
};
const useCircularCommonProps = __spreadProps(__spreadValues({}, useSizeProps), {
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  thickness: {
    type: Number,
    default: 0.2,
    validator: (v) => v >= 0 && v <= 1
  },
  angle: {
    type: Number,
    default: 0
  },
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean
});
function between(v, min, max) {
  return max <= min ? min : Math.min(max, Math.max(min, v));
}
const radius = 50, diameter = 2 * radius, circumference = diameter * Math.PI, strokeDashArray = Math.round(circumference * 1e3) / 1e3;
createComponent({
  name: "QCircularProgress",
  props: __spreadProps(__spreadValues({}, useCircularCommonProps), {
    value: {
      type: Number,
      default: 0
    },
    animationSpeed: {
      type: [String, Number],
      default: 600
    },
    indeterminate: Boolean
  }),
  setup(props2, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props2);
    const svgStyle = computed(() => {
      const angle = ($q.lang.rtl === true ? -1 : 1) * props2.angle;
      return {
        transform: props2.reverse !== ($q.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - angle}deg)` : `rotate3d(0, 0, 1, ${angle - 90}deg)`
      };
    });
    const circleStyle = computed(() => props2.instantFeedback !== true && props2.indeterminate !== true ? { transition: `stroke-dashoffset ${props2.animationSpeed}ms ease 0s, stroke ${props2.animationSpeed}ms ease` } : "");
    const viewBox = computed(() => diameter / (1 - props2.thickness / 2));
    const viewBoxAttr = computed(() => `${viewBox.value / 2} ${viewBox.value / 2} ${viewBox.value} ${viewBox.value}`);
    const normalized = computed(() => between(props2.value, props2.min, props2.max));
    const strokeDashOffset = computed(() => circumference * (1 - (normalized.value - props2.min) / (props2.max - props2.min)));
    const strokeWidth = computed(() => props2.thickness / 2 * viewBox.value);
    function getCircle({ thickness, offset, color, cls }) {
      return h("circle", {
        class: "q-circular-progress__" + cls + (color !== void 0 ? ` text-${color}` : ""),
        style: circleStyle.value,
        fill: "transparent",
        stroke: "currentColor",
        "stroke-width": thickness,
        "stroke-dasharray": strokeDashArray,
        "stroke-dashoffset": offset,
        cx: viewBox.value,
        cy: viewBox.value,
        r: radius
      });
    }
    return () => {
      const svgChild = [];
      props2.centerColor !== void 0 && props2.centerColor !== "transparent" && svgChild.push(h("circle", {
        class: `q-circular-progress__center text-${props2.centerColor}`,
        fill: "currentColor",
        r: radius - strokeWidth.value / 2,
        cx: viewBox.value,
        cy: viewBox.value
      }));
      props2.trackColor !== void 0 && props2.trackColor !== "transparent" && svgChild.push(getCircle({
        cls: "track",
        thickness: strokeWidth.value,
        offset: 0,
        color: props2.trackColor
      }));
      svgChild.push(getCircle({
        cls: "circle",
        thickness: strokeWidth.value,
        offset: strokeDashOffset.value,
        color: props2.color
      }));
      const child = [
        h("svg", {
          class: "q-circular-progress__svg",
          style: svgStyle.value,
          viewBox: viewBoxAttr.value,
          "aria-hidden": "true"
        }, svgChild)
      ];
      props2.showValue === true && child.push(h("div", {
        class: "q-circular-progress__text absolute-full row flex-center content-center",
        style: { fontSize: props2.fontSize }
      }, slots.default !== void 0 ? slots.default() : [h("div", normalized.value)]));
      return h("div", {
        class: `q-circular-progress q-circular-progress--${props2.indeterminate === true ? "in" : ""}determinate`,
        style: sizeStyle.value,
        role: "progressbar",
        "aria-valuemin": props2.min,
        "aria-valuemax": props2.max,
        "aria-valuenow": props2.indeterminate === true ? void 0 : normalized.value
      }, hMergeSlotSafely(slots.internal, child));
    };
  }
});
const useFileEmits = ["rejected"];
const coreEmits = [
  ...useFileEmits,
  "start",
  "finish",
  "added",
  "removed"
];
const trueFn = () => true;
function getEmitsObject(emitsArray) {
  const emitsObject = {};
  emitsArray.forEach((val) => {
    emitsObject[val] = trueFn;
  });
  return emitsObject;
}
getEmitsObject(coreEmits);
let buf, bufIdx = 0;
const hexBytes = new Array(256);
for (let i2 = 0; i2 < 256; i2++) {
  hexBytes[i2] = (i2 + 256).toString(16).substr(1);
}
const randomBytes = (() => {
  const lib = typeof crypto !== "undefined" ? crypto : typeof window !== "undefined" ? window.crypto || window.msCrypto : void 0;
  if (lib !== void 0) {
    if (lib.randomBytes !== void 0) {
      return lib.randomBytes;
    }
    if (lib.getRandomValues !== void 0) {
      return (n2) => {
        const bytes = new Uint8Array(n2);
        lib.getRandomValues(bytes);
        return bytes;
      };
    }
  }
  return (n2) => {
    const r2 = [];
    for (let i2 = n2; i2 > 0; i2--) {
      r2.push(Math.floor(Math.random() * 256));
    }
    return r2;
  };
})();
const BUFFER_SIZE = 4096;
function uid() {
  if (buf === void 0 || bufIdx + 16 > BUFFER_SIZE) {
    bufIdx = 0;
    buf = randomBytes(BUFFER_SIZE);
  }
  const b = Array.prototype.slice.call(buf, bufIdx, bufIdx += 16);
  b[6] = b[6] & 15 | 64;
  b[8] = b[8] & 63 | 128;
  return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + "-" + hexBytes[b[4]] + hexBytes[b[5]] + "-" + hexBytes[b[6]] + hexBytes[b[7]] + "-" + hexBytes[b[8]] + hexBytes[b[9]] + "-" + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
}
const lazyRulesValues = [true, false, "ondemand"];
const useValidateProps = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    validator: (v) => lazyRulesValues.includes(v)
  }
};
function useValidate(focused, innerLoading) {
  const { props: props2, proxy } = getCurrentInstance();
  const innerError = ref(false);
  const innerErrorMessage = ref(null);
  const isDirtyModel = ref(null);
  useFormChild({ validate, resetValidation });
  let validateIndex = 0, unwatchRules;
  const hasRules = computed(() => props2.rules !== void 0 && props2.rules !== null && props2.rules.length > 0);
  const hasActiveRules = computed(() => props2.disable !== true && hasRules.value === true);
  const hasError = computed(() => props2.error === true || innerError.value === true);
  const errorMessage = computed(() => typeof props2.errorMessage === "string" && props2.errorMessage.length > 0 ? props2.errorMessage : innerErrorMessage.value);
  watch(() => props2.modelValue, () => {
    validateIfNeeded();
  });
  watch(() => props2.reactiveRules, (val) => {
    if (val === true) {
      if (unwatchRules === void 0) {
        unwatchRules = watch(() => props2.rules, () => {
          validateIfNeeded(true);
        });
      }
    } else if (unwatchRules !== void 0) {
      unwatchRules();
      unwatchRules = void 0;
    }
  }, { immediate: true });
  watch(focused, (val) => {
    if (val === true) {
      if (isDirtyModel.value === null) {
        isDirtyModel.value = false;
      }
    } else if (isDirtyModel.value === false) {
      isDirtyModel.value = true;
      if (hasActiveRules.value === true && props2.lazyRules !== "ondemand" && innerLoading.value === false) {
        debouncedValidate();
      }
    }
  });
  function resetValidation() {
    validateIndex++;
    innerLoading.value = false;
    isDirtyModel.value = null;
    innerError.value = false;
    innerErrorMessage.value = null;
    debouncedValidate.cancel();
  }
  function validate(val = props2.modelValue) {
    if (hasActiveRules.value !== true) {
      return true;
    }
    const index = ++validateIndex;
    if (innerLoading.value !== true && props2.lazyRules !== true) {
      isDirtyModel.value = true;
    }
    const update2 = (err, msg) => {
      if (innerError.value !== err) {
        innerError.value = err;
      }
      const m = msg || void 0;
      if (innerErrorMessage.value !== m) {
        innerErrorMessage.value = m;
      }
      innerLoading.value = false;
    };
    const promises = [];
    for (let i2 = 0; i2 < props2.rules.length; i2++) {
      const rule = props2.rules[i2];
      let res;
      if (typeof rule === "function") {
        res = rule(val);
      } else if (typeof rule === "string" && testPattern[rule] !== void 0) {
        res = testPattern[rule](val);
      }
      if (res === false || typeof res === "string") {
        update2(true, res);
        return false;
      } else if (res !== true && res !== void 0) {
        promises.push(res);
      }
    }
    if (promises.length === 0) {
      update2(false);
      return true;
    }
    innerLoading.value = true;
    return Promise.all(promises).then((res) => {
      if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
        index === validateIndex && update2(false);
        return true;
      }
      const msg = res.find((r2) => r2 === false || typeof r2 === "string");
      index === validateIndex && update2(msg !== void 0, msg);
      return msg === void 0;
    }, (e2) => {
      if (index === validateIndex) {
        console.error(e2);
        update2(true);
      }
      return false;
    });
  }
  function validateIfNeeded(changedRules) {
    if (hasActiveRules.value === true && props2.lazyRules !== "ondemand" && (isDirtyModel.value === true || props2.lazyRules !== true && changedRules !== true)) {
      debouncedValidate();
    }
  }
  const debouncedValidate = debounce(validate, 0);
  onBeforeUnmount(() => {
    unwatchRules !== void 0 && unwatchRules();
    debouncedValidate.cancel();
  });
  Object.assign(proxy, { resetValidation, validate });
  injectProp(proxy, "hasError", () => hasError.value);
  return {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    validate,
    resetValidation
  };
}
const listenerRE = /^on[A-Z]/;
function useSplitAttrs(attrs, vnode) {
  const acc = {
    listeners: ref({}),
    attributes: ref({})
  };
  function update2() {
    const attributes = {};
    const listeners = {};
    for (const key in attrs) {
      if (key !== "class" && key !== "style" && listenerRE.test(key) === false) {
        attributes[key] = attrs[key];
      }
    }
    for (const key in vnode.props) {
      if (listenerRE.test(key) === true) {
        listeners[key] = vnode.props[key];
      }
    }
    acc.attributes.value = attributes;
    acc.listeners.value = listeners;
  }
  onBeforeUpdate(update2);
  update2();
  return acc;
}
function getTargetUid(val) {
  return val === void 0 ? `f_${uid()}` : val;
}
function fieldValueIsFilled(val) {
  return val !== void 0 && val !== null && ("" + val).length > 0;
}
const useFieldProps = __spreadProps(__spreadValues(__spreadValues({}, useDarkProps), useValidateProps), {
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String,
  maxlength: [Number, String]
});
const useFieldEmits = ["update:modelValue", "clear", "focus", "blur", "popup-show", "popup-hide"];
function useFieldState() {
  const { props: props2, attrs, proxy, vnode } = getCurrentInstance();
  const isDark = useDark(props2, proxy.$q);
  return {
    isDark,
    editable: computed(() => props2.disable !== true && props2.readonly !== true),
    innerLoading: ref(false),
    focused: ref(false),
    hasPopupOpen: false,
    splitAttrs: useSplitAttrs(attrs, vnode),
    targetUid: ref(getTargetUid(props2.for)),
    rootRef: ref(null),
    targetRef: ref(null),
    controlRef: ref(null)
  };
}
function useField(state) {
  const { props: props2, emit, slots, attrs, proxy } = getCurrentInstance();
  const { $q } = proxy;
  let focusoutTimer;
  if (state.hasValue === void 0) {
    state.hasValue = computed(() => fieldValueIsFilled(props2.modelValue));
  }
  if (state.emitValue === void 0) {
    state.emitValue = (value) => {
      emit("update:modelValue", value);
    };
  }
  if (state.controlEvents === void 0) {
    state.controlEvents = {
      onFocusin: onControlFocusin,
      onFocusout: onControlFocusout
    };
  }
  Object.assign(state, {
    clearValue,
    onControlFocusin,
    onControlFocusout,
    focus
  });
  if (state.computedCounter === void 0) {
    state.computedCounter = computed(() => {
      if (props2.counter !== false) {
        const len = typeof props2.modelValue === "string" || typeof props2.modelValue === "number" ? ("" + props2.modelValue).length : Array.isArray(props2.modelValue) === true ? props2.modelValue.length : 0;
        const max = props2.maxlength !== void 0 ? props2.maxlength : props2.maxValues;
        return len + (max !== void 0 ? " / " + max : "");
      }
    });
  }
  const {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    resetValidation
  } = useValidate(state.focused, state.innerLoading);
  const floatingLabel = state.floatingLabel !== void 0 ? computed(() => props2.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : computed(() => props2.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
  const shouldRenderBottom = computed(() => props2.bottomSlots === true || props2.hint !== void 0 || hasRules.value === true || props2.counter === true || props2.error !== null);
  const styleType = computed(() => {
    if (props2.filled === true) {
      return "filled";
    }
    if (props2.outlined === true) {
      return "outlined";
    }
    if (props2.borderless === true) {
      return "borderless";
    }
    if (props2.standout) {
      return "standout";
    }
    return "standard";
  });
  const classes = computed(() => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props2.rounded === true ? " q-field--rounded" : "") + (props2.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props2.dense === true ? " q-field--dense" : "") + (props2.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props2.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props2.disable === true ? " q-field--disabled" : props2.readonly === true ? " q-field--readonly" : ""));
  const contentClass = computed(() => "q-field__control relative-position row no-wrap" + (props2.bgColor !== void 0 ? ` bg-${props2.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props2.standout === "string" && props2.standout.length > 0 && state.focused.value === true ? ` ${props2.standout}` : props2.color !== void 0 ? ` text-${props2.color}` : ""));
  const hasLabel = computed(() => props2.labelSlot === true || props2.label !== void 0);
  const labelClass = computed(() => "q-field__label no-pointer-events absolute ellipsis" + (props2.labelColor !== void 0 && hasError.value !== true ? ` text-${props2.labelColor}` : ""));
  const controlSlotScope = computed(() => ({
    id: state.targetUid.value,
    editable: state.editable.value,
    focused: state.focused.value,
    floatingLabel: floatingLabel.value,
    modelValue: props2.modelValue,
    emitValue: state.emitValue
  }));
  const attributes = computed(() => {
    const acc = {
      for: state.targetUid.value
    };
    if (props2.disable === true) {
      acc["aria-disabled"] = "true";
    } else if (props2.readonly === true) {
      acc["aria-readonly"] = "true";
    }
    return acc;
  });
  watch(() => props2.for, (val) => {
    state.targetUid.value = getTargetUid(val);
  });
  function focusHandler() {
    const el = document.activeElement;
    let target2 = state.targetRef !== void 0 && state.targetRef.value;
    if (target2 && (el === null || el.id !== state.targetUid.value)) {
      target2.hasAttribute("tabindex") === true || (target2 = target2.querySelector("[tabindex]"));
      if (target2 && target2 !== el) {
        target2.focus({ preventScroll: true });
      }
    }
  }
  function focus() {
    addFocusFn(focusHandler);
  }
  function blur() {
    removeFocusFn(focusHandler);
    const el = document.activeElement;
    if (el !== null && state.rootRef.value.contains(el)) {
      el.blur();
    }
  }
  function onControlFocusin(e2) {
    clearTimeout(focusoutTimer);
    if (state.editable.value === true && state.focused.value === false) {
      state.focused.value = true;
      emit("focus", e2);
    }
  }
  function onControlFocusout(e2, then) {
    clearTimeout(focusoutTimer);
    focusoutTimer = setTimeout(() => {
      if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) {
        return;
      }
      if (state.focused.value === true) {
        state.focused.value = false;
        emit("blur", e2);
      }
      then !== void 0 && then();
    });
  }
  function clearValue(e2) {
    stopAndPrevent(e2);
    if ($q.platform.is.mobile !== true) {
      const el = state.targetRef !== void 0 && state.targetRef.value || state.rootRef.value;
      el.focus();
    } else if (state.rootRef.value.contains(document.activeElement) === true) {
      document.activeElement.blur();
    }
    if (props2.type === "file") {
      state.inputRef.value.value = null;
    }
    emit("update:modelValue", null);
    emit("clear", props2.modelValue);
    nextTick(() => {
      resetValidation();
      if ($q.platform.is.mobile !== true) {
        isDirtyModel.value = false;
      }
    });
  }
  function getContent() {
    const node = [];
    slots.prepend !== void 0 && node.push(h("div", {
      class: "q-field__prepend q-field__marginal row no-wrap items-center",
      key: "prepend",
      onClick: prevent
    }, slots.prepend()));
    node.push(h("div", {
      class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
    }, getControlContainer()));
    slots.append !== void 0 && node.push(h("div", {
      class: "q-field__append q-field__marginal row no-wrap items-center",
      key: "append",
      onClick: prevent
    }, slots.append()));
    hasError.value === true && props2.noErrorIcon === false && node.push(getInnerAppendNode("error", [
      h(QIcon, { name: $q.iconSet.field.error, color: "negative" })
    ]));
    if (props2.loading === true || state.innerLoading.value === true) {
      node.push(getInnerAppendNode("inner-loading-append", slots.loading !== void 0 ? slots.loading() : [h(QSpinner, { color: props2.color })]));
    } else if (props2.clearable === true && state.hasValue.value === true && state.editable.value === true) {
      node.push(getInnerAppendNode("inner-clearable-append", [
        h(QIcon, {
          class: "q-field__focusable-action",
          tag: "button",
          name: props2.clearIcon || $q.iconSet.field.clear,
          tabindex: 0,
          type: "button",
          "aria-hidden": null,
          role: null,
          onClick: clearValue
        })
      ]));
    }
    state.getInnerAppend !== void 0 && node.push(getInnerAppendNode("inner-append", state.getInnerAppend()));
    state.getControlChild !== void 0 && node.push(state.getControlChild());
    return node;
  }
  function getControlContainer() {
    const node = [];
    props2.prefix !== void 0 && props2.prefix !== null && node.push(h("div", {
      class: "q-field__prefix no-pointer-events row items-center"
    }, props2.prefix));
    if (state.getShadowControl !== void 0 && state.hasShadow.value === true) {
      node.push(state.getShadowControl());
    }
    if (state.getControl !== void 0) {
      node.push(state.getControl());
    } else if (slots.rawControl !== void 0) {
      node.push(slots.rawControl());
    } else if (slots.control !== void 0) {
      node.push(h("div", __spreadProps(__spreadValues({
        ref: state.targetRef,
        class: "q-field__native row"
      }, state.splitAttrs.attributes.value), {
        "data-autofocus": props2.autofocus === true || void 0
      }), slots.control(controlSlotScope.value)));
    }
    hasLabel.value === true && node.push(h("div", {
      class: labelClass.value
    }, hSlot(slots.label, props2.label)));
    props2.suffix !== void 0 && props2.suffix !== null && node.push(h("div", {
      class: "q-field__suffix no-pointer-events row items-center"
    }, props2.suffix));
    return node.concat(hSlot(slots.default));
  }
  function getBottom() {
    let msg, key;
    if (hasError.value === true) {
      if (errorMessage.value !== null) {
        msg = [h("div", { role: "alert" }, errorMessage.value)];
        key = `q--slot-error-${errorMessage.value}`;
      } else {
        msg = hSlot(slots.error);
        key = "q--slot-error";
      }
    } else if (props2.hideHint !== true || state.focused.value === true) {
      if (props2.hint !== void 0) {
        msg = [h("div", props2.hint)];
        key = `q--slot-hint-${props2.hint}`;
      } else {
        msg = hSlot(slots.hint);
        key = "q--slot-hint";
      }
    }
    const hasCounter = props2.counter === true || slots.counter !== void 0;
    if (props2.hideBottomSpace === true && hasCounter === false && msg === void 0) {
      return;
    }
    const main = h("div", {
      key,
      class: "q-field__messages col"
    }, msg);
    return h("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (props2.hideBottomSpace !== true ? "animated" : "stale")
    }, [
      props2.hideBottomSpace === true ? main : h(Transition, { name: "q-transition--field-message" }, () => main),
      hasCounter === true ? h("div", {
        class: "q-field__counter"
      }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null
    ]);
  }
  function getInnerAppendNode(key, content) {
    return content === null ? null : h("div", {
      key,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, content);
  }
  Object.assign(proxy, { focus, blur });
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    shouldActivate === true && props2.autofocus === true && proxy.focus();
  });
  onMounted(() => {
    if (isRuntimeSsrPreHydration.value === true && props2.for === void 0) {
      state.targetUid.value = getTargetUid();
    }
    props2.autofocus === true && proxy.focus();
  });
  onBeforeUnmount(() => {
    clearTimeout(focusoutTimer);
  });
  return function renderField() {
    return h("label", __spreadValues({
      ref: state.rootRef,
      class: [
        classes.value,
        attrs.class
      ],
      style: attrs.style
    }, attributes.value), [
      slots.before !== void 0 ? h("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.before()) : null,
      h("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        h("div", __spreadValues({
          ref: state.controlRef,
          class: contentClass.value,
          tabindex: -1
        }, state.controlEvents), getContent()),
        shouldRenderBottom.value === true ? getBottom() : null
      ]),
      slots.after !== void 0 ? h("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.after()) : null
    ]);
  };
}
const NAMED_MASKS = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
};
const TOKENS = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleLowerCase() }
};
const KEYS = Object.keys(TOKENS);
KEYS.forEach((key) => {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
const tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g"), escRegex = /[.*+?^${}()|[\]\\]/g;
const MARKER = String.fromCharCode(1);
const useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function useMask(props2, emit, emitValue, inputRef) {
  let maskMarked, maskReplaced, computedMask, computedUnmask;
  const hasMask = ref(null);
  const innerValue = ref(getInitialMaskedValue());
  function getIsTypeText() {
    return props2.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(props2.type);
  }
  watch(() => props2.type + props2.autogrow, updateMaskInternals);
  watch(() => props2.mask, (v) => {
    if (v !== void 0) {
      updateMaskValue(innerValue.value, true);
    } else {
      const val = unmaskValue(innerValue.value);
      updateMaskInternals();
      props2.modelValue !== val && emit("update:modelValue", val);
    }
  });
  watch(() => props2.fillMask + props2.reverseFillMask, () => {
    hasMask.value === true && updateMaskValue(innerValue.value, true);
  });
  watch(() => props2.unmaskedValue, () => {
    hasMask.value === true && updateMaskValue(innerValue.value);
  });
  function getInitialMaskedValue() {
    updateMaskInternals();
    if (hasMask.value === true) {
      const masked = maskValue(unmaskValue(props2.modelValue));
      return props2.fillMask !== false ? fillWithMask(masked) : masked;
    }
    return props2.modelValue;
  }
  function getPaddedMaskMarked(size2) {
    if (size2 < maskMarked.length) {
      return maskMarked.slice(-size2);
    }
    let pad = "", localMaskMarked = maskMarked;
    const padPos = localMaskMarked.indexOf(MARKER);
    if (padPos > -1) {
      for (let i2 = size2 - localMaskMarked.length; i2 > 0; i2--) {
        pad += MARKER;
      }
      localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
    }
    return localMaskMarked;
  }
  function updateMaskInternals() {
    hasMask.value = props2.mask !== void 0 && props2.mask.length > 0 && getIsTypeText();
    if (hasMask.value === false) {
      computedUnmask = void 0;
      maskMarked = "";
      maskReplaced = "";
      return;
    }
    const localComputedMask = NAMED_MASKS[props2.mask] === void 0 ? props2.mask : NAMED_MASKS[props2.mask], fillChar = typeof props2.fillMask === "string" && props2.fillMask.length > 0 ? props2.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
    let firstMatch = props2.reverseFillMask === true, unmaskChar = "", negateChar = "";
    localComputedMask.replace(tokenRegexMask, (_, char1, esc, token, char2) => {
      if (token !== void 0) {
        const c = TOKENS[token];
        mask.push(c);
        negateChar = c.negate;
        if (firstMatch === true) {
          extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
          firstMatch = false;
        }
        extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
      } else if (esc !== void 0) {
        unmaskChar = "\\" + (esc === "\\" ? "" : esc);
        mask.push(esc);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      } else {
        const c = char1 !== void 0 ? char1 : char2;
        unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
        mask.push(c);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      }
    });
    const unmaskMatcher = new RegExp("^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?$"), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
      if (index === 0 && props2.reverseFillMask === true) {
        return new RegExp("^" + fillCharEscaped + "*" + re);
      } else if (index === extractLast) {
        return new RegExp("^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props2.reverseFillMask === true ? "$" : fillCharEscaped + "*"));
      }
      return new RegExp("^" + re);
    });
    computedMask = mask;
    computedUnmask = (val) => {
      const unmaskMatch = unmaskMatcher.exec(val);
      if (unmaskMatch !== null) {
        val = unmaskMatch.slice(1).join("");
      }
      const extractMatch = [], extractMatcherLength = extractMatcher.length;
      for (let i2 = 0, str = val; i2 < extractMatcherLength; i2++) {
        const m = extractMatcher[i2].exec(str);
        if (m === null) {
          break;
        }
        str = str.slice(m.shift().length);
        extractMatch.push(...m);
      }
      if (extractMatch.length > 0) {
        return extractMatch.join("");
      }
      return val;
    };
    maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
    maskReplaced = maskMarked.split(MARKER).join(fillChar);
  }
  function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
    const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
    updateMaskInternalsFlag === true && updateMaskInternals();
    const preMasked = maskValue(unmasked), masked = props2.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed = innerValue.value !== masked;
    inp.value !== masked && (inp.value = masked);
    changed === true && (innerValue.value = masked);
    document.activeElement === inp && nextTick(() => {
      if (masked === maskReplaced) {
        const cursor = props2.reverseFillMask === true ? maskReplaced.length : 0;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (inputType === "insertFromPaste" && props2.reverseFillMask !== true) {
        const cursor = end - 1;
        moveCursor.right(inp, cursor, cursor);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) > -1) {
        const cursor = props2.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (props2.reverseFillMask === true) {
        if (changed === true) {
          const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
          if (cursor === 1 && end === 1) {
            inp.setSelectionRange(cursor, cursor, "forward");
          } else {
            moveCursor.rightReverse(inp, cursor, cursor);
          }
        } else {
          const cursor = masked.length - endReverse;
          inp.setSelectionRange(cursor, cursor, "backward");
        }
      } else {
        if (changed === true) {
          const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
          moveCursor.right(inp, cursor, cursor);
        } else {
          const cursor = end - 1;
          moveCursor.right(inp, cursor, cursor);
        }
      }
    });
    const val = props2.unmaskedValue === true ? unmaskValue(masked) : masked;
    String(props2.modelValue) !== val && emitValue(val, true);
  }
  function moveCursorForPaste(inp, start, end) {
    const preMasked = maskValue(unmaskValue(inp.value));
    start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
    inp.setSelectionRange(start, end, "forward");
  }
  const moveCursor = {
    left(inp, start, end, selection) {
      const noMarkBefore = maskMarked.slice(start - 1).indexOf(MARKER) === -1;
      let i2 = Math.max(0, start - 1);
      for (; i2 >= 0; i2--) {
        if (maskMarked[i2] === MARKER) {
          start = i2;
          noMarkBefore === true && start++;
          break;
        }
      }
      if (i2 < 0 && maskMarked[start] !== void 0 && maskMarked[start] !== MARKER) {
        return moveCursor.right(inp, 0, 0);
      }
      start >= 0 && inp.setSelectionRange(start, selection === true ? end : start, "backward");
    },
    right(inp, start, end, selection) {
      const limit = inp.value.length;
      let i2 = Math.min(limit, end + 1);
      for (; i2 <= limit; i2++) {
        if (maskMarked[i2] === MARKER) {
          end = i2;
          break;
        } else if (maskMarked[i2 - 1] === MARKER) {
          end = i2;
        }
      }
      if (i2 > limit && maskMarked[end - 1] !== void 0 && maskMarked[end - 1] !== MARKER) {
        return moveCursor.left(inp, limit, limit);
      }
      inp.setSelectionRange(selection ? start : end, end, "forward");
    },
    leftReverse(inp, start, end, selection) {
      const localMaskMarked = getPaddedMaskMarked(inp.value.length);
      let i2 = Math.max(0, start - 1);
      for (; i2 >= 0; i2--) {
        if (localMaskMarked[i2 - 1] === MARKER) {
          start = i2;
          break;
        } else if (localMaskMarked[i2] === MARKER) {
          start = i2;
          if (i2 === 0) {
            break;
          }
        }
      }
      if (i2 < 0 && localMaskMarked[start] !== void 0 && localMaskMarked[start] !== MARKER) {
        return moveCursor.rightReverse(inp, 0, 0);
      }
      start >= 0 && inp.setSelectionRange(start, selection === true ? end : start, "backward");
    },
    rightReverse(inp, start, end, selection) {
      const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, end + 1).indexOf(MARKER) === -1;
      let i2 = Math.min(limit, end + 1);
      for (; i2 <= limit; i2++) {
        if (localMaskMarked[i2 - 1] === MARKER) {
          end = i2;
          end > 0 && noMarkBefore === true && end--;
          break;
        }
      }
      if (i2 > limit && localMaskMarked[end - 1] !== void 0 && localMaskMarked[end - 1] !== MARKER) {
        return moveCursor.leftReverse(inp, limit, limit);
      }
      inp.setSelectionRange(selection === true ? start : end, end, "forward");
    }
  };
  function onMaskedKeydown(e2) {
    if (shouldIgnoreKey(e2) === true) {
      return;
    }
    const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
    if (e2.keyCode === 37 || e2.keyCode === 39) {
      const fn = moveCursor[(e2.keyCode === 39 ? "right" : "left") + (props2.reverseFillMask === true ? "Reverse" : "")];
      e2.preventDefault();
      fn(inp, start, end, e2.shiftKey);
    } else if (e2.keyCode === 8 && props2.reverseFillMask !== true && start === end) {
      moveCursor.left(inp, start, end, true);
    } else if (e2.keyCode === 46 && props2.reverseFillMask === true && start === end) {
      moveCursor.rightReverse(inp, start, end, true);
    }
  }
  function maskValue(val) {
    if (val === void 0 || val === null || val === "") {
      return "";
    }
    if (props2.reverseFillMask === true) {
      return maskValueReverse(val);
    }
    const mask = computedMask;
    let valIndex = 0, output = "";
    for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
      const valChar = val[valIndex], maskDef = mask[maskIndex];
      if (typeof maskDef === "string") {
        output += maskDef;
        valChar === maskDef && valIndex++;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
        valIndex++;
      } else {
        return output;
      }
    }
    return output;
  }
  function maskValueReverse(val) {
    const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
    let valIndex = val.length - 1, output = "";
    for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex > -1; maskIndex--) {
      const maskDef = mask[maskIndex];
      let valChar = val[valIndex];
      if (typeof maskDef === "string") {
        output = maskDef + output;
        valChar === maskDef && valIndex--;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        do {
          output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
          valIndex--;
          valChar = val[valIndex];
        } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
      } else {
        return output;
      }
    }
    return output;
  }
  function unmaskValue(val) {
    return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask("" + val) : val : computedUnmask(val);
  }
  function fillWithMask(val) {
    if (maskReplaced.length - val.length <= 0) {
      return val;
    }
    return props2.reverseFillMask === true && val.length > 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
  }
  return {
    innerValue,
    hasMask,
    moveCursorForPaste,
    updateMaskValue,
    onMaskedKeydown
  };
}
const useFormProps = {
  name: String
};
function useFormInject(formAttrs = {}) {
  return (child, action, className) => {
    child[action](h("input", __spreadValues({
      class: "hidden" + (className || "")
    }, formAttrs.value)));
  };
}
function useFormInputNameAttr(props2) {
  return computed(() => props2.name || props2.for);
}
function useFileFormDomProps(props2, typeGuard) {
  function getFormDomProps() {
    const model = props2.modelValue;
    try {
      const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      if (Object(model) === model) {
        ("length" in model ? Array.from(model) : [model]).forEach((file) => {
          dt.items.add(file);
        });
      }
      return {
        files: dt.files
      };
    } catch (e2) {
      return {
        files: void 0
      };
    }
  }
  return typeGuard === true ? computed(() => {
    if (props2.type !== "file") {
      return;
    }
    return getFormDomProps();
  }) : computed(getFormDomProps);
}
const isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
const isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
const isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
function useKeyComposition(onInput) {
  return function onComposition(e2) {
    if (e2.type === "compositionend" || e2.type === "change") {
      if (e2.target.composing !== true) {
        return;
      }
      e2.target.composing = false;
      onInput(e2);
    } else if (e2.type === "compositionupdate") {
      if (typeof e2.data === "string" && isJapanese.test(e2.data) === false && isChinese.test(e2.data) === false && isKorean.test(e2.data) === false) {
        e2.target.composing = false;
      }
    } else {
      e2.target.composing = true;
    }
  };
}
var QInput = createComponent({
  name: "QInput",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, useFieldProps), useMaskProps), useFormProps), {
    modelValue: { required: false },
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  }),
  emits: [
    ...useFieldEmits,
    "paste",
    "change"
  ],
  setup(props2, { emit, attrs }) {
    const temp = {};
    let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer, emitValueFn;
    const inputRef = ref(null);
    const nameProp = useFormInputNameAttr(props2);
    const {
      innerValue,
      hasMask,
      moveCursorForPaste,
      updateMaskValue,
      onMaskedKeydown
    } = useMask(props2, emit, emitValue, inputRef);
    const formDomProps = useFileFormDomProps(props2, true);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const onComposition = useKeyComposition(onInput);
    const state = useFieldState();
    const isTextarea = computed(() => props2.type === "textarea" || props2.autogrow === true);
    const isTypeText = computed(() => isTextarea.value === true || ["text", "search", "url", "tel", "password"].includes(props2.type));
    const onEvents = computed(() => {
      const evt = __spreadProps(__spreadValues({}, state.splitAttrs.listeners.value), {
        onInput,
        onPaste,
        onChange,
        onBlur: onFinishEditing,
        onFocus: stop
      });
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      if (hasMask.value === true) {
        evt.onKeydown = onMaskedKeydown;
      }
      if (props2.autogrow === true) {
        evt.onAnimationend = adjustHeight;
      }
      return evt;
    });
    const inputAttrs = computed(() => {
      const attrs2 = __spreadProps(__spreadValues({
        tabindex: 0,
        "data-autofocus": props2.autofocus === true || void 0,
        rows: props2.type === "textarea" ? 6 : void 0,
        "aria-label": props2.label,
        name: nameProp.value
      }, state.splitAttrs.attributes.value), {
        id: state.targetUid.value,
        maxlength: props2.maxlength,
        disabled: props2.disable === true,
        readonly: props2.readonly === true
      });
      if (isTextarea.value === false) {
        attrs2.type = props2.type;
      }
      if (props2.autogrow === true) {
        attrs2.rows = 1;
      }
      return attrs2;
    });
    watch(() => props2.type, () => {
      if (inputRef.value) {
        inputRef.value.value = props2.modelValue;
      }
    });
    watch(() => props2.modelValue, (v) => {
      if (hasMask.value === true) {
        if (stopValueWatcher === true) {
          stopValueWatcher = false;
          return;
        }
        updateMaskValue(v);
      } else if (innerValue.value !== v) {
        innerValue.value = v;
        if (props2.type === "number" && temp.hasOwnProperty("value") === true) {
          if (typedNumber === true) {
            typedNumber = false;
          } else {
            delete temp.value;
          }
        }
      }
      props2.autogrow === true && nextTick(adjustHeight);
    });
    watch(() => props2.autogrow, (val) => {
      if (val === true) {
        nextTick(adjustHeight);
      } else if (inputRef.value !== null && attrs.rows > 0) {
        inputRef.value.style.height = "auto";
      }
    });
    watch(() => props2.dense, () => {
      props2.autogrow === true && nextTick(adjustHeight);
    });
    function focus() {
      addFocusFn(() => {
        const el = document.activeElement;
        if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) {
          inputRef.value.focus({ preventScroll: true });
        }
      });
    }
    function select() {
      inputRef.value !== null && inputRef.value.select();
    }
    function onPaste(e2) {
      if (hasMask.value === true && props2.reverseFillMask !== true) {
        const inp = e2.target;
        moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
      }
      emit("paste", e2);
    }
    function onInput(e2) {
      if (!e2 || !e2.target || e2.target.composing === true) {
        return;
      }
      if (props2.type === "file") {
        emit("update:modelValue", e2.target.files);
        return;
      }
      const val = e2.target.value;
      if (hasMask.value === true) {
        updateMaskValue(val, false, e2.inputType);
      } else {
        emitValue(val);
        if (isTypeText.value === true && e2.target === document.activeElement) {
          const { selectionStart, selectionEnd } = e2.target;
          if (selectionStart !== void 0 && selectionEnd !== void 0) {
            nextTick(() => {
              if (e2.target === document.activeElement && val.indexOf(e2.target.value) === 0) {
                e2.target.setSelectionRange(selectionStart, selectionEnd);
              }
            });
          }
        }
      }
      props2.autogrow === true && adjustHeight();
    }
    function emitValue(val, stopWatcher) {
      emitValueFn = () => {
        if (props2.type !== "number" && temp.hasOwnProperty("value") === true) {
          delete temp.value;
        }
        if (props2.modelValue !== val && emitCachedValue !== val) {
          stopWatcher === true && (stopValueWatcher = true);
          emit("update:modelValue", val);
          nextTick(() => {
            emitCachedValue === val && (emitCachedValue = NaN);
          });
        }
        emitValueFn = void 0;
      };
      if (props2.type === "number") {
        typedNumber = true;
        temp.value = val;
      }
      if (props2.debounce !== void 0) {
        clearTimeout(emitTimer);
        temp.value = val;
        emitTimer = setTimeout(emitValueFn, props2.debounce);
      } else {
        emitValueFn();
      }
    }
    function adjustHeight() {
      const inp = inputRef.value;
      if (inp !== null) {
        const parentStyle = inp.parentNode.style;
        parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
        inp.style.height = "1px";
        inp.style.height = inp.scrollHeight + "px";
        parentStyle.marginBottom = "";
      }
    }
    function onChange(e2) {
      onComposition(e2);
      clearTimeout(emitTimer);
      emitValueFn !== void 0 && emitValueFn();
      emit("change", e2.target.value);
    }
    function onFinishEditing(e2) {
      e2 !== void 0 && stop(e2);
      clearTimeout(emitTimer);
      emitValueFn !== void 0 && emitValueFn();
      typedNumber = false;
      stopValueWatcher = false;
      delete temp.value;
      props2.type !== "file" && setTimeout(() => {
        if (inputRef.value !== null) {
          inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
        }
      });
    }
    function getCurValue() {
      return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
    }
    onBeforeUnmount(() => {
      onFinishEditing();
    });
    onMounted(() => {
      props2.autogrow === true && adjustHeight();
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(() => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props2.autogrow === true ? " q-textarea--autogrow" : "")),
      hasShadow: computed(() => props2.type !== "file" && typeof props2.shadowText === "string" && props2.shadowText.length > 0),
      inputRef,
      emitValue,
      hasValue,
      floatingLabel: computed(() => hasValue.value === true || fieldValueIsFilled(props2.displayValue)),
      getControl: () => {
        return h(isTextarea.value === true ? "textarea" : "input", __spreadValues(__spreadValues(__spreadValues({
          ref: inputRef,
          class: [
            "q-field__native q-placeholder",
            props2.inputClass
          ],
          style: props2.inputStyle
        }, inputAttrs.value), onEvents.value), props2.type !== "file" ? { value: getCurValue() } : formDomProps.value));
      },
      getShadowControl: () => {
        return h("div", {
          class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap")
        }, [
          h("span", { class: "invisible" }, getCurValue()),
          h("span", props2.shadowText)
        ]);
      }
    });
    const renderFn = useField(state);
    const vm = getCurrentInstance();
    Object.assign(vm.proxy, {
      focus,
      select,
      getNativeElement: () => inputRef.value
    });
    return renderFn;
  }
});
function useRefocusTarget(props2, rootRef) {
  const refocusRef = ref(null);
  const refocusTargetEl = computed(() => {
    if (props2.disable !== true) {
      return null;
    }
    return h("span", {
      ref: refocusRef,
      class: "no-outline",
      tabindex: -1
    });
  });
  function refocusTarget(e2) {
    const root = rootRef.value;
    if (e2 !== void 0 && e2.type.indexOf("key") === 0) {
      if (root !== null && document.activeElement !== root && root.contains(document.activeElement) === true) {
        root.focus();
      }
    } else if (refocusRef.value !== null && (e2 === void 0 || root !== null && root.contains(e2.target) === true)) {
      refocusRef.value.focus();
    }
  }
  return {
    refocusTargetEl,
    refocusTarget
  };
}
var optionSizes = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
};
const svg = h("svg", {
  key: "svg",
  class: "q-radio__bg absolute non-selectable",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, [
  h("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
  }),
  h("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
  })
]);
var QRadio = createComponent({
  name: "QRadio",
  props: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, useDarkProps), useSizeProps), useFormProps), {
    modelValue: { required: true },
    val: { required: true },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  }),
  emits: ["update:modelValue"],
  setup(props2, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props2, proxy.$q);
    const sizeStyle = useSize(props2, optionSizes);
    const rootRef = ref(null);
    const { refocusTargetEl, refocusTarget } = useRefocusTarget(props2, rootRef);
    const isTrue = computed(() => props2.modelValue === props2.val);
    const classes = computed(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (props2.disable === true ? " disabled" : "") + (isDark.value === true ? " q-radio--dark" : "") + (props2.dense === true ? " q-radio--dense" : "") + (props2.leftLabel === true ? " reverse" : ""));
    const innerClass = computed(() => {
      const color = props2.color !== void 0 && (props2.keepColor === true || isTrue.value === true) ? ` text-${props2.color}` : "";
      return `q-radio__inner relative-position q-radio__inner--${isTrue.value === true ? "truthy" : "falsy"}${color}`;
    });
    const icon = computed(() => (isTrue.value === true ? props2.checkedIcon : props2.uncheckedIcon) || null);
    const tabindex = computed(() => props2.disable === true ? -1 : props2.tabindex || 0);
    const formAttrs = computed(() => {
      const prop = { type: "radio" };
      props2.name !== void 0 && Object.assign(prop, {
        "^checked": isTrue.value === true ? "checked" : void 0,
        name: props2.name,
        value: props2.val
      });
      return prop;
    });
    const injectFormInput = useFormInject(formAttrs);
    function onClick(e2) {
      if (e2 !== void 0) {
        stopAndPrevent(e2);
        refocusTarget(e2);
      }
      if (props2.disable !== true && isTrue.value !== true) {
        emit("update:modelValue", props2.val, e2);
      }
    }
    function onKeydown2(e2) {
      if (e2.keyCode === 13 || e2.keyCode === 32) {
        stopAndPrevent(e2);
      }
    }
    function onKeyup2(e2) {
      if (e2.keyCode === 13 || e2.keyCode === 32) {
        onClick(e2);
      }
    }
    Object.assign(proxy, { set: onClick });
    return () => {
      const content = icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-radio__icon-container absolute flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-radio__icon",
            name: icon.value
          })
        ])
      ] : [svg];
      props2.disable !== true && injectFormInput(content, "unshift", " q-radio__native q-ma-none q-pa-none");
      const child = [
        h("div", {
          class: innerClass.value,
          style: sizeStyle.value
        }, content)
      ];
      if (refocusTargetEl.value !== null) {
        child.push(refocusTargetEl.value);
      }
      const label = props2.label !== void 0 ? hMergeSlot(slots.default, [props2.label]) : hSlot(slots.default);
      label !== void 0 && child.push(h("div", {
        class: "q-radio__label q-anchor--skip"
      }, label));
      return h("div", {
        ref: rootRef,
        class: classes.value,
        tabindex: tabindex.value,
        role: "radio",
        "aria-label": props2.label,
        "aria-checked": isTrue.value === true ? "true" : "false",
        "aria-disabled": props2.disable === true ? "true" : void 0,
        onClick,
        onKeydown: onKeydown2,
        onKeyup: onKeyup2
      }, child);
    };
  }
});
const useCheckboxProps = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, useDarkProps), useSizeProps), useFormProps), {
  modelValue: {
    required: true,
    default: null
  },
  val: {},
  trueValue: { default: true },
  falseValue: { default: false },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (v) => v === "tf" || v === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
});
const useCheckboxEmits = ["update:modelValue"];
function useCheckbox(type, getInner) {
  const { props: props2, slots, emit, proxy } = getCurrentInstance();
  const { $q } = proxy;
  const isDark = useDark(props2, $q);
  const rootRef = ref(null);
  const { refocusTargetEl, refocusTarget } = useRefocusTarget(props2, rootRef);
  const sizeStyle = useSize(props2, optionSizes);
  const modelIsArray = computed(() => props2.val !== void 0 && Array.isArray(props2.modelValue));
  const index = computed(() => modelIsArray.value === true ? props2.modelValue.indexOf(props2.val) : -1);
  const isTrue = computed(() => modelIsArray.value === true ? index.value > -1 : props2.modelValue === props2.trueValue);
  const isFalse = computed(() => modelIsArray.value === true ? index.value === -1 : props2.modelValue === props2.falseValue);
  const isIndeterminate = computed(() => isTrue.value === false && isFalse.value === false);
  const tabindex = computed(() => props2.disable === true ? -1 : props2.tabindex || 0);
  const classes = computed(() => `q-${type} cursor-pointer no-outline row inline no-wrap items-center` + (props2.disable === true ? " disabled" : "") + (isDark.value === true ? ` q-${type}--dark` : "") + (props2.dense === true ? ` q-${type}--dense` : "") + (props2.leftLabel === true ? " reverse" : ""));
  const innerClass = computed(() => {
    const state = isTrue.value === true ? "truthy" : isFalse.value === true ? "falsy" : "indet";
    const color = props2.color !== void 0 && (props2.keepColor === true || (type === "toggle" ? isTrue.value === true : isFalse.value !== true)) ? ` text-${props2.color}` : "";
    return `q-${type}__inner relative-position non-selectable q-${type}__inner--${state}${color}`;
  });
  const formAttrs = computed(() => {
    const prop = { type: "checkbox" };
    props2.name !== void 0 && Object.assign(prop, {
      "^checked": isTrue.value === true ? "checked" : void 0,
      name: props2.name,
      value: modelIsArray.value === true ? props2.val : props2.trueValue
    });
    return prop;
  });
  const injectFormInput = useFormInject(formAttrs);
  const attributes = computed(() => {
    const attrs = {
      tabindex: tabindex.value,
      role: "checkbox",
      "aria-label": props2.label,
      "aria-checked": isIndeterminate.value === true ? "mixed" : isTrue.value === true ? "true" : "false"
    };
    if (props2.disable === true) {
      attrs["aria-disabled"] = "true";
    }
    return attrs;
  });
  function onClick(e2) {
    if (e2 !== void 0) {
      stopAndPrevent(e2);
      refocusTarget(e2);
    }
    if (props2.disable !== true) {
      emit("update:modelValue", getNextValue(), e2);
    }
  }
  function getNextValue() {
    if (modelIsArray.value === true) {
      if (isTrue.value === true) {
        const val = props2.modelValue.slice();
        val.splice(index.value, 1);
        return val;
      }
      return props2.modelValue.concat([props2.val]);
    }
    if (isTrue.value === true) {
      if (props2.toggleOrder !== "ft" || props2.toggleIndeterminate === false) {
        return props2.falseValue;
      }
    } else if (isFalse.value === true) {
      if (props2.toggleOrder === "ft" || props2.toggleIndeterminate === false) {
        return props2.trueValue;
      }
    } else {
      return props2.toggleOrder !== "ft" ? props2.trueValue : props2.falseValue;
    }
    return props2.indeterminateValue;
  }
  function onKeydown2(e2) {
    if (e2.keyCode === 13 || e2.keyCode === 32) {
      stopAndPrevent(e2);
    }
  }
  function onKeyup2(e2) {
    if (e2.keyCode === 13 || e2.keyCode === 32) {
      onClick(e2);
    }
  }
  const getInnerContent = getInner(isTrue, isIndeterminate);
  Object.assign(proxy, { toggle: onClick });
  return () => {
    const inner = getInnerContent();
    props2.disable !== true && injectFormInput(inner, "unshift", ` q-${type}__native absolute q-ma-none q-pa-none`);
    const child = [
      h("div", {
        class: innerClass.value,
        style: sizeStyle.value
      }, inner)
    ];
    if (refocusTargetEl.value !== null) {
      child.push(refocusTargetEl.value);
    }
    const label = props2.label !== void 0 ? hMergeSlot(slots.default, [props2.label]) : hSlot(slots.default);
    label !== void 0 && child.push(h("div", {
      class: `q-${type}__label q-anchor--skip`
    }, label));
    return h("div", __spreadProps(__spreadValues({
      ref: rootRef,
      class: classes.value
    }, attributes.value), {
      onClick,
      onKeydown: onKeydown2,
      onKeyup: onKeyup2
    }), child);
  };
}
const bgNode = h("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  h("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, [
    h("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    h("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]);
var QCheckbox = createComponent({
  name: "QCheckbox",
  props: useCheckboxProps,
  emits: useCheckboxEmits,
  setup(props2) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(() => (isTrue.value === true ? props2.checkedIcon : isIndeterminate.value === true ? props2.indeterminateIcon : props2.uncheckedIcon) || null);
      return () => icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-checkbox__icon",
            name: icon.value
          })
        ])
      ] : [bgNode];
    }
    return useCheckbox("checkbox", getInner);
  }
});
var QToggle = createComponent({
  name: "QToggle",
  props: __spreadProps(__spreadValues({}, useCheckboxProps), {
    icon: String,
    iconColor: String
  }),
  emits: useCheckboxEmits,
  setup(props2) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(() => (isTrue.value === true ? props2.checkedIcon : isIndeterminate.value === true ? props2.indeterminateIcon : props2.uncheckedIcon) || props2.icon);
      const color = computed(() => isTrue.value === true ? props2.iconColor : null);
      return () => [
        h("div", { class: "q-toggle__track" }),
        h("div", {
          class: "q-toggle__thumb absolute flex flex-center no-wrap"
        }, icon.value !== void 0 ? [
          h(QIcon, {
            name: icon.value,
            color: color.value
          })
        ] : void 0)
      ];
    }
    return useCheckbox("toggle", getInner);
  }
});
const components = {
  radio: QRadio,
  checkbox: QCheckbox,
  toggle: QToggle
};
const typeValues = Object.keys(components);
var QOptionGroup = createComponent({
  name: "QOptionGroup",
  props: __spreadProps(__spreadValues({}, useDarkProps), {
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      validator: (opts) => opts.every((opt) => "value" in opt && "label" in opt)
    },
    name: String,
    type: {
      default: "radio",
      validator: (v) => typeValues.includes(v)
    },
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    size: String,
    leftLabel: Boolean,
    inline: Boolean,
    disable: Boolean
  }),
  emits: ["update:modelValue"],
  setup(props2, { emit, slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const arrayModel = Array.isArray(props2.modelValue);
    if (props2.type === "radio") {
      if (arrayModel === true) {
        console.error("q-option-group: model should not be array");
      }
    } else if (arrayModel === false) {
      console.error("q-option-group: model should be array in your case");
    }
    const isDark = useDark(props2, $q);
    const component = computed(() => components[props2.type]);
    const classes = computed(() => "q-option-group q-gutter-x-sm" + (props2.inline === true ? " q-option-group--inline" : ""));
    const attrs = computed(() => {
      const attrs2 = {};
      if (props2.type === "radio") {
        attrs2.role = "radiogroup";
        if (props2.disable === true) {
          attrs2["aria-disabled"] = "true";
        }
      }
      return attrs2;
    });
    function onUpdateModelValue(value) {
      emit("update:modelValue", value);
    }
    return () => h("div", __spreadValues({
      class: classes.value
    }, attrs.value), props2.options.map((opt, i2) => {
      const child = slots["label-" + i2] !== void 0 ? () => slots["label-" + i2](opt) : slots.label !== void 0 ? () => slots.label(opt) : void 0;
      return h("div", [
        h(component.value, {
          modelValue: props2.modelValue,
          val: opt.value,
          name: opt.name === void 0 ? props2.name : opt.name,
          disable: props2.disable || opt.disable,
          label: child === void 0 ? opt.label : null,
          leftLabel: opt.leftLabel === void 0 ? props2.leftLabel : opt.leftLabel,
          color: opt.color === void 0 ? props2.color : opt.color,
          checkedIcon: opt.checkedIcon,
          uncheckedIcon: opt.uncheckedIcon,
          dark: opt.dark || isDark.value,
          size: opt.size === void 0 ? props2.size : opt.size,
          dense: props2.dense,
          keepColor: opt.keepColor === void 0 ? props2.keepColor : opt.keepColor,
          "onUpdate:modelValue": onUpdateModelValue
        }, child)
      ]);
    }));
  }
});
var DialogPlugin = createComponent({
  name: "DialogPlugin",
  props: __spreadProps(__spreadValues({}, useDarkProps), {
    title: String,
    message: String,
    prompt: Object,
    options: Object,
    progress: [Boolean, Object],
    html: Boolean,
    ok: {
      type: [String, Object, Boolean],
      default: true
    },
    cancel: [String, Object, Boolean],
    focus: {
      type: String,
      default: "ok",
      validator: (v) => ["ok", "cancel", "none"].includes(v)
    },
    stackButtons: Boolean,
    color: String,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object]
  }),
  emits: ["ok", "hide"],
  setup(props2, { emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props2, $q);
    const dialogRef = ref(null);
    const model = ref(props2.prompt !== void 0 ? props2.prompt.model : props2.options !== void 0 ? props2.options.model : void 0);
    const classes = computed(() => "q-dialog-plugin" + (isDark.value === true ? " q-dialog-plugin--dark q-dark" : "") + (props2.progress !== false ? " q-dialog-plugin--progress" : ""));
    const vmColor = computed(() => props2.color || (isDark.value === true ? "amber" : "primary"));
    const spinner = computed(() => props2.progress === false ? null : isPlainObject(props2.progress) === true ? {
      component: props2.progress.spinner || QSpinner,
      props: { color: props2.progress.color || vmColor.value }
    } : {
      component: QSpinner,
      props: { color: vmColor.value }
    });
    const hasForm = computed(() => props2.prompt !== void 0 || props2.options !== void 0);
    const formProps = computed(() => {
      if (hasForm.value !== true) {
        return {};
      }
      const _a = props2.prompt !== void 0 ? props2.prompt : props2.options, { model: model2, isValid, items } = _a, formProps2 = __objRest(_a, ["model", "isValid", "items"]);
      return formProps2;
    });
    const okLabel = computed(() => isPlainObject(props2.ok) === true ? $q.lang.label.ok : props2.ok === true ? $q.lang.label.ok : props2.ok);
    const cancelLabel = computed(() => isPlainObject(props2.cancel) === true ? $q.lang.label.cancel : props2.cancel === true ? $q.lang.label.cancel : props2.cancel);
    const okDisabled = computed(() => {
      if (props2.prompt !== void 0) {
        return props2.prompt.isValid !== void 0 && props2.prompt.isValid(model.value) !== true;
      }
      if (props2.options !== void 0) {
        return props2.options.isValid !== void 0 && props2.options.isValid(model.value) !== true;
      }
      return false;
    });
    const okProps = computed(() => __spreadProps(__spreadValues({
      color: vmColor.value,
      label: okLabel.value,
      ripple: false,
      disable: okDisabled.value
    }, isPlainObject(props2.ok) === true ? props2.ok : { flat: true }), {
      "data-autofocus": props2.focus === "ok" && hasForm.value !== true || void 0,
      onClick: onOk
    }));
    const cancelProps = computed(() => __spreadProps(__spreadValues({
      color: vmColor.value,
      label: cancelLabel.value,
      ripple: false
    }, isPlainObject(props2.cancel) === true ? props2.cancel : { flat: true }), {
      "data-autofocus": props2.focus === "cancel" && hasForm.value !== true || void 0,
      onClick: onCancel
    }));
    watch(() => props2.prompt && props2.prompt.model, onUpdateModel);
    watch(() => props2.options && props2.options.model, onUpdateModel);
    function show() {
      dialogRef.value.show();
    }
    function hide() {
      dialogRef.value.hide();
    }
    function onOk() {
      emit("ok", toRaw(model.value));
      hide();
    }
    function onCancel() {
      hide();
    }
    function onDialogHide() {
      emit("hide");
    }
    function onUpdateModel(val) {
      model.value = val;
    }
    function onInputKeyup(evt) {
      if (okDisabled.value !== true && props2.prompt.type !== "textarea" && isKeyCode(evt, 13) === true) {
        onOk();
      }
    }
    function getSection(classes2, text) {
      return props2.html === true ? h(QCardSection, {
        class: classes2,
        innerHTML: text
      }) : h(QCardSection, { class: classes2 }, () => text);
    }
    function getPrompt() {
      return [
        h(QInput, __spreadProps(__spreadValues({
          modelValue: model.value
        }, formProps.value), {
          color: vmColor.value,
          dense: true,
          autofocus: true,
          dark: isDark.value,
          "onUpdate:modelValue": onUpdateModel,
          onKeyup: onInputKeyup
        }))
      ];
    }
    function getOptions() {
      return [
        h(QOptionGroup, __spreadProps(__spreadValues({
          modelValue: model.value
        }, formProps.value), {
          color: vmColor.value,
          options: props2.options.items,
          dark: isDark.value,
          "onUpdate:modelValue": onUpdateModel
        }))
      ];
    }
    function getButtons() {
      const child = [];
      props2.cancel && child.push(h(QBtn, cancelProps.value));
      props2.ok && child.push(h(QBtn, okProps.value));
      return h(QCardActions, {
        class: props2.stackButtons === true ? "items-end" : "",
        vertical: props2.stackButtons,
        align: "right"
      }, () => child);
    }
    function getCardContent() {
      const child = [];
      props2.title && child.push(getSection("q-dialog__title", props2.title));
      props2.progress !== false && child.push(h(QCardSection, { class: "q-dialog__progress" }, () => h(spinner.value.component, spinner.value.props)));
      props2.message && child.push(getSection("q-dialog__message", props2.message));
      if (props2.prompt !== void 0) {
        child.push(h(QCardSection, { class: "scroll q-dialog-plugin__form" }, getPrompt));
      } else if (props2.options !== void 0) {
        child.push(h(QSeparator, { dark: isDark.value }), h(QCardSection, { class: "scroll q-dialog-plugin__form" }, getOptions), h(QSeparator, { dark: isDark.value }));
      }
      if (props2.ok || props2.cancel) {
        child.push(getButtons());
      }
      return child;
    }
    function getContent() {
      return [
        h(QCard, {
          class: [
            classes.value,
            props2.cardClass
          ],
          style: props2.cardStyle,
          dark: isDark.value
        }, getCardContent)
      ];
    }
    Object.assign(proxy, { show, hide });
    return () => h(QDialog, {
      ref: dialogRef,
      onHide: onDialogHide
    }, getContent);
  }
});
function merge(target2, source) {
  for (const key in source) {
    if (key !== "spinner" && Object(source[key]) === source[key]) {
      target2[key] = Object(target2[key]) !== target2[key] ? {} : __spreadValues({}, target2[key]);
      merge(target2[key], source[key]);
    } else {
      target2[key] = source[key];
    }
  }
}
function globalDialog(DefaultComponent, supportsCustomComponent, parentApp) {
  return (pluginProps) => {
    let DialogComponent, props2;
    const isCustom = supportsCustomComponent === true && pluginProps.component !== void 0;
    if (isCustom === true) {
      const { component, componentProps } = pluginProps;
      DialogComponent = typeof component === "string" ? parentApp.component(component) : component;
      props2 = componentProps;
    } else {
      const _a = pluginProps, { class: klass, style } = _a, otherProps = __objRest(_a, ["class", "style"]);
      DialogComponent = DefaultComponent;
      props2 = otherProps;
      klass !== void 0 && (otherProps.cardClass = klass);
      style !== void 0 && (otherProps.cardStyle = style);
    }
    let vm, emittedOK = false;
    const dialogRef = ref(null);
    const el = createGlobalNode();
    const applyState = (cmd) => {
      if (dialogRef.value !== null && dialogRef.value[cmd] !== void 0) {
        dialogRef.value[cmd]();
      } else if (vm.$.subTree && vm.$.subTree.component && vm.$.subTree.component.proxy && vm.$.subTree.component.proxy[cmd]) {
        vm.$.subTree.component.proxy[cmd]();
      } else {
        console.error("[Quasar] Incorrectly defined Dialog component");
      }
    };
    const okFns = [], cancelFns = [], API = {
      onOk(fn) {
        okFns.push(fn);
        return API;
      },
      onCancel(fn) {
        cancelFns.push(fn);
        return API;
      },
      onDismiss(fn) {
        okFns.push(fn);
        cancelFns.push(fn);
        return API;
      },
      hide() {
        applyState("hide");
        return API;
      },
      update(componentProps) {
        if (vm !== null) {
          if (isCustom === true) {
            Object.assign(props2, componentProps);
          } else {
            const _a2 = componentProps, { class: klass, style } = _a2, cfg = __objRest(_a2, ["class", "style"]);
            klass !== void 0 && (cfg.cardClass = klass);
            style !== void 0 && (cfg.cardStyle = style);
            merge(props2, cfg);
          }
          vm.$forceUpdate();
        }
        return API;
      }
    };
    const onOk = (data) => {
      emittedOK = true;
      okFns.forEach((fn) => {
        fn(data);
      });
    };
    const onHide = () => {
      app.unmount(el);
      removeGlobalNode(el);
      app = null;
      vm = null;
      if (emittedOK !== true) {
        cancelFns.forEach((fn) => {
          fn();
        });
      }
    };
    let app = createChildApp({
      name: "QGlobalDialog",
      setup: () => () => h(DialogComponent, __spreadProps(__spreadValues({}, props2), {
        ref: dialogRef,
        onOk,
        onHide
      }))
    }, parentApp);
    vm = app.mount(el);
    function show() {
      applyState("show");
    }
    if (typeof DialogComponent.__asyncLoader === "function") {
      DialogComponent.__asyncLoader().then(() => {
        nextTick(show);
      });
    } else {
      nextTick(show);
    }
    return API;
  };
}
var Dialog = {
  install({ $q, parentApp }) {
    $q.dialog = globalDialog(DialogPlugin, true, parentApp);
    if (this.__installed !== true) {
      this.create = $q.dialog;
    }
  }
};
var Quasar = {
  version: "2.5.5",
  install: installQuasar,
  lang: Plugin$1,
  iconSet: Plugin
};
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
const routerKey = /* @__PURE__ */ PolySymbol("r");
const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop = () => {
};
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every((value, i2) => value === b[i2]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position2 = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position2 === 1 || segment === ".")
      continue;
    if (segment === "..")
      position2--;
    else
      break;
  }
  return fromSegments.slice(0, position2).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position2) {
  let scrollToOptions;
  if ("el" in position2) {
    const positionEl = position2.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position2);
  } else {
    scrollToOptions = position2;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position2 = history.state ? history.state.position - delta : -1;
  return position2 + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i2 = 0;
  while (i2 < a.length && i2 < b.length) {
    const diff = b[i2] - a[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i2 = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  return bScore.length - aScore.length;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0)
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props2 = record.props || false;
  if ("component" in record) {
    propsObject.default = props2;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props2 === "boolean" ? props2 : props2[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults2, partialOptions) {
  const options = {};
  for (const key in defaults2) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
  }
  return options;
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers2 = [];
  function add2(handler) {
    handlers2.push(handler);
    return () => {
      const i2 = handlers2.indexOf(handler);
      if (i2 > -1)
        handlers2.splice(i2, 1);
    };
  }
  function reset2() {
    handlers2 = [];
  }
  return {
    add: add2,
    list: () => handlers2,
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props2) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props2.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent(e2)) {
      return router[unref(props2.replace) ? "replace" : "push"](unref(props2.to)).catch(noop);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props2, { slots }) {
    const link = reactive(useLink(props2));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props2.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props2.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props2.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props2.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target2 = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target2))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  setup(props2, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props2.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props2.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props2.name];
      const currentName = props2.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props2.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
        state: data,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? error : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(assign(locationAsObject(failure2.to), {
            state: data,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(error.to, toLocation).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (ready)
      return;
    ready = true;
    setupListeners();
    readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
    readyHandlers.reset();
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position2) => position2 && scrollToPosition(position2)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = new Set();
  const router = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  return router;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
var mdiAlert = "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z";
var mdiChevronLeft = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
var mdiCircleEditOutline = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z";
var mdiDelete = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";
var mdiDeleteCircle = "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z";
var mdiMenu = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";
var mdiMenuDown = "M7,10L12,15L17,10H7Z";
var mdiMouseVariant = "M14,7H10V2.1C12.28,2.56 14,4.58 14,7M4,7C4,4.58 5.72,2.56 8,2.1V7H4M14,12C14,14.42 12.28,16.44 10,16.9V18A3,3 0 0,0 13,21A3,3 0 0,0 16,18V13A4,4 0 0,1 20,9H22L21,10L22,11H20A2,2 0 0,0 18,13H18V18A5,5 0 0,1 13,23A5,5 0 0,1 8,18V16.9C5.72,16.44 4,14.42 4,12V9H14V12Z";
var mdiPencilCircle = "M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z";
var mdiPlusBox = "M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z";
var mdiPlusCircleOutline = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z";
var mdiSyncCircle = "M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12M15.6 13.72A4 4 0 0 0 16 12A4 4 0 0 0 12 8V10L8.88 7L12 4V6A6 6 0 0 1 18 12A5.9 5.9 0 0 1 17.07 15.19M6 12A5.9 5.9 0 0 1 6.93 8.81L8.4 10.28A4 4 0 0 0 8 12A4 4 0 0 0 12 16V14L15 17L12 20V18A6 6 0 0 1 6 12Z";
var mdiTrashCan = "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z";
var mdiViewColumnOutline = "M4 5V18H21V5H4M14 7V16H11V7H14M6 7H9V16H6V7M19 16H16V7H19V16Z";
export { mdiChevronLeft as $, mdiSyncCircle as A, mdiMouseVariant as B, mdiViewColumnOutline as C, Dialog as D, computed as E, Fragment as F, ref as G, withDirectives as H, vModelText as I, createCommentVNode as J, createBlock as K, useRoute as L, mdiCircleEditOutline as M, Notify as N, mdiTrashCan as O, mdiPlusBox as P, Quasar as Q, onMounted as R, getCurrentScope as S, onScopeDispose as T, watch as U, toRef as V, withModifiers as W, normalizeStyle as X, reactive as Y, mdiDelete as Z, mdiPlusCircleOutline as _, defineComponent as a, mdiMenu as a0, useCssVars as a1, vShow as a2, mdiDeleteCircle as a3, mdiPencilCircle as a4, createComponent as a5, h as a6, hSlot as a7, useDarkProps as a8, useRouterLinkProps as a9, removeFocusout as aA, removeEscapeKey as aB, getScrollTarget as aC, Transition as aD, addFocusFn as aE, closePortalMenus as aF, addEscapeKey as aG, childHasFocus as aH, useBtnProps as aI, QIcon as aJ, QBtn as aK, stop as aL, createDirective as aM, getPortalVm as aN, closePortals as aO, mdiMenuDown as aP, QCheckbox as aQ, useDark as aa, useRouterLink as ab, getCurrentInstance as ac, isKeyCode as ad, stopAndPrevent as ae, hUniqueSlot as af, Platform as ag, prevent as ah, nextTick as ai, addEvt as aj, onBeforeUnmount as ak, cleanEvt as al, listenOpts as am, portalList as an, client as ao, getScrollbarWidth as ap, useModelToggleProps as aq, useTransitionProps as ar, useModelToggleEmits as as, useTick as at, useTimeout as au, useTransition as av, useModelToggle as aw, usePortal as ax, addFocusout as ay, position as az, createElementBlock as b, createTRPCClient as c, defineStore as d, createVNode as e, createRouter as f, createWebHistory as g, onetime as h, createPinia as i, createApp as j, r as k, dayjs as l, mdiAlert as m, localizedFormat as n, openBlock as o, useRouter as p, createBaseVNode as q, resolveComponent as r, simpleVueIcon as s, timezone as t, utc as u, unref as v, withCtx as w, createTextVNode as x, renderList as y, toDisplayString as z };
