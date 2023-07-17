export class Status {
    value: number
    label: string

    constructor(value: number, label: string) {
        this.value = value;
        this.label = label;
    }

    public isOpen(): boolean {
        return this.value === 0;
    }

    public isEntry(): boolean {
        return this.value === 1;
    }

    public isJudge(): boolean {
        return this.value === 2;
    }

    public getNext(): Status {
        return Statuses[this.value+1];
    }
}

export const Statuses = [
    new Status(0, "Open"),
    new Status(1, "Entry"),
    new Status(2, "Judge"),
    new Status(3, "Close"),
    new Status(4, "Force close"),
];
