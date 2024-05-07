// Sorts array using pancake sort algorithm.
function pancakeSort(array) 
{
    // Iterate array from end to start.
    for (var i = array.length; i > 1; i--)
    {
        // Find index of max element in subarray.
        var maxIndex = findMax(array, i);
        
        // If max element not at end, flip to move.
        if (maxIndex != i - 1)
        {
            flip(array, maxIndex);
            flip(array, i - 1);
        }
    }
    return array; // Return sorted array.
}

// Flip elements up to specified index.
function flip(array, n) 
{
    var start = 0;
    while (start < n)
    {
        var temp = array[start];
        array[start] = array[n];
        array[n] = temp;
        start++;
        n--;
    }
    return array; // Return modified array.
}

// Find index of max element in array up to specified index.
function findMax(array, n)
{
    var maxIndex = 0; // Initialize max index.
    
    // Iterate over array up to index 'n'.
    for (var i = 0; i < n; i++)
    {
        // Update max index if current element is greater.
        if (array[i] > array[maxIndex])
        {
            maxIndex = i;
        }
    }
    return maxIndex; // Return index of max element.
}

// I reviewed material from https://www.geeksforgeeks.org/pancake-sorting/#
// pancake-sort-kbuss26
// pancake-sort-IshitaPatel18
