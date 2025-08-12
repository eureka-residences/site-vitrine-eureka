import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockAuthAPI } from '@features/eurekanet/mockAutchAPI';
import { ICredentials } from '@features/eurekanet/types';


export default function LoginForm() {
	/*************** DEFAULTS ****************/

	const __default_credentials: ICredentials = {
		userID: '',
		password: ''
	};
	
	/*************** STATES ****************/
	
	const [credentials, setCredentials] = useState(__default_credentials);
	
	const [errors, setErrors] = useState(__default_credentials);
	
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [authError, setAuthError] = useState('');
	
	/*************** HANLDERS ****************/
	
	const navigate = useNavigate();
	
	// Field validation
	const validate = () => {
		let valid = true;
		const newErrors = __default_credentials;
		
		if (!credentials.userID.trim()) {
			newErrors.userID = 'Identifiant requis';
			valid = false;
		}
		
		if (!credentials.password) {
			newErrors.password = 'Mot de passe requis';
			valid = false;
		} else if (credentials.password.length < 8) {
			newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
			valid = false;
		}
		
		setErrors(newErrors);
		return valid;
	};
	
	// Form field
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		setAuthError('');
		
		if (!validate()) return;
		
		setIsSubmitting(true);
		
		try {
			// Simulation d'appel API sécurisé
			const response = await mockAuthAPI(credentials.userID, credentials.password);
			
			if (response.success) {
				// En production: stockage sécurisé du token
				navigate('/account');
			} else {
				setAuthError('Identifiants incorrects');
			}
		} catch (error) {
			setAuthError('Erreur de connexion');
			console.error('Login error:', error);
		} finally {
			setIsSubmitting(false);
		}
	};
	
	/*************** RENDER ****************/
	
	return (
	<div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
		<div className="bg-white dark:bg-gray-800 max-w-md w-full space-y-8 p-8 rounded-lg shadow-md">
			<div className="text-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 text-3xl">
				Connexion
				</h2>

				<h3 className="text-gray-600 dark:text-gray-400 mt-3">Accéder à l'espace résident Eurekanet !</h3>
			</div>

			{authError && (
				<div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
					<div className="flex">
						<div className="text-red-700">
						<p>{authError}</p>
						</div>
					</div>
				</div>
			)}

			<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
				<input type="hidden" name="remember" value="true" />
				<div className="rounded-md shadow-sm space-y-4">
				<div>
					<label htmlFor="userID" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
					Identifiant
					</label>
					<input
					id="userID"
					name="userID"
					type="text"
					autoComplete="userID"
					required
					value={credentials.userID}
					onChange={(e) => setCredentials({...credentials, userID: e.target.value})}
					className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent ${errors.userID ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
					/>
					{errors.userID && <p className="mt-1 text-sm text-red-600">{errors.userID}</p>}
				</div>

				<div>
					<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
					Mot de passe
					</label>
					<input
						id="password"
						name="password"
						type="password"
						autoComplete="current-password"
						required
						value={credentials.password}
						onChange={(e) => setCredentials({...credentials, password: e.target.value})}
						className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
					/>
					{errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
				</div>
				</div>

				<div className="flex items-center justify-between">
				<div className="flex items-center">
					<input
					id="remember-me"
					name="remember-me"
					type="checkbox"
					className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded "
					/>
					<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">
					Se souvenir de moi
					</label>
				</div>

				<div className="text-sm">
					<a href="#" className="font-medium text-[#F7BF57] hover:text-[#D9BEA3]">
					Mot de passe oublié ?
					</a>
				</div>
				</div>

				<div>
				<button
					type="submit"
					disabled={isSubmitting}
					className={`group relative w-full flex justify-center px-6 py-2 bg-[#F7BF57] text-white rounded-md hover:bg-[#D9BEA3] dark:hover:bg-[#F7BF57]/80 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
				>
					{isSubmitting ? (
					<>
						<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Connexion en cours...
					</>
					) : 'Se connecter'}
				</button>
				</div>
			</form>
		</div>
	</div>
	);
	};