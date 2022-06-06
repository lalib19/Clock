import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Test from "./Test";
import Clock from "./Clock";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Test" component={Test} />
          {/* <Tab.Screen name="Clock" component={Clock} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});
