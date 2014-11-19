<?php
/**
 * Created by PhpStorm.
 * User: amoroz-prom
 * Date: 16.11.14
 * Time: 17:53
 */
require 'Class/User.php';
$pdo = new \PDO('mysql:dbname=BugTrecker;host=127.0.0.1','root','67890as',
    [PDO::ATTR_PERSISTENT =>true]);
if
($_SERVER['REQUEST_METHOD']=='POST')
  {
        echo'oie';

        $username = $_POST['username-registr'];
        $password = $_POST['password-registr'];
        $email = $_POST['email-registr'];
        $user = new User();
        $user->RegistrationUser($username,$email,$password,$pdo);
      header('Location:index.html');

    }