<?php

    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $date = $_POST['date'];

    echo "<p>Reply from the server:</p>";
        echo "<p>Thanks for joining the Hunt!</p>";
        echo "<p>We have filed the following information: </p>";
        echo "<p>Name: $name </p>";
echo "<p>Email: $email </p>";
echo "<p>Birthday: $date </p>";

?>