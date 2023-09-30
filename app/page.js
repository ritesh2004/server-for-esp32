'use client'
import Image from 'next/image'

export default function Home() {

  const sendMail = async () =>{
    const res = await fetch('https://server-for-esp32.vercel.app/api/send/',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({subject:'Testing2',body:'Hello this is a test message'})
    })
    const {message} = await res.json();
    alert(message)
  }

  return (
    <div className='max-w-full min-h-screen flex items-center justify-center'>
    <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={sendMail}>Send Mail</button>
    </div>
  )
}
