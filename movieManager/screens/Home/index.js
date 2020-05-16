import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import Axios from 'axios';
import {connect} from 'react-redux';
import {createAction} from '../../redux/actions';
import {SET_MOVIES} from '../../redux/actions/type';
import MovieItem from '../../components/MovieItem';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Home screen </Text>
        <MovieItem />
        <MovieItem />
      </SafeAreaView>
    );
  }

  componentDidMount() {
    //promise
    Axios({
      url:
        'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      method: 'GET',
    })
      .then((res) => {
        console.log(res.data);
        this.props.dispatch(createAction(SET_MOVIES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default connect()(HomeScreen);
