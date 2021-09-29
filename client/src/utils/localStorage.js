export const getFollowedCompanyIds = () => {
  const followedCompanyIds = localStorage.getItem('followedCompanies')
  ? JSON.parse(localStorage.getItem('followedCompanies'))
  : [];

  return followedCompanyIds;
};

export const followCompanyId = (companyIdArr) => {
  console.log(companyIdArr)
  if (companyIdArr.length) {
    localStorage.setItem('followedCompanies', JSON.stringify(companyIdArr));
  } else {
    localStorage.removeItem('followedCompanies');
  }
};

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