import React from "react";
import { ColorValue, SafeAreaView, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { makeStyles } from "./styles";
import { useTheme } from "../../hooks/usetheme";

type AppScreenWrapperType = {
  children: React.ReactNode;
  backgroundColor?: ColorValue;
  style?: any;
  isGestureHandlerRootView?: boolean;
  // flex?: number;
};
const barStyle= "dark-content" 
export const AppScreenWrapper = (props: AppScreenWrapperType) => {
  const { themeColors, currentTheme } = useTheme();

  const {
    children,
    backgroundColor = themeColors.primaryBackground,
    style = {},
    isGestureHandlerRootView = false,
  } = props;

  const styles = makeStyles();

  // Calculate the top padding based on the status bar height
  const statusBarHeight = StatusBar.currentHeight || 0;

  const containerStyle = {
    ...style,
    paddingTop: 0,
    marginTop: -statusBarHeight,
  };

  return (
    <SafeAreaView
      style={[styles.mainContainer, { backgroundColor }, containerStyle]}
    >
      {isGestureHandlerRootView ? (
        <GestureHandlerRootView
          style={[styles.mainContainer, { backgroundColor }]}
        >
          <StatusBar
            barStyle={
              barStyle
            }
          />
          {children}
        </GestureHandlerRootView>
      ) : (
        <>
          <StatusBar
            barStyle={
              barStyle
            }
          />
          {children}
        </>
      )}
    </SafeAreaView>
  );
};

AppScreenWrapper.defaultProps = {
  // backgroundColor: "",
  // flex: 1,
  style: {},
};
