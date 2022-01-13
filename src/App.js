import { useState } from "react";
const gifts = [
  'CPU i9',
  'RAM 32GB',
  'RGB Keyboard'
]
function App() {
  const [gift, setGift] = useState();
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }
  return (
    <>
      <div className="App" style={{ padding:20 }}>
        <h1>{ gift || 'No price' }</h1>
        <button onClick={randomGift}>Get price</button>
      </div>
    </>
  );
}

export default App;
