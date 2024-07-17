package com.example.purchase.controller;

import com.example.purchase.model.Customer;
import com.example.purchase.model.Lot;
import com.example.purchase.repository.CustomerRepository;
import com.example.purchase.repository.LotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PurchaseController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private LotRepository lotRepository;

    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @PostMapping("/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @PutMapping("/customers/{id}")
    public Customer updateCustomer(@PathVariable String id, @RequestBody Customer customerDetails) {
        Customer customer = customerRepository.findById(id).orElseThrow();
        customer.setCustomerName(customerDetails.getCustomerName());
        customer.setCustomerInn(customerDetails.getCustomerInn());
        customer.setCustomerKpp(customerDetails.getCustomerKpp());
        customer.setCustomerLegalAddress(customerDetails.getCustomerLegalAddress());
        customer.setCustomerPostalAddress(customerDetails.getCustomerPostalAddress());
        customer.setCustomerEmail(customerDetails.getCustomerEmail());
        customer.setCustomerCodeMain(customerDetails.getCustomerCodeMain());
        customer.setOrganization(customerDetails.isOrganization());
        customer.setPerson(customerDetails.isPerson());
        return customerRepository.save(customer);
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable String id) {
        customerRepository.deleteById(id);
    }

    @GetMapping("/lots")
    public List<Lot> getAllLots() {
        return lotRepository.findAll();
    }

    @PostMapping("/lots")
    public Lot createLot(@RequestBody Lot lot) {
        return lotRepository.save(lot);
    }

    @PutMapping("/lots/{id}")
    public Lot updateLot(@PathVariable String id, @RequestBody Lot lotDetails) {
        Lot lot = lotRepository.findById(id).orElseThrow();
        lot.setLotName(lotDetails.getLotName());
        lot.setCustomerCode(lotDetails.getCustomerCode());
        lot.setPrice(lotDetails.getPrice());
        lot.setCurrencyCode(lotDetails.getCurrencyCode());
        lot.setNdsRate(lotDetails.getNdsRate());
        lot.setPlaceDelivery(lotDetails.getPlaceDelivery());
        lot.setDateDelivery(lotDetails.getDateDelivery());
        return lotRepository.save(lot);
    }

    @DeleteMapping("/lots/{id}")
    public void deleteLot(@PathVariable String id) {
        lotRepository.deleteById(id);
    }
}
