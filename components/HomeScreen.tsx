import { useState, useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { ArrowRight } from "../icons";
import { Screens } from "../types";
import dadJokeImage from "../assets/icon.jpeg";

type Props = NativeStackScreenProps<Screens, "Home">;

const HomeScreen = ({ navigation: { navigate } }: Props) => {
  const [joke, setJoke] = useState("");

  async function getJoke() {
    try {
      const resp = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await resp.json();
      setJoke(data.joke);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image source={dadJokeImage} style={styles.image} />

        <View style={styles.joke}>
          <Text style={styles.text}>{joke}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={getJoke}>
          <Text style={styles.buttonText}>Generate a random dad joke!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigate("Search")}
        >
          <Text style={styles.navText}>Search for a dad joke</Text>
          <ArrowRight />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 180 / 2,
    position: "absolute",
    top: 50,
  },
  joke: {
    marginTop: 180 / 2 + 50,
    marginBottom: 50,
    backgroundColor: "#484848",
    padding: 20,
    borderRadius: 10,
    width: 300,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: "steelblue",
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: "#272727",
    fontWeight: "bold",
    fontSize: 14,
    paddingRight: 3,
  },
  navContainer: {
    padding: 20,
    backgroundColor: "#272727",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default HomeScreen;
