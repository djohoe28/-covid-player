import type {
	RoomEvent,
	ChatEvent,
	UserEvent,
	VideoEvent,
} from "@covid-player/shared";

// TODO: Remove?
// SEE: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// SEE: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

export function isChatEvent(event: RoomEvent): event is ChatEvent {
	return event.kind === "chat";
}
export function isUserEvent(event: RoomEvent): event is UserEvent {
	return event.kind === "user";
}
export function isVideoEvent(event: RoomEvent): event is VideoEvent {
	return event.kind === "video";
}
