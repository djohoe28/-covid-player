import type { SourceDTO } from "@covid-player/shared";

export type VideoState = {
	src: SourceDTO;
	paused: boolean;
	currentTime: number;
};
