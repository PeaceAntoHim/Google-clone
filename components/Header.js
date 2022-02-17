import Avatar from './avatar';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import HeaderOptions from './HeaderOptions';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term  = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                    height={40}
                    width={120}
                    className="cursor-pointer sm:min-h-full"
                    onClick={() => router.push("/")}
                    src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input 
                        type="text"
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none" 
                    />
                    <XIcon 
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform  hover:scale-125" 
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon 
                        className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
                    />
                    <SearchIcon className="h-6 text-blue-500 hidden:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar 
                    className="ml-auto"
                    url="https://github.com/PeaceAntoHim/Frans-Portfolio-3.0/blob/main/img/FransG.png?raw=true"
                />
            </div>

            {/* Header Options */}
            <HeaderOptions />
        </header>
        
    );
}

export default Header;
