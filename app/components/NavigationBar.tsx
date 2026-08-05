import HomeLink from './HomeLink'; 
import '@/app/globals.css'

export default function NavigationBar() {
    return (
            <nav id="nav" className="flex flex-row items-center px-4 py-2">
                <HomeLink/>
            </nav>
    );
}