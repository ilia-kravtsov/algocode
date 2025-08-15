Неточный поиск

Даны две строки s и t. Необходимо определить, можно ли получить строку s, удаляя некоторые (возможно, ни одного) символы из строки t, не изменяя порядок оставшихся символов.

Пример 1:

Ввод: s = "abc", t = "a1b2c3"
Вывод: True
Объяснение: Можно удалить цифры из t, чтобы получить t = "abc"
Пример 2:

Ввод: s = "abc", t = "acb"
Вывод: False
Ограничения:

len(s) ≥ 0
len(t) ≥ 0
Строки s и t содержат только ascii символы

Two Pointers - Fuzzy Match
Given two strings s and t, determine if you can obtain string s by deleting some (possibly none) characters from string t without changing the order of the remaining characters.
Example 1:
s = "abc", t = "a1b2c3" should return true because you can delete '1', '2', and '3' from t to get s.
Example 2:
s = "abc", t = "ac" should return false because you cannot obtain s from t without changing the order of characters.
The time complexity is O(n + m) where n is the length of s and m is the length of t.

Example strings
let s = "abc", t = "a1b2c3";

Function to check if s can be obtained from t
using the two-pointer technique.
