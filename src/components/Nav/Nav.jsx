import { AiOutlineHome , AiOutlineUser, AiOutlineBorderlessTable ,AiOutlineUsergroupAdd ,AiOutlineMail , AiOutlineTwitter } from "react-icons/ai";
import {MdOutlineNotificationsNone} from "react-icons/md"
import {BsBookmarks} from "react-icons/bs"
import {CgMoreO} from "react-icons/cg"
import './nav.css'

function Nav() {
  return (
    <div>
        <div className="logo"><AiOutlineTwitter /></div>
        <ul>
            
            <li>
                <a href="#">
                    <span className="icon"><AiOutlineHome/></span>
                    <span className="title">Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><AiOutlineBorderlessTable/></span>
                    <span className="title">Explorer</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><AiOutlineUsergroupAdd/></span>
                    <span className="title">Community</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><MdOutlineNotificationsNone/></span>
                    <span className="title">Notification</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><AiOutlineMail/></span>
                    <span className="title">Messages</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><BsBookmarks/></span>
                    <span className="title">Bookmarks</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><AiOutlineUser/></span>
                    <span className="title">Profile</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><CgMoreO/></span>
                    <span className="title">More</span>
                </a>
            </li>
            <li>
                <button>tweet</button>
            </li>
        </ul>
    </div>
  )
}

export default Nav