import { Sidebar } from "../components/sidebar"
import { Footer } from "../layout/Footer"
import { Header } from "../layout/Header"

export const HomePage = () => {
    return(
        <>
            <Sidebar />
            <Header />
            
                <h1>CashTrack</h1>
            <Footer />
        </>
    )
}