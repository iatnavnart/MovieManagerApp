import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
export class MovieItem extends Component {
  render() {
    const {movieItem} = this.props;
    return (
      <View style={styles.productContainer}>
        {/* <Image
          resizeMode="cover"
          source={{uri: movieItem.hinhAnh}}
          style={styles.imageStyle}
        /> */}
        <ImageBackground
          source={{uri: movieItem.hinhAnh}}
          style={styles.imageStyle()}
        />
        <Text> Name: {movieItem.tenPhim}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>Detail Movie</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 6,
  },
  imageStyle: () => ({
    resizeMode: 'cover',
    height: 400,
    width: '100%',
  }),
  button: {
    alignItems: 'center',
    backgroundColor: '#00ffff',
    padding: 10,
    margin: 10,
    width: '95%',
    borderRadius: 30,
  },
});
export default connect()(MovieItem);
