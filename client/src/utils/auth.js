import decode from 'jwt-decode';

class AuthService {
  // Obtains user data.
  getProfile() {
    return decode(this.getToken());
  }

  // Checks if the user is logged in.
  loggedIn() {
    // Checks if a token exists and is still valid.
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Checks if token is expired.
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/dashboard');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // Reloads the page and resets the state of the application.
    window.location.assign('/');
  }
}

export default new AuthService();