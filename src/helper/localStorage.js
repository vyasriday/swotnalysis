export function isLoggedIn() {
	const token = localStorage.getItem('st-token');
	return token ? true : false;
}
