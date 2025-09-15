export const useModal = () => {
  const showModal = useState('showModal', () => false)

  const open = () => (showModal.value = true)
  const close = () => (showModal.value = false)

  return { showModal, open, close }
}
