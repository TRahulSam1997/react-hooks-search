import UseStateComponent from './components/useStateComponent';
import UseEffectComponent from './components/useEffectComponent';
import UseContextComponent from './components/useContextComponent';
import UseReducerComponent from './components/useReducerComponent';
import UseRefComponent from './components/useRefComponent';
import CustomHookComponent from './components/customHookComponent';
import AdditionalReactComponents from './components/additionalReactComponents';

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
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>CustomHook</h1>
      <CustomHookComponent />
      <h1>AdditionalComponents</h1>
      <AdditionalReactComponents />
    </div>
  );
}

export default App;
