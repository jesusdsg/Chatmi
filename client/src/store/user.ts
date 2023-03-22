import { create } from "zustand";

export const userStore = create((set) => ({
  username: "",
  setUsername: (value: string) =>
    set({
      username: value,
    }),
}));
