package org.rspf.backend.controller;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.Statement;

@RestController
@RequestMapping("/api/tables")
public class TableController {

    @PersistenceContext
    private EntityManager entityManager;

    //Create new table

    @PostMapping("/create")
    @Transactional

    public ResponseEntity<String> CreateTable(@RequestParam String tableName){
        try{
            //Ensure The table is safe
            tableName = tableName.replaceAll("[^a-zA-z0-9]", "");

            //Direct JDBC Connection
            entityManager.unwrap(Connection.class).createStatement().executeUpdate(
                    "Create TABLE IF NOT EXIST " + tableName + " ("
                    + "id SERIAL PRIMARY KEY, "
                    + "name VARCHAR(255), "
                    + "price NUMERIC, "
                    + "quantity INTEGER, "
                    + "vendor VARCHAR(255))"
            );
            return ResponseEntity.ok("Table " + tableName+ " created");
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error Creating this table: " + e.getMessage());
        }
    }
}
