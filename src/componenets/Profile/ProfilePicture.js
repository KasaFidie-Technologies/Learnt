import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Camera, useCameraPermission, useCameraDevice } from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import Capture from 'react-native-vector-icons/MaterialIcons';
import Cancel from 'react-native-vector-icons/Entypo';
import ProfilePictureStyles from './ProfilePictureStyles';

const ProfilePicture = ({ onClose, onCapture }) => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [cameraType, setCameraType] = useState('front');
  const device = useCameraDevice(cameraType);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const dimensions = useWindowDimensions();
  const styles = ProfilePictureStyles(dimensions);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const takePhoto = async () => {
    if (camera) {
      const photo = await camera.takePhoto();
      setPhoto(photo);
      onCapture(photo); 
    }
  };

  if (device == null) return <NoCameraErrorView />;

  const toggleCameraType = () => {
    setCameraType((prevCameraType) => (prevCameraType === 'front' ? 'back' : 'front'));
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <Image
          source={{ uri: 'file://' + photo.path }}
          style={styles.photo }
        />
      ) : (
        <Camera
          ref={setCamera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          outputOrientation='preview'
        />
      )}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onClose}>
          <Cancel name='cross' size={50} color="#eaeaea" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={takePhoto}>
          <Capture name='camera' color='#47f800' size={80} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={toggleCameraType}>
          <Icon name='sync-circle-sharp' size={50} color="#eaeaea" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePicture;