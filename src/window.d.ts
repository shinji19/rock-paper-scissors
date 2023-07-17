import {Eip1193Provider} from "ethers";

export declare global {
    interface Window {
        ethereum: Web3Provider
    }

    interface Web3Provider extends Eip1193Provider {
        isMetaMask: boolean
    }
}
