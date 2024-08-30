//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Linking, TouchableOpacity } from 'react-native';



// create a component
const MyComponent = () => {

  
const supportedURL = 'https://google.com';

const unsupportedURL = 'slack://open?team=123456';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

  const  SignUp = async () => {
  // iniialize the web3 module
  const web3 = new Web3(window.ethereum)

  //initialize a wallet
  const wallet = web3.eth.wallet.add('0xpriatekey')
  const CONTRACT_ADDRESS = "0xBab64eeF45aE2Ba8AACeB05dAFE3BADAa25Af50E"

  const walletAddress = "0x57A113573855666c6851E0b3F43ebAf3fDd60841"

  // initialize contract
  const contract= new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
  //const receipt = await contract.methods.challenge("to...","1").send({from: wallet[0].address})
  const receipt = await contract.methods.challenge("to...", "1").send({ from: walletAddress });

  console.log(receipt.transactionHash)
  }
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
      <TouchableOpacity onPress={ SignUp}>
        <Text style={styles.button}>Send</Text>
      </TouchableOpacity>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  button: {
    //backgroundColor: 'gre'
    color: 'blue',
    fontSize: 35,
  }
});

//make this component available to the app
export default MyComponent;

