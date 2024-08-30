import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AppButton from '../AppButton/Appbutton';
import HomeStyles from './HomeStyles';
import StepIndicator from 'react-native-step-indicator';

import Girl from '../../assets/images/girl.png'

const TileComponent = ({ title, tiles }) => (
  <View>
    <Text style={{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
      color: 'black'
    }}>{title}</Text>
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: 10,
    }}>
      {tiles.map((tile, index) => (
        <TouchableOpacity key={index} style={{ 
          width: '45%',
          marginBottom: 20,
          backgroundColor: '#aaaaaa',
          borderWidth: 1,
          borderBlockColor: 'black',
          borderRadius: 10,
          alignItems: 'center',
        }}>
          {tile.image ? (
            <Image source={tile.image} style={{
              width: 150,
              height: 150,
              borderRadius: 10,
            }} />
          ) : (
            <Image source={{ uri: tile.imageUrl }} style={{
              width: 150,
              height: 150,
              borderRadius: 10,
            }} />
          )}
          <Text style={{
            marginTop: 5,
            color: 'black',
            textAlign: 'center',
          }}>{tile.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const Home = () => {
  const route = useRoute();
  const { language } = route.params || {};

  const dimensions = useWindowDimensions();
  const styles = HomeStyles(dimensions);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    console.log('Selected Language in Home:', language);
  }, [language]);

  const elements = [
    { title: "la femme:", tiles: [
      { image: Girl, description: 'the girl' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'the boy' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'the cat' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'the woman' },
    ] },
    { title: "la fille:", 
      tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'the man' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'the girl' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'the cat' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'the woman' },
     ]},
    { title: "cat", 
      tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'garçon' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'femme' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'fille' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'mere' },
     ]
     },
   
   
    { title: "garçon", 
      tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'boy' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'girl ' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'man' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'woman' },
     ]
     },

     { title: "Soleil:", 
      tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'sun' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'star' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'moon' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'planet' },
     ]
    },
  ];

  const twiData = [
    { title: "ɔbaa:", tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'abaayewa' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'abarimaa' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'ɔkra' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'ɔbaa' },
    ] },
    { title: "abaayewa:", 
      tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'ɔbarima' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'abaayewa' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'ɔkra' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'ɔbaa' },
     ]},
    { title: "ɔkra", 
      tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'abarimaa' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'ɔbaa' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'abaayewa' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'maame' },
     ]
     },
   
    { title: "abarimaa", 
      tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'boy' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'girl' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'man' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'woman' },
     ]
     },
  
     { title: "owia:", 
      tiles: [
      { imageUrl: 'https://example.com/sun1.jpg', description: 'sun' },
      { imageUrl: 'https://example.com/sun2.jpg', description: 'nsoromma' },
      { imageUrl: 'https://example.com/sun3.jpg', description: 'bosome' },
      { imageUrl: 'https://example.com/sun4.jpg', description: 'planet' },
     ]
    },
  ];

  const handleNextPress = () => {
    if (currentStep < elements.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const dataToRender = language === 'French' ? elements : twiData;

  console.log('Selected Language:', language);
  console.log('Data to Render:', dataToRender);
  console.log('Current Step:', currentStep);

  if (!dataToRender || dataToRender.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No data available for the selected language: {language}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.languageText}>Selected Language: {language}</Text>
      <StepIndicator
        currentPosition={currentStep}
        stepCount={dataToRender.length}
        customStyles={{
          stepIndicatorFinishedColor: '#47f800',
          stepIndicatorUnFinishedColor: '#aaaaaa',
          stepIndicatorCurrentColor: '#47f800',
        }}
      />
      {dataToRender[currentStep] ? (
        <TileComponent {...elements[currentStep]} styles={styles} />
      ) : (
        <Text>No data for this step</Text>
      )}
      <AppButton
        onPress={handleNextPress}
        backgroundColor={'#47f800'}
        color={'#000000'}
        width={dimensions.width * 0.9}
        height={dimensions.height * 0.07}
        borderRadius={10}
        marginTop={80}
        alignSelf={'center'}
      >
        {currentStep === dataToRender.length - 1 ? 'Check Score' : 'Next'}
      </AppButton>
    </View>
  );
};

export default Home;