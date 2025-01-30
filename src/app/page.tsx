import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Metadata } from "next";
import HomeOnePage from "./[locale]/homes/home-1/home-1";




export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  // const t = useTranslations("Homepage");
  
  return (
    <>
    {/* <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div> */}
      <HomeOnePage />
    </>
  );
}