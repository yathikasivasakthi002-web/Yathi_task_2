import java.util.ArrayList;
import java.util.Scanner;

class Member {

    String name;
    int age;
    String plan;
    String status;

    Member(String name, int age, String plan, String status) {

        this.name = name;
        this.age = age;
        this.plan = plan;
        this.status = status;
    }

    void display() {

        System.out.println("Name   : " + name);
        System.out.println("Age    : " + age);
        System.out.println("Plan   : " + plan);
        System.out.println("Status : " + status);

        System.out.println("------------------------");
    }
}

public class GymCRM {

    public static void main(String[] args) {

        Scanner sc = new
