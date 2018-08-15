const buildQuery = (values) => {
    var regexp = new RegExp(".*" + values.cardname + ".*", 'i');
    let query = {
        name: {$regex : regexp},
        setCode: {$regex: ".*" + values.set + ".*"},
        supertype: {$in: values.supertypes },
        $or: [ { types: { $in: values.types } }, { types: { $exists: false } } ]
    };

    return query;
}

export default buildQuery;
