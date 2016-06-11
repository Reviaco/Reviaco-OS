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
        <div id="setting_page" class="setting_page">
            <paper-material elevation="1" class="setting_cover mdc-bg-blue-500">
                <img id="setting_cover_icon" class="setting_cover_icon" src="" width="300" height="300"></img>
            </paper-material>
        </div>
        <section id="Users_settings" class="Users_settings">
            <paper-material id="register_form_container" class="box" elevation="2">

                <form id="adduser_form" class="form" action="PHP/adduser_submit.php" method="post">

                    <div class="step">
                        <h1>Add User</h1>
                        <br>
                        <br>

                        <paper-input label="Username" id="username" name="username" value="" maxlength="20"></paper-input>
                        <br>
                        <paper-input type="password" label="Password" id="password" name="password" value="" maxlength="20"></paper-input>


                    </div>


                    <input type="hidden" name="form_token" value="<?php echo $form_token; ?>" />
                    <paper-button raised class="sumbit_parent" onclick="submitForm()">Register

                    </paper-button>
                    <paper-button raised class="sumbit_cancel">Cancel</paper-button>
                </form>
            </paper-material>
            <div class="bubbleback"></div>
            <div class="bubble mdc-bg-purple-500"><i id="add_user_btn_icon" class="material-icons add_user_btn_icon">add</i>

            </div>
            <div class="bubble-wrap">

            </div>
            <div id="users_listbox" role="listbox">


            </div>
        </section>
        <section id="Users_settings_sub" class="Users_settings_sub">
            <div id="users_listbox_sub" role="listbox">


            </div>
        </section>



        <app-header>


            <div id="background" class="style-scope app-header">
                <div id="backgroundRearLayer" class="style-scope app-header"></div>
                <div id="backgroundFrontLayer" class="style-scope app-header"></div>
            </div>
            <div id="contentContainer">

                <app-toolbar>

                    <paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button>

                    <div id="title" title="">Settings</div>
<paper-icon-button icon="cancel"></paper-icon-button>
                </app-toolbar>

            </div>
        </app-header>

    </body>

    </html>