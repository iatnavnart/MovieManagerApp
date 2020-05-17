import {withNavigation} from '@react-navigation/compat';
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {stylesMovieItem} from './style';
export class MovieItem extends Component {
  gotoDetail = () => {
    this.props.navigation.navigate('detail', {
      id: this.props.movieItem.maPhim,
    });
  };
  render() {
    const {movieItem} = this.props;
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
            buttonStyle={stylesMovieItem.btnIOS}
            title="ĐẶT VÉ"
            onPress={this.gotoDetail}
          />
        </View>
        <LinearGradient
          colors={['transparent', '#000000']}
          style={stylesMovieItem.overlay}
        />
      </View>
    );
  }
}

export default withNavigation(MovieItem);
