import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Authentication에 관련된 일을 한다
class AuthService{
	constructor(){
		this.firebaseAuth = getAuth();
		this.googleProvider = new GoogleAuthProvider();
	}

	login(){
		return signInWithPopup(this.firebaseAuth, this.googleProvider);
	}
}

export default AuthService;