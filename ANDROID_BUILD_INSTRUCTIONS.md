# Building Android APK from Next.js Project with Capacitor

This guide explains how to build an Android APK from your Next.js web project using Capacitor.

## Prerequisites

- Node.js and npm installed
- Android Studio installed with Android SDK
- Java JDK installed
- Your Next.js project ready and tested

## Steps

1. **Build your Next.js app for production**

```bash
npm run build
npm run export
```

This generates a static version of your site in the `out` directory.

2. **Initialize Capacitor (if not done already)**

```bash
npx cap init spider-man-love-journey com.example.spidermanlovejourney
```

3. **Add Android platform**

```bash
npx cap add android
```

4. **Copy web assets to native project**

```bash
npx cap copy android
```

5. **Open Android project in Android Studio**

```bash
npx cap open android
```

6. **Build APK in Android Studio**

- In Android Studio, go to `Build > Build Bundle(s) / APK(s) > Build APK(s)`
- Wait for the build to complete
- Locate the APK in the output folder (usually under `app/build/outputs/apk/`)

7. **Test and distribute your APK**

- Install the APK on an Android device or emulator
- Test the app functionality
- Distribute via Google Play or other means

## Notes

- Capacitor wraps your web app in a native WebView container.
- You can add native plugins and customize the Android project as needed.
- For more details, visit the [Capacitor documentation](https://capacitorjs.com/docs).

---

If you need help with any step, feel free to ask.
