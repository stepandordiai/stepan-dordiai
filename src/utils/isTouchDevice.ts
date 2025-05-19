// The function will return true if touch device and false if mouse device

// export const isTouchDevice = () => {
// 	try {
// 		document.createEvent("TouchEvent") as Event;
// 		return true;
// 	} catch (e) {
// 		return false;
// 	}
// };

export const isTouchDevice = (): boolean => {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};
