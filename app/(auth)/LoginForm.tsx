import { signIn } from '@/components/siginin';
import {
  GoogleSignin,
  GoogleSigninButton
} from '@react-native-google-signin/google-signin';
import { Link, useRouter } from "expo-router";
import {
  Button,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle
} from "react-native";
GoogleSignin.configure({
  webClientId: '955387667081-275lljso8eb8l4vd95ui3fsig2vnoj7v.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  scopes: [
    /* what APIs you want to access on behalf of the user, default is email and profile
    this is just an example, most likely you don't need this option at all! */
    'https://www.googleapis.com/auth/drive.readonly',
  ],
  offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '955387667081-3o6et9496e5ocq3h5ug8ts9u509bum8i.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export default function LoginAuthen() {

  const router = useRouter();
 return (
     <View style={styles.container}>
       <Image style={styles.imageCustom} source={require('../../assets/images/LogoApp.png')} />
 
       <View style={styles.TextInputCustom}>
         <TextInput placeholder="Email or Username"></TextInput>
       </View>
 
       <View style={styles.TextInputCustom}>
         <TextInput placeholder="Your password"></TextInput>
       </View>
 
       <View>
         <Link 
         style={{textAlign:"right",width:Dimensions.get('screen').width * 0.7}} href="/(auth)/ResetPasswordForm" push>Forgotten password?</Link>
       </View>
 
       <View style={styles.ButtonCustom}>
         <Button title="Submit"></Button>
       </View>
 
       <HorizontalRule />


      <View style={styles.button}>
          <Text style={styles.text}>Sign In With Google Account</Text>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={()=> {signIn(router)}}
        />
      </View>
       
 
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