/**
 * Created by VM510L on 2017/7/30.
 */
var expect = chai.expect;

var baseInput0='-5';var baseOutput0=-5;
var baseInput1='(-5)';var baseOutput1=-5;
var baseInput2='(-5';var baseOutput2='Error: ) expected!';

var addInput0='2+5';var addOutput0=7;
var addInput1='2+';var addOutput1='Error: bad token!';
var addInput2='2+-5';var addOutput2=-3;

var minusInput0='5-1';var minusOutput0=4;
var minusInput1='5-';var minusOutput1='Error: bad token!';
var minusInput2='5-+2';var minusOutput2='Error: bad token!';

var multiplyInput0='5*2';var multiplyOutput0=10;
var multiplyInput1='-5*2';var multiplyOutput1=-10;
var multiplyInput2='(-5)*2';var multiplyOutput2=-10;
var multiplyInput3='2*-5';var multiplyOutput3='Error: bad token!';

var divideInput0='5/2';var divideOutput0=2.5;
var divideInput1='5/0';var divideOutput1='Error: divided by zero!';
var divideInput2='4%2';var divideOutput2=0;
var divideInput3='4%0';var divideOutput3='Error: divided by zero!';

var complexInput0='(11*12/(1+(1/2)))+((5*(6-4))*31)';var complexOutput0=398;
var complexInput1= '9+(222%77)*7*8-(3*3*33)%23';var complexOutput1=3796;




describe('Calculator', function(){

    describe('#base 0', function(){

        it(' should return the value when found', function(){
            expect(parse(baseInput0)).to.be.equal(baseOutput0);
        });
    });

    describe('#base 1', function(){

        it(' should return the value when found', function(){
            expect(parse(baseInput1)).to.be.equal(baseOutput1);
        });
    });

    describe('#base 2', function(){

        it(' should return the value when found', function(){
            expect(parse(baseInput2)).to.be.equal(baseOutput2);
        });
    });

    describe('#add 0', function(){

        it(' should return the value when found', function(){
            expect(parse(addInput0)).to.be.equal(addOutput0);
        });
    });

    describe('#add 1', function(){

        it(' should return the value when found', function(){
            expect(parse(addInput1)).to.be.equal(addOutput1);
        });
    });

    describe('#add 2', function(){

        it(' should return the value when found', function(){
            expect(parse(addInput2)).to.be.equal(addOutput2);
        });
    });

    describe('#minus 0', function(){

        it(' should return the value when found', function(){
            expect(parse(minusInput0)).to.be.equal(minusOutput0);
        });
    });

    describe('#minus 1', function(){

        it(' should return the value when found', function(){
            expect(parse(minusInput1)).to.be.equal(minusOutput1);
        });
    });

    describe('#minus 2', function(){

        it(' should return the value when found', function(){
            expect(parse(minusInput2)).to.be.equal(minusOutput2);
        });
    });


    describe('#multiply 0', function(){

        it(' should return the value when found', function(){
            expect(parse(multiplyInput0)).to.be.equal(multiplyOutput0);
        });
    });

    describe('#multiply 1', function(){

        it(' should return the value when found', function(){
            expect(parse(multiplyInput1)).to.be.equal(multiplyOutput1);
        });
    });

    describe('#multiply 2', function(){

        it(' should return the value when found', function(){
            expect(parse(multiplyInput2)).to.be.equal(multiplyOutput2);
        });
    });

    describe('#multiply 3', function(){

        it(' should return the value when found', function(){
            expect(parse(multiplyInput3)).to.be.equal(multiplyOutput3);
        });
    });

    describe('#divide 0', function(){

        it(' should return the value when found', function(){
            expect(parse(divideInput0)).to.be.equal(divideOutput0);
        });
    });

    describe('#divide 1', function(){

        it(' should return the value when found', function(){
            expect(parse(divideInput1)).to.be.equal(divideOutput1);
        });
    });

    describe('#divide 2', function(){

        it(' should return the value when found', function(){
            expect(parse(divideInput2)).to.be.equal(divideOutput2);
        });
    });

    describe('#divide 3', function(){

        it(' should return the value when found', function(){
            expect(parse(divideInput3)).to.be.equal(divideOutput3);
        });
    });

    describe('#complex 0', function(){

        it(' should return the value when found', function(){
            expect(parse(complexInput0)).to.be.equal(complexOutput0);
        });
    });

    describe('#complex 1', function(){

        it(' should return the value when found', function(){
            expect(parse(complexInput1)).to.be.equal(complexOutput1);
        });
    });


})


