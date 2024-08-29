// import React, { useContext } from 'react'
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'

// const Navbar = () => {
//   const {currentUser} = useContext(AuthContext)

//   return (
//     <div className='navbar'>
//       <span className="logo">ChatApp</span>
//       <div className="user">
//         <img src={currentUser.photoURL} alt="" />
//         <span>{currentUser.displayName}</span>
//         <button onClick={()=>signOut(auth)}>logout</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

//test
import React, { useContext } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        {currentUser ? (
          <>
            <img src={currentUser.photoURL} alt="User" />
            <span>{currentUser.displayName}</span>
            <button onClick={() => signOut(auth)}>
              {/* Logout */}
              {/* after signing you out dir to login page */}
              <Link to="/login">Logout</Link>
              </button>
          </>
        ) : (
          // <span>Loading...</span>
          <Link to="/login">Logout</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;






// import React from 'react'
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'
// import { useContext } from 'react'

// const Navbar = () => {
//   const {currentUser} = useContext(AuthContext)
//   return (
//     <div className='navbar'>
//       <span className='logo'>chatApp</span>
//       <div className="user">
//         {/* <img src={currentUser.photoURL} alt="" /> */}
//         <span>{currentUser.displayName}</span>
//         <button onClick={()=>signOut(auth)}>
//           logout
//           </button>
//       </div>
//     </div>
//   )
// }

// export default Navbar