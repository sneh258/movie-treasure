import SearchPage from "./searchPage";
import { FavProvider } from "@/app/context/favContext";

function index({searchParams}) {
    return (
        <div>
            <FavProvider><SearchPage searchParams={searchParams}/></FavProvider>
        </div>

    )
}

export default index;