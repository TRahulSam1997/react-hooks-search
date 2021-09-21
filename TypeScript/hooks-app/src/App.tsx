import UseStateComponent from './components/useStateComponent';
import UseEffectComponent from './components/useEffectComponent';
import UseContextComponent from './components/useContextComponent';

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
