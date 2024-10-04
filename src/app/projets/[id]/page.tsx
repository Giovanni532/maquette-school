import Comment from '@/app/components/Comment';
import { projetsData } from '@/app/data/data';
import {  Image, Link } from '@nextui-org/react';
import React from 'react'
import { WiDirectionUpRight } from "react-icons/wi";

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
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                <div className="w-1/2">
                    <Image src={projet.image} alt={projet.titre} width={400} height={200} className="object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-bold">{projet.titre}</p>
                    <p className="text-sm text-gray-500">{projet.description}</p>
                    <p className="text-sm text-gray-500">Etudiant : {projet.auteur}</p>
                    <p className="text-sm text-gray-500">Ce projet a été réalisé avec {projet.tech}</p>
                    <div className="flex items-center flex-row gap-2">
                        <Link href={projet.link} target="_blank" className='text-sm text-gray-600 items-center gap-2'>Voir le <span className='text-secondary'>projet</span></Link>
                    </div>
                    <Comment />
                </div>
            </div>
            {/* <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold mb-6">Commentaires</h2>
                <div className="flex flex-col gap-4">
                    {projet.commentaires.map((commentaire, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p className="text-sm text-gray-500">{commentaire.nom} {commentaire.prenom}</p>
                            <p className="text-sm text-gray-500">{commentaire.commentaire}</p>
                        </div>
                    ))}
                </div>
            </div>*/}
        </div>
    )
}
