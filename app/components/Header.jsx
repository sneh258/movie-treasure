"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GoSearch } from 'react-icons/go';
import {MdFavorite} from 'react-icons/md'

function Header() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();
    const [typingTimer, setTypingTimer] = useState(null);


    const handleSearch = () => {
        if (searchText) {
            router.push(`/movies/search?query=${searchText}`);
        }
    };


    useEffect(() => {
        if (typingTimer) {
            clearTimeout(typingTimer);
        }
        if (searchText) {
            const newTimer = setTimeout(handleSearch, 2000);
            setTypingTimer(newTimer);
        }
    }, [searchText]);

    return (
        <div className='h-[55px] flex justify-between bg-black text-white font-times'>
            <Link className='h-fit w-[180px] m-4' href='/'>Movie-Treasure</Link>
            <Link href="/movies/favourite" className='flex justify-center gap-3 mt-2'>
                <div className='mt-2'>My Favorites</div>
                <div className='mt-3'><MdFavorite/></div>
            </Link>
            <div className='h-fit w-fit flex gap-3 mt-2 mr-3'>
                <div className='mt-2'><GoSearch size={24} /></div>
                <form role="search">
                    <input
                        type="text"
                        onChange={e => setSearchText(e.target.value)}
                        placeholder="Search..."
                        className="text-gray-500 focus:text-black border border-gray-300 focus:border-black h-[30px] w-[180px] pl-3 mt-1 rounded-md"
                    />
                </form>
            </div>
        </div>
    );
}

export default Header;
