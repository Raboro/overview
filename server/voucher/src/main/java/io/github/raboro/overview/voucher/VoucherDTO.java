package io.github.raboro.overview.voucher;

import java.util.Date;

public record VoucherDTO(long id, String name, float value, Date expirationDate, boolean redeemed) {
}