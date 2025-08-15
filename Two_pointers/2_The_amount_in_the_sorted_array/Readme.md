Сортировка элементов в квадрате

Дан массив nums, отсортированный в неубывающем порядке. Нужно вернуть отсортированный массив, состоящий из всех элементов массива nums, возведенных в квадрат.

Неубывающий порядок – порядок, где каждый следующий элемент больше или равен предыдущему.

Пример 1:

Ввод: nums = [-3,-2,0,1,3,5]
Вывод: [0,1,4,9,9,25]

Пример 2:

Ввод: nums = [-5,-3,-1]
Вывод: [1,9,25]
Ограничения:

len(nums) >= 1

This function takes a sorted array of integers and returns a new array containing the squares of each number, sorted in non-decreasing order.
It uses a two-pointer approach to efficiently calculate the squares while maintaining the sorted order.
The time complexity is O(n) and space complexity is O(n).
The function returns the new sorted array of squares.
Example usage: sortedSquares_1([-4, -1, 0, 3, 10]) returns [0, 1, 9, 16, 100].