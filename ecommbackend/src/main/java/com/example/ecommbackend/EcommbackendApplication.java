package com.example.ecommbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.ecommbackend.controller.MainController;

@SpringBootApplication
public class EcommbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommbackendApplication.class, args);
	}

}
