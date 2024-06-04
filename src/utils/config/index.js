require('dotenv').config();

module.exports = {
    dbUser : process.env.DB_USER,
    dbName : process.env.DB_NAME,
    dbPort : process.env.DB_PORT,
    dbPassword : process.env.DB_PASSWORD,
    dbHost : process.env.DB_HOST,
    host : process.env.HOST,
    PORT : process.env.PORT,
    secretKey : process.env.SECRET_KEY,
    mail_contacto : process.env.MAIL_CONTACTO,
    mail_cuyen : process.env.MAIL_CUYEN,
    mailPass: process.env.MAIL_PASSWORD,
    Bucket_name :process.env.BUCKET_NAME, 
    aws_access_key_id :process.env.AWS_ACCESS_KEY_ID, 
    aws_access_secret_key : process.env.AWS_SECRET_ACCESS_KEY,
    s3_endpoint : process.env.S3_ENDPOINT,
    openai_api_key : process.env.OPENAI_API_KEY
}
