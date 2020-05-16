import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class MovieDetailScreen extends Component {
  render() {
    console.log(this.props.route.params);
    return (
      <View>
        <Text> Movie detail </Text>
      </View>
    );
  }
}

export default MovieDetailScreen;
