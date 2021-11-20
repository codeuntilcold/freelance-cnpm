import { getAuth } from "firebase/auth";
import { app } from "./db";


const auth = getAuth(app);

export default auth;
