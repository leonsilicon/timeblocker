import { nanoid } from "nanoid";
import { getRandomTaskColor } from "../utils/task";

export type TaskBlockProps = {
	name: string;
	color?: string;
	description?: string;
};

export class TaskBlock {
	private id: string;
	private name: string;
	private color: string;
	private description?: string;
	constructor({ name, description, color }: TaskBlockProps) {
		this.setId(nanoid());
		this.setName(name);
		this.setColor(color ?? getRandomTaskColor());
		if (description !== undefined) {
			this.setDescription(description);
		}
	}
	setName(name: string) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	setId(id: string) {
		this.id = id;
	}
	getColor() {
		return this.color;
	}
	setColor(color: string) {
		this.color = color;
	}
	setDescription(description: string) {
		this.description = description;
	}
	removeDescription() {
		this.description = undefined;
	}
	getDescription() {
		return this.description;
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
	private startTime: string;
	private endTime: string;
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
		return this.startTime;
	}
	getEndTime() {
		return this.endTime;
	}
	setStartTime(startTime: string) {
		this.startTime = startTime;
	}
	setEndTime(endTime: string) {
		this.endTime = endTime;
	}
}

type FixedWeeklyTimeBlockProps = FixedTimeTaskBlockProps & {
	dayOfWeek: number;
};
export class FixedWeeklyTimeBlock extends FixedTimeTaskBlock {
	dayOfWeek: number;
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
		this.dayOfWeek = dayOfWeek;
	}
	getDayOfWeek() {
		return this.dayOfWeek;
	}
}

class Calendar {
	private daysMap: Map<string, Day>;
	constructor() {
		this.daysMap = new Map();
	}
	getDay(dayString: string) {
		return this.daysMap.get(dayString);
	}
	setDay(day: Day) {
		this.daysMap.set(day.toString(), day);
	}
}

class Day {
	// Map of Task IDs to the task block
	private tasks: Map<string, TaskBlock>;
	private year: number;
	private month: number;
	private day: number;
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
		this.tasks = new Map();
	}
	static toString(year: number, month: number, day: number) {
		return `${year}-${month}-${day}`;
	}
	toString() {
		return Day.toString(this.year, this.month, this.day);
	}
	setDay(day: number) {
		if (day < 1 || day > 31) {
			throw new Error("Day must be between 1 and 31 inclusive");
		}
		this.day = day;
	}
	getDay() {
		return this.day;
	}
	setMonth(month: number) {
		if (month < 0 || month > 11) {
			throw new Error("Month must be between 0 and 11 inclusive.");
		}
		this.month = month;
	}
	getMonth() {
		return this.month;
	}
	setYear(year: number) {
		if (year < 0) {
			throw new Error("Year cannot be negative.");
		}
		this.year = year;
	}
	getYear() {
		return this.year;
	}
	getTask(taskId: string) {
		return this.tasks.get(taskId);
	}
	addTask(task: TaskBlock) {
		this.tasks.set(task.getId(), task);
	}
	getTasksMap() {
		return this.tasks;
	}
	clearTasks() {
		this.tasks.clear();
	}
}
