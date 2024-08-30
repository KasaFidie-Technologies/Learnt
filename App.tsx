// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import {
//   WalletConnectModal,
//   useWalletConnectModal,
//   WalletConnectProvider,
// } from '@walletconnect/modal-react-native';

// // Project ID from WalletConnect dashboard
// const projectId = 'dbcc542a1a438064855d4ebdb4dcb53e';

// // Provider metadata for WalletConnect
// const providerMetadata = {
//   name: 'Learnto',
//   description: 'A dApp language learning app',
//   url: 'https://github.com/KasaFidie-Technologies/Learnto',
//   icons: ['https://your-project-logo.com/'],
//   redirect: {
//     native: 'learnto://',
//     universal: 'https://learnto.com',
//   },
// };

// function WrappedApp() {
//   // Using the WalletConnectModal hook
//   const { open, isConnected, address, provider } = useWalletConnectModal();

//   // Handle button press for connection and disconnection
//   const handleButtonPress = async () => {
//     if (isConnected) {
//       return provider?.disconnect();
//     }
//     return open();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Learnto</Text>

//       <Text style={{ color: 'black' }}>
//         {isConnected ? `Connected: ${address}` : 'Not Connected'}
//       </Text>

//       <TouchableOpacity onPress={handleButtonPress} style={styles.pressableMargin}>
//         <Text style={{ color: 'black' }}>
//           {isConnected ? 'Disconnect' : 'Connect'}
//         </Text>
//       </TouchableOpacity>

//       {/* WalletConnectModal to handle connection */}
//       <WalletConnectModal
//         projectId={projectId}
//         providerMetadata={providerMetadata}
//       />
//     </View>
//   );
// }

// // Wrap the app with WalletConnectProvider to handle the modal's state
// export default function App() {
//   return (
//     <WalletConnectProvider>
//       <WrappedApp />
//     </WalletConnectProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   pressableMargin: {
//     marginTop: 16,
//   },
// });

import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Main from './src/componenets/main'

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});