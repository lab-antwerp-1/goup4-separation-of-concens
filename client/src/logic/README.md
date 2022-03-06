# Logic

## tableSorter

> `tableSorter` sorts list items inputted by the user according to different sorting parameters.

- Function `export` to handler `sort-list.js`

### reference

```js
/*
table sorter reference

export const sortStrings = (toSort = [], sortType = 'oldest') => {
    const tempArray = [...toSort];
  
    const sortLength = (par1, par2) => {
      return par1.length - par2.length;
    };
  
    const sortCase = (par1, par2) => {
      return par1.localeCompare(par2);
    };
  
    if (sortType === 'newest') {
      return tempArray.reverse();
    }
    if (sortType === 'a') {
      return tempArray.sort(sortCase);
    }
    if (sortType === 'z') {
      return tempArray.sort(sortCase).reverse();
    }
    if (sortType === 'shortest') {
      return tempArray.sort(sortLength);
    }
    if (sortType === 'longest') {
      return tempArray.sort(sortLength).reverse();
    }
    return tempArray;
  };
  */
```
