import React, {useState} from 'react'
import enquireImg from '../assets/enquire.png'
import '../scss/EnquireNow.scss'
import EnquireForm from './EnquireForm'


function EnquireNow({children}) {
    const [show, setShow ] = useState();

    function toggleShow(){
        setShow(!show)
       
    }
   
   return (
    <div>
      <a  className='enquire'>
        {show && children}
        <img src={enquireImg} alt="Enquire img"  onClick={toggleShow} className='enqImg'/> 
      </a>
    </div>
  )
}

export default EnquireNow
