// netlify-functions/save-number.js
exports.handler = async function(event, context) {
    const phoneNumber = JSON.parse(event.body).phoneNumber;
    // Replace this with your logic to save the number, e.g., save to a database or send an email

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success' })
    };
};
