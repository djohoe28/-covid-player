export default interface Source {
	/**
	 * The path to the source; URL or file-name.
	 */
	path: string;
	/**
	 * Duration of the source; measured in seconds.
	 */
	duration: number;
}