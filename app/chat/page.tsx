'use client'
import { useChat } from 'ai/react'
import React from 'react'

export default function Page() {

  const { handleInputChange, handleSubmit,messages } = useChat()
  //la ruta chat es por defecto pero si la ruta de la api se llamara "ai". useChat seria useChat({api: "/api/ai"})
  console.log(messages)
  return (
    <div className='flex justify-center items-center heights'>
      <form className='' onSubmit={handleSubmit}>

        {/*mensaje*/}

        <div className='flex  gap-4'>
          <label> say Something</label>
          <button className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm  text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900  dark:hover:bg-gray-300 font-bold'>Enviar</button>
        </div>
        <textarea rows={3} placeholder='type here' className='text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none' onChange={handleInputChange}>



        </textarea>

      </form>
    </div>
  )
}
