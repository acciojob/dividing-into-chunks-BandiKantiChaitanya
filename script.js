const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = []; // This will store the subarrays
  let currentSubarray = []; // This stores the current subarray being formed
  let currentSum = 0; // This stores the sum of the current subarray
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    
    // If adding this element doesn't exceed the sum
    if (currentSum + num <= n) {
      currentSubarray.push(num); // Add the number to the current subarray
      currentSum += num; // Update the sum of the current subarray
    } else {
      // If it exceeds the sum, push the current subarray to the result and start a new one
      result.push(currentSubarray);
      currentSubarray = [num]; // Start a new subarray with the current number
      currentSum = num; // Update the sum to be the current number
    }
  }
  
  // Don't forget to add the last subarray if it's not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }
  
  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
