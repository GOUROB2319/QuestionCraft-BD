import { create } from 'zustand';

interface AppState {
    language: 'bn' | 'en';
    isDarkMode: boolean;
    toggleLanguage: () => void;
    toggleDarkMode: () => void;
}

export const useAppStore = create<AppState>((set) => ({
    language: 'bn',
    isDarkMode: false,
    toggleLanguage: () =>
        set((state) => ({ language: state.language === 'bn' ? 'en' : 'bn' })),
    toggleDarkMode: () =>
        set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
