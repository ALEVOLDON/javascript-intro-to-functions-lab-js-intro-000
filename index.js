function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = 'I can\'t hear you!'
  var uppercase = 'YES INDEED!'
  var mixedCase = 'I love you, Grandma.'

  if (lowercase.toLowerCase() === lowercase ) {
    console.log(lowercase)
  } else if (uppercase.toUpperCase() === uppercase ) {
    console.log(uppercase)
  } else if (mixedCase.toLowerCase() === mixedCase &&
  mixedCase.toUpperCase() === mixedCase)
  {
    console.log('I love you, too.')
  }
}
