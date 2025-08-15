Самый большой контейнер

Дан массив целых чисел nums, nums[i] – высота линии. Нужно найти максимальную площадь, которую может заполнить вода между двумя линиями.

ВАЖНО: площадь воды считается как min(nums[i], nums[j]) * (j - i), где i – индекс первой линии, а j - номер второй.

Пример 1:


Ввод: nums = [1,8,6,2,5,4,8,3,7]
Вывод: 49
Объяснение: 7 * (8 - 1) = 49, "1" - индекс первой линии, "8" - второй
Пример 2:

Ввод: nums = [2,3,4,5]
Вывод: 6
Ограничения:

len(nums) >= 2

This function finds the maximum area of water that can be contained between two lines represented by the heights in the array.
It uses a two-pointer approach to efficiently calculate the area while moving the pointers based on the heights of the lines.
The time complexity is O(n) and space complexity is O(1).
The function returns the maximum area found.
The input is an array of integers representing the heights of the lines.
Example usage: maxArea_1([2, 3, 4, 5]) returns 6.