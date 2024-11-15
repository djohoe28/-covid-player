export interface VideoPacketDTO extends PacketDTO {
	kind: "video";
	data: VideoState;
}
