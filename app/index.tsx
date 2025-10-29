import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
<View style={styles.container}>
  <View>
    <Text style={styles.TextTitle}>Hello World</Text>
  </View>

  <View style={styles.ButtonContainer}>
    <View style={{ marginVertical: 8, width: "80%" }}>
      <Link href="/(auth)/LoginForm" push asChild>
        <Button title="Sign In" />
      </Link>
    </View>

    <View style={{ marginVertical: 8, width: "80%" }}>
      <Link href="/(auth)/SignUpFrom" push asChild>
        <Button title="Sign Up" />
      </Link>
    </View>
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center", // bỏ hoặc chỉ căn giữa nội dung Text
    paddingHorizontal: 20, // khoảng cách 2 bên
  },
  TextTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "orange",
    textAlign: "center",
  },
  ButtonContainer: {
    paddingTop: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  fullWidthButton: {
    width: "100%",
    marginVertical: 8,
  },
});

// 955387667081-l1e4klrrpurfv1catlu9u32et4vuq1j4.apps.googleusercontent.com
// client id