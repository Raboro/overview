package io.github.raboro.overview.voucher;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
class VoucherService {

    private final VoucherRepository repository;

    VoucherService(VoucherRepository repository) {
        this.repository = repository;
    }

    List<VoucherDTO> getAll() {
        final List<VoucherDTO> dtos = new ArrayList<>();
        repository.findAll().forEach(voucher -> dtos.add(
                        new VoucherDTO(
                                voucher.getId(),
                                voucher.getName(),
                                voucher.getValue(),
                                voucher.getExpirationDate(),
                                voucher.isRedeemed()
                        )
                )
        );
        return dtos;
    }

    long createOne(VoucherCreationDTO creationDTO) {
        Voucher voucher = new Voucher();
        voucher.setName(creationDTO.name());
        voucher.setValue(creationDTO.value());
        voucher.setExpirationDate(creationDTO.expirationDate());
        voucher.setRedeemed(creationDTO.redeemed());
        return repository.save(voucher).getId();
    }

    Optional<VoucherDTO> getById(long id) {
        return repository.findById(id).map(voucher -> new VoucherDTO(
                        voucher.getId(),
                        voucher.getName(),
                        voucher.getValue(),
                        voucher.getExpirationDate(),
                        voucher.isRedeemed()
                )
        );
    }

    void deleteById(long id) {
        repository.deleteById(id);
    }

    Optional<VoucherDTO> updateById(long id, VoucherCreationDTO newVoucher) {
        var voucher = repository.findById(id);
        if (voucher.isEmpty()) {
            return Optional.empty();
        }
        var voucherToUpdate = voucher.get();
        voucherToUpdate.setName(newVoucher.name());
        voucherToUpdate.setValue(newVoucher.value());
        voucherToUpdate.setExpirationDate(newVoucher.expirationDate());
        voucherToUpdate.setRedeemed(newVoucher.redeemed());
        var updatedVoucher = repository.save(voucherToUpdate);
        return Optional.of(new VoucherDTO(
                        updatedVoucher.getId(),
                        updatedVoucher.getName(),
                        updatedVoucher.getValue(),
                        updatedVoucher.getExpirationDate(),
                        updatedVoucher.isRedeemed()
                )
        );
    }
}
