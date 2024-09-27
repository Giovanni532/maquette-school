import React from 'react'
import { projetsData } from './data/data'
import CardProjet from './components/CardProjet'

export default function ProjetSection() {
    return (
        <div className='flex flex-col items-center justify-center gap-10 mb-10'>
            <h1 className='text-4xl font-bold text-center'>Quelques projets <span className='text-secondary'>d'étudiants</span></h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {projetsData.slice(0, 3).map((projet) => (
                    <CardProjet key={projet.id} projet={projet} />
                ))}
            </div>
        </div>
    )
}
