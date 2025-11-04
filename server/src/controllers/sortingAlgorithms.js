export class SortingAlgorithms {
  static comparisons = 0;
  static resetComparisons() { this.comparisons = 0; }

  static mergeSort(arr, compareFunc) {
    this.resetComparisons();
    return this._mergeSortRecursive([...arr], compareFunc);
  }

  static _mergeSortRecursive(arr, compareFunc) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = this._mergeSortRecursive(arr.slice(0, mid), compareFunc);
    const right = this._mergeSortRecursive(arr.slice(mid), compareFunc);
    return this._merge(left, right, compareFunc);
  }

  static _merge(left, right, compareFunc) {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      this.comparisons++;
      if (compareFunc(left[i], right[j]) <= 0) result.push(left[i++]);
      else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  static quickSort(arr, compareFunc) {
    this.resetComparisons();
    return this._quickSortRecursive([...arr], compareFunc);
  }

  static _quickSortRecursive(arr, compareFunc) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [], equal = [], right = [];
    for (let element of arr) {
      this.comparisons++;
      const cmp = compareFunc(element, pivot);
      if (cmp < 0) left.push(element);
      else if (cmp > 0) right.push(element);
      else equal.push(element);
    }
    return [...this._quickSortRecursive(left, compareFunc), ...equal, ...this._quickSortRecursive(right, compareFunc)];
  }

  static bubbleSort(arr, compareFunc) {
    this.resetComparisons();
    const result = [...arr];
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - i - 1; j++) {
        this.comparisons++;
        if (compareFunc(result[j], result[j + 1]) > 0) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }
    return result;
  }

  static insertionSort(arr, compareFunc) {
    this.resetComparisons();
    const result = [...arr];
    for (let i = 1; i < result.length; i++) {
      let key = result[i];
      let j = i - 1;
      while (j >= 0) {
        this.comparisons++;
        if (compareFunc(result[j], key) > 0) {
          result[j + 1] = result[j];
          j--;
        } else break;
      }
      result[j + 1] = key;
    }
    return result;
  }

  static binarySearch(arr, targetId, idField = 'studentId') {
    const sortedArr = [...arr].sort((a, b) => a[idField].localeCompare(b[idField]));
    let left = 0, right = sortedArr.length - 1, comparisons = 0;
    while (left <= right) {
      comparisons++;
      const mid = Math.floor((left + right) / 2);
      if (sortedArr[mid][idField] === targetId) return { student: sortedArr[mid], comparisons };
      if (sortedArr[mid][idField] < targetId) left = mid + 1;
      else right = mid - 1;
    }
    return { student: null, comparisons };
  }
}
