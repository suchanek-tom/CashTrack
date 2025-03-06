import { Box, VStack } from "@chakra-ui/react";
import { FiHome, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <Box
            className="fixed left-0 top-0 h-full bg-gray-800 text-white p-4 shadow-lg"
            width="60px"
        >
            <VStack align="flex flex-col gap-4 items-center">
                <Link to="/">
                    <FiHome />
                </Link>
                <Link to="/settings">
                    <FiSettings />
                </Link>
            </VStack>
        </Box>
    );
};