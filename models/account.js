const mongoose = require('mongoose');
const crypto = require('crypto');
const {
    generateToken
} = require('../lib/token');

const {
    Schema
} = mongoose;

function hash(password) {
    return crypto
        .createHmac('sha256', process.env.SECRET_KEY)
        .update(password)
        .digest('hex');
}//비밀번호 입력시 해쉬암호화를 실시함

const Account = new Schema({
    userName: String,
    Name: String,
    email: String,
    password: String,
    ID: String,
    nickname: String,
    gender: String,
    Byear: Number,
    Bmonth: Number,
    Bday: Number,
    agency: String,
    // career: String,
    // specializedField: String,
    // area: String,
    // job: String,
    // interestingField: String,
    createAt: {
        type: Date,
        default: Date.now,
    },
});

Account.statics.findByEmailOrID = function ({//이메일 또는 아이디로 계정이 있는지 찾음, req.body로 인자를 받음
    ID,
    email
}) {
    return this.findOne({
        $or: [{
            ID
        }, {
            email
        }]
    });
};

Account.statics.findBy_id = function(id){
    return this.findOne({ _id : id });
};


Account.statics.localRegister = function ({//회원가입, req.body로 인자를 넘겨주면 됨
    ID,
    password,
    Name,
    email,
    nickname = 'None',
    gender = 'None',
    Byear = 0,
    Bmonth = 0,
    Bday = 0,
    Agency = 'None',
}) {
    const account = new this({
        Name: Name,
        email,
        ID,
        password: hash(password),
        nickname,
        gender,
        Byear,
        Bmonth,
        Bday,
        Agency,
    });

    return account.save();
};

Account.methods.validatePassword = function(password) {
    // 함수로 전달받은 password 의 해시값과, 데이터에 담겨있는 해시값과 비교를 합니다.
    const hashed = hash(password);
    return this.password === hashed;
};

Account.methods.generateToken = function () {// 토큰 생성
    const {
        _id,
    } = this;

    return generateToken({
        _id
    }, 'account');
};

module.exports = mongoose.model('Account', Account);