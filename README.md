# Customizing Lottie Files for Android with React Native

**Credit:**

- [GitHub Issue](https://github.com/lottie-react-native/lottie-react-native/issues/1005)
- [Colorize React Native Lottie](https://colorize-react-native-lottie.netlify.app/)

## Getting Started:

1. Visit [LottieFiles](https://lottiefiles.com/) and choose a Lottie file that you like.

## Removing Elements:

1. Open the chosen Lottie file in the Lottie editor.
2. Identify the element's name or group name that you want to remove.
3. Download the original Lottie animation as `something.json`.
4. Use [JSON Minifier](https://codebeautify.org/jsonminifier) to beautify your JSON.
5. Search for the element's name or group name in the assets or layers array and delete the entire object.
6. Minify the JSON again and replace the content of `input.json` in this directory.

## Changing Colors:

1. Copy the beautified JSON to [Colorize React Native Lottie](https://colorize-react-native-lottie.netlify.app/).
2. Paste the beautified JSON to get a list of elements like `layers.1.shapes.0.it.1.c.k`.
3. Modify the colors as desired and copy the `Example()` function.
4. In this directory, go to `App.js` and replace the existing `Example()` with your copied function.
5. Inside the `Example()` function, replace these lines:

   ```javascript
   return (
     <LottieView source={colorizedSource} style={{ width: 300, height: 300 }} />
   );
   return colorizedSource;
   ```

6. Save and quit and run `npm start`.
7. Copy `output.json` to wherever you need the Lottie file for Android.
