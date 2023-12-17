"use client"

import React, {useState} from "react";
import {Register} from "@/app/lib/api/auth/AuthAPI";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const registerResult = await Register(email, password, firstName, lastName);
        if (registerResult instanceof Error) {
            alert("Something went wrong. Try again, please");
        } else {
            window.location.href = '/verify';
        }
    }

    return (
        <div className="p-10">
            <h1 className="mb-8 font-Bicubik text-4xl">Реєстрація до КПІ Петиції</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <form onSubmit={handleSignUp}>
                    <div>
                        <label className="block font-semibold" htmlFor="name">Ім`я</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="name" type="text" name="name"
                            value={firstName}
                            required
                            onChange={handleFirstName}/>
                    </div>

                    <div>
                        <label className="block font-semibold" htmlFor="name">По батькові</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="name" type="text" name="name"/>
                    </div>

                    <div>
                        <label className="block font-semibold" htmlFor="name">Прізвище</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="name" type="text" name="name"
                            required
                            value={lastName}
                            onChange={handleLastName}/>
                    </div>

                    <div className="mt-4">
                        <label className="block font-semibold" htmlFor="email">Електронна адреса (@lll.kpi.ua або @kpi.ua)</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="email" type="email" name="email"
                            required
                            value={email}
                            onChange={handleEmailChange}/>
                    </div>

                    <div className="mt-4">
                        <label className="block font-semibold" htmlFor="password">Пароль</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="password" type="password" name="password"
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={handlePasswordChange}/>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                        <button type="submit"
                                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-400 md:py-4 md:text-lg md:px-10">Реєстрація
                        </button>
                        <a href="/sign-in" className="font-semibold">
                            Вже зареєстровані?
                        </a>
                    </div>
                </form>

                <aside className="">
                    <div className="bg-gray-100 p-8 rounded">
                        <h2 className="font-bold text-2xl">Інструкція</h2>
                        <ul className="list-disc mt-4 list-inside">
                            <li>Усі користувачі мають надати валідну електронну адресу (@lll.kpi.ua або @kpi.ua) і пароль, щоб створити аккаунт.</li>
                            <li>Користувач не може зробити декілька акаунтів на одну електронну адресу</li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    )
}

export default SignUp;