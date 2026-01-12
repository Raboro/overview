package io.github.raboro.overview.server;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertTrue;

import io.github.raboro.overview.voucher.VoucherCreationDTO;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

class VoucherIT extends OverviewIT {

    @Test
    void creationOfVoucherShouldWork() {
        long id = given()
                .contentType(ContentType.JSON)
                .body(new VoucherCreationDTO("name", 10, LocalDate.now(), false))
                .when()
                .post("/api/overview-server/v1/voucher-app/voucher")
                .then()
                .statusCode(202)
                .extract().body().as(Long.class);

        assertTrue(id > 0);
    }
}
