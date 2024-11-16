// TODO: Make sure you never need this!
export class NotImplementedError extends Error {
	constructor(message: string = "Method not implemented.") {
		super(message);
		this.name = "NotImplementedError";
	}
}