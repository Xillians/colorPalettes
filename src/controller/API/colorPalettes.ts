import axios from "./axios";

export class colorPalette {
    public hexValue: number;

    constructor(hexValue: number) {
        this.hexValue = hexValue;
    }
    public async GET_schemes(mode?: string, count?: number) {
        let url = `/scheme?hex=${this.hexValue}`;
        if(mode) url += `&mode=${mode}`;
        if(count) url += `&count=${count}`;

        return await axios.get(url)
    }
}