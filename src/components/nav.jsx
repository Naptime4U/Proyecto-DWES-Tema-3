import Link from "next/link";
import { menu, slug } from "@/lib/utils";

function Nav({pos}) {
    return (
        <div className="p-4 text-right">
            {pos > 0 &&
                <Link href={slug(menu[pos - 1])} className="text-blue-500 text-xl mr-4 bg-blue-300 rounded p-1">Anterior</Link>
            }
            {pos < menu.length - 1 &&
                <Link href={slug(menu[pos + 1])} className="text-blue-500 text-xl bg-blue-300 rounded p-1">Siguiente</Link>
            }

        </div>
    );
}

export default Nav;