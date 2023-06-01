package com.clamed.lab_pharmacy;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
		info = @Info(
				title = "LABPharmacy",
				version = "1.0",
				description = "API interna para gestão de produtos, usuários e vendas",
				contact = @Contact(
						name = "Equipe de desenvolvimento: Felipe Borba, Julio Cesar, Marlon Rech, Michael Nascimento",

						url = "https://labpharmacy.com"
				)
		)
)
public class LabPharmacyApplication {

	public static void main(String[] args) {
		SpringApplication.run(LabPharmacyApplication.class, args);
	}

}
