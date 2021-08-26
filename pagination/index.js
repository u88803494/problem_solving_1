const getCurrentPage = (limit, offset, total, totalPage) => {
  if (offset < 0) {
    return 1;
  }
  if (offset >= total) {
    return totalPage;
  }
  return Math.ceil((offset + 1) / limit);
}

const getStartPage = (currentPage, displayPageTags, totalPage) => {
  if (currentPage <= Math.ceil(displayPageTags / 2)) {
    return 1;
  }
  if (currentPage >= (totalPage - 2)) {
    return totalPage - displayPageTags + 1;
  }
  return currentPage - Math.floor(displayPageTags / 2);
}

const getPagination = (offset, limit, total) => {
  const displayPageTags = 5;
  const totalPage = Math.ceil(total / limit);

  const currentPage = getCurrentPage(limit, offset, total, totalPage);
  const startPage = getStartPage(currentPage, displayPageTags, totalPage);

  return ({
    currentPage,
    totalPage,
    renderPages: Array.from({ length: displayPageTags }, (_, i) => (startPage + i)),
  })
}

// const { currentPage, totalPage, renderPages } = getPagination(offset, limit, total)

console.log(getPagination(0, 5, 33));
// { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }

console.log(getPagination(5, 5, 33));
// { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }

console.log(getPagination(10, 5, 33));
// { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }

console.log(getPagination(15, 5, 33));
// { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }

console.log(getPagination(20, 5, 33));
// { currentPage: 5, totalPage: 7, renderPages: [3,4,5,6,7] }

console.log(getPagination(25, 5, 33));
// { currentPage: 6, totalPage: 7, renderPages: [3,4,5,6,7] }

console.log(getPagination(30, 5, 33));
// { currentPage: 7, totalPage: 7, renderPages: [3,4,5,6,7] }
