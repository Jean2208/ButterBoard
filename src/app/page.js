"use client";
import { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Image,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import DynamicBackground from './DynamicBackground';
import Link from 'next/link';
import JamBoard from "@/app/jamboard";
export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ChakraProvider>
            <DynamicBackground />
            <Box minHeight="100vh">
                <Flex
                    as="nav"
                    align="center"
                    justify="space-between"
                    wrap="wrap"
                    padding="6"
                    bg="rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(10px)"
                    position="fixed" // Fixed position
                    top={0}
                    left={0}
                    right={0}
                    zIndex={10} // Ensure it stays on top
                    pl={{ base: '5%', md: '20%' }}
                    pr={{ base: '5%', md: '20%' }}
                >
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'} color="white">
                            ButterBoard
                        </Heading>
                    </Flex>

                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        <Button variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>Calendar</Button>
                        <Link href="/jamboard" variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>JamBoard</Link>
                        <Button variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>Meetings</Button>
                        <Button bg="white" color="black" _hover={{ bg: 'gray.200' }}>Sign up</Button>
                    </HStack>

                    <Box display={{ base: 'block', md: 'none' }}>
                        <Button onClick={onOpen} bg="transparent" _hover={{ bg: 'whiteAlpha.200' }}>
                            <HamburgerIcon color="white" />
                        </Button>
                    </Box>
                </Flex>

                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <VStack spacing={4}>
                                <Button w="full" variant="ghost">Calendar</Button>
                                <Link href="/jamboard">
                                    <Text>JamBoard</Text>
                                </Link>
                                <Button w="full" variant="ghost">Meetings</Button>
                                <Button w="full" colorScheme="blue">Sign up</Button>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                <Flex
                    direction={{ base: "column", md: "row" }}
                    align={{ base: "flex-start", md: "center" }}
                    justify="space-between"
                    position="absolute"


                    px={{ base: 5, md: 20 }}
                    py={20}
                    mt="80px" // Add margin top to prevent content from being hidden
                    pl={{ base: '5%', md: '20%' }}
                    pr={{ base: '5%', md: '20%' }}
                >
                    <VStack
                        spacing={6}
                        align="flex-start"
                        maxW={{ base: "100%", md: "50%" }}
                        mb={{ base: 10, md: 0 }}
                        textAlign="left"
                    >
                        <Heading
                            as="h2"
                            size="4xl"
                            color="black"
                            fontWeight="bold"
                        >
                            Streamline
                        </Heading>
                        <Heading
                            as="h2"
                            size="4xl"
                            color="black"
                            fontWeight="bold"
                        >
                            Your Tools
                        </Heading>
                        <Heading
                            as="h2"
                            size="4xl"
                            color="black"
                            fontWeight="bold"
                        >
                            To Maximize
                        </Heading>
                        <Heading
                            as="h2"
                            size="4xl"
                            color="black"
                            fontWeight="bold"
                        >
                            Efficiency
                        </Heading>
                        <Text
                            color="black"
                            fontSize="2xl"
                        >
                            Elevate your efficiency with our comprehensive productivity suite.
                        </Text>
                        <HStack spacing={4}>
                            <Button
                                size="lg"
                                bg="black"
                                color="white"
                                _hover={{ bg: 'gray.800' }}
                                position="relative"
                                pr="2.5rem"
                                sx={{
                                    '&::after': {
                                        content: '"→"',
                                        position: 'absolute',
                                        right: '1rem',
                                        transition: 'transform 0.2s',
                                    },
                                    '&:hover::after': {
                                        transform: 'translateX(4px)',
                                    },
                                }}
                            >
                                Start now
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                color="black"
                                borderColor="black"
                                _hover={{ bg: 'gray.100' }}
                                position="relative"
                                pr="2.5rem"
                                sx={{
                                    '&::after': {
                                        content: '"→"',
                                        position: 'absolute',
                                        right: '1rem',
                                        transition: 'transform 0.2s',
                                    },
                                    '&:hover::after': {
                                        transform: 'translateX(4px)',
                                    },
                                }}
                            >
                                Contact sales
                            </Button>
                        </HStack>
                    </VStack>
                    <Box
                        display={{ base: "none", md: "block" }}
                        bg="white"
                        borderRadius="lg"
                        boxShadow="xl"
                        p={6}
                    >
                        <Image src="/stripe.png" alt="Calendar" maxW="400px" />
                    </Box>
                </Flex>
            </Box>



        </ChakraProvider>


    );
}