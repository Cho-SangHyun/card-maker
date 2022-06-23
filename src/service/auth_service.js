import { 
	getAuth, 
	signInWithPopup, 
	GoogleAuthProvider, 
	GithubAuthProvider,
	onAuthStateChanged,
	signOut } from "firebase/auth";
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

	logout(){
		signOut(this.firebaseAuth);
	}

	onAuthChange(onUserChanged){
		onAuthStateChanged(this.firebaseAuth, user => {
			onUserChanged(user);
		});
	}
}

export default AuthService;