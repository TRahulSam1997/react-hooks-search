import UseStateComponent from './components/useStateComponent';
import UseEffectComponent from './components/useEffectComponent';

function App() {
  return (
    <div>
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
