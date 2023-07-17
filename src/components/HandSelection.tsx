import {Hand} from "../domains/Hands.ts";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

type Props = {
    hands: Hand[]
    defaultHandIndex: number
    onSelect: (hand: Hand) => void
};

export default function HandSelection(props: Props) {
    return (
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={props.hands[props.defaultHandIndex].value}
            onChange={(event) => props.onSelect(props.hands[Number(event.target.value)])}
        >
            {
                props.hands.map((hand, index) => {
                    return (
                        <FormControlLabel
                            key={index}
                            value={hand.value}
                            control={<Radio />}
                            label={hand.label}
                        />
                    );
                })}
        </RadioGroup>
    );
}
