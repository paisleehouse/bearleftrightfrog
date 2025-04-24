<?php

require_once 'config.php';

$dsn = "sqlite:$db";

try {
    $pdo = new \PDO($dsn);
    echo 'Connected to the SQLite database successfully!';
} catch (\PDOException $e) {
    echo $e->getMessage();
}