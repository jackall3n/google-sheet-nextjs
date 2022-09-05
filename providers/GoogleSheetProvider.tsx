import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";

export const GoogleSheetContext = createContext<any>(undefined as never);

export const useGoogleSheet = () => useContext(GoogleSheetContext);

export function GoogleSheetProvider({children, live = false}: PropsWithChildren<{ live?: boolean }>) {
    const [data, setData] = useState({});

    async function get() {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwRQrt0G6s0eQPvWRSwHIiDWhn1mLk0onuAn68gYpQHxqxHAsAryFs3gQEAMEAN0w26/exec');
        const json = await response.json();

        console.log('Google Sheet', json);

        setData(json);
    }

    useEffect(() => {
        get().then()
    }, []);

    useEffect(() => {
        if (!live) {
            return;
        }

        const interval = setInterval(get, 5000);

        return () => clearInterval(interval)
    }, [live])

    return (
        <GoogleSheetContext.Provider value={data}>
            {children}
        </GoogleSheetContext.Provider>
    )
}

