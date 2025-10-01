export const useCalculatorSelector = () => {
  const calculatorData = useState('selectedData', () => ({
    name: '',
    selected: [],
  }))

  const newState = (state) => (calculatorData.value = state)
  const addData = (params) => {
    if(params.name === calculatorData.value.name){
        calculatorData.value.selected.push(params.selected)
    } else {
        calculatorData.value = {name: params.name, selected: [params.selected]}
    }

    console.log(calculatorData.value)
  }

  return { calculatorData, newState, addData }
}