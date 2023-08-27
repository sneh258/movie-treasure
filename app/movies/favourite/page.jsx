import Myfav from "./favPage";
import { FavProvider } from "@/app/context/favContext";

function index() {
    return (
        <div>
            <FavProvider><Myfav /></FavProvider>
        </div>
        
    )
}

export default index