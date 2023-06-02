import {createClient, cacheExchange, fetchExchange} from '@urql/core';

const APIURL = 'https://api.studio.thegraph.com/query/47255/aurumv1core/version/latest';

const call = async () => {

    const query = `
    {
        deposition(first: 5) {
          id
          depoId
          sender
          time
        }
    }
    `
    try {const client = createClient({
      url: APIURL,
      exchanges: [cacheExchange, fetchExchange],
    })
    const data = await client.query(query);
    console.log(data);
    
  }
catch (e) {
    console.log(e);
    
}
}
  export {
    call
  }