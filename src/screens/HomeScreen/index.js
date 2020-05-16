import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, Platform} from 'react-native';
import Axios from 'axios';
import {fetchMovies} from '../../redux/Store/Actions';
import {connect} from 'react-redux';
import MovieItem from '../../components/MovieItem/index';

export class HomeScreen extends Component {
  render() {
    console.log(Platform.OS);
    console.log(Platform.Version);
    // console.log('HomeScreen: ', this.props.movieCollections);
    return (
      <SafeAreaView>
        <View style={{paddingHorizontal: 15, paddingVertical: 30}}>
          <FlatList
            data={this.props.movieCollections}
            renderItem={({item}) => <MovieItem movieItem={item} />}
            keyExtractor={(item, index) => `${item.maPhim + index}`}
          />
        </View>
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
    this.props.dispatch(fetchMovies());
  }
}
const mapStateToProps = state => {
  return {
    movieCollections: state.movieReducer,
  };
};

export default connect(mapStateToProps)(HomeScreen);
