const FilterBySelection = ({setOrder}) => {
    return (
        <select className="text-white bg-black justify-self-start px-4 pt-1 pb-2 rounded-lg" onChange={(e) => setOrder(e.target.value)}>
            <option value="">Ordenar por</option>
            <option value="priceAsc">Precio ascendente</option>
            <option value="priceDesc">Precio descendente</option>
            <option value="nameAsc">Nombre A - Z</option>
            <option value="nameDesc">Nombre Z - A</option>
        </select>
    )
}
export default FilterBySelection