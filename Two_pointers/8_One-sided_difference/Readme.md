Односторонняя разница

Даны два массива nums1 и nums2, отсортированные по возрастанию.

Необходимо вернуть все элементы из nums1, которые не встречаются в nums2, в отсортированном по возрастанию порядке.

Пример 1:

Ввод: nums1 = [1,2,3,4,5], nums2 = [4,5,6]
Вывод: [1,2,3]
Пример 2:

Ввод: nums1 = [1,2,2,3,3,4], nums2 = [0,0,0,3]
Вывод: [1,2,2,4]

Ограничения:

len(nums1) >= 0
len(nums2) >= 0

Given two sorted arrays, return the elements that are in the first array but not in the second array.
The arrays may contain duplicates, and the result should not contain duplicates.

nums1 = [1,2,2,3,3,4];
nums2 = [0,0,0,3];

nums1 = [1, 2, 3, 4, 5];
nums2 = [4, 5, 6];