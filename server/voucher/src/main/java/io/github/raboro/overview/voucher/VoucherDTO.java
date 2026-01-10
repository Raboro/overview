package io.github.raboro.overview.voucher;

import java.util.Date;

public class VoucherDTO {
    long id;
    String name;
    float value;
    Date expiratonDate;
    boolean redeemed;

    public VoucherDTO(long id, String name, float value, Date expiratonDate, boolean redeemed) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.expiratonDate = expiratonDate;
        this.redeemed = redeemed;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

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
