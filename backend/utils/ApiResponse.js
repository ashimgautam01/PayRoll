class ApiResponse{
    constructor(
        statusCode,
        message,
        data
    ){
        this.statusCode=statusCode,
        this.message=message,
        this.data=data,
        this.status=true
    }
}

export default ApiResponse