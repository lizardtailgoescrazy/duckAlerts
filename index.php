<html>
	<head>
		<title>Duck alerts !</title>
		<link rel="stylesheet" type="text/css" href="/duckAlerts/assets/css/duck.css" \>
	</head>
	<body>
		<div class="container">
			<button class="duckAlertTrigger">TRIGGER</button>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
			<p>Something...</p>
		</div>
	</body>
	<script type="text/javascript" src="/duckAlerts/vendor/js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="/duckAlerts/vendor/js/jquery-ui.min.js" ></script>
	<script type="text/javascript" src="/duckAlerts/assets/js/duck.js" ></script>
	<script type="text/javascript">
		$(".duckAlertTrigger").click(function(){
			raiseDuckDialog("Are you sure ? ", duckType.info, true, function(){alert('You are sure !');}, function(){alert("You're not sure :(");});
		});
	</script>
</html>