import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Pages } from '../constants';

function Navbar() {
    return (
        <div className="flex items-center gap-4">
            <div className="p-2 rounded-full border border-gray-300 hover:bg-white-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
            </div>
            <div className="p-2 rounded-full border border-gray-300 hover:bg-slate-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
            </div>
            <div className="p-2 rounded-full border border-gray-300 hover:bg-slate-700 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
            </div>
            <ul>
                {Pages.map((page) => (
                    <li className="inline-block px-4 py-2 hover:bg-slate-700 transition-colors cursor-pointer">
                        <a href={page.link}>{page.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar