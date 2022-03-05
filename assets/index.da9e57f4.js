var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { d as defineStore, c as createTRPCClient, a as defineComponent, r as resolveComponent, o as openBlock, b as createElementBlock, e as createVNode, f as createRouter, g as createWebHistory, N as Notify, m as mdiAlert, h as onetime, i as createPinia, j as createApp, Q as Quasar, D as Dialog, s as simpleVueIcon, k as r, l as dayjs, u as utc, t as timezone, n as localizedFormat } from "./vendor.fc660d35.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
function createAppStoreState() {
  return {
    isLoggedIn: void 0,
    accountId: void 0
  };
}
const useAppStore = defineStore("app", {
  state: () => createAppStoreState()
});
var LocalStorageKey;
(function(LocalStorageKey2) {
  LocalStorageKey2["sessionToken"] = "session-token";
})(LocalStorageKey || (LocalStorageKey = {}));
const client = createTRPCClient({
  url: "https://ib-timeblocker.herokuapp.com/trpc",
  headers: () => {
    const sessionToken = window.localStorage.getItem(LocalStorageKey.sessionToken);
    if (sessionToken === null) {
      return {};
    } else {
      return {
        authorization: `Bearer ${sessionToken}`
      };
    }
  }
});
var app_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  class: "h-full w-full",
  "data-theme": "emerald"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const appStore = useAppStore();
    (() => __async(this, null, function* () {
      if (appStore.isLoggedIn) {
        const isValidToken = yield client.query("checkToken");
        if (!isValidToken) {
          window.localStorage.removeItem(LocalStorageKey.sessionToken);
          appStore.isLoggedIn = false;
        }
      } else {
        yield client.query("ping");
      }
    }))();
    const sessionToken = window.localStorage.getItem(LocalStorageKey.sessionToken);
    if (sessionToken === null) {
      appStore.isLoggedIn = false;
    } else {
      appStore.isLoggedIn = true;
    }
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_router_view)
      ]);
    };
  }
});
var index = "";
var tailwind = "";
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const routes = [
  {
    path: "/",
    component: () => __async(this, null, function* () {
      return __vitePreload(() => import("./content-layout.d7807b73.js"), true ? ["assets/content-layout.d7807b73.js","assets/vendor.fc660d35.js","assets/vendor.ca830f9c.css"] : void 0);
    }),
    children: [
      {
        path: "/",
        component: () => __async(this, null, function* () {
          return __vitePreload(() => import("./landing-page.9cd1c25f.js"), true ? ["assets/landing-page.9cd1c25f.js","assets/vendor.fc660d35.js","assets/vendor.ca830f9c.css"] : void 0);
        })
      },
      {
        path: "/login",
        component: () => __async(this, null, function* () {
          return __vitePreload(() => import("./entry-page.dc57fd62.js"), true ? ["assets/entry-page.dc57fd62.js","assets/vendor.fc660d35.js","assets/vendor.ca830f9c.css","assets/circle-spinner.0c4cb918.js","assets/plugin-vue_export-helper.21dcd24c.js"] : void 0);
        })
      },
      {
        path: "/register",
        component: () => __async(this, null, function* () {
          return __vitePreload(() => import("./entry-page.dc57fd62.js"), true ? ["assets/entry-page.dc57fd62.js","assets/vendor.fc660d35.js","assets/vendor.ca830f9c.css","assets/circle-spinner.0c4cb918.js","assets/plugin-vue_export-helper.21dcd24c.js"] : void 0);
        })
      },
      {
        path: "/:catchAll(.*)",
        component: () => __async(this, null, function* () {
          return __vitePreload(() => import("./404-page.e6b11bb5.js"), true ? ["assets/404-page.e6b11bb5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.fc660d35.js","assets/vendor.ca830f9c.css"] : void 0);
        })
      }
    ]
  },
  {
    path: "/timeblocks",
    component: () => __async(this, null, function* () {
      return __vitePreload(() => import("./timeblock-calendar.b2b2896e.js"), true ? ["assets/timeblock-calendar.b2b2896e.js","assets/timeblock-calendar.fe576b31.css","assets/vendor.fc660d35.js","assets/vendor.ca830f9c.css","assets/circle-spinner.0c4cb918.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/date.a8f0eaea.js"] : void 0);
    })
  },
  {
    path: "/timeblock/:id",
    component: () => __async(this, null, function* () {
      return __vitePreload(() => import("./timeblock-page.7d4365b8.js"), true ? ["assets/timeblock-page.7d4365b8.js","assets/timeblock-page.d6af0fa0.css","assets/vendor.fc660d35.js","assets/vendor.ca830f9c.css","assets/date.a8f0eaea.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/circle-spinner.0c4cb918.js"] : void 0);
    })
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
function displayError(error) {
  const errorMessage = getErrorMessage(error);
  Notify.create({
    message: errorMessage,
    type: "negative",
    icon: mdiAlert
  });
}
function getErrorCode(error) {
  if (typeof error === "object" && error !== null && "message" in error) {
    const rawMessage = error.message;
    const colonIndex = rawMessage.indexOf(": ");
    if (colonIndex === -1) {
      return rawMessage;
    }
    const code = rawMessage.slice(0, colonIndex);
    return code;
  } else {
    return void 0;
  }
}
function getErrorMessage(error) {
  if (typeof error === "object" && error !== null && "message" in error) {
    const rawMessage = error.message;
    const colonIndex = rawMessage.indexOf(": ");
    if (colonIndex === -1) {
      return rawMessage;
    }
    const message = rawMessage.slice(colonIndex + 2);
    return message;
  } else {
    return String(error);
  }
}
const getPinia = onetime(() => createPinia());
let isWindowErrorHandlerSet = false;
function mountComponent(component, props, selectorOrElement) {
  const app = createApp(component, props);
  app.use(Quasar, {
    plugins: {
      Notify,
      Dialog
    }
  });
  function errorHandler(error) {
    if (getErrorCode(error) === "tokenNotFound") {
      window.localStorage.removeItem(LocalStorageKey.sessionToken);
      const appStore = useAppStore();
      appStore.isLoggedIn = false;
    }
    console.error(error);
  }
  app.config.errorHandler = errorHandler;
  if (!isWindowErrorHandlerSet) {
    window.addEventListener("error", (event) => {
      errorHandler(event.error);
    });
    window.addEventListener("unhandledrejection", (event) => {
      errorHandler(new Error(event.reason));
    });
    isWindowErrorHandlerSet = true;
  }
  app.use(getPinia());
  app.use(simpleVueIcon);
  app.use(r);
  app.use(router);
  app.mount(selectorOrElement);
}
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.tz.setDefault("America/Toronto");
mountComponent(_sfc_main, null, "#app");
export { LocalStorageKey as L, client as c, displayError as d, getErrorMessage as g, mountComponent as m, useAppStore as u };