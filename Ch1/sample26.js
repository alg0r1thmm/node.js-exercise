function f2() {
    console.log('this is f2 start');
    throw new Error('Error!');
    console.log('this iss f2 end');
}

function f1() {
    console.log('this is f1 start');
    try {
        f2();
    }
    catch(e) {
        console.log(e);
    }
    console.log('this is f1 end');
}

f1();