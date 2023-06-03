const successResponseBuilder = (data) => {
    return {
        success: true,
        data: data,
    };
};

const errorResponseBuilder = (error, statusCode) => {
    return {
        success: false,
        error: error.message,
    };
};

module.exports = {
    successResponseBuilder,
    errorResponseBuilder
}