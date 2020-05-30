import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ErrorText = props => {
  if (!props.touched || !props.error) {
    return null;
  }
  return (
    <View>
      <Text style={styles.error}>{props.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 20,
  },
});

export default ErrorText;
