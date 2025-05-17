
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
     background: #1b2430;
    
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #fff;
        text-decoration: none;
    }
    & > a:hover{
        color:#f75842;
        transition:all 400ms ease;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/chatroom'>CHATROOM</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;



// import {useState} from 'react';


// export default function Navbar(){
//     const [clicked,setClicked]=useState(false);
//     // const [searchText,setSearchText]=useState({});
//     const handleClick=()=>{
//       setClicked(!clicked);
//     }
//     return(
//         <>
            
//         <nav>
//         <div className="topLeft">
//               <span className="Montserrat-bold-black-20px"><a href="index.html">Stepping stone</a></span>
                
//             </div>

//         <div>
//           <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
//             <li>
//               <a href="index.html" className="active">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="index.html"> Chatroom </a>
//             </li>
//             <li>
//               <a href="index.html"> Courses</a>
//             </li>
//             <li>
//               <a href="index.html"> Login </a>
//             </li>
//             <li>
//               {/* <a href="index.html"> Contact </a> */}
//             </li>
//           </ul>
//         </div>
//         <input type="text" name="" id="" className={clicked? "input clicked":"input"} />
        
//         <img 
//             className="topImg"
//             src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt=""
//         />
//         <div id="mobile">
//           <i
//             id="bar"
//             onClick={()=>handleClick()}
//             className={clicked ? "fas fa-times" : "fas fa-bars"}
//           ></i>
//         </div>
       
       
//       </nav>
//         </>
//     );
// }