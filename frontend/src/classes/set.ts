class BTreeNode<T> {
	left: BTreeNode<T> | undefined;
	right: BTreeNode<T> | undefined;
	value: T;

	constructor(value: T) {
		this.value = value;
	}

	public getValue() {
		return this.value;
	}

	public setValue(value: T) {
		this.value = value;
	}

	public getLeftNode() {
		return this.left;
	}

	public setLeftNode(left: BTreeNode<T>) {
		this.left = left;
	}

	public getRightNode() {
		return this.right;
	}

	public setRightNode(right: BTreeNode<T>) {
		this.right = right;
	}
}

/**
 * A set implemented as a binary search tree
 */
export class BTreeSet<T> {
	private numNodes = 0;

	private root: BTreeNode<T> | undefined;

	public add(value: T) {
		const newNode = new BTreeNode<T>(value);
		if (this.root === undefined) {
			this.root = newNode;
			this.numNodes += 1;
			return;
		}

		let curNode = this.root;

		for (;;) {
			// Since we're implementing a set, we don't need to
			// insert nodes with values already present in the tree
			if (value === newNode.getValue()) return;
			else if (value < curNode.getValue()) {
				const leftNode = curNode.getLeftNode();
				if (leftNode === undefined) {
					curNode.setLeftNode(newNode);
					this.numNodes += 1;
				} else {
					curNode = leftNode;
				}
			} else if (value > curNode.getValue()) {
				const rightNode = curNode.getRightNode();
				if (rightNode === undefined) {
					curNode.setRightNode(newNode);
					this.numNodes += 1;
				} else {
					curNode = rightNode;
				}
			}
		}
	}

	public has() {}

	public forEach(cb: (value: T) => void) {}

	get size() {
		return this.numNodes;
	}
	private find() {
		
	}

	public delete() {

	}

	public clear() {
		this.root = undefined;
	}

	public entries() {
		return [...this.inorderSearch(this.root)].map((node) => [
			node.getValue(),
			node.getValue(),
		]);
	}

	public keys() {
		return [...this.inorderSearch(this.root)];
	}

	private *inorderSearch(node?: BTreeNode<T> | undefined) {
		if (node === undefined) return;
		this.inorderSearch(node.left);
		yield node;
		this.inorderSearch(node.right);
	}

	public values() {
		return [...this.inorderSearch()].map((node) => node.getValue());
	}
}
