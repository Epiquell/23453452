export default class Time {

    static fromString(str) {
        let splitted_str = str.split(":");
		let hours = Number(splitted_str[0]);
		let minuts = Number(splitted_str[1]);
		return new Time(hours, minuts);
    }

    constructor(hours, minutes) {
        this.minutes = minutes;
        this.hours = hours;
    }

    toString() {
        return `${this.hours}:${this.minutes}`;
    }
}