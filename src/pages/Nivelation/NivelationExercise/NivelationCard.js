import Input from "../../../components/Input/Input"
import Text from "../../../components/Text/Text"

const NivelationCard = ({ title, onChange, value }) => {
    return (
        <div>
            <Text text={`Cuantos ${title} podes hacer ?`}/>
            <Input type='number' value={value} onChange={onChange}/>
        </div>
    )
}

export default NivelationCard
