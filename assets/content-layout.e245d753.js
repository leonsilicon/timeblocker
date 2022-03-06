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
import { a as defineComponent, p as useRouter, q as useRoute, r as resolveComponent, o as openBlock, b as createElementBlock, e as createVNode, w as withCtx, v as createBaseVNode, x as unref, F as Fragment, y as createBlock, z as createCommentVNode, A as createTextVNode } from "./vendor.9caf08f2.js";
import { u as useAppStore, L as LocalStorageKey, c as client } from "./index.67e95674.js";
const _hoisted_1$1 = { class: "row items-center bg-white p-4" };
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode(" timeblocker.io ");
const _hoisted_3 = { class: "ml-auto" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Open Timeblock ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Login ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Register ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const appStore = useAppStore();
    const router = useRouter();
    const route = useRoute();
    function logout() {
      return __async(this, null, function* () {
        const sessionToken = localStorage.getItem(LocalStorageKey.sessionToken);
        try {
          if (sessionToken !== null) {
            yield client.mutation("logout", {
              sessionToken
            });
          }
        } finally {
          localStorage.removeItem(LocalStorageKey.sessionToken);
          appStore.isLoggedIn = false;
          yield router.push({ path: "/login", force: true });
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_router_link, {
          to: "/",
          class: "hover:text-primary text-xl font-bold transition-all"
        }, {
          default: withCtx(() => [
            _hoisted_2$1
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_3, [
          unref(appStore).isLoggedIn === true ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            !unref(route).path.startsWith("/timeblock") ? (openBlock(), createBlock(_component_router_link, {
              key: 0,
              to: "/timeblocks",
              class: "btn btn-primary btn-sm mr-2"
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("button", {
              class: "btn btn-sm btn-accent",
              onClick: logout
            }, "Logout")
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(_component_router_link, {
              to: "/login",
              class: "btn btn-primary btn-sm mr-2"
            }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            }),
            createVNode(_component_router_link, {
              to: "/register",
              class: "btn btn-secondary btn-sm"
            }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            })
          ], 64))
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "column h-full w-full" };
const _hoisted_2 = { class: "column grow" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_router_view)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
