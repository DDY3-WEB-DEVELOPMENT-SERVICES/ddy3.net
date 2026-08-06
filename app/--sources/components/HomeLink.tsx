import Emblem from './Emblem'

export default function HomeLink() {
    return (
        <>
            <a href='/'>
                <Emblem/>   
            </a>
            <a href='/'>
                <h1 id="forefronter-txt-navbar" className="font-technical text-black text-xl">Forefronter</h1>
            </a>
        </>
    );
}