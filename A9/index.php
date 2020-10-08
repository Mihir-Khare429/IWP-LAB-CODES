<?php
    if(isset($_POST['submit'])){
        $username = $_POST['username'];
        if(isset($_COOKIE[$username])){
            print "Cookie Enabled";
            print_r($_COOKIE);
            $email = $_COOKIE[$username];
            print "<h1> Email Value Retrived from Cookie Saved</h1>";
            print "<h2>HEY" . $email . "</h2>";
        }else{
            print "Cookie Disabled. Creating New Cookie For User";
            $email = $_POST['email'];
            setcookie($username,$email,time()+3*24*60*60);
        }
        //Deleting Cookie Before an hour
        // setcookie($username,"",time()-3600);
        // //Check The Status of Cookie
        // if(!isset($_COOKIE[$username])) {
        //     print 'Cookie with name "' . $username . '" does not exist...';
        // } else {
        //     print 'Cookie with name "' . $username . '" value is: ' . $_COOKIE[$username];
        // }
    }
?>
