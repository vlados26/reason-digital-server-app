const createResponse = (res, status, data) => {
    res.status(status).send(data);
};

const serverErrorResponse = (res, status, data) => {
    res.status(status).send(data);
};

module.exports = {
    createResponse,
    serverErrorResponse,
};
