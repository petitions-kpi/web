import React from 'react';
import Link from 'next/link';

const AllPetitions : React.FC = () => {
    return (
        <Link href="/all-petition">
            <button className="bg-[#7d7d7d] h-[75px] absolute w-[426px] left-[930px] top-[308px] text-white text-3xl font-Raleway cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-20 py-2.5 rounded-[50px] border-[none] hover:bg-[#000000]">Всі петиції</button>
        </Link>
    );
};

export default AllPetitions;