import type { SourceDTO } from "./SourceDTO";

export type VideoState = {
	src: SourceDTO;
	paused: boolean;
	currentTime: number;
};
