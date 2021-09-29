import client from "./client";

class OptionsDataService {

    getOptionChainInfo(symbol: string) {
        return client.get("/option-chain/" + symbol);
    }

    getStockOptionContractInfo(symbol: string, date: string, strike: number, type: string) {
        return client.get("/option-contract/" + symbol + "/" + date + "/" + strike + "/" + type);
    }

    getAutoCompleteSuggestions(input: string) {
        return client.get("/auto-complete/" + input);
    }
}

export default new OptionsDataService();