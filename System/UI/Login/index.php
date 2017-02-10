<html>

<head>

    <link rel="import" href="../../Res.html">
    <link href="./style.css" rel="stylesheet">
    <script src="./script.js"></script>
</head>

<body>
    <img class="background" src="../../Media/Backgrounds/11.jpg" />

    <paper-material class="box" elevation="2">

        <form id="form" class="form" action="login_submit.php" method="post">

            <br>
            <br>

            <input id="username" class="username" name="username" value="" maxlength="20" readonly="readonly" />
            <br>
            <br>
            <paper-input type="password" label="Password" id="password" name="password" value="" maxlength="20"></paper-input>



            <input type="hidden" name="form_token" value="<?php echo $form_token; ?>" />
            <paper-button raised id="cancel_btn" class="cancel_btn" onclick="cancel()">Cancel</paper-button>
            <paper-button raised id="sumbit_btn" class="sumbit_btn" onclick="submitForm()">Sign In</paper-button>

        </form>
    </paper-material>
    <div id="info_bar" class="info_bar">
    <div id="connection_status" class="connection_status"><img id="connection_status_indicator" class="connection_status_indicator" src="" width="50" height="50" /></div>
    <div id="clock" class="clock"></div>

    </div>
</body>

</html>
