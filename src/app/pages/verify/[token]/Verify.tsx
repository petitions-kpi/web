"use client"
import { handleVerification } from "@/app/lib/api/auth/AuthAPI";

const Verify = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 style={{ fontSize: '2rem', fontFamily: 'Bicubik', textAlign: 'center', marginBottom: '100px' }}>Підтвердіть свою пошту</h1>
            <button onClick={handleVerification} className="bg-[#000000] h-[70px] w-[500px] text-white text-2xl font-Bicubik cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-20 py-2.5 rounded-[5px] border-[none] hover:bg-[#7d7d7d]">
                Підтвердження
            </button>
        </div>
    )
}

export default Verify;

