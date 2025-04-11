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