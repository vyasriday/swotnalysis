export function isLoggedIn() {
	const token = localStorage.getItem('st-token');
	return token ? true : false;
}

export function setItem(key, value) {
	localStorage.setItem(key, value);
}

export function getItem(key) {
	return localStorage.getItem(key);
}
