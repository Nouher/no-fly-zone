import React, { useRef, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { LinkSocialIcon } from "../icons";


export default function CopyLinkButtonModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [copied, setCopied] = useState(false)
    const LinkRef = useRef()


    return (
        <>
            <button onClick={onOpen} className='bg-transparent p-0'>  <LinkSocialIcon /></button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Copy link</ModalHeader>
                            <ModalBody>
                                <Input
                                    ref={LinkRef}
                                    autoFocus
                                    label=""
                                    variant="bordered"
                                    value="https://michaelb1019.sg-host.com/"
                                />

                                <Link color="primary" href="#" size="sm" className={`${copied ? '' : 'hidden'}`}>
                                    Copied!
                                </Link>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => {

                                    LinkRef.current.select()
                                    document.execCommand('copy');
                                    setCopied(true)

                                }}>
                                    Copy
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
