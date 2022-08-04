// if and switch statements

let browser = "chrome";
if (browser == "chrome") {
  console.log("chrome Started");
} else if (browser == "firefox") {
  console.log("firefox started");
} else if (browser === "safari" || browser.includes("sa")) {
  console.log("safari started");
} else {
  console.log("no browser started");
}

switch (browser) {
  case "chrome": {
    console.log("chrome started");
    break;
  }
  case "firefox": {
    console.log("firefox started");
    break;
  }
  case "safari": {
    console.log("safari started");
    break;
  }
  default: {
    console.log("no browser started");
  }
}
