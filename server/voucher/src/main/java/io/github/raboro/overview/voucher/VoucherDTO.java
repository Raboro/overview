package io.github.raboro.overview.voucher;

import java.time.LocalDate;

public record VoucherDTO(long id, String name, float value, LocalDate expirationDate, boolean redeemed) {
}