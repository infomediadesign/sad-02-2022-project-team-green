let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('./backend');
let reserve = require('./model/reservation')

chai.should();

chai.use(chaiHttp);
describe('reservation',()=>{
    describe("GET /reservation/reservenow",()=>{
        it("all test cases passed",(done)=>{
            chai.request('http://localhost:8888').get("/reservation/reservenow").end((err,response)=>{
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eq(1);
            done();
            });
        });
        it("wrong URL",(done)=>{
            chai.request('http://localhost:8888').get("/reservation/reserve").end((err,response)=>{
                response.should.have.status(404);
            done();
        });
    });
    });
    describe("post /reservation/reservenow",()=>{
        it("all test cases passed",(done)=>{
            const reserv ={
                roomNumber:102,
                roomid:"62a384f00e8c280b9ff49735",
                userid:123,
                checkin:"Jun 19th 2022, Sunday",
                checkout:"Jun 21th 2022, Tuesday",
                totalpayment:80,
                totaldays:2,
                status:"reserved"
            };
            chai.request('http://localhost:8888').post("/reservation/reservenow").send(reserv).end((err,response)=>{
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body['reservations'].should.have.nested.property('roomNumber').eq(102);
                response.body['reservations'].should.have.nested.property('roomid').eq("62a384f00e8c280b9ff49735");
                response.body['reservations'].should.have.nested.property('userid').eq(123);
                response.body['reservations'].should.have.nested.property('checkin').eq("Jun 19th 2022, Sunday");
                response.body['reservations'].should.have.nested.property('checkout').eq("Jun 21th 2022, Tuesday");
                response.body['reservations'].should.have.nested.property('totalpayment').eq(80);
                response.body['reservations'].should.have.nested.property('totaldays').eq(2);
                response.body['reservations'].should.have.nested.property('status').eq("reserved");               
                done();
            });
        });
    });
});