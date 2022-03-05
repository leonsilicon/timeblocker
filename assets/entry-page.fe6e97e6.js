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
import { a as defineComponent, I as computed, J as ref, b as createElementBlock, v as createBaseVNode, C as toDisplayString, K as withDirectives, L as vModelText, z as createCommentVNode, y as createBlock, e as createVNode, w as withCtx, q as useRoute, p as useRouter, r as resolveComponent, o as openBlock, A as createTextVNode } from "./vendor.9caf08f2.js";
import { u as useAppStore, c as client, L as LocalStorageKey, g as getErrorMessage } from "./index.d7652262.js";
import { C as CircleSpinner } from "./circle-spinner.c1326b80.js";
import "./plugin-vue_export-helper.21dcd24c.js";
const _hoisted_1 = { class: "column my-auto items-center gap-3 self-center rounded-md border-2 border-gray-300 py-8 px-20" };
const _hoisted_2 = { class: "text-6xl font-bold" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("label", { class: "label p-1" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "label-text font-bold" }, "Email")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("label", { class: "label p-1" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "label-text font-bold" }, "Password")
], -1);
const _hoisted_5 = { key: 0 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("label", { class: "label p-1" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "label-text font-bold" }, "Confirm Password")
], -1);
const _hoisted_7 = { key: 1 };
const _hoisted_8 = {
  key: 1,
  class: "text-red-400"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const isLogin = computed(() => route.path === "/login");
    const isRegister = computed(() => !isLogin.value);
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    let entryError = ref("");
    let isRequestLoading = ref(false);
    const appStore = useAppStore();
    function login() {
      return __async(this, null, function* () {
        try {
          entryError.value = "";
          isRequestLoading.value = true;
          const { sessionToken } = yield client.mutation("login", {
            email: email.value,
            password: password.value
          });
          window.localStorage.setItem(LocalStorageKey.sessionToken, sessionToken);
          appStore.isLoggedIn = true;
          yield router.push("/timeblocks");
        } catch (error) {
          entryError.value = getErrorMessage(error);
        } finally {
          isRequestLoading.value = false;
        }
      });
    }
    function register() {
      return __async(this, null, function* () {
        try {
          if (password.value !== confirmPassword.value) {
            throw new Error("Passwords are not equal.");
          }
          entryError.value = "";
          isRequestLoading.value = true;
          const { sessionToken } = yield client.mutation("register", {
            email: email.value,
            password: password.value
          });
          window.localStorage.setItem(LocalStorageKey.sessionToken, sessionToken);
          appStore.isLoggedIn = true;
          yield router.push("/timeblocks");
        } catch (error) {
          entryError.value = getErrorMessage(error);
        } finally {
          isRequestLoading.value = false;
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("h1", _hoisted_2, toDisplayString(isLogin.value ? "Login" : "Register"), 1),
        createBaseVNode("div", null, [
          _hoisted_3,
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => email.value = $event),
            class: "input input-bordered w-[20rem]",
            type: "text"
          }, null, 512), [
            [vModelText, email.value]
          ])
        ]),
        createBaseVNode("div", null, [
          _hoisted_4,
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
            class: "input input-bordered w-[20rem]",
            type: "password"
          }, null, 512), [
            [vModelText, password.value]
          ])
        ]),
        isRegister.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          _hoisted_6,
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => confirmPassword.value = $event),
            class: "input input-bordered w-[20rem]",
            type: "password"
          }, null, 512), [
            [vModelText, confirmPassword.value]
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("button", {
          class: "btn btn-primary mt-2 px-8",
          onClick: _cache[3] || (_cache[3] = ($event) => isLogin.value ? login() : register())
        }, [
          isRequestLoading.value ? (openBlock(), createBlock(CircleSpinner, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(isLogin.value ? "Login" : "Register"), 1))
        ]),
        entryError.value !== "" ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(entryError.value), 1)) : createCommentVNode("", true),
        createVNode(_component_router_link, {
          class: "link hover:text-secondary transition-all",
          to: { force: true, path: isLogin.value ? "/register" : "/login" }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(isLogin.value ? "Don't have an account?" : "Already have an account?"), 1)
          ]),
          _: 1
        }, 8, ["to"])
      ]);
    };
  }
});
export { _sfc_main as default };
