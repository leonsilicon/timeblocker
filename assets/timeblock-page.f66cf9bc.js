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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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
import { S as getCurrentScope, T as onScopeDispose, J as ref, U as watch, x as unref, a as defineComponent, I as computed, V as toRef, o as openBlock, b as createElementBlock, v as createBaseVNode, W as withModifiers, A as createTextVNode, C as toDisplayString, z as createCommentVNode, X as normalizeStyle, F as Fragment, B as renderList, y as createBlock, Y as reactive, e as createVNode, l as dayjs, r as resolveComponent, Z as mdiDelete, _ as mdiPlusCircleOutline, w as withCtx, $ as mdiChevronLeft, a0 as mdiMenu, a1 as useCssVars, K as withDirectives, a2 as vShow, a3 as mdiDeleteCircle, a4 as mdiPencilCircle, a5 as createComponent, a6 as h, a7 as hSlot, a8 as useDarkProps, a9 as useRouterLinkProps, aa as useDark, ab as useRouterLink, ac as getCurrentInstance, ad as isKeyCode, ae as stopAndPrevent, af as hUniqueSlot, ag as Platform, ah as prevent, ai as nextTick, aj as addEvt, R as onMounted, ak as onBeforeUnmount, al as cleanEvt, am as listenOpts, an as portalList, ao as client$1, ap as getScrollbarWidth, aq as useModelToggleProps, ar as useTransitionProps, as as useModelToggleEmits, at as useTick, au as useTimeout, av as useTransition, aw as useModelToggle, ax as usePortal, ay as addFocusout, az as position, aA as removeFocusout, aB as removeEscapeKey, aC as getScrollTarget, aD as Transition, aE as addFocusFn, aF as closePortalMenus, aG as addEscapeKey, aH as childHasFocus, aI as useBtnProps, aJ as QIcon, aK as QBtn, aL as stop, aM as createDirective, aN as getPortalVm, aO as closePortals, aP as mdiMenuDown, aQ as QCheckbox, L as vModelText, q as useRoute } from "./vendor.9caf08f2.js";
import { u as useTimeblockStore, t as timeblockDateToDayjs } from "./date.61d6a1c3.js";
import { c as client, d as displayError, u as useAppStore, L as LocalStorageKey, r as router } from "./index.67e95674.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
import { C as CircleSpinner } from "./circle-spinner.c1326b80.js";
let random = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  let step = -~(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id = "";
    while (true) {
      let bytes = getRandom(step);
      let j = step;
      while (j--) {
        id += alphabet[bytes[j] & mask] || "";
        if (id.length === size)
          return id;
      }
    }
  };
};
let customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);
var naughtyWords = ["2g1c", "2 girls 1 cup", "acrotomophilia", "alabama hot pocket", "alaskan pipeline", "anal", "anilingus", "anus", "apeshit", "arsehole", "ass", "asshole", "assmunch", "auto erotic", "autoerotic", "babeland", "baby batter", "baby juice", "ball gag", "ball gravy", "ball kicking", "ball licking", "ball sack", "ball sucking", "bangbros", "bangbus", "bareback", "barely legal", "barenaked", "bastard", "bastardo", "bastinado", "bbw", "bdsm", "beaner", "beaners", "beaver cleaver", "beaver lips", "beastiality", "bestiality", "big black", "big breasts", "big knockers", "big tits", "bimbos", "birdlock", "bitch", "bitches", "black cock", "blonde action", "blonde on blonde action", "blowjob", "blow job", "blow your load", "blue waffle", "blumpkin", "bollocks", "bondage", "boner", "boob", "boobs", "booty call", "brown showers", "brunette action", "bukkake", "bulldyke", "bullet vibe", "bullshit", "bung hole", "bunghole", "busty", "butt", "buttcheeks", "butthole", "camel toe", "camgirl", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "chocolate rosebuds", "cialis", "circlejerk", "cleveland steamer", "clit", "clitoris", "clover clamps", "clusterfuck", "cock", "cocks", "coprolagnia", "coprophilia", "cornhole", "coon", "coons", "creampie", "cum", "cumming", "cumshot", "cumshots", "cunnilingus", "cunt", "darkie", "date rape", "daterape", "deep throat", "deepthroat", "dendrophilia", "dick", "dildo", "dingleberry", "dingleberries", "dirty pillows", "dirty sanchez", "doggie style", "doggiestyle", "doggy style", "doggystyle", "dog style", "dolcett", "domination", "dominatrix", "dommes", "donkey punch", "double dong", "double penetration", "dp action", "dry hump", "dvda", "eat my ass", "ecchi", "ejaculation", "erotic", "erotism", "escort", "eunuch", "fag", "faggot", "fecal", "felch", "fellatio", "feltch", "female squirting", "femdom", "figging", "fingerbang", "fingering", "fisting", "foot fetish", "footjob", "frotting", "fuck", "fuck buttons", "fuckin", "fucking", "fucktards", "fudge packer", "fudgepacker", "futanari", "gangbang", "gang bang", "gay sex", "genitals", "giant cock", "girl on", "girl on top", "girls gone wild", "goatcx", "goatse", "god damn", "gokkun", "golden shower", "goodpoop", "goo girl", "goregasm", "grope", "group sex", "g-spot", "guro", "hand job", "handjob", "hard core", "hardcore", "hentai", "homoerotic", "honkey", "hooker", "horny", "hot carl", "hot chick", "how to kill", "how to murder", "huge fat", "humping", "incest", "intercourse", "jack off", "jail bait", "jailbait", "jelly donut", "jerk off", "jigaboo", "jiggaboo", "jiggerboo", "jizz", "juggs", "kike", "kinbaku", "kinkster", "kinky", "knobbing", "leather restraint", "leather straight jacket", "lemon party", "livesex", "lolita", "lovemaking", "make me come", "male squirting", "masturbate", "masturbating", "masturbation", "menage a trois", "milf", "missionary position", "mong", "motherfucker", "mound of venus", "mr hands", "muff diver", "muffdiving", "nambla", "nawashi", "negro", "neonazi", "nigga", "nigger", "nig nog", "nimphomania", "nipple", "nipples", "nsfw", "nsfw images", "nude", "nudity", "nutten", "nympho", "nymphomania", "octopussy", "omorashi", "one cup two girls", "one guy one jar", "orgasm", "orgy", "paedophile", "paki", "panties", "panty", "pedobear", "pedophile", "pegging", "penis", "phone sex", "piece of shit", "pikey", "pissing", "piss pig", "pisspig", "playboy", "pleasure chest", "pole smoker", "ponyplay", "poof", "poon", "poontang", "punany", "poop chute", "poopchute", "porn", "porno", "pornography", "prince albert piercing", "pthc", "pubes", "pussy", "queaf", "queef", "quim", "raghead", "raging boner", "rape", "raping", "rapist", "rectum", "reverse cowgirl", "rimjob", "rimming", "rosy palm", "rosy palm and her 5 sisters", "rusty trombone", "sadism", "santorum", "scat", "schlong", "scissoring", "semen", "sex", "sexcam", "sexo", "sexy", "sexual", "sexually", "sexuality", "shaved beaver", "shaved pussy", "shemale", "shibari", "shit", "shitblimp", "shitty", "shota", "shrimping", "skeet", "slanteye", "slut", "s&m", "smut", "snatch", "snowballing", "sodomize", "sodomy", "spastic", "spic", "splooge", "splooge moose", "spooge", "spread legs", "spunk", "strap on", "strapon", "strappado", "strip club", "style doggy", "suck", "sucks", "suicide girls", "sultry women", "swastika", "swinger", "tainted love", "taste my", "tea bagging", "threesome", "throating", "thumbzilla", "tied up", "tight white", "tit", "tits", "titties", "titty", "tongue in a", "topless", "tosser", "towelhead", "tranny", "tribadism", "tub girl", "tubgirl", "tushy", "twat", "twink", "twinkie", "two girls one cup", "undressing", "upskirt", "urethra play", "urophilia", "vagina", "venus mound", "viagra", "vibrator", "violet wand", "vorarephilia", "voyeur", "voyeurweb", "voyuer", "vulva", "wank", "wetback", "wet dream", "white power", "whore", "worldsex", "wrapping men", "wrinkled starfish", "xx", "xxx", "yaoi", "yellow showers", "yiffy", "zoophilia", "\u{1F595}"];
function hasNaughtyWord(id) {
  const idWithNumbersReplaced = id.replace(/1/g, "i").replace(/3/g, "e").replace(/5/g, "s").replace(/8/g, "b").replace(/0/g, "o");
  for (const naughtyWord of naughtyWords) {
    const word = naughtyWord.replace(/ /g, "").replace("l", "i");
    if (new RegExp(word, "gi").test(idWithNumbersReplaced))
      return true;
  }
  return false;
}
function niceNanoidWrapper(customAlphabet2) {
  const gen = customAlphabet2("6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz");
  return function(size = 30) {
    let id = gen(size);
    while (hasNaughtyWord(id)) {
      id = gen(size);
    }
    return id;
  };
}
const nanoid = niceNanoidWrapper(customAlphabet);
const _Task = class {
  constructor({
    id,
    name,
    description,
    color,
    isHidden
  }) {
    __publicField(this, "type");
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "color");
    __publicField(this, "description");
    __publicField(this, "isHidden");
    this.id = id;
    this.setName(name);
    this.setColor(color != null ? color : _Task.color);
    if (description !== void 0) {
      this.setDescription(description);
    }
    this.type = "normal";
    this.setIsHidden(isHidden);
  }
  setName(name) {
    this.name = name;
  }
  getType() {
    return this.type;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  getIsHidden() {
    return this.isHidden;
  }
  setIsHidden(isHidden) {
    this.isHidden = isHidden;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }
  removeDescription() {
    this.description = void 0;
  }
};
let Task = _Task;
__publicField(Task, "color", "#ffcccc");
const _FixedTimeTask = class extends Task {
  constructor(props) {
    super(props);
    __publicField(this, "startMinute");
    __publicField(this, "endMinute");
    this.setColor(_FixedTimeTask.color);
    this.type = "fixed-time";
    this.setStartMinute(props.startMinute);
    this.setEndMinute(props.endMinute);
  }
  getStartMinute() {
    return this.startMinute;
  }
  setStartMinute(startMinute) {
    this.startMinute = startMinute;
  }
  getEndMinute() {
    return this.endMinute;
  }
  setEndMinute(endMinute) {
    this.endMinute = endMinute;
  }
};
let FixedTimeTask = _FixedTimeTask;
__publicField(FixedTimeTask, "color", "#ffd9b3");
const _FixedWeeklyTimeTask = class extends FixedTimeTask {
  constructor(props) {
    super(props);
    __publicField(this, "dayOfWeek");
    this.setColor(_FixedWeeklyTimeTask.color);
    this.type = "fixed-weekly-time";
    this.setDayOfWeek(props.dayOfWeek);
  }
  setDayOfWeek(dayOfWeek) {
    if (dayOfWeek !== void 0 && (dayOfWeek < 0 || dayOfWeek > 6)) {
      throw new Error("Day of week must be between 0 and 6 inclusive.");
    }
    this.dayOfWeek = dayOfWeek;
  }
  getDayOfWeek() {
    return this.dayOfWeek;
  }
};
let FixedWeeklyTimeTask = _FixedWeeklyTimeTask;
__publicField(FixedWeeklyTimeTask, "color", "#e6ffe6");
function calculateTaskBlocksRatios({
  taskBlocks
}) {
  const ratios = [];
  for (const taskBlock of taskBlocks) {
    const startMinute = taskBlock.getStartMinute();
    const endMinute = taskBlock.getEndMinute();
    ratios.push(endMinute - startMinute);
  }
  return ratios;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unref(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop2 = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop2);
  return stop2;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window: window2 = defaultWindow
  } = options;
  const x = ref(initialValue.x);
  const y = ref(initialValue.y);
  const sourceType = ref(null);
  const mouseHandler = (event) => {
    if (type === "page") {
      x.value = event.pageX;
      y.value = event.pageY;
    } else if (type === "client") {
      x.value = event.clientX;
      y.value = event.clientY;
    }
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const touch2 = event.touches[0];
      if (type === "page") {
        x.value = touch2.pageX;
        y.value = touch2.pageY;
      } else if (type === "client") {
        x.value = touch2.clientX;
        y.value = touch2.clientY;
      }
      sourceType.value = "touch";
    }
  };
  if (window2) {
    useEventListener(window2, "mousemove", mouseHandler, { passive: true });
    useEventListener(window2, "dragover", mouseHandler, { passive: true });
    if (touch) {
      useEventListener(window2, "touchstart", touchHandler, { passive: true });
      useEventListener(window2, "touchmove", touchHandler, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window2, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
__spreadValues$3({
  text: ""
}, initialRect);
var TaskBoxDropType;
(function(TaskBoxDropType2) {
  TaskBoxDropType2["taskBoxDrop"] = "task-box-drop";
})(TaskBoxDropType || (TaskBoxDropType = {}));
function roundToNearest15(n) {
  return Math.round(n / 15) * 15;
}
const _hoisted_1$9 = ["onMousedown"];
const _hoisted_2$8 = {
  key: 0,
  class: "text-sm text-gray-500"
};
const _hoisted_3$6 = ["onMousedown"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    timeblockColumnId: null,
    taskBlockId: null,
    heightRatio: null
  },
  setup(__props) {
    const props = __props;
    let borderDraggingTimeblockTaskBlockStyle = ref({});
    const timeblockStore = useTimeblockStore();
    const taskBlock = computed(() => timeblockStore.activeTimeblock.getTaskBlock(props.taskBlockId));
    const task = computed(() => taskBlock.value.getTask());
    const timeblockTaskBlockStyle = computed(() => ({
      "grid-column": "1 / span 1",
      "grid-row-start": 1 + taskBlock.value.getStartMinute(),
      "grid-row-end": 1 + taskBlock.value.getEndMinute(),
      "background-color": taskBlock.value.getTask().getColor()
    }));
    let isTopBorderDragging = ref(false);
    let topBorderInitialMouseY = ref(void 0);
    let isBottomBorderDragging = ref(false);
    let bottomBorderInitialMouseY = ref(void 0);
    function onDragStart(event) {
      var _a2;
      if (isTopBorderDragging.value || isBottomBorderDragging.value) {
        event.preventDefault();
        return;
      }
      timeblockStore.activeDraggingTaskBlock = {
        id: props.taskBlockId,
        initialMouseY: event.pageY
      };
      (_a2 = event.dataTransfer) == null ? void 0 : _a2.setData("text", JSON.stringify({
        type: TaskBoxDropType.taskBoxDrop,
        payload: {
          sourceTaskBlockId: props.taskBlockId
        }
      }));
    }
    function onDragEnd() {
      timeblockStore.activeDraggingTaskBlock = void 0;
    }
    const taskBlockEl = ref();
    const __$temp_1 = useMouse(), mouseY = toRef(__$temp_1, "y");
    function onTopBorderMouseDown(event) {
      isTopBorderDragging.value = true;
      topBorderInitialMouseY.value = event.pageY;
    }
    window.addEventListener("mouseup", () => __async(this, null, function* () {
      if (!isTopBorderDragging.value)
        return;
      isTopBorderDragging.value = false;
      const newStartMinute = getNewStartMinute();
      timeblockStore.activeTimeblock.getTaskBlock(props.taskBlockId).setStartMinute(newStartMinute);
      yield client.mutation("updateTimeblockTaskBlock", {
        timeblockColumnId: props.timeblockColumnId,
        taskBlockId: props.taskBlockId,
        startMinute: newStartMinute
      });
      topBorderInitialMouseY.value = void 0;
      borderDraggingTimeblockTaskBlockStyle.value = {};
    }));
    function onBottomBorderMouseDown(event) {
      isBottomBorderDragging.value = true;
      bottomBorderInitialMouseY.value = event.pageY;
    }
    window.addEventListener("mouseup", () => __async(this, null, function* () {
      if (!isBottomBorderDragging.value)
        return;
      isBottomBorderDragging.value = false;
      const newEndMinute = getNewEndMinute();
      const taskBlock2 = timeblockStore.activeTimeblock.getTaskBlock(props.taskBlockId);
      taskBlock2.setEndMinute(newEndMinute);
      yield client.mutation("updateTimeblockTaskBlock", {
        timeblockColumnId: props.timeblockColumnId,
        taskBlockId: props.taskBlockId,
        endMinute: newEndMinute
      });
      bottomBorderInitialMouseY.value = void 0;
      borderDraggingTimeblockTaskBlockStyle.value = {};
    }));
    function getNewStartMinute() {
      if (topBorderInitialMouseY.value === void 0)
        return taskBlock.value.getStartMinute();
      return Math.min(taskBlock.value.getEndMinute() - 16, roundToNearest15(taskBlock.value.getStartMinute() + (mouseY.value - topBorderInitialMouseY.value)));
    }
    function getNewEndMinute() {
      if (bottomBorderInitialMouseY.value === void 0)
        return taskBlock.value.getEndMinute();
      return Math.max(taskBlock.value.getStartMinute() + 16, roundToNearest15(taskBlock.value.getEndMinute() + (mouseY.value - bottomBorderInitialMouseY.value)));
    }
    watch(() => [isTopBorderDragging.value, isBottomBorderDragging.value, mouseY.value], () => {
      if (isTopBorderDragging.value && topBorderInitialMouseY.value !== void 0) {
        borderDraggingTimeblockTaskBlockStyle.value = {
          "grid-row-start": 1 + getNewStartMinute()
        };
      } else if (isBottomBorderDragging.value && bottomBorderInitialMouseY.value !== void 0) {
        borderDraggingTimeblockTaskBlockStyle.value = {
          "grid-row-end": 1 + getNewEndMinute()
        };
      }
    });
    const shouldDescriptionShow = computed(() => {
      if (isTopBorderDragging.value) {
        return getNewEndMinute() - getNewStartMinute() > 30;
      } else {
        return taskBlock.value.getEndMinute() - taskBlock.value.getStartMinute() > 30;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "taskBlockEl",
        ref: taskBlockEl,
        draggable: "true",
        class: "column center relative cursor-grab rounded-md active:cursor-grabbing",
        style: normalizeStyle([timeblockTaskBlockStyle.value, borderDraggingTimeblockTaskBlockStyle.value]),
        onDragstart: onDragStart,
        onDragend: onDragEnd
      }, [
        createBaseVNode("div", {
          class: "absolute inset-x-0 top-0 h-[4px] cursor-ns-resize",
          onMousedown: withModifiers(onTopBorderMouseDown, ["stop"])
        }, null, 40, _hoisted_1$9),
        createTextVNode(" " + toDisplayString(task.value.getName()) + " ", 1),
        shouldDescriptionShow.value ? (openBlock(), createElementBlock("div", _hoisted_2$8, toDisplayString(task.value.getDescription()), 1)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "absolute inset-x-0 bottom-0 h-[4px] cursor-ns-resize",
          onMousedown: withModifiers(onBottomBorderMouseDown, ["stop"])
        }, null, 40, _hoisted_3$6)
      ], 36);
    };
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    startDayMinute: null,
    endDayMinute: null
  },
  setup(__props) {
    const props = __props;
    const slotStyle = computed(() => ({
      "grid-row-start": 1 + props.startDayMinute,
      "grid-row-end": 1 + props.endDayMinute,
      "grid-column": "1 / span 1"
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(slotStyle.value),
        class: "-z-1 h-full w-full border-x border-t border-gray-200"
      }, null, 4);
    };
  }
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const timeblockColumnStyle = computed(() => ({
      display: "grid",
      "grid-template-rows": "repeat(1440, 1px)",
      "grid-template-columns": `1fr`
    }));
    const hoursInDayMinutes = Array.from({ length: 24 }).map((_, i) => i * 60);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(timeblockColumnStyle.value),
        class: "border-b border-gray-200"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hoursInDayMinutes), (hourInDayMinutes) => {
          return openBlock(), createBlock(_sfc_main$a, {
            key: hourInDayMinutes,
            "start-day-minute": hourInDayMinutes,
            "end-day-minute": hourInDayMinutes + 60
          }, null, 8, ["start-day-minute", "end-day-minute"]);
        }), 128))
      ], 4);
    };
  }
});
class TaskBlock {
  constructor({
    id,
    task,
    startMinute,
    endMinute,
    timeblock,
    timeblockColumnId
  }) {
    __publicField(this, "type");
    __publicField(this, "task");
    __publicField(this, "id");
    __publicField(this, "startMinute");
    __publicField(this, "endMinute");
    __publicField(this, "timeblock");
    __publicField(this, "timeblockColumnId");
    this.id = id;
    this.timeblock = timeblock;
    this.task = task;
    this.type = "normal";
    this.setStartMinute(startMinute);
    this.setEndMinute(endMinute);
    this.setTimeblockColumnId(timeblockColumnId);
  }
  getId() {
    return this.id;
  }
  getTask() {
    return this.task;
  }
  setTask(task) {
    this.task = task;
  }
  getStartMinute() {
    return this.startMinute;
  }
  setStartMinute(minute) {
    if (minute === void 0) {
      throw new Error("startMinute cannot be undefined.");
    }
    if (minute < 0 || minute > 1440) {
      throw new Error(`Minute must be between 0 and 1440, received ${minute}`);
    }
    this.startMinute = minute;
  }
  getEndMinute() {
    return this.endMinute;
  }
  setEndMinute(minute) {
    if (minute === void 0) {
      throw new Error("endMinute cannot be undefined.");
    }
    if (minute < 0 || minute > 1440) {
      throw new Error(`Minute must be between 0 and 1440, received ${minute}`);
    }
    this.endMinute = minute;
  }
  getTimeblockColumnId() {
    return this.timeblockColumnId;
  }
  setTimeblockColumnId(timeblockColumnId) {
    this.timeblockColumnId = timeblockColumnId;
  }
  getType() {
    return this.type;
  }
}
class FixedTimeTaskBlock extends TaskBlock {
  constructor(props) {
    super(props);
    __publicField(this, "task");
    this.task = props.task;
  }
  getTask() {
    return this.task;
  }
  setTask(task) {
    this.task = task;
  }
  getStartMinute() {
    return this.getTask().getStartMinute();
  }
  setStartMinute(startMinute) {
    this.getTask().setStartMinute(startMinute);
  }
  getEndMinute() {
    return this.getTask().getEndMinute();
  }
  setEndMinute(endMinute) {
    this.getTask().setEndMinute(endMinute);
  }
}
class FixedWeeklyTimeTaskBlock extends FixedTimeTaskBlock {
  constructor(props) {
    super(props);
    __publicField(this, "task");
    this.task = props.task;
  }
  getTask() {
    return this.task;
  }
  setTask(task) {
    this.task = task;
  }
}
const _hoisted_1$8 = ["onDragover", "onDragleave"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    timeblockColumnId: null,
    date: null
  },
  setup(__props) {
    const props = __props;
    const timeblockStore = useTimeblockStore();
    (() => __async(this, null, function* () {
      var _a2;
      const timeblockTaskBlocks = yield client.query("getTimeblockTaskBlocks", {
        timeblockColumnId: props.timeblockColumnId
      });
      const timeblock = timeblockStore.activeTimeblock;
      for (const block of timeblockTaskBlocks) {
        let taskBlock;
        const taskType = timeblock.getTask(block.taskId).getType();
        switch (taskType) {
          case "normal": {
            taskBlock = new TaskBlock({
              id: block.id,
              startMinute: block.startMinute,
              endMinute: block.endMinute,
              timeblockColumnId: block.timeblockColumnId,
              task: timeblock.getTask(block.taskId),
              timeblock
            });
            break;
          }
          case "fixed-time": {
            taskBlock = new FixedTimeTaskBlock({
              id: block.id,
              startMinute: block.startMinute,
              endMinute: block.endMinute,
              timeblockColumnId: block.timeblockColumnId,
              task: timeblock.getTask(block.taskId),
              timeblock
            });
            break;
          }
          case "fixed-weekly-time": {
            taskBlock = new FixedWeeklyTimeTaskBlock({
              id: block.id,
              startMinute: block.startMinute,
              endMinute: block.endMinute,
              timeblockColumnId: block.timeblockColumnId,
              task: timeblock.getTask(block.taskId),
              timeblock
            });
            break;
          }
          default:
            throw new Error(`Unrecognized task type ${taskType}`);
        }
        timeblock.addTaskBlock(taskBlock);
        (_a2 = timeblock.getColumn(block.timeblockColumnId)) == null ? void 0 : _a2.addTaskBlock(block.id);
      }
    }))();
    const taskBlocks = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = timeblockStore.activeTimeblock.getColumn(props.timeblockColumnId)) == null ? void 0 : _a2.getTaskBlocks()) != null ? _b2 : [];
    });
    const taskBlockHeightRatios = computed(() => calculateTaskBlocksRatios({
      taskBlocks: taskBlocks.value
    }));
    const timeblockColumnStyle = computed(() => ({
      display: "grid",
      "grid-template-rows": "repeat(1440, 1px)",
      "grid-template-columns": `1fr`
    }));
    let isTaskBlockShadowActive = ref(false);
    const taskBlockShadowStyle = reactive({
      "grid-column": "1 / span 1",
      "grid-row-start": 1,
      "grid-row-end": 61,
      "background-color": "white"
    });
    const timeblockColumnEl = ref();
    function onDragOver(event) {
      const { activeDraggingTaskBlock } = timeblockStore;
      isTaskBlockShadowActive.value = true;
      if (activeDraggingTaskBlock === void 0) {
        const y = event.pageY - timeblockColumnEl.value.getBoundingClientRect().y;
        const nearest15 = roundToNearest15(y);
        taskBlockShadowStyle["grid-row-start"] = nearest15 + 1;
        taskBlockShadowStyle["grid-row-end"] = nearest15 + 1 + 60;
      } else {
        const taskBlock = timeblockStore.activeTimeblock.getTaskBlock(activeDraggingTaskBlock.id);
        const y = taskBlock.getStartMinute() + (event.pageY - activeDraggingTaskBlock.initialMouseY);
        const nearest15 = roundToNearest15(y);
        taskBlockShadowStyle["grid-row-start"] = nearest15 + 1;
        taskBlockShadowStyle["grid-row-end"] = nearest15 + 1 + (taskBlock.getEndMinute() - taskBlock.getStartMinute());
        taskBlockShadowStyle["background-color"] = timeblockStore.activeTimeblock.getTaskBlock(activeDraggingTaskBlock.id).getTask().getColor();
      }
    }
    function onDragLeave() {
      isTaskBlockShadowActive.value = false;
    }
    function onDrop(event) {
      return __async(this, null, function* () {
        var _a2, _b2, _c, _d, _e;
        isTaskBlockShadowActive.value = false;
        const dropDataString = (_b2 = (_a2 = event.dataTransfer) == null ? void 0 : _a2.getData("text")) != null ? _b2 : "";
        const { activeDraggingTaskBlock } = timeblockStore;
        if (dropDataString === "")
          return;
        const dropData = JSON.parse(dropDataString);
        if (dropData.type === TaskBoxDropType.taskBoxDrop) {
          const { payload } = dropData;
          const { activeTimeblock } = timeblockStore;
          if ("taskId" in payload) {
            const y = event.clientY - timeblockColumnEl.value.getBoundingClientRect().top;
            const startMinute = Math.round(y / 15) * 15;
            const endMinute = startMinute + 60;
            const task = activeTimeblock.getTask(payload.taskId);
            if (task === void 0) {
              displayError("Task not found.");
              return;
            }
            let taskBlock;
            switch (task.getType()) {
              case "normal": {
                taskBlock = new TaskBlock({
                  id: nanoid(),
                  timeblock: activeTimeblock,
                  task,
                  startMinute,
                  endMinute,
                  timeblockColumnId: props.timeblockColumnId
                });
                break;
              }
              case "fixed-time": {
                taskBlock = new FixedTimeTaskBlock({
                  id: nanoid(),
                  timeblock: activeTimeblock,
                  task,
                  startMinute,
                  endMinute,
                  timeblockColumnId: props.timeblockColumnId
                });
                break;
              }
              case "fixed-weekly-time": {
                taskBlock = new FixedWeeklyTimeTaskBlock({
                  id: nanoid(),
                  timeblock: activeTimeblock,
                  task,
                  startMinute,
                  endMinute,
                  timeblockColumnId: props.timeblockColumnId
                });
                task.setDayOfWeek(dayjs().tz().day());
                break;
              }
              default:
                throw new Error(`Unrecognized task type ${task.getType()}`);
            }
            activeTimeblock.addTaskBlock(taskBlock);
            (_c = activeTimeblock.getColumn(props.timeblockColumnId)) == null ? void 0 : _c.addTaskBlock(taskBlock.getId());
            yield client.mutation("createTimeblockTaskBlocks", {
              timeblockColumnId: props.timeblockColumnId,
              taskBlocks: [
                {
                  taskBlockId: taskBlock.getId(),
                  taskId: payload.taskId,
                  startMinute,
                  endMinute
                }
              ]
            });
          } else if ("sourceTaskBlockId" in payload) {
            if (activeDraggingTaskBlock === void 0)
              return;
            const taskBlock = activeTimeblock.getTaskBlock(payload.sourceTaskBlockId);
            const y = taskBlock.getStartMinute() + (event.pageY - activeDraggingTaskBlock.initialMouseY);
            const startMinute = Math.round(y / 15) * 15;
            const endMinute = startMinute + (taskBlock.getEndMinute() - taskBlock.getStartMinute());
            if (taskBlock === void 0) {
              displayError(`Task block is undefined.`);
            } else {
              taskBlock.setStartMinute(startMinute);
              taskBlock.setEndMinute(endMinute);
              const sourceTimeblockColumnId = taskBlock.getTimeblockColumnId();
              (_d = activeTimeblock.getColumn(sourceTimeblockColumnId)) == null ? void 0 : _d.removeTaskBlock(taskBlock.getId());
              (_e = activeTimeblock.getColumn(props.timeblockColumnId)) == null ? void 0 : _e.addTaskBlock(taskBlock.getId());
              yield client.mutation("updateTimeblockTaskBlock", {
                timeblockColumnId: props.timeblockColumnId,
                taskBlockId: taskBlock.getId(),
                startMinute,
                endMinute
              });
            }
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "timeblockColumnEl",
        ref: timeblockColumnEl,
        style: normalizeStyle(timeblockColumnStyle.value),
        class: "-z-1 border-b border-gray-200",
        onDrop,
        onDragover: withModifiers(onDragOver, ["prevent"]),
        onDragleave: withModifiers(onDragLeave, ["prevent"])
      }, [
        isTaskBlockShadowActive.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(unref(taskBlockShadowStyle)),
          class: "rounded-md"
        }, null, 4)) : createCommentVNode("", true),
        createVNode(_sfc_main$9, { style: { "grid-row": "1 / -1", "grid-column": "1 / -1" } }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(taskBlocks.value, (taskBlock, i) => {
          return openBlock(), createBlock(_sfc_main$b, {
            key: taskBlock.getId(),
            "task-block-id": taskBlock.getId(),
            "height-ratio": taskBlockHeightRatios.value[i],
            "timeblock-column-id": __props.timeblockColumnId
          }, null, 8, ["task-block-id", "height-ratio", "timeblock-column-id"]);
        }), 128))
      ], 44, _hoisted_1$8);
    };
  }
});
const _hoisted_1$7 = ["onClick"];
const _hoisted_2$7 = /* @__PURE__ */ createTextVNode(" Delete ");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const timeblockStore = useTimeblockStore();
    const timeblockColumns = computed(() => timeblockStore.activeTimeblock.getColumns());
    function getTimeblockColumnStyle(timeblockColumnIndex) {
      return {
        "grid-column-start": timeblockColumnIndex + 2,
        "grid-column-end": timeblockColumnIndex + 3,
        "grid-row": "2 / -1"
      };
    }
    function deleteTimeblockColumn(columnId) {
      return __async(this, null, function* () {
        timeblockStore.activeTimeblock.deleteColumn(columnId);
        yield client.mutation("deleteTimeblockColumn", {
          columnId,
          timeblockId: timeblockStore.activeTimeblock.getId()
        });
      });
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      return openBlock(true), createElementBlock(Fragment, null, renderList(timeblockColumns.value, (timeblockColumn, timeblockColumnIndex) => {
        return openBlock(), createElementBlock(Fragment, {
          key: timeblockColumn.getId()
        }, [
          createBaseVNode("div", {
            style: normalizeStyle({ "grid-column-start": timeblockColumnIndex + 2 }),
            class: "column center font-bold"
          }, [
            createBaseVNode("div", null, "Version " + toDisplayString(timeblockColumnIndex + 1), 1),
            timeblockColumns.value.length > 1 && timeblockColumnIndex === timeblockColumns.value.length - 1 ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "row cursor-pointer rounded-md border-2 border-red-200 pr-[7px] pl-1 text-xs text-red-200 hover:border-red-500 hover:text-red-500",
              onClick: ($event) => deleteTimeblockColumn(timeblockColumn.getId())
            }, [
              createVNode(_component_v_icon, {
                size: "15",
                icon: unref(mdiDelete)
              }, null, 8, ["icon"]),
              _hoisted_2$7
            ], 8, _hoisted_1$7)) : createCommentVNode("", true)
          ], 4),
          createVNode(_sfc_main$8, {
            style: normalizeStyle(getTimeblockColumnStyle(timeblockColumnIndex)),
            "timeblock-column-id": timeblockColumn.getId(),
            date: timeblockColumn.getDate()
          }, null, 8, ["style", "timeblock-column-id", "date"])
        ], 64);
      }), 128);
    };
  }
});
const _hoisted_1$6 = {
  style: { "grid-row": "1 / span 1", "grid-column": "-1 / span 1" },
  class: "self-center px-2"
};
const _hoisted_2$6 = { class: "cursor-pointer text-gray-500 hover:text-black" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    function getHourString(hour) {
      let amPm;
      if (hour < 12)
        amPm = "AM";
      else if (hour < 24)
        amPm = "PM";
      else
        amPm = "AM";
      return `${hour % 12 === 0 ? 12 : hour % 12} ${amPm}`;
    }
    function getTimeStyle({ hour, minute }) {
      return {
        "grid-row-start": 2 + (hour * 60 + minute),
        "grid-row-end": 1 + ((hour + 1) * 60 + minute)
      };
    }
    const timeblockStore = useTimeblockStore();
    const timeblockScheduleStyle = computed(() => ({
      display: "grid",
      "grid-template-rows": "60px repeat(1440, 1px)",
      "grid-template-columns": `60px repeat(${timeblockStore.activeTimeblock.getColumns().length}, 1fr) auto`
    }));
    function addNewColumn() {
      return __async(this, null, function* () {
        const mostRecentColumn = timeblockStore.activeTimeblock.getColumns().at(-1);
        const mostRecentColumnTaskBlocks = mostRecentColumn.getTaskBlocks();
        const newTaskBlocks = mostRecentColumnTaskBlocks.map((taskBlock) => {
          const task = taskBlock.getTask();
          return {
            taskId: task.getId(),
            taskBlockId: nanoid(),
            startMinute: taskBlock.getStartMinute(),
            endMinute: taskBlock.getEndMinute(),
            dayOfWeek: task instanceof FixedWeeklyTimeTask ? task.getDayOfWeek() : void 0,
            type: taskBlock.getType()
          };
        });
        yield client.mutation("createTimeblockTaskBlocks", {
          timeblockColumnId: mostRecentColumn.getId(),
          taskBlocks: newTaskBlocks
        });
        const timeblockColumnId = nanoid();
        yield client.mutation("addTimeblockColumn", {
          columnId: timeblockColumnId,
          timeblockId: timeblockStore.activeTimeblock.getId(),
          taskBlockIds: newTaskBlocks.map(({ taskBlockId }) => taskBlockId)
        });
        timeblockStore.activeTimeblock.addColumn(timeblockColumnId);
      });
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(timeblockScheduleStyle.value),
        class: "w-full"
      }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(25, (hour) => {
          return createBaseVNode("div", {
            key: hour - 1,
            class: "mt-[-12px] mr-2 text-right text-gray-500",
            style: normalizeStyle(getTimeStyle({ hour: hour - 1, minute: 0 }))
          }, toDisplayString(getHourString(hour - 1)), 5);
        }), 64)),
        createVNode(_sfc_main$7),
        createBaseVNode("div", _hoisted_1$6, [
          createBaseVNode("div", _hoisted_2$6, [
            createVNode(_component_v_icon, {
              icon: unref(mdiPlusCircleOutline),
              onClick: addNewColumn
            }, null, 8, ["icon"])
          ])
        ])
      ], 4);
    };
  }
});
const _hoisted_1$5 = { class: "row mb-2 items-center justify-center" };
const _hoisted_2$5 = { class: "row mr-auto flex-1 gap-2 p-4" };
const _hoisted_3$5 = { class: "row flex-1 justify-center" };
const _hoisted_4$3 = { class: "rounded-md px-2 text-xl font-bold" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const timeblockStore = useTimeblockStore();
    const appStore = useAppStore();
    const timeblockDate = computed(() => timeblockDateToDayjs(timeblockStore.activeTimeblock.getDate()).format("LL"));
    function toggleTaskDock() {
      timeblockStore.isTaskDockOpen = !timeblockStore.isTaskDockOpen;
    }
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
      const _component_v_icon = resolveComponent("v-icon");
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createVNode(_component_router_link, { to: "/timeblocks" }, {
            default: withCtx(() => [
              createVNode(_component_v_icon, {
                icon: unref(mdiChevronLeft),
                class: "cursor-pointer"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          createVNode(_component_v_icon, {
            icon: unref(mdiMenu),
            class: "cursor-pointer",
            onClick: toggleTaskDock
          }, null, 8, ["icon"])
        ]),
        createBaseVNode("div", _hoisted_3$5, [
          createBaseVNode("div", _hoisted_4$3, toDisplayString(timeblockDate.value), 1)
        ]),
        createBaseVNode("div", { class: "row ml-auto flex-1 justify-end" }, [
          createBaseVNode("button", {
            class: "btn btn-sm btn-accent mr-4",
            onClick: logout
          }, "Logout")
        ])
      ]);
    };
  }
});
function getColorFromTaskType(taskType) {
  switch (taskType) {
    case "normal":
      return Task.color;
    case "fixed-weekly-time":
      return FixedWeeklyTimeTask.color;
    case "fixed-time":
      return FixedTimeTask.color;
    default:
      return "white";
  }
}
var timeblockTaskBoxEditor_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$4 = { class: "task-box-editor m-2 self-stretch rounded-lg py-2 text-center" };
const _hoisted_2$4 = ["value"];
const _hoisted_3$4 = ["value"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    name: null,
    description: null,
    taskType: null
  },
  emits: ["update:name", "update:description", "blur"],
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "14c7bc2d": backgroundColor.value
    }));
    const backgroundColor = computed(() => getColorFromTaskType(props.taskType));
    const taskNameInputEl = ref();
    const taskDescriptionInputEl = ref();
    let isFocused = ref(false);
    function onTaskNameFocusOut(event) {
      return __async(this, null, function* () {
        if (isFocused.value && event.relatedTarget !== taskDescriptionInputEl.value) {
          emit("blur");
          isFocused.value = false;
        }
      });
    }
    function onTaskDescriptionFocusOut(event) {
      return __async(this, null, function* () {
        if (isFocused.value && event.relatedTarget !== taskNameInputEl.value) {
          emit("blur");
          isFocused.value = false;
        }
      });
    }
    function onTaskNameKeydown(event) {
      if (event.key === "Enter") {
        taskDescriptionInputEl.value.focus();
      }
    }
    function onTaskDescriptionKeydown(event) {
      if (event.key === "Enter") {
        taskDescriptionInputEl.value.blur();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("input", {
          ref_key: "taskNameInputEl",
          ref: taskNameInputEl,
          value: __props.name,
          placeholder: "Task Name",
          type: "text",
          class: "w-full px-4 outline-none",
          onInput: _cache[0] || (_cache[0] = ($event) => emit("update:name", $event.target.value)),
          onFocusout: onTaskNameFocusOut,
          onKeydown: onTaskNameKeydown,
          onFocus: _cache[1] || (_cache[1] = ($event) => isFocused.value = true)
        }, null, 40, _hoisted_2$4),
        createBaseVNode("input", {
          ref_key: "taskDescriptionInputEl",
          ref: taskDescriptionInputEl,
          value: __props.description,
          placeholder: "Task Description",
          type: "text",
          class: "w-full px-4 text-sm text-gray-500 outline-none",
          onInput: _cache[2] || (_cache[2] = ($event) => emit("update:description", $event.target.value)),
          onFocusout: onTaskDescriptionFocusOut,
          onKeydown: onTaskDescriptionKeydown,
          onFocus: _cache[3] || (_cache[3] = ($event) => isFocused.value = true)
        }, null, 40, _hoisted_3$4)
      ]);
    };
  }
});
var TimeblockTaskBoxEditor = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-55998f26"]]);
const _hoisted_1$3 = { class: "row items-center justify-between" };
const _hoisted_2$3 = { class: "ml-4" };
const _hoisted_3$3 = { class: "column mx-auto" };
const _hoisted_4$2 = { class: "px-2 text-sm text-gray-500" };
const _hoisted_5 = { class: "mr-4" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    id: null
  },
  setup(__props) {
    const props = __props;
    const timeblockStore = useTimeblockStore();
    const task = computed(() => timeblockStore.activeTimeblock.getTask(props.id));
    const taskBoxStyle = computed(() => ({
      "background-color": task.value.getColor()
    }));
    function onDragStart(event) {
      var _a2;
      (_a2 = event.dataTransfer) == null ? void 0 : _a2.setData("text", JSON.stringify({
        type: TaskBoxDropType.taskBoxDrop,
        payload: {
          taskId: props.id
        }
      }));
    }
    let areTaskBoxOptionsShowing = ref(false);
    function onMouseOver() {
      areTaskBoxOptionsShowing.value = true;
    }
    function onMouseOut() {
      areTaskBoxOptionsShowing.value = false;
    }
    function onDeleteClick() {
      return __async(this, null, function* () {
        timeblockStore.activeTimeblock.getTask(task.value.getId()).setIsHidden(true);
        yield client.mutation("hideTimeblockTask", {
          taskId: task.value.getId()
        });
      });
    }
    let taskNewName = ref("");
    let taskNewDescription = ref("");
    let isTaskEditorShowing = ref(false);
    function onEditClick() {
      var _a2;
      taskNewName.value = task.value.getName();
      taskNewDescription.value = (_a2 = task.value.getDescription()) != null ? _a2 : "";
      isTaskEditorShowing.value = true;
    }
    function updateTask() {
      return __async(this, null, function* () {
        if (taskNewName.value === "")
          return;
        isTaskEditorShowing.value = false;
        task.value.setName(taskNewName.value);
        task.value.setDescription(taskNewDescription.value);
        yield client.mutation("updateTimeblockTask", {
          taskId: task.value.getId(),
          description: taskNewDescription.value,
          name: taskNewName.value
        });
      });
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      return isTaskEditorShowing.value ? (openBlock(), createBlock(TimeblockTaskBoxEditor, {
        key: 0,
        name: taskNewName.value,
        "onUpdate:name": _cache[0] || (_cache[0] = ($event) => taskNewName.value = $event),
        description: taskNewDescription.value,
        "onUpdate:description": _cache[1] || (_cache[1] = ($event) => taskNewDescription.value = $event),
        "task-type": task.value.getType(),
        onBlur: updateTask
      }, null, 8, ["name", "description", "task-type"])) : (openBlock(), createElementBlock("div", {
        key: 1,
        draggable: "true",
        class: "column m-2 cursor-grab self-stretch rounded-lg py-2 text-center active:cursor-grabbing",
        style: normalizeStyle(taskBoxStyle.value),
        onDragstart: onDragStart,
        onMouseover: onMouseOver,
        onMouseout: onMouseOut
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          withDirectives(createBaseVNode("div", _hoisted_2$3, [
            createVNode(_component_v_icon, {
              icon: unref(mdiDeleteCircle),
              class: "cursor-pointer text-red-500 transition-all hover:scale-105",
              onClick: onDeleteClick
            }, null, 8, ["icon"])
          ], 512), [
            [vShow, areTaskBoxOptionsShowing.value]
          ]),
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("div", null, toDisplayString(task.value.getName()), 1),
            createBaseVNode("div", _hoisted_4$2, toDisplayString(task.value.getDescription()), 1)
          ]),
          withDirectives(createBaseVNode("div", _hoisted_5, [
            createVNode(_component_v_icon, {
              icon: unref(mdiPencilCircle),
              class: "cursor-pointer text-green-500 transition-all hover:scale-105",
              onClick: onEditClick
            }, null, 8, ["icon"])
          ], 512), [
            [vShow, areTaskBoxOptionsShowing.value]
          ])
        ])
      ], 36));
    };
  }
});
var QItemLabel = createComponent({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(props, { slots }) {
    const parsedLines = computed(() => parseInt(props.lines, 10));
    const classes = computed(() => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : ""));
    const style = computed(() => {
      return props.lines !== void 0 && parsedLines.value > 1 ? {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": parsedLines.value
      } : null;
    });
    return () => h("div", {
      style: style.value,
      class: classes.value
    }, hSlot(slots.default));
  }
});
var QItemSection = createComponent({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : ""));
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var QItem = createComponent({
  name: "QItem",
  props: __spreadProps(__spreadValues(__spreadValues({}, useDarkProps), useRouterLinkProps), {
    tag: {
      type: String,
      default: "div"
    },
    active: Boolean,
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  }),
  emits: ["click", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const { hasRouterLink, hasLink, linkProps, linkClass, linkTag, navigateToRouterLink } = useRouterLink();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(() => props.clickable === true || hasLink.value === true || props.tag === "label");
    const isClickable = computed(() => props.disable !== true && isActionable.value === true);
    const classes = computed(() => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true ? linkClass.value : props.active === true ? `${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""} q-item--active` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : ""));
    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        hasRouterLink.value === true && navigateToRouterLink(e);
        emit("click", e);
      }
    }
    function onKeyup(e) {
      if (isClickable.value === true && isKeyCode(e, 13) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }));
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        onClick,
        onKeyup
      };
      if (isClickable.value === true) {
        data.tabindex = props.tabindex || "0";
        Object.assign(data, linkProps.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(linkTag.value, data, getContent());
    };
  }
});
var QList = createComponent({
  name: "QList",
  props: __spreadProps(__spreadValues({}, useDarkProps), {
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean
  }),
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const classes = computed(() => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : ""));
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var QBtnGroup = createComponent({
  name: "QBtnGroup",
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      const cls = ["unelevated", "outline", "flat", "rounded", "push", "stretch", "glossy"].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
      return `q-btn-group row no-wrap${cls.length > 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
    });
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection();
    if (selection.empty !== void 0) {
      selection.empty();
    } else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      Platform.is.mobile !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    document.selection.empty();
  }
}
const useAnchorProps = {
  target: {
    default: true
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function useAnchor({
  showing,
  avoidEmit,
  configureAnchorEl
}) {
  const { props, proxy, emit } = getCurrentInstance();
  const anchorEl = ref(null);
  let touchTimer;
  function canShow(evt) {
    return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
  }
  const anchorEvents = {};
  if (configureAnchorEl === void 0) {
    Object.assign(anchorEvents, {
      hide(evt) {
        proxy.hide(evt);
      },
      toggle(evt) {
        proxy.toggle(evt);
        evt.qAnchorHandled = true;
      },
      toggleKey(evt) {
        isKeyCode(evt, 13) === true && anchorEvents.toggle(evt);
      },
      contextClick(evt) {
        proxy.hide(evt);
        prevent(evt);
        nextTick(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        });
      },
      prevent,
      mobileTouch(evt) {
        anchorEvents.mobileCleanup(evt);
        if (canShow(evt) !== true) {
          return;
        }
        proxy.hide(evt);
        anchorEl.value.classList.add("non-selectable");
        const target = evt.target;
        addEvt(anchorEvents, "anchor", [
          [target, "touchmove", "mobileCleanup", "passive"],
          [target, "touchend", "mobileCleanup", "passive"],
          [target, "touchcancel", "mobileCleanup", "passive"],
          [anchorEl.value, "contextmenu", "prevent", "notPassive"]
        ]);
        touchTimer = setTimeout(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        }, 300);
      },
      mobileCleanup(evt) {
        anchorEl.value.classList.remove("non-selectable");
        clearTimeout(touchTimer);
        if (showing.value === true && evt !== void 0) {
          clearSelection();
        }
      }
    });
    configureAnchorEl = function(context = props.contextMenu) {
      if (props.noParentEvent === true || anchorEl.value === null) {
        return;
      }
      let evts;
      if (context === true) {
        if (proxy.$q.platform.is.mobile === true) {
          evts = [
            [anchorEl.value, "touchstart", "mobileTouch", "passive"]
          ];
        } else {
          evts = [
            [anchorEl.value, "mousedown", "hide", "passive"],
            [anchorEl.value, "contextmenu", "contextClick", "notPassive"]
          ];
        }
      } else {
        evts = [
          [anchorEl.value, "click", "toggle", "passive"],
          [anchorEl.value, "keyup", "toggleKey", "passive"]
        ];
      }
      addEvt(anchorEvents, "anchor", evts);
    };
  }
  function unconfigureAnchorEl() {
    cleanEvt(anchorEvents, "anchor");
  }
  function setAnchorEl(el) {
    anchorEl.value = el;
    while (anchorEl.value.classList.contains("q-anchor--skip")) {
      anchorEl.value = anchorEl.value.parentNode;
    }
    configureAnchorEl();
  }
  function pickAnchorEl() {
    if (props.target === false || props.target === "") {
      anchorEl.value = null;
    } else if (props.target === true) {
      setAnchorEl(proxy.$el.parentNode);
    } else {
      let el = props.target;
      if (typeof props.target === "string") {
        try {
          el = document.querySelector(props.target);
        } catch (err) {
          el = void 0;
        }
      }
      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el;
        configureAnchorEl();
      } else {
        anchorEl.value = null;
        console.error(`Anchor: target "${props.target}" not found`);
      }
    }
  }
  watch(() => props.contextMenu, (val) => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
      configureAnchorEl(val);
    }
  });
  watch(() => props.target, () => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
    }
    pickAnchorEl();
  });
  watch(() => props.noParentEvent, (val) => {
    if (anchorEl.value !== null) {
      if (val === true) {
        unconfigureAnchorEl();
      } else {
        configureAnchorEl();
      }
    }
  });
  onMounted(() => {
    pickAnchorEl();
    if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
      emit("update:modelValue", false);
    }
  });
  onBeforeUnmount(() => {
    clearTimeout(touchTimer);
    unconfigureAnchorEl();
  });
  return {
    anchorEl,
    canShow,
    anchorEvents
  };
}
function useScrollTarget(props, configureScrollTarget) {
  const localScrollTarget = ref(null);
  let scrollFn;
  function changeScrollEvent(scrollTarget, fn) {
    const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
    const fnHandler = fn !== void 0 ? fn : scrollFn;
    if (scrollTarget !== window) {
      scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
    }
    window[fnProp]("scroll", fnHandler, listenOpts.passive);
    scrollFn = fn;
  }
  function unconfigureScrollTarget() {
    if (localScrollTarget.value !== null) {
      changeScrollEvent(localScrollTarget.value);
      localScrollTarget.value = null;
    }
  }
  const noParentEventWatcher = watch(() => props.noParentEvent, () => {
    if (localScrollTarget.value !== null) {
      unconfigureScrollTarget();
      configureScrollTarget();
    }
  });
  onBeforeUnmount(noParentEventWatcher);
  return {
    localScrollTarget,
    unconfigureScrollTarget,
    changeScrollEvent
  };
}
let timer;
const { notPassiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
  clearTimeout(timer);
  const target = evt.target;
  if (target === void 0 || target.nodeType === 8 || target.classList.contains("no-pointer-events") === true) {
    return;
  }
  let portalIndex = portalList.length - 1;
  while (portalIndex >= 0) {
    const proxy = portalList[portalIndex].$;
    if (proxy.type.name !== "QDialog") {
      break;
    }
    if (proxy.props.seamless !== true) {
      return;
    }
    portalIndex--;
  }
  for (let i = registeredList.length - 1; i >= 0; i--) {
    const state = registeredList[i];
    if ((state.anchorEl.value === null || state.anchorEl.value.contains(target) === false) && (target === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target) === false)) {
      evt.qClickOutside = true;
      state.onClickOutside(evt);
    } else {
      return;
    }
  }
}
function addClickOutside(clickOutsideProps) {
  registeredList.push(clickOutsideProps);
  if (registeredList.length === 1) {
    document.addEventListener("mousedown", globalHandler, notPassiveCapture);
    document.addEventListener("touchstart", globalHandler, notPassiveCapture);
  }
}
function removeClickOutside(clickOutsideProps) {
  const index = registeredList.findIndex((h2) => h2 === clickOutsideProps);
  if (index > -1) {
    registeredList.splice(index, 1);
    if (registeredList.length === 0) {
      clearTimeout(timer);
      document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
      document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
    }
  }
}
let vpLeft, vpTop;
function validatePosition(pos) {
  const parts = pos.split(" ");
  if (parts.length !== 2) {
    return false;
  }
  if (["top", "center", "bottom"].includes(parts[0]) !== true) {
    console.error("Anchor/Self position must start with one of top/center/bottom");
    return false;
  }
  if (["left", "middle", "right", "start", "end"].includes(parts[1]) !== true) {
    console.error("Anchor/Self position must end with one of left/middle/right/start/end");
    return false;
  }
  return true;
}
function validateOffset(val) {
  if (!val) {
    return true;
  }
  if (val.length !== 2) {
    return false;
  }
  if (typeof val[0] !== "number" || typeof val[1] !== "number") {
    return false;
  }
  return true;
}
const horizontalPos = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((pos) => {
  horizontalPos[`${pos}#ltr`] = pos;
  horizontalPos[`${pos}#rtl`] = pos;
});
function parsePosition(pos, rtl) {
  const parts = pos.split(" ");
  return {
    vertical: parts[0],
    horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
  };
}
function getAnchorProps(el, offset) {
  let { top, left, right, bottom, width, height } = el.getBoundingClientRect();
  if (offset !== void 0) {
    top -= offset[1];
    left -= offset[0];
    bottom += offset[1];
    right += offset[0];
    width += offset[0];
    height += offset[1];
  }
  return {
    top,
    left,
    right,
    bottom,
    width,
    height,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getTargetProps(el) {
  return {
    top: 0,
    center: el.offsetHeight / 2,
    bottom: el.offsetHeight,
    left: 0,
    middle: el.offsetWidth / 2,
    right: el.offsetWidth
  };
}
function setPosition(cfg) {
  if (client$1.is.ios === true && window.visualViewport !== void 0) {
    const el = document.body.style;
    const { offsetLeft: left, offsetTop: top } = window.visualViewport;
    if (left !== vpLeft) {
      el.setProperty("--q-pe-left", left + "px");
      vpLeft = left;
    }
    if (top !== vpTop) {
      el.setProperty("--q-pe-top", top + "px");
      vpTop = top;
    }
  }
  let anchorProps;
  const { scrollLeft, scrollTop } = cfg.el;
  if (cfg.absoluteOffset === void 0) {
    anchorProps = getAnchorProps(cfg.anchorEl, cfg.cover === true ? [0, 0] : cfg.offset);
  } else {
    const { top: anchorTop, left: anchorLeft } = cfg.anchorEl.getBoundingClientRect(), top = anchorTop + cfg.absoluteOffset.top, left = anchorLeft + cfg.absoluteOffset.left;
    anchorProps = { top, left, width: 1, height: 1, right: left + 1, center: top, middle: left, bottom: top + 1 };
  }
  let elStyle = {
    maxHeight: cfg.maxHeight,
    maxWidth: cfg.maxWidth,
    visibility: "visible"
  };
  if (cfg.fit === true || cfg.cover === true) {
    elStyle.minWidth = anchorProps.width + "px";
    if (cfg.cover === true) {
      elStyle.minHeight = anchorProps.height + "px";
    }
  }
  Object.assign(cfg.el.style, elStyle);
  const targetProps = getTargetProps(cfg.el), props = {
    top: anchorProps[cfg.anchorOrigin.vertical] - targetProps[cfg.selfOrigin.vertical],
    left: anchorProps[cfg.anchorOrigin.horizontal] - targetProps[cfg.selfOrigin.horizontal]
  };
  applyBoundaries(props, anchorProps, targetProps, cfg.anchorOrigin, cfg.selfOrigin);
  elStyle = {
    top: props.top + "px",
    left: props.left + "px"
  };
  if (props.maxHeight !== void 0) {
    elStyle.maxHeight = props.maxHeight + "px";
    if (anchorProps.height > props.maxHeight) {
      elStyle.minHeight = elStyle.maxHeight;
    }
  }
  if (props.maxWidth !== void 0) {
    elStyle.maxWidth = props.maxWidth + "px";
    if (anchorProps.width > props.maxWidth) {
      elStyle.minWidth = elStyle.maxWidth;
    }
  }
  Object.assign(cfg.el.style, elStyle);
  if (cfg.el.scrollTop !== scrollTop) {
    cfg.el.scrollTop = scrollTop;
  }
  if (cfg.el.scrollLeft !== scrollLeft) {
    cfg.el.scrollLeft = scrollLeft;
  }
}
function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
  if (props.top < 0 || props.top + currentHeight > innerHeight) {
    if (selfOrigin.vertical === "center") {
      props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
      props.maxHeight = Math.min(currentHeight, innerHeight);
    } else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
      const anchorY = Math.min(innerHeight, anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top);
      props.maxHeight = Math.min(currentHeight, anchorY);
      props.top = Math.max(0, anchorY - currentHeight);
    } else {
      props.top = Math.max(0, anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom);
      props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
    }
  }
  if (props.left < 0 || props.left + currentWidth > innerWidth) {
    props.maxWidth = Math.min(currentWidth, innerWidth);
    if (selfOrigin.horizontal === "middle") {
      props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
    } else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
      const anchorX = Math.min(innerWidth, anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left);
      props.maxWidth = Math.min(currentWidth, anchorX);
      props.left = Math.max(0, anchorX - props.maxWidth);
    } else {
      props.left = Math.max(0, anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right);
      props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
    }
  }
}
var QMenu = createComponent({
  name: "QMenu",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, useAnchorProps), useModelToggleProps), useDarkProps), useTransitionProps), {
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  }),
  emits: [
    ...useModelToggleEmits,
    "click",
    "escape-key"
  ],
  setup(props, { slots, emit, attrs }) {
    let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;
    const vm = getCurrentInstance();
    const { proxy } = vm;
    const { $q } = proxy;
    const innerRef = ref(null);
    const showing = ref(false);
    const hideOnRouteChange = computed(() => props.persistent !== true && props.noRouteDismiss !== true);
    const isDark = useDark(props, $q);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout, removeTimeout } = useTimeout();
    const { transition, transitionStyle } = useTransition(props, showing);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow } = useAnchor({ showing });
    const { hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent);
    const clickOutsideProps = {
      anchorEl,
      innerRef,
      onClickOutside(e) {
        if (props.persistent !== true && showing.value === true) {
          hide(e);
          if (e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      }
    };
    const anchorOrigin = computed(() => parsePosition(props.anchor || (props.cover === true ? "center middle" : "bottom start"), $q.lang.rtl));
    const selfOrigin = computed(() => props.cover === true ? anchorOrigin.value : parsePosition(props.self || "top start", $q.lang.rtl));
    const menuClass = computed(() => (props.square === true ? " q-menu--square" : "") + (isDark.value === true ? " q-menu--dark q-dark" : ""));
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const handlesFocus = computed(() => showing.value === true && props.persistent !== true);
    watch(handlesFocus, (val) => {
      if (val === true) {
        addEscapeKey(onEscapeKey);
        addClickOutside(clickOutsideProps);
      } else {
        removeEscapeKey(onEscapeKey);
        removeClickOutside(clickOutsideProps);
      }
    });
    function focus() {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node && node.contains(document.activeElement) !== true) {
          node = node.querySelector("[autofocus], [data-autofocus]") || node;
          node.focus({ preventScroll: true });
        }
      });
    }
    function handleShow(evt) {
      removeTick();
      removeTimeout();
      refocusTarget = props.noRefocus === false ? document.activeElement : null;
      addFocusout(onFocusout);
      showPortal();
      configureScrollTarget();
      absoluteOffset = void 0;
      if (evt !== void 0 && (props.touchPosition || props.contextMenu)) {
        const pos = position(evt);
        if (pos.left !== void 0) {
          const { top, left } = anchorEl.value.getBoundingClientRect();
          absoluteOffset = { left: pos.left - left, top: pos.top - top };
        }
      }
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(() => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl, updatePosition);
      }
      if (props.noFocus !== true) {
        document.activeElement.blur();
      }
      registerTick(() => {
        updatePosition();
        props.noFocus !== true && focus();
      });
      registerTimeout(() => {
        if ($q.platform.is.ios === true) {
          avoidAutoClose = props.autoClose;
          innerRef.value.click();
        }
        updatePosition();
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      removeTimeout();
      anchorCleanup(true);
      if (refocusTarget !== null && (evt === void 0 || evt.qClickOutside !== true)) {
        refocusTarget.focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal();
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup(hiding) {
      absoluteOffset = void 0;
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      if (hiding === true || showing.value === true) {
        removeFocusout(onFocusout);
        unconfigureScrollTarget();
        removeClickOutside(clickOutsideProps);
        removeEscapeKey(onEscapeKey);
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        changeScrollEvent(localScrollTarget.value, updatePosition);
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        closePortalMenus(proxy, e);
        emit("click", e);
      } else {
        avoidAutoClose = false;
      }
    }
    function onFocusout(evt) {
      if (handlesFocus.value === true && props.noFocus !== true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus();
      }
    }
    function onEscapeKey(evt) {
      emit("escape-key");
      hide(evt);
    }
    function updatePosition() {
      const el = innerRef.value;
      if (el === null || anchorEl.value === null) {
        return;
      }
      setPosition({
        el,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        absoluteOffset,
        fit: props.fit,
        cover: props.cover,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function renderPortalContent() {
      return h(Transition, { name: transition.value, appear: true }, () => showing.value === true ? h("div", __spreadValues(__spreadProps(__spreadValues({}, attrs), {
        ref: innerRef,
        tabindex: -1,
        class: [
          "q-menu q-position-engine scroll" + menuClass.value,
          attrs.class
        ],
        style: [
          attrs.style,
          transitionStyle.value
        ]
      }), onEvents.value), hSlot(slots.default)) : null);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(proxy, { focus, updatePosition });
    return renderPortal;
  }
});
var QBtnDropdown = createComponent({
  name: "QBtnDropdown",
  props: __spreadProps(__spreadValues({}, useBtnProps), {
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean
  }),
  emits: ["update:modelValue", "click", "before-show", "show", "before-hide", "hide"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props.modelValue);
    const menuRef = ref(null);
    const attributes = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true"
      };
      if (props.disable === true || (props.split === false && props.disableMainBtn === true || props.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(() => "q-btn-dropdown__arrow" + (showing.value === true && props.noIconAnimation === false ? " rotate-180" : "") + (props.split === false ? " q-btn-dropdown__arrow-container" : ""));
    watch(() => props.modelValue, (val) => {
      menuRef.value !== null && menuRef.value[val ? "show" : "hide"]();
    });
    watch(() => props.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("before-show", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("before-hide", e);
    }
    function onHide(e) {
      emit("hide", e);
      emit("update:modelValue", false);
    }
    function onClick(e) {
      emit("click", e);
    }
    function onClickHide(e) {
      stop(e);
      hide();
      emit("click", e);
    }
    function toggle(evt) {
      menuRef.value !== null && menuRef.value.toggle(evt);
    }
    function show(evt) {
      menuRef.value !== null && menuRef.value.show(evt);
    }
    function hide(evt) {
      menuRef.value !== null && menuRef.value.hide(evt);
    }
    Object.assign(proxy, {
      show,
      hide,
      toggle
    });
    onMounted(() => {
      props.modelValue === true && show();
    });
    return () => {
      const Arrow = [
        h(QIcon, {
          class: iconClass.value,
          name: props.dropdownIcon || proxy.$q.iconSet.arrow.dropdown
        })
      ];
      props.disableDropdown !== true && Arrow.push(h(QMenu, {
        ref: menuRef,
        class: props.contentClass,
        style: props.contentStyle,
        cover: props.cover,
        fit: true,
        persistent: props.persistent,
        noRouteDismiss: props.noRouteDismiss,
        autoClose: props.autoClose,
        anchor: props.menuAnchor,
        self: props.menuSelf,
        offset: props.menuOffset,
        separateClosePopup: true,
        onBeforeShow,
        onShow,
        onBeforeHide,
        onHide
      }, slots.default));
      if (props.split === false) {
        return h(QBtn, __spreadProps(__spreadValues(__spreadProps(__spreadValues({
          class: "q-btn-dropdown q-btn-dropdown--simple"
        }, props), {
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false
        }), attributes.value), {
          onClick
        }), () => hSlot(slots.label, []).concat(Arrow));
      }
      return h(QBtnGroup, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        outline: props.outline,
        flat: props.flat,
        rounded: props.rounded,
        push: props.push,
        unelevated: props.unelevated,
        glossy: props.glossy,
        stretch: props.stretch
      }, () => [
        h(QBtn, __spreadProps(__spreadValues({
          class: "q-btn-dropdown--current"
        }, props), {
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          iconRight: props.iconRight,
          round: false,
          onClick: onClickHide
        }), slots.label),
        h(QBtn, __spreadProps(__spreadValues({
          class: "q-btn-dropdown__arrow-container q-anchor--skip"
        }, attributes.value), {
          disable: props.disable === true || props.disableDropdown === true,
          outline: props.outline,
          flat: props.flat,
          rounded: props.rounded,
          push: props.push,
          size: props.size,
          color: props.color,
          textColor: props.textColor,
          dense: props.dense,
          ripple: props.ripple
        }), () => Arrow)
      ]);
    };
  }
});
function getDepth(value) {
  if (value === false) {
    return 0;
  }
  if (value === true || value === void 0) {
    return 1;
  }
  const depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}
var ClosePopup = createDirective({
  name: "close-popup",
  beforeMount(el, { value }) {
    const ctx = {
      depth: getDepth(value),
      handler(evt) {
        ctx.depth !== 0 && setTimeout(() => {
          const vm = getPortalVm(el);
          if (vm !== void 0) {
            closePortals(vm, evt, ctx.depth);
          }
        });
      },
      handlerKey(evt) {
        isKeyCode(evt, 13) === true && ctx.handler(evt);
      }
    };
    el.__qclosepopup = ctx;
    el.addEventListener("click", ctx.handler);
    el.addEventListener("keyup", ctx.handlerKey);
  },
  updated(el, { value, oldValue }) {
    if (value !== oldValue) {
      el.__qclosepopup.depth = getDepth(value);
    }
  },
  beforeUnmount(el) {
    const ctx = el.__qclosepopup;
    el.removeEventListener("click", ctx.handler);
    el.removeEventListener("keyup", ctx.handlerKey);
    delete el.__qclosepopup;
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createTextVNode("Add Fixed Time Task");
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode(" A task that always occurs at the same time every day. ");
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode("Add Fixed Weekly Time Task");
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode(" A task that always occurs on the same time and day every week. ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["select"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QBtnDropdown, {
          split: "",
          "dropdown-icon": unref(mdiMenuDown),
          color: "primary",
          label: "Add Task",
          class: "mb-2",
          onClick: _cache[2] || (_cache[2] = ($event) => emit("select", "normal"))
        }, {
          default: withCtx(() => [
            createVNode(QList, null, {
              default: withCtx(() => [
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: _cache[0] || (_cache[0] = ($event) => emit("select", "fixed-time"))
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            _hoisted_1$2
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, { caption: "" }, {
                          default: withCtx(() => [
                            _hoisted_2$2
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [ClosePopup]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: _cache[1] || (_cache[1] = ($event) => emit("select", "fixed-weekly-time"))
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            _hoisted_3$2
                          ]),
                          _: 1
                        }),
                        createVNode(QItemLabel, { caption: "" }, {
                          default: withCtx(() => [
                            _hoisted_4$1
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [ClosePopup]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["dropdown-icon"])
      ]);
    };
  }
});
function merge(left, right, cmp) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (cmp(left[leftIndex], right[rightIndex])) {
      sortedArray.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      sortedArray.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  return [...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
function mergeSort(array, cmp) {
  const half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, half);
  return merge(mergeSort(left, cmp), mergeSort(array, cmp), cmp);
}
const _hoisted_1$1 = ["onDragover"];
const _hoisted_2$1 = {
  key: 0,
  class: "column pointer-events-none absolute inset-0 top-[45px] mt-10 items-center rounded-md bg-[rgba(255,0,0,0.9)] pt-10 z-10"
};
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-black" }, "Delete Task Block", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-2 text-3xl font-bold" }, "Tasks", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const timeblockStore = useTimeblockStore();
    const areTasksSortedByName = ref(false);
    const searchTaskInput = ref("");
    const visibleTasks = computed(() => {
      let tasks = timeblockStore.activeTimeblock.getOrderedTaskIds().map((taskId) => timeblockStore.activeTimeblock.getTask(taskId)).filter((task) => !task.getIsHidden());
      if (areTasksSortedByName.value) {
        tasks = mergeSort(tasks, (task1, task2) => task1.getName() < task2.getName());
      }
      if (searchTaskInput.value !== "") {
        tasks = tasks.filter((task) => {
          var _a2;
          return task.getName().toLowerCase().includes(searchTaskInput.value.toLowerCase()) || ((_a2 = task.getDescription()) == null ? void 0 : _a2.toLowerCase().includes(searchTaskInput.value.toLowerCase()));
        });
      }
      return tasks;
    });
    const timeblockTaskBoxEditorEl = ref();
    let newTaskName = ref("");
    let newTaskDescription = ref("");
    let selectedTaskType = ref("");
    let isNewTaskEditorVisible = ref(false);
    function onNewTaskSelect(taskType) {
      return __async(this, null, function* () {
        if (!isNewTaskEditorVisible.value) {
          selectedTaskType.value = taskType;
          isNewTaskEditorVisible.value = true;
          newTaskName.value = "";
          newTaskDescription.value = "";
          yield nextTick();
        }
      });
    }
    function addTask() {
      return __async(this, null, function* () {
        if (newTaskName.value.trim() === "") {
          newTaskName.value = "";
          newTaskDescription.value = "";
          isNewTaskEditorVisible.value = false;
        } else {
          const taskId = nanoid();
          let newTask;
          switch (selectedTaskType.value) {
            case "normal": {
              newTask = new Task({
                id: taskId,
                name: newTaskName.value,
                description: newTaskDescription.value,
                isHidden: false
              });
              break;
            }
            case "fixed-weekly-time": {
              newTask = new FixedWeeklyTimeTask({
                dayOfWeek: void 0,
                startMinute: void 0,
                endMinute: void 0,
                id: taskId,
                isHidden: false,
                name: newTaskName.value,
                description: newTaskDescription.value
              });
              break;
            }
            case "fixed-time": {
              newTask = new FixedTimeTask({
                endMinute: void 0,
                id: taskId,
                isHidden: false,
                name: newTaskName.value,
                startMinute: void 0,
                description: newTaskDescription.value
              });
              break;
            }
            default: {
              throw new Error(`Unrecognized task type ${selectedTaskType.value}`);
            }
          }
          timeblockStore.activeTimeblock.addTask(newTask);
          const taskName = newTaskName.value;
          const taskDescription = newTaskDescription.value;
          newTaskName.value = "";
          newTaskDescription.value = "";
          isNewTaskEditorVisible.value = false;
          try {
            yield client.mutation("createTimeblockTask", {
              id: taskId,
              name: taskName,
              description: taskDescription,
              type: selectedTaskType.value
            });
          } catch (error) {
            displayError(error);
          }
        }
      });
    }
    let isDeleteOverlayVisible = ref(false);
    function onDragOver() {
      if (timeblockStore.activeDraggingTaskBlock === void 0)
        return;
      isDeleteOverlayVisible.value = true;
    }
    function onDragLeave() {
      isDeleteOverlayVisible.value = false;
    }
    function onDrop(event) {
      return __async(this, null, function* () {
        var _a2, _b2, _c;
        isDeleteOverlayVisible.value = false;
        const data = (_b2 = (_a2 = event.dataTransfer) == null ? void 0 : _a2.getData("text")) != null ? _b2 : "";
        if (data === "")
          return;
        const dropData = JSON.parse(data);
        if (dropData.type === TaskBoxDropType.taskBoxDrop) {
          const { payload } = dropData;
          if ("sourceTaskBlockId" in payload) {
            const taskBlock = timeblockStore.activeTimeblock.getTaskBlock(payload.sourceTaskBlockId);
            const columnId = taskBlock.getTimeblockColumnId();
            (_c = timeblockStore.activeTimeblock.getColumn(columnId)) == null ? void 0 : _c.removeTaskBlock(payload.sourceTaskBlockId);
            yield client.mutation("deleteTimeblockTaskBlock", {
              taskBlockId: payload.sourceTaskBlockId,
              timeblockColumnId: columnId
            });
          }
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "column relative w-[250px] shrink-0 items-center",
        onDrop,
        onDragover: withModifiers(onDragOver, ["prevent"]),
        onDragleave: onDragLeave
      }, [
        isDeleteOverlayVisible.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createVNode(_component_v_icon, {
            size: 50,
            icon: unref(mdiDelete)
          }, null, 8, ["icon"]),
          _hoisted_3$1
        ])) : createCommentVNode("", true),
        _hoisted_4,
        createVNode(_sfc_main$2, { onSelect: onNewTaskSelect }),
        createVNode(QCheckbox, {
          modelValue: areTasksSortedByName.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => areTasksSortedByName.value = $event),
          label: "Sort Tasks by Name"
        }, null, 8, ["modelValue"]),
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchTaskInput.value = $event),
          class: "input input-sm input-bordered my-2",
          placeholder: "Search Tasks"
        }, null, 512), [
          [vModelText, searchTaskInput.value]
        ]),
        withDirectives(createVNode(TimeblockTaskBoxEditor, {
          ref_key: "timeblockTaskBoxEditorEl",
          ref: timeblockTaskBoxEditorEl,
          name: newTaskName.value,
          "onUpdate:name": _cache[2] || (_cache[2] = ($event) => newTaskName.value = $event),
          description: newTaskDescription.value,
          "onUpdate:description": _cache[3] || (_cache[3] = ($event) => newTaskDescription.value = $event),
          "task-type": selectedTaskType.value,
          onBlur: addTask
        }, null, 8, ["name", "description", "task-type"]), [
          [vShow, isNewTaskEditorVisible.value]
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(visibleTasks.value, (task) => {
          return openBlock(), createBlock(_sfc_main$3, {
            id: task.getId(),
            key: task.getId()
          }, null, 8, ["id"]);
        }), 128))
      ], 40, _hoisted_1$1)), [
        [vShow, unref(timeblockStore).isTaskDockOpen]
      ]);
    };
  }
});
class TimeblockColumn {
  constructor({ timeblock, id }) {
    __publicField(this, "timeblock");
    __publicField(this, "id");
    __publicField(this, "taskBlockIds");
    this.id = id;
    this.timeblock = timeblock;
    this.taskBlockIds = new Set();
  }
  getDate() {
    return this.timeblock.getDate();
  }
  getId() {
    return this.id;
  }
  setTimeblock(timeblock) {
    this.timeblock = timeblock;
  }
  getTimeblock() {
    return this.timeblock;
  }
  addTaskBlock(taskBlockId) {
    const taskBlock = this.timeblock.getTaskBlock(taskBlockId);
    this.taskBlockIds.add(taskBlockId);
    taskBlock.setTimeblockColumnId(this.getId());
  }
  removeTaskBlock(taskBlockId) {
    const taskBlock = this.timeblock.getTaskBlock(taskBlockId);
    taskBlock.setTimeblockColumnId(void 0);
    this.taskBlockIds.delete(taskBlockId);
  }
  getTaskBlocks() {
    return [...this.taskBlockIds.values()].map((taskBlockId) => this.timeblock.getTaskBlock(taskBlockId));
  }
}
class Timeblock {
  constructor({ id, date }) {
    __publicField(this, "id");
    __publicField(this, "date");
    __publicField(this, "columns");
    __publicField(this, "taskMap");
    __publicField(this, "taskBlockMap");
    __publicField(this, "orderedTaskIds");
    __publicField(this, "taskBlockToColumnNumberMap");
    this.id = id;
    this.date = date;
    this.taskMap = new Map();
    this.taskBlockMap = new Map();
    this.orderedTaskIds = [];
    this.columns = [];
  }
  getId() {
    return this.id;
  }
  addTask(task, index = 0) {
    this.taskMap.set(task.getId(), task);
    this.orderedTaskIds.splice(index, 0, task.getId());
  }
  removeTask(taskId) {
    this.taskMap.delete(taskId);
  }
  getTask(taskId) {
    const task = this.taskMap.get(taskId);
    if (task === void 0) {
      throw new Error(`Task with ID ${taskId} not found.`);
    }
    return task;
  }
  getTaskBlock(taskBlockId) {
    const taskBlock = this.taskBlockMap.get(taskBlockId);
    if (taskBlock === void 0) {
      throw new Error(`Task block with ID ${taskBlockId} not found.`);
    }
    return taskBlock;
  }
  addTaskBlock(taskBlock) {
    this.taskBlockMap.set(taskBlock.getId(), taskBlock);
  }
  getOrderedTaskIds() {
    return this.orderedTaskIds;
  }
  addColumn(timeblockColumnId) {
    this.columns.push(new TimeblockColumn({
      timeblock: this,
      id: timeblockColumnId
    }));
  }
  getColumn(id) {
    return this.columns.find((c) => c.getId() === id);
  }
  deleteColumn(id) {
    const columnIndex = this.columns.findIndex((c) => c.getId() === id);
    if (columnIndex === -1) {
      throw new Error("Column not found.");
    }
    this.columns.splice(columnIndex, 1);
  }
  getDate() {
    return this.date;
  }
  setDate(date) {
    this.date = date;
  }
  getColumns() {
    return this.columns;
  }
}
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "column"
};
const _hoisted_3 = { class: "row px-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const routeParams = computed(() => route.params);
    const timeblockId = computed(() => routeParams.value.id);
    const timeblockStore = useTimeblockStore();
    watch(() => routeParams.value.id, () => {
      timeblockStore.activeTimeblockId = routeParams.value.id;
    });
    let isLoading = ref(true);
    (() => __async(this, null, function* () {
      var _a2, _b2, _c, _d, _e, _f, _g, _h;
      const [timeblockResult, timeblockTasksResult, timeblockColumns] = yield Promise.all([
        client.query("getTimeblock", {
          timeblockId: routeParams.value.id
        }),
        client.query("getTimeblockTasks", {
          limit: 10,
          skip: 0
        }),
        client.query("getTimeblockColumns", {
          timeblockId: routeParams.value.id
        })
      ]);
      if (!timeblockStore.hasTimeblock(timeblockId.value)) {
        const timeblock = new Timeblock({
          id: timeblockId.value,
          date: timeblockResult.date
        });
        for (const task of timeblockTasksResult) {
          let taskToAdd;
          switch (task.type) {
            case "normal": {
              taskToAdd = new Task({
                id: task.id,
                name: task.name,
                description: (_a2 = task.description) != null ? _a2 : "",
                isHidden: task.isHidden
              });
              break;
            }
            case "fixed-time": {
              taskToAdd = new FixedTimeTask({
                id: task.id,
                name: task.name,
                description: (_b2 = task.description) != null ? _b2 : "",
                isHidden: task.isHidden,
                startMinute: (_c = task.startMinute) != null ? _c : void 0,
                endMinute: (_d = task.endMinute) != null ? _d : void 0
              });
              break;
            }
            case "fixed-weekly-time": {
              taskToAdd = new FixedWeeklyTimeTask({
                id: task.id,
                name: task.name,
                description: (_e = task.description) != null ? _e : "",
                isHidden: task.isHidden,
                startMinute: (_f = task.startMinute) != null ? _f : void 0,
                endMinute: (_g = task.endMinute) != null ? _g : void 0,
                dayOfWeek: (_h = task.dayOfWeek) != null ? _h : void 0
              });
              break;
            }
            default:
              throw new Error(`Unrecognized task type ${task.type}`);
          }
          timeblock.addTask(taskToAdd);
        }
        timeblockStore.addTimeblock(timeblock);
        for (const timeblockColumn of timeblockColumns) {
          timeblock.addColumn(timeblockColumn.id);
        }
      }
      timeblockStore.activeTimeblockId = timeblockId.value;
      isLoading.value = false;
    }))();
    return (_ctx, _cache) => {
      return isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(CircleSpinner)
      ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createVNode(_sfc_main$5),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_sfc_main$1),
          createVNode(_sfc_main$6)
        ])
      ]));
    };
  }
});
export { _sfc_main as default };
