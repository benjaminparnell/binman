'use strict'

const args = process.argv
const weekOneColour = args[2]
const weekTwoColour = args[3]
const weeks = {}

for (let week = 1; week <= 52; week++) {
  if (week % 2 === 1) {
    weeks[week] = { colour: weekOneColour }
  } else {
    weeks[week] = { colour: weekTwoColour }
  }
}

console.log(JSON.stringify(weeks))
