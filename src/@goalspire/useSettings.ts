import { Settings } from './types';
import { useStore } from './useStore';

const { getSettings, setSettings } = useStore();

export declare function useSettings(): UseSettings;

interface UseSettings {
	getSettings(): Settings;
    setSettings(): void;
    updateSettings(data: { goalVisibility?: boolean; reducedAnimations?: boolean; }): void;
}

class UseSettings implements UseSettings {
	getSettings(): Settings {
        return getSettings();
    }

    setSettings(): void {
        setSettings(new Settings());
    }

    updateSettings(data: { goalVisibility?: boolean; reducedAnimations?: boolean; }): void {
        getSettings().update(data);
    }
}