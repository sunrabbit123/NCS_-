const Token = require('./token');

const decodeCookie = async (req) => {//Decode cookie
    const accessToken = req.cookies.access_token; //accessToken 에 cookies.access_token 의 값을 담는다
    const token = Token.decodedToken(accessToken);//token 에 decodedToken을 이용하여 accessToken의 값을 넣는다.
    return token;
};

const findAccount_idAtCookie = async (req) => {
    const accessToken = req.cookies.access_token; //accessToken 에 cookies.access_token 의 값을 담는다
    const token = await Token.decodedToken(accessToken); //token 에 decodedToken을 이용하여 accessToken의 값을 넣는다. (await를 이용해 완료까지 기다린다.)
    console.log("token");
    console.log(token);
    return token._id; //토큰의 id값을 리턴

}
module.exports = {
    decodeCookie,
    findAccount_idAtCookie
};
