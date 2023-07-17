import ABI from "./RockPaperScissors.abi.json";
import {ethers, JsonRpcSigner} from "ethers";
import Competition from "../domains/Competition.ts";
import {Hand} from "../domains/Hands.ts";
import {RockPaperScissorsAbi} from "./RockPaperScissorsAbi.ts";

export class RockPaperScissorsContract {
    contract: RockPaperScissorsAbi;

    constructor() {
        this.contract = new ethers.Contract(
            "0x537D9F4fEe280A695296E06C064d10b70C73cf9e",
            ABI,
            new ethers.BrowserProvider(window.ethereum)) as unknown as RockPaperScissorsAbi;
    }

    public connect(signer: JsonRpcSigner) {
        this.contract = this.contract.connect(signer);
    }

    public async getCompetitions(page: number, size: number): Promise<Competition[]>{
        const result = await this.contract.getCompetitions(page as any, size as any);
        return result.map(value => new Competition(value));
    }

    public async create(hand: Hand, depositEth: string): Promise<any> {
        const id = window.crypto.randomUUID().replace(/-/g, "");
        const salt = window.crypto.randomUUID().replace(/-/g, "");

        // save hand and salt for judge
        localStorage.setItem(
            id, JSON.stringify({hand: hand.value, salt: salt}))

        const hash = ethers.keccak256(ethers.toUtf8Bytes(`${hand.value}${salt}`));
        const tx = await this.contract.create(
            id as any,
            hash as any,
            {value: ethers.parseEther(depositEth)} as any
        );
        await tx.wait();
    }

    public async entry(id: string, hand: Hand, deposit: string): Promise<any> {
        const tx = await this.contract.entry(
            id as any,
            hand.value  as any,
            {value: deposit} as any
        );
        await tx.wait();
    }

    public async judge(id: string): Promise<any> {
        // restore hand and salt when create
        const item = JSON.parse(localStorage.getItem(id) as string);
        const tx = await this.contract.judge(id as any, item["hand"], item["salt"]);
        await tx.wait();
    }

    public async close(id: string): Promise<any> {
        const tx = await this.contract.close(id as any);
        await tx.wait();
    }

    public async forceClose(id: string): Promise<any> {
        const tx = await this.contract.forceClose(id as any);
        await tx.wait();
    }
}
