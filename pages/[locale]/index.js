import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/i18nUtils/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function Home() {

  const { t } = useTranslation('common');

  return (
      
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h1>The following button will work when I run "npm run dev", but not when I run "npm run export" then "http-server ./out"</h1>
      <div>
        <button 
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => breakStuff()}
        >
          Break Stuff!
        </button>
      </div>
    </div>
  )
}
