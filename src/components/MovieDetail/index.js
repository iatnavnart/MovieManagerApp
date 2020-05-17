import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import {fetchMoviesDetails} from '../../redux/Store/Actions';

export class MovieDetailScreen extends Component {
  render() {
    const {movieDetail} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: movieDetail.hinhAnh,
          }}
          style={styles.image}
        />
        <Text>Ma Phim: {movieDetail.maPhim}</Text>
        <Text>Ten Phim: {movieDetail.tenPhim} </Text>
        <Text>Ngay Khoi Chieu: {movieDetail.ngayKhoiChieu}</Text>
        <WebView source={{uri: movieDetail.trailer}} />
      </View>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchMoviesDetails(this.props.movieDetail.maPhim));
  }
}
const mapStateToProps = state => {
  return {
    movieDetail: state.movieDetail,
  };
};

const styles = StyleSheet.create({
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
});
export default connect(mapStateToProps)(MovieDetailScreen);
