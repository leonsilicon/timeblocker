import { getRandomTaskColor } from '~f/utils/task';

export type TaskConstructorProps = {
	id: string;
	name: string;
	color?: string;
	description?: string;
};

export class Task {
	private readonly id: string;

	private name: string;

	private color: string;

	private description?: string;

	constructor({ id, name, description, color }: TaskConstructorProps) {
		this.id = id;
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
