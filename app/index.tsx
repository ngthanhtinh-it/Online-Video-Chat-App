import React from "react";
import {Pressable,Button,Text, View, StyleSheet, TextInput,Image, Dimensions, Platform, ViewStyle} from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.imageCustom} source={require('./../assets/images/LogoApp.png')} />

      <View style={styles.TextInputCustom}>
        <TextInput placeholder="Email or Username"></TextInput>
      </View>

      <View style={styles.TextInputCustom}>
        <TextInput placeholder="Your password"></TextInput>
      </View>

      <Text style={{textAlign:"right",width:Dimensions.get('screen').width * 0.7}}>Forgotten password?</Text>

      <View style={styles.ButtonCustom}>
        <Button title="Submit"></Button>
      </View>

      <HorizontalRule />

      <Pressable style={styles.button} onPress={() => {}}>
        <Image
          source={require('./../assets/images/Logo_Google.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Sign in with Google</Text>
      </Pressable>

    </View>
  );
}

{/* Horizontal Rule Design */}
const horizontalRuleStyle: ViewStyle = {
  height:1,
  width:"100%",
  backgroundColor:"#a6a6a7ff",
};
const HorizontalRule: React.FC = () => {
  return <View style={horizontalRuleStyle} />;
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    paddingTop: Platform.OS == 'android' ? 0 : 40,
    padding:20,
    gap:23,
    backgroundColor:"#ffffff",
  },
  imageCustom:{
    width:Dimensions.get('screen').width * 0.85,
    height:280,
    resizeMode:"contain",
    marginTop:100,
  },
  TextInputCustom:{
    borderWidth:1,
    borderColor:"#a6a6a7ff",
    width:Dimensions.get('screen').width * 0.7,
    borderRadius:5,
    
  },
  ButtonCustom:{
    borderColor:"#a6a6a7ff",
    width:Dimensions.get('screen').width * 0.7,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomColor:"#a6a6a7ff",
  },
  horizontalRuleCustom:{
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor:"#a6a6a7ff",
    marginVertical: 10
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2
  },
});