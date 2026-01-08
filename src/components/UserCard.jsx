// import React from 'react'

// const UserCard = ({elem}) => {
//   return (
//     <div className='h-[50%] w-[25%] border rounded-xl p-4'>
//         <div className='h-[50%] rounded-xl overflow-hidden w-full bg-red-500'>
//             <img className='h-full w-full object-cover' src={elem.ImageUrl} alt="" />
//         </div>

//         <div className='mt-4'>
//             <h1>Name - {elem.name}</h1>
//             <h1>Email - {elem.email}</h1>
//             <h1>Mobile - {elem.mobile}</h1>
//             <h1>Designation - {elem.designation}</h1>
//         </div>
//     </div>
//   )
// }

// export default UserCard






import React from 'react'

const UserCard = ({elem}) => {
  return (
    <div className='h-[50%] w-60 border rounded-xl  p-4'>
        <div className='h-[50%] rounded-xl overflow-hidden w-full bg-red-500'>
            <img className='h-full w-full object-cover' src={elem.imageurl} alt="" />
        </div>
        <div className='mt-4'>
            <h1>Name - {elem.name}</h1>
            <h1>Email - {elem.email}</h1>
            <h1>Mobile - {elem.mobile}</h1>
            <h1>Designation - {elem.designation}</h1>
        </div>
    </div>
  )
}

export default UserCard