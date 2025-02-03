import type Room from "@shared/models/Room.model";
import type User from "@shared/models/User.model";

// TODO: Should createRoom return an ID or a Room object?
// TODO: Should getUsersInRoom return User[] or string[]?
// TODO: Should getMessagesInRoom return Message[] or string[]?
// TODO: Should getVideoStateInRoom return VideoState? Should it even exist?
// TODO: Add setters et al. for Room, User, Message, and VideoState.

export default interface RoomRepository {
	createRoom(any: any): any;
	getRoomById(roomId: string): Room;
	getUsersInRoom(roomId: string): User[];
	getMessagesInRoom(roomId: string): any[];
	getVideoStateInRoom(roomId: string): any;
}
