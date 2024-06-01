let font, img, fontBold, fontItalic;

function preload() {
  font = loadFont("PT_Sans/PTSans-Regular.ttf");
  img = loadImage('skull_image.png');
  fontBold = loadFont("PT_Sans/PTSans-Bold.ttf");
  fontItalic = loadFont("PT_Sans/PTSans-Italic.ttf");
}


function setup() {
  createCanvas(800, 1200);
}


function draw() {
  background(25);

  fill(168, 40, 27);
  rect(0, 75, 800, 210);

  fill(230, 223, 216);
  textFont(fontBold);
  textSize(70);
  textWrap(WORD);
  text("The Silent Killer", 75, 160);

  textFont(font);
  textSize(40);
  text("Carbon Monoxide a.k.a. CO", 75, 220);

  fill('230, 223, 216');
  textSize(20);
  text("Deadly, colorless, and odorless", 75, 260);

  fill(168, 40, 27);
  rect(170, 340, 143, 27);
  rect(374, 370, 72, 27);

  fill(230, 223, 216);

  textSize(20);
  textFont(font);
  text("Every year,", 75, 360);
  textFont(fontItalic);
  text("100,000+ people", 172, 360);
  textFont(font);
  text("visit an emergency room for accidental CO", 316, 360);
  text("poisoning in the United States and", 75, 390);
  textFont(fontItalic);
  text("14,000+", 376, 390);
  textFont(font);
  text("are hospitalized", 449, 390);

  text("CO may come from malfunctioning fuel-burning appliances (such as \nheaters), engine-powered equipment, fireplaces and other appliances \noperated in an enclosed space", 75, 440);
  image(img, 600, 110, 109, 139);

  text("The severity of symptoms are directly related to both the duration of \nexposure and the CO level", 75, 540);
  textFont(fontBold);

  text("Symptoms of low-moderate CO \npoisoning: \n- Fatigue \n- Dizziness \n- Headache \n- Nausea \n- Shortness of breath", 75, 630);
  text("Symptoms of high level CO \npoisoning: \n- Loss of muscular coordination \n- Vomiting \n- Mental confusion \n- Loss of consciousness \n- Ultimately death", 400, 630);

  textFont(font);
  text("What to do if a CO alarm sounds:\n- Immediately move outside to fresh air.\n- Call emergency services\n- DO NOT reenter the premises until the emergency services responders \n   have given you permission.\n- If the source of the CO is determined to be a malfunctioning appliance, \n   DO NOT operate that appliance until it has been properly serviced by \n   trained personnel", 75, 850);

  fill(255, 226, 36);

  triangle(75, 1102, 120, 1102, 97.5, 1066);
  stroke(1);
  triangle(78, 1100, 117, 1100, 97.5, 1070);
  noStroke();

  textFont(fontBold);
  fill(230, 223, 216);
  text("If you are experiencing any of these symptoms, get outside to \nfresh air immediately and seek medical attention promptly", 145, 1075);

  fill(0);
  text("!", 95, 1095);


}
