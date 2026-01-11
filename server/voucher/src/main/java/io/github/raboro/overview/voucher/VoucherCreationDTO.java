package io.github.raboro.overview.voucher;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

public class VoucherCreationDTO {
    @NotBlank
    String name;
    @Min(0)
    float value;
    @NotNull
    Date expiratonDate;
    boolean redeemed;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public Date getExpiratonDate() {
        return expiratonDate;
    }

    public void setExpiratonDate(Date expiratonDate) {
        this.expiratonDate = expiratonDate;
    }

    public boolean isRedeemed() {
        return redeemed;
    }

    public void setRedeemed(boolean redeemed) {
        this.redeemed = redeemed;
    }
}
