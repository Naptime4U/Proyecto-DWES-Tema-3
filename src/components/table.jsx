function Table({ columns, rows }) {
    return (
        <div className="flex justify-center mt-6 mb-6">
            <table className="w-[85%] items-center border-separate text-slate-800">
                <thead>
                    <tr className="border-2">
                        {columns.map((col, i) => (
                            <th className="border-2 p-2 text-center border-spacing-2 bg-blue-200 w-1/3" key={i}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (

                        row.values.map((col, j) => (
                            <tr className="border-2">
                                {EsCero(j, row)}
                                <td className="border-2 border- p-2 w-2/3" key={`${i}-${j}`}>{col}</td>
                            </tr>
                        ))

                    ))}
                </tbody>
            </table>
        </div>
    );
}
function EsCero(i, row) {
    if (i === 0) {
        return (
            <th className="border-2 p-2 text-center border-spacing-2 bg-blue-200 w-1/3" rowSpan={row.values.length}>{row.header}</th>
        );
    } else {
        return null;
    }
}
export default Table;