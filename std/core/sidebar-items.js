initSidebarItems({"macro":[["assert","声明在运行时布尔表达式为 `true`。"],["assert_eq","断言两个表达式彼此相等 (使用 [`PartialEq`])。"],["assert_ne","断言两个表达式彼此不相等 (使用 [`PartialEq`])。"],["cfg","在编译时评估配置标志的布尔组合。"],["column","扩展到调用它的列号。"],["compile_error","导致编译失败，并遇到给定的错误消息。"],["concat","将字面量串联成一个静态字符串切片。"],["concat_idents","将标识符串联为一个标识符。"],["const_format_args","与 `format_args` 相同，但可以在某些 const 上下文中使用。"],["debug_assert","声明在运行时布尔表达式为 `true`。"],["debug_assert_eq","断言两个表达式彼此相等。"],["debug_assert_ne","断言两个表达式彼此不相等。"],["env","在编译时检查环境变量。"],["file","扩展为调用该文件的文件名。"],["format_args","构造其他字符串格式宏的参数。"],["include","根据上下文将文件解析为表达式或项。"],["include_bytes","包含一个文件作为对字节数组的引用。"],["include_str","包含 UTF-8 编码的文件作为字符串。"],["line","扩展为在其上被调用的行号。"],["llvm_asm","LLVM 样式的内联汇编。"],["log_syntax","将传递的 tokens 打印到标准输出中。"],["matches","返回给定表达式是否与任何给定模式匹配。"],["module_path","扩展为代表当前模块路径的字符串。"],["option_env","(可选) 在编译时检查环境变量。"],["panic","让当前线程 panics。"],["stringify","对其参数进行字符串化。"],["todo","表示未完成的代码。"],["trace_macros","启用或禁用用于调试其他宏的跟踪功能。"],["try","解开结果或传播其错误。"],["unimplemented","通过 panic 并带有 “not implemented” 的消息来指示未实现的代码。"],["unreachable","表示无法访问的代码。"],["write","将格式化的数据写入缓冲区。"],["writeln","将格式化的数据写入到缓冲区，并追加一个换行符。"]],"mod":[["alloc","内存分配 API"],["any","该模块实现了 `Any` trait，它可以通过运行时反射来动态键入任何 `'static` 类型。"],["arch","SIMD 和供应商内部功能模块。"],["array","固定长度数组的辅助函数和类型。"],["ascii","对 ASCII 字符串和字符的操作。"],["assert_matches","Unstable 模块包含不稳定的 `assert_matches` 宏。"],["borrow","用于处理借用数据的模块。"],["cell","可共享的可变容器。"],["char","一个字符类型。"],["clone","不能隐式复制的类型的 `Clone` trait。"],["cmp","排序和比较的功能。"],["convert","用于类型之间的转换 traits。"],["default","可能具有有意义的默认值的类型的 `Default` trait。"],["f32","`f32` 单精度浮点类型专用的常量。"],["f64","`f64` 双精度浮点类型专用的常量。"],["ffi","与外部函数接口 (FFI) 绑定有关的实用工具。"],["fmt","用于格式化和打印字符串的实用工具。"],["future","异步值。"],["hash","通用哈希支持。"],["hint","对编译器的提示，该提示会影响应如何发出或优化代码。 提示可能是编译时或运行时。"],["i128","128 位有符号整数类型的常量。"],["i16","16 位带符号整数类型的常量。"],["i32","32 位带符号整数类型的常量。"],["i64","64 位有符号整数类型的常量。"],["i8","8 位带符号整数类型的常量。"],["intrinsics","编译器内部函数。"],["isize","指针大小的有符号整数类型的常量。"],["iter","可组合的外部迭代。"],["lazy","惰性值和静态数据的一次性初始化。"],["marker","代表类型基本属性的原始 traits 和类型。"],["mem","处理内存的基本函数。"],["num","内置数字类型的数字 traits 和函数。"],["ops","可重载的运算符。"],["option","可选值。"],["panic","标准库中的 Panic 支持。"],["panicking","对 libcore 的 panic 支持"],["pin","键入将数据固定到其在内存中的位置的类型。"],["prelude","The libcore prelude"],["primitive","此模块重导出原始类型，以允许使用可能不会被其他声明的类型隐藏的类型。"],["ptr","通过裸指针手动管理内存。"],["result","`Result` 类型的错误处理。"],["slice","切片管理和操作。"],["str","字符串操作。"],["stream","可组合的异步迭代。"],["sync","同步原语"],["task","类型和 Traits 用于处理异步任务。"],["time","时间量化。"],["u128","128 位无符号整数类型的常量。"],["u16","16 位无符号整数类型的常量。"],["u32","32 位无符号整数类型的常量。"],["u64","64 位无符号整数类型的常量。"],["u8","8 位无符号整数类型的常量。"],["unicode",""],["usize","指针大小的无符号整数类型的常量。"]],"primitive":[["array","一个固定大小的数组，表示为 `[T; N]`，用于元素类型 `T` 和非负编译时常量大小 `N`。"],["bool","布尔类型。"],["char","一个字符类型。"],["f32","32 位浮点类型 (特别是 IEEE 754-2008 中定义的 “binary32” 类型)。"],["f64","64 位浮点类型 (特别是 IEEE 754-2008 中定义的 “binary64” 类型)。"],["fn","函数指针，例如 `fn(usize) -> bool`。"],["i128","128 位带符号整数类型。"],["i16","16 位带符号整数类型。"],["i32","32 位带符号整数类型。"],["i64","64 位带符号整数类型。"],["i8","8 位带符号整数类型。"],["isize","指针大小的有符号整数类型。"],["never","`!` 类型，也称为 “never”。"],["pointer","原始的、不安全的指针 `*const T` 和 `*mut T`。"],["reference","引用，包括共享引用和可变引用。"],["slice","一个动态大小的视图到一个连续的序列，`[T]`。 这里的连续意味着元素的布局应使每个元素与其相邻元素之间的距离相同。"],["str","字符串切片。"],["tuple","一个有限异构序列，`(T, U, ..)`。"],["u128","128 位无符号整数类型。"],["u16","16 位无符号整数类型。"],["u32","32 位无符号整数类型。"],["u64","64 位无符号整数类型。"],["u8","8 位无符号整数类型。"],["unit","`()` 类型，也称为 “unit”。"],["usize","指针大小的无符号整数类型。"]]});