// Mock authentication
export const mockAuthAPI = (userID: string, password: string) => {
	return new Promise<{ success: boolean }>((resolve) => {
		setTimeout(() => {
		// Call backend checking instead
		resolve({ success: userID === 'demo' && password === 'Demo123!' });
		}, 1000);
	});
};