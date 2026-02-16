const characters = [
  {
    name: "Mara",
    mood: "soft",
    lines: [
      "Rain makes the kitchen feel quieter.",
      "It smells like home in here.",
      "Slow nights are my favorite."
    ]
  },
  {
    name: "Theo",
    mood: "warm",
    lines: [
      "You cook like you mean it.",
      "That simmer sounds perfect.",
      "This place feels alive."
    ]
  }
];

function getRandomCharacterLine() {
  const char = characters[Math.floor(Math.random() * characters.length)];
  const line = char.lines[Math.floor(Math.random() * char.lines.length)];
  return { name: char.name, line };
}
