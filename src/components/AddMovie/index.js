import {useFormik} from 'formik';
import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import BackGround from '../../assets/background.jpg';
const AddMovieScreen = () => {
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(response);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };
  const formik = useFormik({
    maPhim: 0,
    tenPhim: 'string',
    biDanh: 'string',
    trailer: 'string',
    hinhAnh: 'string',
    moTa: 'string',
    ngayKhoiChieu: 'string',
    danhGia: 0,
  });
  return (
    <ImageBackground source={BackGround} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            placeholder="Ten Phim"
            keyboardType="default"
            returnKeyLabel="Next"
            placeholderTextColor="white"
            autoCapitalize="none"
            style={styles.formControl}
          />
          <TextInput
            placeholder="Bi Danh"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="white"
            secureTextEntry
            style={styles.formControl}
          />
          <TextInput
            placeholder="Trailer"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="white"
            style={styles.formControl}
          />
          <TextInput
            placeholder="Mo Ta"
            keyboardType="default"
            multiline
            autoCapitalize="none"
            placeholderTextColor="white"
            style={styles.formControl}
          />
          {/* <DatePickerAndroid date={new Date()}
            mode='date'

           /> */}
          <TextInput
            placeholder="Danh Gia"
            keyboardType="number-pad"
            multiline
            autoCapitalize="none"
            placeholderTextColor="white"
            style={styles.formControl}
          />
          <View style={styles.imageContainer}>
            <Button title="Pick Image" type="solid" />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text>SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
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
  form: {
    width: '100%',
  },
  formControl: {
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 20,
    color: 'white',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
});

export default AddMovieScreen;
