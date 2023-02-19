const response = (status_code, data, res) => {
    res.status(status_code).json(  {
        payload: {
            status_code: status_code,
            data: data
        }, 
        pagination: {
            prev: "",
            next: "",
            max: ""
        }
     }
)}

module.exports = response