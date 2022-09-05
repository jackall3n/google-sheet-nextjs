import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {useGoogleSheet} from "./GoogleSheetProvider";

export const TranslationsContext = createContext<any>(undefined as never);

export const useTranslations = () => useContext(TranslationsContext);
export const useText = () => {
    const {translations, locale} = useTranslations();

    return (id: string) => {
        const value = translations[id];

        if (!value) {
            return '-'
        }

        return value[locale] ?? value.en;
    }
}

export function TranslationsProvider({children, locale}: PropsWithChildren<{ locale: string }>) {
    const {translations = {}} = useGoogleSheet()

    return (
        <TranslationsContext.Provider value={{translations, locale}}>
            {children}
        </TranslationsContext.Provider>
    )
}

export function Text({id}: { id: string }) {
    const t = useText();

    return t(id);
}