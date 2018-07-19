// @flow

function sleep(ms: number){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

it('should sleep for x ms', (done)=>{
    let before = Date.now();
    sleep(100).then((()=>{
        expect(Date.now() - before).toBeGreaterThanOrEqual(100);
        done();
    }))
})