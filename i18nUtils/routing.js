import languageDetector from './languageDetector'
import { useRouter } from 'next/router'

export const getI18nRoute = (route) => {
    return '/' + languageDetector.detect().replace('[locale]','') + route
}

export const i18nRouterPush = (router, route) => {
    router.push(getI18nRoute(route), undefined, {locale: false})
}