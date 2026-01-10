package io.github.raboro.overview.voucher;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("voucher")
public class VoucherController {

    @GetMapping
    public VoucherDTO[] getAll() {
        return new VoucherDTO[0];
    }
}
