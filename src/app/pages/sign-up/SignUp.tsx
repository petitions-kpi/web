
const SignUp = () => {
    return (
        <div className="p-10">
            <h1 className="mb-8 font-Bicubik text-4xl">KPI Petition Registration</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <form>
                    <div>
                        <label className="block font-semibold" htmlFor="name">First name</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="name" type="text" name="name"/>
                    </div>

                    <div>
                        <label className="block font-semibold" htmlFor="name">Middle name (optional)</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="name" type="text" name="name"/>
                    </div>

                    <div>
                        <label className="block font-semibold" htmlFor="name">Last name</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="name" type="text" name="name"/>
                    </div>

                    <div className="mt-4">
                        <label className="block font-semibold" htmlFor="email">Email (@lll.kpi.ua or @kpi.ua)</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="email" type="email" name="email"/>
                    </div>

                    <div className="mt-4">
                        <label className="block font-semibold" htmlFor="password">Password</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="password" type="password" name="password"
                            autoComplete="new-password"/>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                        <button type="submit"
                                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-400 md:py-4 md:text-lg md:px-10">Register
                        </button>
                        <a href="/sign-in" className="font-semibold">
                            Already registered?
                        </a>
                    </div>
                </form>

                <aside className="">
                    <div className="bg-gray-100 p-8 rounded">
                        <h2 className="font-bold text-2xl">Instructions</h2>
                        <ul className="list-disc mt-4 list-inside">
                            <li>All users must provide a valid email address (@lll.kpi.ua or @kpi.ua) and password to create an account.</li>
                            <li>Users must not create multiple accounts for the same person.</li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    )
}

export default SignUp;