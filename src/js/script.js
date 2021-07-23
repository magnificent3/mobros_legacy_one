! function(e) {
  var t = {};

  function n(a) {
    if (t[a]) return t[a].exports;
    var u = t[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(u.exports, u, u.exports, n), u.l = !0, u.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, a) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var u in e) n.d(a, u, function(t) {
        return e[t]
      }.bind(null, u));
    return a
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 0)
}([function(e, t) {
  function n() {
    let e = new Date,
      t = e.getHours(),
      n = e.getMinutes();
    am_pm = "", t > 12 && (t -= 0, am_pm = ""), 0 == t && (hr = 12, am_pm = ""),  t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n;
    document.getElementById("time_curr").innerHTML = `${t.toString()}<strong class="clockanima">:</strong>${n} <span>${am_pm}</span>`
  }

  function a(e, t) {
    ["red", "blue", "cyan", "yellow", "orange", "lime"].forEach(n => {
      const a = document.getElementById(`${e}_color_${n}`);
      a.classList.contains("active") && a.classList.remove("active"), t === n && (a.classList.add("active"), localStorage.setItem(e + "_color", n))
    })
  }

  function u() {
    const e = !localStorage.getItem("show_header") || JSON.parse(localStorage.getItem("show_header")),
      t = !localStorage.getItem("show_time") || JSON.parse(localStorage.getItem("show_time")),
      n = !localStorage.getItem("show_cpu") || JSON.parse(localStorage.getItem("show_cpu")),
      u = !localStorage.getItem("show_cpu_clock") || JSON.parse(localStorage.getItem("show_cpu_clock")),
      l = !localStorage.getItem("show_ram") || JSON.parse(localStorage.getItem("show_ram")),
      m = !localStorage.getItem("show_fps") || JSON.parse(localStorage.getItem("show_fps")),
      r = !localStorage.getItem("show_gpu") || JSON.parse(localStorage.getItem("show_gpu")),
      o = !localStorage.getItem("show_gpu_clock") || JSON.parse(localStorage.getItem("show_gpu_clock")),
      c = !localStorage.getItem("show_vram") || JSON.parse(localStorage.getItem("show_vram")),
      d = localStorage.getItem("time_color"),
      s = localStorage.getItem("cpu_color"),
      i = localStorage.getItem("cpu_clock_color"),
      g = localStorage.getItem("ram_color"),
      p = localStorage.getItem("fps_color"),
      _ = localStorage.getItem("gpu_color"),
      y = localStorage.getItem("gpu_clock_color"),
      f = localStorage.getItem("vram_color");
    if (e ? document.getElementById("header").classList.remove("hide") : document.getElementById("header").classList.add("hide"), document.getElementById("show_header").checked = e, a("time", d || "lime"), document.getElementById("show_time").checked = t, t) {
      const e = d || "lime";
      document.getElementById("time_id1").setAttribute("class", "ri-time-line " + e), document.getElementById("time_id2").setAttribute("class", "pill-txt " + e), document.getElementById("time_curr").setAttribute("class", "load loadClock " + e), document.getElementById("time_id3").setAttribute("class", "pillDown-txt " + e), document.getElementById("time").style.display = "flex"
    } else document.getElementById("time").style.display = "none";
    if (a("cpu", s || "blue"), document.getElementById("show_cpu").checked = n, n) {
      const e = s || "blue";
      document.getElementById("cpu_ico").setAttribute("class", "ri-cpu-fill " + e), document.getElementById("cpu_temp").setAttribute("class", "pill-txt " + e), document.getElementById("cpu_load").setAttribute("class", "load " + e), document.getElementById("cpu_fan").setAttribute("class", "pillDown-txt " + e), document.getElementById("cpu").style.display = "flex"
    } else document.getElementById("cpu").style.display = "none";
    if (a("cpu_clock", i || "blue"), document.getElementById("show_cpu_clock").checked = u, u) {
      const e = i || "blue";
      document.getElementById("cpu_clock_speed_ico").setAttribute("class", "ri-pulse-fill " + e), document.getElementById("cpu_clock_dummy1").setAttribute("class", "pill-txt " + e), document.getElementById("cpu_curr_clock").setAttribute("class", "load loadClock " + e), document.getElementById("cpu_clock_dummy2").setAttribute("class", "pillDown-txt " + e), document.getElementById("cpu_clock").style.display = "flex"
    } else document.getElementById("cpu_clock").style.display = "none";
    if (a("gpu", _ || "orange"), document.getElementById("show_gpu").checked = r, r) {
      const e = _ || "orange";
      document.getElementById("gpu_ico").setAttribute("class", "ri-gamepad-fill " + e), document.getElementById("gpu_temp").setAttribute("class", "pill-txt " + e), document.getElementById("gpu_load").setAttribute("class", "load " + e), document.getElementById("gpu_fan").setAttribute("class", "pillDown-txt " + e), document.getElementById("gpu").style.display = "flex"
    } else document.getElementById("gpu").style.display = "none";
    if (a("gpu_clock", y || "orange"), document.getElementById("show_gpu_clock").checked = o, o) {
      const e = y || "blue";
      document.getElementById("gpu_clock_speed_ico").setAttribute("class", "ri-pulse-fill " + e), document.getElementById("gpu_clock_dummy1").setAttribute("class", "pill-txt " + e), document.getElementById("gpu_curr_clock").setAttribute("class", "load loadClock " + e), document.getElementById("gpu_clock_dummy2").setAttribute("class", "pillDown-txt " + e), document.getElementById("gpu_clock").style.display = "flex"
    } else document.getElementById("gpu_clock").style.display = "none";
    if (a("ram", g || "lime"), document.getElementById("show_ram").checked = l, l) {
      const e = g || "lime";
      document.getElementById("mem_ico").setAttribute("class", "ri-database-fill " + e), document.getElementById("mem_load").setAttribute("class", "load " + e), document.getElementById("mem_used").setAttribute("class", "pillDown-txt " + e), document.getElementById("ram").style.display = "none"
    } else document.getElementById("ram").style.display = "none";
    if (a("fps", p || "yellow"), document.getElementById("show_fps").checked = m, m) {
      const e = p || "yellow";
      document.getElementById("fps_ico").setAttribute("class", "ri-computer-fill " + e), document.getElementById("fps_load").setAttribute("class", "load " + e), document.getElementById("fps_max").setAttribute("class", "pillDown-txt " + e), document.getElementById("fps").style.display = "flex"
    } else document.getElementById("fps").style.display = "none";
    if (a("vram", f || "yellow"), document.getElementById("show_vram").checked = c, c) {
      const e = f || "yellow";
      document.getElementById("vram_ico").setAttribute("class", "ri-sd-card-mini-fill " + e), document.getElementById("vram_load").setAttribute("class", "load " + e), document.getElementById("vram_used").setAttribute("class", "pillDown-txt " + e), document.getElementById("vram").style.display = "none"
    } else document.getElementById("vram").style.display = "none"
  }
  setInterval(n, 1e3), n(), window.set_visibility = function(e) {
    localStorage.setItem(e, JSON.stringify(document.getElementById(e).checked))
  }, window.updateColor = a, window.showhideHeader = function() {
    const e = document.getElementById("show_header").checked;
    e ? document.getElementById("header").classList.remove("hide") : document.getElementById("header").classList.add("hide"), localStorage.setItem("show_header", JSON.stringify(e))
  }, window.update = u, window.showhideSettings = function() {
    document.getElementById("settings").classList.contains("hideSettings") ? (document.getElementById("settings").classList.remove("hideSettings"), document.getElementById("open_settings").style.display = "none") : (document.getElementById("settings").classList.add("hideSettings"), document.getElementById("open_settings").style.display = "block")
  };
  const l = {
    CPU: {
      name: {
        value: "CPU",
        ref: document.getElementById("cpu_name")
      },
      temperature: {
        unit: {
          value: "",
          ref: document.getElementById("cpu_temp_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("cpu_temp_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("cpu_temp_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("cpu_temp_max")
        }
      },
      usage: {
        unit: {
          value: "",
          ref: document.getElementById("cpu_usage_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("cpu_usage_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("cpu_usage_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("cpu_usage_max")
        }
      },
      fan: {
        unit: {
          value: "",
          ref: document.getElementById("cpu_fan_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("cpu_fan_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("cpu_fan_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("cpu_fan_max")
        }
      },
      clock: {
        unit: {
          value: "",
          ref: document.getElementById("cpu_clock_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("cpu_clock_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("cpu_clock_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("cpu_clock_max")
        }
      }
    },
    GPU: {
      name: {
        value: "GPU",
        ref: document.getElementById("gpu_name")
      },
      temperature: {
        unit: {
          value: "",
          ref: document.getElementById("gpu_temp_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("gpu_temp_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("gpu_temp_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("gpu_temp_max")
        }
      },
      usage: {
        unit: {
          value: "",
          ref: document.getElementById("gpu_usage_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("gpu_usage_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("gpu_usage_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("gpu_usage_max")
        }
      },
      fan: {
        unit: {
          value: "",
          ref: document.getElementById("gpu_fan_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("gpu_fan_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("gpu_fan_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("gpu_fan_max")
        }
      },
      clock: {
        unit: {
          value: "",
          ref: document.getElementById("gpu_clock_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("gpu_clock_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("gpu_clock_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("gpu_clock_max")
        }
      },
      vram: {
        usage: {
          unit: {
            value: "",
            ref: document.getElementById("vram_usage_unit")
          },
          min: {
            value: 0,
            ref: document.getElementById("vram_usage_min")
          },
          current: {
            value: 0,
            ref: document.getElementById("vram_usage_curr")
          },
          max: {
            value: 0,
            ref: document.getElementById("vram_usage_max")
          }
        },
        used: {
          unit: {
            value: "",
            ref: document.getElementById("vram_used_unit")
          },
          min: {
            value: 0,
            ref: document.getElementById("vram_used_min")
          },
          current: {
            value: 0,
            ref: document.getElementById("vram_used_curr")
          },
          max: {
            value: 0,
            ref: document.getElementById("vram_used_max")
          }
        }
      }
    },
    Memory: {
      name: {
        value: "Memory",
        ref: document.getElementById("mem_name")
      },
      usage: {
        unit: {
          value: "",
          ref: document.getElementById("mem_usage_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("mem_usage_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("mem_usage_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("mem_usage_max")
        }
      },
      used: {
        unit: {
          value: "",
          ref: document.getElementById("mem_used_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("mem_used_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("mem_used_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("mem_used_max")
        }
      }
    },
    Misc: {
      name: {
        value: "Misc",
        ref: null
      },
      fps: {
        unit: {
          value: "FPS",
          ref: document.getElementById("misc_fps_unit")
        },
        min: {
          value: 0,
          ref: document.getElementById("misc_fps_min")
        },
        current: {
          value: 0,
          ref: document.getElementById("misc_fps_curr")
        },
        max: {
          value: 0,
          ref: document.getElementById("misc_fps_max")
        }
      }
    },
    update: (e, t) => {
      e.ref && (e.ref.innerText = t, e.value = t)
    },
    set: (e, t, n) => {
      e.ref && (e.ref.innerText = t, e.value = n)
    },
    get: e => e.value ? e.value : null
  };
  MobroSDK.init().then(() => {
    u(), MobroSDK.addChannelListener("general_processor_temperature", e => {
      if (e.payload) {
        const {
          sensortype: t,
          unit: n,
          value: a,
          min: u,
          max: m,
          _hardware: r
        } = e.payload;
        "Temperature" === t && "Processor" === r.hardwaretype && (l.update(l.CPU.temperature.unit, n), l.set(l.CPU.temperature.min, u + n, u), l.set(l.CPU.temperature.current, a + n, a), l.set(l.CPU.temperature.max, m + n, m), l.update(l.CPU.name, r.title), function() {
          document.getElementById("cpu_temp").innerHTML = `${l.CPU.temperature.current.value}<span> ${l.CPU.temperature.unit.value}</span>`;
          const e = document.getElementById("cpu");
          l.CPU.temperature.current.value > 90 ? e.classList.add("warning") : e.classList.remove("warning")
        }())
      }
    }), MobroSDK.addChannelListener("general_processor_usage", e => {
      if (e.payload) {
        const {
          sensortype: t,
          unit: n,
          value: a,
          min: u,
          max: m,
          _hardware: r
        } = e.payload;
        "Usage" === t && "Processor" === r.hardwaretype && (l.update(l.CPU.usage.unit, n), l.set(l.CPU.usage.min, Math.round(u) + n, Math.round(u)), l.set(l.CPU.usage.current, Math.round(a) + n, Math.round(a)), l.set(l.CPU.usage.max, Math.round(m) + n, Math.round(m)), document.getElementById("cpu_load").innerHTML = `${l.CPU.usage.current.value}<span> ${l.CPU.usage.unit.value}</span>`)
      }
    }), MobroSDK.addChannelListener("general_graphics_temperature", e => {
      if (e.payload) {
        const {
          sensortype: t,
          unit: n,
          value: a,
          min: u,
          max: m,
          _hardware: r
        } = e.payload;
        "Temperature" === t && "Graphics" === r.hardwaretype && (l.update(l.GPU.temperature.unit, n), l.set(l.GPU.temperature.min, u + n, u), l.set(l.GPU.temperature.current, a + n, a), l.set(l.GPU.temperature.max, m + n, m), l.update(l.GPU.name, r.title), function() {
          document.getElementById("gpu_temp").innerHTML = `${l.GPU.temperature.current.value}<span> ${l.GPU.temperature.unit.value}</span>`;
          const e = document.getElementById("gpu");
          l.GPU.temperature.current.value > 90 ? e.classList.add("warning") : e.classList.remove("warning")
        }())
      }
    }), MobroSDK.addChannelListener("general_graphics_usage", e => {
      if (e.payload) {
        const {
          sensortype: t,
          unit: n,
          value: a,
          min: u,
          max: m,
          _hardware: r
        } = e.payload;
        "Usage" === t && "Graphics" === r.hardwaretype && (l.update(l.GPU.usage.unit, n), l.set(l.GPU.usage.min, Math.round(u) + n, Math.round(u)), l.set(l.GPU.usage.current, Math.round(a) + n, Math.round(a)), l.set(l.GPU.usage.max, Math.round(m) + n, Math.round(m)), document.getElementById("gpu_load").innerHTML = `${l.GPU.usage.current.value}<span> ${l.GPU.usage.unit.value}</span>`)
      }
    }), MobroSDK.addChannelListener("general_memory_usage", e => {
      if (e.payload) {
        const {
          sensortype: t,
          unit: n,
          value: a,
          min: u,
          max: m,
          _hardware: r
        } = e.payload;
        "Usage" === t && "Memory" === r.hardwaretype && (l.update(l.Memory.usage.unit, n), l.set(l.Memory.usage.min, Math.round(u) + n, Math.round(u)), l.set(l.Memory.usage.current, Math.round(a) + n, Math.round(a)), l.set(l.Memory.usage.max, Math.round(m) + n, Math.round(m)), l.update(l.Memory.name, r.title), document.getElementById("mem_load").innerHTML = `${l.Memory.usage.current.value}<span> ${l.Memory.usage.unit.value}</span>`)
      }
    }), MobroSDK.addChannelListener("general_memory_used", e => {
      if (e.payload) {
        const {
          sensortype: t,
          unit: n,
          value: a,
          min: u,
          max: m,
          _hardware: r
        } = e.payload;
        if ("Data" === t && "Memory" === r.hardwaretype) {
          const e = u.toPrecision(3),
            t = a.toPrecision(3),
            o = m.toPrecision(3);
          l.update(l.Memory.used.unit, n), l.set(l.Memory.used.min, e + n, e), l.set(l.Memory.used.current, t + n, t), l.set(l.Memory.used.max, o + n, o), l.update(l.Memory.name, r.title), document.getElementById("mem_used").innerHTML = `${l.Memory.used.current.value}<span> ${l.Memory.used.unit.value}</span>`
        }
      }
    }), MobroSDK.addChannelListener("theme_fan_speed_cpu", e => {
      if (e.payload) {
        const {
          unit: t,
          value: n,
          min: a,
          max: u
        } = e.payload, m = a || 0, r = n || 0, o = u || 0, c = t || "RPM";
        l.update(l.CPU.fan.unit, c), l.set(l.CPU.fan.min, m + c, m), l.set(l.CPU.fan.current, r + c, r), l.set(l.CPU.fan.max, o + c, o),
          function() {
            const e = 100 - l.CPU.fan.current.value / 3e3 * 100,
              t = parseInt(e >= 100 ? 0 : 7 * e);
            document.getElementById("cpu_fan").innerHTML = `${l.CPU.fan.current.value}<span>${l.CPU.fan.unit.value}</span>`, document.getElementById("cpu_fan_anima").style = `animation: spin ${t}ms linear infinite;`
          }()
      }
    }), MobroSDK.addChannelListener("theme_clock_speed_cpu", e => {
      if (e.payload) {
        const {
          unit: t,
          value: n,
          min: a,
          max: u
        } = e.payload, m = a ? parseInt(a) : 0, r = n ? parseInt(n) : 0, o = u ? parseInt(u) : 0, c = t || "";
        l.update(l.CPU.clock.unit, c), l.set(l.CPU.clock.min, m + c, m), l.set(l.CPU.clock.current, r + c, r), l.set(l.CPU.clock.max, o + c, o), document.getElementById("cpu_curr_clock").innerHTML = `${l.CPU.clock.current.value}<span> ${l.CPU.clock.unit.value.toLocaleUpperCase()}</span>`
      }
    }), MobroSDK.addChannelListener("theme_fan_speed_gpu", e => {
      if (e.payload) {
        const {
          unit: t,
          value: n,
          min: a,
          max: u
        } = e.payload, m = a || 0, r = n || 0, o = u || 0, c = t || "RPM";
        l.update(l.GPU.fan.unit, c), l.set(l.GPU.fan.min, m + c, m), l.set(l.GPU.fan.current, r + c, r), l.set(l.GPU.fan.max, o + c, o),
          function() {
            const e = 100 - l.GPU.fan.current.value / 4e3 * 100,
              t = parseInt(e >= 100 ? 0 : 7 * e);
            document.getElementById("gpu_fan").innerHTML = `${l.GPU.fan.current.value}<span>${l.GPU.fan.unit.value}</span>`, document.getElementById("gpu_fan_anima").style = `animation: spin ${t}ms linear infinite;`
          }()
      }
    }), MobroSDK.addChannelListener("theme_clock_speed_gpu", e => {
      if (e.payload) {
        const {
          unit: t,
          value: n,
          min: a,
          max: u
        } = e.payload, m = a ? parseInt(a) : 0, r = n ? parseInt(n) : 0, o = u ? parseInt(u) : 0, c = t || "";
        l.update(l.GPU.clock.unit, c), l.set(l.GPU.clock.min, m + c, m), l.set(l.GPU.clock.current, r + c, r), l.set(l.GPU.clock.max, o + c, o), document.getElementById("gpu_curr_clock").innerHTML = `${l.GPU.clock.current.value}<span> ${l.GPU.clock.unit.value.toLocaleUpperCase()}</span>`
      }
    }), MobroSDK.addChannelListener("theme_vram", e => {
      if (e.payload) {
        const {
          sensortype: t,
          unit: n,
          value: a,
          min: u,
          max: m,
          _hardware: r
        } = e.payload;
        if ("Data" === t && "Graphics" === r.hardwaretype) {
          const e = Math.round(u),
            t = Math.round(a),
            r = Math.round(m);
          l.update(l.GPU.vram.used.unit, n), l.set(l.GPU.vram.used.min, e + n, e), l.set(l.GPU.vram.used.current, t + n, t), l.set(l.GPU.vram.used.max, r + n, r), document.getElementById("vram_used").innerHTML = `${l.GPU.vram.used.current.value}<span> ${l.GPU.vram.used.unit.value}</span>`
        }
      }
    }), MobroSDK.addChannelListener("theme_vram_percentage", e => {
      if (e.payload) {
        const {
          sensortype: t,
          unit: n,
          value: a,
          min: u,
          max: m,
          _hardware: r
        } = e.payload;
        "Usage" === t && "Graphics" === r.hardwaretype && (l.update(l.GPU.vram.usage.unit, n), l.set(l.GPU.vram.usage.min, Math.round(u) + n, Math.round(u)), l.set(l.GPU.vram.usage.current, Math.round(a) + n, Math.round(a)), l.set(l.GPU.vram.usage.max, Math.round(m) + n, Math.round(m)), document.getElementById("vram_load").innerHTML = `${l.GPU.vram.usage.current.value}<span> ${l.GPU.vram.usage.unit.value}</span>`)
      }
    }), MobroSDK.addChannelListener("theme_FPS", e => {
      if (e.payload) {
        const {
          unit: t,
          value: n,
          min: a,
          max: u
        } = e.payload;
        null != n && (l.update(l.GPU.vram.usage.unit, t), l.set(l.Misc.fps.min, a + t, a), l.set(l.Misc.fps.current, n + t, n), l.set(l.Misc.fps.max, u + t, u), document.getElementById("fps_load").innerHTML = `${l.Misc.fps.current.value}<span> ${l.Misc.fps.unit.value}</span>`)
      }
    })
  })
}]);
//# sourceMappingURL=script.js.map
