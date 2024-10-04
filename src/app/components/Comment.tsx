"use client"

import React from 'react'
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

export default function Comment() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} endContent={<FaComments className='h-6 w-6' />} color="secondary">Ajouter un commentaire</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <form action="" className='mt-10 flex flex-col gap-4'>
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
                                    />
                                    <Input
                                        type="text"
                                        name="prenom"
                                        id="prenom"
                                        placeholder="Prénom"
                                        label="Prénom"
                                        className="w-full"
                                        isRequired
                                    />
                                </div>
                                <Textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    label="Message"
                                    className="w-full"
                                    isRequired
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