'use client'
import { useChat } from 'ai/react'
import React from 'react'

export default function Page() {

  const { handleInputChange, handleSubmit,messages } = useChat()

  return (
    <div className='flex justify-center items-center heights '>
      <form className='flex flex-col gap-3 bg-neutral-800 rounded-lg md:p-10' onSubmit={handleSubmit}>

        {/*mensaje*/}

        <div className='flex justify-center items-center gap-20'>
          <label>Escriba una pregunta</label>
          <button className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm  text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900  dark:hover:bg-gray-300 font-bold'>Enviar</button>
        </div>
        <textarea placeholder='type here' className='text-black bg-neutral-400 px-3 py-2 w-full rounded-md focus:outline-none min-h-60 placeholder:text-black' onChange={handleInputChange}>



        </textarea>

      </form>
    </div>
  )
}
