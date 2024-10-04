const axios = require('axios');

const stockPrices = [100, 98, 97, 99, 101, 103, 102, 104, 105]; // Mock stock prices
let index = 0;

const getStockPrice = async () => {
    if (index < stockPrices.length) {
        return { price: stockPrices[index++] };
    }
    return { price: null }; // End of mock data
};

module.exports = { getStockPrice };
