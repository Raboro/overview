package io.github.raboro.overview.voucher;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Voucher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, name = "value_of_voucher")
    private float value;

    @Column(name = "expiration_date", nullable = false)
    private LocalDate expirationDate;

    @Column(nullable = false)
    private boolean redeemed;

    protected Voucher() {
    }

    public Voucher(long id, String name, Float value, LocalDate expirationDate, boolean redeemed) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.expirationDate = expirationDate;
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

    public LocalDate getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
    }

    public boolean isRedeemed() {
        return redeemed;
    }

    public void setRedeemed(boolean redeemed) {
        this.redeemed = redeemed;
    }
}
