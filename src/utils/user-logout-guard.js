import { checkJWT } from './api';

// User should be logged out to access this page, otherwise redirect to dashboard
function userLogoutGuard(navigate) {
	function navigator() {
		if (checkJWT()) {
			navigate('/library');
		}
	}
	return navigator;
}

export default userLogoutGuard;
