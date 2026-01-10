package io.github.raboro.overview.voucher;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("voucher")
public class VoucherController {

    @GetMapping
    public ResponseEntity<VoucherDTO[]> getAll() {
        return ResponseEntity.ok(new VoucherDTO[0]);
    }

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody VoucherCreationDTO voucher) {
        return ResponseEntity.accepted().body(0L);
    }

    @GetMapping("{voucherId}")
    public ResponseEntity<VoucherDTO> getById(@PathVariable("voucherId") long id) {
        return ResponseEntity.ok(new VoucherDTO(id, "test", 10.0F, new Date(), false));
    }
}
