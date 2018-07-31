const buildQuery = (values) => {
    let query = {
        name: {$regex : ".*" + values.cardname + ".*"},
        setCode: {$regex: ".*" + values.set + ".*"},
        supertype: {$in: values.supertypes },
        $or: [ { types: { $in: values.types } }, { types: { $exists: false } } ]
    };

    return query;
}

export default buildQuery;
