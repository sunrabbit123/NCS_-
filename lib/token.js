const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET_KEY;

const generateToken = (payload) => // payLoad <- 토큰에 담길 정보들을 모아둘곳 
    jwt.sign(payload, jwtSecret, { //jwt를 만들기 위해서 각각 정보, 시크릿 키 , jwt 관련 설정을 넣어둠
        expiresIn: '7d',
    });//jwt 생성

const decodedToken = (token) => { //decodeToken이라는 변수생성
    try {
        return jwt.verify(token, jwtSecret); // jtw.verify 를 사용하여 decodeToken 이라는 변수에 payLoad를 저장 payLoad에는 User의 id가 저장되어있기 때문에, 그 id를 가지고 DB를 조회한다
    } catch (e) {
        return null;
    }
};//jwt 해석

const jwtMiddleware = async (req, res, next) => {
    const token = req.cookies.access_cookie;
    if (!token) return next();

    req.user = decodedToken(token);
};//jwt 미들웨어

module.exports = {
    jwtMiddleware,
    generateToken,
    decodedToken,
};
