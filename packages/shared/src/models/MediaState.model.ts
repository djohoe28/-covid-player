import type Source from "@shared/models/Source.model";

/**
 * Represents the state of a video.
 */
export default interface MediaState {
	/**
	 * The object representing the video source.
	 */
	src: Source;
	/**
	 * Whether the video is playing.
	 */
	isPlaying: boolean;
	/**
	 * Current playback time-position; measured in seconds.
	 */
	currentTime: number;
}
