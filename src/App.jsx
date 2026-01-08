// import React, { useState } from 'react'
// import Form from './components/Form'
// import UserCard from './components/UserCard'

// const App = () => {

//   const [usersData, setUsersData] = useState([])

//   return (
//     <div className='h-screen flex w-screen gap-4 p-4'>
//       <Form usersData={usersData} setUsersData={setUsersData} />

//       <div className='h-full flex gap-4'>
//         {
//           usersData.map((elem) => {
//             return <UserCard elem={elem} />
//           })
//         }
//       </div>

//     </div>
//   )
// }

// export default App








import React, { useState } from 'react'
import Form from './components/Form'
import UserCard from './components/UserCard'

const App = () => {
 const [usersData, setUsersData] = useState([])



  return (
    <div className='h-screen flex flex-wrap p-4'>
      <Form usersData={usersData} setUsersData={setUsersData} />
      <div className='h-full flex gap-4'>
        {
          usersData.map((elem) => {
            return <UserCard elem={elem} />
          })
        }
      </div>
    </div>
  )
}

export default App