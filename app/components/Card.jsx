/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Card({ movie }) {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    return (
        <div>
            <Link className="text-decoration-none" href={"/movies/" + movie.id}>
                <div className="card" style={{ width: '15rem' }}>
                    <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text overflow-y-auto" style={{ height: "150px" }}>{movie.overview}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card