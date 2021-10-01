// Gets the followed company ids from local storage.
export const getFollowedCompanyIds = () => {
  const followedCompanyIds = localStorage.getItem('followedCompanies')
    ? JSON.parse(localStorage.getItem('followedCompanies'))
    : [];

  return followedCompanyIds;
};

// Saves company Ids to local storage.
export const followCompanyId = (companyIdArr) => {
  if (companyIdArr.length) {
    localStorage.setItem('followedCompanies', JSON.stringify(companyIdArr));
  } else {
    localStorage.removeItem('followedCompanies');
  }
};

// Will remove a company from saved companies local storage based on the company ID.
export const removeCompanyId = (companyId) => {
  const followedCompanyIds = localStorage.getItem('followedCompanies')
    ? JSON.parse(localStorage.getItem('followedCompanies'))
    : null;

  if (!followedCompanyIds) {
    return false;
  }

  const updatedFollowedCompanyIds = followedCompanyIds?.filter((followedCompanyId) => followedCompanyId !== companyId);
  localStorage.setItem('followedCompanies', JSON.stringify(updatedFollowedCompanyIds));

  return true;
};