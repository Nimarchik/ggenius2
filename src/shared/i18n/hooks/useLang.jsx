import { useTranslation } from "react-i18next";

export const useLang = (namespace = 'common') => {
  return useTranslation(namespace)
}