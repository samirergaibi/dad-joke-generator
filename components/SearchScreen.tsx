import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Screens } from "../types";

type Props = NativeStackScreenProps<Screens, "Search">;

const SearchScreen = ({ navigation: { navigate } }: Props) => {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Search for a joke</Text>
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
  joke: {
    marginVertical: 50,
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
});

export default SearchScreen;
