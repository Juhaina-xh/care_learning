import React from 'react'
import Image from "next/image";
import Link from "next/link";
import './index.css'

function Header() {
  return (
    // <header className='header-sticky sticky top-0 left-0 z-50 w-full'>
    <header className=''>
        <div className='container mx-auto flex justify-between w-full items-center'>
            <div className='logo-col'>
                <Link
                    href="/"
                    className="header-logo"
                >
                    Care Learning
                </Link>
            </div>
            <div className='flex items-center'>
                <div className='level-row flex items-center'>
                    <div className='levelOne flex justify-between items-center'>
                        <Image
                            src="/images/img-header.svg"
                            alt="Carelearning"
                            width={45}  
                            height={45}   
                            className=""
                        />

                        <p className='levelTxt' >Level 4</p>
                    </div>
                    <div className='borderHead absolute top-0 bottom-0'>
                        <Image
                            src="/images/icons/icon-nav-border.svg"
                            alt="Carelearning"
                            width={30}  
                            height={100}   
                            className=""
                        />
                    </div>
                    <div className='medalCol flex items-center'>
                        <p>Pro</p>
                        <span>
                            <Image
                                src="/images/icons/icon-medal.svg"
                                alt="Carelearning"
                                width={18}
                                height={18}
                                className=""
                            />
                        </span>
                    </div>
                </div>
                <div className='navbar'>
                    <ul className='flex'>
                        <li>
                        <Link
                            href=""
                            className=""
                            >
                                <Image
                                src="/images/icons/icon-search.svg"
                                alt="Carelearning"
                                width={45}  
                                height={45}  
                                 />
                            </Link>
                        </li>
                        <li>
                        <Link
                            href=""
                            className=""
                            >
                                <Image
                                src="/images/icons/icon-notification.svg"
                                alt="Carelearning"
                                width={45}  
                                height={45}  
                                 />
                            </Link>
                        </li>
                        <li>
                        <Link
                            href=""
                            className=""
                            >
                                <Image
                                src="/images/icons/icon-settings.svg"
                                alt="Carelearning"
                                width={45}  
                                height={45}  
                                 />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header