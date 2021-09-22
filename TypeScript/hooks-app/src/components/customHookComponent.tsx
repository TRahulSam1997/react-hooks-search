import { useState, useEffect } from "react";

export interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
}

const useFetchData = (url: string): {
    data: Beverage[] | null;
    done: boolean;
} => {
    const [data, setData] = useState<Beverage[] | null>(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((d: Beverage[]) => {
                setData(d);
                setDone(true);
            })
    }, [url]);

    return {
        data,
        done
    };
}

const CustomHookComponent = () => {
    return (
        <div>

        </div>
    )
}

export default CustomHookComponent;