import {Hand, Hands} from "./Hands.ts";
import {Status, Statuses} from "./Status.ts";

export default class Competition {
    id: string
    host: string
    deposit: string
    forceClosableTimeStamp: number
    hostHandHash: string
    hostHand: Hand
    opponent: string
    opponentHand: Hand
    winner: string
    status: Status

    constructor(rawData: any[]) {
        this.id = rawData[0];
        this.host = rawData[1];
        this.deposit = rawData[2];
        this.forceClosableTimeStamp = rawData[3];
        this.hostHandHash = rawData[4];
        this.hostHand = Hands[rawData[5]]
        this.opponent = rawData[6];
        this.opponentHand = Hands[rawData[7]];
        this.winner = rawData[8];
        this.status = Statuses[Number(rawData[9])];
    }
}
