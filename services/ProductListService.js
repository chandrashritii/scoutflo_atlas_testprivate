/* eslint-disable import/no-anonymous-default-export */
import UrlService from "./UrlService";
import HttpService from "./HttpService";
import React, { Component } from 'react';

class ProductListService extends React.Component  {
  async getProductList() {
    const url = UrlService.getProductList();
    try {
      const response = await HttpService.get(url);
      return response.data;
    } catch (error) {
      console.error("Not able to fetch the product list");
    }
  }
}

export default new ProductListService();