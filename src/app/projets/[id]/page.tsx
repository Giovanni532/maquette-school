'use client'

import AddComment from '@/app/components/AddComment';
import { projetsData } from '@/app/data/data';
import { Button, Divider, Image, Link } from '@nextui-org/react';
import { TbDirectionSignFilled } from "react-icons/tb";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Notifications from '@/app/components/Notifications';

interface ProjetPageProps {
    params: {
        id: string;
    }
}

export default function ProjetPage({ params }: ProjetPageProps) {
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    const projet = projetsData.find(projet => projet.id === parseInt(params.id));

    if (!projet) {
        return <div className="text-center py-10">Projet non trouvé</div>;
    }

    return (
        <div className="flex flex-col px-4 py-8 h-[80vh] justify-center items-center my-10">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                <motion.div
                    className="w-1/2"
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={projet.image} alt={projet.titre} width={400} height={200} className="object-cover" />
                </motion.div>
                <motion.div
                    className="flex flex-col gap-4 bg-white p-4 rounded-lg max-w-md w-full my-2 shadow-md"
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-2xl font-bold">{projet.titre}</p>
                    <p className="text-sm text-gray-500">{projet.description}</p>
                    <p className="text-sm text-gray-500">Etudiant : {projet.auteur}</p>
                    <p className="text-sm text-gray-500">Ce projet a été réalisé avec {projet.tech}</p>
                    <div className="flex flex-col gap-4 items-center">
                        <AddComment setShowNotification={setShowNotification} />
                        <Divider className='w-40' />
                        <Button
                            as={Link}
                            variant='light'
                            color='secondary'
                            endContent={<TbDirectionSignFilled className='h-6 w-6' />}
                            href={projet.link}
                            target='_blank'
                        >Voir le site du projet</Button>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="flex flex-col gap-4 bg-white p-4 rounded-lg max-w-2xl w-full my-2"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold mb-6">Commentaires</h2>
                <div className="flex flex-col gap-6">
                    {projet.commentaires.map((commentaire, index) => (
                        <div key={index} className="flex flex-col gap-2 shadow-md p-4 rounded-lg">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm text-gray-500">{commentaire.auteur}</p>
                                <p className="text-sm text-gray-500">{commentaire.date}</p>
                            </div>
                            <p className="text-sm text-gray-500">{commentaire.commentaire}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
            {showNotification && (
                <Notifications
                    title="Succès"
                    description="Votre commentaire a été envoyé avec succès."
                />
            )}
        </div>
    )
}
