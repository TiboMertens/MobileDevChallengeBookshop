import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

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
          <Image
            style={styles.icon}
            source={require("./assets/shoppingCart.png")}
          />
          <Text style={styles.shoppingCartAmount}>1</Text>
        </View>
      </View>
      <View style={styles.bookContainer}>
        <Text style={styles.bookTitle}>book 1</Text>
        <Text style={styles.bookAuthor}>by John Doe</Text>
        <Text style={styles.bookDescription}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum
        </Text>
        <Text style={styles.ISBN}>ISBN 978-8-2165-1860-1</Text>
        <Text style={styles.readBtn}>Read</Text>
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
  shoppingCart: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 30,
  },
  icon: {
    width: 35,
    height: 35,
    marginTop: 73,
  },
});
