
'use client';
import Link from "next/link";
import { menu, slug } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const classLink = "block bg-blue-100 p-2 mb-1 rounded-2xl"
function MenuPrincial() {
    const [abierto, setAbierto] = useState(true);
    return (
        <>
            {abierto ?
                <X
                    onClick={() => setAbierto(false)}
                    className="fixed top-5 right-5 bg-blue-100 size-8 rounded-md" />
                :
                <Menu
                    onClick={() => setAbierto(true)}
                    className="fixed top-5 right-5 bg-blue-100 size-8 rounded-md" />
            }
            {abierto &&
                <div className="bg-blue-200 rounded-2xl m-4 p-2">
                    <Link className={`${classLink}`} href={slug(menu[0])}>{menu[0]}</Link>
                    <details>
                        <summary className="bg-blue-100 p-2 m-1 rounded-2xl">
                            <Link href={slug(menu[1])}>{menu[1]}</Link>
                        </summary>
                        <details>
                            <summary className="bg-blue-100 p-2 mb-1 rounded-2xl ml-2">
                                <Link href={slug(menu[2])}>{menu[2]}</Link>
                            </summary>
                            <Link className={`${classLink} ml-4`} href={slug(menu[3])}>{menu[3]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[4])}>{menu[4]}</Link>
                        </details>
                        <details>
                            <summary className="bg-blue-100 p-2 mb-1 rounded-2xl ml-2">
                                <Link href={slug(menu[5])}>{menu[5]}</Link>
                            </summary>
                            <Link className={`${classLink} ml-4`} href={slug(menu[6])}>{menu[6]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[7])}>{menu[7]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[8])}>{menu[8]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[9])}>{menu[9]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[10])}>{menu[10]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[11])}>{menu[11]}</Link>
                            <Link className={`${classLink} ml-4`} href={slug(menu[12])}>{menu[12]}</Link>
                        </details>
                        <Link className={`${classLink} ml-2`} href={slug(menu[13])}>{menu[13]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[14])}>{menu[14]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[15])}>{menu[15]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[16])}>{menu[16]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[17])}>{menu[17]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[18])}>{menu[18]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[19])}>{menu[19]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[20])}>{menu[20]}</Link>
                    </details>
                    <details>
                        <summary className="bg-blue-100 p-2 mb-1 rounded-2xl">
                            <Link href={slug(menu[21])}>{menu[21]}</Link>
                        </summary>
                        <Link className={`${classLink} ml-2`} href={slug(menu[22])}>{menu[22]}</Link>
                        <Link className={`${classLink} ml-2`} href={slug(menu[23])}>{menu[23]}</Link>
                    </details>

                    <Link className={`${classLink}`} href={slug(menu[24])}>{menu[24]}</Link>
                </div>
            }
        </>
    );
}

export default MenuPrincial;