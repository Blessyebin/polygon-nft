const CONTRACT_ADDRESS = "0x71ef32a205eEe193f7860F37838695Af1E5CB3a3"
const META_DATA_URL = "ipfs://bafyreifsd2w7l6hjrse4ipcrs4vznogy72fst4eb2ak3qnuetuft6jypxu"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });