<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Address Book</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-cyan">
        <li><a href="#sup">SignUp</a></li>
        <li><a href="#ser">Search</a></li>
    </nav>
    <h3 class="lead"><b>Delete will delete the enitre data from table<b></h3>
    <h3 class="lead">For Update enter the email and Address 1 Field </h3>
    <div class="signup form-group" id="sup">
        <form action="index.php" method="POST">
            <input type="text" name="fname" placeholder="Enter Firstname" class="form-control" >
            <input type="text" name="desig" placeholder="Enter Designation" class="form-control" >
            <input type="email" name="email" placeholder="Enter Email" class="form-control" >
            <input type="text" name="add1" placeholder="Enter Address 1" class="form-control" >
            <input type="text" name="add2" placeholder="Enter Address 2" class="form-control" >
            <input type="text" name="city" placeholder="Enter City" class="form-control" >
            <input type="text" name="state" placeholder="Enter State" class="form-control">
            <input type="submit" name="signUp" class="btn btn-success">
            <input type="submit" value="Update" name="update" class="btn btn-primary">
            <input type="submit" value="Delete" name="delete" class="btn btn-danger">
        </form>
    </div>
    <div class="search form-group" id="ser">
        <form action="#" method="POST">
            <input type="email" name="email" placeholder="Enter Email" class="form-control" required>
            <input type="submit" value="Search" name="search" class="btn btn-primary">
        </form>
    </div>
    <div class="search-result">
        <table name = "userDetails" class="table table-bordered">
        <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>State</th>
        </tr>
            <?php
                include 'connection.php';
                if(isset($_POST['search'])){
                    $email = $_POST['email'];
            
                    $table="userdata";
            
                    $sql = "SELECT * FROM $table WHERE Email='$email'";
                    $result = $conn->query($sql);
                    if(mysqli_num_rows($result) > 0){

                        while ($row = mysqli_fetch_assoc($result)) {
                            echo '<tr>';
                            echo '<td>'. $row['Firstname'] .'</td>';
                            echo '<td>'. $row['Email'] .'</td>';
                            echo '<td>'. $row['Designation'] .'</td>';
                            echo '<td>'. $row['Address1'] .'</td>';
                            echo '<td>'. $row['Address2'] .'</td>';
                            echo '<td>'. $row['City'] .'</td>';
                            echo '<td>'. $row['State'] .'</td>';
                            echo '</tr>';
                        }
                    }
                }
            ?>
        </div>
</body>
</html>
<?php
    include 'connection.php';
    if(isset($_POST['signUp'])){
        $fname = $_POST['fname'];
        $email = $_POST['email'];
        $desig = $_POST['desig'];
        $add1 = $_POST['add1'];
        $add2 = $_POST['add2'];
        $city = $_POST['city'];
        $state = $_POST['state'];

        $table="userdata";

        $sql = "INSERT INTO $table VALUES ('$fname','$email','$desig','$add1','$add2','$city','$state')";

        if ($conn->query($sql) === TRUE) {
            echo '<script language="javascript">';
            echo 'alert("New record created successfully")';
            echo '</script>';
          } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
          }   
    }
    if(isset($_POST['delete'])){
        $table="userdata";
        $sql = "DELETE FROM $table";
        if ($conn->query($sql) === TRUE) {
            echo '<script language="javascript">';
            echo 'alert("All Data Deleted")';
            echo '</script>';
          } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
          }   
    }
    if(isset($_POST['update'])){
        $table="userdata";
        $email = $_POST['email'];
        $add1 = $_POST['add1'];
        $sql = "UPDATE $table SET ADDRESS1='$add1' WHERE Email='$email'";
        if ($conn->query($sql) === TRUE) {
            echo '<script language="javascript">';
            echo 'alert("Data Updated")';
            echo '</script>';
          } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
          }   
    }
?>