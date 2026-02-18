import Image from 'next/image';
export default function Newsletter() {
    return (
        <section className=" bg-[#000000]">
            <div className=" py-8 sm:py-24 lg:py-32">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
                    <div className="max-w-xl text-3xl tracking-tight text-white sm:text-4xl lg:col-span-7">
                        <h2 className="inline sm:block lg:inline xl:block font-bold capitalize">Want product news and updates?</h2>
                        <p className="inline sm:block lg:inline xl:block text-lg  py-2">Sign up for our newsletter.</p>
                    </div>
                    <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                        <div className="flex gap-x-4">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto  border-0 bg-white/10 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-[#21E786]/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-[#21E786] sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none  bg-[#21E786] px-3.5  text-sm font-semibold text-[#000000] shadow-sm hover:bg-[#21E786] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21E786]"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-300">
                            We care about your data. Read our{" "}
                            <a href="#" className="font-semibold text-[#21E786]">
                                privacy&nbsp;policy
                            </a>.
                        </p>
                    </form>
                </div>
            </div>

        </section>
    );
}
