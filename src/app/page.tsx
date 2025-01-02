import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";
// import { useTranslations } from "next-intl";

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
