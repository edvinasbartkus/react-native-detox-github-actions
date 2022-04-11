module.exports = {
  'test-runner': 'jest',
  configurations: {
    'android.emu.debug': {
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
      type: 'android.emulator',
      name: 'emu',
    },
    'ios.sim.release': {
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/RNDetoxGa.app',
      build:
        'xcodebuild -workspace ios/RNDetoxGa.xcworkspace -scheme RNDetoxGa -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.simulator',
      name: 'iPhone 8',
    },
  },
  artifacts: {
    plugins: {
      log: { enabled: true },
      uiHierarchy: 'enabled',
      screenshot: {
        shouldTakeAutomaticSnapshots: true,
        keepOnlyFailedTestsArtifacts: true,
        takeWhen: {
          testStart: false,
          testDone: true,
        },
      },
    },
  },
};
