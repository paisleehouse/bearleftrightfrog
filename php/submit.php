<html>
<body>

<?php 
$emotional = htmlspecialchars($emotional);
$physical = htmlspecialchars($physical);
$occupational = htmlspecialchars($occupational);
$social = htmlspecialchars($social);
$spiritual = htmlspecialchars($spiritual);
$intellectual = htmlspecialchars($intellectual);
$environmental = htmlspecialchars($environmental);
$financial = htmlspecialchars($financial);
?>

Thanks for taking care of yourself!
<br>
<br>
Here are the wellness items you submitted: 
<br>
<br>
Emotional -  <?php echo htmlspecialchars($_POST["emotional"]); ?>
<br>
<br>
Physical - <?php echo htmlspecialchars($_POST["physical"]); ?>
<br>
<br>
Occupational - <?php echo htmlspecialchars($_POST["occupational"]); ?>
<br>
<br>
Social - <?php echo htmlspecialchars($_POST["social"]); ?>
<br>
<br>
Spiritual - <?php echo htmlspecialchars($_POST["spiritual"]); ?>
<br>
<br>
Intellectual - <?php echo htmlspecialchars($_POST["intellectual"]); ?>
<br>
<br>
Environmental - <?php echo htmlspecialchars($_POST["environmental"]); ?>
<br>
<br>
Financial - <?php echo htmlspecialchars($_POST["financial"]); ?>
<br>
<br>

</body>
</html>
