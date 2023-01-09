import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

function Header() {
    
    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-full xl:mx-12 xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24 pb-12 ">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-8 sm:text-7xl">
                                About us
                            </h1>
                            <p className="mt-6 text-2xl leading-10 text-black max-w-5xl ">
                                Every company has its "Cinderella" story about those dark times when it has just started hitting the market. Our story takes its beginning in 2013, at a small office with a few like - minded people and bottomless cups of coffee, that kept us working throughout the night when we have just started building a company with a strong idea. We strived to build a brand that will contribute to the world with useful products that empower people and make their lives easier. We still believe in it today.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Header