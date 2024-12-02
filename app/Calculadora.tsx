import React, { useState } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

export default function Calculadora() {
  const [input, setInput] = useState(""); // Armazena a entrada do usuário
  const [result, setResult] = useState(""); // Armazena o resultado

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString()); // Avalia a expressão matemática
      } catch (e) {
        setResult("Erro");
      }
    } else if (value === "C") {
      setInput(""); // Limpa a entrada
      setResult(""); // Limpa o resultado
    } else {
      setInput((prev) => prev + value); // Concatena o valor ao input atual
    }
  };

  return (
    <>
      {/* Oculta a barra de status */}
      <StatusBar hidden={true} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.display}>
          <Text style={styles.inputText}>{input || "0"}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        <View style={styles.buttons}>
          {[
            ["C", "(", ")", "/"],
            ["7", "8", "9", "*"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ".", "=", ""],
          ].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((btnValue, btnIndex) => (
                <TouchableHighlight
                  key={btnIndex}
                  style={styles.button}
                  underlayColor="#ddd"
                  onPress={() => handlePress(btnValue)}
                >
                  <Text style={styles.buttonText}>{btnValue}</Text>
                </TouchableHighlight>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    backgroundColor: "#d9ceff",
  },
  display: {
    backgroundColor: "#d9ceff",
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 150,
  },
  inputText: {
    fontSize: 36,
    color: "#6b04fd",
  },
  resultText: {
    fontSize: 24,
    color: "#aaa",
  },
  buttons: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: "#bea6ff",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 34,
    color: "#2c0076",
  },
});
