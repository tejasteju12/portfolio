import { create } from 'zustand';

type UserInfo = {
  name: string;
  email: string;
};

interface Store {
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
}

const useStore = create<Store>((set) => ({
  userInfo: {
    name: 'Your Name',
    email: 'your.email@example.com',
  },
  setUserInfo: (info) => set({ userInfo: info }),
}));

export default useStore;
