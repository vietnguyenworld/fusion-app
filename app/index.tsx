import { View, StyleSheet} from 'react-native';
import LoginLayout from "../app/login/login ";  // Default import, corrected case
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function HomeScreen() {
  return (
    <View>
      {/* Render the LoginLayout */}
      <LoginLayout />
    </View>
  );
}
