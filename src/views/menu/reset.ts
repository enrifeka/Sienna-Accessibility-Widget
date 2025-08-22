import { saveUserSettings, userSettings } from "@/globals/userSettings";
import runAccessibility from "./runAccessibility";

export default function reset() {
    document?.querySelectorAll(".asw-selected")?.forEach(el => el?.classList?.remove("asw-selected"));

    const amountEl = document.querySelector('.asw-amount');
    if (amountEl) {
        amountEl.textContent = "100%"; // or your default value
    }

    userSettings.states = {};
    runAccessibility();

    saveUserSettings();
}