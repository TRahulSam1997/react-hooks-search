import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { useForm } from './useForm';
import { Hello } from './hello';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });
  const inputRef = useRef();
  const hello = useRef(() => console.log('hello'));

  const [showHello, setShowHello] = useState(true);

  const [rect, inputRef2] = useMeasure([]);

  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        <input
          ref={inputRef}
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        <input
          name='firstName'
          placeholder='First Name'
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
}

// export default App;
// import {React, useState, useCallback} from 'react'
// import Hello from './Hello'
// import { Square } from './Square';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const favouriteNums = [7, 21, 37];

//   const increment = useCallback(
//     n => {
//       setCount(c => c + n);
//     },
//     [setCount]
//   );

//   return (
//     <div>
//       <Hello increment={increment}/>
//       <div>count: {count}</div>
//       {favouriteNums.map(n => {
//         return (
//           <Square increment={increment} n={n} key={n} />
//         );
//       })}
//     </div>
//   );
// };

// export default App

import React, {useState, useMemo} from 'react';
import {useFetch} from './useFetch';

const computeLongestWord = (arr) => {
  if(!arr) {
    return []
  }

  console.log('computing longest word');

  let longestWord = ''

  JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }));

  return longestWord
}

const App = () => {
  const [count, setCount] = useState(0);
  const {data} = useFetch(
    'https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json'
  );


  const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])

  return (
    <div>
      <div>
        count: {count}
        <button onClick={() => setCount(count + 1)}>increment</button>
        <div>{longestWord}</div>
      </div>
    </div>
  )
}

export default App;

// import React, {useReducer, useState} from 'react'

// function reducer(state, action) {
//   switch(action.type) {
//     case 'add-todo':
//       return {
//         todos: [...state.todos, { text: action.text, completed: false }],
//         todoCount: state.todoCount + 1
//       };
//     case 'toggle-todo':
//       return {
//         todos: state.todos.map((t, idx) =>
//           idx === action.idx ? {...t, completed: !t.completed } : t
//         ),
//         todoCount: state.todoCount
//       };
//     default:
//       return state;
//   }
// }

// const App = () => {
//   const [{todos, todoCount}, dispatch] = useReducer(reducer, {
//     todos: [],
//     todoCount: 0
//   });
//   const [text, setText] = useState();

//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault();
//         dispatch({ type: 'add-todo', text });
//         setText("");
//       }}>
//         <input value={text} onChange={e => setText(e.target.value)} />
//       </form>
//       <div>number of todos: {todoCount}</div>
//       {todos.map((t, idx) => (
//         <div
//           key={t.text}
//           onClick={() => dispatch({type: 'toggle-todo', idx})}
//           style={{
//             textDecoration: t.completed ? 'line-through' : ""
//           }}
//         >
//           {t.text}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App

// import React, { useState, useMemo } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Index } from "./pages";
// import { About } from "./pages/about";
// import { UserContext } from "./UserContext";

// function AppRouter() {
//   const [user, setUser] = useState(null);

//   const value = useMemo(() => ({ user, setUser }), [user, setUser]);

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about/">About</Link>
//             </li>
//           </ul>
//         </nav>

//         <UserContext.Provider value={value}>
//           <Route path="/" exact component={Index} />
//           <Route path="/about/" component={About} />
//         </UserContext.Provider>
//       </div>
//     </Router>
//   );
// }

// export default AppRouter;