<?php
/**
 * Created by PhpStorm.
 * User: amoroz-prom
 * Date: 13.11.14
 * Time: 19:45
 */
require 'Class/Task.php';
ini_set('display_errors','On');
error_reporting(E_ALL);
$pdo = new \PDO('mysql:dbname=BugTrecker;host=127.0.0.1','root','67890as',
    [PDO::ATTR_PERSISTENT =>true]);
if($_SERVER['REQUEST_METHOD']=='POST'){
    if(isset($_POST['taskname']) & (isset($_POST['description']))){
        $taskn = $_POST['taskname'];
        $descrn = $_POST['description'];
        $task = new Task();
        $task->addNewTask($taskn,$descrn,$pdo);
        header('Location:index.html');
    }
    if(isset($_POST['ShowTask']) & $_POST['ShowTask']==true){
        $task = new Task();
        $task->GetAllTasks($pdo);
    }
}
//$task = new Task();
//$task->GetAllTasks($pdo);



//$dbh = mysql_connect($host, $user, $pswd) or die("Can't connect with MYSQL");
//mysql_select_db($database) or die("Can't connect to database");
//$sql = 'select username from User';
//$res = mysql_query($sql);
//$row = mysql_fetch_assoc($res);
//$test = $row;

//echo json_encode($test);
