import {withNavigation} from '@react-navigation/compat';
import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ProfileScreen extends Component {
  gotoSign = () => {
    this.props.navigation.navigate('signin');
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Icon name="user-circle-o" size={50} />
          <TouchableOpacity style={styles.btnSign} onPress={this.gotoSign}>
            <Text>SignIn</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },
  btnSign: {
    backgroundColor: 'red',
    margin: 20,
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default withNavigation(ProfileScreen);
