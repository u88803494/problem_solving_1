const getPagination = (offset, limit, total) => {
  const totalPage = Math.ceil(total / limit);

  return ({
    currentPage: 1,
    totalPage,
    renderPages: [],
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
// { currentPage: 5, totalPage: 7, renderPages: [2,3,5,6,7] }

console.log(getPagination(25, 5, 33));
// { currentPage: 6, totalPage: 7, renderPages: [2,3,5,6,7] }

console.log(getPagination(30, 5, 33));
// { currentPage: 7, totalPage: 7, renderPages: [2,3,5,6,7] }
