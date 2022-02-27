package com.example.Wedfest.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Wedfest.model.Segment;

public interface SegmentRepository extends MongoRepository <Segment,Integer>{

}
