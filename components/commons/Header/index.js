

import Logo from '../Logo'
import Menu from './Menu'

export default function Header() {
    return <div className="flex flex-row justify-between">
        <Logo />
        <Menu />
    </div>
}