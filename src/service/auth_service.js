import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { firebaseApp } from './firebase';

// Authentication에 관련된 일을 한다
class AuthService{
	constructor(){
		this.firebaseAuth = getAuth();
		this.googleProvider = new GoogleAuthProvider();
		this.githubProvider = new GithubAuthProvider();
	}

	login(providerName){
		if(providerName  === "Google")
			return signInWithPopup(this.firebaseAuth, this.googleProvider);
		else if(providerName === "Github")
			return signInWithPopup(this.firebaseAuth, this.githubProvider);
	}
}

export default AuthService;