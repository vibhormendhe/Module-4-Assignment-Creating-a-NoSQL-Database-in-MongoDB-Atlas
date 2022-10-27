/*
Name: Vibhor Mendhe
ID: 1223523080
Created Date: 10/18/2022
Description: This file is used to create schema for validating the input of documents taken from the client which should be 
in sync with the data types and fields mentioned in this schema. 
*/


import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
  customerName:  String, 
  phoneNumber: Number,
  address:   String,
  loanAmount: Number,
  interest: Number,
  loanTermYears: Number,
  loanType: String,
  description: String,
  createdDate: { type: Date, default: Date.now },
  insertedDate: { type: Date, default: Date.now },
});

const loans = mongoose.model('Loan', loanSchema);