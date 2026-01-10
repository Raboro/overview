package io.github.raboro.overview.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "io.github.raboro.overview")
public class OverviewApplication {
    static void main(String[] args) {
        SpringApplication.run(OverviewApplication.class, args);
    }
}
