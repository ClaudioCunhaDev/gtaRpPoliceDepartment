import { atom, useRecoilState } from "recoil";

const modalAtom = atom<{ incident: boolean; profile: boolean }>({
  key: "modalState",
  default: { incident: false, profile: false },
});

export const useModalState = () => {
  return useRecoilState(modalAtom);
};
