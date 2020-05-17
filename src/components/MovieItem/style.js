import {StyleSheet} from 'react-native';
export const stylesMovieItem = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },

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
    zIndex: 10,
  },
  name: {
    color: 'white',
    fontSize: 35,
    fontWeight: '500',
    marginRight: 40,
    flexShrink: 1,
    zIndex: 2,
  },
  btnAndroid: {
    backgroundColor: 'red',
    zIndex: 2,
  },
  btnIOS: {
    backgroundColor: 'green',
    zIndex: 2,
  },
});
