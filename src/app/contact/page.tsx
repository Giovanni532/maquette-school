"use client"

import { Button, Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import DOMPurify from 'dompurify';
import { BsSendFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";
import { z } from 'zod'

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<{ nom: boolean, prenom: boolean, email: boolean, message: boolean } | null>(null)
    const [success, setSuccess] = useState<boolean | null>(null)

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        message: ''
    })

    const sanitizeInput = (input: string) => {
        return DOMPurify.sanitize(input);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData(prev => ({ ...prev, [name]: sanitizeInput(value) }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError(null)
        setSuccess(null)

        const validForm = z.object({
            nom: z.string().min(1, { message: 'Le nom est obligatoire' }),
            prenom: z.string().min(1, { message: 'Le prénom est obligatoire' }),
            email: z.string().email({ message: 'Veuillez entrer une adresse email valide' }),
            message: z.string().min(1, { message: 'Le message est obligatoire' })
        }).safeParse(formData)

        if (!validForm.success) {
            setTimeout(() => {
                setError({
                    nom: !!validForm.error.format().nom,
                    prenom: !!validForm.error.format().prenom,
                    email: !!validForm.error.format().email,
                    message: !!validForm.error.format().message
                });
                setIsLoading(false);
            }, 1000);
            return;
        }

        return setTimeout(() => {
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                message: ''
            })
            setIsLoading(false)
            setSuccess(true)
        }, 1000);
    }


    if (success) {
        return <div className="flex flex-col gap-6 max-w-sm mx-auto h-[80vh] justify-center">
            <div className="flex flex-col gap-4 items-center">
                <GrValidate className="text-6xl text-secondary" />
                <h1 className="text-2xl font-bold text-center text-secondary">Merci pour votre message</h1>
                <p className="text-center">Nous vous répondrons dans les plus brefs délais</p>
            </div>
        </div>
    }

    return (
        <div className='min-h-[83vh]'>
            <form
                className="pt-40"
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-4 max-w-md shadow-md mx-auto rounded-2xl justify-center bg-white p-4'>
                    <h1 className="text-2xl font-bold text-center text-secondary p-5">Contactez-nous</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Input
                            label="Nom"
                            placeholder="Jean"
                            name="nom"
                            type="text"
                            isRequired
                            value={formData.nom}
                            onChange={handleChange}
                            isInvalid={!!error?.nom}
                            errorMessage={error?.nom ? "Le nom est obligatoire" : ""}
                        />
                        <Input
                            label="Prénom"
                            placeholder="Dupond"
                            name="prenom"
                            type="text"
                            isRequired
                            value={formData.prenom}
                            onChange={handleChange}
                            isInvalid={!!error?.prenom}
                            errorMessage={error?.prenom ? "Le prénom est obligatoire" : ""}
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Input
                            label="Email"
                            placeholder="jean.dupond@gmail.com"
                            name="email"
                            type="email"
                            isRequired
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!error?.email}
                            errorMessage={error?.email ? "L'email est obligatoire" : ""}
                        />
                        <Textarea
                            label="Message"
                            placeholder="Bonjour, je vous contacte pour..."
                            name="message"
                            rows={4}
                            isRequired
                            value={formData.message}
                            onChange={handleChange}
                            isInvalid={!!error?.message}
                            errorMessage={error?.message ? "Le message est obligatoire" : ""}
                        />
                        <Button
                            color="secondary"
                            type="submit"
                            isLoading={isLoading}
                            endContent={<BsSendFill />}
                        >
                            Envoyer
                        </Button>
                    </div>
                </div>
            </form >
        </div>
    )
}
