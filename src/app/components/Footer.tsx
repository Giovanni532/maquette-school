import React from 'react'
import { Button, Link } from '@nextui-org/react'
import { GrGithub } from 'react-icons/gr'

export default function Footer() {
    return (
        <div className="container mx-auto flex justify-between items-center p-4 my-3">
            <p className="text-sm">&copy; {new Date().getFullYear()} Salcuni Giovanni. Tous droits réservés.</p>
            <div className="flex gap-4">
                <Button
                    as={Link}
                    href='https://github.com/Giovanni532/maquette-school'
                    isIconOnly
                    variant='light'
                    color='secondary'
                    radius='full'
                >
                    <GrGithub className='h-7 w-7' />
                </Button>
            </div>
        </div>
    )
}
