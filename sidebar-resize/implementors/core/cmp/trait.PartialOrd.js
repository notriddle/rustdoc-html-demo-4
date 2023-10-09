(function() {var implementors = {
"alloc":[["impl&lt;'a, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, B&gt;&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/collections/btree_set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree_set::BTreeSet\">BTreeSet</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/btree_set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree_set::BTreeSet\">BTreeSet</a>&lt;T, A&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T, A&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T, A&gt;"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/collections/btree_map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V, A&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/btree_map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V, A&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/collections/linked_list/struct.LinkedList.html\" title=\"struct alloc::collections::linked_list::LinkedList\">LinkedList</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/linked_list/struct.LinkedList.html\" title=\"struct alloc::collections::linked_list::LinkedList\">LinkedList</a>&lt;T, A&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt;"],["impl&lt;T, A1, A2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A2&gt;&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A1&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,\n    A1: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>,\n    A2: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>,</span>"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"alloc/ffi/struct.CString.html\" title=\"struct alloc::ffi::CString\">CString</a>&gt; for <a class=\"struct\" href=\"alloc/ffi/struct.CString.html\" title=\"struct alloc::ffi::CString\">CString</a>"]],
"core":[],
"std":[["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; for &amp;'b <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'a <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'a <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'b <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"primitive\" href=\"primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for &amp;'a <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'b <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'b <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for &amp;'a <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'a <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'b, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for &amp;'a <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'b, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;&gt; for &amp;'a <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"primitive\" href=\"primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'a <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PrefixComponent.html\" title=\"struct std::path::PrefixComponent\">PrefixComponent</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"std/path/struct.PrefixComponent.html\" title=\"struct std::path::PrefixComponent\">PrefixComponent</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'a <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/path/enum.Prefix.html\" title=\"enum std::path::Prefix\">Prefix</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"std/path/enum.Prefix.html\" title=\"enum std::path::Prefix\">Prefix</a>&lt;'a&gt;"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>&gt; for <a class=\"struct\" href=\"std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for &amp;'a <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'a <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/path/enum.Component.html\" title=\"enum std::path::Component\">Component</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"std/path/enum.Component.html\" title=\"enum std::path::Component\">Component</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/io/enum.ErrorKind.html\" title=\"enum std::io::ErrorKind\">ErrorKind</a>&gt; for <a class=\"enum\" href=\"std/io/enum.ErrorKind.html\" title=\"enum std::io::ErrorKind\">ErrorKind</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for &amp;'a <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; for &amp;'b <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>&gt; for <a class=\"struct\" href=\"std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for &amp;'a <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;&amp;'a <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.Components.html\" title=\"struct std::path::Components\">Components</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"std/path/struct.Components.html\" title=\"struct std::path::Components\">Components</a>&lt;'a&gt;"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;&gt; for &amp;'b <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl <a class=\"trait\" href=\"std/cmp/trait.PartialOrd.html\" title=\"trait std::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()