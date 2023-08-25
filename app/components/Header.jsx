"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GoSearch } from 'react-icons/go';

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
        <div className='border-2 h-[50px] flex justify-between bg-slate-200'>
            <Link className='h-fit w-[180px] m-2' href='/'>Movie-Treasure</Link>
            <Link href="/movies/favorites">My Favorites</Link>
            <div className='h-fit w-fit flex gap-3 mt-2 mr-3'>
                <div className='pt-1'><GoSearch size={24}/></div>
                <form role="search">
                    <input
                        type="text"
                        onChange={e => setSearchText(e.target.value)}
                        placeholder="Search..."
                        className='mr-2 w-[200px] border-none outline-none h-[30px] pl-2'
                    />
                </form>
            </div>
        </div>
    );
}

export default Header;
