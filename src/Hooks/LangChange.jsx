import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'

function useLangChange(props) {
  const { lang } = useParams()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])


  return t(props)
}

export default useLangChange
