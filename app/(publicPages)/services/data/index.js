import aiAutomation from "./ai-automation";
import webDevelopment from "./web-development";
import mobileAppDevelopment from "./mobile-app-development";
import saasDevelopment from "./saas-development";
import customSoftwareDevelopment from "./custom-software-development";

export const servicePages = {
    "ai-automation": aiAutomation,
    "web-development": webDevelopment,
    "mobile-app-development": mobileAppDevelopment,
    "saas-development": saasDevelopment,
    "custom-software-development": customSoftwareDevelopment,
};

export const serviceSlugs = Object.keys(servicePages);
