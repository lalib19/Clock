import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

const Clock = () => {
  const now = new Date();
  const hour = now.toLocaleTimeString("fr-FR");

  const [clock, setClock] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);

  useFocusEffect(
    React.useCallback(() => {
      let timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        // console.log(now);
      }, 1000);
      if (seconds === 3) {
        setSeconds((seconds) => (seconds = 0));
        setMinutes((minutes) => minutes + 1);
      }
      if (minutes === 3) {
        setMinutes((minutes) => (minutes = 0));
        setHours((hours) => hours + 1);
      }

      //   if (!clock) {
      //     clearInterval(timer);
      //   }

      return () => {
        clearInterval(timer);
        // setSeconds(0);
        // setMinutes(0);
        // setHours(0);
        //   console.log(timer);
      };
    }, [seconds === 3, minutes === 3])
  );

  const handleClock = () => {
    setClock(!clock);
    // clearInterval(timer);
  };

  const showClock = () => {
    if (clock) {
      return (
        <View style={styles.clock}>
          <Text style={{ fontSize: 40 }}>
            {hours}:{minutes}:{seconds}
          </Text>
          <Text style={{ fontSize: 40 }}>{hour}</Text>
        </View>
      );
    } else return <Text>No clock</Text>;
  };

  return (
    <View style={styles.container}>
      {showClock()}
      <View style={styles.button}>
        <Button title="Clock" onPress={handleClock} />
      </View>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "black",
  },
  clock: {
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
  button: {
    position: "absolute",
    bottom: "30%",
    //   right: 0
  },
});
