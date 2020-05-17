import React, {Component} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {connect} from 'react-redux';
import MovieItem from '../../components/MovieItem/index';
import {fetchMovies} from '../../redux/Store/Actions';

export class HomeScreen extends Component {
  render() {
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
