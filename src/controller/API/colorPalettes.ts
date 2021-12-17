import axios from "./axios";

export class colorPalette {
    public async GET_schemes(hexValue: string, mode?: string, count?: number) {
        let url = `/scheme?hex=${hexValue}`;
        if(mode) url += `&mode=${mode}`;
        if(count) url += `&count=${count}`;

        return await axios.get(url)
    }
}