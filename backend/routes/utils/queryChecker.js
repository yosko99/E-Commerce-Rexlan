const queryChecker = (queryParam) => {
    if (queryParam !== undefined) {
        if (typeof queryParam === 'string') {
            return { $in: [queryParam] };
        } else {
            return { $in: queryParam };
        }
    }

    return;
}

module.exports = queryChecker;
  