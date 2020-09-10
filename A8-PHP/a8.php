<?php
    if(isset($_POST['submit'])){
        $number = $_POST['end_range'];
        $myfile = fopen("testfile.txt", "w") or die("Unable to open file!");
        for ($i=1; $i <=100 ; $i++) { 
            $txt = mt_rand(1,$number);
            $sp = " ";
            fwrite($myfile, $txt);
            fwrite($myfile, $sp);
            if($i % 10 == 0){
                fwrite($myfile,"\n");
            }
        }
        $res = fopen("testfile.txt" , "r") or die("Unable to open file!");
        for ($i=0; $i <10; $i++) { 
            # code...
            $input[] = explode(' ',trim(fgets($res)));
        }
        echo "<br>";
        foreach($input as $x => $x_value){ 
            $count = 0;
            foreach($x_value as $k => $k_value){
                foreach($x_value as $l => $l_value){
                    if($k_value == $l_value){
                        $count++;
                    }
                }
                if($count%2 !=0){
                    echo $k_value;
                    echo " => ";
                    echo $count;
                    echo "&nbsp&nbsp&nbsp&nbsp";
                }
                $count = 0;
            }
            echo "<br>";
        }
    }
    else{
        echo "No Submit Request from Frontend Recieved!";
    }
?>
