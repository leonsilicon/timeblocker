export type TaskConstructorProps = {
	id: string;
	name: string;
	color?: string;
	description?: string;
	isHidden: boolean;
};

/**
 * A task created by the user.
 */
export class Task {
	static color = '#ffcccc';
	/**
	 * The type of task.
	 */
	protected type: string;

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
	 * Whether the task is shown in the task dock.
	 */
	private isHidden: boolean;

	/**
	 * Creates a new task.
	 * @param props The properties to set on the task.
	 * @param props.id The ID of the task.
	 * @param props.name The name of the task.
	 * @param props.description The description of the task.
	 * @param props.color The color of the task.
	 * @param props.isHidden Whether the task is shown in the task dock.
	 */
	constructor({
		id,
		name,
		description,
		color,
		isHidden,
	}: TaskConstructorProps) {
		this.id = id;
		this.setName(name);
		this.setColor(color ?? Task.color);
		if (description !== undefined) {
			this.setDescription(description);
		}

		this.type = 'normal';

		this.setIsHidden(isHidden);
	}

	/**
	 * Sets the name of the task.
	 * @param name The new name of the task.
	 */
	public setName(name: string) {
		this.name = name;
	}

	/**
	 * Gets the type of the task.
	 * @returns The type of the task.
	 */
	public getType() {
		return this.type;
	}

	/**
	 * Gets the name of the task.
	 * @returns The name of the task.
	 */
	public getName() {
		return this.name;
	}

	/**
	 * Gets the ID of the task.
	 * @returns The ID of the task.
	 */
	public getId() {
		return this.id;
	}

	/**
	 * Gets the color of the task.
	 * @returns The color of the task.
	 */
	public getColor() {
		return this.color;
	}

	/**
	 * Sets the color of the task.
	 * @param color The color of the task.
	 */
	public setColor(color: string) {
		this.color = color;
	}

	/**
	 * Gets whether the task is hidden.
	 */
	public getIsHidden() {
		return this.isHidden;
	}

	/**
	 * Sets whether the task is hidden
	 * @param isHidden Whether the task is hidden.
	 */
	public setIsHidden(isHidden: boolean) {
		this.isHidden = isHidden;
	}

	/**
	 * Gets the description of the task.
	 * @returns The description of the task.
	 */
	public getDescription() {
		return this.description;
	}

	/**
	 * Sets the description of the task.
	 * @param description The description of the task.
	 */
	public setDescription(description: string) {
		this.description = description;
	}

	/**
	 * Removes the description of the task.
	 */
	public removeDescription() {
		this.description = undefined;
	}
}
