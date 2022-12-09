$(document).ready(function(){
    $('#start').click(function(){

        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var num3 = $('#num3').val();
        var num4 = $('#num4').val();
        var num5 = $('#num5').val();
        var num6 = $('#num6').val();
        var num7 = $('#num7').val();
        var num8 = $('#num8').val();

        var numD;
        var numE;
        var numF;
        var numG;
        var numB;
        var numC;
        var numA;

        if(num1 != '' && num2 != '' && num3 != '' && num4 != '' && num5 != '' && num6 != '' && num7 != '' && num8 != ''){

            setTimeout(function(){
                $('#h').removeClass('is-light');
                $('#h').text(num1);
            }, 1000);
            setTimeout(function(){
                $('#i').removeClass('is-light');
                $('#i').text(num2);
            }, 2000);
            setTimeout(function(){
                $('#j').removeClass('is-light');
                $('#j').text(num3);
            }, 3000);
            setTimeout(function(){
                $('#k').removeClass('is-light');
                $('#k').text(num4);
            }, 4000);
            setTimeout(function(){
                $('#l').removeClass('is-light');
                $('#l').text(num5);
            }, 5000);
            setTimeout(function(){
                $('#m').removeClass('is-light');
                $('#m').text(num6);
            }, 6000);
            setTimeout(function(){
                $('#n').removeClass('is-light');
                $('#n').text(num7);
            }, 7000);
            setTimeout(function(){
                $('#o').removeClass('is-light');
                $('#o').text(num8);
            }, 8000);


            setTimeout(function(){
                $('#d').removeClass('is-light');
                if(num1 > num2){
                    $('#d').text(num1);
                    numD = num1;
                }else{
                    $('#d').text(num2);
                    numD = num2;
                }
                $('#h').text('β');
                $('#i').text('β');
                $('#h').addClass('is-light');
                $('#i').addClass('is-light');
            }, 10000);
            
            setTimeout(function(){
                $('#b').removeClass('is-light');
                $('#d').addClass('is-light');
                $('#e').addClass('is-light');
                $('#b').text(numD);
                numB = numD;
                $('#d').text('α');
            }, 12000);
            
            setTimeout(function(){
                $('#e').removeClass('is-light');
                if(num3 > num4){
                    $('#e').text(num3);
                    numE = num3;
                }else{
                    $('#e').text(num4);
                    numE = num4;
                }
                $('#j').text('β');
                $('#k').text('β');
                $('#j').addClass('is-light');
                $('#k').addClass('is-light');
            }, 14000);

            setTimeout(function(){
                if(numE < numB){
                    $('#b').text(numE);
                    $('#e').text('α');
                    $('#e').addClass('is-light');
                    numB = numE;
                }else{
                    $('#e').addClass('is-danger');
                    $('#j').addClass('is-danger');
                    $('#k').addClass('is-danger');
                    $('#j').removeClass('is-light');
                    $('#k').removeClass('is-light');
                }
            }, 16000);
            
            setTimeout(function(){
                $('#a').text(numB);
                $('#a').removeClass('is-light');
                $('#b').text('β');
                $('#b').addClass('is-light');
                numA = numB;
             }, 18000);

             setTimeout(function(){
                $('#f').removeClass('is-light');
                if(num5 > num6){
                    $('#f').text(num5);
                    numF = num5;
                }else{
                    $('#f').text(num6);
                    numF = num6;
                }
                $('#l').text('β');
                $('#m').text('β');
                $('#l').addClass('is-light');
                $('#m').addClass('is-light');
            }, 20000);

            setTimeout(function(){
                $('#c').removeClass('is-light');
                $('#f').addClass('is-light');
                $('#g').addClass('is-light');
                $('#c').text(numF);
                numC = numF;
                $('#f').text('α');
            }, 22000);

            setTimeout(function(){
                if(numA > numC){
                    $('#c').addClass('is-danger');
                    $('#g').removeClass('is-light');
                    $('#g').addClass('is-danger');
                    $('#n').addClass('is-danger');
                    $('#o').addClass('is-danger');
                }else{
                    $('#a').text(numC);
                    $('#c').text('β');
                    $('#c').addClass('is-light');
                    $('#g').addClass('is-danger');
                    $('#g').removeClass('is-light');
                    $('#n').addClass('is-danger');
                    $('#o').addClass('is-danger');
                    }
            }, 24000);
             
        }
        else {
        }
    });
});