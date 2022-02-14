import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Screens } from "../types";
import { debounce } from "../utils/debounce";

type Joke = {
  id: string;
  joke: string;
};

type Props = NativeStackScreenProps<Screens, "Search">;

const SearchScreen = ({ navigation }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [isDoneFetching, setIsDoneFetching] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const getSearchValues = async (searchTerm: string) => {
    try {
      setIsDoneFetching(false);
      const resp = await fetch(
        `https://icanhazdadjoke.com/search?term=${searchTerm}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await resp.json();
      setIsDoneFetching(true);
      setJokes(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const debouncedGetSearchValues = useCallback(
    debounce(getSearchValues, 300),
    []
  );

  useEffect(() => {
    if (inputValue.length < 2) {
      return;
    }
    console.log(inputValue);
    debouncedGetSearchValues(inputValue);
  }, [inputValue]);
  console.log(jokes.length);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.text}>Search for a joke</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
        />
        {isDoneFetching && (
          <Text style={styles.text}>{jokes.length} search results</Text>
        )}
      </View>

      <SafeAreaView style={styles.scrollContainer}>
        <ScrollView>
          {jokes.map(joke => (
            <View key={joke.id} style={styles.joke}>
              <Text style={styles.text}>{joke.joke}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
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
    marginVertical: 20,
    backgroundColor: "#484848",
    padding: 20,
    borderRadius: 10,
    width: 300,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    padding: 10,
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
  scrollContainer: {
    display: "flex",
    flex: 3,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;
