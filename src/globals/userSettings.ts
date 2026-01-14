import { getStorageData, saveStorageData } from "@/storage";
import { getDefaultLanguage } from "@/i18n/getDefaultLanguage"

export let userSettings = {
  lang: undefined,
  position: undefined,
  states: {}
};

export const STORAGE_KEY = "asw-user-settings";

export function setUserStateSettings(state) {
    userSettings.states = {
        ...userSettings.states,
        ...state
    }

    saveUserSettings();
}

export function saveUserSettings() {
    saveStorageData(STORAGE_KEY, userSettings);
}

export function getSavedUserSettings() {
    const savedSettings = getStorageData(STORAGE_KEY);
    if (savedSettings) {
        savedSettings.lang = getDefaultLanguage();
    }
    return savedSettings;
}