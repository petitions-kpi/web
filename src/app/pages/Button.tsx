import React from 'react';
import Link from 'next/link';

const Button : React.FC = () => {
    return (
        <Link href="/sign-in">
            <button className="bg-[#000000] h-[70px] absolute w-[426px] left-[1015px] top-[118px] text-white text-2xl font-Bicubik cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-20 py-2.5 rounded-[5px] border-[none] hover:bg-[#7d7d7d]">Вхід/Реєстрація</button>
        </Link>
    );
};

export default Button;
