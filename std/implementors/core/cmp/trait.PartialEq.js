(function() {var implementors = {};
implementors["alloc"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'a, 'b, B:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, C:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'b, C&gt;&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;C&gt; + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, V:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/btree_map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/btree_map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V&gt;","synthetic":false,"types":["alloc::collections::btree::map::BTreeMap"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/btree_set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree_set::BTreeSet\">BTreeSet</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/btree_set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree_set::BTreeSet\">BTreeSet</a>&lt;T&gt;","synthetic":false,"types":["alloc::collections::btree::set::BTreeSet"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/linked_list/struct.LinkedList.html\" title=\"struct alloc::collections::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/linked_list/struct.LinkedList.html\" title=\"struct alloc::collections::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;","synthetic":false,"types":["alloc::collections::linked_list::LinkedList"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt;","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">&amp;'_ [U]</a>&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">&amp;'_ mut [U]</a>&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;<a class=\"primitive\" href=\"core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.array.html\">[</a>U<a class=\"primitive\" href=\"core/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;<a class=\"primitive\" href=\"core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ <a class=\"primitive\" href=\"core/primitive.array.html\">[</a>U<a class=\"primitive\" href=\"core/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;<a class=\"primitive\" href=\"core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ mut <a class=\"primitive\" href=\"core/primitive.array.html\">[</a>U<a class=\"primitive\" href=\"core/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>&gt; for <a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>","synthetic":false,"types":["alloc::collections::TryReserveError"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>&gt; for <a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>","synthetic":false,"types":["alloc::collections::TryReserveErrorKind"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;","synthetic":false,"types":["alloc::rc::Rc"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>","synthetic":false,"types":["alloc::string::FromUtf8Error"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'a <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for &amp;'a <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt;&gt; for <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'b <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt;&gt; for &amp;'b <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;","synthetic":false,"types":["alloc::sync::Arc"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">&amp;'_ [U]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">&amp;'_ mut [U]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"primitive\" href=\"core/primitive.slice.html\">&amp;[T]</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"primitive\" href=\"core/primitive.slice.html\">&amp;mut [T]</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">[</a>U<a class=\"primitive\" href=\"core/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"primitive\" href=\"core/primitive.slice.html\">[</a>T<a class=\"primitive\" href=\"core/primitive.slice.html\">]</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, <a class=\"primitive\" href=\"core/primitive.slice.html\">[</a>T<a class=\"primitive\" href=\"core/primitive.slice.html\">]</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">&amp;'_ [U]</a>&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, <a class=\"primitive\" href=\"core/primitive.slice.html\">[</a>T<a class=\"primitive\" href=\"core/primitive.slice.html\">]</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">&amp;'_ mut [U]</a>&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, <a class=\"primitive\" href=\"core/primitive.slice.html\">[</a>T<a class=\"primitive\" href=\"core/primitive.slice.html\">]</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;<a class=\"primitive\" href=\"core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"core/primitive.array.html\">[</a>U<a class=\"primitive\" href=\"core/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;<a class=\"primitive\" href=\"core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ <a class=\"primitive\" href=\"core/primitive.array.html\">[</a>U<a class=\"primitive\" href=\"core/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]}];
implementors["core"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()