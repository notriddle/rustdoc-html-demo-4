(function() {var implementors = {
"alloc":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/string/struct.FromUtf16Error.html\" title=\"struct alloc::string::FromUtf16Error\">FromUtf16Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;"],["impl&lt;'a, K: <a class=\"trait\" href=\"alloc/fmt/trait.Debug.html\" title=\"trait alloc::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, V: <a class=\"trait\" href=\"alloc/fmt/trait.Debug.html\" title=\"trait alloc::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/collections/btree_map/struct.OccupiedError.html\" title=\"struct alloc::collections::btree_map::OccupiedError\">OccupiedError</a>&lt;'a, K, V&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/ffi/struct.NulError.html\" title=\"struct alloc::ffi::NulError\">NulError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/ffi/struct.FromVecWithNulError.html\" title=\"struct alloc::ffi::FromVecWithNulError\">FromVecWithNulError</a>"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/boxed/struct.ThinBox.html\" title=\"struct alloc::boxed::ThinBox\">ThinBox</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"alloc/ffi/struct.IntoStringError.html\" title=\"struct alloc::ffi::IntoStringError\">IntoStringError</a>"]],
"core":[],
"proc_macro":[["impl <a class=\"trait\" href=\"core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro/struct.ExpandError.html\" title=\"struct proc_macro::ExpandError\">ExpandError</a>"],["impl <a class=\"trait\" href=\"core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro/struct.LexError.html\" title=\"struct proc_macro::LexError\">LexError</a>"]],
"std":[["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/time/struct.SystemTimeError.html\" title=\"struct std::time::SystemTimeError\">SystemTimeError</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/sync/struct.PoisonError.html\" title=\"struct std::sync::PoisonError\">PoisonError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/sync/mpsc/struct.RecvError.html\" title=\"struct std::sync::mpsc::RecvError\">RecvError</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"std/sync/enum.TryLockError.html\" title=\"enum std::sync::TryLockError\">TryLockError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/io/struct.WriterPanicked.html\" title=\"struct std::io::WriterPanicked\">WriterPanicked</a>"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"std/sync/mpsc/enum.RecvTimeoutError.html\" title=\"enum std::sync::mpsc::RecvTimeoutError\">RecvTimeoutError</a>"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/path/struct.StripPrefixError.html\" title=\"struct std::path::StripPrefixError\">StripPrefixError</a>"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/thread/struct.AccessError.html\" title=\"struct std::thread::AccessError\">AccessError</a>"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"std/sync/mpsc/enum.TryRecvError.html\" title=\"enum std::sync::mpsc::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/process/struct.ExitStatusError.html\" title=\"struct std::process::ExitStatusError\">ExitStatusError</a>"],["impl&lt;'a, K: <a class=\"trait\" href=\"std/fmt/trait.Debug.html\" title=\"trait std::fmt::Debug\">Debug</a>, V: <a class=\"trait\" href=\"std/fmt/trait.Debug.html\" title=\"trait std::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/collections/hash_map/struct.OccupiedError.html\" title=\"struct std::collections::hash_map::OccupiedError\">OccupiedError</a>&lt;'a, K, V&gt;"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/os/windows/io/struct.InvalidHandleError.html\" title=\"struct std::os::windows::io::InvalidHandleError\">InvalidHandleError</a>"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/env/struct.JoinPathsError.html\" title=\"struct std::env::JoinPathsError\">JoinPathsError</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/sync/mpsc/struct.SendError.html\" title=\"struct std::sync::mpsc::SendError\">SendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/io/struct.Error.html\" title=\"struct std::io::Error\">Error</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"std/sync/mpsc/enum.TrySendError.html\" title=\"enum std::sync::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/os/windows/io/struct.NullHandleError.html\" title=\"struct std::os::windows::io::NullHandleError\">NullHandleError</a>"],["impl <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"std/env/enum.VarError.html\" title=\"enum std::env::VarError\">VarError</a>"],["impl&lt;W: <a class=\"trait\" href=\"std/marker/trait.Send.html\" title=\"trait std::marker::Send\">Send</a> + <a class=\"trait\" href=\"std/fmt/trait.Debug.html\" title=\"trait std::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"std/io/struct.IntoInnerError.html\" title=\"struct std::io::IntoInnerError\">IntoInnerError</a>&lt;W&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()