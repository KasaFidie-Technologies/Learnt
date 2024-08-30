import { StyleSheet } from "react-native";

const ProfilePictureStyles = (dimensions) => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black'
    },
      photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
    
      iconContainer: {
        marginTop: '100%',
        width: dimensions.width * 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
      }
      
      });
}

export default ProfilePictureStyles;