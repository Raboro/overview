package io.github.raboro.overview.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "io.github.raboro.overview")
@EnableJpaRepositories(basePackages = "io.github.raboro.overview")
@EntityScan(basePackages = "io.github.raboro.overview")
public class OverviewApplication {
    static void main(String[] args) {
        SpringApplication.run(OverviewApplication.class, args);
    }
}
