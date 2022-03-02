var schema = {
    _id: {
        type: "ObjectId",
    },
    name: {
        type: "String",
    },
    description: {
        type: "String",
    },
    ingredients: [{
        type: "String",
    }],
    preparationTime: {
        type: "Number",
    },
    steps: [{
        type: "String",
    }],
}
export default schema
