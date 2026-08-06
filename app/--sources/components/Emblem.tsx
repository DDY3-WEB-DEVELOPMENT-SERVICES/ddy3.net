import Image from 'next/image';

export default function Emblem() {
    return (
        <div className="flex items-center space-x-1">
            <Image src="/assets/icons/ddy3-emblem.png" alt="DDY3 Emblem" width={64} height={64}/>
        </div>
    );
}