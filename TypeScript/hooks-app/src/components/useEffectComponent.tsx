import {useState, useEffect} from 'react';

const UseEffectComponent = () => {
    const [val, setVal] = useState(1);

    useEffect(() => {
        window.setInterval(() => {
            setVal(v => v + 1);
        }, 1000);
    }, []);

    return (
        <div>
            {val}
        </div>
    )
}

export default UseEffectComponent;