import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import {locales} from "./config";

export default getRequestConfig(async ({locale}) => {





    



















    // 
    //                                 WITH REQUESTLOCALE.
    // 
    // in line below wthout await it gives a promise which contains: 
    /*
        [Symbol(kResourceStore)]: {
            url: { pathname: '/en', search: '' },
        // This '/en' is dinamically
    */

    // i need to be THIS VARIABLE AS String with so much more it is used below in import statement 
    
    /* 

    //                                      THIS IS CODE. 

    ---------->>>>>>>>>> const resolvedLocales = await requestLocale

    console.log(locales)
    console.log(locales.includes("en"))
    console.log(resolvedLocales)

    // with await it gives undefined
    // 
    // 
    // change locale to requestLocale.....................
    */


























    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`./messages/${locale}.json`)).default,
    }
})