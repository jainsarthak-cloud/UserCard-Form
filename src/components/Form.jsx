// import React, { useState } from 'react'

// const Form = () => {

//     const [naam, setNaam] = useState("")
//     const [email, setEmial] = useState("")
//     const [mobile, setMobile] = useState("")
//     const [des, setDes] = useState("")
//     const [url, setUrl] = useState("")



//     let handleFormSubmit = (e) => {
//         e.preventDefault()

//         let newUser = {
//             name: naam,
//             email,
//             mobile,
//             designation: des,
//             ImageUrl: url
//         }

//         setUsersData([...usersData, newUser])

//         setNaam("")
//         setEmail("")
//         setDes("")
//         setMobile("")
//         setUrl("")

//     }

//     return (
//         <div>
//             <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 m-4 border rounded-2xl p-2 w-[20%] bg-amber-100' action="">
//                 <input value={naam} onChange={(e) => setNaam(e.target.value)} className='px-2 py-3 rounded border' type="text" placeholder='Name' />
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} className='px-2 py-3 rounded border' type="text" placeholder='Email' />
//                 <input value={mobile} onChange={(e) => setMobile(e.target.value)} className='px-2 py-3 rounded border' type="number" placeholder='Mobile' />
//                 <input value={des} onChange={(e) => setDes(e.target.value)} className='px-2 py-3 rounded border' type="text" placeholder='Designation' />
//                 <input value={url} onChange={(e) => setUrl(e.target.value)} className='px-2 py-3 rounded border' type="url" placeholder='Image url here' />
//                 <button type='submit' className='px-5 py-3 rounded border cursor-pointer bg-orange-300'>Create</button>
//             </form>
//         </div>
//     )
// }

// export default Form;





import React, { useState } from 'react'

const Form = ({usersData, setUsersData}) => {

    const [naam, setNaam] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [des, setDes] = useState("")
    const [url, setUrl] = useState("")


   
    console.log(usersData)

    const handleFormSubmit = (e) => {
        e.preventDefault()

        let newUser = {
            name:naam,
            email:email,
            mobile:mobile,
            designation:des,
            imageurl:url

        }

        setUsersData([...usersData, newUser])


        setNaam("")
        setEmail("")
        setDes("")
        setMobile("")
        setUrl("")
    }

  return (
    <div className='w-[40%]'>
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 w-[70%]' action="">
        <input value={naam} onChange={(e) => setNaam(e.target.value)} className='px-2 py-3 rounded border' type="text" placeholder='Name' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='px-2 py-3 rounded border' type="email" placeholder='Email' />
        <input value={mobile} onChange={(e) => setMobile(e.target.value)} className='px-2 py-3 rounded border' type="number" placeholder='Mobile' />
        <input value={des} onChange={(e) => setDes(e.target.value)} className='px-2 py-3 rounded border' type="text" placeholder='Designation' />
        <input value={url} onChange={(e) => setUrl(e.target.value)} className='px-2 py-3 rounded border' type="url" placeholder='Image url here' />
        <button className='py-4 px-10 bg-blue-600 text-white cursor-pointer rounded-xl' type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Form;








