Хитрое сравнение строк
Даны строки s и t. Нужно вернуть true в случае, если строки будут одинаковыми после ввода в текстовый редактор. Символ # в текстовом редакторе означает, что предыдущий символ нужно стереть, а если перед # отсутствует символ, то стирать ничего не нужно.

Пример 1:

Ввод: s = "ac#b#ac", t = "abc##aa#b#c"
Вывод: true
Объяснение: "aac" = "aac"
Пример 2:

Ввод: s = "a#####b", t = "b"
Вывод: true
Объяснение: "b" = "b"
Пример 3:

Ввод: s = "abcd", t = "abcd#"
Вывод: false
Ограничения:

len(s), len(t) >= 0

Problem: Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
Example 4:
Input: s = "bxj##tw", t = "bxj###tw"
Output: false
Explanation: s becomes "tw" while t becomes "bxj".
Example 5:
Input: s = "bxj##tw", t = "bxo#j##tw"
Output: true
Explanation: s becomes "tw" while t becomes "tw".
Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters, '#' characters.
Follow up: Can you solve it in O(n) time and O(1) space?
Note: The problem is similar to Two Pointers technique.
Approach: Use two pointers to traverse both strings from the end to the beginning, handling backspaces as needed.
If the characters match after processing backspaces, return true; otherwise, return false. 
Time Complexity: O(n), where n is the length of the longer string.
Space Complexity: O(1), since we are not using any additional data structures that grow with input size. 