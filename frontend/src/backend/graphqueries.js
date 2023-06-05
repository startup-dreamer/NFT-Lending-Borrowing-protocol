import { createClient, cacheExchange, fetchExchange } from '@urql/core';
import { getLoans } from './Borrower';
import getmetadata from './Metadata';

const APIURL = 'https://api.studio.thegraph.com/query/47255/aurumv1core/version/latest';

const getLiquidatedNFTs = async (Contract) => {
  const queryBorrows = `
    {
        borrows(first: 5) {
            id
            borrower
            _loanId
            amount
          }
    }
  `
  
  try {
    const client = createClient({
      url: APIURL,
      exchanges: [cacheExchange, fetchExchange],
    });
    
    const borrowsData = await client.query(queryBorrows);
    const loans = borrowsData.data.borrows;
    const liquidatedLoans = [];
    const dateInMillisecs = Date.now();
    const dateInSecs = Math.round(dateInMillisecs / 1000);
    
    for (let i = 0; i < loans.length; i++) {
      const loan = await getLoans(Contract, loans[i].borrower, loans[i]._loanId);
      if (loan.Time < dateInSecs && loan.Active !== false) {
        const metadata = await getmetadata(loan.TokenContract, loan.TokenId);

        liquidatedLoans.push({
          TokenContract: loan.TokenContract,
          TokenId: loan.TokenId,
          CollateralValue: loan.CollateralValue,
          imageURL: metadata.media[0].gateway,
          nftName: metadata.contract.name,
          nftDescription: metadata.description
        });
      };
    };
    
    return liquidatedLoans;
  }
  catch (e) {
    console.log(e);    
  };
};

export {
  getLiquidatedNFTs
};
