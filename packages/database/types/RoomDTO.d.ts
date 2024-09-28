export type RoomDTO = {
	users: UserDTO[],
	messages: ChatPacketDTO[],
	videoState: VideoState
}