import 'dotenv/config';

export default {
    name: 'EAT_IT',
    version: '1.0.1',
    extra: {
        USER_APP_CREDENTIALS: process.env.USER_APP_CREDENTIALS
    },
    expo: {
        "name": "EatIt",
        "slug": "eatit-app",
        "owner": "alexcabezas",
        "version": "1.0.1",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "userInterfaceStyle": "light",
        "splash": {
            "image": "./assets/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "updates": {
            "fallbackToCacheTimeout": 0
        },
        "assetBundlePatterns": [
            "**/*"
        ],
        "ios": {
            "bundleIdentifier": "miw.tfm.eatit",
            "buildNumber": "1.0.0"
        },
        "android": {
            "package": "miw.tfm.eatit",
            "versionCode": 1
        },
        "web": {
            "favicon": "./assets/favicon.png"
        }
    }
};