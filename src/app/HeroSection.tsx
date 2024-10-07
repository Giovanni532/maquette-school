import { paths } from '@/paths'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 animate-fade-in">
      <h1 className="text-4xl font-bold text-center animate-slide-up">Déploie ton <span className='text-secondary'>projet</span> de premiere année !</h1>
      <p className="text-lg text-gray-500 font-medium text-center animate-slide-up">
        Tu trouvera des projets que des <span className='text-secondary'>étudiants</span> ont réalisés <br /> dans le cadre de leur projet de premiere année.<br /> <span className="text-3xl">🚀</span>
      </p>
      <Button
        as={Link}
        color='secondary'
        radius='full'
        href={paths.projets()}
        className="animate-bounce"
      >Voir les projets</Button>
    </div>
  )
}
