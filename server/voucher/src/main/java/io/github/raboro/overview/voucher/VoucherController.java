package io.github.raboro.overview.voucher;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("voucher")
public class VoucherController {

    @GetMapping
    public VoucherDTO[] getAll() {
        return new VoucherDTO[0];
    }

    @PostMapping
    public long create(@RequestBody VoucherCreationDTO voucher) {
        return 0;
    }
}
