import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import auth from "../services/auth";
import { CircularProgress } from "@mui/material";


export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            // console.log({user})

            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                    displayName, email, uid, photoURL
                });
                setIsLoading(false);
                history.push('/jobsfeed');
                return;
            }

            setIsLoading(false);
            history.push('/home')
        });

        //clean function
        return () => {
            unsubscribed()
        }
    }, [history])


    return (
        <AuthContext.Provider value={{user}}>
            {isLoading ? <CircularProgress/> : children}
        </AuthContext.Provider>
    )
}