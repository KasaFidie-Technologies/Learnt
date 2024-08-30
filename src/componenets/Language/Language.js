import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AppButton from '../AppButton/Appbutton'

const Language = () => {
  const navigation = useNavigation()
  const [selectedType, setSelectedType] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  const renderLanguageOptions = () => {
    if (selectedType === 'International') {
      return ['English', 'French', 'German', 'Swedish', 'Portuguese'].map((lang) => (
        <TouchableOpacity 
          key={lang} 
          style={[styles.languageOption, selectedLanguage === lang && styles.selectedLanguage]}
          onPress={() => setSelectedLanguage(lang)}
        >
          <Text style={{color: 'black'}}>{lang}</Text>
        </TouchableOpacity>
      ))
    } else if (selectedType === 'Local') {
      return ['Twi', 'Ga', 'Ewe', 'Fante', 'Dagomba'].map((lang) => (
        <TouchableOpacity 
          key={lang} 
          style={[styles.languageOption, selectedLanguage === lang && styles.selectedLanguage]}
          onPress={() => setSelectedLanguage(lang)}
        >
          <Text style={{color: 'black'}}>{lang}</Text>
        </TouchableOpacity>
      ))
    }
    return null
  }

  const handleNextPress = () => {
    if (selectedLanguage) {
      console.log('Navigating with language:', selectedLanguage)
      navigation.navigate('HomeTabs', { language: selectedLanguage })
    } else {
      console.log('No language selected')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language Type:</Text>
      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[styles.typeButton, selectedType === 'International' && styles.selectedType]}
          onPress={() => setSelectedType('International')}
        >
          <Text style={{ color: 'black'}}>International</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, selectedType === 'Local' && styles.selectedType]}
          onPress={() => setSelectedType('Local')}
        >
          <Text style={{color: 'black'}}>Local</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        {renderLanguageOptions()}
      </View>

      <AppButton
        onPress={handleNextPress}
        backgroundColor={'#47f800'}
        color={'#000000'}
        width={'90%'}
        height={50}
        borderRadius={10}
        marginTop={80}
        alignSelf={'center'}
      >
        NEXT
      </AppButton>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black'
  },
  typeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  typeButton: {
    padding: 8,
    color: 'black',
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  selectedType: {
    backgroundColor: '#e0e0e0',
  },
  optionsContainer: {
    flexDirection: 'column',
  },
  languageOption: {
    padding: 8,
    backgroundColor: '#47f800',
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  selectedLanguage: {
    backgroundColor: '#e0e0e0',
  },
})

export default Language