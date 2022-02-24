function merge<T>(left: T[], right: T[]) {
	const sortedArray = [];

	const leftIndex = 0;
	const rightIndex = 0;

	// Break out of loop if any one of the array gets empty
	while (left.length > 0 && right.length > 0) {
		// Pick the smaller among the smallest element of left and right sub arrays
		if (left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}

	// Concatenating the leftover elements
	// (in case we didn't go through the entire left or right array)
	return [...arr, ...left, ...right];
}

export function mergeSort() {
	const half = array.length / 2;

	// Base case or terminating case
	if (array.length < 2) {
		return array;
	}

	const left = array.splice(0, half);
	return merge(mergeSort(left), mergeSort(array));
}
