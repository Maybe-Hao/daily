# LeetCode笔记本

## Day1-究极基础

### 1.题号：217 判断重复元素

<img :src="$withBase('/assets/img/image-20210910095710306.png')">

思路：通过双循环，立flag来看是否有重叠，使用C语言，方法老套，效率低下。并且中途几次指针超出范围(掌握不牢固)

评论区大神解法：

<img :src="$withBase('/assets/img/image-20210910095954923.png')">

写的已经很详细，拓展了我对HashSet的方法的了解，好耶！学到了

### 2.有效的数独

<img :src="$withBase('/assets/img/image-20210914203952799.png')">

学到的：HashSet<Integer> set=new HashSet<Integer>();的用法

HashSet不能添加重复的元素，当调用add（Object）方法时候，
首先会调用Object的hashCode方法判hashCode是否已经存在，如不存在则直接插入元素；
如果已存在则调用Object对象的equals方法判断是否返回true，如果为true则说明元素已经存在，如为false则插入元素。

本题难道自己的地方：**不知道怎么检验块中重复？**

别人的思路（如下）：

```Java
class Solution {
    public boolean isValidSudoku(char[][] board) {
            Set<Character> rowSet = new HashSet<>();
            Set<Character> colSet = new HashSet<>();
            Set<Character> gridSet = new HashSet<>();
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    // 行校验
                    if (board[j][i] != '.' && !rowSet.add(board[j][i]))
                        return false;
                    // 列校验
                    if (board[i][j] != '.' && !colSet.add(board[i][j]))
                        return false;
                    // 九宫格校验
                    if (board[i % 3 * 3 + j / 3][i / 3 * 3 + j % 3] != '.' && !gridSet.add(board[i % 3 * 3 + j / 3][i / 3 * 3 + j % 3]))
                        return false;

                }
                rowSet.clear();
                colSet.clear();
                gridSet.clear();
            }
            return true;
    }
}
```

### 3.移除链表元素（方法新颖）

<img :src="$withBase('/assets/img/image-20210916110311011.png')">

```java
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode header = new ListNode(-1);
        header.next = head;
        ListNode cur = header;
        while(cur.next != null){
            if(cur.next.val == val ){
                cur.next = cur.next.next;
            }else{
                cur = cur.next;
            }
        }
        return header.next;
    }
}
```

**注意前两行代码！**

简单的两行代码解决了开始的前n个数据为val的值得问题，极大的简化代码，节省了空间和时间。
