import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity } from "react-native";

function bookRead(){
    console.log("read");
}

const Book = (props) => {
  return (
      <View style={styles.bookContainer}>
        <Text style={styles.bookTitle}>{props.title}</Text>
        <Text style={styles.bookAuthor}>{props.author}</Text>
        <Text style={styles.bookDescription}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum
        </Text>
        <View style={styles.readISBN}>
          <Text style={styles.ISBN}>ISBN 978-8-2165-1860-1</Text>
          <TouchableNativeFeedback onPress={()=>bookRead()} style={styles.readBtnStyle}><Text style={styles.readBtn}>Read</Text></TouchableNativeFeedback>
        </View>
      </View>
  );
};

export default Book;

const styles = StyleSheet.create({
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
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 6,
    paddingTop: 5,
    paddingBottom: 2,
  },
  readBtnStyle: {
    cursor: "pointer",
  }
});
