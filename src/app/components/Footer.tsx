import React from 'react'
import { Button, Link } from '@nextui-org/react'
import { GrGithub } from 'react-icons/gr'
import { FaUniversalAccess } from "react-icons/fa6";
import { paths } from '@/paths';

export default function Footer() {
    return (
        <div className="container mx-auto flex justify-between bg-white relative z-10 items-center h-16">
            <p className="text-sm">&copy; {new Date().getFullYear()} Salcuni Giovanni. Tous droits réservés.</p>
            <div className="flex gap-4">
                <Button
                    as={Link}
                    name='Lien accesibilité'
                    href={paths.accessibility()}
                    endContent={<FaUniversalAccess className='h-7 w-7' />}
                    variant='light'
                    color='secondary'
                    radius='full'
                >
                    Accesibilité
                </Button>
                <Button
                    as={Link}
                    name='Lien github'
                    href='https://github.com/Giovanni532/maquette-school'
                    endContent={<GrGithub className='h-7 w-7' />}
                    variant='light'
                    color='secondary'
                    radius='full'
                >
                    Github
                </Button>
            </div>
        </div>
    )
}
