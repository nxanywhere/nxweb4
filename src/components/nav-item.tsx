import type { NavItemProps } from '../interfaces'
import Link from 'next/link'


const NavItem = ({ title, desc, href }: NavItemProps) => {
    return (
        <li>
            <Link href={href}>
                <a>
                    <span>{title}</span>
                    <span>{desc}</span>
                </a>
            </Link>
        </li>
    )
}

export default NavItem