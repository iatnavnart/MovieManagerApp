import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from '@react-navigation/compat';
export class MovieItem extends Component {
  gotoDetail = () => {
    this.props.navigation.navigate('detail', {
      id: this.props.movieItem.maPhim,
    });
  };
  render() {
    const {movieItem} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: movieItem.hinhAnh,
          }}
          style={styles.image}
        />
        <View style={styles.rating}>
          <Text style={styles.ratingScore}>{movieItem.danhGia}</Text>
          <View style={styles.ratingStars}>
            <Icon name="star" size={15} style={styles.starIcon} />
            <Icon name="star" size={15} style={styles.starIcon} />
            <Icon name="star" size={15} style={styles.starIcon} />
            <Icon name="star" size={15} style={styles.starIcon} />
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{movieItem.tenPhim}</Text>
          <Button
            buttonStyle={styles.btnAndroid}
            title="ĐẶT VÉ"
            onPress={this.gotoDetail}
          />
          {/* <Button
            buttonStyle={Platform.select({
              android: styles.btnAndroid,
              ios: styles.btnIOS,
            })}
            title="ĐẶT VÉ"
            onPress={this.gotoDetail}
          /> */}
        </View>
        <LinearGradient
          colors={['transparent', '#000000']}
          style={styles.overlay}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },

  container: {
    borderRadius: 15,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 400,
  },
  rating: {
    backgroundColor: 'rgba(109,108,104,0.9)',
    position: 'absolute',
    top: 10,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  ratingScore: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '500',
  },
  ratingStars: {
    flexDirection: 'row',
  },
  starIcon: {
    color: '#c2422b',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
    paddingHorizontal: 20,
  },
  name: {
    color: 'white',
    fontSize: 35,
    fontWeight: '500',
    marginRight: 40,
    flexShrink: 1,
    zIndex: 2,
  },
  btn: os => {
    let color = '';
    if (os === 'android') {
      color = 'red';
    }
    if (os === 'ios') {
      color = 'green';
    }
    return {
      backgroundColor: color,
    };
  },
  btnAndroid: {
    backgroundColor: 'red',
  },
  btnIOS: {
    backgroundColor: 'green',
  },
});

export default withNavigation(MovieItem);
