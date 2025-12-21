import './App.css'

function App() {

  // ham isme dekhnge ki form ko handle kaise kare 

  // jb bhi ham form k input m kuch likh kar submit karenge to page reload ho jyga data nhi rhega  to ham kya karenge ki jab bhi hamra form submit ho to data aa jaye kisi me or us data ko prevent karlo jb submit ho
const formhandler=(e)=>{  //accept value
  e.preventDefault();    // form submit hone par page reload nhi hoga
  console.log("okokokoko")
}
  return (
    <>
      <form onSubmit={(e)=>{    // yha value accept ki form ki 
        formhandler(e)     //yha se value pas ki form k andar jo bhi thi 
      }}>
        <input type="text" />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
