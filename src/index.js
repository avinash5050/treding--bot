require('dotenv').config();
const { getStockPrice } = require('./api');
const { trade, getTradeSummary } = require('./traderLogic');

const main = async () => {
    console.log('Starting trading bot...');
    const interval = setInterval(async () => {
        const response = await getStockPrice();
        const price = response.price;
        if (price !== null) {
            console.log(`Current price: ${price}`);
            trade(price);
        } else {
            console.log('End of mock data. Stopping the bot.');
            clearInterval(interval);
            const summary = getTradeSummary();
            console.log('Trading Summary:', summary);
        }
    }, 2000); // Adjust the interval as needed
};

main();
