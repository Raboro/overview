package io.github.raboro.overview.server;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.HandlerTypePredicate;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppApiConfiguration implements WebMvcConfigurer {

    private static final Logger LOG = LoggerFactory.getLogger(AppApiConfiguration.class);
    private static final String BASE_PACKAGE = "io.github.raboro.overview.";

    @Value("${ov.api.base-url}")
    private String baseUrl;

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        LOG.info("Using {} as base URL", baseUrl);
        final String[] appNames = {"voucher"};
        for (var appName : appNames) {
            final var appUrl = baseUrl + appName + "-app";
            LOG.info("Register appName: {} under URL: {}", appName, appUrl);
            configurer.addPathPrefix(
                    appUrl,
                    HandlerTypePredicate.forBasePackage(BASE_PACKAGE + appName)
            );
        }
    }

    @Bean
    public GroupedOpenApi voucherApi() {
        return GroupedOpenApi.builder()
                .group("voucher")
                .packagesToScan(BASE_PACKAGE + "voucher")
                .pathsToMatch("/**")
                .build();
    }
}
