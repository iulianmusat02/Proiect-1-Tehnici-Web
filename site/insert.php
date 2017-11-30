<html>
<body>
<?php
 
// Create connection
$conn = new mysqli('localhost','root','');
 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "DB Connected successfully";
 
// this will select the Database sample_db
mysqli_select_db($conn,"scdesign2");
 
echo "\n DB is seleted as Test  successfully";
 
// create INSERT query
 
 
$sql="INSERT INTO scdesign_table (fname,lname,email,comm) VALUES ('$_POST[fname]','$_POST[lname]','$_POST[email]','$_POST[comm]')";
 
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 
mysqli_close($conn);
?>
</body>
</html>