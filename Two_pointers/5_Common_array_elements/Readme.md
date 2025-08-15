Общие элементы массивов

Даны два отсортированных по возрастанию массива nums1 и nums2. Необходимо вернуть новый массив nums3, который содержит все общие элементы из nums1 и nums2.

Результат должен быть также отсортирован по возрастанию. Если элементы встречаются в массивах несколько раз, то их нужно продублировать в ответе.

Пример 1:

Ввод: nums1 = [-3,2,2,5,8,19,31], nums2 = [1,2,2,2,6,19,52]
Вывод: [2,2,19]
Пример 2:

Ввод: nums1 = [-5,4], nums2 = [1,2]
Вывод: []
Пример 3:

Ввод: nums1 = [], nums2 = [1,2]
Вывод: []
Ограничения:

len(nums1), len(nums2) >= 0

This code finds common elements in two sorted arrays using the two-pointer technique.
It efficiently traverses both arrays to find elements that are present in both.
The time complexity is O(n + m) where n and m are the lengths of the two arrays.

Example arrays
let nums1 = [-3, 2, 2, 5, 8, 19, 31];
let nums2 = [1, 2, 2, 2, 6, 19, 52];
The function returns an array of common elements.
The function can handle duplicates and returns each common element only once.
The space complexity is O(k) where k is the number of common elements found.
The function can be used to find common elements in any two sorted arrays.