import { 
    getAuth, 
    // createUserWithEmailAndPassword, 
    // signInWithPopup, 
    // FacebookAuthProvider 
} from "firebase/auth";

const auth = getAuth();

// export function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
// }

export default auth;