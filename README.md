# problem_solving_1

## 以下測驗內容請使用 JavaScript ES5+ 實作。

### 實作 Fibonacci number (費式數列)

建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci
sequence 中的第幾個數字的值。

#### example:

- fibonacci(0) // 0
- fibonacci(1) // 1
- fibonacci(2) // 1
- fibonacci(3) // 2
- fibonacci(4) // 3

### 實作 Debounce

debounce 是在 delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行
建立函式 debounce
const debounceFunc = debounce(func, delay)

### 實作 getPagination

參考右圖範例實作可以取得分頁資訊的 function，根據輸入的
offset (資料開始位置)、limit(資料擷取長度)、total (總資料筆
數)，取得 currentPage (當下頁籤)、totalPage (頁面總數量)、
renderPages (顯示的頁籤範圍一次顯示五個頁籤)。

const { currentPage, totalPage, renderPages } = getPagination(offset, limit, total)

#### example:

- getPagination(0, 5, 33) // { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }

- getPagination(5, 5, 33) // { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }

- getPagination(10, 5, 33) // { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }

- getPagination(15, 5, 33) // { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }

- getPagination(20, 5, 33) // { currentPage: 5, totalPage: 7, renderPages: [2,3,5,6,7] }

- getPagination(25, 5, 33) // { currentPage: 6, totalPage: 7, renderPages: [2,3,5,6,7] }

- getPagination(30, 5, 33) // { currentPage: 7, totalPage: 7, renderPages: [2,3,5,6,7] }
