const greyTone = {
  codeRGB: '#42424D',
  red: '26%',
  green: '26%',
  blue: '30%',
  darkestPurcent: -16,
  darkerPurcent: -10,
  lighterPurcent: 40,
  lightestPurcent: 100,
};

//Pick colors by HUE value & adjust only the lightness parameter
const primaryTone = {
  codeRGB: '#FF7300',
  hue: '27',
  saturation: '100%',
  lightness: '50%',
  darkestAdjust: -40,
  darkerAdjust: -32,
  mediumAdjust: -6,
  lighterAdjust: 16,
  lightestAdjust: 34,
};

const secondaryTone = {
  codeRGB: '#00FFCC',
  hue: '168',
  saturation: '100%',
  lightness: '50%',
  darkestAdjust: -43,
  darkerAdjust: -31,
  mediumAdjust: 0,
  lighterAdjust: 0,
  lightestAdjust: 0,
};

export const darkestColors = {
  grey: `rgb(calc(${greyTone.red} + ${greyTone.darkestPurcent}%), calc(${greyTone.green} + ${greyTone.darkestPurcent}%), calc(${greyTone.blue} + ${greyTone.darkestPurcent}%))`,
  primary: `hsl(${primaryTone.hue}, ${primaryTone.saturation}, calc(${primaryTone.lightness} + ${primaryTone.darkestAdjust}%))`,
  secondary: `hsl(${secondaryTone.hue}, ${secondaryTone.saturation}, calc(${secondaryTone.lightness} + ${secondaryTone.darkestAdjust}%))`,
};

export const darkerColors = {
  grey: `rgb(calc(${greyTone.red} + ${greyTone.darkerPurcent}%), calc(${greyTone.green} + ${greyTone.darkerPurcent}%), calc(${greyTone.blue} + ${greyTone.darkerPurcent}%))`,
  primary: `hsl(${primaryTone.hue}, ${primaryTone.saturation}, calc(${primaryTone.lightness} + ${primaryTone.darkerAdjust}%))`,
  secondary: `hsl(${secondaryTone.hue}, ${secondaryTone.saturation}, calc(${secondaryTone.lightness} + ${secondaryTone.darkerAdjust}%))`,
};

export const mediumColors = {
  grey: `rgb(${greyTone.red},${greyTone.green},${greyTone.blue})`,
  primary: `hsl(${primaryTone.hue}, ${primaryTone.saturation}, calc(${primaryTone.lightness} + ${primaryTone.mediumAdjust}%))`,
  secondary: `hsl(${secondaryTone.hue}, ${secondaryTone.saturation}, calc(${secondaryTone.lightness} + ${secondaryTone.mediumAdjust}%))`,
};

export const lighterColors = {
  grey: `rgb(calc(${greyTone.red} + ${greyTone.lighterPurcent}%), calc(${greyTone.green} + ${greyTone.lighterPurcent}%), calc(${greyTone.blue} + ${greyTone.lighterPurcent}%))`,
  primary: `hsl(${primaryTone.hue}, ${primaryTone.saturation}, calc(${primaryTone.lightness} + ${primaryTone.lighterAdjust}%))`,
  secondary: `hsl(${secondaryTone.hue}, ${secondaryTone.saturation}, calc(${secondaryTone.lightness} + ${secondaryTone.lighterAdjust}%))`,
};

export const lightestColors = {
  grey: `rgb(calc(${greyTone.red} + ${greyTone.lightestPurcent}%), calc(${greyTone.green} + ${greyTone.lightestPurcent}%), calc(${greyTone.blue} + ${greyTone.lightestPurcent}%))`,
  primary: `hsl(${primaryTone.hue}, ${primaryTone.saturation}, calc(${primaryTone.lightness} + ${primaryTone.lightestAdjust}%))`,
  secondary: `hsl(${secondaryTone.hue}, ${secondaryTone.saturation}, calc(${secondaryTone.lightness} + ${secondaryTone.lightestAdjust}%))`,
};
