import {withNavigation} from '@react-navigation/compat';
import Axios from 'axios';
import React, {useState} from 'react';
import {AsyncStorage, Image, ImageBackground, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import BackGround from '../../assets/background.jpg';
import LogoSignIn from '../../assets/logo.png';
import {styles} from './style';
import RestControllerService from '../../service';
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
  const [account, setAccount] = useState({
    taiKhoan: '',
    matKhau: '',
  });
  const handleChange = property => val => {
    setAccount({...account, [property]: val});
  };
  const handleSubmit = props => {
    const URL = process.env.REACT_APP_SIGN_IN;
    RestControllerService.POST(URL, account)
      .then(res => {
        AsyncStorage.setItem('credentials', JSON.stringify(res.data));
        AsyncStorage.setItem(
          'accessToken',
          JSON.stringify(res.data.accessToken),
        );
        props.navigation.replace('home');
      })
      .catch(err => {
        console.log('Error', err);
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
          <TouchableOpacity style={styles.btn} onPress={() => handleSubmit}>
            <Text>SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default withNavigation(SignInScreen);
