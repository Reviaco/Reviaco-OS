<?php

/*** begin our session ***/
session_start();

/*** set a form token ***/
$form_token = md5( uniqid('auth', true) );

/*** set the session form token ***/
$_SESSION['form_token'] = $form_token;
?>
<html>

<head>





    <link rel="import" href="../../Res.html">
    <link rel="import" href="polymer-style.html">
    <link href="style.css" rel="stylesheet">
    <script src="script.js"></script>



</head>

<body>
    <div id="main_page">
        <div class="bg-header" style="transform: translate3d(0px, 0px, 0px);"></div>

        <div class="content">

            <paper-card id="WI-FI" class="card" heading="WI-FI">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="Bluetooth" class="card" heading="Bluetooth">
                <div class="card-content">Transfer has become easier</div>
            </paper-card>
            <paper-card id="Ethernet" class="card" heading="Ethernet">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="Apps" class="card" heading="Apps">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="" class="card" heading="Language and input">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="Accessibility" class="card" heading="Accessibility">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="About" class="card" heading="About">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="Users" class="card" heading="Users">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="Accounts" class="card" heading="Accounts">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="Sequrity" class="card" heading="Security">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="Devices" class="card" heading="Devices">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
            <paper-card id="Updates" class="card" heading="Updates">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
                        <paper-card id="Storage" class="card" heading="Storage">
                <div class="card-content">Use cheaper Internet</div>
            </paper-card>
        </div>

    </div>
    <section id="Users_settings" class="Users_settings">
        <div id="users_listbox" role="listbox">

 
</div>
    </section>
        <section id="Users_settings_sub" class="Users_settings_sub">
        <div id="users_listbox_sub" role="listbox">

 
</div>
    </section id="Users_settings_sub" class="Users_settings_sub">
    <section>
            <div class="bubbleback"></div>
            <div class="bubble"><i class="material-icons power_btn_icon">power_settings_new</i></div>
            <div class="bubble-wrap">
<paper-material class="box" elevation="2">

            <form class="form" action="adduser_submit.php" method="post">

        <div class="step"><h1>Add User</h1>
<br><br>

                    <paper-input label="Username" id="username" name="username" value="" maxlength="20"></paper-input>
<br>
                    <paper-input label="Password" id="password" name="password" value="" maxlength="20"></paper-input>


</div>
                

                    <input type="hidden" name="form_token" value="<?php echo $form_token; ?>" />
                    <paper-button raised class="sumbit_parent">Register<input class="sumbit_child" type="submit" value=""> </input></paper-button>

            </form>
</paper-material>
            </div>
    </section>
    
    <div id="setting_page" class="setting_page">
    <paper-material elevation="1" class="setting_cover">
        <img id="setting_cover_icon" class="setting_cover_icon" src=""></img>
         </paper-material>
    </div>
    <app-header>


        <div id="background" class="style-scope app-header">
            <div id="backgroundRearLayer" class="style-scope app-header"></div>
            <div id="backgroundFrontLayer" class="style-scope app-header"></div>
        </div>
        <div id="contentContainer">

            <app-toolbar>

<paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button>

                <div id="title" title="">Settings</div>

            </app-toolbar>

        </div>
    </app-header>

</body>

</html>