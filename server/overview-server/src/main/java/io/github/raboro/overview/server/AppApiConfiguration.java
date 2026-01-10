package io.github.raboro.overview.server;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
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
        final OverviewApp[] apps = {
                new OverviewApp("voucher")
        };
        for (var app : apps) {
            final var appUrl = baseUrl + app.name();
            LOG.info("Register app: {} under URL: {}", app.name(), appUrl);
            configurer.addPathPrefix(
                    appUrl,
                    HandlerTypePredicate.forBasePackage(BASE_PACKAGE + app.name())
            );
        }
    }
}
