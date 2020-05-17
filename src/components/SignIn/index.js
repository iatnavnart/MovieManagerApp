import Axios from 'axios';
import React, {useState} from 'react';
import {
  AsyncStorage,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import BackGround from '../../assets/background.jpg';
import LogoSignIn from '../../assets/logo.png';
import {withNavigation} from '@react-navigation/compat';
// export class SignInScreen extends Component {
//   render() {
//     return (
//       <ImageBackground source={BackGround}>
//         <View style={styles.container}>
//           <Image source={Logo} style={styles.logo} />
//           <View style={styles.form}>
//             <TextInput
//               placeholder="Account"
//               keyboardType="default"
//               returnKeyLabel="Next"
//               style={styles.formControl}
//             />
//             <TextInput
//               placeholder="Password"
//               keyboardType="default"
//               returnKeyLabel="Submit"
//             />
//             <TouchableOpacity style={styles.btn}>
//               <Text>SignIn</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ImageBackground>
//     );
//   }
// }
const SignInScreen = () => {
  const [state, setstate] = useState({
    taiKhoan: '',
    matKhau: '',
  });
  const handleChange = property => val => {
    setstate({...state, [property]: val});
  };
  const handleSubmit = props => {
    console.log(state);
    Axios({
      url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
      method: 'POST',
      data: {...state},
    })
      .then(res => {
        console.log('sign-in success');
        AsyncStorage.setItem('credentials', JSON.stringify(res.data));
        AsyncStorage.setItem(
          'accessToken',
          JSON.stringify(res.data.accessToken),
        );
        props.navigation.replace('home');
      })
      .catch(err => {
        console.log('Error');
      });
  };

  return (
    <ImageBackground source={BackGround} style={styles.container}>
      <View style={styles.content}>
        <Image source={LogoSignIn} style={styles.logo} resizeMode="contain" />
        <View style={styles.form}>
          <TextInput
            placeholder="Tai Khoan"
            keyboardType="default"
            returnKeyLabel="Next"
            placeholderTextColor="white"
            onChangeText={handleChange('taiKhoan')}
            autoCapitalize="none"
            style={styles.formControl}
          />
          <TextInput
            placeholder="Mat Khau"
            keyboardType="default"
            returnKeyLabel="Submit"
            autoCapitalize="none"
            placeholderTextColor="white"
            secureTextEntry
            onChangeText={handleChange('matKhau')}
            style={styles.formControl}
          />
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text>SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 300,
  },
  btn: {
    backgroundColor: 'red',
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    left: '40%',
    borderRadius: 5,
  },
  form: {},
  formControl: {
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 20,
    color: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default withNavigation(SignInScreen);
