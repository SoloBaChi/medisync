import react, { useState} from 'react';
import { Navbar } from '../containers';

const Dashboard = () => {
  const[user, setUser] = useState({})
  const getUserid = localStorage.getItem("id")
  console.log(getUserid)
  async function getUser({id}) {
    const userInfo = await fetch('https://medisync-instance.onrender.com/api/v1/users/640ca8840ce4e62428cbd4f4')
    const response = await userInfo.json()
    setUser(response.data)
  }

  getUser()



  return (
    <div>
        <div className="Dashboard">
          <Navbar />
        </div>
    </div>
  )
}

export default Dashboard