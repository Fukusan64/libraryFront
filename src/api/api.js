// import axios from 'axios';

export default {
  getBookList() {
    // return axios.get('/getBookList');的な
    return new Promise((resolve) => {
      setTimeout(() => {
        const books = [];
        for (let i = 0; i < 50; i += 1) {
          books[i] = {
            title: `タイトル${i}`,
            canAction: Math.random() < 0.5,
          };
        }
        resolve(books);
      }, 500);
    });
  },
};
