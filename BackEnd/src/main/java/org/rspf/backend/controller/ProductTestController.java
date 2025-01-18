package org.rspf.backend.controller;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;


@RestController
@RequestMapping("/api/test/products")
public class ProductTestController {

    @Autowired
    private EntityManager entityManager;

    @PostMapping("/create-table")
    @Transactional
    public ResponseEntity<String> createTable() {
        try{
            entityManager.createNativeQuery(
                    "CREATE TABLE IF NOT EXISTS products (" +
                    "id SERIAL PRIMARY KEY, " +
                    "name VARCHAR(255)," +
                    "price NUMERIC," +
                    "quantity INTEGER, " +
                    "vendor VARCHAR(255))"
            ).executeUpdate();

            //Insert Test Data
            entityManager.createNativeQuery(
                    "INSERT INTO products (name, price, quantity, vendor) VALUES " +
                    "('Test Product 1',  10.99, 100, 'Vendor A')," +
                    "('Test Product 2', 5.49, 50, 'Vendor B')," +
                    "('Test Product 3', 5.23, 44, 'Vendor C')," +
                    "('Test Product 4',  1.00, 87, 'Vendor D')," +
                    "('Test Product 5',  0.99, 10, 'Vendor E')"
            ).executeUpdate();
            return ResponseEntity.ok("!!!TEST TABLE CREATED!!! !!!TEST DATA INSERTED!!!");
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error: Table Couldn't be Created: " + e.getMessage());
        }
    }

    @GetMapping("/delete-table")
    public ResponseEntity<String> TableDeleteTimer() {
        Executors.newSingleThreadScheduledExecutor().schedule(() -> {
            try {
                deleteTable();
            } catch (Exception e) {
                System.err.println("Error during table deletion: " + e.getMessage());
            }
        }, 10, TimeUnit.SECONDS);
        return ResponseEntity.ok("The table will be deleted in 10 seconds...");
    }


    @Transactional
    public void deleteTable(){
        try{
            entityManager.createNativeQuery("DROP TABLE IF EXISTS products").executeUpdate();
            System.out.println(" Table 'products' deleted successfully");
        }catch(Exception e){
            System.err.println("Error: Table couldn't be deleted: "+ e.getMessage());
        }
    }

}
