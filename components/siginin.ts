import { GoogleSignin, isErrorWithCode, statusCodes } from '@react-native-google-signin/google-signin';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

// Hàm signIn hoàn chỉnh
export const signIn = async (router: ReturnType<typeof useRouter>) => {
  try {
    // Kiểm tra Play Services (Android)
    await GoogleSignin.hasPlayServices();

    // Thực hiện sign in
    const userInfo = await GoogleSignin.signIn();

    // Lưu thông tin user nếu cần (ví dụ AsyncStorage)
    // await AsyncStorage.setItem('user', JSON.stringify(userInfo));

    console.log('User Info:', userInfo.user);

    // Chuyển sang màn hình Home
    router.push('/(auth)/LoginForm');

  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          Alert.alert('Sign In', 'User cancelled the login flow');
          break;
        case statusCodes.IN_PROGRESS:
          Alert.alert('Sign In', 'Sign in is already in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          Alert.alert('Sign In', 'Google Play Services not available or outdated');
          break;
        default:
          Alert.alert('Sign In Error', error.message);
          break;
      }
    } else {
      Alert.alert('Sign In Error', 'An unexpected error occurred');
      console.error(error);
    }
  }
};
