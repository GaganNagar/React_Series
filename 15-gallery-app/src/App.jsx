import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

function App() {
  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(2)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data);
  }

  useEffect(function () {
    const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data);
  }
    getData();
  }, [index]) 

  let printUserData = <h3 className='text-gray-600 '>Loading............ </h3>

  if (userData.length > 0) {
    printUserData = userData.map((Elem, idx) => {
      return <div key={idx}>
        <Card Elem={Elem} />
      </div>
    })
  }


  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto flex flex-col'>

      <div className='flex flex-wrap gap-10'>
        {printUserData}
      </div>
      <div className='flex justify-center item-center p-4 gap-5'>
        <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-90'
          onClick={() => {
            if (index > 1) {

              setindex(prev => prev - 1)
            
            }
          }}
        >
          Prev
        </button>

        <h4>Page : {index}</h4>
        
        <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-90'
          onClick={() => {
            if (index > 0) {
              setindex(prev => prev + 1)
            
            }
          }}
        >
          Next
        </button>
      </div>
    </div>

  )
}

export default App
