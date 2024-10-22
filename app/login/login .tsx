import { Button, Text, TextInput, View, StyleSheet, Dimensions, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';


const { width } = Dimensions.get('window'); // Lấy chiều rộng màn hình
const LoginLayout = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.loginForm}>
        <View style={styles.usernameBox}>
          <Text style={styles.formText}>Username</Text>
          <View style={styles.inputAccount}>
            <FontAwesome name="user-o" size={24} color="black" />
            <TextInput placeholderTextColor =  "black" style={styles.inputText} placeholder="Type your username" />
          </View>
        </View>

        <View style={styles.passwordBox}> 
          <Text style={styles.formText}>Password</Text>
          <View style={styles.inputAccount}>
            <FontAwesome name="lock" size={24} color="black" />
            <TextInput placeholderTextColor = "black" style={styles.inputText} secureTextEntry={true} placeholder="Type your password" />
          </View>
        </View>

        <Text style={styles.forgetPasswordText}>Forget password?</Text>
        <Pressable 
        style={styles.loginButton}><Text style={styles.loginText}>Login</Text></Pressable>
        <Text style={styles.loginWithText}>Or sign in with</Text>
        <View style={styles.loginWith}>
          <View><FontAwesome6 name="square-x-twitter" size={24} color="black" /></View>
          <View><FontAwesome5 name="facebook" size={24} color="black" /></View>
          <View><AntDesign name="google" size={24} color="black" /></View>
        </View>
        <Text>Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around"
      
  },
  header: {
      fontSize: 40,
      fontWeight: "600",

  },
  loginForm: {
    marginTop:20,

  },
  inputAccount: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1,
 
  },
  inputText: {
    width: "80%",
    paddingLeft: 30,
    
  },
  usernameBox: {
    marginTop: 30
  },
  passwordBox: {
        marginTop:20
  },
  formText: {
    fontSize: 20,
    fontWeight: "600"
  },
  forgetPasswordText: {
    marginTop: 10
  },
  loginButton: {
    marginTop: 20,
    borderBlockColor: "green",
    borderWidth: 1,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "black"
  },
  loginText: {
    fontSize: 20,
    color: "#FFFFFF"
  },
  loginWithText: {
    alignContent: "center",
    marginTop: 20,
  },
  loginWith: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
     
  }
});

export default LoginLayout;
