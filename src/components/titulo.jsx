function Titulo({children}) {
    return ( 
        <div>
            <h1 className="text-blue-500 pb-2 border-b-4 text-4xl border-blue-500 mb-7 font-bold">
                {children}
            </h1>
        </div>
     );
}

export default Titulo;