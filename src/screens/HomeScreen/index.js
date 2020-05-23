import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import MovieItem from '../../components/MovieItem/index';
import {fetchMovies} from '../../redux/Store/Actions';

export class HomeScreen extends Component {
  // gotoCreateMovie = () => {
  //   this.props.navigation.navigate('addmovie');
  // };
  render() {
    // console.log('HomeScreen: ', this.props.movieCollections);
    return (
      <SafeAreaView>
        <View style={{paddingHorizontal: 15, paddingVertical: 30}}>
          {/* <View style={styles.addBtnItem}>
            <Button
              title="+"
              buttonStyle={styles.btnAdd}
              icon={() => <Icon name="add" size={25} color="white" />}
              onPress={this.gotoCreateMovie}
            />
          </View> */}
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

// const styles = StyleSheet.create({
//   addBtnItem: {
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   btnAdd: {
//     padding: 20,
//     backgroundColor: '#c2422b',
//   },
// });

export default connect(mapStateToProps)(HomeScreen);
