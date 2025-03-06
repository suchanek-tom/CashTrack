import { Box } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export const HomePage = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box flex="1" ml="60px">
                <Header />
                <Box p={4}>
                    <h1>CashTrack</h1>
                </Box>
                <Footer />
            </Box>
        </Box>
    );
};