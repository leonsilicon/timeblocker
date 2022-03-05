import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
import { b as createElementBlock, q as createBaseVNode, e as createVNode, w as withCtx, x as createTextVNode, r as resolveComponent, o as openBlock } from "./vendor.fc660d35.js";
const _sfc_main = {};
const _hoisted_1 = { class: "column center h-full w-full" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-6xl font-bold" }, "404", -1);
const _hoisted_3 = { class: "mt-2" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Page not found. ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Click here to return home. ");
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      _hoisted_4,
      createVNode(_component_router_link, {
        class: "text-blue-400 underline hover:text-blue-500",
        to: "/"
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      })
    ])
  ]);
}
var _404Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _404Page as default };
