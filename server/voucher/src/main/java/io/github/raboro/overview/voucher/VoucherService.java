package io.github.raboro.overview.voucher;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VoucherService {

    private final VoucherRepository repository;

    public VoucherService(VoucherRepository repository) {
        this.repository = repository;
    }

    public List<VoucherDTO> getAll() {
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

    public long createOne(VoucherCreationDTO creationDTO) {
        Voucher voucher = new Voucher();
        voucher.setName(creationDTO.name());
        voucher.setValue(creationDTO.value());
        voucher.setExpirationDate(creationDTO.expiratonDate());
        voucher.setRedeemed(creationDTO.redeemed());
        return repository.save(voucher).getId();
    }

    public Optional<VoucherDTO> getById(long id) {
        return repository.findById(id).map(value -> new VoucherDTO(
                        value.getId(),
                        value.getName(),
                        value.getValue(),
                        value.getExpirationDate(),
                        value.isRedeemed()
                )
        );
    }
}
