<?php
 $pdo = new PDO('mysql:host=localhost;dbname=ecommerce', 'root', '');
 $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
if ($pdo) {
       echo "Connected to the database successfully!";
    } else {
         echo "Connection failed!";
    }
?>