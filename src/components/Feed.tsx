import Dashboard from './Dashboard'
import Navbar from './Navbar'

const Feed = () => {
  
  return (
    <div className='bg-sky-50 h-auto flex-auto rounded-xl duration-75 
     overflow-y-scroll  overflow-x-hidden 
     '>
      <Navbar/>
      <Dashboard/>
      </div>
  )
}

export default Feed