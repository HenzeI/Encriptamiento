<?php
    $password = 'miPassword';

    // Funcion propia de php password_hash que pide por parametro la contraseña y tipo de encriptacion
    // que en este caso es PASSWORD_BCRYPT, luego devuelve la contraseña cifrada
    $hash = password_hash($password, PASSWORD_BCRYPT);
    echo "Hash: $hash\n";

    // Funcion propia de php password_verify que verifica si dos contraseñas coindicen
    if (password_verify('mi_contraseña', $hash)) {
        echo "¡Contraseña válida!";
    } else {
        echo "Contraseña incorrecta.";
    }
?>