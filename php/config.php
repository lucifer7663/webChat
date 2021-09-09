<?php 

//     $servername = "localhost";
    //  $username = "id17532930_nayem";
    //  $password = "ge#[Shc<AI(_lp|5";
    //  $database = "id17532930_messag1";


//     $conn = new mysqli($servername, $username, $password, $database);
     $conn = mysqli_connect("localhost", "root", "", "chat");
    if($conn){
        echo mysqli_connect_error();
    }
?>