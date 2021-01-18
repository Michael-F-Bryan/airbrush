(function() {var implementors = {};
implementors["euclid"] = [{"text":"impl&lt;T:&nbsp;Div&lt;T, Output = T&gt;&gt; Div&lt;Angle&lt;T&gt;&gt; for Angle&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Div&lt;T, Output = T&gt;&gt; Div&lt;T&gt; for Angle&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Box2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Box2D&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Box3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Box3D&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Src, Dst, T:&nbsp;Div&gt; Div&lt;Length&lt;T, Src&gt;&gt; for Length&lt;T, Dst&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Div, U&gt; Div&lt;T&gt; for Length&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Src, Dst, T:&nbsp;Div&gt; Div&lt;Scale&lt;T, Src, Dst&gt;&gt; for Length&lt;T, Dst&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Point2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Point2D&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Point3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Point3D&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Rect&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Rect&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for SideOffsets2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for SideOffsets2D&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Size2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Size2D&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Size3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Size3D&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Vector2D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Vector2D&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U&gt; Div&lt;T&gt; for Vector3D&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Div, U1, U2&gt; Div&lt;Scale&lt;T, U1, U2&gt;&gt; for Vector3D&lt;T, U2&gt;","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Integer&gt; Div&lt;&amp;'b Ratio&lt;T&gt;&gt; for &amp;'a Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Integer&gt; Div&lt;&amp;'b T&gt; for &amp;'a Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Div&lt;Ratio&lt;T&gt;&gt; for &amp;'a Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Div&lt;T&gt; for &amp;'a Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Div&lt;&amp;'a Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Div&lt;&amp;'a T&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Div&lt;Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Div&lt;T&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()