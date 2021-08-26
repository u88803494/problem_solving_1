# problem_solving_1
## 以下測驗內容請使用 JavaScript ES5+ 實作。

### 實作 Fibonacci number (費式數列)

建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci
sequence 中的第幾個數字的值。
fibonacci(0) // 0
fibonacci(1) // 1
fibonacci(2) // 1
fibonacci(3) // 2
fibonacci(4) // 3

### 擇一實作 Debounce

debounce 是在 delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行
建立函式 debounce
const debounceFunc = debounce(func, delay)
