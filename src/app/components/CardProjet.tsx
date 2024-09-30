import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';
import { paths } from '@/paths';

interface CardProjetProps {
  projet: {
    id: number;
    titre: string;
    description: string;
    image: string;
    auteur: string;
  }
}

export default function CardProjet({ projet }: CardProjetProps) {
  return (
    <Card radius='lg' className='max-w-xs'>
      <CardHeader className='flex flex-col items-start gap-2'>
        <Image 
        src={projet.image} 
        alt={projet.titre} 
        width={400} 
        height={150} 
        className='object-cover'
        />
        <h2 className='text-2xl font-bold'>{projet.titre}</h2>
      </CardHeader>
      <CardBody>
        <p className='text-sm text-gray-500'>{projet.description}</p>
      </CardBody>
      <CardFooter className='flex justify-between items-center'>
        <p className='text-sm text-gray-500'>{projet.auteur}</p>
        <Button
          as={Link}
          variant='light'
          color='secondary'
          radius='full'
          href={paths.projet(projet.id.toString())}
          endContent={<MdArrowOutward className='h-5 w-5' />}
        >
          Voir le projet
        </Button>
      </CardFooter>
    </Card>
  )
}
