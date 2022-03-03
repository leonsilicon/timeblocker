function merge<T>(left: T[], right: T[], cmp: (a: T, b: T) => boolean) {
	const sortedArray: T[] = [];

	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (cmp(left[leftIndex]!, right[rightIndex]!)) {
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

/**
 * Sorts an array using merge sort
 * @param cmp A comparison function that takes two elements of the array to compare. It returns true if the first argument is less than the second argument and return false otherwise.
 */
export function mergeSort<T>(array: T[], cmp: (a: T, b: T) => boolean): T[] {
	const half = array.length / 2;

	if (array.length < 2) {
		return array;
	}

	const left = array.splice(0, half);
	return merge(mergeSort(left, cmp), mergeSort(array, cmp), cmp);
}
