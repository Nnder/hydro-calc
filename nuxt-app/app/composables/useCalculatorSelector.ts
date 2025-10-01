export const useCalculatorSelector = () => {
  const calculatorData = useState('selectedData', () => ({
    name: '',
    selected: [],
  }))

  const newState = (state) => (calculatorData.value = state)
  const addData = (params) => {
    if(params.name === calculatorData.value.name){
        const current = calculatorData.value.selected
        const result = current.filter((val)=> val !== params.selected)
        if(current.length === result.length){
            calculatorData.value.selected.push(params.selected)
        } else {
            calculatorData.value.selected = result
        }
    } else {
        calculatorData.value = {name: params.name, selected: [params.selected]}
    }

    console.log(calculatorData.value)
  }

  return { calculatorData, newState, addData }
}