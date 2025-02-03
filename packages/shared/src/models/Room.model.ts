// TODO: Should users & messages be arrays of IDs, objects, or DTOs?

export default interface Room {
	createdAt: number;
	id: string;
	name?: string | null;
	users: string[];
	messages: string[];
}
