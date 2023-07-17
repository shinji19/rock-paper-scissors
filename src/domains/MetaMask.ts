import {ethers, JsonRpcSigner} from "ethers";

export class MetaMask {
    public async validate() {
        if (!window.ethereum) {
            throw new Error("Please install MetaMask!");
        }
        if (!window.ethereum.isMetaMask) {
            throw new Error("Do you have multiple wallets installed?")
        }
        //
        // await window.ethereum
        //     .request({method: 'eth_requestAccounts'})
        //     .catch((err: any) => {
        //         if (err.code === 4001) {
        //             // EIP-1193 userRejectedRequest error
        //             // If this happens, the user rejected the connection request.
        //             throw new Error("Please connect MetaMask.")
        //         } else {
        //             throw new err;
        //         }
        //     });
    }

    public async isConnected(): Promise<boolean> {
        const permissions = await window.ethereum
            .request(
                {method: 'wallet_getPermissions'})
            .catch((err: any) => {
                console.log(err);
            });
        return permissions.length !== 0;
    }

    public async connect(): Promise<void> {
        await this.getSigner();
    }

    public async getSigner(): Promise<JsonRpcSigner> {
        const provider = new ethers.BrowserProvider(window.ethereum);
        return await provider.getSigner();
    }

    public async getAddress(): Promise<string> {
        const signer = await this.getSigner();
        return await signer.getAddress();
    }
}
