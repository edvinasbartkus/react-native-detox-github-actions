# Starter shell for React Native project with Detox tests running on Github Actions

It includes two Github Actions workflows to run end to end Detox tests.
- [iOS](https://github.com/edvinasbartkus/react-native-detox-github-actions/blob/master/.github/workflows/ios.yml)
- [Android](https://github.com/edvinasbartkus/react-native-detox-github-actions/blob/master/.github/workflows/android.yml)

Config in package.json:
```yaml
  "detox": {
    "configurations": {
      "android.emu.debug": {
        "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
        "build":
        "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
        "type": "android.emulator",
        "name": "emu"
      },
      "ios.sim.release": {
        "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/RNDetoxGa.app",
        "build": "xcodebuild -workspace ios/RNDetoxGa.xcworkspace -scheme RNDetoxGa -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
        "type": "ios.simulator",
        "name": "iPhone 8"
      }
    },
    "test-runner": "jest"
  }
```

Little bit more detailed post on dev.to about the workflows: https://dev.to/edvinasbartkus/running-react-native-detox-tests-for-ios-and-android-on-github-actions-2ekn

