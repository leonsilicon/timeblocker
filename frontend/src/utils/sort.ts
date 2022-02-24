function merge<T>(left: T[], right: T[]) {
	const sortedArray: T[] = [];

	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex]! < right[rightIndex]!) {
			sortedArray.push(left[leftIndex]!);
			leftIndex += 1;
		} else {
			sortedArray.push(right[rightIndex]!);
			rightIndex += 1;
		}
	}

	// Concatenating the leftover elements
	// (in case we didn't go through the entire left or right array)
	return [...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

export function mergeSort<T>(array: T[]): T[] {
	const half = array.length / 2;

	if (array.length < 2) {
		return array;
	}

	const left = array.splice(0, half);
	return merge(mergeSort(left), mergeSort(array));
}
