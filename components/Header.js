import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { XIcon, MicrophoneIcon } from '@heroicons/react/solid';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    return (
        <header>
            <Image 
                height={40}
                width={120}
                className="cursor-pointer"
                onClick={() => router.push("/")}
                src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            />
            <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
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
            </form>
        </header>
        
    );
}

export default Header;
