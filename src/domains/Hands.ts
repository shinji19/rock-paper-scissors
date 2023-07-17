export class Hand {
    value: number
    label: string

    constructor(value: number, label: string) {
        this.value = value;
        this.label = label;
    }
}

export const Hands = [
    new Hand(0, "rock"),
    new Hand(1, "paper"),
    new Hand(2, "scissor"),
];
