
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import data from './data'


function App() {
  const [count, setCount] = useState(0)
  const [lorem, setLorem] = useState([])
   

  const submitHandler = (e) =>{
    e.preventDefault()
    let amount = parseInt(count)
    
    setLorem(data.slice(0,amount))
    console.log(lorem)
  }
  return (
    <>
      <h1>Lorem Ipsum Generator</h1>
      <form onSubmit = {submitHandler}>
        <label htmlFor = "paragraphs">Paragraphs</label>
        <input id = "paragraphs" type = "number" min = "1" max = {data.length} name = "count" value = {count} onChange = {(e) => setCount(e.target.value)}/>
        <Button type = "submit">Generate</Button>
      </form>

      <div>
        {lorem.map((lorem, index)=>{
          return <p key = {index}>{lorem}</p>
        })}
      </div>
    </>
  );
}

export default App;
