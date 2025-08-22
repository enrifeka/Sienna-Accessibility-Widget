import { getScriptDataAttribute } from "../utils/getScriptDataAttribute";

export function getDefaultLanguage() {
    // Try to get language from .AspNetCore.Culture cookie
    const cultureCookie = getCookie('.AspNetCore.Culture');
    let language: string | undefined;

    if (cultureCookie) {
        // Example value: c=en-US|uic=en-US
        const match = cultureCookie.match(/c=([a-zA-Z-]+)/);
        if (match) {
            language = match[1];
        }
    }

    return language || "sq";
}

// Helper to get cookie value by name
function getCookie(name: string): string | undefined {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : undefined;
}