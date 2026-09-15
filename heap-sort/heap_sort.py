def heapfiy(arr, n, i):
    # Assume the current node is the largest
    largest = i

    # Find Children
    left = 2 * i + 1
    right = 2 * i + 2

    # Check Left child
    if (left < n) and (arr[left] > arr[largest]):
        largest = left

    # check Right Child
    if (right < n) and (arr[right] > arr[largest]):
        largest = right

    # If any children is bigger
    if largest != i:
        # Swap parent with biggest child
        arr[i], arr[largest] = arr[largest], arr[i]

        heapfiy(arr, n, largest)


def heap_sort(arr):
    n = len(arr)

    # Build Max Heap
    for i in range(n // 2 - 1, -1, -1):
        heapfiy(arr, n, i)

    # Move the largest number to the end
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]

        # Restore Max Heap
        heapfiy(arr, i, 0)


arr = [4, 10, 3, 5, 1]

heap_sort(arr)

print("\n\n\nHeap Sort:", arr)
