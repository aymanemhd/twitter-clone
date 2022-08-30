import './home.css'
import profile from '../../img/profile.jpg'
import {BiWorld , BiPoll , BiMap} from 'react-icons/bi'
import {AiOutlinePicture , AiOutlineFileGif , AiOutlineSchedule , AiOutlineRetweet , AiOutlineHeart} from 'react-icons/ai'
import{GrEmoji} from 'react-icons/gr'
import {GoVerified} from 'react-icons/go'
import {FaRegComment} from 'react-icons/fa'
import { useState} from 'react'

function Home() {
  const [show,setShow]=useState(true)
  return (
    <div onLoad={() => setShow(false)}>
        <h2>Home</h2>
        <img src={profile} className='profile' />
        {
           show?<select name="" id="">
            <option value="">Everyone</option>
            <option value="">Friends</option>
            <option value="">Private</option>
          </select>:null
        }
       
        <input type="text" placeholder="What's happening ?" onClick={() => setShow(true)} /><br /><br />
        {
          show?<a href="#" className='reply'>
                 <span><BiWorld /></span>
                 <span className='e'>Everyone can reply</span>
               </a>:null
        }
        
        <div className="object">
          <span><AiOutlinePicture /></span>
          <span><AiOutlineFileGif /></span>
          <span><BiPoll /></span>
          <span><GrEmoji /></span>
          <span><AiOutlineSchedule /></span>
          <span><BiMap /></span>
        </div><br /><br />
        <hr />
        <img src={profile} className='profile' />
        <div className='username'>aymane mehdi<span className='v'><GoVerified /></span> <span className='un'>@AymanMehdi98</span> <span className='hour'>1h</span></div>
        <p>أول تغريدة</p>
        <div className="reaction">
          <span><FaRegComment />190k</span>
          <span><AiOutlineRetweet />900,0</span>
          <span><AiOutlineHeart />400k</span>
        </div>

        <p>ثاني تغريدة</p>
        <div className="reaction">
          <span><FaRegComment />390k</span>
          <span><AiOutlineRetweet />120,0</span>
          <span><AiOutlineHeart />40k</span>
        </div>
    </div>
  )
}

export default Home