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
import { a as defineComponent, b as createElementBlock, q as createBaseVNode, F as Fragment, y as renderList, p as useRouter, r as resolveComponent, o as openBlock, e as createVNode, z as toDisplayString, A as mdiSyncCircle, B as mdiMouseVariant, C as mdiViewColumnOutline } from "./vendor.fc660d35.js";
import { u as useAppStore } from "./index.da9e57f4.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-2 text-center text-5xl font-bold" }, "timeblocker.io", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "max-w-2xl px-8 text-center" }, ' Timeblocking is a way to manage your time more efficiently and effectively by chunking the hours in a day into "blocks," and assigning a single task to each of these blocks. ', -1);
const _hoisted_3 = { class: "row mx-auto mb-8 max-w-5xl items-stretch gap-4 px-8" };
const _hoisted_4 = { class: "text-bold text-center text-xl" };
const _hoisted_5 = { class: "text-gray-500 text-sm text-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const appStore = useAppStore();
    function goToTimeblockPage() {
      return __async(this, null, function* () {
        if (appStore.isLoggedIn) {
          yield router.push("/timeblocks");
        } else {
          yield router.push("/register");
        }
      });
    }
    const features = [
      {
        title: "Synchronized",
        description: "Access your timeblocks from any internet-connected device, at any time.",
        icon: mdiSyncCircle
      },
      {
        title: "Intuitive UI",
        description: "The easy drag-and-drop UI makes it effortless to plan out your day.",
        icon: mdiMouseVariant
      },
      {
        title: "Multiple Columns",
        description: "Supports multiple columns so you can restructure your day around interruptions.",
        icon: mdiViewColumnOutline
      }
    ];
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", { class: "column items-center py-16" }, [
          _hoisted_1,
          _hoisted_2,
          createBaseVNode("button", {
            class: "btn btn-primary btn-sm mt-4",
            onClick: goToTimeblockPage
          }, " Create Timeblock ")
        ]),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(), createElementBlock(Fragment, null, renderList(features, (feature, index) => {
            return createBaseVNode("div", {
              key: index,
              class: "column flex-1"
            }, [
              createVNode(_component_v_icon, {
                class: "self-center pb-4",
                size: "70",
                icon: feature.icon
              }, null, 8, ["icon"]),
              createBaseVNode("h1", _hoisted_4, toDisplayString(feature.title), 1),
              createBaseVNode("p", _hoisted_5, toDisplayString(feature.description), 1)
            ]);
          }), 64))
        ])
      ], 64);
    };
  }
});
export { _sfc_main as default };
