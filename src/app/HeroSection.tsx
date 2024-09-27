import { Button } from '@nextui-org/react'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl font-bold text-center">Déploie ton <span className='text-secondary'>projet</span> de premiere année !</h1>
        <p className="text-lg text-gray-500 font-medium text-center">
           Tu trouvera des projets que des <span className='text-secondary'>étudiants</span> ont réalisés <br/> dans le cadre de leur projet de premiere année y compris le tien si tu l'ajoute !<br/> <span className="text-3xl">🚀</span>
        </p>
        <Button color='secondary' radius='full'>Ajouter ton projet</Button>
    </div>
  )
}
