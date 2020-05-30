import {withNavigation} from '@react-navigation/compat';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {stylesMovieItem} from './style';
import {useSelector} from 'react-redux';
import {DELETE} from '../../service';
import {REACT_NATIVE_DELETE_MOVIE} from 'react-native-dotenv';

const MovieItem = props => {
  const gotoDetail = () => {
    props.navigation.navigate('detail', {
      id: props.movieItem.maPhim,
    });
  };
  const credentials = useSelector(state => state.credentials.data);
  const deleteMovie = () => {
    const URL = REACT_NATIVE_DELETE_MOVIE + `?MaPhim=${props.maPhim}`;
    const option = {
      Authorization: `Brearer ${credentials.accessToken}`,
    };
    DELETE(URL, option)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const {movieItem} = props;
  return (
    <View style={stylesMovieItem.container}>
      <Image
        source={{
          uri: movieItem.hinhAnh,
        }}
        style={stylesMovieItem.image}
      />
      <View style={stylesMovieItem.rating}>
        <Text style={stylesMovieItem.ratingScore}>{movieItem.danhGia}</Text>
        <View style={stylesMovieItem.ratingStars}>
          <Icon name="star" size={15} style={stylesMovieItem.starIcon} />
          <Icon name="star" size={15} style={stylesMovieItem.starIcon} />
          <Icon name="star" size={15} style={stylesMovieItem.starIcon} />
          <Icon name="star" size={15} style={stylesMovieItem.starIcon} />
        </View>
      </View>
      <View style={stylesMovieItem.info}>
        <Text style={stylesMovieItem.name}>{movieItem.tenPhim}</Text>
        <Button
          buttonStyle={stylesMovieItem.btnAndroid}
          title="Detail"
          onPress={gotoDetail}
        />
        <Button
          buttonStyle={stylesMovieItem.btnAndroid}
          title="Delete"
          onPress={deleteMovie}
        />
      </View>

      <LinearGradient
        colors={['transparent', '#000000']}
        style={stylesMovieItem.overlay}
      />
    </View>
  );
};

export default withNavigation(MovieItem);
