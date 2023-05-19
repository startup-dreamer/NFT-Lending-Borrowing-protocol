import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "xrDhKZOeAYcWze6fCwG43x-qp1gPlWBv",
  network: Network.ETH_SEPOLIA,
};

const alchemy = new Alchemy(settings);

async function getNFTMetadata(nftContractAddress, tokenId) {
  const response = await alchemy.nft.getNftMetadata(
    nftContractAddress,
    tokenId
  );  
  return response;
}

const getmetadata = async(nftContractAddress, tokenId) => {
  try {
  return await getNFTMetadata(nftContractAddress, tokenId);
  } catch (e) {
    console.error(e);
  }
}

export default getmetadata;
