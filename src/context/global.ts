import { createContext } from "react";

const GlobalContext = createContext<{
    isAuth: boolean;
    signIn: () => Promise<void>;
    signOut: () => void;
}>({
    isAuth: false,
    signIn: async () => {
        return
    },
    signOut: () => {
        return
    },
});

export default GlobalContext;