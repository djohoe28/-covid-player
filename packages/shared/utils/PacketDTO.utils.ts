import type {
	RoomEvent,
	ChatEvent,
	UserEvent,
	VideoEvent,
} from "@covid-player/shared";

// TODO: Remove?
// SEE: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// SEE: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

export function isChatPacketDTO(event: RoomEvent): event is ChatEvent {
	return event.kind === "chat";
}
export function isUserPacketDTO(event: RoomEvent): event is UserEvent {
	return event.kind === "user";
}
export function isVideoPacketDTO(event: RoomEvent): event is VideoEvent {
	return event.kind === "video";
}
