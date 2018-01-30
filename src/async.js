export const resolver = () => (
  new Promise((resolve, reject) => (
    resolve('resolved')
  ))
);

export const rejector = () => (
  new Promise((resolve, reject) => (
    reject('rejected')
  ))
);
