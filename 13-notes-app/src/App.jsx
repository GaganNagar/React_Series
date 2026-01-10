import { useState } from 'react'
import './App.css'

function App() {

  const [Title, setTitle] = useState('')
  const [Note, setNote] = useState('')
  const [allNotes, setallNotes] = useState([])

  const formhandler = (e) => {
    e.preventDefault();    // form submit hone par page reload nhi hoga
    if(Title==='' || Note===''){
       return alert('Write Your Note corretly')      //agar title or notes dono chaiye to return kardo nhi direct alert
    }
   const task = [...allNotes]
   task.push({title:Title,note:Note});
   setallNotes(task);

   setTitle('')
   setNote('')
  }
  
  const dltNote=(idx)=>{
    const dltTask=[...allNotes]

    dltTask.splice(idx,1);
    setallNotes(dltTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white' >
      <form onSubmit={(e) => {
        formhandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <input type="text"
          placeholder='Enter Notes Heading'
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        />

        <textarea
          placeholder='write details'
          value={Note}
          onChange={(e) => setNote(e.target.value)}
          className='px-5 w-full font-medium h-32 py-2 border-2 outline-none resize-none'
        >
        </textarea>
        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 border-1-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          {allNotes.map((elem,idx)=>{
            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.note}</p>
              </div>
              <button onClick={() => {
                dltNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
