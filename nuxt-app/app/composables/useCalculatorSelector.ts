export const useCalculatorSelector = () => {
  const calculatorData = useState('selectedData', () => ({
    name: '',
    selected: [],
    type: '',
  }))

  const newData = state => (calculatorData.value = state)
  const addData = params => {
    const { name, selected } = params
    const { name: currentName, selected: currentSelected } = calculatorData.value

    if (name === currentName) {
      const exists = currentSelected.includes(selected)
      calculatorData.value = {
        name,
        selected: exists ? currentSelected.filter(v => v !== selected) : [...currentSelected, selected],
      }
    } else {
      calculatorData.value = { name, selected: [selected] }
    }
  }

  const clearData = () =>
    (calculatorData.value = {
      name: '',
      selected: [],
      type: '',
    })

  const setType = type => {
    calculatorData.value.type = type
  }

  return { calculatorData, newData, addData, clearData, setType }
}
