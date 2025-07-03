import { defineStore } from "pinia";

const NumStore = defineStore("counter", {
  state: () => ({
    num: 0,
  }),
  getters: {
    doubleCount: (state) => state.num * 2,
    doubleCountPlusOne: (state) => state.num * 2 + 1,
  },
  actions: {
    increment() {
      this.num++;
    },
    incrementBy(amount: number) {
      this.num += amount;
    },
    decrement() {
      this.num--;
    },
    decrementBy(amount: number) {
      this.num -= amount;
    },
    reset() {
      this.num = 0;
    },
    setCount(num: number) {
      this.num = num;
    },
  },
});

export const useNumStore = NumStore();

export default NumStore;
