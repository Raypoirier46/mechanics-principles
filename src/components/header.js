import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './header.module.scss'
import Logo from '../images/main-logo.png'

const Header = () => {
//     const data = useStaticQuery(graphql`
//     query {
//         site {
//             siteMetadata {
//             title
//             }
//   }
// }
//     `)

    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <img
                            className={headerStyles.logo}
                            src={Logo}
                            alt="the mechanic's principles logo" />
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            activeClassName={headerStyles.activeNavItem} 
                            to='/'>
                                Home
                            </Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to='/blog'>
                                Blog
                            </Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to='/about'>
                                About
                            </Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to='/contact'>
                                Contact
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;