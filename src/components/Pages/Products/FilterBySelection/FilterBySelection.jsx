const FilterBySelection = ({setOrder}) => {
    return (
        <select className="px-4 pt-1 pb-2 text-white bg-black rounded-lg justify-self-start" onChange={(e) => setOrder(e.target.value)}>
            <option value="">Ordenar por</option>
            <option value="priceAsc">Precio ascendente</option>
            <option value="priceDesc">Precio descendente</option>
            <option value="nameAsc">Nombre A - Z</option>
            <option value="nameDesc">Nombre Z - A</option>
        </select>
    )
}
export default FilterBySelection