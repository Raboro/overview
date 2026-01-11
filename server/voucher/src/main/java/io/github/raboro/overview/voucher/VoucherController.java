package io.github.raboro.overview.voucher;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("voucher")
public class VoucherController {

    private final VoucherService voucherService;

    public VoucherController(VoucherService voucherService) {
        this.voucherService = voucherService;
    }

    @GetMapping
    public ResponseEntity<List<VoucherDTO>> getAll() {
        return ResponseEntity.ok(voucherService.getAll());
    }

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody @Valid VoucherCreationDTO voucher) {
        return ResponseEntity.accepted().body(voucherService.createOne(voucher));
    }

    @GetMapping("{voucherId}")
    public ResponseEntity<VoucherDTO> getById(@PathVariable("voucherId") long id) {
        var voucher = voucherService.getById(id);
        return voucher.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("{voucherId}")
    public ResponseEntity<Void> deleteById(@PathVariable("voucherId") long id) {
        voucherService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{voucherId}")
    public ResponseEntity<VoucherDTO> updateById(@PathVariable("voucherId") long id,
                                                 @RequestBody @Valid VoucherCreationDTO newVoucher) {
        var voucher = voucherService.updateById(id, newVoucher);
        return voucher.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
