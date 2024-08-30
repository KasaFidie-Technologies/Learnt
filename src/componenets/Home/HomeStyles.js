import { StyleSheet } from "react-native";

const HomeStyles = (dimensions) => {
    return StyleSheet.create({
        container: {
            alignSelf: 'center',
            justifyContent: 'center'
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 20,
            color: 'black'
          },
          tileContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: 10,
          },
          tile: {
            width: '45%',
            marginBottom: 20,
            alignItems: 'center',
          },
          tileImage: {
            width: 150,
            height: 150,
            borderRadius: 10,
          },
          tileDescription: {
            marginTop: 5,
            color: 'black',
            textAlign: 'center',
          },
      });
}

export default HomeStyles;