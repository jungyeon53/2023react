// import logo from './logo.svg';
// import { useState } from 'react';

function App() {
  const jung = "헬로"
  let [listData,setListData] = useState(1);
  return(
    <div className="App">

      <div>{listData}</div>

      <div></div>

      <button onClick={()=>{setListData(listData+1)}}>click</button>
    </div>
  );
}

export default App;
