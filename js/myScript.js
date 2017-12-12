
$('#btn').click(
    function () {
        var firstNameValue = $('#firstName').val();
        var lastNameValue = $('#lastName').val();

        var fullname = firstNameValue+' '+lastNameValue;
       $('#fullName').val(fullname);
    }
);

$('#nubmeBbtn').click(
    function () {
        var firstNameValue = Number($('#firstValue').val()) ;
        var lastNameValue = Number($('#secondValue').val()) ;

        var fullname = firstNameValue+lastNameValue;
        $('#result').val(fullname);
    }
);
$('#subBbtn').click(
    function () {
        var firstNameValue = $('#firstValue').val() ;
        var lastNameValue = $('#secondValue').val() ;

        var fullname = firstNameValue-lastNameValue;
        $('#result').val(fullname);
    }
);
$('#mulBbtn').click(
    function () {
        var firstNameValue = $('#firstValue').val() ;
        var lastNameValue = $('#secondValue').val() ;

        var fullname = firstNameValue*lastNameValue;
        $('#result').val(fullname);
    }
);
$('#divBbtn').click(
    function () {
        var firstNameValue = $('#firstValue').val() ;
        var lastNameValue = $('#secondValue').val() ;

        var fullname = firstNameValue/lastNameValue;
        $('#result').val(fullname);
    }
);



// $('#h1').text('Hello world');


// var redbtnVal = document.getElementById('redBtn');
// redbtnVal.onclick = function () {
//     var divonElement = document.getElementById('divOne');
//
//     // divonElement.style.backgroundColor = ' red';
//     divonElement.className = 'class-one';
// };
//
// var redbtnVal = document.getElementById('greenBtn');
// redbtnVal.onclick = function () {
//     var divonElement = document.getElementById('divOne');
//
//     // divonElement.style.backgroundColor = 'green';
//     divonElement.className = 'class-two';
// };
//
// var redbtnVal = document.getElementById('blueBtn');
// redbtnVal.onclick = function () {
//     var divonElement = document.getElementById('divOne');
//
//     // divonElement.style.backgroundColor = 'blue';
//     divonElement.className = 'class-three';
// };
// var redbtnVal = document.getElementById('defaultBtn');
// redbtnVal.onclick = function () {
//     var divonElement = document.getElementById('divOne');
//
//     // divonElement.style.backgroundColor = 'white';
//     divonElement.className = 'my-style';
// };
//
//
//
//
//
//
//
//
//
//
//
//
// var submit = document.getElementById('btn');
//
// submit.onclick = function () {
//   var stringVal =  document.getElementById('stringNumber').value;
//   var endVal = document.getElementById('endingNubmer').value;
//
//   var res = '';
//
//  for(var x=stringVal; x<=endVal; x++ ){
//      // document.write(x+' ');
//      res+=x;
//  }
//  document.getElementById('textareaId').value = res;
// };
//
//
//
