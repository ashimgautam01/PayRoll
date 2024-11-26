class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
        stack
    ) {
        this.statusCode=statusCode,
        this.message=message,
        this.errors=errors,
        this.status=false,
        this.stack=stack
    }
}

export default ApiError