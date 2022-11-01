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
        <Text style={styles.bookTitle}>Book 1</Text>
        <Text style={styles.bookAuthor}>by John Doe</Text>
        <Text style={styles.bookDescription}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum
        </Text>
        <View style={styles.readISBN}>
          <Text style={styles.ISBN}>ISBN 978-8-2165-1860-1</Text>
          <Text style={styles.readBtn}>Read</Text>
        </View>
      </View>
    </View>
    //hey
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
    fontSize: 16,
  },
  shoppingCart: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 75,
  },
  bookContainer: {
    marginLeft: 21,
    marginTop: 10,
  },
  bookTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 12,
    marginTop: -5,
  },
  bookDescription: {
    marginTop: 10,
  },
  readISBN: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  readBtn: {
    position: "absolute",
    right: 40,
  }
});
