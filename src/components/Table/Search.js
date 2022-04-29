import Input from '../../components/Input/Input'
import Button from '../Button/Button'
const Search = ({ search, onChange, onPressSearch, extraSearch }) => {
    return (
        <div className="d-flex align-items-center col-12 justify-content-between">
            <div className="d-flex align-items-center col-4">
                {extraSearch}
            </div>
            <div className="d-flex align-items-center col-8 justify-content-end">
                <div className='col-sm-9 col-md-4'>
                    <Input value={search} onChange={(e) => onChange(e.target.value)} />
                </div>
                <div>
                    <Button text='buscar' onClick={onPressSearch} />
                </div>
            </div>
        </div>
    )
}

export default Search
