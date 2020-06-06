import React from 'react';
import {
  ImageBackground,
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  AsyncStorage,
} from 'react-native';
import Background from '../../assets/images/background.jpg';
import {Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {useFormik} from 'formik';
import ImagePicker from 'react-native-image-picker';
import * as yup from 'yup';
import ErrorText from '../../components/ErrorText';
import * as _ from 'lodash';
import Axios from 'axios';
import {useSelector} from 'react-redux';

import moment from 'moment';

const movieSchema = yup.object().shape({
  tenPhim: yup
    .string()
    .required('*Thông tin bắt buộc nhập')
    .max(50, '*Tên phim không quá 50 kí tự'),
  biDanh: yup
    .string()
    .required('*Thông tin bắt buộc nhập')
    .min(5, '*Bí danh phải trên 5 kí tự'),
  trailer: yup
    .string()
    .required('*Thông tin bắt buộc nhập')
    .url('*Trailer không đúng định dang'),
});

const CreateMovieScreen = props => {
  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    base64: true,
  };

  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      biDanh: '',
      trailer: '',
      hinhAnh: '',
      moTa: '',
      maNhom: 'GP01',
      ngayKhoiChieu: new Date(),
      danhGia: 0,
    },
    validationSchema: movieSchema,
    validateOnMount: true,
  });

  const pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uploadUrl =
          Platform.OS === 'ios'
            ? response.url.replace('file://', '')
            : 'file://' + response.path;
        // console.log(uploadUrl);
        const source = {
          uri: uploadUrl,
          name: 'test.jpg',
          type: 'img/jpg',
        };
        // create formdata for send a file to server
        const data = new FormData();
        // data.append('name', 'testing.jpg');
        data.append('file', source);
        data.append('upload_preset', 'taivantran');

        Axios({
          method: 'POST',
          url: 'https://api.cloudinary.com/v1_1/taivantran/image/upload',
          data: data,
        })
          .then(response => {
            console.log(response.data.url);
            formik.setFieldValue('hinhAnh', response.data.uri);
          })
          .catch(error => console.log({...error}));
      }
    });
  };
  const accessToken = useSelector(state => state.credentials.data);

  const handleSubmit = () => {
    console.log(formik.errors);
    console.log(formik.values);
    // Object.key[formik.error]
    if (_.isEmpty(formik.errors)) {
      return;
    }
    const body = {...formik.values};
    const releaseDate = new Date(body.ngayKhoiChieu);
    body.ngayKhoiChieu = moment(body.ngayKhoiChieu).format('DD/MM/YYYY');
    // `${releaseDate.getDate()}-${releaseDate.getMonth()}-${releaseDate.getFullYear()}`;
    body.hinhAnh =
      'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/08/d015-03700r_a_l.jpg';
    Axios({
      method: 'POST',
      url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
      data: body,
      headers: {
        Authorization: `Brear ${accessToken}`,
      },
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            placeholder="Tên Phim"
            keyboardType="default"
            onChangeText={formik.handleChange('tenPhim')}
            returnKeyType="next"
            placeholderTextColor="white"
            onBlur={formik.handleBlur('tenPhim')}
            autoCapitalize="none"
            style={styles.formControl}
          />
          <ErrorText
            touched={formik.touched.tenPhim}
            error={formik.errors.tenPhim}
          />
          {/* {formik.errors.tenPhim && formik.touched.tenPhim} */}
          <TextInput
            placeholder="Bí danh"
            onChangeText={formik.handleChange('biDanh')}
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="white"
            onBlur={formik.handleBlur('biDanh')}
            style={styles.formControl}
          />
          <Text>{formik.errors.biDanh}</Text>
          <TextInput
            placeholder="Trailer"
            onChangeText={formik.handleChange('trailer')}
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="white"
            onBlur={formik.handleBlur('trailer')}
            style={styles.formControl}
          />
          <Text>{formik.errors.trailer}</Text>
          <View style={styles.uploadContainer}>
            <Button onPress={pickImage} title="Pick image" type="solid" />
          </View>
          <TextInput
            placeholder="Mô tả"
            keyboardType="default"
            onChangeText={formik.handleChange('moTa')}
            multiline
            numberOfLines={5}
            autoCapitalize="none"
            placeholderTextColor="white"
            onBlur={formik.handleBlur('moTa')}
            style={styles.formControl}
          />

          <DatePicker
            style={{
              width: '100%',
              marginBottom: 10,
            }}
            date={new Date(formik.values.ngayKhoiChieu)}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateInput: {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 10,
              },
              dateText: {
                color: 'white',
                fontSize: 20,
              },
            }}
            onDateChange={formik.handleChange('ngayKhoiChieu')}
          />

          <TextInput
            onChangeText={formik.handleChange('danhGia')}
            placeholder="Đánh giá"
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholderTextColor="white"
            onBlur={formik.handleBlur('danhGia')}
            style={styles.formControl}
          />
          <Button
            onPress={handleSubmit}
            title="Thêm Phim"
            buttonStyle={styles.btn}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
  formControl: {
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'white',
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
});

export default CreateMovieScreen;
