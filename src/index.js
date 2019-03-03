// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let resultObj = {};

    function makeExchange(cents) {


        if (10000 < Math.abs(cents)) {
            resultObj = {
                "error": "You are rich, my friend! We don't have so much coins for exchange"
            };
        }
        if (Math.abs(cents) === 0) {
            resultObj = {};
        }
        if (Math.abs(cents) <= 10000) {

            const checkObj = {
                H: 50,
                Q: 25,
                D: 10,
                N: 5,
                P: 1
            };

            function check(val, cObj, rObj) {
                if (cents !== 0) {
                    for (let key in cObj) {
                        if (cObj[key] === val) {

                            if (rObj[key] === undefined) {
                                rObj[key] = 1;
                                cents -= val;
                            }
                            if (rObj[key] > 1) {
                                rObj[key] += 1;
                                cents -= val;
                            }
                            return resultObj;

                        } else {

                            if (cObj.H < cents) {
                                rObj["H"] = Math.floor(val / cObj.H);
                                cents = val - rObj.H * cObj.H;
                                check(cents, checkObj, resultObj);
                            }
                            if (cObj.Q < cents && cents < cObj.H) {
                                rObj.Q = Math.floor(val / cObj.Q);
                                cents = val - rObj.Q * cObj.Q;
                                check(cents, checkObj, resultObj);
                            }
                            if (cObj.D < cents && cents < cObj.Q) {
                                rObj.D = Math.floor(val / cObj.D);
                                cents = val - rObj.D * cObj.D;
                                check(cents, checkObj, resultObj);
                            }
                            if (cObj.N < cents && cents < cObj.D) {
                                rObj.N = Math.floor(val / cObj.N);
                                cents = val - rObj.N * cObj.N;
                                check(cents, checkObj, resultObj);
                            }
                            if (cObj.P < cents && cents < cObj.N) {
                                rObj.P = Math.floor(val / cObj.P);
                                cents = val - rObj.P * cObj.P;
                                check(cents, checkObj, resultObj);
                            }
                        }
                    }
                }
            }

            check(cents, checkObj, resultObj);

        }

    };
    makeExchange(currency);
    return resultObj;
}
