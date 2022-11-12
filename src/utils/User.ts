import { removeUser, removeToken, removeTasks, getToken, setToken, setUser } from './useGoalspire';

export function GetFromServer(): void {
	// TODO: Log in to Goalspire with Axios -> get user info
	/*
  getToken();
  setUser();
  */
}

export function IsLoggedIn(): boolean {
	// TODO: Test if token is valid

	return false;
}

export function LogIn(email: string, password: string): void {
	// TODO: Log in to Goalspire with Axios -> get token and user info
	/*
  setToken();
  setUser();
  */
}

export function LogOut(): void {
	removeUser();
	removeToken();
	removeTasks();
}

export function SignUp(): void {
	// TODO: Sign in to Goalspire with Axios -> get token and user info
	/*
  setToken();
  setUser();
  */
}
