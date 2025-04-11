
## 🔐 ¿Qué es el encriptamiento (o cifrado)?

El encriptamiento es un proceso mediante el cual se convierte información legible (texto plano) en un formato codificado (texto cifrado) que solo puede ser leído si se conoce una clave o se tiene un método para descifrarlo.

### Ejemplo:
- Texto plano: `miPassword`

- El mismo texto plano encriptado usando bcrypt: `$2b$10$yVr4S/ZDqT7W7lIc8KNXK.g/Vb6nR7Yy5nWnklq2DMP98xKzTw6z6`

## 🔑 Metodos de cifrado para contraseñas

En el caso de las contraseñas, no se recomienda usar cifrado reversible, sino hashing, que es un tipo de encriptación unidireccional (solo se puede encriptar en un sentido, es decir, de texto plano ha cifrado y no al revés).

### Métodos recomendados:
- bcrypt 

- argon2 

- scrypt

*Si los anteriores dan problemas puedes utilizar **MD5** o **SHA-1**.*

### Código de ejemplo

Desde el lado cliente con **JavaScript**.

```js
import "https://cdn.jsdelivr.net/npm/bcryptjs@3.0.2/umd/index.min.js"

// Encriptar
const password = 'miPassword';
const saltRounds = 10; // Evita que dos contraseñas iguales generen el mismo hash

// Metodo hash de la libreria bcrypt
bcrypt.hash(password, saltRounds, function(err, hash) {
    console.log('Contraseña cifrada:', hash);

    // Metodo de comparacion de la libreria bcrypt  
    bcrypt.compare('miPassword', hash, function(err, result) {
        console.log('¿Coincide?', result);
    });
});
```

Desde el lado servidor con **Java**.

```java
import org.mindrot.jbcrypt.BCrypt;

public class Cifrado {

    public static void main(String[] args) {
        // La contraseña a encriptar
        String password = "miPassword";
        
        // Generamos el hash de la contraseña con un salt
        String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt(10));
        System.out.println("Hash: " + hashedPassword);
        
        // Verificar si la contraseña ingresada coincide con el hash
        boolean match = BCrypt.checkpw("mi_contraseña", hashedPassword);
        
        // Condicion ternaria dentro de un sout
        System.out.println(match ? "Contraseña válida" : "Contraseña incorrecta");
    }
}
```

Desde el lado servidor con **PHP**.

```php
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
```
