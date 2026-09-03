export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

export const isWeb3FormsReady = () => WEB3FORMS_ACCESS_KEY.trim().length > 0

export const prepareWeb3FormsData = (form, { subject, source }) => {
  const formData = new FormData(form)

  formData.append('access_key', WEB3FORMS_ACCESS_KEY)
  formData.append('subject', subject)
  formData.append('from_name', 'Amazonis Website')
  formData.append('source', source)

  return formData
}
