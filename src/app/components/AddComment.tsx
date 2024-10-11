"use client"

import React, { useEffect, useState } from 'react'
import {
    Button,
    Input,
    Textarea,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from '@nextui-org/react'
import { FaComments } from "react-icons/fa6";
import z from 'zod';
import Notifications from './Notifications';

export default function AddComment({ setShowNotification }: { setShowNotification: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [comment, setComment] = useState({
        nom: '',
        prenom: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Record<string, boolean> | null>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setComment((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const commentSchema = z.object({
            nom: z.string().min(1, { message: 'Le nom est obligatoire' }),
            prenom: z.string().min(1, { message: 'Le prénom est obligatoire' }),
            message: z.string().min(1, { message: 'Le message est obligatoire' })
        });

        const validationResult = commentSchema.safeParse(comment);

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
            setComment({
                nom: '',
                prenom: '',
                message: ''
            });
            setShowNotification(true); // Utilisation de la prop pour mettre à jour l'état
            onOpenChange();
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <Button onPress={onOpen} endContent={<FaComments className='h-6 w-6' />} color="secondary">Ajouter un commentaire</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <ModalHeader className="flex flex-col gap-1">Ajouter un commentaire</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Input
                                        type="text"
                                        name="nom"
                                        id="nom"
                                        placeholder="Nom"
                                        label="Nom"
                                        className="w-full"
                                        isRequired
                                        value={comment.nom}
                                        isInvalid={error?.nom}
                                        errorMessage={error?.nom ? 'Le nom est obligatoire' : ''}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        name="prenom"
                                        id="prenom"
                                        placeholder="Prénom"
                                        label="Prénom"
                                        className="w-full"
                                        isRequired
                                        value={comment.prenom}
                                        onChange={handleChange}
                                        isInvalid={error?.prenom}
                                        errorMessage={error?.prenom ? 'Le prénom est obligatoire' : ''}
                                    />
                                </div>
                                <Textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    label="Message"
                                    className="w-full"
                                    isRequired
                                    value={comment.message}
                                    isInvalid={error?.message}
                                    errorMessage={error?.message ? 'Le message est obligatoire' : ''}
                                    onChange={handleChange}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Annuler
                                </Button>
                                <Button
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                    type="submit"
                                    color="secondary"
                                >
                                    Envoyer
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}