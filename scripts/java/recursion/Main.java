class Main {
    static int number = 0;
    public static void main(String[] args) {
        recursion();
    }

    static void recursion() {
        number += 1;
        if (number <= 5) {
            System.out.println("Hello recursion " + number);
            recursion();
        }
    }
}