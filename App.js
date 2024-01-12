/*
Credit: 
https://github.com/lottie-react-native/lottie-react-native/issues/1005
https://colorize-react-native-lottie.netlify.app/
*/

import fs from "fs";
import { set } from "lodash";
import tinycolor from "tinycolor2";
import LOTTIE_SOURCE from "./input.json";

// values of colorByPath can be falsy to no-op
function colorizeLottie(json, colorByPath) {
  const nextJson = JSON.parse(JSON.stringify(json));

  Object.entries(colorByPath).forEach(([path, color]) => {
    // incase undefined/null/falsy is passed to color
    if (!color) return;
    const rgbPercentages = tinycolor(color).toPercentageRgb();
    const rFraction = parseInt(rgbPercentages.r, 10) / 100;
    const gFraction = parseInt(rgbPercentages.g, 10) / 100;
    const bFraction = parseInt(rgbPercentages.b, 10) / 100;

    const pathParts = path.split(".");
    set(nextJson, [...pathParts, 0], rFraction);
    set(nextJson, [...pathParts, 1], gFraction);
    set(nextJson, [...pathParts, 2], bFraction);
  });

  return nextJson;
}

function writeToFile(data, fileName) {
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
  console.log(`Output written to ${fileName}`);
}

function Example() {
  const colorizedSource = colorizeLottie(LOTTIE_SOURCE, {});

  return colorizedSource;
}

function App() {
  writeToFile(Example(), "output.json");
}

App();
