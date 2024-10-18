'use client'

import React, { useState } from 'react'
import { Button, Input, Textarea } from "@nextui-org/react"
import { PiCodeBold } from "react-icons/pi";
import { z } from 'zod';
import { GrValidate } from 'react-icons/gr';
import Link from 'next/link';
import { WiDirectionRight } from "react-icons/wi";
import { FaFileUpload } from "react-icons/fa";

export default function AddProjet() {
    const [projet, setProjet] = useState({
        titre: '',
        description: '',
        lien: '',
        auteur: '',
        tech: '',
        image: null as File | null
    })
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Record<string, boolean> | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProjet((prev) => ({ ...prev, [name]: value }))
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setProjet((prev) => ({ ...prev, image: file }))
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        setSuccess(false)

        const projetSchema = z.object({
            titre: z.string().min(1, { message: 'Le titre est obligatoire' }),
            description: z.string().min(1, { message: 'La description est obligatoire' }),
            lien: z.string().url({ message: 'Veuillez entrer une URL valide' }),
            auteur: z.string().min(1, { message: "Le nom de l'auteur est obligatoire" }),
            tech: z.string().min(1, { message: 'La technologie utilisée est obligatoire' }),
            image: z.instanceof(File, { message: 'Une image est requise' })
        });

        const validationResult = projetSchema.safeParse(projet);

        if (!validationResult.success) {
            setTimeout(() => {
                setError(
                    Object.fromEntries(
                        Object.keys(validationResult.error.format()).map(key => [key, true])
                    )
                );
                setIsLoading(false);
            }, 1000);
            return;
        }

        setTimeout(() => {
            setProjet({
                titre: '',
                description: '',
                lien: '',
                auteur: '',
                tech: '',
                image: null as File | null
            });
            setIsLoading(false);
            setSuccess(true);
        }, 1000);
    }

    if (success) {
        return <div className="flex flex-col gap-6 max-w-sm mx-auto h-[80vh] justify-center">
            <div className="flex flex-col gap-4 items-center">
                <GrValidate className="text-6xl text-secondary" />
                <h1 className="text-2xl font-bold text-center text-secondary">Votre projet a été ajouté</h1>
                <Button as={Link} href="#" color="secondary" endContent={<WiDirectionRight className='h-6 w-6' />}>Voir le projet</Button>
            </div>
        </div>
    }

    return (
        <div className="max-w-md mx-auto min-h-[90vh] flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-10 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-5 text-secondary text-center">Ajouter un nouveau projet</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <Input
                        label="Titre"
                        placeholder="Entrez le titre du projet"
                        name="titre"
                        value={projet.titre}
                        onChange={handleChange}
                        isRequired
                        isInvalid={error?.titre}
                        errorMessage={error?.titre ? 'Le titre est obligatoire' : ''}
                    />
                    <Input
                        label="Auteur"
                        placeholder="Nom de l'auteur"
                        name="auteur"
                        value={projet.auteur}
                        onChange={handleChange}
                        isRequired
                        isInvalid={error?.auteur}
                        errorMessage={error?.auteur ? 'Le nom de l\'auteur est obligatoire' : ''}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <Input
                        label="Technologie utilisée"
                        placeholder="Ex: React, Node.js, etc."
                        name="tech"
                        value={projet.tech}
                        onChange={handleChange}
                        isRequired
                        isInvalid={error?.tech}
                        errorMessage={error?.tech ? 'La technologie utilisée est obligatoire' : ''}
                    />
                    <Input
                        label="Lien du projet"
                        placeholder="https://exemple.com/"
                        name="lien"
                        value={projet.lien}
                        onChange={handleChange}
                        isRequired
                        isInvalid={error?.lien}
                        errorMessage={error?.lien ? 'Le lien est obligatoire' : ''}
                    />
                </div>
                <Textarea
                    label="Description"
                    placeholder="Décrivez votre projet"
                    name="description"
                    value={projet.description}
                    onChange={handleChange}
                    isRequired
                    isInvalid={error?.description}
                    errorMessage={error?.description ? 'La description est obligatoire' : ''}
                />
                <div className="flex flex-col items-center gap-2">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                        id="imageUpload"
                    />
                    <Button
                        className={`w-full text-white ${error?.image ? 'bg-red-500' : 'bg-blue-700'}`}
                        endContent={<FaFileUpload className='h-6 w-6' />}
                    >
                        {projet.image ? `Image sélectionnée ${projet.image.name}` : 'Ajouter une image'}
                    </Button>
                    {error?.image && <span className='text-red-500'>Une image est requise</span>}
                </div>
                <Button isLoading={isLoading} isDisabled={isLoading} type="submit" color="secondary" className='w-full' endContent={<PiCodeBold className='h-6 w-6' />}>
                    Ajouter le projet
                </Button>
            </form>
        </div>
    )
}
