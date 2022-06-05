const express = require('express');
const underscore = require('underscore')
const router = express.Router();
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')
const lodash = require('lodash')


router.get('/test-me', function (req, res) {
    let names = [ 'Hariom', 'Arpit', 'Akash', 'Sabiha']
    //Module 1 members
    logger.printMessage('thorium')
    console.log(logger.url)
    logger.printWelcomeMessage()

    //Module 2 functions
    helper.printCurrentDate()
    helper.printCurrentMonth()
    helper.printBatchInfo()

    //Module 3 functions
    formatter.trim()
    formatter.changeToUpperCase()
    formatter.changetoLowerCase()

    //Lodash functions
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let subArrays = lodash.chunk(months, 3)
    console.log('Chunks of months: ', subArrays)
    
    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let lastNumbers = lodash.tail(oddNumbers)
    console.log('Last 9 odd numbers: ',lastNumbers)

    let arr1 = [1, 2, 3]
    let arr2 = [2, 3, 4, 4]
    let arr3 = [4, 5]
    let arr4 = [4, 6, 4]
    let arr5 = [5, 8]
    console.log('Merged array with unique values: ',lodash.union(arr1, arr2, arr3, arr4, arr5))

    let movie1 = ['horror', 'The Shining']
    let movie2 = ['drama','Titanic']
    let movie3 = ['thriller','Shutter Island']
    let movie4 = ['fantasy','Pans Labyrinth']
    let movieObject = lodash.fromPairs([movie1, movie2, movie3, movie4])
    console.log('Movies object: ', movieObject)
    res.send('My first ever api of the week!')
});


router.get('/hello', function (req, res) {
    
    res.send('My first ever api of the week!')
});

module.exports = router;




constexpress = require('express');
constrouter = express.Router();


//Q 1
router.get('/movies', function(req, res) {
    let array1 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    
    console.log(array1);
    res.send(array1);
 
})

//Q 2
router.get('/movies/:indexNumber', function(req, res){
    let array2 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    leti = req.params.indexNumber
    
console.log(array2[i]);
    res.send(array2[i]);
 
})

//Q 3
router.get('/movie/:indexNumber', function(req, res){
    let array3 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    leti = req.params.indexNumber

    if(i<array3.length){
        res.send(array3[i]);
    }
    else{
        res.send("Invalid index!!!");
    }
})


//Q 4
router.get('/films', function(req, res){
    let array4 = [ {
        "id":1,
        "name":"The Shining"
       }, {
        "id":2,
        "name":"Incendies"
       }, {
        "id":3,
        "name":"Rang de Basanti"
       }, {
        "id":4,
        "name":"Finding Nemo"
       }]

       console.log(array4);
       res.send(array4);
})

//Q 5
router.get('/films/:filmId', function(req, res){
    let array5 = [ {
        "id":1,
        "name":"The Shining"
       }, {
        "id":2,
        "name":"Incendies"
       }, {
        "id":3,
        "name":"Rang de Basanti"
       }, {
        "id":4,
        "name":"Finding Nemo"
       }]

       letp = 0; 

       for(leti=0; i<array5.length; i++){
           if(req.params.filmId == array5[i].id){
            res.send(array5[i]);
            p = 1; 
            break;
           }
       }
       
       if(p === 0 ){
           res.send("No movie exists with this id");
       }
       
})

module.exports = router;


