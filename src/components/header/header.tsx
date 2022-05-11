// import { Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import { Translation, useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import styles from 'styles/Home.module.scss'
export default function Header(props) {
    const languageTitle = [
        {
            language: 'en',
            title: 'English',
        },
        {
            language: 'zh',
            title: '中文',
        }
    ]
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    let { i18n } = useTranslation()
    const { t } = useTranslation()
    return (
        <header className={styles.header}>
            <div className={styles.headerPc}>
                <div>
                    <Link href="/">
                        <div>
                            <img src={props.logo} alt="Wave" />
                            {/* <span>Alpha</span> */}
                        </div>
                    </Link>
                    <p>
                        {
                            props.date.map((item, index) => {
                                return (
                                    <Link href={item.src} key={index}>
                                        {t(item.nav)}
                                    </Link>
                                )
                            })
                        }
                    </p>
                    <dl className={styles.language} id='language'>
                        <dt>切换语言</dt>
                        <dd>
                            {
                                languageTitle.map((item, index) => {
                                    return (
                                        <a key={index} onClick={() => i18n.changeLanguage(item.language)}>{item.title}</a>
                                    )
                                })
                            }
                        </dd>
                    </dl>
                </div>
            </div>
            <div className={styles.mobileHeader}>
                <Link href="/">
                    <a>
                        <img src={props.logo} alt="mobileLogo" />
                        {/* <span>Alpha</span> */}
                    </a>
                </Link>
                <dl className={styles.language} id='language'>
                    <dt>切换语言</dt>
                    <dd>
                        {
                            languageTitle.map((item, index) => {
                                return (
                                    <a key={index} onClick={() => i18n.changeLanguage(item.language)}>{item.title}</a>
                                )
                            })
                        }
                    </dd>
                </dl>
                {mobileSidebarOpen ? (
                    <button type="button" aria-controls="mobile-menu" aria-expanded="false" className="-z-50 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>{' '}
                    </button>
                ) : (
                        <button type="button" aria-controls="mobile-menu" aria-expanded="false">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                onClick={() => setMobileSidebarOpen(true)}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                {/* <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /> */}
                            </svg>
                        </button>
                    )}
            </div>
            <Transition.Root show={mobileSidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed top-20 left-0 z-40 flex h-full w-full bg-grayf9 lg:hidden"
                    open={mobileSidebarOpen}
                    onClose={setMobileSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="overlay" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div id="mobile-sidebar" className={styles.mobileSidebar}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed top-8 right-16 -mr-14 bg-white pt-2">
                                    <button
                                        className="ml-2 flex items-center justify-center bg-black bg-opacity-0 focus:outline-none dark:bg-opacity-0"
                                        onClick={() => setMobileSidebarOpen(false)}
                                    >
                                        {/* <XIcon className="h-10 w-10 bg-purple-400" /> */}
                                    </button>
                                </div>
                            </Transition.Child>
                            <nav>
                                <div className="space-y-2 px-2" onClick={() => setMobileSidebarOpen(false)}>
                                    <SiteNavMenu date={props.date} />
                                </div>
                            </nav>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0" aria-hidden="true">
                    </div>
                </Dialog>
            </Transition.Root>
        </header>
    )
}
const SiteNavMenu = props => {
    const { t } = useTranslation()
    return (
        <p className={styles.menuHeader}>
            {
                props.date.map((item, index) => {
                    return (
                        <Link href={item.src} key={index}>{t(item.nav)}</Link>
                    )
                })
            }
        </p>
    )
}
