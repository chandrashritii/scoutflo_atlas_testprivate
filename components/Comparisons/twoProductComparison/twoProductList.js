import React, { useState, useEffect } from 'react';
import ProductListService from '../../../services/ProductListService';
// import ProductItem from './ProductItem';

function ProductList() {

  const [companyName, setCompanyName] = useState(" ");
  const [companyList, setCompanyList] = useState([{ 'name': '', 'id': '' }]);
  const [isSaved, setIsSaved] = useState(false);
  const [isCleared, setIsCleared] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const response = [
        {id: '1', name: "Company 1"},
        {id: '2', name: "Company 2"},
        {id: '3', name: "Company 3"}
    ]; 
      // await ProductListService.getProductList(); - Fetch api endpoint from services
      const newData = response;
      setCompanyList(newData);
    };
    fetchData();
  }, [])

  const handleChange = (event) => {
    setCompanyName(event.target.value);
  }

  const saveBtn = (e) => {
    e.preventDefault();
    console.log('Company ID', companyList.id);
    console.log('Company Name', companyName);
   
    //saving companyname to session storage
    sessionStorage.setItem("Company1 comparison", companyName);

    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  };


// // Get company name from session storage 
//   const getSessionData = () => {
//     //fetching username from sesstion storage
//     return sessionStorage.getItem("Company name");
//   };


  return (
    <div>
      <select className="form-control" value={companyName} onChange={handleChange}>
        <option value="">Choose Company Name</option>

        {companyList.map(company => (
          <option value={company.name} key={company.id} >{company.name}</option>

        ))
        }

      </select>

      <br />
      <button className="btn btn-primary" onClick={saveBtn}>Save</button>
    </div>
  )
}


export default ProductList;