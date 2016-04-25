$(document).ready(function(){

	// событие на отправку ответа на вопрос викторины

	$('.quiz').click(function(){

        var answer_div = $(this);
		$.get('/ajax/quiz_answer.php?ID_VOPROS='+$(this).attr('data-vopros')+'&ID_ANSWER='+$(this).attr('data-question'), function(data) {
			var response=$.parseJSON(data);

			console.log(response);
			if(response.cur == 'N')
			{
				answer_div.removeClass('quiz').addClass('no');
				// нужно подсветить правильный ответ
				$("div.quiz[data-question='" + response.right + "']").addClass('yes');
			}

			if(response.cur == 'Y')
			{
				answer_div.removeClass('quiz').addClass('yes');
			}

			// пояснение к правильному ответу на вопрос
			$('#question_info').text(response.question_info);

		});

	});


	// отправка ответа на вопрос опроса
	$('.opros').click(function(){
        var answer_div = $(this);
		$.get('/ajax/opros_answer.php?ID_OPROS='+$('input[name=opros]').val()+'&ID_ANSWER='+$(this).val(), function(data) {
			var response=$.parseJSON(data);
			$('div#result').html(response.stat);
			$('div#vsego').html(response.vsego);
		});

	});

	// отправка ответа на вопрос голосования
	$('.golos').click(function(){
        var answer_div = $(this);
		$.get('/ajax/golos_answer.php?ID_GOLOS='+$('input[name=golos]').val()+'&ID_ANSWER='+$(this).val(), function(data) {
			var response=$.parseJSON(data);
			$('div#result').html(response.stat);
			$('div#vsego').html(response.vsego);
		});

	});




	// END ODY custom functions

	$('.helper__dropdownLink').click(function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$(this).parent().find('.helper__dropdownText').toggleClass('open');
	});

});