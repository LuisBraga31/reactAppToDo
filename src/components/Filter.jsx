
const Filter = ({filter, setFilter, filterCategory, setFilterCategory, setSort}) => {
  return (
    <div className="filter">
        <h2> Filtrar: </h2>
        <div className="filter-option">
            <div>
                <p> Status </p>
                <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                    <option value="All"> Todos </option>
                    <option value="Completed"> Completas </option>
                    <option value="Incomplete"> Incompletas </option>
                </select>
            </div>

            <div>
                <p> Categoria </p>
                <select value={filterCategory} onChange={(event) => setFilterCategory(event.target.value)}>
                    <option value="All"> Todos </option>
                    <option value="Trabalho"> Trabalho </option>
                    <option value="Pessoal"> Pessoal </option>
                    <option value="Estudos"> Estudos </option>
                </select>
            </div>
            

            <div>
                <p> Ordem alfabética </p>
                <button onClick={() => setSort("Asc")}> Asc </button>
                <button onClick={() => setSort("Desc")}> Desc </button>
            </div>
        </div>

    </div>
  )
}

export default Filter