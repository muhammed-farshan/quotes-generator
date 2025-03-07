import { useState } from 'react'
import './App.css'
import instance from './instance'
import { useEffect } from 'react'

function App() {
  const [quote,setQuote]=useState("")
  const fetchQuote=async()=>{
    const {data} =await instance.get()
   const res=await data.quotes
   console.log(res.length);
  const fetchRes=await res[Math.floor(res.length*Math.random())]
  setQuote(fetchRes)
  
   
  
   
  
    
  }

  useEffect(()=>{
    fetchQuote()
    
  },[])
  console.log(quote.quote);
  

  return (
    <>
    <div className=' justify-content-center pt-5 ' style={{height:"100vh",width:"100%", backgroundColor:"grey",}}>
              <div className='justify-content-center align-items-center d-flex'>
                <h1 className='fw-bolder' style={{color:'black'}}>
                            Quotes Generetor
                          </h1>
              </div>
          <div className=' mt-5 ' style={{height:"400px" , width:"100%",padding:"0px 250px" ,justifyContent:"center"}}> 
                <p style={{
                  fontSize:"35px",
                  textAlign:"justify",
                  color:'black'
              }}>
              {`${quote?.quote} `}
              </p>
              <p style={{fontSize:"30px",marginLeft:"900px",marginTop:"50px", width:"350px", color:'black'}}> {`~${quote?.author} `}</p>
          </div>
           <div className='d-flex justify-content-center align-items-center ' style={{height:"60px", }}>
             <button onClick={fetchQuote} className='ms-3 bg-black text-white' style={{height:"40px" ,width:"80px",border:"none",borderRadius:"5px"} }>Next</button>    
           </div>
     </div>
    </>
  )
}

export default App
