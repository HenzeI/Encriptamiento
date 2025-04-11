import "https://cdn.jsdelivr.net/npm/bcryptjs@3.0.2/umd/index.min.js"

// Encriptar
const password = 'miPassword';
const saltRounds = 10; // Evita que dos contraseñas iguales generen el mismo hash

// Metodo hash de la libreria bcrypt que pide por parametro una contraseña, el valor saltRounds
// que es recomendable que siempre sea 10 y una callback que devuelve un error y la contraseña
// encriptada por parametro
bcrypt.hash(password, saltRounds, function(err, hash) {
    console.log('Contraseña cifrada:', hash);

    // Metodo que compara de la libreria bcrypt que compara que dos contraseñas coindicen, muy util para los
    // inicio de sesion con la base de datos
    bcrypt.compare('miPassword', hash, function(err, result) {
        console.log('¿Coincide?', result); // result devuelve un booleando si las contraseñas coinciden o no
    });
});