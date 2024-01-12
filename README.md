How to get Lottie files that work on Android with React native:

<!-- Credit:  -->
<!-- https://github.com/lottie-react-native/lottie-react-native/issues/1005 -->
<!-- https://colorize-react-native-lottie.netlify.app/ -->

1. Go to: https://lottiefiles.com/ and find a lottie file you like.

If you want to remove elements:

1. Open it in the lottie editor and find the element's name or element's group name.
2. Do not edit anything, but download the original lottie animation. It'll be something.json.
3. Go to https://codebeautify.org/jsonminifier and beautify your json.
4. Search for that element's name or element's group name and delete the whole object. It should be in the assets or layers array. Delete all instances of it (probably only 1).
5. Minify the json again and copy the minified json.
6. In this directory, go to input.json and replace everything there with your minified json.

If you want to change the colors:

1. Copy the beautified json to: https://colorize-react-native-lottie.netlify.app/
2. Paste the beautified json in and it'll give you a list of elements like: `layers.1.shapes.0.it.1.c.k`.
3. Change all the colors you want and copy the function called Example().
4. In this directory, go to App.js and replace Example() with your copied Example().
5. Inside the Example() function, replace these lines:
   return <LottieView source={colorizedSource} style={{ width: 300, height: 300 }} />;
   return colorizedSource;
6. Save and quit and run npm start.
7. Copy output.json to wherever you need the lottie file for Android
