import { d as defineStore, l as dayjs } from "./vendor.fc660d35.js";
function createTimeblockStoreState() {
  return {
    activeTimeblockId: void 0,
    activeDraggingTaskBlock: void 0,
    timeblockListings: [],
    timeblockMap: new Map(),
    isTaskDockOpen: true
  };
}
const useTimeblockStore = defineStore("timeblock", {
  state: () => createTimeblockStoreState(),
  actions: {
    addTimeblockListing({
      timeblockId,
      timeblockName,
      timeblockDate
    }) {
      this.timeblockListings.push({
        timeblockId,
        timeblockName,
        timeblockDate
      });
    },
    hasTimeblock(timeblockId) {
      return this.timeblockMap.has(timeblockId);
    },
    getTimeblock(timeblockId) {
      return this.timeblockMap.get(timeblockId);
    },
    addTimeblock(timeblock) {
      this.timeblockMap.set(timeblock.getId(), timeblock);
    },
    deleteTimeblock(timeblockId) {
      this.timeblockMap.delete(timeblockId);
      this.timeblockListings.splice(this.timeblockListings.findIndex((timeblock) => timeblock.timeblockId === timeblockId), 1);
    }
  },
  getters: {
    activeTimeblock(store) {
      return store.timeblockMap.get(store.activeTimeblockId);
    }
  }
});
function timeblockDateToDayjs({ year, month, day }) {
  return dayjs.tz(0).set("year", year).set("month", month).set("date", day);
}
function dayjsToTimeblockDate(d) {
  return {
    year: d.get("year"),
    month: d.get("month"),
    day: d.get("date")
  };
}
export { dayjsToTimeblockDate as d, timeblockDateToDayjs as t, useTimeblockStore as u };
