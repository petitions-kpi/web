import React from 'react';
import '../styles/main.css';
import Link from 'next/link';

const Button : React.FC = () => {
    return (
        <Link href="/sign-in">
            <button className="bg-[#131c22ae] h-[70px] absolute w-[426px] left-[1015px] top-[118px] text-white text-2xl font-normal cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-20 py-2.5 rounded-[5px] border-[none] hover:bg-[#000000]">Вхід/Реєстрація</button>
        </Link>
    );
};

export default Button;
