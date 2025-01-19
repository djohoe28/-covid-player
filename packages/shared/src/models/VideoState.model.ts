/**
 * Represents the state of a video.
 * TODO: Used in conjunction / combined with Source model & Packet model?
 */
export default interface VideoState {
	/**
	 * Whether the video is playing.
	 */
	isPlaying: boolean;
	/**
	 * Current playback time-position; measured in seconds.
	 */
	currentTime: number;
}
