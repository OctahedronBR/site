var octachat_html='<div id="octachat"><h5><a href="#"class="octachat">Fale diretamente conosco</a></h5><form id="connect"><fieldset><label for="client">Nome:<input type="text"id="client"name="client"/><br/></label><input type="submit"value="Enviar"/></fieldset></form><div id="log"><ul></ul></div><form id="message"><fieldset><textarea name="message"disabled></textarea></fieldset></form></div>',req=$.get('/chat/check'),connected=false;req.success(function(response){if(response=='True'){$('body').append(octachat_html);var COLAPSED=29,HALF_COLAPSED=88,FULL=275;var chat=$('#octachat'),connect_form=$('#connect'),message_form=$('#message'),logger=$('#log > ul');$("h5").delegate('a','click',function(e){if(chat.height()==HALF_COLAPSED|chat.height()==FULL){chat.animate({height:COLAPSED+'px'})}else if(chat.height()==COLAPSED){if(connected){chat.animate({height:FULL+'px'})}else{chat.animate({height:HALF_COLAPSED+'px'})}}e.preventDefault()});message_form.find('textarea').keydown(function(e){if(e.keyCode==13&&!e.shiftKey){message_form.submit();e.preventDefault()}});$('#connect').submit(function(e){var client_name=connect_form.find('input[name=client]').val(),client_id=client_name+Math.floor(Math.random()*1000),req=$.get('/chat/get_token/'+client_id);connect_form.find('fieldset').append('<span>Conectando</span>');connect_form.find('input[type=submit]').attr('disabled',true);req.success(function(response){var textarea=message_form.find('textarea');channel=new goog.appengine.Channel(response),socket=channel.open();socket.onopen=function(){connect_form.find('fieldset').find('span').remove();connect_form.find('input[name=client]').attr('disabled',true);connect_form.find('input[type=submit]').hide();chat.animate({height:FULL+'px'});connected=true;logger.append('<li>Olá, seja bem-vindo! Aguarde o contato de um dos nossos operadores.</li><hr />');message_form.prepend('<input type="hidden" name="client" value="'+client_id+'">');$.post('/chat/notify_operator',{client_name:client_name,client_id:client_id,message:'Usuário abriu chat...'})};socket.onmessage=function(m){if(chat.height()==COLAPSED){chat.animate({height:FULL+'px'})}textarea.attr('disabled',false).focus();logger.append('<li><strong>Octahedron</strong>: '+m.data+'</li>');logger.parent().animate({scrollTop:logger.height()},0)};socket.onerror=function(){};socket.onclose=function(){}});e.preventDefault()});$('#message').submit(function(e){var req,message_input=message_form.find('textarea'),client_name=connect_form.find('input[name=client]').val(),client_id=message_form.find('input[name=client]').val();if(message_input.val()!=''){logger.append('<li><strong>Você</strong>: '+message_input.val()+'</li>');logger.parent().animate({scrollTop:logger.height()},0);req=$.post('/chat/notify_operator',{client_name:client_name,client_id:client_id,message:message_input.val()});message_input.val('')}req.error(function(response){logger.append('<li clas"error">Não foi possível entregar a mensagem</li>')});e.preventDefault()})}});
