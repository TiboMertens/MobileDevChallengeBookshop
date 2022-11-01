import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.heading}>
        <View style={styles.title}>
          <Text style={styles.h1}>Bookshop</Text>
        </View>
        <View style={styles.shoppingCart}>
          <Text style={styles.shoppingCartAmount}>1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 60,
    marginLeft: 20,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
  },
  shoppingCartAmount: {
    marginTop: 90,
    fontSize: 18,
  },
});
