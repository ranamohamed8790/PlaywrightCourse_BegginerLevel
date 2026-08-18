let browsers: String[] = ["Chrome", "Firefox", "webkit"];
let count = 0;
for (const browser of browsers) {
  count++;
  if (count === 3) {
    console.log(`The 3rd browser is ${browser}`);
  }
}
