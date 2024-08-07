exports.handler = async function(event) {
    try {
        const { phoneNumber } = JSON.parse(event.body);
        console.log('Received phone number:', phoneNumber);

        if (!phoneNumber) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Phone number is required' }),
            };
        }

        // Log the received data (useful for debugging)
        console.log('Phone number received:', phoneNumber);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Success' }),
        };
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
