const traderState = {
    balance: 10000,
    position: 0,
    buyPrice: 0,
};

const trade = (currentPrice) => {
    const buyThreshold = 0.02; // 2% drop
    const sellThreshold = 0.03; // 3% rise

    if (traderState.position === 0 && currentPrice <= traderState.buyPrice * (1 - buyThreshold)) {
        // Buy logic
        traderState.position = traderState.balance / currentPrice;
        traderState.buyPrice = currentPrice;
        traderState.balance = 0;
        console.log(`Buying at ${currentPrice}`);
    } else if (traderState.position > 0 && currentPrice >= traderState.buyPrice * (1 + sellThreshold)) {
        // Sell logic
        traderState.balance = traderState.position * currentPrice;
        console.log(`Selling at ${currentPrice}`);
        traderState.position = 0;
    }
};

const getTradeSummary = () => {
    const profitLoss = traderState.balance - 10000;
    return {
        balance: traderState.balance,
        position: traderState.position,
        profitLoss,
    };
};

module.exports = { trade, getTradeSummary };
