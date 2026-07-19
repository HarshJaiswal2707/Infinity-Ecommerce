import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [account, setAccount] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("account");

        if (user) {
            setAccount(JSON.parse(user));
        }
    }, []);

    return (
        <DataContext.Provider
            value={{
                account,
                setAccount
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;