import MovieDetailsPage from "./movieDetailpage";
import { FavProvider } from "@/app/context/favContext";

function index({params}) {
    return (
        <div>
            <FavProvider><MovieDetailsPage params={params}/></FavProvider>
        </div>

    )
}

export default index;