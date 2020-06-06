import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-elements';

export class MovieItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://vtv1.mediacdn.vn/2019/4/26/poster-payoff-1-1556273680151870157160-crop-1556273779257196175768.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.rating}>
          <Text style={styles.ratingScore}>7.9</Text>
          <View style={styles.ratingStars}>
            <Icon name="star" size={15} style={styles.starIcon} />
            <Icon name="star" size={15} style={styles.starIcon} />
            <Icon name="star" size={15} style={styles.starIcon} />
            <Icon name="star" size={15} style={styles.starIcon} />
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Avenger: End Game</Text>
          <Button buttonStyle={styles.btn} title="ĐẶT VÉ" />
        </View>
      </View>
    );
  }
}

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
  rating: {
    backgroundColor: 'rgba(109,108,104,0.9)',
    position: 'absolute',
    top: 10,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  ratingScore: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '500',
  },
  ratingStars: {
    flexDirection: 'row',
  },
  starIcon: {
    color: '#c2422b',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
    paddingHorizontal: 20,
  },
  name: {
    color: 'white',
    fontSize: 35,
    fontWeight: '500',
    marginRight: 40,
    flexShrink: 1,
  },
  btn: {
    backgroundColor: '#c2422b',
  },
});

export default MovieItem;
