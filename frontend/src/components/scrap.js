
useEffect(()=> {
    if (Contract !== null){
        const fetchData = async () => {            
        const totalsupply = await getTotalSupply(Contract);
        const totalborrow = await getTotalBorrow(Contract);
        const lendinginterestrate = await getLending_interestRate(Contract);
        setLendData({
            totalSupply: totalsupply,
            totalBorrow: totalborrow,
            LIR: lendinginterestrate / 100,
        })
    }        
    fetchData();
    }
    
},[handleChange, Contract])

console.log(lendData);
console.log(handleChange);