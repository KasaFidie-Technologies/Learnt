// /// import WalletConnectProvider from "@walletconnect/sign-client";
// import WalletConnectProvider from "@walletconnect";
// import { ethers } from "ethers";

// export const getProvider = async () => {a
//   const provider = new WalletConnectProvider({
//     infuraId: "ac68fab42ab549b6b427c1481a8a32fc", // Replace with your Infura project ID
//   });

//   await provider.enable();

//   return new ethers.providers.Web3Provider(provider);
// };


// // import Web3 from 'web3';

// // // Use Infura or another service as an Ethereum gateway
// // const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/ac68fab42ab549b6b427c1481a8a32fc'));

// // // // Connect to your deployed contract using its ABI and address
// // // const ABI = [...];  // Extracted from your deployed contract
// // const contractAddress = 'YOUR_CONTRACT_ADDRESS_ON_RINKEBY';
// // const contract = new web3.eth.Contract(ABI, contractAddress);

// // const setStorage = async (value) => {
// //     const accounts = await web3.eth.getAccounts();
// //     await contract.methods.set(value).send({ from: accounts[0] });
// //   };
  
// //   const getStorage = async () => {
// //     return await contract.methods.get().call();
// //   };
