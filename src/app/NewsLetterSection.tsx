import { Button, Input } from '@nextui-org/react'
import React from 'react'

export default function NewsLetterSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-40 bg-secondary w-full p-8'>
      <h1 className='text-4xl font-bold text-center text-white'>NewsLetter</h1>
      <p className='text-lg text-gray-300 text-center'>
        Tu peux t'<span className='text-white'>inscrire</span> à la newsletter pour voir les dernières projets sortis.
      </p>
      <Input
        type='email'
        placeholder='johndoe@gmail.com'
        className='w-full max-w-sm'
        radius='full'
      />
      <Button
        color='primary'
        variant='light'
        radius='full'
        size='lg'
      >
        S'inscrire
      </Button>
    </div>
  )
}
