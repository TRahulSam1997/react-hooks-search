// import React, { useEffect, useState } from 'react'
// import { useFetch } from './useFetch';
// import { useMeasure } from './useMeasure';

// export const Hello = () => {
//     // const renders = useRef(0);
//     const [count, setCount] = useState(() =>
//         JSON.parse(localStorage.getItem('count'))
//     );

//     const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
//     useEffect(() => {
//         localStorage.setItem('count', JSON.stringify(count));
//     }, [count]);

//     const [rect, divRef] = useMeasure([data]);

//     return (
//         <div>
//             <div style={{ display: 'flex' }}>
//                 <div ref={divRef}>{!data?'loading...': data}</div>
//             </div>
//             <pre>
//                 {JSON.stringify(rect, null, 2)}
//             </pre>

//             <div>count: {count}</div>
//             <button onClick={() => setCount(c => c +1)}>increment</button>
//         </div>
//     );
// };
import React from 'react'
// import { useCountRenders } from './useCountRenders';

export const Hello = React.memo(({ increment }) => {
    // useCountRenders();

    return (
        <button onClick={() => increment(5)}>
            hello
        </button>
    );
});

export default Hello;