import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = e => {
        setValue(e.target.value);
    }
    
    return {
        value,
        onChange
    } ;
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }
    
    // return [value, handleChange];


}
export default useInputState;