(function() {var implementors = {};
implementors["crossbeam_channel"] = [{"text":"impl&lt;T&gt; Drop for Sender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Receiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for SelectedOperation&lt;'_&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_deque"] = [{"text":"impl&lt;T&gt; Drop for Injector&lt;T&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; Drop for Owned&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for LocalHandle","synthetic":false,"types":[]},{"text":"impl Drop for Guard","synthetic":false,"types":[]}];
implementors["crossbeam_utils"] = [{"text":"impl&lt;T:&nbsp;?Sized&gt; Drop for ShardedLockWriteGuard&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for WaitGroup","synthetic":false,"types":[]}];
implementors["deflate"] = [{"text":"impl&lt;W:&nbsp;Write&gt; Drop for DeflateEncoder&lt;W&gt;","synthetic":false,"types":[]},{"text":"impl&lt;W:&nbsp;Write&gt; Drop for ZlibEncoder&lt;W&gt;","synthetic":false,"types":[]}];
implementors["gif"] = [{"text":"impl&lt;W:&nbsp;Write&gt; Drop for Encoder&lt;W&gt;","synthetic":false,"types":[]}];
implementors["png"] = [{"text":"impl&lt;W:&nbsp;Write&gt; Drop for Writer&lt;W&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, W:&nbsp;Write&gt; Drop for StreamWriter&lt;'a, W&gt;","synthetic":false,"types":[]}];
implementors["rayon"] = [{"text":"impl&lt;'a, T:&nbsp;Ord + Send&gt; Drop for Drain&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Send&gt; Drop for Drain&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for Drain&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'data, T:&nbsp;Send&gt; Drop for Drain&lt;'data, T&gt;","synthetic":false,"types":[]}];
implementors["rayon_core"] = [{"text":"impl Drop for ThreadPool","synthetic":false,"types":[]}];
implementors["scoped_threadpool"] = [{"text":"impl Drop for Pool","synthetic":false,"types":[]},{"text":"impl&lt;'pool, 'scope&gt; Drop for Scope&lt;'pool, 'scope&gt;","synthetic":false,"types":[]}];
implementors["scopeguard"] = [{"text":"impl&lt;T, F, S&gt; Drop for ScopeGuard&lt;T, F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnOnce(T),<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Strategy,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tiff"] = [{"text":"impl&lt;'a, W:&nbsp;Write + Seek&gt; Drop for DirectoryEncoder&lt;'a, W&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, W:&nbsp;Write + Seek, C:&nbsp;ColorType&gt; Drop for ImageEncoder&lt;'a, W, C&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()