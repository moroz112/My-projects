<?php
/**
 * Created by PhpStorm.
 * User: amoroz-prom
 * Date: 16.11.14
 * Time: 14:20
 */

class Task {
    public function addNewTask($taskname,$description,$pdo){
        $pdoStatement = $pdo->prepare('INSERT INTO Task SET TaskName = :taskname,Description = :description');
        $pdoStatement->bindParam('taskname',$taskname);
        $pdoStatement->bindParam('description',$description);
        $pdoStatement->execute();
    }
    public function GetAllTasks($pdo){
        $pdoStatemant = $pdo->prepare('SELECT * FROM Task ');
        $pdoStatemant->execute();
        $resul = $pdoStatemant->fetchAll(PDO::FETCH_ASSOC);
        $jsonfile = json_encode($resul);
        echo $jsonfile;
//        foreach($resul as $res){
//        echo $res['TaskName'];
//        echo $res['Description'];
//        }
    }
}
