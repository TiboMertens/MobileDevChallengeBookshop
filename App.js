import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

import Book from "./component/book.js";

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
      <View>
        <Book
          title="Book 1"
          author="by John Doe"
          description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
          ISBN="3146-6565-61-654"
        />
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
});
