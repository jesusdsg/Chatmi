import { create } from "zustand";

export const userStore = create((set) => ({
  username: "",
  usersList: [],
  setUsername: (value: string) =>
    set({
      username: value,
    }),
  deleteUsername: () =>
    set({
      username: "",
    }),
  setUsersList: (value: any) =>
    set((state: any) => ({
      usersList: [...state.usersList, { username: value }],
    })),
}));
