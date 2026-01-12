package io.github.raboro.overview.voucher;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoucherRepository extends CrudRepository<Voucher, Long> {
}
