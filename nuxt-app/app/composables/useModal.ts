export const useModal = () => {
  const showModal = useState('showModal', () => false)
  const formType = useState('formType', () => true)
  const { setType } = useCalculatorSelector()

  const open = (isDefaultType = true, type = '') => {
    if (type) setType(type)
    formType.value = isDefaultType
    showModal.value = true
  }
  const close = () => (showModal.value = false)

  return { showModal, open, close, formType }
}
