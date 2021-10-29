import { useTranslation } from 'react-i18next'
import NavItem from "./nav-item"
import navs from '../navs/main.json'


const NavItems = () => {

    const { t } = useTranslation()

    return (
        <>
            {navs.map((v, i) => (
                <NavItem
                    key={i}
                    title={t(`nav.${v.name}.title`)}
                    desc={t(`nav.${v.name}.desc`)}
                    href={v.url}
                />
            ))}
        </>
    )
}

export default NavItems