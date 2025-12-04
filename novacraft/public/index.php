<?php
$page = $_SERVER['REQUEST_URI'];
if ($page == "/") {
    $srcpage = '../src/pages/home.php';
} else {
    $srcpage = '../src/pages' . $page . '.php';
}
if (file_exists($srcpage)) {
    include "../src/templates/layout.php";
} else {
    $page = "404";
    $srcpage = "../src/pages/" . $page . ".php";
    include "../src/templates/layout.php";
}
?>