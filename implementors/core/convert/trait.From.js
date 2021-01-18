(function() {var implementors = {};
implementors["crossbeam_channel"] = [{"text":"impl&lt;T&gt; From&lt;SendError&lt;T&gt;&gt; for TrySendError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;SendError&lt;T&gt;&gt; for SendTimeoutError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;RecvError&gt; for TryRecvError","synthetic":false,"types":[]},{"text":"impl From&lt;RecvError&gt; for RecvTimeoutError","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; From&lt;Owned&lt;T&gt;&gt; for Atomic&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;Box&lt;T, Global&gt;&gt; for Atomic&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;T&gt; for Atomic&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'g, T:&nbsp;?Sized + Pointable&gt; From&lt;Shared&lt;'g, T&gt;&gt; for Atomic&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;*const T&gt; for Atomic&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;T&gt; for Owned&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;Box&lt;T, Global&gt;&gt; for Owned&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;*const T&gt; for Shared&lt;'_, T&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_utils"] = [{"text":"impl&lt;T&gt; From&lt;T&gt; for AtomicCell&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;T&gt; for CachePadded&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;T&gt; for ShardedLock&lt;T&gt;","synthetic":false,"types":[]}];
implementors["deflate"] = [{"text":"impl From&lt;Compression&gt; for CompressionOptions","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; From&lt;Result&lt;R, L&gt;&gt; for Either&lt;L, R&gt;","synthetic":false,"types":[]}];
implementors["euclid"] = [{"text":"impl&lt;T, U&gt; From&lt;Size2D&lt;T, U&gt;&gt; for Box2D&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Zero + PartialOrd,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;Size3D&lt;T, U&gt;&gt; for Box3D&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Zero + PartialOrd,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Zero, U&gt; From&lt;Vector2D&lt;T, U&gt;&gt; for HomogeneousVector&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Zero, U&gt; From&lt;Vector3D&lt;T, U&gt;&gt; for HomogeneousVector&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Zero + One, U&gt; From&lt;Point2D&lt;T, U&gt;&gt; for HomogeneousVector&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;One, U&gt; From&lt;Point3D&lt;T, U&gt;&gt; for HomogeneousVector&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;[T; 2]&gt; for Point2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;(T, T)&gt; for Point2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;[T; 3]&gt; for Point3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;(T, T, T)&gt; for Point3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;Size2D&lt;T, U&gt;&gt; for Rect&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Zero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Float + ApproxEq&lt;T&gt;, Src, Dst&gt; From&lt;Rotation3D&lt;T, Src, Dst&gt;&gt; for RigidTransform3D&lt;T, Src, Dst&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Float + ApproxEq&lt;T&gt;, Src, Dst&gt; From&lt;Vector3D&lt;T, Dst&gt;&gt; for RigidTransform3D&lt;T, Src, Dst&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;Vector2D&lt;T, U&gt;&gt; for Size2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;[T; 2]&gt; for Size2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;(T, T)&gt; for Size2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;Vector3D&lt;T, U&gt;&gt; for Size3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;[T; 3]&gt; for Size3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;(T, T, T)&gt; for Size3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, Src, Dst&gt; From&lt;Vector2D&lt;T, Src&gt;&gt; for Translation2D&lt;T, Src, Dst&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, Src, Dst&gt; From&lt;Vector3D&lt;T, Src&gt;&gt; for Translation3D&lt;T, Src, Dst&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;[T; 2]&gt; for Vector2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;(T, T)&gt; for Vector2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;Size2D&lt;T, U&gt;&gt; for Vector2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;[T; 3]&gt; for Vector3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; From&lt;(T, T, T)&gt; for Vector3D&lt;T, U&gt;","synthetic":false,"types":[]}];
implementors["gif"] = [{"text":"impl From&lt;Extension&gt; for AnyExtension","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for DecodingError","synthetic":false,"types":[]},{"text":"impl From&lt;DecodingFormatError&gt; for DecodingError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for EncodingError","synthetic":false,"types":[]}];
implementors["image"] = [{"text":"impl From&lt;Error&gt; for ImageError","synthetic":false,"types":[]},{"text":"impl From&lt;ImageFormat&gt; for ImageFormatHint","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ Path&gt; for ImageFormatHint","synthetic":false,"types":[]},{"text":"impl From&lt;ImageFormatHint&gt; for UnsupportedError","synthetic":false,"types":[]},{"text":"impl From&lt;NeuQuant&gt; for NeuQuant","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for ImageError","synthetic":false,"types":[]},{"text":"impl From&lt;BitmapHeader&gt; for PnmHeader","synthetic":false,"types":[]},{"text":"impl From&lt;GraymapHeader&gt; for PnmHeader","synthetic":false,"types":[]},{"text":"impl From&lt;PixmapHeader&gt; for PnmHeader","synthetic":false,"types":[]},{"text":"impl From&lt;ArbitraryHeader&gt; for PnmHeader","synthetic":false,"types":[]},{"text":"impl From&lt;ColorType&gt; for ExtendedColorType","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Primitive + 'static&gt; From&lt;[T; 3]&gt; for Rgb&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Primitive + 'static&gt; From&lt;[T; 3]&gt; for Bgr&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Primitive + 'static&gt; From&lt;[T; 1]&gt; for Luma&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Primitive + 'static&gt; From&lt;[T; 4]&gt; for Rgba&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Primitive + 'static&gt; From&lt;[T; 4]&gt; for Bgra&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Primitive + 'static&gt; From&lt;[T; 2]&gt; for LumaA&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;ImageFormat&gt; for ImageOutputFormat","synthetic":false,"types":[]}];
implementors["jpeg_decoder"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["miniz_oxide"] = [{"text":"impl From&lt;MZFlush&gt; for TDEFLFlush","synthetic":false,"types":[]},{"text":"impl From&lt;StreamResult&gt; for MZResult","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ StreamResult&gt; for MZResult","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T&gt; From&lt;T&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;(T, T)&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["png"] = [{"text":"impl From&lt;Compression&gt; for Compression","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for DecodingError","synthetic":false,"types":[]},{"text":"impl From&lt;String&gt; for DecodingError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for EncodingError","synthetic":false,"types":[]}];
implementors["tiff"] = [{"text":"impl From&lt;Error&gt; for TiffError","synthetic":false,"types":[]},{"text":"impl From&lt;FromUtf8Error&gt; for TiffError","synthetic":false,"types":[]},{"text":"impl From&lt;TiffFormatError&gt; for TiffError","synthetic":false,"types":[]},{"text":"impl From&lt;TiffUnsupportedError&gt; for TiffError","synthetic":false,"types":[]},{"text":"impl From&lt;TryFromIntError&gt; for TiffError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()