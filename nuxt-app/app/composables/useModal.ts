export const useModal = () => {
  const showModal = useState('showModal', () => false)
  const formType = useState('formType', () => true)

  const open = (type = true) => {
    formType.value = type
    showModal.value = true
  }
  const close = () => (showModal.value = false)

  return { showModal, open, close, formType }
}
