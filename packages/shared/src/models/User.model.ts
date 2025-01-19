export default interface User {
	/**
	 * The user's UUID; assigned by the server.
	 */
	id: string;
	/**
	 * The user's display name; freely assigned by the user.
	 */
	name: string;
}