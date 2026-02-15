public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            if (i == 7 || i == 13) {
                continue;
            }
            System.out.println(i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 30; i++) {
            if (i % 2 != 0) {
                continue; // გამოტოვე კენტი რიცხვები
            }
            if (i % 8 == 0) {
                break;
            }
            System.out.println(i);
        }
    }
}