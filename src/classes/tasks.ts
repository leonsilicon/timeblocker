import { nanoid } from "nanoid";
import { getRandomTaskColor } from "../utils/task";

export type TaskBlockProps = {
	name: string;
	color?: string;
	description?: string;
};

export class TaskBlock {
	#id: string;
	#name: string;
	#color: string;
	#description?: string;
	constructor({ name, description, color }: TaskBlockProps) {
		this.setId(nanoid());
		this.setName(name);
		this.setColor(color ?? getRandomTaskColor());
		if (description !== undefined) {
			this.setDescription(description);
		}
	}
	setName(name: string) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	getId() {
		return this.#id;
	}
	setId(id: string) {
		this.#id = id;
	}
	getColor() {
		return this.#color;
	}
	setColor(color: string) {
		this.#color = color;
	}
	setDescription(description: string) {
		this.#description = description;
	}
	removeDescription() {
		this.#description = undefined;
	}
	getDescription() {
		return this.#description;
	}
}

export type FixedTimeTaskBlockProps = TaskBlockProps & {
	startTime: string;
	endTime: string;
};
/**
 * A task block that represents a task that always starts and ends at the same time.
 */
export class FixedTimeTaskBlock extends TaskBlock {
	#startTime: string;
	#endTime: string;
	constructor({
		name,
		description,
		startTime,
		endTime,
	}: FixedTimeTaskBlockProps) {
		super({ name, description });
		this.setStartTime(startTime);
		this.setEndTime(endTime);
	}
	getStartTime() {
		return this.#startTime;
	}
	getEndTime() {
		return this.#endTime;
	}
	setStartTime(startTime: string) {
		this.#startTime = startTime;
	}
	setEndTime(endTime: string) {
		this.#endTime = endTime;
	}
}

type FixedWeeklyTimeBlockProps = FixedTimeTaskBlockProps & {
	dayOfWeek: number;
};
export class FixedWeeklyTimeBlock extends FixedTimeTaskBlock {
	#dayOfWeek: number;
	constructor({
		dayOfWeek,
		endTime,
		name,
		startTime,
		description,
	}: FixedWeeklyTimeBlockProps) {
		super({ name, description, startTime, endTime });
		this.setDayOfWeek(dayOfWeek);
	}
	setDayOfWeek(dayOfWeek: number) {
		if (dayOfWeek < 0 || dayOfWeek > 6) {
			throw new Error("Day of week must be between 0 and 6 inclusive.");
		}
		this.#dayOfWeek = dayOfWeek;
	}
	getDayOfWeek() {
		return this.#dayOfWeek;
	}
}

class Calendar {
	daysMap: Map<string, Day>;
	constructor() {
		this.daysMap = new Map();
	}
}

class Day {
	// Map of Task IDs to the task data
	#tasks: Record<string, TaskBlock>;
	#year: number;
	#month: number;
	#day: number;
	constructor({
		year,
		month,
		day,
	}: {
		year: number;
		month: number;
		day: number;
	}) {
		this.setYear(year);
		this.setMonth(month);
		this.setDay(day);
		this.#tasks = [];
	}
	setDay(day: number) {
		if (day < 1 || day > 31) {
			throw new Error("Day must be between 1 and 31 inclusive");
		}
		this.#day = day;
	}
	setMonth(month: number) {
		if (month < 0 || month > 11) {
			throw new Error("Month must be between 0 and 11 inclusive.");
		}
		this.#month = month;
	}
	setYear(year: number) {
		if (year < 0) {
			throw new Error("Year cannot be negative.");
		}
		this.#year = year;
	}
	addTask(task: TaskBlock) {
		this.#tasks.push();
	}
	getTasks() {
		return this.#tasks;
	}
	clearTasks() {
		this.#tasks = [];
	}
}
