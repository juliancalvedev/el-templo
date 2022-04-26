import React from 'react'
import Paginator from './Paginator';
import Search from './Search';

// columns [ { title, field } ]
const Table = ({ columns = [], data = [], paginator, onSetPage, offset, total, search, showSearch, onChangeSearch, onPressSearch }) => {


    return (
        <div>
            {showSearch && <Search value={search} onChange={onChangeSearch} onPressSearch={onPressSearch}/>}
            <div  style={{ overflowX: 'scroll' }}>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            {columns.map((header, i) => (<th key={i}>
                                {header?.title}
                            </th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(d => <tr>
                            {columns.map(h => <td>
                                {d[h.field]}
                            </td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
            {paginator && <Paginator onSetPage={onSetPage} offset={offset} total={total} />}
        </div>
    )
}

export default Table;