import React, { useState } from 'react';
import './App.css';



// 1.TODO : 에러만들기
// function App_error() {
//   return (
//     <>
//       <div className="App">
//         hello
//       </div>
//       <div className="App">
//         foo
//       </div>
//   );
// }

//2.TODO: 버튼을 이용하여 값 +- 할 수있게 제작. 0 이 되면 - 버트는 disabled.

const App = () => {

  const [num, setNum] = useState(0);
  const non = (num = 0) ? 'disabled' : '';
  // const [number, setNumber] = useState(0);

  // onchange = () => {
  //   setNum(num + 1);
  // };

  // const plus = () => {
  //   setNum(num + 1);
  // };
  //
  const minus = () => {
    setNum(num - 1);
    const non = (setNum = 0) ? 'disabled' : '';
  };





  return(
    <>
      <div className="App">
        <div>{num}</div>
        <button onClick={() => setNum(num +1)}>+</button>
        <button onClick={() => setNum(num -1)}>-</button>
      </div>
    </>

  )
}



export default App;
