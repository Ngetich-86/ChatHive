
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats.jsx'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar/>
        <Search/>  
        <Chats/>
        
        

    </div>
  )
}

export default Sidebar