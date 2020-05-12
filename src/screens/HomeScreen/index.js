import React, {Component} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Axios from 'axios';
import {actionFetchMovieCollection} from '../../redux/Store/Actions';
import {connect} from 'react-redux';
import MovieItem from '../../components/MovieItem';

export class HomeScreen extends Component {
  render() {
    // console.log('HomeScreen: ', this.props.movieCollections);
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.movieCollections}
          renderItem={({item}) => <MovieItem movieItem={item} />}
          keyExtractor={(item, index) => `${item.maPhim + index}`}
        />
      </SafeAreaView>
    );
  }

  // shouldComponentUpdate(nextProps) {
  //   if (this.props.movieCollections.length > 0) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidMount() {
    Axios({
      url:
        'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      method: 'GET',
    })
      .then(response => {
        console.log('Success');
        this.props.dispatch(actionFetchMovieCollection(response.data));
      })
      .catch(error => {
        console.log('failed');
      });
  }
}
const mapStateToProps = state => {
  return {
    movieCollections: state.movieReducer,
  };
};

export default connect(mapStateToProps)(HomeScreen);
