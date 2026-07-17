import { create } from "zustand";
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  phone: z.string().min(8, "Telefone inválido"),
  interest: z.string().min(1, "Selecione um interesse"),
});

export type ContactForm = z.infer<typeof ContactSchema>;

export type QuizAnswer = string | string[];

export interface QuizAnswers {
  goal?: QuizAnswer;
  content?: QuizAnswer;
  login?: QuizAnswer;
  platform?: QuizAnswer;
  offline?: QuizAnswer;
  database?: QuizAnswer;
  notifications?: QuizAnswer;
  chatbot?: QuizAnswer;
  timeline?: QuizAnswer;
  budget?: QuizAnswer;
}

interface AppStore {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
  contactInterest: string;
  setContactInterest: (interest: string) => void;
  quizOpen: boolean;
  openQuiz: () => void;
  closeQuiz: () => void;
  quizStep: number;
  setQuizStep: (step: number) => void;
  quizAnswers: QuizAnswers;
  setQuizAnswer: (key: keyof QuizAnswers, value: QuizAnswer) => void;
  resetQuiz: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  contactInterest: "",
  setContactInterest: (interest) => set({ contactInterest: interest }),
  quizOpen: false,
  openQuiz: () => set({ quizOpen: true, quizStep: 0, quizAnswers: {} }),
  closeQuiz: () => set({ quizOpen: false }),
  quizStep: 0,
  setQuizStep: (step) => set({ quizStep: step }),
  quizAnswers: {},
  setQuizAnswer: (key, value) =>
    set((state) => ({ quizAnswers: { ...state.quizAnswers, [key]: value } })),
  resetQuiz: () => set({ quizStep: 0, quizAnswers: {} }),
}));
