import { projetsData } from '@/app/data/data';
import { Image } from '@nextui-org/react';
import React from 'react'

interface ProjetPageProps {
    params: {
        id: string;
    }
}

export default function ProjetPage({ params }: ProjetPageProps) {
    const projet = projetsData.find(projet => projet.id === parseInt(params.id));

    if (!projet) {
        return <div className="text-center py-10">Projet non trouvé</div>;
    }

    return (
        <div className="flex flex-col px-4 py-8 h-[80vh] justify-center items-center">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="w-1/2">
                    <Image src={projet.image} alt={projet.titre} width={400} height={200} className="object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold mb-6">{projet.titre}</h1>
                    <p className="text-sm text-gray-500">{projet.description}</p>
                    <p className="text-sm text-gray-500">Etudiant : {projet.auteur}</p>
                </div>
            </div>
        </div>
    )
}
