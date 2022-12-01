const Package = () => {
    return (
        //pricing in tailwind css

        <div className="bg-gray-100">

            <div className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Home Maintenance Packages
                </h2>
                {/* //p tag */}
                <p className="text-gray-600 text-center mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center -mx-3">
                    <div className="w-full max-w-sm mx-3 mb-6 md:mb-0">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gray-100 p-5 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800">Basic</h3>
                                <div className="flex items-center justify-center mt-4">
                                    <span className="text-4xl font-semibold text-gray-800">$</span>
                                    <span className="text-6xl font-bold text-gray-800">9</span>
                                    <span className="text-2xl font-semibold text-gray-800">/mo</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <ul>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Unlimited projects</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Unlimited users</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Basic support</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Free updates</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 p-5 text-center">
                                <a href="/packages/first" className="inline-block bg-gray-800 text-gray-900 text-sm px-6 py-3 rounded-lg hover:bg-gray-700">Get started</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-3 mb-6 md:mb-0">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gray-100 p-5 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800">Premium</h3>
                                <div className="flex items-center justify-center mt-4">
                                    <span className="text-4xl font-semibold text-gray-800">$</span>
                                    <span className="text-6xl font-bold text-gray-800">19</span>
                                    <span className="text-2xl font-semibold text-gray-800">/mo</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <ul>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Unlimited projects</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Unlimited users</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Basic support</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Free updates</span>
                                    </li>
                                </ul>

                            </div>
                            <div className="bg-gray-100 p-5 text-center">
                                <a href="/packages/economy" className="inline-block bg-gray-800 text-gray-900 text-sm px-6 py-3 rounded-lg hover:bg-gray-700">Get started</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-3 mb-6 md:mb-0">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gray-100 p-5 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800">Enterprise</h3>
                                <div className="flex items-center justify-center mt-4">
                                    <span className="text-4xl font-semibold text-gray-800">$</span>
                                    <span className="text-6xl font-bold text-gray-800">29</span>
                                    <span className="text-2xl font-semibold text-gray-800">/mo</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <ul>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Unlimited projects</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Unlimited users</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Basic support</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        
                                        <span className="text-gray-600 ml-2">Free updates</span>
                                    </li>
                                </ul>

                            </div>
                            <div className="bg-gray-100 p-5 text-center">
                                <a href="/packages/business" className="inline-block bg-gray-800 text-gray-900 text-sm px-6 py-3 rounded-lg hover:bg-gray-700">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Package