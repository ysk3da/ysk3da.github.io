// import { useRouter } from 'next/router';
import getLangDict from './getLangDict';

const useTranslate = (locale:string) => {
  // const { locale } = useRouter();
  return locale === 'ja' ? getLangDict('ja') : getLangDict('en');
};

export default useTranslate;