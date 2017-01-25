'use strict'

const Alexa = require('alexa-sdk')
const dateFormat = require('dateformat')
const dates = require('./data/dates.json')

exports.handler = (event, context, callback) => {
  let alexa = Alexa.handler(event, context)
  alexa.registerHandlers(handlers)
  alexa.resources = languageStrings
  alexa.execute()
}

let handlers = {
  'BinmanIntent': function () {
    let weekOfYear = dateFormat(new Date(), 'W')
    let binColour = dates[weekOfYear].colour
    let speechOutput = this.t('THIS_WEEK_IS') + binColour
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), speechOutput)
  }
}

let languageStrings = {
  'en-GB': {
    'translation': {
      'THIS_WEEK_IS': 'This week is ',
      'SKILL_NAME': 'Binman'
    }
  }
}
