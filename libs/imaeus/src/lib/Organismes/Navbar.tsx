import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

export interface NavLinkProps {
    text?: string,
    to: string,
    className?: string,
    active?: boolean,
}

export type NavlinkDynamic = NavLinkProps & { whenActive?: NavLinkProps }

export interface NavbarProps {
    links: NavLinkProps[] | NavlinkDynamic[],
}

export const Navbar = ({ links }: NavbarProps) => {
    const { pathname } = useLocation();

    const LinksElements = useMemo(() => {
        return links.map(
            (link, idx) => {
            return (
                <Link to={link.to} key={idx} className={"px-2 flex-1 text-center ".concat(link.to.includes(pathname) ? "font-bold " : "")}>
                    <i className={link.className}></i> <span className="hidden md:inline">{ link.text }</span>
                </Link>
            );
            }
        )
    }, [ links, pathname ])

    return <div id="thisLink" className="p-2 border-t-2 border-gray-200 md:border-none flex relative">
        {LinksElements}
    </div>
}

export default Navbar
