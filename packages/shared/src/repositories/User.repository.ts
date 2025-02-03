import type User from "@shared/models/User.model";

// TODO: What should the I/O of createUser be? Should it request a UUID?
// TODO: Should getUsersInRoomByRoomId return User[] or string[]? getUserById implies User[].
// TODO: Add setters et al.

export default interface UserRepository {
	createUser(any: any): any;
	getUserById(userId: string): User;
	getUsersInRoomByRoomId(roomId: string): User[];
}
