import { getRandomTaskColor } from '~f/utils/task';

export type TaskConstructorProps = {
	id: string;
	name: string;
	color?: string;
	description?: string;
};

/**
 * A task created by the user.
 */
export class Task {
	/**
	 * The unique ID of the task.
	 */
	private readonly id: string;

	/**
	 * The name of the task.
	 */
	private name: string;

	/**
	 * The color of the task.
	 */
	private color: string;

	/**
	 * The description of the task.
	 */
	private description?: string;

	/**
	 * Creates a new task.
	 * @param props The properties to set on the task.
	 * @param props.id The ID of the task.
	 * @param props.name The name of the task.
	 * @param props.description The description of the task.
	 * @param props.color The color of the task.
	 */
	constructor({ id, name, description, color }: TaskConstructorProps) {
		this.id = id;
		this.setName(name);
		this.setColor(color ?? 'lightred');
		if (description !== undefined) {
			this.setDescription(description);
		}
	}

	/**
	 * Sets the name of the task.
	 * @param name The new name of the task.
	 */
	setName(name: string) {
		this.name = name;
	}

	/**
	 * Gets the name of the task.
	 * @returns The name of the task.
	 */
	getName() {
		return this.name;
	}

	/**
	 * Gets the ID of the task.
	 * @returns The ID of the task.
	 */
	getId() {
		return this.id;
	}

	/**
	 * Gets the color of the task.
	 * @returns The color of the task.
	 */
	getColor() {
		return this.color;
	}

	/**
	 * Sets the color of the task.
	 * @param color The color of the task.
	 */
	setColor(color: string) {
		this.color = color;
	}

	/**
	 * Gets the description of the task.
	 * @returns The description of the task.
	 */
	getDescription() {
		return this.description;
	}

	/**
	 * Sets the description of the task.
	 * @param description The description of the task.
	 */
	setDescription(description: string) {
		this.description = description;
	}

	/**
	 * Removes the description of the task.
	 */
	removeDescription() {
		this.description = undefined;
	}
}
