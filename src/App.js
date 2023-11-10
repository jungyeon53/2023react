import logo from './logo.svg';


function App() {
    const jung = "안녕하세요"
    function test() {
      return 100;
    }
  return (
    <div className="App">
      <div>{jung}{test()}</div>
    </div>
  );
}

export default App;
