import userServices from '../services/userServices.js';

const testController = (req, res) => {
    const response = userServices.testService();
    res.status(200).json(response);
}

export default {
    testController
};

