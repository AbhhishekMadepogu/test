import {CustomThemeColorsType, ThemeColorType} from '../types/PropType';

export const DARK_THEME = 'DARK_THEME';
export const LIGHT_THEME = 'LIGHT_THEME';

const lightThemeColors: ThemeColorType = {
  // - Text -
  primaryText: 'rgba(0,0,0,1)',
  primaryTextOpposite: 'rgba(255,255,255,1)',
  secondaryText: 'rgba(148, 150, 158, 1)',
  primaryBackground: 'rgb(242, 242, 243)',
  secondaryBackground: 'rgba(255,255,255,1)',
  primaryBorder: 'rgba(201, 202, 207, 1)',
  secondaryBorder: 'rgba(175, 176, 182, 1)',
  primaryShadow: 'rgba(228, 229, 231, 1)',
  messsageText: 'rgba(1, 1, 1, 1)',

  // - Neutrals -
  black: 'rgba(0,0,0,1)',
  white: 'rgba(255,255,255,1)',
  almostWhite: 'rgba(252,252,253,1)',
  gray50: 'rgba(246, 246, 246, 1)',
  gray100: 'rgba(228, 229, 231, 1)',
  gray200: 'rgba(201, 202, 207, 1)',
  gray300: 'rgba(175, 176, 182, 1)',
  gray500: 'rgba(148, 150, 158, 1)',
  gray700: 'rgba(73, 74, 80, 1)',
  gray900: 'rgba(36, 37, 40, 1)',
  backgroundColor: 'rgb(242, 242, 243)',

  // - Colors -
  blue10: 'rgba(235, 244, 254, 1)',
  blue20: 'rgba(206, 227, 253, 1)',
  blue30: 'rgba(157, 198, 251, 1)',
  blue40: 'rgba(118, 176, 249, 1)',
  blue50: 'rgba(79, 153, 247, 1)',
  blue60: 'rgba(11, 114, 244, 1)',
  green10: 'rgba(236, 248, 237, 1)',
  green20: 'rgba(218, 241, 219, 1)',
  green30: 'rgba(181, 227, 183, 1)',
  green40: 'rgba(144, 213, 147, 1)',
  green50: 'rgba(107, 199, 111, 1)',
  green60: 'rgba(70, 185, 75, 1)',
  green80: 'rgba(74,144,99, 1)',
  red10: 'rgba(253, 234, 232, 1)',
  red20: 'rgba(250, 214, 209, 1)',
  red30: 'rgba(246, 172, 162, 1)',
  red40: 'rgba(241, 131, 116, 1)',
  red50: 'rgba(237, 89, 69, 1)',
  red60: 'rgba(232, 48, 23, 1)',
  yellow10: 'rgba(242, 234, 221, 1)',
  yellow20: 'rgba(242, 227, 198, 1)',
  yellow30: 'rgba(241, 219, 178, 1)',
  yellow40: 'rgba(240, 203, 132, 1)',
  yellow50: 'rgba(238, 180, 66, 1)',
  yellow60: 'rgba(238, 164, 22, 1)',

  skyBlue: 'rgba(79, 213, 247, 0.3)',
  lightgreen: 'rgb(107, 199, 111)',
  pink: 'rgba(234, 191, 209, 0.5)',
  darkgreen: 'rgba(35, 196, 8, 0.2)',
  goldenrod: 'rgba(243, 181, 23, 0.2)',
  darkblue: 'rgba(84, 126, 234, 0.24)',
  darkpurple: 'rgba(95, 0, 249, 0.15)',
  midgreen: 'rgba(0,176,93,1)',

  // VN COLOR THEMES
  vnGreen: '#04BF67',
  vnBlue: '#03A9F4',
  vnOrange: '#FB8B47',
  vnPink: '#FA198C',

  mediakitPurple: 'rgb(11, 10, 37)',
  mediakitLightPurple: 'rgba(60, 26, 58, 1)',
  mediakitHotPink: 'rgb(255, 105, 180)',
  vnDarkBlue: 'rgba(45,98,139,1)',
  vnGradient1: 'rgba(202, 94, 253, 1)',
  vnGradient2: 'rgba(140, 50, 255, 1)',

  // - Gradients -
  // Instagram
  instayellow: 'rgb(254, 211, 115)',
  instared: 'rgb(241, 82, 69)',
  instamagenta: 'rgb(217, 46, 127)',
  instapurple: 'rgb(155, 54, 183)',
  instablue: 'rgb(81, 94, 207)',
  instagramfigmapink: 'rgba(191,108,141,1)',
  instagramfigmayellow: 'rgba(249, 203, 111, 1)',

  // Tiktok
  tiktokteal: 'rgb(0, 242, 234)',
  tiktokred: 'rgb(255, 0, 80)',
  tiktokfigmateal: 'rgba(109,190,197,1)',
  tiktokfigmagrey: 'rgba(191,191,204,1)',

  // Youtube
  youtubedarkred: 'rgb(66, 13, 9)',
  youtubemedred: 'rgb(211, 0, 0)',
  youtubered: 'rgb(255, 0, 0)',
  youtubefigmared: 'rgba(160,85,81,1)',
  youtubefigmapink: 'rgba(235,112,106,1)',

  // Twitter
  twitterblue: 'rgba(54, 216, 255, 1)',
  twitterdarkblue: 'rgba(0, 172, 238, 1)',
  twittergray: 'rgba(102, 117, 127, 1)',

  // Facebook
  facebookblue: 'rgba(59, 89, 152, 1)',

  // Discover Background
  discoverpurple: 'rgba(174,137,251,1)',
  discoverblue: 'rgba(106,163,242,1)',

  // Sign In
  signinScreenBackgroundGradientTop: 'rgba(184, 195, 252, 0.4)',
  signinScreenBackgroundGradientBottom: 'rgba(152, 229, 229, 0)',

  // - Other -
  selectedWhite: 'rgba(235, 244, 254, 1)',
  error: '#E83017',
  errorUnselected: 'rgba(246,172,162, 1)',
  inputError: '#ED5945',
  navyblue: 'rgb(16, 30, 44)',
};

const darkThemeColors: ThemeColorType = {
  // - Text -
  primaryText: 'rgba(225,225,225,1)',
  primaryTextOpposite: 'rgba(0,0,0,1)',
  secondaryText: 'rgba(201, 202, 207, 1)',
  primaryBackground: 'rgba(18,18,18, 1)',
  secondaryBackground: 'rgba(36, 37, 40, 1)',
  primaryBorder: 'rgba(36, 37, 40, 1)',
  secondaryBorder: 'rgba(228, 229, 231, 1)',
  primaryShadow: 'rgba(36, 37, 40, 1)',
  messsageText: 'rgba(223,223, 223 , 1)',

  // - Neutrals -
  // black: "rgba(255,255,255,1)",
  black: 'rgba(0,0,0,1)',
  white: 'rgba(255,255,255,1)',
  almostWhite: 'rgba(252,252,253,1)',
  gray50: 'rgba(246, 246, 246, 1)',
  gray100: 'rgba(228, 229, 231, 1)',
  gray200: 'rgba(201, 202, 207, 1)',
  gray300: 'rgba(175, 176, 182, 1)',
  gray500: 'rgba(148, 150, 158, 1)',
  gray700: 'rgba(73, 74, 80, 1)',
  gray900: 'rgba(36, 37, 40, 1)',
  backgroundColor: 'rgba(0,0,0,1)',

  // - Colors -
  blue10: 'rgba(235, 244, 254, 1)',
  blue20: 'rgba(206, 227, 253, 1)',
  blue30: 'rgba(157, 198, 251, 1)',
  blue40: 'rgba(118, 176, 249, 1)',
  blue50: 'rgba(79, 153, 247, 1)',
  blue60: 'rgba(11, 114, 244, 1)',
  green10: 'rgba(236, 248, 237, 1)',
  green20: 'rgba(218, 241, 219, 1)',
  green30: 'rgba(181, 227, 183, 1)',
  green40: 'rgba(144, 213, 147, 1)',
  green50: 'rgba(107, 199, 111, 1)',
  green60: 'rgba(70, 185, 75, 1)',
  green80: 'rgba(74,144,99, 1)',
  red10: 'rgba(253, 234, 232, 1)',
  red20: 'rgba(250, 214, 209, 1)',
  red30: 'rgba(246, 172, 162, 1)',
  red40: 'rgba(241, 131, 116, 1)',
  red50: 'rgba(237, 89, 69, 1)',
  red60: 'rgba(232, 48, 23, 1)',
  yellow10: 'rgba(242, 234, 221, 1)',
  yellow20: 'rgba(242, 227, 198, 1)',
  yellow30: 'rgba(241, 219, 178, 1)',
  yellow40: 'rgba(240, 203, 132, 1)',
  yellow50: 'rgba(238, 180, 66, 1)',
  yellow60: 'rgba(238, 164, 22, 1)',

  skyBlue: 'rgba(79, 213, 247, 0.3)',
  lightgreen: 'rgb(107, 199, 111)',
  pink: 'rgba(234, 191, 209, 0.5)',
  darkgreen: 'rgba(93, 200, 162, 0.2))',
  goldenrod: 'rgba(253, 204, 30, 0.5)',
  darkblue: 'rgba(84, 126, 234, 0.24)',
  darkpurple: 'rgba(95, 0, 249, 0.15)',
  midgreen: 'rgba(0,176,93,1)',
  navyblue: 'rgb(16, 30, 44)',

  // VN COLOR THEMES
  vnGreen: '#04BF67',
  vnBlue: '#03A9F4',
  vnOrange: '#FB8B47',
  vnPink: '#FA198C',

  mediakitPurple: 'rgb(11, 10, 37)',
  mediakitLightPurple: 'rgba(60, 26, 58, 1)',
  mediakitHotPink: 'rgb(255, 105, 180)',
  vnDarkBlue: 'rgb(45,98,139)',
  vnGradient1: 'rgba(202, 94, 253, 1)',
  vnGradient2: 'rgba(140, 50, 255, 1)',

  // - Gradients -
  // Instagram
  instayellow: 'rgb(254, 211, 115)',
  instared: 'rgb(241, 82, 69)',
  instamagenta: 'rgb(217, 46, 127)',
  instapurple: 'rgb(155, 54, 183)',
  instablue: 'rgb(81, 94, 207)',
  instagramfigmapink: 'rgba(191,108,141,1)',
  instagramfigmayellow: 'rgba(249, 203, 111, 1)',

  // Tiktok
  tiktokteal: 'rgb(0, 242, 234)',
  tiktokred: 'rgb(255, 0, 80)',
  tiktokfigmateal: 'rgba(109,190,197,1)',
  tiktokfigmagrey: 'rgba(191,191,204,1)',

  // Youtube
  youtubedarkred: 'rgb(66, 13, 9)',
  youtubemedred: 'rgb(211, 0, 0)',
  youtubered: 'rgb(255, 0, 0)',
  youtubefigmared: 'rgba(160,85,81,1)',
  youtubefigmapink: 'rgba(235,112,106,1)',

  // Twitter
  twitterblue: 'rgba(54, 216, 255, 1)',
  twitterdarkblue: 'rgba(0, 172, 238, 1)',
  twittergray: 'rgba(102, 117, 127, 1)',

  // Facebook
  facebookblue: 'rgba(59, 89, 152, 1)',

  // Discover Background
  discoverpurple: 'rgba(174,137,251,1)',
  discoverblue: 'rgba(106,163,242,1)',

  // Sign In
  signinScreenBackgroundGradientTop: 'rgba(184, 195, 252, 0.4)',
  signinScreenBackgroundGradientBottom: 'rgba(152, 229, 229, 0)',

  // Other
  selectedWhite: 'rgba(235, 244, 254, 1)',

  error: '#E83017',
  errorUnselected: 'rgba(246,172,162, 1)',
  inputError: '#ED5945',
};

export const customThemeColors: CustomThemeColorsType = {
  [DARK_THEME]: darkThemeColors,
  [LIGHT_THEME]: lightThemeColors,
};
