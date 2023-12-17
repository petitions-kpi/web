import React from 'react';
import '../styles/main.css';
import Link from 'next/link';
import {getToken} from "@/app/lib/api/auth/LocalStorageService";


const Button : React.FC = () => {
    const hasToken = getToken('accessToken');
    const buttonText = hasToken ? 'Створити' : 'Вхід/Реєстрація';

    console.log(hasToken);
    return (
        <Link href={!hasToken ? '/sign-in' : '/petition-create'}>
            <button
                className="bg-[#000000] h-[70px] absolute w-[426px] left-[1015px] top-[118px] text-white text-2xl font-Bicubik cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-20 py-2.5 rounded-[5px] border-[none] hover:bg-[#7d7d7d]"
            >
                {buttonText}
            </button>
        </Link>
    );
};

export default Button;
