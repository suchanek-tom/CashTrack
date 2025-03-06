import { useState } from "react";
import { Box, VStack, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            className="fixed left-0 top-0 h-full bg-gray-800 text-white p-4 shadow-lg"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            width={isOpen ? "200px" : "60px"}
            transition="width 0.3s ease-in-out"
        >
            <VStack align="stretch">
                <IconButton aria-label="Menu" variant="ghost" colorScheme="whiteAlpha" />
                <Link to="/">
                    <IconButton aria-label="Home" variant="ghost" colorScheme="whiteAlpha" />
                    {isOpen && <span className="ml-2">Home</span>}
                </Link>
                <Link to="/settings">
                    <IconButton aria-label="Settings" variant="ghost" colorScheme="whiteAlpha" />
                    {isOpen && <span className="ml-2">Settings</span>}
                </Link>
            </VStack>
        </Box>
    );
};

export const HomePage = () => {
    return (
        <>
            <Sidebar />
            <Box ml={{ base: "60px", md: "200px" }} p={4}>
                <h1>CashTrack</h1>
            </Box>
        </>
    );
};
