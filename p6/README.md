
# table

## table-layout

* auto：默认，自动表格布局，列宽度由单元格中没有折行的最宽的内容设定。此算法有时比较慢，这是由于它需要在确定最终的布局之前访问表格中所有的内容。

* fixed：固定表格布局，水平布局仅仅取决于表格宽度、列宽度、表格边框宽度、单元格间距、而与单元格的内容无关。与自动表格布局相比，允许浏览器更快地对表格进行布局。通过固定表格布局用户代理在接收到第一行后就可以显示表格。

* inherit:从父元素继承table-layout属性的值，任何版本的IE都不支持。

## word-wrap

* normal 只在允许的断字点换行（浏览器保持默认处理）。

* break-word 在长单词或 URL 地址内部进行换行。

## word-break

* normal

使用默认的换行规则。

* break-all

允许任意非CJK(Chinese/Japanese/Korean)文本间的单词断行。

* keep-all

不允许CJK(Chinese/Japanese/Korean)文本中的单词换行，只能在半角空格或连字符处换行。非CJK文本的行为实际上和normal一致。