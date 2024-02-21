import {customThemeColors} from '../utility/constant/ThemeColors';
import {ThemeNameType} from '../utility/types/PropType';

/**
 * To give theme name as a sting
 */
export const useTheme = () => {
  // @TODO: Ensure that we pull this data from the cache

  // @TODO: Add flow control for setting other levels

  const currentTheme: ThemeNameType = 'LIGHT_THEME';
  const themeColors = customThemeColors[currentTheme]; // Current theme colors

  return {
    themeColors,
    currentTheme,
  };
};
