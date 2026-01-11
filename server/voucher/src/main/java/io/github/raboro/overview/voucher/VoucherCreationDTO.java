package io.github.raboro.overview.voucher;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

public record VoucherCreationDTO(
        @NotBlank
        String name,
        @Min(0)
        float value,
        @NotNull
        Date expiratonDate,
        boolean redeemed
) {
}