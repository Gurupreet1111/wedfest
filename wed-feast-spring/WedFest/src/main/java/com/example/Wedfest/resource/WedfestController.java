package com.example.Wedfest.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.Wedfest.repository.*;
import com.example.Wedfest.model.*;

@RestController
public class WedfestController {
	@Autowired
	private BusinessNameRepository BusinessNamerepository;
	@PostMapping("/addBusinessname")
	public String saveBusinessname(@RequestBody BusinessName BusinessName) {
		BusinessNamerepository.save(BusinessName);
		return "Added BusinessName with id :"+ BusinessName.getBusinessCategoryID();
	}
	
	@Autowired
	private SegmentRepository Segmentrepository;
	@PostMapping("/addSegment")
	public String saveSegment(@RequestBody Segment segment) {
		Segmentrepository.save(segment);
		return "Added Segment with id :"+ segment.getSegmentID();
	}
	
	@Autowired
	private VendorRepository Vendorrepository;
	@PostMapping("/addVendor")
	public String saveVendor(@RequestBody Vendor vendor) {
		Vendorrepository.save(vendor);
		return "Added Vendor with id :"+ vendor.getVendorID();
	}
	
	@Autowired
	private CatalogRepository Catalogrepository;
	@PostMapping("/addCatalog")
	public String saveCatalog(@RequestBody Catalog catalog) {
		Catalogrepository.save(catalog);
		return "Added Catalog with id :"+ catalog.getCatalogID();
		}
	
}
