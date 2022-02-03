import { nanoid } from '@leonzalion/nanoid-good';

import { getRandomTaskColor } from '~f/utils/task';

type TaskConstructorProps = {
	name: string;
	color?: string;
	description?: string;
};

export class Task {
	private id: string;

	private name: string;

	private color: string;

	private description?: string;

	constructor({ name, description, color }: TaskConstructorProps) {
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
