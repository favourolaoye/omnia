import { create } from 'zustand';

type Step = 'email' | 'verify' | 'password' |  'success';

interface RegisterState {
  step: Step;
  email: string;
  setEmail: (email: string) => void;
  setStep: (step: Step) => void;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  step: 'email',
  email: '',
  setEmail: (email) => set({ email }),
  setStep: (step) => set({ step }),
}));
