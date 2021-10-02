import { Button } from "@mui/material";
import React, { useContext } from "react";
import { mainApiSearch } from "../utils/API";
import { CompanyDataContext } from "../utils/CompanyDataContext";

export const APIClickable = ({ query, children, ...props }) => {
  const { setData } = useContext(CompanyDataContext);
  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const response = await mainApiSearch(query);
      if (!response.ok) {
        throw new Error('Something went wrong with the search.');
      }

      const jsonData = await response.json();
      const company = jsonData[0];
      const companyData = {
        companyId: company.esg_id,
        companyName: company.company_name,
        exchangeSymbol: company.exchange_symbol,
        stockSymbol: company.stock_symbol,
        environmentGrade: company.environment_grade,
        environmentLevel: company.environment_level,
        socialGrade: company.social_grade,
        socialLevel: company.social_level,
        governanceGrade: company.governance_grade,
        governanceLevel: company.governance_level,
        totalGrade: company.total_grade,
        totalLevel: company.total_level,
        lastProcessingDate: company.last_processing_date,
        environmentScore: company.environment_score,
        socialScore: company.social_score,
        governanceScore: company.governance_score,
        total: company.total,
      };

      setData(companyData);
    } catch (err) {
      console.error(err);
    }
  };

  return <Button onClick={handleClick} {...props}>{children}</Button>
};