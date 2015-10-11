# jQuery -- 進行網頁節點查詢修改的前端框架

檔案： [jquery_example.html](jquery_example.html)

```
<html>
<head>
<meta charset="UTF-8"/>
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
</head>
<body>
<button onclick="$('p').css('display', 'none')">
  $('p').css('display', 'none')
</button>
<button onclick="$('p').css('display', 'block')">
  $('p').css('display', 'block')
</button>
<button onclick="$('#main').css('color', 'red').css('text-decoration', 'underline').css('font-weight', 'bold')">
  $('#main').css('color', 'red').css('text-decoration', 'underline').css('font-weight', 'bold')
</button>
<p>p1</p>
<p>p2</p>
<div id="main">main</div>
<p>p3</p>
<p>p4</p>
<p>p5</p>
</body>
</html>
```