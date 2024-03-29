import {ColorValue} from 'react-native';
export type ThemeNameType = keyof CustomThemeColorsType;
export type ThemeAccentType = Record<'main' | 'light' | 'dark', string>;

export type CustomThemeColorsType = {
  DARK_THEME: ThemeColorType;
  LIGHT_THEME: ThemeColorType;
};

export type ThemeColorType = {
  primaryText: string;
  skyBlue: string;
  black: string;
  white: string;
  almostWhite: string;
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray500: string;
  gray700: string;
  gray900: string;
  blue10: string;
  blue20: string;
  blue30: string;
  blue40: string;
  blue50: string;
  blue60: string;
  green10: string;
  green20: string;
  green30: string;
  green40: string;
  green50: string;
  green60: string;
  green80: string;
  red10: string;
  red20: string;
  red30: string;
  red40: string;
  red50: string;
  red60: string;
  yellow10: string;
  yellow20: string;
  yellow30: string;
  yellow40: string;
  yellow50: string;
  yellow60: string;
  instayellow: string;
  instared: string;
  instamagenta: string;
  instapurple: string;
  instablue: string;
  tiktokteal: string;
  tiktokred: string;
  lightgreen: ColorValue;
  youtubedarkred: string;
  youtubemedred: string;
  youtubered: string;
  backgroundColor: string;
  signinScreenBackgroundGradientTop: string;
  signinScreenBackgroundGradientBottom: string;
  selectedWhite: ColorValue;
  twitterblue: string;
  twitterdarkblue: string;
  twittergray: string;
  pink: ColorValue;
  darkgreen: ColorValue;
  goldenrod: ColorValue;
  darkblue: ColorValue;
  darkpurple: ColorValue;
  midgreen: ColorValue;
  facebookblue: ColorValue;
  error: ColorValue;
  tiktokfigmateal: string;
  tiktokfigmagrey: string;
  instagramfigmapink: string;
  instagramfigmayellow: string;
  youtubefigmared: string;
  youtubefigmapink: string;
  inputError: ColorValue;
  errorUnselected: ColorValue;
  discoverpurple: ColorValue;
  discoverblue: ColorValue;
  mediakitPurple: string;
  primaryBackground: string;
  secondaryBackground: string;
  secondaryText: string;
  primaryBorder: string;
  primaryShadow: string;
  mediakitLightPurple: string;
  mediakitHotPink: string;
  primaryTextOpposite: string;
  secondaryBorder: string;
  navyblue: string;
  vnDarkBlue: string;
  vnGradient1: string;
  vnGradient2: string;
  messsageText: ColorValue;
  vnBlue: string;
  vnGreen: string;
  vnPink: string;
  vnOrange: string;
};
