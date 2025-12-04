<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/assets/css/style.css" rel="stylesheet">
    <title>NovaCraft - <?php echo ucfirst($page); ?></title>
    <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Pixelify+Sans:wght@400..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Press+Start+2P&family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
</head>

<body class="h-screen">
    <?php
    include 'header.php';
    ?>
    <main id="hyk" class="flex flex-col justify-center items-center h-[80%] overflow-x-hidden">
        <?php
        include $srcpage;
        ?>
    </main>
    <?php
    include 'footer.php';
    ?>
    <div id="page" data-name="<?php echo $page ?>"></div>
    <script type="module" src="/assets/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
</body>

</html>